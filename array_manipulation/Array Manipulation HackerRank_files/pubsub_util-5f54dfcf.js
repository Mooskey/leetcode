(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{P7XM:function(e,n){"function"==typeof Object.create?e.exports=function(e,n){n&&(e.super_=n,e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,n){if(n){e.super_=n;var t=function(){};t.prototype=n.prototype,e.prototype=new t,e.prototype.constructor=e}}},pXNg:function(e,n,t){"use strict";t.r(n),t.d(n,"channelCallbacks",(function(){return s}));t("rGqo");var r=t("ZHvg"),o=t.n(r),c=t("HpxT");let u;const s={},i={createConnection:function(e){return u=new o.a(e),u.open(),u.onerror=c.b,u},getConnection:function(){return u},alreadySubscribed:function(e){return u&&u._subscribes[e]},subscribe(e,n){u&&(s[e]||(s[e]=[]),s[e].includes(n)||s[e].push(n),this.alreadySubscribed(e)||u.subscribe(e,null,{},(n,t)=>{s[e].forEach(e=>e(n,t))}))},unsubscribe(e,n){u&&this.alreadySubscribed(e)&&(n?s[e].splice(s[e].indexOf(n),1):(delete s[e],u.unsubscribe(e)),s[e]&&!s[e].length&&(delete s[e],u.unsubscribe(e)))}};n.default=i}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/pubsub_util-5f54dfcf.js.map