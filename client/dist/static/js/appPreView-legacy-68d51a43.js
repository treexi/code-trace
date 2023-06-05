!function(){var o=document.createElement("style");o.innerHTML='@charset "UTF-8";html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,menu,nav,output,ruby,section,summary,time,mark,audio,video,input{margin:0;padding:0;border:0;font-size:100%;font-weight:400;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,menu,nav,section{display:block}body{line-height:1}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:none}table{border-collapse:collapse;border-spacing:0}a{color:#7e8c8d;-webkit-backface-visibility:hidden;text-decoration:none}li{list-style:none}body{-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}body,html{line-height:1;font-family:PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif,Droid Sans Fallback;user-select:none;-webkit-tap-highlight-color:transparent}textarea{resize:none;outline:0}input,button{outline:0}.main-container,.app-container{padding:0 1px;background-color:#f9fafc}.components-container{margin:30px 50px;position:relative}body{background:#F9FAFC;margin:0;padding:0}.nowrap{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.canwrap{word-wrap:break-word;word-break:normal}.button-style-main{padding:0;background:#229FFC;border-width:0px;outline:0;font-size:14px;color:#fff;height:48px;border-radius:24px}.button-style-border{padding:0;background:white;border:solid 1px #229FFC;outline:0;font-size:12px;color:#229ffc;height:48px;border-radius:24px;cursor:pointer}.elbutton-style{width:96px!important;height:36px!important;border:solid 1px #229FFC!important;color:#229ffc!important;background-color:#fff!important;padding:0!important;font-size:12px!important}.borderLine-input{height:24px;border-bottom:solid 1px #eee;padding:0 8px;box-sizing:border-box;font-size:14px;color:#354052}body{background-color:#fff}.preview-app-wrapper{background-color:#fff;width:100vw;height:100%;position:absolute;background-size:cover;display:flex;align-items:center;flex-direction:column}.preview-app-wrapper .phoneDownLoadWrapper{max-width:800px;text-align:center}.preview-app-wrapper .phoneDownLoadWrapper .app-icon{width:126px;height:126px;border-radius:15px;margin-top:100px}.preview-app-wrapper .phoneDownLoadWrapper .title{color:#354052;font-weight:700;font-size:26px;height:37px;line-height:37px;margin-top:13px}.preview-app-wrapper .phoneDownLoadWrapper .info{display:flex;flex-direction:row;justify-content:center;color:#242a34;font-size:14px;line-height:20px;margin-top:5px;opacity:.5}.preview-app-wrapper .phoneDownLoadWrapper .info .desc{margin-right:12px}.preview-app-wrapper .phoneDownLoadWrapper .qrcode .tips{color:#585f69;font-size:14px;text-align:center}.preview-app-wrapper .phoneDownLoadWrapper .qrcode .qrcodeImg{margin:10px 0;width:150px;height:auto}.preview-app-wrapper .phoneDownLoadWrapper .pwd{width:200px;height:40px;border-radius:6px;margin-top:20px;background-color:transparent}.preview-app-wrapper .phoneDownLoadWrapper .downloadBtn{background-color:#229ffc;width:200px;height:44px;color:#fff;font-size:15px;margin-top:15px;font-weight:500;border-color:transparent}.preview-app-wrapper .phoneDownLoadWrapper .downloadBtn i:before{color:#fff;font-size:16px}.preview-app-wrapper .merge-wrapper{width:820px;display:flex;margin-top:20px;border-top:solid 1px #e6e6e6;padding:20px 0}.preview-app-wrapper .merge-wrapper .left{flex:1;text-align:center}.preview-app-wrapper .merge-wrapper .line{height:100px;width:1px;background-color:#e6e6e6}.preview-app-wrapper .merge-wrapper .right{flex:1;text-align:center}.preview-app-wrapper .merge-wrapper .info{display:flex;flex-direction:row;justify-content:center;color:#242a34;font-size:14px;line-height:20px;margin-top:5px;opacity:.5}.preview-app-wrapper .merge-wrapper .info .desc{margin-right:12px}.preview-app-wrapper .merge-wrapper .mergeDown{margin-top:20px}.preview-app-wrapper .history-wrapper{width:100%;margin-top:16px}.preview-app-wrapper .history-wrapper ul{padding:16px 32px}.preview-app-wrapper .history-wrapper ul li{padding:12px 0;display:flex;justify-content:space-around;font-size:12px;background:#f2f5fb}\n',document.head.appendChild(o),System.register(["./index-legacy-8adc71e9.js","./vue-qr-legacy-17e511f1.js","./vueRouter-legacy-4ba05e21.js"],(function(o){"use strict";var t,e,n,r,a,i,p;return{setters:[function(o){t=o.n,e=o.I,n=o.i,r=o.a,a=o.r,i=o.b},function(o){p=o.V},function(){}],execute:function(){var s={},d=t({components:{VueQr:p},data:function(){return{dataInfo:[],curInfo:{appInfo:{},versionInfo:{},history:[]},qrCodeUrl:"",pwd:"",installWithPwd:!1,isPhone:!1,loading:!1}},computed:{isIos:function(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},isAndroid:function(){var o=!!navigator.userAgent.match(/(Android)\s+([\d.]+)/);return o},showDownLoadBtn:function(){return!this.showPasswordInput&&(this.isPhone||1==this.dataInfo.length)},showMergeBtn:function(){return!this.showPasswordInput&&!this.isPhone&&this.dataInfo.length>1},showPasswordInput:function(){return this.installWithPwd},showHistoryList:function(){return!this.showPasswordInput&&this.curInfo.history.length>0}},mounted:function(){this.getAppInfo(this.$route.params.id,this.pwd),this.isIos||this.isAndroid?this.isPhone=!0:this.isPhone=!1},created:function(){this.$nextTick((function(){}))},methods:{formatTime:function(o){return new Date(o).toFormat()},getTableBackground:function(o){return o%2==0?"backgroundColor: rgb(244, 245, 247)":"backgroundColor: white"},getAppInfo:function(o,t){var n=this;e(o,t).then((function(o){console.log(o),null!=o.data?(n.installWithPwd=o.data.needAuth,n.dataInfo=o.data.list,n.dataInfo.length>1?(n.isAndroid&&"android"===n.dataInfo[0].appInfo.platform?n.curInfo=n.dataInfo[0]:n.isAndroid&&"android"===n.dataInfo[1].appInfo.platform?n.curInfo=n.dataInfo[1]:n.isIos&&"ios"===n.dataInfo[0].appInfo.platform?n.curInfo=n.dataInfo[0]:n.isIos&&"ios"===n.dataInfo[1].appInfo.platform?n.curInfo=n.dataInfo[1]:n.curInfo=n.dataInfo[0],console.log("this.curInfo",n.curInfo)):n.curInfo=n.dataInfo[0],n.qrCodeUrl="".concat(window.origin).concat(n.$route.fullPath),n.loading=!1):n.$message.error("未检测到版本信息")}),(function(o){n.loading=!1,n.pwd=""}))},setDefaultIcon:function(o,t){"ios"==t.platform?o.target.src=n:"android"==t.platform?o.target.src=r:"rn"==t.platform&&(o.target.src=a)},historyClickDownLoadBtn:function(o){if(o.grayScaleLimit&&o.grayScaleSize<=o.downloadCount)return this.$message.error("已达到灰度上限"),void this.getAppInfo(this.$route.params.id,this.pwd);if(this.isIos){var t=document.createElement("a");t.setAttribute("href",o.installUrl),t.click()}else{var e=document.createElement("a"),n=o.downloadUrl;e.setAttribute("href",n),e.click(),fetch(n).then((function(t){var e=t.body.getReader(),n=t.headers.get("Content-Length"),r=0;e.read().then((function t(a){if(!a.done)return r+=a.value.length,console.log("progress: ".concat(r/n*100,"%")),e.read().then(t);i(o._id).then((function(){}),(function(o){}))}))}))}},clickDownLoadBtn:function(o){if(o.versionInfo.grayScaleLimit&&o.versionInfo.grayScaleSize<=o.versionInfo.downloadCount)return this.$message.error("已达到灰度上限"),void this.getAppInfo(this.$route.params.id,this.pwd);if(this.isIos){var t=document.createElement("a");t.setAttribute("href",o.versionInfo.installUrl),t.click()}else{var e=document.createElement("a"),n=o.versionInfo.downloadUrl;e.setAttribute("href",n),e.click(),fetch(n).then((function(t){var e=t.body.getReader(),n=t.headers.get("Content-Length"),r=0;e.read().then((function t(a){return a.done?(console.log("下载完成"),void i(o.versionInfo._id).then((function(){}),(function(o){}))):(r+=a.value.length,console.log("progress: ".concat(r/n*100,"%")),e.read().then(t))}))}))}},formatDate:function(o){return o?new Date(o).toFormat():""},clickSure:function(){this.pwd?(this.loading=!0,this.getAppInfo(this.$route.params.id,this.pwd)):this.$message.info("请输入密码")}}},(function(){var o=this,t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview-app-wrapper"},[t.dataInfo.length>0?n("div",{staticClass:"phoneDownLoadWrapper"},[n("img",{staticClass:"app-icon",attrs:{src:this.curInfo.appInfo.icon||"",alt:""},on:{error:function(e){return t.setDefaultIcon(e,o.curInfo.appInfo)}}}),n("p",{staticClass:"title"},[t._v(t._s(this.curInfo.appInfo.appName))]),"rn"!=this.curInfo.appInfo.platform?n("div",{staticClass:"info"},[n("p",{staticClass:"desc"},[t._v("版本："+t._s(this.curInfo.versionInfo.versionName)+"("+t._s(this.curInfo.versionInfo.versionCode)+")")]),n("span",[t._v("大小："+t._s((this.curInfo.versionInfo.size/1024/1024).toFixed(1))+"M")])]):t._e(),"rn"==this.curInfo.appInfo.platform?n("div",{staticClass:"info"},[n("p",{staticClass:"desc"},[t._v("版本："+t._s(this.curInfo.versionInfo.appVersion))]),n("span",[t._v("大小："+t._s((this.curInfo.versionInfo.size/1024/1024).toFixed(2))+"M")])]):t._e(),n("p",{staticClass:"info"},[t._v("发布日期： "+t._s(t.formatDate(this.curInfo.versionInfo.uploadAt))+" ")]),n("div",{staticClass:"qrcode"},[n("vue-qr",{staticClass:"qrcodeImg",attrs:{colorDark:"#585F69",text:t.qrCodeUrl,margin:15}}),n("p",{staticClass:"tips"},[t._v("用手机扫描二维码"+t._s("rn"==this.curInfo.appInfo.platform?"下载":"安装"))])],1),t.showPasswordInput?n("div",[n("div",[n("el-input",{staticClass:"pwd",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.pwd,callback:function(o){t.pwd=o},expression:"pwd"}})],1),n("div",[n("el-button",{staticClass:"downloadBtn sureBtn",attrs:{loading:t.loading,type:"primary",round:""},on:{click:t.clickSure}},[t._v("确定")])],1)]):t._e(),"rn"!=t.curInfo.appInfo.platform&&t.showDownLoadBtn?n("el-button",{staticClass:"downloadBtn",attrs:{type:"primary",round:""},on:{click:function(o){return t.clickDownLoadBtn(t.curInfo)}}},[n("i",{class:"ios"===this.curInfo.appInfo.platform?"icon-ic_ios":"icon-ic_andr"}),t._v(" 下载安装")]):t._e(),"rn"==t.curInfo.appInfo.platform&&t.showDownLoadBtn?n("el-button",{staticClass:"downloadBtn",attrs:{type:"primary",round:""},on:{click:function(o){return t.clickDownLoadBtn(t.curInfo)}}},[t._v("下载")]):t._e()],1):t._e(),t.showMergeBtn?n("div",{staticClass:"merge-wrapper"},[n("div",{staticClass:"left"},[n("div",{staticClass:"info"},[n("p",{staticClass:"desc"},[t._v("版本："+t._s(t.dataInfo[0].versionInfo.versionName)+"("+t._s(t.dataInfo[0].versionInfo.versionCode)+")")]),n("span",[t._v("大小："+t._s((t.dataInfo[0].versionInfo.size/1024/1024).toFixed(1))+"M")])]),n("p",{staticClass:"info"},[t._v("发布日期： "+t._s(t.formatDate(t.dataInfo[0].versionInfo.uploadAt))+" ")]),n("el-button",{staticClass:"downloadBtn mergeDown",attrs:{type:"primary",round:""},on:{click:function(o){return t.clickDownLoadBtn(t.dataInfo[0])}}},[t._v(t._s("下载 ".concat(t.dataInfo[0].appInfo.platform," 版")))])],1),n("div",{staticClass:"line"}),n("div",{staticClass:"right"},[n("div",{staticClass:"info"},[n("p",{staticClass:"desc"},[t._v("版本："+t._s(t.dataInfo[1].versionInfo.versionName)+"("+t._s(t.dataInfo[1].versionInfo.versionCode)+")")]),n("span",[t._v("大小："+t._s((t.dataInfo[1].versionInfo.size/1024/1024).toFixed(1))+"M")])]),n("p",{staticClass:"info"},[t._v("发布日期： "+t._s(t.formatDate(t.dataInfo[1].versionInfo.uploadAt))+" ")]),n("el-button",{staticClass:"downloadBtn mergeDown",attrs:{type:"primary",round:""},on:{click:function(o){return t.clickDownLoadBtn(t.dataInfo[1])}}},[t._v(t._s("下载 ".concat(t.dataInfo[1].appInfo.platform," 版")))])],1)]):t._e(),t.showHistoryList?n("div",{staticClass:"history-wrapper"},[n("ul",t._l(this.curInfo.history,(function(o,e){return n("li",{key:e,on:{click:function(e){return t.historyClickDownLoadBtn(o)}}},["rn"!=t.curInfo.appInfo.platform?n("div",[t._v("V"+t._s(o.versionName)+"(build "+t._s(o.versionCode)+")")]):t._e(),"rn"==t.curInfo.appInfo.platform?n("div",[t._v("V"+t._s(o.appVersion))]):t._e(),n("div",[t._v(t._s(t.formatTime(o.uploadAt)))])])})),0)]):t._e()])}),[],!1,c,null,null,null);function c(o){for(var t in s)this[t]=s[t]}o("default",function(){return d.exports}())}}}))}();