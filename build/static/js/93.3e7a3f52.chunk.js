(this.webpackJsonpQCentorApp=this.webpackJsonpQCentorApp||[]).push([[93],{3270:function(e,o,t){"use strict";t.r(o),t.d(o,"GoogleMap",(function(){return w}));var c=t(103),n=t(104),a=t(154),r=t(155),l=t(0),s=t.n(l),i=t(497),d=t(498),u=t.p+"static/media/index.6ee2b272.md",h=t.p+"static/media/Simple.8bb836e6.md",b=t.p+"static/media/Hover.506bc26f.md",j=t.p+"static/media/Event.297ef7e0.md",p=t(991),g=t(2),f=function(){return Object(g.jsx)("img",{src:"/img/others/marker.png",alt:""})},m=function(e){Object(a.a)(t,e);var o=Object(r.a)(t);function t(){return Object(c.a)(this,t),o.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(g.jsx)("div",{style:{height:"300px",width:"100%"},children:Object(g.jsx)(p.a,{defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:Object(g.jsx)(f,{lat:59.955413,lng:30.337844})})})}}]),t}(l.Component);m.defaultProps={center:{lat:59.95,lng:30.33},zoom:11};var x=m,O=t(156),C=function(e){var o=e.text;return Object(g.jsx)(O.a,{title:"Location ".concat(o),children:Object(g.jsx)("img",{className:"cursor-pointer",src:"/img/others/marker.png",alt:""})})},v=function(e){Object(a.a)(t,e);var o=Object(r.a)(t);function t(){return Object(c.a)(this,t),o.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(g.jsx)("div",{style:{height:"300px",width:"100%"},children:Object(g.jsxs)(p.a,{center:[59.938043,30.337157],zoom:8,hoverDistance:20,children:[Object(g.jsx)(C,{lat:59.955413,lng:30.337844,text:"A"}),Object(g.jsx)(C,{lat:59.724465,lng:30.080121,text:"B"})]})})}}]),t}(l.Component),k=t(12),y=t(230),D=function(e){e.text;return Object(g.jsx)("img",{className:"cursor-pointer",src:"/img/others/marker.png",alt:""})},B=function(e){Object(a.a)(t,e);var o=Object(r.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=o.call.apply(o,[this].concat(a))).state={center:[59.838043,30.337157],zoom:9,greatPlaces:[{id:"A",lat:59.955413,lng:30.337844},{id:"B",lat:59.724,lng:30.08}]},e.onChange=function(e){console.log("onChange works!",e)},e.onClick=function(o){console.log("onClick works!",o);var t=o.lat,c=o.lng;e.setState({center:[t,c]})},e.onChildMouseEnter=function(e,o){console.log("onChildMouseEnter works!",e,o)},e.onChildMouseLeave=function(e,o){console.log("onChildMouseLeave works!",e,o)},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.state.greatPlaces.map((function(e){var o=e.id,t=Object(y.a)(e,["id"]);return Object(g.jsx)(D,Object(k.a)(Object(k.a)({},t),{},{text:o}),o)}));return Object(g.jsx)("div",{style:{height:"500px",width:"100%"},children:Object(g.jsx)(p.a,{center:this.state.center,zoom:this.state.zoom,hoverDistance:20,onChange:this.onChange,onClick:this.onClick,onChildMouseEnter:this.onChildMouseEnter,onChildMouseLeave:this.onChildMouseLeave,children:e})})}}]),t}(l.Component),w=function(e){Object(a.a)(t,e);var o=Object(r.a)(t);function t(){return Object(c.a)(this,t),o.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsx)(i.a,{code:h,children:Object(g.jsx)(x,{})}),Object(g.jsx)(i.a,{code:b,children:Object(g.jsx)(v,{})}),Object(g.jsx)(i.a,{code:j,children:Object(g.jsx)(B,{})}),Object(g.jsx)(d.a,{code:u})]})}}]),t}(l.Component);o.default=w},497:function(e,o,t){"use strict";var c=t(16),n=t(0),a=t.n(n),r=t(542),l=t.n(r),s=t(103),i=t(104),d=t(154),u=t(155),h=t(3329),b={'code[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#2b2b2b"},'pre[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:".1em",borderRadius:".3em"},comment:{color:"#808080"},prolog:{color:"#808080"},cdata:{color:"#808080"},delimiter:{color:"#cc7832"},boolean:{color:"#cc7832"},keyword:{color:"#cc7832"},selector:{color:"#cc7832"},important:{color:"#cc7832"},atrule:{color:"#cc7832"},operator:{color:"#a9b7c6"},punctuation:{color:"#a9b7c6"},"attr-name":{color:"#a9b7c6"},tag:{color:"#e8bf6a"},"tag .punctuation":{color:"#e8bf6a"},doctype:{color:"#e8bf6a"},builtin:{color:"#e8bf6a"},entity:{color:"#6897bb"},number:{color:"#6897bb"},symbol:{color:"#6897bb"},property:{color:"#9876aa"},constant:{color:"#9876aa"},variable:{color:"#9876aa"},string:{color:"#6a8759"},char:{color:"#6a8759"},"attr-value":{color:"#a5c261"},"attr-value .punctuation":{color:"#a5c261"},"attr-value .punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline"},function:{color:"#ffc66d"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#294436"},deleted:{background:"#484a4a"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"}},j=t(563),p=t(974),g=t(1066),f=t(1067),m=t(1068),x=t(156),O=t(2),C=function(e){Object(d.a)(t,e);var o=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=o.call.apply(o,[this].concat(n))).state={copied:!1,copyTooltipVisible:!1},e.handleCodeCopied=function(){e.setState({copied:!0})},e.onCopyTooltipVisibleChange=function(o){o?e.setState({copyTooltipVisible:o,copied:!1}):e.setState({copyTooltipVisible:o})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,o=this.props,t=o.code,c=o.expand,n=o.isExpand,a=this.state,r=a.copied,l=a.copyTooltipVisible;return Object(O.jsxs)("div",{className:"code-box-actions",children:[Object(O.jsx)("span",{className:"code-box-icon mr-3 ".concat(r&&l?"text-success":""),children:Object(O.jsx)(x.a,{title:r?"Copied":"Copy code",visible:l,onVisibleChange:this.onCopyTooltipVisibleChange,children:Object(O.jsx)(j.CopyToClipboard,{text:t,onCopy:function(){return e.handleCodeCopied()},children:r?Object(O.jsx)(p.a,{}):Object(O.jsx)(g.a,{})})})}),Object(O.jsx)("span",{className:"code-box-icon",onClick:c,children:Object(O.jsx)(x.a,{title:n?"Hide code":"Show code",children:n?Object(O.jsx)(f.a,{}):Object(O.jsx)(m.a,{})})})]})}}]),t}(n.Component),v=function(e){Object(d.a)(t,e);var o=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=o.call.apply(o,[this].concat(n))).state={codeExpand:!1},e.exapandCallBack=function(){e.setState({codeExpand:!e.state.codeExpand})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,o=e.language,t=e.value;return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(C,{code:t,expand:this.exapandCallBack,isExpand:this.state.codeExpand}),Object(O.jsx)("div",{className:"code-box-highlight ".concat(this.state.codeExpand?"d-block":"d-none"),children:Object(O.jsx)(h.a,{language:o,style:b,children:t})})]})}}]),t}(n.PureComponent);v.defaultProps={language:null};var k=v;o.a=function(e){var o=e.code,t=e.children,a="en-US: ",r=Object(n.useState)(""),s=Object(c.a)(r,2),i=s[0],d=s[1];return Object(n.useEffect)((function(){var e=!0;return fetch(o).then((function(e){return e.text()})).then((function(o){e&&d(o)})),function(){e=!1}}),[o]),Object(O.jsxs)("div",{className:"code-box",children:[Object(O.jsx)("section",{className:"code-box-demo",children:t}),Object(O.jsx)("section",{className:"code-box-description",children:Object(O.jsx)(l.a,{source:i,renderers:{heading:function(e){return Object(O.jsx)("h4",{children:e.children[0].props.value.includes(a)?e.children[0].props.value.replace(a,""):""})},thematicBreak:function(){return Object(O.jsx)(O.Fragment,{})},paragraph:function(e){return Object(O.jsx)(O.Fragment,{children:e.children[0].props.value.match(/[\u4e00-\u9faf]/)?"":Object(O.jsx)("p",{className:"mb-0",children:e.children})})},code:k}})})]})}},498:function(e,o,t){"use strict";var c=t(16),n=t(0),a=t.n(n),r=t(542),l=t.n(r),s=t(1177),i={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#1E1E1E",color:"#DCDCDC"},"hljs-keyword":{color:"#569CD6"},"hljs-literal":{color:"#569CD6"},"hljs-symbol":{color:"#569CD6"},"hljs-name":{color:"#569CD6"},"hljs-link":{color:"#569CD6",textDecoration:"underline"},"hljs-built_in":{color:"#4EC9B0"},"hljs-type":{color:"#4EC9B0"},"hljs-number":{color:"#B8D7A3"},"hljs-class":{color:"#B8D7A3"},"hljs-string":{color:"#D69D85"},"hljs-meta-string":{color:"#D69D85"},"hljs-regexp":{color:"#9A5334"},"hljs-template-tag":{color:"#9A5334"},"hljs-subst":{color:"#DCDCDC"},"hljs-function":{color:"#DCDCDC"},"hljs-title":{color:"#DCDCDC"},"hljs-params":{color:"#DCDCDC"},"hljs-formula":{color:"#DCDCDC"},"hljs-comment":{color:"#57A64A",fontStyle:"italic"},"hljs-quote":{color:"#57A64A",fontStyle:"italic"},"hljs-doctag":{color:"#608B4E"},"hljs-meta":{color:"#9B9B9B"},"hljs-meta-keyword":{color:"#9B9B9B"},"hljs-tag":{color:"#9B9B9B"},"hljs-variable":{color:"#BD63C5"},"hljs-template-variable":{color:"#BD63C5"},"hljs-attr":{color:"#9CDCFE"},"hljs-attribute":{color:"#9CDCFE"},"hljs-builtin-name":{color:"#9CDCFE"},"hljs-section":{color:"gold"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"},"hljs-bullet":{color:"#D7BA7D"},"hljs-selector-tag":{color:"#D7BA7D"},"hljs-selector-id":{color:"#D7BA7D"},"hljs-selector-class":{color:"#D7BA7D"},"hljs-selector-attr":{color:"#D7BA7D"},"hljs-selector-pseudo":{color:"#D7BA7D"},"hljs-addition":{backgroundColor:"#144212",display:"inline-block",width:"100%"},"hljs-deletion":{backgroundColor:"#600",display:"inline-block",width:"100%"}},d=t(2);o.a=function(e){var o=e.code,t=Object(n.useState)(""),r=Object(c.a)(t,2),u=r[0],h=r[1];return Object(n.useEffect)((function(){var e=!0;return fetch(o).then((function(e){return e.text()})).then((function(o){e&&h(o)})),function(){e=!1}}),[o]),Object(d.jsx)("div",{className:"api-container",children:Object(d.jsx)(l.a,{source:u,renderers:{heading:function(e){return Object(d.jsx)("div",{className:"api-title h".concat(e.level," ").concat(e.children[0].props.value.includes("title: ")?"":e.children[0].props.value.split("").join("").replace(/\s/g,"-").toLowerCase()),children:e.children[0].props.value.includes("title: ")?e.children[0].props.value.replace("title: ",""):e.children})},paragraph:function(e){return Object(d.jsx)(a.a.Fragment,{children:"text-2-1-0"===e.children[0].props.nodeKey?"":Object(d.jsx)("p",{children:e.children})})},code:function(e){return Object(d.jsx)("div",{className:"api-code-highligher",children:Object(d.jsx)(s.a,{style:i,children:e.value})})}}})})}}}]);
//# sourceMappingURL=93.3e7a3f52.chunk.js.map