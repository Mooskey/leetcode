(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"5/Ko":function(e,t,a){},Gkn0:function(e,t,a){},NgMQ:function(e,t,a){},rO8H:function(e,t,a){"use strict";a.r(t);var r=a("pVnL"),s=a.n(r),i=a("MVZn"),o=a.n(i),n=(a("rGqo"),a("lSNA")),l=a.n(n),c=a("cDcd"),m=a.n(c),d=a("ANjH"),u=a("17x9"),p=a.n(u),b=a("/MKj"),k=a("Wwog"),h=a("Uz+i"),T=a("V7ES"),g=a("fe33"),E=a("BtRI"),f=a("9t4x"),y=a("v2uj"),v=a("eUGL"),N=a("Z/B0");class w extends m.a.Component{constructor(){super(...arguments),l()(this,"updateInterviewTryStatus",()=>{const e=this.props,t=e.profile,a=e.profileActions;t&&t.username&&!t.tried_interview_prep&&a.updateProfile("me",{tried_interview_prep:!0})})}render(){const e=this.props,t=e.className,a=e.position;return m.a.createElement(v.a,{cardTitle:"Interview Preparation",title:"Interview Preparation Kit",detail:"Curated challenges and tips based on learnings from 1000+ companies to help you prepare for your upcoming interviews.",buttonText:"View",buttonClass:"ui-btn-large ui-btn-primary",link:"/interview/"+N.k.INTERVIEW_PREPARATION_KIT,onClick:this.updateInterviewTryStatus,className:t,"data-analytics":"InterviewPromotionCard","data-attr8":a})}}var _=w=Object(d.d)(Object(b.c)(null,e=>({profileActions:Object(d.b)(g.a,e)})))(w),j=a("KJde"),R=a.n(j);a("NgMQ");class S extends c.PureComponent{getInterviewPreparationDetails(){return{short_description:"Curated challenges and tips based on learnings from 1000+ companies to help you prepare",short_name:"Interview Preparation Kit",title:"Interview Preparation",slug:N.k.INTERVIEW_PREPARATION_KIT}}renderTutorialCard(e){const t=e.title,a=e.slug,r=e.short_description,s=e.tagline,i=e.is_recent,o=e.short_name,n=e.name;let l,c,d;a===N.k.INTERVIEW_PREPARATION_KIT?(d="/interview",c="ViewTutorial",l="View Tutorial"):(d="/domains/tutorials/"+a,c=i?"ResumeTutorial":"StartTutorial",l=i?"Resume Tutorial":"Start Tutorial");const u=m.a.createElement("div",null,m.a.createElement("div",{className:"tutorial-content text-content"},m.a.createElement(R.a,{text:r||s,maxLine:"2",ellipsis:"...",basedOn:"letters"})),m.a.createElement("div",{className:"start-tutorial bold"},l));return m.a.createElement("div",{key:a,className:"tutorial-card-box"},m.a.createElement("div",{className:"tutorial-card-tile"},m.a.createElement(v.a,{cardTitle:t||"Tutorial","data-analytics":c,"data-attr1":a,title:o||n,detail:u,link:d})))}render(){const e=this.props.tracks;return m.a.createElement("div",{className:"tutorials-section"},m.a.createElement("div",{className:"tutorial-row"},this.renderTutorialCard(this.getInterviewPreparationDetails()),e.map(this.renderTutorialCard)))}}l()(S,"propTypes",{tracks:p.a.array.isRequired});var I=S,P=a("1nVV"),A=a("DNJ5"),O=a("MGin"),q=a("BkRI"),J=a.n(q),x=a("YZNL"),V=a("iGQG"),C=a("m7ns"),M=a("0ma0");a("Gkn0");function G(e,t){const a=new Set(t);return e.filter(e=>!a.has(e.slug))}function K(e){let t=e.category;return t.tracks.map(e=>{const a=e.name,r=e.slug,s=e.get_preview_image;return m.a.createElement("li",{className:"track-card",key:a},m.a.createElement(O.Link,{to:"/domains/"+r,"data-analytics":"TrackLink","data-attr1":t.slug,"data-attr2":r,className:"track-link"},m.a.createElement("div",{className:"track-item bold"},m.a.createElement("img",{src:s,alt:"",height:"24"}),m.a.createElement("div",{className:"track-name","data-automation":r},a),r===N.g.REACT&&m.a.createElement(M.a,{className:"skill-new-badge"}))))})}var D=Object(d.d)(C.a,V.b)(m.a.memo((function(e){const t=e.abTest,a=e.isProjectsEnabled,r=e.tracks,s=Object.values(N.g),i=J()(r);return t.showCodeSandbox()||(i[0].tracks=G(i[0].tracks,["react","angular"])),a||(i[0].tracks=G(i[0].tracks,s)),m.a.createElement(x.a,{className:"skills-section"},m.a.createElement("ul",{className:"tracks-list"},i.map(e=>"Tutorials"===e.name?null:m.a.createElement(K,{key:e.slug,category:e}))))}))),L=a("L5Qz"),H=a("goSp"),z=a("HeyA"),B=a("wEfs"),Q=a("oBtd"),W=a("xaeT"),Y=a("cSw4"),Z=a("lHYu"),F=a("vKMH");a("5/Ko"),a("F63q");a.d(t,"PureDashboard",(function(){return U})),a.d(t,"mapStateToProps",(function(){return $})),a.d(t,"mapDispatchToProps",(function(){return ee}));class U extends c.Component{constructor(){super(...arguments),l()(this,"mySkills",void 0)}componentDidMount(){const e=this.props,t=e.profile,a=e.abTest.isNotJobsPromoVariant,r=e.recommendedJobs,s=r.jobs,i=r.didInvalidate;!Object(W.w)(t)||!t.sourcing_jobs_consent||a()||s&&!i||this.fetchRecommendedJobs("dashboard")}fetchRecommendedJobs(e){const t=this.props,a=t.jobsActions,r=t.profile,s=r.country,i=r.work_start_year,o={role:r.jobs_prefered_roles,country_name:s,min_experience:i?(new Date).getFullYear()-i:0,recommended:!0};a.loadRecommendedJobs(o,e).then(()=>{const e=this.props.recommendedJobs.jobs,t=(void 0===e?[]:e).map(e=>e.unique_id);Q.a.batch_track("View","JobCard",{attribute1:t})})}animateToSkills(){this.mySkills&&this.mySkills.scrollIntoView({behavior:"smooth"})}getTutorialTracks(){return(this.props.trackGroups.filter(e=>"tutorials"===e.slug)[0]||{}).tracks}getCategorizedMyTracks(){const e=this.props,t=e.trackGroups,a=e.myTracks,r={};return t.forEach(e=>{e.tracks.forEach(t=>{r[t.slug]=e.name})}),a.filter(e=>"reactjs"!==e.slug).map(e=>o()({},e,{category_name:e.category_name||e.badge_name||r[e.slug]}))}renderMyTracks(){const e=this.props.profile,t=e.tried_interview_prep,a=e.confirmed,r=this.getCategorizedMyTracks(),i=!a;let o=Number(!t)+Number(i);const n=4-o;return m.a.createElement("div",{className:"my-tracks"},m.a.createElement(h.a,{category:"yourSkills"}),m.a.createElement("div",{className:"tracks-row"},!t&&m.a.createElement(_,{className:"card-box",profile:e,position:0}),i&&m.a.createElement(B.a,null,a=>m.a.createElement(L.a,s()({},a,{className:"card-box",position:t?0:1,profile:e}))),r.slice(0,n).map((e,a)=>m.a.createElement(f.a,{primary:!!t&&0===a,className:"card-box",key:e.badge_type||e.slug,track:e,position:o++})),!r.length&&m.a.createElement(y.a,{text:"New Skill",className:"card-box",hasRecent:r.length>0,animateToSkills:this.animateToSkills.bind(this),position:o})))}renderTutorials(){const e=this.getTutorialTracks();return e?m.a.createElement("div",{className:"my-tutorials"},m.a.createElement(h.a,{category:"tutorials"}),m.a.createElement(I,{tracks:e})):null}renderVerifiableSkills(){const e=this.props.verifiableSkills;return e.length?m.a.createElement("div",{className:"verifiable-skills"},m.a.createElement(h.a,{category:"verifiableSkills"}),m.a.createElement("div",{className:"verifiable-skills-row"},e.map(e=>m.a.createElement(P.b,s()({},e,{key:e.name}))),m.a.createElement(P.a,null))):null}renderMockTests(){const e=this.props,t=e.mockTests;return(0,e.abTest.showMockTests)()&&t.length>0?m.a.createElement("div",{className:"mock-tests"},m.a.createElement(h.a,{category:"mockTests"}),m.a.createElement("div",{className:"mock-tests-row"},t.map((e,t)=>m.a.createElement(A.b,{position:t,mockTest:e,key:e.unique_id})),m.a.createElement(A.a,null))):null}renderAllSkills(){const e=this.props.trackGroups;return m.a.createElement("div",{className:"my-skills",ref:e=>{this.mySkills=e}},m.a.createElement(h.a,{category:"exploreSkills"}),m.a.createElement(D,{tracks:e}))}renderRecommendedJobs(){const e=this.props,t=e.recommendedJobs,a=e.profile,r=e.abTest.isNotJobsPromoVariant,s=t.jobs;if(!Object(W.w)(a)||!a.sourcing_jobs_consent||!s||!s.length||r())return;const i={h_referrer:"jobs_card",h_location:"dashboard",h_version:"jobs_promotion"};return m.a.createElement("div",{className:"recommended-jobs"},m.a.createElement(h.a,{category:"recommendedJobs"}),m.a.createElement("div",{className:"jobs-list"},s.map((e,t)=>m.a.createElement(H.b,{key:e.unique_id,job:e,position:t,query:i,prefetchProps:{shouldPrefetch:!0}})),m.a.createElement(z.default,{query:i,"data-attr2":"dashboard","data-attr8":s&&s.length})))}render(){return m.a.createElement("div",{className:"dashboard container"},this.renderVerifiableSkills(),this.renderMockTests(),this.renderMyTracks(),this.renderRecommendedJobs(),this.renderAllSkills(),this.renderTutorials())}}l()(U,"propTypes",{profile:p.a.object.isRequired,dashboardActions:p.a.object,myTracks:p.a.array.isRequired,trackGroups:p.a.array.isRequired,showAllTracks:p.a.bool.isRequired,abTest:p.a.shape({isNotJobsPromoVariant:p.a.func.isRequired,showMockTests:p.a.func.isRequired}).isRequired,jobsActions:p.a.shape({loadRecommendedJobs:p.a.func.isRequired}).isRequired,recommendedJobs:p.a.shape({jobs:p.a.arrayOf(p.a.object),didInvalidate:p.a.bool}),verifiableSkills:p.a.arrayOf(p.a.shape({title:p.a.string.isRequired,status:p.a.string,icon:p.a.string.isRequired,slug:p.a.string.isRequired}))}),l()(U,"defaultProps",{verifiableSkills:[],mockTests:[]});const X=Object(k.a)(e=>e.slice(0,2)),$=e=>{const t=e.community,a=t.profile,r=t.dashboard,s=r.myTracks,i=r.trackGroups,o=r.showAllTracks,n=Object(Z.c)(e,{profile:a}),l=X(n),c=Object(F.c)(e);return{profile:a,myTracks:s,trackGroups:i,showAllTracks:o,recommendedJobs:Object(Y.b)("dashboard")(e),verifiableSkills:l,mockTests:c}},ee=e=>({dashboardActions:Object(d.b)(T.a,e),profileActions:Object(d.b)(g.a,e),jobsActions:Object(d.b)(E.a,e)});t.default=Object(d.d)(V.b,Object(b.c)($,ee))(U)}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/hackerrank_r_dashboard-12011f10.js.map