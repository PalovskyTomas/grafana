"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[7817],{"../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js":function(D,h,t){t.d(h,{NF:function(){return m},Zo:function(){return o},ah:function(){return c},pC:function(){return l}});var u=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js");const l=u.createContext({});function m(s){return a;function a(i){const f=c(i.components);return u.createElement(s,{...i,allComponents:f})}}function c(s){const a=u.useContext(l);return u.useMemo(()=>typeof s=="function"?s(a):{...a,...s},[a,s])}const b={};function o({components:s,children:a,disableParentContext:i}){let f;return i?f=typeof s=="function"?s({}):s||b:f=c(s),u.createElement(l.Provider,{value:f},a)}},"./src/components/LoadingBar/LoadingBar.tsx":function(D,h,t){t.d(h,{F:function(){return f}});var u=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),m=t("./src/themes/ThemeContext.tsx");const c=28,b=2.4,o=500,s=4e3,a=300,i=100/c*100;function f({width:O,delay:C=a,ariaLabel:S="Loading bar"}){const L=Math.min(Math.max(Math.round(O*b),o),s),M=(0,m.wW)(p,C,L),P={overflow:"hidden"};return l.createElement("div",{style:P},l.createElement("div",{"aria-label":S,className:M.bar}))}const p=(O,C,S)=>{const L=(0,u.F4)({"0%":{transform:"translateX(-100%)"},"85%, 100%":{transform:`translateX(${i}%)`}});return{bar:(0,u.iv)({width:c+"%",height:1,background:"linear-gradient(90deg, rgba(110, 159, 255, 0) 0%, #6E9FFF 80.75%, rgba(110, 159, 255, 0) 100%)",transform:"translateX(-100%)",animationName:L,animationDelay:`${C}ms`,animationDuration:`${S}ms`,animationTimingFunction:"linear",animationIterationCount:"infinite",willChange:"transform"})}};try{f.displayName="LoadingBar",f.__docgenInfo={description:"",displayName:"LoadingBar",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},delay:{defaultValue:{value:"300"},description:"",name:"delay",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:{value:"Loading bar"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/LoadingBar/LoadingBar.tsx#LoadingBar"]={docgenInfo:f.__docgenInfo,name:"LoadingBar",path:"src/components/LoadingBar/LoadingBar.tsx#LoadingBar"})}catch{}},"./src/utils/storybook/DashboardStoryCanvas.tsx":function(D,h,t){t.d(h,{C:function(){return c}});var u=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),m=t("./src/themes/ThemeContext.tsx");const c=({children:b})=>{const o=(0,m.l4)(),s=(0,u.iv)({width:"100%",height:"100%",padding:"32px",background:o.colors.background.canvas,overflow:"auto"});return l.createElement("div",{className:s},b)};c.displayName="DashboardStoryCanvas";try{c.displayName="DashboardStoryCanvas",c.__docgenInfo={description:"",displayName:"DashboardStoryCanvas",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"]={docgenInfo:c.__docgenInfo,name:"DashboardStoryCanvas",path:"src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"})}catch{}},"./src/components/LoadingBar/LoadingBar.story.tsx":function(D,h,t){t.r(h),t.d(h,{Basic:function(){return _},default:function(){return y}});var u=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),m=t("./src/components/LoadingBar/LoadingBar.tsx"),c=t("./src/themes/ThemeContext.tsx"),b=t("./src/utils/storybook/DashboardStoryCanvas.tsx"),o=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),s=t("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),a=t("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function i(n){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h_,{title:"MDX|LoadingBar",component:m.F}),`
`,(0,o.jsx)(e.h1,{id:"loadingbar",children:"LoadingBar"}),`
`,(0,o.jsx)(e.p,{children:"The LoadingBar is used as a simple loading slider animation in the top of its container."}),`
`,(0,o.jsx)(a.MB,{children:(0,o.jsx)("div",{style:{height:"200px",width:"400px"},children:(0,o.jsx)(m.F,{containerWidth:400,height:2,width:128})})}),`
`,(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:`<div style={{ height: '200px', width: '400px' }}>
  <LoadingBar containerWidth={400} height={2} width={128} />
</div>
`})}),`
`,(0,o.jsx)(a.Ed,{of:m.F})]})}function f(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(i,n)})):i(n)}var p=f,O=Object.defineProperty,C=Object.defineProperties,S=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,T=(n,e,d)=>e in n?O(n,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[e]=d,x=(n,e)=>{for(var d in e||(e={}))M.call(e,d)&&T(n,d,e[d]);if(L)for(var d of L(e))P.call(e,d)&&T(n,d,e[d]);return n},j=(n,e)=>C(n,S(e)),r,v,g;const E={title:"General/LoadingBar",component:m.F,parameters:{controls:{},docs:{page:p}}},B=n=>{const{borderColor:e}=n.components.panel;return{container:(0,u.iv)({label:"placeholder-container",width:"400px",height:"200px",border:`1px solid ${e}`,borderRadius:n.shape.radius.default})}},_=n=>{const e=(0,c.wW)(B);return l.createElement(b.C,null,l.createElement("div",{className:e.container},l.createElement(m.F,x({},n))))};_.args={width:400};var y=E;_.parameters=j(x({},_.parameters),{docs:j(x({},(r=_.parameters)==null?void 0:r.docs),{source:x({originalSource:`(args: LoadingBarProps) => {
  const styles = useStyles2(getStyles);
  return <DashboardStoryCanvas>
      <div className={styles.container}>
        <LoadingBar {...args} />
      </div>
    </DashboardStoryCanvas>;
}`},(g=(v=_.parameters)==null?void 0:v.docs)==null?void 0:g.source)})})},"../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js":function(D,h,t){t.d(h,{iv:function(){return M},cx:function(){return p},F4:function(){return L}});var u=t("../../../yarn/cache/@emotion-cache-npm-11.11.0-3e6e449071-8eb1dc22be.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),l=t("../../../yarn/cache/@emotion-serialize-npm-1.1.2-4b856d3761-413c352e65.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),m=t("../../../yarn/cache/@emotion-utils-npm-1.2.1-3d04f99348-e0b44be070.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function c(x,j){if(x.inserted[j.name]===void 0)return x.insert("",j,x.sheet,!0)}function b(x,j,r){var v=[],g=(0,m.fp)(x,v,r);return v.length<2?r:g+j(v)}var o=function(j){var r=(0,u.Z)(j);r.sheet.speedy=function(_){this.isSpeedy=_},r.compat=!0;var v=function(){for(var y=arguments.length,n=new Array(y),e=0;e<y;e++)n[e]=arguments[e];var d=(0,l.O)(n,r.registered,void 0);return(0,m.My)(r,d,!1),r.key+"-"+d.name},g=function(){for(var y=arguments.length,n=new Array(y),e=0;e<y;e++)n[e]=arguments[e];var d=(0,l.O)(n,r.registered),w="animation-"+d.name;return c(r,{name:d.name,styles:"@keyframes "+w+"{"+d.styles+"}"}),w},E=function(){for(var y=arguments.length,n=new Array(y),e=0;e<y;e++)n[e]=arguments[e];var d=(0,l.O)(n,r.registered);c(r,d)},B=function(){for(var y=arguments.length,n=new Array(y),e=0;e<y;e++)n[e]=arguments[e];return b(r.registered,v,s(n))};return{css:v,cx:B,injectGlobal:E,keyframes:g,hydrate:function(y){y.forEach(function(n){r.inserted[n]=!0})},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:m.fp.bind(null,r.registered),merge:b.bind(null,r.registered,v)}},s=function x(j){for(var r="",v=0;v<j.length;v++){var g=j[v];if(g!=null){var E=void 0;switch(typeof g){case"boolean":break;case"object":{if(Array.isArray(g))E=x(g);else{E="";for(var B in g)g[B]&&B&&(E&&(E+=" "),E+=B)}break}default:E=g}E&&(r&&(r+=" "),r+=E)}}return r},a=o({key:"css"}),i=a.flush,f=a.hydrate,p=a.cx,O=a.merge,C=a.getRegisteredStyles,S=a.injectGlobal,L=a.keyframes,M=a.css,P=a.sheet,T=a.cache},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js":function(D,h,t){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),l=Symbol.for("react.element"),m=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,b=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(a,i,f){var p,O={},C=null,S=null;f!==void 0&&(C=""+f),i.key!==void 0&&(C=""+i.key),i.ref!==void 0&&(S=i.ref);for(p in i)c.call(i,p)&&!o.hasOwnProperty(p)&&(O[p]=i[p]);if(a&&a.defaultProps)for(p in i=a.defaultProps,i)O[p]===void 0&&(O[p]=i[p]);return{$$typeof:l,type:a,key:C,ref:S,props:O,_owner:b.current}}h.Fragment=m,h.jsx=s,h.jsxs=s},"../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js":function(D,h,t){D.exports=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
