function TaaSDynamic(){var t=window["cookies-browser"]||raptor.require("ebay.cookies");this.readCookie=function(n,e){return t.readCookie(n,e)},this.writeCookielet=function(n,e,i,r,a){t.writeCookielet(n,e,i,r,a)},this.readMultiLineCookie=function(n,e){t.readMultiLineCookie(n,e)},this.writeMultiLineCookie=function(n,e,i,r,a){t.writeMultiLineCookie(n,e,i,r,a)},this.writeCookie=function(n,e,i){t.writeCookie(n,e,i)}}var TaaSDynamicObj=new TaaSDynamic;function attachTrackingListener(t,n){window.jQuery?$(document).on(t,n):document.addEventListener(t,n,!1)}window.triggerTracking=function(t,n){var e=document.createEvent("CustomEvent");e.initCustomEvent(t,!1,!1,n),document.dispatchEvent(e)};var idmapRoverURL,$trk=null;function TaaSIdMapTracker(){this.roverService=function(t){"https:"==window.location.protocol||!t||TaaSDynamicObj.readCookie("dp1","idm")||(idmapRoverURL=t,window.jQuery?$(window).on("load",this.sendRequest):window.addEventListener("load",this.sendRequest,!1))},this.sendRequest=function(){idmapRoverURL=-1<idmapRoverURL.indexOf("?")?idmapRoverURL+"&":idmapRoverURL+"?",idmapRoverURL+="cb=TaaSIdMapTrackerObj.handleResponse",idmapRoverURL=encodeURI(idmapRoverURL)+"&cache="+Math.random();var t=document.createElement("script");t.setAttribute("src",idmapRoverURL),t.setAttribute("type","text/javascript"),document.body.appendChild(t)},this.setCookieExpiration=function(t){"number"==typeof t&&0<t&&TaaSDynamicObj.writeCookielet("dp1","idm","1",t/86400,"")},this.handleResponse=function(t){if(t&&1<t.length){for(var n=t.length-1,e=0;e<n;e++)this.createImage(t[e]);this.setCookieExpiration(t[n])}},this.createImage=function(t){if(t&&1<t.length){var n=document.createElement("IMG");n.width="1",n.height="1",n.src=t,n.alt="",document.body.appendChild(n)}}}!function(){function t(t){for(var n=1;n<arguments.length;n++){var e,i=arguments[n];for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}return t}function n(n){var e=$trk=this;t(e,e.config=n),e.image=document.createElement("img"),e.image.style.display="none",e.rover.sync&&e.image.attr("src",e.rover.sync),e.originalPSI=e.currentPSI=n.psi,attachTrackingListener("click",e.onBody),attachTrackingListener("mousedown",e.onMouse),attachTrackingListener("rover",e.onRover),attachTrackingListener("track",e.onTrack),attachTrackingListener("pulsar",e.onPulsar),attachTrackingListener("TRACKING_UPDATE_PSI",e.trackingUpdatePSI),attachTrackingListener("ADD_LAYER_PSI",e.addLayerPSI),attachTrackingListener("CLEAR_LAYER_PSI",e.clearLayerPSI)}function e(t,n,e){if(t&&"object"==typeof t){var i=[];return Object.keys(t).forEach((function(n){i.push(n+"="+t[n])})),n=i.join(n||","),e?encodeURIComponent(n):n}return e?encodeURIComponent(t):t}t(n.prototype,{codes:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy-_!".split(""),sizes:{p:4,c:1,m:3,l:3},start:{p:1,c:5,m:6,l:9},target:function(t){return t.tagName?t:t.target},attrib:function(t,n){return t.getAttribute?t.getAttribute(n):null},valid:function(t,n){return n&&0<n.indexOf(".ebay.")?t:null},trackable:function(t){var n=$trk;return(t=t.tagName).match(/^a$|area/i)?n.valid(t,t.href):t.match(/input/)&&t.type.match(/submit/i)&&t.form?n.valid(t,form.action):null},click:function(t){for(var n=$trk,e=(t=n.target(t),null);t&&t.tagName;t=t.parentNode)if(e=e||n.trackable(t),n.attrib(t,"_sp"))return n.clickElement(t,e);n.pid&&n.track(n.pid)},clickElement:function(t,n){var e=$trk,i=e.attrib(t,"_sp");e.track(i.split(";")[0],n?e.attrib(n,"_l"):null)},track:function(t,n){var e=$trk,i=t.split(".");t.match(/p\d+/)||i.push(e.pid),n&&i.push(n);for(var r=TaaSDynamicObj.readCookie("ds2","sotr"),a=e.chars(r&&"b"==r.charAt(0)?r:"bzzzzzzzzzzz"),o=0,c=i.length;o<c;o++){if(null!=(s=i[o].match(/([pcml])(\d+)/)))for(var l=s[1],s=(r=e.sizes[l],l=e.start[l],e.chars(e.encode(s[2],r))),d=0;d<r;d++)a[l+d]=s[d]}for(o=0,c=a.length,r="";o<c;)r=r.concat(a[o++]);TaaSDynamicObj.writeCookielet("ds2","sotr",r)},chars:function(t){for(var n=0,e=t.length,i=[];n<e;)i.push(t.charAt(n++));return i},encode:function(t,n){for(var e=$trk.codes,i="";64<=t;t=t/64|0)i=e[t%64]+i;return(i=(0<=t?e[t]:"")+i).concat("zzzz").substring(0,n)},onBody:function(t){$trk.click(t)},onMouse:function(){TaaSDynamicObj.writeCookielet("ebay","psi",$trk.currentPSI)},onTrack:function(t,n){var e=n.trksid;e&&$trk.track(e,n.trklid)},onRover:function(t,n){if(null!=t.detail&&null!=t.detail)n=t.detail;else if(!n||"object"!=typeof n)return;var i,r,a=$trk,o=n.imp,c=a.rover.uri+(o?a.rover.imp:a.rover.clk);delete n.imp,o&&(r=e(o,"&",!0)),n&&(n.ts=Date.now(),i=e(n,"&",!0)),i&&0<i.length&&(c+=(0>c.indexOf("?")?"?":"&")+"trknvp="+i),r&&0<r.length&&(c+=(0>c.indexOf("?")?"?":"&")+"imp="+r),a.image.src=c},onPulsar:function(t,n,e){"undefined"!=typeof _plsUBTTQ&&(void 0!==n&&null!=n||null==t.detail||(Array.isArray(t.detail)?(n=t.detail[0],e=t.detail[1]):n=t.detail),void 0!==n&&null!=n&&(n=(t=JSON.parse(JSON.stringify(n))).eventProperty,void 0!==e&&null!=e&&(e=JSON.parse(JSON.stringify(e)),void 0!==n&&null!=n&&(n.actionKind=e.actionKind)),null!=t.eventFamily&&null!=t.eventAction&&_plsUBTTQ.push(["customEvts",t.eventFamily,t.eventAction,n])))},trackingUpdatePSI:function(t,n){null!=t.detail&&null!=t.detail&&(n=t.detail),n&&n.psi&&(self.currentPSI=n.psi),n&&n.callback&&"function"==typeof n.callback&&n.callback.call(self)},addLayerPSI:function(t,n){null!=t.detail&&null!=t.detail&&(n=t.detail),n&&n.psi&&(self.currentPSI+=n.psi)},clearLayerPSI:function(){self.currentPSI=self.originalPSI}}),window.TaaSTrackingCore=n}();var tracking=tracking||{};tracking.roversync=tracking.roversync&&void 0===QUnit||function(){function t(t){for(var n=t+"=",e=document.cookie.split(";"),i=0;i<e.length;i++)if(0==(t=(t=e[i]).trim()).indexOf(n))return n=t.indexOf("="),t.substring(n+1);return null}function n(){try{r=Date.now();var n=function(){var t=document.getElementById("roversyncimg");if(null!=t)return{img:t,method:"id"};for(var n=document.body.lastChild,e=/^(http|https):\/\/rover.*.ebay.*\/roversync\/*/i,i=0;40>=i&&null!=n;i++)if(null!=n){if(null!=n.src&&e.test(n.src))return{img:t=n,method:"sibling"};n=n.previousSibling}return{img:t,method:null}}();o=n.method,(a=null!=n.img)&&(s=n.img.src);var l=t("npii"),u=n.img;if(c=null!=u&&void 0!==u&&(1==u.naturalWidth&&1==u.naturalHeight||1==u.width&&1==u.height),!(!a&&null!=l||a&&c&&null!=l)){if(null==(f={hostname:m,hasImg:a,imgFindMethod:o,nonsession:t("nonsession"),npii:l,roversyncImgStatus:c,s:t("s"),winLoc:window.location}))d=null;else{n=encodeURIComponent;var p="host="+f.hostname+"&ifm="+f.imgFindMethod+"&hasImg ="+f.hasImg+"&hasNons="+(null!=f.nonsession)+"&hasNpii="+(null!=f.npii)+"&hasSess="+(null!=f.s)+"&nonSess="+n(f.nonsession)+"&npii="+n(f.npii)+"&ris="+f.roversyncImgStatus+"&s="+n(f.s)+"&winLoc="+n(f.winLoc);d="/?_trkparms="+n(p)}var h,f=d;(h=window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).withCredentials=!1,h.open("GET",f,!0),h.send("")}i=Date.now()}catch(t){e=t}}var e,i,r,a,o,c,l,s,d,u=Date.now(),m=window.location.hostname,p=100;p=null==(p=t("roversyncSampling"))||isNaN(p)?null==tracking._RSRandomSamplingPct||isNaN(tracking._RSRandomSamplingPct)?2:tracking._RSRandomSamplingPct:Number(p);return Math.random()<p/100?(l=!0,window.addEventListener?window.addEventListener("load",n,!1):window.attachEvent&&window.attachEvent("onload",n)):l=!1,{getVersion:function(){return"1.3"},logStatus:function(){console.log("err="+e+(null!=e?" err.description="+e.description+" err.message="+e.message+" err.name="+e.name+" err.number="+e.number:"")+" hasImg="+a+" handEndTime="+i+" handStartTime="+r+" handElapsedMs="+(i-r)+" hostname="+m+" imgFindMethod="+o+" roversyncImgStatus="+c+" sampling="+l+" startTime="+u+" url1="+s+" url2="+d)}}}();