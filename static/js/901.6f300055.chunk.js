"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[901],{1295:function(n,e,t){t.d(e,{a:function(){return s}});var r,i,o=t(168),a=t(2360),s=(a.ZP.ul(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),a.ZP.ul(i||(i=(0,o.Z)(["\n  /* border: 2px solid black; */\n  margin-top: 20px;\n\n  /* display: grid; */\n  /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */\n  /* grid-template-columns: repeat(auto-fill, minmax(250px, auto)); */\n  /* grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 200px 200px; */\n\n  /* gap: 20px; */\n\n  li {\n    margin-bottom: 15px;\n    /* border: 1px solid black; */\n    border-radius: 5px;\n\n    img {\n      object-fit: cover;\n    }\n\n    p {\n      margin-top: 10px;\n      text-transform: lowercase;\n    }\n\n    :hover {\n      box-shadow: 0 0 10px #242124;\n    }\n  }\n"]))))},4642:function(n,e,t){t.d(e,{U:function(){return g}});var r,i,o,a,s,l=t(168),d=t(2360),p=d.ZP.div(r||(r=(0,l.Z)(["\n  padding: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 400px) {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  button {\n    font-family: 'Josefin Sans', sans-serif;\n    border: none;\n    border-radius: 5px;\n    padding: 15px;\n    background-color: #242124;\n    width: 200px;\n    margin-bottom: 10px;\n    font-size: 17px;\n    color: #fff;\n    cursor: pointer;\n\n    transition: all 100ms ease-out;\n\n    :hover {\n      background-color: #752333;\n      box-shadow: 0 5px 10px #242124;\n    }\n  }\n"]))),c=d.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n\n  @media (max-width: 400px) {\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n  }\n"]))),x=d.ZP.div(o||(o=(0,l.Z)(["\n  width: 135px;\n  border: 2px solid #242124;\n  border-radius: 5px;\n  padding: 5px;\n  box-shadow: 0 5px 10px #242124;\n  text-align: center;\n\n  margin-right: 25px;\n  @media (max-width: 400px) {\n    margin-right: 0;\n  }\n\n  img {\n    border-radius: 5px;\n  }\n"]))),u=d.ZP.div(a||(a=(0,l.Z)(["\n  div {\n    @media (max-width: 400px) {\n      display: none;\n    }\n  }\n"]))),m=d.ZP.div(s||(s=(0,l.Z)(["\n  text-align: center;\n  p {\n    margin-bottom: 10px;\n  }\n  @media (max-width: 670px) {\n    flex-wrap: wrap;\n    display: none;\n  }\n"]))),f=t(5148),h=t(184),g=function(n){var e=n.book;return(0,h.jsxs)(p,{children:[(0,h.jsxs)(c,{children:[(0,h.jsx)("div",{children:(0,h.jsx)(x,{children:e.volumeInfo.imageLinks?(0,h.jsx)("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:"book",width:135}):(0,h.jsx)("img",{src:f,alt:"book",width:135})})}),(0,h.jsxs)(u,{children:[(0,h.jsxs)("b",{children:[" ",e.volumeInfo.title]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("p",{children:["author: ",e.volumeInfo.authors]}),(0,h.jsxs)("p",{children:["categories : ",e.volumeInfo.categories]}),(0,h.jsxs)("p",{children:["pageCount: ",e.volumeInfo.pageCount]}),(0,h.jsxs)("p",{children:["publishedDate: ",e.volumeInfo.publishedDate]}),(0,h.jsxs)("p",{children:["publisher: ",e.volumeInfo.publisher]}),(0,h.jsxs)("p",{children:["language: ",e.volumeInfo.language]})]})]})]}),(0,h.jsxs)(m,{children:[(0,h.jsx)("p",{children:"Not in collection"}),(0,h.jsx)("button",{type:"button",children:"Want to read"})]})]})}},8901:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(5861),i=t(9439),o=t(7757),a=t.n(o),s=t(184),l=function(){return(0,s.jsx)("div",{})},d=t(1087),p=t(7689),c=t(1295),x=t(4642),u=function(n){var e=n.books,t=(0,p.TH)();return(0,s.jsx)(c.a,{children:e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(d.rU,{to:"books/".concat(n.id),state:{from:t},children:(0,s.jsx)(x.U,{book:n})})},n.id)}))})},m=t(5447),f=t(2791),h=function(){var n=(0,f.useState)([]),e=(0,i.Z)(n,2),t=e[0],o=e[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,m.he)();case 2:e=n.sent,o(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();try{n()}catch(e){console.log(e)}}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)(l,{}),(0,s.jsx)("h2",{children:"Best Sellers:"}),(0,s.jsx)(u,{books:t})]})}}}]);
//# sourceMappingURL=901.6f300055.chunk.js.map