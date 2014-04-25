/* start /scripts/web-platform/web-platform.js*/

var populateURLParams=function(){if(window.location.search.length>1){var _parametersets=window.location.search.substr(1).split("&");for(var _keyValuePair,i=0;i<_parametersets.length;i++){_keyValuePair=_parametersets[i].split("=");globs.urlparameters[decodeURI(_keyValuePair[0])]=decodeURI(_keyValuePair[1]);}}};if(typeof window.console==='undefined'){var console={log:function(x){}};}
var logToConsole=function(string){if(typeof window.console!='undefined'&&typeof window.console.log!='undefined'){console.log(string);}};var extend=function(target,source){target=target||{};for(var prop in source){if(source.hasOwnProperty(prop)){if(typeof source[prop]==='object'){target[prop]=extend(target[prop],source[prop]);}else{target[prop]=source[prop];}}}
return target;};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(searchElement){"use strict";if(this==null){throw new TypeError();}
var t=Object(this);var len=t.length>>>0;if(len===0){return-1;}
var n=0;if(arguments.length>1){n=Number(arguments[1]);if(n!=n){n=0;}else if(n!=0&&n!=Infinity&&n!=-Infinity){n=(n>0||-1)*Math.floor(Math.abs(n));}}
if(n>=len){return-1;}
var k=n>=0?n:Math.max(len-Math.abs(n),0);for(;k<len;k++){if(k in t&&t[k]===searchElement){return k;}}
return-1;}};var wpCookie=function(key,value,expires){var days,expiration,result;if(arguments.length>1&&String(value)!=="number"){if(typeof expires!=='undefined'){if(typeof expires==='number'){days=expires;expires=new Date();expires.setDate(expires.getDate()+days);expiration=expires.toGMTString();}else{if(typeof expires==='object'){expiration=expires.toGMTString();}else if(typeof expires==='string'){if(expires.length>28){expiration=expires;}else{expiration='';}}}}else{expiration='';}
value=String(value);return(document.cookie=[key,'=',value,'; expires='+expiration,'; path=/',''].join(''));}
return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?result[1]:null;};var playNow=(function(){var buttonAction=function(){if(webReg.gateOnReg==false&&globs.wdl.userLoggedIn){getInstaller();}else{window.location="/register";}};var getInstaller=function(){if(globs.urls.downloadURL){try{DTKR.sendEvent("downloadInstaller");}catch(e){}
var _frameCont=document.createElement('div');_frameCont.innerHTML="<iframe src="+globs.urls.downloadURL+" width='0' height='0'></iframe>";document.body.appendChild(_frameCont);}
return false;};return{buttonAction:buttonAction,getInstaller:getInstaller}})();var splitTestFramework=function(_testName,_actions,_options){var _opt={noCookie:false,cookieExp:30};extend(_opt,_options);var _setVersion=function(){var version;if(_opt.noCookie===true){return Math.floor(Math.random()*_actions.length);}
if(wpCookie("spltt_"+_testName)){version=wpCookie("spltt_"+_testName);}else{version=Math.floor(Math.random()*_actions.length);}
wpCookie("spltt_"+_testName,version,_opt.cookieExp);return version;};var _splitTest={testName:_testName,actions:_actions,version:_setVersion()};var getTestName=function(){return String(_splitTest.testName);};var getVersion=function(){return String(_splitTest.version);};var doAction=function(){_splitTest.actions[_splitTest.version]();};return{getTestName:getTestName,getVersion:getVersion,doAction:doAction};};populateURLParams();if(!wpCookie(globs.wdl.sitePrefix+"_visited")){wpCookie(globs.wdl.sitePrefix+"_visited",true,30);}
if(globs.urlparameters.launchedByLpShellReg&&!wpCookie('lp4_web_reg')){wpCookie("lp4_web_reg",true,30);}
if(typeof globs.wdl.cid!=='undefined'&&globs.wdl.cid){wpCookie('cmpID30',globs.wdl.cid,30);}

/* end /scripts/web-platform/web-platform.js*/