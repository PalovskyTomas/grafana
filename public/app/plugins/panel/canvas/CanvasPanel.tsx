import React, { Component } from 'react';
import { ReplaySubject, Subscription } from 'rxjs';

import { PanelProps } from '@grafana/data';
import { locationService } from '@grafana/runtime/src';
import { PanelContext, PanelContextRoot } from '@grafana/ui';
import { CanvasFrameOptions } from 'app/features/canvas';
import { ElementState } from 'app/features/canvas/runtime/element';
import { Scene } from 'app/features/canvas/runtime/scene';
import { PanelEditEnteredEvent, PanelEditExitedEvent } from 'app/types/events';

import { SetBackground } from './components/SetBackground';
import { InlineEdit } from './editor/inline/InlineEdit';
import { Options } from './panelcfg.gen';
import { AnchorPoint, CanvasTooltipPayload, ConnectionState } from './types';

interface Props extends PanelProps<Options> {}

interface State {
  refresh: number;
  openInlineEdit: boolean;
  openSetBackground: boolean;
  contextMenuAnchorPoint: AnchorPoint;
  moveableAction: boolean;
}

export interface InstanceState {
  scene: Scene;
  selected: ElementState[];
  selectedConnection?: ConnectionState;
}

export interface SelectionAction {
  panel: CanvasPanel;
}

let canvasInstances: CanvasPanel[] = [];
let activeCanvasPanel: CanvasPanel | undefined = undefined;
let isInlineEditOpen = false;
let isSetBackgroundOpen = false;

export const activePanelSubject = new ReplaySubject<SelectionAction>(1);

export class CanvasPanel extends Component<Props, State> {
  declare context: React.ContextType<typeof PanelContextRoot>;
  static contextType = PanelContextRoot;
  panelContext: PanelContext | undefined;

  readonly scene: Scene;
  private subs = new Subscription();
  needsReload = false;
  isEditing = locationService.getSearchObject().editPanel !== undefined;

  //added
  declare backgroundTrueWidth: number;
  declare backgroundTrueHeight: number;



  constructor(props: Props) {
    super(props);
    this.state = {
      refresh: 0,
      openInlineEdit: false,
      openSetBackground: false,
      contextMenuAnchorPoint: { x: 0, y: 0 },
      moveableAction: false,
    };

    // Only the initial options are ever used.
    // later changes are all controlled by the scene
    this.scene = new Scene(
      this.props.options.root,
      this.props.options.inlineEditing,
      this.props.options.showAdvancedTypes,
      this.onUpdateScene,
      this
    );
    this.scene.updateSize(props.width, props.height);
    this.scene.updateData(props.data);
    this.scene.inlineEditingCallback = this.openInlineEdit;
    this.scene.setBackgroundCallback = this.openSetBackground;
    this.scene.tooltipCallback = this.tooltipCallback;
    this.scene.moveableActionCallback = this.moveableActionCallback;

    this.subs.add(
      this.props.eventBus.subscribe(PanelEditEnteredEvent, (evt: PanelEditEnteredEvent) => {
        // Remove current selection when entering edit mode for any panel in dashboard
        this.scene.clearCurrentSelection();
        this.closeInlineEdit();
      })
    );

    this.subs.add(
      this.props.eventBus.subscribe(PanelEditExitedEvent, (evt: PanelEditExitedEvent) => {
        if (this.props.id === evt.payload) {
          this.needsReload = true;
          this.scene.clearCurrentSelection();
        }
      })
    );

  }
  //added
  handleResize = () => {
    //console.log(`Okno má novou šířku ${window.innerWidth} a výšku ${window.innerHeight}`);
    console.log(this);
    this.calculateBackgroundSize();
      let newWidth = this?.backgroundTrueWidth;
      let newHeight = this?.backgroundTrueHeight;
      let originalWidth = this?.props?.options?.backgroundWidth;
      let originalHeight = this?.props?.options?.backgroundHeight;
      let elements = this?.props?.options?.root?.elements;

      //calculate now positions of elements
      elements.forEach(element => {
        if (element.placement && typeof element.placement.xRelativePos === 'number' && typeof element.placement.yRelativePos === 'number') {
            let newPosition = this.calculateNewPosition(element.placement.xRelativePos, element.placement.yRelativePos, originalWidth, originalHeight, newWidth, newHeight);
            element.placement.left = newPosition.xNew;
            element.placement.top = newPosition.yNew;
        }
      });

      //calculate now scale of elements
      elements.forEach(element => {
        if (element.placement && typeof element.placement.xRelativeScale === 'number' && typeof element.placement.yRelativeScale === 'number') {
            let newPosition = this.calculateNewScale(element.placement.xRelativeScale, element.placement.yRelativeScale, originalWidth, originalHeight, newWidth, newHeight);
            element.placement.width = newPosition.xNew;
            element.placement.height = newPosition.yNew;
        }
      });
      this.scene.updateData(this?.props?.data);
      this.scene.updateSize(this?.props?.width, this?.props?.height);
  }

