webpackJsonp([0,2],[,function(t,e,n){n(23);var i=n(0)(n(3),n(36),null,null);t.exports=i.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),a=(n.n(i),n(17)),r=(n.n(a),n(29)),s=n.n(r),l=n(30),o=n.n(l),c=n(26),u=n.n(c);e.default={name:"app",components:{Navbar:s.a,ThingsPanel:o.a,FooterPanel:u.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"controlPanel",props:["remaining","card","stars","editing","filters"],methods:{cardToggle:function(t){switch(t){case 0:this.$emit("cardToggle","all");break;case 1:this.$emit("cardToggle","active");break;case 2:this.$emit("cardToggle","star");break;case 3:this.$emit("cardToggle","completed");break;default:this.$emit("cardToggle","all")}},editStatusHandle:function(){this.$emit("editStatusHandle",this.editing)}},computed:{counts:function(){return"star"==this.card?this.stars:this.remaining},pluralize:function(){return"star"==this.card?parseInt(this.stars)<=1?"star":"stars":parseInt(this.remaining)<=1?"item":"items"},editStatus:function(){return this.editing?"Done":"Edit"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer",computed:{year:function(){return(new Date).getFullYear()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"App",props:["blank","placeholder"],data:function(){return{thing:{},label:""}},methods:{addNew:function(){this.placeholderChanger();var t=this.label;""!=t&&(this.thing={label:t,isFinished:!1,createDate:new Date,star:!1,finishedDate:null},this.$emit("pushNewThing",this.thing),this.label="")},placeholderChanger:function(){this.$emit("placeholderChanger",null)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"itemCard",props:["thing"],methods:{finishHandle:function(){this.$emit("thingFinish",this.thing)},deleteHandle:function(){this.$emit("thingDelete",this.thing)},editHandle:function(){},starHandle:function(){this.$emit("thingStar",this.thing)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Navbar"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(12),a=n(11),r=n(10),s=n(27),l=n.n(s),o=n(28),c=n.n(o),u=n(25),d=n.n(u);e.default={name:"thingsPanel",components:{InputPanel:l.a,ItemCard:c.a,ControlPanel:d.a},data:function(){return{title:"remember to",things:i.a.fetch()||[],card:"all",banner:r.a.banner(this.card||"all")||"Remember",placeholder:r.a.things()||"missing me",editing:!1}},methods:{pushHandle:function(t){this.things.push(t),"all"==this.card||"active"==this.card||(this.card="all")},clearHandle:function(){i.a.clear(),this.things=[]},finishHandle:function(t){t.isFinished=!t.isFinished},deleteHandle:function(t){this.things.splice(this.things.indexOf(t),1)},starHandle:function(t){t.star=!t.star},cardToggleHandle:function(t){this.card=t},bannerChanger:function(){this.banner=r.a.banner(this.card||"all")||"Remember"},placeholderChanger:function(){this.placeholder=r.a.things()},editStatusHandle:function(){this.editing=!this.editing}},watch:{things:{handler:function(t){i.a.save(t)},deep:!0},card:function(){this.bannerChanger()}},computed:{remaining:function(){return a.a.remaining(this.things).length},stars:function(){return a.a.star(this.things).length},filters:function(){return a.a[this.card](this.things)}}}},function(t,e,n){"use strict";var i=["Don't forget","Remember","Keep in mind that","Bear in mind that"],a=["You stared"],r=["You have done","You finished"],s=["your homework","eating","the date this weekend","bring the keys","charge your phone","missing me","buy tickets for Taylor Swift's concert","give Anna a ring","the time the plane took off","buy the latest magazines","reply to Alice","give York back to SMS","go to the dentist on weekends","turn off the lights"];e.a={banner:function t(e){var t={all:i,active:i,star:i.concat(a),completed:r};return t[e][Math.floor(Math.random()*t[e].length)]},things:function(){return s[Math.floor(Math.random()*s.length)]}}},function(t,e,n){"use strict";e.a={remaining:function(t){return t.filter(function(t){return!t.isFinished}).reverse()},all:function(t){return this.active(t).concat(this.completed(t))},normal:function(t){return t.filter(function(t){return!t.isFinished&&!t.star}).reverse()},completed:function(t){return t.filter(function(t){return t.isFinished}).reverse()},star:function(t){return t.filter(function(t){return!t.isFinished&&t.star}).reverse()},active:function(t){return this.remaining(t)}}},function(t,e,n){"use strict";var i=n(13),a=n.n(i),r="vue_todos";e.a={fetch:function(){return JSON.parse(window.localStorage.getItem(r)||"[]")},save:function(t){window.localStorage.setItem(r,a()(t))},clear:function(){window.localStorage.removeItem(r)}}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){n(18);var i=n(0)(n(4),n(31),null,null);t.exports=i.exports},function(t,e,n){n(19);var i=n(0)(n(5),n(32),null,null);t.exports=i.exports},function(t,e,n){n(20);var i=n(0)(n(6),n(33),null,null);t.exports=i.exports},function(t,e,n){n(22);var i=n(0)(n(7),n(35),null,null);t.exports=i.exports},function(t,e,n){n(24);var i=n(0)(n(8),n(37),"data-v-bb8cf7a2",null);t.exports=i.exports},function(t,e,n){n(21);var i=n(0)(n(9),n(34),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control-panel"},[n("div",{staticClass:"control-panel-layout"},[n("span",{staticClass:"things-count"},[t._v(t._s(t.counts)+" "+t._s(t.pluralize)+" left")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.filters,expression:"filters != 0"}],staticClass:"things-edit",on:{click:t.editStatusHandle}},[t._v(t._s(t.editStatus))])]),t._v(" "),n("ul",{staticClass:"card-toggle"},[n("li",{class:{active:"all"==t.card},on:{click:function(e){t.cardToggle(0)}}},[t._v("All")]),t._v(" "),n("li",{class:{active:"active"==t.card},on:{click:function(e){t.cardToggle(1)}}},[t._v("Active")]),t._v(" "),n("li",{class:{active:"star"==t.card},on:{click:function(e){t.cardToggle(2)}}},[t._v("Star")]),t._v(" "),n("li",{class:{active:"completed"==t.card},on:{click:function(e){t.cardToggle(3)}}},[t._v("Completed")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._v("\n  ©"+t._s(t.year)+"\n  "),n("a",{attrs:{href:"http://yangteng.me"}},[t._v("MorenYANG")]),t._v(" |\n  "),n("a",{attrs:{href:"https://github.com/morenyang/vue-todo-list"}},[t._v("Open Source on GitHub")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["things-input",{blank:t.blank}]},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"label"}],attrs:{id:"main-input",type:"text",maxlength:"20",placeholder:t.placeholder},domProps:{value:t.label},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addNew(e)},dblclick:t.placeholderChanger,input:function(e){e.target.composing||(t.label=e.target.value)}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"things-panel"},[n("div",{staticClass:"container"},[n("div",{staticClass:"layout"},[n("div",{staticClass:"title",on:{click:t.bannerChanger}},[t._v("\n        "+t._s(t.banner)+"\n      ")]),t._v(" "),n("div",{staticClass:"inner-card"},[n("input-panel",{attrs:{blank:0==t.filters.length,placeholder:t.placeholder},on:{pushNewThing:t.pushHandle,placeholderChanger:t.placeholderChanger}}),t._v(" "),0!=t.things.length?n("ul",{class:["things-list",{editing:this.editing}]},t._l(t.filters,function(e){return n("item-card",{key:e.createDate,attrs:{thing:e},on:{thingFinish:t.finishHandle,thingDelete:t.deleteHandle,thingStar:t.starHandle}})})):t._e(),t._v(" "),0!=t.things.length?n("control-panel",{attrs:{remaining:t.remaining,card:t.card,stars:t.stars,filters:t.filters.length,editing:t.editing},on:{cardToggle:t.cardToggleHandle,editStatusHandle:t.editStatusHandle}}):t._e()],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:["todo-thing",{finished:t.thing.isFinished}]},[n("input",{staticClass:"thing-checkbox",attrs:{type:"checkbox"},domProps:{checked:t.thing.isFinished},on:{click:t.finishHandle}}),t._v(" "),n("label",{class:["thing-label",{star:t.thing.star}],on:{dblclick:t.editHandle,click:t.starHandle}},[t._v("\n    "+t._s(t.thing.label)+"\n  ")]),t._v(" "),n("button",{staticClass:"thing-delete",on:{click:t.deleteHandle}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"todo"}},[n("navbar"),t._v(" "),n("things-panel"),t._v(" "),n("footer-panel")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar navbar-fixed-top"},[n("div",{staticClass:"container"},[n("div",{staticClass:"brand"},[t._v("\n      todos\n    ")])])])}]}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(1),r=n.n(a);i.a.config.productionTip=!1,new i.a({el:"#todo",template:"<App/>",components:{App:r.a}})}],[40]);
//# sourceMappingURL=app.d935ca6f5fccf82e8d2f.js.map