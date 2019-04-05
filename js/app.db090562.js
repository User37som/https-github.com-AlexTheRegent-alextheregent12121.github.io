(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)o=r[u],i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var m=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"0bbb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t._m(0),n("router-view")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron text-center"},[n("h1",[t._v("Interactive Menu Builder")]),n("p",{staticClass:"lead"},[t._v("Интерактивное создание меню")])])}],o=(n("034f"),n("2877")),r={},c=Object(o["a"])(r,i,s,!1,null,null,null),l=c.exports,m=n("8c4f"),u=n("2b27"),p=n.n(u),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Настройки ")]),n("table",{staticClass:"table table-sm text-center"},[t._m(0),n("tbody",[n("tr",[n("td",[t._v("Игра")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.game,expression:"game"}],staticClass:"ml-3",attrs:{id:"game-csgo",name:"menu-type",type:"radio",value:"csgo"},domProps:{checked:t._q(t.game,"csgo")},on:{change:function(e){t.game="csgo"}}}),n("label",{staticClass:"mr-3 ml-2 form-check-label",attrs:{for:"game-csgo"}},[t._v("CS:GO ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.game,expression:"game"}],attrs:{id:"game-css",name:"menu-type",type:"radio",value:"css"},domProps:{checked:t._q(t.game,"css")},on:{change:function(e){t.game="css"}}}),n("label",{staticClass:"mr-3 ml-2 form-check-label",attrs:{for:"game-css"}},[t._v("CS:S ")])])])])]),n("h1",[t._v("Список меню ")]),n("table",{staticClass:"table shadow"},[t._m(1),n("tbody",t._l(t.menus,function(e,a){return n("tr",{staticClass:"text-center"},[n("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),n("td",[t._v(t._s(e))]),n("td",[n("button",{staticClass:"btn btn-sm btn-danger mr-3",on:{click:function(n){return t.delete_menu(e)}}},[t._v("Удалить ")]),n("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(n){return t.edit_menu(e)}}},[t._v("Редактировать ")])])])}),0)]),n("div",{staticClass:"d-flex justify-content-between"},[n("button",{staticClass:"btn btn-lg btn-info mx-auto mt-3",on:{click:function(e){return t.$router.push("/generate")}}},[t._v("Сгенерировать плагин")]),n("button",{staticClass:"btn btn-lg btn-primary mx-auto mt-3",on:{click:t.create_menu}},[t._v("Добавить новое меню")])])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Параметр")]),n("th",[t._v("Значение")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-light"},[n("tr",{staticClass:"text-center"},[n("th",[t._v("#")]),n("th",[t._v("Название")]),n("th",[t._v("Действия")])])])}],v=(n("f559"),{name:"index",data:function(){return{game:"csgo",menus:[]}},created:function(){for(var t,e="_menubuilder_",n=0;n<localStorage.length;++n)t=localStorage.key(n),t.startsWith(e)&&this.menus.push(t.substr(e.length));this.game=localStorage.getItem("game")||"csgo"},methods:{create_menu:function(){localStorage.setItem("name",""),this.$router.push("edit")},edit_menu:function(t){localStorage.setItem("name",t),this.$router.push("edit")},delete_menu:function(t){var e=this;this.$swal({title:"ВНИМАНИЕ",text:"Подтвердите удаление меню",icon:"warning",buttons:["Отмена","Удалить"],dangerMode:!0}).then(function(n){!0===n&&(localStorage.removeItem("_menubuilder_"+t),e.menus.splice(e.menus.indexOf(t),1))})}},beforeRouteLeave:function(t,e,n){localStorage.setItem("game",this.game),n()}}),h=v,g=Object(o["a"])(h,d,_,!1,null,null,null),f=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Параметры меню ")]),n("table",{staticClass:"table table-sm"},[n("tbody",[n("tr",[t._m(0),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Только англ. буквы",size:"32"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),n("tr",[t._m(1),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Например, sm_mymenu",size:"32"},domProps:{value:t.command},on:{input:function(e){e.target.composing||(t.command=e.target.value)}}})])]),n("tr",[t._m(2),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"ml-3",attrs:{id:"type-menu",name:"menu-type",type:"radio",value:"menu"},domProps:{checked:t._q(t.type,"menu")},on:{change:[function(e){t.type="menu"},t.sort_items]}}),n("label",{staticClass:"mr-3 ml-2 form-check-label",attrs:{for:"type-menu"}},[t._v("Меню ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{id:"type-panel",name:"menu-type",type:"radio",value:"panel"},domProps:{checked:t._q(t.type,"panel")},on:{change:[function(e){t.type="panel"},t.sort_items]}}),n("label",{staticClass:"mr-3 ml-2 form-check-label",attrs:{for:"type-panel"}},[t._v("Панель ")])])]),n("tr",[t._m(3),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.exit_back,expression:"exit_back"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Опционально, название меню",size:"32"},domProps:{value:t.exit_back},on:{input:function(e){e.target.composing||(t.exit_back=e.target.value)}}})])])])]),n("h1",[t._v("Содержимое меню ")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-7"},[n("h2",{staticClass:"text-center"},[t._v("Меню ")]),n("div",{staticClass:"row mb-4"},[n("div",{staticClass:"input-group"},[t._m(4),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{id:"menu-title",type:"text",placeholder:"Введите заголовок меню"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._l(t.items,function(e){return n("div",{staticClass:"mb-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},["menu"===t.type?n("span",{staticClass:"input-group-text"},[t._v(t._s(e.position))]):n("select",{directives:[{name:"model",rawName:"v-model:value",value:e.position,expression:"item.position",arg:"value"}],staticClass:"input-group-text",on:{change:[function(n){var a=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(e,"position",n.target.multiple?a:a[0])},t.sort_items]}},[n("option",{attrs:{value:" "}}),t._l(9,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}),n("option",{attrs:{value:"0"}},[t._v("0")])],2)]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"item.text"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Отображаемый текст"},domProps:{value:e.text},on:{input:function(n){n.target.composing||t.$set(e,"text",n.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-secondary",on:{click:function(n){return t.delete_item(e)}}},[t._v("X")])])])]),n("div",{staticClass:"row"},[t._l(e.actions,function(a){return n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},["open"===a.action?n("span",{staticClass:"input-group-text"},[t._v("Открыть меню ")]):t._e(),"pcmd"===a.action?n("span",{staticClass:"input-group-text"},[t._v("Выполнить от игрока")]):t._e(),"scmd"===a.action?n("span",{staticClass:"input-group-text"},[t._v("Выполнить от сервера")]):t._e(),"close"===a.action?n("span",{staticClass:"input-group-text"},[t._v("Закрыть меню")]):t._e()]),"open"===a.action?n("input",{directives:[{name:"model",rawName:"v-model",value:a.target,expression:"action.target"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Название меню"},domProps:{value:a.target},on:{input:function(e){e.target.composing||t.$set(a,"target",e.target.value)}}}):t._e(),"pcmd"===a.action?n("input",{directives:[{name:"model",rawName:"v-model",value:a.target,expression:"action.target"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Команда от лица игрока"},domProps:{value:a.target},on:{input:function(e){e.target.composing||t.$set(a,"target",e.target.value)}}}):t._e(),"scmd"===a.action?n("input",{directives:[{name:"model",rawName:"v-model",value:a.target,expression:"action.target"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Команда от сервера"},domProps:{value:a.target},on:{input:function(e){e.target.composing||t.$set(a,"target",e.target.value)}}}):t._e(),"close"===a.action?n("input",{directives:[{name:"model",rawName:"v-model",value:a.target,expression:"action.target"}],staticClass:"form-control",attrs:{type:"text",placeholder:"",disabled:""},domProps:{value:a.target},on:{input:function(e){e.target.composing||t.$set(a,"target",e.target.value)}}}):t._e(),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-secondary",on:{click:function(n){return t.delete_action(e,a)}}},[t._v("X")])])])}),n("div",{staticClass:"mt-1 mx-auto"},[n("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Добавить действие ")]),n("div",{staticClass:"dropdown-menu"},[n("button",{staticClass:"dropdown-item",on:{click:function(n){return t.add_action(e,"open")}}},[t._v("Открыть меню ")]),n("button",{staticClass:"dropdown-item",on:{click:function(n){return t.add_action(e,"pcmd")}}},[t._v("Выполнить команду от игрока ")]),n("button",{staticClass:"dropdown-item",on:{click:function(n){return t.add_action(e,"scmd")}}},[t._v("Выполнить команду от сервера ")]),n("button",{staticClass:"dropdown-item",on:{click:function(n){return t.add_action(e,"close")}}},[t._v("Закрыть меню ")])])])],2)])}),n("div",{staticClass:"row mb-3"},[n("div",{staticClass:"mx-auto"},[n("button",{staticClass:"btn btn-outline-secondary mt-3",on:{click:t.add_item}},[t._v("Добавить пункт ")])])])],2),n("div",{staticClass:"col-xl"}),n("div",{staticClass:"col-xl-4"},[n("h2",{staticClass:"text-center"},[t._v("Предпросмотр ")]),t._l(Math.ceil(t.items.length/t.items_per_page),function(e){return n("div",{staticClass:"menu-preview mb-4 shadow-lg"},[n("div",{staticClass:"overflow-hidden"},[n("div",{staticClass:"item-muted raw-html"},[t._v(t._s(t.process_text(t.title)))])]),t._l(t.items.slice((e-1)*t.items_per_page,e*t.items_per_page),function(e){return n("div",{staticClass:"overflow-hidden"},["menu"===t.type?n("div",{staticClass:"raw-html",class:{"item-muted":0===e.actions.length}},[t._v(t._s((e.position-1)%t.items_per_page+1)+". "+t._s(t.process_text(e.text)))]):n("div",{staticClass:"raw-html"},[" "!==e.position?n("span",{class:{"item-muted":0===e.actions.length}},[t._v(t._s(e.position)+". ")]):t._e(),n("span",{class:{"item-muted":0===e.actions.length||" "===e.position}},[t._v(t._s(t.process_text(e.text)))])])])}),"menu"===t.type?n("div",[e>1||""!==t.exit_back?n("div",[n("div",[t._v(" ")]),n("div",{staticClass:"item-muted"},[t._v(t._s(t.items_per_page+1)+". Назад")]),t.items.length/t.items_per_page>e?n("div",[n("div",{staticClass:"item-muted"},[t._v(t._s(t.items_per_page+2)+". Вперёд")])]):t._e()]):n("div",[n("div",[t._v(" ")]),t.items.length/t.items_per_page>e?n("div",[n("div",{staticClass:"item-muted"},[t._v(t._s(t.items_per_page+2)+". Вперёд")])]):t._e()]),n("div",{staticClass:"item-muted"},[t._v(t._s(6===t.items_per_page?9:0)+". Выход")])]):t._e()],2)})],2)]),n("div",{staticClass:"d-xl-flex justify-content-end text-center"},[n("div",{staticClass:"my-auto d-inline"},[n("button",{staticClass:"btn btn-sm btn-danger mr-3",on:{click:t.delete_menu}},[t._v("Удалить меню")])]),n("button",{staticClass:"btn btn-lg btn-warning mr-3",on:{click:t.go_back}},[t._v("Назад")]),n("button",{staticClass:"btn btn-lg btn-primary",on:{click:t.save_menu}},[t._v("Сохранить меню ")])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("label",{staticClass:"mr-3"},[t._v("Уникальное название меню: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("label",{staticClass:"mr-3"},[t._v("Команда открытия меню: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("label",{staticClass:"mr-3 form-check-label"},[t._v("Тип: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("label",{staticClass:"mr-3"},[t._v('"Назад" возвращает в меню: ')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("Заголовок ")])])}],x=n("f499"),y=n.n(x),w=(n("a481"),n("c5f6"),n("7f7f"),{name:"edit",data:function(){return{name:"",base_name:"",title:"",items:[],items_per_page:7,type:"menu",exit_back:"",command:""}},created:function(){if($(function(){$('[data-toggle="tooltip"]').tooltip()}),this.base_name=this.name=localStorage.getItem("name"),this.name.length>0){var t=JSON.parse(localStorage.getItem("_menubuilder_"+this.name));this.title=t.title,this.items=t.items,this.type=t.type,this.command=t.command,this.exit_back=t.exit_back}var e=localStorage.getItem("game")||"csgo";this.items_per_page="csgo"===e?6:7},methods:{add_item:function(){this.items.push({position:this.items.length+1,text:"",actions:[]})},delete_item:function(t){var e=this.items.indexOf(t);for(e in this.items.splice(e,1),this.items)this.items[e].position=Number(e)+1},add_action:function(t,e){var n=this.items.indexOf(t);this.items[n].actions.push({action:e,target:""})},delete_action:function(t,e){var n=this.items.indexOf(t),a=this.items[n].actions.indexOf(e);this.items[n].actions.splice(a,1)},process_text:function(t){return t.replace(/\\n/g,"\n")},save_menu:function(){this.base_name!==this.name&&this.base_name.length>0&&localStorage.removeItem("_menubuilder_"+this.base_name),localStorage.setItem("_menubuilder_"+this.name,y()({title:this.title,items:this.items,type:this.type,command:this.command,exit_back:this.exit_back})),this.$router.push("/")},delete_menu:function(){var t=this;this.$swal({title:"ВНИМАНИЕ",text:"Подтвердите удаление меню",icon:"warning",buttons:["Отмена","Удалить"],dangerMode:!0}).then(function(e){!0===e&&(localStorage.removeItem("_menubuilder_"+t.base_name),t.$router.push("/"))})},sort_items:function(){if("panel"===this.type)for(var t=0,e=0;e<this.items.length;++e)" "!==this.items[e].position&&(0==this.items[e].position&&(this.items[e].position=100),this.items[e].position>t?(t=this.items[e].position,e):this.items[e].position===t?(this.items[e].position++,t=this.items[e].position,e):(t++,this.items[e].position=t,e),100==this.items[e].position&&(this.items[e].position=0));else for(var n=0;n<this.items.length;++n)this.items[n].position=n+1},go_back:function(){var t=this,e=localStorage.getItem("_menubuilder_"+this.name);if(e){var n=y()({title:this.title,items:this.items,type:this.type,command:this.command,exit_back:this.exit_back});e!==n?this.$swal({title:"ВНИМАНИЕ",text:"Вы не сохранили изменения",icon:"warning",buttons:["Остаться","Не сохранять"],dangerMode:!0}).then(function(e){!0===e&&t.$router.push("/")}):this.$router.push("/")}else this.$router.push("/")}},beforeRouteLeave:function(t,e,n){n()}}),S=w,k=(n("d572"),Object(o["a"])(S,b,C,!1,null,null,null)),M=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Информация о плагине  ")]),n("table",{staticClass:"table table-sm"},[n("tbody",[n("tr",[t._m(0),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Моё меню",size:"32"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),n("tr",[t._m(1),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Я",size:"32"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})])]),n("tr",[t._m(2),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"В этом плагине мои меню",size:"32"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),n("tr",[t._m(3),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.version,expression:"version"}],staticClass:"form-control",attrs:{type:"text",placeholder:"1.0",size:"32"},domProps:{value:t.version},on:{input:function(e){e.target.composing||(t.version=e.target.value)}}})])]),n("tr",[t._m(4),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"text",placeholder:"http://www.example.com",size:"32"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})])])])]),n("h1",[t._v("Действия ")]),n("div",{staticClass:"d-flex justify-content-around mt-3"},[n("button",{staticClass:"btn btn-secondary btn-lg",on:{click:function(e){return t.save_as_json()}}},[t._v("Скачать в формате json (.txt)")]),n("button",{staticClass:"btn btn-primary btn-lg",on:{click:function(e){return t.save_as_plugin()}}},[t._v("Скачать в формате плагина (.sp)")])]),n("h1",{staticClass:"mt-3"},[t._v("Отчёт ")]),n("textarea",{ref:"output",staticClass:"w-100 mt-3",staticStyle:{"font-family":"Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace"},attrs:{rows:"6"}})])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("label",{staticClass:"mr-3"},[t._v("Название плагина: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("label",{staticClass:"mr-3"},[t._v("Автор плагина: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("label",{staticClass:"mr-3"},[t._v("Описание плагина: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("label",{staticClass:"mr-3"},[t._v("Версия плагина: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("label",{staticClass:"mr-3"},[t._v("Ссылка плагина: ")])])}],I={name:"generate",data:function(){return{name:"",author:"",description:"",version:"",url:"",items_per_page:0}},created:function(){var t=localStorage.getItem("game")||"csgo";this.items_per_page="csgo"===t?6:7;var e=JSON.parse(localStorage.getItem("pluginInformation"));e&&(this.name=e.name,this.author=e.author,this.description=e.description,this.version=e.version,this.url=e.url)},methods:{save_as_json:function(){localStorage.setItem("pluginInformation",y()({name:this.name,author:this.author,description:this.description,version:this.version,url:this.url}));for(var t,e={},n="_menubuilder_",a=0;a<localStorage.length;++a)t=localStorage.key(a),t.startsWith(n)&&(e[t.substr(n.length)]=localStorage.getItem(t));this.$refs.output.value=y()(e)},save_file:function(t,e){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(y()(e))),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},save_as_plugin:function(){localStorage.setItem("pluginInformation",y()({name:this.name,author:this.author,description:this.description,version:this.version,url:this.url}));for(var t,e={},n=[],a="_menubuilder_",i=0;i<localStorage.length;++i)t=localStorage.key(i),t.startsWith(a)&&(n.push(t.substr(a.length)),e[t.substr(a.length)]=JSON.parse(localStorage.getItem(t)));var s=this.create_header(),o=this.create_variables(e,n),r=this.create_plugin_start(e,n),c=this.create_commands(e,n),l="";l+=s,l+="\n",l+=o,l+="\n",l+=r,l+="\n",l+=c,l+="\n";for(var m=0;m<n.length;++m)"menu"===e[n[m]].type?l+=this.create_menu_handler(n[m],e[n[m]],e):l+=this.create_panel_handler(n[m],e[n[m]],e);this.$refs.output.value=l},create_header:function(){var t="";return t+="#include <sourcemod>\n",t+="\n",t+="public Plugin:myinfo = \n",t+="{\n",t+='name        = "'.concat(this.name,'"\n'),t+='author      = "'.concat(this.author,'"\n'),t+='description = "'.concat(this.description,'"\n'),t+='version     = "'.concat(this.version,'"\n'),t+='url         = "'.concat(this.url,'"\n'),t+="}\n",t},create_variables:function(t,e){for(var n="",a=0;a<e.length;++a)n+="new Handle: g_".concat(e[a],";\n"),t[e[a]].items&&t[e[a]].items.length>this.items_per_page&&(n+="new g_".concat(e[a],"_position[MAXPLAYERS + 1];\n"));return n},create_plugin_start:function(t,e){var n="";n+="public OnPluginStart()\n",n+="{\n";for(var a=0;a<e.length;++a)t[e[a]].command&&t[e[a]].command.length>0&&(n+='    RegConsoleCmd("'.concat(t[e[a]].command,'", Command_OpenMenu_').concat(e[a],");\n"));for(var i=0;i<e.length;++i)"menu"===t[e[i]].type?n+=this.create_menu(e[i],t[e[i]]):n+=this.create_panel(e[i],t[e[i]]);return n+="}\n",n},create_menu:function(t,e){var n="\n";n+="    g_".concat(t," = CreateMenu(Handler_").concat(t,");\n"),n+='    SetMenuTitle("'.concat(e.title,'")\n');for(var a=0;a<e.items.length;++a)e.items[a].actions&&e.items[a].actions.length>0?n+="    AddMenuItem(g_".concat(t,', "').concat(e.items[a].position,'", "').concat(e.items[a].text,'")\n'):n+="    AddMenuItem(g_".concat(t,', "').concat(e.items[a].position,'", "').concat(e.items[a].text,'", ITEMDRAW_DISABLED)\n');return e.exit_back&&e.exit_back.length>0&&(n+="    SetMenuExitBackButton(g_".concat(t,", true);\n")),n},create_panel:function(t,e){var n="\n";n+="    g_".concat(t," = CreatePanel();\n"),n+='    SetPanelTitle("'.concat(e.title,'")\n');for(var a=0;a<e.items.length;++a)n+="    SetPanelCurrentKey(g_".concat(t,", ").concat(e.items[a].position,")\n"),e.items[a].actions&&e.items[a].actions.length>0?n+="    DrawPanelItem(g_".concat(t,', "').concat(e.items[a].text,'")\n'):n+="    DrawPanelText(g_".concat(t,', "').concat(e.items[a].text,'")\n');return n},create_commands:function(t,e){for(var n="",a=0;a<e.length;++a)t[e[a]].command&&t[e[a]].command.length>0&&(n+="public Action:Command_OpenMenu_".concat(e[a],"(client, argc)\n"),n+="{\n",n+=this.display_menu(e[a],t,"    ",!1),n+="    return Plugin_Handled;\n",n+="}\n");return n},create_menu_handler:function(t,e,n){var a="";a+="public Handler_".concat(t,"(Handle:menu, MenuAction:action, client, slot)\n"),a+="{\n",a+="    switch (action)\n",a+="    {\n",a+="        case MenuAction_Select:\n",a+="        {\n",a+="            decl String:info[64];\n",a+="            GetMenuItem(menu, slot, info, sizeof(info));\n",a+="            \n";for(var i=0;i<e.items.length;++i)if(e.items[i].actions&&e.items[i].actions.length>0){1!==e.items[i].position?a+='            else if (StrEqual(info, "'.concat(e.items[i].position,'"))\n'):a+='            if (StrEqual(info, "'.concat(e.items[i].position,'"))\n'),a+="            {\n";for(var s=0;s<e.items[i].actions.length;++s)"open"===e.items[i].actions[s].action?(n[e.items[i].actions[s].target]&&""!==n[e.items[i].actions[s].target].exit_back&&n[t].items.length>this.items_per_page&&(a+="                g_".concat(t,"_position[client] = GetMenuSelectionPosition();\n")),a+=this.display_menu(e.items[i].actions[s].target,n,"                ",!1)):"pcmd"===e.items[i].actions[s].action?a+='                ClientCommand(client, "'.concat(this.escape_command(e.items[i].actions[s].target),'");\n'):"scmd"===e.items[i].actions[s].action&&(a+='                ServerCommand("'.concat(e.items[i].actions[s].target,'");\n'));a+="            }\n"}return a+="        }\n",e.exit_back&&e.exit_back.length>0&&(a+="        case MenuAction_Cancel:\n",a+="        {\n",a+="            if (slot == MenuCancel_ExitBack)\n",a+="            {\n",a+=this.display_menu(e.exit_back,n,"                ",!0),a+="            }\n",a+="        }\n"),a+="    }\n",a+="}\n",a+="\n",a},create_panel_handler:function(t,e,n){var a="";a+="public Handler_".concat(t,"(Handle:panel, MenuAction:action, client, slot)\n"),a+="{\n",a+="    switch (action)\n",a+="    {\n",a+="        case MenuAction_Select:\n",a+="        {\n";for(var i=0;i<e.items.length;++i)if(e.items[i].actions&&e.items[i].actions.length>0){1!==e.items[i].position?a+="            else if (slot == ".concat(e.items[i].position,")\n"):a+="            if (slot == ".concat(e.items[i].position,")\n"),a+="            {\n";for(var s=0;s<e.items[i].actions.length;++s)"open"===e.items[i].actions[s].action?a+=this.display_menu(e.items[i].actions[s].target,n,"                ",!1):"pcmd"===e.items[i].actions[s].action?a+='                ClientCommand(client, "'.concat(e.items[i].actions[s].target,'");\n'):"scmd"===e.items[i].actions[s].action&&(a+='                ServerCommand("'.concat(e.items[i].actions[s].target,'");\n'));a+="            }\n"}return a+="        }\n",a+="    }\n",a+="}\n",a+="\n",a},display_menu:function(t,e,n,a){var i="";return"undefined"!==typeof e[t]&&("menu"===e[t].type?a&&e[t].items.length>this.items_per_page?i+="".concat(n,"DisplayMenuAtItem(g_").concat(t,", client, g_").concat(t,"_position[client], MENU_TIME_FOREVER);\n"):i+="".concat(n,"DisplayMenu(g_").concat(t,", client, MENU_TIME_FOREVER);\n"):i+="".concat(n,"SendPanelToClient(g_").concat(t,", client, Handler_").concat(t,", MENU_TIME_FOREVER);\n")),i},escape_command:function(t){return t.replace(/"/g,'\\"')}}},O=I,N=Object(o["a"])(O,E,P,!1,null,null,null),j=N.exports,A=n("e37d"),R=n("14ba"),T=n.n(R);a["a"].use(m["a"]),a["a"].use(p.a),a["a"].use(A["a"],{defaultTemplate:'<div class="tooltip-vue" role="tooltip"><div class="tooltip-vue-arrow"></div><div class="tooltip-vue-inner"></div></div>',defaultArrowSelector:".tooltip-vue-arrow, .tooltip-vue__arrow",defaultInnerSelector:".tooltip-vue-inner, .tooltip-vue__inner",popover:{defaultBaseClass:"tooltip-vue popover-vue",defaultInnerClass:"tooltip-vue-inner popover-inner",defaultArrowClass:"tooltip-vue-arrow popover-arrow"}}),a["a"].use(T.a),p.a.config("7d");var z=new m["a"]({routes:[{path:"/",name:"index",component:f},{path:"/edit",name:"edit",component:M},{path:"/generate",name:"generate",component:j}]});a["a"].config.productionTip=!1,new a["a"]({router:z,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},d572:function(t,e,n){"use strict";var a=n("0bbb"),i=n.n(a);i.a}});
//# sourceMappingURL=app.db090562.js.map