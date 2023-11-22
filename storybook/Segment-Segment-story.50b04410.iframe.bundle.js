"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[646],{"../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/index.mjs":function(w,E,r){r.d(E,{aD:function(){return i.aD}});var i=r("../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),t=(...h)=>{let O=config,m=h;m.length===1&&Array.isArray(m[0])&&([m]=m),m.length!==1&&typeof m[m.length-1]!="string"&&(O={...config,...m.pop()});let v=m[0];(m.length!==1||typeof v=="string")&&(v={},m.forEach(f=>{v[f]=f}));let g={};return Object.keys(v).forEach(f=>{g[f]=action(v[f],O)}),g}},"./src/components/Forms/InlineFieldRow.tsx":function(w,E,r){r.d(E,{Z:function(){return b}});var i=r("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),t=r("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=r("./src/themes/ThemeContext.tsx"),O=Object.defineProperty,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(c,p,e)=>p in c?O(c,p,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[p]=e,C=(c,p)=>{for(var e in p||(p={}))v.call(p,e)&&f(c,e,p[e]);if(m)for(var e of m(p))g.call(p,e)&&f(c,e,p[e]);return c},P=(c,p)=>{var e={};for(var n in c)v.call(c,n)&&p.indexOf(n)<0&&(e[n]=c[n]);if(c!=null&&m)for(var n of m(c))p.indexOf(n)<0&&g.call(c,n)&&(e[n]=c[n]);return e};const b=c=>{var p=c,{children:e,className:n}=p,s=P(p,["children","className"]);const u=(0,h.wW)(V);return t.createElement("div",C({className:(0,i.cx)(u.container,n)},s),e)},V=c=>({container:(0,i.iv)({label:"InlineFieldRow",display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"flex-start",rowGap:c.spacing(.5)})});try{b.displayName="InlineFieldRow",b.__docgenInfo={description:"",displayName:"InlineFieldRow",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/InlineFieldRow.tsx#InlineFieldRow"]={docgenInfo:b.__docgenInfo,name:"InlineFieldRow",path:"src/components/Forms/InlineFieldRow.tsx#InlineFieldRow"})}catch{}},"./src/components/Forms/InlineLabel.tsx":function(w,E,r){r.d(E,{W:function(){return c}});var i=r("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),t=r("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=r("./src/themes/ThemeContext.tsx"),O=r("./src/components/Icon/Icon.tsx"),m=r("./src/components/Tooltip/Tooltip.tsx"),v=Object.defineProperty,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,P=(e,n,s)=>n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,b=(e,n)=>{for(var s in n||(n={}))f.call(n,s)&&P(e,s,n[s]);if(g)for(var s of g(n))C.call(n,s)&&P(e,s,n[s]);return e},V=(e,n)=>{var s={};for(var u in e)f.call(e,u)&&n.indexOf(u)<0&&(s[u]=e[u]);if(e!=null&&g)for(var u of g(e))n.indexOf(u)<0&&C.call(e,u)&&(s[u]=e[u]);return s};const c=e=>{var n=e,{children:s,className:u,tooltip:L,width:A,transparent:N,interactive:y,as:M="label"}=n,B=V(n,["children","className","tooltip","width","transparent","interactive","as"]);const W=(0,h.wW)(p,N,A);return t.createElement(M,b({className:(0,i.cx)(W.label,u)},B),s,L&&t.createElement(m.u,{interactive:y,placement:"top",content:L,theme:"info"},t.createElement(O.J,{tabIndex:0,name:"info-circle",size:"sm",className:W.icon})))},p=(e,n=!1,s)=>({label:(0,i.iv)({display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0,padding:e.spacing(0,1),fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.size.sm,backgroundColor:n?"transparent":e.colors.background.secondary,height:e.spacing(e.components.height.md),lineHeight:e.spacing(e.components.height.md),marginRight:e.spacing(.5),borderRadius:e.shape.radius.default,border:"none",width:s?s!=="auto"?`${8*s}px`:s:"100%",color:e.colors.text.primary}),icon:(0,i.iv)({color:e.colors.text.secondary,marginLeft:"10px",":hover":{color:e.colors.text.primary}})});try{c.displayName="InlineLabel",c.__docgenInfo={description:"",displayName:"InlineLabel",props:{tooltip:{defaultValue:null,description:`Content for the labels tooltip. If provided, an info icon with the tooltip content
will be displayed`,name:"tooltip",required:!1,type:{name:"PopoverContent"}},width:{defaultValue:null,description:"Custom width for the label",name:"width",required:!1,type:{name:'number | "auto"'}},transparent:{defaultValue:null,description:"Make labels's background transparent",name:"transparent",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"Make tooltip interactive",name:"interactive",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Controls which element the InlineLabel should be rendered into",name:"as",required:!1,type:{name:"ElementType<any>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/InlineLabel.tsx#InlineLabel"]={docgenInfo:c.__docgenInfo,name:"InlineLabel",path:"src/components/Forms/InlineLabel.tsx#InlineLabel"})}catch{}},"./src/components/Segment/SegmentSection.tsx":function(w,E,r){r.d(E,{f:function(){return v}});var i=r("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),t=r("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=r("./src/themes/ThemeContext.tsx"),O=r("./src/components/Forms/InlineFieldRow.tsx"),m=r("./src/components/Forms/InlineLabel.tsx");const v=({label:f,htmlFor:C,children:P,fill:b})=>{const V=(0,h.wW)(g);return t.createElement(t.Fragment,null,t.createElement(O.Z,null,t.createElement(m.W,{htmlFor:C,width:12,className:V.label},f),P,b&&t.createElement("div",{className:V.fill},t.createElement(m.W,null,""))))},g=f=>({label:(0,i.iv)({color:f.colors.primary.text}),fill:(0,i.iv)({flexGrow:1,marginBottom:f.spacing(.5)})});try{v.displayName="SegmentSection",v.__docgenInfo={description:"Horizontal section for editor components.",displayName:"SegmentSection",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Segment/SegmentSection.tsx#SegmentSection"]={docgenInfo:v.__docgenInfo,name:"SegmentSection",path:"src/components/Segment/SegmentSection.tsx#SegmentSection"})}catch{}},"./src/components/Segment/SegmentSelect.tsx":function(w,E,r){r.d(E,{V:function(){return p}});var i=r("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),t=r("./src/themes/ThemeContext.tsx"),h=r("./src/components/Select/Select.tsx"),O=Object.defineProperty,m=Object.defineProperties,v=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,P=(e,n,s)=>n in e?O(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,b=(e,n)=>{for(var s in n||(n={}))f.call(n,s)&&P(e,s,n[s]);if(g)for(var s of g(n))C.call(n,s)&&P(e,s,n[s]);return e},V=(e,n)=>m(e,v(n)),c=(e,n)=>{var s={};for(var u in e)f.call(e,u)&&n.indexOf(u)<0&&(s[u]=e[u]);if(e!=null&&g)for(var u of g(e))n.indexOf(u)<0&&C.call(e,u)&&(s[u]=e[u]);return s};function p(e){var n=e,{value:s,placeholder:u="",options:L=[],onChange:A,onClickOutside:N,loadOptions:y=void 0,width:M,noOptionsMessage:B="",allowCustomValue:W=!1,allowEmptyValue:Z=!1}=n,Q=c(n,["value","placeholder","options","onChange","onClickOutside","loadOptions","width","noOptionsMessage","allowCustomValue","allowEmptyValue"]);const F=(0,i.useRef)(null),$=(0,t.l4)();let d=M>0?M/$.spacing.gridSize:void 0,_,K={};return y?(_=h.qb,K={loadOptions:y,defaultOptions:!0}):_=h.Ph,i.createElement("div",V(b({},Q),{ref:F}),i.createElement(_,b({width:d,noOptionsMessage:B,placeholder:u,autoFocus:!0,isOpen:!0,onChange:A,options:L,value:s,closeMenuOnSelect:!1,onCloseMenu:()=>{if(F&&F.current){const T=F.current.querySelector('input[id^="react-select-"]');T&&(T.value||Z)?A({value:T.value,label:T.value}):N()}},allowCustomValue:W},K)))}try{p.displayName="SegmentSelect",p.__docgenInfo={description:"",displayName:"SegmentSelect",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T | SelectableValue<T>"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"SelectableValue<T>[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: SelectableValue<T>) => void"}},loadOptions:{defaultValue:{value:"undefined"},description:"If provided - AsyncSelect will be used allowing to reload options when the value in the input changes",name:"loadOptions",required:!1,type:{name:"((inputValue: string) => Promise<SelectableValue<T>[]>)"}},onClickOutside:{defaultValue:null,description:"",name:"onClickOutside",required:!0,type:{name:"() => void"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},noOptionsMessage:{defaultValue:{value:""},description:"",name:"noOptionsMessage",required:!1,type:{name:"string"}},allowCustomValue:{defaultValue:{value:"false"},description:"",name:"allowCustomValue",required:!1,type:{name:"boolean"}},allowEmptyValue:{defaultValue:{value:"false"},description:`If true, empty value will be passed to onChange callback otherwise using empty value
will work as canceling and using the previous value`,name:"allowEmptyValue",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Segment/SegmentSelect.tsx#SegmentSelect"]={docgenInfo:p.__docgenInfo,name:"SegmentSelect",path:"src/components/Segment/SegmentSelect.tsx#SegmentSelect"})}catch{}},"./src/components/Segment/styles.ts":function(w,E,r){r.d(E,{N:function(){return t}});var i=r("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const t=h=>{const O="v1"in h?h.v1.palette:h.palette;return{segment:(0,i.iv)({cursor:"pointer",width:"auto"}),queryPlaceholder:(0,i.iv)({color:O.gray2}),disabled:(0,i.iv)({cursor:"not-allowed",opacity:.65,boxShadow:"none"})}}},"./src/components/Segment/useExpandableLabel.tsx":function(w,E,r){r.d(E,{_:function(){return O}});var i=r("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),t=r("./src/themes/ThemeContext.tsx"),h=r("./src/components/Button/Button.tsx");const O=(m,v)=>{const g=(0,i.useRef)(null),f=(0,t.wW)(h.gN),[C,P]=(0,i.useState)(m),[b,V]=(0,i.useState)(0),c=e=>{P(e),v&&v(e)};return[({Component:e,onClick:n,disabled:s})=>i.createElement("button",{type:"button",className:f,ref:g,disabled:s,onClick:()=>{c(!0),g&&g.current&&V(g.current.clientWidth*1.25),n?.()}},e),b,C,c]}},"./src/components/Segment/Segment.story.tsx":function(w,E,r){r.r(E),r.d(E,{ArrayOptions:function(){return z},ArrayOptionsWithPlaceholder:function(){return Y},ArrayOptionsWithPrimitiveValue:function(){return U},Basic:function(){return D},CustomLabelField:function(){return H},CustomOptionsAllowed:function(){return G},GroupedArrayOptions:function(){return q},HtmlAttributes:function(){return J},default:function(){return Re}});var i=r("../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/index.mjs"),t=r("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),h=r("./src/components/Icon/Icon.tsx"),O=r("./src/components/Segment/SegmentSection.tsx"),m=r("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),v=r("../../../yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),g=r("./src/themes/ThemeContext.tsx"),f=r("./src/components/Forms/InlineLabel.tsx"),C=r("./src/components/Segment/SegmentSelect.tsx"),P=r("./src/components/Segment/styles.ts"),b=r("./src/components/Segment/useExpandableLabel.tsx"),V=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(a,l,o)=>l in a?V(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,L=(a,l)=>{for(var o in l||(l={}))n.call(l,o)&&u(a,o,l[o]);if(e)for(var o of e(l))s.call(l,o)&&u(a,o,l[o]);return a},A=(a,l)=>c(a,p(l)),N=(a,l)=>{var o={};for(var S in a)n.call(a,S)&&l.indexOf(S)<0&&(o[S]=a[S]);if(a!=null&&e)for(var S of e(a))l.indexOf(S)<0&&s.call(a,S)&&(o[S]=a[S]);return o};function y(a){var l=a,{options:o,value:S,onChange:j,Component:De,className:Le,allowCustomValue:Ae,allowEmptyValue:Me,placeholder:be,disabled:Ce,inputMinWidth:Pe,inputPlaceholder:We,onExpandedChange:Fe,autofocus:je=!1}=l,Ne=N(l,["options","value","onChange","Component","className","allowCustomValue","allowEmptyValue","placeholder","disabled","inputMinWidth","inputPlaceholder","onExpandedChange","autofocus"]);const[Be,Ve,Ke,xe]=(0,b._)(je,Fe),ze=Pe?Math.max(Pe,Ve):Ve,ee=(0,g.wW)(P.N);if(!Ke){const X=(0,v.isObject)(S)?S.label:S,Ue=X!=null?String(X):void 0;return t.createElement(Be,{disabled:Ce,Component:De||t.createElement(f.W,{className:(0,m.cx)(ee.segment,{[ee.queryPlaceholder]:be!==void 0&&!S,[ee.disabled]:Ce},Le)},Ue||be)})}return t.createElement(C.V,A(L({},Ne),{value:S&&!(0,v.isObject)(S)?{value:S}:S,placeholder:We,options:o,width:ze,onClickOutside:()=>xe(!1),allowCustomValue:Ae,allowEmptyValue:Me,onChange:X=>{xe(!1),j(X)}}))}try{y.displayName="Segment",y.__docgenInfo={description:"",displayName:"Segment",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T | SelectableValue<T>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: SelectableValue<T>) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectableValue<T>[]"}},inputMinWidth:{defaultValue:null,description:"",name:"inputMinWidth",required:!1,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},allowCustomValue:{defaultValue:null,description:"",name:"allowCustomValue",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onExpandedChange:{defaultValue:null,description:"",name:"onExpandedChange",required:!1,type:{name:"((expanded: boolean) => void)"}},autofocus:{defaultValue:{value:"false"},description:"",name:"autofocus",required:!1,type:{name:"boolean"}},allowEmptyValue:{defaultValue:null,description:"",name:"allowEmptyValue",required:!1,type:{name:"boolean"}},inputPlaceholder:{defaultValue:null,description:"",name:"inputPlaceholder",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Segment/Segment.tsx#Segment"]={docgenInfo:y.__docgenInfo,name:"Segment",path:"src/components/Segment/Segment.tsx#Segment"})}catch{}var M=Object.defineProperty,B=Object.defineProperties,W=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,$=(a,l,o)=>l in a?M(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,d=(a,l)=>{for(var o in l||(l={}))Q.call(l,o)&&$(a,o,l[o]);if(Z)for(var o of Z(l))F.call(l,o)&&$(a,o,l[o]);return a},_=(a,l)=>B(a,W(l)),K,T,ne,te,ae,oe,le,re,se,ie,ce,ue,de,me,pe,ge,fe,ve,_e,Se,he,ye,Oe,Ee;const Ie=t.createElement("span",{className:"gf-form-label query-part"},t.createElement(h.J,{name:"plus-circle"}));function k(a){return{label:`${a}`,value:a}}const x=["Option1","Option2","OptionWithLooongLabel","Option4"].map(k),I=[{label:"Names",options:["Jane","Tom","Lisa"].map(k)},{label:"Prime",options:[2,3,5,7,11,13].map(k)}],R=({options:a,children:l})=>t.createElement(t.Fragment,null,t.createElement(O.f,{label:"Segment Name"},l,t.createElement(y,{Component:Ie,onChange:({value:o})=>(0,i.aD)("New value added")(o),options:a}))),z=()=>{const[a,l]=(0,t.useState)(x[0]);return t.createElement(R,{options:x},t.createElement(y,{value:a,options:x,onChange:o=>{l(o),(0,i.aD)("Segment value changed")(o.value)}}))},we={title:"Data Source/Segment/SegmentSync",component:y},U=()=>{const[a,l]=(0,t.useState)("Option1");return t.createElement(R,{options:x},t.createElement(y,{value:a,options:x,onChange:({value:o})=>{l(o),(0,i.aD)("Segment value changed")(o)}}))},Y=()=>{const[a,l]=(0,t.useState)();return t.createElement(R,{options:x},t.createElement(y,{value:a,options:x,placeholder:"Enter a value",onChange:o=>{l(o),(0,i.aD)("Segment value changed")(o.value)}}))},q=()=>{const[a,l]=(0,t.useState)(I[0].options[0]);return t.createElement(R,{options:I},t.createElement(y,{value:a,options:I,onChange:o=>{l(o),(0,i.aD)("Segment value changed")(o.value)}}))},G=()=>{const[a,l]=(0,t.useState)(x[0]);return t.createElement(R,{options:x},t.createElement(y,{allowCustomValue:!0,value:a,options:x,onChange:o=>{l(o),(0,i.aD)("Segment value changed")(o)}}))},Te=({value:a})=>t.createElement("div",{className:"gf-form-label"},"custom(",a,")"),H=()=>{const[a,l]=(0,t.useState)(I[0].options[0].value);return t.createElement(R,{options:I},t.createElement(y,{Component:t.createElement(Te,{value:a}),options:I,onChange:({value:o})=>{l(o),(0,i.aD)("Segment value changed")(o)}}))},J=()=>{const[a,l]=(0,t.useState)(I[0].options[0]);return t.createElement(R,{options:I},t.createElement(y,{"data-testid":"segment-test",id:"segment-id",value:a,options:I,onChange:o=>{l(o),(0,i.aD)("Segment value changed")(o)}}))},D=a=>{const[l,o]=(0,t.useState)(a.value),S=_(d({},a),{value:l,onChange:({value:j})=>{o(j),(0,i.aD)("onChange fired")(j)},onExpandedChange:j=>(0,i.aD)("onExpandedChange fired")({expanded:j})});return t.createElement(O.f,{label:"Segment:"},t.createElement(y,d({},S)))};D.parameters={controls:{exclude:["onChange","onExpandedChange","Component","className","value"]}},D.args={value:void 0,options:x,inputMinWidth:0,allowCustomValue:!1,placeholder:"Placeholder text",disabled:!1,autofocus:!1,allowEmptyValue:!1,inputPlaceholder:"Start typing..."};var Re=we;z.parameters=_(d({},z.parameters),{docs:_(d({},(K=z.parameters)==null?void 0:K.docs),{source:d({originalSource:`() => {
  const [value, setValue] = useState<SelectableValue<string>>(options[0]);
  return <SegmentFrame options={options}>
      <Segment value={value} options={options} onChange={item => {
      setValue(item);
      action('Segment value changed')(item.value);
    }} />
    </SegmentFrame>;
}`},(ne=(T=z.parameters)==null?void 0:T.docs)==null?void 0:ne.source)})}),U.parameters=_(d({},U.parameters),{docs:_(d({},(te=U.parameters)==null?void 0:te.docs),{source:d({originalSource:`() => {
  const [value, setValue] = useState<string | undefined>('Option1');
  return <SegmentFrame options={options}>
      <Segment value={value} options={options} onChange={({
      value
    }) => {
      setValue(value);
      action('Segment value changed')(value);
    }} />
    </SegmentFrame>;
}`},(oe=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:oe.source)})}),Y.parameters=_(d({},Y.parameters),{docs:_(d({},(le=Y.parameters)==null?void 0:le.docs),{source:d({originalSource:`() => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <SegmentFrame options={options}>
      <Segment value={value} options={options} placeholder="Enter a value" onChange={item => {
      setValue(item);
      action('Segment value changed')(item.value);
    }} />
    </SegmentFrame>;
}`},(se=(re=Y.parameters)==null?void 0:re.docs)==null?void 0:se.source)})}),q.parameters=_(d({},q.parameters),{docs:_(d({},(ie=q.parameters)==null?void 0:ie.docs),{source:d({originalSource:`() => {
  const [value, setValue] = useState<SelectableValue<string | number>>(groupedOptions[0].options[0]);
  return <SegmentFrame options={groupedOptions}>
      <Segment value={value} options={groupedOptions} onChange={item => {
      setValue(item);
      action('Segment value changed')(item.value);
    }} />
    </SegmentFrame>;
}`},(ue=(ce=q.parameters)==null?void 0:ce.docs)==null?void 0:ue.source)})}),G.parameters=_(d({},G.parameters),{docs:_(d({},(de=G.parameters)==null?void 0:de.docs),{source:d({originalSource:`() => {
  const [value, setValue] = useState<SelectableValue<string | number>>(options[0]);
  return <SegmentFrame options={options}>
      <Segment allowCustomValue value={value} options={options} onChange={value => {
      setValue(value);
      action('Segment value changed')(value);
    }} />
    </SegmentFrame>;
}`},(pe=(me=G.parameters)==null?void 0:me.docs)==null?void 0:pe.source)})}),H.parameters=_(d({},H.parameters),{docs:_(d({},(ge=H.parameters)==null?void 0:ge.docs),{source:d({originalSource:`() => {
  const [value, setValue] = useState<string | number | undefined>(groupedOptions[0].options[0].value);
  return <SegmentFrame options={groupedOptions}>
      <Segment<string> Component={<CustomLabelComponent value={value} />} options={groupedOptions} onChange={({
      value
    }) => {
      setValue(value);
      action('Segment value changed')(value);
    }} />
    </SegmentFrame>;
}`},(ve=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:ve.source)})}),J.parameters=_(d({},J.parameters),{docs:_(d({},(_e=J.parameters)==null?void 0:_e.docs),{source:d({originalSource:`() => {
  const [value, setValue] = useState<SelectableValue<string | number>>(groupedOptions[0].options[0]);
  return <SegmentFrame options={groupedOptions}>
      <Segment data-testid="segment-test" id="segment-id" value={value} options={groupedOptions} onChange={value => {
      setValue(value);
      action('Segment value changed')(value);
    }} />
    </SegmentFrame>;
}`},(he=(Se=J.parameters)==null?void 0:Se.docs)==null?void 0:he.source)})}),D.parameters=_(d({},D.parameters),{docs:_(d({},(ye=D.parameters)==null?void 0:ye.docs),{source:d({originalSource:`(args: SegmentSyncProps<string>) => {
  const [value, setValue] = useState(args.value);
  const props: SegmentSyncProps<string> = {
    ...args,
    value,
    onChange: ({
      value
    }) => {
      setValue(value);
      action('onChange fired')(value);
    },
    onExpandedChange: expanded => action('onExpandedChange fired')({
      expanded
    })
  };
  return <SegmentSection label="Segment:">
      <Segment<string> {...props} />
    </SegmentSection>;
}`},(Ee=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:Ee.source)})})}}]);
