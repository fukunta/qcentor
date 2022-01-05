(this.webpackJsonpQCentorApp=this.webpackJsonpQCentorApp||[]).push([[13,39],{1056:function(e,t,a){"use strict";var c=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"}}]},name:"bar-chart",theme:"outlined"},r=a(9),l=function(e,t){return c.createElement(r.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="BarChartOutlined";t.a=c.forwardRef(l)},1071:function(e,t,a){"use strict";var c=a(12),n=(a(0),a(519)),r=a(486),l=a(142),o=a(995),i=a(2),s=function(e){var t=e.size,a=e.value,s=e.title,d=e.icon,b=e.color,m=e.avatarSize,j=e.vertical,h={size:t,value:a,title:s};return Object(i.jsx)(n.a,{children:Object(i.jsxs)(l.a,{alignItems:"center",flexDirection:j?"column":"row",children:[Object(i.jsx)(r.a,{size:m,shape:"square",icon:d,className:"ant-avatar-".concat(b)}),Object(i.jsx)("div",{className:j?"mt-3 text-center":"ml-3",children:Object(i.jsx)(o.a,Object(c.a)({},h))})]})})};s.defaultProps={avatarSize:50,vertical:!1},t.a=s},1283:function(e,t,a){"use strict";a.r(t);a(0);var c=a(1071),n=a(544),r=a(3329),l=a(559),o=a(519),i=a(1056),s=a(2),d=function(){return Object(s.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[Object(s.jsx)("div",{style:{width:300},children:Object(s.jsx)(c.a,{icon:Object(s.jsx)(i.a,{}),value:"$11,388",title:"Revenue",color:"blue",size:"md",avatarSize:50,vertical:!1})}),Object(s.jsx)("div",{style:{width:300},children:Object(s.jsx)(c.a,{icon:Object(s.jsx)(i.a,{}),value:"$37,212",title:"Net Profit",color:"cyan",size:"md",avatarSize:50,vertical:!0})})]})};t.default=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"DataDisplayWidget"}),Object(s.jsxs)("div",{className:"mt-4",children:[Object(s.jsx)(n.default,{name:"Location",desc:"src/components/shared-components/DataDisplayWidget.js"}),Object(s.jsx)(n.default,{name:"Description",desc:"Display highlight with icon"}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsxs)(o.a,{title:"Example",children:[Object(s.jsx)(d,{}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsx)(r.a,{className:"hl-code",language:"jsx",style:l.a,children:'import React from \'react\'\nimport DataDisplayWidget from \'components/shared-components/DataDisplayWidget\'\nimport { BarChartOutlined } from \'@ant-design/icons\';\n\nexport default const Demo = () =>  (\n\treturn (\n\t\t<div className="d-flex align-items-center flex-column">\n\t\t\t<div style={{width: 300}}>\n\t\t\t\t<DataDisplayWidget \n\t\t\t\t\ticon={<BarChartOutlined />}\n\t\t\t\t\tvalue="$11,388"\n\t\t\t\t\ttitle="Revenue"\n\t\t\t\t\tcolor="blue"\n\t\t\t\t\tsize={\'md\'}\n\t\t\t\t\tavatarSize={50}\n\t\t\t\t\tvertical={false}\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<div style={{width: 300}}>\n\t\t\t\t<DataDisplayWidget \n\t\t\t\t\ticon={<BarChartOutlined />}\n\t\t\t\t\tvalue="$37,212"\n\t\t\t\t\ttitle="Net Profit"\n\t\t\t\t\tcolor="cyan"\n\t\t\t\t\tsize={\'md\'}\n\t\t\t\t\tavatarSize={50}\n\t\t\t\t\tvertical={true}\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\t)\n)'})})]})}),Object(s.jsx)("h4",{className:"mt-4",children:"Props"}),Object(s.jsx)("div",{className:"api-container border-0 p-0",children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Property"}),Object(s.jsx)("th",{children:"Description"}),Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Default"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"value"}),Object(s.jsx)("td",{children:"Display value"}),Object(s.jsx)("td",{children:"string | number"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"title"}),Object(s.jsx)("td",{children:"Display title"}),Object(s.jsx)("td",{children:"string"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"size"}),Object(s.jsx)("td",{children:"Value size"}),Object(s.jsx)("td",{children:"sm | md | lg"}),Object(s.jsx)("td",{children:"md"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"icon"}),Object(s.jsx)("td",{children:"Custom icon type for icon avatar"}),Object(s.jsx)("td",{children:"ReactNode"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"color"}),Object(s.jsx)("td",{children:"icon color"}),Object(s.jsx)("td",{children:"red | orange | gold | green | blue | cyan | purple | magenta | volcano | lime | geekblue"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"avatarSize"}),Object(s.jsx)("td",{children:"icon avatar size"}),Object(s.jsx)("td",{children:"numbere"}),Object(s.jsx)("td",{children:"50"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"vertical"}),Object(s.jsx)("td",{children:"Display as vertical mode"}),Object(s.jsx)("td",{children:"boolean"}),Object(s.jsx)("td",{children:"false"})]})]})]})})]})]})}},519:function(e,t,a){"use strict";var c=a(6),n=a.n(c),r=a(5),l=a.n(r),o=a(0),i=a(7),s=a.n(i),d=a(45),b=a(64),m=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},j=function(e){var t=e.prefixCls,a=e.className,c=e.hoverable,r=void 0===c||c,i=m(e,["prefixCls","className","hoverable"]);return o.createElement(b.a,null,(function(e){var c=(0,e.getPrefixCls)("card",t),d=s()("".concat(c,"-grid"),a,n()({},"".concat(c,"-grid-hoverable"),r));return o.createElement("div",l()({},i,{className:d}))}))},h=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},u=function(e){return o.createElement(b.a,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,n=e.className,r=e.avatar,i=e.title,d=e.description,b=h(e,["prefixCls","className","avatar","title","description"]),m=a("card",c),j=s()("".concat(m,"-meta"),n),u=r?o.createElement("div",{className:"".concat(m,"-meta-avatar")},r):null,p=i?o.createElement("div",{className:"".concat(m,"-meta-title")},i):null,v=d?o.createElement("div",{className:"".concat(m,"-meta-description")},d):null,x=p||v?o.createElement("div",{className:"".concat(m,"-meta-detail")},p,v):null;return o.createElement("div",l()({},b,{className:j}),u,x)}))},p=a(518),v=a(502),x=a(503),O=a(88),f=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var g=function(e){var t,a,c,r=o.useContext(b.b),i=r.getPrefixCls,m=r.direction,h=o.useContext(O.b),u=e.prefixCls,g=e.className,y=e.extra,E=e.headStyle,C=void 0===E?{}:E,N=e.bodyStyle,w=void 0===N?{}:N,z=e.title,F=e.loading,S=e.bordered,D=void 0===S||S,P=e.size,k=e.type,A=e.cover,B=e.actions,T=e.tabList,W=e.children,H=e.activeTabKey,M=e.defaultActiveTabKey,R=e.tabBarExtraContent,I=e.hoverable,K=e.tabProps,V=void 0===K?{}:K,$=f(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),L=i("card",u),J=0===w.padding||"0px"===w.padding?{padding:24}:void 0,Q=o.createElement("div",{className:"".concat(L,"-loading-block")}),q=o.createElement("div",{className:"".concat(L,"-loading-content"),style:J},o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:22},Q)),o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:8},Q),o.createElement(x.a,{span:15},Q)),o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:6},Q),o.createElement(x.a,{span:18},Q)),o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:13},Q),o.createElement(x.a,{span:9},Q)),o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:4},Q),o.createElement(x.a,{span:3},Q),o.createElement(x.a,{span:16},Q))),G=void 0!==H,U=l()(l()({},V),(t={},n()(t,G?"activeKey":"defaultActiveKey",G?H:M),n()(t,"tabBarExtraContent",R),t)),X=T&&T.length?o.createElement(p.a,l()({size:"large"},U,{className:"".concat(L,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),T.map((function(e){return o.createElement(p.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(z||y||X)&&(c=o.createElement("div",{className:"".concat(L,"-head"),style:C},o.createElement("div",{className:"".concat(L,"-head-wrapper")},z&&o.createElement("div",{className:"".concat(L,"-head-title")},z),y&&o.createElement("div",{className:"".concat(L,"-extra")},y)),X));var Y=A?o.createElement("div",{className:"".concat(L,"-cover")},A):null,Z=o.createElement("div",{className:"".concat(L,"-body"),style:w},F?q:W),_=B&&B.length?o.createElement("ul",{className:"".concat(L,"-actions")},function(e){return e.map((function(t,a){return o.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},o.createElement("span",null,t))}))}(B)):null,ee=Object(d.a)($,["onTabChange"]),te=P||h,ae=s()(L,(a={},n()(a,"".concat(L,"-loading"),F),n()(a,"".concat(L,"-bordered"),D),n()(a,"".concat(L,"-hoverable"),I),n()(a,"".concat(L,"-contain-grid"),function(){var t;return o.Children.forEach(e.children,(function(e){e&&e.type&&e.type===j&&(t=!0)})),t}()),n()(a,"".concat(L,"-contain-tabs"),T&&T.length),n()(a,"".concat(L,"-").concat(te),te),n()(a,"".concat(L,"-type-").concat(k),!!k),n()(a,"".concat(L,"-rtl"),"rtl"===m),a),g);return o.createElement("div",l()({},ee,{className:ae}),c,Y,Z,_)};g.Grid=j,g.Meta=u;t.a=g},544:function(e,t,a){"use strict";a.r(t);a(0);var c=a(2);t.default=function(e){var t=e.name,a=e.desc;return Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsxs)("span",{className:"font-weight-bold text-dark",children:[t,":"]}),Object(c.jsxs)("span",{className:"text-gray-light",children:[" ",a]})]})}},559:function(e,t,a){"use strict";t.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}},995:function(e,t,a){"use strict";a(0);var c=a(2),n=function(e){var t;switch(e.size){case"lg":t=Object(c.jsx)("h1",{className:"mb-0 font-weight-bold",children:e.value});break;case"md":t=Object(c.jsx)("h2",{className:"mb-0 font-weight-bold",children:e.value});break;case"sm":t=Object(c.jsx)("h3",{className:"mb-0 font-weight-bold",children:e.value});break;default:t=Object(c.jsx)("h3",{className:"mb-0 font-weight-bold",children:e.value})}return t},r=function(e){var t=e.size,a=e.value,r=e.title;return Object(c.jsxs)("div",{children:[Object(c.jsx)(n,{value:a,size:t}),Object(c.jsx)("p",{className:"mb-0 text-muted",children:r})]})};r.defaultProps={size:"md"},t.a=r}}]);
//# sourceMappingURL=13.dcbd6407.chunk.js.map