(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[12],{433:function(e,t,s){"use strict";var a=s(435),r=s.n(a),i=s(35),n=s(436).a(),c=s(28),o=s(254),l=r.a.create({baseURL:i.a,timeout:6e4}),u="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(c.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(n.push(u),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(c.b),n.push(u),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var m=l,d={login:function(e){return m({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return m({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=d},441:function(e,t,s){"use strict";var a=s(2),r=s(71),i=s(0),n=s(38),c=s(482),o=s(483),l=s(479),u=s(481),m=s(416),d=s(113),j=s(52),h=s(41),g=s(438),b=s(433),p={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,s){return s&&t("password")!==s?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},x={showAuthMessage:j.c,hideAuthMessage:j.b,showLoading:j.d,authenticated:j.a};t.a=Object(n.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),x)((function(e){var t=e.showLoading,s=e.token,n=e.loading,x=e.redirect,f=e.message,O=e.showMessage,v=e.hideAuthMessage,w=e.authenticated,y=e.allowRedirect,N=l.a.useForm(),k=Object(r.a)(N,1)[0],P=Object(h.g)();return Object(i.useEffect)((function(){null!==s&&y&&P.push(x),O&&setTimeout((function(){v()}),3e3)})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(a.jsx)(u.a,{type:"error",showIcon:!0,message:f})}),Object(a.jsxs)(l.a,{form:k,layout:"vertical",name:"register-form",onFinish:function(){k.validateFields().then((function(e){t();b.a.signUp(e).then((function(e){w("fakeToken")})).then((function(e){Object(j.c)(e)}))})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(a.jsx)(l.a.Item,{name:"email",label:"Email",rules:p.email,hasFeedback:!0,children:Object(a.jsx)(m.a,{prefix:Object(a.jsx)(c.a,{className:"text-primary"})})}),Object(a.jsx)(l.a.Item,{name:"password",label:"Password",rules:p.password,hasFeedback:!0,children:Object(a.jsx)(m.a.Password,{prefix:Object(a.jsx)(o.a,{className:"text-primary"})})}),Object(a.jsx)(l.a.Item,{name:"confirm",label:"ConfirmPassword",rules:p.confirm,hasFeedback:!0,children:Object(a.jsx)(m.a.Password,{prefix:Object(a.jsx)(o.a,{className:"text-primary"})})}),Object(a.jsx)(l.a.Item,{children:Object(a.jsx)(d.a,{type:"primary",htmlType:"submit",block:!0,loading:n,children:"Sign Up"})})]})]})}))},474:function(e,t,s){"use strict";s.r(t);var a=s(17),r=s(2),i=(s(0),s(441)),n=s(439),c=s(440),o=s(38),l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(r.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(r.jsxs)(n.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(r.jsx)(c.a,{xs:20,sm:20,md:24,lg:16,children:Object(r.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(r.jsx)(n.a,{justify:"center",children:Object(r.jsxs)(c.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(r.jsx)("h1",{children:"Sign Up"}),Object(r.jsxs)("p",{children:["Already have an account? ",Object(r.jsx)("a",{href:"/auth/login-2",children:"Sign In"})]}),Object(r.jsx)("div",{className:"mt-4",children:Object(r.jsx)(i.a,Object(a.a)({},e))})]})})})}),Object(r.jsx)(c.a,{xs:0,sm:0,md:0,lg:8,children:Object(r.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(r.jsx)("div",{className:"text-right",children:Object(r.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(r.jsx)(n.a,{justify:"center",children:Object(r.jsxs)(c.a,{xs:0,sm:0,md:0,lg:20,children:[Object(r.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-19.png",alt:""}),Object(r.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(r.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(r.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(r.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(r.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=12.041875b4.chunk.js.map