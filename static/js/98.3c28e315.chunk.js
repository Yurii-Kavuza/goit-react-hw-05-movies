"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[98],{3098:function(r,t,n){n.r(t),n.d(t,{default:function(){return o}});var e=n(9439),a=n(7689),u=n(2791),c=n(3237),i=n(4476),s=n(184),o=function(){var r=(0,a.UO)().movieId,t=(0,u.useState)([]),n=(0,e.Z)(t,2),o=n[0],p=n[1];return(0,u.useEffect)((function(){(0,c.lw)(r).then(p)}),[r]),o?(0,s.jsx)(s.Fragment,{children:o.length>0?(0,s.jsx)(i.Z,{as:"ul",display:"flex",flexDirection:"column",gridGap:4,children:o.map((function(r){var t=r.id,n=r.author,e=r.content;return(0,s.jsx)("li",{children:(0,s.jsxs)(i.Z,{display:"flex",flexDirection:"column",gridGap:3,children:[(0,s.jsx)("h3",{children:n}),(0,s.jsx)("p",{children:e})]})},t)}))}):(0,s.jsx)("p",{children:"We don't have any reviews for this movie."})}):null}},3237:function(r,t,n){n.d(t,{IV:function(){return d},Mc:function(){return f},bV:function(){return s},dY:function(){return v},lw:function(){return l},mF:function(){return o},wr:function(){return p}});var e=n(5861),a=n(7757),u=n.n(a),c=n(2388),i="d984b4c758c2885930eb52b6130716de",s="https://image.tmdb.org/t/p",o="w500";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var p=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/".concat("trending","/").concat("movie","/").concat("week"),{params:{api_key:i}});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t),{params:{api_key:i}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:i}});case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:i}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie/",{params:{api_key:i,query:t}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=98.3c28e315.chunk.js.map