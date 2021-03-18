(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1RgH":function(e,t,a){"use strict";a.d(t,"h",(function(){return g})),a.d(t,"g",(function(){return b})),a.d(t,"a",(function(){return O})),a.d(t,"f",(function(){return v})),a.d(t,"e",(function(){return E})),a.d(t,"b",(function(){return y})),a.d(t,"d",(function(){return k})),a.d(t,"c",(function(){return N}));a("rGqo");var n=a("pVnL"),r=a.n(n),o=a("QILm"),i=a.n(o),l=a("cDcd"),c=a.n(l),s=a("qbr2"),d=a("V6Zm"),u=a("NXto"),m=a("aHjf"),p=a("gokM"),h=a("+TT7"),f=a("bh43");function g(e){const t=e.schoolNameOption,a=e.programOption,n=e.degreeOption,r=e.fromMonthOption,o=e.fromYearOption,i=e.toMonthOption,l=e.toYearOption,c=e.current,s=e.description,d=e.websiteUrl,u=t||{},m=u.value,p=u.id,h=(a||{}).value,f=(n||{}).value,g=(r||{}).value,b=(o||{}).value,O=(i||{}).value,v=(l||{}).value;return{entity:"schools",entityIdKey:"school_id",entityId:p,website:d,attributes:{name:m,program:h,degree:f,start_month:g,start_year:b,end_month:c?null:O,end_year:c?null:v,current:c,description:s}}}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e.program,a=e.degree,n=e.start_month,r=e.start_year,o=e.end_month,i=e.end_year,l=e.description,c=e.current,d=e.school,u=e.id,m=d||{},p=m.name,h=m.unique_id;return{schoolNameOption:p?{label:p,value:p,id:h,hackerEntityId:u}:null,degreeOption:a?{label:a,value:a}:null,programOption:t?{label:t,value:t}:null,fromMonthOption:Object(s.a)(Object(f.f)(),n),toMonthOption:Object(s.a)(Object(f.f)(),o),fromYearOption:Object(s.a)(Object(f.j)(),r),toYearOption:Object(s.a)(Object(f.j)(),i),current:!!c,description:l||"",websiteUrl:""}}function O(e){e.formikBag;let t=i()(e,["formikBag"]);const a=new f.a("school");return c.a.createElement(u.a,r()({component:m.b,name:"schoolNameOption",label:"School",required:!0,placeholder:"Which School have you studied at ?",loadOptions:a.fetch,formatCreateLabel:e=>`Cannot find ${e}? Would you like to add this school ?`,autoFocus:!0,validate:Object(s.d)([{test:d.a.requiredOption,message:"School is Required"}]),isValidNewOption:s.c,isClearable:!0,noOptionsMessage:()=>"Start typing to view options"},t))}function v(e){let t=e.formikBag,a=i()(e,["formikBag"]);const n=t.values;return n.schoolNameOption&&!n.schoolNameOption.id?c.a.createElement(u.a,r()({component:p.a,name:"websiteUrl",label:"Website",required:!0,validate:Object(s.d)([{test:d.a.required,message:"Website url is Required"}])},a)):null}function E(e){e.formikBag;let t=e.required,a=void 0===t||t,n=i()(e,["formikBag","required"]);const o=Object(f.i)();return c.a.createElement(u.a,r()({component:m.c,name:"programOption",label:"Program",options:o,placeholder:"ex: Computer Science and Engineering",required:a,formatCreateLabel:e=>"Add new Program "+e,validate:a&&Object(s.d)([{test:d.a.requiredOption,message:"Program is Required"}]),isClearable:!0},n))}function y(e){e.formikBag;let t=e.required,a=void 0===t||t,n=i()(e,["formikBag","required"]);const o=Object(f.b)();return c.a.createElement(u.a,r()({component:m.c,name:"degreeOption",label:"Degree",options:o,placeholder:"ex: B.E",required:a,formatCreateLabel:e=>"Add new Degree "+e,validate:a&&Object(s.d)([{test:d.a.requiredOption,message:"Degree is Required"}]),isClearable:!0},n))}function k(e){let t=e.formikBag;const a=t.values,n=t.errors,r=Object(f.f)(),o=Object(f.j)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{name:"current",label:"Currently studying here",className:"current-checkbox"}),c.a.createElement("div",{className:"duration"},c.a.createElement("div",{className:"duration-from"},c.a.createElement("label",{htmlFor:"fromMonth",className:"label-text is-required-field"}," ","Starting From"," "),c.a.createElement("div",{className:"select-group"},c.a.createElement(m.e,{name:"fromMonthOption",options:r,placeholder:"from month",validate:Object(s.d)([{test:d.a.requiredOption,message:"From month is Required"}])}),c.a.createElement(m.e,{name:"fromYearOption",options:o,placeholder:"from year",validate:Object(s.d)([{test:d.a.requiredOption,message:"From year is Required"}])}))),!a.current&&c.a.createElement("div",{className:"duration-to"},c.a.createElement("label",{htmlFor:"toMonth",className:"label-text is-required-field"}," ","Ending in"," "),c.a.createElement("div",{className:"select-group"},c.a.createElement(m.e,{name:"toMonthOption",id:"toMonth",options:r,placeholder:"till month",validate:Object(s.d)([{test:d.a.requiredOption,message:"Till month is Required"}])}),c.a.createElement(m.e,{name:"toYearOption",options:o,placeholder:"till year",validate:Object(s.d)([{test:d.a.requiredOption,message:"Till year is Required"}])}))),n.fromDuration&&c.a.createElement("p",{className:"duration-error"},"From date should not be greater than Current date"),n.duration&&c.a.createElement("p",{className:"duration-error"},"End date should be greater than From date")))}function N(e){e.formikBag;let t=i()(e,["formikBag"]);return c.a.createElement(u.a,r()({component:p.a,type:"textarea",name:"description",label:"Description",rows:5},t))}},EGV1:function(e,t,a){},X6UR:function(e,t,a){"use strict";a.d(t,"c",(function(){return g})),a.d(t,"d",(function(){return b})),a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return v}));a("Oyvg"),a("SRfc"),a("rGqo");var n=a("J4zp"),r=a.n(n),o=a("pVnL"),i=a.n(o),l=a("QILm"),c=a.n(l),s=a("cDcd"),d=a.n(s),u=a("Wwog"),m=a("NXto"),p=a("aHjf"),h=a("mLMl"),f=a("N/tv");a("kpZZ");const g=Object(u.a)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e.ethnicity,a=e.gender,n=t?y(t):[],r=a?E(a):[];return{ethnicity:n,gender:r}})),b=Object(u.a)(e=>{var t,a;return{ethnicity:null===(t=e.ethnicity)||void 0===t?void 0:t.map(e=>e.value),gender:(null===(a=e.gender)||void 0===a?void 0:a.value)||""}});function O(e){let t=e.formikBag,a=c()(e,["formikBag"]);const n=y(f.a);return d.a.createElement(k,i()({name:"ethnicity",label:"Please select the ethnicity or ethnicities with which you identify.",options:n,placeholder:"ex: Hispanic, Latino or Spanish Origin",formikBag:t},a))}function v(e){e.formikBag;let t=c()(e,["formikBag"]);const a=y(f.b);return d.a.createElement(m.a,i()({component:p.c,name:"gender",label:"Please select the gender with which you identify.",options:a,placeholder:"ex: Female",classNamePrefix:"hacker-demographic",formatCreateLabel:e=>"Add "+e,isClearable:!0},t))}const E=e=>({label:e,value:e});function y(e){return 0===e.length?[]:e.map(E)}function k(e){const t=e.formikBag,a=e.name,n=c()(e,["formikBag","name"]),o=Object(s.useState)(""),l=r()(o,2),u=l[0],h=l[1],f=t.values[a];return d.a.createElement(m.a,i()({component:p.e,components:{MenuList:N},isMulti:!0,isClearable:!0,closeMenuOnSelect:!1,inputValue:u,onChange:e=>{t.setFieldValue(a,e)},onInputChange:e=>{h(e)},onKeyDown:e=>{if(!u)return;const n=f?[...f,E(u)]:[E(u)];switch(e.key){case"Enter":case"Tab":h(""),t.setFieldValue(a,n),e.preventDefault()}},placeholder:"Type something and press enter...",value:f,classNamePrefix:"hacker-demographic"},n))}const N=e=>{const t=e.options,a=e.selectProps,n=a.inputValue,r=a.gtmOptionAttrs,o=void 0===r?{}:r,l=c()(e,["options","selectProps"]),s=t.filter(e=>e.label.match(new RegExp(n,"i")));return d.a.createElement("div",{className:"select-with-checkbox-menu"},s.length?s.map(e=>d.a.createElement(h.a,i()({key:e.value,data:e,isChecked:t=>t.value===e.value,gtmOptionAttrs:o[e.value]},l))):null,d.a.createElement("hr",{className:"hr-line-light"}),d.a.createElement("p",{className:"select-with-checkbox-no-option"},"Other (Please type and hit Enter/Tab to add)"))}},b74N:function(e,t,a){"use strict";var n=a("cDcd"),r=a.n(n),o=a("TSYQ"),i=a.n(o);a("EGV1");function l(e){const t=e.title,a=e.className,n=e.version,o=e.backgroundColor,l=e.hideFold,c="v2"===n;return r.a.createElement("div",{className:i()("certificate",c&&"certificate-v2",a)},c&&!l&&r.a.createElement("div",{className:"folded-corner",style:{backgroundColor:o,boxShadow:`3px -3px 0 3px ${o}, -4px 4px 6px rgba(0, 0, 0, 0.25)`}}),r.a.createElement("div",{className:"certificate-container"},r.a.createElement("h2",{className:"certificate-heading"},r.a.createElement("span",{className:"sr-only"},"Certificate: "),t),r.a.createElement("span",{className:"certificate-heading certificate-heading-green","aria-hidden":"true"},r.a.createElement("strong",null,"Verified"))))}l.defaultProps={backgroundColor:"#fff",hideFold:!1},t.a=l},kpZZ:function(e,t,a){}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_career_fair~hackerrank_r_jobs~hackerrank_r_profile_v2~hackerrank_r_skills_verif~52659f53-5cffbdca.js.map