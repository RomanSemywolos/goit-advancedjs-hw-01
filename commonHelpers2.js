import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{P as r,t as o}from"./assets/vendor-1e54b975.js";const i=document.querySelector("#vimeo-player"),t=new r(i);function n(e){localStorage.setItem("videoplayer-current-time",e)}const m=o(n,1e3,{trailing:!0});t.on("timeupdate",function(e){m(e.seconds)});const a=localStorage.getItem("videoplayer-current-time")||0;t.setCurrentTime(a);
//# sourceMappingURL=commonHelpers2.js.map
