(this.webpackJsonpreducer=this.webpackJsonpreducer||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(9),m=t.n(o),l=(t(16),t(17),t(2)),s=t.n(l),c=t(3),i=t(4),u=t(10),p=t(1),f=t(7),d=function(e,a){return Object(f.a)(Object(f.a)({},e),{},Object(p.a)({},a.field,a.value))},g={required:"Campo requerido"},h={required:"Campo requerido"},E={required:"Campo requerido"},b={required:"Campo requerido"},v={required:"Campo requerido"},C={required:"Campo requerido"},N={username:"",password:"",firstname:"",lastname:"",name:"",cellphone:""},w=function(){var e=Object(r.useReducer)(d,N),a=Object(i.a)(e,2),t=a[0],o=a[1],m=function(e){"firstname"!==e.target.name&&"lastname"!==e.target.name||o({field:"name",value:"firstname"===e.target.name?"".concat(e.target.value," ").concat(t.lastname):"".concat(t.firstname," ").concat(e.target.value)}),"firstname"===e.target.name&&"lastname"===e.target.name||o({field:e.target.name,value:e.target.value})},l=Object(u.a)(),p=l.handleSubmit,f=l.register,w=(l.reset,l.errors),q=function(){var e=Object(c.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"username"},"Nombre usuario"),n.a.createElement("input",{type:"text",name:"username",className:"form-control",onChange:m,ref:f(g)}),w.username&&w.username.message),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),n.a.createElement("input",{type:"password",name:"password",className:"form-control",onChange:m,ref:f(h)}),w.password&&w.password.message),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"firstname"},"Primer Nombre"),n.a.createElement("input",{type:"text",name:"firstname",className:"form-control",onChange:m,ref:f(E),autoComplete:"off"}),w.firstname&&w.firstname.message),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"lastname"},"Primer Apellido"),n.a.createElement("input",{type:"text",name:"lastname",className:"form-control",onChange:m,ref:f(b),autoComplete:"off"}),w.lastname&&w.lastname.message),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Nombre Completo"),n.a.createElement("input",{type:"text",name:"name",className:"form-control",onChange:m,disabled:!0,value:t.name,ref:f(v)}),w.name&&w.lastname.message),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"celphone"},"Tel\xe9fono/Celular"),n.a.createElement("input",{type:"text",name:"cellphone",className:"form-control",onChange:m,ref:f(C)}),w.cellphone&&w.cellphone.message)),n.a.createElement("button",{onClick:p(q),type:"submit",className:"btn btn-primary"},"Guardar"))},q=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.dd115e0a.chunk.js.map