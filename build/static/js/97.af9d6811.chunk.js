(this.webpackJsonpQCentorApp=this.webpackJsonpQCentorApp||[]).push([[97],{3327:function(e,t,s){"use strict";s.r(t),s.d(t,"Login",(function(){return A}));var c=s(0),a=s(13),n=s(47),o=s(985),i=s(560),r=s(436),l=s(125),u=s(471),g=s(972),h=s(48),d=s(52),f=s(1174),m=s(2),w=function(e){var t=Object(d.g)(),s=e.showForgetPassword,a=e.hideAuthMessage,n=e.hideSuccessMessage,h=e.showLoading,w=e.extra,j=e.signIn,b=e.token,p=e.loading,y=e.redirect,x=e.showMessage,O=e.showSuccess,B=e.message,D=e.allowRedirect;return Object(c.useEffect)((function(){null!==b&&D&&t.push(y),x&&setTimeout((function(){a()}),3e3),O&&setTimeout((function(){n()}),4e3)})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:x?1:0,marginBottom:x?20:0},children:Object(m.jsx)(o.a,{type:"error",showIcon:!0,message:B})}),Object(m.jsx)(f.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(m.jsx)(o.a,{type:"success",showIcon:!0,message:B})}),Object(m.jsxs)(i.a,{layout:"vertical",name:"login-form",initialValues:{email:"",password:""},onFinish:function(e){h(),j(e)},children:[Object(m.jsx)(i.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(m.jsx)(r.a,{prefix:Object(m.jsx)(u.a,{className:"text-primary"})})}),Object(m.jsx)(i.a.Item,{name:"password",label:Object(m.jsxs)("div",{className:"".concat(s?"d-flex justify-content-end w-100 align-items-center":""),children:[Object(m.jsx)("span",{children:"Password"}),s&&Object(m.jsx)("span",{onClick:function(){t.push("/auth/forgot-password")},className:"cursor-pointer font-size-sm font-weight-normal text-muted ml-1",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(m.jsx)(r.a.Password,{prefix:Object(m.jsx)(g.a,{className:"text-primary"})})}),Object(m.jsx)(i.a.Item,{children:Object(m.jsx)(l.a,{type:"primary",htmlType:"submit",block:!0,loading:p,children:"Sign In"})}),w]})]})};w.defaultProps={otherSignIn:!1,showForgetPassword:!0};var j={signIn:h.h,showAuthMessage:h.e,showLoading:h.f,hideAuthMessage:h.b,showSuccessMessage:h.g,hideSuccessMessage:h.c},b=Object(n.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,showSuccess:t.showSuccess,token:t.token,redirect:t.redirect}}),j)(w),p=s(502),y=s(503),x=s(519),O={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},B=function(e){var t=Object(d.g)(),s=Object(n.c)((function(e){return e.theme.currentTheme}));return Object(m.jsx)("div",{className:"h-100",style:O,children:Object(m.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(m.jsx)(p.a,{justify:"center",children:Object(m.jsx)(y.a,{xs:20,sm:20,md:18,lg:12,children:Object(m.jsx)(x.a,{children:Object(m.jsxs)("div",{className:"my-4",children:[Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===s?"logo.png":"logo-white.png"),alt:""})}),Object(m.jsxs)(p.a,{justify:"center",children:[Object(m.jsx)(y.a,{xs:24,sm:24,md:20,lg:20,children:Object(m.jsx)(b,Object(a.a)({},e))}),Object(m.jsxs)("p",{children:["Don't have an account yet? ",Object(m.jsx)("a",{href:"/#",onClick:function(e){e.preventDefault(),t.push("/auth/register")},children:"Sign Up"})]})]})]})})})})})})},D=s(24),v=s(28);class A extends c.Component{constructor(...e){super(...e),this.state={brandsDB:new v.a("brands"),categoryDB:new v.a("category"),customersDB:new v.a("customers"),employeesDB:new v.a("employees"),paymentsDB:new v.a("payments"),productsDB:new v.a("products"),purchasesDB:new v.a("purchases"),refillDB:new v.a("move"),recordsDB:new v.a("records"),salesDB:new v.a("sales"),sourcesDB:new v.a("products_record"),storesDB:new v.a("stores"),settingsDB:new v.a("settings"),usersDB:new v.a("users")}}render(){const{brandsDB:e,categoryDB:t,customersDB:s,employeesDB:c,productsDB:a,purchasesDB:n,recordsDB:o,refillDB:i,salesDB:r,sourcesDB:l,storesDB:u,paymentsDB:g,settingsDB:h}=this.state;return D.b.disableNetwork().then((()=>{!async function(){if(0===(await D.b.collection("brands").get()).docs.length){(await e.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("category").get()).docs.length){(await t.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("customers").get()).docs.length){(await s.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("employees").get()).docs.length){(await c.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("products").get()).docs.length){(await a.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("purchases").get()).docs.length){(await n.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("move").get()).docs.length){(await i.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("records").get()).docs.length){(await o.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("sales").get()).docs.length){(await r.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("products_record").get()).docs.length){(await l.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("stores").get()).docs.length){(await u.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("settings").get()).docs.length){(await h.getAllRows()).forEach((function(e){}))}}(),async function(){if(0===(await D.b.collection("payments").get()).docs.length){(await g.getAllRows()).forEach((function(e){}))}}(),D.b.enableNetwork()})),Object(m.jsx)(B,{allowRedirect:!0})}}t.default=A},972:function(e,t,s){"use strict";var c=s(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},n=s(9),o=function(e,t){return c.createElement(n.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="LockOutlined";t.a=c.forwardRef(o)}}]);
//# sourceMappingURL=97.af9d6811.chunk.js.map