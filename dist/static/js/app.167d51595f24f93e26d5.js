webpackJsonp([1],{26:function(e,n){},27:function(e,n,t){var c=t(74)(t(70),t(75),null,null,null);e.exports=c.exports},69:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=t(28),a=t(25),o=t(24),s=t.n(o),u=t(26),r=(t.n(u),t(27)),i=t.n(r);c.a.use(a.a),c.a.use(s.a),new c.a({el:"#app",template:"<App />",components:{App:i.a}})},70:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"name",data:function(){return{checked:!0,a:1}},methods:{getJson:function(){this.$http.get("/static/json/data.json",[]).then(function(e){alert("success")},function(e){alert("error")})}}}},75:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app"},[t("el-checkbox",{model:{value:e.checked,callback:function(n){e.checked=n},expression:"checked"}},[e._v("备选项")]),e._v(" "),t("a",{on:{click:e.getJson}},[e._v("getJson")])],1)},staticRenderFns:[]}},77:function(e,n){}},[69]);
//# sourceMappingURL=app.167d51595f24f93e26d5.js.map