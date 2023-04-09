"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[82],{8082:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,o,a,i,l,s=r(5861),u=r(9439),p=r(7757),c=r.n(p),d=r(2791),x=r(1413),b=r(168),f=r(4787),g=r(8617),h=f.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  gap: 20px;\n  /* flex-wrap: wrap; */\n  /* text-align: center; */\n  justify-content: center;\n  /* align-items: center; */\n\n  /* max-width: 400px; */\n  /* justify-content: center; */\n  align-items: center;\n  position: relative;\n  text-transform: uppercase;\n\n  /* max-width: 300px; */\n  margin: 0 auto;\n  margin-bottom: 16px;\n\n  input {\n    /* background-color: red; */\n    /* font-size: 80px; */\n    /* font-weight: 700; */\n  }\n  form {\n    /* width: 100%; */\n    max-width: 250px;\n    /* display: flex; */\n  }\n\n  ul {\n    position: absolute;\n    z-index: 99;\n    left: 0;\n    top: 45px;\n    width: 100%;\n    background-color: white;\n    box-shadow: 0 5px 5px rgb(97, 111, 85);\n    border-radius: 5px;\n    max-height: 200px;\n    height: auto;\n    overflow: auto;\n\n    li {\n      padding: 5px 10px;\n      text-transform: lowercase;\n\n      :hover {\n        background-color: #e7ecec;\n        cursor: pointer;\n      }\n    }\n  }\n"]))),m=f.ZP.input(o||(o=(0,b.Z)(["\n  /* font-size: 15px; */\n  font: inherit;\n  padding: 8px 32px 5px 12px;\n\n  width: 100%;\n  /* height: 45px; */\n  border-radius: 5px;\n  border-color: rgb(97, 111, 85);\n  border: 1.5px solid rgb(97, 111, 85);\n  outline: none;\n  /* background-color: transparent; */\n  /* border-radius: 10px; */\n  /* padding: 8px 32px 8px 12px; */\n  /* width: 100%; */\n  /* height: 45px; */\n  /* padding: 8px 32px 8px 12px;\n  border-color: rgb(97, 111, 85);\n  font: inherit;\n  background-color: transparent;\n  outline: none; */\n  /* background-color: red; */\n\n  /* fill: red; */\n  /* span { */\n  /* :hover {\n    border-radius: 20px;\n    background-color: transparent;\n  } */\n  /* border: none; */\n  /* :hover { */\n  /* border: 5px solid red; */\n  /* border-color: red; */\n  /* } */\n  :focus {\n    /* outline: 1px solid rgb(97, 111, 85); */\n    box-shadow: 0 5px 5px rgb(97, 111, 85);\n    /* border-radius: 20px; */\n  }\n"]))),v=((0,f.ZP)(g.G4C)(a||(a=(0,b.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 7px;\n"]))),r(1087)),w=r(6645),k=r(184),Z=[{value:"intitle",label:"title"},{value:"inauthor",label:"author"},{value:"subject",label:"subject"},{value:"isbn",label:"isbn"}],j=function(n){var e,r=n.getVisibleBooks,t=(0,v.lr)(),o=(0,u.Z)(t,2),a=o[0],i=o[1],l=null!==(e=a.get("name"))&&void 0!==e?e:"";return(0,k.jsxs)(h,{children:[(0,k.jsx)(w.ZP,{placeholder:"search by..",onChange:function(n){var e=n.value;""!==e&&i({option:e})},options:Z,styles:{control:function(n,e){return(0,x.Z)((0,x.Z)({},n),{},{width:150,borderRadius:5,textTransform:"lowercase"})},option:function(n,e){return(0,x.Z)((0,x.Z)({},n),{},{textTransform:"lowercase"})}},theme:function(n){return(0,x.Z)((0,x.Z)({},n),{},{borderRadius:0,colors:(0,x.Z)((0,x.Z)({},n.colors),{},{primary25:"rgba(97, 111, 85, 0.57)",primary:"rgb(97, 111, 85)"})})}}),(0,k.jsx)("form",{onSubmit:function(n){n.preventDefault(),r(l)},children:(0,k.jsx)(m,{placeholder:"find book...",autoFocus:!0,type:"text",value:l,onChange:function(n){var e=n.target.value;""!==e&&i({name:e})}})})]})},y=r(7689),P=(r(3037),r(8688),f.ZP.ul(i||(i=(0,b.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  /* grid-template-columns: repeat(auto-fill, minmax(250px, auto)); */\n  gap: 10px;\n\n  li {\n    text-align: center;\n    border-radius: 5px;\n\n    img {\n      object-fit: cover;\n      transition: all 150ms ease-out;\n    }\n\n    :hover img {\n      transform: scale(1.05);\n      /* box-shadow: 0 0 10px #242124; */\n    }\n\n    :hover div::after {\n      opacity: 0;\n    }\n  }\n"])))),C=(f.ZP.div(l||(l=(0,b.Z)(["\n  /* margin-right: 10px; */\n  /* padding: px; */\n  /* background-color: rgb(97, 111, 85); */\n"]))),r(4642)),_=function(n){var e=n.books,r=(0,y.TH)();return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(P,{children:e.map((function(n){return(0,k.jsx)("li",{children:(0,k.jsx)(v.rU,{to:"".concat(n.id),state:{from:r},children:(0,k.jsx)(C.U,{book:n})})},n.etag)}))})})},z=r(5447),S=r(4169),T=function(){var n,e=(0,d.useState)([]),r=(0,u.Z)(e,2),t=r[0],o=r[1],a=(0,v.lr)(),i=null!==(n=(0,u.Z)(a,1)[0].get("name"))&&void 0!==n?n:"",l=(0,d.useState)(i),p=(0,u.Z)(l,2),x=p[0],b=p[1];(0,d.useEffect)((function(){var n=function(){var n=(0,s.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!x){n.next=10;break}return n.next=4,(0,z.Ej)(x);case 4:if(e=n.sent,console.log(e),!e){n.next=9;break}return o(e),n.abrupt("return");case 9:return n.abrupt("return",o([]));case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]);return(0,k.jsxs)(S.W,{children:[(0,k.jsx)(j,{getVisibleBooks:function(n){console.log(n),b(n)}}),(0,k.jsx)(_,{books:t})]})}}}]);
//# sourceMappingURL=82.71625de1.chunk.js.map