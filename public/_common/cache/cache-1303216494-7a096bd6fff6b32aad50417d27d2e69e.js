


(function(window,undefined){var document=window.document;var jQuery=(function(){var jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery);},_jQuery=window.jQuery,_$=window.$,rootjQuery,quickExpr=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,rnotwhite=/\S/,trimLeft=/^\s+/,trimRight=/\s+$/,rdigit=/\d/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,rvalidchars=/^[\],:{}\s]*$/,rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rwebkit=/(webkit)[ \/]([\w.]+)/,ropera=/(opera)(?:.*version)?[ \/]([\w.]+)/,rmsie=/(msie) ([\w.]+)/,rmozilla=/(mozilla)(?:.*? rv:([\w.]+))?/,userAgent=navigator.userAgent,browserMatch,readyList,DOMContentLoaded,toString=Object.prototype.toString,hasOwn=Object.prototype.hasOwnProperty,push=Array.prototype.push,slice=Array.prototype.slice,trim=String.prototype.trim,indexOf=Array.prototype.indexOf,class2type={};jQuery.fn=jQuery.prototype={constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem,ret,doc;if(!selector){return this;}
if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}
if(selector==="body"&&!context&&document.body){this.context=document;this[0]=document.body;this.selector="body";this.length=1;return this;}
if(typeof selector==="string"){match=quickExpr.exec(selector);if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;doc=(context?context.ownerDocument||context:document);ret=rsingleTag.exec(selector);if(ret){if(jQuery.isPlainObject(context)){selector=[document.createElement(ret[1])];jQuery.fn.attr.call(selector,context,true);}else{selector=[doc.createElement(ret[1])];}}else{ret=jQuery.buildFragment([match[1]],[doc]);selector=(ret.cacheable?jQuery.clone(ret.fragment):ret.fragment).childNodes;}
return jQuery.merge(this,selector);}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",jquery:"1.5.2",length:0,size:function(){return this.length;},toArray:function(){return slice.call(this,0);},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);},pushStack:function(elems,name,selector){var ret=this.constructor();if(jQuery.isArray(elems)){push.apply(ret,elems);}else{jQuery.merge(ret,elems);}
ret.prevObject=this;ret.context=this.context;if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector;}else if(name){ret.selector=this.selector+"."+name+"("+selector+")";}
return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.bindReady();readyList.done(fn);return this;},eq:function(i){return i===-1?this.slice(i):this.slice(i,+i+1);},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},slice:function(){return this.pushStack(slice.apply(this,arguments),"slice",slice.call(arguments).join(","));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||this.constructor(null);},push:push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({noConflict:function(deep){window.$=_$;if(deep){window.jQuery=_jQuery;}
return jQuery;},isReady:false,readyWait:1,ready:function(wait){if(wait===true){jQuery.readyWait--;}
if(!jQuery.readyWait||(wait!==true&&!jQuery.isReady)){if(!document.body){return setTimeout(jQuery.ready,1);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").unbind("ready");}}},bindReady:function(){if(readyList){return;}
readyList=jQuery._Deferred();if(document.readyState==="complete"){return setTimeout(jQuery.ready,1);}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",jQuery.ready,false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",jQuery.ready);var toplevel=false;try{toplevel=window.frameElement==null;}catch(e){}
if(document.documentElement.doScroll&&toplevel){doScrollCheck();}}},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj&&typeof obj==="object"&&"setInterval"in obj;},isNaN:function(obj){return obj==null||!rdigit.test(obj)||isNaN(obj);},type:function(obj){return obj==null?String(obj):class2type[toString.call(obj)]||"object";},isPlainObject:function(obj){if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}
var key;for(key in obj){}
return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function(obj){for(var name in obj){return false;}
return true;},error:function(msg){throw msg;},parseJSON:function(data){if(typeof data!=="string"||!data){return null;}
data=jQuery.trim(data);if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return window.JSON&&window.JSON.parse?window.JSON.parse(data):(new Function("return "+data))();}else{jQuery.error("Invalid JSON: "+data);}},parseXML:function(data,xml,tmp){if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}
tmp=xml.documentElement;if(!tmp||!tmp.nodeName||tmp.nodeName==="parsererror"){jQuery.error("Invalid XML: "+data);}
return xml;},noop:function(){},globalEval:function(data){if(data&&rnotwhite.test(data)){var head=document.head||document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");if(jQuery.support.scriptEval()){script.appendChild(document.createTextNode(data));}else{script.text=data;}
head.insertBefore(script,head.firstChild);head.removeChild(script);}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase();},each:function(object,callback,args){var name,i=0,length=object.length,isObj=length===undefined||jQuery.isFunction(object);if(args){if(isObj){for(name in object){if(callback.apply(object[name],args)===false){break;}}}else{for(;i<length;){if(callback.apply(object[i++],args)===false){break;}}}}else{if(isObj){for(name in object){if(callback.call(object[name],name,object[name])===false){break;}}}else{for(var value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}}
return object;},trim:trim?function(text){return text==null?"":trim.call(text);}:function(text){return text==null?"":text.toString().replace(trimLeft,"").replace(trimRight,"");},makeArray:function(array,results){var ret=results||[];if(array!=null){var type=jQuery.type(array);if(array.length==null||type==="string"||type==="function"||type==="regexp"||jQuery.isWindow(array)){push.call(ret,array);}else{jQuery.merge(ret,array);}}
return ret;},inArray:function(elem,array){if(array.indexOf){return array.indexOf(elem);}
for(var i=0,length=array.length;i<length;i++){if(array[i]===elem){return i;}}
return-1;},merge:function(first,second){var i=first.length,j=0;if(typeof second.length==="number"){for(var l=second.length;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var ret=[],retVal;inv=!!inv;for(var i=0,length=elems.length;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var ret=[],value;for(var i=0,length=elems.length;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}
return ret.concat.apply([],ret);},guid:1,proxy:function(fn,proxy,thisObject){if(arguments.length===2){if(typeof proxy==="string"){thisObject=fn;fn=thisObject[proxy];proxy=undefined;}else if(proxy&&!jQuery.isFunction(proxy)){thisObject=proxy;proxy=undefined;}}
if(!proxy&&fn){proxy=function(){return fn.apply(thisObject||this,arguments);};}
if(fn){proxy.guid=fn.guid=fn.guid||proxy.guid||jQuery.guid++;}
return proxy;},access:function(elems,key,value,exec,fn,pass){var length=elems.length;if(typeof key==="object"){for(var k in key){jQuery.access(elems,k,key[k],exec,fn,value);}
return elems;}
if(value!==undefined){exec=!pass&&exec&&jQuery.isFunction(value);for(var i=0;i<length;i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass);}
return elems;}
return length?fn(elems[0],key):undefined;},now:function(){return(new Date()).getTime();},uaMatch:function(ua){ua=ua.toLowerCase();var match=rwebkit.exec(ua)||ropera.exec(ua)||rmsie.exec(ua)||ua.indexOf("compatible")<0&&rmozilla.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"};},sub:function(){function jQuerySubclass(selector,context){return new jQuerySubclass.fn.init(selector,context);}
jQuery.extend(true,jQuerySubclass,this);jQuerySubclass.superclass=this;jQuerySubclass.fn=jQuerySubclass.prototype=this();jQuerySubclass.fn.constructor=jQuerySubclass;jQuerySubclass.subclass=this.subclass;jQuerySubclass.fn.init=function init(selector,context){if(context&&context instanceof jQuery&&!(context instanceof jQuerySubclass)){context=jQuerySubclass(context);}
return jQuery.fn.init.call(this,selector,context,rootjQuerySubclass);};jQuerySubclass.fn.init.prototype=jQuerySubclass.fn;var rootjQuerySubclass=jQuerySubclass(document);return jQuerySubclass;},browser:{}});jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});browserMatch=jQuery.uaMatch(userAgent);if(browserMatch.browser){jQuery.browser[browserMatch.browser]=true;jQuery.browser.version=browserMatch.version;}
if(jQuery.browser.webkit){jQuery.browser.safari=true;}
if(indexOf){jQuery.inArray=function(elem,array){return indexOf.call(array,elem);};}
if(rnotwhite.test("\xA0")){trimLeft=/^[\s\xA0]+/;trimRight=/[\s\xA0]+$/;}
rootjQuery=jQuery(document);if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);jQuery.ready();};}else if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);jQuery.ready();}};}
function doScrollCheck(){if(jQuery.isReady){return;}
try{document.documentElement.doScroll("left");}catch(e){setTimeout(doScrollCheck,1);return;}
jQuery.ready();}
return jQuery;})();var
promiseMethods="then done fail isResolved isRejected promise".split(" "),sliceDeferred=[].slice;jQuery.extend({_Deferred:function(){var
callbacks=[],fired,firing,cancelled,deferred={done:function(){if(!cancelled){var args=arguments,i,length,elem,type,_fired;if(fired){_fired=fired;fired=0;}
for(i=0,length=args.length;i<length;i++){elem=args[i];type=jQuery.type(elem);if(type==="array"){deferred.done.apply(deferred,elem);}else if(type==="function"){callbacks.push(elem);}}
if(_fired){deferred.resolveWith(_fired[0],_fired[1]);}}
return this;},resolveWith:function(context,args){if(!cancelled&&!fired&&!firing){args=args||[];firing=1;try{while(callbacks[0]){callbacks.shift().apply(context,args);}}
finally{fired=[context,args];firing=0;}}
return this;},resolve:function(){deferred.resolveWith(this,arguments);return this;},isResolved:function(){return!!(firing||fired);},cancel:function(){cancelled=1;callbacks=[];return this;}};return deferred;},Deferred:function(func){var deferred=jQuery._Deferred(),failDeferred=jQuery._Deferred(),promise;jQuery.extend(deferred,{then:function(doneCallbacks,failCallbacks){deferred.done(doneCallbacks).fail(failCallbacks);return this;},fail:failDeferred.done,rejectWith:failDeferred.resolveWith,reject:failDeferred.resolve,isRejected:failDeferred.isResolved,promise:function(obj){if(obj==null){if(promise){return promise;}
promise=obj={};}
var i=promiseMethods.length;while(i--){obj[promiseMethods[i]]=deferred[promiseMethods[i]];}
return obj;}});deferred.done(failDeferred.cancel).fail(deferred.cancel);delete deferred.cancel;if(func){func.call(deferred,deferred);}
return deferred;},when:function(firstParam){var args=arguments,i=0,length=args.length,count=length,deferred=length<=1&&firstParam&&jQuery.isFunction(firstParam.promise)?firstParam:jQuery.Deferred();function resolveFunc(i){return function(value){args[i]=arguments.length>1?sliceDeferred.call(arguments,0):value;if(!(--count)){deferred.resolveWith(deferred,sliceDeferred.call(args,0));}};}
if(length>1){for(;i<length;i++){if(args[i]&&jQuery.isFunction(args[i].promise)){args[i].promise().then(resolveFunc(i),deferred.reject);}else{--count;}}
if(!count){deferred.resolveWith(deferred,args);}}else if(deferred!==firstParam){deferred.resolveWith(deferred,length?[firstParam]:[]);}
return deferred.promise();}});(function(){jQuery.support={};var div=document.createElement("div");div.style.display="none";div.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var all=div.getElementsByTagName("*"),a=div.getElementsByTagName("a")[0],select=document.createElement("select"),opt=select.appendChild(document.createElement("option")),input=div.getElementsByTagName("input")[0];if(!all||!all.length||!a){return;}
jQuery.support={leadingWhitespace:div.firstChild.nodeType===3,tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/red/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:/^0.55$/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:input.value==="on",optSelected:opt.selected,deleteExpando:true,optDisabled:false,checkClone:false,noCloneEvent:true,noCloneChecked:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true,reliableMarginRight:true};input.checked=true;jQuery.support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;jQuery.support.optDisabled=!opt.disabled;var _scriptEval=null;jQuery.support.scriptEval=function(){if(_scriptEval===null){var root=document.documentElement,script=document.createElement("script"),id="script"+jQuery.now();try{script.appendChild(document.createTextNode("window."+id+"=1;"));}catch(e){}
root.insertBefore(script,root.firstChild);if(window[id]){_scriptEval=true;delete window[id];}else{_scriptEval=false;}
root.removeChild(script);}
return _scriptEval;};try{delete div.test;}catch(e){jQuery.support.deleteExpando=false;}
if(!div.addEventListener&&div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function click(){jQuery.support.noCloneEvent=false;div.detachEvent("onclick",click);});div.cloneNode(true).fireEvent("onclick");}
div=document.createElement("div");div.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var fragment=document.createDocumentFragment();fragment.appendChild(div.firstChild);jQuery.support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;jQuery(function(){var div=document.createElement("div"),body=document.getElementsByTagName("body")[0];if(!body){return;}
div.style.width=div.style.paddingLeft="1px";body.appendChild(div);jQuery.boxModel=jQuery.support.boxModel=div.offsetWidth===2;if("zoom"in div.style){div.style.display="inline";div.style.zoom=1;jQuery.support.inlineBlockNeedsLayout=div.offsetWidth===2;div.style.display="";div.innerHTML="<div style='width:4px;'></div>";jQuery.support.shrinkWrapBlocks=div.offsetWidth!==2;}
div.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var tds=div.getElementsByTagName("td");jQuery.support.reliableHiddenOffsets=tds[0].offsetHeight===0;tds[0].style.display="";tds[1].style.display="none";jQuery.support.reliableHiddenOffsets=jQuery.support.reliableHiddenOffsets&&tds[0].offsetHeight===0;div.innerHTML="";if(document.defaultView&&document.defaultView.getComputedStyle){div.style.width="1px";div.style.marginRight="0";jQuery.support.reliableMarginRight=(parseInt(document.defaultView.getComputedStyle(div,null).marginRight,10)||0)===0;}
body.removeChild(div).style.display="none";div=tds=null;});var eventSupported=function(eventName){var el=document.createElement("div");eventName="on"+eventName;if(!el.attachEvent){return true;}
var isSupported=(eventName in el);if(!isSupported){el.setAttribute(eventName,"return;");isSupported=typeof el[eventName]==="function";}
return isSupported;};jQuery.support.submitBubbles=eventSupported("submit");jQuery.support.changeBubbles=eventSupported("change");div=all=a=null;})();var rbrace=/^(?:\{.*\}|\[.*\])$/;jQuery.extend({cache:{},uuid:0,expando:"jQuery"+(jQuery.fn.jquery+Math.random()).replace(/\D/g,""),noData:{"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var internalKey=jQuery.expando,getByName=typeof name==="string",thisCache,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:elem[jQuery.expando]&&jQuery.expando;if((!id||(pvt&&id&&!cache[id][internalKey]))&&getByName&&data===undefined){return;}
if(!id){if(isNode){elem[jQuery.expando]=id=++jQuery.uuid;}else{id=jQuery.expando;}}
if(!cache[id]){cache[id]={};if(!isNode){cache[id].toJSON=jQuery.noop;}}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id][internalKey]=jQuery.extend(cache[id][internalKey],name);}else{cache[id]=jQuery.extend(cache[id],name);}}
thisCache=cache[id];if(pvt){if(!thisCache[internalKey]){thisCache[internalKey]={};}
thisCache=thisCache[internalKey];}
if(data!==undefined){thisCache[name]=data;}
if(name==="events"&&!thisCache[name]){return thisCache[internalKey]&&thisCache[internalKey].events;}
return getByName?thisCache[name]:thisCache;},removeData:function(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){var thisCache=pvt?cache[id][internalKey]:cache[id];if(thisCache){delete thisCache[name];if(!isEmptyDataObject(thisCache)){return;}}}
if(pvt){delete cache[id][internalKey];if(!isEmptyDataObject(cache[id])){return;}}
var internalCache=cache[id][internalKey];if(jQuery.support.deleteExpando||cache!=window){delete cache[id];}else{cache[id]=null;}
if(internalCache){cache[id]={};if(!isNode){cache[id].toJSON=jQuery.noop;}
cache[id][internalKey]=internalCache;}else if(isNode){if(jQuery.support.deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}else{elem[jQuery.expando]=null;}}},_data:function(elem,name,data){return jQuery.data(elem,name,data,true);},acceptData:function(elem){if(elem.nodeName){var match=jQuery.noData[elem.nodeName.toLowerCase()];if(match){return!(match===true||elem.getAttribute("classid")!==match);}}
return true;}});jQuery.fn.extend({data:function(key,value){var data=null;if(typeof key==="undefined"){if(this.length){data=jQuery.data(this[0]);if(this[0].nodeType===1){var attr=this[0].attributes,name;for(var i=0,l=attr.length;i<l;i++){name=attr[i].name;if(name.indexOf("data-")===0){name=name.substr(5);dataAttr(this[0],name,data[name]);}}}}
return data;}else if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length){data=jQuery.data(this[0],key);data=dataAttr(this[0],key,data);}
return data===undefined&&parts[1]?this.data(parts[0]):data;}else{return this.each(function(){var $this=jQuery(this),args=[parts[0],value];$this.triggerHandler("setData"+parts[1]+"!",args);jQuery.data(this,key,value);$this.triggerHandler("changeData"+parts[1]+"!",args);});}},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){data=elem.getAttribute("data-"+key);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:!jQuery.isNaN(data)?parseFloat(data):rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){for(var name in obj){if(name!=="toJSON"){return false;}}
return true;}
jQuery.extend({queue:function(elem,type,data){if(!elem){return;}
type=(type||"fx")+"queue";var q=jQuery._data(elem,type);if(!data){return q||[];}
if(!q||jQuery.isArray(data)){q=jQuery._data(elem,type,jQuery.makeArray(data));}else{q.push(data);}
return q;},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),fn=queue.shift();if(fn==="inprogress"){fn=queue.shift();}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
fn.call(elem,function(){jQuery.dequeue(elem,type);});}
if(!queue.length){jQuery.removeData(elem,type+"queue",true);}}});jQuery.fn.extend({queue:function(type,data){if(typeof type!=="string"){data=type;type="fx";}
if(data===undefined){return jQuery.queue(this[0],type);}
return this.each(function(i){var queue=jQuery.queue(this,type,data);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(){var elem=this;setTimeout(function(){jQuery.dequeue(elem,type);},time);});},clearQueue:function(type){return this.queue(type||"fx",[]);}});var rclass=/[\n\t\r]/g,rspaces=/\s+/,rreturn=/\r/g,rspecialurl=/^(?:href|src|style)$/,rtype=/^(?:button|input)$/i,rfocusable=/^(?:button|input|object|select|textarea)$/i,rclickable=/^a(?:rea)?$/i,rradiocheck=/^(?:radio|checkbox)$/i;jQuery.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,name,value,true,jQuery.attr);},removeAttr:function(name,fn){return this.each(function(){jQuery.attr(this,name,"");if(this.nodeType===1){this.removeAttribute(name);}});},addClass:function(value){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);self.addClass(value.call(this,i,self.attr("class")));});}
if(value&&typeof value==="string"){var classNames=(value||"").split(rspaces);for(var i=0,l=this.length;i<l;i++){var elem=this[i];if(elem.nodeType===1){if(!elem.className){elem.className=value;}else{var className=" "+elem.className+" ",setClass=elem.className;for(var c=0,cl=classNames.length;c<cl;c++){if(className.indexOf(" "+classNames[c]+" ")<0){setClass+=" "+classNames[c];}}
elem.className=jQuery.trim(setClass);}}}}
return this;},removeClass:function(value){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);self.removeClass(value.call(this,i,self.attr("class")));});}
if((value&&typeof value==="string")||value===undefined){var classNames=(value||"").split(rspaces);for(var i=0,l=this.length;i<l;i++){var elem=this[i];if(elem.nodeType===1&&elem.className){if(value){var className=(" "+elem.className+" ").replace(rclass," ");for(var c=0,cl=classNames.length;c<cl;c++){className=className.replace(" "+classNames[c]+" "," ");}
elem.className=jQuery.trim(className);}else{elem.className="";}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);self.toggleClass(value.call(this,i,self.attr("class"),stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(rspaces);while((className=classNames[i++])){state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);}}else if(type==="undefined"||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ";for(var i=0,l=this.length;i<l;i++){if((" "+this[i].className+" ").replace(rclass," ").indexOf(className)>-1){return true;}}
return false;},val:function(value){if(!arguments.length){var elem=this[0];if(elem){if(jQuery.nodeName(elem,"option")){var val=elem.attributes.value;return!val||val.specified?elem.value:elem.text;}
if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type==="select-one";if(index<0){return null;}
for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
if(one&&!values.length&&options.length){return jQuery(options[index]).val();}
return values;}
if(rradiocheck.test(elem.type)&&!jQuery.support.checkOn){return elem.getAttribute("value")===null?"on":elem.value;}
return(elem.value||"").replace(rreturn,"");}
return undefined;}
var isFunction=jQuery.isFunction(value);return this.each(function(i){var self=jQuery(this),val=value;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,self.val());}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
if(jQuery.isArray(val)&&rradiocheck.test(this.type)){this.checked=jQuery.inArray(self.val(),val)>=0;}else if(jQuery.nodeName(this,"select")){var values=jQuery.makeArray(val);jQuery("option",this).each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){this.selectedIndex=-1;}}else{this.value=val;}});}});jQuery.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(elem,name,value,pass){if(!elem||elem.nodeType===3||elem.nodeType===8||elem.nodeType===2){return undefined;}
if(pass&&name in jQuery.attrFn){return jQuery(elem)[name](value);}
var notxml=elem.nodeType!==1||!jQuery.isXMLDoc(elem),set=value!==undefined;name=notxml&&jQuery.props[name]||name;if(elem.nodeType===1){var special=rspecialurl.test(name);if(name==="selected"&&!jQuery.support.optSelected){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}
if((name in elem||elem[name]!==undefined)&&notxml&&!special){if(set){if(name==="type"&&rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed");}
if(value===null){if(elem.nodeType===1){elem.removeAttribute(name);}}else{elem[name]=value;}}
if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name)){return elem.getAttributeNode(name).nodeValue;}
if(name==="tabIndex"){var attributeNode=elem.getAttributeNode("tabIndex");return attributeNode&&attributeNode.specified?attributeNode.value:rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}
return elem[name];}
if(!jQuery.support.style&&notxml&&name==="style"){if(set){elem.style.cssText=""+value;}
return elem.style.cssText;}
if(set){elem.setAttribute(name,""+value);}
if(!elem.attributes[name]&&(elem.hasAttribute&&!elem.hasAttribute(name))){return undefined;}
var attr=!jQuery.support.hrefNormalized&&notxml&&special?elem.getAttribute(name,2):elem.getAttribute(name);return attr===null?undefined:attr;}
if(set){elem[name]=value;}
return elem[name];}});var rnamespaces=/\.(.*)$/,rformElems=/^(?:textarea|input|select)$/i,rperiod=/\./g,rspace=/ /g,rescape=/[^\w\s.|`]/g,fcleanup=function(nm){return nm.replace(rescape,"\\$&");};jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType===3||elem.nodeType===8){return;}
try{if(jQuery.isWindow(elem)&&(elem!==window&&!elem.frameElement)){elem=window;}}
catch(e){}
if(handler===false){handler=returnFalse;}else if(!handler){return;}
var handleObjIn,handleObj;if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;}
if(!handler.guid){handler.guid=jQuery.guid++;}
var elemData=jQuery._data(elem);if(!elemData){return;}
var events=elemData.events,eventHandle=elemData.handle;if(!events){elemData.events=events={};}
if(!eventHandle){elemData.handle=eventHandle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.handle.apply(eventHandle.elem,arguments):undefined;};}
eventHandle.elem=elem;types=types.split(" ");var type,i=0,namespaces;while((type=types[i++])){handleObj=handleObjIn?jQuery.extend({},handleObjIn):{handler:handler,data:data};if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();handleObj.namespace=namespaces.slice(0).sort().join(".");}else{namespaces=[];handleObj.namespace="";}
handleObj.type=type;if(!handleObj.guid){handleObj.guid=handler.guid;}
var handlers=events[type],special=jQuery.event.special[type]||{};if(!handlers){handlers=events[type]=[];if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
handlers.push(handleObj);jQuery.event.global[type]=true;}
elem=null;},global:{},remove:function(elem,types,handler,pos){if(elem.nodeType===3||elem.nodeType===8){return;}
if(handler===false){handler=returnFalse;}
var ret,type,fn,j,i=0,all,namespaces,namespace,special,eventType,handleObj,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem),events=elemData&&elemData.events;if(!elemData||!events){return;}
if(types&&types.type){handler=types.handler;types=types.type;}
if(!types||typeof types==="string"&&types.charAt(0)==="."){types=types||"";for(type in events){jQuery.event.remove(elem,type+types);}
return;}
types=types.split(" ");while((type=types[i++])){origType=type;handleObj=null;all=type.indexOf(".")<0;namespaces=[];if(!all){namespaces=type.split(".");type=namespaces.shift();namespace=new RegExp("(^|\\.)"+
jQuery.map(namespaces.slice(0).sort(),fcleanup).join("\\.(?:.*\\.)?")+"(\\.|$)");}
eventType=events[type];if(!eventType){continue;}
if(!handler){for(j=0;j<eventType.length;j++){handleObj=eventType[j];if(all||namespace.test(handleObj.namespace)){jQuery.event.remove(elem,origType,handleObj.handler,j);eventType.splice(j--,1);}}
continue;}
special=jQuery.event.special[type]||{};for(j=pos||0;j<eventType.length;j++){handleObj=eventType[j];if(handler.guid===handleObj.guid){if(all||namespace.test(handleObj.namespace)){if(pos==null){eventType.splice(j--,1);}
if(special.remove){special.remove.call(elem,handleObj);}}
if(pos!=null){break;}}}
if(eventType.length===0||pos!=null&&eventType.length===1){if(!special.teardown||special.teardown.call(elem,namespaces)===false){jQuery.removeEvent(elem,type,elemData.handle);}
ret=null;delete events[type];}}
if(jQuery.isEmptyObject(events)){var handle=elemData.handle;if(handle){handle.elem=null;}
delete elemData.events;delete elemData.handle;if(jQuery.isEmptyObject(elemData)){jQuery.removeData(elem,undefined,true);}}},trigger:function(event,data,elem){var type=event.type||event,bubbling=arguments[3];if(!bubbling){event=typeof event==="object"?event[jQuery.expando]?event:jQuery.extend(jQuery.Event(type),event):jQuery.Event(type);if(type.indexOf("!")>=0){event.type=type=type.slice(0,-1);event.exclusive=true;}
if(!elem){event.stopPropagation();if(jQuery.event.global[type]){jQuery.each(jQuery.cache,function(){var internalKey=jQuery.expando,internalCache=this[internalKey];if(internalCache&&internalCache.events&&internalCache.events[type]){jQuery.event.trigger(event,data,internalCache.handle.elem);}});}}
if(!elem||elem.nodeType===3||elem.nodeType===8){return undefined;}
event.result=undefined;event.target=elem;data=jQuery.makeArray(data);data.unshift(event);}
event.currentTarget=elem;var handle=jQuery._data(elem,"handle");if(handle){handle.apply(elem,data);}
var parent=elem.parentNode||elem.ownerDocument;try{if(!(elem&&elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()])){if(elem["on"+type]&&elem["on"+type].apply(elem,data)===false){event.result=false;event.preventDefault();}}}catch(inlineError){}
if(!event.isPropagationStopped()&&parent){jQuery.event.trigger(event,data,parent,true);}else if(!event.isDefaultPrevented()){var old,target=event.target,targetType=type.replace(rnamespaces,""),isClick=jQuery.nodeName(target,"a")&&targetType==="click",special=jQuery.event.special[targetType]||{};if((!special._default||special._default.call(elem,event)===false)&&!isClick&&!(target&&target.nodeName&&jQuery.noData[target.nodeName.toLowerCase()])){try{if(target[targetType]){old=target["on"+targetType];if(old){target["on"+targetType]=null;}
jQuery.event.triggered=event.type;target[targetType]();}}catch(triggerError){}
if(old){target["on"+targetType]=old;}
jQuery.event.triggered=undefined;}}},handle:function(event){var all,handlers,namespaces,namespace_re,events,namespace_sort=[],args=jQuery.makeArray(arguments);event=args[0]=jQuery.event.fix(event||window.event);event.currentTarget=this;all=event.type.indexOf(".")<0&&!event.exclusive;if(!all){namespaces=event.type.split(".");event.type=namespaces.shift();namespace_sort=namespaces.slice(0).sort();namespace_re=new RegExp("(^|\\.)"+namespace_sort.join("\\.(?:.*\\.)?")+"(\\.|$)");}
event.namespace=event.namespace||namespace_sort.join(".");events=jQuery._data(this,"events");handlers=(events||{})[event.type];if(events&&handlers){handlers=handlers.slice(0);for(var j=0,l=handlers.length;j<l;j++){var handleObj=handlers[j];if(all||namespace_re.test(handleObj.namespace)){event.handler=handleObj.handler;event.data=handleObj.data;event.handleObj=handleObj;var ret=handleObj.handler.apply(this,args);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}
if(event.isImmediatePropagationStopped()){break;}}}}
return event.result;},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(event){if(event[jQuery.expando]){return event;}
var originalEvent=event;event=jQuery.Event(originalEvent);for(var i=this.props.length,prop;i;){prop=this.props[--i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=event.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
if(!event.relatedTarget&&event.fromElement){event.relatedTarget=event.fromElement===event.target?event.toElement:event.fromElement;}
if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(event.which==null&&(event.charCode!=null||event.keyCode!=null)){event.which=event.charCode!=null?event.charCode:event.keyCode;}
if(!event.metaKey&&event.ctrlKey){event.metaKey=event.ctrlKey;}
if(!event.which&&event.button!==undefined){event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));}
return event;},guid:1E8,proxy:jQuery.proxy,special:{ready:{setup:jQuery.bindReady,teardown:jQuery.noop},live:{add:function(handleObj){jQuery.event.add(this,liveConvert(handleObj.origType,handleObj.selector),jQuery.extend({},handleObj,{handler:liveHandler,guid:handleObj.handler.guid}));},remove:function(handleObj){jQuery.event.remove(this,liveConvert(handleObj.origType,handleObj.selector),handleObj);}},beforeunload:{setup:function(data,namespaces,eventHandle){if(jQuery.isWindow(this)){this.onbeforeunload=eventHandle;}},teardown:function(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null;}}}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){if(elem.detachEvent){elem.detachEvent("on"+type,handle);}};jQuery.Event=function(src){if(!this.preventDefault){return new jQuery.Event(src);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;}else{this.type=src;}
this.timeStamp=jQuery.now();this[jQuery.expando]=true;};function returnFalse(){return false;}
function returnTrue(){return true;}
jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};var withinElement=function(event){var parent=event.relatedTarget;try{if(parent&&parent!==document&&!parent.parentNode){return;}
while(parent&&parent!==this){parent=parent.parentNode;}
if(parent!==this){event.type=event.data;jQuery.event.handle.apply(this,arguments);}}catch(e){}},delegate=function(event){event.type=event.data;jQuery.event.handle.apply(this,arguments);};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={setup:function(data){jQuery.event.add(this,fix,data&&data.selector?delegate:withinElement,orig);},teardown:function(data){jQuery.event.remove(this,fix,data&&data.selector?delegate:withinElement);}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(data,namespaces){if(this.nodeName&&this.nodeName.toLowerCase()!=="form"){jQuery.event.add(this,"click.specialSubmit",function(e){var elem=e.target,type=elem.type;if((type==="submit"||type==="image")&&jQuery(elem).closest("form").length){trigger("submit",this,arguments);}});jQuery.event.add(this,"keypress.specialSubmit",function(e){var elem=e.target,type=elem.type;if((type==="text"||type==="password")&&jQuery(elem).closest("form").length&&e.keyCode===13){trigger("submit",this,arguments);}});}else{return false;}},teardown:function(namespaces){jQuery.event.remove(this,".specialSubmit");}};}
if(!jQuery.support.changeBubbles){var changeFilters,getVal=function(elem){var type=elem.type,val=elem.value;if(type==="radio"||type==="checkbox"){val=elem.checked;}else if(type==="select-multiple"){val=elem.selectedIndex>-1?jQuery.map(elem.options,function(elem){return elem.selected;}).join("-"):"";}else if(elem.nodeName.toLowerCase()==="select"){val=elem.selectedIndex;}
return val;},testChange=function testChange(e){var elem=e.target,data,val;if(!rformElems.test(elem.nodeName)||elem.readOnly){return;}
data=jQuery._data(elem,"_change_data");val=getVal(elem);if(e.type!=="focusout"||elem.type!=="radio"){jQuery._data(elem,"_change_data",val);}
if(data===undefined||val===data){return;}
if(data!=null||val){e.type="change";e.liveFired=undefined;jQuery.event.trigger(e,arguments[1],elem);}};jQuery.event.special.change={filters:{focusout:testChange,beforedeactivate:testChange,click:function(e){var elem=e.target,type=elem.type;if(type==="radio"||type==="checkbox"||elem.nodeName.toLowerCase()==="select"){testChange.call(this,e);}},keydown:function(e){var elem=e.target,type=elem.type;if((e.keyCode===13&&elem.nodeName.toLowerCase()!=="textarea")||(e.keyCode===32&&(type==="checkbox"||type==="radio"))||type==="select-multiple"){testChange.call(this,e);}},beforeactivate:function(e){var elem=e.target;jQuery._data(elem,"_change_data",getVal(elem));}},setup:function(data,namespaces){if(this.type==="file"){return false;}
for(var type in changeFilters){jQuery.event.add(this,type+".specialChange",changeFilters[type]);}
return rformElems.test(this.nodeName);},teardown:function(namespaces){jQuery.event.remove(this,".specialChange");return rformElems.test(this.nodeName);}};changeFilters=jQuery.event.special.change.filters;changeFilters.focus=changeFilters.beforeactivate;}
function trigger(type,elem,args){var event=jQuery.extend({},args[0]);event.type=type;event.originalEvent={};event.liveFired=undefined;jQuery.event.handle.call(elem,event);if(event.isDefaultPrevented()){args[0].preventDefault();}}
if(document.addEventListener){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0;jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};function handler(donor){var e=jQuery.event.fix(donor);e.type=fix;e.originalEvent={};jQuery.event.trigger(e,null,e.target);if(e.isDefaultPrevented()){donor.preventDefault();}}});}
jQuery.each(["bind","one"],function(i,name){jQuery.fn[name]=function(type,data,fn){if(typeof type==="object"){for(var key in type){this[name](key,data,type[key],fn);}
return this;}
if(jQuery.isFunction(data)||data===false){fn=data;data=undefined;}
var handler=name==="one"?jQuery.proxy(fn,function(event){jQuery(this).unbind(event,handler);return fn.apply(this,arguments);}):fn;if(type==="unload"&&name!=="one"){this.one(type,data,fn);}else{for(var i=0,l=this.length;i<l;i++){jQuery.event.add(this[i],type,handler,data);}}
return this;};});jQuery.fn.extend({unbind:function(type,fn){if(typeof type==="object"&&!type.preventDefault){for(var key in type){this.unbind(key,type[key]);}}else{for(var i=0,l=this.length;i<l;i++){jQuery.event.remove(this[i],type,fn);}}
return this;},delegate:function(selector,types,data,fn){return this.live(types,data,fn,selector);},undelegate:function(selector,types,fn){if(arguments.length===0){return this.unbind("live");}else{return this.die(types,null,fn,selector);}},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){if(this[0]){var event=jQuery.Event(type);event.preventDefault();event.stopPropagation();jQuery.event.trigger(event,data,this[0]);return event.result;}},toggle:function(fn){var args=arguments,i=1;while(i<args.length){jQuery.proxy(fn,args[i++]);}
return this.click(jQuery.proxy(fn,function(event){var lastToggle=(jQuery._data(this,"lastToggle"+fn.guid)||0)%i;jQuery._data(this,"lastToggle"+fn.guid,lastToggle+1);event.preventDefault();return args[lastToggle].apply(this,arguments)||false;}));},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});var liveMap={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};jQuery.each(["live","die"],function(i,name){jQuery.fn[name]=function(types,data,fn,origSelector){var type,i=0,match,namespaces,preType,selector=origSelector||this.selector,context=origSelector?this:jQuery(this.context);if(typeof types==="object"&&!types.preventDefault){for(var key in types){context[name](key,data,types[key],selector);}
return this;}
if(jQuery.isFunction(data)){fn=data;data=undefined;}
types=(types||"").split(" ");while((type=types[i++])!=null){match=rnamespaces.exec(type);namespaces="";if(match){namespaces=match[0];type=type.replace(rnamespaces,"");}
if(type==="hover"){types.push("mouseenter"+namespaces,"mouseleave"+namespaces);continue;}
preType=type;if(type==="focus"||type==="blur"){types.push(liveMap[type]+namespaces);type=type+namespaces;}else{type=(liveMap[type]||type)+namespaces;}
if(name==="live"){for(var j=0,l=context.length;j<l;j++){jQuery.event.add(context[j],"live."+liveConvert(type,selector),{data:data,selector:selector,handler:fn,origType:type,origHandler:fn,preType:preType});}}else{context.unbind("live."+liveConvert(type,selector),fn);}}
return this;};});function liveHandler(event){var stop,maxLevel,related,match,handleObj,elem,j,i,l,data,close,namespace,ret,elems=[],selectors=[],events=jQuery._data(this,"events");if(event.liveFired===this||!events||!events.live||event.target.disabled||event.button&&event.type==="click"){return;}
if(event.namespace){namespace=new RegExp("(^|\\.)"+event.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");}
event.liveFired=this;var live=events.live.slice(0);for(j=0;j<live.length;j++){handleObj=live[j];if(handleObj.origType.replace(rnamespaces,"")===event.type){selectors.push(handleObj.selector);}else{live.splice(j--,1);}}
match=jQuery(event.target).closest(selectors,event.currentTarget);for(i=0,l=match.length;i<l;i++){close=match[i];for(j=0;j<live.length;j++){handleObj=live[j];if(close.selector===handleObj.selector&&(!namespace||namespace.test(handleObj.namespace))&&!close.elem.disabled){elem=close.elem;related=null;if(handleObj.preType==="mouseenter"||handleObj.preType==="mouseleave"){event.type=handleObj.preType;related=jQuery(event.relatedTarget).closest(handleObj.selector)[0];}
if(!related||related!==elem){elems.push({elem:elem,handleObj:handleObj,level:close.level});}}}}
for(i=0,l=elems.length;i<l;i++){match=elems[i];if(maxLevel&&match.level>maxLevel){break;}
event.currentTarget=match.elem;event.data=match.handleObj.data;event.handleObj=match.handleObj;ret=match.handleObj.origHandler.apply(match.elem,arguments);if(ret===false||event.isPropagationStopped()){maxLevel=match.level;if(ret===false){stop=false;}
if(event.isImmediatePropagationStopped()){break;}}}
return stop;}
function liveConvert(type,selector){return(type&&type!=="*"?type+".":"")+selector.replace(rperiod,"`").replace(rspace,"&");}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){if(fn==null){fn=data;data=null;}
return arguments.length>0?this.bind(name,data,fn):this.trigger(name);};if(jQuery.attrFn){jQuery.attrFn[name]=true;}});(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true,rBackslash=/\\/g,rNonWord=/\W/;[0,0].sort(function(){baseHasDuplicate=false;return 0;});var Sizzle=function(selector,context,results,seed){results=results||[];context=context||document;var origContext=context;if(context.nodeType!==1&&context.nodeType!==9){return[];}
if(!selector||typeof selector!=="string"){return results;}
var m,set,checkSet,extra,ret,cur,pop,i,prune=true,contextXML=Sizzle.isXML(context),parts=[],soFar=selector;do{chunker.exec("");m=chunker.exec(soFar);if(m){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break;}}}while(m);if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context);}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift();}
set=posProcess(selector,set);}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];}
if(context){ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set);}else{prune=false;}
while(parts.length){cur=parts.pop();pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=parts.pop();}
if(pop==null){pop=context;}
Expr.relative[cur](checkSet,pop,contextXML);}}else{checkSet=parts=[];}}
if(!checkSet){checkSet=set;}
if(!checkSet){Sizzle.error(cur||selector);}
if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else if(context&&context.nodeType===1){for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&Sizzle.contains(context,checkSet[i]))){results.push(set[i]);}}}else{for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}else{makeArray(checkSet,results);}
if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results);}
return results;};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}
return results;};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);};Sizzle.matchesSelector=function(node,expr){return Sizzle(expr,null,null,[node]).length>0;};Sizzle.find=function(expr,context,isXML){var set;if(!expr){return[];}
for(var i=0,l=Expr.order.length;i<l;i++){var match,type=Expr.order[i];if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(rBackslash,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}
if(!set){set=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName("*"):[];}
return{set:set,expr:expr};};Sizzle.filter=function(expr,set,inplace,not){var match,anyFound,old=expr,result=[],curLoop=set,isXMLFilter=set&&set[0]&&Sizzle.isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){var found,item,filter=Expr.filter[type],left=match[1];anyFound=false;match.splice(1,1);if(left.substr(left.length-1)==="\\"){continue;}
if(curLoop===result){result=[];}
if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else if(match===true){continue;}}
if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true;}else{curLoop[i]=false;}}else if(pass){result.push(item);anyFound=true;}}}}
if(found!==undefined){if(!inplace){curLoop=result;}
expr=expr.replace(Expr.match[type],"");if(!anyFound){return[];}
break;}}}
if(expr===old){if(anyFound==null){Sizzle.error(expr);}else{break;}}
old=expr;}
return curLoop;};Sizzle.error=function(msg){throw"Syntax error, unrecognized expression: "+msg;};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");},type:function(elem){return elem.getAttribute("type");}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!rNonWord.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag){part=part.toLowerCase();}
for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}
checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part;}}
if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);}},">":function(checkSet,part){var elem,isPartStr=typeof part==="string",i=0,l=checkSet.length;if(isPartStr&&!rNonWord.test(part)){part=part.toLowerCase();for(;i<l;i++){elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false;}}}else{for(;i<l;i++){elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}
if(isPartStr){Sizzle.filter(part,checkSet,true);}}},"":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}
checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}
checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m&&m.parentNode?[m]:[];}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}
return ret.length===0?null:ret;}},TAG:function(match,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(match[1]);}}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(rBackslash,"")+" ";if(isXML){return match;}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n\r]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem);}}else if(inplace){curLoop[i]=false;}}}
return false;},ID:function(match){return match[1].replace(rBackslash,"");},TAG:function(match,curLoop){return match[1].replace(rBackslash,"").toLowerCase();},CHILD:function(match){if(match[1]==="nth"){if(!match[2]){Sizzle.error(match[0]);}
match[2]=match[2].replace(/^\+|\s*/g,'');var test=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0;}
else if(match[2]){Sizzle.error(match[0]);}
match[0]=done++;return match;},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1]=match[1].replace(rBackslash,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];}
match[4]=(match[4]||match[5]||"").replace(rBackslash,"");if(match[2]==="~="){match[4]=" "+match[4]+" ";}
return match;},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}
return false;}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}
return match;},POS:function(match){match.unshift(true);return match;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},parent:function(elem){return!!elem.firstChild;},empty:function(elem){return!elem.firstChild;},has:function(elem,i,match){return!!Sizzle(match[3],elem).length;},header:function(elem){return(/h\d/i).test(elem.nodeName);},text:function(elem){var attr=elem.getAttribute("type"),type=elem.type;return"text"===type&&(attr===type||attr===null);},radio:function(elem){return"radio"===elem.type;},checkbox:function(elem){return"checkbox"===elem.type;},file:function(elem){return"file"===elem.type;},password:function(elem){return"password"===elem.type;},submit:function(elem){return"submit"===elem.type;},image:function(elem){return"image"===elem.type;},reset:function(elem){return"reset"===elem.type;},button:function(elem){return"button"===elem.type||elem.nodeName.toLowerCase()==="button";},input:function(elem){return(/input|select|textarea|button/i).test(elem.nodeName);}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,match,array){return i===array.length-1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,match){return i<match[3]-0;},gt:function(elem,i,match){return i>match[3]-0;},nth:function(elem,i,match){return match[3]-0===i;},eq:function(elem,i,match){return match[3]-0===i;}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else if(name==="contains"){return(elem.textContent||elem.innerText||Sizzle.getText([elem])||"").indexOf(match[3])>=0;}else if(name==="not"){var not=match[3];for(var j=0,l=not.length;j<l;j++){if(not[j]===elem){return false;}}
return true;}else{Sizzle.error(name);}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false;}}
if(type==="first"){return true;}
node=elem;case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false;}}
return true;case"nth":var first=match[2],last=match[3];if(first===1&&last===0){return true;}
var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}
parent.sizcache=doneName;}
var diff=elem.nodeIndex-last;if(first===0){return diff===0;}else{return(diff%first===0&&diff/first>=0);}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match;},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS,fescape=function(all,num){return"\\"+(num-0+1);};for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape));}
var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results;}
return array;};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;}catch(e){makeArray=function(array,results){var i=0,ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else{if(typeof array.length==="number"){for(var l=array.length;i<l;i++){ret.push(array[i]);}}else{for(;array[i];i++){ret.push(array[i]);}}}
return ret;};}
var sortOrder,siblingCheck;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;}
return a.compareDocumentPosition(b)&4?-1:1;};}else{sortOrder=function(a,b){var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;if(a===b){hasDuplicate=true;return 0;}else if(aup===bup){return siblingCheck(a,b);}else if(!aup){return-1;}else if(!bup){return 1;}
while(cur){ap.unshift(cur);cur=cur.parentNode;}
cur=bup;while(cur){bp.unshift(cur);cur=cur.parentNode;}
al=ap.length;bl=bp.length;for(var i=0;i<al&&i<bl;i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i]);}}
return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1);};siblingCheck=function(a,b,ret){if(a===b){return ret;}
var cur=a.nextSibling;while(cur){if(cur===b){return-1;}
cur=cur.nextSibling;}
return 1;};}
Sizzle.getText=function(elems){var ret="",elem;for(var i=0;elems[i];i++){elem=elems[i];if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue;}else if(elem.nodeType!==8){ret+=Sizzle.getText(elem.childNodes);}}
return ret;};(function(){var form=document.createElement("div"),id="script"+(new Date()).getTime(),root=document.documentElement;form.innerHTML="<a name='"+id+"'/>";root.insertBefore(form,root.firstChild);if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}
root.removeChild(form);root=form=null;})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}
results=tmp;}
return results;};}
div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};}
div=null;})();if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div"),id="__sizzle__";div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}
Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&!Sizzle.isXML(context)){var match=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);if(match&&(context.nodeType===1||context.nodeType===9)){if(match[1]){return makeArray(context.getElementsByTagName(query),extra);}else if(match[2]&&Expr.find.CLASS&&context.getElementsByClassName){return makeArray(context.getElementsByClassName(match[2]),extra);}}
if(context.nodeType===9){if(query==="body"&&context.body){return makeArray([context.body],extra);}else if(match&&match[3]){var elem=context.getElementById(match[3]);if(elem&&elem.parentNode){if(elem.id===match[3]){return makeArray([elem],extra);}}else{return makeArray([],extra);}}
try{return makeArray(context.querySelectorAll(query),extra);}catch(qsaError){}}else if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){var oldContext=context,old=context.getAttribute("id"),nid=old||id,hasParent=context.parentNode,relativeHierarchySelector=/^\s*[+~]/.test(query);if(!old){context.setAttribute("id",nid);}else{nid=nid.replace(/'/g,"\\$&");}
if(relativeHierarchySelector&&hasParent){context=context.parentNode;}
try{if(!relativeHierarchySelector||hasParent){return makeArray(context.querySelectorAll("[id='"+nid+"'] "+query),extra);}}catch(pseudoError){}finally{if(!old){oldContext.removeAttribute("id");}}}}
return oldSizzle(query,context,extra,seed);};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop];}
div=null;})();}
(function(){var html=document.documentElement,matches=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector;if(matches){var disconnectedMatch=!matches.call(document.createElement("div"),"div"),pseudoWorks=false;try{matches.call(document.documentElement,"[test!='']:sizzle");}catch(pseudoError){pseudoWorks=true;}
Sizzle.matchesSelector=function(node,expr){expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!Sizzle.isXML(node)){try{if(pseudoWorks||!Expr.match.PSEUDO.test(expr)&&!/!=/.test(expr)){var ret=matches.call(node,expr);if(ret||!disconnectedMatch||node.document&&node.document.nodeType!==11){return ret;}}}catch(e){}}
return Sizzle(expr,null,null,[node]).length>0;};}})();(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return;}
div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return;}
Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}};div=null;})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(elem.nodeName.toLowerCase()===cur){match=elem;break;}
elem=elem[dir];}
checkSet[i]=match;}}}
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else if(Sizzle.filter(cur,[elem]).length>0){match=elem;break;}}
elem=elem[dir];}
checkSet[i]=match;}}}
if(document.documentElement.contains){Sizzle.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);};}else if(document.documentElement.compareDocumentPosition){Sizzle.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16);};}else{Sizzle.contains=function(){return false;};}
Sizzle.isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};var posProcess=function(selector,context){var match,tmpSet=[],later="",root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}
selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet);}
return Sizzle.filter(later,tmpSet);};jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.filters;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})();var runtil=/Until$/,rparentsprev=/^(?:parents|prevUntil|prevAll)/,rmultiselector=/,/,isSimple=/^.[^:#\[\.,]*$/,slice=Array.prototype.slice,POS=jQuery.expr.match.POS,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var ret=this.pushStack("","find",selector),length=0;for(var i=0,l=this.length;i<l;i++){length=ret.length;jQuery.find(selector,this[i],ret);if(i>0){for(var n=length;n<ret.length;n++){for(var r=0;r<length;r++){if(ret[r]===ret[n]){ret.splice(n--,1);break;}}}}}
return ret;},has:function(target){var targets=jQuery(target);return this.filter(function(){for(var i=0,l=targets.length;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector,false),"not",selector);},filter:function(selector){return this.pushStack(winnow(this,selector,true),"filter",selector);},is:function(selector){return!!selector&&jQuery.filter(selector,this).length>0;},closest:function(selectors,context){var ret=[],i,l,cur=this[0];if(jQuery.isArray(selectors)){var match,selector,matches={},level=1;if(cur&&selectors.length){for(i=0,l=selectors.length;i<l;i++){selector=selectors[i];if(!matches[selector]){matches[selector]=jQuery.expr.match.POS.test(selector)?jQuery(selector,context||this.context):selector;}}
while(cur&&cur.ownerDocument&&cur!==context){for(selector in matches){match=matches[selector];if(match.jquery?match.index(cur)>-1:jQuery(cur).is(match)){ret.push({selector:selector,elem:cur,level:level});}}
cur=cur.parentNode;level++;}}
return ret;}
var pos=POS.test(selectors)?jQuery(selectors,context||this.context):null;for(i=0,l=this.length;i<l;i++){cur=this[i];while(cur){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);break;}else{cur=cur.parentNode;if(!cur||!cur.ownerDocument||cur===context){break;}}}}
ret=ret.length>1?jQuery.unique(ret):ret;return this.pushStack(ret,"closest",selectors);},index:function(elem){if(!elem||typeof elem==="string"){return jQuery.inArray(this[0],elem?jQuery(elem):this.parent().children());}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector),all=jQuery.merge(this.get(),set);return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all));},andSelf:function(){return this.add(this.prevObject);}});function isDisconnected(node){return!node||!node.parentNode||node.parentNode.nodeType===11;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until),args=slice.call(arguments);if(!runtil.test(name)){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;if((this.length>1||rmultiselector.test(selector))&&rparentsprev.test(name)){ret=ret.reverse();}
return this.pushStack(ret,name,args.join(","));};});jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")";}
return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems);},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir]){if(cur.nodeType===1&&++num===result){break;}}
return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});function winnow(elements,qualifier,keep){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);return retVal===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return(elem===qualifier)===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else{qualifier=jQuery.filter(qualifier,filtered);}}
return jQuery.grep(elements,function(elem,i){return(jQuery.inArray(elem,qualifier)>=0)===keep;});}
var rinlinejQuery=/ jQuery\d+="(?:\d+|null)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnocache=/<(?:script|object|embed|option|style)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"div<div>","</div>"];}
jQuery.fn.extend({text:function(text){if(jQuery.isFunction(text)){return this.each(function(i){var self=jQuery(this);self.text(text.call(this,i,self.text()));});}
if(typeof text!=="object"&&text!==undefined){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));}
return jQuery.text(this);},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.insertBefore(elem,this.firstChild);}});},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this);});}else if(arguments.length){var set=jQuery(arguments[0]);set.push.apply(set,this.toArray());return this.pushStack(set,"before",arguments);}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});}else if(arguments.length){var set=this.pushStack(this,"after",arguments);set.push.apply(set,jQuery(arguments[0]).toArray());return set;}},remove:function(selector,keepData){for(var i=0,elem;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));jQuery.cleanData([elem]);}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}}
return this;},empty:function(){for(var i=0,elem;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){if(value===undefined){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(rinlinejQuery,""):null;}else if(typeof value==="string"&&!rnocache.test(value)&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(var i=0,l=this.length;i<l;i++){if(this[i].nodeType===1){jQuery.cleanData(this[i].getElementsByTagName("*"));this[i].innerHTML=value;}}}catch(e){this.empty().append(value);}}else if(jQuery.isFunction(value)){this.each(function(i){var self=jQuery(this);self.html(value.call(this,i,self.html()));});}else{this.empty().append(value);}
return this;},replaceWith:function(value){if(this[0]&&this[0].parentNode){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();self.replaceWith(value.call(this,i,old));});}
if(typeof value!=="string"){value=jQuery(value).detach();}
return this.each(function(){var next=this.nextSibling,parent=this.parentNode;jQuery(this).remove();if(next){jQuery(next).before(value);}else{jQuery(parent).append(value);}});}else{return this.length?this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value):this;}},detach:function(selector){return this.remove(selector,true);},domManip:function(args,table,callback){var results,first,fragment,parent,value=args[0],scripts=[];if(!jQuery.support.checkClone&&arguments.length===3&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback,true);});}
if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);args[0]=value.call(this,i,table?self.html():undefined);self.domManip(args,table,callback);});}
if(this[0]){parent=value&&value.parentNode;if(jQuery.support.parentNode&&parent&&parent.nodeType===11&&parent.childNodes.length===this.length){results={fragment:parent};}else{results=jQuery.buildFragment(args,this,scripts);}
fragment=results.fragment;if(fragment.childNodes.length===1){first=fragment=fragment.firstChild;}else{first=fragment.firstChild;}
if(first){table=table&&jQuery.nodeName(first,"tr");for(var i=0,l=this.length,lastIndex=l-1;i<l;i++){callback.call(table?root(this[i],first):this[i],results.cacheable||(l>1&&i<lastIndex)?jQuery.clone(fragment,true,true):fragment);}}
if(scripts.length){jQuery.each(scripts,evalScript);}}
return this;}});function root(elem,cur){return jQuery.nodeName(elem,"table")?(elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody"))):elem;}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var internalKey=jQuery.expando,oldData=jQuery.data(src),curData=jQuery.data(dest,oldData);if((oldData=oldData[internalKey])){var events=oldData.events;curData=curData[internalKey]=jQuery.extend({},oldData);if(events){delete curData.handle;curData.events={};for(var type in events){for(var i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type+(events[type][i].namespace?".":"")+events[type][i].namespace,events[type][i],events[type][i].data);}}}}}
function cloneFixAttributes(src,dest){if(dest.nodeType!==1){return;}
var nodeName=dest.nodeName.toLowerCase();dest.clearAttributes();dest.mergeAttributes(src);if(nodeName==="object"){dest.outerHTML=src.outerHTML;}else if(nodeName==="input"&&(src.type==="checkbox"||src.type==="radio")){if(src.checked){dest.defaultChecked=dest.checked=src.checked;}
if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}
dest.removeAttribute(jQuery.expando);}
jQuery.buildFragment=function(args,nodes,scripts){var fragment,cacheable,cacheresults,doc=(nodes&&nodes[0]?nodes[0].ownerDocument||nodes[0]:document);if(args.length===1&&typeof args[0]==="string"&&args[0].length<512&&doc===document&&args[0].charAt(0)==="<"&&!rnocache.test(args[0])&&(jQuery.support.checkClone||!rchecked.test(args[0]))){cacheable=true;cacheresults=jQuery.fragments[args[0]];if(cacheresults){if(cacheresults!==1){fragment=cacheresults;}}}
if(!fragment){fragment=doc.createDocumentFragment();jQuery.clean(args,doc,fragment,scripts);}
if(cacheable){jQuery.fragments[args[0]]=cacheresults?fragment:1;}
return{fragment:fragment,cacheable:cacheable};};jQuery.fragments={};jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector),parent=this.length===1&&this[0].parentNode;if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){insert[original](this[0]);return this;}else{for(var i=0,l=insert.length;i<l;i++){var elems=(i>0?this.clone(true):this).get();jQuery(insert[i])[original](elems);ret=ret.concat(elems);}
return this.pushStack(ret,name,insert.selector);}};});function getAll(elem){if("getElementsByTagName"in elem){return elem.getElementsByTagName("*");}else if("querySelectorAll"in elem){return elem.querySelectorAll("*");}else{return[];}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var clone=elem.cloneNode(true),srcElements,destElements,i;if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){cloneFixAttributes(elem,clone);srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){cloneFixAttributes(srcElements[i],destElements[i]);}}
if(dataAndEvents){cloneCopyEvent(elem,clone);if(deepDataAndEvents){srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){cloneCopyEvent(srcElements[i],destElements[i]);}}}
return clone;},clean:function(elems,context,fragment,scripts){context=context||document;if(typeof context.createElement==="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;}
var ret=[];for(var i=0,elem;(elem=elems[i])!=null;i++){if(typeof elem==="number"){elem+="";}
if(!elem){continue;}
if(typeof elem==="string"&&!rhtml.test(elem)){elem=context.createTextNode(elem);}else if(typeof elem==="string"){elem=elem.replace(rxhtmlTag,"<$1></$2>");var tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,depth=wrap[0],div=context.createElement("div");div.innerHTML=wrap[1]+elem+wrap[2];while(depth--){div=div.lastChild;}
if(!jQuery.support.tbody){var hasBody=rtbody.test(elem),tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!hasBody?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j]);}}}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild);}
elem=div.childNodes;}
if(elem.nodeType){ret.push(elem);}else{ret=jQuery.merge(ret,elem);}}
if(fragment){for(i=0;ret[i];i++){if(scripts&&jQuery.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){scripts.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i]);}else{if(ret[i].nodeType===1){ret.splice.apply(ret,[i+1,0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))));}
fragment.appendChild(ret[i]);}}}
return ret;},cleanData:function(elems){var data,id,cache=jQuery.cache,internalKey=jQuery.expando,special=jQuery.event.special,deleteExpando=jQuery.support.deleteExpando;for(var i=0,elem;(elem=elems[i])!=null;i++){if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){continue;}
id=elem[jQuery.expando];if(id){data=cache[id]&&cache[id][internalKey];if(data&&data.events){for(var type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}
if(data.handle){data.handle.elem=null;}}
if(deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}
delete cache[id];}}}});function evalScript(i,elem){if(elem.src){jQuery.ajax({url:elem.src,async:false,dataType:"script"});}else{jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"");}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}
var ralpha=/alpha\([^)]*\)/i,ropacity=/opacity=([^)]*)/,rdashAlpha=/-([a-z])/ig,rupper=/([A-Z]|^ms)/g,rnumpx=/^-?\d+(?:px)?$/i,rnum=/^-?\d/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssWidth=["Left","Right"],cssHeight=["Top","Bottom"],curCSS,getComputedStyle,currentStyle,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn.css=function(name,value){if(arguments.length===2&&value===undefined){return this;}
return jQuery.access(this,name,value,true,function(elem,name,value){return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);});};jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity","opacity");return ret===""?"1":ret;}else{return elem.style.opacity;}}}},cssNumber:{"zIndex":true,"fontWeight":true,"opacity":true,"zoom":true,"lineHeight":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,origName=jQuery.camelCase(name),style=elem.style,hooks=jQuery.cssHooks[origName];name=jQuery.cssProps[origName]||origName;if(value!==undefined){if(typeof value==="number"&&isNaN(value)||value==null){return;}
if(typeof value==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra){var ret,origName=jQuery.camelCase(name),hooks=jQuery.cssHooks[origName];name=jQuery.cssProps[origName]||origName;if(hooks&&"get"in hooks&&(ret=hooks.get(elem,true,extra))!==undefined){return ret;}else if(curCSS){return curCSS(elem,name,origName);}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
callback.call(elem);for(name in options){elem.style[name]=old[name];}},camelCase:function(string){return string.replace(rdashAlpha,fcamelCase);}});jQuery.curCSS=jQuery.css;jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){var val;if(computed){if(elem.offsetWidth!==0){val=getWH(elem,name,extra);}else{jQuery.swap(elem,cssShow,function(){val=getWH(elem,name,extra);});}
if(val<=0){val=curCSS(elem,name,name);if(val==="0px"&&currentStyle){val=currentStyle(elem,name,name);}
if(val!=null){return val===""||val==="auto"?"0px":val;}}
if(val<0||val==null){val=elem.style[name];return val===""||val==="auto"?"0px":val;}
return typeof val==="string"?val:val+"px";}},set:function(elem,value){if(rnumpx.test(value)){value=parseFloat(value);if(value>=0){return value+"px";}}else{return value;}}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":computed?"1":"";},set:function(elem,value){var style=elem.style;style.zoom=1;var opacity=jQuery.isNaN(value)?"":"alpha(opacity="+value*100+")",filter=style.filter||"";style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):style.filter+' '+opacity;}};}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){var ret;jQuery.swap(elem,{"display":"inline-block"},function(){if(computed){ret=curCSS(elem,"margin-right","marginRight");}else{ret=elem.style.marginRight;}});return ret;}};}});if(document.defaultView&&document.defaultView.getComputedStyle){getComputedStyle=function(elem,newName,name){var ret,defaultView,computedStyle;name=name.replace(rupper,"-$1").toLowerCase();if(!(defaultView=elem.ownerDocument.defaultView)){return undefined;}
if((computedStyle=defaultView.getComputedStyle(elem,null))){ret=computedStyle.getPropertyValue(name);if(ret===""&&!jQuery.contains(elem.ownerDocument.documentElement,elem)){ret=jQuery.style(elem,name);}}
return ret;};}
if(document.documentElement.currentStyle){currentStyle=function(elem,name){var left,ret=elem.currentStyle&&elem.currentStyle[name],rsLeft=elem.runtimeStyle&&elem.runtimeStyle[name],style=elem.style;if(!rnumpx.test(ret)&&rnum.test(ret)){left=style.left;if(rsLeft){elem.runtimeStyle.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":(ret||0);ret=style.pixelLeft+"px";style.left=left;if(rsLeft){elem.runtimeStyle.left=rsLeft;}}
return ret===""?"auto":ret;};}
curCSS=getComputedStyle||currentStyle;function getWH(elem,name,extra){var which=name==="width"?cssWidth:cssHeight,val=name==="width"?elem.offsetWidth:elem.offsetHeight;if(extra==="border"){return val;}
jQuery.each(which,function(){if(!extra){val-=parseFloat(jQuery.css(elem,"padding"+this))||0;}
if(extra==="margin"){val+=parseFloat(jQuery.css(elem,"margin"+this))||0;}else{val-=parseFloat(jQuery.css(elem,"border"+this+"Width"))||0;}});return val;}
if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){var width=elem.offsetWidth,height=elem.offsetHeight;return(width===0&&height===0)||(!jQuery.support.reliableHiddenOffsets&&(elem.style.display||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rhash=/#.*$/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rinput=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,rlocalProtocol=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rquery=/\?/,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,rselectTextarea=/^(?:select|textarea)/i,rspacesAjax=/\s+/,rts=/([?&])_=[^&]*/,rucHeaders=/(^|\-)([a-z])/g,rucHeadersFunc=function(_,$1,$2){return $1+$2.toUpperCase();},rurl=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,_load=jQuery.fn.load,prefilters={},transports={},ajaxLocation,ajaxLocParts;try{ajaxLocation=document.location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
if(jQuery.isFunction(func)){var dataTypes=dataTypeExpression.toLowerCase().split(rspacesAjax),i=0,length=dataTypes.length,dataType,list,placeBefore;for(;i<length;i++){dataType=dataTypes[i];placeBefore=/^\+/.test(dataType);if(placeBefore){dataType=dataType.substr(1)||"*";}
list=structure[dataType]=structure[dataType]||[];list[placeBefore?"unshift":"push"](func);}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,dataType,inspected){dataType=dataType||options.dataTypes[0];inspected=inspected||{};inspected[dataType]=true;var list=structure[dataType],i=0,length=list?list.length:0,executeOnly=(structure===prefilters),selection;for(;i<length&&(executeOnly||!selection);i++){selection=list[i](options,originalOptions,jqXHR);if(typeof selection==="string"){if(!executeOnly||inspected[selection]){selection=undefined;}else{options.dataTypes.unshift(selection);selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,selection,inspected);}}}
if((executeOnly||!selection)&&!inspected["*"]){selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,"*",inspected);}
return selection;}
jQuery.fn.extend({load:function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}else if(!this.length){return this;}
var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
var type="GET";if(params){if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(typeof params==="object"){params=jQuery.param(params,jQuery.ajaxSettings.traditional);type="POST";}}
var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(jqXHR,status,responseText){responseText=jqXHR.responseText;if(jqXHR.isResolved()){jqXHR.done(function(r){responseText=r;});self.html(selector?jQuery("<div>").append(responseText.replace(rscript,"")).find(selector):responseText);}
if(callback){self.each(callback,[responseText,status,jqXHR]);}}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({type:method,url:url,data:data,success:callback,dataType:type});};});jQuery.extend({getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},ajaxSetup:function(target,settings){if(!settings){settings=target;target=jQuery.extend(true,jQuery.ajaxSettings,settings);}else{jQuery.extend(true,target,jQuery.ajaxSettings,settings);}
for(var field in{context:1,url:1}){if(field in settings){target[field]=settings[field];}else if(field in jQuery.ajaxSettings){target[field]=jQuery.ajaxSettings[field];}}
return target;},ajaxSettings:{url:ajaxLocation,isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML}},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=callbackContext!==s&&(callbackContext.nodeType||callbackContext instanceof jQuery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery._Deferred(),statusCode=s.statusCode||{},ifModifiedKey,requestHeaders={},responseHeadersString,responseHeaders,transport,timeoutTimer,parts,state=0,fireGlobals,i,jqXHR={readyState:0,setRequestHeader:function(name,value){if(!state){requestHeaders[name.toLowerCase().replace(rucHeaders,rucHeadersFunc)]=value;}
return this;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match===undefined?null:match;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},abort:function(statusText){statusText=statusText||"abort";if(transport){transport.abort(statusText);}
done(0,statusText);return this;}};function done(status,statusText,responses,headers){if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status?4:0;var isSuccess,success,error,response=responses?ajaxHandleResponses(s,jqXHR,responses):undefined,lastModified,etag;if(status>=200&&status<300||status===304){if(s.ifModified){if((lastModified=jqXHR.getResponseHeader("Last-Modified"))){jQuery.lastModified[ifModifiedKey]=lastModified;}
if((etag=jqXHR.getResponseHeader("Etag"))){jQuery.etag[ifModifiedKey]=etag;}}
if(status===304){statusText="notmodified";isSuccess=true;}else{try{success=ajaxConvert(s,response);statusText="success";isSuccess=true;}catch(e){statusText="parsererror";error=e;}}}else{error=statusText;if(!statusText||status){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=statusText;if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger("ajax"+(isSuccess?"Success":"Error"),[jqXHR,s,isSuccess?success:error]);}
completeDeferred.resolveWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
deferred.promise(jqXHR);jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;jqXHR.complete=completeDeferred.done;jqXHR.statusCode=function(map){if(map){var tmp;if(state<2){for(tmp in map){statusCode[tmp]=[statusCode[tmp],map[tmp]];}}else{tmp=map[jqXHR.status];jqXHR.then(tmp,tmp);}}
return this;};s.url=((url||s.url)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().split(rspacesAjax);if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!=ajaxLocParts[1]||parts[2]!=ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?80:443))!=(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?80:443))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return false;}
fireGlobals=s.global;s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
if(!s.hasContent){if(s.data){s.url+=(rquery.test(s.url)?"&":"?")+s.data;}
ifModifiedKey=s.url;if(s.cache===false){var ts=jQuery.now(),ret=s.url.replace(rts,"$1_="+ts);s.url=ret+((ret===s.url)?(rquery.test(s.url)?"&":"?")+"_="+ts:"");}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){requestHeaders["Content-Type"]=s.contentType;}
if(s.ifModified){ifModifiedKey=ifModifiedKey||s.url;if(jQuery.lastModified[ifModifiedKey]){requestHeaders["If-Modified-Since"]=jQuery.lastModified[ifModifiedKey];}
if(jQuery.etag[ifModifiedKey]){requestHeaders["If-None-Match"]=jQuery.etag[ifModifiedKey];}}
requestHeaders.Accept=s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", */*; q=0.01":""):s.accepts["*"];for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){jqXHR.abort();return false;}
for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(status<2){done(-1,e);}else{jQuery.error(e);}}}
return jqXHR;},param:function(a,traditional){var s=[],add=function(key,value){value=jQuery.isFunction(value)?value():value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(var prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");}});function buildParams(prefix,obj,traditional,add){if(jQuery.isArray(obj)&&obj.length){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"||jQuery.isArray(v)?i:"")+"]",v,traditional,add);}});}else if(!traditional&&obj!=null&&typeof obj==="object"){if(jQuery.isArray(obj)||jQuery.isEmptyObject(obj)){add(prefix,"");}else{for(var name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}}else{add(prefix,obj);}}
jQuery.extend({active:0,lastModified:{},etag:{}});function ajaxHandleResponses(s,jqXHR,responses){var contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields,ct,type,finalDataType,firstDataType;for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type];}}
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("content-type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response){if(s.dataFilter){response=s.dataFilter(response,s.dataType);}
var dataTypes=s.dataTypes,converters={},i,key,length=dataTypes.length,tmp,current=dataTypes[0],prev,conversion,conv,conv1,conv2;for(i=1;i<length;i++){if(i===1){for(key in s.converters){if(typeof key==="string"){converters[key.toLowerCase()]=s.converters[key];}}}
prev=current;current=dataTypes[i];if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conversion=prev+" "+current;conv=converters[conversion]||converters["* "+current];if(!conv){conv2=undefined;for(conv1 in converters){tmp=conv1.split(" ");if(tmp[0]===prev||tmp[0]==="*"){conv2=converters[tmp[1]+" "+current];if(conv2){conv1=converters[conv1];if(conv1===true){conv=conv2;}else if(conv2===true){conv=conv1;}
break;}}}}
if(!(conv||conv2)){jQuery.error("No conversion from "+conversion.replace(" "," to "));}
if(conv!==true){response=conv?conv(response):conv2(conv1(response));}}}
return response;}
var jsc=jQuery.now(),jsre=/(\=)\?(&|$)|\?\?/i;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return jQuery.expando+"_"+(jsc++);}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var dataIsString=(typeof s.data==="string");if(s.dataTypes[0]==="jsonp"||originalSettings.jsonpCallback||originalSettings.jsonp!=null||s.jsonp!==false&&(jsre.test(s.url)||dataIsString&&jsre.test(s.data))){var responseContainer,jsonpCallback=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,previous=window[jsonpCallback],url=s.url,data=s.data,replace="$1"+jsonpCallback+"$2",cleanUp=function(){window[jsonpCallback]=previous;if(responseContainer&&jQuery.isFunction(previous)){window[jsonpCallback](responseContainer[0]);}};if(s.jsonp!==false){url=url.replace(jsre,replace);if(s.url===url){if(dataIsString){data=data.replace(jsre,replace);}
if(s.data===data){url+=(/\?/.test(url)?"&":"?")+s.jsonp+"="+jsonpCallback;}}}
s.url=url;s.data=data;window[jsonpCallback]=function(response){responseContainer=[response];};jqXHR.then(cleanUp,cleanUp);s.converters["script json"]=function(){if(!responseContainer){jQuery.error(jsonpCallback+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";return"script";}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async="async";if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script);}
script=undefined;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(0,1);}}};}});var
xhrId=jQuery.now(),xhrCallbacks,testXHR;function xhrOnUnloadAbort(){jQuery(window).unload(function(){for(var key in xhrCallbacks){xhrCallbacks[key](0,1);}});}
function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR();}:createStandardXHR;testXHR=jQuery.ajaxSettings.xhr();jQuery.support.ajax=!!testXHR;jQuery.support.cors=testXHR&&("withCredentials"in testXHR);testXHR=undefined;if(jQuery.support.ajax){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var xhr=s.xhr(),handle,i;if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else{xhr.open(s.type,s.url,s.async);}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(_){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,statusText,responseHeaders,responses,xml;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;delete xhrCallbacks[handle];}
if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();responses={};xml=xhr.responseXML;if(xml&&xml.documentElement){responses.xml=xml;}
responses.text=xhr.responseText;try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}}
if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async||xhr.readyState===4){callback();}else{if(!xhrCallbacks){xhrCallbacks={};xhrOnUnloadAbort();}
handle=xhrId++;xhr.onreadystatechange=xhrCallbacks[handle]=callback;}},abort:function(){if(callback){callback(0,1);}}};}});}
var elemdisplay={},rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,timerId,fxAttrs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];jQuery.fn.extend({show:function(speed,easing,callback){var elem,display;if(speed||speed===0){return this.animate(genFx("show",3),speed,easing,callback);}else{for(var i=0,j=this.length;i<j;i++){elem=this[i];display=elem.style.display;if(!jQuery._data(elem,"olddisplay")&&display==="none"){display=elem.style.display="";}
if(display===""&&jQuery.css(elem,"display")==="none"){jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));}}
for(i=0;i<j;i++){elem=this[i];display=elem.style.display;if(display===""||display==="none"){elem.style.display=jQuery._data(elem,"olddisplay")||"";}}
return this;}},hide:function(speed,easing,callback){if(speed||speed===0){return this.animate(genFx("hide",3),speed,easing,callback);}else{for(var i=0,j=this.length;i<j;i++){var display=jQuery.css(this[i],"display");if(display!=="none"&&!jQuery._data(this[i],"olddisplay")){jQuery._data(this[i],"olddisplay",display);}}
for(i=0;i<j;i++){this[i].style.display="none";}
return this;}},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2,callback){var bool=typeof fn==="boolean";if(jQuery.isFunction(fn)&&jQuery.isFunction(fn2)){this._toggle.apply(this,arguments);}else if(fn==null||bool){this.each(function(){var state=bool?fn:jQuery(this).is(":hidden");jQuery(this)[state?"show":"hide"]();});}else{this.animate(genFx("toggle",3),fn,fn2,callback);}
return this;},fadeTo:function(speed,to,easing,callback){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);if(jQuery.isEmptyObject(prop)){return this.each(optall.complete);}
return this[optall.queue===false?"each":"queue"](function(){var opt=jQuery.extend({},optall),p,isElement=this.nodeType===1,hidden=isElement&&jQuery(this).is(":hidden"),self=this;for(p in prop){var name=jQuery.camelCase(p);if(p!==name){prop[name]=prop[p];delete prop[p];p=name;}
if(prop[p]==="hide"&&hidden||prop[p]==="show"&&!hidden){return opt.complete.call(this);}
if(isElement&&(p==="height"||p==="width")){opt.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(jQuery.css(this,"display")==="inline"&&jQuery.css(this,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout){this.style.display="inline-block";}else{var display=defaultDisplay(this.nodeName);if(display==="inline"){this.style.display="inline-block";}else{this.style.display="inline";this.style.zoom=1;}}}}
if(jQuery.isArray(prop[p])){(opt.specialEasing=opt.specialEasing||{})[p]=prop[p][1];prop[p]=prop[p][0];}}
if(opt.overflow!=null){this.style.overflow="hidden";}
opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(rfxtypes.test(val)){e[val==="toggle"?hidden?"show":"hide":val](prop);}else{var parts=rfxnum.exec(val),start=e.cur();if(parts){var end=parseFloat(parts[2]),unit=parts[3]||(jQuery.cssNumber[name]?"":"px");if(unit!=="px"){jQuery.style(self,name,(end||1)+unit);start=((end||1)/e.cur())*start;jQuery.style(self,name,start+unit);}
if(parts[1]){end=((parts[1]==="-="?-1:1)*end)+start;}
e.custom(start,end,unit);}else{e.custom(start,val,"");}}});return true;});},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue){this.queue([]);}
this.each(function(){for(var i=timers.length-1;i>=0;i--){if(timers[i].elem===this){if(gotoEnd){timers[i](true);}
timers.splice(i,1);}}});if(!gotoEnd){this.dequeue();}
return this;}});function genFx(type,num){var obj={};jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){obj[this]=type;});return obj;}
jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false){jQuery(this).dequeue();}
if(jQuery.isFunction(opt.old)){opt.old.call(this);}};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig){options.orig={};}}});jQuery.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this);}
(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop];}
var parsed,r=jQuery.css(this.elem,this.prop);return isNaN(parsed=parseFloat(r))?!r||r==="auto"?0:r:parsed;},custom:function(from,to,unit){var self=this,fx=jQuery.fx;this.startTime=jQuery.now();this.start=from;this.end=to;this.unit=unit||this.unit||(jQuery.cssNumber[this.prop]?"":"px");this.now=this.start;this.pos=this.state=0;function t(gotoEnd){return self.step(gotoEnd);}
t.elem=this.elem;if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(fx.tick,fx.interval);}},show:function(){this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=jQuery.now(),done=true;if(gotoEnd||t>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var i in this.options.curAnim){if(this.options.curAnim[i]!==true){done=false;}}
if(done){if(this.options.overflow!=null&&!jQuery.support.shrinkWrapBlocks){var elem=this.elem,options=this.options;jQuery.each(["","X","Y"],function(index,value){elem.style["overflow"+value]=options.overflow[index];});}
if(this.options.hide){jQuery(this.elem).hide();}
if(this.options.hide||this.options.show){for(var p in this.options.curAnim){jQuery.style(this.elem,p,this.options.orig[p]);}}
this.options.complete.call(this.elem);}
return false;}else{var n=t-this.startTime;this.state=n/this.options.duration;var specialEasing=this.options.specialEasing&&this.options.specialEasing[this.prop];var defaultEasing=this.options.easing||(jQuery.easing.swing?"swing":"linear");this.pos=jQuery.easing[specialEasing||defaultEasing](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update();}
return true;}};jQuery.extend(jQuery.fx,{tick:function(){var timers=jQuery.timers;for(var i=0;i<timers.length;i++){if(!timers[i]()){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}},interval:13,stop:function(){clearInterval(timerId);timerId=null;},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){jQuery.style(fx.elem,"opacity",fx.now);},_default:function(fx){if(fx.elem.style&&fx.elem.style[fx.prop]!=null){fx.elem.style[fx.prop]=(fx.prop==="width"||fx.prop==="height"?Math.max(0,fx.now):fx.now)+fx.unit;}else{fx.elem[fx.prop]=fx.now;}}}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
function defaultDisplay(nodeName){if(!elemdisplay[nodeName]){var elem=jQuery("<"+nodeName+">").appendTo("body"),display=elem.css("display");elem.remove();if(display==="none"||display===""){display="block";}
elemdisplay[nodeName]=display;}
return elemdisplay[nodeName];}
var rtable=/^t(?:able|d|h)$/i,rroot=/^(?:body|html)$/i;if("getBoundingClientRect"in document.documentElement){jQuery.fn.offset=function(options){var elem=this[0],box;if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
try{box=elem.getBoundingClientRect();}catch(e){}
var doc=elem.ownerDocument,docElem=doc.documentElement;if(!box||!jQuery.contains(docElem,elem)){return box?{top:box.top,left:box.left}:{top:0,left:0};}
var body=doc.body,win=getWindow(doc),clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,scrollTop=win.pageYOffset||jQuery.support.boxModel&&docElem.scrollTop||body.scrollTop,scrollLeft=win.pageXOffset||jQuery.support.boxModel&&docElem.scrollLeft||body.scrollLeft,top=box.top+scrollTop-clientTop,left=box.left+scrollLeft-clientLeft;return{top:top,left:left};};}else{jQuery.fn.offset=function(options){var elem=this[0];if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
jQuery.offset.initialize();var computedStyle,offsetParent=elem.offsetParent,prevOffsetParent=elem,doc=elem.ownerDocument,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle,top=elem.offsetTop,left=elem.offsetLeft;while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){break;}
computedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle;top-=elem.scrollTop;left-=elem.scrollLeft;if(elem===offsetParent){top+=elem.offsetTop;left+=elem.offsetLeft;if(jQuery.offset.doesNotAddBorder&&!(jQuery.offset.doesAddBorderForTableAndCells&&rtable.test(elem.nodeName))){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevOffsetParent=offsetParent;offsetParent=elem.offsetParent;}
if(jQuery.offset.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible"){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevComputedStyle=computedStyle;}
if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static"){top+=body.offsetTop;left+=body.offsetLeft;}
if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){top+=Math.max(docElem.scrollTop,body.scrollTop);left+=Math.max(docElem.scrollLeft,body.scrollLeft);}
return{top:top,left:left};};}
jQuery.offset={initialize:function(){var body=document.body,container=document.createElement("div"),innerDiv,checkDiv,table,td,bodyMarginTop=parseFloat(jQuery.css(body,"marginTop"))||0,html="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";jQuery.extend(container.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});container.innerHTML=html;body.insertBefore(container,body.firstChild);innerDiv=container.firstChild;checkDiv=innerDiv.firstChild;td=innerDiv.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(checkDiv.offsetTop!==5);this.doesAddBorderForTableAndCells=(td.offsetTop===5);checkDiv.style.position="fixed";checkDiv.style.top="20px";this.supportsFixedPosition=(checkDiv.offsetTop===20||checkDiv.offsetTop===15);checkDiv.style.position=checkDiv.style.top="";innerDiv.style.overflow="hidden";innerDiv.style.position="relative";this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);this.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==bodyMarginTop);body.removeChild(container);jQuery.offset.initialize=jQuery.noop;},bodyOffset:function(body){var top=body.offsetTop,left=body.offsetLeft;jQuery.offset.initialize();if(jQuery.offset.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.css(body,"marginTop"))||0;left+=parseFloat(jQuery.css(body,"marginLeft"))||0;}
return{top:top,left:left};},setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray('auto',[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();}
curTop=calculatePosition?curPosition.top:parseInt(curCSSTop,10)||0;curLeft=calculatePosition?curPosition.left:parseInt(curCSSLeft,10)||0;if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return null;}
var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=rroot.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();offset.top-=parseFloat(jQuery.css(elem,"marginTop"))||0;offset.left-=parseFloat(jQuery.css(elem,"marginLeft"))||0;parentOffset.top+=parseFloat(jQuery.css(offsetParent[0],"borderTopWidth"))||0;parentOffset.left+=parseFloat(jQuery.css(offsetParent[0],"borderLeftWidth"))||0;return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.body;while(offsetParent&&(!rroot.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent;});}});jQuery.each(["Left","Top"],function(i,name){var method="scroll"+name;jQuery.fn[method]=function(val){var elem=this[0],win;if(!elem){return null;}
if(val!==undefined){return this.each(function(){win=getWindow(this);if(win){win.scrollTo(!i?val:jQuery(win).scrollLeft(),i?val:jQuery(win).scrollTop());}else{this[method]=val;}});}else{win=getWindow(elem);return win?("pageXOffset"in win)?win[i?"pageYOffset":"pageXOffset"]:jQuery.support.boxModel&&win.document.documentElement[method]||win.document.body[method]:elem[method];}};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn["inner"+name]=function(){return this[0]?parseFloat(jQuery.css(this[0],type,"padding")):null;};jQuery.fn["outer"+name]=function(margin){return this[0]?parseFloat(jQuery.css(this[0],type,margin?"margin":"border")):null;};jQuery.fn[type]=function(size){var elem=this[0];if(!elem){return size==null?null:this;}
if(jQuery.isFunction(size)){return this.each(function(i){var self=jQuery(this);self[type](size.call(this,i,self[type]()));});}
if(jQuery.isWindow(elem)){var docElemProp=elem.document.documentElement["client"+name];return elem.document.compatMode==="CSS1Compat"&&docElemProp||elem.document.body["client"+name]||docElemProp;}else if(elem.nodeType===9){return Math.max(elem.documentElement["client"+name],elem.body["scroll"+name],elem.documentElement["scroll"+name],elem.body["offset"+name],elem.documentElement["offset"+name]);}else if(size===undefined){var orig=jQuery.css(elem,type),ret=parseFloat(orig);return jQuery.isNaN(ret)?orig:ret;}else{return this.css(type,typeof size==="string"?size:size+"px");}};});window.jQuery=window.$=jQuery;})(window);


(function($,undefined){$.ui=$.ui||{};if($.ui.version){return;}
$.extend($.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});$.fn.extend({_focus:$.fn.focus,focus:function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem);}},delay);}):this._focus.apply(this,arguments);},scrollParent:function(){var scrollParent;if(($.browser.msie&&(/(static|relative)/).test(this.css('position')))||(/absolute/).test(this.css('position'))){scrollParent=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test($.curCSS(this,'position',1))&&(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));}).eq(0);}else{scrollParent=this.parents().filter(function(){return(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));}).eq(0);}
return(/fixed/).test(this.css('position'))||!scrollParent.length?$(document):scrollParent;},zIndex:function(zIndex){if(zIndex!==undefined){return this.css("zIndex",zIndex);}
if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}
elem=elem.parent();}}
return 0;},disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(event){event.preventDefault();});},enableSelection:function(){return this.unbind(".ui-disableSelection");}});$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.curCSS(elem,"padding"+this,true))||0;if(border){size-=parseFloat($.curCSS(elem,"border"+this+"Width",true))||0;}
if(margin){size-=parseFloat($.curCSS(elem,"margin"+this,true))||0;}});return size;}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}
return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}
return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});function visible(element){return!$(element).parents().andSelf().filter(function(){return $.curCSS(this,"visibility")==="hidden"||$.expr.filters.hidden(this);}).length;}
$.extend($.expr[":"],{data:function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function(element){var nodeName=element.nodeName.toLowerCase(),tabIndex=$.attr(element,"tabindex");if("area"===nodeName){var map=element.parentNode,mapName=map.name,img;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img);}
return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"==nodeName?element.href||!isNaN(tabIndex):!isNaN(tabIndex))&&visible(element);},tabbable:function(element){var tabIndex=$.attr(element,"tabindex");return(isNaN(tabIndex)||tabIndex>=0)&&$(element).is(":focusable");}});$(function(){var body=document.body,div=body.appendChild(div=document.createElement("div"));$.extend(div.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});$.support.minHeight=div.offsetHeight===100;$.support.selectstart="onselectstart"in div;body.removeChild(div).style.display="none";});$.extend($.ui,{plugin:{add:function(module,option,set){var proto=$.ui[module].prototype;for(var i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args){var set=instance.plugins[name];if(!set||!instance.element[0].parentNode){return;}
for(var i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b);},hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return false;}
var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true;}
el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;return has;},isOverAxis:function(x,reference,size){return(x>reference)&&(x<(reference+size));},isOver:function(y,x,top,left,height,width){return $.ui.isOverAxis(y,top,height)&&$.ui.isOverAxis(x,left,width);}});})(jQuery);(function($,undefined){if($.cleanData){var _cleanData=$.cleanData;$.cleanData=function(elems){for(var i=0,elem;(elem=elems[i])!=null;i++){$(elem).triggerHandler("remove");}
_cleanData(elems);};}else{var _remove=$.fn.remove;$.fn.remove=function(selector,keepData){return this.each(function(){if(!keepData){if(!selector||$.filter(selector,[this]).length){$("*",this).add([this]).each(function(){$(this).triggerHandler("remove");});}}
return _remove.call($(this),selector,keepData);});};}
$.widget=function(name,base,prototype){var namespace=name.split(".")[0],fullName;name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}
$.expr[":"][fullName]=function(elem){return!!$.data(elem,name);};$[namespace]=$[namespace]||{};$[namespace][name]=function(options,element){if(arguments.length){this._createWidget(options,element);}};var basePrototype=new base();basePrototype.options=$.extend(true,{},basePrototype.options);$[namespace][name].prototype=$.extend(true,basePrototype,{namespace:namespace,widgetName:name,widgetEventPrefix:$[namespace][name].prototype.widgetEventPrefix||name,widgetBaseClass:fullName},prototype);$.widget.bridge(name,$[namespace][name]);};$.widget.bridge=function(name,object){$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=Array.prototype.slice.call(arguments,1),returnValue=this;options=!isMethodCall&&args.length?$.extend.apply(null,[true,options].concat(args)):options;if(isMethodCall&&options.charAt(0)==="_"){return returnValue;}
if(isMethodCall){this.each(function(){var instance=$.data(this,name),methodValue=instance&&$.isFunction(instance[options])?instance[options].apply(instance,args):instance;if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue;return false;}});}else{this.each(function(){var instance=$.data(this,name);if(instance){instance.option(options||{})._init();}else{$.data(this,name,new object(options,this));}});}
return returnValue;};};$.Widget=function(options,element){if(arguments.length){this._createWidget(options,element);}};$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(options,element){$.data(element,this.widgetName,this);this.element=$(element);this.options=$.extend(true,{},this.options,this._getCreateOptions(),options);var self=this;this.element.bind("remove."+this.widgetName,function(){self.destroy();});this._create();this._trigger("create");this._init();},_getCreateOptions:function(){return $.metadata&&$.metadata.get(this.element[0])[this.widgetName];},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled");},widget:function(){return this.element;},option:function(key,value){var options=key;if(arguments.length===0){return $.extend({},this.options);}
if(typeof key==="string"){if(value===undefined){return this.options[key];}
options={};options[key]=value;}
this._setOptions(options);return this;},_setOptions:function(options){var self=this;$.each(options,function(key,value){self._setOption(key,value);});return this;},_setOption:function(key,value){this.options[key]=value;if(key==="disabled"){this.widget()
[value?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",value);}
return this;},enable:function(){return this._setOption("disabled",false);},disable:function(){return this._setOption("disabled",true);},_trigger:function(type,event,data){var callback=this.options[type];event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();data=data||{};if(event.originalEvent){for(var i=$.event.props.length,prop;i;){prop=$.event.props[--i];event[prop]=event.originalEvent[prop];}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.call(this.element[0],event,data)===false||event.isDefaultPrevented());}};})(jQuery);(function($,undefined){$.widget("ui.mouse",{options:{cancel:':input,option',distance:1,delay:0},_mouseInit:function(){var self=this;this.element.bind('mousedown.'+this.widgetName,function(event){return self._mouseDown(event);}).bind('click.'+this.widgetName,function(event){if(true===$.data(event.target,self.widgetName+'.preventClickEvent')){$.removeData(event.target,self.widgetName+'.preventClickEvent');event.stopImmediatePropagation();return false;}});this.started=false;},_mouseDestroy:function(){this.element.unbind('.'+this.widgetName);},_mouseDown:function(event){event.originalEvent=event.originalEvent||{};if(event.originalEvent.mouseHandled){return;}
(this._mouseStarted&&this._mouseUp(event));this._mouseDownEvent=event;var self=this,btnIsLeft=(event.which==1),elIsCancel=(typeof this.options.cancel=="string"?$(event.target).parents().add(event.target).filter(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}
this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){self.mouseDelayMet=true;},this.options.delay);}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true;}}
if(true===$.data(event.target,this.widgetName+'.preventClickEvent')){$.removeData(event.target,this.widgetName+'.preventClickEvent');}
this._mouseMoveDelegate=function(event){return self._mouseMove(event);};this._mouseUpDelegate=function(event){return self._mouseUp(event);};$(document).bind('mousemove.'+this.widgetName,this._mouseMoveDelegate).bind('mouseup.'+this.widgetName,this._mouseUpDelegate);event.preventDefault();event.originalEvent.mouseHandled=true;return true;},_mouseMove:function(event){if($.browser.msie&&!(document.documentMode>=9)&&!event.button){return this._mouseUp(event);}
if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));}
return!this._mouseStarted;},_mouseUp:function(event){$(document).unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate).unbind('mouseup.'+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target==this._mouseDownEvent.target){$.data(event.target,this.widgetName+'.preventClickEvent',true);}
this._mouseStop(event);}
return false;},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance);},_mouseDelayMet:function(event){return this.mouseDelayMet;},_mouseStart:function(event){},_mouseDrag:function(event){},_mouseStop:function(event){},_mouseCapture:function(event){return true;}});})(jQuery);(function($,undefined){$.ui=$.ui||{};var horizontalPositions=/left|center|right/,verticalPositions=/top|center|bottom/,center="center",_position=$.fn.position,_offset=$.fn.offset;$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}
options=$.extend({},options);var target=$(options.of),targetElem=target[0],collision=(options.collision||"flip").split(" "),offset=options.offset?options.offset.split(" "):[0,0],targetWidth,targetHeight,basePosition;if(targetElem.nodeType===9){targetWidth=target.width();targetHeight=target.height();basePosition={top:0,left:0};}else if(targetElem.setTimeout){targetWidth=target.width();targetHeight=target.height();basePosition={top:target.scrollTop(),left:target.scrollLeft()};}else if(targetElem.preventDefault){options.at="left top";targetWidth=targetHeight=0;basePosition={top:options.of.pageY,left:options.of.pageX};}else{targetWidth=target.outerWidth();targetHeight=target.outerHeight();basePosition=target.offset();}
$.each(["my","at"],function(){var pos=(options[this]||"").split(" ");if(pos.length===1){pos=horizontalPositions.test(pos[0])?pos.concat([center]):verticalPositions.test(pos[0])?[center].concat(pos):[center,center];}
pos[0]=horizontalPositions.test(pos[0])?pos[0]:center;pos[1]=verticalPositions.test(pos[1])?pos[1]:center;options[this]=pos;});if(collision.length===1){collision[1]=collision[0];}
offset[0]=parseInt(offset[0],10)||0;if(offset.length===1){offset[1]=offset[0];}
offset[1]=parseInt(offset[1],10)||0;if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]===center){basePosition.left+=targetWidth/2;}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]===center){basePosition.top+=targetHeight/2;}
basePosition.left+=offset[0];basePosition.top+=offset[1];return this.each(function(){var elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseInt($.curCSS(this,"marginLeft",true))||0,marginTop=parseInt($.curCSS(this,"marginTop",true))||0,collisionWidth=elemWidth+marginLeft+
(parseInt($.curCSS(this,"marginRight",true))||0),collisionHeight=elemHeight+marginTop+
(parseInt($.curCSS(this,"marginBottom",true))||0),position=$.extend({},basePosition),collisionPosition;if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]===center){position.left-=elemWidth/2;}
if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]===center){position.top-=elemHeight/2;}
position.left=Math.round(position.left);position.top=Math.round(position.top);collisionPosition={left:position.left-marginLeft,top:position.top-marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:offset,my:options.my,at:options.at});}});if($.fn.bgiframe){elem.bgiframe();}
elem.offset($.extend(position,{using:options.using}));});};$.ui.position={fit:{left:function(position,data){var win=$(window),over=data.collisionPosition.left+data.collisionWidth-win.width()-win.scrollLeft();position.left=over>0?position.left-over:Math.max(position.left-data.collisionPosition.left,position.left);},top:function(position,data){var win=$(window),over=data.collisionPosition.top+data.collisionHeight-win.height()-win.scrollTop();position.top=over>0?position.top-over:Math.max(position.top-data.collisionPosition.top,position.top);}},flip:{left:function(position,data){if(data.at[0]===center){return;}
var win=$(window),over=data.collisionPosition.left+data.collisionWidth-win.width()-win.scrollLeft(),myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:-data.targetWidth,offset=-2*data.offset[0];position.left+=data.collisionPosition.left<0?myOffset+atOffset+offset:over>0?myOffset+atOffset+offset:0;},top:function(position,data){if(data.at[1]===center){return;}
var win=$(window),over=data.collisionPosition.top+data.collisionHeight-win.height()-win.scrollTop(),myOffset=data.my[1]==="top"?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:-data.targetHeight,offset=-2*data.offset[1];position.top+=data.collisionPosition.top<0?myOffset+atOffset+offset:over>0?myOffset+atOffset+offset:0;}}};if(!$.offset.setOffset){$.offset.setOffset=function(elem,options){if(/static/.test($.curCSS(elem,"position"))){elem.style.position="relative";}
var curElem=$(elem),curOffset=curElem.offset(),curTop=parseInt($.curCSS(elem,"top",true),10)||0,curLeft=parseInt($.curCSS(elem,"left",true),10)||0,props={top:(options.top-curOffset.top)+curTop,left:(options.left-curOffset.left)+curLeft};if('using'in options){options.using.call(elem,props);}else{curElem.css(props);}};$.fn.offset=function(options){var elem=this[0];if(!elem||!elem.ownerDocument){return null;}
if(options){return this.each(function(){$.offset.setOffset(this,options);});}
return _offset.call(this);};}}(jQuery));(function($,undefined){$.widget("ui.draggable",$.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=='original'&&!(/^(?:r|a|f)/).test(this.element.css("position")))
this.element[0].style.position='relative';(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit();},destroy:function(){if(!this.element.data('draggable'))return;this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable"
+" ui-draggable-dragging"
+" ui-draggable-disabled");this._mouseDestroy();return this;},_mouseCapture:function(event){var o=this.options;if(this.helper||o.disabled||$(event.target).is('.ui-resizable-handle'))
return false;this.handle=this._getHandle(event);if(!this.handle)
return false;return true;},_mouseStart:function(event){var o=this.options;this.helper=this._createHelper(event);this._cacheHelperProportions();if($.ui.ddmanager)
$.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));if(o.containment)
this._setContainment();if(this._trigger("start",event)===false){this._clear();return false;}
this._cacheHelperProportions();if($.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(this,event);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(event,true);return true;},_mouseDrag:function(event,noPropagation){this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!noPropagation){var ui=this._uiHash();if(this._trigger('drag',event,ui)===false){this._mouseUp({});return false;}
this.position=ui.position;}
if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+'px';if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+'px';if($.ui.ddmanager)$.ui.ddmanager.drag(this,event);return false;},_mouseStop:function(event){var dropped=false;if($.ui.ddmanager&&!this.options.dropBehaviour)
dropped=$.ui.ddmanager.drop(this,event);if(this.dropped){dropped=this.dropped;this.dropped=false;}
if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")
return false;if((this.options.revert=="invalid"&&!dropped)||(this.options.revert=="valid"&&dropped)||this.options.revert===true||($.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped))){var self=this;$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(self._trigger("stop",event)!==false){self._clear();}});}else{if(this._trigger("stop",event)!==false){this._clear();}}
return false;},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({});}else{this._clear();}
return this;},_getHandle:function(event){var handle=!this.options.handle||!$(this.options.handle,this.element).length?true:false;$(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==event.target)handle=true;});return handle;},_createHelper:function(event){var o=this.options;var helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event])):(o.helper=='clone'?this.element.clone():this.element);if(!helper.parents('body').length)
helper.appendTo((o.appendTo=='parent'?this.element[0].parentNode:o.appendTo));if(helper[0]!=this.element[0]&&!(/(fixed|absolute)/).test(helper.css("position")))
helper.css("position","absolute");return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj=='string'){obj=obj.split(' ');}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
if('left'in obj){this.offset.click.left=obj.left+this.margins.left;}
if('right'in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
if('top'in obj){this.offset.click.top=obj.top+this.margins.top;}
if('bottom'in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition=='absolute'&&this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=='html'&&$.browser.msie))
po={top:0,left:0};return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var p=this.element.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var o=this.options;if(o.containment=='parent')o.containment=this.helper[0].parentNode;if(o.containment=='document'||o.containment=='window')this.containment=[(o.containment=='document'?0:$(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(o.containment=='document'?0:$(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(o.containment=='document'?0:$(window).scrollLeft())+$(o.containment=='document'?document:window).width()-this.helperProportions.width-this.margins.left,(o.containment=='document'?0:$(window).scrollTop())+($(o.containment=='document'?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!(/^(document|window|parent)$/).test(o.containment)&&o.containment.constructor!=Array){var ce=$(o.containment)[0];if(!ce)return;var co=$(o.containment).offset();var over=($(ce).css("overflow")!='hidden');this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0),co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0),co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];}else if(o.containment.constructor==Array){this.containment=o.containment;}},_convertPositionTo:function(d,pos){if(!pos)pos=this.position;var mod=d=="absolute"?1:-1;var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top
+this.offset.relative.top*mod
+this.offset.parent.top*mod
-($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left
+this.offset.relative.left*mod
+this.offset.parent.left*mod
-($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);var pageX=event.pageX;var pageY=event.pageY;if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0])pageX=this.containment[0]+this.offset.click.left;if(event.pageY-this.offset.click.top<this.containment[1])pageY=this.containment[1]+this.offset.click.top;if(event.pageX-this.offset.click.left>this.containment[2])pageX=this.containment[2]+this.offset.click.left;if(event.pageY-this.offset.click.top>this.containment[3])pageY=this.containment[3]+this.offset.click.top;}
if(o.grid){var top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?(!(top-this.offset.click.top<this.containment[1]||top-this.offset.click.top>this.containment[3])?top:(!(top-this.offset.click.top<this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;var left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?(!(left-this.offset.click.left<this.containment[0]||left-this.offset.click.left>this.containment[2])?left:(!(left-this.offset.click.left<this.containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}
return{top:(pageY
-this.offset.click.top
-this.offset.relative.top
-this.offset.parent.top
+($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX
-this.offset.click.left
-this.offset.relative.left
-this.offset.parent.left
+($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval)this.helper.remove();this.helper=null;this.cancelHelperRemoval=false;},_trigger:function(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui]);if(type=="drag")this.positionAbs=this._convertPositionTo("absolute");return $.Widget.prototype._trigger.call(this,type,event,ui);},plugins:{},_uiHash:function(event){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs};}});$.extend($.ui.draggable,{version:"1.8.11"});$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui){var inst=$(this).data("draggable"),o=inst.options,uiSortable=$.extend({},ui,{item:inst.element});inst.sortables=[];$(o.connectToSortable).each(function(){var sortable=$.data(this,'sortable');if(sortable&&!sortable.options.disabled){inst.sortables.push({instance:sortable,shouldRevert:sortable.options.revert});sortable.refreshPositions();sortable._trigger("activate",event,uiSortable);}});},stop:function(event,ui){var inst=$(this).data("draggable"),uiSortable=$.extend({},ui,{item:inst.element});$.each(inst.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;inst.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(event);this.instance.options.helper=this.instance.options._helper;if(inst.options.helper=='original')
this.instance.currentItem.css({top:'auto',left:'auto'});}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",event,uiSortable);}});},drag:function(event,ui){var inst=$(this).data("draggable"),self=this;var checkPos=function(o){var dyClick=this.offset.click.top,dxClick=this.offset.click.left;var helperTop=this.positionAbs.top,helperLeft=this.positionAbs.left;var itemHeight=o.height,itemWidth=o.width;var itemTop=o.top,itemLeft=o.left;return $.ui.isOver(helperTop+dyClick,helperLeft+dxClick,itemTop,itemLeft,itemHeight,itemWidth);};$.each(inst.sortables,function(i){this.instance.positionAbs=inst.positionAbs;this.instance.helperProportions=inst.helperProportions;this.instance.offset.click=inst.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=$(self).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return ui.helper[0];};event.target=this.instance.currentItem[0];this.instance._mouseCapture(event,true);this.instance._mouseStart(event,true,true);this.instance.offset.click.top=inst.offset.click.top;this.instance.offset.click.left=inst.offset.click.left;this.instance.offset.parent.left-=inst.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=inst.offset.parent.top-this.instance.offset.parent.top;inst._trigger("toSortable",event);inst.dropped=this.instance.element;inst.currentItem=inst.element;this.instance.fromOutside=inst;}
if(this.instance.currentItem)this.instance._mouseDrag(event);}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger('out',event,this.instance._uiHash(this.instance));this.instance._mouseStop(event,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder)this.instance.placeholder.remove();inst._trigger("fromSortable",event);inst.dropped=false;}};});}});$.ui.plugin.add("draggable","cursor",{start:function(event,ui){var t=$('body'),o=$(this).data('draggable').options;if(t.css("cursor"))o._cursor=t.css("cursor");t.css("cursor",o.cursor);},stop:function(event,ui){var o=$(this).data('draggable').options;if(o._cursor)$('body').css("cursor",o._cursor);}});$.ui.plugin.add("draggable","iframeFix",{start:function(event,ui){var o=$(this).data('draggable').options;$(o.iframeFix===true?"iframe":o.iframeFix).each(function(){$('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css($(this).offset()).appendTo("body");});},stop:function(event,ui){$("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this);});}});$.ui.plugin.add("draggable","opacity",{start:function(event,ui){var t=$(ui.helper),o=$(this).data('draggable').options;if(t.css("opacity"))o._opacity=t.css("opacity");t.css('opacity',o.opacity);},stop:function(event,ui){var o=$(this).data('draggable').options;if(o._opacity)$(ui.helper).css('opacity',o._opacity);}});$.ui.plugin.add("draggable","scroll",{start:function(event,ui){var i=$(this).data("draggable");if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!='HTML')i.overflowOffset=i.scrollParent.offset();},drag:function(event,ui){var i=$(this).data("draggable"),o=i.options,scrolled=false;if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!='HTML'){if(!o.axis||o.axis!='x'){if((i.overflowOffset.top+i.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity)
i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop+o.scrollSpeed;else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity)
i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop-o.scrollSpeed;}
if(!o.axis||o.axis!='y'){if((i.overflowOffset.left+i.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity)
i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft+o.scrollSpeed;else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity)
i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft-o.scrollSpeed;}}else{if(!o.axis||o.axis!='x'){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}
if(!o.axis||o.axis!='y'){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(i,event);}});$.ui.plugin.add("draggable","snap",{start:function(event,ui){var i=$(this).data("draggable"),o=i.options;i.snapElements=[];$(o.snap.constructor!=String?(o.snap.items||':data(draggable)'):o.snap).each(function(){var $t=$(this);var $o=$t.offset();if(this!=i.element[0])i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left});});},drag:function(event,ui){var inst=$(this).data("draggable"),o=inst.options;var d=o.snapTolerance;var x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(var i=inst.snapElements.length-1;i>=0;i--){var l=inst.snapElements[i].left,r=l+inst.snapElements[i].width,t=inst.snapElements[i].top,b=t+inst.snapElements[i].height;if(!((l-d<x1&&x1<r+d&&t-d<y1&&y1<b+d)||(l-d<x1&&x1<r+d&&t-d<y2&&y2<b+d)||(l-d<x2&&x2<r+d&&t-d<y1&&y1<b+d)||(l-d<x2&&x2<r+d&&t-d<y2&&y2<b+d))){if(inst.snapElements[i].snapping)(inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));inst.snapElements[i].snapping=false;continue;}
if(o.snapMode!='inner'){var ts=Math.abs(t-y2)<=d;var bs=Math.abs(b-y1)<=d;var ls=Math.abs(l-x2)<=d;var rs=Math.abs(r-x1)<=d;if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top-inst.margins.top;if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top-inst.margins.top;if(ls)ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left-inst.margins.left;if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left-inst.margins.left;}
var first=(ts||bs||ls||rs);if(o.snapMode!='outer'){var ts=Math.abs(t-y1)<=d;var bs=Math.abs(b-y2)<=d;var ls=Math.abs(l-x1)<=d;var rs=Math.abs(r-x2)<=d;if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top-inst.margins.top;if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top-inst.margins.top;if(ls)ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left-inst.margins.left;if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left-inst.margins.left;}
if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first))
(inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));inst.snapElements[i].snapping=(ts||bs||ls||rs||first);};}});$.ui.plugin.add("draggable","stack",{start:function(event,ui){var o=$(this).data("draggable").options;var group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0);});if(!group.length){return;}
var min=parseInt(group[0].style.zIndex)||0;$(group).each(function(i){this.style.zIndex=min+i;});this[0].style.zIndex=min+group.length;}});$.ui.plugin.add("draggable","zIndex",{start:function(event,ui){var t=$(ui.helper),o=$(this).data("draggable").options;if(t.css("zIndex"))o._zIndex=t.css("zIndex");t.css('zIndex',o.zIndex);},stop:function(event,ui){var o=$(this).data("draggable").options;if(o._zIndex)$(ui.helper).css('zIndex',o._zIndex);}});})(jQuery);(function($,undefined){$.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:'*',activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:'default',tolerance:'intersect'},_create:function(){var o=this.options,accept=o.accept;this.isover=0;this.isout=1;this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept);};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};$.ui.ddmanager.droppables[o.scope]=$.ui.ddmanager.droppables[o.scope]||[];$.ui.ddmanager.droppables[o.scope].push(this);(o.addClasses&&this.element.addClass("ui-droppable"));},destroy:function(){var drop=$.ui.ddmanager.droppables[this.options.scope];for(var i=0;i<drop.length;i++)
if(drop[i]==this)
drop.splice(i,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this;},_setOption:function(key,value){if(key=='accept'){this.accept=$.isFunction(value)?value:function(d){return d.is(value);};}
$.Widget.prototype._setOption.apply(this,arguments);},_activate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass)this.element.addClass(this.options.activeClass);(draggable&&this._trigger('activate',event,this.ui(draggable)));},_deactivate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass)this.element.removeClass(this.options.activeClass);(draggable&&this._trigger('deactivate',event,this.ui(draggable)));},_over:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return;if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.hoverClass)this.element.addClass(this.options.hoverClass);this._trigger('over',event,this.ui(draggable));}},_out:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return;if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.hoverClass)this.element.removeClass(this.options.hoverClass);this._trigger('out',event,this.ui(draggable));}},_drop:function(event,custom){var draggable=custom||$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return false;var childrenIntersection=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var inst=$.data(this,'droppable');if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope==draggable.options.scope&&inst.accept.call(inst.element[0],(draggable.currentItem||draggable.element))&&$.ui.intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance)){childrenIntersection=true;return false;}});if(childrenIntersection)return false;if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){if(this.options.activeClass)this.element.removeClass(this.options.activeClass);if(this.options.hoverClass)this.element.removeClass(this.options.hoverClass);this._trigger('drop',event,this.ui(draggable));return this.element;}
return false;},ui:function(c){return{draggable:(c.currentItem||c.element),helper:c.helper,position:c.position,offset:c.positionAbs};}});$.extend($.ui.droppable,{version:"1.8.11"});$.ui.intersect=function(draggable,droppable,toleranceMode){if(!droppable.offset)return false;var x1=(draggable.positionAbs||draggable.position.absolute).left,x2=x1+draggable.helperProportions.width,y1=(draggable.positionAbs||draggable.position.absolute).top,y2=y1+draggable.helperProportions.height;var l=droppable.offset.left,r=l+droppable.proportions.width,t=droppable.offset.top,b=t+droppable.proportions.height;switch(toleranceMode){case'fit':return(l<=x1&&x2<=r&&t<=y1&&y2<=b);break;case'intersect':return(l<x1+(draggable.helperProportions.width/2)&&x2-(draggable.helperProportions.width/2)<r&&t<y1+(draggable.helperProportions.height/2)&&y2-(draggable.helperProportions.height/2)<b);break;case'pointer':var draggableLeft=((draggable.positionAbs||draggable.position.absolute).left+(draggable.clickOffset||draggable.offset.click).left),draggableTop=((draggable.positionAbs||draggable.position.absolute).top+(draggable.clickOffset||draggable.offset.click).top),isOver=$.ui.isOver(draggableTop,draggableLeft,t,l,droppable.proportions.height,droppable.proportions.width);return isOver;break;case'touch':return((y1>=t&&y1<=b)||(y2>=t&&y2<=b)||(y1<t&&y2>b))&&((x1>=l&&x1<=r)||(x2>=l&&x2<=r)||(x1<l&&x2>r));break;default:return false;break;}};$.ui.ddmanager={current:null,droppables:{'default':[]},prepareOffsets:function(t,event){var m=$.ui.ddmanager.droppables[t.options.scope]||[];var type=event?event.type:null;var list=(t.currentItem||t.element).find(":data(droppable)").andSelf();droppablesLoop:for(var i=0;i<m.length;i++){if(m[i].options.disabled||(t&&!m[i].accept.call(m[i].element[0],(t.currentItem||t.element))))continue;for(var j=0;j<list.length;j++){if(list[j]==m[i].element[0]){m[i].proportions.height=0;continue droppablesLoop;}};m[i].visible=m[i].element.css("display")!="none";if(!m[i].visible)continue;if(type=="mousedown")m[i]._activate.call(m[i],event);m[i].offset=m[i].element.offset();m[i].proportions={width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight};}},drop:function(draggable,event){var dropped=false;$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(!this.options)return;if(!this.options.disabled&&this.visible&&$.ui.intersect(draggable,this,this.options.tolerance))
dropped=dropped||this._drop.call(this,event);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this.isout=1;this.isover=0;this._deactivate.call(this,event);}});return dropped;},drag:function(draggable,event){if(draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event);$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var intersects=$.ui.intersect(draggable,this,this.options.tolerance);var c=!intersects&&this.isover==1?'isout':(intersects&&this.isover==0?'isover':null);if(!c)return;var parentInstance;if(this.options.greedy){var parent=this.element.parents(':data(droppable):eq(0)');if(parent.length){parentInstance=$.data(parent[0],'droppable');parentInstance.greedyChild=(c=='isover'?1:0);}}
if(parentInstance&&c=='isover'){parentInstance['isover']=0;parentInstance['isout']=1;parentInstance._out.call(parentInstance,event);}
this[c]=1;this[c=='isout'?'isover':'isout']=0;this[c=="isover"?"_over":"_out"].call(this,event);if(parentInstance&&c=='isout'){parentInstance['isout']=0;parentInstance['isover']=1;parentInstance._over.call(parentInstance,event);}});}};})(jQuery);(function($,undefined){$.widget("ui.resizable",$.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var self=this,o=this.options;this.element.addClass("ui-resizable");$.extend(this,{_aspectRatio:!!(o.aspectRatio),aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||'ui-resizable-helper':null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){if(/relative/.test(this.element.css('position'))&&$.browser.opera)
this.element.css({position:'relative',top:'auto',left:'auto'});this.element.wrap($('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css('position'),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css('top'),left:this.element.css('left')}));this.element=this.element.parent().data("resizable",this.element.data('resizable'));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css('resize');this.originalElement.css('resize','none');this._proportionallyResizeElements.push(this.originalElement.css({position:'static',zoom:1,display:'block'}));this.originalElement.css({margin:this.originalElement.css('margin')});this._proportionallyResize();}
this.handles=o.handles||(!$('.ui-resizable-handle',this.element).length?"e,s,se":{n:'.ui-resizable-n',e:'.ui-resizable-e',s:'.ui-resizable-s',w:'.ui-resizable-w',se:'.ui-resizable-se',sw:'.ui-resizable-sw',ne:'.ui-resizable-ne',nw:'.ui-resizable-nw'});if(this.handles.constructor==String){if(this.handles=='all')this.handles='n,e,s,w,se,sw,ne,nw';var n=this.handles.split(",");this.handles={};for(var i=0;i<n.length;i++){var handle=$.trim(n[i]),hname='ui-resizable-'+handle;var axis=$('<div class="ui-resizable-handle '+hname+'"></div>');if(/sw|se|ne|nw/.test(handle))axis.css({zIndex:++o.zIndex});if('se'==handle){axis.addClass('ui-icon ui-icon-gripsmall-diagonal-se');};this.handles[handle]='.ui-resizable-'+handle;this.element.append(axis);}}
this._renderAxis=function(target){target=target||this.element;for(var i in this.handles){if(this.handles[i].constructor==String)
this.handles[i]=$(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var axis=$(this.handles[i],this.element),padWrapper=0;padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();var padPos=['padding',/ne|nw|n/.test(i)?'Top':/se|sw|s/.test(i)?'Bottom':/^e$/.test(i)?'Right':'Left'].join("");target.css(padPos,padWrapper);this._proportionallyResize();}
if(!$(this.handles[i]).length)
continue;}};this._renderAxis(this.element);this._handles=$('.ui-resizable-handle',this.element).disableSelection();this._handles.mouseover(function(){if(!self.resizing){if(this.className)
var axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);self.axis=axis&&axis[1]?axis[1]:'se';}});if(o.autoHide){this._handles.hide();$(this.element).addClass("ui-resizable-autohide").hover(function(){$(this).removeClass("ui-resizable-autohide");self._handles.show();},function(){if(!self.resizing){$(this).addClass("ui-resizable-autohide");self._handles.hide();}});}
this._mouseInit();},destroy:function(){this._mouseDestroy();var _destroy=function(exp){$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find('.ui-resizable-handle').remove();};if(this.elementIsWrapper){_destroy(this.element);var wrapper=this.element;wrapper.after(this.originalElement.css({position:wrapper.css('position'),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css('top'),left:wrapper.css('left')})).remove();}
this.originalElement.css('resize',this.originalResizeStyle);_destroy(this.originalElement);return this;},_mouseCapture:function(event){var handle=false;for(var i in this.handles){if($(this.handles[i])[0]==event.target){handle=true;}}
return!this.options.disabled&&handle;},_mouseStart:function(event){var o=this.options,iniPos=this.element.position(),el=this.element;this.resizing=true;this.documentScroll={top:$(document).scrollTop(),left:$(document).scrollLeft()};if(el.is('.ui-draggable')||(/absolute/).test(el.css('position'))){el.css({position:'absolute',top:iniPos.top,left:iniPos.left});}
if($.browser.opera&&(/relative/).test(el.css('position')))
el.css({position:'relative',top:'auto',left:'auto'});this._renderProxy();var curleft=num(this.helper.css('left')),curtop=num(this.helper.css('top'));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0;}
this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalPosition={left:curleft,top:curtop};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=(typeof o.aspectRatio=='number')?o.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var cursor=$('.ui-resizable-'+this.axis).css('cursor');$('body').css('cursor',cursor=='auto'?this.axis+'-resize':cursor);el.addClass("ui-resizable-resizing");this._propagate("start",event);return true;},_mouseDrag:function(event){var el=this.helper,o=this.options,props={},self=this,smp=this.originalMousePosition,a=this.axis;var dx=(event.pageX-smp.left)||0,dy=(event.pageY-smp.top)||0;var trigger=this._change[a];if(!trigger)return false;var data=trigger.apply(this,[event,dx,dy]),ie6=$.browser.msie&&$.browser.version<7,csdif=this.sizeDiff;if(this._aspectRatio||event.shiftKey)
data=this._updateRatio(data,event);data=this._respectSize(data,event);this._propagate("resize",event);el.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length)
this._proportionallyResize();this._updateCache(data);this._trigger('resize',event,this.ui());return false;},_mouseStop:function(event){this.resizing=false;var o=this.options,self=this;if(this._helper){var pr=this._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],'left')?0:self.sizeDiff.height,soffsetw=ista?0:self.sizeDiff.width;var s={width:(self.helper.width()-soffsetw),height:(self.helper.height()-soffseth)},left=(parseInt(self.element.css('left'),10)+(self.position.left-self.originalPosition.left))||null,top=(parseInt(self.element.css('top'),10)+(self.position.top-self.originalPosition.top))||null;if(!o.animate)
this.element.css($.extend(s,{top:top,left:left}));self.helper.height(self.size.height);self.helper.width(self.size.width);if(this._helper&&!o.animate)this._proportionallyResize();}
$('body').css('cursor','auto');this.element.removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper)this.helper.remove();return false;},_updateCache:function(data){var o=this.options;this.offset=this.helper.offset();if(isNumber(data.left))this.position.left=data.left;if(isNumber(data.top))this.position.top=data.top;if(isNumber(data.height))this.size.height=data.height;if(isNumber(data.width))this.size.width=data.width;},_updateRatio:function(data,event){var o=this.options,cpos=this.position,csize=this.size,a=this.axis;if(data.height)data.width=(csize.height*this.aspectRatio);else if(data.width)data.height=(csize.width/this.aspectRatio);if(a=='sw'){data.left=cpos.left+(csize.width-data.width);data.top=null;}
if(a=='nw'){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width);}
return data;},_respectSize:function(data,event){var el=this.helper,o=this.options,pRatio=this._aspectRatio||event.shiftKey,a=this.axis,ismaxw=isNumber(data.width)&&o.maxWidth&&(o.maxWidth<data.width),ismaxh=isNumber(data.height)&&o.maxHeight&&(o.maxHeight<data.height),isminw=isNumber(data.width)&&o.minWidth&&(o.minWidth>data.width),isminh=isNumber(data.height)&&o.minHeight&&(o.minHeight>data.height);if(isminw)data.width=o.minWidth;if(isminh)data.height=o.minHeight;if(ismaxw)data.width=o.maxWidth;if(ismaxh)data.height=o.maxHeight;var dw=this.originalPosition.left+this.originalSize.width,dh=this.position.top+this.size.height;var cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw&&cw)data.left=dw-o.minWidth;if(ismaxw&&cw)data.left=dw-o.maxWidth;if(isminh&&ch)data.top=dh-o.minHeight;if(ismaxh&&ch)data.top=dh-o.maxHeight;var isNotwh=!data.width&&!data.height;if(isNotwh&&!data.left&&data.top)data.top=null;else if(isNotwh&&!data.top&&data.left)data.left=null;return data;},_proportionallyResize:function(){var o=this.options;if(!this._proportionallyResizeElements.length)return;var element=this.helper||this.element;for(var i=0;i<this._proportionallyResizeElements.length;i++){var prel=this._proportionallyResizeElements[i];if(!this.borderDif){var b=[prel.css('borderTopWidth'),prel.css('borderRightWidth'),prel.css('borderBottomWidth'),prel.css('borderLeftWidth')],p=[prel.css('paddingTop'),prel.css('paddingRight'),prel.css('paddingBottom'),prel.css('paddingLeft')];this.borderDif=$.map(b,function(v,i){var border=parseInt(v,10)||0,padding=parseInt(p[i],10)||0;return border+padding;});}
if($.browser.msie&&!(!($(element).is(':hidden')||$(element).parents(':hidden').length)))
continue;prel.css({height:(element.height()-this.borderDif[0]-this.borderDif[2])||0,width:(element.width()-this.borderDif[1]-this.borderDif[3])||0});};},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$('<div style="overflow:hidden;"></div>');var ie6=$.browser.msie&&$.browser.version<7,ie6offset=(ie6?1:0),pxyoffset=(ie6?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+pxyoffset,height:this.element.outerHeight()+pxyoffset,position:'absolute',left:this.elementOffset.left-ie6offset+'px',top:this.elementOffset.top-ie6offset+'px',zIndex:++o.zIndex});this.helper.appendTo("body").disableSelection();}else{this.helper=this.element;}},_change:{e:function(event,dx,dy){return{width:this.originalSize.width+dx};},w:function(event,dx,dy){var o=this.options,cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx};},n:function(event,dx,dy){var o=this.options,cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy};},s:function(event,dx,dy){return{height:this.originalSize.height+dy};},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);(n!="resize"&&this._trigger(n,event,this.ui()));},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};}});$.extend($.ui.resizable,{version:"1.8.11"});$.ui.plugin.add("resizable","alsoResize",{start:function(event,ui){var self=$(this).data("resizable"),o=self.options;var _store=function(exp){$(exp).each(function(){var el=$(this);el.data("resizable-alsoresize",{width:parseInt(el.width(),10),height:parseInt(el.height(),10),left:parseInt(el.css('left'),10),top:parseInt(el.css('top'),10),position:el.css('position')});});};if(typeof(o.alsoResize)=='object'&&!o.alsoResize.parentNode){if(o.alsoResize.length){o.alsoResize=o.alsoResize[0];_store(o.alsoResize);}
else{$.each(o.alsoResize,function(exp){_store(exp);});}}else{_store(o.alsoResize);}},resize:function(event,ui){var self=$(this).data("resizable"),o=self.options,os=self.originalSize,op=self.originalPosition;var delta={height:(self.size.height-os.height)||0,width:(self.size.width-os.width)||0,top:(self.position.top-op.top)||0,left:(self.position.left-op.left)||0},_alsoResize=function(exp,c){$(exp).each(function(){var el=$(this),start=$(this).data("resizable-alsoresize"),style={},css=c&&c.length?c:el.parents(ui.originalElement[0]).length?['width','height']:['width','height','top','left'];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0)
style[prop]=sum||null;});if($.browser.opera&&/relative/.test(el.css('position'))){self._revertToRelativePosition=true;el.css({position:'absolute',top:'auto',left:'auto'});}
el.css(style);});};if(typeof(o.alsoResize)=='object'&&!o.alsoResize.nodeType){$.each(o.alsoResize,function(exp,c){_alsoResize(exp,c);});}else{_alsoResize(o.alsoResize);}},stop:function(event,ui){var self=$(this).data("resizable"),o=self.options;var _reset=function(exp){$(exp).each(function(){var el=$(this);el.css({position:el.data("resizable-alsoresize").position});});};if(self._revertToRelativePosition){self._revertToRelativePosition=false;if(typeof(o.alsoResize)=='object'&&!o.alsoResize.nodeType){$.each(o.alsoResize,function(exp){_reset(exp);});}else{_reset(o.alsoResize);}}
$(this).removeData("resizable-alsoresize");}});$.ui.plugin.add("resizable","animate",{stop:function(event,ui){var self=$(this).data("resizable"),o=self.options;var pr=self._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],'left')?0:self.sizeDiff.height,soffsetw=ista?0:self.sizeDiff.width;var style={width:(self.size.width-soffsetw),height:(self.size.height-soffseth)},left=(parseInt(self.element.css('left'),10)+(self.position.left-self.originalPosition.left))||null,top=(parseInt(self.element.css('top'),10)+(self.position.top-self.originalPosition.top))||null;self.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseInt(self.element.css('width'),10),height:parseInt(self.element.css('height'),10),top:parseInt(self.element.css('top'),10),left:parseInt(self.element.css('left'),10)};if(pr&&pr.length)$(pr[0]).css({width:data.width,height:data.height});self._updateCache(data);self._propagate("resize",event);}});}});$.ui.plugin.add("resizable","containment",{start:function(event,ui){var self=$(this).data("resizable"),o=self.options,el=self.element;var oc=o.containment,ce=(oc instanceof $)?oc.get(0):(/parent/.test(oc))?el.parent().get(0):oc;if(!ce)return;self.containerElement=$(ce);if(/document/.test(oc)||oc==document){self.containerOffset={left:0,top:0};self.containerPosition={left:0,top:0};self.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight};}
else{var element=$(ce),p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=num(element.css("padding"+name));});self.containerOffset=element.offset();self.containerPosition=element.position();self.containerSize={height:(element.innerHeight()-p[3]),width:(element.innerWidth()-p[1])};var co=self.containerOffset,ch=self.containerSize.height,cw=self.containerSize.width,width=($.ui.hasScroll(ce,"left")?ce.scrollWidth:cw),height=($.ui.hasScroll(ce)?ce.scrollHeight:ch);self.parentData={element:ce,left:co.left,top:co.top,width:width,height:height};}},resize:function(event,ui){var self=$(this).data("resizable"),o=self.options,ps=self.containerSize,co=self.containerOffset,cs=self.size,cp=self.position,pRatio=self._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=self.containerElement;if(ce[0]!=document&&(/static/).test(ce.css('position')))cop=co;if(cp.left<(self._helper?co.left:0)){self.size.width=self.size.width+(self._helper?(self.position.left-co.left):(self.position.left-cop.left));if(pRatio)self.size.height=self.size.width/o.aspectRatio;self.position.left=o.helper?co.left:0;}
if(cp.top<(self._helper?co.top:0)){self.size.height=self.size.height+(self._helper?(self.position.top-co.top):self.position.top);if(pRatio)self.size.width=self.size.height*o.aspectRatio;self.position.top=self._helper?co.top:0;}
self.offset.left=self.parentData.left+self.position.left;self.offset.top=self.parentData.top+self.position.top;var woset=Math.abs((self._helper?self.offset.left-cop.left:(self.offset.left-cop.left))+self.sizeDiff.width),hoset=Math.abs((self._helper?self.offset.top-cop.top:(self.offset.top-co.top))+self.sizeDiff.height);var isParent=self.containerElement.get(0)==self.element.parent().get(0),isOffsetRelative=/relative|absolute/.test(self.containerElement.css('position'));if(isParent&&isOffsetRelative)woset-=self.parentData.left;if(woset+self.size.width>=self.parentData.width){self.size.width=self.parentData.width-woset;if(pRatio)self.size.height=self.size.width/self.aspectRatio;}
if(hoset+self.size.height>=self.parentData.height){self.size.height=self.parentData.height-hoset;if(pRatio)self.size.width=self.size.height*self.aspectRatio;}},stop:function(event,ui){var self=$(this).data("resizable"),o=self.options,cp=self.position,co=self.containerOffset,cop=self.containerPosition,ce=self.containerElement;var helper=$(self.helper),ho=helper.offset(),w=helper.outerWidth()-self.sizeDiff.width,h=helper.outerHeight()-self.sizeDiff.height;if(self._helper&&!o.animate&&(/relative/).test(ce.css('position')))
$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});if(self._helper&&!o.animate&&(/static/).test(ce.css('position')))
$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}});$.ui.plugin.add("resizable","ghost",{start:function(event,ui){var self=$(this).data("resizable"),o=self.options,cs=self.size;self.ghost=self.originalElement.clone();self.ghost.css({opacity:.25,display:'block',position:'relative',height:cs.height,width:cs.width,margin:0,left:0,top:0}).addClass('ui-resizable-ghost').addClass(typeof o.ghost=='string'?o.ghost:'');self.ghost.appendTo(self.helper);},resize:function(event,ui){var self=$(this).data("resizable"),o=self.options;if(self.ghost)self.ghost.css({position:'relative',height:self.size.height,width:self.size.width});},stop:function(event,ui){var self=$(this).data("resizable"),o=self.options;if(self.ghost&&self.helper)self.helper.get(0).removeChild(self.ghost.get(0));}});$.ui.plugin.add("resizable","grid",{resize:function(event,ui){var self=$(this).data("resizable"),o=self.options,cs=self.size,os=self.originalSize,op=self.originalPosition,a=self.axis,ratio=o._aspectRatio||event.shiftKey;o.grid=typeof o.grid=="number"?[o.grid,o.grid]:o.grid;var ox=Math.round((cs.width-os.width)/(o.grid[0]||1))*(o.grid[0]||1),oy=Math.round((cs.height-os.height)/(o.grid[1]||1))*(o.grid[1]||1);if(/^(se|s|e)$/.test(a)){self.size.width=os.width+ox;self.size.height=os.height+oy;}
else if(/^(ne)$/.test(a)){self.size.width=os.width+ox;self.size.height=os.height+oy;self.position.top=op.top-oy;}
else if(/^(sw)$/.test(a)){self.size.width=os.width+ox;self.size.height=os.height+oy;self.position.left=op.left-ox;}
else{self.size.width=os.width+ox;self.size.height=os.height+oy;self.position.top=op.top-oy;self.position.left=op.left-ox;}}});var num=function(v){return parseInt(v,10)||0;};var isNumber=function(value){return!isNaN(parseInt(value,10));};})(jQuery);(function($,undefined){$.widget("ui.selectable",$.ui.mouse,{options:{appendTo:'body',autoRefresh:true,distance:0,filter:'*',tolerance:'touch'},_create:function(){var self=this;this.element.addClass("ui-selectable");this.dragged=false;var selectees;this.refresh=function(){selectees=$(self.options.filter,self.element[0]);selectees.each(function(){var $this=$(this);var pos=$this.offset();$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:false,selected:$this.hasClass('ui-selected'),selecting:$this.hasClass('ui-selecting'),unselecting:$this.hasClass('ui-unselecting')});});};this.refresh();this.selectees=selectees.addClass("ui-selectee");this._mouseInit();this.helper=$("<div class='ui-selectable-helper'></div>");},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this;},_mouseStart:function(event){var self=this;this.opos=[event.pageX,event.pageY];if(this.options.disabled)
return;var options=this.options;this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);this.helper.css({"left":event.clientX,"top":event.clientY,"width":0,"height":0});if(options.autoRefresh){this.refresh();}
this.selectees.filter('.ui-selected').each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=true;if(!event.metaKey){selectee.$element.removeClass('ui-selected');selectee.selected=false;selectee.$element.addClass('ui-unselecting');selectee.unselecting=true;self._trigger("unselecting",event,{unselecting:selectee.element});}});$(event.target).parents().andSelf().each(function(){var selectee=$.data(this,"selectable-item");if(selectee){var doSelect=!event.metaKey||!selectee.$element.hasClass('ui-selected');selectee.$element.removeClass(doSelect?"ui-unselecting":"ui-selected").addClass(doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;if(doSelect){self._trigger("selecting",event,{selecting:selectee.element});}else{self._trigger("unselecting",event,{unselecting:selectee.element});}
return false;}});},_mouseDrag:function(event){var self=this;this.dragged=true;if(this.options.disabled)
return;var options=this.options;var x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){var tmp=x2;x2=x1;x1=tmp;}
if(y1>y2){var tmp=y2;y2=y1;y1=tmp;}
this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item");if(!selectee||selectee.element==self.element[0])
return;var hit=false;if(options.tolerance=='touch'){hit=(!(selectee.left>x2||selectee.right<x1||selectee.top>y2||selectee.bottom<y1));}else if(options.tolerance=='fit'){hit=(selectee.left>x1&&selectee.right<x2&&selectee.top>y1&&selectee.bottom<y2);}
if(hit){if(selectee.selected){selectee.$element.removeClass('ui-selected');selectee.selected=false;}
if(selectee.unselecting){selectee.$element.removeClass('ui-unselecting');selectee.unselecting=false;}
if(!selectee.selecting){selectee.$element.addClass('ui-selecting');selectee.selecting=true;self._trigger("selecting",event,{selecting:selectee.element});}}else{if(selectee.selecting){if(event.metaKey&&selectee.startselected){selectee.$element.removeClass('ui-selecting');selectee.selecting=false;selectee.$element.addClass('ui-selected');selectee.selected=true;}else{selectee.$element.removeClass('ui-selecting');selectee.selecting=false;if(selectee.startselected){selectee.$element.addClass('ui-unselecting');selectee.unselecting=true;}
self._trigger("unselecting",event,{unselecting:selectee.element});}}
if(selectee.selected){if(!event.metaKey&&!selectee.startselected){selectee.$element.removeClass('ui-selected');selectee.selected=false;selectee.$element.addClass('ui-unselecting');selectee.unselecting=true;self._trigger("unselecting",event,{unselecting:selectee.element});}}}});return false;},_mouseStop:function(event){var self=this;this.dragged=false;var options=this.options;$('.ui-unselecting',this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass('ui-unselecting');selectee.unselecting=false;selectee.startselected=false;self._trigger("unselected",event,{unselected:selectee.element});});$('.ui-selecting',this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass('ui-selecting').addClass('ui-selected');selectee.selecting=false;selectee.selected=true;selectee.startselected=true;self._trigger("selected",event,{selected:selectee.element});});this._trigger("stop",event);this.helper.remove();return false;}});$.extend($.ui.selectable,{version:"1.8.11"});})(jQuery);(function($,undefined){$.widget("ui.sortable",$.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:'auto',cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:'> *',opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var o=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?(/left|right/).test(this.items[0].item.css('float'))||(/inline|table-cell/).test(this.items[0].item.css('display')):false;this.offset=this.element.offset();this._mouseInit();},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--)
this.items[i].item.removeData("sortable-item");return this;},_setOption:function(key,value){if(key==="disabled"){this.options[key]=value;this.widget()
[value?"addClass":"removeClass"]("ui-sortable-disabled");}else{$.Widget.prototype._setOption.apply(this,arguments);}},_mouseCapture:function(event,overrideHandle){if(this.reverting){return false;}
if(this.options.disabled||this.options.type=='static')return false;this._refreshItems(event);var currentItem=null,self=this,nodes=$(event.target).parents().each(function(){if($.data(this,'sortable-item')==self){currentItem=$(this);return false;}});if($.data(event.target,'sortable-item')==self)currentItem=$(event.target);if(!currentItem)return false;if(this.options.handle&&!overrideHandle){var validHandle=false;$(this.options.handle,currentItem).find("*").andSelf().each(function(){if(this==event.target)validHandle=true;});if(!validHandle)return false;}
this.currentItem=currentItem;this._removeCurrentsFromItems();return true;},_mouseStart:function(event,overrideHandle,noActivation){var o=this.options,self=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide();}
this._createPlaceholder();if(o.containment)
this._setContainment();if(o.cursor){if($('body').css("cursor"))this._storedCursor=$('body').css("cursor");$('body').css("cursor",o.cursor);}
if(o.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",o.opacity);}
if(o.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",o.zIndex);}
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!='HTML')
this.overflowOffset=this.scrollParent.offset();this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions)
this._cacheHelperProportions();if(!noActivation){for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,self._uiHash(this));}}
if($.ui.ddmanager)
$.ui.ddmanager.current=this;if($.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(this,event);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(event);return true;},_mouseDrag:function(event){this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs;}
if(this.options.scroll){var o=this.options,scrolled=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!='HTML'){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity)
this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity)
this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity)
this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity)
this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;}else{if(event.pageY-$(document).scrollTop()<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(this,event);}
this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+'px';if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+'px';for(var i=this.items.length-1;i>=0;i--){var item=this.items[i],itemElement=item.item[0],intersection=this._intersectsWithPointer(item);if(!intersection)continue;if(itemElement!=this.currentItem[0]&&this.placeholder[intersection==1?"next":"prev"]()[0]!=itemElement&&!$.ui.contains(this.placeholder[0],itemElement)&&(this.options.type=='semi-dynamic'?!$.ui.contains(this.element[0],itemElement):true)){this.direction=intersection==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item);}else{break;}
this._trigger("change",event,this._uiHash());break;}}
this._contactContainers(event);if($.ui.ddmanager)$.ui.ddmanager.drag(this,event);this._trigger('sort',event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false;},_mouseStop:function(event,noPropagation){if(!event)return;if($.ui.ddmanager&&!this.options.dropBehaviour)
$.ui.ddmanager.drop(this,event);if(this.options.revert){var self=this;var cur=self.placeholder.offset();self.reverting=true;$(this.helper).animate({left:cur.left-this.offset.parent.left-self.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:cur.top-this.offset.parent.top-self.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){self._clear(event);});}else{this._clear(event,noPropagation);}
return false;},cancel:function(){var self=this;if(this.dragging){this._mouseUp({target:null});if(this.options.helper=="original")
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");else
this.currentItem.show();for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,self._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,self._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(this.placeholder){if(this.placeholder[0].parentNode)this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode)this.helper.remove();$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem);}else{$(this.domPosition.parent).prepend(this.currentItem);}}
return this;},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected);var str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||'id')||'').match(o.expression||(/(.+)[-=_](.+)/));if(res)str.push((o.key||res[1]+'[]')+'='+(o.key&&o.expression?res[1]:res[2]));});if(!str.length&&o.key){str.push(o.key+'=');}
return str.join('&');},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected);var ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||'id')||'');});return ret;},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height;var l=item.left,r=l+item.width,t=item.top,b=t+item.height;var dyClick=this.offset.click.top,dxClick=this.offset.click.left;var isOverElement=(y1+dyClick)>t&&(y1+dyClick)<b&&(x1+dxClick)>l&&(x1+dxClick)<r;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?'width':'height']>item[this.floating?'width':'height'])){return isOverElement;}else{return(l<x1+(this.helperProportions.width/2)&&x2-(this.helperProportions.width/2)<r&&t<y1+(this.helperProportions.height/2)&&y2-(this.helperProportions.height/2)<b);}},_intersectsWithPointer:function(item){var isOverElementHeight=$.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=$.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth,verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(!isOverElement)
return false;return this.floating?(((horizontalDirection&&horizontalDirection=="right")||verticalDirection=="down")?2:1):(verticalDirection&&(verticalDirection=="down"?2:1));},_intersectsWithSides:function(item){var isOverBottomHalf=$.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height/2),item.height),isOverRightHalf=$.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width/2),item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return((horizontalDirection=="right"&&isOverRightHalf)||(horizontalDirection=="left"&&!isOverRightHalf));}else{return verticalDirection&&((verticalDirection=="down"&&isOverBottomHalf)||(verticalDirection=="up"&&!isOverBottomHalf));}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!=0&&(delta>0?"down":"up");},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!=0&&(delta>0?"right":"left");},refresh:function(event){this._refreshItems(event);this.refreshPositions();return this;},_connectWith:function(){var options=this.options;return options.connectWith.constructor==String?[options.connectWith]:options.connectWith;},_getItemsAsjQuery:function(connected){var self=this;var items=[];var queries=[];var connectWith=this._connectWith();if(connectWith&&connected){for(var i=connectWith.length-1;i>=0;i--){var cur=$(connectWith[i]);for(var j=cur.length-1;j>=0;j--){var inst=$.data(cur[j],'sortable');if(inst&&inst!=this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'),inst]);}};};}
queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'),this]);for(var i=queries.length-1;i>=0;i--){queries[i][0].each(function(){items.push(this);});};return $(items);},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data(sortable-item)");for(var i=0;i<this.items.length;i++){for(var j=0;j<list.length;j++){if(list[j]==this.items[i].item[0])
this.items.splice(i,1);};};},_refreshItems:function(event){this.items=[];this.containers=[this];var items=this.items;var self=this;var queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]];var connectWith=this._connectWith();if(connectWith){for(var i=connectWith.length-1;i>=0;i--){var cur=$(connectWith[i]);for(var j=cur.length-1;j>=0;j--){var inst=$.data(cur[j],'sortable');if(inst&&inst!=this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst);}};};}
for(var i=queries.length-1;i>=0;i--){var targetData=queries[i][1];var _queries=queries[i][0];for(var j=0,queriesLength=_queries.length;j<queriesLength;j++){var item=$(_queries[j]);item.data('sortable-item',targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0});};};},refreshPositions:function(fast){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset();}
for(var i=this.items.length-1;i>=0;i--){var item=this.items[i];var t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight();}
var p=t.offset();item.left=p.left;item.top=p.top;};if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this);}else{for(var i=this.containers.length-1;i>=0;i--){var p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight();};}
return this;},_createPlaceholder:function(that){var self=that||this,o=self.options;if(!o.placeholder||o.placeholder.constructor==String){var className=o.placeholder;o.placeholder={element:function(){var el=$(document.createElement(self.currentItem[0].nodeName)).addClass(className||self.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!className)
el.style.visibility="hidden";return el;},update:function(container,p){if(className&&!o.forcePlaceholderSize)return;if(!p.height()){p.height(self.currentItem.innerHeight()-parseInt(self.currentItem.css('paddingTop')||0,10)-parseInt(self.currentItem.css('paddingBottom')||0,10));};if(!p.width()){p.width(self.currentItem.innerWidth()-parseInt(self.currentItem.css('paddingLeft')||0,10)-parseInt(self.currentItem.css('paddingRight')||0,10));};}};}
self.placeholder=$(o.placeholder.element.call(self.element,self.currentItem));self.currentItem.after(self.placeholder);o.placeholder.update(self,self.placeholder);},_contactContainers:function(event){var innermostContainer=null,innermostIndex=null;for(var i=this.containers.length-1;i>=0;i--){if($.ui.contains(this.currentItem[0],this.containers[i].element[0]))
continue;if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.ui.contains(this.containers[i].element[0],innermostContainer.element[0]))
continue;innermostContainer=this.containers[i];innermostIndex=i;}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
if(!innermostContainer)return;if(this.containers.length===1){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}else if(this.currentContainer!=this.containers[innermostIndex]){var dist=10000;var itemWithLeastDistance=null;var base=this.positionAbs[this.containers[innermostIndex].floating?'left':'top'];for(var j=this.items.length-1;j>=0;j--){if(!$.ui.contains(this.containers[innermostIndex].element[0],this.items[j].item[0]))continue;var cur=this.items[j][this.containers[innermostIndex].floating?'left':'top'];if(Math.abs(cur-base)<dist){dist=Math.abs(cur-base);itemWithLeastDistance=this.items[j];}}
if(!itemWithLeastDistance&&!this.options.dropOnEmpty)
return;this.currentContainer=this.containers[innermostIndex];itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}},_createHelper:function(event){var o=this.options;var helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper=='clone'?this.currentItem.clone():this.currentItem);if(!helper.parents('body').length)
$(o.appendTo!='parent'?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);if(helper[0]==this.currentItem[0])
this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(helper[0].style.width==''||o.forceHelperSize)helper.width(this.currentItem.width());if(helper[0].style.height==''||o.forceHelperSize)helper.height(this.currentItem.height());return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj=='string'){obj=obj.split(' ');}
if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
if('left'in obj){this.offset.click.left=obj.left+this.margins.left;}
if('right'in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
if('top'in obj){this.offset.click.top=obj.top+this.margins.top;}
if('bottom'in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition=='absolute'&&this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=='html'&&$.browser.msie))
po={top:0,left:0};return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var o=this.options;if(o.containment=='parent')o.containment=this.helper[0].parentNode;if(o.containment=='document'||o.containment=='window')this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,$(o.containment=='document'?document:window).width()-this.helperProportions.width-this.margins.left,($(o.containment=='document'?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!(/^(document|window|parent)$/).test(o.containment)){var ce=$(o.containment)[0];var co=$(o.containment).offset();var over=($(ce).css("overflow")!='hidden');this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];}},_convertPositionTo:function(d,pos){if(!pos)pos=this.position;var mod=d=="absolute"?1:-1;var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top
+this.offset.relative.top*mod
+this.offset.parent.top*mod
-($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left
+this.offset.relative.left*mod
+this.offset.parent.left*mod
-($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);if(this.cssPosition=='relative'&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset();}
var pageX=event.pageX;var pageY=event.pageY;if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0])pageX=this.containment[0]+this.offset.click.left;if(event.pageY-this.offset.click.top<this.containment[1])pageY=this.containment[1]+this.offset.click.top;if(event.pageX-this.offset.click.left>this.containment[2])pageX=this.containment[2]+this.offset.click.left;if(event.pageY-this.offset.click.top>this.containment[3])pageY=this.containment[3]+this.offset.click.top;}
if(o.grid){var top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?(!(top-this.offset.click.top<this.containment[1]||top-this.offset.click.top>this.containment[3])?top:(!(top-this.offset.click.top<this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;var left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?(!(left-this.offset.click.left<this.containment[0]||left-this.offset.click.left>this.containment[2])?left:(!(left-this.offset.click.left<this.containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}
return{top:(pageY
-this.offset.click.top
-this.offset.relative.top
-this.offset.parent.top
+($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX
-this.offset.click.left
-this.offset.relative.left
-this.offset.parent.left
+($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=='down'?i.item[0]:i.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var self=this,counter=this.counter;window.setTimeout(function(){if(counter==self.counter)self.refreshPositions(!hardRefresh);},0);},_clear:function(event,noPropagation){this.reverting=false;var delayedTriggers=[],self=this;if(!this._noFinalSort&&this.currentItem[0].parentNode)this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS){if(this._storedCSS[i]=='auto'||this._storedCSS[i]=='static')this._storedCSS[i]='';}
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");}else{this.currentItem.show();}
if(this.fromOutside&&!noPropagation)delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!noPropagation)delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});if(!$.ui.contains(this.element[0],this.currentItem[0])){if(!noPropagation)delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});for(var i=this.containers.length-1;i>=0;i--){if($.ui.contains(this.containers[i].element[0],this.currentItem[0])&&!noPropagation){delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}).call(this,this.containers[i]));delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}).call(this,this.containers[i]));}};};for(var i=this.containers.length-1;i>=0;i--){if(!noPropagation)delayedTriggers.push((function(c){return function(event){c._trigger("deactivate",event,this._uiHash(this));};}).call(this,this.containers[i]));if(this.containers[i].containerCache.over){delayedTriggers.push((function(c){return function(event){c._trigger("out",event,this._uiHash(this));};}).call(this,this.containers[i]));this.containers[i].containerCache.over=0;}}
if(this._storedCursor)$('body').css("cursor",this._storedCursor);if(this._storedOpacity)this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=='auto'?'':this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());for(var i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);};this._trigger("stop",event,this._uiHash());}
return false;}
if(!noPropagation)this._trigger("beforeStop",event,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0])this.helper.remove();this.helper=null;if(!noPropagation){for(var i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);};this._trigger("stop",event,this._uiHash());}
this.fromOutside=false;return true;},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel();}},_uiHash:function(inst){var self=inst||this;return{helper:self.helper,placeholder:self.placeholder||$([]),position:self.position,originalPosition:self.originalPosition,offset:self.positionAbs,item:self.currentItem,sender:inst?inst.element:null};}});$.extend($.ui.sortable,{version:"1.8.11"});})(jQuery);(function($,undefined){$.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase();}},_create:function(){var self=this,options=self.options;self.running=0;self.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");self.headers=self.element.find(options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(options.disabled){return;}
$(this).addClass("ui-state-hover");}).bind("mouseleave.accordion",function(){if(options.disabled){return;}
$(this).removeClass("ui-state-hover");}).bind("focus.accordion",function(){if(options.disabled){return;}
$(this).addClass("ui-state-focus");}).bind("blur.accordion",function(){if(options.disabled){return;}
$(this).removeClass("ui-state-focus");});self.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(options.navigation){var current=self.element.find("a").filter(options.navigationFilter).eq(0);if(current.length){var header=current.closest(".ui-accordion-header");if(header.length){self.active=header;}else{self.active=current.closest(".ui-accordion-content").prev();}}}
self.active=self._findActive(self.active||options.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");self.active.next().addClass("ui-accordion-content-active");self._createIcons();self.resize();self.element.attr("role","tablist");self.headers.attr("role","tab").bind("keydown.accordion",function(event){return self._keydown(event);}).next().attr("role","tabpanel");self.headers.not(self.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();if(!self.active.length){self.headers.eq(0).attr("tabIndex",0);}else{self.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0});}
if(!$.browser.safari){self.headers.find("a").attr("tabIndex",-1);}
if(options.event){self.headers.bind(options.event.split(" ").join(".accordion ")+".accordion",function(event){self._clickHandler.call(self,event,this);event.preventDefault();});}},_createIcons:function(){var options=this.options;if(options.icons){$("<span></span>").addClass("ui-icon "+options.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(options.icons.header).toggleClass(options.icons.headerSelected);this.element.addClass("ui-accordion-icons");}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons");},destroy:function(){var options=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var contents=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(options.autoHeight||options.fillHeight){contents.css("height","");}
return $.Widget.prototype.destroy.call(this);},_setOption:function(key,value){$.Widget.prototype._setOption.apply(this,arguments);if(key=="active"){this.activate(value);}
if(key=="icons"){this._destroyIcons();if(value){this._createIcons();}}
if(key=="disabled"){this.headers.add(this.headers.next())
[value?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled");}},_keydown:function(event){if(this.options.disabled||event.altKey||event.ctrlKey){return;}
var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=false;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._clickHandler({target:event.target},event.target);event.preventDefault();}
if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);toFocus.focus();return false;}
return true;},resize:function(){var options=this.options,maxHeight;if(options.fillSpace){if($.browser.msie){var defOverflow=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden");}
maxHeight=this.element.parent().height();if($.browser.msie){this.element.parent().css("overflow",defOverflow);}
this.headers.each(function(){maxHeight-=$(this).outerHeight(true);});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-
$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(options.autoHeight){maxHeight=0;this.headers.next().each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height());}).height(maxHeight);}
return this;},activate:function(index){this.options.active=index;var active=this._findActive(index)[0];this._clickHandler({target:active},active);return this;},_findActive:function(selector){return selector?typeof selector==="number"?this.headers.filter(":eq("+selector+")"):this.headers.not(this.headers.not(selector)):selector===false?$([]):this.headers.filter(":eq(0)");},_clickHandler:function(event,target){var options=this.options;if(options.disabled){return;}
if(!event.target){if(!options.collapsible){return;}
this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(options.icons.headerSelected).addClass(options.icons.header);this.active.next().addClass("ui-accordion-content-active");var toHide=this.active.next(),data={options:options,newHeader:$([]),oldHeader:options.active,newContent:$([]),oldContent:toHide},toShow=(this.active=$([]));this._toggle(toShow,toHide,data);return;}
var clicked=$(event.currentTarget||target),clickedIsActive=clicked[0]===this.active[0];options.active=options.collapsible&&clickedIsActive?false:this.headers.index(clicked);if(this.running||(!options.collapsible&&clickedIsActive)){return;}
var active=this.active,toShow=clicked.next(),toHide=this.active.next(),data={options:options,newHeader:clickedIsActive&&options.collapsible?$([]):clicked,oldHeader:this.active,newContent:clickedIsActive&&options.collapsible?$([]):toShow,oldContent:toHide},down=this.headers.index(this.active[0])>this.headers.index(clicked[0]);this.active=clickedIsActive?$([]):clicked;this._toggle(toShow,toHide,data,clickedIsActive,down);active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(options.icons.headerSelected).addClass(options.icons.header);if(!clickedIsActive){clicked.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(options.icons.header).addClass(options.icons.headerSelected);clicked.next().addClass("ui-accordion-content-active");}
return;},_toggle:function(toShow,toHide,data,clickedIsActive,down){var self=this,options=self.options;self.toShow=toShow;self.toHide=toHide;self.data=data;var complete=function(){if(!self){return;}
return self._completed.apply(self,arguments);};self._trigger("changestart",null,self.data);self.running=toHide.size()===0?toShow.size():toHide.size();if(options.animated){var animOptions={};if(options.collapsible&&clickedIsActive){animOptions={toShow:$([]),toHide:toHide,complete:complete,down:down,autoHeight:options.autoHeight||options.fillSpace};}else{animOptions={toShow:toShow,toHide:toHide,complete:complete,down:down,autoHeight:options.autoHeight||options.fillSpace};}
if(!options.proxied){options.proxied=options.animated;}
if(!options.proxiedDuration){options.proxiedDuration=options.duration;}
options.animated=$.isFunction(options.proxied)?options.proxied(animOptions):options.proxied;options.duration=$.isFunction(options.proxiedDuration)?options.proxiedDuration(animOptions):options.proxiedDuration;var animations=$.ui.accordion.animations,duration=options.duration,easing=options.animated;if(easing&&!animations[easing]&&!$.easing[easing]){easing="slide";}
if(!animations[easing]){animations[easing]=function(options){this.slide(options,{easing:easing,duration:duration||700});};}
animations[easing](animOptions);}else{if(options.collapsible&&clickedIsActive){toShow.toggle();}else{toHide.hide();toShow.show();}
complete(true);}
toHide.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();toShow.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus();},_completed:function(cancel){this.running=cancel?0:--this.running;if(this.running){return;}
if(this.options.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""});}
this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className;}
this._trigger("change",null,this.data);}});$.extend($.ui.accordion,{version:"1.8.11",animations:{slide:function(options,additions){options=$.extend({easing:"swing",duration:300},options,additions);if(!options.toHide.size()){options.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},options);return;}
if(!options.toShow.size()){options.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},options);return;}
var overflow=options.toShow.css("overflow"),percentDone=0,showProps={},hideProps={},fxAttrs=["height","paddingTop","paddingBottom"],originalWidth;var s=options.toShow;originalWidth=s[0].style.width;s.width(parseInt(s.parent().width(),10)
-parseInt(s.css("paddingLeft"),10)
-parseInt(s.css("paddingRight"),10)
-(parseInt(s.css("borderLeftWidth"),10)||0)
-(parseInt(s.css("borderRightWidth"),10)||0));$.each(fxAttrs,function(i,prop){hideProps[prop]="hide";var parts=(""+$.css(options.toShow[0],prop)).match(/^([\d+-.]+)(.*)$/);showProps[prop]={value:parts[1],unit:parts[2]||"px"};});options.toShow.css({height:0,overflow:"hidden"}).show();options.toHide.filter(":hidden").each(options.complete).end().filter(":visible").animate(hideProps,{step:function(now,settings){if(settings.prop=="height"){percentDone=(settings.end-settings.start===0)?0:(settings.now-settings.start)/(settings.end-settings.start);}
options.toShow[0].style[settings.prop]=(percentDone*showProps[settings.prop].value)
+showProps[settings.prop].unit;},duration:options.duration,easing:options.easing,complete:function(){if(!options.autoHeight){options.toShow.css("height","");}
options.toShow.css({width:originalWidth,overflow:overflow});options.complete();}});},bounceslide:function(options){this.slide(options,{easing:options.down?"easeOutBounce":"swing",duration:options.down?1000:200});}}});})(jQuery);(function($,undefined){var requestIndex=0;$.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var self=this,doc=this.element[0].ownerDocument,suppressKeyPress;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(event){if(self.options.disabled||self.element.attr("readonly")){return;}
suppressKeyPress=false;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:self._move("previousPage",event);break;case keyCode.PAGE_DOWN:self._move("nextPage",event);break;case keyCode.UP:self._move("previous",event);event.preventDefault();break;case keyCode.DOWN:self._move("next",event);event.preventDefault();break;case keyCode.ENTER:case keyCode.NUMPAD_ENTER:if(self.menu.active){suppressKeyPress=true;event.preventDefault();}
case keyCode.TAB:if(!self.menu.active){return;}
self.menu.select(event);break;case keyCode.ESCAPE:self.element.val(self.term);self.close(event);break;default:clearTimeout(self.searching);self.searching=setTimeout(function(){if(self.term!=self.element.val()){self.selectedItem=null;self.search(null,event);}},self.options.delay);break;}}).bind("keypress.autocomplete",function(event){if(suppressKeyPress){suppressKeyPress=false;event.preventDefault();}}).bind("focus.autocomplete",function(){if(self.options.disabled){return;}
self.selectedItem=null;self.previous=self.element.val();}).bind("blur.autocomplete",function(event){if(self.options.disabled){return;}
clearTimeout(self.searching);self.closing=setTimeout(function(){self.close(event);self._change(event);},150);});this._initSource();this.response=function(){return self._response.apply(self,arguments);};this.menu=$("<ul></ul>").addClass("ui-autocomplete").appendTo($(this.options.appendTo||"body",doc)[0]).mousedown(function(event){var menuElement=self.menu.element[0];if(!$(event.target).closest(".ui-menu-item").length){setTimeout(function(){$(document).one('mousedown',function(event){if(event.target!==self.element[0]&&event.target!==menuElement&&!$.ui.contains(menuElement,event.target)){self.close();}});},1);}
setTimeout(function(){clearTimeout(self.closing);},13);}).menu({focus:function(event,ui){var item=ui.item.data("item.autocomplete");if(false!==self._trigger("focus",event,{item:item})){if(/^key/.test(event.originalEvent.type)){self.element.val(item.value);}}},selected:function(event,ui){var item=ui.item.data("item.autocomplete"),previous=self.previous;if(self.element[0]!==doc.activeElement){self.element.focus();self.previous=previous;setTimeout(function(){self.previous=previous;self.selectedItem=item;},1);}
if(false!==self._trigger("select",event,{item:item})){self.element.val(item.value);}
self.term=self.element.val();self.close(event);self.selectedItem=item;},blur:function(event,ui){if(self.menu.element.is(":visible")&&(self.element.val()!==self.term)){self.element.val(self.term);}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if($.fn.bgiframe){this.menu.element.bgiframe();}},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();$.Widget.prototype.destroy.call(this);},_setOption:function(key,value){$.Widget.prototype._setOption.apply(this,arguments);if(key==="source"){this._initSource();}
if(key==="appendTo"){this.menu.element.appendTo($(value||"body",this.element[0].ownerDocument)[0])}
if(key==="disabled"&&value&&this.xhr){this.xhr.abort();}},_initSource:function(){var self=this,array,url;if($.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term));};}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(self.xhr){self.xhr.abort();}
self.xhr=$.ajax({url:url,data:request,dataType:"json",autocompleteRequest:++requestIndex,success:function(data,status){if(this.autocompleteRequest===requestIndex){response(data);}},error:function(){if(this.autocompleteRequest===requestIndex){response([]);}}});};}else{this.source=this.options.source;}},search:function(value,event){value=value!=null?value:this.element.val();this.term=this.element.val();if(value.length<this.options.minLength){return this.close(event);}
clearTimeout(this.closing);if(this._trigger("search",event)===false){return;}
return this._search(value);},_search:function(value){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:value},this.response);},_response:function(content){if(!this.options.disabled&&content&&content.length){content=this._normalize(content);this._suggest(content);this._trigger("open");}else{this.close();}
this.pending--;if(!this.pending){this.element.removeClass("ui-autocomplete-loading");}},close:function(event){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",event);}},_change:function(event){if(this.previous!==this.element.val()){this._trigger("change",event,{item:this.selectedItem});}},_normalize:function(items){if(items.length&&items[0].label&&items[0].value){return items;}
return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item};}
return $.extend({label:item.label||item.value,value:item.value||item.label},item);});},_suggest:function(items){var ul=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(ul,items);this.menu.deactivate();this.menu.refresh();ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new $.Event("mouseover"));}},_resizeMenu:function(){var ul=this.menu.element;ul.outerWidth(Math.max(ul.width("").outerWidth(),this.element.outerWidth()));},_renderMenu:function(ul,items){var self=this;$.each(items,function(index,item){self._renderItem(ul,item);});},_renderItem:function(ul,item){return $("<li></li>").data("item.autocomplete",item).append($("<a></a>").text(item.label)).appendTo(ul);},_move:function(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return;}
if(this.menu.first()&&/^previous/.test(direction)||this.menu.last()&&/^next/.test(direction)){this.element.val(this.term);this.menu.deactivate();return;}
this.menu[direction](event);},widget:function(){return this.menu.element;}});$.extend($.ui.autocomplete,{escapeRegex:function(value){return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");},filter:function(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value);});}});}(jQuery));(function($){$.widget("ui.menu",{_create:function(){var self=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(event){if(!$(event.target).closest(".ui-menu-item a").length){return;}
event.preventDefault();self.select(event);});this.refresh();},refresh:function(){var self=this;var items=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");items.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(event){self.activate(event,$(this).parent());}).mouseleave(function(){self.deactivate();});},activate:function(event,item){this.deactivate();if(this.hasScroll()){var offset=item.offset().top-this.element.offset().top,scroll=this.element.attr("scrollTop"),elementHeight=this.element.height();if(offset<0){this.element.attr("scrollTop",scroll+offset);}else if(offset>=elementHeight){this.element.attr("scrollTop",scroll+offset-elementHeight+item.height());}}
this.active=item.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",event,{item:item});},deactivate:function(){if(!this.active){return;}
this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null;},next:function(event){this.move("next",".ui-menu-item:first",event);},previous:function(event){this.move("prev",".ui-menu-item:last",event);},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length;},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length;},move:function(direction,edge,event){if(!this.active){this.activate(event,this.element.children(edge));return;}
var next=this.active[direction+"All"](".ui-menu-item").eq(0);if(next.length){this.activate(event,next);}else{this.activate(event,this.element.children(edge));}},nextPage:function(event){if(this.hasScroll()){if(!this.active||this.last()){this.activate(event,this.element.children(".ui-menu-item:first"));return;}
var base=this.active.offset().top,height=this.element.height(),result=this.element.children(".ui-menu-item").filter(function(){var close=$(this).offset().top-base-height+$(this).height();return close<10&&close>-10;});if(!result.length){result=this.element.children(".ui-menu-item:last");}
this.activate(event,result);}else{this.activate(event,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"));}},previousPage:function(event){if(this.hasScroll()){if(!this.active||this.first()){this.activate(event,this.element.children(".ui-menu-item:last"));return;}
var base=this.active.offset().top,height=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var close=$(this).offset().top-base+height-$(this).height();return close<10&&close>-10;});if(!result.length){result=this.element.children(".ui-menu-item:first");}
this.activate(event,result);}else{this.activate(event,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"));}},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight");},select:function(event){this._trigger("selected",event,{item:this.active});}});}(jQuery));(function($,undefined){var lastActive,baseClasses="ui-button ui-widget ui-state-default ui-corner-all",stateClasses="ui-state-hover ui-state-active ",typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",formResetHandler=function(event){$(":ui-button",event.target.form).each(function(){var inst=$(this).data("button");setTimeout(function(){inst.refresh();},1);});},radioGroup=function(radio){var name=radio.name,form=radio.form,radios=$([]);if(name){if(form){radios=$(form).find("[name='"+name+"']");}else{radios=$("[name='"+name+"']",radio.ownerDocument).filter(function(){return!this.form;});}}
return radios;};$.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",formResetHandler);if(typeof this.options.disabled!=="boolean"){this.options.disabled=this.element.attr("disabled");}
this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var self=this,options=this.options,toggleButton=this.type==="checkbox"||this.type==="radio",hoverClass="ui-state-hover"+(!toggleButton?" ui-state-active":""),focusClass="ui-state-focus";if(options.label===null){options.label=this.buttonElement.html();}
if(this.element.is(":disabled")){options.disabled=true;}
this.buttonElement.addClass(baseClasses).attr("role","button").bind("mouseenter.button",function(){if(options.disabled){return;}
$(this).addClass("ui-state-hover");if(this===lastActive){$(this).addClass("ui-state-active");}}).bind("mouseleave.button",function(){if(options.disabled){return;}
$(this).removeClass(hoverClass);}).bind("focus.button",function(){$(this).addClass(focusClass);}).bind("blur.button",function(){$(this).removeClass(focusClass);});if(toggleButton){this.element.bind("change.button",function(){self.refresh();});}
if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(options.disabled){return false;}
$(this).toggleClass("ui-state-active");self.buttonElement.attr("aria-pressed",self.element[0].checked);});}else if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(options.disabled){return false;}
$(this).addClass("ui-state-active");self.buttonElement.attr("aria-pressed",true);var radio=self.element[0];radioGroup(radio).not(radio).map(function(){return $(this).button("widget")[0];}).removeClass("ui-state-active").attr("aria-pressed",false);});}else{this.buttonElement.bind("mousedown.button",function(){if(options.disabled){return false;}
$(this).addClass("ui-state-active");lastActive=this;$(document).one("mouseup",function(){lastActive=null;});}).bind("mouseup.button",function(){if(options.disabled){return false;}
$(this).removeClass("ui-state-active");}).bind("keydown.button",function(event){if(options.disabled){return false;}
if(event.keyCode==$.ui.keyCode.SPACE||event.keyCode==$.ui.keyCode.ENTER){$(this).addClass("ui-state-active");}}).bind("keyup.button",function(){$(this).removeClass("ui-state-active");});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(event){if(event.keyCode===$.ui.keyCode.SPACE){$(this).click();}});}}
this._setOption("disabled",options.disabled);},_determineButtonType:function(){if(this.element.is(":checkbox")){this.type="checkbox";}else{if(this.element.is(":radio")){this.type="radio";}else{if(this.element.is("input")){this.type="input";}else{this.type="button";}}}
if(this.type==="checkbox"||this.type==="radio"){var ancestor=this.element.parents().filter(":last"),labelSelector="label[for="+this.element.attr("id")+"]";this.buttonElement=ancestor.find(labelSelector);if(!this.buttonElement.length){ancestor=ancestor.length?ancestor.siblings():this.element.siblings();this.buttonElement=ancestor.filter(labelSelector);if(!this.buttonElement.length){this.buttonElement=ancestor.find(labelSelector);}}
this.element.addClass("ui-helper-hidden-accessible");var checked=this.element.is(":checked");if(checked){this.buttonElement.addClass("ui-state-active");}
this.buttonElement.attr("aria-pressed",checked);}else{this.buttonElement=this.element;}},widget:function(){return this.buttonElement;},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(baseClasses+" "+stateClasses+" "+typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title");}
$.Widget.prototype.destroy.call(this);},_setOption:function(key,value){$.Widget.prototype._setOption.apply(this,arguments);if(key==="disabled"){if(value){this.element.attr("disabled",true);}else{this.element.removeAttr("disabled");}}
this._resetButton();},refresh:function(){var isDisabled=this.element.is(":disabled");if(isDisabled!==this.options.disabled){this._setOption("disabled",isDisabled);}
if(this.type==="radio"){radioGroup(this.element[0]).each(function(){if($(this).is(":checked")){$(this).button("widget").addClass("ui-state-active").attr("aria-pressed",true);}else{$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false);}});}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true);}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false);}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label);}
return;}
var buttonElement=this.buttonElement.removeClass(typeClasses),buttonText=$("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),icons=this.options.icons,multipleIcons=icons.primary&&icons.secondary,buttonClasses=[];if(icons.primary||icons.secondary){if(this.options.text){buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":(icons.primary?"-primary":"-secondary")));}
if(icons.primary){buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>");}
if(icons.secondary){buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>");}
if(!this.options.text){buttonClasses.push(multipleIcons?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){buttonElement.attr("title",buttonText);}}}else{buttonClasses.push("ui-button-text-only");}
buttonElement.addClass(buttonClasses.join(" "));}});$.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset");},_init:function(){this.refresh();},_setOption:function(key,value){if(key==="disabled"){this.buttons.button("option",key,value);}
$.Widget.prototype._setOption.apply(this,arguments);},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end();},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return $(this).button("widget")[0];}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");$.Widget.prototype.destroy.call(this);}});}(jQuery));(function($,undefined){var uiDialogClasses='ui-dialog '+'ui-widget '+'ui-widget-content '+'ui-corner-all ',sizeRelatedOptions={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};$.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:'close',dialogClass:'',draggable:true,hide:null,height:'auto',maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:'center',at:'center',collision:'fit',using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css('top',pos.top-topOffset);}}},resizable:true,show:null,stack:true,title:'',width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr('title');if(typeof this.originalTitle!=="string"){this.originalTitle="";}
this.options.title=this.options.title||this.originalTitle;var self=this,options=self.options,title=options.title||'&#160;',titleId=$.ui.dialog.getTitleId(self.element),uiDialog=(self.uiDialog=$('<div></div>')).appendTo(document.body).hide().addClass(uiDialogClasses+options.dialogClass).css({zIndex:options.zIndex}).attr('tabIndex',-1).css('outline',0).keydown(function(event){if(options.closeOnEscape&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){self.close(event);event.preventDefault();}}).attr({role:'dialog','aria-labelledby':titleId}).mousedown(function(event){self.moveToTop(false,event);}),uiDialogContent=self.element.show().removeAttr('title').addClass('ui-dialog-content '+'ui-widget-content').appendTo(uiDialog),uiDialogTitlebar=(self.uiDialogTitlebar=$('<div></div>')).addClass('ui-dialog-titlebar '+'ui-widget-header '+'ui-corner-all '+'ui-helper-clearfix').prependTo(uiDialog),uiDialogTitlebarClose=$('<a href="#"></a>').addClass('ui-dialog-titlebar-close '+'ui-corner-all').attr('role','button').hover(function(){uiDialogTitlebarClose.addClass('ui-state-hover');},function(){uiDialogTitlebarClose.removeClass('ui-state-hover');}).focus(function(){uiDialogTitlebarClose.addClass('ui-state-focus');}).blur(function(){uiDialogTitlebarClose.removeClass('ui-state-focus');}).click(function(event){self.close(event);return false;}).appendTo(uiDialogTitlebar),uiDialogTitlebarCloseText=(self.uiDialogTitlebarCloseText=$('<span></span>')).addClass('ui-icon '+'ui-icon-closethick').text(options.closeText).appendTo(uiDialogTitlebarClose),uiDialogTitle=$('<span></span>').addClass('ui-dialog-title').attr('id',titleId).html(title).prependTo(uiDialogTitlebar);if($.isFunction(options.beforeclose)&&!$.isFunction(options.beforeClose)){options.beforeClose=options.beforeclose;}
uiDialogTitlebar.find("*").add(uiDialogTitlebar).disableSelection();if(options.draggable&&$.fn.draggable){self._makeDraggable();}
if(options.resizable&&$.fn.resizable){self._makeResizable();}
self._createButtons(options.buttons);self._isOpen=false;if($.fn.bgiframe){uiDialog.bgiframe();}},_init:function(){if(this.options.autoOpen){this.open();}},destroy:function(){var self=this;if(self.overlay){self.overlay.destroy();}
self.uiDialog.hide();self.element.unbind('.dialog').removeData('dialog').removeClass('ui-dialog-content ui-widget-content').hide().appendTo('body');self.uiDialog.remove();if(self.originalTitle){self.element.attr('title',self.originalTitle);}
return self;},widget:function(){return this.uiDialog;},close:function(event){var self=this,maxZ,thisZ;if(false===self._trigger('beforeClose',event)){return;}
if(self.overlay){self.overlay.destroy();}
self.uiDialog.unbind('keypress.ui-dialog');self._isOpen=false;if(self.options.hide){self.uiDialog.hide(self.options.hide,function(){self._trigger('close',event);});}else{self.uiDialog.hide();self._trigger('close',event);}
$.ui.dialog.overlay.resize();if(self.options.modal){maxZ=0;$('.ui-dialog').each(function(){if(this!==self.uiDialog[0]){thisZ=$(this).css('z-index');if(!isNaN(thisZ)){maxZ=Math.max(maxZ,thisZ);}}});$.ui.dialog.maxZ=maxZ;}
return self;},isOpen:function(){return this._isOpen;},moveToTop:function(force,event){var self=this,options=self.options,saveScroll;if((options.modal&&!force)||(!options.stack&&!options.modal)){return self._trigger('focus',event);}
if(options.zIndex>$.ui.dialog.maxZ){$.ui.dialog.maxZ=options.zIndex;}
if(self.overlay){$.ui.dialog.maxZ+=1;self.overlay.$el.css('z-index',$.ui.dialog.overlay.maxZ=$.ui.dialog.maxZ);}
saveScroll={scrollTop:self.element.attr('scrollTop'),scrollLeft:self.element.attr('scrollLeft')};$.ui.dialog.maxZ+=1;self.uiDialog.css('z-index',$.ui.dialog.maxZ);self.element.attr(saveScroll);self._trigger('focus',event);return self;},open:function(){if(this._isOpen){return;}
var self=this,options=self.options,uiDialog=self.uiDialog;self.overlay=options.modal?new $.ui.dialog.overlay(self):null;self._size();self._position(options.position);uiDialog.show(options.show);self.moveToTop(true);if(options.modal){uiDialog.bind('keypress.ui-dialog',function(event){if(event.keyCode!==$.ui.keyCode.TAB){return;}
var tabbables=$(':tabbable',this),first=tabbables.filter(':first'),last=tabbables.filter(':last');if(event.target===last[0]&&!event.shiftKey){first.focus(1);return false;}else if(event.target===first[0]&&event.shiftKey){last.focus(1);return false;}});}
$(self.element.find(':tabbable').get().concat(uiDialog.find('.ui-dialog-buttonpane :tabbable').get().concat(uiDialog.get()))).eq(0).focus();self._isOpen=true;self._trigger('open');return self;},_createButtons:function(buttons){var self=this,hasButtons=false,uiDialogButtonPane=$('<div></div>').addClass('ui-dialog-buttonpane '+'ui-widget-content '+'ui-helper-clearfix'),uiButtonSet=$("<div></div>").addClass("ui-dialog-buttonset").appendTo(uiDialogButtonPane);self.uiDialog.find('.ui-dialog-buttonpane').remove();if(typeof buttons==='object'&&buttons!==null){$.each(buttons,function(){return!(hasButtons=true);});}
if(hasButtons){$.each(buttons,function(name,props){props=$.isFunction(props)?{click:props,text:name}:props;var button=$('<button type="button"></button>').attr(props,true).unbind('click').click(function(){props.click.apply(self.element[0],arguments);}).appendTo(uiButtonSet);if($.fn.button){button.button();}});uiDialogButtonPane.appendTo(self.uiDialog);}},_makeDraggable:function(){var self=this,options=self.options,doc=$(document),heightBeforeDrag;function filteredUi(ui){return{position:ui.position,offset:ui.offset};}
self.uiDialog.draggable({cancel:'.ui-dialog-content, .ui-dialog-titlebar-close',handle:'.ui-dialog-titlebar',containment:'document',start:function(event,ui){heightBeforeDrag=options.height==="auto"?"auto":$(this).height();$(this).height($(this).height()).addClass("ui-dialog-dragging");self._trigger('dragStart',event,filteredUi(ui));},drag:function(event,ui){self._trigger('drag',event,filteredUi(ui));},stop:function(event,ui){options.position=[ui.position.left-doc.scrollLeft(),ui.position.top-doc.scrollTop()];$(this).removeClass("ui-dialog-dragging").height(heightBeforeDrag);self._trigger('dragStop',event,filteredUi(ui));$.ui.dialog.overlay.resize();}});},_makeResizable:function(handles){handles=(handles===undefined?this.options.resizable:handles);var self=this,options=self.options,position=self.uiDialog.css('position'),resizeHandles=(typeof handles==='string'?handles:'n,e,s,w,se,sw,ne,nw');function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size};}
self.uiDialog.resizable({cancel:'.ui-dialog-content',containment:'document',alsoResize:self.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:self._minHeight(),handles:resizeHandles,start:function(event,ui){$(this).addClass("ui-dialog-resizing");self._trigger('resizeStart',event,filteredUi(ui));},resize:function(event,ui){self._trigger('resize',event,filteredUi(ui));},stop:function(event,ui){$(this).removeClass("ui-dialog-resizing");options.height=$(this).height();options.width=$(this).width();self._trigger('resizeStop',event,filteredUi(ui));$.ui.dialog.overlay.resize();}}).css('position',position).find('.ui-resizable-se').addClass('ui-icon ui-icon-grip-diagonal-se');},_minHeight:function(){var options=this.options;if(options.height==='auto'){return options.minHeight;}else{return Math.min(options.minHeight,options.height);}},_position:function(position){var myAt=[],offset=[0,0],isVisible;if(position){if(typeof position==='string'||(typeof position==='object'&&'0'in position)){myAt=position.split?position.split(' '):[position[0],position[1]];if(myAt.length===1){myAt[1]=myAt[0];}
$.each(['left','top'],function(i,offsetPosition){if(+myAt[i]===myAt[i]){offset[i]=myAt[i];myAt[i]=offsetPosition;}});position={my:myAt.join(" "),at:myAt.join(" "),offset:offset.join(" ")};}
position=$.extend({},$.ui.dialog.prototype.options.position,position);}else{position=$.ui.dialog.prototype.options.position;}
isVisible=this.uiDialog.is(':visible');if(!isVisible){this.uiDialog.show();}
this.uiDialog.css({top:0,left:0}).position($.extend({of:window},position));if(!isVisible){this.uiDialog.hide();}},_setOptions:function(options){var self=this,resizableOptions={},resize=false;$.each(options,function(key,value){self._setOption(key,value);if(key in sizeRelatedOptions){resize=true;}
if(key in resizableRelatedOptions){resizableOptions[key]=value;}});if(resize){this._size();}
if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",resizableOptions);}},_setOption:function(key,value){var self=this,uiDialog=self.uiDialog;switch(key){case"beforeclose":key="beforeClose";break;case"buttons":self._createButtons(value);break;case"closeText":self.uiDialogTitlebarCloseText.text(""+value);break;case"dialogClass":uiDialog.removeClass(self.options.dialogClass).addClass(uiDialogClasses+value);break;case"disabled":if(value){uiDialog.addClass('ui-dialog-disabled');}else{uiDialog.removeClass('ui-dialog-disabled');}
break;case"draggable":var isDraggable=uiDialog.is(":data(draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy");}
if(!isDraggable&&value){self._makeDraggable();}
break;case"position":self._position(value);break;case"resizable":var isResizable=uiDialog.is(":data(resizable)");if(isResizable&&!value){uiDialog.resizable('destroy');}
if(isResizable&&typeof value==='string'){uiDialog.resizable('option','handles',value);}
if(!isResizable&&value!==false){self._makeResizable(value);}
break;case"title":$(".ui-dialog-title",self.uiDialogTitlebar).html(""+(value||'&#160;'));break;}
$.Widget.prototype._setOption.apply(self,arguments);},_size:function(){var options=this.options,nonContentHeight,minContentHeight,isVisible=this.uiDialog.is(":visible");this.element.show().css({width:'auto',minHeight:0,height:0});if(options.minWidth>options.width){options.width=options.minWidth;}
nonContentHeight=this.uiDialog.css({height:'auto',width:options.width}).height();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);if(options.height==="auto"){if($.support.minHeight){this.element.css({minHeight:minContentHeight,height:"auto"});}else{this.uiDialog.show();var autoHeight=this.element.css("height","auto").height();if(!isVisible){this.uiDialog.hide();}
this.element.height(Math.max(autoHeight,minContentHeight));}}else{this.element.height(Math.max(options.height-nonContentHeight,0));}
if(this.uiDialog.is(':data(resizable)')){this.uiDialog.resizable('option','minHeight',this._minHeight());}}});$.extend($.ui.dialog,{version:"1.8.11",uuid:0,maxZ:0,getTitleId:function($el){var id=$el.attr('id');if(!id){this.uuid+=1;id=this.uuid;}
return'ui-dialog-title-'+id;},overlay:function(dialog){this.$el=$.ui.dialog.overlay.create(dialog);}});$.extend($.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:$.map('focus,mousedown,mouseup,keydown,keypress,click'.split(','),function(event){return event+'.dialog-overlay';}).join(' '),create:function(dialog){if(this.instances.length===0){setTimeout(function(){if($.ui.dialog.overlay.instances.length){$(document).bind($.ui.dialog.overlay.events,function(event){if($(event.target).zIndex()<$.ui.dialog.overlay.maxZ){return false;}});}},1);$(document).bind('keydown.dialog-overlay',function(event){if(dialog.options.closeOnEscape&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){dialog.close(event);event.preventDefault();}});$(window).bind('resize.dialog-overlay',$.ui.dialog.overlay.resize);}
var $el=(this.oldInstances.pop()||$('<div></div>').addClass('ui-widget-overlay')).appendTo(document.body).css({width:this.width(),height:this.height()});if($.fn.bgiframe){$el.bgiframe();}
this.instances.push($el);return $el;},destroy:function($el){var indexOf=$.inArray($el,this.instances);if(indexOf!=-1){this.oldInstances.push(this.instances.splice(indexOf,1)[0]);}
if(this.instances.length===0){$([document,window]).unbind('.dialog-overlay');}
$el.remove();var maxZ=0;$.each(this.instances,function(){maxZ=Math.max(maxZ,this.css('z-index'));});this.maxZ=maxZ;},height:function(){var scrollHeight,offsetHeight;if($.browser.msie&&$.browser.version<7){scrollHeight=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);offsetHeight=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(scrollHeight<offsetHeight){return $(window).height()+'px';}else{return scrollHeight+'px';}}else{return $(document).height()+'px';}},width:function(){var scrollWidth,offsetWidth;if($.browser.msie&&$.browser.version<7){scrollWidth=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(scrollWidth<offsetWidth){return $(window).width()+'px';}else{return scrollWidth+'px';}}else{return $(document).width()+'px';}},resize:function(){var $overlays=$([]);$.each($.ui.dialog.overlay.instances,function(){$overlays=$overlays.add(this);});$overlays.css({width:0,height:0}).css({width:$.ui.dialog.overlay.width(),height:$.ui.dialog.overlay.height()});}});$.extend($.ui.dialog.overlay.prototype,{destroy:function(){$.ui.dialog.overlay.destroy(this.$el);}});}(jQuery));(function($,undefined){var numPages=5;$.widget("ui.slider",$.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var self=this,o=this.options;this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all");if(o.disabled){this.element.addClass("ui-slider-disabled ui-disabled");}
this.range=$([]);if(o.range){if(o.range===true){this.range=$("<div></div>");if(!o.values){o.values=[this._valueMin(),this._valueMin()];}
if(o.values.length&&o.values.length!==2){o.values=[o.values[0],o.values[0]];}}else{this.range=$("<div></div>");}
this.range.appendTo(this.element).addClass("ui-slider-range");if(o.range==="min"||o.range==="max"){this.range.addClass("ui-slider-range-"+o.range);}
this.range.addClass("ui-widget-header");}
if($(".ui-slider-handle",this.element).length===0){$("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");}
if(o.values&&o.values.length){while($(".ui-slider-handle",this.element).length<o.values.length){$("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");}}
this.handles=$(".ui-slider-handle",this.element).addClass("ui-state-default"+" ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(event){event.preventDefault();}).hover(function(){if(!o.disabled){$(this).addClass("ui-state-hover");}},function(){$(this).removeClass("ui-state-hover");}).focus(function(){if(!o.disabled){$(".ui-slider .ui-state-focus").removeClass("ui-state-focus");$(this).addClass("ui-state-focus");}else{$(this).blur();}}).blur(function(){$(this).removeClass("ui-state-focus");});this.handles.each(function(i){$(this).data("index.ui-slider-handle",i);});this.handles.keydown(function(event){var ret=true,index=$(this).data("index.ui-slider-handle"),allowed,curVal,newVal,step;if(self.options.disabled){return;}
switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:ret=false;if(!self._keySliding){self._keySliding=true;$(this).addClass("ui-state-active");allowed=self._start(event,index);if(allowed===false){return;}}
break;}
step=self.options.step;if(self.options.values&&self.options.values.length){curVal=newVal=self.values(index);}else{curVal=newVal=self.value();}
switch(event.keyCode){case $.ui.keyCode.HOME:newVal=self._valueMin();break;case $.ui.keyCode.END:newVal=self._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=self._trimAlignValue(curVal+((self._valueMax()-self._valueMin())/numPages));break;case $.ui.keyCode.PAGE_DOWN:newVal=self._trimAlignValue(curVal-((self._valueMax()-self._valueMin())/numPages));break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===self._valueMax()){return;}
newVal=self._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===self._valueMin()){return;}
newVal=self._trimAlignValue(curVal-step);break;}
self._slide(event,index,newVal);return ret;}).keyup(function(event){var index=$(this).data("index.ui-slider-handle");if(self._keySliding){self._keySliding=false;self._stop(event,index);self._change(event,index);$(this).removeClass("ui-state-active");}});this._refreshValue();this._animateOff=false;},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-slider-disabled"+" ui-widget"+" ui-widget-content"+" ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this;},_mouseCapture:function(event){var o=this.options,position,normValue,distance,closestHandle,self,index,allowed,offset,mouseOverHandle;if(o.disabled){return false;}
this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;self=this;this.handles.each(function(i){var thisDistance=Math.abs(normValue-self.values(i));if(distance>thisDistance){distance=thisDistance;closestHandle=$(this);index=i;}});if(o.range===true&&this.values(1)===o.min){index+=1;closestHandle=$(this.handles[index]);}
allowed=this._start(event,index);if(allowed===false){return false;}
this._mouseSliding=true;self._handleIndex=index;closestHandle.addClass("ui-state-active").focus();offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-(closestHandle.width()/2),top:event.pageY-offset.top-
(closestHandle.height()/2)-
(parseInt(closestHandle.css("borderTopWidth"),10)||0)-
(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+
(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue);}
this._animateOff=true;return true;},_mouseStart:function(event){return true;},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false;},_mouseStop:function(event){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false;},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal";},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);}
percentMouse=(pixelMouse/pixelTotal);if(percentMouse>1){percentMouse=1;}
if(percentMouse<0){percentMouse=0;}
if(this.orientation==="vertical"){percentMouse=1-percentMouse;}
valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse);},_start:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}
return this._trigger("start",event,uiHash);},_slide:function(event,index,newVal){var otherVal,newValues,allowed;if(this.options.values&&this.options.values.length){otherVal=this.values(index?0:1);if((this.options.values.length===2&&this.options.range===true)&&((index===0&&newVal>otherVal)||(index===1&&newVal<otherVal))){newVal=otherVal;}
if(newVal!==this.values(index)){newValues=this.values();newValues[index]=newVal;allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal,values:newValues});otherVal=this.values(index?0:1);if(allowed!==false){this.values(index,newVal,true);}}}else{if(newVal!==this.value()){allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal});if(allowed!==false){this.value(newVal);}}}},_stop:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}
this._trigger("stop",event,uiHash);},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}
this._trigger("change",event,uiHash);}},value:function(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);}
return this._value();},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);}
if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i);}
this._refreshValue();}else{if(this.options.values&&this.options.values.length){return this._values(index);}else{return this.value();}}}else{return this._values();}},_setOption:function(key,value){var i,valsLength=0;if($.isArray(this.options.values)){valsLength=this.options.values.length;}
$.Widget.prototype._setOption.apply(this,arguments);switch(key){case"disabled":if(value){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled");}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled");}
break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=0;i<valsLength;i+=1){this._change(null,i);}
this._animateOff=false;break;}},_value:function(){var val=this.options.value;val=this._trimAlignValue(val);return val;},_values:function(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val;}else{vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i]);}
return vals;}},_trimAlignValue:function(val){if(val<=this._valueMin()){return this._valueMin();}
if(val>=this._valueMax()){return this._valueMax();}
var step=(this.options.step>0)?this.options.step:1,valModStep=(val-this._valueMin())%step;alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=(valModStep>0)?step:(-step);}
return parseFloat(alignValue.toFixed(5));},_valueMin:function(){return this.options.min;},_valueMax:function(){return this.options.max;},_refreshValue:function(){var oRange=this.options.range,o=this.options,self=this,animate=(!this._animateOff)?o.animate:false,valPercent,_set={},lastValPercent,value,valueMin,valueMax;if(this.options.values&&this.options.values.length){this.handles.each(function(i,j){valPercent=(self.values(i)-self._valueMin())/(self._valueMax()-self._valueMin())*100;_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(self.options.range===true){if(self.orientation==="horizontal"){if(i===0){self.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate);}
if(i===1){self.range[animate?"animate":"css"]({width:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}else{if(i===0){self.range.stop(1,1)[animate?"animate":"css"]({bottom:(valPercent)+"%"},o.animate);}
if(i===1){self.range[animate?"animate":"css"]({height:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}}
lastValPercent=valPercent;});}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=(valueMax!==valueMin)?(value-valueMin)/(valueMax-valueMin)*100:0;_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate);}
if(oRange==="max"&&this.orientation==="horizontal"){this.range[animate?"animate":"css"]({width:(100-valPercent)+"%"},{queue:false,duration:o.animate});}
if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate);}
if(oRange==="max"&&this.orientation==="vertical"){this.range[animate?"animate":"css"]({height:(100-valPercent)+"%"},{queue:false,duration:o.animate});}}}});$.extend($.ui.slider,{version:"1.8.11"});}(jQuery));(function($,undefined){var tabId=0,listId=0;function getNextTabId(){return++tabId;}
function getNextListId(){return++listId;}
$.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true);},_setOption:function(key,value){if(key=="selected"){if(this.options.collapsible&&value==this.options.selected){return;}
this.select(value);}else{this.options[key]=value;this._tabify();}},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+getNextTabId();},_sanitizeSelector:function(hash){return hash.replace(/:/g,"\\:");},_cookie:function(){var cookie=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+getNextListId());return $.cookie.apply(null,[cookie].concat($.makeArray(arguments)));},_ui:function(tab,panel){return{tab:tab,panel:panel,index:this.anchors.index(tab)};},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var el=$(this);el.html(el.data("label.tabs")).removeData("label.tabs");});},_tabify:function(init){var self=this,o=this.options,fragmentId=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=$(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return $("a",this)[0];});this.panels=$([]);this.anchors.each(function(i,a){var href=$(a).attr("href");var hrefBase=href.split("#")[0],baseEl;if(hrefBase&&(hrefBase===location.toString().split("#")[0]||(baseEl=$("base")[0])&&hrefBase===baseEl.href)){href=a.hash;a.href=href;}
if(fragmentId.test(href)){self.panels=self.panels.add(self.element.find(self._sanitizeSelector(href)));}else if(href&&href!=="#"){$.data(a,"href.tabs",href);$.data(a,"load.tabs",href.replace(/#.*$/,""));var id=self._tabId(a);a.href="#"+id;var $panel=self.element.find("#"+id);if(!$panel.length){$panel=$(o.panelTemplate).attr("id",id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(self.panels[i-1]||self.list);$panel.data("destroy.tabs",true);}
self.panels=self.panels.add($panel);}else{o.disabled.push(i);}});if(init){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(o.selected===undefined){if(location.hash){this.anchors.each(function(i,a){if(a.hash==location.hash){o.selected=i;return false;}});}
if(typeof o.selected!=="number"&&o.cookie){o.selected=parseInt(self._cookie(),10);}
if(typeof o.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){o.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));}
o.selected=o.selected||(this.lis.length?0:-1);}else if(o.selected===null){o.selected=-1;}
o.selected=((o.selected>=0&&this.anchors[o.selected])||o.selected<0)?o.selected:0;o.disabled=$.unique(o.disabled.concat($.map(this.lis.filter(".ui-state-disabled"),function(n,i){return self.lis.index(n);}))).sort();if($.inArray(o.selected,o.disabled)!=-1){o.disabled.splice($.inArray(o.selected,o.disabled),1);}
this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(o.selected>=0&&this.anchors.length){self.element.find(self._sanitizeSelector(self.anchors[o.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(o.selected).addClass("ui-tabs-selected ui-state-active");self.element.queue("tabs",function(){self._trigger("show",null,self._ui(self.anchors[o.selected],self.element.find(self._sanitizeSelector(self.anchors[o.selected].hash))[0]));});this.load(o.selected);}
$(window).bind("unload",function(){self.lis.add(self.anchors).unbind(".tabs");self.lis=self.anchors=self.panels=null;});}else{o.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));}
this.element[o.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(o.cookie){this._cookie(o.selected,o.cookie);}
for(var i=0,li;(li=this.lis[i]);i++){$(li)[$.inArray(i,o.disabled)!=-1&&!$(li).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");}
if(o.cache===false){this.anchors.removeData("cache.tabs");}
this.lis.add(this.anchors).unbind(".tabs");if(o.event!=="mouseover"){var addState=function(state,el){if(el.is(":not(.ui-state-disabled)")){el.addClass("ui-state-"+state);}};var removeState=function(state,el){el.removeClass("ui-state-"+state);};this.lis.bind("mouseover.tabs",function(){addState("hover",$(this));});this.lis.bind("mouseout.tabs",function(){removeState("hover",$(this));});this.anchors.bind("focus.tabs",function(){addState("focus",$(this).closest("li"));});this.anchors.bind("blur.tabs",function(){removeState("focus",$(this).closest("li"));});}
var hideFx,showFx;if(o.fx){if($.isArray(o.fx)){hideFx=o.fx[0];showFx=o.fx[1];}else{hideFx=showFx=o.fx;}}
function resetStyle($el,fx){$el.css("display","");if(!$.support.opacity&&fx.opacity){$el[0].style.removeAttribute("filter");}}
var showTab=showFx?function(clicked,$show){$(clicked).closest("li").addClass("ui-tabs-selected ui-state-active");$show.hide().removeClass("ui-tabs-hide").animate(showFx,showFx.duration||"normal",function(){resetStyle($show,showFx);self._trigger("show",null,self._ui(clicked,$show[0]));});}:function(clicked,$show){$(clicked).closest("li").addClass("ui-tabs-selected ui-state-active");$show.removeClass("ui-tabs-hide");self._trigger("show",null,self._ui(clicked,$show[0]));};var hideTab=hideFx?function(clicked,$hide){$hide.animate(hideFx,hideFx.duration||"normal",function(){self.lis.removeClass("ui-tabs-selected ui-state-active");$hide.addClass("ui-tabs-hide");resetStyle($hide,hideFx);self.element.dequeue("tabs");});}:function(clicked,$hide,$show){self.lis.removeClass("ui-tabs-selected ui-state-active");$hide.addClass("ui-tabs-hide");self.element.dequeue("tabs");};this.anchors.bind(o.event+".tabs",function(){var el=this,$li=$(el).closest("li"),$hide=self.panels.filter(":not(.ui-tabs-hide)"),$show=self.element.find(self._sanitizeSelector(el.hash));if(($li.hasClass("ui-tabs-selected")&&!o.collapsible)||$li.hasClass("ui-state-disabled")||$li.hasClass("ui-state-processing")||self.panels.filter(":animated").length||self._trigger("select",null,self._ui(this,$show[0]))===false){this.blur();return false;}
o.selected=self.anchors.index(this);self.abort();if(o.collapsible){if($li.hasClass("ui-tabs-selected")){o.selected=-1;if(o.cookie){self._cookie(o.selected,o.cookie);}
self.element.queue("tabs",function(){hideTab(el,$hide);}).dequeue("tabs");this.blur();return false;}else if(!$hide.length){if(o.cookie){self._cookie(o.selected,o.cookie);}
self.element.queue("tabs",function(){showTab(el,$show);});self.load(self.anchors.index(this));this.blur();return false;}}
if(o.cookie){self._cookie(o.selected,o.cookie);}
if($show.length){if($hide.length){self.element.queue("tabs",function(){hideTab(el,$hide);});}
self.element.queue("tabs",function(){showTab(el,$show);});self.load(self.anchors.index(this));}else{throw"jQuery UI Tabs: Mismatching fragment identifier.";}
if($.browser.msie){this.blur();}});this.anchors.bind("click.tabs",function(){return false;});},_getIndex:function(index){if(typeof index=="string"){index=this.anchors.index(this.anchors.filter("[href$="+index+"]"));}
return index;},destroy:function(){var o=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var href=$.data(this,"href.tabs");if(href){this.href=href;}
var $this=$(this).unbind(".tabs");$.each(["href","load","cache"],function(i,prefix){$this.removeData(prefix+".tabs");});});this.lis.unbind(".tabs").add(this.panels).each(function(){if($.data(this,"destroy.tabs")){$(this).remove();}else{$(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "));}});if(o.cookie){this._cookie(null,o.cookie);}
return this;},add:function(url,label,index){if(index===undefined){index=this.anchors.length;}
var self=this,o=this.options,$li=$(o.tabTemplate.replace(/#\{href\}/g,url).replace(/#\{label\}/g,label)),id=!url.indexOf("#")?url.replace("#",""):this._tabId($("a",$li)[0]);$li.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var $panel=self.element.find("#"+id);if(!$panel.length){$panel=$(o.panelTemplate).attr("id",id).data("destroy.tabs",true);}
$panel.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(index>=this.lis.length){$li.appendTo(this.list);$panel.appendTo(this.list[0].parentNode);}else{$li.insertBefore(this.lis[index]);$panel.insertBefore(this.panels[index]);}
o.disabled=$.map(o.disabled,function(n,i){return n>=index?++n:n;});this._tabify();if(this.anchors.length==1){o.selected=0;$li.addClass("ui-tabs-selected ui-state-active");$panel.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){self._trigger("show",null,self._ui(self.anchors[0],self.panels[0]));});this.load(0);}
this._trigger("add",null,this._ui(this.anchors[index],this.panels[index]));return this;},remove:function(index){index=this._getIndex(index);var o=this.options,$li=this.lis.eq(index).remove(),$panel=this.panels.eq(index).remove();if($li.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(index+(index+1<this.anchors.length?1:-1));}
o.disabled=$.map($.grep(o.disabled,function(n,i){return n!=index;}),function(n,i){return n>=index?--n:n;});this._tabify();this._trigger("remove",null,this._ui($li.find("a")[0],$panel[0]));return this;},enable:function(index){index=this._getIndex(index);var o=this.options;if($.inArray(index,o.disabled)==-1){return;}
this.lis.eq(index).removeClass("ui-state-disabled");o.disabled=$.grep(o.disabled,function(n,i){return n!=index;});this._trigger("enable",null,this._ui(this.anchors[index],this.panels[index]));return this;},disable:function(index){index=this._getIndex(index);var self=this,o=this.options;if(index!=o.selected){this.lis.eq(index).addClass("ui-state-disabled");o.disabled.push(index);o.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[index],this.panels[index]));}
return this;},select:function(index){index=this._getIndex(index);if(index==-1){if(this.options.collapsible&&this.options.selected!=-1){index=this.options.selected;}else{return this;}}
this.anchors.eq(index).trigger(this.options.event+".tabs");return this;},load:function(index){index=this._getIndex(index);var self=this,o=this.options,a=this.anchors.eq(index)[0],url=$.data(a,"load.tabs");this.abort();if(!url||this.element.queue("tabs").length!==0&&$.data(a,"cache.tabs")){this.element.dequeue("tabs");return;}
this.lis.eq(index).addClass("ui-state-processing");if(o.spinner){var span=$("span",a);span.data("label.tabs",span.html()).html(o.spinner);}
this.xhr=$.ajax($.extend({},o.ajaxOptions,{url:url,success:function(r,s){self.element.find(self._sanitizeSelector(a.hash)).html(r);self._cleanup();if(o.cache){$.data(a,"cache.tabs",true);}
self._trigger("load",null,self._ui(self.anchors[index],self.panels[index]));try{o.ajaxOptions.success(r,s);}
catch(e){}},error:function(xhr,s,e){self._cleanup();self._trigger("load",null,self._ui(self.anchors[index],self.panels[index]));try{o.ajaxOptions.error(xhr,s,index,a);}
catch(e){}}}));self.element.dequeue("tabs");return this;},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr;}
this._cleanup();return this;},url:function(index,url){this.anchors.eq(index).removeData("cache.tabs").data("load.tabs",url);return this;},length:function(){return this.anchors.length;}});$.extend($.ui.tabs,{version:"1.8.11"});$.extend($.ui.tabs.prototype,{rotation:null,rotate:function(ms,continuing){var self=this,o=this.options;var rotate=self._rotate||(self._rotate=function(e){clearTimeout(self.rotation);self.rotation=setTimeout(function(){var t=o.selected;self.select(++t<self.anchors.length?t:0);},ms);if(e){e.stopPropagation();}});var stop=self._unrotate||(self._unrotate=!continuing?function(e){if(e.clientX){self.rotate(null);}}:function(e){t=o.selected;rotate();});if(ms){this.element.bind("tabsshow",rotate);this.anchors.bind(o.event+".tabs",stop);rotate();}else{clearTimeout(self.rotation);this.element.unbind("tabsshow",rotate);this.anchors.unbind(o.event+".tabs",stop);delete this._rotate;delete this._unrotate;}
return this;}});})(jQuery);(function($,undefined){$.extend($.ui,{datepicker:{version:"1.8.11"}});var PROP_NAME='datepicker';var dpuuid=new Date().getTime();function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId='ui-datepicker-div';this._inlineClass='ui-datepicker-inline';this._appendClass='ui-datepicker-append';this._triggerClass='ui-datepicker-trigger';this._dialogClass='ui-datepicker-dialog';this._disableClass='ui-datepicker-disabled';this._unselectableClass='ui-datepicker-unselectable';this._currentClass='ui-datepicker-current-day';this._dayOverClass='ui-datepicker-days-cell-over';this.regional=[];this.regional['']={closeText:'Done',prevText:'Prev',nextText:'Next',currentText:'Today',monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],weekHeader:'Wk',dateFormat:'mm/dd/yy',firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:''};this._defaults={showOn:'focus',showAnim:'fadeIn',showOptions:{},defaultDate:null,appendText:'',buttonText:'...',buttonImage:'',buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:'c-10:c+10',showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:'+10',minDate:null,maxDate:null,duration:'fast',beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:'',altFormat:'',constrainInput:true,showButtonPanel:false,autoSize:false};$.extend(this._defaults,this.regional['']);this.dpDiv=$('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>');}
$.extend(Datepicker.prototype,{markerClassName:'hasDatepicker',log:function(){if(this.debug)
console.log.apply('',arguments);},_widgetDatepicker:function(){return this.dpDiv;},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this;},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute('date:'+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue);}catch(err){inlineSettings[attrName]=attrValue;}}}
var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=='div'||nodeName=='span');if(!target.id){this.uuid+=1;target.id='dp'+this.uuid;}
var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=='input'){this._connectDatepicker(target,inst);}else if(inline){this._inlineDatepicker(target,inst);}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,'\\\\$1');return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:$('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))};},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName))
return;this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value;}).bind("getData.datepicker",function(event,key){return this._get(inst,key);});this._autoSize(inst);$.data(target,PROP_NAME,inst);},_attachments:function(input,inst){var appendText=this._get(inst,'appendText');var isRTL=this._get(inst,'isRTL');if(inst.append)
inst.append.remove();if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+'</span>');input[isRTL?'before':'after'](inst.append);}
input.unbind('focus',this._showDatepicker);if(inst.trigger)
inst.trigger.remove();var showOn=this._get(inst,'showOn');if(showOn=='focus'||showOn=='both')
input.focus(this._showDatepicker);if(showOn=='button'||showOn=='both'){var buttonText=this._get(inst,'buttonText');var buttonImage=this._get(inst,'buttonImage');inst.trigger=$(this._get(inst,'buttonImageOnly')?$('<img/>').addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==''?buttonText:$('<img/>').attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?'before':'after'](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0])
$.datepicker._hideDatepicker();else
$.datepicker._showDatepicker(input[0]);return false;});}},_autoSize:function(inst){if(this._get(inst,'autoSize')&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,'dateFormat');if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i;}}
return maxI;};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?'monthNames':'monthNamesShort'))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?'dayNames':'dayNamesShort')))+20-date.getDay());}
inst.input.attr('size',this._formatDate(inst,date).length);}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName))
return;divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value;}).bind("getData.datepicker",function(event,key){return this._get(inst,key);});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);inst.dpDiv.show();},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id='dp'+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);$('body').append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst);}
extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY];}
this._dialogInput.css('left',(this._pos[0]+20)+'px').css('top',this._pos[1]+'px');inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI)
$.blockUI(this.dpDiv);$.data(this._dialogInput[0],PROP_NAME,inst);return this;},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=='input'){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind('focus',this._showDatepicker).unbind('keydown',this._doKeyDown).unbind('keypress',this._doKeyPress).unbind('keyup',this._doKeyUp);}else if(nodeName=='div'||nodeName=='span')
$target.removeClass(this.markerClassName).empty();},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();if(nodeName=='input'){target.disabled=false;inst.trigger.filter('button').each(function(){this.disabled=false;}).end().filter('img').css({opacity:'1.0',cursor:''});}
else if(nodeName=='div'||nodeName=='span'){var inline=$target.children('.'+this._inlineClass);inline.children().removeClass('ui-state-disabled');}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value);});},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return;}
var nodeName=target.nodeName.toLowerCase();if(nodeName=='input'){target.disabled=true;inst.trigger.filter('button').each(function(){this.disabled=true;}).end().filter('img').css({opacity:'0.5',cursor:'default'});}
else if(nodeName=='div'||nodeName=='span'){var inline=$target.children('.'+this._inlineClass);inline.children().addClass('ui-state-disabled');}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value);});this._disabledInputs[this._disabledInputs.length]=target;},_isDisabledDatepicker:function(target){if(!target){return false;}
for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target)
return true;}
return false;},_getInst:function(target){try{return $.data(target,PROP_NAME);}
catch(err){throw'Missing instance data for this datepicker';}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=='string'){return(name=='defaults'?$.extend({},$.datepicker._defaults):(inst?(name=='all'?$.extend({},inst.settings):this._get(inst,name)):null));}
var settings=name||{};if(typeof name=='string'){settings={};settings[name]=value;}
if(inst){if(this._curInst==inst){this._hideDatepicker();}
var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');extendRemove(inst.settings,settings);if(minDate!==null&&settings['dateFormat']!==undefined&&settings['minDate']===undefined)
inst.settings.minDate=this._formatDate(inst,minDate);if(maxDate!==null&&settings['dateFormat']!==undefined&&settings['maxDate']===undefined)
inst.settings.maxDate=this._formatDate(inst,maxDate);this._attachments($(target),inst);this._autoSize(inst);this._setDateDatepicker(target,date);this._updateDatepicker(inst);}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value);},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst);}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst);}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline)
this._setDateFromField(inst,noDefault);return(inst?this._getDate(inst):null);},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is('.ui-datepicker-rtl');inst._keyEvent=true;if($.datepicker._datepickerShowing)
switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$('td.'+$.datepicker._dayOverClass+':not(.'+
$.datepicker._currentClass+')',inst.dpDiv);if(sel[0])
$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);else
$.datepicker._hideDatepicker();return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,'stepBigMonths'):-$.datepicker._get(inst,'stepMonths')),'M');break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,'stepBigMonths'):+$.datepicker._get(inst,'stepMonths')),'M');break;case 35:if(event.ctrlKey||event.metaKey)$.datepicker._clearDate(event.target);handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey)$.datepicker._gotoToday(event.target);handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,(isRTL?+1:-1),'D');handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,'stepBigMonths'):-$.datepicker._get(inst,'stepMonths')),'M');break;case 38:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,-7,'D');handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,(isRTL?-1:+1),'D');handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,'stepBigMonths'):+$.datepicker._get(inst,'stepMonths')),'M');break;case 40:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,+7,'D');handled=event.ctrlKey||event.metaKey;break;default:handled=false;}
else if(event.keyCode==36&&event.ctrlKey)
$.datepicker._showDatepicker(this);else{handled=false;}
if(handled){event.preventDefault();event.stopPropagation();}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,'constrainInput')){var chars=$.datepicker._possibleChars($.datepicker._get(inst,'dateFormat'));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<' '||!chars||chars.indexOf(chr)>-1);}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,'dateFormat'),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst);}}
catch(event){$.datepicker.log(event);}}
return true;},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!='input')
input=$('input',input.parentNode)[0];if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input)
return;var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);}
var beforeShow=$.datepicker._get(inst,'beforeShow');extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog)
input.value='';if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight;}
var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css('position')=='fixed';return!isFixed;});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop;}
var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:'absolute',display:'block',top:'-1000px'});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?'static':(isFixed?'fixed':'absolute')),display:'none',left:offset.left+'px',top:offset.top+'px'});if(!inst.inline){var showAnim=$.datepicker._get(inst,'showAnim');var duration=$.datepicker._get(inst,'duration');var postProcess=function(){$.datepicker._datepickerShowing=true;var cover=inst.dpDiv.find('iframe.ui-datepicker-cover');if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()});}};inst.dpDiv.zIndex($(input).zIndex()+1);if($.effects&&$.effects[showAnim])
inst.dpDiv.show(showAnim,$.datepicker._get(inst,'showOptions'),duration,postProcess);else
inst.dpDiv[showAnim||'show']((showAnim?duration:null),postProcess);if(!showAnim||!duration)
postProcess();if(inst.input.is(':visible')&&!inst.input.is(':disabled'))
inst.input.focus();$.datepicker._curInst=inst;}},_updateDatepicker:function(inst){var self=this;var borders=$.datepicker._getBorders(inst.dpDiv);inst.dpDiv.empty().append(this._generateHTML(inst));var cover=inst.dpDiv.find('iframe.ui-datepicker-cover');if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}
inst.dpDiv.find('button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a').bind('mouseout',function(){$(this).removeClass('ui-state-hover');if(this.className.indexOf('ui-datepicker-prev')!=-1)$(this).removeClass('ui-datepicker-prev-hover');if(this.className.indexOf('ui-datepicker-next')!=-1)$(this).removeClass('ui-datepicker-next-hover');}).bind('mouseover',function(){if(!self._isDisabledDatepicker(inst.inline?inst.dpDiv.parent()[0]:inst.input[0])){$(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');$(this).addClass('ui-state-hover');if(this.className.indexOf('ui-datepicker-prev')!=-1)$(this).addClass('ui-datepicker-prev-hover');if(this.className.indexOf('ui-datepicker-next')!=-1)$(this).addClass('ui-datepicker-next-hover');}}).end().find('.'+this._dayOverClass+' a').trigger('mouseover').end();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;if(cols>1)
inst.dpDiv.addClass('ui-datepicker-multi-'+cols).css('width',(width*cols)+'em');else
inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?'add':'remove')+'Class']('ui-datepicker-multi');inst.dpDiv[(this._get(inst,'isRTL')?'add':'remove')+'Class']('ui-datepicker-rtl');if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(':visible')&&!inst.input.is(':disabled')&&inst.input[0]!=document.activeElement)
inst.input.focus();if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml){inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);}
origyearshtml=inst.yearshtml=null;},0);}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value;};return[parseFloat(convert(elem.css('border-left-width'))),parseFloat(convert(elem.css('border-top-width')))];},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+$(document).scrollLeft();var viewHeight=document.documentElement.clientHeight+$(document).scrollTop();offset.left-=(this._get(inst,'isRTL')?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset;},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,'isRTL');while(obj&&(obj.type=='hidden'||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?'previousSibling':'nextSibling'];}
var position=$(obj).offset();return[position.left,position.top];},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME)))
return;if(this._datepickerShowing){var showAnim=this._get(inst,'showAnim');var duration=this._get(inst,'duration');var postProcess=function(){$.datepicker._tidyDialog(inst);this._curInst=null;};if($.effects&&$.effects[showAnim])
inst.dpDiv.hide(showAnim,$.datepicker._get(inst,'showOptions'),duration,postProcess);else
inst.dpDiv[(showAnim=='slideDown'?'slideUp':(showAnim=='fadeIn'?'fadeOut':'hide'))]((showAnim?duration:null),postProcess);if(!showAnim)
postProcess();var onClose=this._get(inst,'onClose');if(onClose)
onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():''),inst]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:'absolute',left:'0',top:'-100px'});if($.blockUI){$.unblockUI();$('body').append(this.dpDiv);}}
this._inDialog=false;}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');},_checkExternalClick:function(event){if(!$.datepicker._curInst)
return;var $target=$(event.target);if($target[0].id!=$.datepicker._mainDivId&&$target.parents('#'+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI))
$.datepicker._hideDatepicker();},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return;}
this._adjustInstDate(inst,offset+
(period=='M'?this._get(inst,'showCurrentAtPos'):0),period);this._updateDatepicker(inst);},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,'gotoCurrent')&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear;}
else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();}
this._notifyChange(inst);this._adjustDate(target);},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst._selectingMonthYear=false;inst['selected'+(period=='M'?'Month':'Year')]=inst['draw'+(period=='M'?'Month':'Year')]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target);},_clickMonthYear:function(id){var target=$(id);var inst=this._getInst(target[0]);if(inst.input&&inst._selectingMonthYear){setTimeout(function(){inst.input.focus();},0);}
inst._selectingMonthYear=!inst._selectingMonthYear;},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return;}
var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$('a',td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,'');},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input)
inst.input.val(dateStr);this._updateAlternate(inst);var onSelect=this._get(inst,'onSelect');if(onSelect)
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);else if(inst.input)
inst.input.trigger('change');if(inst.inline)
this._updateDatepicker(inst);else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!='object')
inst.input.focus();this._lastInput=null;}},_updateAlternate:function(inst){var altField=this._get(inst,'altField');if(altField){var altFormat=this._get(inst,'altFormat')||this._get(inst,'dateFormat');var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr);});}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),''];},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;},parseDate:function(format,value,settings){if(format==null||value==null)
throw'Invalid arguments';value=(typeof value=='object'?value.toString():value+'');if(value=='')
return null;var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!='string'?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};var getNumber=function(match){var isDoubled=lookAhead(match);var size=(match=='@'?14:(match=='!'?20:(match=='y'&&isDoubled?4:(match=='o'?3:2))));var digits=new RegExp('^\\d{1,'+size+'}');var num=value.substring(iValue).match(digits);if(!num)
throw'Missing number at position '+iValue;iValue+=num[0].length;return parseInt(num[0],10);};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);for(var i=0;i<names.length;i++){if(value.substr(iValue,names[i].length).toLowerCase()==names[i].toLowerCase()){iValue+=names[i].length;return i+1;}}
throw'Unknown name at position '+iValue;};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat))
throw'Unexpected literal at position '+iValue;iValue++;};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
checkLiteral();else
switch(format.charAt(iFormat)){case'd':day=getNumber('d');break;case'D':getName('D',dayNamesShort,dayNames);break;case'o':doy=getNumber('o');break;case'm':month=getNumber('m');break;case'M':month=getName('M',monthNamesShort,monthNames);break;case'y':year=getNumber('y');break;case'@':var date=new Date(getNumber('@'));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case'!':var date=new Date((getNumber('!')-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'"))
checkLiteral();else
literal=true;break;default:checkLiteral();}}
if(year==-1)
year=new Date().getFullYear();else if(year<100)
year+=new Date().getFullYear()-new Date().getFullYear()%100+
(year<=shortYearCutoff?0:-100);if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim)
break;month++;day-=dim;}while(true);}
var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day)
throw'Invalid date';return date;},ATOM:'yy-mm-dd',COOKIE:'D, dd M yy',ISO_8601:'yy-mm-dd',RFC_822:'D, d M y',RFC_850:'DD, dd-M-y',RFC_1036:'D, d M y',RFC_1123:'D, d M yy',RFC_2822:'D, d M yy',RSS:'D, d M y',TICKS:'!',TIMESTAMP:'@',W3C:'yy-mm-dd',_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+
Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date)
return'';var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};var formatNumber=function(match,value,len){var num=''+value;if(lookAhead(match))
while(num.length<len)
num='0'+num;return num;};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value]);};var output='';var literal=false;if(date)
for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
output+=format.charAt(iFormat);else
switch(format.charAt(iFormat)){case'd':output+=formatNumber('d',date.getDate(),2);break;case'D':output+=formatName('D',date.getDay(),dayNamesShort,dayNames);break;case'o':output+=formatNumber('o',(date.getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000,3);break;case'm':output+=formatNumber('m',date.getMonth()+1,2);break;case'M':output+=formatName('M',date.getMonth(),monthNamesShort,monthNames);break;case'y':output+=(lookAhead('y')?date.getFullYear():(date.getYear()%100<10?'0':'')+date.getYear()%100);break;case'@':output+=date.getTime();break;case'!':output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'"))
output+="'";else
literal=true;break;default:output+=format.charAt(iFormat);}}
return output;},_possibleChars:function(format){var chars='';var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};for(var iFormat=0;iFormat<format.length;iFormat++)
if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
chars+=format.charAt(iFormat);else
switch(format.charAt(iFormat)){case'd':case'm':case'y':case'@':chars+='0123456789';break;case'D':case'M':return null;case"'":if(lookAhead("'"))
chars+="'";else
literal=true;break;default:chars+=format.charAt(iFormat);}
return chars;},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return;}
var dateFormat=this._get(inst,'dateFormat');var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate;}catch(event){this.log(event);dates=(noDefault?'':dates);}
inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst);},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,'defaultDate'),new Date()));},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date;};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,'dateFormat'),offset,$.datepicker._getFormatConfig(inst));}
catch(e){}
var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||'d'){case'd':case'D':day+=parseInt(matches[1],10);break;case'w':case'W':day+=parseInt(matches[1],10)*7;break;case'm':case'M':month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case'y':case'Y':year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;}
matches=pattern.exec(offset);}
return new Date(year,month,day);};var newDate=(date==null||date===''?defaultDate:(typeof date=='string'?offsetString(date):(typeof date=='number'?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()=='Invalid Date'?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0);}
return this._daylightSavingAdjust(newDate);},_daylightSavingAdjust:function(date){if(!date)return null;date.setHours(date.getHours()>12?date.getHours()+2:0);return date;},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange)
this._notifyChange(inst);this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?'':this._formatDate(inst));}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=='')?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate;},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,'isRTL');var showButtonPanel=this._get(inst,'showButtonPanel');var hideIfNoPrevNext=this._get(inst,'hideIfNoPrevNext');var navigationAsDateFormat=this._get(inst,'navigationAsDateFormat');var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,'showCurrentAtPos');var stepMonths=this._get(inst,'stepMonths');var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}
if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}
inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,'prevText');prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._adjustDate(\'#'+inst.id+'\', -'+stepMonths+', \'M\');"'+' title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'e':'w')+'">'+prevText+'</span></a>':(hideIfNoPrevNext?'':'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'e':'w')+'">'+prevText+'</span></a>'));var nextText=this._get(inst,'nextText');nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._adjustDate(\'#'+inst.id+'\', +'+stepMonths+', \'M\');"'+' title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'w':'e')+'">'+nextText+'</span></a>':(hideIfNoPrevNext?'':'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'w':'e')+'">'+nextText+'</span></a>'));var currentText=this._get(inst,'currentText');var gotoDate=(this._get(inst,'gotoCurrent')&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(inst,'closeText')+'</button>':'');var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:'')+
(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._gotoToday(\'#'+inst.id+'\');"'+'>'+currentText+'</button>':'')+(isRTL?'':controls)+'</div>':'';var firstDay=parseInt(this._get(inst,'firstDay'),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,'showWeek');var dayNames=this._get(inst,'dayNames');var dayNamesShort=this._get(inst,'dayNamesShort');var dayNamesMin=this._get(inst,'dayNamesMin');var monthNames=this._get(inst,'monthNames');var monthNamesShort=this._get(inst,'monthNamesShort');var beforeShowDay=this._get(inst,'beforeShowDay');var showOtherMonths=this._get(inst,'showOtherMonths');var selectOtherMonths=this._get(inst,'selectOtherMonths');var calculateWeek=this._get(inst,'calculateWeek')||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html='';for(var row=0;row<numMonths[0];row++){var group='';for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=' ui-corner-all';var calender='';if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1)
switch(col){case 0:calender+=' ui-datepicker-group-first';cornerClass=' ui-corner-'+(isRTL?'right':'left');break;case numMonths[1]-1:calender+=' ui-datepicker-group-last';cornerClass=' ui-corner-'+(isRTL?'left':'right');break;default:calender+=' ui-datepicker-group-middle';cornerClass='';break;}
calender+='">';}
calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+
(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):'')+
(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):'')+
this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead>'+'<tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,'weekHeader')+'</th>':'');for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+='<th'+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':'')+'>'+'<span title="'+dayNames[day]+'">'+dayNamesMin[day]+'</span></th>';}
calender+=thead+'</tr></thead><tbody>';var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth)
inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+='<tr>';var tbody=(!showWeek?'':'<td class="ui-datepicker-week-col">'+
this._get(inst,'calculateWeek')(printDate)+'</td>');for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,'']);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+
((dow+firstDay+6)%7>=5?' ui-datepicker-week-end':'')+
(otherMonth?' ui-datepicker-other-month':'')+
((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?' '+this._dayOverClass:'')+
(unselectable?' '+this._unselectableClass+' ui-state-disabled':'')+
(otherMonth&&!showOtherMonths?'':' '+daySettings[1]+
(printDate.getTime()==currentDate.getTime()?' '+this._currentClass:'')+
(printDate.getTime()==today.getTime()?' ui-datepicker-today':''))+'"'+
((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':'')+
(unselectable?'':' onclick="DP_jQuery_'+dpuuid+'.datepicker._selectDay(\'#'+
inst.id+'\','+printDate.getMonth()+','+printDate.getFullYear()+', this);return false;"')+'>'+
(otherMonth&&!showOtherMonths?'&#xa0;':(unselectable?'<span class="ui-state-default">'+printDate.getDate()+'</span>':'<a class="ui-state-default'+
(printDate.getTime()==today.getTime()?' ui-state-highlight':'')+
(printDate.getTime()==currentDate.getTime()?' ui-state-active':'')+
(otherMonth?' ui-priority-secondary':'')+'" href="#">'+printDate.getDate()+'</a>'))+'</td>';printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);}
calender+=tbody+'</tr>';}
drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}
calender+='</tbody></table>'+(isMultiMonth?'</div>'+
((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':''):'');group+=calender;}
html+=group;}
html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':'');inst._keyEvent=false;return html;},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,'changeMonth');var changeYear=this._get(inst,'changeYear');var showMonthAfterYear=this._get(inst,'showMonthAfterYear');var html='<div class="ui-datepicker-title">';var monthHtml='';if(secondary||!changeMonth)
monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+'</span>';else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" '+'onchange="DP_jQuery_'+dpuuid+'.datepicker._selectMonthYear(\'#'+inst.id+'\', this, \'M\');" '+'onclick="DP_jQuery_'+dpuuid+'.datepicker._clickMonthYear(\'#'+inst.id+'\');"'+'>';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth()))
monthHtml+='<option value="'+month+'"'+
(month==drawMonth?' selected="selected"':'')+'>'+monthNamesShort[month]+'</option>';}
monthHtml+='</select>';}
if(!showMonthAfterYear)
html+=monthHtml+(secondary||!(changeMonth&&changeYear)?'&#xa0;':'');inst.yearshtml='';if(secondary||!changeYear)
html+='<span class="ui-datepicker-year">'+drawYear+'</span>';else{var years=this._get(inst,'yearRange').split(':');var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year);};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||''));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+='<select class="ui-datepicker-year" '+'onchange="DP_jQuery_'+dpuuid+'.datepicker._selectMonthYear(\'#'+inst.id+'\', this, \'Y\');" '+'onclick="DP_jQuery_'+dpuuid+'.datepicker._clickMonthYear(\'#'+inst.id+'\');"'+'>';for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+
(year==drawYear?' selected="selected"':'')+'>'+year+'</option>';}
inst.yearshtml+='</select>';if(!$.browser.mozilla){html+=inst.yearshtml;inst.yearshtml=null;}else{html+='<select class="ui-datepicker-year"><option value="'+drawYear+'" selected="selected">'+drawYear+'</option></select>';}}
html+=this._get(inst,'yearSuffix');if(showMonthAfterYear)
html+=(secondary||!(changeMonth&&changeYear)?'&#xa0;':'')+monthHtml;html+='</div>';return html;},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=='Y'?offset:0);var month=inst.drawMonth+(period=='M'?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+
(period=='D'?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=='M'||period=='Y')
this._notifyChange(inst);},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');var newDate=(minDate&&date<minDate?minDate:date);newDate=(maxDate&&newDate>maxDate?maxDate:newDate);return newDate;},_notifyChange:function(inst){var onChange=this._get(inst,'onChangeMonthYear');if(onChange)
onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst]);},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,'numberOfMonths');return(numMonths==null?[1,1]:(typeof numMonths=='number'?[1,numMonths]:numMonths));},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+'Date'),null);},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay();},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0)
date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));return this._isInRange(inst,date);},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()));},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,'shortYearCutoff');shortYearCutoff=(typeof shortYearCutoff!='string'?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,'dayNamesShort'),dayNames:this._get(inst,'dayNames'),monthNamesShort:this._get(inst,'monthNamesShort'),monthNames:this._get(inst,'monthNames')};},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear;}
var date=(day?(typeof day=='object'?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,'dateFormat'),date,this._getFormatConfig(inst));}});function extendRemove(target,props){$.extend(target,props);for(var name in props)
if(props[name]==null||props[name]==undefined)
target[name]=props[name];return target;};function isArray(a){return(a&&(($.browser.safari&&typeof a=='object'&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))));};$.fn.datepicker=function(options){if(!this.length){return this;}
if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find('body').append($.datepicker.dpDiv);$.datepicker.initialized=true;}
var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=='string'&&(options=='isDisabled'||options=='getDate'||options=='widget'))
return $.datepicker['_'+options+'Datepicker'].apply($.datepicker,[this[0]].concat(otherArgs));if(options=='option'&&arguments.length==2&&typeof arguments[1]=='string')
return $.datepicker['_'+options+'Datepicker'].apply($.datepicker,[this[0]].concat(otherArgs));return this.each(function(){typeof options=='string'?$.datepicker['_'+options+'Datepicker'].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options);});};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.8.11";window['DP_jQuery_'+dpuuid]=$;})(jQuery);(function($,undefined){$.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=$("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue();},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();$.Widget.prototype.destroy.apply(this,arguments);},value:function(newValue){if(newValue===undefined){return this._value();}
this._setOption("value",newValue);return this;},_setOption:function(key,value){if(key==="value"){this.options.value=value;this._refreshValue();if(this._value()===this.options.max){this._trigger("complete");}}
$.Widget.prototype._setOption.apply(this,arguments);},_value:function(){var val=this.options.value;if(typeof val!=="number"){val=0;}
return Math.min(this.options.max,Math.max(this.min,val));},_percentage:function(){return 100*this._value()/this.options.max;},_refreshValue:function(){var value=this.value();var percentage=this._percentage();if(this.oldValue!==value){this.oldValue=value;this._trigger("change");}
this.valueDiv.toggleClass("ui-corner-right",value===this.options.max).width(percentage.toFixed(0)+"%");this.element.attr("aria-valuenow",value);}});$.extend($.ui.progressbar,{version:"1.8.11"});})(jQuery);;jQuery.effects||(function($,undefined){$.effects={};$.each(['backgroundColor','borderBottomColor','borderLeftColor','borderRightColor','borderTopColor','borderColor','color','outlineColor'],function(i,attr){$.fx.step[attr]=function(fx){if(!fx.colorInit){fx.start=getColor(fx.elem,attr);fx.end=getRGB(fx.end);fx.colorInit=true;}
fx.elem.style[attr]='rgb('+
Math.max(Math.min(parseInt((fx.pos*(fx.end[0]-fx.start[0]))+fx.start[0],10),255),0)+','+
Math.max(Math.min(parseInt((fx.pos*(fx.end[1]-fx.start[1]))+fx.start[1],10),255),0)+','+
Math.max(Math.min(parseInt((fx.pos*(fx.end[2]-fx.start[2]))+fx.start[2],10),255),0)+')';};});function getRGB(color){var result;if(color&&color.constructor==Array&&color.length==3)
return color;if(result=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
return[parseInt(result[1],10),parseInt(result[2],10),parseInt(result[3],10)];if(result=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
return[parseFloat(result[1])*2.55,parseFloat(result[2])*2.55,parseFloat(result[3])*2.55];if(result=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
return[parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16)];if(result=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
return[parseInt(result[1]+result[1],16),parseInt(result[2]+result[2],16),parseInt(result[3]+result[3],16)];if(result=/rgba\(0, 0, 0, 0\)/.exec(color))
return colors['transparent'];return colors[$.trim(color).toLowerCase()];}
function getColor(elem,attr){var color;do{color=$.curCSS(elem,attr);if(color!=''&&color!='transparent'||$.nodeName(elem,"body"))
break;attr="backgroundColor";}while(elem=elem.parentNode);return getRGB(color);};var colors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};var classAnimationActions=['add','remove','toggle'],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function getElementStyles(){var style=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,newStyle={},key,camelCase;if(style&&style.length&&style[0]&&style[style[0]]){var len=style.length;while(len--){key=style[len];if(typeof style[key]=='string'){camelCase=key.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase();});newStyle[camelCase]=style[key];}}}else{for(key in style){if(typeof style[key]==='string'){newStyle[key]=style[key];}}}
return newStyle;}
function filterStyles(styles){var name,value;for(name in styles){value=styles[name];if(value==null||$.isFunction(value)||name in shorthandStyles||(/scrollbar/).test(name)||(!(/color/i).test(name)&&isNaN(parseFloat(value)))){delete styles[name];}}
return styles;}
function styleDifference(oldStyle,newStyle){var diff={_:0},name;for(name in newStyle){if(oldStyle[name]!=newStyle[name]){diff[name]=newStyle[name];}}
return diff;}
$.effects.animateClass=function(value,duration,easing,callback){if($.isFunction(easing)){callback=easing;easing=null;}
return this.queue('fx',function(){var that=$(this),originalStyleAttr=that.attr('style')||' ',originalStyle=filterStyles(getElementStyles.call(this)),newStyle,className=that.attr('className');$.each(classAnimationActions,function(i,action){if(value[action]){that[action+'Class'](value[action]);}});newStyle=filterStyles(getElementStyles.call(this));that.attr('className',className);that.animate(styleDifference(originalStyle,newStyle),duration,easing,function(){$.each(classAnimationActions,function(i,action){if(value[action]){that[action+'Class'](value[action]);}});if(typeof that.attr('style')=='object'){that.attr('style').cssText='';that.attr('style').cssText=originalStyleAttr;}else{that.attr('style',originalStyleAttr);}
if(callback){callback.apply(this,arguments);}});var queue=$.queue(this),anim=queue.splice(queue.length-1,1)[0];queue.splice(1,0,anim);$.dequeue(this);});};$.fn.extend({_addClass:$.fn.addClass,addClass:function(classNames,speed,easing,callback){return speed?$.effects.animateClass.apply(this,[{add:classNames},speed,easing,callback]):this._addClass(classNames);},_removeClass:$.fn.removeClass,removeClass:function(classNames,speed,easing,callback){return speed?$.effects.animateClass.apply(this,[{remove:classNames},speed,easing,callback]):this._removeClass(classNames);},_toggleClass:$.fn.toggleClass,toggleClass:function(classNames,force,speed,easing,callback){if(typeof force=="boolean"||force===undefined){if(!speed){return this._toggleClass(classNames,force);}else{return $.effects.animateClass.apply(this,[(force?{add:classNames}:{remove:classNames}),speed,easing,callback]);}}else{return $.effects.animateClass.apply(this,[{toggle:classNames},force,speed,easing]);}},switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.apply(this,[{add:add,remove:remove},speed,easing,callback]);}});$.extend($.effects,{version:"1.8.11",save:function(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null)element.data("ec.storage."+set[i],element[0].style[set[i]]);}},restore:function(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null)element.css(set[i],element.data("ec.storage."+set[i]));}},setMode:function(el,mode){if(mode=='toggle')mode=el.is(':hidden')?'show':'hide';return mode;},getBaseline:function(origin,original){var y,x;switch(origin[0]){case'top':y=0;break;case'middle':y=0.5;break;case'bottom':y=1;break;default:y=origin[0]/original.height;};switch(origin[1]){case'left':x=0;break;case'center':x=0.5;break;case'right':x=1;break;default:x=origin[1]/original.width;};return{x:x,y:y};},createWrapper:function(element){if(element.parent().is('.ui-effects-wrapper')){return element.parent();}
var props={width:element.outerWidth(true),height:element.outerHeight(true),'float':element.css('float')},wrapper=$('<div></div>').addClass('ui-effects-wrapper').css({fontSize:'100%',background:'transparent',border:'none',margin:0,padding:0});element.wrap(wrapper);wrapper=element.parent();if(element.css('position')=='static'){wrapper.css({position:'relative'});element.css({position:'relative'});}else{$.extend(props,{position:element.css('position'),zIndex:element.css('z-index')});$.each(['top','left','bottom','right'],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]='auto';}});element.css({position:'relative',top:0,left:0,right:'auto',bottom:'auto'});}
return wrapper.css(props).show();},removeWrapper:function(element){if(element.parent().is('.ui-effects-wrapper'))
return element.parent().replaceWith(element);return element;},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){unit=element.cssUnit(x);if(unit[0]>0)value[x]=unit[0]*factor+unit[1];});return value;}});function _normalizeArguments(effect,options,speed,callback){if(typeof effect=='object'){callback=options;speed=null;options=effect;effect=options.effect;}
if($.isFunction(options)){callback=options;speed=null;options={};}
if(typeof options=='number'||$.fx.speeds[options]){callback=speed;speed=options;options={};}
if($.isFunction(speed)){callback=speed;speed=null;}
options=options||{};speed=speed||options.duration;speed=$.fx.off?0:typeof speed=='number'?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;callback=callback||options.complete;return[effect,options,speed,callback];}
function standardSpeed(speed){if(!speed||typeof speed==="number"||$.fx.speeds[speed]){return true;}
if(typeof speed==="string"&&!$.effects[speed]){return true;}
return false;}
$.fn.extend({effect:function(effect,options,speed,callback){var args=_normalizeArguments.apply(this,arguments),args2={options:args[1],duration:args[2],callback:args[3]},mode=args2.options.mode,effectMethod=$.effects[effect];if($.fx.off||!effectMethod){if(mode){return this[mode](args2.duration,args2.callback);}else{return this.each(function(){if(args2.callback){args2.callback.call(this);}});}}
return effectMethod.call(this,args2);},_show:$.fn.show,show:function(speed){if(standardSpeed(speed)){return this._show.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args[1].mode='show';return this.effect.apply(this,args);}},_hide:$.fn.hide,hide:function(speed){if(standardSpeed(speed)){return this._hide.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args[1].mode='hide';return this.effect.apply(this,args);}},__toggle:$.fn.toggle,toggle:function(speed){if(standardSpeed(speed)||typeof speed==="boolean"||$.isFunction(speed)){return this.__toggle.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args[1].mode='toggle';return this.effect.apply(this,args);}},cssUnit:function(key){var style=this.css(key),val=[];$.each(['em','px','%','pt'],function(i,unit){if(style.indexOf(unit)>0)
val=[parseFloat(style),unit];});return val;}});$.easing.jswing=$.easing.swing;$.extend($.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return $.easing[$.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-$.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return $.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return $.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});})(jQuery);(function($,undefined){$.effects.blind=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'hide');var direction=o.options.direction||'vertical';$.effects.save(el,props);el.show();var wrapper=$.effects.createWrapper(el).css({overflow:'hidden'});var ref=(direction=='vertical')?'height':'width';var distance=(direction=='vertical')?wrapper.height():wrapper.width();if(mode=='show')wrapper.css(ref,0);var animation={};animation[ref]=mode=='show'?distance:0;wrapper.animate(animation,o.duration,o.options.easing,function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(el[0],arguments);el.dequeue();});});};})(jQuery);(function($,undefined){$.effects.bounce=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'effect');var direction=o.options.direction||'up';var distance=o.options.distance||20;var times=o.options.times||5;var speed=o.duration||250;if(/show|hide/.test(mode))props.push('opacity');$.effects.save(el,props);el.show();$.effects.createWrapper(el);var ref=(direction=='up'||direction=='down')?'top':'left';var motion=(direction=='up'||direction=='left')?'pos':'neg';var distance=o.options.distance||(ref=='top'?el.outerHeight({margin:true})/3:el.outerWidth({margin:true})/3);if(mode=='show')el.css('opacity',0).css(ref,motion=='pos'?-distance:distance);if(mode=='hide')distance=distance/(times*2);if(mode!='hide')times--;if(mode=='show'){var animation={opacity:1};animation[ref]=(motion=='pos'?'+=':'-=')+distance;el.animate(animation,speed/2,o.options.easing);distance=distance/2;times--;};for(var i=0;i<times;i++){var animation1={},animation2={};animation1[ref]=(motion=='pos'?'-=':'+=')+distance;animation2[ref]=(motion=='pos'?'+=':'-=')+distance;el.animate(animation1,speed/2,o.options.easing).animate(animation2,speed/2,o.options.easing);distance=(mode=='hide')?distance*2:distance/2;};if(mode=='hide'){var animation={opacity:0};animation[ref]=(motion=='pos'?'-=':'+=')+distance;el.animate(animation,speed/2,o.options.easing,function(){el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);});}else{var animation1={},animation2={};animation1[ref]=(motion=='pos'?'-=':'+=')+distance;animation2[ref]=(motion=='pos'?'+=':'-=')+distance;el.animate(animation1,speed/2,o.options.easing).animate(animation2,speed/2,o.options.easing,function(){$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);});};el.queue('fx',function(){el.dequeue();});el.dequeue();});};})(jQuery);(function($,undefined){$.effects.clip=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right','height','width'];var mode=$.effects.setMode(el,o.options.mode||'hide');var direction=o.options.direction||'vertical';$.effects.save(el,props);el.show();var wrapper=$.effects.createWrapper(el).css({overflow:'hidden'});var animate=el[0].tagName=='IMG'?wrapper:el;var ref={size:(direction=='vertical')?'height':'width',position:(direction=='vertical')?'top':'left'};var distance=(direction=='vertical')?animate.height():animate.width();if(mode=='show'){animate.css(ref.size,0);animate.css(ref.position,distance/2);}
var animation={};animation[ref.size]=mode=='show'?distance:0;animation[ref.position]=mode=='show'?0:distance/2;animate.animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(el[0],arguments);el.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.drop=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right','opacity'];var mode=$.effects.setMode(el,o.options.mode||'hide');var direction=o.options.direction||'left';$.effects.save(el,props);el.show();$.effects.createWrapper(el);var ref=(direction=='up'||direction=='down')?'top':'left';var motion=(direction=='up'||direction=='left')?'pos':'neg';var distance=o.options.distance||(ref=='top'?el.outerHeight({margin:true})/2:el.outerWidth({margin:true})/2);if(mode=='show')el.css('opacity',0).css(ref,motion=='pos'?-distance:distance);var animation={opacity:mode=='show'?1:0};animation[ref]=(mode=='show'?(motion=='pos'?'+=':'-='):(motion=='pos'?'-=':'+='))+distance;el.animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);el.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.explode=function(o){return this.queue(function(){var rows=o.options.pieces?Math.round(Math.sqrt(o.options.pieces)):3;var cells=o.options.pieces?Math.round(Math.sqrt(o.options.pieces)):3;o.options.mode=o.options.mode=='toggle'?($(this).is(':visible')?'hide':'show'):o.options.mode;var el=$(this).show().css('visibility','hidden');var offset=el.offset();offset.top-=parseInt(el.css("marginTop"),10)||0;offset.left-=parseInt(el.css("marginLeft"),10)||0;var width=el.outerWidth(true);var height=el.outerHeight(true);for(var i=0;i<rows;i++){for(var j=0;j<cells;j++){el.clone().appendTo('body').wrap('<div></div>').css({position:'absolute',visibility:'visible',left:-j*(width/cells),top:-i*(height/rows)}).parent().addClass('ui-effects-explode').css({position:'absolute',overflow:'hidden',width:width/cells,height:height/rows,left:offset.left+j*(width/cells)+(o.options.mode=='show'?(j-Math.floor(cells/2))*(width/cells):0),top:offset.top+i*(height/rows)+(o.options.mode=='show'?(i-Math.floor(rows/2))*(height/rows):0),opacity:o.options.mode=='show'?0:1}).animate({left:offset.left+j*(width/cells)+(o.options.mode=='show'?0:(j-Math.floor(cells/2))*(width/cells)),top:offset.top+i*(height/rows)+(o.options.mode=='show'?0:(i-Math.floor(rows/2))*(height/rows)),opacity:o.options.mode=='show'?1:0},o.duration||500);}}
setTimeout(function(){o.options.mode=='show'?el.css({visibility:'visible'}):el.css({visibility:'visible'}).hide();if(o.callback)o.callback.apply(el[0]);el.dequeue();$('div.ui-effects-explode').remove();},o.duration||500);});};})(jQuery);(function($,undefined){$.effects.fade=function(o){return this.queue(function(){var elem=$(this),mode=$.effects.setMode(elem,o.options.mode||'hide');elem.animate({opacity:mode},{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){(o.callback&&o.callback.apply(this,arguments));elem.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.fold=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'hide');var size=o.options.size||15;var horizFirst=!(!o.options.horizFirst);var duration=o.duration?o.duration/2:$.fx.speeds._default/2;$.effects.save(el,props);el.show();var wrapper=$.effects.createWrapper(el).css({overflow:'hidden'});var widthFirst=((mode=='show')!=horizFirst);var ref=widthFirst?['width','height']:['height','width'];var distance=widthFirst?[wrapper.width(),wrapper.height()]:[wrapper.height(),wrapper.width()];var percent=/([0-9]+)%/.exec(size);if(percent)size=parseInt(percent[1],10)/100*distance[mode=='hide'?0:1];if(mode=='show')wrapper.css(horizFirst?{height:0,width:size}:{height:size,width:0});var animation1={},animation2={};animation1[ref[0]]=mode=='show'?distance[0]:size;animation2[ref[1]]=mode=='show'?distance[1]:0;wrapper.animate(animation1,duration,o.options.easing).animate(animation2,duration,o.options.easing,function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(el[0],arguments);el.dequeue();});});};})(jQuery);(function($,undefined){$.effects.highlight=function(o){return this.queue(function(){var elem=$(this),props=['backgroundImage','backgroundColor','opacity'],mode=$.effects.setMode(elem,o.options.mode||'show'),animation={backgroundColor:elem.css('backgroundColor')};if(mode=='hide'){animation.opacity=0;}
$.effects.save(elem,props);elem.show().css({backgroundImage:'none',backgroundColor:o.options.color||'#ffff99'}).animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){(mode=='hide'&&elem.hide());$.effects.restore(elem,props);(mode=='show'&&!$.support.opacity&&this.style.removeAttribute('filter'));(o.callback&&o.callback.apply(this,arguments));elem.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.pulsate=function(o){return this.queue(function(){var elem=$(this),mode=$.effects.setMode(elem,o.options.mode||'show');times=((o.options.times||5)*2)-1;duration=o.duration?o.duration/2:$.fx.speeds._default/2,isVisible=elem.is(':visible'),animateTo=0;if(!isVisible){elem.css('opacity',0).show();animateTo=1;}
if((mode=='hide'&&isVisible)||(mode=='show'&&!isVisible)){times--;}
for(var i=0;i<times;i++){elem.animate({opacity:animateTo},duration,o.options.easing);animateTo=(animateTo+1)%2;}
elem.animate({opacity:animateTo},duration,o.options.easing,function(){if(animateTo==0){elem.hide();}
(o.callback&&o.callback.apply(this,arguments));});elem.queue('fx',function(){elem.dequeue();}).dequeue();});};})(jQuery);(function($,undefined){$.effects.puff=function(o){return this.queue(function(){var elem=$(this),mode=$.effects.setMode(elem,o.options.mode||'hide'),percent=parseInt(o.options.percent,10)||150,factor=percent/100,original={height:elem.height(),width:elem.width()};$.extend(o.options,{fade:true,mode:mode,percent:mode=='hide'?percent:100,from:mode=='hide'?original:{height:original.height*factor,width:original.width*factor}});elem.effect('scale',o.options,o.duration,o.callback);elem.dequeue();});};$.effects.scale=function(o){return this.queue(function(){var el=$(this);var options=$.extend(true,{},o.options);var mode=$.effects.setMode(el,o.options.mode||'effect');var percent=parseInt(o.options.percent,10)||(parseInt(o.options.percent,10)==0?0:(mode=='hide'?0:100));var direction=o.options.direction||'both';var origin=o.options.origin;if(mode!='effect'){options.origin=origin||['middle','center'];options.restore=true;}
var original={height:el.height(),width:el.width()};el.from=o.options.from||(mode=='show'?{height:0,width:0}:original);var factor={y:direction!='horizontal'?(percent/100):1,x:direction!='vertical'?(percent/100):1};el.to={height:original.height*factor.y,width:original.width*factor.x};if(o.options.fade){if(mode=='show'){el.from.opacity=0;el.to.opacity=1;};if(mode=='hide'){el.from.opacity=1;el.to.opacity=0;};};options.from=el.from;options.to=el.to;options.mode=mode;el.effect('size',options,o.duration,o.callback);el.dequeue();});};$.effects.size=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right','width','height','overflow','opacity'];var props1=['position','top','bottom','left','right','overflow','opacity'];var props2=['width','height','overflow'];var cProps=['fontSize'];var vProps=['borderTopWidth','borderBottomWidth','paddingTop','paddingBottom'];var hProps=['borderLeftWidth','borderRightWidth','paddingLeft','paddingRight'];var mode=$.effects.setMode(el,o.options.mode||'effect');var restore=o.options.restore||false;var scale=o.options.scale||'both';var origin=o.options.origin;var original={height:el.height(),width:el.width()};el.from=o.options.from||original;el.to=o.options.to||original;if(origin){var baseline=$.effects.getBaseline(origin,original);el.from.top=(original.height-el.from.height)*baseline.y;el.from.left=(original.width-el.from.width)*baseline.x;el.to.top=(original.height-el.to.height)*baseline.y;el.to.left=(original.width-el.to.width)*baseline.x;};var factor={from:{y:el.from.height/original.height,x:el.from.width/original.width},to:{y:el.to.height/original.height,x:el.to.width/original.width}};if(scale=='box'||scale=='both'){if(factor.from.y!=factor.to.y){props=props.concat(vProps);el.from=$.effects.setTransition(el,vProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,vProps,factor.to.y,el.to);};if(factor.from.x!=factor.to.x){props=props.concat(hProps);el.from=$.effects.setTransition(el,hProps,factor.from.x,el.from);el.to=$.effects.setTransition(el,hProps,factor.to.x,el.to);};};if(scale=='content'||scale=='both'){if(factor.from.y!=factor.to.y){props=props.concat(cProps);el.from=$.effects.setTransition(el,cProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,cProps,factor.to.y,el.to);};};$.effects.save(el,restore?props:props1);el.show();$.effects.createWrapper(el);el.css('overflow','hidden').css(el.from);if(scale=='content'||scale=='both'){vProps=vProps.concat(['marginTop','marginBottom']).concat(cProps);hProps=hProps.concat(['marginLeft','marginRight']);props2=props.concat(vProps).concat(hProps);el.find("*[width]").each(function(){child=$(this);if(restore)$.effects.save(child,props2);var c_original={height:child.height(),width:child.width()};child.from={height:c_original.height*factor.from.y,width:c_original.width*factor.from.x};child.to={height:c_original.height*factor.to.y,width:c_original.width*factor.to.x};if(factor.from.y!=factor.to.y){child.from=$.effects.setTransition(child,vProps,factor.from.y,child.from);child.to=$.effects.setTransition(child,vProps,factor.to.y,child.to);};if(factor.from.x!=factor.to.x){child.from=$.effects.setTransition(child,hProps,factor.from.x,child.from);child.to=$.effects.setTransition(child,hProps,factor.to.x,child.to);};child.css(child.from);child.animate(child.to,o.duration,o.options.easing,function(){if(restore)$.effects.restore(child,props2);});});};el.animate(el.to,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){if(el.to.opacity===0){el.css('opacity',el.from.opacity);}
if(mode=='hide')el.hide();$.effects.restore(el,restore?props:props1);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);el.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.shake=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'effect');var direction=o.options.direction||'left';var distance=o.options.distance||20;var times=o.options.times||3;var speed=o.duration||o.options.duration||140;$.effects.save(el,props);el.show();$.effects.createWrapper(el);var ref=(direction=='up'||direction=='down')?'top':'left';var motion=(direction=='up'||direction=='left')?'pos':'neg';var animation={},animation1={},animation2={};animation[ref]=(motion=='pos'?'-=':'+=')+distance;animation1[ref]=(motion=='pos'?'+=':'-=')+distance*2;animation2[ref]=(motion=='pos'?'-=':'+=')+distance*2;el.animate(animation,speed,o.options.easing);for(var i=1;i<times;i++){el.animate(animation1,speed,o.options.easing).animate(animation2,speed,o.options.easing);};el.animate(animation1,speed,o.options.easing).animate(animation,speed/2,o.options.easing,function(){$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);});el.queue('fx',function(){el.dequeue();});el.dequeue();});};})(jQuery);(function($,undefined){$.effects.slide=function(o){return this.queue(function(){var el=$(this),props=['position','top','bottom','left','right'];var mode=$.effects.setMode(el,o.options.mode||'show');var direction=o.options.direction||'left';$.effects.save(el,props);el.show();$.effects.createWrapper(el).css({overflow:'hidden'});var ref=(direction=='up'||direction=='down')?'top':'left';var motion=(direction=='up'||direction=='left')?'pos':'neg';var distance=o.options.distance||(ref=='top'?el.outerHeight({margin:true}):el.outerWidth({margin:true}));if(mode=='show')el.css(ref,motion=='pos'?(isNaN(distance)?"-"+distance:-distance):distance);var animation={};animation[ref]=(mode=='show'?(motion=='pos'?'+=':'-='):(motion=='pos'?'-=':'+='))+distance;el.animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){if(mode=='hide')el.hide();$.effects.restore(el,props);$.effects.removeWrapper(el);if(o.callback)o.callback.apply(this,arguments);el.dequeue();}});});};})(jQuery);(function($,undefined){$.effects.transfer=function(o){return this.queue(function(){var elem=$(this),target=$(o.options.to),endPosition=target.offset(),animation={top:endPosition.top,left:endPosition.left,height:target.innerHeight(),width:target.innerWidth()},startPosition=elem.offset(),transfer=$('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(o.options.className).css({top:startPosition.top,left:startPosition.left,height:elem.innerHeight(),width:elem.innerWidth(),position:'absolute'}).animate(animation,o.duration,o.options.easing,function(){transfer.remove();(o.callback&&o.callback.apply(elem[0],arguments));elem.dequeue();});});};})(jQuery);


(function($,window,document){$.fn.dataTableSettings=[];var _aoSettings=$.fn.dataTableSettings;$.fn.dataTableExt={};var _oExt=$.fn.dataTableExt;_oExt.sVersion="1.7.6";_oExt.sErrMode="alert";_oExt.iApiIndex=0;_oExt.oApi={};_oExt.afnFiltering=[];_oExt.aoFeatures=[];_oExt.ofnSearch={};_oExt.afnSortData=[];_oExt.oStdClasses={"sPagePrevEnabled":"paginate_enabled_previous","sPagePrevDisabled":"paginate_disabled_previous","sPageNextEnabled":"paginate_enabled_next","sPageNextDisabled":"paginate_disabled_next","sPageJUINext":"","sPageJUIPrev":"","sPageButton":"paginate_button","sPageButtonActive":"paginate_active","sPageButtonStaticDisabled":"paginate_button","sPageFirst":"first","sPagePrevious":"previous","sPageNext":"next","sPageLast":"last","sStripOdd":"odd","sStripEven":"even","sRowEmpty":"dataTables_empty","sWrapper":"dataTables_wrapper","sFilter":"dataTables_filter","sInfo":"dataTables_info","sPaging":"dataTables_paginate paging_","sLength":"dataTables_length","sProcessing":"dataTables_processing","sSortAsc":"sorting_asc","sSortDesc":"sorting_desc","sSortable":"sorting","sSortableAsc":"sorting_asc_disabled","sSortableDesc":"sorting_desc_disabled","sSortableNone":"sorting_disabled","sSortColumn":"sorting_","sSortJUIAsc":"","sSortJUIDesc":"","sSortJUI":"","sSortJUIAscAllowed":"","sSortJUIDescAllowed":"","sSortJUIWrapper":"","sScrollWrapper":"dataTables_scroll","sScrollHead":"dataTables_scrollHead","sScrollHeadInner":"dataTables_scrollHeadInner","sScrollBody":"dataTables_scrollBody","sScrollFoot":"dataTables_scrollFoot","sScrollFootInner":"dataTables_scrollFootInner","sFooterTH":""};_oExt.oJUIClasses={"sPagePrevEnabled":"fg-button ui-button ui-state-default ui-corner-left","sPagePrevDisabled":"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled","sPageNextEnabled":"fg-button ui-button ui-state-default ui-corner-right","sPageNextDisabled":"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled","sPageJUINext":"ui-icon ui-icon-circle-arrow-e","sPageJUIPrev":"ui-icon ui-icon-circle-arrow-w","sPageButton":"fg-button ui-button ui-state-default","sPageButtonActive":"fg-button ui-button ui-state-default ui-state-disabled","sPageButtonStaticDisabled":"fg-button ui-button ui-state-default ui-state-disabled","sPageFirst":"first ui-corner-tl ui-corner-bl","sPagePrevious":"previous","sPageNext":"next","sPageLast":"last ui-corner-tr ui-corner-br","sStripOdd":"odd","sStripEven":"even","sRowEmpty":"dataTables_empty","sWrapper":"dataTables_wrapper","sFilter":"dataTables_filter","sInfo":"dataTables_info","sPaging":"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+"ui-buttonset-multi paging_","sLength":"dataTables_length","sProcessing":"dataTables_processing","sSortAsc":"ui-state-default","sSortDesc":"ui-state-default","sSortable":"ui-state-default","sSortableAsc":"ui-state-default","sSortableDesc":"ui-state-default","sSortableNone":"ui-state-default","sSortColumn":"sorting_","sSortJUIAsc":"css_right ui-icon ui-icon-triangle-1-n","sSortJUIDesc":"css_right ui-icon ui-icon-triangle-1-s","sSortJUI":"css_right ui-icon ui-icon-carat-2-n-s","sSortJUIAscAllowed":"css_right ui-icon ui-icon-carat-1-n","sSortJUIDescAllowed":"css_right ui-icon ui-icon-carat-1-s","sSortJUIWrapper":"DataTables_sort_wrapper","sScrollWrapper":"dataTables_scroll","sScrollHead":"dataTables_scrollHead ui-state-default","sScrollHeadInner":"dataTables_scrollHeadInner","sScrollBody":"dataTables_scrollBody","sScrollFoot":"dataTables_scrollFoot ui-state-default","sScrollFootInner":"dataTables_scrollFootInner","sFooterTH":"ui-state-default"};_oExt.oPagination={"two_button":{"fnInit":function(oSettings,nPaging,fnCallbackDraw)
{var nPrevious,nNext,nPreviousInner,nNextInner;if(!oSettings.bJUI)
{nPrevious=document.createElement('div');nNext=document.createElement('div');}
else
{nPrevious=document.createElement('a');nNext=document.createElement('a');nNextInner=document.createElement('span');nNextInner.className=oSettings.oClasses.sPageJUINext;nNext.appendChild(nNextInner);nPreviousInner=document.createElement('span');nPreviousInner.className=oSettings.oClasses.sPageJUIPrev;nPrevious.appendChild(nPreviousInner);}
nPrevious.className=oSettings.oClasses.sPagePrevDisabled;nNext.className=oSettings.oClasses.sPageNextDisabled;nPrevious.title=oSettings.oLanguage.oPaginate.sPrevious;nNext.title=oSettings.oLanguage.oPaginate.sNext;nPaging.appendChild(nPrevious);nPaging.appendChild(nNext);$(nPrevious).bind('click.DT',function(){if(oSettings.oApi._fnPageChange(oSettings,"previous"))
{fnCallbackDraw(oSettings);}});$(nNext).bind('click.DT',function(){if(oSettings.oApi._fnPageChange(oSettings,"next"))
{fnCallbackDraw(oSettings);}});$(nPrevious).bind('selectstart.DT',function(){return false;});$(nNext).bind('selectstart.DT',function(){return false;});if(oSettings.sTableId!==''&&typeof oSettings.aanFeatures.p=="undefined")
{nPaging.setAttribute('id',oSettings.sTableId+'_paginate');nPrevious.setAttribute('id',oSettings.sTableId+'_previous');nNext.setAttribute('id',oSettings.sTableId+'_next');}},"fnUpdate":function(oSettings,fnCallbackDraw)
{if(!oSettings.aanFeatures.p)
{return;}
var an=oSettings.aanFeatures.p;for(var i=0,iLen=an.length;i<iLen;i++)
{if(an[i].childNodes.length!==0)
{an[i].childNodes[0].className=(oSettings._iDisplayStart===0)?oSettings.oClasses.sPagePrevDisabled:oSettings.oClasses.sPagePrevEnabled;an[i].childNodes[1].className=(oSettings.fnDisplayEnd()==oSettings.fnRecordsDisplay())?oSettings.oClasses.sPageNextDisabled:oSettings.oClasses.sPageNextEnabled;}}}},"iFullNumbersShowPages":5,"full_numbers":{"fnInit":function(oSettings,nPaging,fnCallbackDraw)
{var nFirst=document.createElement('span');var nPrevious=document.createElement('span');var nList=document.createElement('span');var nNext=document.createElement('span');var nLast=document.createElement('span');nFirst.innerHTML=oSettings.oLanguage.oPaginate.sFirst;nPrevious.innerHTML=oSettings.oLanguage.oPaginate.sPrevious;nNext.innerHTML=oSettings.oLanguage.oPaginate.sNext;nLast.innerHTML=oSettings.oLanguage.oPaginate.sLast;var oClasses=oSettings.oClasses;nFirst.className=oClasses.sPageButton+" "+oClasses.sPageFirst;nPrevious.className=oClasses.sPageButton+" "+oClasses.sPagePrevious;nNext.className=oClasses.sPageButton+" "+oClasses.sPageNext;nLast.className=oClasses.sPageButton+" "+oClasses.sPageLast;nPaging.appendChild(nFirst);nPaging.appendChild(nPrevious);nPaging.appendChild(nList);nPaging.appendChild(nNext);nPaging.appendChild(nLast);$(nFirst).bind('click.DT',function(){if(oSettings.oApi._fnPageChange(oSettings,"first"))
{fnCallbackDraw(oSettings);}});$(nPrevious).bind('click.DT',function(){if(oSettings.oApi._fnPageChange(oSettings,"previous"))
{fnCallbackDraw(oSettings);}});$(nNext).bind('click.DT',function(){if(oSettings.oApi._fnPageChange(oSettings,"next"))
{fnCallbackDraw(oSettings);}});$(nLast).bind('click.DT',function(){if(oSettings.oApi._fnPageChange(oSettings,"last"))
{fnCallbackDraw(oSettings);}});$('span',nPaging).bind('mousedown.DT',function(){return false;}).bind('selectstart.DT',function(){return false;});if(oSettings.sTableId!==''&&typeof oSettings.aanFeatures.p=="undefined")
{nPaging.setAttribute('id',oSettings.sTableId+'_paginate');nFirst.setAttribute('id',oSettings.sTableId+'_first');nPrevious.setAttribute('id',oSettings.sTableId+'_previous');nNext.setAttribute('id',oSettings.sTableId+'_next');nLast.setAttribute('id',oSettings.sTableId+'_last');}},"fnUpdate":function(oSettings,fnCallbackDraw)
{if(!oSettings.aanFeatures.p)
{return;}
var iPageCount=_oExt.oPagination.iFullNumbersShowPages;var iPageCountHalf=Math.floor(iPageCount/2);var iPages=Math.ceil((oSettings.fnRecordsDisplay())/oSettings._iDisplayLength);var iCurrentPage=Math.ceil(oSettings._iDisplayStart/oSettings._iDisplayLength)+1;var sList="";var iStartButton,iEndButton,i,iLen;var oClasses=oSettings.oClasses;if(iPages<iPageCount)
{iStartButton=1;iEndButton=iPages;}
else
{if(iCurrentPage<=iPageCountHalf)
{iStartButton=1;iEndButton=iPageCount;}
else
{if(iCurrentPage>=(iPages-iPageCountHalf))
{iStartButton=iPages-iPageCount+1;iEndButton=iPages;}
else
{iStartButton=iCurrentPage-Math.ceil(iPageCount/2)+1;iEndButton=iStartButton+iPageCount-1;}}}
for(i=iStartButton;i<=iEndButton;i++)
{if(iCurrentPage!=i)
{sList+='<span class="'+oClasses.sPageButton+'">'+i+'</span>';}
else
{sList+='<span class="'+oClasses.sPageButtonActive+'">'+i+'</span>';}}
var an=oSettings.aanFeatures.p;var anButtons,anStatic,nPaginateList;var fnClick=function(){var iTarget=(this.innerHTML*1)-1;oSettings._iDisplayStart=iTarget*oSettings._iDisplayLength;fnCallbackDraw(oSettings);return false;};var fnFalse=function(){return false;};for(i=0,iLen=an.length;i<iLen;i++)
{if(an[i].childNodes.length===0)
{continue;}
var qjPaginateList=$('span:eq(2)',an[i]);qjPaginateList.html(sList);$('span',qjPaginateList).bind('click.DT',fnClick).bind('mousedown.DT',fnFalse).bind('selectstart.DT',fnFalse);anButtons=an[i].getElementsByTagName('span');anStatic=[anButtons[0],anButtons[1],anButtons[anButtons.length-2],anButtons[anButtons.length-1]];$(anStatic).removeClass(oClasses.sPageButton+" "+oClasses.sPageButtonActive+" "+oClasses.sPageButtonStaticDisabled);if(iCurrentPage==1)
{anStatic[0].className+=" "+oClasses.sPageButtonStaticDisabled;anStatic[1].className+=" "+oClasses.sPageButtonStaticDisabled;}
else
{anStatic[0].className+=" "+oClasses.sPageButton;anStatic[1].className+=" "+oClasses.sPageButton;}
if(iPages===0||iCurrentPage==iPages||oSettings._iDisplayLength==-1)
{anStatic[2].className+=" "+oClasses.sPageButtonStaticDisabled;anStatic[3].className+=" "+oClasses.sPageButtonStaticDisabled;}
else
{anStatic[2].className+=" "+oClasses.sPageButton;anStatic[3].className+=" "+oClasses.sPageButton;}}}}};_oExt.oSort={"string-asc":function(a,b)
{var x=a.toLowerCase();var y=b.toLowerCase();return((x<y)?-1:((x>y)?1:0));},"string-desc":function(a,b)
{var x=a.toLowerCase();var y=b.toLowerCase();return((x<y)?1:((x>y)?-1:0));},"html-asc":function(a,b)
{var x=a.replace(/<.*?>/g,"").toLowerCase();var y=b.replace(/<.*?>/g,"").toLowerCase();return((x<y)?-1:((x>y)?1:0));},"html-desc":function(a,b)
{var x=a.replace(/<.*?>/g,"").toLowerCase();var y=b.replace(/<.*?>/g,"").toLowerCase();return((x<y)?1:((x>y)?-1:0));},"date-asc":function(a,b)
{var x=Date.parse(a);var y=Date.parse(b);if(isNaN(x)||x==="")
{x=Date.parse("01/01/1970 00:00:00");}
if(isNaN(y)||y==="")
{y=Date.parse("01/01/1970 00:00:00");}
return x-y;},"date-desc":function(a,b)
{var x=Date.parse(a);var y=Date.parse(b);if(isNaN(x)||x==="")
{x=Date.parse("01/01/1970 00:00:00");}
if(isNaN(y)||y==="")
{y=Date.parse("01/01/1970 00:00:00");}
return y-x;},"numeric-asc":function(a,b)
{var x=(a=="-"||a==="")?0:a*1;var y=(b=="-"||b==="")?0:b*1;return x-y;},"numeric-desc":function(a,b)
{var x=(a=="-"||a==="")?0:a*1;var y=(b=="-"||b==="")?0:b*1;return y-x;}};_oExt.aTypes=[function(sData)
{if(sData.length===0)
{return'numeric';}
var sValidFirstChars="0123456789-";var sValidChars="0123456789.";var Char;var bDecimal=false;Char=sData.charAt(0);if(sValidFirstChars.indexOf(Char)==-1)
{return null;}
for(var i=1;i<sData.length;i++)
{Char=sData.charAt(i);if(sValidChars.indexOf(Char)==-1)
{return null;}
if(Char==".")
{if(bDecimal)
{return null;}
bDecimal=true;}}
return'numeric';},function(sData)
{var iParse=Date.parse(sData);if((iParse!==null&&!isNaN(iParse))||sData.length===0)
{return'date';}
return null;},function(sData)
{if(sData.indexOf('<')!=-1&&sData.indexOf('>')!=-1)
{return'html';}
return null;}];_oExt.fnVersionCheck=function(sVersion)
{var fnZPad=function(Zpad,count)
{while(Zpad.length<count){Zpad+='0';}
return Zpad;};var aThis=_oExt.sVersion.split('.');var aThat=sVersion.split('.');var sThis='',sThat='';for(var i=0,iLen=aThat.length;i<iLen;i++)
{sThis+=fnZPad(aThis[i],3);sThat+=fnZPad(aThat[i],3);}
return parseInt(sThis,10)>=parseInt(sThat,10);};_oExt._oExternConfig={"iNextUnique":0};$.fn.dataTable=function(oInit)
{function classSettings()
{this.fnRecordsTotal=function()
{if(this.oFeatures.bServerSide){return parseInt(this._iRecordsTotal,10);}else{return this.aiDisplayMaster.length;}};this.fnRecordsDisplay=function()
{if(this.oFeatures.bServerSide){return parseInt(this._iRecordsDisplay,10);}else{return this.aiDisplay.length;}};this.fnDisplayEnd=function()
{if(this.oFeatures.bServerSide){if(this.oFeatures.bPaginate===false||this._iDisplayLength==-1){return this._iDisplayStart+this.aiDisplay.length;}else{return Math.min(this._iDisplayStart+this._iDisplayLength,this._iRecordsDisplay);}}else{return this._iDisplayEnd;}};this.oInstance=null;this.sInstance=null;this.oFeatures={"bPaginate":true,"bLengthChange":true,"bFilter":true,"bSort":true,"bInfo":true,"bAutoWidth":true,"bProcessing":false,"bSortClasses":true,"bStateSave":false,"bServerSide":false};this.oScroll={"sX":"","sXInner":"","sY":"","bCollapse":false,"bInfinite":false,"iLoadGap":100,"iBarWidth":0,"bAutoCss":true};this.aanFeatures=[];this.oLanguage={"sProcessing":"Processing...","sLengthMenu":"Show _MENU_ entries","sZeroRecords":"No matching records found","sEmptyTable":"No data available in table","sInfo":"Showing _START_ to _END_ of _TOTAL_ entries","sInfoEmpty":"Showing 0 to 0 of 0 entries","sInfoFiltered":"(filtered from _MAX_ total entries)","sInfoPostFix":"","sSearch":"Search:","sUrl":"","oPaginate":{"sFirst":"First","sPrevious":"Previous","sNext":"Next","sLast":"Last"},"fnInfoCallback":null};this.aoData=[];this.aiDisplay=[];this.aiDisplayMaster=[];this.aoColumns=[];this.iNextId=0;this.asDataSearch=[];this.oPreviousSearch={"sSearch":"","bRegex":false,"bSmart":true};this.aoPreSearchCols=[];this.aaSorting=[[0,'asc',0]];this.aaSortingFixed=null;this.asStripClasses=[];this.asDestoryStrips=[];this.sDestroyWidth=0;this.fnRowCallback=null;this.fnHeaderCallback=null;this.fnFooterCallback=null;this.aoDrawCallback=[];this.fnInitComplete=null;this.sTableId="";this.nTable=null;this.nTHead=null;this.nTFoot=null;this.nTBody=null;this.nTableWrapper=null;this.bInitialised=false;this.aoOpenRows=[];this.sDom='lfrtip';this.sPaginationType="two_button";this.iCookieDuration=60*60*2;this.sCookiePrefix="SpryMedia_DataTables_";this.fnCookieCallback=null;this.aoStateSave=[];this.aoStateLoad=[];this.oLoadedState=null;this.sAjaxSource=null;this.bAjaxDataGet=true;this.fnServerData=function(url,data,callback){$.ajax({"url":url,"data":data,"success":callback,"dataType":"json","cache":false,"error":function(xhr,error,thrown){if(error=="parsererror"){alert("DataTables warning: JSON data from server could not be parsed. "+"This is caused by a JSON formatting error.");}}});};this.fnFormatNumber=function(iIn)
{if(iIn<1000)
{return iIn;}
else
{var s=(iIn+""),a=s.split(""),out="",iLen=s.length;for(var i=0;i<iLen;i++)
{if(i%3===0&&i!==0)
{out=','+out;}
out=a[iLen-i-1]+out;}}
return out;};this.aLengthMenu=[10,25,50,100];this.iDraw=0;this.bDrawing=0;this.iDrawError=-1;this._iDisplayLength=10;this._iDisplayStart=0;this._iDisplayEnd=10;this._iRecordsTotal=0;this._iRecordsDisplay=0;this.bJUI=false;this.oClasses=_oExt.oStdClasses;this.bFiltered=false;this.bSorted=false;this.oInit=null;}
this.oApi={};this.fnDraw=function(bComplete)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(typeof bComplete!='undefined'&&bComplete===false)
{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
else
{_fnReDraw(oSettings);}};this.fnFilter=function(sInput,iColumn,bRegex,bSmart,bShowGlobal)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(!oSettings.oFeatures.bFilter)
{return;}
if(typeof bRegex=='undefined')
{bRegex=false;}
if(typeof bSmart=='undefined')
{bSmart=true;}
if(typeof bShowGlobal=='undefined')
{bShowGlobal=true;}
if(typeof iColumn=="undefined"||iColumn===null)
{_fnFilterComplete(oSettings,{"sSearch":sInput,"bRegex":bRegex,"bSmart":bSmart},1);if(bShowGlobal&&typeof oSettings.aanFeatures.f!='undefined')
{var n=oSettings.aanFeatures.f;for(var i=0,iLen=n.length;i<iLen;i++)
{$('input',n[i]).val(sInput);}}}
else
{oSettings.aoPreSearchCols[iColumn].sSearch=sInput;oSettings.aoPreSearchCols[iColumn].bRegex=bRegex;oSettings.aoPreSearchCols[iColumn].bSmart=bSmart;_fnFilterComplete(oSettings,oSettings.oPreviousSearch,1);}};this.fnSettings=function(nNode)
{return _fnSettingsFromNode(this[_oExt.iApiIndex]);};this.fnVersionCheck=_oExt.fnVersionCheck;this.fnSort=function(aaSort)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);oSettings.aaSorting=aaSort;_fnSort(oSettings);};this.fnSortListener=function(nNode,iColumn,fnCallback)
{_fnSortAttachListener(_fnSettingsFromNode(this[_oExt.iApiIndex]),nNode,iColumn,fnCallback);};this.fnAddData=function(mData,bRedraw)
{if(mData.length===0)
{return[];}
var aiReturn=[];var iTest;var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(typeof mData[0]=="object")
{for(var i=0;i<mData.length;i++)
{iTest=_fnAddData(oSettings,mData[i]);if(iTest==-1)
{return aiReturn;}
aiReturn.push(iTest);}}
else
{iTest=_fnAddData(oSettings,mData);if(iTest==-1)
{return aiReturn;}
aiReturn.push(iTest);}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();if(typeof bRedraw=='undefined'||bRedraw)
{_fnReDraw(oSettings);}
return aiReturn;};this.fnDeleteRow=function(mTarget,fnCallBack,bRedraw)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);var i,iAODataIndex;iAODataIndex=(typeof mTarget=='object')?_fnNodeToDataIndex(oSettings,mTarget):mTarget;var oData=oSettings.aoData.splice(iAODataIndex,1);var iDisplayIndex=$.inArray(iAODataIndex,oSettings.aiDisplay);oSettings.asDataSearch.splice(iDisplayIndex,1);_fnDeleteIndex(oSettings.aiDisplayMaster,iAODataIndex);_fnDeleteIndex(oSettings.aiDisplay,iAODataIndex);if(typeof fnCallBack=="function")
{fnCallBack.call(this,oSettings,oData);}
if(oSettings._iDisplayStart>=oSettings.aiDisplay.length)
{oSettings._iDisplayStart-=oSettings._iDisplayLength;if(oSettings._iDisplayStart<0)
{oSettings._iDisplayStart=0;}}
if(typeof bRedraw=='undefined'||bRedraw)
{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
return oData;};this.fnClearTable=function(bRedraw)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);_fnClearTable(oSettings);if(typeof bRedraw=='undefined'||bRedraw)
{_fnDraw(oSettings);}};this.fnOpen=function(nTr,sHtml,sClass)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);this.fnClose(nTr);var nNewRow=document.createElement("tr");var nNewCell=document.createElement("td");nNewRow.appendChild(nNewCell);nNewCell.className=sClass;nNewCell.colSpan=_fnVisbleColumns(oSettings);nNewCell.innerHTML=sHtml;var nTrs=$('tr',oSettings.nTBody);if($.inArray(nTr,nTrs)!=-1)
{$(nNewRow).insertAfter(nTr);}
oSettings.aoOpenRows.push({"nTr":nNewRow,"nParent":nTr});return nNewRow;};this.fnClose=function(nTr)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);for(var i=0;i<oSettings.aoOpenRows.length;i++)
{if(oSettings.aoOpenRows[i].nParent==nTr)
{var nTrParent=oSettings.aoOpenRows[i].nTr.parentNode;if(nTrParent)
{nTrParent.removeChild(oSettings.aoOpenRows[i].nTr);}
oSettings.aoOpenRows.splice(i,1);return 0;}}
return 1;};this.fnGetData=function(mRow)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(typeof mRow!='undefined')
{var iRow=(typeof mRow=='object')?_fnNodeToDataIndex(oSettings,mRow):mRow;return((aRowData=oSettings.aoData[iRow])?aRowData._aData:null);}
return _fnGetDataMaster(oSettings);};this.fnGetNodes=function(iRow)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(typeof iRow!='undefined')
{return((aRowData=oSettings.aoData[iRow])?aRowData.nTr:null);}
return _fnGetTrNodes(oSettings);};this.fnGetPosition=function(nNode)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);var i;if(nNode.nodeName.toUpperCase()=="TR")
{return _fnNodeToDataIndex(oSettings,nNode);}
else if(nNode.nodeName.toUpperCase()=="TD")
{var iDataIndex=_fnNodeToDataIndex(oSettings,nNode.parentNode);var iCorrector=0;for(var j=0;j<oSettings.aoColumns.length;j++)
{if(oSettings.aoColumns[j].bVisible)
{if(oSettings.aoData[iDataIndex].nTr.getElementsByTagName('td')[j-iCorrector]==nNode)
{return[iDataIndex,j-iCorrector,j];}}
else
{iCorrector++;}}}
return null;};this.fnUpdate=function(mData,mRow,iColumn,bRedraw,bAction)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);var iVisibleColumn;var sDisplay;var iRow=(typeof mRow=='object')?_fnNodeToDataIndex(oSettings,mRow):mRow;if(typeof mData!='object')
{sDisplay=mData;oSettings.aoData[iRow]._aData[iColumn]=sDisplay;if(oSettings.aoColumns[iColumn].fnRender!==null)
{sDisplay=oSettings.aoColumns[iColumn].fnRender({"iDataRow":iRow,"iDataColumn":iColumn,"aData":oSettings.aoData[iRow]._aData,"oSettings":oSettings});if(oSettings.aoColumns[iColumn].bUseRendered)
{oSettings.aoData[iRow]._aData[iColumn]=sDisplay;}}
iVisibleColumn=_fnColumnIndexToVisible(oSettings,iColumn);if(iVisibleColumn!==null)
{oSettings.aoData[iRow].nTr.getElementsByTagName('td')[iVisibleColumn].innerHTML=sDisplay;}
else
{oSettings.aoData[iRow]._anHidden[iColumn].innerHTML=sDisplay;}}
else
{if(mData.length!=oSettings.aoColumns.length)
{_fnLog(oSettings,0,'An array passed to fnUpdate must have the same number of '+'columns as the table in question - in this case '+oSettings.aoColumns.length);return 1;}
for(var i=0;i<mData.length;i++)
{sDisplay=mData[i];oSettings.aoData[iRow]._aData[i]=sDisplay;if(oSettings.aoColumns[i].fnRender!==null)
{sDisplay=oSettings.aoColumns[i].fnRender({"iDataRow":iRow,"iDataColumn":i,"aData":oSettings.aoData[iRow]._aData,"oSettings":oSettings});if(oSettings.aoColumns[i].bUseRendered)
{oSettings.aoData[iRow]._aData[i]=sDisplay;}}
iVisibleColumn=_fnColumnIndexToVisible(oSettings,i);if(iVisibleColumn!==null)
{oSettings.aoData[iRow].nTr.getElementsByTagName('td')[iVisibleColumn].innerHTML=sDisplay;}
else
{oSettings.aoData[iRow]._anHidden[i].innerHTML=sDisplay;}}}
var iDisplayIndex=$.inArray(iRow,oSettings.aiDisplay);oSettings.asDataSearch[iDisplayIndex]=_fnBuildSearchRow(oSettings,oSettings.aoData[iRow]._aData);if(typeof bAction=='undefined'||bAction)
{_fnAjustColumnSizing(oSettings);}
if(typeof bRedraw=='undefined'||bRedraw)
{_fnReDraw(oSettings);}
return 0;};this.fnSetColumnVis=function(iCol,bShow,bRedraw)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);var i,iLen;var iColumns=oSettings.aoColumns.length;var nTd,anTds,nCell,anTrs,jqChildren;if(oSettings.aoColumns[iCol].bVisible==bShow)
{return;}
var nTrHead=$('>tr',oSettings.nTHead)[0];var nTrFoot=$('>tr',oSettings.nTFoot)[0];var anTheadTh=[];var anTfootTh=[];for(i=0;i<iColumns;i++)
{anTheadTh.push(oSettings.aoColumns[i].nTh);anTfootTh.push(oSettings.aoColumns[i].nTf);}
if(bShow)
{var iInsert=0;for(i=0;i<iCol;i++)
{if(oSettings.aoColumns[i].bVisible)
{iInsert++;}}
if(iInsert>=_fnVisbleColumns(oSettings))
{nTrHead.appendChild(anTheadTh[iCol]);anTrs=$('>tr',oSettings.nTHead);for(i=1,iLen=anTrs.length;i<iLen;i++)
{anTrs[i].appendChild(oSettings.aoColumns[iCol].anThExtra[i-1]);}
if(nTrFoot)
{nTrFoot.appendChild(anTfootTh[iCol]);anTrs=$('>tr',oSettings.nTFoot);for(i=1,iLen=anTrs.length;i<iLen;i++)
{anTrs[i].appendChild(oSettings.aoColumns[iCol].anTfExtra[i-1]);}}
for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{nTd=oSettings.aoData[i]._anHidden[iCol];oSettings.aoData[i].nTr.appendChild(nTd);}}
else
{var iBefore;for(i=iCol;i<iColumns;i++)
{iBefore=_fnColumnIndexToVisible(oSettings,i);if(iBefore!==null)
{break;}}
nTrHead.insertBefore(anTheadTh[iCol],nTrHead.getElementsByTagName('th')[iBefore]);anTrs=$('>tr',oSettings.nTHead);for(i=1,iLen=anTrs.length;i<iLen;i++)
{jqChildren=$(anTrs[i]).children();anTrs[i].insertBefore(oSettings.aoColumns[iCol].anThExtra[i-1],jqChildren[iBefore]);}
if(nTrFoot)
{nTrFoot.insertBefore(anTfootTh[iCol],nTrFoot.getElementsByTagName('th')[iBefore]);anTrs=$('>tr',oSettings.nTFoot);for(i=1,iLen=anTrs.length;i<iLen;i++)
{jqChildren=$(anTrs[i]).children();anTrs[i].insertBefore(oSettings.aoColumns[iCol].anTfExtra[i-1],jqChildren[iBefore]);}}
anTds=_fnGetTdNodes(oSettings);for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{nTd=oSettings.aoData[i]._anHidden[iCol];oSettings.aoData[i].nTr.insertBefore(nTd,$('>td:eq('+iBefore+')',oSettings.aoData[i].nTr)[0]);}}
oSettings.aoColumns[iCol].bVisible=true;}
else
{nTrHead.removeChild(anTheadTh[iCol]);for(i=0,iLen=oSettings.aoColumns[iCol].anThExtra.length;i<iLen;i++)
{nCell=oSettings.aoColumns[iCol].anThExtra[i];nCell.parentNode.removeChild(nCell);}
if(nTrFoot)
{nTrFoot.removeChild(anTfootTh[iCol]);for(i=0,iLen=oSettings.aoColumns[iCol].anTfExtra.length;i<iLen;i++)
{nCell=oSettings.aoColumns[iCol].anTfExtra[i];nCell.parentNode.removeChild(nCell);}}
anTds=_fnGetTdNodes(oSettings);for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{nTd=anTds[(i*oSettings.aoColumns.length)+(iCol*1)];oSettings.aoData[i]._anHidden[iCol]=nTd;nTd.parentNode.removeChild(nTd);}
oSettings.aoColumns[iCol].bVisible=false;}
for(i=0,iLen=oSettings.aoOpenRows.length;i<iLen;i++)
{oSettings.aoOpenRows[i].nTr.colSpan=_fnVisbleColumns(oSettings);}
if(typeof bRedraw=='undefined'||bRedraw)
{_fnAjustColumnSizing(oSettings);_fnDraw(oSettings);}
_fnSaveState(oSettings);};this.fnPageChange=function(sAction,bRedraw)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);_fnPageChange(oSettings,sAction);_fnCalculateEnd(oSettings);if(typeof bRedraw=='undefined'||bRedraw)
{_fnDraw(oSettings);}};this.fnDestroy=function()
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);var nOrig=oSettings.nTableWrapper.parentNode;var nBody=oSettings.nTBody;var i,iLen;oSettings.bDestroying=true;$(oSettings.nTableWrapper).find('*').andSelf().unbind('.DT');for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(oSettings.aoColumns[i].bVisible===false)
{this.fnSetColumnVis(i,true);}}
$('tbody>tr>td.'+oSettings.oClasses.sRowEmpty,oSettings.nTable).parent().remove();if(oSettings.nTable!=oSettings.nTHead.parentNode)
{$('>thead',oSettings.nTable).remove();oSettings.nTable.appendChild(oSettings.nTHead);}
if(oSettings.nTFoot&&oSettings.nTable!=oSettings.nTFoot.parentNode)
{$('>tfoot',oSettings.nTable).remove();oSettings.nTable.appendChild(oSettings.nTFoot);}
oSettings.nTable.parentNode.removeChild(oSettings.nTable);$(oSettings.nTableWrapper).remove();oSettings.aaSorting=[];oSettings.aaSortingFixed=[];_fnSortingClasses(oSettings);$(_fnGetTrNodes(oSettings)).removeClass(oSettings.asStripClasses.join(' '));if(!oSettings.bJUI)
{$('th',oSettings.nTHead).removeClass([_oExt.oStdClasses.sSortable,_oExt.oStdClasses.sSortableAsc,_oExt.oStdClasses.sSortableDesc,_oExt.oStdClasses.sSortableNone].join(' '));}
else
{$('th',oSettings.nTHead).removeClass([_oExt.oStdClasses.sSortable,_oExt.oJUIClasses.sSortableAsc,_oExt.oJUIClasses.sSortableDesc,_oExt.oJUIClasses.sSortableNone].join(' '));$('th span',oSettings.nTHead).remove();}
nOrig.appendChild(oSettings.nTable);for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{nBody.appendChild(oSettings.aoData[i].nTr);}
oSettings.nTable.style.width=_fnStringToCss(oSettings.sDestroyWidth);$('>tr:even',nBody).addClass(oSettings.asDestoryStrips[0]);$('>tr:odd',nBody).addClass(oSettings.asDestoryStrips[1]);for(i=0,iLen=_aoSettings.length;i<iLen;i++)
{if(_aoSettings[i]==oSettings)
{_aoSettings.splice(i,1);}}
oSettings=null;};this.fnAdjustColumnSizing=function(bRedraw)
{var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);_fnAjustColumnSizing(oSettings);if(typeof bRedraw=='undefined'||bRedraw)
{this.fnDraw(false);}
else if(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")
{this.oApi._fnScrollDraw(oSettings);}};function _fnExternApiFunc(sFunc)
{return function(){var aArgs=[_fnSettingsFromNode(this[_oExt.iApiIndex])].concat(Array.prototype.slice.call(arguments));return _oExt.oApi[sFunc].apply(this,aArgs);};}
for(var sFunc in _oExt.oApi)
{if(sFunc)
{this[sFunc]=_fnExternApiFunc(sFunc);}}
function _fnInitalise(oSettings)
{var i,iLen;if(oSettings.bInitialised===false)
{setTimeout(function(){_fnInitalise(oSettings);},200);return;}
_fnAddOptionsHtml(oSettings);_fnDrawHead(oSettings);_fnProcessingDisplay(oSettings,true);if(oSettings.oFeatures.bAutoWidth)
{_fnCalculateColumnWidths(oSettings);}
for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(oSettings.aoColumns[i].sWidth!==null)
{oSettings.aoColumns[i].nTh.style.width=_fnStringToCss(oSettings.aoColumns[i].sWidth);}}
if(oSettings.oFeatures.bSort)
{_fnSort(oSettings);}
else
{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
if(oSettings.sAjaxSource!==null&&!oSettings.oFeatures.bServerSide)
{oSettings.fnServerData.call(oSettings.oInstance,oSettings.sAjaxSource,[],function(json){for(i=0;i<json.aaData.length;i++)
{_fnAddData(oSettings,json.aaData[i]);}
oSettings.iInitDisplayStart=oSettings._iDisplayStart;if(oSettings.oFeatures.bSort)
{_fnSort(oSettings);}
else
{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
_fnProcessingDisplay(oSettings,false);_fnInitComplete(oSettings,json);});return;}
if(!oSettings.oFeatures.bServerSide)
{_fnProcessingDisplay(oSettings,false);_fnInitComplete(oSettings);}}
function _fnInitComplete(oSettings,json)
{oSettings._bInitComplete=true;if(typeof oSettings.fnInitComplete=='function')
{if(typeof json!='undefined')
{oSettings.fnInitComplete.call(oSettings.oInstance,oSettings,json);}
else
{oSettings.fnInitComplete.call(oSettings.oInstance,oSettings);}}}
function _fnLanguageProcess(oSettings,oLanguage,bInit)
{_fnMap(oSettings.oLanguage,oLanguage,'sProcessing');_fnMap(oSettings.oLanguage,oLanguage,'sLengthMenu');_fnMap(oSettings.oLanguage,oLanguage,'sEmptyTable');_fnMap(oSettings.oLanguage,oLanguage,'sZeroRecords');_fnMap(oSettings.oLanguage,oLanguage,'sInfo');_fnMap(oSettings.oLanguage,oLanguage,'sInfoEmpty');_fnMap(oSettings.oLanguage,oLanguage,'sInfoFiltered');_fnMap(oSettings.oLanguage,oLanguage,'sInfoPostFix');_fnMap(oSettings.oLanguage,oLanguage,'sSearch');if(typeof oLanguage.oPaginate!='undefined')
{_fnMap(oSettings.oLanguage.oPaginate,oLanguage.oPaginate,'sFirst');_fnMap(oSettings.oLanguage.oPaginate,oLanguage.oPaginate,'sPrevious');_fnMap(oSettings.oLanguage.oPaginate,oLanguage.oPaginate,'sNext');_fnMap(oSettings.oLanguage.oPaginate,oLanguage.oPaginate,'sLast');}
if(typeof oLanguage.sEmptyTable=='undefined'&&typeof oLanguage.sZeroRecords!='undefined')
{_fnMap(oSettings.oLanguage,oLanguage,'sZeroRecords','sEmptyTable');}
if(bInit)
{_fnInitalise(oSettings);}}
function _fnAddColumn(oSettings,nTh)
{oSettings.aoColumns[oSettings.aoColumns.length++]={"sType":null,"_bAutoType":true,"bVisible":true,"bSearchable":true,"bSortable":true,"asSorting":['asc','desc'],"sSortingClass":oSettings.oClasses.sSortable,"sSortingClassJUI":oSettings.oClasses.sSortJUI,"sTitle":nTh?nTh.innerHTML:'',"sName":'',"sWidth":null,"sWidthOrig":null,"sClass":null,"fnRender":null,"bUseRendered":true,"iDataSort":oSettings.aoColumns.length-1,"sSortDataType":'std',"nTh":nTh?nTh:document.createElement('th'),"nTf":null,"anThExtra":[],"anTfExtra":[]};var iCol=oSettings.aoColumns.length-1;var oCol=oSettings.aoColumns[iCol];if(typeof oSettings.aoPreSearchCols[iCol]=='undefined'||oSettings.aoPreSearchCols[iCol]===null)
{oSettings.aoPreSearchCols[iCol]={"sSearch":"","bRegex":false,"bSmart":true};}
else
{if(typeof oSettings.aoPreSearchCols[iCol].bRegex=='undefined')
{oSettings.aoPreSearchCols[iCol].bRegex=true;}
if(typeof oSettings.aoPreSearchCols[iCol].bSmart=='undefined')
{oSettings.aoPreSearchCols[iCol].bSmart=true;}}
_fnColumnOptions(oSettings,iCol,null);}
function _fnColumnOptions(oSettings,iCol,oOptions)
{var oCol=oSettings.aoColumns[iCol];if(typeof oOptions!='undefined'&&oOptions!==null)
{if(typeof oOptions.sType!='undefined')
{oCol.sType=oOptions.sType;oCol._bAutoType=false;}
_fnMap(oCol,oOptions,"bVisible");_fnMap(oCol,oOptions,"bSearchable");_fnMap(oCol,oOptions,"bSortable");_fnMap(oCol,oOptions,"sTitle");_fnMap(oCol,oOptions,"sName");_fnMap(oCol,oOptions,"sWidth");_fnMap(oCol,oOptions,"sWidth","sWidthOrig");_fnMap(oCol,oOptions,"sClass");_fnMap(oCol,oOptions,"fnRender");_fnMap(oCol,oOptions,"bUseRendered");_fnMap(oCol,oOptions,"iDataSort");_fnMap(oCol,oOptions,"asSorting");_fnMap(oCol,oOptions,"sSortDataType");}
if(!oSettings.oFeatures.bSort)
{oCol.bSortable=false;}
if(!oCol.bSortable||($.inArray('asc',oCol.asSorting)==-1&&$.inArray('desc',oCol.asSorting)==-1))
{oCol.sSortingClass=oSettings.oClasses.sSortableNone;oCol.sSortingClassJUI="";}
else if($.inArray('asc',oCol.asSorting)!=-1&&$.inArray('desc',oCol.asSorting)==-1)
{oCol.sSortingClass=oSettings.oClasses.sSortableAsc;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUIAscAllowed;}
else if($.inArray('asc',oCol.asSorting)==-1&&$.inArray('desc',oCol.asSorting)!=-1)
{oCol.sSortingClass=oSettings.oClasses.sSortableDesc;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUIDescAllowed;}}
function _fnAddData(oSettings,aDataSupplied)
{if(aDataSupplied.length!=oSettings.aoColumns.length&&oSettings.iDrawError!=oSettings.iDraw)
{_fnLog(oSettings,0,"Added data (size "+aDataSupplied.length+") does not match known "+"number of columns ("+oSettings.aoColumns.length+")");oSettings.iDrawError=oSettings.iDraw;return-1;}
var aData=aDataSupplied.slice();var iThisIndex=oSettings.aoData.length;oSettings.aoData.push({"nTr":document.createElement('tr'),"_iId":oSettings.iNextId++,"_aData":aData,"_anHidden":[],"_sRowStripe":''});var nTd,sThisType;for(var i=0;i<aData.length;i++)
{nTd=document.createElement('td');if(aData[i]===null)
{aData[i]='';}
if(typeof oSettings.aoColumns[i].fnRender=='function')
{var sRendered=oSettings.aoColumns[i].fnRender({"iDataRow":iThisIndex,"iDataColumn":i,"aData":aData,"oSettings":oSettings});nTd.innerHTML=sRendered;if(oSettings.aoColumns[i].bUseRendered)
{oSettings.aoData[iThisIndex]._aData[i]=sRendered;}}
else
{nTd.innerHTML=aData[i];}
if(typeof aData[i]!='string')
{aData[i]+="";}
aData[i]=$.trim(aData[i]);if(oSettings.aoColumns[i].sClass!==null)
{nTd.className=oSettings.aoColumns[i].sClass;}
if(oSettings.aoColumns[i]._bAutoType&&oSettings.aoColumns[i].sType!='string')
{sThisType=_fnDetectType(oSettings.aoData[iThisIndex]._aData[i]);if(oSettings.aoColumns[i].sType===null)
{oSettings.aoColumns[i].sType=sThisType;}
else if(oSettings.aoColumns[i].sType!=sThisType)
{oSettings.aoColumns[i].sType='string';}}
if(oSettings.aoColumns[i].bVisible)
{oSettings.aoData[iThisIndex].nTr.appendChild(nTd);oSettings.aoData[iThisIndex]._anHidden[i]=null;}
else
{oSettings.aoData[iThisIndex]._anHidden[i]=nTd;}}
oSettings.aiDisplayMaster.push(iThisIndex);return iThisIndex;}
function _fnGatherData(oSettings)
{var iLoop,i,iLen,j,jLen,jInner,nTds,nTrs,nTd,aLocalData,iThisIndex,iRow,iRows,iColumn,iColumns;if(oSettings.sAjaxSource===null)
{nTrs=oSettings.nTBody.childNodes;for(i=0,iLen=nTrs.length;i<iLen;i++)
{if(nTrs[i].nodeName.toUpperCase()=="TR")
{iThisIndex=oSettings.aoData.length;oSettings.aoData.push({"nTr":nTrs[i],"_iId":oSettings.iNextId++,"_aData":[],"_anHidden":[],"_sRowStripe":''});oSettings.aiDisplayMaster.push(iThisIndex);aLocalData=oSettings.aoData[iThisIndex]._aData;nTds=nTrs[i].childNodes;jInner=0;for(j=0,jLen=nTds.length;j<jLen;j++)
{if(nTds[j].nodeName.toUpperCase()=="TD")
{aLocalData[jInner]=$.trim(nTds[j].innerHTML);jInner++;}}}}}
nTrs=_fnGetTrNodes(oSettings);nTds=[];for(i=0,iLen=nTrs.length;i<iLen;i++)
{for(j=0,jLen=nTrs[i].childNodes.length;j<jLen;j++)
{nTd=nTrs[i].childNodes[j];if(nTd.nodeName.toUpperCase()=="TD")
{nTds.push(nTd);}}}
if(nTds.length!=nTrs.length*oSettings.aoColumns.length)
{_fnLog(oSettings,1,"Unexpected number of TD elements. Expected "+
(nTrs.length*oSettings.aoColumns.length)+" and got "+nTds.length+". DataTables does "+"not support rowspan / colspan in the table body, and there must be one cell for each "+"row/column combination.");}
for(iColumn=0,iColumns=oSettings.aoColumns.length;iColumn<iColumns;iColumn++)
{if(oSettings.aoColumns[iColumn].sTitle===null)
{oSettings.aoColumns[iColumn].sTitle=oSettings.aoColumns[iColumn].nTh.innerHTML;}
var
bAutoType=oSettings.aoColumns[iColumn]._bAutoType,bRender=typeof oSettings.aoColumns[iColumn].fnRender=='function',bClass=oSettings.aoColumns[iColumn].sClass!==null,bVisible=oSettings.aoColumns[iColumn].bVisible,nCell,sThisType,sRendered;if(bAutoType||bRender||bClass||!bVisible)
{for(iRow=0,iRows=oSettings.aoData.length;iRow<iRows;iRow++)
{nCell=nTds[(iRow*iColumns)+iColumn];if(bAutoType)
{if(oSettings.aoColumns[iColumn].sType!='string')
{sThisType=_fnDetectType(oSettings.aoData[iRow]._aData[iColumn]);if(oSettings.aoColumns[iColumn].sType===null)
{oSettings.aoColumns[iColumn].sType=sThisType;}
else if(oSettings.aoColumns[iColumn].sType!=sThisType)
{oSettings.aoColumns[iColumn].sType='string';}}}
if(bRender)
{sRendered=oSettings.aoColumns[iColumn].fnRender({"iDataRow":iRow,"iDataColumn":iColumn,"aData":oSettings.aoData[iRow]._aData,"oSettings":oSettings});nCell.innerHTML=sRendered;if(oSettings.aoColumns[iColumn].bUseRendered)
{oSettings.aoData[iRow]._aData[iColumn]=sRendered;}}
if(bClass)
{nCell.className+=' '+oSettings.aoColumns[iColumn].sClass;}
if(!bVisible)
{oSettings.aoData[iRow]._anHidden[iColumn]=nCell;nCell.parentNode.removeChild(nCell);}
else
{oSettings.aoData[iRow]._anHidden[iColumn]=null;}}}}}
function _fnDrawHead(oSettings)
{var i,nTh,iLen,j,jLen;var anTr=oSettings.nTHead.getElementsByTagName('tr');var iThs=oSettings.nTHead.getElementsByTagName('th').length;var iCorrector=0;var jqChildren;if(iThs!==0)
{for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{nTh=oSettings.aoColumns[i].nTh;if(oSettings.aoColumns[i].sClass!==null)
{$(nTh).addClass(oSettings.aoColumns[i].sClass);}
for(j=1,jLen=anTr.length;j<jLen;j++)
{jqChildren=$(anTr[j]).children();oSettings.aoColumns[i].anThExtra.push(jqChildren[i-iCorrector]);if(!oSettings.aoColumns[i].bVisible)
{anTr[j].removeChild(jqChildren[i-iCorrector]);}}
if(oSettings.aoColumns[i].bVisible)
{if(oSettings.aoColumns[i].sTitle!=nTh.innerHTML)
{nTh.innerHTML=oSettings.aoColumns[i].sTitle;}}
else
{nTh.parentNode.removeChild(nTh);iCorrector++;}}}
else
{var nTr=document.createElement("tr");for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{nTh=oSettings.aoColumns[i].nTh;nTh.innerHTML=oSettings.aoColumns[i].sTitle;if(oSettings.aoColumns[i].sClass!==null)
{$(nTh).addClass(oSettings.aoColumns[i].sClass);}
if(oSettings.aoColumns[i].bVisible)
{nTr.appendChild(nTh);}}
$(oSettings.nTHead).html('')[0].appendChild(nTr);}
if(oSettings.bJUI)
{for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{nTh=oSettings.aoColumns[i].nTh;var nDiv=document.createElement('div');nDiv.className=oSettings.oClasses.sSortJUIWrapper;$(nTh).contents().appendTo(nDiv);nDiv.appendChild(document.createElement('span'));nTh.appendChild(nDiv);}}
var fnNoSelect=function(e){this.onselectstart=function(){return false;};return false;};if(oSettings.oFeatures.bSort)
{for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bSortable!==false)
{_fnSortAttachListener(oSettings,oSettings.aoColumns[i].nTh,i);$(oSettings.aoColumns[i].nTh).bind('mousedown.DT',fnNoSelect);}
else
{$(oSettings.aoColumns[i].nTh).addClass(oSettings.oClasses.sSortableNone);}}}
if(oSettings.nTFoot!==null)
{iCorrector=0;anTr=oSettings.nTFoot.getElementsByTagName('tr');var nTfs=anTr[0].getElementsByTagName('th');for(i=0,iLen=nTfs.length;i<iLen;i++)
{if(typeof oSettings.aoColumns[i]!='undefined')
{oSettings.aoColumns[i].nTf=nTfs[i-iCorrector];if(oSettings.oClasses.sFooterTH!=="")
{oSettings.aoColumns[i].nTf.className+=" "+oSettings.oClasses.sFooterTH;}
for(j=1,jLen=anTr.length;j<jLen;j++)
{jqChildren=$(anTr[j]).children();oSettings.aoColumns[i].anTfExtra.push(jqChildren[i-iCorrector]);if(!oSettings.aoColumns[i].bVisible)
{anTr[j].removeChild(jqChildren[i-iCorrector]);}}
if(!oSettings.aoColumns[i].bVisible)
{nTfs[i-iCorrector].parentNode.removeChild(nTfs[i-iCorrector]);iCorrector++;}}}}}
function _fnDraw(oSettings)
{var i,iLen;var anRows=[];var iRowCount=0;var bRowError=false;var iStrips=oSettings.asStripClasses.length;var iOpenRows=oSettings.aoOpenRows.length;oSettings.bDrawing=true;if(typeof oSettings.iInitDisplayStart!='undefined'&&oSettings.iInitDisplayStart!=-1)
{if(oSettings.oFeatures.bServerSide)
{oSettings._iDisplayStart=oSettings.iInitDisplayStart;}
else
{oSettings._iDisplayStart=(oSettings.iInitDisplayStart>=oSettings.fnRecordsDisplay())?0:oSettings.iInitDisplayStart;}
oSettings.iInitDisplayStart=-1;_fnCalculateEnd(oSettings);}
if(!oSettings.bDestroying&&oSettings.oFeatures.bServerSide&&!_fnAjaxUpdate(oSettings))
{return;}
else if(!oSettings.oFeatures.bServerSide)
{oSettings.iDraw++;}
if(oSettings.aiDisplay.length!==0)
{var iStart=oSettings._iDisplayStart;var iEnd=oSettings._iDisplayEnd;if(oSettings.oFeatures.bServerSide)
{iStart=0;iEnd=oSettings.aoData.length;}
for(var j=iStart;j<iEnd;j++)
{var aoData=oSettings.aoData[oSettings.aiDisplay[j]];var nRow=aoData.nTr;if(iStrips!==0)
{var sStrip=oSettings.asStripClasses[iRowCount%iStrips];if(aoData._sRowStripe!=sStrip)
{$(nRow).removeClass(aoData._sRowStripe).addClass(sStrip);aoData._sRowStripe=sStrip;}}
if(typeof oSettings.fnRowCallback=="function")
{nRow=oSettings.fnRowCallback.call(oSettings.oInstance,nRow,oSettings.aoData[oSettings.aiDisplay[j]]._aData,iRowCount,j);if(!nRow&&!bRowError)
{_fnLog(oSettings,0,"A node was not returned by fnRowCallback");bRowError=true;}}
anRows.push(nRow);iRowCount++;if(iOpenRows!==0)
{for(var k=0;k<iOpenRows;k++)
{if(nRow==oSettings.aoOpenRows[k].nParent)
{anRows.push(oSettings.aoOpenRows[k].nTr);}}}}}
else
{anRows[0]=document.createElement('tr');if(typeof oSettings.asStripClasses[0]!='undefined')
{anRows[0].className=oSettings.asStripClasses[0];}
var nTd=document.createElement('td');nTd.setAttribute('valign',"top");nTd.colSpan=_fnVisbleColumns(oSettings);nTd.className=oSettings.oClasses.sRowEmpty;if(typeof oSettings.oLanguage.sEmptyTable!='undefined'&&oSettings.fnRecordsTotal()===0)
{nTd.innerHTML=oSettings.oLanguage.sEmptyTable;}
else
{nTd.innerHTML=oSettings.oLanguage.sZeroRecords.replace('_MAX_',oSettings.fnFormatNumber(oSettings.fnRecordsTotal()));}
anRows[iRowCount].appendChild(nTd);}
if(typeof oSettings.fnHeaderCallback=='function')
{oSettings.fnHeaderCallback.call(oSettings.oInstance,$('>tr',oSettings.nTHead)[0],_fnGetDataMaster(oSettings),oSettings._iDisplayStart,oSettings.fnDisplayEnd(),oSettings.aiDisplay);}
if(typeof oSettings.fnFooterCallback=='function')
{oSettings.fnFooterCallback.call(oSettings.oInstance,$('>tr',oSettings.nTFoot)[0],_fnGetDataMaster(oSettings),oSettings._iDisplayStart,oSettings.fnDisplayEnd(),oSettings.aiDisplay);}
var
nAddFrag=document.createDocumentFragment(),nRemoveFrag=document.createDocumentFragment(),nBodyPar,nTrs;if(oSettings.nTBody)
{nBodyPar=oSettings.nTBody.parentNode;nRemoveFrag.appendChild(oSettings.nTBody);if(!oSettings.oScroll.bInfinite||!oSettings._bInitComplete||oSettings.bSorted||oSettings.bFiltered)
{nTrs=oSettings.nTBody.childNodes;for(i=nTrs.length-1;i>=0;i--)
{nTrs[i].parentNode.removeChild(nTrs[i]);}}
for(i=0,iLen=anRows.length;i<iLen;i++)
{nAddFrag.appendChild(anRows[i]);}
oSettings.nTBody.appendChild(nAddFrag);if(nBodyPar!==null)
{nBodyPar.appendChild(oSettings.nTBody);}}
for(i=oSettings.aoDrawCallback.length-1;i>=0;i--)
{oSettings.aoDrawCallback[i].fn.call(oSettings.oInstance,oSettings);}
oSettings.bSorted=false;oSettings.bFiltered=false;oSettings.bDrawing=false;if(oSettings.oFeatures.bServerSide)
{_fnProcessingDisplay(oSettings,false);if(typeof oSettings._bInitComplete=='undefined')
{_fnInitComplete(oSettings);}}}
function _fnReDraw(oSettings)
{if(oSettings.oFeatures.bSort)
{_fnSort(oSettings,oSettings.oPreviousSearch);}
else if(oSettings.oFeatures.bFilter)
{_fnFilterComplete(oSettings,oSettings.oPreviousSearch);}
else
{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}
function _fnAjaxUpdate(oSettings)
{if(oSettings.bAjaxDataGet)
{_fnProcessingDisplay(oSettings,true);var iColumns=oSettings.aoColumns.length;var aoData=[];var i;oSettings.iDraw++;aoData.push({"name":"sEcho","value":oSettings.iDraw});aoData.push({"name":"iColumns","value":iColumns});aoData.push({"name":"sColumns","value":_fnColumnOrdering(oSettings)});aoData.push({"name":"iDisplayStart","value":oSettings._iDisplayStart});aoData.push({"name":"iDisplayLength","value":oSettings.oFeatures.bPaginate!==false?oSettings._iDisplayLength:-1});if(oSettings.oFeatures.bFilter!==false)
{aoData.push({"name":"sSearch","value":oSettings.oPreviousSearch.sSearch});aoData.push({"name":"bRegex","value":oSettings.oPreviousSearch.bRegex});for(i=0;i<iColumns;i++)
{aoData.push({"name":"sSearch_"+i,"value":oSettings.aoPreSearchCols[i].sSearch});aoData.push({"name":"bRegex_"+i,"value":oSettings.aoPreSearchCols[i].bRegex});aoData.push({"name":"bSearchable_"+i,"value":oSettings.aoColumns[i].bSearchable});}}
if(oSettings.oFeatures.bSort!==false)
{var iFixed=oSettings.aaSortingFixed!==null?oSettings.aaSortingFixed.length:0;var iUser=oSettings.aaSorting.length;aoData.push({"name":"iSortingCols","value":iFixed+iUser});for(i=0;i<iFixed;i++)
{aoData.push({"name":"iSortCol_"+i,"value":oSettings.aaSortingFixed[i][0]});aoData.push({"name":"sSortDir_"+i,"value":oSettings.aaSortingFixed[i][1]});}
for(i=0;i<iUser;i++)
{aoData.push({"name":"iSortCol_"+(i+iFixed),"value":oSettings.aaSorting[i][0]});aoData.push({"name":"sSortDir_"+(i+iFixed),"value":oSettings.aaSorting[i][1]});}
for(i=0;i<iColumns;i++)
{aoData.push({"name":"bSortable_"+i,"value":oSettings.aoColumns[i].bSortable});}}
oSettings.fnServerData.call(oSettings.oInstance,oSettings.sAjaxSource,aoData,function(json){_fnAjaxUpdateDraw(oSettings,json);});return false;}
else
{return true;}}
function _fnAjaxUpdateDraw(oSettings,json)
{if(typeof json.sEcho!='undefined')
{if(json.sEcho*1<oSettings.iDraw)
{return;}
else
{oSettings.iDraw=json.sEcho*1;}}
if(!oSettings.oScroll.bInfinite||(oSettings.oScroll.bInfinite&&(oSettings.bSorted||oSettings.bFiltered)))
{_fnClearTable(oSettings);}
oSettings._iRecordsTotal=json.iTotalRecords;oSettings._iRecordsDisplay=json.iTotalDisplayRecords;var sOrdering=_fnColumnOrdering(oSettings);var bReOrder=(typeof json.sColumns!='undefined'&&sOrdering!==""&&json.sColumns!=sOrdering);if(bReOrder)
{var aiIndex=_fnReOrderIndex(oSettings,json.sColumns);}
for(var i=0,iLen=json.aaData.length;i<iLen;i++)
{if(bReOrder)
{var aData=[];for(var j=0,jLen=oSettings.aoColumns.length;j<jLen;j++)
{aData.push(json.aaData[i][aiIndex[j]]);}
_fnAddData(oSettings,aData);}
else
{_fnAddData(oSettings,json.aaData[i]);}}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bAjaxDataGet=false;_fnDraw(oSettings);oSettings.bAjaxDataGet=true;_fnProcessingDisplay(oSettings,false);}
function _fnAddOptionsHtml(oSettings)
{var nHolding=document.createElement('div');oSettings.nTable.parentNode.insertBefore(nHolding,oSettings.nTable);oSettings.nTableWrapper=document.createElement('div');oSettings.nTableWrapper.className=oSettings.oClasses.sWrapper;if(oSettings.sTableId!=='')
{oSettings.nTableWrapper.setAttribute('id',oSettings.sTableId+'_wrapper');}
var nInsertNode=oSettings.nTableWrapper;var aDom=oSettings.sDom.split('');var nTmp,iPushFeature,cOption,nNewNode,cNext,sAttr,j;for(var i=0;i<aDom.length;i++)
{iPushFeature=0;cOption=aDom[i];if(cOption=='<')
{nNewNode=document.createElement('div');cNext=aDom[i+1];if(cNext=="'"||cNext=='"')
{sAttr="";j=2;while(aDom[i+j]!=cNext)
{sAttr+=aDom[i+j];j++;}
if(sAttr=="H")
{sAttr="fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix";}
else if(sAttr=="F")
{sAttr="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix";}
if(sAttr.indexOf('.')!=-1)
{var aSplit=sAttr.split('.');nNewNode.setAttribute('id',aSplit[0].substr(1,aSplit[0].length-1));nNewNode.className=aSplit[1];}
else if(sAttr.charAt(0)=="#")
{nNewNode.setAttribute('id',sAttr.substr(1,sAttr.length-1));}
else
{nNewNode.className=sAttr;}
i+=j;}
nInsertNode.appendChild(nNewNode);nInsertNode=nNewNode;}
else if(cOption=='>')
{nInsertNode=nInsertNode.parentNode;}
else if(cOption=='l'&&oSettings.oFeatures.bPaginate&&oSettings.oFeatures.bLengthChange)
{nTmp=_fnFeatureHtmlLength(oSettings);iPushFeature=1;}
else if(cOption=='f'&&oSettings.oFeatures.bFilter)
{nTmp=_fnFeatureHtmlFilter(oSettings);iPushFeature=1;}
else if(cOption=='r'&&oSettings.oFeatures.bProcessing)
{nTmp=_fnFeatureHtmlProcessing(oSettings);iPushFeature=1;}
else if(cOption=='t')
{nTmp=_fnFeatureHtmlTable(oSettings);iPushFeature=1;}
else if(cOption=='i'&&oSettings.oFeatures.bInfo)
{nTmp=_fnFeatureHtmlInfo(oSettings);iPushFeature=1;}
else if(cOption=='p'&&oSettings.oFeatures.bPaginate)
{nTmp=_fnFeatureHtmlPaginate(oSettings);iPushFeature=1;}
else if(_oExt.aoFeatures.length!==0)
{var aoFeatures=_oExt.aoFeatures;for(var k=0,kLen=aoFeatures.length;k<kLen;k++)
{if(cOption==aoFeatures[k].cFeature)
{nTmp=aoFeatures[k].fnInit(oSettings);if(nTmp)
{iPushFeature=1;}
break;}}}
if(iPushFeature==1&&nTmp!==null)
{if(typeof oSettings.aanFeatures[cOption]!='object')
{oSettings.aanFeatures[cOption]=[];}
oSettings.aanFeatures[cOption].push(nTmp);nInsertNode.appendChild(nTmp);}}
nHolding.parentNode.replaceChild(oSettings.nTableWrapper,nHolding);}
function _fnFeatureHtmlTable(oSettings)
{if(oSettings.oScroll.sX===""&&oSettings.oScroll.sY==="")
{return oSettings.nTable;}
var
nScroller=document.createElement('div'),nScrollHead=document.createElement('div'),nScrollHeadInner=document.createElement('div'),nScrollBody=document.createElement('div'),nScrollFoot=document.createElement('div'),nScrollFootInner=document.createElement('div'),nScrollHeadTable=oSettings.nTable.cloneNode(false),nScrollFootTable=oSettings.nTable.cloneNode(false),nThead=oSettings.nTable.getElementsByTagName('thead')[0],nTfoot=oSettings.nTable.getElementsByTagName('tfoot').length===0?null:oSettings.nTable.getElementsByTagName('tfoot')[0],oClasses=(typeof oInit.bJQueryUI!='undefined'&&oInit.bJQueryUI)?_oExt.oJUIClasses:_oExt.oStdClasses;nScrollHead.appendChild(nScrollHeadInner);nScrollFoot.appendChild(nScrollFootInner);nScrollBody.appendChild(oSettings.nTable);nScroller.appendChild(nScrollHead);nScroller.appendChild(nScrollBody);nScrollHeadInner.appendChild(nScrollHeadTable);nScrollHeadTable.appendChild(nThead);if(nTfoot!==null)
{nScroller.appendChild(nScrollFoot);nScrollFootInner.appendChild(nScrollFootTable);nScrollFootTable.appendChild(nTfoot);}
nScroller.className=oClasses.sScrollWrapper;nScrollHead.className=oClasses.sScrollHead;nScrollHeadInner.className=oClasses.sScrollHeadInner;nScrollBody.className=oClasses.sScrollBody;nScrollFoot.className=oClasses.sScrollFoot;nScrollFootInner.className=oClasses.sScrollFootInner;if(oSettings.oScroll.bAutoCss)
{nScrollHead.style.overflow="hidden";nScrollHead.style.position="relative";nScrollFoot.style.overflow="hidden";nScrollBody.style.overflow="auto";}
nScrollHead.style.border="0";nScrollHead.style.width="100%";nScrollFoot.style.border="0";nScrollHeadInner.style.width="150%";nScrollHeadTable.removeAttribute('id');nScrollHeadTable.style.marginLeft="0";oSettings.nTable.style.marginLeft="0";if(nTfoot!==null)
{nScrollFootTable.removeAttribute('id');nScrollFootTable.style.marginLeft="0";}
var nCaptions=$('>caption',oSettings.nTable);for(var i=0,iLen=nCaptions.length;i<iLen;i++)
{nScrollHeadTable.appendChild(nCaptions[i]);}
if(oSettings.oScroll.sX!=="")
{nScrollHead.style.width=_fnStringToCss(oSettings.oScroll.sX);nScrollBody.style.width=_fnStringToCss(oSettings.oScroll.sX);if(nTfoot!==null)
{nScrollFoot.style.width=_fnStringToCss(oSettings.oScroll.sX);}
$(nScrollBody).scroll(function(e){nScrollHead.scrollLeft=this.scrollLeft;if(nTfoot!==null)
{nScrollFoot.scrollLeft=this.scrollLeft;}});}
if(oSettings.oScroll.sY!=="")
{nScrollBody.style.height=_fnStringToCss(oSettings.oScroll.sY);}
oSettings.aoDrawCallback.push({"fn":_fnScrollDraw,"sName":"scrolling"});if(oSettings.oScroll.bInfinite)
{$(nScrollBody).scroll(function(){if(!oSettings.bDrawing)
{if($(this).scrollTop()+$(this).height()>$(oSettings.nTable).height()-oSettings.oScroll.iLoadGap)
{if(oSettings.fnDisplayEnd()<oSettings.fnRecordsDisplay())
{_fnPageChange(oSettings,'next');_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}}});}
oSettings.nScrollHead=nScrollHead;oSettings.nScrollFoot=nScrollFoot;return nScroller;}
function _fnScrollDraw(o)
{var
nScrollHeadInner=o.nScrollHead.getElementsByTagName('div')[0],nScrollHeadTable=nScrollHeadInner.getElementsByTagName('table')[0],nScrollBody=o.nTable.parentNode,i,iLen,j,jLen,anHeadToSize,anHeadSizers,anFootSizers,anFootToSize,oStyle,iVis,iWidth,aApplied=[],iSanityWidth;var nTheadSize=o.nTable.getElementsByTagName('thead');if(nTheadSize.length>0)
{o.nTable.removeChild(nTheadSize[0]);}
if(o.nTFoot!==null)
{var nTfootSize=o.nTable.getElementsByTagName('tfoot');if(nTfootSize.length>0)
{o.nTable.removeChild(nTfootSize[0]);}}
nTheadSize=o.nTHead.cloneNode(true);o.nTable.insertBefore(nTheadSize,o.nTable.childNodes[0]);if(o.nTFoot!==null)
{nTfootSize=o.nTFoot.cloneNode(true);o.nTable.insertBefore(nTfootSize,o.nTable.childNodes[1]);}
var nThs=_fnGetUniqueThs(nTheadSize);for(i=0,iLen=nThs.length;i<iLen;i++)
{iVis=_fnVisibleToColumnIndex(o,i);nThs[i].style.width=o.aoColumns[iVis].sWidth;}
if(o.nTFoot!==null)
{_fnApplyToChildren(function(n){n.style.width="";},nTfootSize.getElementsByTagName('tr'));}
iSanityWidth=$(o.nTable).outerWidth();if(o.oScroll.sX==="")
{o.nTable.style.width="100%";if($.browser.msie&&$.browser.version<=7)
{o.nTable.style.width=_fnStringToCss($(o.nTable).outerWidth()-o.oScroll.iBarWidth);}}
else
{if(o.oScroll.sXInner!=="")
{o.nTable.style.width=_fnStringToCss(o.oScroll.sXInner);}
else if(iSanityWidth==$(nScrollBody).width()&&$(nScrollBody).height()<$(o.nTable).height())
{o.nTable.style.width=_fnStringToCss(iSanityWidth-o.oScroll.iBarWidth);if($(o.nTable).outerWidth()>iSanityWidth-o.oScroll.iBarWidth)
{o.nTable.style.width=_fnStringToCss(iSanityWidth);}}
else
{o.nTable.style.width=_fnStringToCss(iSanityWidth);}}
iSanityWidth=$(o.nTable).outerWidth();anHeadToSize=o.nTHead.getElementsByTagName('tr');anHeadSizers=nTheadSize.getElementsByTagName('tr');_fnApplyToChildren(function(nSizer,nToSize){oStyle=nSizer.style;oStyle.paddingTop="0";oStyle.paddingBottom="0";oStyle.borderTopWidth="0";oStyle.borderBottomWidth="0";oStyle.height=0;iWidth=$(nSizer).width();nToSize.style.width=_fnStringToCss(iWidth);aApplied.push(iWidth);},anHeadSizers,anHeadToSize);$(anHeadSizers).height(0);if(o.nTFoot!==null)
{anFootSizers=nTfootSize.getElementsByTagName('tr');anFootToSize=o.nTFoot.getElementsByTagName('tr');_fnApplyToChildren(function(nSizer,nToSize){oStyle=nSizer.style;oStyle.paddingTop="0";oStyle.paddingBottom="0";oStyle.borderTopWidth="0";oStyle.borderBottomWidth="0";oStyle.height=0;iWidth=$(nSizer).width();nToSize.style.width=_fnStringToCss(iWidth);aApplied.push(iWidth);},anFootSizers,anFootToSize);$(anFootSizers).height(0);}
_fnApplyToChildren(function(nSizer){nSizer.innerHTML="";nSizer.style.width=_fnStringToCss(aApplied.shift());},anHeadSizers);if(o.nTFoot!==null)
{_fnApplyToChildren(function(nSizer){nSizer.innerHTML="";nSizer.style.width=_fnStringToCss(aApplied.shift());},anFootSizers);}
if($(o.nTable).outerWidth()<iSanityWidth)
{if(o.oScroll.sX==="")
{_fnLog(o,1,"The table cannot fit into the current element which will cause column"+" misalignment. It is suggested that you enable x-scrolling or increase the width"+" the table has in which to be drawn");}
else if(o.oScroll.sXInner!=="")
{_fnLog(o,1,"The table cannot fit into the current element which will cause column"+" misalignment. It is suggested that you increase the sScrollXInner property to"+" allow it to draw in a larger area, or simply remove that parameter to allow"+" automatic calculation");}}
if(o.oScroll.sY==="")
{if($.browser.msie&&$.browser.version<=7)
{nScrollBody.style.height=_fnStringToCss(o.nTable.offsetHeight+o.oScroll.iBarWidth);}}
if(o.oScroll.sY!==""&&o.oScroll.bCollapse)
{nScrollBody.style.height=_fnStringToCss(o.oScroll.sY);var iExtra=(o.oScroll.sX!==""&&o.nTable.offsetWidth>nScrollBody.offsetWidth)?o.oScroll.iBarWidth:0;if(o.nTable.offsetHeight<nScrollBody.offsetHeight)
{nScrollBody.style.height=_fnStringToCss($(o.nTable).height()+iExtra);}}
var iOuterWidth=$(o.nTable).outerWidth();nScrollHeadTable.style.width=_fnStringToCss(iOuterWidth);nScrollHeadInner.style.width=_fnStringToCss(iOuterWidth+o.oScroll.iBarWidth);if(o.nTFoot!==null)
{var
nScrollFootInner=o.nScrollFoot.getElementsByTagName('div')[0],nScrollFootTable=nScrollFootInner.getElementsByTagName('table')[0];nScrollFootInner.style.width=_fnStringToCss(o.nTable.offsetWidth+o.oScroll.iBarWidth);nScrollFootTable.style.width=_fnStringToCss(o.nTable.offsetWidth);}
if(o.bSorted||o.bFiltered)
{nScrollBody.scrollTop=0;}}
function _fnAjustColumnSizing(oSettings)
{if(oSettings.oFeatures.bAutoWidth===false)
{return false;}
_fnCalculateColumnWidths(oSettings);for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oSettings.aoColumns[i].nTh.style.width=oSettings.aoColumns[i].sWidth;}}
function _fnFeatureHtmlFilter(oSettings)
{var nFilter=document.createElement('div');if(oSettings.sTableId!==''&&typeof oSettings.aanFeatures.f=="undefined")
{nFilter.setAttribute('id',oSettings.sTableId+'_filter');}
nFilter.className=oSettings.oClasses.sFilter;var sSpace=oSettings.oLanguage.sSearch===""?"":" ";nFilter.innerHTML=oSettings.oLanguage.sSearch+sSpace+'<input type="text" />';var jqFilter=$("input",nFilter);jqFilter.val(oSettings.oPreviousSearch.sSearch.replace('"','&quot;'));jqFilter.bind('keyup.DT',function(e){var n=oSettings.aanFeatures.f;for(var i=0,iLen=n.length;i<iLen;i++)
{if(n[i]!=this.parentNode)
{$('input',n[i]).val(this.value);}}
if(this.value!=oSettings.oPreviousSearch.sSearch)
{_fnFilterComplete(oSettings,{"sSearch":this.value,"bRegex":oSettings.oPreviousSearch.bRegex,"bSmart":oSettings.oPreviousSearch.bSmart});}});jqFilter.bind('keypress.DT',function(e){if(e.keyCode==13)
{return false;}});return nFilter;}
function _fnFilterComplete(oSettings,oInput,iForce)
{_fnFilter(oSettings,oInput.sSearch,iForce,oInput.bRegex,oInput.bSmart);for(var i=0;i<oSettings.aoPreSearchCols.length;i++)
{_fnFilterColumn(oSettings,oSettings.aoPreSearchCols[i].sSearch,i,oSettings.aoPreSearchCols[i].bRegex,oSettings.aoPreSearchCols[i].bSmart);}
if(_oExt.afnFiltering.length!==0)
{_fnFilterCustom(oSettings);}
oSettings.bFiltered=true;oSettings._iDisplayStart=0;_fnCalculateEnd(oSettings);_fnDraw(oSettings);_fnBuildSearchArray(oSettings,0);}
function _fnFilterCustom(oSettings)
{var afnFilters=_oExt.afnFiltering;for(var i=0,iLen=afnFilters.length;i<iLen;i++)
{var iCorrector=0;for(var j=0,jLen=oSettings.aiDisplay.length;j<jLen;j++)
{var iDisIndex=oSettings.aiDisplay[j-iCorrector];if(!afnFilters[i](oSettings,oSettings.aoData[iDisIndex]._aData,iDisIndex))
{oSettings.aiDisplay.splice(j-iCorrector,1);iCorrector++;}}}}
function _fnFilterColumn(oSettings,sInput,iColumn,bRegex,bSmart)
{if(sInput==="")
{return;}
var iIndexCorrector=0;var rpSearch=_fnFilterCreateSearch(sInput,bRegex,bSmart);for(var i=oSettings.aiDisplay.length-1;i>=0;i--)
{var sData=_fnDataToSearch(oSettings.aoData[oSettings.aiDisplay[i]]._aData[iColumn],oSettings.aoColumns[iColumn].sType);if(!rpSearch.test(sData))
{oSettings.aiDisplay.splice(i,1);iIndexCorrector++;}}}
function _fnFilter(oSettings,sInput,iForce,bRegex,bSmart)
{var i;var rpSearch=_fnFilterCreateSearch(sInput,bRegex,bSmart);if(typeof iForce=='undefined'||iForce===null)
{iForce=0;}
if(_oExt.afnFiltering.length!==0)
{iForce=1;}
if(sInput.length<=0)
{oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();}
else
{if(oSettings.aiDisplay.length==oSettings.aiDisplayMaster.length||oSettings.oPreviousSearch.sSearch.length>sInput.length||iForce==1||sInput.indexOf(oSettings.oPreviousSearch.sSearch)!==0)
{oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);_fnBuildSearchArray(oSettings,1);for(i=0;i<oSettings.aiDisplayMaster.length;i++)
{if(rpSearch.test(oSettings.asDataSearch[i]))
{oSettings.aiDisplay.push(oSettings.aiDisplayMaster[i]);}}}
else
{var iIndexCorrector=0;for(i=0;i<oSettings.asDataSearch.length;i++)
{if(!rpSearch.test(oSettings.asDataSearch[i]))
{oSettings.aiDisplay.splice(i-iIndexCorrector,1);iIndexCorrector++;}}}}
oSettings.oPreviousSearch.sSearch=sInput;oSettings.oPreviousSearch.bRegex=bRegex;oSettings.oPreviousSearch.bSmart=bSmart;}
function _fnBuildSearchArray(oSettings,iMaster)
{oSettings.asDataSearch.splice(0,oSettings.asDataSearch.length);var aArray=(typeof iMaster!='undefined'&&iMaster==1)?oSettings.aiDisplayMaster:oSettings.aiDisplay;for(var i=0,iLen=aArray.length;i<iLen;i++)
{oSettings.asDataSearch[i]=_fnBuildSearchRow(oSettings,oSettings.aoData[aArray[i]]._aData);}}
function _fnBuildSearchRow(oSettings,aData)
{var sSearch='';var nTmp=document.createElement('div');for(var j=0,jLen=oSettings.aoColumns.length;j<jLen;j++)
{if(oSettings.aoColumns[j].bSearchable)
{var sData=aData[j];sSearch+=_fnDataToSearch(sData,oSettings.aoColumns[j].sType)+'  ';}}
if(sSearch.indexOf('&')!==-1)
{nTmp.innerHTML=sSearch;sSearch=nTmp.textContent?nTmp.textContent:nTmp.innerText;sSearch=sSearch.replace(/\n/g," ").replace(/\r/g,"");}
return sSearch;}
function _fnFilterCreateSearch(sSearch,bRegex,bSmart)
{var asSearch,sRegExpString;if(bSmart)
{asSearch=bRegex?sSearch.split(' '):_fnEscapeRegex(sSearch).split(' ');sRegExpString='^(?=.*?'+asSearch.join(')(?=.*?')+').*$';return new RegExp(sRegExpString,"i");}
else
{sSearch=bRegex?sSearch:_fnEscapeRegex(sSearch);return new RegExp(sSearch,"i");}}
function _fnDataToSearch(sData,sType)
{if(typeof _oExt.ofnSearch[sType]=="function")
{return _oExt.ofnSearch[sType](sData);}
else if(sType=="html")
{return sData.replace(/\n/g," ").replace(/<.*?>/g,"");}
else if(typeof sData=="string")
{return sData.replace(/\n/g," ");}
return sData;}
function _fnSort(oSettings,bApplyClasses)
{var
iDataSort,iDataType,i,iLen,j,jLen,aaSort=[],aiOrig=[],oSort=_oExt.oSort,aoData=oSettings.aoData,aoColumns=oSettings.aoColumns;if(!oSettings.oFeatures.bServerSide&&(oSettings.aaSorting.length!==0||oSettings.aaSortingFixed!==null))
{if(oSettings.aaSortingFixed!==null)
{aaSort=oSettings.aaSortingFixed.concat(oSettings.aaSorting);}
else
{aaSort=oSettings.aaSorting.slice();}
for(i=0;i<aaSort.length;i++)
{var iColumn=aaSort[i][0];var iVisColumn=_fnColumnIndexToVisible(oSettings,iColumn);var sDataType=oSettings.aoColumns[iColumn].sSortDataType;if(typeof _oExt.afnSortData[sDataType]!='undefined')
{var aData=_oExt.afnSortData[sDataType](oSettings,iColumn,iVisColumn);for(j=0,jLen=aoData.length;j<jLen;j++)
{aoData[j]._aData[iColumn]=aData[j];}}}
for(i=0,iLen=oSettings.aiDisplayMaster.length;i<iLen;i++)
{aiOrig[oSettings.aiDisplayMaster[i]]=i;}
var iSortLen=aaSort.length;oSettings.aiDisplayMaster.sort(function(a,b){var iTest;for(i=0;i<iSortLen;i++)
{iDataSort=aoColumns[aaSort[i][0]].iDataSort;iDataType=aoColumns[iDataSort].sType;iTest=oSort[iDataType+"-"+aaSort[i][1]](aoData[a]._aData[iDataSort],aoData[b]._aData[iDataSort]);if(iTest!==0)
{return iTest;}}
return oSort['numeric-asc'](aiOrig[a],aiOrig[b]);});}
if(typeof bApplyClasses=='undefined'||bApplyClasses)
{_fnSortingClasses(oSettings);}
oSettings.bSorted=true;if(oSettings.oFeatures.bFilter)
{_fnFilterComplete(oSettings,oSettings.oPreviousSearch,1);}
else
{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings._iDisplayStart=0;_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}
function _fnSortAttachListener(oSettings,nNode,iDataIndex,fnCallback)
{$(nNode).bind('click.DT',function(e){if(oSettings.aoColumns[iDataIndex].bSortable===false)
{return;}
var fnInnerSorting=function(){var iColumn,iNextSort;if(e.shiftKey)
{var bFound=false;for(var i=0;i<oSettings.aaSorting.length;i++)
{if(oSettings.aaSorting[i][0]==iDataIndex)
{bFound=true;iColumn=oSettings.aaSorting[i][0];iNextSort=oSettings.aaSorting[i][2]+1;if(typeof oSettings.aoColumns[iColumn].asSorting[iNextSort]=='undefined')
{oSettings.aaSorting.splice(i,1);}
else
{oSettings.aaSorting[i][1]=oSettings.aoColumns[iColumn].asSorting[iNextSort];oSettings.aaSorting[i][2]=iNextSort;}
break;}}
if(bFound===false)
{oSettings.aaSorting.push([iDataIndex,oSettings.aoColumns[iDataIndex].asSorting[0],0]);}}
else
{if(oSettings.aaSorting.length==1&&oSettings.aaSorting[0][0]==iDataIndex)
{iColumn=oSettings.aaSorting[0][0];iNextSort=oSettings.aaSorting[0][2]+1;if(typeof oSettings.aoColumns[iColumn].asSorting[iNextSort]=='undefined')
{iNextSort=0;}
oSettings.aaSorting[0][1]=oSettings.aoColumns[iColumn].asSorting[iNextSort];oSettings.aaSorting[0][2]=iNextSort;}
else
{oSettings.aaSorting.splice(0,oSettings.aaSorting.length);oSettings.aaSorting.push([iDataIndex,oSettings.aoColumns[iDataIndex].asSorting[0],0]);}}
_fnSort(oSettings);};if(!oSettings.oFeatures.bProcessing)
{fnInnerSorting();}
else
{_fnProcessingDisplay(oSettings,true);setTimeout(function(){fnInnerSorting();if(!oSettings.oFeatures.bServerSide)
{_fnProcessingDisplay(oSettings,false);}},0);}
if(typeof fnCallback=='function')
{fnCallback(oSettings);}});}
function _fnSortingClasses(oSettings)
{var i,iLen,j,jLen,iFound;var aaSort,sClass;var iColumns=oSettings.aoColumns.length;var oClasses=oSettings.oClasses;for(i=0;i<iColumns;i++)
{if(oSettings.aoColumns[i].bSortable)
{$(oSettings.aoColumns[i].nTh).removeClass(oClasses.sSortAsc+" "+oClasses.sSortDesc+" "+oSettings.aoColumns[i].sSortingClass);}}
if(oSettings.aaSortingFixed!==null)
{aaSort=oSettings.aaSortingFixed.concat(oSettings.aaSorting);}
else
{aaSort=oSettings.aaSorting.slice();}
for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bSortable)
{sClass=oSettings.aoColumns[i].sSortingClass;iFound=-1;for(j=0;j<aaSort.length;j++)
{if(aaSort[j][0]==i)
{sClass=(aaSort[j][1]=="asc")?oClasses.sSortAsc:oClasses.sSortDesc;iFound=j;break;}}
$(oSettings.aoColumns[i].nTh).addClass(sClass);if(oSettings.bJUI)
{var jqSpan=$("span",oSettings.aoColumns[i].nTh);jqSpan.removeClass(oClasses.sSortJUIAsc+" "+oClasses.sSortJUIDesc+" "+
oClasses.sSortJUI+" "+oClasses.sSortJUIAscAllowed+" "+oClasses.sSortJUIDescAllowed);var sSpanClass;if(iFound==-1)
{sSpanClass=oSettings.aoColumns[i].sSortingClassJUI;}
else if(aaSort[iFound][1]=="asc")
{sSpanClass=oClasses.sSortJUIAsc;}
else
{sSpanClass=oClasses.sSortJUIDesc;}
jqSpan.addClass(sSpanClass);}}
else
{$(oSettings.aoColumns[i].nTh).addClass(oSettings.aoColumns[i].sSortingClass);}}
sClass=oClasses.sSortColumn;if(oSettings.oFeatures.bSort&&oSettings.oFeatures.bSortClasses)
{var nTds=_fnGetTdNodes(oSettings);if(nTds.length>=iColumns)
{for(i=0;i<iColumns;i++)
{if(nTds[i].className.indexOf(sClass+"1")!=-1)
{for(j=0,jLen=(nTds.length/iColumns);j<jLen;j++)
{nTds[(iColumns*j)+i].className=$.trim(nTds[(iColumns*j)+i].className.replace(sClass+"1",""));}}
else if(nTds[i].className.indexOf(sClass+"2")!=-1)
{for(j=0,jLen=(nTds.length/iColumns);j<jLen;j++)
{nTds[(iColumns*j)+i].className=$.trim(nTds[(iColumns*j)+i].className.replace(sClass+"2",""));}}
else if(nTds[i].className.indexOf(sClass+"3")!=-1)
{for(j=0,jLen=(nTds.length/iColumns);j<jLen;j++)
{nTds[(iColumns*j)+i].className=$.trim(nTds[(iColumns*j)+i].className.replace(" "+sClass+"3",""));}}}}
var iClass=1,iTargetCol;for(i=0;i<aaSort.length;i++)
{iTargetCol=parseInt(aaSort[i][0],10);for(j=0,jLen=(nTds.length/iColumns);j<jLen;j++)
{nTds[(iColumns*j)+iTargetCol].className+=" "+sClass+iClass;}
if(iClass<3)
{iClass++;}}}}
function _fnFeatureHtmlPaginate(oSettings)
{if(oSettings.oScroll.bInfinite)
{return null;}
var nPaginate=document.createElement('div');nPaginate.className=oSettings.oClasses.sPaging+oSettings.sPaginationType;_oExt.oPagination[oSettings.sPaginationType].fnInit(oSettings,nPaginate,function(oSettings){_fnCalculateEnd(oSettings);_fnDraw(oSettings);});if(typeof oSettings.aanFeatures.p=="undefined")
{oSettings.aoDrawCallback.push({"fn":function(oSettings){_oExt.oPagination[oSettings.sPaginationType].fnUpdate(oSettings,function(oSettings){_fnCalculateEnd(oSettings);_fnDraw(oSettings);});},"sName":"pagination"});}
return nPaginate;}
function _fnPageChange(oSettings,sAction)
{var iOldStart=oSettings._iDisplayStart;if(sAction=="first")
{oSettings._iDisplayStart=0;}
else if(sAction=="previous")
{oSettings._iDisplayStart=oSettings._iDisplayLength>=0?oSettings._iDisplayStart-oSettings._iDisplayLength:0;if(oSettings._iDisplayStart<0)
{oSettings._iDisplayStart=0;}}
else if(sAction=="next")
{if(oSettings._iDisplayLength>=0)
{if(oSettings._iDisplayStart+oSettings._iDisplayLength<oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart+=oSettings._iDisplayLength;}}
else
{oSettings._iDisplayStart=0;}}
else if(sAction=="last")
{if(oSettings._iDisplayLength>=0)
{var iPages=parseInt((oSettings.fnRecordsDisplay()-1)/oSettings._iDisplayLength,10)+1;oSettings._iDisplayStart=(iPages-1)*oSettings._iDisplayLength;}
else
{oSettings._iDisplayStart=0;}}
else
{_fnLog(oSettings,0,"Unknown paging action: "+sAction);}
return iOldStart!=oSettings._iDisplayStart;}
function _fnFeatureHtmlInfo(oSettings)
{var nInfo=document.createElement('div');nInfo.className=oSettings.oClasses.sInfo;if(typeof oSettings.aanFeatures.i=="undefined")
{oSettings.aoDrawCallback.push({"fn":_fnUpdateInfo,"sName":"information"});if(oSettings.sTableId!=='')
{nInfo.setAttribute('id',oSettings.sTableId+'_info');}}
return nInfo;}
function _fnUpdateInfo(oSettings)
{if(!oSettings.oFeatures.bInfo||oSettings.aanFeatures.i.length===0)
{return;}
var
iStart=oSettings._iDisplayStart+1,iEnd=oSettings.fnDisplayEnd(),iMax=oSettings.fnRecordsTotal(),iTotal=oSettings.fnRecordsDisplay(),sStart=oSettings.fnFormatNumber(iStart),sEnd=oSettings.fnFormatNumber(iEnd),sMax=oSettings.fnFormatNumber(iMax),sTotal=oSettings.fnFormatNumber(iTotal),sOut;if(oSettings.oScroll.bInfinite)
{sStart=oSettings.fnFormatNumber(1);}
if(oSettings.fnRecordsDisplay()===0&&oSettings.fnRecordsDisplay()==oSettings.fnRecordsTotal())
{sOut=oSettings.oLanguage.sInfoEmpty+oSettings.oLanguage.sInfoPostFix;}
else if(oSettings.fnRecordsDisplay()===0)
{sOut=oSettings.oLanguage.sInfoEmpty+' '+
oSettings.oLanguage.sInfoFiltered.replace('_MAX_',sMax)+
oSettings.oLanguage.sInfoPostFix;}
else if(oSettings.fnRecordsDisplay()==oSettings.fnRecordsTotal())
{sOut=oSettings.oLanguage.sInfo.replace('_START_',sStart).replace('_END_',sEnd).replace('_TOTAL_',sTotal)+
oSettings.oLanguage.sInfoPostFix;}
else
{sOut=oSettings.oLanguage.sInfo.replace('_START_',sStart).replace('_END_',sEnd).replace('_TOTAL_',sTotal)+' '+
oSettings.oLanguage.sInfoFiltered.replace('_MAX_',oSettings.fnFormatNumber(oSettings.fnRecordsTotal()))+
oSettings.oLanguage.sInfoPostFix;}
if(oSettings.oLanguage.fnInfoCallback!==null)
{sOut=oSettings.oLanguage.fnInfoCallback(oSettings,iStart,iEnd,iMax,iTotal,sOut);}
var n=oSettings.aanFeatures.i;for(var i=0,iLen=n.length;i<iLen;i++)
{$(n[i]).html(sOut);}}
function _fnFeatureHtmlLength(oSettings)
{if(oSettings.oScroll.bInfinite)
{return null;}
var sName=(oSettings.sTableId==="")?"":'name="'+oSettings.sTableId+'_length"';var sStdMenu='<select size="1" '+sName+'>';var i,iLen;if(oSettings.aLengthMenu.length==2&&typeof oSettings.aLengthMenu[0]=='object'&&typeof oSettings.aLengthMenu[1]=='object')
{for(i=0,iLen=oSettings.aLengthMenu[0].length;i<iLen;i++)
{sStdMenu+='<option value="'+oSettings.aLengthMenu[0][i]+'">'+
oSettings.aLengthMenu[1][i]+'</option>';}}
else
{for(i=0,iLen=oSettings.aLengthMenu.length;i<iLen;i++)
{sStdMenu+='<option value="'+oSettings.aLengthMenu[i]+'">'+
oSettings.aLengthMenu[i]+'</option>';}}
sStdMenu+='</select>';var nLength=document.createElement('div');if(oSettings.sTableId!==''&&typeof oSettings.aanFeatures.l=="undefined")
{nLength.setAttribute('id',oSettings.sTableId+'_length');}
nLength.className=oSettings.oClasses.sLength;nLength.innerHTML=oSettings.oLanguage.sLengthMenu.replace('_MENU_',sStdMenu);$('select option[value="'+oSettings._iDisplayLength+'"]',nLength).attr("selected",true);$('select',nLength).bind('change.DT',function(e){var iVal=$(this).val();var n=oSettings.aanFeatures.l;for(i=0,iLen=n.length;i<iLen;i++)
{if(n[i]!=this.parentNode)
{$('select',n[i]).val(iVal);}}
oSettings._iDisplayLength=parseInt(iVal,10);_fnCalculateEnd(oSettings);if(oSettings.fnDisplayEnd()==oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart=oSettings.fnDisplayEnd()-oSettings._iDisplayLength;if(oSettings._iDisplayStart<0)
{oSettings._iDisplayStart=0;}}
if(oSettings._iDisplayLength==-1)
{oSettings._iDisplayStart=0;}
_fnDraw(oSettings);});return nLength;}
function _fnFeatureHtmlProcessing(oSettings)
{var nProcessing=document.createElement('div');if(oSettings.sTableId!==''&&typeof oSettings.aanFeatures.r=="undefined")
{nProcessing.setAttribute('id',oSettings.sTableId+'_processing');}
nProcessing.innerHTML=oSettings.oLanguage.sProcessing;nProcessing.className=oSettings.oClasses.sProcessing;oSettings.nTable.parentNode.insertBefore(nProcessing,oSettings.nTable);return nProcessing;}
function _fnProcessingDisplay(oSettings,bShow)
{if(oSettings.oFeatures.bProcessing)
{var an=oSettings.aanFeatures.r;for(var i=0,iLen=an.length;i<iLen;i++)
{an[i].style.visibility=bShow?"visible":"hidden";}}}
function _fnVisibleToColumnIndex(oSettings,iMatch)
{var iColumn=-1;for(var i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bVisible===true)
{iColumn++;}
if(iColumn==iMatch)
{return i;}}
return null;}
function _fnColumnIndexToVisible(oSettings,iMatch)
{var iVisible=-1;for(var i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bVisible===true)
{iVisible++;}
if(i==iMatch)
{return oSettings.aoColumns[i].bVisible===true?iVisible:null;}}
return null;}
function _fnNodeToDataIndex(s,n)
{var i,iLen;for(i=s._iDisplayStart,iLen=s._iDisplayEnd;i<iLen;i++)
{if(s.aoData[s.aiDisplay[i]].nTr==n)
{return s.aiDisplay[i];}}
for(i=0,iLen=s.aoData.length;i<iLen;i++)
{if(s.aoData[i].nTr==n)
{return i;}}
return null;}
function _fnVisbleColumns(oS)
{var iVis=0;for(var i=0;i<oS.aoColumns.length;i++)
{if(oS.aoColumns[i].bVisible===true)
{iVis++;}}
return iVis;}
function _fnCalculateEnd(oSettings)
{if(oSettings.oFeatures.bPaginate===false)
{oSettings._iDisplayEnd=oSettings.aiDisplay.length;}
else
{if(oSettings._iDisplayStart+oSettings._iDisplayLength>oSettings.aiDisplay.length||oSettings._iDisplayLength==-1)
{oSettings._iDisplayEnd=oSettings.aiDisplay.length;}
else
{oSettings._iDisplayEnd=oSettings._iDisplayStart+oSettings._iDisplayLength;}}}
function _fnConvertToWidth(sWidth,nParent)
{if(!sWidth||sWidth===null||sWidth==='')
{return 0;}
if(typeof nParent=="undefined")
{nParent=document.getElementsByTagName('body')[0];}
var iWidth;var nTmp=document.createElement("div");nTmp.style.width=sWidth;nParent.appendChild(nTmp);iWidth=nTmp.offsetWidth;nParent.removeChild(nTmp);return(iWidth);}
function _fnCalculateColumnWidths(oSettings)
{var iTableWidth=oSettings.nTable.offsetWidth;var iUserInputs=0;var iTmpWidth;var iVisibleColumns=0;var iColums=oSettings.aoColumns.length;var i;var oHeaders=$('th',oSettings.nTHead);for(i=0;i<iColums;i++)
{if(oSettings.aoColumns[i].bVisible)
{iVisibleColumns++;if(oSettings.aoColumns[i].sWidth!==null)
{iTmpWidth=_fnConvertToWidth(oSettings.aoColumns[i].sWidthOrig,oSettings.nTable.parentNode);if(iTmpWidth!==null)
{oSettings.aoColumns[i].sWidth=_fnStringToCss(iTmpWidth);}
iUserInputs++;}}}
if(iColums==oHeaders.length&&iUserInputs===0&&iVisibleColumns==iColums&&oSettings.oScroll.sX===""&&oSettings.oScroll.sY==="")
{for(i=0;i<oSettings.aoColumns.length;i++)
{iTmpWidth=$(oHeaders[i]).width();if(iTmpWidth!==null)
{oSettings.aoColumns[i].sWidth=_fnStringToCss(iTmpWidth);}}}
else
{var
nCalcTmp=oSettings.nTable.cloneNode(false),nBody=document.createElement('tbody'),nTr=document.createElement('tr'),nDivSizing;nCalcTmp.removeAttribute("id");nCalcTmp.appendChild(oSettings.nTHead.cloneNode(true));if(oSettings.nTFoot!==null)
{nCalcTmp.appendChild(oSettings.nTFoot.cloneNode(true));_fnApplyToChildren(function(n){n.style.width="";},nCalcTmp.getElementsByTagName('tr'));}
nCalcTmp.appendChild(nBody);nBody.appendChild(nTr);var jqColSizing=$('thead th',nCalcTmp);if(jqColSizing.length===0)
{jqColSizing=$('tbody tr:eq(0)>td',nCalcTmp);}
jqColSizing.each(function(i){this.style.width="";var iIndex=_fnVisibleToColumnIndex(oSettings,i);if(iIndex!==null&&oSettings.aoColumns[iIndex].sWidthOrig!=="")
{this.style.width=oSettings.aoColumns[iIndex].sWidthOrig;}});for(i=0;i<iColums;i++)
{if(oSettings.aoColumns[i].bVisible)
{var nTd=_fnGetWidestNode(oSettings,i);if(nTd!==null)
{nTd=nTd.cloneNode(true);nTr.appendChild(nTd);}}}
var nWrapper=oSettings.nTable.parentNode;nWrapper.appendChild(nCalcTmp);if(oSettings.oScroll.sX!==""&&oSettings.oScroll.sXInner!=="")
{nCalcTmp.style.width=_fnStringToCss(oSettings.oScroll.sXInner);}
else if(oSettings.oScroll.sX!=="")
{nCalcTmp.style.width="";if($(nCalcTmp).width()<nWrapper.offsetWidth)
{nCalcTmp.style.width=_fnStringToCss(nWrapper.offsetWidth);}}
else if(oSettings.oScroll.sY!=="")
{nCalcTmp.style.width=_fnStringToCss(nWrapper.offsetWidth);}
nCalcTmp.style.visibility="hidden";_fnScrollingWidthAdjust(oSettings,nCalcTmp);var oNodes=$("tbody tr:eq(0)>td",nCalcTmp);if(oNodes.length===0)
{oNodes=$("thead tr:eq(0)>th",nCalcTmp);}
var iIndex,iCorrector=0,iWidth;for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bVisible)
{iWidth=$(oNodes[iCorrector]).outerWidth();if(iWidth!==null&&iWidth>0)
{oSettings.aoColumns[i].sWidth=_fnStringToCss(iWidth);}
iCorrector++;}}
oSettings.nTable.style.width=_fnStringToCss($(nCalcTmp).outerWidth());nCalcTmp.parentNode.removeChild(nCalcTmp);}}
function _fnScrollingWidthAdjust(oSettings,n)
{if(oSettings.oScroll.sX===""&&oSettings.oScroll.sY!=="")
{var iOrigWidth=$(n).width();n.style.width=_fnStringToCss($(n).outerWidth()-oSettings.oScroll.iBarWidth);}
else if(oSettings.oScroll.sX!=="")
{n.style.width=_fnStringToCss($(n).outerWidth());}}
function _fnGetWidestNode(oSettings,iCol,bFast)
{if(typeof bFast=='undefined'||bFast)
{var iMaxLen=_fnGetMaxLenString(oSettings,iCol);var iFastVis=_fnColumnIndexToVisible(oSettings,iCol);if(iMaxLen<0)
{return null;}
return oSettings.aoData[iMaxLen].nTr.getElementsByTagName('td')[iFastVis];}
var
iMax=-1,i,iLen,iMaxIndex=-1,n=document.createElement('div');n.style.visibility="hidden";n.style.position="absolute";document.body.appendChild(n);for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{n.innerHTML=oSettings.aoData[i]._aData[iCol];if(n.offsetWidth>iMax)
{iMax=n.offsetWidth;iMaxIndex=i;}}
document.body.removeChild(n);if(iMaxIndex>=0)
{var iVis=_fnColumnIndexToVisible(oSettings,iCol);var nRet=oSettings.aoData[iMaxIndex].nTr.getElementsByTagName('td')[iVis];if(nRet)
{return nRet;}}
return null;}
function _fnGetMaxLenString(oSettings,iCol)
{var iMax=-1;var iMaxIndex=-1;for(var i=0;i<oSettings.aoData.length;i++)
{var s=oSettings.aoData[i]._aData[iCol];if(s.length>iMax)
{iMax=s.length;iMaxIndex=i;}}
return iMaxIndex;}
function _fnStringToCss(s)
{if(s===null)
{return"0px";}
if(typeof s=='number')
{if(s<0)
{return"0px";}
return s+"px";}
var c=s.charCodeAt(s.length-1);if(c<0x30||c>0x39)
{return s;}
return s+"px";}
function _fnArrayCmp(aArray1,aArray2)
{if(aArray1.length!=aArray2.length)
{return 1;}
for(var i=0;i<aArray1.length;i++)
{if(aArray1[i]!=aArray2[i])
{return 2;}}
return 0;}
function _fnDetectType(sData)
{var aTypes=_oExt.aTypes;var iLen=aTypes.length;for(var i=0;i<iLen;i++)
{var sType=aTypes[i](sData);if(sType!==null)
{return sType;}}
return'string';}
function _fnSettingsFromNode(nTable)
{for(var i=0;i<_aoSettings.length;i++)
{if(_aoSettings[i].nTable==nTable)
{return _aoSettings[i];}}
return null;}
function _fnGetDataMaster(oSettings)
{var aData=[];var iLen=oSettings.aoData.length;for(var i=0;i<iLen;i++)
{aData.push(oSettings.aoData[i]._aData);}
return aData;}
function _fnGetTrNodes(oSettings)
{var aNodes=[];var iLen=oSettings.aoData.length;for(var i=0;i<iLen;i++)
{aNodes.push(oSettings.aoData[i].nTr);}
return aNodes;}
function _fnGetTdNodes(oSettings)
{var nTrs=_fnGetTrNodes(oSettings);var nTds=[],nTd;var anReturn=[];var iCorrector;var iRow,iRows,iColumn,iColumns;for(iRow=0,iRows=nTrs.length;iRow<iRows;iRow++)
{nTds=[];for(iColumn=0,iColumns=nTrs[iRow].childNodes.length;iColumn<iColumns;iColumn++)
{nTd=nTrs[iRow].childNodes[iColumn];if(nTd.nodeName.toUpperCase()=="TD")
{nTds.push(nTd);}}
iCorrector=0;for(iColumn=0,iColumns=oSettings.aoColumns.length;iColumn<iColumns;iColumn++)
{if(oSettings.aoColumns[iColumn].bVisible)
{anReturn.push(nTds[iColumn-iCorrector]);}
else
{anReturn.push(oSettings.aoData[iRow]._anHidden[iColumn]);iCorrector++;}}}
return anReturn;}
function _fnEscapeRegex(sVal)
{var acEscape=['/','.','*','+','?','|','(',')','[',']','{','}','\\','$','^'];var reReplace=new RegExp('(\\'+acEscape.join('|\\')+')','g');return sVal.replace(reReplace,'\\$1');}
function _fnDeleteIndex(a,iTarget)
{var iTargetIndex=-1;for(var i=0,iLen=a.length;i<iLen;i++)
{if(a[i]==iTarget)
{iTargetIndex=i;}
else if(a[i]>iTarget)
{a[i]--;}}
if(iTargetIndex!=-1)
{a.splice(iTargetIndex,1);}}
function _fnReOrderIndex(oSettings,sColumns)
{var aColumns=sColumns.split(',');var aiReturn=[];for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{for(var j=0;j<iLen;j++)
{if(oSettings.aoColumns[i].sName==aColumns[j])
{aiReturn.push(j);break;}}}
return aiReturn;}
function _fnColumnOrdering(oSettings)
{var sNames='';for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{sNames+=oSettings.aoColumns[i].sName+',';}
if(sNames.length==iLen)
{return"";}
return sNames.slice(0,-1);}
function _fnLog(oSettings,iLevel,sMesg)
{var sAlert=oSettings.sTableId===""?"DataTables warning: "+sMesg:"DataTables warning (table id = '"+oSettings.sTableId+"'): "+sMesg;if(iLevel===0)
{if(_oExt.sErrMode=='alert')
{alert(sAlert);}
else
{throw sAlert;}
return;}
else if(typeof console!='undefined'&&typeof console.log!='undefined')
{console.log(sAlert);}}
function _fnClearTable(oSettings)
{oSettings.aoData.splice(0,oSettings.aoData.length);oSettings.aiDisplayMaster.splice(0,oSettings.aiDisplayMaster.length);oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);_fnCalculateEnd(oSettings);}
function _fnSaveState(oSettings)
{if(!oSettings.oFeatures.bStateSave||typeof oSettings.bDestroying!='undefined')
{return;}
var i,iLen,sTmp;var sValue="{";sValue+='"iCreate":'+new Date().getTime()+',';sValue+='"iStart":'+oSettings._iDisplayStart+',';sValue+='"iEnd":'+oSettings._iDisplayEnd+',';sValue+='"iLength":'+oSettings._iDisplayLength+',';sValue+='"sFilter":"'+encodeURIComponent(oSettings.oPreviousSearch.sSearch)+'",';sValue+='"sFilterEsc":'+!oSettings.oPreviousSearch.bRegex+',';sValue+='"aaSorting":[ ';for(i=0;i<oSettings.aaSorting.length;i++)
{sValue+='['+oSettings.aaSorting[i][0]+',"'+oSettings.aaSorting[i][1]+'"],';}
sValue=sValue.substring(0,sValue.length-1);sValue+="],";sValue+='"aaSearchCols":[ ';for(i=0;i<oSettings.aoPreSearchCols.length;i++)
{sValue+='["'+encodeURIComponent(oSettings.aoPreSearchCols[i].sSearch)+'",'+!oSettings.aoPreSearchCols[i].bRegex+'],';}
sValue=sValue.substring(0,sValue.length-1);sValue+="],";sValue+='"abVisCols":[ ';for(i=0;i<oSettings.aoColumns.length;i++)
{sValue+=oSettings.aoColumns[i].bVisible+",";}
sValue=sValue.substring(0,sValue.length-1);sValue+="]";for(i=0,iLen=oSettings.aoStateSave.length;i<iLen;i++)
{sTmp=oSettings.aoStateSave[i].fn(oSettings,sValue);if(sTmp!=="")
{sValue=sTmp;}}
sValue+="}";_fnCreateCookie(oSettings.sCookiePrefix+oSettings.sInstance,sValue,oSettings.iCookieDuration,oSettings.sCookiePrefix,oSettings.fnCookieCallback);}
function _fnLoadState(oSettings,oInit)
{if(!oSettings.oFeatures.bStateSave)
{return;}
var oData,i,iLen;var sData=_fnReadCookie(oSettings.sCookiePrefix+oSettings.sInstance);if(sData!==null&&sData!=='')
{try
{oData=(typeof $.parseJSON=='function')?$.parseJSON(sData.replace(/'/g,'"')):eval('('+sData+')');}
catch(e)
{return;}
for(i=0,iLen=oSettings.aoStateLoad.length;i<iLen;i++)
{if(!oSettings.aoStateLoad[i].fn(oSettings,oData))
{return;}}
oSettings.oLoadedState=$.extend(true,{},oData);oSettings._iDisplayStart=oData.iStart;oSettings.iInitDisplayStart=oData.iStart;oSettings._iDisplayEnd=oData.iEnd;oSettings._iDisplayLength=oData.iLength;oSettings.oPreviousSearch.sSearch=decodeURIComponent(oData.sFilter);oSettings.aaSorting=oData.aaSorting.slice();oSettings.saved_aaSorting=oData.aaSorting.slice();if(typeof oData.sFilterEsc!='undefined')
{oSettings.oPreviousSearch.bRegex=!oData.sFilterEsc;}
if(typeof oData.aaSearchCols!='undefined')
{for(i=0;i<oData.aaSearchCols.length;i++)
{oSettings.aoPreSearchCols[i]={"sSearch":decodeURIComponent(oData.aaSearchCols[i][0]),"bRegex":!oData.aaSearchCols[i][1]};}}
if(typeof oData.abVisCols!='undefined')
{oInit.saved_aoColumns=[];for(i=0;i<oData.abVisCols.length;i++)
{oInit.saved_aoColumns[i]={};oInit.saved_aoColumns[i].bVisible=oData.abVisCols[i];}}}}
function _fnCreateCookie(sName,sValue,iSecs,sBaseName,fnCallback)
{var date=new Date();date.setTime(date.getTime()+(iSecs*1000));var aParts=window.location.pathname.split('/');var sNameFile=sName+'_'+aParts.pop().replace(/[\/:]/g,"").toLowerCase();var sFullCookie,oData;if(fnCallback!==null)
{oData=(typeof $.parseJSON=='function')?$.parseJSON(sValue):eval('('+sValue+')');sFullCookie=fnCallback(sNameFile,oData,date.toGMTString(),aParts.join('/')+"/");}
else
{sFullCookie=sNameFile+"="+encodeURIComponent(sValue)+"; expires="+date.toGMTString()+"; path="+aParts.join('/')+"/";}
var sOldName="",iOldTime=9999999999999;var iLength=_fnReadCookie(sNameFile)!==null?document.cookie.length:sFullCookie.length+document.cookie.length;if(iLength+10>4096)
{var aCookies=document.cookie.split(';');for(var i=0,iLen=aCookies.length;i<iLen;i++)
{if(aCookies[i].indexOf(sBaseName)!=-1)
{var aSplitCookie=aCookies[i].split('=');try{oData=eval('('+decodeURIComponent(aSplitCookie[1])+')');}
catch(e){continue;}
if(typeof oData.iCreate!='undefined'&&oData.iCreate<iOldTime)
{sOldName=aSplitCookie[0];iOldTime=oData.iCreate;}}}
if(sOldName!=="")
{document.cookie=sOldName+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path="+
aParts.join('/')+"/";}}
document.cookie=sFullCookie;}
function _fnReadCookie(sName)
{var
aParts=window.location.pathname.split('/'),sNameEQ=sName+'_'+aParts[aParts.length-1].replace(/[\/:]/g,"").toLowerCase()+'=',sCookieContents=document.cookie.split(';');for(var i=0;i<sCookieContents.length;i++)
{var c=sCookieContents[i];while(c.charAt(0)==' ')
{c=c.substring(1,c.length);}
if(c.indexOf(sNameEQ)===0)
{return decodeURIComponent(c.substring(sNameEQ.length,c.length));}}
return null;}
function _fnGetUniqueThs(nThead)
{var nTrs=nThead.getElementsByTagName('tr');if(nTrs.length==1)
{return nTrs[0].getElementsByTagName('th');}
var aLayout=[],aReturn=[];var ROWSPAN=2,COLSPAN=3,TDELEM=4;var i,j,k,iLen,jLen,iColumnShifted;var fnShiftCol=function(a,i,j){while(typeof a[i][j]!='undefined'){j++;}
return j;};var fnAddRow=function(i){if(typeof aLayout[i]=='undefined'){aLayout[i]=[];}};for(i=0,iLen=nTrs.length;i<iLen;i++)
{fnAddRow(i);var iColumn=0;var nTds=[];for(j=0,jLen=nTrs[i].childNodes.length;j<jLen;j++)
{if(nTrs[i].childNodes[j].nodeName.toUpperCase()=="TD"||nTrs[i].childNodes[j].nodeName.toUpperCase()=="TH")
{nTds.push(nTrs[i].childNodes[j]);}}
for(j=0,jLen=nTds.length;j<jLen;j++)
{var iColspan=nTds[j].getAttribute('colspan')*1;var iRowspan=nTds[j].getAttribute('rowspan')*1;if(!iColspan||iColspan===0||iColspan===1)
{iColumnShifted=fnShiftCol(aLayout,i,iColumn);aLayout[i][iColumnShifted]=(nTds[j].nodeName.toUpperCase()=="TD")?TDELEM:nTds[j];if(iRowspan||iRowspan===0||iRowspan===1)
{for(k=1;k<iRowspan;k++)
{fnAddRow(i+k);aLayout[i+k][iColumnShifted]=ROWSPAN;}}
iColumn++;}
else
{iColumnShifted=fnShiftCol(aLayout,i,iColumn);for(k=0;k<iColspan;k++)
{aLayout[i][iColumnShifted+k]=COLSPAN;}
iColumn+=iColspan;}}}
for(i=0,iLen=aLayout.length;i<iLen;i++)
{for(j=0,jLen=aLayout[i].length;j<jLen;j++)
{if(typeof aLayout[i][j]=='object'&&typeof aReturn[j]=='undefined')
{aReturn[j]=aLayout[i][j];}}}
return aReturn;}
function _fnScrollBarWidth()
{var inner=document.createElement('p');var style=inner.style;style.width="100%";style.height="200px";var outer=document.createElement('div');style=outer.style;style.position="absolute";style.top="0px";style.left="0px";style.visibility="hidden";style.width="200px";style.height="150px";style.overflow="hidden";outer.appendChild(inner);document.body.appendChild(outer);var w1=inner.offsetWidth;outer.style.overflow='scroll';var w2=inner.offsetWidth;if(w1==w2)
{w2=outer.clientWidth;}
document.body.removeChild(outer);return(w1-w2);}
function _fnApplyToChildren(fn,an1,an2)
{for(var i=0,iLen=an1.length;i<iLen;i++)
{for(var j=0,jLen=an1[i].childNodes.length;j<jLen;j++)
{if(an1[i].childNodes[j].nodeType==1)
{if(typeof an2!='undefined')
{fn(an1[i].childNodes[j],an2[i].childNodes[j]);}
else
{fn(an1[i].childNodes[j]);}}}}}
function _fnMap(oRet,oSrc,sName,sMappedName)
{if(typeof sMappedName=='undefined')
{sMappedName=sName;}
if(typeof oSrc[sName]!='undefined')
{oRet[sMappedName]=oSrc[sName];}}
this.oApi._fnExternApiFunc=_fnExternApiFunc;this.oApi._fnInitalise=_fnInitalise;this.oApi._fnLanguageProcess=_fnLanguageProcess;this.oApi._fnAddColumn=_fnAddColumn;this.oApi._fnColumnOptions=_fnColumnOptions;this.oApi._fnAddData=_fnAddData;this.oApi._fnGatherData=_fnGatherData;this.oApi._fnDrawHead=_fnDrawHead;this.oApi._fnDraw=_fnDraw;this.oApi._fnReDraw=_fnReDraw;this.oApi._fnAjaxUpdate=_fnAjaxUpdate;this.oApi._fnAjaxUpdateDraw=_fnAjaxUpdateDraw;this.oApi._fnAddOptionsHtml=_fnAddOptionsHtml;this.oApi._fnFeatureHtmlTable=_fnFeatureHtmlTable;this.oApi._fnScrollDraw=_fnScrollDraw;this.oApi._fnAjustColumnSizing=_fnAjustColumnSizing;this.oApi._fnFeatureHtmlFilter=_fnFeatureHtmlFilter;this.oApi._fnFilterComplete=_fnFilterComplete;this.oApi._fnFilterCustom=_fnFilterCustom;this.oApi._fnFilterColumn=_fnFilterColumn;this.oApi._fnFilter=_fnFilter;this.oApi._fnBuildSearchArray=_fnBuildSearchArray;this.oApi._fnBuildSearchRow=_fnBuildSearchRow;this.oApi._fnFilterCreateSearch=_fnFilterCreateSearch;this.oApi._fnDataToSearch=_fnDataToSearch;this.oApi._fnSort=_fnSort;this.oApi._fnSortAttachListener=_fnSortAttachListener;this.oApi._fnSortingClasses=_fnSortingClasses;this.oApi._fnFeatureHtmlPaginate=_fnFeatureHtmlPaginate;this.oApi._fnPageChange=_fnPageChange;this.oApi._fnFeatureHtmlInfo=_fnFeatureHtmlInfo;this.oApi._fnUpdateInfo=_fnUpdateInfo;this.oApi._fnFeatureHtmlLength=_fnFeatureHtmlLength;this.oApi._fnFeatureHtmlProcessing=_fnFeatureHtmlProcessing;this.oApi._fnProcessingDisplay=_fnProcessingDisplay;this.oApi._fnVisibleToColumnIndex=_fnVisibleToColumnIndex;this.oApi._fnColumnIndexToVisible=_fnColumnIndexToVisible;this.oApi._fnNodeToDataIndex=_fnNodeToDataIndex;this.oApi._fnVisbleColumns=_fnVisbleColumns;this.oApi._fnCalculateEnd=_fnCalculateEnd;this.oApi._fnConvertToWidth=_fnConvertToWidth;this.oApi._fnCalculateColumnWidths=_fnCalculateColumnWidths;this.oApi._fnScrollingWidthAdjust=_fnScrollingWidthAdjust;this.oApi._fnGetWidestNode=_fnGetWidestNode;this.oApi._fnGetMaxLenString=_fnGetMaxLenString;this.oApi._fnStringToCss=_fnStringToCss;this.oApi._fnArrayCmp=_fnArrayCmp;this.oApi._fnDetectType=_fnDetectType;this.oApi._fnSettingsFromNode=_fnSettingsFromNode;this.oApi._fnGetDataMaster=_fnGetDataMaster;this.oApi._fnGetTrNodes=_fnGetTrNodes;this.oApi._fnGetTdNodes=_fnGetTdNodes;this.oApi._fnEscapeRegex=_fnEscapeRegex;this.oApi._fnDeleteIndex=_fnDeleteIndex;this.oApi._fnReOrderIndex=_fnReOrderIndex;this.oApi._fnColumnOrdering=_fnColumnOrdering;this.oApi._fnLog=_fnLog;this.oApi._fnClearTable=_fnClearTable;this.oApi._fnSaveState=_fnSaveState;this.oApi._fnLoadState=_fnLoadState;this.oApi._fnCreateCookie=_fnCreateCookie;this.oApi._fnReadCookie=_fnReadCookie;this.oApi._fnGetUniqueThs=_fnGetUniqueThs;this.oApi._fnScrollBarWidth=_fnScrollBarWidth;this.oApi._fnApplyToChildren=_fnApplyToChildren;this.oApi._fnMap=_fnMap;var _that=this;return this.each(function()
{var i=0,iLen,j,jLen,k,kLen;for(i=0,iLen=_aoSettings.length;i<iLen;i++)
{if(_aoSettings[i].nTable==this)
{if(typeof oInit=='undefined'||(typeof oInit.bRetrieve!='undefined'&&oInit.bRetrieve===true))
{return _aoSettings[i].oInstance;}
else if(typeof oInit.bDestroy!='undefined'&&oInit.bDestroy===true)
{_aoSettings[i].oInstance.fnDestroy();break;}
else
{_fnLog(_aoSettings[i],0,"Cannot reinitialise DataTable.\n\n"+"To retrieve the DataTables object for this table, please pass either no arguments "+"to the dataTable() function, or set bRetrieve to true. Alternatively, to destory "+"the old table and create a new one, set bDestroy to true (note that a lot of "+"changes to the configuration can be made through the API which is usually much "+"faster).");return;}}
if(_aoSettings[i].sTableId!==""&&_aoSettings[i].sTableId==this.getAttribute('id'))
{_aoSettings.splice(i,1);break;}}
var oSettings=new classSettings();_aoSettings.push(oSettings);var bInitHandedOff=false;var bUsePassedData=false;var sId=this.getAttribute('id');if(sId!==null)
{oSettings.sTableId=sId;oSettings.sInstance=sId;}
else
{oSettings.sInstance=_oExt._oExternConfig.iNextUnique++;}
if(this.nodeName.toLowerCase()!='table')
{_fnLog(oSettings,0,"Attempted to initialise DataTables on a node which is not a "+"table: "+this.nodeName);return;}
oSettings.nTable=this;oSettings.oInstance=_that.length==1?_that:$(this).dataTable();oSettings.oApi=_that.oApi;oSettings.sDestroyWidth=$(this).width();if(typeof oInit!='undefined'&&oInit!==null)
{oSettings.oInit=oInit;_fnMap(oSettings.oFeatures,oInit,"bPaginate");_fnMap(oSettings.oFeatures,oInit,"bLengthChange");_fnMap(oSettings.oFeatures,oInit,"bFilter");_fnMap(oSettings.oFeatures,oInit,"bSort");_fnMap(oSettings.oFeatures,oInit,"bInfo");_fnMap(oSettings.oFeatures,oInit,"bProcessing");_fnMap(oSettings.oFeatures,oInit,"bAutoWidth");_fnMap(oSettings.oFeatures,oInit,"bSortClasses");_fnMap(oSettings.oFeatures,oInit,"bServerSide");_fnMap(oSettings.oScroll,oInit,"sScrollX","sX");_fnMap(oSettings.oScroll,oInit,"sScrollXInner","sXInner");_fnMap(oSettings.oScroll,oInit,"sScrollY","sY");_fnMap(oSettings.oScroll,oInit,"bScrollCollapse","bCollapse");_fnMap(oSettings.oScroll,oInit,"bScrollInfinite","bInfinite");_fnMap(oSettings.oScroll,oInit,"iScrollLoadGap","iLoadGap");_fnMap(oSettings.oScroll,oInit,"bScrollAutoCss","bAutoCss");_fnMap(oSettings,oInit,"asStripClasses");_fnMap(oSettings,oInit,"fnRowCallback");_fnMap(oSettings,oInit,"fnHeaderCallback");_fnMap(oSettings,oInit,"fnFooterCallback");_fnMap(oSettings,oInit,"fnCookieCallback");_fnMap(oSettings,oInit,"fnInitComplete");_fnMap(oSettings,oInit,"fnServerData");_fnMap(oSettings,oInit,"fnFormatNumber");_fnMap(oSettings,oInit,"aaSorting");_fnMap(oSettings,oInit,"aaSortingFixed");_fnMap(oSettings,oInit,"aLengthMenu");_fnMap(oSettings,oInit,"sPaginationType");_fnMap(oSettings,oInit,"sAjaxSource");_fnMap(oSettings,oInit,"iCookieDuration");_fnMap(oSettings,oInit,"sCookiePrefix");_fnMap(oSettings,oInit,"sDom");_fnMap(oSettings,oInit,"oSearch","oPreviousSearch");_fnMap(oSettings,oInit,"aoSearchCols","aoPreSearchCols");_fnMap(oSettings,oInit,"iDisplayLength","_iDisplayLength");_fnMap(oSettings,oInit,"bJQueryUI","bJUI");_fnMap(oSettings.oLanguage,oInit,"fnInfoCallback");if(typeof oInit.fnDrawCallback=='function')
{oSettings.aoDrawCallback.push({"fn":oInit.fnDrawCallback,"sName":"user"});}
if(typeof oInit.fnStateSaveCallback=='function')
{oSettings.aoStateSave.push({"fn":oInit.fnStateSaveCallback,"sName":"user"});}
if(typeof oInit.fnStateLoadCallback=='function')
{oSettings.aoStateLoad.push({"fn":oInit.fnStateLoadCallback,"sName":"user"});}
if(oSettings.oFeatures.bServerSide&&oSettings.oFeatures.bSort&&oSettings.oFeatures.bSortClasses)
{oSettings.aoDrawCallback.push({"fn":_fnSortingClasses,"sName":"server_side_sort_classes"});}
if(typeof oInit.bJQueryUI!='undefined'&&oInit.bJQueryUI)
{oSettings.oClasses=_oExt.oJUIClasses;if(typeof oInit.sDom=='undefined')
{oSettings.sDom='<"H"lfr>t<"F"ip>';}}
if(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")
{oSettings.oScroll.iBarWidth=_fnScrollBarWidth();}
if(typeof oInit.iDisplayStart!='undefined'&&typeof oSettings.iInitDisplayStart=='undefined')
{oSettings.iInitDisplayStart=oInit.iDisplayStart;oSettings._iDisplayStart=oInit.iDisplayStart;}
if(typeof oInit.bStateSave!='undefined')
{oSettings.oFeatures.bStateSave=oInit.bStateSave;_fnLoadState(oSettings,oInit);oSettings.aoDrawCallback.push({"fn":_fnSaveState,"sName":"state_save"});}
if(typeof oInit.aaData!='undefined')
{bUsePassedData=true;}
if(typeof oInit!='undefined'&&typeof oInit.aoData!='undefined')
{oInit.aoColumns=oInit.aoData;}
if(typeof oInit.oLanguage!='undefined')
{if(typeof oInit.oLanguage.sUrl!='undefined'&&oInit.oLanguage.sUrl!=="")
{oSettings.oLanguage.sUrl=oInit.oLanguage.sUrl;$.getJSON(oSettings.oLanguage.sUrl,null,function(json){_fnLanguageProcess(oSettings,json,true);});bInitHandedOff=true;}
else
{_fnLanguageProcess(oSettings,oInit.oLanguage,false);}}}
else
{oInit={};}
if(typeof oInit.asStripClasses=='undefined')
{oSettings.asStripClasses.push(oSettings.oClasses.sStripOdd);oSettings.asStripClasses.push(oSettings.oClasses.sStripEven);}
var bStripeRemove=false;var anRows=$('>tbody>tr',this);for(i=0,iLen=oSettings.asStripClasses.length;i<iLen;i++)
{if(anRows.filter(":lt(2)").hasClass(oSettings.asStripClasses[i]))
{bStripeRemove=true;break;}}
if(bStripeRemove)
{oSettings.asDestoryStrips=['',''];if($(anRows[0]).hasClass(oSettings.oClasses.sStripOdd))
{oSettings.asDestoryStrips[0]+=oSettings.oClasses.sStripOdd+" ";}
if($(anRows[0]).hasClass(oSettings.oClasses.sStripEven))
{oSettings.asDestoryStrips[0]+=oSettings.oClasses.sStripEven;}
if($(anRows[1]).hasClass(oSettings.oClasses.sStripOdd))
{oSettings.asDestoryStrips[1]+=oSettings.oClasses.sStripOdd+" ";}
if($(anRows[1]).hasClass(oSettings.oClasses.sStripEven))
{oSettings.asDestoryStrips[1]+=oSettings.oClasses.sStripEven;}
anRows.removeClass(oSettings.asStripClasses.join(' '));}
var nThead=this.getElementsByTagName('thead');var anThs=nThead.length===0?[]:_fnGetUniqueThs(nThead[0]);var aoColumnsInit;if(typeof oInit.aoColumns=='undefined')
{aoColumnsInit=[];for(i=0,iLen=anThs.length;i<iLen;i++)
{aoColumnsInit.push(null);}}
else
{aoColumnsInit=oInit.aoColumns;}
for(i=0,iLen=aoColumnsInit.length;i<iLen;i++)
{if(typeof oInit.saved_aoColumns!='undefined'&&oInit.saved_aoColumns.length==iLen)
{if(aoColumnsInit[i]===null)
{aoColumnsInit[i]={};}
aoColumnsInit[i].bVisible=oInit.saved_aoColumns[i].bVisible;}
_fnAddColumn(oSettings,anThs?anThs[i]:null);}
if(typeof oInit.aoColumnDefs!='undefined')
{for(i=oInit.aoColumnDefs.length-1;i>=0;i--)
{var aTargets=oInit.aoColumnDefs[i].aTargets;if(!$.isArray(aTargets))
{_fnLog(oSettings,1,'aTargets must be an array of targets, not a '+(typeof aTargets));}
for(j=0,jLen=aTargets.length;j<jLen;j++)
{if(typeof aTargets[j]=='number'&&aTargets[j]>=0)
{while(oSettings.aoColumns.length<=aTargets[j])
{_fnAddColumn(oSettings);}
_fnColumnOptions(oSettings,aTargets[j],oInit.aoColumnDefs[i]);}
else if(typeof aTargets[j]=='number'&&aTargets[j]<0)
{_fnColumnOptions(oSettings,oSettings.aoColumns.length+aTargets[j],oInit.aoColumnDefs[i]);}
else if(typeof aTargets[j]=='string')
{for(k=0,kLen=oSettings.aoColumns.length;k<kLen;k++)
{if(aTargets[j]=="_all"||oSettings.aoColumns[k].nTh.className.indexOf(aTargets[j])!=-1)
{_fnColumnOptions(oSettings,k,oInit.aoColumnDefs[i]);}}}}}}
if(typeof aoColumnsInit!='undefined')
{for(i=0,iLen=aoColumnsInit.length;i<iLen;i++)
{_fnColumnOptions(oSettings,i,aoColumnsInit[i]);}}
for(i=0,iLen=oSettings.aaSorting.length;i<iLen;i++)
{if(oSettings.aaSorting[i][0]>=oSettings.aoColumns.length)
{oSettings.aaSorting[i][0]=0;}
var oColumn=oSettings.aoColumns[oSettings.aaSorting[i][0]];if(typeof oSettings.aaSorting[i][2]=='undefined')
{oSettings.aaSorting[i][2]=0;}
if(typeof oInit.aaSorting=="undefined"&&typeof oSettings.saved_aaSorting=="undefined")
{oSettings.aaSorting[i][1]=oColumn.asSorting[0];}
for(j=0,jLen=oColumn.asSorting.length;j<jLen;j++)
{if(oSettings.aaSorting[i][1]==oColumn.asSorting[j])
{oSettings.aaSorting[i][2]=j;break;}}}
_fnSortingClasses(oSettings);if(this.getElementsByTagName('thead').length===0)
{this.appendChild(document.createElement('thead'));}
if(this.getElementsByTagName('tbody').length===0)
{this.appendChild(document.createElement('tbody'));}
oSettings.nTHead=this.getElementsByTagName('thead')[0];oSettings.nTBody=this.getElementsByTagName('tbody')[0];if(this.getElementsByTagName('tfoot').length>0)
{oSettings.nTFoot=this.getElementsByTagName('tfoot')[0];}
if(bUsePassedData)
{for(i=0;i<oInit.aaData.length;i++)
{_fnAddData(oSettings,oInit.aaData[i]);}}
else
{_fnGatherData(oSettings);}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bInitialised=true;if(bInitHandedOff===false)
{_fnInitalise(oSettings);}});};})(jQuery,window,document);

;(function($){$.fn.ajaxSubmit=function(options){if(!this.length){log('ajaxSubmit: skipping submit process - no element selected');return this;}
if(typeof options=='function'){options={success:options};}
var action=this.attr('action');var url=(typeof action==='string')?$.trim(action):'';if(url){url=(url.match(/^([^#]+)/)||[])[1];}
url=url||window.location.href||'';options=$.extend(true,{url:url,type:this[0].getAttribute('method')||'GET',iframeSrc:/^https/i.test(window.location.href||'')?'javascript:false':'about:blank'},options);var veto={};this.trigger('form-pre-serialize',[this,options,veto]);if(veto.veto){log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');return this;}
if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){log('ajaxSubmit: submit aborted via beforeSerialize callback');return this;}
var n,v,a=this.formToArray(options.semantic);if(options.data){options.extraData=options.data;for(n in options.data){if(options.data[n]instanceof Array){for(var k in options.data[n]){a.push({name:n,value:options.data[n][k]});}}
else{v=options.data[n];v=$.isFunction(v)?v():v;a.push({name:n,value:v});}}}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){log('ajaxSubmit: submit aborted via beforeSubmit callback');return this;}
this.trigger('form-submit-validate',[a,this,options,veto]);if(veto.veto){log('ajaxSubmit: submit vetoed via form-submit-validate trigger');return this;}
var q=$.param(a);if(options.type.toUpperCase()=='GET'){options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;options.data=null;}
else{options.data=q;}
var $form=this,callbacks=[];if(options.resetForm){callbacks.push(function(){$form.resetForm();});}
if(options.clearForm){callbacks.push(function(){$form.clearForm();});}
if(!options.dataType&&options.target){var oldSuccess=options.success||function(){};callbacks.push(function(data){var fn=options.replaceTarget?'replaceWith':'html';$(options.target)[fn](data).each(oldSuccess,arguments);});}
else if(options.success){callbacks.push(options.success);}
options.success=function(data,status,xhr){var context=options.context||options;for(var i=0,max=callbacks.length;i<max;i++){callbacks[i].apply(context,[data,status,xhr||$form,$form]);}};var fileInputs=$('input:file',this).length>0;var mp='multipart/form-data';var multipart=($form.attr('enctype')==mp||$form.attr('encoding')==mp);if(options.iframe!==false&&(fileInputs||options.iframe||multipart)){if(options.closeKeepAlive){$.get(options.closeKeepAlive,fileUpload);}
else{fileUpload();}}
else{$.ajax(options);}
this.trigger('form-submit-notify',[this,options]);return this;function fileUpload(){var form=$form[0];if($(':input[name=submit],:input[id=submit]',form).length){alert('Error: Form elements must not have name or id of "submit".');return;}
var s=$.extend(true,{},$.ajaxSettings,options);s.context=s.context||s;var id='jqFormIO'+(new Date().getTime()),fn='_'+id;var $io=$('<iframe id="'+id+'" name="'+id+'" src="'+s.iframeSrc+'" />');var io=$io[0];$io.css({position:'absolute',top:'-1000px',left:'-1000px'});var xhr={aborted:0,responseText:null,responseXML:null,status:0,statusText:'n/a',getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){log('aborting upload...');var e='aborted';this.aborted=1;$io.attr('src',s.iframeSrc);xhr.error=e;s.error&&s.error.call(s.context,xhr,'error',e);g&&$.event.trigger("ajaxError",[xhr,s,e]);s.complete&&s.complete.call(s.context,xhr,'error');}};var g=s.global;if(g&&!$.active++){$.event.trigger("ajaxStart");}
if(g){$.event.trigger("ajaxSend",[xhr,s]);}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){if(s.global){$.active--;}
return;}
if(xhr.aborted){return;}
var timedOut=0;var sub=form.clk;if(sub){var n=sub.name;if(n&&!sub.disabled){s.extraData=s.extraData||{};s.extraData[n]=sub.value;if(sub.type=="image"){s.extraData[n+'.x']=form.clk_x;s.extraData[n+'.y']=form.clk_y;}}}
function doSubmit(){var t=$form.attr('target'),a=$form.attr('action');form.setAttribute('target',id);if(form.getAttribute('method')!='POST'){form.setAttribute('method','POST');}
if(form.getAttribute('action')!=s.url){form.setAttribute('action',s.url);}
if(!s.skipEncodingOverride){$form.attr({encoding:'multipart/form-data',enctype:'multipart/form-data'});}
if(s.timeout){setTimeout(function(){timedOut=true;cb();},s.timeout);}
var extraInputs=[];try{if(s.extraData){for(var n in s.extraData){extraInputs.push($('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />').appendTo(form)[0]);}}
$io.appendTo('body');io.attachEvent?io.attachEvent('onload',cb):io.addEventListener('load',cb,false);form.submit();}
finally{form.setAttribute('action',a);if(t){form.setAttribute('target',t);}else{$form.removeAttr('target');}
$(extraInputs).remove();}}
if(s.forceSync){doSubmit();}
else{setTimeout(doSubmit,10);}
var data,doc,domCheckCount=50;function cb(){if(xhr.aborted){return;}
var doc=io.contentWindow?io.contentWindow.document:io.contentDocument?io.contentDocument:io.document;if(!doc||doc.location.href==s.iframeSrc){return;}
io.detachEvent?io.detachEvent('onload',cb):io.removeEventListener('load',cb,false);var ok=true;try{if(timedOut){throw'timeout';}
var isXml=s.dataType=='xml'||doc.XMLDocument||$.isXMLDoc(doc);log('isXml='+isXml);if(!isXml&&window.opera&&(doc.body==null||doc.body.innerHTML=='')){if(--domCheckCount){log('requeing onLoad callback, DOM not available');setTimeout(cb,250);return;}}
xhr.responseText=doc.body?doc.body.innerHTML:doc.documentElement?doc.documentElement.innerHTML:null;xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;xhr.getResponseHeader=function(header){var headers={'content-type':s.dataType};return headers[header];};var scr=/(json|script)/.test(s.dataType);if(scr||s.textarea){var ta=doc.getElementsByTagName('textarea')[0];if(ta){xhr.responseText=ta.value;}
else if(scr){var pre=doc.getElementsByTagName('pre')[0];var b=doc.getElementsByTagName('body')[0];if(pre){xhr.responseText=pre.textContent;}
else if(b){xhr.responseText=b.innerHTML;}}}
else if(s.dataType=='xml'&&!xhr.responseXML&&xhr.responseText!=null){xhr.responseXML=toXml(xhr.responseText);}
data=httpData(xhr,s.dataType,s);}
catch(e){log('error caught:',e);ok=false;xhr.error=e;s.error&&s.error.call(s.context,xhr,'error',e);g&&$.event.trigger("ajaxError",[xhr,s,e]);}
if(xhr.aborted){log('upload aborted');ok=false;}
if(ok){s.success&&s.success.call(s.context,data,'success',xhr);g&&$.event.trigger("ajaxSuccess",[xhr,s]);}
g&&$.event.trigger("ajaxComplete",[xhr,s]);if(g&&!--$.active){$.event.trigger("ajaxStop");}
s.complete&&s.complete.call(s.context,xhr,ok?'success':'error');setTimeout(function(){$io.removeData('form-plugin-onload');$io.remove();xhr.responseXML=null;},100);}
var toXml=$.parseXML||function(s,doc){if(window.ActiveXObject){doc=new ActiveXObject('Microsoft.XMLDOM');doc.async='false';doc.loadXML(s);}
else{doc=(new DOMParser()).parseFromString(s,'text/xml');}
return(doc&&doc.documentElement&&doc.documentElement.nodeName!='parsererror')?doc:null;};var parseJSON=$.parseJSON||function(s){return window['eval']('('+s+')');};var httpData=function(xhr,type,s){var ct=xhr.getResponseHeader('content-type')||'',xml=type==='xml'||!type&&ct.indexOf('xml')>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.nodeName==='parsererror'){$.error&&$.error('parsererror');}
if(s&&s.dataFilter){data=s.dataFilter(data,type);}
if(typeof data==='string'){if(type==='json'||!type&&ct.indexOf('json')>=0){data=parseJSON(data);}else if(type==="script"||!type&&ct.indexOf("javascript")>=0){$.globalEval(data);}}
return data;};}};$.fn.ajaxForm=function(options){if(this.length===0){var o={s:this.selector,c:this.context};if(!$.isReady&&o.s){log('DOM not ready, queuing ajaxForm');$(function(){$(o.s,o.c).ajaxForm(options);});return this;}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));return this;}
return this.ajaxFormUnbind().bind('submit.form-plugin',function(e){if(!e.isDefaultPrevented()){e.preventDefault();$(this).ajaxSubmit(options);}}).bind('click.form-plugin',function(e){var target=e.target;var $el=$(target);if(!($el.is(":submit,input:image"))){var t=$el.closest(':submit');if(t.length==0){return;}
target=t[0];}
var form=this;form.clk=target;if(target.type=='image'){if(e.offsetX!=undefined){form.clk_x=e.offsetX;form.clk_y=e.offsetY;}else if(typeof $.fn.offset=='function'){var offset=$el.offset();form.clk_x=e.pageX-offset.left;form.clk_y=e.pageY-offset.top;}else{form.clk_x=e.pageX-target.offsetLeft;form.clk_y=e.pageY-target.offsetTop;}}
setTimeout(function(){form.clk=form.clk_x=form.clk_y=null;},100);});};$.fn.ajaxFormUnbind=function(){return this.unbind('submit.form-plugin click.form-plugin');};$.fn.formToArray=function(semantic){var a=[];if(this.length===0){return a;}
var form=this[0];var els=semantic?form.getElementsByTagName('*'):form.elements;if(!els){return a;}
var i,j,n,v,el,max,jmax;for(i=0,max=els.length;i<max;i++){el=els[i];n=el.name;if(!n){continue;}
if(semantic&&form.clk&&el.type=="image"){if(!el.disabled&&form.clk==el){a.push({name:n,value:$(el).val()});a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});}
continue;}
v=$.fieldValue(el,true);if(v&&v.constructor==Array){for(j=0,jmax=v.length;j<jmax;j++){a.push({name:n,value:v[j]});}}
else if(v!==null&&typeof v!='undefined'){a.push({name:n,value:v});}}
if(!semantic&&form.clk){var $input=$(form.clk),input=$input[0];n=input.name;if(n&&!input.disabled&&input.type=='image'){a.push({name:n,value:$input.val()});a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});}}
return a;};$.fn.formSerialize=function(semantic){return $.param(this.formToArray(semantic));};$.fn.fieldSerialize=function(successful){var a=[];this.each(function(){var n=this.name;if(!n){return;}
var v=$.fieldValue(this,successful);if(v&&v.constructor==Array){for(var i=0,max=v.length;i<max;i++){a.push({name:n,value:v[i]});}}
else if(v!==null&&typeof v!='undefined'){a.push({name:this.name,value:v});}});return $.param(a);};$.fn.fieldValue=function(successful){for(var val=[],i=0,max=this.length;i<max;i++){var el=this[i];var v=$.fieldValue(el,successful);if(v===null||typeof v=='undefined'||(v.constructor==Array&&!v.length)){continue;}
v.constructor==Array?$.merge(val,v):val.push(v);}
return val;};$.fieldValue=function(el,successful){var n=el.name,t=el.type,tag=el.tagName.toLowerCase();if(successful===undefined){successful=true;}
if(successful&&(!n||el.disabled||t=='reset'||t=='button'||(t=='checkbox'||t=='radio')&&!el.checked||(t=='submit'||t=='image')&&el.form&&el.form.clk!=el||tag=='select'&&el.selectedIndex==-1)){return null;}
if(tag=='select'){var index=el.selectedIndex;if(index<0){return null;}
var a=[],ops=el.options;var one=(t=='select-one');var max=(one?index+1:ops.length);for(var i=(one?index:0);i<max;i++){var op=ops[i];if(op.selected){var v=op.value;if(!v){v=(op.attributes&&op.attributes['value']&&!(op.attributes['value'].specified))?op.text:op.value;}
if(one){return v;}
a.push(v);}}
return a;}
return $(el).val();};$.fn.clearForm=function(){return this.each(function(){$('input,select,textarea',this).clearFields();});};$.fn.clearFields=$.fn.clearInputs=function(){return this.each(function(){var t=this.type,tag=this.tagName.toLowerCase();if(t=='text'||t=='password'||tag=='textarea'){this.value='';}
else if(t=='checkbox'||t=='radio'){this.checked=false;}
else if(tag=='select'){this.selectedIndex=-1;}});};$.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=='function'||(typeof this.reset=='object'&&!this.reset.nodeType)){this.reset();}});};$.fn.enable=function(b){if(b===undefined){b=true;}
return this.each(function(){this.disabled=!b;});};$.fn.selected=function(select){if(select===undefined){select=true;}
return this.each(function(){var t=this.type;if(t=='checkbox'||t=='radio'){this.checked=select;}
else if(this.tagName.toLowerCase()=='option'){var $sel=$(this).parent('select');if(select&&$sel[0]&&$sel[0].type=='select-one'){$sel.find('option').selected(false);}
this.selected=select;}});};function log(){if($.fn.ajaxSubmit.debug){var msg='[jquery.form] '+Array.prototype.join.call(arguments,'');if(window.console&&window.console.log){window.console.log(msg);}
else if(window.opera&&window.opera.postError){window.opera.postError(msg);}}};})(jQuery);


(function($){$.extend($.fn,{validate:function(options){if(!this.length){options&&options.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return;}
var validator=$.data(this[0],'validator');if(validator){return validator;}
validator=new $.validator(options,this[0]);$.data(this[0],'validator',validator);if(validator.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){validator.cancelSubmit=true;});if(validator.settings.submitHandler){this.find("input, button").filter(":submit").click(function(){validator.submitButton=this;});}
this.submit(function(event){if(validator.settings.debug)
event.preventDefault();function handle(){if(validator.settings.submitHandler){if(validator.submitButton){var hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);}
validator.settings.submitHandler.call(validator,validator.currentForm);if(validator.submitButton){hidden.remove();}
return false;}
return true;}
if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}
if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}
return handle();}else{validator.focusInvalid();return false;}});}
return validator;},valid:function(){if($(this[0]).is('form')){return this.validate().form();}else{var valid=true;var validator=$(this[0].form).validate();this.each(function(){valid&=validator.element(this);});return valid;}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,'validator').settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));staticRules[element.name]=existingRules;if(argument.messages)
settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}
var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}
var data=$.validator.normalizeRules($.extend({},$.validator.metadataRules(element),$.validator.classRules(element),$.validator.attributeRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data);}
return data;}});$.extend($.expr[":"],{blank:function(a){return!$.trim(""+a.value);},filled:function(a){return!!$.trim(""+a.value);},unchecked:function(a){return!a.checked;}});$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init();};$.validator.format=function(source,params){if(arguments.length==1)
return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};if(arguments.length>2&&params.constructor!=Array){params=$.makeArray(arguments).slice(1);}
if(params.constructor!=Array){params=[params];}
$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),n);});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(element){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(element)).hide();}},onfocusout:function(element){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element){if(element.name in this.submitted||element==this.lastElement){this.element(element);}},onclick:function(element){if(element.name in this.submitted)
this.element(element);else if(element.parentNode.name in this.submitted)
this.element(element.parentNode);},highlight:function(element,errorClass,validClass){$(element).addClass(errorClass).removeClass(validClass);},unhighlight:function(element,errorClass,validClass){$(element).removeClass(errorClass).addClass(validClass);}},setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=(this.groups={});$.each(this.settings.groups,function(key,value){$.each(value.split(/\s/),function(index,name){groups[name]=key;});});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator"),eventType="on"+event.type.replace(/^validate/,"");validator.settings[eventType]&&validator.settings[eventType].call(validator,this[0]);}
$(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",delegate).validateDelegate(":radio, :checkbox, select, option","click",delegate);if(this.settings.invalidHandler)
$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid())
$(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=(this.currentElements=this.elements());elements[i];i++){this.check(elements[i]);}
return this.valid();},element:function(element){element=this.clean(element);this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element);if(result){delete this.invalid[element.name];}else{this.invalid[element.name]=true;}
if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers);}
this.showErrors();return result;},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}
this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}
this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){if($.fn.resetForm)
$(this.currentForm).resetForm();this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass);},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){var count=0;for(var i in obj)
count++;return count;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return this.size()==0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name==lastActive.name;}).length==1&&lastActive;},elements:function(){var validator=this,rulesCache={};return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&validator.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in rulesCache||!validator.objectLength($(this).rules()))
return false;rulesCache[this.name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){return $(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext);},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},check:function(element){element=this.clean(element);if(this.checkable(element)){element=this.findByName(element.name).not(this.settings.ignore)[0];}
var rules=$(element).rules();var dependencyMismatch=false;for(var method in rules){var rule={method:method,parameters:rules[method]};try{var result=$.validator.methods[method].call(this,element.value.replace(/\r/g,""),element,rule.parameters);if(result=="dependency-mismatch"){dependencyMismatch=true;continue;}
dependencyMismatch=false;if(result=="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}
if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){this.settings.debug&&window.console&&console.log("exception occured when checking element "+element.id
+", check the '"+rule.method+"' method",e);throw e;}}
if(dependencyMismatch)
return;if(this.objectLength(rules))
this.successList.push(element);return true;},customMetaMessage:function(element,method){if(!$.metadata)
return;var meta=this.settings.meta?$(element).metadata()[this.settings.meta]:$(element).metadata();return meta&&meta.messages&&meta.messages[method];},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor==String?m:m[method]);},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined)
return arguments[i];}
return undefined;},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customMetaMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message=="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=jQuery.format(message.replace(theregex,'{$1}'),rule.parameters);}
this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper)
toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));return toToggle;},defaultShowErrors:function(){for(var i=0;this.errorList[i];i++){var error=this.errorList[i];this.settings.highlight&&this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);this.showLabel(error.element,error.message);}
if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}
if(this.settings.success){for(var i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}
if(this.settings.unhighlight){for(var i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}
this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass().addClass(this.settings.errorClass);label.attr("generated")&&label.html(message);}else{label=$("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(element),generated:true}).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}
if(!this.labelContainer.append(label).length)
this.settings.errorPlacement?this.settings.errorPlacement(label,$(element)):label.insertAfter(element);}
if(!message&&this.settings.success){label.text("");typeof this.settings.success=="string"?label.addClass(this.settings.success):this.settings.success(label);}
this.toShow=this.toShow.add(label);},errorsFor:function(element){var name=this.idOrName(element);return this.errors().filter(function(){return $(this).attr('for')==name;});},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},checkable:function(element){return/radio|checkbox/i.test(element.type);},findByName:function(name){var form=this.currentForm;return $(document.getElementsByName(name)).map(function(index,element){return element.form==form&&element.name==name&&element||null;});},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case'select':return $("option:selected",element).length;case'input':if(this.checkable(element))
return this.findByName(element.name).filter(':checked').length;}
return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param,element){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){return!$.validator.methods.required.call(this,$.trim(element.value),element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0)
this.pendingRequest=0;delete this.pending[element.name];if(valid&&this.pendingRequest==0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false;}else if(!valid&&this.pendingRequest==0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){className.constructor==String?this.classRuleSettings[className]=rules:$.extend(this.classRuleSettings,className);},classRules:function(element){var rules={};var classes=$(element).attr('class');classes&&$.each(classes.split(' '),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});return rules;},attributeRules:function(element){var rules={};var $element=$(element);for(var method in $.validator.methods){var value=$element.attr(method);if(value){rules[method]=value;}}
if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}
return rules;},metadataRules:function(element){if(!$.metadata)return{};var meta=$.data(element.form,'validator').settings.meta;return meta?$(element).metadata()[meta]:$(element).metadata();},staticRules:function(element){var rules={};var validator=$.data(element.form,'validator');if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}
return rules;},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return;}
if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}
if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});$.each(['minlength','maxlength','min','max'],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(['rangelength','range'],function(){if(rules[this]){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}
if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}
if(rules.messages){delete rules.messages;}
return rules;},normalizeRule:function(data){if(typeof data=="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}
return data;},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!=undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{required:function(value,element,param){if(!this.depend(param,element))
return"dependency-mismatch";switch(element.nodeName.toLowerCase()){case'select':var val=$(element).val();return val&&val.length>0;case'input':if(this.checkable(element))
return this.getLength(value,element)>0;default:return $.trim(value).length>0;}},remote:function(value,element,param){if(this.optional(element))
return"dependency-mismatch";var previous=this.previousValue(element);if(!this.settings.messages[element.name])
this.settings.messages[element.name]={};previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param=="string"&&{url:param}||param;if(this.pending[element.name]){return"pending";}
if(previous.old===value){return previous.valid;}
previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true;if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);validator.showErrors();}else{var errors={};var message=response||validator.defaultMessage(element,"remote");errors[element.name]=previous.message=$.isFunction(message)?message(value):message;validator.showErrors(errors);}
previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";},minlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)>=param;},maxlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)<=param;},rangelength:function(value,element,param){var length=this.getLength($.trim(value),element);return this.optional(element)||(length>=param[0]&&length<=param[1]);},min:function(value,element,param){return this.optional(element)||value>=param;},max:function(value,element,param){return this.optional(element)||value<=param;},range:function(value,element,param){return this.optional(element)||(value>=param[0]&&value<=param[1]);},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);},url:function(value,element){return this.optional(element)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value));},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},creditcard:function(value,element){if(this.optional(element))
return"dependency-mismatch";if(/[^0-9-]+/.test(value))
return false;var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(var n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);var nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9)
nDigit-=9;}
nCheck+=nDigit;bEven=!bEven;}
return(nCheck%10)==0;},accept:function(value,element,param){param=typeof param=="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";return this.optional(element)||value.match(new RegExp(".("+param+")$","i"));},equalTo:function(value,element,param){var target=$(param).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid();});return value==target.val();}}});$.format=$.validator.format;})(jQuery);;(function($){var pendingRequests={};if($.ajaxPrefilter){$.ajaxPrefilter(function(settings,_,xhr){var port=settings.port;if(settings.mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}
pendingRequests[port]=xhr;}});}else{var ajax=$.ajax;$.ajax=function(settings){var mode=("mode"in settings?settings:$.ajaxSettings).mode,port=("port"in settings?settings:$.ajaxSettings).port;if(mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}
return(pendingRequests[port]=ajax.apply(this,arguments));}
return ajax.apply(this,arguments);};}})(jQuery);;(function($){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){$.each({focus:'focusin',blur:'focusout'},function(original,fix){$.event.special[fix]={setup:function(){this.addEventListener(original,handler,true);},teardown:function(){this.removeEventListener(original,handler,true);},handler:function(e){arguments[0]=$.event.fix(e);arguments[0].type=fix;return $.event.handle.apply(this,arguments);}};function handler(e){e=$.event.fix(e);e.type=fix;return $.event.handle.call(this,e);}});};$.extend($.fn,{validateDelegate:function(delegate,type,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});}});})(jQuery);