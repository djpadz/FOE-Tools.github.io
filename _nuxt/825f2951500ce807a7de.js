(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{403:function(e,t,o){"use strict";o(50),o(27),o(22),o(18),o(35),o(47);var r=o(23),l=o(615),c=o.n(l),n=o(5),d=function(e,t,o,r,l,c,d,h,m){var f=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,_="compute(age, yourCfBoost, coins, supplies, goods, fpBy24h, secondRq, suppliesGathered, otherRq, cumulativeQuest = 0)",y=t/100,v=Math.floor(o/e.cost.coins),k=Math.floor(r/e.cost.supplies),$={bp:0,medals:0,goods:0,fp:0,dailyUbq:v<k?v:k,bonusUbq:0,secondRqCompleted:0,totalGoods:0,totalFp:0,totalRqCompleted:0,coinSupplyReturn:[],infinityGenerator:!1,defaultCumulativeQuest:0},C=e.cost.coins-e.reward.small_coins*(1+y)/7-e.reward.large_coins*(1+y)/14,R=e.cost.supplies-e.reward.small_supplies*(1+y)/7-e.reward.large_supplies*(1+y)/14;if(C<=0&&R<=0&&($.infinityGenerator=!0,f<=0))return $;if(o<7*e.cost.coins)throw new n.b({type:n.a["<"],value:o,boundValue:7*e.cost.coins,additionalMessage:'for parameter "coins" of '.concat(_)});if(r<7*e.cost.supplies)throw new n.b({type:n.a["<"],value:r,boundValue:7*e.cost.supplies,additionalMessage:'for parameter "supplies" of '.concat(_)});var w,A,x,P,U,E,Q,D=Math.floor((Math.floor(($.dailyUbq+m)*(2/14))*e.reward.small_coins*(1+y)+Math.floor(($.dailyUbq+m)*(1/14))*e.reward.large_coins*(1+y))/e.cost.gather)+Math.floor(h/e.cost.gather),L=d?D:0,G=!0,B=D,M=0;do{G?(G=!1,w=Math.floor(($.dailyUbq+m+L)*(2/14))*e.reward.small_coins*(1+y)+Math.floor(($.dailyUbq+m+L)*(1/14))*e.reward.large_coins*(1+y),A=Math.floor(($.dailyUbq+m+L)*(2/14))*e.reward.small_supplies*(1+y)+Math.floor(($.dailyUbq+m+L)*(1/14))*e.reward.large_supplies*(1+y)):(w=Math.floor(M*(1/14))*e.reward.large_coins*(1+y)+Math.floor(M*(2/14))*e.reward.small_coins*(1+y)+Math.max(0,($.coinSupplyReturn.length?$.coinSupplyReturn[$.coinSupplyReturn.length-1].coin:0)-M*e.cost.coins),A=Math.floor(M*(1/14))*e.reward.large_supplies*(1+y)+Math.floor(M*(2/14))*e.reward.small_supplies*(1+y)+Math.max(0,($.coinSupplyReturn.length?$.coinSupplyReturn[$.coinSupplyReturn.length-1].supply:0)-M*e.cost.supplies)),x=Math.floor(w/e.cost.coins),P=Math.floor(A/e.cost.supplies),U=Math.floor(A/e.cost.gather),M=E=x<P?x:P,Q=d?U+E:E,$.bonusUbq+=Q,(w>0||A>0)&&$.coinSupplyReturn.push({coin:w,supply:A}),B+=U}while(!$.infinityGenerator&&w>e.cost.coins&&A>e.cost.supplies||$.infinityGenerator&&f>$.coinSupplyReturn.length);return $.infinityGenerator||($.defaultCumulativeQuest=0),$.secondRqCompleted=d?B:0,$.totalRqCompleted=$.dailyUbq+$.bonusUbq+m+$.secondRqCompleted,$.bp=Math.floor($.totalRqCompleted*(1/14)*e.reward.blueprint),$.medals=Math.floor($.totalRqCompleted*(1/14))*Math.round(e.reward.medals*(1+y)),$.goods=Math.floor($.totalRqCompleted*(5/14))*Math.round(e.reward.goods*(1+y)),$.fp=Math.floor($.totalRqCompleted*(1/14))*e.reward.fp,$.totalGoods=$.goods+l,$.totalFp=$.fp+c,$},h=o(3),m=o(62);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var _={yourAge:"cfc_ya",yourCfBoost:"cfc_ycfb",coins:"cfc_c",supplies:"cfc_s",goods:"cfc_g",fpBy24h:"cfc_fp",otherRq:"cfc_orq",suppliesGathered:"cfc_sp",secondRq:"cfc_srq",cumulativeQuest:"cfc_cq"},y={yourCfBoost:{comparator:[">=",0]},coins:{comparator:[">=",0]},supplies:{comparator:[">=",0]},goods:{comparator:[">=",0]},fpBy24h:{comparator:[">=",0]},otherRq:{comparator:[">=",0]},suppliesGathered:{comparator:[">=",0]},cumulativeQuest:{comparator:[">=",1]}},v={name:"CfCalculator",head:function(){return this.$store.commit("SET_HERO",{title:"routes.cf_calculator.hero.title",subtitle:"routes.cf_calculator.hero.subtitle"}),{title:this.$t("routes.cf_calculator.title")}},props:{canPermalink:{type:Boolean,default:!1}},data:function(){this.$store.commit("SET_CURRENT_LOCATION","cf_calculator");var data={yourCfBoost:0,coins:0,supplies:0,goods:0,fpBy24h:0,otherRq:0,suppliesGathered:0,cumulativeQuest:0};for(var e in data)if(void 0!==this.$cookies.get(e)){var t=h.a.checkFormNumeric(this.$cookies.get(e),-1,y[e].comparator);t.state===h.a.FormCheck.VALID&&(data[e]=t.value)}return data.yourAge=void 0!==this.$cookies.get("yourAge")&&this.$cookies.get("yourAge")in c.a.ages?this.$cookies.get("yourAge"):c.a.ages.BronzeAge.key,data.secondRq=void 0!==this.$cookies.get("secondRq")&&!0===this.$cookies.get("secondRq"),Object.assign(data,this.checkQuery()),this.$store.commit("ADD_URL_QUERY",{key:_.yourAge,value:data.yourAge}),this.$store.commit("ADD_URL_QUERY",{key:_.yourCfBoost,value:data.yourCfBoost}),this.$store.commit("ADD_URL_QUERY",{key:_.coins,value:data.coins}),this.$store.commit("ADD_URL_QUERY",{key:_.supplies,value:data.supplies}),this.$store.commit("ADD_URL_QUERY",{key:_.goods,value:data.goods}),this.$store.commit("ADD_URL_QUERY",{key:_.fpBy24h,value:data.fpBy24h}),this.$store.commit("ADD_URL_QUERY",{key:_.otherRq,value:data.otherRq}),this.$store.commit("ADD_URL_QUERY",{key:_.suppliesGathered,value:data.suppliesGathered}),this.$store.commit("ADD_URL_QUERY",{key:_.secondRq,value:data.secondRq?1:0}),this.$store.commit("ADD_URL_QUERY",{key:_.cumulativeQuest,value:data.cumulativeQuest}),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},data,{i18nPrefix:"components.cf_calculator.",questData:c.a,oneQuest:[c.a.ages.BronzeAge.key,c.a.ages.IronAge.key,c.a.ages.EarlyMiddleAges.key,c.a.ages.HighMiddleAges.key],checkSecondQuest:!1,infinityGenerator:!1,result:{bp:0,medals:0,goods:0,fp:0,dailyUbq:0,bonusUbq:0,secondRqCompleted:0,totalGoods:0,totalFp:0,totalRqCompleted:0,coinSupplyReturn:[]},errors:{yourAge:!1,yourCfBoost:!1,coins:!1,supplies:!1,goods:!1,fpBy24h:!1,otherRq:!1,suppliesGathered:!1,cumulativeQuest:!1}})},computed:{isPermalink:function(){return this.$store.state.isPermalink},permaLink:function(){return{path:this.$i18nPath("cf-calculator/"),query:this.$store.state.urlQuery}},minCoins:function(){return 7*this.$data.questData.ages[this.$data.yourAge].cost.coins},minSupplies:function(){return 7*this.$data.questData.ages[this.$data.yourAge].cost.coins}},watch:{yourAge:function(e){this.yourAge in c.a.ages?(this.errors.yourAge=!1,this.isPermalink||this.$cookies.set("yourAge",e,{path:"/",expires:h.a.getDefaultCookieExpireTime()}),this.$store.commit("UPDATE_URL_QUERY",{key:_.yourAge,value:e}),this.oneQuest.indexOf(this.yourAge)>-1&&(this.secondRq=!1,this.$store.commit("UPDATE_URL_QUERY",{key:_.secondRq,value:0}),this.isPermalink||this.$cookies.set("secondRq",!1,{path:"/",expires:h.a.getDefaultCookieExpireTime()})),this.checkSecondQuest=-1===this.oneQuest.indexOf(e),this.calculate()):this.errors.yourAge=!0},secondRq:function(e){var t=!!e;this.isPermalink||this.$cookies.set("secondRq",t,{path:"/",expires:h.a.getDefaultCookieExpireTime()}),this.$data.suppliesGathered=t?h.a.normalizeNumberValue(this.$data.suppliesGathered):0,this.$store.commit("UPDATE_URL_QUERY",{key:_.secondRq,value:t?1:0}),this.$store.commit("UPDATE_URL_QUERY",{key:_.suppliesGathered,value:t?h.a.normalizeNumberValue(this.$data.suppliesGathered):0}),this.calculate()},yourCfBoost:function(e,t){h.a.handlerForm(this,"yourCfBoost",e&&0!==e.length?e:0,t,y.yourCfBoost.comparator,!this.isPermalink,"yourCfBoost")===h.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:_.yourCfBoost,value:e}),this.$data.infinityGenerator=!1,this.$data.cumulativeQuest=0,this.calculate())},coins:function(e,t){h.a.handlerForm(this,"coins",e&&0!==e.length?e:0,t,[">=",this.minCoins],!this.isPermalink,"coins")===h.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:_.coins,value:e}),this.calculate())},supplies:function(e,t){h.a.handlerForm(this,"supplies",e&&0!==e.length?e:0,t,[">=",this.minSupplies],!this.isPermalink,"supplies")===h.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:_.supplies,value:e}),this.calculate())},goods:function(e,t){h.a.handlerForm(this,"goods",e&&0!==e.length?e:0,t,y.goods.comparator,!this.isPermalink,"goods")===h.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:_.goods,value:e}),this.calculate())},fpBy24h:function(e,t){h.a.handlerForm(this,"fpBy24h",e&&0!==e.length?e:0,t,y.fpBy24h.comparator,!this.isPermalink,"fpBy24h")===h.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:_.fpBy24h,value:e}),this.calculate())},otherRq:function(e,t){h.a.handlerForm(this,"otherRq",e&&0!==e.length?e:0,t,y.otherRq.comparator,!this.isPermalink,"otherRq")===h.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:_.otherRq,value:e}),this.calculate())},suppliesGathered:function(e,t){h.a.handlerForm(this,"suppliesGathered",e&&0!==e.length?e:0,t,y.suppliesGathered.comparator,!this.isPermalink,"suppliesGathered")===h.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:_.suppliesGathered,value:e}),this.calculate())},cumulativeQuest:function(e,t){h.a.handlerForm(this,"cumulativeQuest",e&&0!==e.length?e:0,t,y.cumulativeQuest.comparator,!this.isPermalink,"cumulativeQuest")===h.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:_.cumulativeQuest,value:e}),this.calculate())}},mounted:function(){this.checkSecondQuest=-1===this.oneQuest.indexOf(this.$data.yourAge),this.calculate()},methods:{calculate:function(){if(!(h.a.normalizeNumberValue(this.$data.coins)<this.$data.minCoins||h.a.normalizeNumberValue(this.$data.supplies)<this.$data.minSupplies))try{this.$data.result=d(JSON.parse(JSON.stringify(this.$data.questData.ages[this.$data.yourAge])),h.a.normalizeNumberValue(this.$data.yourCfBoost),h.a.normalizeNumberValue(this.$data.coins),h.a.normalizeNumberValue(this.$data.supplies),h.a.normalizeNumberValue(this.$data.goods),h.a.normalizeNumberValue(this.$data.fpBy24h),!!this.$data.secondRq,h.a.normalizeNumberValue(this.$data.suppliesGathered),h.a.normalizeNumberValue(this.$data.otherRq),h.a.normalizeNumberValue(this.$data.cumulativeQuest)),this.$data.infinityGenerator=this.$data.result.infinityGenerator,this.$data.infinityGenerator&&0===this.$data.cumulativeQuest&&(this.$data.cumulativeQuest=this.$data.result.defaultCumulativeQuest)}catch(e){if("BoundExceededError"!==e.name)throw e;console.error("classic error")}},checkQuery:function(){var e,t={},o=h.a.FormCheck.NO_CHANGE;for(var r in y)(e=h.a.checkFormNumeric(this.$route.query[_[r]],-1,y[r].comparator)).state===h.a.FormCheck.VALID&&(o=h.a.FormCheck.VALID,t[r]=e.value);return this.$route.query[_.yourAge]&&this.$route.query[_.yourAge]in c.a.ages&&(o=h.a.FormCheck.VALID,t.yourAge=this.$route.query[_.yourAge]),this.$route.query[_.secondRq]&&!isNaN(this.$route.query[_.secondRq])&&parseInt(this.$route.query[_.secondRq])>=0&&(o=h.a.FormCheck.VALID,t.secondRq=1===parseInt(this.$route.query[_.secondRq])),o===h.a.FormCheck.VALID&&this.$store.commit("IS_PERMALINK",!0),t},haveError:function(input){return this.$data.errors[input]?"is-danger":""}},components:{YesNo:m.a}},k=o(13),component=Object(k.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-half"},[o("div",{staticClass:"field"},[o("h3",{staticClass:"title is-3"},[e._v(e._s(e.$t(e.$data.i18nPrefix+"block_cfc.title")))])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.canPermalink,expression:"canPermalink"}],staticClass:"column is-half"},[o("div",{staticClass:"field"},[o("nuxt-link",{staticClass:"level-right",attrs:{id:"permalink",to:e.permaLink,exact:""}},[o("span",{staticClass:"icon"},[o("i",{staticClass:"fas fa-link"})]),e._v(" "+e._s(e.$t("utils.permalink")))])],1)])]),o("p",[e._v(e._s(e.$t("utils.description.p1")))]),o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-half"},[o("b-field",{attrs:{id:"your-age-container",label:e.$t(e.i18nPrefix+"block_cfc.your_age"),"label-for":"your-age",type:e.haveError("yourAge")}},[o("b-select",{attrs:{id:"your-age",name:"your-age",expanded:""},model:{value:e.yourAge,callback:function(t){e.yourAge=t},expression:"yourAge"}},e._l(e.questData.ages,(function(t){return o("option",{key:t.key,attrs:{id:"option_"+t.key,autocomplete:"off"},domProps:{value:t.key,selected:e.yourAge==t.key}},[e._v(e._s(e.$t("foe_data.age."+t.key)))])})),0)],1),o("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.coins_to_use"),"label-for":"coins",type:e.haveError("coins")}},[o("template",{slot:"label"},[o("div",{staticClass:"media"},[o("span",{staticClass:"media-content"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.coins_to_use")))]),o("div",{staticClass:"media-right"},[o("b-tooltip",{staticClass:"is-hidden-touch",attrs:{type:"is-dark",label:e.$t(e.i18nPrefix+"block_cfc.coins_supplies_info",{min:e.minCoins}),multilined:""}},[o("span",{staticClass:"icon"},[o("i",{staticClass:"far fa-question-circle"})])]),o("b-tooltip",{staticClass:"is-hidden-desktop",attrs:{type:"is-dark",label:e.$t(e.i18nPrefix+"block_cfc.coins_supplies_info",{min:e.minCoins}),multilined:"",position:"is-left"}},[o("span",{staticClass:"icon"},[o("i",{staticClass:"far fa-question-circle"})])])],1)])]),o("b-input",{attrs:{id:"coins",type:"number",min:e.minCoins,name:"coins",autocomplete:"off"},model:{value:e.coins,callback:function(t){e.coins=e._n(t)},expression:"coins"}})],2),o("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.gb_plunder_goods"),"label-for":"goods",type:e.haveError("goods")}},[o("b-input",{attrs:{id:"goods",type:"number",min:"0",name:"goods",autocomplete:"off"},model:{value:e.goods,callback:function(t){e.goods=e._n(t)},expression:"goods"}})],1),o("yes-no",{directives:[{name:"show",rawName:"v-show",value:e.checkSecondQuest,expression:"checkSecondQuest"}],attrs:{label:e.$t(e.i18nPrefix+"block_cfc.second_rq")},model:{value:e.secondRq,callback:function(t){e.secondRq=t},expression:"secondRq"}}),o("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.other_rq"),"label-for":"other-rq",type:e.haveError("otherRq")}},[o("b-input",{attrs:{id:"other-rq",type:"number",min:"0",name:"other-rq",autocomplete:"off"},model:{value:e.otherRq,callback:function(t){e.otherRq=e._n(t)},expression:"otherRq"}})],1)],1),o("div",{staticClass:"column is-half"},[o("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.your_cf_boost"),"label-for":"your-cf-boost",type:e.haveError("yourCfBoost")}},[o("b-input",{attrs:{id:"your-cf-boost",type:"number",min:"0",name:"your-cf-boost",autocomplete:"off"},model:{value:e.yourCfBoost,callback:function(t){e.yourCfBoost=e._n(t)},expression:"yourCfBoost"}})],1),o("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.supplies_to_use"),"label-for":"supplies",type:e.haveError("supplies")}},[o("template",{slot:"label"},[o("div",{staticClass:"media"},[o("span",{staticClass:"media-content"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.supplies_to_use")))]),o("div",{staticClass:"media-right"},[o("b-tooltip",{staticClass:"is-hidden-touch",attrs:{type:"is-dark",label:e.$t(e.i18nPrefix+"block_cfc.coins_supplies_info",{min:e.minSupplies}),multilined:""}},[o("span",{staticClass:"icon"},[o("i",{staticClass:"far fa-question-circle"})])]),o("b-tooltip",{staticClass:"is-hidden-desktop",attrs:{type:"is-dark",label:e.$t(e.i18nPrefix+"block_cfc.coins_supplies_info",{min:e.minSupplies}),multilined:"",position:"is-left"}},[o("span",{staticClass:"icon"},[o("i",{staticClass:"far fa-question-circle"})])])],1)])]),o("b-input",{attrs:{id:"supplies",type:"number",min:e.minSupplies,name:"supplies",autocomplete:"off"},model:{value:e.supplies,callback:function(t){e.supplies=e._n(t)},expression:"supplies"}})],2),o("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.fp_by_24h"),"label-for":"fp-by-24h",type:e.haveError("fpBy24h")}},[o("b-input",{attrs:{id:"fp-by-24h",type:"number",min:"0",name:"fp-by-24h",autocomplete:"off"},model:{value:e.fpBy24h,callback:function(t){e.fpBy24h=e._n(t)},expression:"fpBy24h"}})],1),o("b-field",{directives:[{name:"show",rawName:"v-show",value:e.checkSecondQuest&&e.secondRq,expression:"checkSecondQuest && secondRq"}],attrs:{label:e.$t(e.i18nPrefix+"block_cfc.supplies_gathered"),"label-for":"supplies-gathered",type:e.haveError("suppliesGathered")}},[o("b-input",{attrs:{id:"supplies-gathered",type:"number",min:"0",name:"supplies-gathered",autocomplete:"off"},model:{value:e.suppliesGathered,callback:function(t){e.suppliesGathered=e._n(t)},expression:"suppliesGathered"}})],1)],1)]),o("b-message",{directives:[{name:"show",rawName:"v-show",value:e.infinityGenerator,expression:"infinityGenerator"}],attrs:{title:e.$t("utils.Information"),type:"is-info","has-icon":"",closable:!1}},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.infinity_generator.message")))]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.infinityGenerator,expression:"infinityGenerator"}],staticClass:"columns"},[o("div",{staticClass:"column is-half"},[o("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.infinity_generator.label"),"label-for":"cumulativeQuest",type:e.haveError("cumulativeQuest")}},[o("b-input",{attrs:{id:"cumulativeQuest",type:"number",min:"1",name:"cumulativeQuest",autocomplete:"off"},model:{value:e.cumulativeQuest,callback:function(t){e.cumulativeQuest=e._n(t)},expression:"cumulativeQuest"}})],1)],1)]),o("div",{staticClass:"table-wrapper"},[o("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[o("thead",[o("tr",[o("th",{staticClass:"has-text-centered",attrs:{colspan:"4"}},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.title")))])]),o("tr",[o("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.thead.th1")))]),o("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.thead.th2")))]),o("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.thead.th3")))]),o("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.thead.th4")))])])]),o("tbody",[o("tr",[o("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(e.result.bp)))]),o("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(e.result.medals)))]),o("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(e.result.goods)))]),o("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(e.result.fp)))])])])])]),o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-one-third"},[o("div",{staticClass:"field"},[o("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.total_goods",{count:e.result.totalGoods})))]),o("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.daily_ubq",{count:e.result.dailyUbq})))])])]),o("div",{staticClass:"column is-one-third"},[o("div",{staticClass:"field"},[o("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.total_fp",{count:e.result.totalFp})))]),o("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.bonus_ubq",{count:e.result.bonusUbq})))])])]),o("div",{staticClass:"column is-one-third"},[o("div",{staticClass:"field"},[o("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.total_rq_completed",{count:e.infinityGenerator?e.cumulativeQuest:e.result.totalRqCompleted})))]),o("p",{directives:[{name:"show",rawName:"v-show",value:e.secondRq,expression:"secondRq"}]},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.second_rq_completed",{count:e.result.secondRqCompleted})))])])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.result.coinSupplyReturn.length<=0,expression:"!result.coinSupplyReturn.length <= 0"}],staticClass:"table-wrapper"},[o("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[o("thead",[o("tr",[o("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_return.thead.th_level")))]),o("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_return.thead.th_coin")))]),o("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_return.thead.th_supply")))])])]),o("tbody",e._l(e.result.coinSupplyReturn,(function(data,t){return o("tr",[o("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(t+1)))]),o("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(data.coin)))]),o("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(data.supply)))])])})),0)])])],1)}),[],!1,null,null,null);t.a=component.exports},615:function(e,t){e.exports={ages:{BronzeAge:{key:"BronzeAge",cost:{coins:600,supplies:500,gather:1500},reward:{blueprint:1,fp:5,goods:5,medals:5,small_coins:100,large_coins:300,small_supplies:100,large_supplies:300,diamond:20}},IronAge:{key:"IronAge",cost:{coins:2e3,supplies:2e3,gather:6e3},reward:{blueprint:1,fp:5,goods:5,medals:10,small_coins:1e3,large_coins:3e3,small_supplies:1e3,large_supplies:3e3,diamond:20}},EarlyMiddleAges:{key:"EarlyMiddleAges",cost:{coins:5e3,supplies:5e3,gather:15e3},reward:{blueprint:1,fp:5,goods:5,medals:15,small_coins:2e3,large_coins:5e3,small_supplies:2e3,large_supplies:5e3,diamond:20}},HighMiddleAges:{key:"HighMiddleAges",cost:{coins:8e3,supplies:8e3,gather:25e3},reward:{blueprint:1,fp:5,goods:5,medals:30,small_coins:3e3,large_coins:6e3,small_supplies:3e3,large_supplies:6e3,diamond:20}},LateMiddleAges:{key:"LateMiddleAges",cost:{coins:1e4,supplies:12e3,gather:4e4},reward:{blueprint:1,fp:5,goods:5,medals:50,small_coins:5e3,large_coins:1e4,small_supplies:5e3,large_supplies:1e4,diamond:20}},ColonialAge:{key:"ColonialAge",cost:{coins:25e3,supplies:3e4,gather:11e4},reward:{blueprint:1,fp:5,goods:5,medals:75,small_coins:7e3,large_coins:14e3,small_supplies:8e3,large_supplies:17e3,diamond:20}},IndustrialAge:{key:"IndustrialAge",cost:{coins:4e4,supplies:35e3,gather:15e4},reward:{blueprint:1,fp:5,goods:5,medals:125,small_coins:1e4,large_coins:18e3,small_supplies:11e3,large_supplies:2e4,diamond:20}},ProgressiveEra:{key:"ProgressiveEra",cost:{coins:6e4,supplies:5e4,gather:25e4},reward:{blueprint:1,fp:5,goods:5,medals:180,small_coins:15e3,large_coins:3e4,small_supplies:16e3,large_supplies:32e3,diamond:20}},ModernEra:{key:"ModernEra",cost:{coins:9e4,supplies:75e3,gather:4e5},reward:{blueprint:1,fp:5,goods:5,medals:275,small_coins:2e4,large_coins:45e3,small_supplies:21e3,large_supplies:5e4,diamond:20}},PostmodernEra:{key:"PostmodernEra",cost:{coins:11e4,supplies:9e4,gather:45e4},reward:{blueprint:1,fp:5,goods:5,medals:400,small_coins:25e3,large_coins:6e4,small_supplies:26e3,large_supplies:7e4,diamond:20}},ContemporaryEra:{key:"ContemporaryEra",cost:{coins:14e4,supplies:11e4,gather:5e5},reward:{blueprint:1,fp:5,goods:5,medals:550,small_coins:34e3,large_coins:9e4,small_supplies:32e3,large_supplies:8e4,diamond:20}},Tomorrow:{key:"Tomorrow",cost:{coins:17e4,supplies:14e4,gather:7e5},reward:{blueprint:1,fp:5,goods:5,medals:700,small_coins:45e3,large_coins:13e4,small_supplies:4e4,large_supplies:11e4,diamond:20}},TheFuture:{key:"TheFuture",cost:{coins:25e4,supplies:25e4,gather:8e5},reward:{blueprint:1,fp:5,goods:5,medals:900,small_coins:57e3,large_coins:171e3,small_supplies:5e4,large_supplies:15e4,diamond:20}},ArcticFuture:{key:"ArcticFuture",cost:{coins:28e4,supplies:28e4,gather:9e5},reward:{blueprint:1,fp:5,goods:5,medals:1100,small_coins:65e3,large_coins:2e5,small_supplies:6e4,large_supplies:19e4,diamond:20}},OceanicFuture:{key:"OceanicFuture",cost:{coins:5e5,supplies:5e5,gather:15e5},reward:{blueprint:1,fp:5,goods:5,medals:1300,small_coins:7e4,large_coins:22e4,small_supplies:65e3,large_supplies:2e5,diamond:20}},VirtualFuture:{key:"VirtualFuture",cost:{coins:8e5,supplies:8e5,gather:2e6},reward:{blueprint:1,fp:5,goods:5,medals:1500,small_coins:75e3,large_coins:24e4,small_supplies:7e4,large_supplies:22e4,diamond:20}}}}}}]);