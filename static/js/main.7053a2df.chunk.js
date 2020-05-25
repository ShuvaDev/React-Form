(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},16:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(7),s=t.n(l),c=(t(15),t(9)),m=t(1),o=t(2),i=t(4),d=t(5),u=t(3),h=t(8),p=function(e){return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,e.label),n.a.createElement("input",{type:e.type,name:e.name,placeholder:e.placeholder,value:e.value,className:e.error?"form-control is-invalid":"form-control",onChange:e.handler}),n.a.createElement("div",{className:"invalid-feedback"},e.error))};p.defaultProps={label:"",type:"text",placeholder:"",error:""};var g=p,v=function(e){var a=e.values,t=e.agreement,r=e.handleChange,l=e.handleCheckbox,s=e.handleSubmit,c=e.errors;return n.a.createElement("form",{onSubmit:s,className:"p-5 shadow-lg mb-3"},n.a.createElement(g,{label:"Enter name",name:"name",placeholder:"Mr. John",value:a.name,handler:r,error:c.name}),n.a.createElement(g,{label:"Enter email",type:"email",name:"email",placeholder:"test@test.com",value:a.email,handler:r,error:c.email}),n.a.createElement(g,{label:"Enter password",type:"password",name:"password",placeholder:"********",value:a.password,handler:r,error:c.password}),n.a.createElement("div",{className:"form-group"},n.a.createElement("p",{className:"mb-1"},"Select Gender"),n.a.createElement("label",{className:"mr-3"},n.a.createElement("input",{type:"radio",name:"gender",onChange:r,value:"Male"}),n.a.createElement("span",{className:"ml-1"},"Male")),n.a.createElement("label",{className:"mr-3"},n.a.createElement("input",{type:"radio",name:"gender",onChange:r,value:"Female"}),n.a.createElement("span",{className:"ml-1"},"Female")),n.a.createElement("label",{className:"mr-3"},n.a.createElement("input",{type:"radio",name:"gender",onChange:r,value:"Other"}),n.a.createElement("span",{className:"ml-1"},"Other")),n.a.createElement("div",{style:{color:"#dc3545",fontSize:"80%"}},c.gender&&c.gender)),n.a.createElement("div",null,n.a.createElement("input",{type:"checkbox",name:"agreement",checked:t,onChange:l})," I agree with all terms and condition."),n.a.createElement("button",{className:"btn btn-primary mt-3",disabled:!t},"Create User"))},E=function(e){Object(d.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={values:{name:"",email:"",password:"",gender:""},agreement:!1,errors:{}},e.handleChange=function(a){e.setState({values:Object(h.a)({},e.state.values,Object(u.a)({},a.target.name,a.target.value))})},e.handleCheckbox=function(a){e.setState({agreement:a.target.checked})},e.handleSubmit=function(a){a.preventDefault();var t=e.validator(),r=t.errors;t.isValid?(a.target.reset(),console.log(e.state.values),e.props.createUser(e.state.values),e.setState({values:{name:"",email:"",password:"",gender:""},agreement:!1,errors:{}})):e.setState({errors:r})},e.validator=function(){var a={},t=e.state.values,r=t.name,n=t.email,l=t.password,s=t.gender;return r||(a.name="Please provide your name"),n||(a.email="Please provide your email"),l||(a.password="Please provide your password"),s||(a.gender="Please provide your gender"),{errors:a,isValid:0===Object.keys(a).length}},e}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{width:"500px"},className:"m-auto pt-5"},n.a.createElement("h3",{className:"text-danger text-center",style:{fontFamily:"fira code"}},"Signup Form"),n.a.createElement("hr",null),n.a.createElement(v,{values:this.state.values,agreement:this.state.agreement,handleChange:this.handleChange,handleCheckbox:this.handleCheckbox,handleSubmit:this.handleSubmit,errors:this.state.errors}))}}]),t}(r.Component),b=function(e){Object(d.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={users:[]},e.createUser=function(a){a.id=(new Date).getTime().toString(),e.setState({users:[].concat(Object(c.a)(e.state.users),[a])})},e}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(E,{createUser:this.createUser}),n.a.createElement("div",{className:"offset-3"},n.a.createElement("h2",{className:"ml-4 mt-4"},"Register User List"),n.a.createElement("ul",{className:"list-group list-group-flush"},this.state.users.map((function(e){return n.a.createElement("li",{key:e.id,className:"list-group-item"},n.a.createElement("h4",null,n.a.createElement("span",{className:"text-dark"},"Name: "),n.a.createElement("span",{className:"text-danger"},e.name),n.a.createElement("span",{className:"text-dark"}," Email: "),n.a.createElement("span",{className:"text-danger"},e.email)))})))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7053a2df.chunk.js.map