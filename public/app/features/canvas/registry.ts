import { Registry } from '@grafana/data';

import { CanvasElementItem, CanvasElementOptions } from './element';
import { buttonItem } from './elements/button';
import { droneFrontItem } from './elements/droneFront';
import { droneSideItem } from './elements/droneSide';
import { droneTopItem } from './elements/droneTop';
import { iconItem } from './elements/icon';
import { metricValueItem } from './elements/metricValue';
import { pizzaOvenItem } from './elements/pizzaOven';
import { rectangleItem } from './elements/rectangle';
import { serverItem } from './elements/server/server';
import { textItem } from './elements/text';
import { vematItem } from './elements/vemat';
import { windTurbineItem } from './elements/windTurbine';



export const DEFAULT_CANVAS_ELEMENT_CONFIG: CanvasElementOptions = {
  ...metricValueItem.getNewOptions(),
  placement: { ...metricValueItem.getNewOptions().placement, ...metricValueItem.defaultSize },
  type: metricValueItem.id,
  name: `Element 1`,
};

export const defaultElementItems = [
  metricValueItem, // default for now
  textItem,
  rectangleItem,
  iconItem,
  serverItem,
];

export const advancedElementItems = [buttonItem, windTurbineItem, droneTopItem, droneFrontItem, droneSideItem, pizzaOvenItem, vematItem];

export const canvasElementRegistry = new Registry<CanvasElementItem>(() => [
  ...defaultElementItems,
  ...advancedElementItems,
]);
