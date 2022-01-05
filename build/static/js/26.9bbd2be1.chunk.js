(this.webpackJsonpQCentorApp=this.webpackJsonpQCentorApp||[]).push([[26],{1069:function(e,t,s){"use strict";var c=s(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},i=s(9),n=function(e,t){return c.createElement(i.a,Object.assign({},e,{ref:t,icon:l}))};n.displayName="FolderOutlined";t.a=c.forwardRef(n)},1106:function(e,t,s){"use strict";var c=s(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"},i=s(9),n=function(e,t){return c.createElement(i.a,Object.assign({},e,{ref:t,icon:l}))};n.displayName="FileOutlined";t.a=c.forwardRef(n)},1288:function(e,t,s){"use strict";s.r(t);s(0);var c=s(1175),l=s(1106),i=s(1069),n=s(2),r=c.a.DirectoryTree,a=[{title:"public",key:"0-0",children:[]},{title:"src",key:"0-1",children:[{title:"assets",key:"0-0-0",children:[]},{title:"auth",key:"0-0-1",children:[]},{title:"components",key:"0-0-2",children:[]},{title:"cofigs",key:"0-0-3",children:[]},{title:"constant",key:"0-0-4",children:[]},{title:"lang",key:"0-0-5",children:[]},{title:"layouts",key:"0-0-6",children:[]},{title:"redux",key:"0-0-7",children:[]},{title:"services",key:"0-0-8",children:[]},{title:"views",key:"0-0-9",children:[]},{title:"App.js",key:"0-0-10",isLeaf:!0},{title:"index.js",key:"0-0-11",isLeaf:!0},{title:"index.scss",key:"0-0-12",isLeaf:!0},{title:"serviceWorker.js",key:"0-0-13",isLeaf:!0}]}],o=function(e){return Object(n.jsxs)("h4",{children:["file"===e.type?Object(n.jsx)(l.a,{className:"text-success"}):Object(n.jsx)(i.a,{className:"text-primary"}),Object(n.jsx)("span",{className:"ml-2",children:e.title})]})},j=function(e){return Object(n.jsx)("div",{className:"mb-4 ".concat(2===e.level&&"ml-4 mt-4"),children:e.children})};t.default=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Folder Structure"}),Object(n.jsx)("p",{children:"Emilus uses Create React App folder structure to keep its content."}),Object(n.jsx)("div",{className:"mb-4",children:Object(n.jsx)(r,{multiple:!0,treeData:a})}),Object(n.jsxs)(j,{children:[Object(n.jsx)(o,{title:"public"}),Object(n.jsx)("p",{children:"public folder keeps all static web resouce, such as images, web fonts, html & etc."})]}),Object(n.jsxs)(j,{children:[Object(n.jsx)(o,{title:"src"}),Object(n.jsx)("p",{children:"src is the folder where contain our React code, it is also entry point of the application. The below folders"}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"assets"}),Object(n.jsx)("p",{children:"This folder stores web resouce that require to processed by webpack."})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"auth"}),Object(n.jsx)("p",{children:"auth folder include all authentication related config."})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"components"}),Object(n.jsx)("p",{children:"The components folder contains a collection of UI components that will be shared and used across files in the project."})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"configs"}),Object(n.jsx)("p",{children:"configs basically contains app configuration related files, such as theme and navigation."})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"constants"}),Object(n.jsx)("p",{children:"constants folder contains all value which commonly used throughout the app."})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"lang"}),Object(n.jsx)("p",{children:"This folder stored all files related to languages."})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"layouts"}),Object(n.jsx)("p",{children:"layouts folder contains all layout component. For example app-layout that we used in post login & auth-layout for prelogin"})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"redux"}),Object(n.jsx)("p",{children:"redux folder included all redux related fles, there are store, actions, reducers, action constants & sagas subfolder to manage redux states."})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"services"}),Object(n.jsx)("p",{children:"services folder contains service file that used to manage API integrations"})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"utils"}),Object(n.jsx)("p",{children:"utils folder is a place to store some utility functions that used oftenly in the project"})]}),Object(n.jsxs)(j,{level:2,children:[Object(n.jsx)(o,{title:"views"}),Object(n.jsx)("p",{children:"views folder store page component that basically has its own route."})]})]}),Object(n.jsxs)(j,{children:[Object(n.jsx)(o,{title:"App.js",type:"file"}),Object(n.jsx)("p",{children:"Main app component."})]}),Object(n.jsxs)(j,{children:[Object(n.jsx)(o,{title:"index.js",type:"file"}),Object(n.jsx)("p",{children:"Javascript entry point."})]}),Object(n.jsxs)(j,{children:[Object(n.jsx)(o,{title:"index.scss",type:"file"}),Object(n.jsx)("p",{children:"SCSS entry point."})]})]})}}}]);
//# sourceMappingURL=26.9bbd2be1.chunk.js.map