(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r,s=n(3),c=n.n(s),o=n(4),a=n(5),i=n(7),l=n(6),u=n(1),d=n.n(u),h=(n(12),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(r||(r={}));var p=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={isStarted:!1,isReversed:!1,sortType:r.NONE},t.start=function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},t.reversed=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortType:r.NONE})},t.sortAlphabetically=function(){t.setState({sortType:r.ALPHABET})},t.sortByLength=function(){t.setState({sortType:r.LENGTH})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isStarted,n=t.sortType,s=t.isReversed,c=[].concat(b);return c.sort((function(t,e){switch(n){case r.ALPHABET:return t.localeCompare(e);case r.LENGTH:return t.length-e.length;default:return 0}})),s&&c.reverse(),Object(h.jsx)("div",{className:"App",children:e?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(h.jsx)("button",{type:"button",onClick:this.reversed,children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)("ul",{className:"Goods",children:c.map((function(t){return Object(h.jsx)("li",{className:"Goods__item",children:t},t)}))})]}):Object(h.jsx)("button",{type:"button",onClick:this.start,children:"Start"})})}}]),n}(d.a.Component);c.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ed1b3437.chunk.js.map