  //added
  calculateBackgroundSize(){
    let panelRatio = this.props.width / this.props.height;
    let backgroundRatio = this.props.options.backgroundWidth / this.props.options.backgroundHeight;
    if(backgroundRatio>=0){
      if(panelRatio>backgroundRatio){
        this.backgroundTrueHeight = this.props.height;
        this.backgroundTrueWidth = this.props.height * backgroundRatio;

      }else{
        this.backgroundTrueWidth = this.props.width;
        this.backgroundTrueHeight = this.props.width / backgroundRatio;
      }
    }else{
      if(panelRatio>backgroundRatio){
        this.backgroundTrueHeight = this.props.height;
        this.backgroundTrueWidth = this.props.height / backgroundRatio;

      }else{
        this.backgroundTrueWidth = this.props.width;
        this.backgroundTrueHeight = this.props.width * backgroundRatio;
      }
    }
    return;
  };

  //added
  calculateRelativePosition(xDisplayed: number, yDisplayed: number): { xOriginal: number, yOriginal: number }{
    let widthRatioPos = this.props.options.backgroundWidth / this.backgroundTrueWidth;
    let heightRatioPos = this.props.options.backgroundHeight / this.backgroundTrueHeight;
    let xOriginal = xDisplayed * widthRatioPos;
    let yOriginal = yDisplayed * heightRatioPos;
    return {xOriginal, yOriginal};
  }

  //added
  calculateRelativeScale(xDisplayed: number, yDisplayed: number): { xOriginal: number, yOriginal: number }{
    let widthRatioScale = this.props.options.backgroundWidth / this.backgroundTrueWidth;
    let heightRatioScale = this.props.options.backgroundHeight / this.backgroundTrueHeight;
    let xOriginal = xDisplayed * widthRatioScale;
    let yOriginal = yDisplayed * heightRatioScale;
    return {xOriginal, yOriginal};
  }

  //added
  calculateNewPosition(xRelativePos: number, yRelativePos: number, originalWidth: number, originalHeight: number, newWidth: number, newHeight: number): { xNew: number, yNew: number } {
    let xNew = (newWidth / originalWidth) * xRelativePos;
    let yNew = (newHeight / originalHeight) * yRelativePos;
    return { xNew, yNew };
  }

  //added
  calculateNewScale(xRelativeScale: number, yRelativeScale: number, originalWidth: number, originalHeight: number, newWidth: number, newHeight: number): { xNew: number, yNew: number } {
    let xNew = (newWidth / originalWidth) * xRelativeScale;
    let yNew = (newHeight / originalHeight) * yRelativeScale;
    return { xNew, yNew };
  }

