(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/automatos/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"55d9":function(t,e,a){},"5b33":function(t,e,a){"use strict";var n=a("55d9"),o=a.n(n);o.a},"944d":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content",attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-spaced"},[t._v("Projeto Autômatos e Bioinformática")]),a("h2",{staticClass:"subtitle is-spaced"},[t._v("Teoria da Computação - PPGCC IFCE")]),t._m(0),a("AutomatoNaoDeterministico"),a("AutomatoDeterministico")],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"question"},[a("p",[t._v(" Construa um programa para definir autˆomatos finitos n ̃ao determin ́ısticos. Sua implementa ̧c ̃ao deve funcionar para qualquer tipo de autˆomato finito n ̃ao determin ́ıstico, ou seja, deve aceitar qualquer conjunto de estados, alfabeto, fun ̧c ̃ao de transi ̧c ̃ao, estado inicial e conjunto de estados finais. Depois do autˆomato finito n ̃ao determin ́ıstico ser definido, deve ser poss ́ıvel verificar se ele aceita ou rejeita strings fornecidas. Isso deve ser feito sem converter o autˆomato finito n ̃ao determin ́ıstico em um determin ́ıstico. ")])])}],i=a("d4ec"),r=a("262e"),c=a("2caf"),l=a("9ab4"),u=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[t._v("unit-jest")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],v=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(l["a"])([Object(u["b"])()],v.prototype,"msg",void 0),v=Object(l["a"])([u["a"]],v);var p=v,b=p,m=(a("5b33"),a("2877")),h=Object(m["a"])(b,d,f,!1,null,"46e1e0b2",null),j=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"block"},[a("div",{staticClass:"block"},[a("h2",{staticClass:"subtitle"},[t._v("Autômato Finito Não Determinístico")]),a("b-field",{attrs:{label:"Alfabeto"}},[a("b-taginput",{attrs:{value:Array.from(t.afn.alfabeto),ellipsis:"",placeholder:"Adicione itens ao alfabeto (separado por vírgulas)"},on:{input:function(e){t.afn.alfabeto=new Set(e)}}})],1),a("b-field",{attrs:{label:"Estados",type:t.validationClass(t.afn.validarEstados()),message:t.afn.validarEstados().message}},[a("b-taginput",{attrs:{value:Array.from(t.afn.estados),ellipsis:"",placeholder:"Adicione estados (separado por vírgulas)"},on:{input:function(e){t.afn.estados=new Set(e)}}})],1),a("b-field",{attrs:{label:"Estado inicial",type:t.validationClass(t.afn.validarEstadoInicial()),message:t.afn.validarEstadoInicial().message}},[a("b-select",{attrs:{disabled:0===t.afn.estados.size},model:{value:t.afn.estadoInicial,callback:function(e){t.$set(t.afn,"estadoInicial",e)},expression:"afn.estadoInicial"}},t._l(t.afn.estados,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)],1),a("b-field",{attrs:{label:"Estados de aceitação",type:t.validationClass(t.afn.validarEstadosFinais()),message:t.afn.validarEstadosFinais().message}},[a("b-taginput",{attrs:{multiple:"",value:Array.from(t.afn.estadosFinais),data:Array.from(t.afn.estados),autocomplete:"","allow-new":!1,"open-on-focus":!0,disabled:0===t.afn.estados.size},on:{input:function(e){t.afn.estadosFinais=new Set(e)}}})],1)],1),a("Transicoes",{attrs:{automato:t.afn}}),a("div",{staticClass:"block"}),t.afn&&t.afn.validar().valid?a("div",{staticClass:"box"},[a("h6",{staticClass:"subtitle is-6"},[t._v("Autômato Gerado")]),a("p",[t._v("M = (Q, Σ, δ, q0, F)")]),a("p",[t._v("Σ: { "+t._s(t.formatarSet(t.afn.alfabeto))+" }")]),a("p",[t._v("Q: { "+t._s(t.formatarSet(t.afn.estados))+" }")]),a("p",[t._v("q0: "+t._s(t.afn.estadoInicial))]),a("p",[t._v("F: { "+t._s(t.formatarSet(t.afn.estadosFinais))+" }")]),t._v(" δ: { "),a("ul",{staticStyle:{"margin-left":"20px"}},t._l(t.transicoesFormatadas,(function(e){return a("li",{key:e},[t._v(t._s(e))])})),0),t._v("} "),a("TesteCadeia",{attrs:{automato:t.afn},model:{value:t.cadeia,callback:function(e){t.cadeia=e},expression:"cadeia"}}),a("b-button",{on:{click:t.converter}},[t._v("Converter em Autômato Finito Determinístico (AFD)")])],1):t._e()],1)},g=[],y=(a("99af"),a("a630"),a("a15b"),a("d81d"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("bee2")),O=(a("4de4"),a("4160"),a("13d5"),a("45fc"),a("4ec9"),a("ac1f"),a("1276"),a("159b"),a("b85c")),k=a("2909"),w=a("2ef0"),E=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(i["a"])(this,t),null==e&&(e={}),this.alfabeto=e.alfabeto||new Set,this.estados=e.estados||new Set,this.estadoInicial=e.estadoInicial||"",this.estadosFinais=e.estadosFinais||new Set}return Object(y["a"])(t,[{key:"validarEstados",value:function(){return 0===this.estados.size?{valid:!1,message:"o conjunto de estados não pode ser vazio"}:{valid:!0}}},{key:"validarEstadoInicial",value:function(){return this.estados.has(this.estadoInicial)?{valid:!0}:{valid:!1,message:"O estado ".concat(this.estadoInicial," não pertence ao conjunto de estados do autômato")}}},{key:"validarEstadosFinais",value:function(){var t=this,e=[];return 0===this.estadosFinais.size?{valid:!1,message:"Nenhum estado de aceitação foi defidido para o autômato"}:(this.estadosFinais.forEach((function(a){t.estados.has(a)||e.push(a)})),e.length>0?{valid:!1,message:"O(s) estado(s) ".concat(e.join(", ")," não pertence(m) ao conjunto de estados do autômato")}:{valid:!0})}},{key:"validar",value:function(){var t=this.validarEstadoInicial(),e=this.validarEstadosFinais(),a=this.validarTransicoes(),n=[];return t.message&&n.push(t.message),e.message&&n.push(e.message),a.message&&n.push(a.message),{valid:t.valid&&e.valid&&a.valid,message:n.length>0?n.join(", "):void 0}}}]),t}();E.EPSILON="epsilon";a("7db0");var S=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(i["a"])(this,a),t=e.call(this,n),null==n&&(n={}),t.transicoes=n.transicoes||[],t}return Object(y["a"])(a,[{key:"validarTransicoes",value:function(){var t=this,e=Array.from(this.transicoes).map((function(e){var a=[];if(t.estados.has(e[0])||a.push("o estado de origem ".concat(e[0]," não pertence ao conjunto de estados do autômato")),t.estados.has(e[2])||a.push("o estado de destino ".concat(e[2]," não pertence ao conjunto de estados do autômato")),t.alfabeto.has(e[1])||a.push("a transição ".concat(e[1]," não pertence ao alfabeto do autômato")),0!==a.length)return"".concat(e[0],", ").concat(e[1]," -> ").concat(e[2],": ").concat(a.join(", "))})).filter((function(t){return void 0!=t}));return e.length>0?{valid:!1,message:e.join("; ")}:{valid:!0}}},{key:"processarCadeia",value:function(t){var e,a=this,n=this.estadoInicial,o=Object(O["a"])(t.split(""));try{var s=function(){var t=e.value,o=Array.from(a.transicoes).find((function(e){return e[0]===n&&e[1]===t}));if(!o)return"break";n=o[2]};for(o.s();!(e=o.n()).done;){var i=s();if("break"===i)break}}catch(r){o.e(r)}finally{o.f()}return this.estadosFinais.has(n)}},{key:"converterParaNaoDeterministico",value:function(){var t=new C;return t.alfabeto=this.alfabeto,t.estados=this.estados,t.estadoInicial=this.estadoInicial,t.estadosFinais=this.estadosFinais,t.transicoes=Object(k["a"])(this.transicoes).map((function(t){return[t[0],t[1],new Set([t[2]])]})),t}}]),a}(E),C=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(i["a"])(this,a),t=e.call(this,n),null==n&&(n={}),t.transicoes=n.transicoes||[],t}return Object(y["a"])(a,[{key:"validarTransicoes",value:function(){var t=this,e=[];return this.transicoes.forEach((function(a,n){var o=[],s=t.estados.has(a[0])?void 0:a[0],i=Object(k["a"])(a[2]).map((function(e){return t.estados.has(e)||e===E.EPSILON?void 0:e})).filter((function(t){return void 0!=t}));t.alfabeto.has(a[1])||a[1]===E.EPSILON||o.push("a transição ".concat(a[1]," não pertence ao alfabeto do autômato")),s&&o.push("a estado de origem ".concat(s," não pertence ao conjunto de estados do autômato")),0===a[2].size&&o.push("nenhum estado definido como destino"),t.transicoes.some((function(t,e){return n!==e&&t[0]===a[0]&&t[1]===a[1]}))&&o.push("transição duplicada"),i.length>0&&o.push("o(s) estado(s) de destino {".concat(i.join(", "),"} não pertence(m) ao conjunto de estados do autômato")),o.length>0&&e.push("".concat(a[0],", ").concat(a[1]," -> {").concat(Object(k["a"])(a[2]).join(", "),"}: ").concat(o.join("; ")))})),e.length>0?{valid:!1,message:e.join(", ")}:{valid:!0}}},{key:"processarCadeia",value:function(t){var e=this,a=new Set([this.estadoInicial]);a=this.calcularEclose(a);var n,o=Object(O["a"])(t.split(""));try{for(o.s();!(n=o.n()).done;){var s=n.value;try{a=this.realizarTransicao(a,s)}catch(i){break}}}catch(r){o.e(r)}finally{o.f()}return Array.from(a).some((function(t){return e.estadosFinais.has(t)}))}},{key:"converterParaDeterministico",value:function(){var t=this,e=new S,a=new Map,n=[],o=this.calcularEclose(new Set([this.estadoInicial]));a.set(o,!1);do{a.forEach((function(e,o){e||(t.alfabeto.forEach((function(e){try{var s=t.realizarTransicao(o,e);n.push([o,e,s]),Array.from(a.keys()).some((function(t){return Object(w["isEqual"])(t,s)}))||a.set(s,!1)}catch(i){}})),a.set(o,!0))}))}while(Object(k["a"])(a.values()).some((function(t){return!1===t})));var s=Object(k["a"])(a.keys()).filter((function(e){return Object(k["a"])(t.estadosFinais).some((function(t){return e.has(t)}))})),i=function(t){return Object(k["a"])(t).reduce((function(t,e){return t+e}),"")};e.alfabeto=new Set(Object(k["a"])(this.alfabeto)),e.estados=new Set(Object(k["a"])(a.keys()).map((function(t){return i(t)}))),e.estadoInicial=i(o),e.estadosFinais=new Set(s.map((function(t){return i(t)})));var r=n.map((function(t){return[i(t[0]),t[1],i(t[2])]}));return e.transicoes=r,e}},{key:"calcularEclose",value:function(t){var e;do{e=new Set(t),t=this.transicoes.filter((function(e){return t.has(e[0])&&e[1]==E.EPSILON})).map((function(t){return t[2]})).reduce((function(t,e){return new Set([].concat(Object(k["a"])(t),Object(k["a"])(e)))}),t)}while(!Object(w["isEqual"])(e,t));return t}},{key:"realizarTransicao",value:function(t,e){Object(k["a"])(t);var a=this.transicoes.filter((function(a){return t.has(a[0])&&a[1]==e}));if(!a)throw new Error("Transicao Inválida");return t=a.map((function(t){return t[2]})).reduce((function(t,e){return new Set([].concat(Object(k["a"])(t),Object(k["a"])(e)))}),new Set),t=this.calcularEclose(t),t}}]),a}(E),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-field",{attrs:{label:"Transições",type:t.automato.validarTransicoes().valid?"is-success":"is-danger",message:t.automato.validarTransicoes().message}},[a("table",{staticClass:"table"},[a("thead",[a("b-button",{attrs:{type:t.disabled||0!==t.automato.transicoes.length?"":"is-warning",disabled:t.disabled},on:{click:function(e){return t.adicionarTransicao()}}},[t._v("Adicionar Transição")]),0===t.automato.transicoes.length?a("p",{staticClass:"help"},[t._v("Adicione as transições do autômato")]):t._e()],1),a("tr",[a("th",[t._v("Estado de Origem")]),a("th",[t._v("Elemento")]),a("th",[t._v(t._s(t.multiplosDestinos?"Estados de Destino":"Estado de Destino"))]),a("th",[t._v("Ações")])]),t._l(t.automato.transicoes,(function(e){return a("tr",{key:e[0]+e[1]},[a("td",[a("b-select",{attrs:{disabled:t.disabled},model:{value:e[0],callback:function(a){t.$set(e,0,a)},expression:"t[0]"}},t._l(t.estados,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)],1),a("td",[a("b-select",{attrs:{disabled:t.disabled},model:{value:e[1],callback:function(a){t.$set(e,1,a)},expression:"t[1]"}},t._l(t.alfabeto,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)],1),a("td",["string"===typeof e[2]?a("b-select",{attrs:{disabled:t.disabled},model:{value:e[2],callback:function(a){t.$set(e,2,a)},expression:"t[2]"}},t._l(t.estados,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0):t._e(),"string"!==typeof e[2]?a("b-taginput",{attrs:{multiple:"",value:Array.from(e[2]||[]),data:t.estados,autocomplete:"","allow-new":!1,"open-on-focus":!0,disabled:0===t.estados.length},on:{input:function(a){t.atualizarEstadosDestino(a,e)}}}):t._e()],1),a("td",[a("b-button",{on:{click:function(){return t.automato.transicoes=t.automato.transicoes.filter((function(t){return t!==e}))}}},[t._v("Remover")])],1)])}))],2)])],1)},F=[],I=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(y["a"])(a,[{key:"adicionarTransicao",value:function(){this.multiplosDestinos?this.automato.transicoes.push(["","",""]):this.automato.transicoes.push(["","",new Set])}},{key:"atualizarEstadosDestino",value:function(t,e){u["c"].set(e,2,t)}},{key:"log",value:function(t){console.log(new Set(t))}},{key:"disabled",get:function(){return 0===this.automato.estados.size||0===this.automato.alfabeto.size}},{key:"multiplosDestinos",get:function(){return!!this.automato}},{key:"estados",get:function(){return Object(k["a"])(this.automato.estados)}},{key:"alfabeto",get:function(){return Object(k["a"])(this.automato.alfabeto)}}]),a}(u["c"]);Object(l["a"])([Object(u["b"])({required:!0})],I.prototype,"automato",void 0),I=Object(l["a"])([u["a"]],I);var q=I,x=q,T=Object(m["a"])(x,A,F,!1,null,null,null),P=T.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-field",{attrs:{label:"Teste de Cadeia",type:t.validacao.type,message:t.validacao.message}},[a("b-input",{attrs:{type:"text","aria-placeholder":"Insira a cadeia para testar o autômato"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)],1)},z=[],$=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.input="",t}return Object(y["a"])(a,[{key:"mounted",value:function(){this.atualizarEntrada()}},{key:"atualizarEntrada",value:function(){this.input=this.value}},{key:"atualizarPai",value:function(){this.$emit("input",this.input)}},{key:"cadeiaValida",get:function(){return this.automato.processarCadeia(this.input)}},{key:"validacao",get:function(){return this.cadeiaValida?{type:"is-success",message:"A cadeia ".concat(this.input," é reconhecida pelo autômato")}:{type:"is-danger",message:"A cadeia ".concat(this.input," não é reconhecida pelo autômato")}}}]),a}(n["a"]);Object(l["a"])([Object(u["b"])({required:!0})],$.prototype,"automato",void 0),Object(l["a"])([Object(u["b"])({required:!1,default:""})],$.prototype,"value",void 0),Object(l["a"])([Object(u["d"])("cadeia")],$.prototype,"atualizarEntrada",null),Object(l["a"])([Object(u["d"])("input")],$.prototype,"atualizarPai",null),$=Object(l["a"])([u["a"]],$);var N=$,M=N,L=Object(m["a"])(M,D,z,!1,null,null,null),Q=L.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"afd"},[a("h2",{staticClass:"subtitle"},[t._v("Autômato Finito Determinístico")]),a("b-field",{attrs:{label:"Alfabeto"}},[a("b-taginput",{attrs:{value:Array.from(t.afd.alfabeto),ellipsis:"",placeholder:"Adicione itens ao alfabeto (separado por vírgulas)"},on:{input:function(e){t.afd.alfabeto=new Set(e)}}})],1),a("b-field",{attrs:{label:"Estados"}},[a("b-taginput",{attrs:{value:Array.from(t.afd.estados),ellipsis:"",placeholder:"Adicione estados (separado por vírgulas)"},on:{input:function(e){t.afd.estados=new Set(e)}}})],1),a("b-field",{attrs:{label:"Estado inicial",type:t.validationClass(t.afd.validarEstadoInicial()),message:t.afd.validarEstadoInicial().message}},[a("b-select",{attrs:{disabled:0===t.afd.estados.size},model:{value:t.afd.estadoInicial,callback:function(e){t.$set(t.afd,"estadoInicial",e)},expression:"afd.estadoInicial"}},t._l(t.afd.estados,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)],1),a("b-field",{attrs:{label:"Estados de aceitação",type:t.validationClass(t.afd.validarEstadosFinais()),message:t.afd.validarEstadosFinais().message}},[a("b-taginput",{attrs:{multiple:"",value:Array.from(t.afd.estadosFinais),data:Array.from(t.afd.estados),autocomplete:"","allow-new":!1,"open-on-focus":!0,disabled:0===t.afd.estados.size},on:{input:function(e){t.afd.estadosFinais=new Set(e)}}})],1),a("Transicoes",{attrs:{automato:t.afd}}),t.afd&&t.afd.validar().valid?a("div",{staticClass:"box"},[a("h6",{staticClass:"subtitle is-6"},[t._v("Autômato Gerado")]),a("p",[t._v("M = (Q, Σ, δ, q0, F)")]),a("p",[t._v("Σ: { "+t._s(t.formatarSet(t.afd.alfabeto))+" }")]),a("p",[t._v("Q: { "+t._s(t.formatarSet(t.afd.estados))+" }")]),a("p",[t._v("q0: "+t._s(t.afd.estadoInicial))]),a("p",[t._v("F: { "+t._s(t.formatarSet(t.afd.estadosFinais))+" }")]),t._v(" δ: { "),a("ul",{staticStyle:{"margin-left":"20px"}},t._l(t.transicoesFormatadas,(function(e){return a("li",{key:e},[t._v(t._s(e))])})),0),t._v("} "),a("TesteCadeia",{attrs:{automato:t.afd},model:{value:t.cadeia,callback:function(e){t.cadeia=e},expression:"cadeia"}}),a("b-button",{on:{click:t.converter}},[t._v("Converter em Autômato Finito Não Determinístico (AFN)")])],1):t._e()],1)},J=[],V=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(y["a"])(a,[{key:"formatarSet",value:function(t){return Array.from(t).join(", ")}},{key:"validationClass",value:function(t){return t.valid?"is-success":"is-danger"}},{key:"converter",value:function(){this.$buefy.modal.open({parent:this,component:Z,props:{afn:this.afd.converterParaNaoDeterministico(),cadeia:this.cadeia}})}},{key:"transicoesFormatadas",get:function(){return this.afd.transicoes.map((function(t){return"".concat(t[0],", ").concat(t[1]," -> ").concat(t[2],"}")}))}}]),a}(u["c"]);Object(l["a"])([Object(u["b"])({required:!1,default:function(){return new S}})],V.prototype,"afd",void 0),Object(l["a"])([Object(u["b"])({required:!1,default:""})],V.prototype,"cadeia",void 0),V=Object(l["a"])([Object(u["a"])({components:{Transicoes:P,TesteCadeia:Q}})],V);var B=V,H=B,R=Object(m["a"])(H,G,J,!1,null,null,null),W=R.exports,K=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(y["a"])(a,[{key:"formatarSet",value:function(t){return Array.from(t).join(", ")}},{key:"validationClass",value:function(t){return t.valid?"is-success":"is-danger"}},{key:"converter",value:function(){this.$buefy.modal.open({parent:this,component:W,props:{afd:this.afn.converterParaDeterministico(),cadeia:this.cadeia}})}},{key:"transicoesFormatadas",get:function(){return this.afn.transicoes.map((function(t){return"".concat(t[0],", ").concat(t[1]," -> {").concat(Array.from(t[2]).join(", "),"}")}))}}]),a}(u["c"]);Object(l["a"])([Object(u["b"])({required:!1,default:function(){return new C({alfabeto:new Set(["0","1"]),estados:new Set(["q0","q1","q2"]),estadoInicial:"q0",estadosFinais:new Set(["q2"]),transicoes:[["q0","0",new Set(["q0"])],["q0","1",new Set(["q0","q1"])],["q1","0",new Set(["q2"])],["q1","1",new Set(["q2"])]]})}})],K.prototype,"afn",void 0),Object(l["a"])([Object(u["b"])({required:!1,default:""})],K.prototype,"cadeia",void 0),K=Object(l["a"])([Object(u["a"])({components:{Transicoes:P,TesteCadeia:Q}})],K);var U=K,X=U,Y=Object(m["a"])(X,_,g,!1,null,null,null),Z=Y.exports,tt=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);tt=Object(l["a"])([Object(u["a"])({components:{HelloWorld:j,AutomatoNaoDeterministico:Z,AutomatoDeterministico:W}})],tt);var et=tt,at=et,nt=Object(m["a"])(at,o,s,!1,null,null,null),ot=nt.exports,st=a("289d");a("944d");n["a"].use(st["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(ot)}}).$mount("#app")}});
//# sourceMappingURL=app.cc74e8fb.js.map