(this["webpackJsonpreact-multi-popup-example"]=this["webpackJsonpreact-multi-popup-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var o,r=n(0),a=n.n(r),p=n(2),c=n.n(p),i=n(12),l="_1vSce",s=function(e){var t=e.text;return a.a.createElement("div",{className:l},"Example Component: ",t)},u=function(){function e(){}return e.addEventListener=function(t,n){if("string"===typeof t&&"function"===typeof n){e.listeners.count+=1;var o="l"+e.listeners.count;return e.listeners.refs[o]={name:t,callback:n},o}return!1},e.removeEventListener=function(t){return"string"===typeof t&&delete e.listeners.refs[t]},e.removeAllListeners=function(){var t=!1;return Object.keys(e.listeners.refs).forEach((function(n){var o=delete e.listeners.refs[n];t=t||!o})),!t},e.emitEvent=function(t,n){Object.keys(e.listeners.refs).forEach((function(o){e.listeners.refs[o]&&t===e.listeners.refs[o].name&&e.listeners.refs[o].callback(n)}))},e.on=function(t,n){return e.addEventListener(t,n)},e.off=function(t){return e.removeEventListener(t)},e.offAll=function(){return e.removeAllListeners()},e.emit=function(t,n){e.emitEvent(t,n)},e}();u.listeners={count:0,refs:{}};var f=function(){function e(){}return e.open=function(t,n){var o=t.component,r=Object(i.a)();e.popupList.count+=1;var a="l"+r;return e.popupList.refs[a]={name:a,component:o,callback:n,close:function(){e.removePopup(a)}},u.emit("EVENT_RENDER_POPUP"),a},e.replace=function(t,n){var o=t.component,r=Object.keys(e.popupList.refs).pop(),a=Object(i.a)();e.popupList.count+=1;var p="l"+a;return e.popupList.refs[p]={name:p,component:o,callback:n,close:function(){e.removePopup(p)}},delete e.popupList.refs[r],u.emit("EVENT_RENDER_POPUP"),p},e.removePopup=function(t){return"string"===typeof t&&delete e.popupList.refs[t]},e.removeLastPopup=function(){var t=Object.keys(e.popupList.refs).pop(),n=delete e.popupList.refs[t];return u.emit("EVENT_RENDER_POPUP"),n},e.removeAllPopup=function(){var t=!1;return Object.keys(e.popupList.refs).forEach((function(n){var o=delete e.popupList.refs[n];t=t||!o})),!t},e}();function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(null,arguments)}function m(e){var t=e.payload,n=e.footer,o=e.getType,r=e.backdropCallback,p=e.backdropClass,c=e.showBackdrop;return a.a.createElement("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:1050,display:"flex",alignItems:"center",justifyContent:"center"}},a.a.createElement("div",{style:{width:"fit-content",margin:"auto"}},a.a.createElement("div",{style:d({maxHeight:"calc(100vh - 50px)",overflow:"auto"},null===t||void 0===t?void 0:t.customStyle,{borderRadius:10},{})},null!=o?o:a.a.createElement(Fragment,null)),n&&a.a.createElement("div",null,n)),c&&a.a.createElement("div",{className:p,style:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#0000005e",zIndex:-1},onClick:function(){r()}}))}o=f,f.sectionRef={},f.popupList={count:0,refs:{}},f.init=function(e){return o.sectionRef=e,o.popupList};var v=function(e){var t=e.type,n=e.payload,o=e.config,r=e.option,p=e.defaultOptions,c=function(){f.removeLastPopup()},i="";p&&"defaultBackdropClass"in p&&(i=p.defaultBackdropClass),r&&"backdropClass"in r&&(i=r.backdropClass);var l=!0;return p&&"defaultShowBackdrop"in p&&(l=p.defaultShowBackdrop),r&&"showBackdrop"in r&&(l=r.showBackdrop),a.a.createElement(m,{payload:n,hiddenPopup:c,getType:function(){var e=o[t];return a.a.createElement(e,{popupProps:{payload:n,close:c}})}(),backdropCallback:function(){r.preventBackdropClosePopup||c(),(null===n||void 0===n?void 0:n.backdropCallback)&&n.backdropCallback()},backdropClass:i,showBackdrop:l})},E=function(e){var t=e.config,n=e.option,o=Object(r.useRef)(null),p=Object(r.useState)(Object(i.a)()),c=p[0],l=p[1];Object(r.useEffect)((function(){f.init(o);var e=u.on("EVENT_RENDER_POPUP",(function(){l(Object(i.a)()),s()}));return function(){u.off(e)}}),[]);var s=function(){Object.keys(f.popupList.refs).length>0?(document.body.style.overflow="hidden",document.body.style.paddingRight="0px"):(document.body.style.overflow="visible",document.body.style.paddingRight="0px")},d=function(){f.removeLastPopup(),s()},m=function(){f.removeAllPopup()};Object(r.useEffect)((function(){var e=u.on("EVENT_SHOW_POPUP",(function(e){e.newWindow?f.open({component:a.a.createElement(v,{type:e.type,payload:e.payload,defaultOption:n,option:e.option,closeAll:m,close:d,config:t})},(function(){})):f.replace({component:a.a.createElement(v,{type:e.type,payload:e.payload,defaultOption:n,option:e.option,closeAll:m,close:d,config:t})},(function(){}))}));return function(){u.off(e)}}),[]);var E="";return n.defaultContainerClass&&(E=n.defaultContainerClass),Object(r.useMemo)((function(){return a.a.createElement("div",{className:"MultiPopupArea "+E,ref:o},Object.keys(f.popupList.refs).map((function(e){var t;return a.a.createElement("div",{key:e},null===(t=f.popupList.refs[e])||void 0===t?void 0:t.component)})))}),[c])};function b(){return{open:function(e,t,n){void 0===t&&(t={}),void 0===n&&(n={preventBackdropClosePopup:!1}),u.emit("EVENT_SHOW_POPUP",{open:!0,newWindow:!0,type:e,payload:t,option:n})},pop:function(){f.removeLastPopup()},replace:function(e,t,n){void 0===t&&(t={}),void 0===n&&(n={preventBackdropClosePopup:!1}),u.emit("EVENT_SHOW_POPUP",{open:!0,newWindow:!1,type:e,payload:t,option:n})}}}n(9);var y=function(e){const{popupProps:t}=e,{open:n}=b();return a.a.createElement("div",{className:"TestPopup",style:{width:300,height:300,background:"white",border:"1px solid black"}},"Test Popup",a.a.createElement("button",{onClick:()=>{t.close()}},"Close"),a.a.createElement("button",{onClick:()=>{n("TEST",{},{showBackdrop:!1})}},"New Popup"))};var k=()=>{const{open:e}=b(),t={TEST:y,TEST2:y};return a.a.createElement("div",null,a.a.createElement(s,{text:"Create React Library Example \ud83d\ude04"}),a.a.createElement("button",{onClick:()=>{e("TEST",{data:"ok"},{backdropClass:"test_backdrop_class"})}},"Open Popup"),a.a.createElement(E,{config:t,option:{defaultBackdropClass:"",defaultContainerClass:"",defaultShowBackdrop:!0,defaultCanResize:!1,defaultCanMove:!1}}))};c.a.render(a.a.createElement(k,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.a2c2aa94.chunk.js.map