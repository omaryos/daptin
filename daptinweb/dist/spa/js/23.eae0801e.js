(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"013f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("div",{staticClass:"flex flex-center "},[n("div",{staticStyle:{"min-width":"30%"}},[n("div",{staticClass:"q-pa-md "},[n("h3",[e._v("Login")]),n("q-form",{staticClass:"q-gutter-md",attrs:{autofocus:""},on:{submit:e.onSubmit}},[n("q-input",{attrs:{filled:"",label:"Email","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{attrs:{filled:"",type:"password",label:"Password","lazy-rules":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("div",[n("q-btn",{staticClass:"float-left",attrs:{label:"Login",type:"submit",color:"primary"}}),n("q-btn",{staticClass:"float-right",attrs:{label:"Register",type:"reset",color:"secondary",flat:""},on:{click:function(t){return e.$router.push("/register")}}})],1)],1)],1)])])])},o=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),s=n.n(a),i=n("2f62");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={name:"PageLogin",methods:c(c({},Object(i["b"])(["executeAction","setToken"])),{},{onSubmit:function(){var e=this;e.executeAction({tableName:"user_account",actionName:"signin",params:{email:this.email,password:this.password}}).then((function(t){for(var n=0;n<t.length;n++)"client.notify"===t[n].ResponseType&&e.$q.notify(t[n].Attributes);e.setToken(),e.$router.push("/apps/files")})).catch((function(t){e.$q.notify("Failed to sign in"),console.log("error ",arguments)}))}}),data:function(){return{email:null,password:null}},mounted:function(){console.log("mounted login")}},p=u,f=n("2877"),b=n("9989"),d=n("0378"),m=n("27f9"),g=n("9c40"),y=n("eebe"),w=n.n(y),h=Object(f["a"])(p,r,o,!1,null,null,null);t["default"]=h.exports;w()(h,"components",{QPage:b["a"],QForm:d["a"],QInput:m["a"],QBtn:g["a"]})}}]);