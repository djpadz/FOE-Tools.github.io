(window.webpackJsonp=window.webpackJsonp||[]).push([[21,22],{385:function(t,n,e){"use strict";var o=e(395),r=e.n(o),l=e(397),c=e.n(l),d=e(400),h=e.n(d),m={name:"Remark",props:{markdown:{type:String,required:!0}},data:function(){return{value:""}},watch:{markdown:function(){this.updateMarkdown()}},methods:{updateMarkdown:function(){var t=this,n=this;r()().use(h.a).use(c.a).process(this.$props.markdown,(function(e,o){e?console.error(e):(n.$data.value=o.contents,t.$emit("md-update",o.contents))}))}},mounted:function(){this.updateMarkdown()}},f=e(13),component=Object(f.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.value)}})}),[],!1,null,null,null);n.a=component.exports},407:function(t,n,e){"use strict";e.r(n);var o=e(385),r={head:function(){return{title:this.$t("routes.changelog.title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","changelog"),this.$store.commit("RESTORE_HERO"),{url:"https://raw.githubusercontent.com/FOE-Tools/FOE-Tools.github.io/production/CHANGELOG.md",markdown:""}},mounted:function(){var t=new XMLHttpRequest,n=this;t.open("GET",this.$data.url,!0),t.onload=function(){4===t.readyState&&(200===t.status?n.$data.markdown=t.responseText:console.error(t.statusText))},t.onerror=function(){console.error(t.statusText)},t.send(null)},components:{Remark:o.a}},l=e(13),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content",staticStyle:{"min-height":"100px"},attrs:{id:"changelog"}},[e("b-loading",{attrs:{"is-full-page":!1,active:0===t.markdown.length},on:{"update:active":function(n){return t.$set(t.markdown,"length === 0",n)}}}),e("remark",{attrs:{markdown:t.markdown}})],1)}),[],!1,null,null,null);n.default=component.exports},586:function(t,n,e){"use strict";e.r(n);var o=e(407).default,r=e(13),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);