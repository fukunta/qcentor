(this.webpackJsonpQCentorApp=this.webpackJsonpQCentorApp||[]).push([[15,39],{1006:function(e,t,n){"use strict";n(0);var a=n(435),c=n(202),r=n(987),o=n(2),l=function(e){return Object(o.jsx)(a.a,{overlay:e.menu,placement:e.placement,trigger:["click"],children:Object(o.jsx)("div",{className:"ellipsis-dropdown",children:Object(o.jsx)(r.a,{})})})};l.defaultProps={trigger:"click",placement:"bottomRight",menu:Object(o.jsx)(c.a,{})},t.a=l},1285:function(e,t,n){"use strict";n.r(t);n(0);var a=n(1006),c=n(544),r=n(3329),o=n(559),l=n(202),s=n(519),i=n(2),d=function(){return Object(i.jsx)(a.a,{menu:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(l.a.Item,{children:Object(i.jsx)("span",{children:"Menu Item 1"})}),Object(i.jsx)(l.a.Item,{children:Object(i.jsx)("span",{children:"Menu Item 2"})}),Object(i.jsx)(l.a.Item,{children:Object(i.jsx)("span",{children:"Menu Item 3"})})]})})};t.default=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"EllipsisDropdown"}),Object(i.jsxs)("div",{className:"mt-4",children:[Object(i.jsx)(c.default,{name:"Location",desc:"src/components/shared-components/EllipsisDropdown.js"}),Object(i.jsx)(c.default,{name:"Description",desc:"Dropdown menu with ellipsis icon"}),Object(i.jsx)("div",{className:"mt-4",children:Object(i.jsxs)(s.a,{title:"Example",children:[Object(i.jsx)(d,{}),Object(i.jsx)("div",{className:"mt-4",children:Object(i.jsx)(r.a,{className:"hl-code",language:"jsx",style:o.a,children:"import React from 'react'\nimport EllipsisDropdown from 'components/shared-components/EllipsisDropdown'\nimport { Menu } from 'antd'\n\nexport default const Demo = () =>  {\n\treturn (\n\t\t<EllipsisDropdown menu={\n\t\t\t<Menu>\n\t\t\t\t<Menu.Item>\n\t\t\t\t\t<span>Menu Item 1</span>\n\t\t\t\t</Menu.Item>\n\t\t\t\t<Menu.Item>\n\t\t\t\t\t<span>Menu Item 2</span>\n\t\t\t\t</Menu.Item>\n\t\t\t\t<Menu.Item>\n\t\t\t\t\t<span>Menu Item 3</span>\n\t\t\t\t</Menu.Item>\n\t\t\t</Menu>\n\t\t}/>\n\t}\n)"})})]})}),Object(i.jsx)("h4",{className:"mt-4",children:"Props"}),Object(i.jsx)("div",{className:"api-container border-0 p-0",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Property"}),Object(i.jsx)("th",{children:"Description"}),Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"Default"})]})}),Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"menu"}),Object(i.jsx)("td",{children:"Dropdown menu"}),Object(i.jsxs)("td",{children:[Object(i.jsx)("a",{href:"https://ant.design/components/menu/",children:"Menu"})," | () => Menu"]}),Object(i.jsx)("td",{})]})})]})})]})]})}},519:function(e,t,n){"use strict";var a=n(6),c=n.n(a),r=n(5),o=n.n(r),l=n(0),s=n(7),i=n.n(s),d=n(45),m=n(64),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},u=function(e){var t=e.prefixCls,n=e.className,a=e.hoverable,r=void 0===a||a,s=p(e,["prefixCls","className","hoverable"]);return l.createElement(m.a,null,(function(e){var a=(0,e.getPrefixCls)("card",t),d=i()("".concat(a,"-grid"),n,c()({},"".concat(a,"-grid-hoverable"),r));return l.createElement("div",o()({},s,{className:d}))}))},b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},h=function(e){return l.createElement(m.a,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,c=e.className,r=e.avatar,s=e.title,d=e.description,m=b(e,["prefixCls","className","avatar","title","description"]),p=n("card",a),u=i()("".concat(p,"-meta"),c),h=r?l.createElement("div",{className:"".concat(p,"-meta-avatar")},r):null,j=s?l.createElement("div",{className:"".concat(p,"-meta-title")},s):null,f=d?l.createElement("div",{className:"".concat(p,"-meta-description")},d):null,g=j||f?l.createElement("div",{className:"".concat(p,"-meta-detail")},j,f):null;return l.createElement("div",o()({},m,{className:u}),h,g)}))},j=n(518),f=n(502),g=n(503),x=n(88),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};var v=function(e){var t,n,a,r=l.useContext(m.b),s=r.getPrefixCls,p=r.direction,b=l.useContext(x.b),h=e.prefixCls,v=e.className,O=e.extra,E=e.headStyle,C=void 0===E?{}:E,w=e.bodyStyle,N=void 0===w?{}:w,F=e.title,M=e.loading,S=e.bordered,I=void 0===S||S,k=e.size,D=e.type,P=e.cover,z=e.actions,A=e.tabList,T=e.children,B=e.activeTabKey,H=e.defaultActiveTabKey,K=e.tabBarExtraContent,R=e.hoverable,W=e.tabProps,L=void 0===W?{}:W,J=y(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),Q=s("card",h),G=0===N.padding||"0px"===N.padding?{padding:24}:void 0,q=l.createElement("div",{className:"".concat(Q,"-loading-block")}),U=l.createElement("div",{className:"".concat(Q,"-loading-content"),style:G},l.createElement(f.a,{gutter:8},l.createElement(g.a,{span:22},q)),l.createElement(f.a,{gutter:8},l.createElement(g.a,{span:8},q),l.createElement(g.a,{span:15},q)),l.createElement(f.a,{gutter:8},l.createElement(g.a,{span:6},q),l.createElement(g.a,{span:18},q)),l.createElement(f.a,{gutter:8},l.createElement(g.a,{span:13},q),l.createElement(g.a,{span:9},q)),l.createElement(f.a,{gutter:8},l.createElement(g.a,{span:4},q),l.createElement(g.a,{span:3},q),l.createElement(g.a,{span:16},q))),V=void 0!==B,X=o()(o()({},L),(t={},c()(t,V?"activeKey":"defaultActiveKey",V?B:H),c()(t,"tabBarExtraContent",K),t)),Y=A&&A.length?l.createElement(j.a,o()({size:"large"},X,{className:"".concat(Q,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),A.map((function(e){return l.createElement(j.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(F||O||Y)&&(a=l.createElement("div",{className:"".concat(Q,"-head"),style:C},l.createElement("div",{className:"".concat(Q,"-head-wrapper")},F&&l.createElement("div",{className:"".concat(Q,"-head-title")},F),O&&l.createElement("div",{className:"".concat(Q,"-extra")},O)),Y));var Z=P?l.createElement("div",{className:"".concat(Q,"-cover")},P):null,$=l.createElement("div",{className:"".concat(Q,"-body"),style:N},M?U:T),_=z&&z.length?l.createElement("ul",{className:"".concat(Q,"-actions")},function(e){return e.map((function(t,n){return l.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},l.createElement("span",null,t))}))}(z)):null,ee=Object(d.a)(J,["onTabChange"]),te=k||b,ne=i()(Q,(n={},c()(n,"".concat(Q,"-loading"),M),c()(n,"".concat(Q,"-bordered"),I),c()(n,"".concat(Q,"-hoverable"),R),c()(n,"".concat(Q,"-contain-grid"),function(){var t;return l.Children.forEach(e.children,(function(e){e&&e.type&&e.type===u&&(t=!0)})),t}()),c()(n,"".concat(Q,"-contain-tabs"),A&&A.length),c()(n,"".concat(Q,"-").concat(te),te),c()(n,"".concat(Q,"-type-").concat(D),!!D),c()(n,"".concat(Q,"-rtl"),"rtl"===p),n),v);return l.createElement("div",o()({},ee,{className:ne}),a,Z,$,_)};v.Grid=u,v.Meta=h;t.a=v},544:function(e,t,n){"use strict";n.r(t);n(0);var a=n(2);t.default=function(e){var t=e.name,n=e.desc;return Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsxs)("span",{className:"font-weight-bold text-dark",children:[t,":"]}),Object(a.jsxs)("span",{className:"text-gray-light",children:[" ",n]})]})}},559:function(e,t,n){"use strict";t.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}},987:function(e,t,n){"use strict";var a=n(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},r=n(9),o=function(e,t){return a.createElement(r.a,Object.assign({},e,{ref:t,icon:c}))};o.displayName="EllipsisOutlined";t.a=a.forwardRef(o)}}]);
//# sourceMappingURL=15.74b92ef5.chunk.js.map