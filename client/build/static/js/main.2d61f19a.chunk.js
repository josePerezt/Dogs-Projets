(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(26),i=n.n(r),s=(n(44),n(4)),o=n(15),l=(n(45),n(1)),j=function(){return Object(l.jsxs)("div",{className:"container-start",children:[Object(l.jsx)("h1",{className:"start-title",children:"THE DOG APP"}),Object(l.jsxs)("h4",{className:"title-dinamita",children:["Bienvenido al mundo de las razas de perros. ",Object(l.jsx)("br",{}),"\xbfListo para explorar y aprender m\xe1s? ",Object(l.jsx)("br",{}),"Toca a Dinamita para adentrarte en esta aventura perruna.",Object(l.jsx)("br",{})]}),Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{to:"/cucha",className:"link-dog",children:"\ud83d\udc36"})})]})},u=(n(47),n.p+"static/media/dog.e7cfa53b.jpg");var b=function(e){var t=e.id,n=e.name,a=e.image,c=e.weight,r=e.temperament;return Object(l.jsxs)("div",{className:"container-card",children:[Object(l.jsx)(o.b,{to:"/detail/".concat(t),children:a?Object(l.jsx)("img",{src:a,alt:n,className:"image"}):Object(l.jsx)("img",{src:u,alt:"imageDefault"})}),Object(l.jsx)("div",{className:"container-title",children:Object(l.jsx)("h2",{className:"title",children:n})}),Object(l.jsxs)("div",{className:"container-p",children:[Object(l.jsxs)("p",{children:["Peso: ",c,Object(l.jsx)("b",{children:"Kg."})]}),Object(l.jsxs)("p",{children:[r||"Happy,Intelligent,Alert","."]})]})]},t)};n(48);var d=function(e){var t=e.handlerClickBack;return e.dogs,e.currentPage,Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn-back",onClick:t,children:"Anterior"})})};n(49);var m=function(e){var t=e.handlerClickNext;return e.dogs,Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn-next",onClick:t,children:"Siguiente"})})},p=(n(50),n(9)),O=n(5),h=n(11),f="DOGS",g="NAME_DOGS",x="DOG_ID",v="GET_TEMPERAMENTS",N="FILTER_DOG_TEMPERAMENT",y="FILTER_BDD",D="ORDER_DOG",w="ORDER_WEIGHT",E="BACK_PAGE",C="NEXT_PAGE",A="NEW_DOG",k=n(72),T=function(){return function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var n,a;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)("http://localhost:3001/dogs");case 2:n=e.sent,a=n.data,t({type:f,payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){return function(){var e=Object(h.a)(Object(O.a)().mark((function e(t){var n,a;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)("http://localhost:3001/temperaments");case 2:n=e.sent,a=n.data,t({type:v,payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(e){return function(t){t({type:N,payload:e})}};var P=function(e){var t=e.Dogsinicio,n=e.currentPage,a=e.numberOfDogs,c=Object(p.b)(),r=(n-1)*a,i=r+a,s=t.slice(r,i);return Object(l.jsxs)("div",{className:"container-dogs",children:[Object(l.jsx)("div",{className:"container-cards",children:s.map((function(e){var t=e.id,n=e.name,a=e.image,c=e.weight,r=e.temperament;return Object(l.jsx)(b,{name:n,image:a,weight:c,temperament:r,id:t},t)}))}),Object(l.jsxs)("div",{className:"container-btn",children:[1===n?null:Object(l.jsx)(d,{handlerClickBack:function(){c((function(e){e({type:E})})),window.scrollTo(0,0)},dogs:s,currentPage:n}),s.length<8?null:Object(l.jsx)("p",{className:"number-page",children:n}),s.length<8?null:Object(l.jsx)(m,{handlerClickNext:function(){c((function(e){e({type:C})})),window.scrollTo(0,0)},dogs:s})]})]})},I=n(12),M=n(6);n(58);var S=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.allTemperaments})),n=Object(p.c)((function(e){return e.selectedTemperaments})),c=Object(a.useState)([]),r=Object(M.a)(c,2),i=r[0],s=r[1],o=Object(a.useState)([]),j=Object(M.a)(o,2),u=j[0],b=j[1];Object(a.useEffect)((function(){s(t)}),[t]),Object(a.useEffect)((function(){b(n)}),[n]);var d=function(t){t.preventDefault();var n={id:t.target.id,name:t.target.value},a=u.filter((function(e){return parseInt(e.id)!==parseInt(n.id)})),c=[].concat(Object(I.a)(i),[n]);s(c.sort((function(e,t){return e.id-t.id}))),b(a),e(_(a))};return Object(l.jsxs)("div",{className:"container-select",children:[Object(l.jsx)("label",{className:"title-temperament",children:"Temperamentos: "}),Object(l.jsxs)("select",{className:"select-temperament",onChange:function(t){var n=t.target.selectedIndex,a=t.target.options[n].id,c={id:a,name:t.target.value},r=i.filter((function(e){return parseInt(e.id)!==parseInt(a)})),o=[].concat(Object(I.a)(u),[c]);s(r),b(o),e(_(o))},children:[Object(l.jsx)("option",{value:"",className:"option-temperament",children:"Todos"},""),i.map((function(e){return Object(l.jsx)("option",{id:e.id,value:e.name,className:"option-temperament",children:e.name},e.id)}))]},"hgkjgh"),Object(l.jsx)("div",{children:null===u||void 0===u?void 0:u.map((function(e){return Object(l.jsx)("button",{id:e.id,value:e.name,onClick:d,className:"btn-select-temp",children:e.name},e.id)}))})]})};n(59);var L=function(){var e=Object(p.b)();return Object(l.jsxs)("div",{className:"container-select-orden",children:[Object(l.jsx)("label",{className:"title-orden",children:"Orden: "}),Object(l.jsxs)("select",{onChange:function(t){var n;e((n=t.target.value,function(e){e({type:D,payload:n})}))},className:"select",children:[Object(l.jsx)("option",{value:"A - Z",className:"option-orden",children:"A - Z"},"A - Z"),Object(l.jsx)("option",{value:"Z - A",className:"option-orden",children:"Z - A"},"Z - A")]})]})};n(60),n(61);var G=function(){var e=Object(p.b)();return Object(l.jsxs)("div",{className:"container-select-orden-weight",children:[Object(l.jsx)("label",{className:"title-orden-weight",children:"Peso: "}),Object(l.jsxs)("select",{name:"Peso",onChange:function(t){var n;e((n=t.target.value,function(e){e({type:w,payload:n})}))},className:"select-orden-weight",children:[Object(l.jsx)("option",{value:"Menor-Mayor",className:"option-orden-weight",children:"Menor-Mayor"}),Object(l.jsx)("option",{value:"Mayor-Menor",className:"option-orden-weight",children:"Mayor-Menor"})]})]})};n(62);var B=function(){var e=Object(p.b)();return Object(l.jsxs)("label",{className:"rocker rocker-small",children:[Object(l.jsx)("input",{type:"checkbox",onChange:function(t){var n;console.log(t.target.checked),e((n=t.target.checked,function(e){e({type:y,payload:n})}))}}),Object(l.jsx)("span",{className:"switch-left",children:"BDD"}),Object(l.jsx)("span",{className:"switch-right",children:"API"})]})};n(63);var F=function(){return Object(l.jsxs)("div",{className:"container-loader",children:[Object(l.jsx)("h4",{className:"title-cargando",children:"CARGANDO..."}),Object(l.jsx)("div",{className:"spiner"})]})};var W=function(){var e=Object(p.c)((function(e){return e})),t=e.Dogsinicio,n=e.selectedTemperaments,a=e.currentPage,c=e.numberOfDogs;return 0===t.length&&n.length>0?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"home-filtros",children:[Object(l.jsx)(S,{selectedTemperaments:n}),Object(l.jsx)(L,{}),Object(l.jsx)(G,{}),Object(l.jsx)(B,{})]}),Object(l.jsx)("p",{className:"warning",children:"No existen Perros con dichos temperamentos"}),";"]}):Object(l.jsx)("div",{className:"container-home",children:t.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"home-filtros",children:[Object(l.jsx)(S,{selectedTemperaments:n}),Object(l.jsx)(L,{}),Object(l.jsx)(G,{}),Object(l.jsx)(B,{})]}),Object(l.jsx)("div",{className:"home-cards",children:Object(l.jsx)(P,{Dogsinicio:t,currentPage:a,numberOfDogs:c})})]}):Object(l.jsx)(F,{})})};n(64);var Z=function(){var e=Object(p.b)(),t=Object(a.useState)(""),n=Object(M.a)(t,2),c=n[0],r=n[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",placeholder:"ingresa la raza",onChange:function(e){e.preventDefault(),r(e.target.value)},value:c,className:"input"}),Object(l.jsx)("button",{disabled:!c,type:"submit",onClick:function(){var t;e((t=c,function(){var e=Object(h.a)(Object(O.a)().mark((function e(n){var a,c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k.a)("http://localhost:3001/dogs/name?name=".concat(t));case 3:a=e.sent,c=a.data,n({type:g,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status?alert("Nose se encontro la raza, puedes crearla en la seccion de 'CREAR PERRO'"):alert("Ocurrio un error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),r("")},className:"btn",children:"Buscar"}),Object(l.jsx)("button",{className:"btn",onClick:function(){e(T())},children:"Todos"})]})};n(65);var U=function(e){var t=e.onSearch;return Object(l.jsxs)("div",{className:"container-link",children:[Object(l.jsx)("p",{className:"p-link",children:Object(l.jsx)(o.c,{to:"/",className:"link",style:function(e){return e.isActive?{backgroundColor:"rgba(74, 7, 136, 0.3)",padding:"10px",border:"thin solid transparent",borderRadius:"40px",textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold",color:"#fff"}:{fontFamily:"sans-serif",textDecoration:"none",fontWeight:"bold",color:"#fff"}},children:"INICIO"})}),Object(l.jsx)("p",{className:"p-link",children:Object(l.jsx)(o.c,{to:"cucha",className:"link",style:function(e){return e.isActive?{backgroundColor:"rgba(74, 7, 136, 0.3)",padding:"10px",border:"thin solid transparent",borderRadius:"40px",textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold",color:"#fff"}:{fontFamily:"sans-serif",textDecoration:"none",fontWeight:"bold",color:"#fff"}},children:"CUCHA"})}),Object(l.jsx)("p",{className:"p-link",children:Object(l.jsx)(o.c,{to:"/crear-perro",className:"link",style:function(e){return e.isActive?{backgroundColor:"rgba(74, 7, 136, 0.3)",padding:"10px",border:"thin solid transparent",borderRadius:"40px",textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold",color:"#fff"}:{fontFamily:"sans-serif",textDecoration:"none",fontWeight:"bold",color:"#fff"}},children:"CREAR PERRO"})}),Object(l.jsx)("p",{children:Object(l.jsx)(o.c,{className:"link",to:"/detail",style:function(e){return e.isActive?{backgroundColor:"rgba(74, 7, 136, 0.3)",padding:"10px",border:"thin solid transparent",borderRadius:"40px",textDecoration:"none",fontFamily:"sans-serif",fontWeight:"bold",color:"#fff"}:{fontFamily:"sans-serif",textDecoration:"none",fontWeight:"bold",color:"#fff"}},children:"DETALLE"})}),Object(l.jsx)("div",{children:Object(l.jsx)(Z,{onSearch:t})})]})},z=n(10),H=n(7),K=(n(66),function(e,t){var n=e.name.toLowerCase(),a=t.name.toLowerCase();return n<a?-1:n>a?1:0}),X=/^[a-zA-Z\s]*$/,$=/^.{3,18}$/,q=/^(ftp|http|https):\/\/[^ "]+$/,J=/^\d+-\d+$/,V=function(e){var t={};if($.test(e.name)||(t.name="El nombre de la raza debe tener entre 3 y 18 caracteres"),e.name||(t.name="Campo obligatorio"),X.test(e.name)||(t.name="El nombre NO debe tener caracteres especiales ni numeros ejemp: (1,2,3*,/,%,/,!,&) "),q.test(e.image)||(t.image="Debe ser un Url ejemp: http://www.ejemplo.com"),e.image||(t.image="Campo obligatorio"),J.test(e.height)||(t.height="Deben contener min-max"),e.height){var n=e.height.split("-");Number(n[0])>n[1]?t.height="La altura Min debe ser menor que la Max":Number(n[0])===n[1]&&(t.height="Ambos valores son iguales, debe contener un min y un max")}if(e.height||(t.height="Campo obligatorio"),J.test(e.weight)||(t.weight="Deben contener min - max ejemp: 100-120"),e.weight){var a=e.weight.split("-");Number(a[0])>a[1]?t.weight="El peso Min debe ser menor que la Max":Number(a[0])===a[1]&&(t.weight="Ambos valores son iguales, debe contener un min y un max")}if(e.weight||(t.weight="Campo obligatorio"),J.test(e.life_span)||(t.life_span="Deben contener min - max ejemp: 0-5"),e.life_span){var c=e.life_span.split("-");Number(c[0])>c[1]?t.life_span="La edad Min debe ser menor que la Max":Number(c[0])===c[1]&&(t.life_span="Ambos valores son iguales, debe contener un min y un max")}return e.life_span||(t.life_span="Campo obligatorio"),$.test(e.origin)||(t.origin="El Origen debe tener entre 3 y 18 caracteres"),e.origin||(t.origin="Campo obligatorio"),t};var Q=function(){var e=Object(p.c)((function(e){return e.allTemperaments})),t=Object(a.useState)([]),n=Object(M.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),s=Object(M.a)(i,2),o=s[0],j=s[1],u=Object(p.b)(),b=Object(a.useState)({name:"",image:"",height:"",weight:"",life_span:"",temperament:[],origin:""}),d=Object(M.a)(b,2),m=d[0],f=d[1],g=Object(a.useState)({name:"",image:"",height:"",weight:"",life_span:"",temperament:[],origin:""}),x=Object(M.a)(g,2),v=x[0],N=x[1];Object(a.useEffect)((function(){r(e.sort(K))}),[e]),Object(a.useEffect)((function(){u(R())}),[u]);var y=function(e){f(Object(H.a)(Object(H.a)({},m),{},Object(z.a)({},e.target.name,e.target.value))),N(V(Object(H.a)(Object(H.a)({},m),{},Object(z.a)({},e.target.name,e.target.value))))},D=function(e){e.preventDefault(),r(c.filter((function(t){return parseInt(t.id)!==parseInt(e.target.value)})));var t={id:e.target.value,name:e.target.name};f(Object(H.a)(Object(H.a)({},m),{},{temperament:[].concat(Object(I.a)(m.temperament),[t])}))},w=function(e){e.preventDefault();var t={id:e.target.value,name:e.target.name},n=m.temperament.filter((function(t){return parseInt(t.id)!==parseInt(e.target.value)}));f(Object(H.a)(Object(H.a)({},m),{},{temperament:n})),r([].concat(Object(I.a)(c),[t]).sort(K))},E=!Object.values(m).every((function(e){return""!==e&&e!==[]}));return Object(l.jsxs)("form",{className:"container-form",children:[Object(l.jsxs)("div",{className:"container-input-form",children:[Object(l.jsxs)("div",{className:"container-input",children:[Object(l.jsx)("input",{type:"text",name:"name",value:m.name,onChange:y,className:"input-create",placeholder:"Nombre",autoComplete:"off"}),v.name?Object(l.jsxs)("p",{children:["\u274c",v.name]}):null]}),Object(l.jsxs)("div",{className:"container-input",children:[Object(l.jsx)("input",{type:"text",name:"image",value:m.image,onChange:y,className:"input-create",placeholder:"Ingresa URL",autoComplete:"off"}),v.image?Object(l.jsxs)("p",{children:["\u274c",v.image]}):null]}),Object(l.jsxs)("div",{className:"container-input",children:[Object(l.jsx)("input",{type:"text",name:"height",value:m.height,onChange:y,className:"input-create",placeholder:"Altura: min-max",autoComplete:"off"}),v.height?Object(l.jsxs)("p",{children:["\u274c",v.height]}):null]}),Object(l.jsxs)("div",{className:"container-input",children:[Object(l.jsx)("input",{type:"text",name:"weight",value:m.weight,onChange:y,className:"input-create",placeholder:"Peso: min-max",autoComplete:"off"}),v.weight?Object(l.jsxs)("p",{children:["\u274c",v.weight]}):null]}),Object(l.jsxs)("div",{className:"container-input",children:[Object(l.jsx)("input",{type:"text",name:"life_span",value:m.life_span,onChange:y,className:"input-create",placeholder:"A\xf1os de Vida: min-max",autoComplete:"off"}),v.life_span?Object(l.jsxs)("p",{children:["\u274c",v.life_span]}):null]}),Object(l.jsxs)("div",{className:"container-input",children:[Object(l.jsx)("input",{type:"text",name:"origin",value:m.origin,onChange:y,className:"input-create",placeholder:"Origen: pais",autoComplete:"off"}),v.origin?Object(l.jsxs)("p",{children:["\u274c",v.origin]}):null]})]}),Object(l.jsx)("h5",{children:" ELIJE LOS TEMPERAMENTOS DE TU PERRO:"}),Object(l.jsx)("div",{className:"container-temperaments",children:c.map((function(e){return Object(l.jsx)("button",{value:e.id,name:e.name,className:"btn-temperaments",onClick:D,children:e.name},e.id)}))}),Object(l.jsx)("div",{className:"containerNewDog",children:m.temperament.map((function(e){return Object(l.jsx)("button",{value:e.id,name:e.name,className:"btn-temperament-newDog",onClick:w,children:e.name},e.id)}))}),Object(l.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),u(function(e){return function(){var t=Object(h.a)(Object(O.a)().mark((function t(n){var a,c;return Object(O.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post("http://localhost:3001/dogs",e);case 2:a=t.sent,c=a.data,n({type:A,payload:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(m)),j(!0),f({name:"",image:"",height:"",weight:"",life_span:"",temperament:[],origin:""}),u(T())},className:"btn-submit",disabled:E,children:o?"CREADO CON EXITO!":"CREAR PERRO"})]})};n(67);var Y=function(){var e=Object(s.p)().detailId,t=Object(p.c)((function(e){return e.idDog})),n=Object(p.b)();Object(a.useEffect)((function(){var t;n((t=e,function(){var e=Object(h.a)(Object(O.a)().mark((function e(n){var a,c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)("http://localhost:3001/dogs/".concat(t));case 2:a=e.sent,c=a.data,n({type:x,payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[n,e]);var c=t.name,r=t.image,i=t.weight,j=t.height,b=t.life_span,d=t.temperament,m=t.origin;return Object(l.jsxs)("div",{className:"container-detail",children:[Object(l.jsxs)("div",{className:"container-text-detail",children:[Object(l.jsx)("h1",{className:"title-detail",children:c}),Object(l.jsxs)("p",{children:["PESO: ",i," Kg."]}),Object(l.jsxs)("p",{children:["ALTURA: ",j," cm."]}),Object(l.jsxs)("p",{children:["A\xd1OS DE VIDA: ",b]}),Object(l.jsxs)("p",{className:"temperaments",children:["TEMPERAMENTOS:",d||"Happy, Intelligent, Alert"]}),Object(l.jsxs)("p",{children:["ORIGEN: ",m]})]}),Object(l.jsx)("div",{className:"container-image",children:r?Object(l.jsx)("img",{src:r,alt:c,className:"image"}):Object(l.jsx)("img",{src:u,alt:"imageDefault"})}),Object(l.jsx)("div",{className:"container-btn-detail",children:Object(l.jsx)(o.b,{to:"/cucha",className:"btn-detail",children:"BACK"})})]})};n(68);var ee=function(){var e=Object(p.b)(),t=Object(s.l)();return Object(a.useEffect)((function(){e(T()),e(R())}),[e]),Object(l.jsxs)("div",{className:"App",children:["/"!==t.pathname&&Object(l.jsx)(U,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/",element:Object(l.jsx)(j,{})}),Object(l.jsx)(s.a,{path:"detail",element:Object(l.jsx)(Y,{})}),Object(l.jsx)(s.a,{path:"detail/:detailId",element:Object(l.jsx)(Y,{})}),Object(l.jsx)(s.a,{path:"Cucha",element:Object(l.jsx)(W,{})}),Object(l.jsx)(s.a,{path:"crear-perro",element:Object(l.jsx)(Q,{})})]})]})},te=n(34),ne=n(39),ae={allTemperaments:[],selectedTemperaments:[],Dogsinicio:[],AllDogs:[],idDog:{},currentPage:1,numberOfDogs:8},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(H.a)(Object(H.a)({},e),{},{Dogsinicio:t.payload,AllDogs:t.payload});case g:return Object(H.a)(Object(H.a)({},e),{},{Dogsinicio:t.payload,currentPage:1});case x:return Object(H.a)(Object(H.a)({},e),{},{idDog:t.payload});case v:return Object(H.a)(Object(H.a)({},e),{},{allTemperaments:t.payload});case N:if("Todos"===t.payload)return Object(H.a)(Object(H.a)({},e),{},{Dogsinicio:e.AllDogs});var n=e.AllDogs.filter((function(e){var n=!!e.temperament&&e.temperament.split(", ");return!1!==n&&(!!t.payload.map((function(e){return e.name})).every((function(e){return n.includes(e)}))&&e)}));return Object(H.a)(Object(H.a)({},e),{},{Dogsinicio:n,selectedTemperaments:t.payload,currentPage:1});case y:var a=e.AllDogs.filter((function(e){return!0===e.createBD})),c=e.AllDogs.filter((function(e){return!0!==e.createBD}));return Object(H.a)(Object(H.a)({},e),{},{Dogsinicio:t.payload?a:c,currentPage:1});case D:var r=Object(I.a)(e.Dogsinicio).sort((function(e,n){var a=e.name.toLowerCase(),c=n.name.toLowerCase();return"A - Z"===t.payload?a<c?-1:a>c?1:0:a>c?-1:a<c?1:0}));return Object(H.a)(Object(H.a)({},e),{},{Dogsinicio:r});case w:var i=Object(I.a)(e.Dogsinicio).sort((function(e,n){var a=parseInt(e.weight.split("-")[0]),c=parseInt(n.weight.split("-")[0]),r=parseInt(e.weight.split("-")[1]),i=parseInt(n.weight.split("-")[1]);if("Menor-Mayor"===t.payload){if(a<c)return-1;if(a>c)return 1;if(a===c)return r-i}else{if(a>c)return-1;if(a<c)return 1;if(a===c)return i-r}return 0}));return Object(H.a)(Object(H.a)({},e),{},{Dogsinicio:i});case E:return Object(H.a)(Object(H.a)({},e),{},{currentPage:e.currentPage-1});case C:return Object(H.a)(Object(H.a)({},e),{},{currentPage:e.currentPage+1});case A:return Object(H.a)(Object(H.a)({},e),{},{Dogsinicio:Object(I.a)(e.Dogsinicio)});default:return Object(H.a)({},e)}},re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.b,ie=Object(te.c)(ce,re(Object(te.a)(ne.a)));i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p.a,{store:ie,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(ee,{})})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.2d61f19a.chunk.js.map