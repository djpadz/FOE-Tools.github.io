(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{375:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(376),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(47),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(49),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(27),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(22),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__),vue_invisible_recaptcha__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(387),_scripts_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3),i18nPrefix="routes.survey.";__webpack_exports__.a={head:function(){return this.$store.commit("SET_HERO",{title:i18nPrefix+"hero.title",subtitle:i18nPrefix+"hero.subtitle"}),{title:this.$t(i18nPrefix+"title")}},beforeRouteEnter:function(e,t,r){r((function(e){e.$store.state.survey&&0!==e.$store.state.survey.length||e.$router.push({name:"index"})}))},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","survey"),this.$store.commit("RESTORE_HERO"),{i18nPrefix:i18nPrefix,result:{},errors:{},loading:!1}},computed:{survey:function(){var e={survey:this.$store.state.survey&&this.$store.state.survey.length?this.$store.state.survey[0].survey.questions:[],result:{}},t=!0,r=!1,n=void 0;try{for(var _,o=e.survey[Symbol.iterator]();!(t=(_=o.next()).done);t=!0){var l=_.value;if(this.$data.errors[l.name]=!1,"checkbox"===l.type)e.result[l.name]=[];else if("matrix"===l.type){e.result[l.name]={};var c=!0,d=!1,f=void 0;try{for(var m,v=l.rows[Symbol.iterator]();!(c=(m=v.next()).done);c=!0){var h=m.value;e.result[l.name][h.value]=null}}catch(e){d=!0,f=e}finally{try{c||null==v.return||v.return()}finally{if(d)throw f}}}else["html"].indexOf(l.type)<0&&(e.result[l.name]=null)}}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}return this.$data.result=e.result,e.survey},sitekey:function(){return"6Le0qqAUAAAAADcXlFuBa9hfCXfdUi53i85sWzSp"}},methods:{getSurveyLocal:function(e){return this.$store.state.locale in e?e[this.$store.state.locale]:e.default},getConstraint:function(e,t){return e.validators.filter((function(e){return t in e})).map((function(e){return e[t]}))[0]},checkCondition:function checkCondition(question){var _this=this,r;if(!question.visibleIf)return!0;var simpleExpression=/{(\w+)}\s*=\s*('?\w+'?)/,containsExpression=/{(\w+)}\s*contains\s*"?'?(\w+)'?"?/,customExpression=/\{([^{]+)\}/g;return simpleExpression.test(question.visibleIf)?(r=simpleExpression.exec(question.visibleIf),eval("".concat(this.$data.result[r[1]],"===").concat(r[2]))):containsExpression.test(question.visibleIf)?(r=containsExpression.exec(question.visibleIf),this.$data.result[r[1]]&&this.$data.result[r[1]].indexOf(r[2])>=0):eval(question.visibleIf.replace(customExpression,(function(e,text){return _this.$data.result[text]?"'".concat(_this.$data.result[text].replace(/\n/gm,""),"'"):"''"})))},callback:function(e){var t=this;this.$axios.post("https://ns382954.ip-5-196-72.eu/surveyresponses",{response:{response:this.$data.result,survey:this.$store.state.survey[0].id},captcha:e}).then((function(){t.$data.loading=!1,t.complete({message:t.$t(i18nPrefix+"survey_complete"),type:"is-success",indefinite:!0})})).catch((function(e){t.$data.loading=!1,400===e.response.status?t.$buefy.notification.open({message:t.$t(i18nPrefix+"error"),type:"is-danger",indefinite:!0}):t.$buefy.notification.open({message:t.$t(i18nPrefix+"unknown_error"),type:"is-danger",indefinite:!0}),console.error("error: ",e)}))},prepare:function(){var e=this,t=this.$refs.formSurvey.reportValidity();if(!t)return!1;var r=!0,n=!1,_=void 0;try{for(var o,l=this.survey[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var c=o.value;this.$data.errors[c.name]=!1}}catch(e){n=!0,_=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw _}}var d=function(r){var n=e.survey.find((function(e){return e.name===r}));if(e.$data.result[r]instanceof Array&&n.isRequired&&e.checkCondition(n)&&0===e.$data.result[r].length||e.survey.find((function(e){return e.name===r})).isRequired&&e.checkCondition(n)&&null===e.$data.result[r])e.$data.errors[r]=!0,t=!1;else if("object"===Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.a)(e.$data.result[r])&&n.isRequired&&e.checkCondition(n))for(var _ in e.$data.result[r])if(null===e.$data.result[r][_]){e.$data.errors[r]=!0,t=!1;break}};for(var f in this.$data.result)d(f);return this.$forceUpdate(),!!t&&(this.$data.loading=!0,!0)},getErrorMessage:function(e){return e.isRequired&&this.$data.errors[e.name]?this.$t(i18nPrefix+"required_field"):""},complete:function(e){var t=this.$cookies.get("survey");t||(t=[]),t.push(this.$store.state.survey[0].id),this.$cookies.set("survey",t,{path:"/",expires:_scripts_utils__WEBPACK_IMPORTED_MODULE_8__.a.getDefaultCookieExpireTime()}),this.$buefy.notification.open(e),this.$router.push("/"),this.$store.dispatch("nuxtServerInit")}},components:{InvisibleRecaptcha:vue_invisible_recaptcha__WEBPACK_IMPORTED_MODULE_7__.a}}},376:function(e,t,r){"use strict";var n=r(19),_=r(377)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),n(n.P+n.F*o,"Array",{find:function(e){return _(this,e,arguments.length>1?arguments[1]:void 0)}}),r(105)("find")},377:function(e,t,r){var n=r(48),_=r(106),o=r(61),l=r(41),c=r(378);e.exports=function(e,t){var r=1==e,d=2==e,f=3==e,m=4==e,v=6==e,h=5==e||v,y=t||c;return function(t,c,E){for(var k,x,P=o(t),$=_(P),O=n(c,E,3),M=l($.length),C=0,w=r?y(t,M):d?y(t,0):void 0;M>C;C++)if((h||C in $)&&(x=O(k=$[C],C,P),e))if(r)w[C]=x;else if(x)switch(e){case 3:return!0;case 5:return k;case 6:return C;case 2:w.push(k)}else if(m)return!1;return v?-1:f||m?m:w}}},378:function(e,t,r){var n=r(379);e.exports=function(e,t){return new(n(e))(t)}},379:function(e,t,r){var n=r(28),_=r(283),o=r(12)("species");e.exports=function(e){var t;return _(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!_(t.prototype)||(t=void 0),n(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},387:function(e,t,r){"use strict";r(104);var n={props:{sitekey:{type:String,required:!0},badge:{type:String,required:!1,default:"bottomright"},theme:{type:String,required:!1,default:"dark"},validate:{type:Function,required:!1},callback:{type:Function,required:!0},disabled:{type:Boolean,required:!1,default:!1},id:{type:String,required:!1},reference:{type:String,required:!1},type:{type:String,required:!1,default:"submit"}},data:function(){return{widgetId:!1,loaded:!1}},methods:{render:function(){var e=this;this.widgetId=grecaptcha.render(this.recaptchaId,{sitekey:this.sitekey,size:"invisible",badge:this.badge,theme:this.theme,callback:function(t){e.callback(t),grecaptcha.reset(e.widgetId)}}),this.loaded=!0},renderWait:function(){var e=this;setTimeout((function(){"undefined"!=typeof grecaptcha&&grecaptcha.render?e.render():e.renderWait()}),200)},click:function(){(!this.validate||this.validate&&!1!==this.validate())&&grecaptcha.execute()}},computed:{computedClass:function(){var e=this.class?this.class.split(" "):[];return this.value&&e.push("invisible-recaptcha"),e},recaptchaId:function(){return"vue-invisible-recaptcha-"+this._uid}},mounted:function(){if("undefined"==typeof grecaptcha){var script=document.createElement("script");script.src="https://www.google.com/recaptcha/api.js?render=explicit",script.onload=this.renderWait,document.head.appendChild(script)}else this.render()}},_=r(13),component=Object(_.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{ref:e.reference,class:e.computedClass,attrs:{id:e.id,type:e.type,disabled:!e.loaded||e.disabled},on:{click:function(t){return t.preventDefault(),e.click(t)}}},[r("div",{attrs:{id:e.recaptchaId,"data-size":"invisible"}}),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},422:function(e,t,r){"use strict";r.r(t);var n=r(375).a,_=r(13),component=Object(_.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"surveyContainer"}},[r("b-loading",{attrs:{"is-full-page":!1,active:e.loading},on:{"update:active":function(t){e.loading=t}}}),r("form",{ref:"formSurvey"},[e._l(e.survey,(function(t,n){return r("section",{staticClass:"margin-top-two-em"},["html"===t.type?r("div",{domProps:{innerHTML:e._s(e.getSurveyLocal(t.html))}}):"radiogroup"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:e.errors[t.name]?"is-danger":"",message:e.getErrorMessage(t)}}),e._l(t.choices,(function(n,_){return r("b-field",{key:t.name+"__"+n.value},[r("b-radio",{attrs:{"native-value":n.value,disabled:e.loading},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}},[e._v(e._s(e.getSurveyLocal(n.text)))])],1)}))]:"checkbox"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}}),e._l(t.choices,(function(n,_){return r("b-field",{key:t.name+"__"+n.value},[r("b-checkbox",{attrs:{"native-value":n.value,disabled:e.loading},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}},[e._v(e._s(e.getSurveyLocal(n.text)))])],1)}))]:"comment"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{"label-for":t.name,label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}},[r("b-input",{attrs:{id:t.name,type:"textarea",required:t.isRequired&&e.checkCondition(t),disabled:e.loading,maxlength:e.getConstraint(t,"maxLength")},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}})],1)]:"dropdown"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{"label-for":t.name,label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}},[r("b-select",{attrs:{id:t.name,required:t.isRequired&&e.checkCondition(t),disabled:e.loading,expanded:""},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}},e._l(t.choices,(function(n,_){return r("option",{key:t.name+"__"+n,attrs:{"native-value":n},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}},[e._v(e._s(n))])})),0)],1)]:"text"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{"label-for":t.name,label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}},[r("b-input",{attrs:{type:t.inputType?t.inputType:"text",required:t.isRequired&&e.checkCondition(t),disabled:e.loading},model:{value:e.result[t.name],callback:function(r){e.$set(e.result,t.name,r)},expression:"result[question.name]"}})],1)]:"matrix"===t.type&&e.checkCondition(t)?[r("b-field",{attrs:{label:e.getSurveyLocal(t.title)+(t.isRequired?" *":""),type:{"is-danger":e.errors[t.name]},message:e.getErrorMessage(t)}}),r("div",{staticClass:"table-wrapper"},[r("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[r("thead",[r("tr",[r("th"),e._l(t.columns,(function(n,_){return r("th",{key:t.name+"__"+n.value},[e._v(e._s(e.getSurveyLocal(n.text)))])}))],2)]),r("tbody",e._l(t.rows,(function(n,_){return r("tr",{key:t.name+"__"+n.value},[r("td",[r("p",[e._v(e._s(e.getSurveyLocal(n.text)))])]),e._l(t.columns,(function(_,o){return r("td",{key:t.name+"__"+n.value+"__"+_.value,staticClass:"has-text-centered"},[r("b-radio",{attrs:{"native-value":_.value,disabled:e.loading},model:{value:e.result[t.name][n.value],callback:function(r){e.$set(e.result[t.name],n.value,r)},expression:"result[question.name][row.value]"}})],1)}))],2)})),0)])])]:e._e()],2)})),r("hr"),r("div",{staticClass:"has-text-centered"},[r("invisible-recaptcha",{staticClass:"button is-info",attrs:{sitekey:e.sitekey,validate:e.prepare,callback:e.callback,type:"button",id:"submitSurvey",disabled:e.loading}},[e._v(e._s(e.$t("utils.Submit")))])],1)],2)],1)}),[],!1,null,null,null);t.default=component.exports}}]);