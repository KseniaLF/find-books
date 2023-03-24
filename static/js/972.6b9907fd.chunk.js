"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[972],{295:function(n,e,r){r.d(e,{a:function(){return s}});var t,o,i=r(168),a=r(444),s=(a.ZP.ul(t||(t=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),a.ZP.ul(o||(o=(0,i.Z)(["\n  /* border: 2px solid black; */\n  margin-top: 20px;\n\n  /* display: grid; */\n  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */\n  /* grid-template-columns: repeat(auto-fill, minmax(250px, auto)); */\n  /* grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 200px 200px; */\n\n  /* gap: 20px; */\n\n  li {\n    margin-bottom: 15px;\n    border: 1px solid black;\n    border-radius: 5px;\n\n    img {\n      object-fit: cover;\n    }\n\n    p {\n      margin-top: 10px;\n      text-transform: lowercase;\n    }\n\n    :hover {\n      box-shadow: 0 0 10px #242124;\n    }\n  }\n"]))))},829:function(n,e,r){r.d(e,{U:function(){return g}});var t,o,i,a,s=r(168),l=r(444),u=l.ZP.div(t||(t=(0,s.Z)(["\n  text-align: center;\n  /* button {\n    border: none;\n    border-radius: 5px;\n    padding: 15px;\n    background-color: #242124;\n    width: 200px;\n    margin-bottom: 5px;\n    font-size: 17px;\n    color: #fff;\n    cursor: pointer;\n\n    transition: all 100ms ease-out;\n\n    :hover {\n      background-color: #752333;\n    }\n  } */\n"]))),p=r(184),d=function(){return(0,p.jsxs)(u,{children:[(0,p.jsx)("div",{children:(0,p.jsx)("button",{type:"button",children:"Not in the collection"})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{type:"button",children:"Want to read"})})]})},c=l.ZP.div(o||(o=(0,s.Z)(["\n  padding: 20px;\n\n  display: flex;\n  /* flex-wrap: wrap; */\n  align-items: center;\n  justify-content: space-between;\n\n  button {\n    font-family: 'Josefin Sans', sans-serif;\n    border: none;\n    border-radius: 5px;\n    padding: 15px;\n    background-color: #242124;\n    width: 200px;\n    margin-bottom: 10px;\n    font-size: 17px;\n    color: #fff;\n    cursor: pointer;\n\n    transition: all 100ms ease-out;\n\n    :hover {\n      background-color: #752333;\n      box-shadow: 0 5px 10px #242124;\n    }\n  }\n"]))),x=l.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  /* flex-wrap: wrap; */\n"]))),f=l.ZP.div(a||(a=(0,s.Z)(["\n  border: 2px solid #242124;\n  border-radius: 5px;\n  padding: 5px;\n  box-shadow: 0 5px 10px #242124;\n  text-align: center;\n\n  margin-right: 25px;\n\n  img {\n    border-radius: 5px;\n  }\n"]))),m=r(148),g=function(n){var e=n.book;return(0,p.jsxs)(c,{children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(f,{children:e.volumeInfo.imageLinks?(0,p.jsx)("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:"book",width:135}):(0,p.jsx)("img",{src:m,alt:"book",width:135})}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("b",{children:[" ",e.volumeInfo.title]}),(0,p.jsxs)("p",{children:["author: ",e.volumeInfo.authors]}),(0,p.jsxs)("p",{children:["categories : ",e.volumeInfo.categories]}),(0,p.jsxs)("p",{children:["pageCount: ",e.volumeInfo.pageCount]}),(0,p.jsxs)("p",{children:["publishedDate: ",e.volumeInfo.publishedDate]}),(0,p.jsxs)("p",{children:["publisher: ",e.volumeInfo.publisher]}),(0,p.jsxs)("p",{children:["language: ",e.volumeInfo.language]})]})]}),(0,p.jsx)(d,{})]})}},972:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var t,o,i,a=r(861),s=r(439),l=r(757),u=r.n(l),p=r(87),d=r(168),c=r(444),x=r(617),f=c.ZP.div(t||(t=(0,d.Z)(["\n  display: flex;\n  /* max-width: 400px; */\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),m=c.ZP.input(o||(o=(0,d.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),g=(0,c.ZP)(x.G4C)(i||(i=(0,d.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),h=r(184),b=function(n){var e=n.bookName,r=n.onChange;return(0,h.jsxs)(f,{children:[(0,h.jsx)(g,{}),(0,h.jsx)(m,{autoFocus:!0,type:"text",value:e,onChange:function(n){return r(n.target.value)}})]})},v=r(791),j=r(689),k=r(295),w=r(829),Z=function(n){var e=n.books,r=(0,j.TH)();return console.log(e),(0,h.jsx)(k.a,{children:e.map((function(n){return(0,h.jsx)("li",{children:(0,h.jsx)(p.rU,{to:"".concat(n.id),state:{from:r},children:(0,h.jsx)(w.U,{book:n})})},n.etag)}))})},y=r(447),C=function(){var n,e=(0,v.useState)([]),r=(0,s.Z)(e,2),t=r[0],o=r[1],i=(0,p.lr)(),l=(0,s.Z)(i,2),d=l[0],c=l[1],x=null!==(n=d.get("name"))&&void 0!==n?n:"",f=t.filter((function(n){return x||""===x?n:n.volumeInfo.title.toLowerCase().includes(x.toLowerCase())}));return(0,v.useEffect)((function(){var n=function(){var n=(0,a.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!x){n.next=8;break}return n.next=4,(0,y.Ej)(x);case 4:if(!(e=n.sent)){n.next=7;break}return n.abrupt("return",o(e));case 7:return n.abrupt("return",o([]));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b,{bookName:x,onChange:function(n){c(""!==n?{name:n}:{})}}),0!==t.length&&(0,h.jsx)(Z,{books:f})]})}}}]);
//# sourceMappingURL=972.6b9907fd.chunk.js.map