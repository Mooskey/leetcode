(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+KS9":function(e,t,a){"use strict";var s=a("lSNA"),n=a.n(s),i=a("cDcd"),r=a.n(i),c=a("17x9"),o=a.n(c),l=a("wd/R"),m=a.n(l),d=a("xNbf"),u=a("eOGF");class h extends r.a.Component{constructor(e){super(e),n()(this,"state",void 0),n()(this,"intervalObject",void 0),n()(this,"onTimerEnd",()=>{this.props.onTimerEnd()}),this.state={timeRemaining:""},this.intervalObject=null}componentDidMount(){this.setNewTimeDiff(),this.intervalObject=setInterval(()=>{this.setNewTimeDiff()},1e3)}componentWillUnmount(){this.clearIntervalObj()}clearIntervalObj(){this.intervalObject&&clearInterval(this.intervalObject)}setNewTimeDiff(){const e=this.props.finishTimeMs-(new Date).getTime();if(e<=0)return this.clearIntervalObj(),void this.onTimerEnd();const t=m.a.duration(e);if(t.days()>0)this.setState({timeRemaining:r.a.createElement("span",{className:"countdowntimer-days"},`${t.days()} ${t.days()>1?"days":"day"}`)});else{const e=Object(u.q)(t.hours()),a=Object(u.q)(t.minutes()),s=Object(u.q)(t.seconds()),n=r.a.createElement("span",{className:"countdowntimer-clock"},r.a.createElement("span",{className:"countdowntimer-hours"},e),":",r.a.createElement("span",{className:"countdowntimer-minutes"},a),":",r.a.createElement("span",{className:"countdowntimer-seconds"},s));this.setState({timeRemaining:n})}}render(){const e=this.state.timeRemaining,t=this.props.className;return""===e?r.a.createElement(d.a,{className:"countdowntimer-loader",diameter:16}):r.a.createElement("span",{className:t},this.state.timeRemaining)}}n()(h,"propTypes",{finishTimeMs:o.a.number.isRequired,onTimerEnd:o.a.func}),n()(h,"defaultProps",{onTimerEnd:function(){}}),t.a=h},"5VZm":function(e,t,a){"use strict";var s=a("cDcd"),n=a.n(s),i=a("17x9"),r=a.n(i),c=a("O766"),o=a("eOGF");a("UTUX");function l(e){const t=e.open,a=e.onClose,s=e.title,i=e.youtubeId,r=e.className;return n.a.createElement(c.a,{open:t,onClose:a,title:s,theme:"theme-m",modalClass:"video-modal",className:r},n.a.createElement("div",{className:"frame-wrapper"},n.a.createElement("iframe",{id:"player-"+i,className:"youtube-frame block-center",type:"text/html",src:`https://www.youtube.com/embed/${i}?${Object(o.X)({enablejsapi:1,version:3,autoplay:1,rel:0,origin:"https://www.hackerrank.com"})}`,frameBorder:"0",allowFullScreen:!0})))}l.propTypes={open:r.a.bool,onClose:r.a.func,title:r.a.string.isRequired,youtubeId:r.a.string.isRequired},t.a=l},"6l/H":function(e,t,a){},ACly:function(e,t,a){"use strict";var s=a("lSNA"),n=a.n(s),i=a("cDcd"),r=a.n(i),c=a("17x9"),o=a.n(c),l=a("2VWb"),m=a("TSYQ"),d=a.n(m),u=a("EfbJ"),h=a("ZaSc"),p=a("eOGF");a("6l/H");Object(p.P)(["feedback/feedback.*.svg"]);const f=[{text:"Awesome, tell us more!",rating:1,icon:"like",title:"Like it"},{text:"Tell us more",rating:2,icon:"cantsay",title:"Maybe"},{text:"Tell us what went wrong",rating:3,icon:"no",title:"No"}],v=e=>{const t=e.selected,a=(e.clickHandler,e.title),s=e.icon,n=e.assetPath;return r.a.createElement("li",{className:d()("rating",{selected:t},s),onClick:()=>{e.clickHandler(e.idxVal)}},r.a.createElement("div",{className:"feedback-img"},r.a.createElement("span",{className:"overlay"}),r.a.createElement("img",{src:n(`feedback/feedback-${s}.svg`),className:"feedback-icon"})),r.a.createElement("div",{className:"feedback-title"},a))};class b extends r.a.Component{constructor(e){super(e),n()(this,"state",void 0),n()(this,"updateSelection",e=>{this.setState({selectedRating:e},()=>{this.submitForm()})}),n()(this,"updateComment",e=>{this.setState({comment:e.target.value})}),n()(this,"submitForm",e=>{e&&this.setState({submitting:!0});const t=this.state,a=t.selectedRating,s=t.comment,n=this.props,i=n.postUrl,r=n.onSubmit,c=n.featureId,o=n.appUtil.location.pathname;Object(h.g)({url:i,data:{rating:a+1,description:s,path:o},loadingMessage:!1,success:()=>{e&&(this.setState({submitted:!0}),r&&r(c))},error:()=>{this.setState({submitting:!1})}})}),n()(this,"renderFeedbackContainer",()=>{const e=this.props,t=e.className,a=e.theme,s=this.state.submitted;return r.a.createElement("div",{className:d()("feedback-modal",t,a)},s?this.renderThanks():this.renderFeedBack())}),this.state={selectedRating:"",comment:"",submitted:!1,submitting:!1}}componentDidMount(){const e=this.props,t=e.featureId,a=e.onSeen;a&&a(t)}renderFeedBack(){const e=this.props,t=e.appUtil.assetPath,a=e.title,s=e.name,n=e.desc,i=e.onClose,c=e.theme,o=this.state,l=o.selectedRating,m=o.comment,u=(o.submitted,o.submitting),h="theme-m"===c?"ui-btn ui-btn-primary":d()("btn btn-primary btn-flat",{disabled:u}),p="theme-m"===c?"ui-icon-cross":"icon-cancel-small";return r.a.createElement("div",null,r.a.createElement("div",{className:"cancel-icon",onClick:i},r.a.createElement("i",{className:p})),r.a.createElement("div",{className:"banner-img"},r.a.createElement("img",{src:t(`feedback/feedback-banner-${s}.svg`),className:"feedback-banner"})),r.a.createElement("h1",{className:"feedback-main-title mdT mdB"},a),n&&r.a.createElement("div",{className:"msT msB feedback-description-light"},n),r.a.createElement("div",{className:"ratings"},r.a.createElement("ul",null,f.map((e,a)=>r.a.createElement(v,{onClick:this.updateSelection,title:e.title,className:f[l],icon:e.icon,key:a,idxVal:a,clickHandler:this.updateSelection,assetPath:t,selected:e.rating===l+1})))),r.a.createElement("div",{className:"selected-rating"},f[l]&&f[l].text),"number"==typeof l&&r.a.createElement("div",{className:"submit-form"},r.a.createElement("div",{className:"input-area"},r.a.createElement("textarea",{className:"txt-area",placeholder:"Write a comment (optional)",onChange:this.updateComment,value:m})),r.a.createElement("button",{className:h,onClick:this.submitForm.bind(null,!0)},u?"Submitting..":"Submit")))}renderThanks(){return r.a.createElement("div",{className:"feedback-thanks"},r.a.createElement("div",{className:"thanks-icon"},r.a.createElement("i",{className:"icon-thumbs-up"})),r.a.createElement("div",{className:"thanks-title"},"Thanks for your feedback!"))}render(){const e=this.props,t=e.onClose,a=e.isStandalone;return r.a.createElement("div",null,a?this.renderFeedbackContainer():r.a.createElement(l.a,{open:!0,onClose:t,modalClass:"feedback-modal-wrapper"},this.renderFeedbackContainer()))}}n()(b,"defaultProps",{title:"Love our new upgrade?",name:"default"}),n()(b,"propTypes",{onClose:o.a.func,featureId:o.a.number.isRequired,postUrl:o.a.string.isRequired,theme:o.a.string}),t.a=Object(u.a)(b)},F39y:function(e,t,a){},H4Rz:function(e,t,a){},MfAl:function(e,t,a){"use strict";var s=a("MrcO"),n=a("ZaSc"),i=a("Ckvm");const r={};t.a=function(e){return new Promise((t,a)=>{if(r[e])t(r[e]);else if(s.a.get(e)){const a=s.a.get(e);r[e]=a,t(a)}else Object(n.g)({url:Object(i.b)()+"shorten",data:{url:encodeURIComponent(e)},success:a=>{const n=a.url;r[e]=n,s.a.set(e,n),t(n)},error:a})})}},MrcO:function(e,t,a){"use strict";a("rGqo");var s=a("MVZn"),n=a.n(s),i=a("lSNA"),r=a.n(i),c=a("eOGF");const o="undefined"==typeof localStorage?new class extends Object{setItem(e,t){this[e]=t}getItem(e){return this[e]}removeItem(e){delete this[e]}}:localStorage,l=new class{constructor(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r()(this,"dbName",void 0),r()(this,"namespace",void 0),r()(this,"intermediateStore",{}),r()(this,"persistentStore",void 0),r()(this,"onWindowUnload",void 0),r()(this,"flushIntervalID",void 0);const s=a.namespace,n=void 0===s?"":s,i=a.persistOnUnload,c=void 0===i||i,o=a.flushInterval,l=void 0===o?3e3:o;this.dbName=t,this.namespace=n,this.persistentStore=e,!n&&t&&this.initBaseStore(c,t),this.flushIntervalID=setInterval(()=>this.flush(),l)}initBaseStore(e,t){try{const e=this.persistentStore.getItem(t);if(e){const t=JSON.parse(e);this.intermediateStore=t}}catch(e){this.intermediateStore={}}e&&!Object(c.H)()&&window.addEventListener("beforeunload",()=>this.flush())}flush(){try{this.persistentStore.setItem(this.dbName,JSON.stringify(this.intermediateStore))}catch(e){console.error(e)}}getKey(e){return this.namespace?`${this.namespace}-${e}`:e}setItem(e,t){this.intermediateStore[this.getKey(e)]=t}getItem(e){return this.intermediateStore[this.getKey(e)]}set(e,t){return this.setItem(e,t)}get(e){return this.getItem(e)}removeItem(e){delete this.intermediateStore[this.getKey(e)]}deleteKey(e){return this.removeItem(e)}storageObj(){return n()({},this.intermediateStore)}index(){return Object.keys(this.intermediateStore)}removePrefix(e){Object.keys(this.intermediateStore).forEach(t=>{t.startsWith(e)&&delete this.intermediateStore[t]})}createNamespace(e){if(!e)throw new Error("Cannot create storage without namespace");const t=Object.create(this);return t.namespace=this.getKey(e),t}remove(){this.namespace&&this.removePrefix(this.namespace)}}(o,"jStorage");"undefined"!=typeof window&&(window.jStorage=l,window.$=window.$||{},window.$.jStorage=l);t.a=l},Rakn:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),i=a("MVZn"),r=a.n(i),c=a("QILm"),o=a.n(c),l=a("cDcd"),m=a.n(l);a("Jkfs");t.a=e=>{let t=e.className,a=void 0===t?"":t,s=o()(e,["className"]);return s=r()({},s,{className:a+" ui-svg-icon"}),m.a.createElement("svg",n()({viewBox:"0 0 400 400",width:"1em",height:"1em"},s,{fill:"currentColor"}),m.a.createElement("path",{d:"M153.7 301.5c94.3 0 145.9-78.2 145.9-145.9 0-2.2 0-4.4-.1-6.6 10-7.3 18.7-16.3 25.6-26.5-9.4 4.1-19.3 6.9-29.5 8.1 10.7-6.4 18.7-16.5 22.5-28.4-10.1 6-21.1 10.2-32.6 12.4-19.4-20.7-51.9-21.7-72.6-2.2-13.3 12.5-19 31.2-14.8 49-41.2-2.1-79.7-21.5-105.7-53.6-13.6 23.4-6.7 53.4 15.9 68.5-8.2-.2-16.1-2.4-23.3-6.4v.6c0 24.4 17.2 45.4 41.2 50.3-7.6 2.1-15.5 2.4-23.2.9 6.7 20.9 26 35.2 47.9 35.6-18.2 14.3-40.6 22-63.7 22-4.1 0-8.2-.3-12.2-.7 23.6 14.9 50.8 22.9 78.7 22.9"}))}},UTUX:function(e,t,a){},ZQce:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),i=a("MVZn"),r=a.n(i),c=a("QILm"),o=a.n(c),l=a("cDcd"),m=a.n(l);a("Jkfs");t.a=e=>{let t=e.className,a=void 0===t?"":t,s=o()(e,["className"]);return s=r()({},s,{className:a+" ui-svg-icon"}),m.a.createElement("svg",n()({viewBox:"0 0 400 400",width:"1em",height:"1em"},s,{fill:"currentColor"}),m.a.createElement("path",{d:"M306.5 75H93.4C83.3 75 75 83.1 75 93v214c0 10 8.3 18 18.4 18h213.1c10.2 0 18.5-8.1 18.5-18V93c0-9.9-8.3-18-18.5-18zM149.2 288H112V168.7h37.1l.1 119.3zm-18.6-135.6c-11.9 0-21.5-9.6-21.5-21.5s9.6-21.5 21.5-21.5 21.5 9.6 21.5 21.5-9.6 21.5-21.5 21.5zM288 288h-37v-58c0-13.8-.2-31.6-19.3-31.6-19.3 0-22.2 15.1-22.2 30.6v59h-37V168.7H208V185h.5c4.9-9.4 17-19.3 35.1-19.3 37.5 0 44.5 24.7 44.5 56.8V288h-.1z"}))}},nB3z:function(e,t,a){"use strict";var s=a("lSNA"),n=a.n(s),i=a("cDcd"),r=a("vN+2"),c=a.n(r);class o extends i.Component{constructor(){super(...arguments),n()(this,"currentPromise",null),n()(this,"failedCount",0),n()(this,"state",{optimisticState:this.props.initialValue}),n()(this,"handleToggle",e=>{const t=!this.state.optimisticState;this.setState({optimisticState:t});const a=this.props.action(t,e);this.currentPromise=a,a.catch(e=>{this.failedCount++,this.currentPromise===a&&this.setState(e=>({optimisticState:this.failedCount%2==0?e.optimisticState:!e.optimisticState}),()=>{this.failedCount=0})})})}render(){return this.props.children(this.state.optimisticState,this.handleToggle)}}n()(o,"defaultProps",{initialValue:!1,action:c.a}),t.a=o},oOaF:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),i=a("QILm"),r=a.n(i),c=a("cDcd"),o=a.n(c),l=a("TSYQ"),m=a.n(l),d=a("37OS"),u=a.n(d),h=a("nB3z"),p=a("OEX3");a("F39y");function f(e){const t=e.initialValue,a=e.className,s=e.label,i=e.onClick,c=r()(e,["initialValue","className","label","onClick"]);return o.a.createElement(h.a,{initialValue:t,action:i},(e,t)=>{const i=e?"star-icon-filled":"",r=e?"ui-icon-star-filled":"ui-icon-star";return o.a.createElement(p.c,n()({"aria-label":s(e),className:"star-button",onClick:t},c),o.a.createElement("i",{className:m()(a,"star-icon",r,i)}))})}f.defaultProps={initialValue:!1,label:e=>e?"Unstar":"Star",onClick:u.a},t.a=f},ve2B:function(e,t,a){"use strict";var s=a("lSNA"),n=a.n(s),i=a("cDcd"),r=a.n(i),c=a("TSYQ"),o=a.n(c),l=a("OEX3"),m=a("3N0A"),d=a("Q9J+");a("H4Rz");class u extends i.PureComponent{componentDidUpdate(){this.shouldHideScrollBar()?d.a.hideScrollBars():d.a.showScrollBars()}componentWillUnmount(){d.a.showScrollBars()}shouldShowOverlay(){const e=this.props,t=e.open,a=e.overlay;return t&&a}shouldHideScrollBar(){const e=this.props,t=e.open,a=e.type,s=e.popupTarget;return(this.shouldShowOverlay()||t&&"full-screen"===a)&&!s}renderPopup(){const e=this.props,t=e.children,a=e.type,s=e.handleClose,n=e.className,i=e.popupTarget,c=this.shouldShowOverlay();return r.a.createElement(m.a,{target:i},r.a.createElement("div",{className:o()("fab-popup",n)},c&&r.a.createElement("div",{className:"fab-popup-overlay",onClick:s}),r.a.createElement("div",{className:o()("fab-popup-content","fab-popup-"+a)},t)))}renderPopupHandle(){const e=this.props,t=e.icon,a=e.handleOpen,s=e.active;return r.a.createElement(l.d,{className:o()("fab-popup-handle",s?"active":"default"),onClick:a},r.a.createElement("i",{className:o()(t,"fab-popup-icon")}))}render(){return this.props.open?this.renderPopup():this.renderPopupHandle()}}n()(u,"defaultProps",{type:"menu",overlay:!0,active:!1}),t.a=u},zlWU:function(e,t,a){"use strict";var s=a("pVnL"),n=a.n(s),i=a("MVZn"),r=a.n(i),c=a("QILm"),o=a.n(c),l=a("cDcd"),m=a.n(l);a("Jkfs");t.a=e=>{let t=e.className,a=void 0===t?"":t,s=o()(e,["className"]);return s=r()({},s,{className:a+" ui-svg-icon"}),m.a.createElement("svg",n()({viewBox:"0 0 400 400",width:"1em",height:"1em"},s,{fill:"currentColor"}),m.a.createElement("path",{d:"M311.2 75H88.8C81.2 75 75 81.2 75 88.8v222.4c0 7.6 6.2 13.8 13.8 13.8h119.7v-96.8H176v-37.7h32.6v-27.8c0-32.3 19.7-49.9 48.5-49.9 13.8 0 25.7 1 29.1 1.5V148h-20c-15.7 0-18.7 7.4-18.7 18.4v24.1h37.4l-4.9 37.7h-32.5V325h63.7c7.6 0 13.8-6.2 13.8-13.8V88.8c0-7.6-6.2-13.8-13.8-13.8z"}))}}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/modules~hackerrank_r_challenge~hackerrank_r_challenge_list~hackerrank_r_challenge_list_v2~hackerrank~27f678b8-95c84efb.js.map