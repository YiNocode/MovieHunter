(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Login-login"],{2509:function(e,o,t){"use strict";var n=t("4220"),r=t.n(n);r.a},4220:function(e,o,t){var n=t("a592");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=t("4f06").default;r("65dcbd39",n,!0,{sourceMap:!1,shadowMode:!1})},"4dfd":function(e,o,t){"use strict";t.r(o);var n=t("70e7"),r=t("5b9a");for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(o,e,(function(){return r[e]}))}(i);t("2509");var s=t("f0c5"),a=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"f3d62c28",null,!1,n["a"],void 0);o["default"]=a.exports},"5b9a":function(e,o,t){"use strict";t.r(o);var n=t("f640"),r=t.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){t.d(o,e,(function(){return n[e]}))}(i);o["default"]=r.a},"70e7":function(e,o,t){"use strict";t.d(o,"b",(function(){return r})),t.d(o,"c",(function(){return i})),t.d(o,"a",(function(){return n}));var n={uForm:t("49cb").default,uFormItem:t("e9fb").default,uInput:t("d2a3").default,uButton:t("8b82").default},r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("v-uni-view",{staticClass:"center-container"},[t("v-uni-view",{staticClass:"register-container"},[t("u-form",{ref:"uForm",attrs:{rules:e.rules,model:e.form}},[t("u-form-item",{attrs:{label:"邮箱",prop:"userInfo.email"}},[t("u-input",{attrs:{type:"text",placeholder:"请输入邮箱"},model:{value:e.form.userInfo.email,callback:function(o){e.$set(e.form.userInfo,"email",o)},expression:"form.userInfo.email"}})],1),t("u-form-item",{attrs:{label:"密码",prop:"userInfo.password"}},[t("u-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.userInfo.password,callback:function(o){e.$set(e.form.userInfo,"password",o)},expression:"form.userInfo.password"}})],1),t("u-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[t("u-input",{attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:e.form.confirmPassword,callback:function(o){e.$set(e.form,"confirmPassword",o)},expression:"form.confirmPassword"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isFirst,expression:"!isFirst"}]},[e._v(e._s(e.remainingTime)+"s后重新获取")]),t("u-button",{attrs:{disabled:e.isCounting},on:{click:function(o){arguments[0]=o=e.$handleEvent(o),e.submitByEmail.apply(void 0,arguments)}}},[e._v("发送验证码")]),t("u-input",{attrs:{placeholder:"请输入验证码",type:"digit"},model:{value:e.form.code,callback:function(o){e.$set(e.form,"code",o)},expression:"form.code"}}),t("u-form-item",[t("u-button",{staticStyle:{"background-color":"#a0deaa"},attrs:{type:"primary"},on:{click:function(o){arguments[0]=o=e.$handleEvent(o),e.register.apply(void 0,arguments)}}},[e._v("注册并登录")])],1)],1)],1)],1)},i=[]},a592:function(e,o,t){var n=t("24fb"),r=t("1de5"),i=t("b1f5");o=n(!1);var s=r(i);o.push([e.i,".center-container[data-v-f3d62c28]{display:flex;justify-content:center;align-items:center;height:100vh;background-image:url("+s+");background-repeat:no-repeat;background-size:100% 100%;background-position:bottom;margin:0;padding:0}.register-container[data-v-f3d62c28]{width:30%; /* 设置矩形框的宽度，可以根据需要进行调整 */padding:10px;border-radius:8px;background-color:#f8f8ff}",""]),e.exports=o},f640:function(e,o,t){"use strict";t("7a82"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,t("ac1f"),t("5319"),t("d401"),t("d3b7"),t("25f0"),t("99af");var n={data:function(){return{isCounting:!1,remainingTime:60,isFirst:!0,form:{userInfo:{email:"",password:""},confirmPassword:"",code:""},rules:{password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"密码长度为6到16个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"请再次输入密码",trigger:"blur"},{trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur",type:"email"}]}}},methods:{submitByEmail:function(){var e=this;this.$refs.uForm.validate().then((function(o){if(e.isFirst=!1,e.intervalId&&clearInterval(e.intervalId),e.isCounting=!0,e.remainingTime=60,e.intervalId=setInterval((function(){e.remainingTime>0?e.remainingTime--:(e.isCounting=!1,clearInterval(e.intervalId))}),1e3),console.log("提交"),console.log(e.form.userInfo.email),o){console.log("验证通过");var t=e.form.userInfo.email.replace("@","%40");uni.request({url:e.$BASE_URL.BASE_URL+"sendMsg/"+t,method:"GET",success:function(e){uni.showToast({title:"验证码已发送"}),console.log(e)},complete:function(e){console.log(e)}})}else console.log("验证失败")})).catch((function(e){console.log("验证完成"),console.log(e)}))},register:function(){console.log("注册"),uni.request({url:this.$BASE_URL.BASE_URL+"register",method:"POST",dataType:"json",data:{email:this.form.userInfo.email,password:this.form.userInfo.password,code:this.form.code},success:function(e){console.log(e),200==e.data.code?(uni.setStorage({key:"token",data:e.data.data.token,success:function(e){console.log("设置token成功"),uni.showToast({title:"登录成功"}),console.log("即将跳转")},fail:function(){uni.showToast({title:"设置token失败",icon:"error"})}}),uni.switchTab({url:"/pages/recommendations/recommendations"})):uni.showToast({title:"验证码错误",icon:"error"})},complete:function(e){console.log(e)},fail:function(e){console.log(e)}})},handle:function(e){this.code=e.toString(),console.log("输入结束，当前值为："+e)},handleCountDownChange:function(e){var o=e.day,t=e.hour,n=e.minute,r=e.second;this.isCounting&&(this.buttonText="".concat(n,":").concat(r)),0===o&&0===t&&0===n&&0===r&&(this.isCounting=!1,this.buttonText="获取验证码")}},onReady:function(){this.$refs.uForm.setRules(this.rules)}};o.default=n}}]);