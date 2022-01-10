(this.webpackJsonpQCentorApp=this.webpackJsonpQCentorApp||[]).push([[33],{1293:function(e,t,o){"use strict";o.r(t);o(0);var n=o(3331),c=o(559),r=o(2);t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"JWT"}),Object(r.jsx)("p",{children:"Emilus provide a set of code to let you work with JWT authentication & API with the server application, integration process is described below."}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{children:"Setup Base URL"}),Object(r.jsxs)("p",{children:["Setup your API endpoint URL at ",Object(r.jsx)("code",{children:"src/configs/EnvironmentConfig.js"})," depends on your project environment."]}),Object(r.jsx)(n.a,{className:"hl-code",language:"javascript",style:c.a,children:"const dev = {\n  API_ENDPOINT_URL: 'https://api.dev-example.com'\n};\n\nconst prod = {\n  API_ENDPOINT_URL: 'https://api.prod-example.com'\n};\n\nconst test = {\n  API_ENDPOINT_URL: 'https://api.test-example.com'\n};"})]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{children:"Interceptor"}),Object(r.jsxs)("p",{children:["We provided a request & response interceptor built by",Object(r.jsx)("a",{href:"https://github.com/axios/axios",children:" axios"}),", which able to found in ",Object(r.jsx)("code",{children:"src/auth/FetchInterceptor.js"}),". With this interceptor, every API call from client side will contain access token inside requeest header. You can customize your request config or error handling in this file."]})]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{children:"Services"}),Object(r.jsxs)("p",{children:["In order to facilitate manage and maintain, we placed all API integrations related files in ",Object(r.jsx)("code",{children:"src/services/"})," folder. Linked up with interceptor above, you can setup your services as below:"]}),Object(r.jsx)(n.a,{className:"hl-code",language:"javascript",style:c.a,children:"import fetch from 'auth/FetchInterceptor'\n\nconst exampleService = {}\n\nexampleService.getPost = function (params) {\n  return fetch({\n    url: '/posts/1',\n    method: 'get',\n    params\n  })\n}\n\nexampleService.setPost = function (data) {\n  return fetch({\n    url: '/posts',\n    method: 'post',\n    data: data\n  })\n}\n\nexport default exampleService"}),Object(r.jsxs)("p",{className:"mt-3",children:["You can add ",Object(r.jsx)("code",{children:"public-request"})," to header to skip JWT checking."]}),Object(r.jsx)(n.a,{className:"hl-code",language:"javascript",style:c.a,children:"exampleService.fetchData = function (data) {\n\treturn fetch({\n\t\turl: '/posts',\n\t\tmethod: 'post',\n\t\theaders: {\n      'public-request': 'true'\n    },\n\t\tdata: data\n\t})\n}"})]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{children:"Usage"}),Object(r.jsx)("p",{children:"Now you can call services in component or sagas"}),Object(r.jsx)(n.a,{className:"hl-code",language:"javascript",style:c.a,children:"import exampleService from 'services/exampleService'\nconst callApi = () => {\n\texampleService.setPost(JSON.stringify({\n\t\ttitle: 'foo',\n\t\tbody: 'bar',\n\t\tuserId: 1\n\t})).then(resp => console.log('resp', resp))\n}"})]})]})}},559:function(e,t,o){"use strict";t.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=33.bfc63edc.chunk.js.map