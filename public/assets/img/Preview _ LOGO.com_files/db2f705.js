(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1311:function(t,e,n){"use strict";var o=n(1302),r=n(33),l={mixins:[o.a],props:{page:{type:Object,default:function(){return{}}},ctx:{type:Object,default:function(){return null}},align:{type:String,default:"text-center"}},computed:Object(r.e)(["enterprise"])},c=n(8),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{directives:[{name:"show",rawName:"v-show",value:t.page.show_intro,expression:"page.show_intro"}],staticClass:"mb-6",class:t.align},[e("div",{class:{"flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center":t.$slots["header-content"]}},[e("h1",{staticClass:"text-3xl md:text-4xl"},[t._v(t._s(t.render(t.page.title)))]),t._v(" "),t._t("header-content")],2),t._v(" "),t.page.intro_text?e("div",{staticClass:"mb-6 mt-2 article",domProps:{innerHTML:t._s(t.render(t.page.intro_text))}}):t._e()])}),[],!1,null,null,null);e.a=component.exports},2262:function(t,e,n){"use strict";n.r(e);var o=n(162),r=n.n(o),content=n(129),l=n(1531),c=n(1311),d=n(11),f=n(33),x={layout:"simple",components:{ArrowRight:r.a,Package:l.a,Intro:c.a},mixins:[Object(content.d)(["editor/controls/preview"]),content.b,content.e],computed:Object(f.e)(["editor"]),methods:{finish:function(){d.a.$emit(d.b.EditorFinished)}}},m=n(8),component=Object(m.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative overflow-hidden"},[e("div",{staticClass:"max-w-7xl text-left mx-auto pt-10 pb-16 px-4 sm:px-6 lg:px-8"},[e("section",{staticClass:"mb-10 text-center"},[e("Intro",{attrs:{page:t.page}}),t._v(" "),e("button",{class:t.buttons.finish.classes,attrs:{id:t.buttons.finish.id,"v-if":t.contentReady,type:"button"},on:{click:t.finish}},[t._v("\n        "+t._s(t.buttons.finish.text)+"\n\n        "),e("ArrowRight",{staticClass:"btn-icon-right"})],1)],1),t._v(" "),t.editor.current_logo?e("Package",{attrs:{"overlay-logo":t.editor.current_logo,logo:t.editor.current_logo,"show-watermark":!0,owned:!0}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=db2f705.js.map