(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{277:function(t,e,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(129).default)("81f73df8",content,!0,{sourceMap:!1})},279:function(t,e,r){"use strict";r(277)},280:function(t,e,r){var n=r(128)(!1);n.push([t.i,'*[data-v-7563453a]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}ul[data-v-7563453a]{font-size:14px}.price.red[data-v-7563453a]{color:#ff3737}.price.green[data-v-7563453a]{color:#3ec23e}th[data-v-7563453a]{text-align:left}td[data-v-7563453a]{min-width:130px}.depth_cell[data-v-7563453a]{display:flex;align-items:start;grid-column-gap:100px}.factor[data-v-7563453a]{padding-left:30px;font-size:20px;color:#0c20d1;text-decoration:underline}.activeBigAsk[data-v-7563453a],.activeBigBid[data-v-7563453a]{color:red;-webkit-animation:blink-data-v-7563453a .5s infinite;animation:blink-data-v-7563453a .5s infinite}@-webkit-keyframes blink-data-v-7563453a{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes blink-data-v-7563453a{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}',""]),t.exports=n},283:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(51),r(52),r(50),{data:function(){return{priceData:null,priceColor:null,tradeVolumeMedian:null,trades:[],bigTrades:[],depthData:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.sockets.subscribe("price",(function(data){var e,r,n=null==data?void 0:data.markPrice,o=Boolean((null===(e=t.priceData)||void 0===e?void 0:e.markPrice)>n),c=Boolean((null===(r=t.priceData)||void 0===r?void 0:r.markPrice)<n);o?t.priceColor="green":c&&(t.priceColor="red"),t.priceData=data})),t.sockets.subscribe("depth",(function(e){t.depthData=e}));case 2:case"end":return e.stop()}}),e)})))()},methods:{checkTargetVolume:function(t,e){return!!this.depthData&&(null==e?void 0:e.includes(t))},getAmountColor:function(t){return t.maker?"buy":"sell"}}}),c=(r(279),r(48)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.priceData?r("h2",{staticClass:"price",class:t.priceColor},[r("span",[t._v(t._s(t.priceData.symbol))]),t._v(" - "+t._s(t.priceData.markPrice)+"\n  ")]):t._e(),t._v(" "),t.depthData?r("div",{staticClass:"depth"},[r("h3",[t._v("Volume Data -- "+t._s(t.depthData.symbol))]),t._v(" "),r("div",{staticClass:"depth_box"},[r("div",{staticClass:"depth_cell"},[r("table",[r("caption",[t._v("\n            Asks\n          ")]),t._v(" "),r("thead",[r("tr",[r("th",[t._v("Volume median")]),t._v(" "),r("th",[t._v(t._s(t.depthData.asksMedian))])]),t._v(" "),t._m(0)]),t._v(" "),r("tbody",t._l(t.depthData.depth.asks,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(n))]),t._v(" "),r("td",[t._v(t._s(e))])])})),0)]),t._v(" "),r("table",[r("caption",[t._v("\n            Asks -- Big Volume\n          ")]),t._v(" "),r("thead",[r("tr",[r("th",[t._v("Volume median")]),t._v(" "),r("th",[t._v(t._s(t.depthData.asksMedian))])]),t._v(" "),r("tr",[r("th",[t._v("Factor for Depth Volume")]),t._v(" "),r("th",{staticClass:"factor"},[t._v(t._s(t.depthData.factorOfVolumeDepth))])]),t._v(" "),r("tr",[r("th",[t._v("Warning Volume factor")]),t._v(" "),r("th",{staticClass:"factor"},[t._v("\n                "+t._s(t.depthData.targetBigVolumeWarningFactor)+"\n              ")])]),t._v(" "),t._m(1)]),t._v(" "),r("tbody",t._l(t.depthData.asksBigVolume,(function(e,n){return r("tr",{key:n,class:{activeBigAsk:t.checkTargetVolume(n,t.depthData.targetAsksBigVolume)}},[r("td",[t._v(t._s(n))]),t._v(" "),r("td",[t._v(t._s(e))])])})),0)]),t._v(" "),r("table",[r("caption",[t._v("\n            Bids -- Big Volume\n          ")]),t._v(" "),r("thead",[r("tr",[r("th",[t._v("Volume median")]),t._v(" "),r("th",[t._v(t._s(t.depthData.bidsMedian))])]),t._v(" "),r("tr",[r("th",[t._v("Factor for Depth Volume")]),t._v(" "),r("th",{staticClass:"factor"},[t._v(t._s(t.depthData.factorOfVolumeDepth))])]),t._v(" "),r("tr",[r("th",[t._v("Warning Volume factor")]),t._v(" "),r("th",{staticClass:"factor"},[t._v("\n                "+t._s(t.depthData.targetBigVolumeWarningFactor)+"\n              ")])]),t._v(" "),t._m(2)]),t._v(" "),r("tbody",t._l(t.depthData.bidsBigVolume,(function(e,n){return r("tr",{key:n,class:{activeBigBid:t.checkTargetVolume(n,t.depthData.targetBidsBigVolume)}},[r("td",[t._v(t._s(n))]),t._v(" "),r("td",[t._v(t._s(e))])])})),0)]),t._v(" "),r("table",[r("caption",[t._v("\n            Bids\n          ")]),t._v(" "),r("thead",[r("tr",[r("th",[t._v("Volume median")]),t._v(" "),r("th",[t._v(t._s(t.depthData.bidsMedian))])]),t._v(" "),t._m(3)]),t._v(" "),r("tbody",t._l(t.depthData.depth.bids,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(n))]),t._v(" "),r("td",[t._v(t._s(e))])])})),0)])])])]):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Volume")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Volume")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Volume")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Volume")])])}],!1,null,"7563453a",null);e.default=component.exports}}]);