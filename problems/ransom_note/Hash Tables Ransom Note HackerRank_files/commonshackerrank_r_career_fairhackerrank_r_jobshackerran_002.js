(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4PqN":function(e,t,a){},"6yKo":function(e,t,a){"use strict";a.r(t);a("a1Th");var i=a("pVnL"),o=a.n(i),r=(a("KKXr"),a("rGqo"),a("yXPU")),n=a.n(r),l=a("MVZn"),s=a.n(l),c=a("lSNA"),d=a.n(c),m=a("cDcd"),u=a.n(m),p=a("ANjH"),h=a("/MKj"),f=a("J2iB"),b=a.n(f),g=a("vN+2"),v=a.n(g),y=a("KYPV"),E=a("P/gF"),O=a.n(E),k=a("TSYQ"),w=a.n(k),N=a("V6Zm"),_=a("qbr2"),S=a("tZtq"),j=a("f0wr"),P=a("NXto"),C=a("gokM"),V=a("aHjf"),q=a("3L6z"),F=a("qs1k"),A=a("qZTp"),T=a("PtY2"),M=a("5J+W"),I=a("IreD"),B=a("Mp5Q"),U=a("bh43"),D=a("xaeT"),R=a("la/C"),L=a("KG4N"),H=a("p5Jc"),x=a("l/re"),Y=a("PsEu");a("4PqN");var G=function(e){const t=e.badges.map(e=>{const t=e.badge_type;return{label:u.a.createElement(Y.a,{badge:e,key:t}),value:t}});return u.a.createElement("div",{className:"badge-checklist"},u.a.createElement(q.a,o()({list:t},e,{componentClassName:"badge-checklist-checkbox"})))},W=a("fe33"),J=a("1RgH"),K=a("X6UR");a("EbYE");function Q(e){let t=e.children,a=e.className;return u.a.createElement("div",{className:w()("form-field-warning",a)},u.a.createElement(T.a,{className:"form-field-warning-icon"}),u.a.createElement("span",{className:"form-field-warning-content"},t))}a.d(t,"JOB_TYPES",(function(){return X})),a.d(t,"VCF_PROFILE_VISIBILITY_TYPES",(function(){return Z})),a.d(t,"mapStateToProps",(function(){return ee})),a.d(t,"mapActionsToProps",(function(){return te})),a.d(t,"PureJobsProfileForm",(function(){return $})),a.d(t,"ApplicationBadgesSection",(function(){return z}));const X=[{label:"Full-Time",value:"fulltime"},{label:"Internship",value:"internship"}],Z=[{label:"Yes",value:"1"},{label:"No",value:"0"}];function z(e){const t=Object(D.g)(e.badges);if(!t.length)return null;return u.a.createElement("div",{className:"jobs-profile-form-badges"},u.a.createElement("h4",{className:"jobs-profile-form-heading"},"HackerRank Badges"),u.a.createElement("p",{className:"hacker-skills-description"},"Include and showcase your Gold and Silver HackerRank Badges as part of your application."),u.a.createElement(G,{name:"badges",badges:t,onChange:function(e,t,a){const i={eventCategory:"HRC Jobs",eventLabel:a?"BadgeSelect":"BadgeDeselect",eventAction:"Click",eventAttrs:{badge_id:t.value}};window&&"function"==typeof window.jsTrackGoogleAnalytics&&window.jsTrackGoogleAnalytics(i)}}))}class $ extends m.Component{constructor(){var e;super(...arguments),e=this,d()(this,"state",{resumeOrLinkedInNotUploaded:void 0,loading:!1}),d()(this,"unsavedValues",{}),d()(this,"metrics",{attribute4:"JobsProfile"}),d()(this,"getFieldMetrics",e=>{const t=this.props.metrics;return{"data-analytics":e,"data-attr4":"JobsProfile","data-attr5":t?t.attribute5:void 0}}),d()(this,"sendOnchangeMetrics",(e,t)=>{(0,this.props.sendMetrics)("Click",e,s()({},t,this.metrics))}),d()(this,"getErrorToast",e=>new j.a({type:"error_strong",placement:"topRight",message:e,icon:"ui-icon-cross",duration:4,closable:!0})),d()(this,"getSuccessToast",e=>new j.a({type:"success_strong",placement:"topRight",message:e,icon:"ui-icon-check-circle",duration:3,closable:!0})),d()(this,"handleOnBlur",(e,t,a)=>{const i=this.props,o=i.sendMetrics,r=i.profile;e.target.value!==r[t]&&o("Click","Personal",s()({attribute2:t},this.metrics)),a(e)}),d()(this,"handleAfterSubmit",n()((function*(){const t=e.props.afterSubmit;if(t)try{yield t(),e.getSuccessToast("Details submitted successfully").show()}catch(t){e.getErrorToast("Something went wrong, please contact us").show()}else e.getSuccessToast("Profile updated successfully").show()}))),d()(this,"submit",(e,t)=>{const a=this.props,i=a.profileActions,o=a.onSubmit,r=void 0===o?v.a:o,n=a.sendMetrics,l=a.isCareerFairForm,c=a.isSkillsVerificationTest,d=this.checkPhoneChanged(e),m=new Promise((t,a)=>{i.updateProfile("me",this.mapProfileValues(e)).then(()=>{if(d){const o=this.mapPhoneValues(e);return o.unverified_country_code&&o.unverified_number?void i.updatePhone(o).then(e=>{var i;const o=e.errors,r=null==o||null===(i=o.number)||void 0===i?void 0:i[0];r?a({phoneNumber:r}):t(e)},a):void a("Phone data is incorrect")}t()},a)});n("Click","SaveUpdateProfileButton",s()({},this.metrics)),m.then(()=>{t.setSubmitting(!1),n("Click","UpdateProfile",s()({},this.metrics)),e.isProfessionalOption.value||!l&&!c||this.submitHackerSchoolDetails(e,t),l&&!e.isProfessionalOption.value||r(e),this.handleAfterSubmit()}).catch(e=>{t.setSubmitting(!1),e.phoneNumber?t.setErrors({phoneNumber:e.phoneNumber}):this.getErrorToast("Something went wrong, please contact us").show()})}),d()(this,"submitHackerSchoolDetails",(e,t)=>{let a=t.setFieldValue;const i=this.props,o=i.profileActions,r=i.onSubmit,n=void 0===r?v.a:r,l=i.isCareerFairForm,c=e.schoolNameOption,d=Object(J.h)(e),m=d.attributes,u=m.degree,p=void 0===u?"":u,h=m.program,f=void 0===h?"":h;Object(U.p)(s()({},d,{attributes:s()({},d.attributes,{degree:p,program:f}),profileActions:o,type:"hacker_schools",hackerEntityId:null==c?void 0:c.hackerEntityId})).then(e=>{var t;const i=e.data,o=i.id,r=i.attributes;if(a("schoolNameOption",s()({},c,{hackerEntityId:o,id:null==r||null===(t=r.school)||void 0===t?void 0:t.unique_id})),l){const e={schoolNameOption:s()({},c,{hackerEntityId:o})};n(e)}})}),d()(this,"mapProfileValues",e=>{const t=e.fname,a=e.lname,i=e.countryOption,o=e.graduationYearOption,r=e.graduationMonthOption,n=e.isProfessionalOption,l=e.workStartYearOption,c=e.selectedStateOption,d=e.usWork,m=e.ukWork,u=e.skills,p=e.linkedin_url,h=e.jobsHeadline,f=e.jobAvailabilityType,b=e.vcfProfileVisibility,g=this.props,v=g.profile.linkedin_url,y=g.isCareerFairForm;let E=null;c&&c.code&&(E=c.code);const O=n.value,k=u&&u.length?Object(D.x)(u).join(","):void 0,w=i.label,N="highschool"===o.value,_="United States"===w?E:null,S=y?Object(K.d)(e):{};return s()({personal_first_name:t,personal_last_name:a,country:w,state_code:_,is_professional:O,work_start_year:O?l.value:null,graduation_year:N||"N/A"===(null==o?void 0:o.value)?null:o.value,graduation_month:"N/A"===r.value?null:r.value,us_work_eligibility:Object(D.y)(d),uk_work_eligibility:Object(D.y)(m),jobs_top_skills:k,linkedin_url:p||v,is_high_school_student:N,jobs_headline:h,job_availability_type:f,vcf_profile_visibility:b},S)}),d()(this,"mapPhoneValues",e=>{var t;return{unverified_number:e.phoneNumber,unverified_country_code:null===(t=e.phoneCodeOption)||void 0===t?void 0:t.value}}),d()(this,"validate",e=>{const t=e.skills,a=e.linkedin_url,i=this.props,o=i.validate,r=i.profile.resume_url,n=i.job,l=i.isSkillsVerificationTest,c=i.isCareerFairForm,d={};!(n||c)||r||a?this.setState({resumeOrLinkedInNotUploaded:!1}):(this.setState({resumeOrLinkedInNotUploaded:!0}),d.commonError=!0),!t||t.length||l||c||(d.skills="Required",d.commonError=!0);const m=o?o(e):{};return s()({},d,m)}),d()(this,"clearResumeLinkedErrorState",()=>{this.setState({resumeOrLinkedInNotUploaded:!1})}),d()(this,"resumeUploading",e=>{let t=e.loading;this.setState({loading:t})}),d()(this,"handleSchoolNameChange",(e,t)=>{var a;const i=e.setFieldValue;if(!t)return i("programOption",null),void i("degreeOption",null);const o=((null===(a=this.props.profile.additional)||void 0===a?void 0:a.hacker_schools)||{})[t.hackerEntityId]||{},r=o.program,n=o.degree;if(r||n){const e=Object(U.i)(),t=Object(U.b)(),a=Object(_.a)(e,r),o=Object(_.a)(t,n);i("programOption",a),i("degreeOption",o)}else i("programOption",null),i("degreeOption",null)}),d()(this,"renderLinkedInResume",()=>{const e=this.props,t=e.profile,a=e.profileActions,i=this.state.resumeOrLinkedInNotUploaded;return u.a.createElement("div",null,u.a.createElement("div",{className:"linkedin-resume"},u.a.createElement("div",{className:"linkedin-col"},u.a.createElement(H.a,{type:"linkedin",edit:!0,clickConnect:!1,profile:t,profileActions:a,onSuccess:this.clearResumeLinkedErrorState,error:i,metrics:this.getCombinedMetrics(),fieldMetrics:this.getFieldMetrics("Personal")})),u.a.createElement("div",{className:"resume-col"},u.a.createElement("div",{className:"or-separator-wrapper"},u.a.createElement(R.a,null)),u.a.createElement(x.a,{onSuccess:this.clearResumeLinkedErrorState,onChange:this.resumeUploading,metrics:this.getCombinedMetrics()}))),i&&u.a.createElement("div",{className:"linkedin-resume-error"},"Please connect linkedin or upload resume"))})}componentDidMount(){const e=this.props.appUtil;null==e||e.isEmailVerificationRequired()}getCombinedMetrics(){const e=this.props.metrics;return s()({},this.metrics,e)}renderButtonText(){const e=this.props,t=e.initialValues,a=e.applicationData,i=e.cta,o=a&&a.unique_id;return t?o?"Update Details":"Apply":i||"Update Profile"}checkPhoneChanged(e){var t;const a=this.props.profile.phone||{},i=a.unverified_number||a.number,o=a.unverified_country_code||a.country_code;return i!==e.phoneNumber||o!==(null===(t=e.phoneCodeOption)||void 0===t?void 0:t.value)}sendGtm(e){window&&"function"==typeof window.jsTrackGoogleAnalytics&&window.jsTrackGoogleAnalytics(e)}requiredValidation(e){return Object(_.d)([{test:N.a.required,message:"Required"}])(e)}requiredValidationOption(e){return Object(_.d)([{test:N.a.requiredOption,message:"Required"}])(e)}getHackerAdditionalData(){const e=this.props,t=e.profile.additional,a=e.hackerVcfSchoolId,i=t.hacker_schools||{},o=i[a],r=Object.keys(i),n=r[r.length-1],l=o||i[n];return s()({},l,{id:a||n})}getInitialValues(){const e=this.props,t=e.profile,a=t.personal_first_name,i=t.personal_last_name,o=t.country,r=t.is_professional,n=t.graduation_year,l=t.graduation_month,c=t.work_start_year,d=t.jobs_top_skills,m=t.us_work_eligibility,u=t.uk_work_eligibility,p=t.linkedin_url,h=t.resume_url,f=t.is_high_school_student,g=t.jobs_headline,v=t.state,y=t.phone,E=t.badges,O=t.job_availability_type,k=t.vcf_profile_visibility,w=e.applicationData,N=e.initialValues,S=e.countries,j=e.states,P=e.profile,C=w&&w.unique_id,V=N?N():{},q={label:"",value:"N/A"};let F=V.selectedStateOption;if(!F){const e=(j.find(e=>{let t=e.label;return(v||"").toUpperCase()===t.toUpperCase()})||{}).code;F=e?Object(_.a)(j,e,"code"):s()({},q)}const A=Object(D.g)(E),T=C?V.badges:A.map(e=>e.badge_type),M=Object(I.c)(S,o)||{},B=!b()(r),R=Object(D.n)(),L=Object(D.k)(),H=Object(D.s)(),x=(d&&""!==d?d.split(","):[]).map(e=>({label:e,value:e})),Y=f?"highschool":Number(n),G=(null==y?void 0:y.unverified_number)||(null==y?void 0:y.number),W=(null==y?void 0:y.unverified_country_code)||(null==y?void 0:y.country_code),Q=this.getHackerAdditionalData(),X=Object(J.g)(Q),Z=X.schoolNameOption,z=X.programOption,$=X.degreeOption,ee=Object(K.c)(P),te=ee.ethnicity,ae=ee.gender;return s()({fname:a,lname:i,countryOption:M,isProfessionalOption:B?Object(_.a)(R,!!r):s()({},q),graduationYearOption:B?Object(_.a)(L,Y):s()({},q),graduationMonthOption:b()(r)?s()({},q):Object(_.a)(Object(U.f)(),Number(l)),workStartYearOption:B?Object(_.a)(H,c):s()({},q),usWork:Object(D.y)(m),ukWork:Object(D.y)(u),linkedin_url:p,resume_url:h,skills:x,jobsHeadline:g,jobAvailabilityType:O||[],phoneNumber:G,phoneCodeOption:{label:W,value:W},schoolNameOption:Z,programOption:z,degreeOption:$,ethnicity:te,gender:ae,vcfProfileVisibility:k||0},V,{badges:T,selectedStateOption:F})}renderPersonalSection(e,t,a,i,o,r){var n;const l=this.props,s=l.profile.phone,c=l.isSkillsVerificationTest,d=l.isCareerFairForm;return u.a.createElement("fieldset",null,u.a.createElement("legend",{className:"jobs-profile-form-heading"},"Personal"),u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col"},u.a.createElement(P.a,{component:C.a,label:"First Name",name:"fname",required:!0,validate:this.requiredValidation,onBlur:e=>this.handleOnBlur(e,"personal_first_name",o)})),u.a.createElement("div",{className:"form-col"},u.a.createElement(P.a,{component:C.a,name:"lname",label:"Last name",required:!0,validate:this.requiredValidation,onBlur:e=>this.handleOnBlur(e,"personal_last_name",o)}))),c&&u.a.createElement(Q,{"data-automation":"warning-name"},"The above mentioned name will be displayed on your certificate and cannot be changed later."),u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col "},u.a.createElement(P.a,{component:V.e,components:{Option:S.a},analyticsAttrs:{Option:{"data-click-event-enabled":!0,"data-event-category":"HRC Profile","data-event-label":"CountrySelect",attributeForLabel:"data-cd-country-id"}},name:"countryOption",label:"Country of Residence",required:!0,options:t,validate:this.requiredValidationOption,wrapperProps:{"data-event-category":"HRC Profile","data-event-label":"CountryDropDown","data-click-event-enabled":!0},onChange:e=>{this.sendOnchangeMetrics("Personal",{attribute2:"country",attribute3:e.value})},id:"job-form-country"}),d&&u.a.createElement(Q,{"data-automation":"warning-country",className:"form-field-warning-country"},"This fair is only available in the United States")),i&&u.a.createElement("div",{className:"form-col "},u.a.createElement(P.a,{component:V.e,name:"selectedStateOption",label:"State",required:!0,options:a,validate:this.requiredValidationOption,onChange:()=>this.sendOnchangeMetrics("Personal",{attribute2:"state"})}))),u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col form-col-phone"},u.a.createElement(L.a,{countryOption:e.countryOption,phone:s,onBlur:e=>this.handleOnBlur(e,"phone",o),verificationRequired:!1,setFieldValue:r,phoneCode:null===(n=e.phoneCodeOption)||void 0===n?void 0:n.value}))))}renderSchoolSection(e,t,a,i){const o=this.props,r=o.isSkillsVerificationTest,n=o.isCareerFairForm,l=o.profile,c=Object(U.d)("hacker_schools",l.additional);return r||n?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col"},u.a.createElement(J.a,{defaultOptions:c,autoFocus:!1,formikBag:e,onChange:this.handleSchoolNameChange.bind(null,e),id:"job-form-school"}))),u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col"},a),u.a.createElement("div",{className:"form-col"},!i&&u.a.createElement(P.a,{component:V.e,components:{Option:S.a},analyticsAttrs:{Option:s()({},t,{"data-event-label":"GraduationMonthSelect",attributeForLabel:"data-cd-experience-months"})},isSearchable:!1,label:"Expected month of Graduation",name:"graduationMonthOption",options:Object(U.f)(),required:!0,validate:this.requiredValidationOption,wrapperProps:s()({},t,{"data-event-label":"GraduationMonthDropDown"}),onChange:e=>{this.sendOnchangeMetrics("Professional",{attribute2:"graduation_month",attribute7:e.value})}}))),u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col"},u.a.createElement(J.b,{required:!1,formikBag:e,id:"job-form-school-degree"})),u.a.createElement("div",{className:"form-col"},u.a.createElement(J.e,{required:!1,formikBag:e,id:"job-form-school-program"})))):null}renderProfessionalSection(e,t,a,i){const r=this.props,n=r.job,l=r.isSkillsVerificationTest,c=r.isCareerFairForm,d=i.values,m=i.handleBlur,p=void 0===m?v.a:m,h=d.isProfessionalOption.value,f="highschool"===d.graduationYearOption.value,b=c&&O()(d,D.b),g={"data-click-event-enabled":!0,"data-event-category":"HRC Profile"},y=s()({},g,{"data-event-label":"ProfessionDropDown"}),E=s()({},g,{"data-event-label":h?"StudentSelect":"ProfessionSelect"}),k=s()({},g,{"data-event-label":h?"WorkExperienceDropDown":"GraduationYearDropDown"}),w=s()({},g,{"data-event-label":h?"WorkExperienceSelect":"GraduationYearSelect",attributeForLabel:"data-cd-experience-years"}),_=u.a.createElement(P.a,o()({component:V.e,components:{Option:S.a},analyticsAttrs:{Option:w},hidden:!N.a.requiredOption(d.isProfessional),isSearchable:!1},e,{required:!0,validate:this.requiredValidationOption,wrapperProps:k,onChange:e=>{this.sendOnchangeMetrics("Professional",{attribute2:"graduation_year",attribute7:e.value})}}));return u.a.createElement("fieldset",null,u.a.createElement("legend",{className:"jobs-profile-form-heading"},"Professional"),u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col "},u.a.createElement(P.a,{label:"I am currently a",component:V.e,components:{Option:S.a},analyticsAttrs:{Option:E},name:"isProfessionalOption",isSearchable:!1,options:t,required:!0,validate:this.requiredValidationOption,wrapperProps:y,onChange:e=>{this.sendOnchangeMetrics("Professional",{attribute2:"is_professional",attribute3:e.value})}})),N.a.requiredOption(d.isProfessionalOption)&&h&&u.a.createElement("div",{className:"form-col"},_)),b&&u.a.createElement(Q,{"data-automation":"warning-professional"},"This fair is only available to students and early career professionals."),h?u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col"},u.a.createElement(P.a,{label:"Headline",component:C.a,name:"jobsHeadline",required:!0,validate:this.requiredValidationOption,placeholder:"Example: Software Engineer at Google",onBlur:e=>this.handleOnBlur(e,"jobs_headline",p),maxLength:80}))):this.renderSchoolSection(i,g,_,f),c&&u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col"},u.a.createElement(P.a,{label:"What type of role you are interested in?",component:q.a,name:"jobAvailabilityType",list:X,theme:"theme-m",className:"form-field-interested-in",required:!0,validate:this.requiredValidation,onBlur:e=>this.handleOnBlur(e,"jobAvailabilityType",p)}))),u.a.createElement("div",{className:"linkedin-resume-wrapper"},u.a.createElement(P.a,{label:"LinkedIn / Resume",component:this.renderLinkedInResume,wrapperClassName:"linkedin-labeled-input",alignment:"column",required:!!n||c,validate:(!!n||c)&&this.requiredValidation})),!l&&!c&&u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"form-col"},u.a.createElement(P.a,{component:V.e,name:"skills",label:"Add your skills",required:!0,isMulti:!0,options:a,placeholder:"Eg: C++, Python",validate:this.requiredValidationOption,onChange:e=>this.sendOnchangeMetrics("Professional",{attribute2:"jobs_top_skills",attribute5:Array.from(e,e=>e.value)})}))))}renderVisaQuestion(e){let t="";"us"===e?t="United States":"uk"===e&&(t="United Kingdom");const a=e+"Work";return u.a.createElement("div",{className:"form-row"},u.a.createElement("div",{className:"radio-input-wrapper form-col"},u.a.createElement(P.a,o()({label:`Are you legally authorized to work in the ${t} ?`,component:F.a,name:a,alignment:"column",list:[{label:"Yes",value:"true"},{label:"No",value:"false"}],required:!0,validate:this.requiredValidation},this.getFieldMetrics("WorkAuth"),{onChange:e=>this.sendOnchangeMetrics("WorkAuth",{attribute2:a,attribute3:"true"===e?"selected":"deselected"})}))))}renderVisaSection(e,t){return e||t?u.a.createElement("fieldset",null,u.a.createElement("legend",{className:"jobs-profile-form-heading"},"Work Authorization"),e&&this.renderVisaQuestion("us"),t&&this.renderVisaQuestion("uk")):null}renderProfileShareSection(e){if(!this.props.isCareerFairForm)return;const t=e.values.vcfProfileVisibility.toString();return u.a.createElement("fieldset",{"data-automation":"hacker-vcf-data-field"},u.a.createElement("legend",{className:"jobs-profile-form-heading"},"Data Sharing"),u.a.createElement("p",{className:"jobs-profile-form-text"},"By default, your profile will only be shared with the companies that you have selected in the HackerRank Virtual Career Fair. If you would like to share your information with all companies exhibiting in the fair, you can do so by opting in below. Please note that if you do opt-in, any company in the fair will be able to reach out to you about job opportunities."),u.a.createElement("div",{className:"form-row form-row-custom-label"},u.a.createElement("div",{className:"radio-input-wrapper form-col form-col-full-width"},u.a.createElement(P.a,{label:"I would like to share my profile with all companies participating in the fair, not just\n              the ones I have selected.",component:F.a,name:"vcfProfileVisibility",alignment:"column",list:Z,theme:"theme-m",required:!0,validate:this.requiredValidation,value:t,onChange:t=>{e.setFieldValue("vcfProfileVisibility",t)}}))))}renderDemographicSection(e){if(this.props.isCareerFairForm)return u.a.createElement("fieldset",{"data-automation":"hacker-demographic-fields"},u.a.createElement("legend",{className:"jobs-profile-form-heading"},"Demographic Information (Optional)"),u.a.createElement("p",{className:"jobs-profile-form-text"},"The information you provide here is optional and will only be used in anonymous aggregation to improve Diversity & Inclusion in hiring."),u.a.createElement("div",{className:"form-row form-row-custom-label"},u.a.createElement("label",{htmlFor:"hacker-ethnicity",className:"label-text form-col form-col-fit-width"},"Please select the ethnicity or ethnicities with which you identify."),u.a.createElement("div",{className:"form-col"},u.a.createElement(K.a,{formikBag:e,id:"hacker-ethnicity",label:void 0}))),u.a.createElement("div",{className:"form-row form-row-custom-label"},u.a.createElement("label",{htmlFor:"hacker-gender",className:"label-text form-col form-col-fit-width"},"Please select the gender with which you identify. If not in the list, please type and hit Enter/Tab to add."),u.a.createElement("div",{className:"form-col"},u.a.createElement(K.b,{formikBag:e,id:"hacker-gender",label:void 0}))))}render(){const e=this.props,t=e.states,a=e.countries,i=e.currentCompany,r=e.profile,n=e.commonMessage,l=e.isSubmitDisabled,s=e.showUSVisaQuestions,c=e.showUKVisaQuestions,d=e.isSkillsVerificationTest,p=e.isCareerFairForm,h=this.state.loading,f=this.getInitialValues(),b=Object(D.n)(),g=Object(D.q)(),E=p?a.filter(e=>"US"===e.code):a,O=r.confirmed,k=r.badges,w=!O||i&&l||h,N={"data-event-category":p?"HRC CareerFair":null,"data-event-label":"SaveUpdateProfile"};return u.a.createElement(m.Fragment,null,u.a.createElement(y.d,{initialValues:f,validate:this.validate,onSubmit:this.submit},e=>{const a=e.values,i=e.errors,r=e.handleBlur,l=void 0===r?v.a:r,m=e.setFieldValue,h=void 0===m?v.a:m,O=a.isProfessionalOption.value,_=Object(D.p)(O),S=a.countryOption&&a.countryOption.code===D.a.US,j="badges"in f&&!d&&!p,P=a.jobCountryCode===D.a.US||s,C=a.jobCountryCode===D.a.UK||c,V=i.notEligible&&i.errorMessage&&2===Object.keys(i).length,q=Object.keys(i).length>0&&!i.notEligible||i.commonError,F=i.errorMessage;return u.a.createElement(y.c,{className:"jobs-profile-form",autoComplete:"off",noValidate:!0},j&&u.a.createElement(z,{badges:k}),this.renderPersonalSection(a,E,t,S,l,h),this.renderProfessionalSection(_,b,g,e),this.renderVisaSection(!!P,!!C),this.renderDemographicSection(e),this.renderProfileShareSection(e),u.a.createElement("div",{className:"display-error"},q&&"Please fill all the required fields",!q&&V&&F),n&&u.a.createElement("p",{className:"common-message"},n),u.a.createElement(A.b,o()({className:"ui-btn-primary",disabled:w},N),this.renderButtonText()))}))}}d()($,"defaultProps",{showUSVisaQuestions:!1,showUKVisaQuestions:!1});const ee=e=>({profile:e.community.profile,countries:Object(B.a)(e),states:Object(B.b)(D.a.US)(e)}),te=e=>({profileActions:Object(p.b)(W.a,e)});t.default=Object(p.d)(M.a,Object(h.c)(ee,te),U.q)($)},EbYE:function(e,t,a){}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_career_fair~hackerrank_r_jobs~hackerrank_r_skills_verification_test-b83ff808.js.map