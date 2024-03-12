(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{45:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(20),c=a.n(r),n=a(2),o=(a(45),a(5)),l=a(6),i=a(4),d=a.n(i),j=a(13),u=a(14),b=a.n(u),p="USER_REGISTER_REQUEST",m="USER_REGISTER_SUCCESS",h="USER_REGISTER_FAIL",O="USER_LOGIN_REQUEST",x="USER_LOGIN_SUCCESS",f="USER_LOGIN_FAIL",g="USER_LOGOUT",v="USER_PROFILE_REQUEST",y="USER_PROFILE_SUCCESS",N="USER_PROFILE_FAIL",E="USER_UPDATE_REQUEST",S="USER_UPDATE_SUCCESS",w="USER_UPDATE_FAIL",k="FETCH_USERS_REQUEST",C="FETCH_USERS_SUCCESS",_="CREATE_USERS_FAIL",I="CREATE_BOOK_REQUEST",U="CREATE_BOOK_SUCCESS",L="CREATE_BOOK_FAIL",R="FETCH_BOOK_REQUEST",T="FETCH_BOOK_SUCCESS",A="CREATE_BOOK_FAIL",B="BOOK_DETAIL_REQUEST",F="BOOK_DETAIL_SUCCESS",P="BOOK_DETAIL_FAIL",D=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userAuthData");try{t({type:g})}catch(a){}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=a(0),H=function(){var e=Object(n.b)(),t=Object(l.e)(),a=Object(n.c)((function(e){return e.userLogin})).userInfo;return Object(K.jsx)("header",{children:Object(K.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(K.jsx)(o.b,{className:"navbar-brand",to:"/",children:"BK"}),Object(K.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(K.jsx)("span",{className:"navbar-toggler-icon"})}),Object(K.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarColor01",children:[Object(K.jsxs)("ul",{className:"navbar-nav m-auto",children:[Object(K.jsx)("li",{className:"nav-item active",children:Object(K.jsxs)(o.b,{className:"nav-link",to:"/",children:["Home ",Object(K.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(K.jsxs)("li",{className:"nav-item",children:[Object(K.jsx)("button",{type:"button",className:"btn btn-danger","data-toggle":"modal","data-target":"#about",children:"About"}),Object(K.jsx)("div",{className:"modal fade",id:"about",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(K.jsx)("div",{className:"modal-dialog",children:Object(K.jsxs)("div",{className:"modal-content",children:[Object(K.jsxs)("div",{className:"modal-header",children:[Object(K.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"App functionalities"}),Object(K.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(K.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(K.jsx)("div",{className:"modal-body",children:Object(K.jsxs)("ul",{className:"list-group",children:[Object(K.jsxs)("li",{className:"list-group-item active",children:[Object(K.jsx)("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"Register User",Object(K.jsx)("hr",{})]}),Object(K.jsxs)("li",{className:"list-group-item",children:[Object(K.jsx)("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"Update Profile",Object(K.jsx)("hr",{})]}),Object(K.jsxs)("li",{className:"list-group-item",children:[Object(K.jsx)("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"Login",Object(K.jsx)("hr",{})]}),Object(K.jsxs)("li",{className:"list-group-item",children:[Object(K.jsx)("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"User Dashboard",Object(K.jsx)("hr",{})]}),Object(K.jsxs)("li",{className:"list-group-item",children:[Object(K.jsx)("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"List of Users",Object(K.jsx)("hr",{})]}),Object(K.jsxs)("li",{className:"list-group-item",children:[Object(K.jsx)("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"List of Books",Object(K.jsx)("hr",{})]}),Object(K.jsxs)("li",{className:"list-group-item",children:[Object(K.jsx)("i",{className:"fas fa-clipboard-list text-white mr-3",style:{fontSize:"1.5rem"}}),"Many more",Object(K.jsx)("hr",{})]})]})}),Object(K.jsxs)("div",{className:"modal-footer",children:[Object(K.jsx)("a",{className:"mr-5",href:"https://github.com/tweneboah",target:"_",children:"developed by: CodeUnited"}),Object(K.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",children:"Close"})]})]})})})]}),a?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)(o.b,{className:"nav-link",to:"/books",children:"Books"})}),Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)(o.b,{className:"nav-link",to:"/addbook",children:"Add book"})}),Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)(o.b,{className:"nav-link",to:"/users",children:"Users"})}),Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)(o.b,{className:"nav-link",to:"/login",onClick:function(){return e(D())},children:"Logout"})})]}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)(o.b,{className:"nav-link",to:"/register",children:"Register"})})]}),a?Object(K.jsxs)("li",{className:"nav-item dropdown",children:[Object(K.jsx)("a",{className:"nav-link dropdown-toggle btn-dark","data-toggle":"dropdown",href:"/",role:"button","aria-haspopup":"true","aria-expanded":"false",children:a.name}),Object(K.jsxs)("div",{className:"dropdown-menu",children:[Object(K.jsx)(o.b,{className:"dropdown-item",to:"/profile",children:"Profile"}),Object(K.jsx)(o.b,{className:"dropdown-item",to:"/addbook",children:"Add book"}),Object(K.jsx)(o.b,{className:"dropdown-item",to:"/books",children:"Books"}),Object(K.jsx)("div",{className:"dropdown-divider"}),Object(K.jsx)("button",{onClick:function(){e(D()),t.push("/")},className:"dropdown-item",children:"Logout"})]})]}):""]}),Object(K.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(K.jsx)("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),Object(K.jsx)("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})})},Q=(a(68),a.p+"static/media/book.0d273167.jpg"),z=a.p+"static/media/books.8157d513.mp4",M=function(){return Object(K.jsxs)("div",{className:"Container",children:[Object(K.jsxs)("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:"Video",children:[Object(K.jsx)("source",{src:z,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(K.jsx)("div",{className:"Content",children:Object(K.jsxs)("div",{className:"SubContent",children:[Object(K.jsx)("h1",{children:"Book Catolog"}),Object(K.jsx)("p",{children:"Manage your Books with Ease"}),Object(K.jsx)("button",{type:"button",className:"btn btn-outline-dark",children:Object(K.jsx)(o.b,{to:"/register",children:"Get started"})}),Object(K.jsx)("img",{src:Q,alt:"profile"})]})})]})},G=a(7),J=function(e){var t=e.error;return Object(K.jsx)("div",{class:"alert alert-warning",role:"alert",children:t})},V=function(){return Object(K.jsx)("div",{className:"spinner-border",role:"status",children:Object(K.jsx)("span",{className:"sr-only",children:"Loading..."})})},W=function(e){var t=e.history,a=Object(s.useState)(""),r=Object(G.a)(a,2),c=r[0],o=r[1],l=Object(s.useState)(""),i=Object(G.a)(l,2),u=i[0],p=i[1],m=Object(n.b)(),h=Object(n.c)((function(e){return e.userLogin})),g=h.loading,v=h.userInfo,y=h.error;console.log(g,v,y),Object(s.useEffect)((function(){v&&t.push("/")}),[m,v,t]);return Object(K.jsx)("div",{className:"row container-height",children:Object(K.jsx)("div",{className:"col-lg-6 col-md-6 m-auto",children:Object(K.jsxs)("div",{className:"container",children:[g&&Object(K.jsx)(V,{}),y&&Object(K.jsx)(J,{error:y}),Object(K.jsx)("h1",{className:"text-center",children:"Login"}),Object(K.jsx)("form",{onSubmit:function(e){e.preventDefault(),m(function(e,t){return function(){var a=Object(j.a)(d.a.mark((function a(s){var r,c,n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:O}),r={headers:{"Content-Type":"application/json"}},a.next=5,b.a.post("/api/users/login",{email:e,password:t},r);case 5:c=a.sent,n=c.data,s({type:x,payload:n}),localStorage.setItem("userAuthData",JSON.stringify(n)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),s({type:f,payload:a.t0.response.data.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(c,u)),console.log(c,u)},children:Object(K.jsxs)("fieldset",{children:[Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(K.jsx)("input",{value:c,onChange:function(e){return o(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(K.jsx)("input",{value:u,onChange:function(e){return p(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(K.jsx)("button",{type:"submit",className:"btn btn-info m-auto",children:"Login"})]})})]})})})},Y=(a(69),function(e){var t=e.history,a=Object(s.useState)(""),r=Object(G.a)(a,2),c=r[0],o=r[1],l=Object(s.useState)(""),i=Object(G.a)(l,2),u=i[0],O=i[1],x=Object(s.useState)(""),f=Object(G.a)(x,2),g=f[0],v=f[1],y=Object(n.c)((function(e){return e.userLogin})),N=y.userInfo,E=y.loading,S=y.error,w=Object(n.b)();return Object(K.jsx)("div",{className:"row container-height",children:Object(K.jsx)("div",{className:"col-lg-6 col-md-6 m-auto",children:Object(K.jsxs)("div",{className:"container",children:[E&&Object(K.jsx)(V,{}),S&&Object(K.jsx)(J,{error:S}),Object(K.jsx)("h1",{className:"text-center",children:"Register"}),Object(K.jsx)("form",{onSubmit:function(e){e.preventDefault(),w(function(e,t,a){return function(){var s=Object(j.a)(d.a.mark((function s(r){var c,n,o;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,r({type:p}),c={headers:{"Content-Type":"application/json"}},s.next=5,b.a.post("/api/users",{name:e,email:t,password:a},c);case 5:n=s.sent,o=n.data,console.log(e,t,a),r({type:m,payload:o}),localStorage.setItem("userAuthData",JSON.stringify(o)),s.next=16;break;case 12:s.prev=12,s.t0=s.catch(0),console.log("mongdb error",s.t0),r({type:h,payload:s.t0.response&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message});case 16:case"end":return s.stop()}}),s,null,[[0,12]])})));return function(e){return s.apply(this,arguments)}}()}(c,u,g)),console.log(N,E,S),null!==N&&void 0===S&&t.push("/")},children:Object(K.jsxs)("fieldset",{children:[Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Name"}),Object(K.jsx)("input",{value:c,onChange:function(e){return o(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter Name"})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(K.jsx)("input",{value:u,onChange:function(e){return O(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(K.jsx)("input",{value:g,onChange:function(e){return v(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(K.jsx)("button",{type:"submit",className:"btn btn-info m-auto",children:"Register"})]})})]})})})}),$=(a(70),a.p+"static/media/bookpic.75feccdc.jpg"),q=function(e){var t=e.history,a=Object(n.b)();Object(s.useEffect)((function(){a(function(){var e=Object(j.a)(d.a.mark((function e(t,a){var s,r,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a().userLogin.userInfo,e.prev=1,t({type:v}),r={headers:{authorization:"Bearer ".concat(s.token)}},e.next=6,b.a.get("/api/users/profile",r);case 6:c=e.sent,n=c.data,t({type:y,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:N,payload:e.t0.response&&e.t0.response.data.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}),[a,t]);var r=Object(n.c)((function(e){return e.userLogin})).userInfo;Object(s.useEffect)((function(){null===r&&t.push("/login")}),[r,t]);var c=Object(n.c)((function(e){return e.userProfile})),l=c.loading,i=c.user,u=c.user&&c.user.books;return Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("div",{className:"row",children:Object(K.jsx)("div",{className:"col mt-5",children:l&&!i?Object(K.jsx)(V,{}):Object(K.jsxs)("div",{className:"card m-auto ",style:{width:"50%"},children:[Object(K.jsx)("img",{src:$,className:"card-img-top",alt:"..."}),Object(K.jsxs)("div",{className:"card-body",children:[Object(K.jsx)("h5",{className:"card-title",children:i&&i.email}),Object(K.jsx)("p",{className:"card-text",children:i&&i.name}),Object(K.jsx)(o.b,{to:"/user-update",className:"btn btn-primary",children:"Update your profile"})]})]})})}),Object(K.jsx)("div",{className:"row",children:Object(K.jsx)("div",{className:"col",children:u?Object(K.jsxs)("table",{className:"table table-hover",children:[Object(K.jsx)("thead",{children:Object(K.jsxs)("tr",{children:[Object(K.jsx)("th",{scope:"col",children:"Author"}),Object(K.jsx)("th",{scope:"col",children:"Book Name"}),Object(K.jsx)("th",{scope:"col",children:"Delete"}),Object(K.jsx)("th",{scope:"col",children:"Update"})]})}),Object(K.jsx)("tbody",{children:u.map((function(e){return Object(K.jsxs)("tr",{className:"table-dark",children:[Object(K.jsx)("th",{scope:"row",children:e.author}),Object(K.jsx)("td",{children:e.title}),Object(K.jsx)("td",{children:"Delete"}),Object(K.jsx)("td",{children:"Update"})]},e._id)}))})]}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h1",{children:"You don't have any book created."}),Object(K.jsx)(o.b,{children:"Start Creating"})]})})})]})},X=function(e){var t=e.history,a=Object(n.b)();Object(s.useEffect)((function(){a(function(){var e=Object(j.a)(d.a.mark((function e(t){var a,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:R,loading:!0}),a={headers:{"Content-Type":"application/json"}},e.next=5,b.a.get("/api/books",a);case 5:s=e.sent,r=s.data,t({type:T,payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:A,error:e.t0.response&&e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[a]);var r=Object(n.c)((function(e){return e.booksList})),c=r.books,l=r.loading,i=function(e){a(function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var s,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"DELETE_BOOK_REQUEST",loading:!0}),s={headers:{"Content-Type":"application/json"}},t.next=5,b.a.delete("/api/books/".concat(e),s);case 5:r=t.sent,c=r.data,a({type:"DELETE_BOOK_SUCCESS",payload:c}),a({type:T}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"DELETE_BOOK_FAIL",loading:!1,error:t.t0.response&&t.t0.response.data.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(e)),t.push("/books")};return Object(K.jsxs)("div",{children:[l&&Object(K.jsx)(V,{}),void 0!==c&&0===c.length?"No":Object(K.jsx)("div",{className:"row",children:Object(K.jsx)("div",{className:"col",children:Object(K.jsxs)("table",{className:"table table-hover",children:[Object(K.jsx)("thead",{children:Object(K.jsxs)("tr",{children:[Object(K.jsx)("th",{scope:"col",children:"Author"}),Object(K.jsx)("th",{scope:"col",children:"Book Name"}),Object(K.jsx)("th",{scope:"col",children:"Action"}),Object(K.jsx)("th",{scope:"col",children:"Action"})]})}),Object(K.jsx)("tbody",{children:c&&c.map((function(e){return Object(K.jsxs)("tr",{className:"table-dark",children:[Object(K.jsx)("th",{scope:"row",children:e.title}),Object(K.jsx)("td",{children:e.author}),Object(K.jsx)("td",{children:Object(K.jsx)("i",{onClick:function(){return i(e._id)},className:"fas fa-trash ",style:{color:"red",cursor:"progress"}})}),Object(K.jsx)("td",{children:Object(K.jsx)(o.b,{to:"/book/".concat(e&&e._id),children:Object(K.jsx)("i",{className:"far fa-edit",style:{color:"yellow",cursor:"progress"}})})})]},e._id)}))})]})})})]})},Z=function(e){var t=e.history,a=Object(s.useState)(""),r=Object(G.a)(a,2),c=r[0],o=r[1],l=Object(s.useState)(""),i=Object(G.a)(l,2),u=i[0],p=i[1],m=Object(s.useState)(""),h=Object(G.a)(m,2),O=h[0],x=h[1],f=Object(n.c)((function(e){return e.userLogin})).userInfo;console.log(f._id);var g=Object(n.b)();return console.log(c),Object(K.jsx)("div",{className:"row container-height",children:Object(K.jsx)("div",{className:"col-lg-6 col-md-6 m-auto",children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModal",children:"Click to add Book."}),Object(K.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(K.jsx)("div",{className:"modal-dialog",children:Object(K.jsxs)("div",{className:"modal-content",children:[Object(K.jsxs)("div",{className:"modal-header",children:[Object(K.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Create Book"}),Object(K.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(K.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(K.jsxs)("div",{className:"modal-body",children:[Object(K.jsx)("h1",{className:"text-center",children:"Add Book"}),Object(K.jsx)("form",{onSubmit:function(e){var a,s={category:c,title:u,author:O,createdBy:f&&f._id};e.preventDefault(),g((a=s,function(){var e=Object(j.a)(d.a.mark((function e(t){var s,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:I,loading:!0}),s={headers:{"Content-Type":"application/json"}},e.next=5,b.a.post("/api/books",a,s);case 5:r=e.sent,c=r.data,t({type:U,payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:L,error:e.t0.response&&e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),t.push("/books")},children:Object(K.jsxs)("fieldset",{children:[Object(K.jsx)("div",{className:"form-group",children:Object(K.jsxs)("select",{value:c,onChange:function(e){return o(e.target.value)},className:"custom-select",children:[Object(K.jsx)("option",{defaultValue:"programming",children:"programming"}),Object(K.jsx)("option",{value:"religion",children:"Religion"}),Object(K.jsx)("option",{value:"life",children:"life"}),Object(K.jsx)("option",{value:"culture",children:"culture"})]})}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Author "}),Object(K.jsx)("input",{value:O,onChange:function(e){return x(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Author name"})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputPassword1",children:"title"}),Object(K.jsx)("input",{value:u,onChange:function(e){return p(e.target.value)},type:"text",className:"form-control",id:"exampleInputPassword1",placeholder:"Book title"})]}),Object(K.jsx)("button",{type:"submit",className:"btn btn-warning m-auto",children:"Create Book"})]})})]}),Object(K.jsx)("div",{className:"modal-footer",children:Object(K.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",children:"Close"})})]})})})]})})})},ee=function(e){var t=e.msg;return Object(K.jsx)("div",{className:"alert alert-success",role:"alert",children:t})},te=function(e){e.history;var t=Object(n.c)((function(e){return e.userLogin})),a=t.userInfo;console.log(a);var r=Object(s.useState)(a?a.name:""),c=Object(G.a)(r,2),o=c[0],l=c[1],i=Object(s.useState)(a?a.email:""),u=Object(G.a)(i,2),p=u[0],m=u[1],h=Object(s.useState)(""),O=Object(G.a)(h,2),x=O[0],f=O[1];console.log(t);var g=Object(n.c)((function(e){return e.updatedUser})),v=g.user,y=g.loading,N=g.success,k=Object(n.b)();return Object(K.jsx)("div",{className:"row container-height",children:Object(K.jsx)("div",{className:"col-lg-6 col-md-6 m-auto",children:Object(K.jsxs)("div",{className:"container",children:[v&&!y&&N&&Object(K.jsx)(ee,{msg:"Updated successfully. Logout and login with your new credentials"}),Object(K.jsx)("h1",{className:"text-center",children:"Update"}),Object(K.jsx)("form",{onSubmit:function(e){e.preventDefault(),k(function(e,t,a){return function(){var s=Object(j.a)(d.a.mark((function s(r,c){var n,o,l,i;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,r({type:E,loading:!0}),n=c().userLogin.userInfo,console.log(n.token),o={headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(n.token)}},s.next=7,b.a.put("/api/users/profile/update",{name:e,email:t,password:a},o);case 7:l=s.sent,i=l.data,r({type:S,payload:i}),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(0),r({type:w,payload:s.t0.response&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message});case 15:case"end":return s.stop()}}),s,null,[[0,12]])})));return function(e,t){return s.apply(this,arguments)}}()}(o,p,x))},children:Object(K.jsxs)("fieldset",{children:[Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Name"}),Object(K.jsx)("input",{value:o,onChange:function(e){return l(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter Name"})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(K.jsx)("input",{value:p,onChange:function(e){return m(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(K.jsx)("input",{value:x,onChange:function(e){return f(e.target.value)},type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(K.jsx)("button",{type:"submit",className:"btn btn-primary m-auto",children:"Update your profile"})]})})]})})})},ae=function(e){var t=e.history,a=Object(l.f)().id,r=Object(n.c)((function(e){return e.bookDetails})),c=r.book,o=r.loading,i=Object(s.useState)(c&&!o&&c.category),u=Object(G.a)(i,2),p=u[0],m=u[1],h=Object(s.useState)(c&&!o&&c.title),O=Object(G.a)(h,2),x=O[0],f=O[1],g=Object(s.useState)(c&&c.author),v=Object(G.a)(g,2),y=v[0],N=v[1],E=Object(n.b)();Object(s.useEffect)((function(){E(function(e,t){return function(){var a=Object(j.a)(d.a.mark((function a(s){var r,c,n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:B,loading:!0}),r={headers:{"Content-Type":"application/json"}},a.next=5,b.a.get("/api/books/".concat(e),t,r);case 5:c=a.sent,n=c.data,s({type:F,payload:n}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),s({type:P,error:a.t0.response&&a.t0.response.data.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(a))}),[E,a]);return Object(K.jsx)("div",{className:"row container-height",children:Object(K.jsx)("div",{className:"col-lg-6 col-md-6 m-auto",children:Object(K.jsx)("div",{className:"container",children:c?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h1",{className:"text-center",children:"Update"}),Object(K.jsx)("form",{onSubmit:function(e){var s={category:p,title:x,author:y};e.preventDefault(),E(function(e,t){return function(){var a=Object(j.a)(d.a.mark((function a(s){var r,c,n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:"BOOK_UPDATE_REQUEST",loading:!0}),r={headers:{"Content-Type":"application/json"}},a.next=5,b.a.put("/api/books/".concat(e),t,r);case 5:c=a.sent,n=c.data,s({type:"BOOK_UPDATE_SUCCESS",payload:n}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),s({type:"BOOK_UPDATE_FAIL",loading:!1,error:a.t0.response&&a.t0.response.data.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(a,s)),t.push("/books")},children:Object(K.jsxs)("fieldset",{children:[Object(K.jsx)("div",{className:"form-group",children:Object(K.jsxs)("select",{value:p,onChange:function(e){return m(e.target.value)},className:"custom-select",children:[Object(K.jsx)("option",{defaultValue:"programming",children:"programming"}),Object(K.jsx)("option",{value:"religion",children:"Religion"}),Object(K.jsx)("option",{value:"life",children:"life"}),Object(K.jsx)("option",{value:"culture",children:"culture"})]})}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Author "}),Object(K.jsx)("input",{value:y,onChange:function(e){return N(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Author name"})]}),Object(K.jsxs)("div",{className:"form-group",children:[Object(K.jsx)("label",{htmlFor:"exampleInputPassword1",children:"title"}),Object(K.jsx)("input",{value:x,onChange:function(e){return f(e.target.value)},type:"text",className:"form-control",id:"exampleInputPassword1",placeholder:"Book title"})]}),Object(K.jsx)("button",{type:"submit",className:"btn btn-dark m-auto",children:"Create Book"})]})})]}):"No"})})})},se=function(){var e=Object(n.b)();Object(s.useEffect)((function(){e(function(){var e=Object(j.a)(d.a.mark((function e(t){var a,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:k,loading:!0}),a={headers:{"Content-Type":"application/json"}},e.next=5,b.a.get("/api/users",a);case 5:s=e.sent,r=s.data,t({type:C,payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:_,error:e.t0.response&&e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(n.c)((function(e){return e.usersList})),a=t.loading,r=t.users,c=t.error;return console.log(r,a,c),Object(K.jsxs)("div",{className:"container-fluid",children:[Object(K.jsxs)("h1",{className:"text-center m-5",children:["List of users ",r&&r.length]}),Object(K.jsx)("hr",{className:"text-white"}),Object(K.jsx)("div",{className:"row text-center justify-content-center",children:a?Object(K.jsx)(V,{}):Object(K.jsx)(K.Fragment,{children:r&&r.map((function(e){return Object(K.jsx)("div",{className:"col-lg-3",children:Object(K.jsx)("div",{className:"card",children:Object(K.jsxs)("div",{className:"card-body",children:[Object(K.jsx)("h5",{className:"card-title",children:e.name}),Object(K.jsx)("p",{className:"card-text",children:e.email}),Object(K.jsx)("i",{className:"far fa-address-card h2 text-info"})]})})},e._id)}))})})]})},re=function(){return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(o.a,{children:[Object(K.jsx)(H,{}),Object(K.jsx)(l.a,{exact:!0,path:"/",component:M}),Object(K.jsx)(l.a,{exact:!0,path:"/register",component:Y}),Object(K.jsx)(l.a,{exact:!0,path:"/login",component:W}),Object(K.jsx)(l.a,{exact:!0,path:"/profile",component:q}),Object(K.jsx)(l.a,{exact:!0,path:"/books",component:X}),Object(K.jsx)(l.a,{exact:!0,path:"/addbook",component:Z}),Object(K.jsx)(l.a,{exact:!0,path:"/user-update",component:te}),Object(K.jsx)(l.a,{exact:!0,path:"/book/:id",component:ae}),Object(K.jsx)(l.a,{exact:!0,path:"/users",component:se})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(17),ne=a(36),oe=a(35),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:case O:return{loading:!0};case m:case x:return{loading:!1,userInfo:t.payload};case h:case f:return{loading:!1,error:t.payload};case g:return{};default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case y:return{loading:!1,user:t.payload};case N:return{loading:!1,payload:t.payload};default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{loading:!0};case S:return{user:t.payload,loading:!1,success:!0};case w:return{error:t.payload,loading:!1};default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{loading:!0};case U:return{book:t.payload,loading:!1};case L:return{loading:!1,error:t.payload};default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return{loading:!0};case T:return{books:t.payload,loading:!1};case A:return{loading:!1,error:t.payload};default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return{loading:!0};case F:return{book:t.payload,loading:!1};case P:return{loading:!1,error:t.payload};default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0};case C:return{users:t.payload};case _:return{loading:!1,error:t.payload};default:return e}},me=[ne.a],he=Object(ce.combineReducers)({userLogin:le,userProfile:ie,updatedUser:de,bookCreated:je,booksList:ue,bookDetails:be,usersList:pe}),Oe={userLogin:{userInfo:localStorage.getItem("userAuthData")?JSON.parse(localStorage.getItem("userAuthData")):null}},xe=Object(ce.createStore)(he,Oe,Object(oe.composeWithDevTools)(ce.applyMiddleware.apply(void 0,me)));c.a.render(Object(K.jsx)(n.a,{store:xe,children:Object(K.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.f4db5ca6.chunk.js.map