(this["webpackJsonpTask-Tracking-App"]=this["webpackJsonpTask-Tracking-App"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(8),i=n.n(a),r=(n(13),n(14),n(7)),u=n(2),o=n(0),d=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),s=n[0],a=n[1],i=Object(c.useRef)(null);Object(c.useEffect)((function(){i.current.focus()}),[]);return Object(o.jsx)("div",{children:Object(o.jsx)("form",{className:"task-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e5*Math.random()),text:s}),a("")},children:t.edit?Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",name:"text",value:s,placeholder:"Edit a Task",className:"task-input edit",onChange:function(t){a(t.target.value)},ref:i}),Object(o.jsx)("button",{className:"task-button",children:"Add"})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",name:"text",value:s,placeholder:"Add a Task",className:"task-input",onChange:function(t){a(t.target.value)},ref:i}),Object(o.jsx)("button",{className:"task-button",children:"Add Task"})]})})})},l=n(6),j=function(t){var e=t.tasks,n=t.completeTask,s=t.removeTask,a=t.editTask,i=Object(c.useState)({id:null,value:""}),r=Object(u.a)(i,2),j=r[0],b=r[1];return j.id?Object(o.jsx)(d,{edit:j,onSubmit:function(t){a(j.id,t),b({id:null,value:null})}}):e.map((function(t,e){return Object(o.jsxs)("div",{className:t.isComplete?"task-row complete":"task-row",children:[Object(o.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(l.a,{onClick:function(){return s(t.id)},className:"delete-icon"}),Object(o.jsx)(l.b,{onClick:function(){return b({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))},b=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],s=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"What's the Task Today?"}),Object(o.jsx)(d,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(n));s(e)}}}),Object(o.jsx)(j,{tasks:n,completeTask:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));s(e)},removeTask:function(t){var e=Object(r.a)(n).filter((function(e){return e.id!==t}));s(e)},editTask:function(t,e){e.text&&!/^\s*$/.test(e.text)&&s((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(b,{})})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a2fdeaa6.chunk.js.map