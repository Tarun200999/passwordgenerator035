(this.webpackJsonppassword1=this.webpackJsonppassword1||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c);a(14),a(15);var s=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-5"},"Github"),r.a.createElement("p",{className:"lead"},r.a.createElement("a",{href:"https://github.com/Tarun200999/passwordgenerator035",target:"_blank"},"PasswordGenerator(github repo)")))};a(16);var o=function(){return r.a.createElement("nav",{class:"navbar navbar-default"},r.a.createElement("div",{class:"container-fluid nav1"},r.a.createElement("div",{class:"navbar-header"},r.a.createElement("a",{class:"navbar-brand display-3 ",href:"#"},"Password Generator")),r.a.createElement("ul",{class:"nav navbar-nav"},r.a.createElement("li",{className:"link"},r.a.createElement("a",{href:"https://www.linkedin.com/in/tarun-459a68171/",target:"_blank"},"Tarun")))))},u=a(1),i=a.n(u),m=a(2),h=a(5),b=a(6),p=a(8),d=a(7),E=(a(18),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleChange=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({length:t.target.value});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.handleCheckbox1=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.target.checked){e.next=5;break}return e.next=3,this.setState({number:"123456789"});case 3:e.next=7;break;case 5:return e.next=7,this.setState({number:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.handleCheckbox2=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.target.checked){e.next=5;break}return e.next=3,this.setState({small:"abcdefghijklmnopqrstuvwxyz"});case 3:e.next=7;break;case 5:return e.next=7,this.setState({small:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.handleCheckbox3=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.target.checked){e.next=5;break}return e.next=3,this.setState({capital:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"});case 3:e.next=7;break;case 5:return e.next=7,this.setState({capital:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.handleCheckbox4=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.target.checked){e.next=5;break}return e.next=3,this.setState({symbol:"@#$%"});case 3:e.next=7;break;case 5:return e.next=7,this.setState({symbol:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.handleCheckbox5=function(){var e=Object(m.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.target.checked){e.next=5;break}return e.next=3,this.setState({ambigous:"(){}<>:''-+[]*&^~!/"});case 3:e.next=7;break;case 5:return e.next=7,this.setState({ambigous:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.show=function(){for(var e=n.state.small+n.state.capital+n.state.symbol+n.state.ambigous+n.state.number,t="",a=n.state.length;a>0;a--)t+=e[Math.floor(Math.random()*e.length)];0===e.length?n.setState({passward:"NO CONDITIONS HAS BEEN APPLIED"}):n.setState({passward:t})},n.handlerange=function(e){console.log(e.target.value)},n.copy=function(){var e=document.getElementById("textarea");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")},n.state={length:12,number:"",small:"",capital:"",symbol:"",ambigous:"",passward:""},n}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container main"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 col-12"},r.a.createElement("h4",{className:"text-success"},"Select the length of your password"),r.a.createElement("select",{className:"select",value:this.state.value,onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:"12"},"12"),r.a.createElement("option",{value:"13"},"13"),r.a.createElement("option",{value:"14"},"14"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"16"},"16"),r.a.createElement("option",{value:"17"},"17"),r.a.createElement("option",{value:"18"},"18"),r.a.createElement("option",{value:"19"},"19"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"21"},"21"),r.a.createElement("option",{value:"22"},"22"),r.a.createElement("option",{value:"23"},"23"),r.a.createElement("option",{value:"24"},"24"),r.a.createElement("option",{value:"25"},"25")),r.a.createElement("h3",{className:"text-secondary"},"Enter Password Conditions"),r.a.createElement("input",{type:"checkbox",onChange:function(t){return e.handleCheckbox1(t)}}),"    Include Numbers (e.g 1234567890 )",r.a.createElement("br",null),r.a.createElement("input",{type:"checkbox",onChange:function(t){return e.handleCheckbox2(t)}}),"    Include LowerCase Letters ( e.g abcdefg..)",r.a.createElement("br",null),r.a.createElement("input",{type:"checkbox",onChange:function(t){return e.handleCheckbox3(t)}}),"    Include UpperCase Letters (e.g ABCDEFG..)",r.a.createElement("br",null),r.a.createElement("input",{type:"checkbox",onChange:function(t){return e.handleCheckbox4(t)}}),"    Include Symbols ( e.g. @#$% )",r.a.createElement("br",null),r.a.createElement("input",{type:"checkbox",onChange:function(t){return e.handleCheckbox5(t)}}),"    Ambiguous Characters ( e.g. ([]()/\\'\"`~,;:.) )",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:this.show},"click me")),r.a.createElement("div",{className:"col-md-4 col-12"},r.a.createElement("br",null),r.a.createElement("h4",{className:"text-primary"},"Your Random Password"),r.a.createElement("textarea",{id:"textarea",className:"form-control",row:"5",value:this.state.passward}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-success",onClick:this.copy},"copy password"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),a}(n.Component));var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(E,null),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.15f8e431.chunk.js.map