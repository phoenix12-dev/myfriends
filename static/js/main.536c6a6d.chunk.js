(this.webpackJsonpmyfriends=this.webpackJsonpmyfriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),n(13),n(2)),i=n(3),o=n(5),h=n(4),l=n(0),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5s",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"seach robots..",onChange:t})})},b=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"1200px"},children:e.children})},f=(n(15),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(r.Component)),O=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f2",children:"My\xa0\xa0\xa0Friends"}),Object(l.jsx)(u,{searchChange:this.onSearchChange}),Object(l.jsx)(b,{children:Object(l.jsx)(f,{children:Object(l.jsx)(j,{robots:t})})})]})}}]),n}(r.Component),p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Header"}),Object(l.jsx)("p",{children:"hiiii"})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};s.a.render(Object(l.jsx)(O,{}),document.getElementById("root")),s.a.render(Object(l.jsx)(p,{}),document.getElementById("header")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.536c6a6d.chunk.js.map