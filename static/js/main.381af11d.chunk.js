(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{51:function(t,e,n){},52:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var c=n(1),a=(n(41),n(19)),r=n.n(a),s=n(15),o=n(26),i=n(33),u=n(38),l=n(14),p=n(39),j=n(34),b=n.n(j),O=n(4),d="GET_CONTACT",m="GET_CONTACT_SUCCESS",h="GET_CONTACT_ERROR",x="ADD_CONTACT",f="REMOVE_CONTACT",v="CLEAR_CONTACT",C="CLEAR_CONTACT_SUCCESS",T="UPDATE_CONTACT_SUCCESS",N="UPDATE_CONTACT_ERROR";function g(t){return{type:h,error:t}}function A(t){return{type:T,payload:t}}var S={contacts:[],contactTotal:0};var E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(O.a)({},t);case T:case C:return Object(O.a)(Object(O.a)(Object(O.a)({},t),{contacts:e.payload.contacts}),{contactTotal:e.payload.contactTotal});case h:case N:return Object(O.a)(Object(O.a)({},t),{error:e.error});default:return t}},y="GET_APPOINTMENT",P="GET_APPOINTMENT_SUCCESS",k="GET_APPOINTMENT_ERROR",w="ADD_APPOINTMENT",_="REMOVE_APPOINTMENT",R="CLEAR_APPOINTMENT",I="CLEAR_APPOINTMENT_SUCCESS",D="UPDATE_APPOINTMENT_SUCCESS",J="UPDATE_APPOINTMENT_ERROR";function M(t){return{type:k,error:t}}function U(t){return{type:D,payload:t}}var G={appointments:[],appointmentTotal:0};var L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P:return Object(O.a)({},t);case D:case I:return Object(O.a)(Object(O.a)(Object(O.a)({},t),{appointments:e.payload.appointments}),{appointmentTotal:e.payload.appointmentTotal});case k:case J:return Object(O.a)(Object(O.a)({},t),{error:e.error});default:return t}},V=Object(l.b)({contact:E,appointment:L}),X=n(8),q=n.n(X),B=n(5),F=q.a.mark(W),z=q.a.mark(Y),H=q.a.mark(Z),K=q.a.mark($),Q=q.a.mark(tt);function W(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(B.b)({type:m});case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),t.next=9,Object(B.b)(g(t.t0));case 9:case"end":return t.stop()}}),F,null,[[0,5]])}function Y(t){var e,n,c;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=t.contact,n=JSON.parse(localStorage.getItem("persist:Appointments")).contact,(c=JSON.parse(n)).contacts.push(e),c.contactTotal++,a.next=8,Object(B.b)(A(c));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(B.b)(g(a.t0));case 14:case"end":return a.stop()}}),z,null,[[0,10]])}function Z(t){var e,n,c;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=t.contact,n=JSON.parse(JSON.parse(localStorage.getItem("persist:Appointments")).contact),c=n.contacts.findIndex((function(t){return t.id===e.id})),n.contactTotal=n.contactTotal-1,n.contacts.splice(c,1),0===n.contacts.length&&(n.contacts=[],n.contactTotal=0),a.next=9,Object(B.b)(A(n));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(B.b)(g(a.t0));case 15:case"end":return a.stop()}}),H,null,[[0,11]])}function $(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={contacts:[],contactTotal:0},e.next=4,Object(B.b)(A(t));case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,Object(B.b)((n=e.t0,{type:N,payload:n}));case 10:case"end":return e.stop()}var n}),K,null,[[0,6]])}function tt(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(B.a)([Object(B.c)(d,W)]);case 2:return t.next=4,Object(B.a)([Object(B.c)(x,Y)]);case 4:return t.next=6,Object(B.a)([Object(B.c)(f,Z)]);case 6:return t.next=8,Object(B.a)([Object(B.c)(v,$)]);case 8:return t.next=10,Object(B.a)([Object(B.c)(C,$)]);case 10:case"end":return t.stop()}}),Q)}var et=q.a.mark(st),nt=q.a.mark(ot),ct=q.a.mark(it),at=q.a.mark(ut),rt=q.a.mark(lt);function st(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(B.b)({type:P});case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),t.next=9,Object(B.b)(M(t.t0));case 9:case"end":return t.stop()}}),et,null,[[0,5]])}function ot(t){var e,n,c,a,r;return q.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,e=t.appointment,n=JSON.parse(localStorage.getItem("persist:Appointments")).appointment,c=JSON.parse(n),a=JSON.parse(JSON.parse(localStorage.getItem("persist:Appointments")).contact),r=a.contacts.find((function(t){return t.id==parseInt(e.contact)})),e.contact=r,c.appointments.push(e),c.appointmentTotal++,s.next=11,Object(B.b)(U(c));case 11:s.next=17;break;case 13:return s.prev=13,s.t0=s.catch(0),s.next=17,Object(B.b)(M(s.t0));case 17:case"end":return s.stop()}}),nt,null,[[0,13]])}function it(t){var e,n,c;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=t.appointment,n=JSON.parse(JSON.parse(localStorage.getItem("persist:Appointments")).appointment),c=n.appointments.findIndex((function(t){return t.id===e.id})),n.appointTotal=n.appointTotal-1,n.appointments.splice(c,1),0===n.appointments.length&&(n.appointments=[],n.appointTotal=0),a.next=9,Object(B.b)(U(n));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(B.b)(M(a.t0));case 15:case"end":return a.stop()}}),ct,null,[[0,11]])}function ut(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={appointments:[],appointmentTotal:0},e.next=4,Object(B.b)(U(t));case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,Object(B.b)((n=e.t0,{type:J,payload:n}));case 10:case"end":return e.stop()}var n}),at,null,[[0,6]])}function lt(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(B.a)([Object(B.c)(y,st)]);case 2:return t.next=4,Object(B.a)([Object(B.c)(w,ot)]);case 4:return t.next=6,Object(B.a)([Object(B.c)(_,it)]);case 6:return t.next=8,Object(B.a)([Object(B.c)(R,ut)]);case 8:case"end":return t.stop()}}),rt)}var pt=q.a.mark(jt);function jt(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(B.a)([tt(),lt()]);case 2:case"end":return t.stop()}}),pt)}var bt={key:"Appointments",storage:b.a,whitelist:["contact","appointment"]},Ot=Object(o.a)(bt,V);var dt=function(t){var e,n=Object(p.a)(),c=Object(l.d)(Ot,t,(e=[n],l.a.apply(void 0,Object(u.a)(e))));return c.sagaTask=n.run(jt),c},mt=n(22),ht=n(9),xt=(n(51),n(18)),ft=n(16),vt=n(63),Ct=(n(52),n(2)),Tt=function(t){var e=t.appointment,n=t.removeAppointment,c=e.contact,a=(c.name,c.email);c.phone;return Object(Ct.jsxs)("div",{className:"appointment-container",children:[Object(Ct.jsxs)("div",{className:"section",children:[Object(Ct.jsx)("h2",{children:e.title}),Object(Ct.jsx)("h4",{children:a}),Object(Ct.jsxs)("h5",{children:[e.date," | ",e.time]})]}),Object(Ct.jsx)(vt.a,{variant:"danger",className:"col-md-1",onClick:function(){return n(e)},children:"X"})]})},Nt=(n(54),Object(s.b)((function(t){return{data:t.appointment}}),(function(t){return{onRemovePressed:function(e){return t(function(t){return{type:_,appointment:t}}(e))}}}))((function(t){var e=t.data,n=t.onRemovePressed,c=e.appointments;return Object(Ct.jsx)("div",{className:"appointment-list-header",children:c.map((function(t){return Object(Ct.jsx)(Tt,{appointment:t,removeAppointment:n})}))})}))),gt=function(t){var e=t.contacts,n=t.onChange,c=e.map((function(t){return Object(Ct.jsx)("option",{value:t.id,children:t.name})}));return Object(Ct.jsxs)("select",{onChange:n,name:"contact",children:[Object(Ct.jsx)("option",{value:0,children:"Select..."}),c]})},At=function(t){var e=t.onChange,n=t.contacts,c=t.handleSubmit;return Object(Ct.jsxs)("form",{onSubmit:c,children:[Object(Ct.jsxs)("div",{className:"form-group",children:[Object(Ct.jsx)("label",{children:"Title"}),Object(Ct.jsx)("input",{type:"text",name:"title",onChange:e})]}),Object(Ct.jsxs)("div",{className:"form-group",children:[Object(Ct.jsx)("label",{children:"Contact"}),Object(Ct.jsx)(gt,{name:"contact",contacts:n,onChange:e})]}),Object(Ct.jsxs)("div",{className:"form-group",children:[Object(Ct.jsx)("label",{children:"Date"}),Object(Ct.jsx)("input",{type:"date",name:"date",onChange:e})]}),Object(Ct.jsxs)("div",{className:"form-group",children:[Object(Ct.jsx)("label",{children:"Time"}),Object(Ct.jsx)("input",{type:"time",name:"time",onChange:e})]}),Object(Ct.jsx)("input",{type:"submit",value:"ADD"})]})},St=(n(55),Object(s.b)((function(t){return{data:t.appointment,contacts:t.contact.contacts}}),(function(t){return{onClearPressed:function(){return t({type:R,payload:e});var e},onCreatePressed:function(e){return t(function(t){return{type:w,appointment:t}}(e))}}}))((function(t){var e=t.data,n=t.contacts,a=t.onCreatePressed,r=t.onClearPressed,s=Object(c.useState)({}),o=Object(ft.a)(s,2),i=o[0],u=o[1];return Object(Ct.jsxs)("div",{className:"content row",children:[Object(Ct.jsxs)("section",{className:"col-md-4",children:[Object(Ct.jsx)("h1",{children:"Add Appointment"}),Object(Ct.jsx)("hr",{}),Object(Ct.jsx)(At,{contacts:n,handleSubmit:function(t){if(t.preventDefault(),!i.title||!i.contact||!i.date||!i.time)return alert("Please fill all required fields");t.target.reset();var n=i;n.id=e.appointmentTotal+1,a(n),u({})},onChange:function(t){u((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(xt.a)({},t.target.name,t.target.value))}))}})]}),Object(Ct.jsxs)("section",{className:"col-md-4",children:[Object(Ct.jsxs)("div",{className:"appointments-header",children:[Object(Ct.jsx)("h1",{children:"Appointments"}),Object(Ct.jsx)(vt.a,{variant:"danger",onClick:function(){return r()},children:"Clear All"})]}),Object(Ct.jsx)("hr",{}),Object(Ct.jsx)(Nt,{})]})]})}))),Et=(n(56),function(t){var e=t.contact,n=t.removeContact;return Object(Ct.jsxs)("div",{className:"contact-container",children:[Object(Ct.jsxs)("div",{className:"section",children:[Object(Ct.jsx)("h2",{children:e.name}),Object(Ct.jsx)("h4",{children:e.email}),Object(Ct.jsx)("h5",{children:e.phone})]}),Object(Ct.jsx)(vt.a,{variant:"danger",className:"col-md-1",onClick:function(){return n(e)},children:"X"})]})}),yt=(n(57),Object(s.b)((function(t){return{data:t.contact}}),(function(t){return{onRemovePressed:function(e){return t(function(t){return{type:f,contact:t}}(e))}}}))((function(t){var e=t.data,n=t.onRemovePressed,c=e.contacts;return Object(Ct.jsx)("div",{className:"contact-list-header",children:c.map((function(t){return Object(Ct.jsx)(Et,{contact:t,removeContact:n})}))})}))),Pt=function(t){var e=t.onChange,n=t.handleSubmit;return Object(Ct.jsxs)("form",{onSubmit:n,children:[Object(Ct.jsxs)("div",{className:"form-group",children:[Object(Ct.jsx)("label",{children:"Name"}),Object(Ct.jsx)("input",{type:"text",name:"name",onChange:e})]}),Object(Ct.jsxs)("div",{className:"form-group",children:[Object(Ct.jsx)("label",{children:"Phone"}),Object(Ct.jsx)("input",{type:"tel",name:"phone",onChange:e})]}),Object(Ct.jsxs)("div",{className:"form-group",children:[Object(Ct.jsx)("label",{children:"Email"}),Object(Ct.jsx)("input",{type:"email",name:"email",onChange:e})]}),Object(Ct.jsx)("input",{type:"submit",value:"ADD"})]})},kt=(n(58),Object(s.b)((function(t){return{contacts:t.contact}}),(function(t){return{onClearPressed:function(){return t({type:v,payload:e});var e},onCreatePressed:function(e){return t(function(t){return{type:x,contact:t}}(e))}}}))((function(t){var e=t.contacts,n=t.onCreatePressed,a=t.onClearPressed,r=Object(c.useState)({}),s=Object(ft.a)(r,2),o=s[0],i=s[1];return Object(Ct.jsxs)("div",{className:"content row",children:[Object(Ct.jsxs)("section",{className:"col-md-4",children:[Object(Ct.jsx)("h1",{children:"Add Contact"}),Object(Ct.jsx)("hr",{}),Object(Ct.jsx)(Pt,{handleSubmit:function(t){t.preventDefault(),t.target.reset();var c=o;return o.name&&o.phone&&o.email?e.contacts.find((function(t){return t.phone===o.phone||t.email===o.email||t.name===o.name}))?alert("Already Exist"):(c.id=e.contactTotal+1,n(c),void i({})):alert("Please add contact")},onChange:function(t){i((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(xt.a)({},t.target.name,t.target.value))}))}})]}),Object(Ct.jsxs)("section",{className:"col-md-4",children:[Object(Ct.jsxs)("div",{className:"contacts-header",children:[Object(Ct.jsx)("h1",{children:"Contacts"}),Object(Ct.jsx)(vt.a,{variant:"danger",onClick:function(){return a()},children:"Clear All"})]}),Object(Ct.jsx)("hr",{}),Object(Ct.jsx)(yt,{})]})]})})));var wt=function(){var t="/contacts",e="/appointments";return Object(Ct.jsxs)(Ct.Fragment,{children:[Object(Ct.jsxs)("nav",{children:[Object(Ct.jsx)(mt.b,{to:t,className:"link",activeClassName:"active",children:"Contacts"}),Object(Ct.jsx)(mt.b,{to:e,className:"link",activeClassName:"active",children:"Appointments"})]}),Object(Ct.jsx)("main",{children:Object(Ct.jsxs)(ht.d,{children:[Object(Ct.jsx)(ht.b,{exact:!0,path:"/",children:Object(Ct.jsx)(ht.a,{to:t})}),Object(Ct.jsx)(ht.b,{path:t,children:Object(Ct.jsx)(kt,{})}),Object(Ct.jsx)(ht.b,{path:e,children:Object(Ct.jsx)(St,{})})]})})]})},_t=Object(Ct.jsx)(mt.a,{children:Object(Ct.jsx)(wt,{})}),Rt=dt({}),It=Object(o.b)(Rt);r.a.render(Object(Ct.jsx)(s.a,{store:Rt,children:Object(Ct.jsx)(i.PersistGate,{loading:Object(Ct.jsx)("div",{children:"Loading..."}),persistor:It,children:_t})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.381af11d.chunk.js.map