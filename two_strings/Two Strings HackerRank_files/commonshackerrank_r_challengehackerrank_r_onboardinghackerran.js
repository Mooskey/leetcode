(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{J49V:function(e,t,s){"use strict";var a=s("lSNA"),n=s.n(a),o=s("cDcd"),r=s.n(o),i=s("17x9"),c=s.n(i),l=s("TSYQ"),u=s.n(l),d=s("2VWb"),m=s("oBtd"),p=s("t3Eu"),h=s.n(p),g=s("PsEu"),C=s("viZj"),b=s("8KV7"),f=(s("bpCT"),s("eOGF"));class _ extends o.PureComponent{constructor(){super(),n()(this,"state",void 0),n()(this,"onModalClose",()=>{const e=this.props,t=e.onClose,s=e.analyticsKey,a=e.analyticsAttribute;e.allowClose&&(s&&m.a.track("Click",s+"Close",a),t())}),n()(this,"renderRectangle",e=>{e.beginPath(),e.rect(0,0,10,15),e.stroke(),e.fill(),e.closePath()}),this.state={windowWidth:1280,windowHeight:768}}componentDidMount(){this.calculateWindowSize(),this.trackModalViewed()}componentWillReceiveProps(){this.calculateWindowSize()}trackModalViewed(){const e=this.props.badge,t=e.analyticsKey,s=e.analyticsAttribute;t&&m.a.track("Viewed",t,s)}calculateWindowSize(){this.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})}badgeSocialShare(){const e=this.props.badge;return r.a.createElement("div",{className:"badge-share-modal"},r.a.createElement(b.a,{badge:e,align:"center",page:"badge_share"}))}renderBadgeContent(){const e=this.props,t=e.badge,s=e.button,a=e.title,n=e.message,o=e.badgeShare,i=this.state,c=i.windowWidth,l=i.windowHeight,u=C.b[C.c[t.level]||"bronze"].confetti;return r.a.createElement("div",{className:"modal-content"},r.a.createElement(g.a,{badge:t}),r.a.createElement("div",{className:"progress-title"},a),r.a.createElement("div",{className:"progress-message"},n),s,o&&this.badgeSocialShare(),r.a.createElement(h.a,{colors:u,width:c,height:l,drawShape:this.renderRectangle,className:"confetti"}))}render(){const e=this.props,t=e.open,s=e.allowClose,a=e.modalClass;return r.a.createElement(d.a,{open:t,onClose:this.onModalClose,modalClass:u()("badge-confetti-modal",a)},s&&r.a.createElement("div",{className:"icon2-close close",onClick:this.onModalClose}),r.a.createElement("div",{className:"status-wrap"},this.renderBadgeContent()))}}n()(_,"propTypes",{badge:c.a.object.isRequired,open:c.a.bool.isRequired,onClose:c.a.func.isRequired,title:c.a.string,message:c.a.oneOfType([c.a.string,c.a.element]).isRequired,button:c.a.element,analyticsKey:c.a.string,analyticsAttribute:c.a.object,allowClose:c.a.bool,modalClass:c.a.string,badgeShare:c.a.bool}),n()(_,"defaultProps",{onClose:f.K,title:"Congrats!",allowClose:!0}),t.a=_},OIJY:function(e,t,s){},PVW5:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"e",(function(){return r})),s.d(t,"f",(function(){return i})),s.d(t,"i",(function(){return c})),s.d(t,"g",(function(){return l})),s.d(t,"d",(function(){return u})),s.d(t,"c",(function(){return d})),s.d(t,"b",(function(){return m})),s.d(t,"j",(function(){return p})),s.d(t,"h",(function(){return h}));s("OG14");var a=s("cK/l");let n;function o(e,t){const s=Object(a.k)(t.challengeSlug);return e.gitData[s].git_browse_url}function r(e){const t=e.status_code;return!(0===t||3===t)}function i(e){return 3===e.score_processed}function c(e,t,s){if(function(e){const t=e.status||"";return t.startsWith("Wrong")||t.startsWith("Terminated")||t.startsWith("Compilation")||t.startsWith("Runtime")}(e))return"failed";const a=t.track&&"tutorials"===t.track.track_slug;return!s.is_admin&&!a&&t.is_solution_unlocked||t.solved?"solutionUnlocked":"passed"}function l(e){return!e||!i(e)}function u(e){const t=e.codechecker_time,s=e.is_additional_testcase,a=e.is_sample_testcase,n=e.individual_test_case_score,o=e.codechecker_signal;let i=e.testcase_message,c=e.testcase_status;const l=e.live_status||{};function u(e,t){return Array.isArray(e)?e[t]:null}return!r(e)&&l.testcase_status&&l.testcase_status.length>0&&(c=l.testcase_status,i=l.testcase_message),a.map((e,a)=>({id:a,message:u(i,a),codeCheckerTime:u(t,a),isAdditional:u(s,a),isSample:e,status:u(c,a),testCaseScore:u(n,a),signal:u(o,a)}))}function d(e){const t=e.is_sample_testcase,s=e.status_code,a=e.progress,n=e.progress_states,o=e.contest_slug,r=i(e);let c=2+t.length,l=0;3===s?"number"==typeof a&&"number"==typeof n?(l=a,c=n):l=2:1!==s&&2!==s||(l=c);const u="master"===o?95:100;let d=Math.max(Math.round(l*u/c),2);return r&&95===u&&(d+=5),d}function m(e,t){const s=e.next_challenge,n=e.contest_slug,o=e.random_challenge_slug,r=s&&s.status,c=t.search,l=void 0===c?"":c,u=i(e);let d="",m="",p="h_r=next-challenge&h_v=zen";return p=l?`${l}&${p}`:"?"+p,s&&s.url&&("locked"===r?m=Object(a.f)({slug:o,contest_slug:n}):s.url&&(m=s.url),d=`${m}${p}`),u?d:""}function p(e){let t=0,s=3e3;const a=e.challengeSlug,o=e.contestSlug,r=e.submissionId,i=e.submissionActions,c=e.profileActions,u=e.onComplete,d=e.postCompleteActions,m=e.playlistSlug,p=e.profile,h=(void 0===p?{}:p).show_recommended_prep_kit,g=()=>{i.getSubmissionDetail({challengeSlug:a,contestSlug:o,submissionId:r,playlistSlug:m}).then(e=>{const a=e.model;l(a)?(t+=1,t>10&&s<2e4&&(s*=1.05),n&&clearTimeout(n),n=setTimeout(g,s)):(u(a),d&&(i.setGlobalSubmissionStatus(a),c.invalidateProgress(),h&&c.invalidateProfile()))})};g();return function(){n&&clearTimeout(n)}}function h(e){return 1===e||2===e}},aNsO:function(e,t,s){},bpCT:function(e,t,s){},dQuL:function(e,t,s){},f0B6:function(e,t,s){},ghgb:function(e,t,s){"use strict";var a=s("lSNA"),n=s.n(a),o=s("cDcd"),r=s.n(o),i=s("17x9"),c=s.n(i),l=s("TSYQ"),u=s.n(l),d=s("YZNL"),m=s("uqq+");s("yp9S"),s("dQuL"),s("f0B6");class p extends r.a.Component{getTestCaseData(){const e=this.props.compileData,t=e.testcase_status,s=e.customtestcase,a=e.hide_stdstream,n=e.kind,o=e.stdin,r=e.stdout,i=e.expected_output,c=e.testcase_message,l=e.customchecker_message,u=e.stdout_debug,d=e.stderr,m=e.lexical_penalty,p=e.lexical_penalty_keywords,h=e.sample_test_cases_index,g=e.signal,C=e.trimmed_fields||[];return t.map((e,b)=>{let f,_,w,y,S,T,E,k,v;const D=g[b];return s||(a||C.includes("expected_output")||(f=i[b]),c[b]&&"Success"!==c[b]&&(_=c[b]),l&&(w=l),m&&(y=p.join(",")),c[b]&&(v=h[b])),a||("database"===n||C.includes("stdin")||(S=o[b]),C.includes("stdout")||(T=r[b]),!C.includes("stdout_debug")&&u&&u[b]&&(E=u[b]),!C.includes("stderr")&&d&&d[b]&&(k=d[b])),{isSample:!0,expectedOutput:f,compilerMessage:_,customCheckerMessage:w,lexicalPenalty:y,stdIn:S,stdOut:T,stdOutDebug:E,stdErr:k,status:t[b],id:v,signal:D}})}getStatusInfo(){const e=this.props.compileData,t=e.customtestcase,s=e.signal,a=e.testcase_status,n=e.lexical_penalty;let o="",r="",i="";const c=a.filter(e=>0===e).length,l=a.length;return t?(s&&s[0]?(o="Runtime error :(",i="error"):(o="Compilation Successful :)",i="success"),r="Click the Submit Code button to run your code against all the test cases."):s&&s[0]?(o="Runtime Error :(",i="error"):c>0&&s&&!s[0]?(o="Wrong Answer :(",r=`${c}/${l} test ${1===l?"case":"cases"} failed`,i="error"):(o=n?`Congratulations, you passed the sample test case, but you had a penalty of ${100*n}%`:"Congratulations!",r="You have passed the sample test cases. Click the submit button to run your code against all the test cases.",i="success"),{statusText:o,statusClass:i,subText:r}}renderErrors(){const e=this.props.compileData.errors,t=void 0===e?[]:e;return t&&t.length?r.a.createElement(d.a,{layer:2,className:"compilation-errors-card"},r.a.createElement("div",{className:"compilation-error-heading"},"Codechecker Error "),t.map((e,t)=>r.a.createElement("pre",{key:t,className:"compilation-errors"},e))):null}renderCompileMessage(){const e=this.props.compileData,t=e.compilemessage,s=e.result,a=e.hide_stdstream,n=e.kind,o=e.trimmed_fields||[];if(s&&!a&&!o.includes("compilemessage")&&"database"!==n)return r.a.createElement(d.a,{layer:2,className:u()("compile-time-response")},r.a.createElement("div",{className:"compile-time full-width"},r.a.createElement("div",{className:"compile-message"},r.a.createElement("p",{className:"compile-field-label"},"Compile Message"),r.a.createElement("pre",{className:u()("compile-output-message compile-message",{"no-response":!t})},r.a.createElement("code",{className:"bold"},t||"~ no response on stderr ~"))),r.a.createElement("div",{className:"exit-status"},r.a.createElement("p",{className:"compile-field-label"},"Exit Status"),r.a.createElement("pre",{className:"compile-output-message compile-message"},r.a.createElement("code",{className:"bold"},s)))))}renderCompileTimeError(){if(this.props.compileData.result)return r.a.createElement("div",{className:"compile-error-wrapper"},r.a.createElement("p",{className:"status compile-error"},"Compilation error :("),r.a.createElement("p",{className:"compile-advice"},"Check the compiler output, fix the error and try again."))}renderCompilationResultHeading(){const e=this.props.compileData,t=e.result,s=e.testcase_status;if(t||0===s.length)return;const a=this.getStatusInfo();return r.a.createElement("div",{className:"compile-error-wrapper"},r.a.createElement("p",{className:u()("status compile-"+a.statusClass)},a.statusText),r.a.createElement("p",{className:"compile-advice"},a.subText))}renderNoSampleTestCases(){return r.a.createElement(d.a,{layer:2,className:"no-sample-testcases"},r.a.createElement("div",{className:"bold"},"No sample test-cases for this question. Please test your code against custom input."))}renderTestCaseResult(){const e=this.props,t=e.compileData,s=e.bingChallenge,a=e.challenge,n=t.result,o=t.customtestcase,i=t.compilemessage,c=t.compile_command,l=this.getTestCaseData();if(!n)return l.length?r.a.createElement(m.a,{testCaseData:l,type:"compile",bingChallenge:s,customtestcase:o,challenge:a,statusCode:1,result:n,compileMessage:i,compileCommand:c}):this.renderNoSampleTestCases()}render(){return this.props.compileData.status?r.a.createElement("div",{className:"code-compile-test-view theme-m-content"},this.renderErrors(),this.renderCompileTimeError(),this.renderCompilationResultHeading(),this.renderCompileMessage(),this.renderTestCaseResult()):null}}n()(p,"propTypes",{compileData:c.a.object,bingChallenge:c.a.bool,challenge:c.a.object.isRequired}),t.a=p},"uqq+":function(e,t,s){"use strict";s("rGqo");var a=s("lSNA"),n=s.n(a),o=s("MVZn"),r=s.n(o),i=s("cDcd"),c=s.n(i),l=s("17x9"),u=s.n(l),d=s("Wwog"),m=s("tM5t"),p=s("ZaSc"),h=s("DM5n"),g=s("qePO");s("aNsO");const C=Object(d.a)(e=>e.map(e=>r()({},e,{purchased:!0===e.isSample})));class b extends c.a.Component{constructor(e){super(e),n()(this,"state",void 0),n()(this,"getUnlockedTestCases",()=>{const e=this.props,t=e.type,s=e.challenge,a=s.id,n=s.contest_slug,o=this.state.testCaseData;"submit"===t&&Object(p.c)({url:Object(h.e)("getUnlockedTestCases",{challengeId:a,contestSlug:n}),success:e=>{e.forEach(e=>{o[e]=r()({},o[e],{purchased:!0})}),this.setState({testCaseData:[...o]})}})}),n()(this,"buyTestCase",e=>{const t=this.props,s=t.submissionId,a=t.challenge,n=a.id,o=a.contest_slug,r=e;let i="";this.updateTestCase(r,{unlockingTestCase:!0,unlockError:""}),Object(p.c)({url:Object(h.e)("buyTestCase",{challengeId:n,contestSlug:o,testCaseId:r}),data:{submission_id:s},success:()=>{this.updateTestCase(r,{purchased:!0,unlockingTestCase:!1,unlockError:""}),this.getDataForTestCase(r)},error:e=>{i=402===e.resStatus?"You don't have enough hackos to purchase this testcase!":"We couldn't perform the transaction now, try again later!",this.updateTestCase(r,{unlockingTestCase:!1,unlockError:i})}})}),n()(this,"getDataForTestCase",e=>{const t=this.props,s=t.type,a=t.challenge,n=a.id,o=a.contest_slug;if("submit"!==s)return;const r=this.state.testCaseData[e];if(!r.loadData&&!r.purchased)return;const i=`/rest/contests/${o}/testcases/${n}/${e}/testcase_data`;Object(p.c)({url:i,success:t=>{this.updateTestCase(e,{loadData:!1,stdIn:t.stdin,expectedOutput:t.expected_output})},error:()=>{this.updateTestCase(e,{loadData:!1})}})}),n()(this,"downloadTestcaseLink",(e,t)=>{const s=this.props.challenge,a=s.id,n=s.contest_slug,o="stdin"===e?"input":"output";window.open(`/rest/contests/${n}/testcases/${a}/${t}/testcase${o}`,"_blank")}),this.state={testCaseData:C(e.testCaseData)},this.testcaseRef=c.a.createRef()}static getDerivedStateFromProps(e,t){return 0===t.testCaseData.length?{testCaseData:C(e.testCaseData)}:null}componentDidMount(){this.testcaseRef.current.scrollIntoView()}updateTestCase(e,t){const s=this.state.testCaseData;s[e]=r()({},s[e],t),this.setState({testCaseData:[...s]})}render(){const e=this.props,t=e.type,s=e.challenge,a=s.contest_slug,n=s.slug,o=e.bingChallenge,r=e.customtestcase,i=e.liveStatus,l=e.statusCode,u=e.compileMessage,d=e.compileCommand,p=e.result,h=this.state.testCaseData,C={"data-attr2":a,"data-attr3":n};return c.a.createElement("div",{className:"tc-container",ref:this.testcaseRef},c.a.createElement(m.a,{testcases:h,type:t,getHiddenTestcases:this.getUnlockedTestCases,shouldUnlockHiddenTestcase:Object(g.e)(a),handleUnlock:this.buyTestCase,unlockTestcaseMessage:"Unlock this testcase for 5 hackos.",analyticsAttributes:C,fetchTestcase:this.getDataForTestCase,handleDownload:this.downloadTestcaseLink,bingChallenge:o,isCustomTestcase:r,statusCode:l,liveStatus:i,showLineNumbers:!0,result:p,compileMessage:u,compileCommand:d}))}}n()(b,"propTypes",{testCaseData:u.a.array.isRequired,type:u.a.string.isRequired,bingChallenge:u.a.bool,submissionId:u.a.number,customtestcase:u.a.bool,challenge:u.a.object.isRequired,liveStatus:{progress:u.a.number.isRequired,maxLimit:u.a.number.isRequired,testcaseStatus:u.a.array.isRequired,signal:u.a.array.isRequired,liveMessage:u.a.string.isRequired,totalCount:u.a.number.isRequired},statusCode:u.a.number.isRequired,result:u.a.number.isRequired,compileMessage:u.a.string.isRequired,compileCommand:u.a.string}),n()(b,"defaultProps",{testCaseData:[]}),t.a=b},yp9S:function(e,t,s){}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_challenge~hackerrank_r_onboarding~hackerrank_r_onboarding_old-1b28ee15.js.map