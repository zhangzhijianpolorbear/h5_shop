webpackJsonp([0],{"3uZ1":function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=o("mvHQ"),e=o.n(i),r=o("mtWM"),a=o.n(r),s={components:{buybtnX:o("IhR3").a},data:function(){return{goodInfo:"",productId:-1}},created:function(){var t=this,n={id:this.$route.query.productid};n=e()(n),a.a.get("http://app.taijidjk69.com/api/h5/good/details",n).then(function(n){console.log(n.data.data),t.goodInfo=n.data.data.description,t.productId=n.data.data.id}).catch(function(t){console.log(t),alert("啊嘿......")})}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"goods-detail "},[n("div",{staticClass:"cont",domProps:{innerHTML:this._s(this.goodInfo)}}),this._v(" "),n("buybtn-x",{attrs:{productid:this.productId}})],1)},staticRenderFns:[]};var c=o("VU/8")(s,d,!1,function(t){o("KdwO"),o("6QK8")},"data-v-303857a0",null);n.default=c.exports},"6QK8":function(t,n){},Bn1l:function(t,n){},FeBl:function(t,n){var o=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=o)},IhR3:function(t,n,o){"use strict";var i={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"btn"},[o("button",{staticClass:"button",on:{click:function(n){return t.toDescription(t.productid)}}},[t._v("立即购买")])])},staticRenderFns:[]};var e=o("VU/8")({props:["productid"],data:function(){return{}},methods:{toDescription:function(t){this.$router.push({path:"description",query:{productid:this.productid}})}}},i,!1,function(t){o("Bn1l")},"data-v-68d50da5",null);n.a=e.exports},KdwO:function(t,n){},mvHQ:function(t,n,o){t.exports={default:o("qkKv"),__esModule:!0}},qkKv:function(t,n,o){var i=o("FeBl"),e=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return e.stringify.apply(e,arguments)}}});
//# sourceMappingURL=0.534ff8bfefc37a7f137a.js.map