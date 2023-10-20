/*! For license information please see components-buttons-CopyButton-CopyButton-stories-mdx.2c93041a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_getflywheel_local_components=self.webpackChunk_getflywheel_local_components||[]).push([[9165],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/buttons/CopyButton/CopyButton.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>CopyButton_stories,playground:()=>playground});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),ComponentExampleBase=__webpack_require__("./src/common/helpers/ComponentExampleBase.tsx"),CopyButton=__webpack_require__("./src/components/buttons/CopyButton/CopyButton.tsx"),CopyButtonIcon=__webpack_require__("./src/components/buttons/CopyButton/_private/CopyButtonIcon.tsx");class CopyButtonExample extends ComponentExampleBase.r{constructor(props){super(props,CopyButton.qi,"CopyButton",[{defaultValue:"Copy Button",propName:"content (children)",type:"html"},{propName:"tag",type:"string"},{propName:"copiedTimeout",type:"string"},{propName:"uncopiedStateText",type:"string"},{propName:"copiedStateText",type:"string"},{propName:"uncopiedStateIconVariant",type:"enum",options:{none:"",...CopyButtonIcon.Wc}},{propName:"copiedStateIconVariant",type:"enum",options:{none:"",...CopyButtonIcon.oS}},{propName:"copiedStateBGStyleVariant",type:"enum",options:{none:"",...CopyButton.hi}},{propName:"uncopiedStateBGStyleVariant",type:"enum",options:{none:"",...CopyButton.vW}},{propName:"padding",type:"enum",options:{none:"",...CopyButton.OC}},{propName:"textToCopy",type:"string"}])}}try{CopyButtonExample.displayName="CopyButtonExample",CopyButtonExample.__docgenInfo={description:"",displayName:"CopyButtonExample",props:{onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"((element: HTMLElement) => string | void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLElement>"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},"aria-checked":{defaultValue:null,description:"",name:"aria-checked",required:!1,type:{name:"boolean"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/CopyButton/examples/CopyButtonExample.tsx#CopyButtonExample"]={docgenInfo:CopyButtonExample.__docgenInfo,name:"CopyButtonExample",path:"src/components/buttons/CopyButton/examples/CopyButtonExample.tsx#CopyButtonExample"})}catch(__react_docgen_typescript_loader_error){}var blocks=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks.h_,{title:"Buttons/CopyButton",component:CopyButtonExample}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"playground",children:"Playground"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"Playground",children:(0,jsx_runtime.jsx)(CopyButtonExample,{})})})]})}const playground=()=>(0,jsx_runtime.jsx)(CopyButtonExample,{});playground.storyName="Playground",playground.parameters={storySource:{source:"<CopyButtonExample />"}};const componentMeta={title:"Buttons/CopyButton",component:CopyButtonExample,tags:["stories-mdx"],includeStories:["playground"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const CopyButton_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);