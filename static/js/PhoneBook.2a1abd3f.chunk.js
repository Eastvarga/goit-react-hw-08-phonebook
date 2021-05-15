(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{84:function(t,e,n){t.exports={form:"styles_form__2RMpJ",nameStyle:"styles_nameStyle__A6RGD",input:"styles_input__3sqyF",tel:"styles_tel__mWTIz",button:"styles_button__1LgFg"}},85:function(t,e,n){t.exports={list:"styles_list__Ed8dW",item:"styles_item__1VrrF",text:"styles_text__4dhtN",button:"styles_button__ndG1x"}},86:function(t,e,n){t.exports={filterstyle:"styles_filterstyle__3YK8X",title:"styles_title__25ZWz"}},87:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var r=n(22),a=n(3);function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l(this,n)}}var b=n(0),m=n(11),d=n(30),p=function(t){return t.contacts.items},h=function(t){return t.contacts.filter},y={getLoadingContacts:function(t){return t.contacts.loading},getError:function(t){return t.contacts.error},getContactsItems:p,getFilter:h,getVisibleContacts:Object(d.a)([p,h],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},j=n(20),g=n.n(j),v=n(25),C=n(23),O=n.n(C),_=n(17);O.a.defaults.baseURL="https://connections-api.herokuapp.com/";var x=_.a.addContactRequest,w=_.a.addContactSuccess,N=_.a.addContactError,S=_.a.deleteContactRequest,A=_.a.deleteContactSuccess,k=_.a.deleteContactError,R=_.a.fetchContactRequest,E=_.a.fetchContactSuccess,z=_.a.fetchContactError,L=function(t){var e=t.name,n=t.number;return function(t){var r={name:e,number:n,complited:!1};t(x()),O.a.post("/contacts",r).then((function(e){var n=e.data;return t(w(n))})).catch((function(e){return t(N(e.message))}))}},F=function(t){return function(){var e=Object(v.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(S());try{O.a.delete("/contacts/".concat(t)),n(A(t))}catch(r){n(k(r.message))}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){return function(){var t=Object(v.a)(g.a.mark((function t(e){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(R()),t.prev=1,t.next=4,O.a.get("/contacts");case 4:n=t.sent,r=n.data,e(E(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(z(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},D=n(84),P=n(2),Z={name:"",number:""},J=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(l,t);var e,n,i,u=f(l);function l(){var t;c(this,l);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=u.call.apply(u,[this].concat(n))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,r=n.name,c=n.value;t.setState(Object(a.a)({},r,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;if(t.props.items.some((function(t){return t.name===n})))return window.alert("".concat(n," is already in contacts")),void t.reset();t.props.onAddContact(t.state),t.reset()},t.reset=function(){t.setState((function(){return Object(r.a)({},Z)}))},t}return e=l,(n=[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(P.jsxs)("form",{className:D.form,onSubmit:this.handleSubmit,children:[Object(P.jsxs)("label",{className:D.nameStyle,children:["Name",Object(P.jsx)("input",{className:D.input,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(P.jsxs)("label",{className:D.nameStyle,children:["\ud83d\udcde",Object(P.jsx)("input",{className:D.tel,type:"tel",name:"number",value:n,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(P.jsx)("button",{className:D.button,type:"submit",children:"Add to contacts"})]})}}])&&o(e.prototype,n),i&&o(e,i),l}(b.Component),T=Object(m.b)((function(t){return{items:y.getContactsItems(t)}}),(function(t){return{onAddContact:function(e){var n=e.name,r=e.number;return t(L({name:n,number:r}))}}}))(J),I=n(85);var M=Object(m.b)((function(t){return{items:y.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(F(e.target.id))},fetchContacts:function(){return t(q())}}}))((function(t){var e=t.onDeleteContact,n=t.fetchContacts,r=t.items;return Object(b.useEffect)((function(){return n()}),[]),Object(P.jsx)("ul",{className:I.list,children:r.length>0&&r.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(P.jsxs)("li",{className:I.item,children:[Object(P.jsxs)("span",{className:I.text,children:[r,":"]}),Object(P.jsx)("span",{className:I.text,children:a}),Object(P.jsx)("button",{className:I.button,id:n,type:"button",onClick:e,children:"Delete"})]},n)}))})})),V=n(86);var W=Object(m.b)((function(t){return{filter:y.getFilter(t)}}),(function(t){return{onFilterChange:function(e){return t(_.a.filterChange(e.currentTarget.value))}}}))((function(t){var e=t.onFilterChange,n=t.filter;return Object(P.jsxs)("label",{className:V.title,children:["Find contacts by name:",Object(P.jsx)("input",{className:V.filterstyle,type:"text",name:"filter",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e})]})}));n(87);e.default=Object(m.b)((function(t){return{isLoadingContacts:y.getLoadingContacts(t),errorContacts:y.getError(t)}}))((function(t){var e=t.isLoadingContacts,n=t.errorContacts;return Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("h1",{className:"main_title",children:"Phonebook"}),Object(P.jsx)(T,{}),Object(P.jsx)("h2",{className:"sub_title",children:"Contacts"}),e&&Object(P.jsx)("h1",{children:"Loading..."}),n&&Object(P.jsxs)("div",{className:"error",children:[Object(P.jsx)("h1",{children:"Error"}),Object(P.jsx)("p",{children:n})]}),Object(P.jsx)(W,{}),Object(P.jsx)(M,{})]})}))}}]);
//# sourceMappingURL=PhoneBook.2a1abd3f.chunk.js.map