  // Function to handle the event
  handleEvent = (event: Event) => {
    console.log("canvas_clear", this);

    // Projděte mapu `this.scene.byName`
    this.scene.byName.forEach((value: any, key: any) => {

      value.reset_highlights();
        
    });
    //console.log(this);
    //console.log("this.context.selected",this.context);
    //this.context.selected.reset_highlights();
    //this.scene.updateData(this.props.data);
    
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    activeCanvasPanel = this;
    activePanelSubject.next({ panel: this });

    // Add the event listener when the component mounts
    document.addEventListener('canvas_clear', this.handleEvent);

    this.panelContext = this.context;
    if (this.panelContext.onInstanceStateChange) {
      this.panelContext.onInstanceStateChange({
        scene: this.scene,
        layer: this.scene.root,
      });

      this.subs.add(
        this.scene.selection.subscribe({
          next: (v) => {
            if (v.length) {
              activeCanvasPanel = this;
              activePanelSubject.next({ panel: this });
            }

            canvasInstances.forEach((canvasInstance) => {
              if (canvasInstance !== activeCanvasPanel) {
                canvasInstance.scene.clearCurrentSelection(true);
                canvasInstance.scene.connections.select(undefined);
              }
            });

            this.panelContext?.onInstanceStateChange!({
              scene: this.scene,
              selected: v,
              layer: this.scene.root,
            });
          },
        })
      );

      this.subs.add(
        this.scene.connections.selection.subscribe({
          next: (v) => {
            if (!this.context.instanceState) {
              return;
            }

            this.panelContext?.onInstanceStateChange!({
              scene: this.scene,
              selected: this.context.instanceState.selected,
              selectedConnection: v,
              layer: this.scene.root,
            });

            if (v) {
              activeCanvasPanel = this;
              activePanelSubject.next({ panel: this });
            }

            canvasInstances.forEach((canvasInstance) => {
              if (canvasInstance !== activeCanvasPanel) {
                canvasInstance.scene.clearCurrentSelection(true);
                canvasInstance.scene.connections.select(undefined);
              }
            });

            setTimeout(() => {
              this.forceUpdate();
            });
          },
        })
      );
    }


    //added
    if(this?.props?.options?.isResponsive === true){
      this.calculateBackgroundSize();
      let newWidth = this?.backgroundTrueWidth;
      let newHeight = this?.backgroundTrueHeight;
      let originalWidth = this?.props?.options?.backgroundWidth;
      let originalHeight = this?.props?.options?.backgroundHeight;
      let elements = this?.props?.options?.root?.elements;

      //calculate now positions of elements
      elements.forEach(element => {
        if (element.placement && typeof element.placement.xRelativePos === 'number' && typeof element.placement.yRelativePos === 'number') {
            let newPosition = this.calculateNewPosition(element.placement.xRelativePos, element.placement.yRelativePos, originalWidth, originalHeight, newWidth, newHeight);
            element.placement.left = newPosition.xNew;
            element.placement.top = newPosition.yNew;
        }
      });

      //calculate now scale of elements
      elements.forEach(element => {
        if (element.placement && typeof element.placement.xRelativeScale === 'number' && typeof element.placement.yRelativeScale === 'number') {
            let newPosition = this.calculateNewScale(element.placement.xRelativeScale, element.placement.yRelativeScale, originalWidth, originalHeight, newWidth, newHeight);
            element.placement.width = newPosition.xNew;
            element.placement.height = newPosition.yNew;
        }
      });
      this.scene.updateData(this?.props?.data);
      this.scene.updateSize(this?.props?.width, this?.props?.height);
    }
    canvasInstances.push(this);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    this.scene.subscription.unsubscribe();
    this.subs.unsubscribe();
    isInlineEditOpen = false;
    isSetBackgroundOpen = false;
    canvasInstances = canvasInstances.filter((ci) => ci.props.id !== activeCanvasPanel?.props.id);

    // Remove the event listener when the component unmounts
    document.removeEventListener('canvas_clear', this.handleEvent);

  }

