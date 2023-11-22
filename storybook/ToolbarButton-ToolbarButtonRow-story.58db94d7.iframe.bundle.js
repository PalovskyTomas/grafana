"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[5097],{"../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js":function(C,O,a){a.d(O,{NF:function(){return g},Zo:function(){return x},ah:function(){return m},pC:function(){return u}});var n=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const u=n.createContext({});function g(c){return f;function f(p){const v=m(p.components);return n.createElement(c,{...p,allComponents:v})}}function m(c){const f=n.useContext(u);return n.useMemo(()=>typeof c=="function"?c(f):{...f,...c},[f,c])}const r={};function x({components:c,children:f,disableParentContext:p}){let v;return p?v=typeof c=="function"?c({}):c||r:v=m(c),n.createElement(u.Provider,{value:v},f)}},"./src/components/ToolbarButton/ToolbarButton.tsx":function(C,O,a){a.d(O,{h:function(){return l}});var n=a("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),u=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),g=a("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/icon.ts"),m=a("../grafana-e2e-selectors/src/selectors/index.ts"),r=a("./src/themes/ThemeContext.tsx"),x=a("./src/themes/mixins.ts"),c=a("./src/components/Button/Button.tsx"),f=a("./src/components/Icon/Icon.tsx"),p=a("./src/components/Tooltip/Tooltip.tsx"),v=Object.defineProperty,y=Object.defineProperties,P=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,R=(e,i,o)=>i in e?v(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,D=(e,i)=>{for(var o in i||(i={}))B.call(i,o)&&R(e,o,i[o]);if(E)for(var o of E(i))I.call(i,o)&&R(e,o,i[o]);return e},s=(e,i)=>y(e,P(i)),d=(e,i)=>{var o={};for(var t in e)B.call(e,t)&&i.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&E)for(var t of E(e))i.indexOf(t)<0&&I.call(e,t)&&(o[t]=e[t]);return o};const l=(0,u.forwardRef)((e,i)=>{var o=e,{tooltip:t,icon:_,iconSize:A,className:K,children:W,imgSrc:N,imgAlt:U,fullWidth:k,isOpen:L,narrow:H,variant:z="default",iconOnly:T,"aria-label":h,isHighlighted:w}=o,F=d(o,["tooltip","icon","iconSize","className","children","imgSrc","imgAlt","fullWidth","isOpen","narrow","variant","iconOnly","aria-label","isHighlighted"]);const S=(0,r.wW)(M),V=(0,n.cx)({[S.button]:!0,[S.buttonFullWidth]:k,[S.narrow]:H},S[z],K),X=(0,n.cx)({[S.content]:!0,[S.contentWithIcon]:!!_,[S.contentWithRightIcon]:L!==void 0}),J=u.createElement("button",D({ref:i,className:V,"aria-label":b(h,t),"aria-expanded":L},F),j(_,A),N&&u.createElement("img",{className:S.img,src:N,alt:U??""}),W&&!T&&u.createElement("div",{className:X},W),L===!1&&u.createElement(f.J,{name:"angle-down"}),L===!0&&u.createElement(f.J,{name:"angle-up"}),w&&u.createElement("div",{className:S.highlight}));return t?u.createElement(p.u,{content:t,placement:"bottom"},J):J});l.displayName="ToolbarButton";function b(e,i){return e||(i?m.wl.components.PageToolbar.item(i):void 0)}function j(e,i){return e?(0,g.Mo)(e)?u.createElement(f.J,{name:e,size:`${i||"lg"}`}):e:null}const M=e=>{const i=(0,c.c9)(e,"primary","solid"),o=(0,c.c9)(e,"destructive","solid"),t=(0,n.iv)({color:e.colors.text.primary,background:e.colors.secondary.main,"&:hover":{color:e.colors.text.primary,background:e.colors.secondary.shade,border:`1px solid ${e.colors.border.medium}`}});return{button:(0,n.iv)({label:"toolbar-button",position:"relative",display:"flex",alignItems:"center",height:e.spacing(e.components.height.md),padding:e.spacing(0,1),borderRadius:e.shape.radius.default,lineHeight:`${e.components.height.md*e.spacing.gridSize-2}px`,fontWeight:e.typography.fontWeightMedium,border:`1px solid ${e.colors.secondary.border}`,whiteSpace:"nowrap",transition:e.transitions.create(["background","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:focus, &:focus-visible":s(D({},(0,x.SV)(e)),{zIndex:1}),"&:focus:not(:focus-visible)":(0,x.Cq)(e),"&:hover":{boxShadow:e.shadows.z1},"&[disabled], &:disabled":{cursor:"not-allowed",opacity:e.colors.action.disabledOpacity,background:e.colors.action.disabledBackground,boxShadow:"none","&:hover":{color:e.colors.text.disabled,background:e.colors.action.disabledBackground,boxShadow:"none"}}}),default:(0,n.iv)({color:e.colors.text.secondary,background:"transparent",border:"1px solid transparent","&:hover":{color:e.colors.text.primary,background:e.colors.background.secondary}}),canvas:t,active:(0,n.cx)(t,(0,n.iv)({"&::before":{display:"block",content:'" "',position:"absolute",left:0,right:0,height:"2px",bottom:0,borderRadius:e.shape.radius.default,backgroundImage:e.colors.gradients.brandHorizontal}})),primary:(0,n.iv)(i),destructive:(0,n.iv)(o),narrow:(0,n.iv)({padding:e.spacing(0,.5)}),img:(0,n.iv)({width:"16px",height:"16px",marginRight:e.spacing(1)}),buttonFullWidth:(0,n.iv)({flexGrow:1}),content:(0,n.iv)({flexGrow:1}),contentWithIcon:(0,n.iv)({display:"none",paddingLeft:e.spacing(1),[`@media ${x._Q(e.v1.breakpoints.md)}`]:{display:"block"}}),contentWithRightIcon:(0,n.iv)({paddingRight:e.spacing(.5)}),highlight:(0,n.iv)({backgroundColor:e.colors.success.main,borderRadius:e.shape.radius.circle,width:"6px",height:"6px",position:"absolute",top:"-3px",right:"-3px",zIndex:1})}};try{l.displayName="ToolbarButton",l.__docgenInfo={description:"",displayName:"ToolbarButton",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!1,type:{name:"ReactNode"}},iconSize:{defaultValue:null,description:"Icon size",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},tooltip:{defaultValue:null,description:"Tooltip",name:"tooltip",required:!1,type:{name:"string"}},imgSrc:{defaultValue:null,description:"For image icons",name:"imgSrc",required:!1,type:{name:"string"}},imgAlt:{defaultValue:null,description:"Alt text for imgSrc",name:"imgAlt",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"if true or false will show angle-down/up",name:"isOpen",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"Controls flex-grow: 1",name:"fullWidth",required:!1,type:{name:"boolean"}},narrow:{defaultValue:null,description:"reduces padding to xs",name:"narrow",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"destructive"'},{value:'"canvas"'},{value:'"default"'},{value:'"active"'}]}},iconOnly:{defaultValue:null,description:"Hide any children and only show icon",name:"iconOnly",required:!1,type:{name:"boolean"}},isHighlighted:{defaultValue:null,description:"Show highlight dot",name:"isHighlighted",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarButton/ToolbarButton.tsx#ToolbarButton"]={docgenInfo:l.__docgenInfo,name:"ToolbarButton",path:"src/components/ToolbarButton/ToolbarButton.tsx#ToolbarButton"})}catch{}},"./src/components/ToolbarButton/ToolbarButtonRow.tsx":function(C,O,a){a.d(O,{R:function(){return R}});var n=a("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),u=a("../../.yarn/__virtual__/@react-aria-dialog-virtual-7075fee1bc/2/yarn/cache/@react-aria-dialog-npm-3.5.3-764cfb3f83-053e37148b.zip/node_modules/@react-aria/dialog/dist/import.mjs"),g=a("../../.yarn/__virtual__/@react-aria-focus-virtual-0ebdd565a7/2/yarn/cache/@react-aria-focus-npm-3.13.0-7b45c76573-ef78efc7b1.zip/node_modules/@react-aria/focus/dist/import.mjs"),m=a("../../.yarn/__virtual__/@react-aria-overlays-virtual-3b2bd518d4/2/yarn/cache/@react-aria-overlays-npm-3.15.0-c194ff6ddd-999ba27b4c.zip/node_modules/@react-aria/overlays/dist/import.mjs"),r=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),x=a("./src/themes/ThemeContext.tsx"),c=a("./src/components/Portal/Portal.tsx"),f=a("./src/components/ToolbarButton/ToolbarButton.tsx"),p=Object.defineProperty,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,E=(s,d,l)=>d in s?p(s,d,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[d]=l,B=(s,d)=>{for(var l in d||(d={}))y.call(d,l)&&E(s,l,d[l]);if(v)for(var l of v(d))P.call(d,l)&&E(s,l,d[l]);return s},I=(s,d)=>{var l={};for(var b in s)y.call(s,b)&&d.indexOf(b)<0&&(l[b]=s[b]);if(s!=null&&v)for(var b of v(s))d.indexOf(b)<0&&P.call(s,b)&&(l[b]=s[b]);return l};const R=(0,r.forwardRef)((s,d)=>{var l=s,{alignment:b="left",className:j,children:M}=l,e=I(l,["alignment","className","children"]);const i=r.Children.toArray(M).filter(T=>T!=null),[o,t]=(0,r.useState)(Array(i.length).fill(!1)),_=(0,r.useRef)(null),[A,K]=(0,r.useState)(!1),W=(0,r.useRef)(null),N=(0,r.createRef)(),{overlayProps:U}=(0,m.Ir)({onClose:()=>K(!1),isDismissable:!0,isOpen:A,shouldCloseOnInteractOutside:T=>{var h;const w=(0,c.RN)();return!((h=W.current)!=null&&h.contains(T))&&!w.contains(T)}},N),{dialogProps:k}=(0,u.R)({},N),L=(0,x.l4)(),H=b==="left"?o.indexOf(!1)-1:o.length,z=D(L,H,b);return(0,r.useLayoutEffect)(()=>{const T=new IntersectionObserver(h=>{h.forEach(w=>{if(w.target instanceof HTMLElement&&w.target.parentNode){const F=Array.prototype.indexOf.call(w.target.parentNode.children,w.target);t(S=>{const V=[...S];return V[F]=w.isIntersecting,V})}})},{threshold:1,root:_.current});return _.current&&Array.from(_.current.children).forEach(h=>{h instanceof HTMLElement&&h!==W.current&&T.observe(h)}),()=>T.disconnect()},[M]),r.createElement("div",B({ref:_,className:(0,n.cx)(z.container,j)},e),i.map((T,h)=>r.createElement("div",{key:h,style:{order:h,visibility:o[h]?"visible":"hidden"},className:z.childWrapper},T)),o.includes(!1)&&r.createElement("div",{ref:W,className:z.overflowButton},r.createElement(f.h,{variant:A?"active":"default",tooltip:"Show more items",onClick:()=>K(!A),icon:"ellipsis-v",iconOnly:!0,narrow:!0}),A&&r.createElement(g.MT,{contain:!0,autoFocus:!0},r.createElement("div",B(B({className:z.overflowItems,ref:N},U),k),i.map((T,h)=>!o[h]&&T)))))});R.displayName="ToolbarButtonRow";const D=(s,d,l)=>({overflowButton:(0,n.iv)({order:d}),overflowItems:(0,n.iv)({alignItems:"center",backgroundColor:s.colors.background.primary,borderRadius:s.shape.radius.default,boxShadow:s.shadows.z3,display:"flex",flexWrap:"wrap",gap:s.spacing(1),marginTop:s.spacing(1),maxWidth:"80vw",padding:s.spacing(.5,1),position:"absolute",right:0,top:"100%",width:"max-content",zIndex:s.zIndex.sidemenu}),container:(0,n.iv)({alignItems:"center",display:"flex",gap:s.spacing(1),justifyContent:l==="left"?"flex-start":"flex-end",minWidth:0,position:"relative"}),childWrapper:(0,n.iv)({alignItems:"center",display:"flex",gap:s.spacing(1)})});try{R.displayName="ToolbarButtonRow",R.__docgenInfo={description:"",displayName:"ToolbarButtonRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alignment:{defaultValue:{value:"left"},description:"Determine flex-alignment of child buttons. Needed for overflow behaviour.",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarButton/ToolbarButtonRow.tsx#ToolbarButtonRow"]={docgenInfo:R.__docgenInfo,name:"ToolbarButtonRow",path:"src/components/ToolbarButton/ToolbarButtonRow.tsx#ToolbarButtonRow"})}catch{}},"./src/utils/storybook/DashboardStoryCanvas.tsx":function(C,O,a){a.d(O,{C:function(){return m}});var n=a("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),u=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),g=a("./src/themes/ThemeContext.tsx");const m=({children:r})=>{const x=(0,g.l4)(),c=(0,n.iv)({width:"100%",height:"100%",padding:"32px",background:x.colors.background.canvas,overflow:"auto"});return u.createElement("div",{className:c},r)};m.displayName="DashboardStoryCanvas";try{m.displayName="DashboardStoryCanvas",m.__docgenInfo={description:"",displayName:"DashboardStoryCanvas",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"]={docgenInfo:m.__docgenInfo,name:"DashboardStoryCanvas",path:"src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"})}catch{}},"./src/components/ToolbarButton/ToolbarButtonRow.story.tsx":function(C,O,a){a.r(O),a.d(O,{Basic:function(){return e},default:function(){return i}});var n=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),u=a("./src/utils/storybook/DashboardStoryCanvas.tsx"),g=a("./src/components/ToolbarButton/ToolbarButton.tsx"),m=a("./src/components/ToolbarButton/ToolbarButtonRow.tsx"),r=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),x=a("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),c=a("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function f(o){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,x.ah)(),o.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"toolbarbuttonrow",children:"ToolbarButtonRow"}),`
`,(0,r.jsxs)(t.p,{children:["A container for multiple ",(0,r.jsx)(t.code,{children:"ToolbarButton"}),"s. Provides automatic overflow behaviour when the buttons no longer fit in the container."]}),`
`,(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),`
`,(0,r.jsxs)(t.p,{children:["This example shows how to use several buttons in a ",(0,r.jsx)(t.code,{children:"ToolbarButtonRow"}),"."]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:`<ToolbarButtonRow>
  <ToolbarButton variant="default" iconOnly={false} isOpen={false}>
    Last 6 hours
  </ToolbarButton>
  <ButtonGroup>
    <ToolbarButton icon="search-minus" variant="default" />
    <ToolbarButton icon="search-plus" variant="default" />
  </ButtonGroup>
  <ToolbarButton icon="sync" isOpen={false} variant="primary" />
</ToolbarButtonRow>
`})}),`
`,(0,r.jsx)(c.Ed,{of:m.R})]})}function p(o={}){const{wrapper:t}=Object.assign({},(0,x.ah)(),o.components);return t?(0,r.jsx)(t,Object.assign({},o,{children:(0,r.jsx)(f,o)})):f(o)}var v=p,y=Object.defineProperty,P=Object.defineProperties,E=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,D=(o,t,_)=>t in o?y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:_}):o[t]=_,s=(o,t)=>{for(var _ in t||(t={}))I.call(t,_)&&D(o,_,t[_]);if(B)for(var _ of B(t))R.call(t,_)&&D(o,_,t[_]);return o},d=(o,t)=>P(o,E(t)),l,b,j;const M={title:"Buttons/ToolbarButton/ToolbarButtonRow",component:m.R,parameters:{docs:{page:v},controls:{exclude:["className"]}}},e=o=>n.createElement(u.C,null,n.createElement(m.R,s({},o),n.createElement(g.h,null,"Just text"),n.createElement(g.h,{icon:"sync",tooltip:"Sync"}),n.createElement(g.h,{imgSrc:"./grafana_icon.svg"},"With imgSrc"),n.createElement(g.h,null,"Just text"),n.createElement(g.h,{icon:"sync",tooltip:"Sync"}),n.createElement(g.h,{imgSrc:"./grafana_icon.svg"},"With imgSrc")));var i=M;e.parameters=d(s({},e.parameters),{docs:d(s({},(l=e.parameters)==null?void 0:l.docs),{source:s({originalSource:`args => {
  return <DashboardStoryCanvas>
      <ToolbarButtonRow {...args}>
        <ToolbarButton>Just text</ToolbarButton>
        <ToolbarButton icon="sync" tooltip="Sync" />
        <ToolbarButton imgSrc="./grafana_icon.svg">With imgSrc</ToolbarButton>
        <ToolbarButton>Just text</ToolbarButton>
        <ToolbarButton icon="sync" tooltip="Sync" />
        <ToolbarButton imgSrc="./grafana_icon.svg">With imgSrc</ToolbarButton>
      </ToolbarButtonRow>
    </DashboardStoryCanvas>;
}`},(j=(b=e.parameters)==null?void 0:b.docs)==null?void 0:j.source)})})},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(C,O,a){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),u=Symbol.for("react.element"),g=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,v){var y,P={},E=null,B=null;v!==void 0&&(E=""+v),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(B=p.ref);for(y in p)m.call(p,y)&&!x.hasOwnProperty(y)&&(P[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)P[y]===void 0&&(P[y]=p[y]);return{$$typeof:u,type:f,key:E,ref:B,props:P,_owner:r.current}}O.Fragment=g,O.jsx=c,O.jsxs=c},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js":function(C,O,a){C.exports=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
