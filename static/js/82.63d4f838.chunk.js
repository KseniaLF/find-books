"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[82],{8082:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,o,a,i,l,u=r(5861),s=r(9439),p=r(7757),c=r.n(p),d=r(2791),x=r(1413),b=r(168),g=r(4787),f=r(8617),h=g.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  gap: 20px;\n  /* flex-wrap: wrap; */\n  /* text-align: center; */\n  justify-content: center;\n  /* align-items: center; */\n\n  /* max-width: 400px; */\n  /* justify-content: center; */\n  align-items: center;\n  position: relative;\n  text-transform: uppercase;\n\n  /* max-width: 300px; */\n  margin: 0 auto;\n  margin-bottom: 16px;\n\n  input {\n    /* background-color: red; */\n    /* font-size: 80px; */\n    /* font-weight: 700; */\n  }\n  form {\n    /* width: 100%; */\n    max-width: 250px;\n    /* display: flex; */\n  }\n\n  ul {\n    position: absolute;\n    z-index: 99;\n    left: 0;\n    top: 45px;\n    width: 100%;\n    background-color: white;\n    box-shadow: 0 5px 5px rgb(97, 111, 85);\n    border-radius: 5px;\n    max-height: 200px;\n    height: auto;\n    overflow: auto;\n\n    li {\n      padding: 5px 10px;\n      text-transform: lowercase;\n\n      :hover {\n        background-color: #e7ecec;\n        cursor: pointer;\n      }\n    }\n  }\n"]))),m=g.ZP.input(o||(o=(0,b.Z)(["\n  /* font-size: 15px; */\n  font: inherit;\n  padding: 8px 32px 5px 12px;\n\n  width: 100%;\n  /* height: 45px; */\n  border-radius: 5px;\n  border-color: rgb(97, 111, 85);\n  border: 1.5px solid rgb(97, 111, 85);\n  outline: none;\n  /* background-color: transparent; */\n  /* border-radius: 10px; */\n  /* padding: 8px 32px 8px 12px; */\n  /* width: 100%; */\n  /* height: 45px; */\n  /* padding: 8px 32px 8px 12px;\n  border-color: rgb(97, 111, 85);\n  font: inherit;\n  background-color: transparent;\n  outline: none; */\n  /* background-color: red; */\n\n  /* fill: red; */\n  /* span { */\n  /* :hover {\n    border-radius: 20px;\n    background-color: transparent;\n  } */\n  /* border: none; */\n  /* :hover { */\n  /* border: 5px solid red; */\n  /* border-color: red; */\n  /* } */\n  :focus {\n    /* outline: 1px solid rgb(97, 111, 85); */\n    box-shadow: 0 5px 5px rgb(97, 111, 85);\n    /* border-radius: 20px; */\n  }\n"]))),v=((0,g.ZP)(f.G4C)(a||(a=(0,b.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 7px;\n"]))),r(1087)),w=r(6645),k=r(184),Z=[{value:"intitle",label:"title"},{value:"inauthor",label:"author"},{value:"subject",label:"subject"},{value:"isbn",label:"isbn"}],j=function(n){var e,r,t=n.getVisibleBooks,o=(0,v.lr)(),a=(0,s.Z)(o,2),i=a[0],l=a[1],u=null!==(e=i.get("name"))&&void 0!==e?e:"",p=null!==(r=i.get("option"))&&void 0!==r?r:"",c=p&&{value:p,label:p},b=(0,d.useState)(c),g=(0,s.Z)(b,2),f=g[0],j=g[1];return(0,k.jsxs)(h,{children:[(0,k.jsx)(w.ZP,{placeholder:"search by..",value:f,onChange:function(n){var e=n.value;j(n);l(u&&e?{option:e,name:u}:e&&{option:e})},options:Z,styles:{control:function(n,e){return(0,x.Z)((0,x.Z)({},n),{},{backgroundColor:"transparent",width:150,borderRadius:5,textTransform:"lowercase"})},option:function(n,e){return(0,x.Z)((0,x.Z)({},n),{},{textTransform:"lowercase"})}},theme:function(n){return(0,x.Z)((0,x.Z)({},n),{},{borderRadius:0,colors:(0,x.Z)((0,x.Z)({},n.colors),{},{primary25:"rgba(97, 111, 85, 0.57)",primary:"rgb(97, 111, 85)"})})}}),(0,k.jsx)("form",{onSubmit:function(n){n.preventDefault(),t(u)},children:(0,k.jsx)(m,{placeholder:"find book...",autoFocus:!0,type:"text",value:u,onChange:function(n){var e=n.target.value;l(p&&e?{option:p,name:e}:e&&{name:e})}})})]})},y=r(7689),C=(r(3037),r(8688),g.ZP.ul(i||(i=(0,b.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  /* grid-template-columns: repeat(auto-fill, minmax(250px, auto)); */\n  gap: 10px;\n\n  li {\n    text-align: center;\n    border-radius: 5px;\n\n    img {\n      object-fit: cover;\n      transition: all 150ms ease-out;\n    }\n\n    :hover img {\n      transform: scale(1.05);\n      /* box-shadow: 0 0 10px #242124; */\n    }\n\n    :hover div::after {\n      opacity: 0;\n    }\n  }\n"])))),P=(g.ZP.div(l||(l=(0,b.Z)(["\n  /* margin-right: 10px; */\n  /* padding: px; */\n  /* background-color: rgb(97, 111, 85); */\n"]))),r(4642)),S=function(n){var e=n.books,r=(0,y.TH)();return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(C,{children:e.map((function(n){return(0,k.jsx)("li",{children:(0,k.jsx)(v.rU,{to:"".concat(n.id),state:{from:r},children:(0,k.jsx)(P.U,{book:n})})},n.etag)}))})})},_=r(5447),z=r(4169),T=function(){var n,e=(0,d.useState)([]),r=(0,s.Z)(e,2),t=r[0],o=r[1],a=(0,v.lr)(),i=null!==(n=(0,s.Z)(a,1)[0].get("name"))&&void 0!==n?n:"",l=(0,d.useState)(i),p=(0,s.Z)(l,2),x=p[0],b=p[1];(0,d.useEffect)((function(){var n=function(){var n=(0,u.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!x){n.next=10;break}return n.next=4,(0,_.Ej)(x);case 4:if(e=n.sent,console.log(e),!e){n.next=9;break}return o(e),n.abrupt("return");case 9:return n.abrupt("return",o([]));case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]);return(0,k.jsxs)(z.W,{children:[(0,k.jsx)(j,{getVisibleBooks:function(n){console.log(n),b(n)}}),(0,k.jsx)(S,{books:t})]})}}}]);
//# sourceMappingURL=82.63d4f838.chunk.js.map