  // NOTE, all changes to the scene flow through this function
  // even the editor gets current state from the same scene instance!
  onUpdateScene = (root: CanvasFrameOptions) => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      root,
    });

    this.setState({ refresh: this.state.refresh + 1 });
    activePanelSubject.next({ panel: this });
  };

  shouldComponentUpdate(nextProps: Props, nextState: State ) {
    const { width, height, data, options } = this.props;
    let changed = false;

    if (width !== nextProps.width || height !== nextProps.height) {
      //added
      if(this?.props?.options?.isResponsive === true){
        this.calculateBackgroundSize();
        //console.log("panel changed!");
        let newWidth = this?.backgroundTrueWidth;
        let newHeight = this?.backgroundTrueHeight;
        let originalWidth = this?.props?.options?.backgroundWidth;
        let originalHeight = this?.props?.options?.backgroundHeight;
        let elements = nextProps?.options?.root?.elements;

        //calculate now positions of elements
        elements.forEach(element => {
          if (element.placement && typeof element.placement.xRelativePos === 'number' && typeof element.placement.yRelativePos === 'number') {
              let newPosition = this.calculateNewPosition(element.placement.xRelativePos, element.placement.yRelativePos, originalWidth, originalHeight, newWidth, newHeight);
              element.placement.left = newPosition.xNew;
              element.placement.top = newPosition.yNew;
          }
        });

        //calculate now scale of elements
        elements.forEach(element => {
          if (element.placement && typeof element.placement.xRelativeScale === 'number' && typeof element.placement.yRelativeScale === 'number') {
              let newPosition = this.calculateNewScale(element.placement.xRelativeScale, element.placement.yRelativeScale, originalWidth, originalHeight, newWidth, newHeight);
              element.placement.width = newPosition.xNew;
              element.placement.height = newPosition.yNew;
          }
        });
      }
      this.scene.updateData(nextProps.data);
      this.scene.updateSize(nextProps.width, nextProps.height);
      changed = true;
    }

    if (data !== nextProps.data && !this.scene.ignoreDataUpdate) {
      this.scene.updateData(nextProps.data);
      changed = true;
    }

    if (options !== nextProps.options && !this.scene.ignoreDataUpdate) {
      this.scene.updateData(nextProps.data);
      changed = true;
      
      //added
      if(this?.props?.options?.isResponsive === true){
        this.calculateBackgroundSize();
        let elements = nextProps?.options?.root?.elements;
        if (elements && elements.length) {
          elements.forEach(element => {
              //calculating relative position of elements
              if (typeof element?.placement?.left === 'number' && typeof element?.placement?.top === 'number') {
                  let relativePos = this.calculateRelativePosition(element.placement.left, element.placement.top);
                  element.placement.xRelativePos = relativePos.xOriginal;
                  element.placement.yRelativePos = relativePos.yOriginal;
              }
              //calculating relative scale of elements
              if (typeof element?.placement?.width === 'number' && typeof element?.placement?.height === 'number') {
                  let relativeScale = this.calculateRelativeScale(element.placement.width, element.placement.height);
                  element.placement.xRelativeScale = relativeScale.xOriginal;
                  element.placement.yRelativeScale = relativeScale.yOriginal;
              }
          });
          // Here elements array has updated positions and scale.
        }
      }

    }

    if (this.state.refresh !== nextState.refresh) {
      changed = true;
    }

    if (this.state.openInlineEdit !== nextState.openInlineEdit) {
      changed = true;
    }

    if (this.state.openSetBackground !== nextState.openSetBackground) {
      changed = true;
    }

    if (this.state.moveableAction !== nextState.moveableAction) {
      changed = true;
    }

    // After editing, the options are valid, but the scene was in a different panel or inline editing mode has changed
    const inlineEditingSwitched = this.props.options.inlineEditing !== nextProps.options.inlineEditing;
    const shouldShowAdvancedTypesSwitched =
      this.props.options.showAdvancedTypes !== nextProps.options.showAdvancedTypes;
    if (this.needsReload || inlineEditingSwitched || shouldShowAdvancedTypesSwitched) {
      if (inlineEditingSwitched) {
        // Replace scene div to prevent selecto instance leaks
        this.scene.revId++;
      }

      this.needsReload = false;
      this.scene.load(nextProps.options.root, nextProps.options.inlineEditing, nextProps.options.showAdvancedTypes);
      this.scene.updateSize(nextProps.width, nextProps.height);
      this.scene.updateData(nextProps.data);
      changed = true;
    }

    //console.log("props", this.props);
    //console.log("state", this.state);
    return changed;
  }

  openInlineEdit = () => {
    console.log("closeInlineEdit");
    if (isInlineEditOpen) {
      this.forceUpdate();
      this.setActivePanel();
      return;
    }

    this.setActivePanel();
    this.setState({ openInlineEdit: true });
    isInlineEditOpen = true;
  };

  openSetBackground = (anchorPoint: AnchorPoint) => {
    //console.log("closeInlineEdit");
    if (isSetBackgroundOpen) {
      this.forceUpdate();
      this.setActivePanel();
      return;
    }

    this.setActivePanel();
    this.setState({ openSetBackground: true });
    this.setState({ contextMenuAnchorPoint: anchorPoint });

    isSetBackgroundOpen = true;
  };

  tooltipCallback = (tooltip: CanvasTooltipPayload | undefined) => {
    //console.log("closeInlineEdit");
    this.scene.tooltip = tooltip;
    this.forceUpdate();
  };

  moveableActionCallback = (updated: boolean) => {
    //console.log("closeInlineEdit");
    this.setState({ moveableAction: updated });
    this.forceUpdate();
  };

  closeInlineEdit = () => {
    //console.log("closeInlineEdit");
    this.setState({ openInlineEdit: false });
    isInlineEditOpen = false;
  };

  closeSetBackground = () => {
    //console.log("closeSetBackground");
    this.setState({ openSetBackground: false });
    isSetBackgroundOpen = false;
  };

  setActivePanel = () => {
    //console.log("closeInlineEdit");
    activeCanvasPanel = this;
    activePanelSubject.next({ panel: this });
  };

  renderInlineEdit = () => {
    //console.log("closeInlineEdit");
    return <InlineEdit onClose={() => this.closeInlineEdit()} id={this.props.id} scene={this.scene} />;
  };

  renderSetBackground = () => {
    //console.log("closeInlineEdit");
    return (
      
      <SetBackground
        onClose={() => this.closeSetBackground()}
        scene={this.scene}
        anchorPoint={this.state.contextMenuAnchorPoint}
      />
    );
  };

  render() {
    return (
      <>
        {this.scene.render()}
        {this.state.openInlineEdit && this.renderInlineEdit()}
        {this.state.openSetBackground && this.renderSetBackground()}
      </>
    );
  }
}
