(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var dm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ef={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ui=Symbol.for("react.element"),pm=Symbol.for("react.portal"),mm=Symbol.for("react.fragment"),hm=Symbol.for("react.strict_mode"),gm=Symbol.for("react.profiler"),vm=Symbol.for("react.provider"),ym=Symbol.for("react.context"),_m=Symbol.for("react.forward_ref"),wm=Symbol.for("react.suspense"),xm=Symbol.for("react.memo"),km=Symbol.for("react.lazy"),bu=Symbol.iterator;function Sm(t){return t===null||typeof t!="object"?null:(t=bu&&t[bu]||t["@@iterator"],typeof t=="function"?t:null)}var tf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nf=Object.assign,rf={};function Ar(t,e,n){this.props=t,this.context=e,this.refs=rf,this.updater=n||tf}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ar.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function of(){}of.prototype=Ar.prototype;function ss(t,e,n){this.props=t,this.context=e,this.refs=rf,this.updater=n||tf}var us=ss.prototype=new of;us.constructor=ss;nf(us,Ar.prototype);us.isPureReactComponent=!0;var Cu=Array.isArray,lf=Object.prototype.hasOwnProperty,cs={current:null},af={key:!0,ref:!0,__self:!0,__source:!0};function sf(t,e,n){var r,i={},o=null,l=null;if(e!=null)for(r in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)lf.call(e,r)&&!af.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ui,type:t,key:o,ref:l,props:i,_owner:cs.current}}function Em(t,e){return{$$typeof:Ui,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fs(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ui}function bm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tu=/\/+/g;function xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bm(""+t.key):e.toString(36)}function co(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Ui:case pm:l=!0}}if(l)return l=t,i=i(l),t=r===""?"."+xl(l,0):r,Cu(i)?(n="",t!=null&&(n=t.replace(Tu,"$&/")+"/"),co(i,e,n,"",function(u){return u})):i!=null&&(fs(i)&&(i=Em(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Tu,"$&/")+"/")+t)),e.push(i)),1;if(l=0,r=r===""?".":r+":",Cu(t))for(var a=0;a<t.length;a++){o=t[a];var s=r+xl(o,a);l+=co(o,e,n,s,i)}else if(s=Sm(t),typeof s=="function")for(t=s.call(t),a=0;!(o=t.next()).done;)o=o.value,s=r+xl(o,a++),l+=co(o,e,n,s,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Yi(t,e,n){if(t==null)return t;var r=[],i=0;return co(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Cm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fe={current:null},fo={transition:null},Tm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:fo,ReactCurrentOwner:cs};function uf(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Yi,forEach:function(t,e,n){Yi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yi(t,function(){e++}),e},toArray:function(t){return Yi(t,function(e){return e})||[]},only:function(t){if(!fs(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};A.Component=Ar;A.Fragment=mm;A.Profiler=gm;A.PureComponent=ss;A.StrictMode=hm;A.Suspense=wm;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tm;A.act=uf;A.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nf({},t.props),i=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=cs.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(s in e)lf.call(e,s)&&!af.hasOwnProperty(s)&&(r[s]=e[s]===void 0&&a!==void 0?a[s]:e[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ui,type:t.type,key:i,ref:o,props:r,_owner:l}};A.createContext=function(t){return t={$$typeof:ym,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vm,_context:t},t.Consumer=t};A.createElement=sf;A.createFactory=function(t){var e=sf.bind(null,t);return e.type=t,e};A.createRef=function(){return{current:null}};A.forwardRef=function(t){return{$$typeof:_m,render:t}};A.isValidElement=fs;A.lazy=function(t){return{$$typeof:km,_payload:{_status:-1,_result:t},_init:Cm}};A.memo=function(t,e){return{$$typeof:xm,type:t,compare:e===void 0?null:e}};A.startTransition=function(t){var e=fo.transition;fo.transition={};try{t()}finally{fo.transition=e}};A.unstable_act=uf;A.useCallback=function(t,e){return Fe.current.useCallback(t,e)};A.useContext=function(t){return Fe.current.useContext(t)};A.useDebugValue=function(){};A.useDeferredValue=function(t){return Fe.current.useDeferredValue(t)};A.useEffect=function(t,e){return Fe.current.useEffect(t,e)};A.useId=function(){return Fe.current.useId()};A.useImperativeHandle=function(t,e,n){return Fe.current.useImperativeHandle(t,e,n)};A.useInsertionEffect=function(t,e){return Fe.current.useInsertionEffect(t,e)};A.useLayoutEffect=function(t,e){return Fe.current.useLayoutEffect(t,e)};A.useMemo=function(t,e){return Fe.current.useMemo(t,e)};A.useReducer=function(t,e,n){return Fe.current.useReducer(t,e,n)};A.useRef=function(t){return Fe.current.useRef(t)};A.useState=function(t){return Fe.current.useState(t)};A.useSyncExternalStore=function(t,e,n){return Fe.current.useSyncExternalStore(t,e,n)};A.useTransition=function(){return Fe.current.useTransition()};A.version="18.3.1";ef.exports=A;var Y=ef.exports;const _=Jc(Y);var cf={exports:{}},ct={},ff={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,R){var I=M.length;M.push(R);e:for(;0<I;){var W=I-1>>>1,V=M[W];if(0<i(V,R))M[W]=R,M[I]=V,I=W;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var R=M[0],I=M.pop();if(I!==R){M[0]=I;e:for(var W=0,V=M.length,we=V>>>1;W<we;){var $=2*(W+1)-1,ue=M[$],xe=$+1,ce=M[xe];if(0>i(ue,I))xe<V&&0>i(ce,ue)?(M[W]=ce,M[xe]=I,W=xe):(M[W]=ue,M[$]=I,W=$);else if(xe<V&&0>i(ce,I))M[W]=ce,M[xe]=I,W=xe;else break e}}return R}function i(M,R){var I=M.sortIndex-R.sortIndex;return I!==0?I:M.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var s=[],u=[],c=1,f=null,d=3,g=!1,y=!1,p=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=M)r(u),R.sortIndex=R.expirationTime,e(s,R);else break;R=n(u)}}function w(M){if(p=!1,v(M),!y)if(n(s)!==null)y=!0,j(k);else{var R=n(u);R!==null&&B(w,R.startTime-M)}}function k(M,R){y=!1,p&&(p=!1,h(S),S=-1),g=!0;var I=d;try{for(v(R),f=n(s);f!==null&&(!(f.expirationTime>R)||M&&!O());){var W=f.callback;if(typeof W=="function"){f.callback=null,d=f.priorityLevel;var V=W(f.expirationTime<=R);R=t.unstable_now(),typeof V=="function"?f.callback=V:f===n(s)&&r(s),v(R)}else r(s);f=n(s)}if(f!==null)var we=!0;else{var $=n(u);$!==null&&B(w,$.startTime-R),we=!1}return we}finally{f=null,d=I,g=!1}}var b=!1,E=null,S=-1,C=5,z=-1;function O(){return!(t.unstable_now()-z<C)}function P(){if(E!==null){var M=t.unstable_now();z=M;var R=!0;try{R=E(!0,M)}finally{R?D():(b=!1,E=null)}}else b=!1}var D;if(typeof m=="function")D=function(){m(P)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,F=N.port2;N.port1.onmessage=P,D=function(){F.postMessage(null)}}else D=function(){x(P,0)};function j(M){E=M,b||(b=!0,D())}function B(M,R){S=x(function(){M(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,j(k))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(s)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var I=d;d=R;try{return M()}finally{d=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,R){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var I=d;d=M;try{return R()}finally{d=I}},t.unstable_scheduleCallback=function(M,R,I){var W=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?W+I:W):I=W,M){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=I+V,M={id:c++,callback:R,priorityLevel:M,startTime:I,expirationTime:V,sortIndex:-1},I>W?(M.sortIndex=I,e(u,M),n(s)===null&&M===n(u)&&(p?(h(S),S=-1):p=!0,B(w,I-W))):(M.sortIndex=V,e(s,M),y||g||(y=!0,j(k))),M},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(M){var R=d;return function(){var I=d;d=R;try{return M.apply(this,arguments)}finally{d=I}}}})(df);ff.exports=df;var Pm=ff.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=Y,at=Pm;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pf=new Set,hi={};function qn(t,e){Cr(t,e),Cr(t+"Capture",e)}function Cr(t,e){for(hi[t]=e,t=0;t<e.length;t++)pf.add(e[t])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ta=Object.prototype.hasOwnProperty,Mm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pu={},zu={};function Om(t){return ta.call(zu,t)?!0:ta.call(Pu,t)?!1:Mm.test(t)?zu[t]=!0:(Pu[t]=!0,!1)}function Nm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Lm(t,e,n,r){if(e===null||typeof e>"u"||Nm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var ds=/[\-:]([a-z])/g;function ps(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ds,ps);Pe[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ds,ps);Pe[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ds,ps);Pe[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function ms(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lm(e,n,i,r)&&(n=null),r||i===null?Om(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qt=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qi=Symbol.for("react.element"),rr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),hs=Symbol.for("react.strict_mode"),na=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),gs=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),vs=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),gf=Symbol.for("react.offscreen"),Mu=Symbol.iterator;function Br(t){return t===null||typeof t!="object"?null:(t=Mu&&t[Mu]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,kl;function qr(t){if(kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kl=e&&e[1]||""}return`
`+kl+t}var Sl=!1;function El(t,e){if(!t||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return t.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",t.displayName)),s}while(1<=l&&0<=a);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qr(t):""}function Dm(t){switch(t.tag){case 5:return qr(t.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return t=El(t.type,!1),t;case 11:return t=El(t.type.render,!1),t;case 1:return t=El(t.type,!0),t;default:return""}}function oa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ir:return"Fragment";case rr:return"Portal";case na:return"Profiler";case hs:return"StrictMode";case ra:return"Suspense";case ia:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hf:return(t.displayName||"Context")+".Consumer";case mf:return(t._context.displayName||"Context")+".Provider";case gs:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vs:return e=t.displayName||null,e!==null?e:oa(t.type)||"Memo";case nn:e=t._payload,t=t._init;try{return oa(t(e))}catch{}}return null}function Rm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oa(e);case 8:return e===hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Im(t){var e=vf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gi(t){t._valueTracker||(t._valueTracker=Im(t))}function yf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Co(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function la(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ou(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _f(t,e){e=e.checked,e!=null&&ms(t,"checked",e,!1)}function aa(t,e){_f(t,e);var n=kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sa(t,e.type,n):e.hasOwnProperty("defaultValue")&&sa(t,e.type,kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sa(t,e,n){(e!=="number"||Co(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zr=Array.isArray;function vr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ua(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Zr(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kn(n)}}function wf(t,e){var n=kn(e.value),r=kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Du(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xi,kf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fm=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(t){Fm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ri[e]=ri[t]})});function Sf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ri.hasOwnProperty(t)&&ri[t]?(""+e).trim():e+"px"}function Ef(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Am=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(t,e){if(e){if(Am[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function da(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=null;function ys(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ma=null,yr=null,_r=null;function Ru(t){if(t=Vi(t)){if(typeof ma!="function")throw Error(T(280));var e=t.stateNode;e&&(e=al(e),ma(t.stateNode,t.type,e))}}function bf(t){yr?_r?_r.push(t):_r=[t]:yr=t}function Cf(){if(yr){var t=yr,e=_r;if(_r=yr=null,Ru(t),e)for(t=0;t<e.length;t++)Ru(e[t])}}function Tf(t,e){return t(e)}function Pf(){}var bl=!1;function zf(t,e,n){if(bl)return t(e,n);bl=!0;try{return Tf(t,e,n)}finally{bl=!1,(yr!==null||_r!==null)&&(Pf(),Cf())}}function vi(t,e){var n=t.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var ha=!1;if($t)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){ha=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{ha=!1}function jm(t,e,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ii=!1,To=null,Po=!1,ga=null,Um={onError:function(t){ii=!0,To=t}};function Bm(t,e,n,r,i,o,l,a,s){ii=!1,To=null,jm.apply(Um,arguments)}function Hm(t,e,n,r,i,o,l,a,s){if(Bm.apply(this,arguments),ii){if(ii){var u=To;ii=!1,To=null}else throw Error(T(198));Po||(Po=!0,ga=u)}}function Zn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Iu(t){if(Zn(t)!==t)throw Error(T(188))}function Vm(t){var e=t.alternate;if(!e){if(e=Zn(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Iu(i),t;if(o===r)return Iu(i),e;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Of(t){return t=Vm(t),t!==null?Nf(t):null}function Nf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nf(t);if(e!==null)return e;t=t.sibling}return null}var Lf=at.unstable_scheduleCallback,Fu=at.unstable_cancelCallback,Wm=at.unstable_shouldYield,$m=at.unstable_requestPaint,me=at.unstable_now,Ym=at.unstable_getCurrentPriorityLevel,_s=at.unstable_ImmediatePriority,Df=at.unstable_UserBlockingPriority,zo=at.unstable_NormalPriority,Qm=at.unstable_LowPriority,Rf=at.unstable_IdlePriority,rl=null,Dt=null;function Gm(t){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(rl,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:qm,Xm=Math.log,Km=Math.LN2;function qm(t){return t>>>=0,t===0?32:31-(Xm(t)/Km|0)|0}var Ki=64,qi=4194304;function Jr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Jr(a):(o&=l,o!==0&&(r=Jr(o)))}else l=n&~i,l!==0?r=Jr(l):o!==0&&(r=Jr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function Zm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jm(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-bt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Zm(a,e)):s<=e&&(t.expiredLanes|=a),o&=~a}}function va(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function If(){var t=Ki;return Ki<<=1,!(Ki&4194240)&&(Ki=64),t}function Cl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function eh(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function ws(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function Ff(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Af,xs,jf,Uf,Bf,ya=!1,Zi=[],dn=null,pn=null,mn=null,yi=new Map,_i=new Map,on=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(t,e){switch(t){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(e.pointerId)}}function Vr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Vi(e),e!==null&&xs(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nh(t,e,n,r,i){switch(e){case"focusin":return dn=Vr(dn,t,e,n,r,i),!0;case"dragenter":return pn=Vr(pn,t,e,n,r,i),!0;case"mouseover":return mn=Vr(mn,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,Vr(yi.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_i.set(o,Vr(_i.get(o)||null,t,e,n,r,i)),!0}return!1}function Hf(t){var e=In(t.target);if(e!==null){var n=Zn(e);if(n!==null){if(e=n.tag,e===13){if(e=Mf(n),e!==null){t.blockedOn=e,Bf(t.priority,function(){jf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function po(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_a(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pa=r,n.target.dispatchEvent(r),pa=null}else return e=Vi(n),e!==null&&xs(e),t.blockedOn=n,!1;e.shift()}return!0}function ju(t,e,n){po(t)&&n.delete(e)}function rh(){ya=!1,dn!==null&&po(dn)&&(dn=null),pn!==null&&po(pn)&&(pn=null),mn!==null&&po(mn)&&(mn=null),yi.forEach(ju),_i.forEach(ju)}function Wr(t,e){t.blockedOn===e&&(t.blockedOn=null,ya||(ya=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,rh)))}function wi(t){function e(i){return Wr(i,t)}if(0<Zi.length){Wr(Zi[0],t);for(var n=1;n<Zi.length;n++){var r=Zi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dn!==null&&Wr(dn,t),pn!==null&&Wr(pn,t),mn!==null&&Wr(mn,t),yi.forEach(e),_i.forEach(e),n=0;n<on.length;n++)r=on[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Hf(n),n.blockedOn===null&&on.shift()}var wr=qt.ReactCurrentBatchConfig,Oo=!0;function ih(t,e,n,r){var i=Q,o=wr.transition;wr.transition=null;try{Q=1,ks(t,e,n,r)}finally{Q=i,wr.transition=o}}function oh(t,e,n,r){var i=Q,o=wr.transition;wr.transition=null;try{Q=4,ks(t,e,n,r)}finally{Q=i,wr.transition=o}}function ks(t,e,n,r){if(Oo){var i=_a(t,e,n,r);if(i===null)Il(t,e,r,No,n),Au(t,r);else if(nh(i,t,e,n,r))r.stopPropagation();else if(Au(t,r),e&4&&-1<th.indexOf(t)){for(;i!==null;){var o=Vi(i);if(o!==null&&Af(o),o=_a(t,e,n,r),o===null&&Il(t,e,r,No,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Il(t,e,r,null,n)}}var No=null;function _a(t,e,n,r){if(No=null,t=ys(r),t=In(t),t!==null)if(e=Zn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return No=t,null}function Vf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ym()){case _s:return 1;case Df:return 4;case zo:case Qm:return 16;case Rf:return 536870912;default:return 16}default:return 16}}var an=null,Ss=null,mo=null;function Wf(){if(mo)return mo;var t,e=Ss,n=e.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var l=n-t;for(r=1;r<=l&&e[n-r]===i[o-r];r++);return mo=i.slice(t,1<r?1-r:void 0)}function ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ji(){return!0}function Uu(){return!1}function ft(t){function e(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ji:Uu,this.isPropagationStopped=Uu,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),e}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=ft(jr),Hi=se({},jr,{view:0,detail:0}),lh=ft(Hi),Tl,Pl,$r,il=se({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$r&&($r&&t.type==="mousemove"?(Tl=t.screenX-$r.screenX,Pl=t.screenY-$r.screenY):Pl=Tl=0,$r=t),Tl)},movementY:function(t){return"movementY"in t?t.movementY:Pl}}),Bu=ft(il),ah=se({},il,{dataTransfer:0}),sh=ft(ah),uh=se({},Hi,{relatedTarget:0}),zl=ft(uh),ch=se({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),fh=ft(ch),dh=se({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ph=ft(dh),mh=se({},jr,{data:0}),Hu=ft(mh),hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vh[t])?!!e[t]:!1}function bs(){return yh}var _h=se({},Hi,{key:function(t){if(t.key){var e=hh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(t){return t.type==="keypress"?ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wh=ft(_h),xh=se({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vu=ft(xh),kh=se({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),Sh=ft(kh),Eh=se({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=ft(Eh),Ch=se({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Th=ft(Ch),Ph=[9,13,27,32],Cs=$t&&"CompositionEvent"in window,oi=null;$t&&"documentMode"in document&&(oi=document.documentMode);var zh=$t&&"TextEvent"in window&&!oi,$f=$t&&(!Cs||oi&&8<oi&&11>=oi),Wu=" ",$u=!1;function Yf(t,e){switch(t){case"keyup":return Ph.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var or=!1;function Mh(t,e){switch(t){case"compositionend":return Qf(e);case"keypress":return e.which!==32?null:($u=!0,Wu);case"textInput":return t=e.data,t===Wu&&$u?null:t;default:return null}}function Oh(t,e){if(or)return t==="compositionend"||!Cs&&Yf(t,e)?(t=Wf(),mo=Ss=an=null,or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $f&&e.locale!=="ko"?null:e.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nh[t.type]:e==="textarea"}function Gf(t,e,n,r){bf(r),e=Lo(e,"onChange"),0<e.length&&(n=new Es("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var li=null,xi=null;function Lh(t){od(t,0)}function ol(t){var e=sr(t);if(yf(e))return t}function Dh(t,e){if(t==="change")return e}var Xf=!1;if($t){var Ml;if($t){var Ol="oninput"in document;if(!Ol){var Qu=document.createElement("div");Qu.setAttribute("oninput","return;"),Ol=typeof Qu.oninput=="function"}Ml=Ol}else Ml=!1;Xf=Ml&&(!document.documentMode||9<document.documentMode)}function Gu(){li&&(li.detachEvent("onpropertychange",Kf),xi=li=null)}function Kf(t){if(t.propertyName==="value"&&ol(xi)){var e=[];Gf(e,xi,t,ys(t)),zf(Lh,e)}}function Rh(t,e,n){t==="focusin"?(Gu(),li=e,xi=n,li.attachEvent("onpropertychange",Kf)):t==="focusout"&&Gu()}function Ih(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(xi)}function Fh(t,e){if(t==="click")return ol(e)}function Ah(t,e){if(t==="input"||t==="change")return ol(e)}function jh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:jh;function ki(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ta.call(e,i)||!Tt(t[i],e[i]))return!1}return!0}function Xu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ku(t,e){var n=Xu(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xu(n)}}function qf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zf(){for(var t=window,e=Co();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Co(t.document)}return e}function Ts(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Uh(t){var e=Zf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qf(n.ownerDocument.documentElement,n)){if(r!==null&&Ts(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Ku(n,o);var l=Ku(n,r);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bh=$t&&"documentMode"in document&&11>=document.documentMode,lr=null,wa=null,ai=null,xa=!1;function qu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xa||lr==null||lr!==Co(r)||(r=lr,"selectionStart"in r&&Ts(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&ki(ai,r)||(ai=r,r=Lo(wa,"onSelect"),0<r.length&&(e=new Es("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=lr)))}function eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ar={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},Nl={},Jf={};$t&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function ll(t){if(Nl[t])return Nl[t];if(!ar[t])return t;var e=ar[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jf)return Nl[t]=e[n];return t}var ed=ll("animationend"),td=ll("animationiteration"),nd=ll("animationstart"),rd=ll("transitionend"),id=new Map,Zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(t,e){id.set(t,e),qn(e,[t])}for(var Ll=0;Ll<Zu.length;Ll++){var Dl=Zu[Ll],Hh=Dl.toLowerCase(),Vh=Dl[0].toUpperCase()+Dl.slice(1);Tn(Hh,"on"+Vh)}Tn(ed,"onAnimationEnd");Tn(td,"onAnimationIteration");Tn(nd,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(rd,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function Ju(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Hm(r,e,void 0,t),t.currentTarget=null}function od(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Ju(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Ju(i,a,u),o=s}}}if(Po)throw t=ga,Po=!1,ga=null,t}function Z(t,e){var n=e[Ca];n===void 0&&(n=e[Ca]=new Set);var r=t+"__bubble";n.has(r)||(ld(e,t,2,!1),n.add(r))}function Rl(t,e,n){var r=0;e&&(r|=4),ld(n,t,r,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function Si(t){if(!t[to]){t[to]=!0,pf.forEach(function(n){n!=="selectionchange"&&(Wh.has(n)||Rl(n,!1,t),Rl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,Rl("selectionchange",!1,e))}}function ld(t,e,n,r){switch(Vf(e)){case 1:var i=ih;break;case 4:i=oh;break;default:i=ks}n=i.bind(null,e,n,t),i=void 0,!ha||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Il(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=In(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}zf(function(){var u=o,c=ys(n),f=[];e:{var d=id.get(t);if(d!==void 0){var g=Es,y=t;switch(t){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":g=wh;break;case"focusin":y="focus",g=zl;break;case"focusout":y="blur",g=zl;break;case"beforeblur":case"afterblur":g=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Sh;break;case ed:case td:case nd:g=fh;break;case rd:g=bh;break;case"scroll":g=lh;break;case"wheel":g=Th;break;case"copy":case"cut":case"paste":g=ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vu}var p=(e&4)!==0,x=!p&&t==="scroll",h=p?d!==null?d+"Capture":null:d;p=[];for(var m=u,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=vi(m,h),w!=null&&p.push(Ei(m,w,v)))),x)break;m=m.return}0<p.length&&(d=new g(d,y,null,n,c),f.push({event:d,listeners:p}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==pa&&(y=n.relatedTarget||n.fromElement)&&(In(y)||y[Yt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?In(y):null,y!==null&&(x=Zn(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(p=Bu,w="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(p=Vu,w="onPointerLeave",h="onPointerEnter",m="pointer"),x=g==null?d:sr(g),v=y==null?d:sr(y),d=new p(w,m+"leave",g,n,c),d.target=x,d.relatedTarget=v,w=null,In(c)===u&&(p=new p(h,m+"enter",y,n,c),p.target=v,p.relatedTarget=x,w=p),x=w,g&&y)t:{for(p=g,h=y,m=0,v=p;v;v=er(v))m++;for(v=0,w=h;w;w=er(w))v++;for(;0<m-v;)p=er(p),m--;for(;0<v-m;)h=er(h),v--;for(;m--;){if(p===h||h!==null&&p===h.alternate)break t;p=er(p),h=er(h)}p=null}else p=null;g!==null&&ec(f,d,g,p,!1),y!==null&&x!==null&&ec(f,x,y,p,!0)}}e:{if(d=u?sr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var k=Dh;else if(Yu(d))if(Xf)k=Ah;else{k=Ih;var b=Rh}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=Fh);if(k&&(k=k(t,u))){Gf(f,k,n,c);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&sa(d,"number",d.value)}switch(b=u?sr(u):window,t){case"focusin":(Yu(b)||b.contentEditable==="true")&&(lr=b,wa=u,ai=null);break;case"focusout":ai=wa=lr=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,qu(f,n,c);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":qu(f,n,c)}var E;if(Cs)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else or?Yf(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&($f&&n.locale!=="ko"&&(or||S!=="onCompositionStart"?S==="onCompositionEnd"&&or&&(E=Wf()):(an=c,Ss="value"in an?an.value:an.textContent,or=!0)),b=Lo(u,S),0<b.length&&(S=new Hu(S,t,null,n,c),f.push({event:S,listeners:b}),E?S.data=E:(E=Qf(n),E!==null&&(S.data=E)))),(E=zh?Mh(t,n):Oh(t,n))&&(u=Lo(u,"onBeforeInput"),0<u.length&&(c=new Hu("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=E))}od(f,e)})}function Ei(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vi(t,n),o!=null&&r.unshift(Ei(t,o,i)),o=vi(t,e),o!=null&&r.push(Ei(t,o,i))),t=t.return}return r}function er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ec(t,e,n,r,i){for(var o=e._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=vi(n,o),s!=null&&l.unshift(Ei(n,s,a))):i||(s=vi(n,o),s!=null&&l.push(Ei(n,s,a)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var $h=/\r\n?/g,Yh=/\u0000|\uFFFD/g;function tc(t){return(typeof t=="string"?t:""+t).replace($h,`
`).replace(Yh,"")}function no(t,e,n){if(e=tc(e),tc(t)!==e&&n)throw Error(T(425))}function Do(){}var ka=null,Sa=null;function Ea(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,Qh=typeof clearTimeout=="function"?clearTimeout:void 0,nc=typeof Promise=="function"?Promise:void 0,Gh=typeof queueMicrotask=="function"?queueMicrotask:typeof nc<"u"?function(t){return nc.resolve(null).then(t).catch(Xh)}:ba;function Xh(t){setTimeout(function(){throw t})}function Fl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wi(e)}function hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Ur,bi="__reactProps$"+Ur,Yt="__reactContainer$"+Ur,Ca="__reactEvents$"+Ur,Kh="__reactListeners$"+Ur,qh="__reactHandles$"+Ur;function In(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yt]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rc(t);t!==null;){if(n=t[Ot])return n;t=rc(t)}return e}t=n,n=t.parentNode}return null}function Vi(t){return t=t[Ot]||t[Yt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function sr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function al(t){return t[bi]||null}var Ta=[],ur=-1;function Pn(t){return{current:t}}function J(t){0>ur||(t.current=Ta[ur],Ta[ur]=null,ur--)}function q(t,e){ur++,Ta[ur]=t.current,t.current=e}var Sn={},De=Pn(Sn),We=Pn(!1),Yn=Sn;function Tr(t,e){var n=t.type.contextTypes;if(!n)return Sn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $e(t){return t=t.childContextTypes,t!=null}function Ro(){J(We),J(De)}function ic(t,e,n){if(De.current!==Sn)throw Error(T(168));q(De,e),q(We,n)}function ad(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,Rm(t)||"Unknown",i));return se({},n,r)}function Io(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sn,Yn=De.current,q(De,t),q(We,We.current),!0}function oc(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=ad(t,e,Yn),r.__reactInternalMemoizedMergedChildContext=t,J(We),J(De),q(De,t)):J(We),q(We,n)}var Ut=null,sl=!1,Al=!1;function sd(t){Ut===null?Ut=[t]:Ut.push(t)}function Zh(t){sl=!0,sd(t)}function zn(){if(!Al&&Ut!==null){Al=!0;var t=0,e=Q;try{var n=Ut;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,sl=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),Lf(_s,zn),i}finally{Q=e,Al=!1}}return null}var cr=[],fr=0,Fo=null,Ao=0,pt=[],mt=0,Qn=null,Ht=1,Vt="";function Ln(t,e){cr[fr++]=Ao,cr[fr++]=Fo,Fo=t,Ao=e}function ud(t,e,n){pt[mt++]=Ht,pt[mt++]=Vt,pt[mt++]=Qn,Qn=t;var r=Ht;t=Vt;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var o=32-bt(e)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ht=1<<32-bt(e)+i|n<<i|r,Vt=o+t}else Ht=1<<o|n<<i|r,Vt=t}function Ps(t){t.return!==null&&(Ln(t,1),ud(t,1,0))}function zs(t){for(;t===Fo;)Fo=cr[--fr],cr[fr]=null,Ao=cr[--fr],cr[fr]=null;for(;t===Qn;)Qn=pt[--mt],pt[mt]=null,Vt=pt[--mt],pt[mt]=null,Ht=pt[--mt],pt[mt]=null}var ot=null,nt=null,ee=!1,Et=null;function cd(t,e){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,nt=hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qn!==null?{id:Ht,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,nt=null,!0):!1;default:return!1}}function Pa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function za(t){if(ee){var e=nt;if(e){var n=e;if(!lc(t,e)){if(Pa(t))throw Error(T(418));e=hn(n.nextSibling);var r=ot;e&&lc(t,e)?cd(r,n):(t.flags=t.flags&-4097|2,ee=!1,ot=t)}}else{if(Pa(t))throw Error(T(418));t.flags=t.flags&-4097|2,ee=!1,ot=t}}}function ac(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function ro(t){if(t!==ot)return!1;if(!ee)return ac(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ea(t.type,t.memoizedProps)),e&&(e=nt)){if(Pa(t))throw fd(),Error(T(418));for(;e;)cd(t,e),e=hn(e.nextSibling)}if(ac(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nt=hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=ot?hn(t.stateNode.nextSibling):null;return!0}function fd(){for(var t=nt;t;)t=hn(t.nextSibling)}function Pr(){nt=ot=null,ee=!1}function Ms(t){Et===null?Et=[t]:Et.push(t)}var Jh=qt.ReactCurrentBatchConfig;function Yr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function io(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sc(t){var e=t._init;return e(t._payload)}function dd(t){function e(h,m){if(t){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=_n(h,m),h.index=0,h.sibling=null,h}function o(h,m,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function l(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,v,w){return m===null||m.tag!==6?(m=$l(v,h.mode,w),m.return=h,m):(m=i(m,v),m.return=h,m)}function s(h,m,v,w){var k=v.type;return k===ir?c(h,m,v.props.children,w,v.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&sc(k)===m.type)?(w=i(m,v.props),w.ref=Yr(h,m,v),w.return=h,w):(w=ko(v.type,v.key,v.props,null,h.mode,w),w.ref=Yr(h,m,v),w.return=h,w)}function u(h,m,v,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Yl(v,h.mode,w),m.return=h,m):(m=i(m,v.children||[]),m.return=h,m)}function c(h,m,v,w,k){return m===null||m.tag!==7?(m=Bn(v,h.mode,w,k),m.return=h,m):(m=i(m,v),m.return=h,m)}function f(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=$l(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qi:return v=ko(m.type,m.key,m.props,null,h.mode,v),v.ref=Yr(h,null,m),v.return=h,v;case rr:return m=Yl(m,h.mode,v),m.return=h,m;case nn:var w=m._init;return f(h,w(m._payload),v)}if(Zr(m)||Br(m))return m=Bn(m,h.mode,v,null),m.return=h,m;io(h,m)}return null}function d(h,m,v,w){var k=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(h,m,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qi:return v.key===k?s(h,m,v,w):null;case rr:return v.key===k?u(h,m,v,w):null;case nn:return k=v._init,d(h,m,k(v._payload),w)}if(Zr(v)||Br(v))return k!==null?null:c(h,m,v,w,null);io(h,v)}return null}function g(h,m,v,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,a(m,h,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qi:return h=h.get(w.key===null?v:w.key)||null,s(m,h,w,k);case rr:return h=h.get(w.key===null?v:w.key)||null,u(m,h,w,k);case nn:var b=w._init;return g(h,m,v,b(w._payload),k)}if(Zr(w)||Br(w))return h=h.get(v)||null,c(m,h,w,k,null);io(m,w)}return null}function y(h,m,v,w){for(var k=null,b=null,E=m,S=m=0,C=null;E!==null&&S<v.length;S++){E.index>S?(C=E,E=null):C=E.sibling;var z=d(h,E,v[S],w);if(z===null){E===null&&(E=C);break}t&&E&&z.alternate===null&&e(h,E),m=o(z,m,S),b===null?k=z:b.sibling=z,b=z,E=C}if(S===v.length)return n(h,E),ee&&Ln(h,S),k;if(E===null){for(;S<v.length;S++)E=f(h,v[S],w),E!==null&&(m=o(E,m,S),b===null?k=E:b.sibling=E,b=E);return ee&&Ln(h,S),k}for(E=r(h,E);S<v.length;S++)C=g(E,h,S,v[S],w),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?S:C.key),m=o(C,m,S),b===null?k=C:b.sibling=C,b=C);return t&&E.forEach(function(O){return e(h,O)}),ee&&Ln(h,S),k}function p(h,m,v,w){var k=Br(v);if(typeof k!="function")throw Error(T(150));if(v=k.call(v),v==null)throw Error(T(151));for(var b=k=null,E=m,S=m=0,C=null,z=v.next();E!==null&&!z.done;S++,z=v.next()){E.index>S?(C=E,E=null):C=E.sibling;var O=d(h,E,z.value,w);if(O===null){E===null&&(E=C);break}t&&E&&O.alternate===null&&e(h,E),m=o(O,m,S),b===null?k=O:b.sibling=O,b=O,E=C}if(z.done)return n(h,E),ee&&Ln(h,S),k;if(E===null){for(;!z.done;S++,z=v.next())z=f(h,z.value,w),z!==null&&(m=o(z,m,S),b===null?k=z:b.sibling=z,b=z);return ee&&Ln(h,S),k}for(E=r(h,E);!z.done;S++,z=v.next())z=g(E,h,S,z.value,w),z!==null&&(t&&z.alternate!==null&&E.delete(z.key===null?S:z.key),m=o(z,m,S),b===null?k=z:b.sibling=z,b=z);return t&&E.forEach(function(P){return e(h,P)}),ee&&Ln(h,S),k}function x(h,m,v,w){if(typeof v=="object"&&v!==null&&v.type===ir&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qi:e:{for(var k=v.key,b=m;b!==null;){if(b.key===k){if(k=v.type,k===ir){if(b.tag===7){n(h,b.sibling),m=i(b,v.props.children),m.return=h,h=m;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&sc(k)===b.type){n(h,b.sibling),m=i(b,v.props),m.ref=Yr(h,b,v),m.return=h,h=m;break e}n(h,b);break}else e(h,b);b=b.sibling}v.type===ir?(m=Bn(v.props.children,h.mode,w,v.key),m.return=h,h=m):(w=ko(v.type,v.key,v.props,null,h.mode,w),w.ref=Yr(h,m,v),w.return=h,h=w)}return l(h);case rr:e:{for(b=v.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=i(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=Yl(v,h.mode,w),m.return=h,h=m}return l(h);case nn:return b=v._init,x(h,m,b(v._payload),w)}if(Zr(v))return y(h,m,v,w);if(Br(v))return p(h,m,v,w);io(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=i(m,v),m.return=h,h=m):(n(h,m),m=$l(v,h.mode,w),m.return=h,h=m),l(h)):n(h,m)}return x}var zr=dd(!0),pd=dd(!1),jo=Pn(null),Uo=null,dr=null,Os=null;function Ns(){Os=dr=Uo=null}function Ls(t){var e=jo.current;J(jo),t._currentValue=e}function Ma(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xr(t,e){Uo=t,Os=dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if(Os!==t)if(t={context:t,memoizedValue:e,next:null},dr===null){if(Uo===null)throw Error(T(308));dr=t,Uo.dependencies={lanes:0,firstContext:t}}else dr=dr.next=t;return e}var Fn=null;function Ds(t){Fn===null?Fn=[t]:Fn.push(t)}function md(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ds(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qt(t,r)}function Qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rn=!1;function Rs(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ds(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qt(t,n)}function go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ws(t,n)}}function uc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bo(t,e,n,r){var i=t.updateQueue;rn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==l&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;l=0,c=u=s=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,p=a;switch(d=e,g=n,p.tag){case 1:if(y=p.payload,typeof y=="function"){f=y.call(g,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=p.payload,d=typeof y=="function"?y.call(g,f,d):y,d==null)break e;f=se({},f,d);break e;case 2:rn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,s=f):c=c.next=g,l|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Xn|=l,t.lanes=l,t.memoizedState=f}}function cc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Wi={},Rt=Pn(Wi),Ci=Pn(Wi),Ti=Pn(Wi);function An(t){if(t===Wi)throw Error(T(174));return t}function Is(t,e){switch(q(Ti,e),q(Ci,t),q(Rt,Wi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ca(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ca(e,t)}J(Rt),q(Rt,e)}function Mr(){J(Rt),J(Ci),J(Ti)}function gd(t){An(Ti.current);var e=An(Rt.current),n=ca(e,t.type);e!==n&&(q(Ci,t),q(Rt,n))}function Fs(t){Ci.current===t&&(J(Rt),J(Ci))}var ie=Pn(0);function Ho(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jl=[];function As(){for(var t=0;t<jl.length;t++)jl[t]._workInProgressVersionPrimary=null;jl.length=0}var vo=qt.ReactCurrentDispatcher,Ul=qt.ReactCurrentBatchConfig,Gn=0,ae=null,ye=null,ke=null,Vo=!1,si=!1,Pi=0,e0=0;function ze(){throw Error(T(321))}function js(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tt(t[n],e[n]))return!1;return!0}function Us(t,e,n,r,i,o){if(Gn=o,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vo.current=t===null||t.memoizedState===null?i0:o0,t=n(r,i),si){o=0;do{if(si=!1,Pi=0,25<=o)throw Error(T(301));o+=1,ke=ye=null,e.updateQueue=null,vo.current=l0,t=n(r,i)}while(si)}if(vo.current=Wo,e=ye!==null&&ye.next!==null,Gn=0,ke=ye=ae=null,Vo=!1,e)throw Error(T(300));return t}function Bs(){var t=Pi!==0;return Pi=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ae.memoizedState=ke=t:ke=ke.next=t,ke}function wt(){if(ye===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=ke===null?ae.memoizedState:ke.next;if(e!==null)ke=e,ye=t;else{if(t===null)throw Error(T(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},ke===null?ae.memoizedState=ke=t:ke=ke.next=t}return ke}function zi(t,e){return typeof e=="function"?e(t):e}function Bl(t){var e=wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var c=u.lane;if((Gn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,ae.lanes|=c,Xn|=c}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Tt(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=l,e.baseQueue=s,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,ae.lanes|=o,Xn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hl(t){var e=wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=t(o,l.action),l=l.next;while(l!==i);Tt(o,e.memoizedState)||(Ve=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function vd(){}function yd(t,e){var n=ae,r=wt(),i=e(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ve=!0),r=r.queue,Hs(xd.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Mi(9,wd.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(T(349));Gn&30||_d(n,e,i)}return i}function _d(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wd(t,e,n,r){e.value=n,e.getSnapshot=r,kd(e)&&Sd(t)}function xd(t,e,n){return n(function(){kd(e)&&Sd(t)})}function kd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tt(t,n)}catch{return!0}}function Sd(t){var e=Qt(t,1);e!==null&&Ct(e,t,1,-1)}function fc(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:t},e.queue=t,t=t.dispatch=r0.bind(null,ae,t),[e.memoizedState,t]}function Mi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ed(){return wt().memoizedState}function yo(t,e,n,r){var i=zt();ae.flags|=t,i.memoizedState=Mi(1|e,n,void 0,r===void 0?null:r)}function ul(t,e,n,r){var i=wt();r=r===void 0?null:r;var o=void 0;if(ye!==null){var l=ye.memoizedState;if(o=l.destroy,r!==null&&js(r,l.deps)){i.memoizedState=Mi(e,n,o,r);return}}ae.flags|=t,i.memoizedState=Mi(1|e,n,o,r)}function dc(t,e){return yo(8390656,8,t,e)}function Hs(t,e){return ul(2048,8,t,e)}function bd(t,e){return ul(4,2,t,e)}function Cd(t,e){return ul(4,4,t,e)}function Td(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pd(t,e,n){return n=n!=null?n.concat([t]):null,ul(4,4,Td.bind(null,e,t),n)}function Vs(){}function zd(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&js(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Md(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&js(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Od(t,e,n){return Gn&21?(Tt(n,e)||(n=If(),ae.lanes|=n,Xn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function t0(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=Ul.transition;Ul.transition={};try{t(!1),e()}finally{Q=n,Ul.transition=r}}function Nd(){return wt().memoizedState}function n0(t,e,n){var r=yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ld(t))Dd(e,n);else if(n=md(t,e,n,r),n!==null){var i=Ie();Ct(n,t,r,i),Rd(n,e,r)}}function r0(t,e,n){var r=yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ld(t))Dd(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,l)){var s=e.interleaved;s===null?(i.next=i,Ds(e)):(i.next=s.next,s.next=i),e.interleaved=i;return}}catch{}finally{}n=md(t,e,i,r),n!==null&&(i=Ie(),Ct(n,t,r,i),Rd(n,e,r))}}function Ld(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function Dd(t,e){si=Vo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rd(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ws(t,n)}}var Wo={readContext:_t,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},i0={readContext:_t,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:dc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yo(4194308,4,Td.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return yo(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=n0.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:fc,useDebugValue:Vs,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=fc(!1),e=t[0];return t=t0.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=zt();if(ee){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Se===null)throw Error(T(349));Gn&30||_d(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,dc(xd.bind(null,r,o,t),[t]),r.flags|=2048,Mi(9,wd.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=zt(),e=Se.identifierPrefix;if(ee){var n=Vt,r=Ht;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=e0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},o0={readContext:_t,useCallback:zd,useContext:_t,useEffect:Hs,useImperativeHandle:Pd,useInsertionEffect:bd,useLayoutEffect:Cd,useMemo:Md,useReducer:Bl,useRef:Ed,useState:function(){return Bl(zi)},useDebugValue:Vs,useDeferredValue:function(t){var e=wt();return Od(e,ye.memoizedState,t)},useTransition:function(){var t=Bl(zi)[0],e=wt().memoizedState;return[t,e]},useMutableSource:vd,useSyncExternalStore:yd,useId:Nd,unstable_isNewReconciler:!1},l0={readContext:_t,useCallback:zd,useContext:_t,useEffect:Hs,useImperativeHandle:Pd,useInsertionEffect:bd,useLayoutEffect:Cd,useMemo:Md,useReducer:Hl,useRef:Ed,useState:function(){return Hl(zi)},useDebugValue:Vs,useDeferredValue:function(t){var e=wt();return ye===null?e.memoizedState=t:Od(e,ye.memoizedState,t)},useTransition:function(){var t=Hl(zi)[0],e=wt().memoizedState;return[t,e]},useMutableSource:vd,useSyncExternalStore:yd,useId:Nd,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cl={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=yn(t),o=Wt(r,i);o.payload=e,n!=null&&(o.callback=n),e=gn(t,o,i),e!==null&&(Ct(e,t,i,r),go(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=yn(t),o=Wt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=gn(t,o,i),e!==null&&(Ct(e,t,i,r),go(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ie(),r=yn(t),i=Wt(n,r);i.tag=2,e!=null&&(i.callback=e),e=gn(t,i,r),e!==null&&(Ct(e,t,r,n),go(e,t,r))}};function pc(t,e,n,r,i,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,l):e.prototype&&e.prototype.isPureReactComponent?!ki(n,r)||!ki(i,o):!0}function Id(t,e,n){var r=!1,i=Sn,o=e.contextType;return typeof o=="object"&&o!==null?o=_t(o):(i=$e(e)?Yn:De.current,r=e.contextTypes,o=(r=r!=null)?Tr(t,i):Sn),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function mc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cl.enqueueReplaceState(e,e.state,null)}function Na(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Rs(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=_t(o):(o=$e(e)?Yn:De.current,i.context=Tr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Oa(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cl.enqueueReplaceState(i,i.state,null),Bo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Or(t,e){try{var n="",r=e;do n+=Dm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Vl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function La(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var a0=typeof WeakMap=="function"?WeakMap:Map;function Fd(t,e,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yo||(Yo=!0,Va=r),La(t,e)},n}function Ad(t,e,n){n=Wt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){La(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){La(t,e),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function hc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new a0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=x0.bind(null,t,e,n),e.then(t,t))}function gc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wt(-1,1),e.tag=2,gn(n,e,1))),n.lanes|=1),t)}var s0=qt.ReactCurrentOwner,Ve=!1;function Re(t,e,n,r){e.child=t===null?pd(e,null,n,r):zr(e,t.child,n,r)}function yc(t,e,n,r,i){n=n.render;var o=e.ref;return xr(e,i),r=Us(t,e,n,r,o,i),n=Bs(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ee&&n&&Ps(e),e.flags|=1,Re(t,e,r,i),e.child)}function _c(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!qs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,jd(t,e,o,r,i)):(t=ko(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(l,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=_n(o,r),t.ref=e.ref,t.return=e,e.child=t}function jd(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ki(o,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return Da(t,e,n,r,i)}function Ud(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(mr,Je),Je|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,q(mr,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(mr,Je),Je|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,q(mr,Je),Je|=r;return Re(t,e,i,n),e.child}function Bd(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Da(t,e,n,r,i){var o=$e(n)?Yn:De.current;return o=Tr(e,o),xr(e,i),n=Us(t,e,n,r,o,i),r=Bs(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ee&&r&&Ps(e),e.flags|=1,Re(t,e,n,i),e.child)}function wc(t,e,n,r,i){if($e(n)){var o=!0;Io(e)}else o=!1;if(xr(e,i),e.stateNode===null)_o(t,e),Id(e,n,r),Na(e,n,r,i),r=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=$e(n)?Yn:De.current,u=Tr(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&mc(e,l,r,u),rn=!1;var d=e.memoizedState;l.state=d,Bo(e,r,l,i),s=e.memoizedState,a!==r||d!==s||We.current||rn?(typeof c=="function"&&(Oa(e,n,c,r),s=e.memoizedState),(a=rn||pc(e,n,a,r,d,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,hd(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kt(e.type,a),l.props=u,f=e.pendingProps,d=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=_t(s):(s=$e(n)?Yn:De.current,s=Tr(e,s));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||d!==s)&&mc(e,l,r,s),rn=!1,d=e.memoizedState,l.state=d,Bo(e,r,l,i);var y=e.memoizedState;a!==f||d!==y||We.current||rn?(typeof g=="function"&&(Oa(e,n,g,r),y=e.memoizedState),(u=rn||pc(e,n,u,r,d,y,s)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),l.props=r,l.state=y,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ra(t,e,n,r,o,i)}function Ra(t,e,n,r,i,o){Bd(t,e);var l=(e.flags&128)!==0;if(!r&&!l)return i&&oc(e,n,!1),Gt(t,e,o);r=e.stateNode,s0.current=e;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&l?(e.child=zr(e,t.child,null,o),e.child=zr(e,null,a,o)):Re(t,e,a,o),e.memoizedState=r.state,i&&oc(e,n,!0),e.child}function Hd(t){var e=t.stateNode;e.pendingContext?ic(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ic(t,e.context,!1),Is(t,e.containerInfo)}function xc(t,e,n,r,i){return Pr(),Ms(i),e.flags|=256,Re(t,e,n,r),e.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function Fa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vd(t,e,n){var r=e.pendingProps,i=ie.current,o=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),q(ie,i&1),t===null)return za(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=r.children,t=r.fallback,o?(r=e.mode,o=e.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=pl(l,r,0,null),t=Bn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Fa(n),e.memoizedState=Ia,t):Ws(e,l));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return u0(t,e,l,r,a,i,n);if(o){o=r.fallback,l=e.mode,i=t.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=s,e.deletions=null):(r=_n(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=_n(a,o):(o=Bn(o,l,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,l=t.child.memoizedState,l=l===null?Fa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=Ia,r}return o=t.child,t=o.sibling,r=_n(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ws(t,e){return e=pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oo(t,e,n,r){return r!==null&&Ms(r),zr(e,t.child,null,n),t=Ws(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u0(t,e,n,r,i,o,l){if(n)return e.flags&256?(e.flags&=-257,r=Vl(Error(T(422))),oo(t,e,l,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=pl({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,l,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&zr(e,t.child,null,l),e.child.memoizedState=Fa(l),e.memoizedState=Ia,o);if(!(e.mode&1))return oo(t,e,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(T(419)),r=Vl(o,r,void 0),oo(t,e,l,r)}if(a=(l&t.childLanes)!==0,Ve||a){if(r=Se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qt(t,i),Ct(r,t,i,-1))}return Ks(),r=Vl(Error(T(421))),oo(t,e,l,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=k0.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,nt=hn(i.nextSibling),ot=e,ee=!0,Et=null,t!==null&&(pt[mt++]=Ht,pt[mt++]=Vt,pt[mt++]=Qn,Ht=t.id,Vt=t.overflow,Qn=e),e=Ws(e,r.children),e.flags|=4096,e)}function kc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ma(t.return,e,n)}function Wl(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Wd(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Re(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kc(t,n,e);else if(t.tag===19)kc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(q(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ho(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wl(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ho(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wl(e,!0,n,null,o);break;case"together":Wl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _o(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=_n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c0(t,e,n){switch(e.tag){case 3:Hd(e),Pr();break;case 5:gd(e);break;case 1:$e(e.type)&&Io(e);break;case 4:Is(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;q(jo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(q(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?Vd(t,e,n):(q(ie,ie.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);q(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Wd(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Ud(t,e,n)}return Gt(t,e,n)}var $d,Aa,Yd,Qd;$d=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Aa=function(){};Yd=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,An(Rt.current);var o=null;switch(n){case"input":i=la(t,i),r=la(t,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=ua(t,i),r=ua(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Do)}fa(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Z("scroll",t),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Qd=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qr(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function f0(t,e,n){var r=e.pendingProps;switch(zs(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return $e(e.type)&&Ro(),Me(e),null;case 3:return r=e.stateNode,Mr(),J(We),J(De),As(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Et!==null&&(Ya(Et),Et=null))),Aa(t,e),Me(e),null;case 5:Fs(e);var i=An(Ti.current);if(n=e.type,t!==null&&e.stateNode!=null)Yd(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Me(e),null}if(t=An(Rt.current),ro(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Ot]=e,r[bi]=o,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)Z(ei[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Ou(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":Lu(r,o),Z("invalid",r)}fa(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&no(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&no(r.textContent,a,t),i=["children",""+a]):hi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Z("scroll",r)}switch(n){case"input":Gi(r),Nu(r,o,!0);break;case"textarea":Gi(r),Du(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Do)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=l.createElement(n,{is:r.is}):(t=l.createElement(n),n==="select"&&(l=t,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):t=l.createElementNS(t,n),t[Ot]=e,t[bi]=r,$d(t,e,!1,!1),e.stateNode=t;e:{switch(l=da(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)Z(ei[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":Ou(t,r),i=la(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Lu(t,r),i=ua(t,r),Z("invalid",t);break;default:i=r}fa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Ef(t,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&kf(t,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&gi(t,s):typeof s=="number"&&gi(t,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Z("scroll",t):s!=null&&ms(t,o,s,l))}switch(n){case"input":Gi(t),Nu(t,r,!1);break;case"textarea":Gi(t),Du(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?vr(t,!!r.multiple,o,!1):r.defaultValue!=null&&vr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Qd(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=An(Ti.current),An(Rt.current),ro(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(o=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:no(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return Me(e),null;case 13:if(J(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&nt!==null&&e.mode&1&&!(e.flags&128))fd(),Pr(),e.flags|=98560,o=!1;else if(o=ro(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(T(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Ot]=e}else Pr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),o=!1}else Et!==null&&(Ya(Et),Et=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?_e===0&&(_e=3):Ks())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Mr(),Aa(t,e),t===null&&Si(e.stateNode.containerInfo),Me(e),null;case 10:return Ls(e.type._context),Me(e),null;case 17:return $e(e.type)&&Ro(),Me(e),null;case 19:if(J(ie),o=e.memoizedState,o===null)return Me(e),null;if(r=(e.flags&128)!==0,l=o.rendering,l===null)if(r)Qr(o,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Ho(t),l!==null){for(e.flags|=128,Qr(o,!1),r=l.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return q(ie,ie.current&1|2),e.child}t=t.sibling}o.tail!==null&&me()>Nr&&(e.flags|=128,r=!0,Qr(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ho(l),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ee)return Me(e),null}else 2*me()-o.renderingStartTime>Nr&&n!==1073741824&&(e.flags|=128,r=!0,Qr(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=me(),e.sibling=null,n=ie.current,q(ie,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return Xs(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Je&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function d0(t,e){switch(zs(e),e.tag){case 1:return $e(e.type)&&Ro(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mr(),J(We),J(De),As(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fs(e),null;case 13:if(J(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(ie),null;case 4:return Mr(),null;case 10:return Ls(e.type._context),null;case 22:case 23:return Xs(),null;case 24:return null;default:return null}}var lo=!1,Oe=!1,p0=typeof WeakSet=="function"?WeakSet:Set,L=null;function pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function ja(t,e,n){try{n()}catch(r){fe(t,e,r)}}var Sc=!1;function m0(t,e){if(ka=Oo,t=Zf(),Ts(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=l),d===o&&++c===r&&(s=l),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sa={focusedElem:t,selectionRange:n},Oo=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var p=y.memoizedProps,x=y.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?p:kt(e.type,p),x);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){fe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return y=Sc,Sc=!1,y}function ui(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&ja(e,n,o)}i=i.next}while(i!==r)}}function fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ua(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gd(t){var e=t.alternate;e!==null&&(t.alternate=null,Gd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[bi],delete e[Ca],delete e[Kh],delete e[qh])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xd(t){return t.tag===5||t.tag===3||t.tag===4}function Ec(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ba(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Do));else if(r!==4&&(t=t.child,t!==null))for(Ba(t,e,n),t=t.sibling;t!==null;)Ba(t,e,n),t=t.sibling}function Ha(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ha(t,e,n),t=t.sibling;t!==null;)Ha(t,e,n),t=t.sibling}var be=null,St=!1;function tn(t,e,n){for(n=n.child;n!==null;)Kd(t,e,n),n=n.sibling}function Kd(t,e,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:Oe||pr(n,e);case 6:var r=be,i=St;be=null,tn(t,e,n),be=r,St=i,be!==null&&(St?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(St?(t=be,n=n.stateNode,t.nodeType===8?Fl(t.parentNode,n):t.nodeType===1&&Fl(t,n),wi(t)):Fl(be,n.stateNode));break;case 4:r=be,i=St,be=n.stateNode.containerInfo,St=!0,tn(t,e,n),be=r,St=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ja(n,e,l),i=i.next}while(i!==r)}tn(t,e,n);break;case 1:if(!Oe&&(pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}tn(t,e,n);break;case 21:tn(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,tn(t,e,n),Oe=r):tn(t,e,n);break;default:tn(t,e,n)}}function bc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new p0),e.forEach(function(r){var i=S0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,St=!1;break e;case 3:be=a.stateNode.containerInfo,St=!0;break e;case 4:be=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(be===null)throw Error(T(160));Kd(o,l,i),be=null,St=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qd(e,t),e=e.sibling}function qd(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),Pt(t),r&4){try{ui(3,t,t.return),fl(3,t)}catch(p){fe(t,t.return,p)}try{ui(5,t,t.return)}catch(p){fe(t,t.return,p)}}break;case 1:xt(e,t),Pt(t),r&512&&n!==null&&pr(n,n.return);break;case 5:if(xt(e,t),Pt(t),r&512&&n!==null&&pr(n,n.return),t.flags&32){var i=t.stateNode;try{gi(i,"")}catch(p){fe(t,t.return,p)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,a=t.type,s=t.updateQueue;if(t.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&_f(i,o),da(a,l);var u=da(a,o);for(l=0;l<s.length;l+=2){var c=s[l],f=s[l+1];c==="style"?Ef(i,f):c==="dangerouslySetInnerHTML"?kf(i,f):c==="children"?gi(i,f):ms(i,c,f,u)}switch(a){case"input":aa(i,o);break;case"textarea":wf(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?vr(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?vr(i,!!o.multiple,o.defaultValue,!0):vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[bi]=o}catch(p){fe(t,t.return,p)}}break;case 6:if(xt(e,t),Pt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(p){fe(t,t.return,p)}}break;case 3:if(xt(e,t),Pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(e.containerInfo)}catch(p){fe(t,t.return,p)}break;case 4:xt(e,t),Pt(t);break;case 13:xt(e,t),Pt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qs=me())),r&4&&bc(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||c,xt(e,t),Oe=u):xt(e,t),Pt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(f=L=c;L!==null;){switch(d=L,g=d.child,d.tag){case 0:case 11:case 14:case 15:ui(4,d,d.return);break;case 1:pr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(p){fe(r,n,p)}}break;case 5:pr(d,d.return);break;case 22:if(d.memoizedState!==null){Tc(f);continue}}g!==null?(g.return=d,L=g):Tc(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Sf("display",l))}catch(p){fe(t,t.return,p)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){fe(t,t.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xt(e,t),Pt(t),r&4&&bc(t);break;case 21:break;default:xt(e,t),Pt(t)}}function Pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xd(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gi(i,""),r.flags&=-33);var o=Ec(t);Ha(t,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ec(t);Ba(t,a,l);break;default:throw Error(T(161))}}catch(s){fe(t,t.return,s)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h0(t,e,n){L=t,Zd(t)}function Zd(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||lo;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Oe;a=lo;var u=Oe;if(lo=l,(Oe=s)&&!u)for(L=i;L!==null;)l=L,s=l.child,l.tag===22&&l.memoizedState!==null?Pc(i):s!==null?(s.return=l,L=s):Pc(i);for(;o!==null;)L=o,Zd(o),o=o.sibling;L=i,lo=a,Oe=u}Cc(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Cc(t)}}function Cc(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||fl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&cc(e,o,r);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cc(e,l,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&wi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Oe||e.flags&512&&Ua(e)}catch(d){fe(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Tc(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Pc(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fl(4,e)}catch(s){fe(e,n,s)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(s){fe(e,i,s)}}var o=e.return;try{Ua(e)}catch(s){fe(e,o,s)}break;case 5:var l=e.return;try{Ua(e)}catch(s){fe(e,l,s)}}}catch(s){fe(e,e.return,s)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var g0=Math.ceil,$o=qt.ReactCurrentDispatcher,$s=qt.ReactCurrentOwner,yt=qt.ReactCurrentBatchConfig,H=0,Se=null,ge=null,Ce=0,Je=0,mr=Pn(0),_e=0,Oi=null,Xn=0,dl=0,Ys=0,ci=null,Be=null,Qs=0,Nr=1/0,At=null,Yo=!1,Va=null,vn=null,ao=!1,sn=null,Qo=0,fi=0,Wa=null,wo=-1,xo=0;function Ie(){return H&6?me():wo!==-1?wo:wo=me()}function yn(t){return t.mode&1?H&2&&Ce!==0?Ce&-Ce:Jh.transition!==null?(xo===0&&(xo=If()),xo):(t=Q,t!==0||(t=window.event,t=t===void 0?16:Vf(t.type)),t):1}function Ct(t,e,n,r){if(50<fi)throw fi=0,Wa=null,Error(T(185));Bi(t,n,r),(!(H&2)||t!==Se)&&(t===Se&&(!(H&2)&&(dl|=n),_e===4&&ln(t,Ce)),Ye(t,r),n===1&&H===0&&!(e.mode&1)&&(Nr=me()+500,sl&&zn()))}function Ye(t,e){var n=t.callbackNode;Jm(t,e);var r=Mo(t,t===Se?Ce:0);if(r===0)n!==null&&Fu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fu(n),e===1)t.tag===0?Zh(zc.bind(null,t)):sd(zc.bind(null,t)),Gh(function(){!(H&6)&&zn()}),n=null;else{switch(Ff(r)){case 1:n=_s;break;case 4:n=Df;break;case 16:n=zo;break;case 536870912:n=Rf;break;default:n=zo}n=lp(n,Jd.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jd(t,e){if(wo=-1,xo=0,H&6)throw Error(T(327));var n=t.callbackNode;if(kr()&&t.callbackNode!==n)return null;var r=Mo(t,t===Se?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Go(t,r);else{e=r;var i=H;H|=2;var o=tp();(Se!==t||Ce!==e)&&(At=null,Nr=me()+500,Un(t,e));do try{_0();break}catch(a){ep(t,a)}while(!0);Ns(),$o.current=o,H=i,ge!==null?e=0:(Se=null,Ce=0,e=_e)}if(e!==0){if(e===2&&(i=va(t),i!==0&&(r=i,e=$a(t,i))),e===1)throw n=Oi,Un(t,0),ln(t,r),Ye(t,me()),n;if(e===6)ln(t,r);else{if(i=t.current.alternate,!(r&30)&&!v0(i)&&(e=Go(t,r),e===2&&(o=va(t),o!==0&&(r=o,e=$a(t,o))),e===1))throw n=Oi,Un(t,0),ln(t,r),Ye(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Dn(t,Be,At);break;case 3:if(ln(t,r),(r&130023424)===r&&(e=Qs+500-me(),10<e)){if(Mo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ie(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ba(Dn.bind(null,t,Be,At),e);break}Dn(t,Be,At);break;case 4:if(ln(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var l=31-bt(r);o=1<<l,l=e[l],l>i&&(i=l),r&=~o}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g0(r/1960))-r,10<r){t.timeoutHandle=ba(Dn.bind(null,t,Be,At),r);break}Dn(t,Be,At);break;case 5:Dn(t,Be,At);break;default:throw Error(T(329))}}}return Ye(t,me()),t.callbackNode===n?Jd.bind(null,t):null}function $a(t,e){var n=ci;return t.current.memoizedState.isDehydrated&&(Un(t,e).flags|=256),t=Go(t,e),t!==2&&(e=Be,Be=n,e!==null&&Ya(e)),t}function Ya(t){Be===null?Be=t:Be.push.apply(Be,t)}function v0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ln(t,e){for(e&=~Ys,e&=~dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function zc(t){if(H&6)throw Error(T(327));kr();var e=Mo(t,0);if(!(e&1))return Ye(t,me()),null;var n=Go(t,e);if(t.tag!==0&&n===2){var r=va(t);r!==0&&(e=r,n=$a(t,r))}if(n===1)throw n=Oi,Un(t,0),ln(t,e),Ye(t,me()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dn(t,Be,At),Ye(t,me()),null}function Gs(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Nr=me()+500,sl&&zn())}}function Kn(t){sn!==null&&sn.tag===0&&!(H&6)&&kr();var e=H;H|=1;var n=yt.transition,r=Q;try{if(yt.transition=null,Q=1,t)return t()}finally{Q=r,yt.transition=n,H=e,!(H&6)&&zn()}}function Xs(){Je=mr.current,J(mr)}function Un(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qh(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(zs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:Mr(),J(We),J(De),As();break;case 5:Fs(r);break;case 4:Mr();break;case 13:J(ie);break;case 19:J(ie);break;case 10:Ls(r.type._context);break;case 22:case 23:Xs()}n=n.return}if(Se=t,ge=t=_n(t.current,null),Ce=Je=e,_e=0,Oi=null,Ys=dl=Xn=0,Be=ci=null,Fn!==null){for(e=0;e<Fn.length;e++)if(n=Fn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Fn=null}return t}function ep(t,e){do{var n=ge;try{if(Ns(),vo.current=Wo,Vo){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vo=!1}if(Gn=0,ke=ye=ae=null,si=!1,Pi=0,$s.current=null,n===null||n.return===null){_e=1,Oi=e,ge=null;break}e:{var o=t,l=n.return,a=n,s=e;if(e=Ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=gc(l);if(g!==null){g.flags&=-257,vc(g,l,a,o,e),g.mode&1&&hc(o,u,e),e=g,s=u;var y=e.updateQueue;if(y===null){var p=new Set;p.add(s),e.updateQueue=p}else y.add(s);break e}else{if(!(e&1)){hc(o,u,e),Ks();break e}s=Error(T(426))}}else if(ee&&a.mode&1){var x=gc(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),vc(x,l,a,o,e),Ms(Or(s,a));break e}}o=s=Or(s,a),_e!==4&&(_e=2),ci===null?ci=[o]:ci.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Fd(o,s,e);uc(o,h);break e;case 1:a=s;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vn===null||!vn.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Ad(o,a,e);uc(o,w);break e}}o=o.return}while(o!==null)}rp(n)}catch(k){e=k,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function tp(){var t=$o.current;return $o.current=Wo,t===null?Wo:t}function Ks(){(_e===0||_e===3||_e===2)&&(_e=4),Se===null||!(Xn&268435455)&&!(dl&268435455)||ln(Se,Ce)}function Go(t,e){var n=H;H|=2;var r=tp();(Se!==t||Ce!==e)&&(At=null,Un(t,e));do try{y0();break}catch(i){ep(t,i)}while(!0);if(Ns(),H=n,$o.current=r,ge!==null)throw Error(T(261));return Se=null,Ce=0,_e}function y0(){for(;ge!==null;)np(ge)}function _0(){for(;ge!==null&&!Wm();)np(ge)}function np(t){var e=op(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?rp(t):ge=e,$s.current=null}function rp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=d0(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,ge=null;return}}else if(n=f0(n,e,Je),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);_e===0&&(_e=5)}function Dn(t,e,n){var r=Q,i=yt.transition;try{yt.transition=null,Q=1,w0(t,e,n,r)}finally{yt.transition=i,Q=r}return null}function w0(t,e,n,r){do kr();while(sn!==null);if(H&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(eh(t,o),t===Se&&(ge=Se=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ao||(ao=!0,lp(zo,function(){return kr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=yt.transition,yt.transition=null;var l=Q;Q=1;var a=H;H|=4,$s.current=null,m0(t,n),qd(n,t),Uh(Sa),Oo=!!ka,Sa=ka=null,t.current=n,h0(n),$m(),H=a,Q=l,yt.transition=o}else t.current=n;if(ao&&(ao=!1,sn=t,Qo=i),o=t.pendingLanes,o===0&&(vn=null),Gm(n.stateNode),Ye(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yo)throw Yo=!1,t=Va,Va=null,t;return Qo&1&&t.tag!==0&&kr(),o=t.pendingLanes,o&1?t===Wa?fi++:(fi=0,Wa=t):fi=0,zn(),null}function kr(){if(sn!==null){var t=Ff(Qo),e=yt.transition,n=Q;try{if(yt.transition=null,Q=16>t?16:t,sn===null)var r=!1;else{if(t=sn,sn=null,Qo=0,H&6)throw Error(T(331));var i=H;for(H|=4,L=t.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:ui(8,c,o)}var f=c.child;if(f!==null)f.return=c,L=f;else for(;L!==null;){c=L;var d=c.sibling,g=c.return;if(Gd(c),c===u){L=null;break}if(d!==null){d.return=g,L=d;break}L=g}}}var y=o.alternate;if(y!==null){var p=y.child;if(p!==null){y.child=null;do{var x=p.sibling;p.sibling=null,p=x}while(p!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ui(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,L=h;break e}L=o.return}}var m=t.current;for(L=m;L!==null;){l=L;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,L=v;else e:for(l=m;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(k){fe(a,a.return,k)}if(a===l){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(H=i,zn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(rl,t)}catch{}r=!0}return r}finally{Q=n,yt.transition=e}}return!1}function Mc(t,e,n){e=Or(n,e),e=Fd(t,e,1),t=gn(t,e,1),e=Ie(),t!==null&&(Bi(t,1,e),Ye(t,e))}function fe(t,e,n){if(t.tag===3)Mc(t,t,n);else for(;e!==null;){if(e.tag===3){Mc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){t=Or(n,t),t=Ad(e,t,1),e=gn(e,t,1),t=Ie(),e!==null&&(Bi(e,1,t),Ye(e,t));break}}e=e.return}}function x0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ie(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Ce&n)===n&&(_e===4||_e===3&&(Ce&130023424)===Ce&&500>me()-Qs?Un(t,0):Ys|=n),Ye(t,e)}function ip(t,e){e===0&&(t.mode&1?(e=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):e=1);var n=Ie();t=Qt(t,e),t!==null&&(Bi(t,e,n),Ye(t,n))}function k0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ip(t,n)}function S0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),ip(t,n)}var op;op=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,c0(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,ee&&e.flags&1048576&&ud(e,Ao,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_o(t,e),t=e.pendingProps;var i=Tr(e,De.current);xr(e,n),i=Us(null,e,r,t,i,n);var o=Bs();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$e(r)?(o=!0,Io(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rs(e),i.updater=cl,e.stateNode=i,i._reactInternals=e,Na(e,r,t,n),e=Ra(null,e,r,!0,o,n)):(e.tag=0,ee&&o&&Ps(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_o(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=b0(r),t=kt(r,t),i){case 0:e=Da(null,e,r,t,n);break e;case 1:e=wc(null,e,r,t,n);break e;case 11:e=yc(null,e,r,t,n);break e;case 14:e=_c(null,e,r,kt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Da(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),wc(t,e,r,i,n);case 3:e:{if(Hd(e),t===null)throw Error(T(387));r=e.pendingProps,o=e.memoizedState,i=o.element,hd(t,e),Bo(e,r,null,n);var l=e.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Or(Error(T(423)),e),e=xc(t,e,r,n,i);break e}else if(r!==i){i=Or(Error(T(424)),e),e=xc(t,e,r,n,i);break e}else for(nt=hn(e.stateNode.containerInfo.firstChild),ot=e,ee=!0,Et=null,n=pd(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===i){e=Gt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return gd(e),t===null&&za(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,l=i.children,Ea(r,i)?l=null:o!==null&&Ea(r,o)&&(e.flags|=32),Bd(t,e),Re(t,e,l,n),e.child;case 6:return t===null&&za(e),null;case 13:return Vd(t,e,n);case 4:return Is(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),yc(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,l=i.value,q(jo,r._currentValue),r._currentValue=l,o!==null)if(Tt(o.value,l)){if(o.children===i.children&&!We.current){e=Gt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Wt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ma(o.return,n,e),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(T(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ma(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xr(e,n),i=_t(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),_c(t,e,r,i,n);case 15:return jd(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),_o(t,e),e.tag=1,$e(r)?(t=!0,Io(e)):t=!1,xr(e,n),Id(e,r,i),Na(e,r,i,n),Ra(null,e,r,!0,t,n);case 19:return Wd(t,e,n);case 22:return Ud(t,e,n)}throw Error(T(156,e.tag))};function lp(t,e){return Lf(t,e)}function E0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(t,e,n,r){return new E0(t,e,n,r)}function qs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b0(t){if(typeof t=="function")return qs(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gs)return 11;if(t===vs)return 14}return 2}function _n(t,e){var n=t.alternate;return n===null?(n=ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ko(t,e,n,r,i,o){var l=2;if(r=t,typeof t=="function")qs(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case ir:return Bn(n.children,i,o,e);case hs:l=8,i|=8;break;case na:return t=ht(12,n,e,i|2),t.elementType=na,t.lanes=o,t;case ra:return t=ht(13,n,e,i),t.elementType=ra,t.lanes=o,t;case ia:return t=ht(19,n,e,i),t.elementType=ia,t.lanes=o,t;case gf:return pl(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mf:l=10;break e;case hf:l=9;break e;case gs:l=11;break e;case vs:l=14;break e;case nn:l=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=ht(l,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Bn(t,e,n,r){return t=ht(7,t,r,e),t.lanes=n,t}function pl(t,e,n,r){return t=ht(22,t,r,e),t.elementType=gf,t.lanes=n,t.stateNode={isHidden:!1},t}function $l(t,e,n){return t=ht(6,t,null,e),t.lanes=n,t}function Yl(t,e,n){return e=ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function C0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zs(t,e,n,r,i,o,l,a,s){return t=new C0(t,e,n,a,s),e===1?(e=1,o===!0&&(e|=8)):e=0,o=ht(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rs(o),t}function T0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ap(t){if(!t)return Sn;t=t._reactInternals;e:{if(Zn(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if($e(n))return ad(t,n,e)}return e}function sp(t,e,n,r,i,o,l,a,s){return t=Zs(n,r,!0,t,i,o,l,a,s),t.context=ap(null),n=t.current,r=Ie(),i=yn(n),o=Wt(r,i),o.callback=e??null,gn(n,o,i),t.current.lanes=i,Bi(t,i,r),Ye(t,r),t}function ml(t,e,n,r){var i=e.current,o=Ie(),l=yn(i);return n=ap(n),e.context===null?e.context=n:e.pendingContext=n,e=Wt(o,l),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gn(i,e,l),t!==null&&(Ct(t,i,l,o),go(t,i,l)),l}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Oc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Js(t,e){Oc(t,e),(t=t.alternate)&&Oc(t,e)}function P0(){return null}var up=typeof reportError=="function"?reportError:function(t){console.error(t)};function eu(t){this._internalRoot=t}hl.prototype.render=eu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));ml(t,e,null,null)};hl.prototype.unmount=eu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kn(function(){ml(null,t,null,null)}),e[Yt]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<on.length&&e!==0&&e<on[n].priority;n++);on.splice(n,0,t),n===0&&Hf(t)}};function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nc(){}function z0(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Xo(l);o.call(u)}}var l=sp(e,r,t,0,null,!1,!1,"",Nc);return t._reactRootContainer=l,t[Yt]=l.current,Si(t.nodeType===8?t.parentNode:t),Kn(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xo(s);a.call(u)}}var s=Zs(t,0,!1,null,null,!1,!1,"",Nc);return t._reactRootContainer=s,t[Yt]=s.current,Si(t.nodeType===8?t.parentNode:t),Kn(function(){ml(e,s,n,r)}),s}function vl(t,e,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Xo(l);a.call(s)}}ml(e,l,t,i)}else l=z0(n,e,t,i,r);return Xo(l)}Af=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jr(e.pendingLanes);n!==0&&(ws(e,n|1),Ye(e,me()),!(H&6)&&(Nr=me()+500,zn()))}break;case 13:Kn(function(){var r=Qt(t,1);if(r!==null){var i=Ie();Ct(r,t,1,i)}}),Js(t,1)}};xs=function(t){if(t.tag===13){var e=Qt(t,134217728);if(e!==null){var n=Ie();Ct(e,t,134217728,n)}Js(t,134217728)}};jf=function(t){if(t.tag===13){var e=yn(t),n=Qt(t,e);if(n!==null){var r=Ie();Ct(n,t,e,r)}Js(t,e)}};Uf=function(){return Q};Bf=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};ma=function(t,e,n){switch(e){case"input":if(aa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=al(r);if(!i)throw Error(T(90));yf(r),aa(r,i)}}}break;case"textarea":wf(t,n);break;case"select":e=n.value,e!=null&&vr(t,!!n.multiple,e,!1)}};Tf=Gs;Pf=Kn;var M0={usingClientEntryPoint:!1,Events:[Vi,sr,al,bf,Cf,Gs]},Gr={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O0={bundleType:Gr.bundleType,version:Gr.version,rendererPackageName:Gr.rendererPackageName,rendererConfig:Gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Of(t),t===null?null:t.stateNode},findFiberByHostInstance:Gr.findFiberByHostInstance||P0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{rl=so.inject(O0),Dt=so}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(e))throw Error(T(200));return T0(t,e,null,n)};ct.createRoot=function(t,e){if(!tu(t))throw Error(T(299));var n=!1,r="",i=up;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zs(t,1,!1,null,null,n,!1,r,i),t[Yt]=e.current,Si(t.nodeType===8?t.parentNode:t),new eu(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Of(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return Kn(t)};ct.hydrate=function(t,e,n){if(!gl(e))throw Error(T(200));return vl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!tu(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=up;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=sp(e,null,t,1,n??null,i,!1,o,l),t[Yt]=e.current,Si(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hl(e)};ct.render=function(t,e,n){if(!gl(e))throw Error(T(200));return vl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!gl(t))throw Error(T(40));return t._reactRootContainer?(Kn(function(){vl(null,null,t,!1,function(){t._reactRootContainer=null,t[Yt]=null})}),!0):!1};ct.unstable_batchedUpdates=Gs;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gl(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return vl(t,e,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function cp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cp)}catch(t){console.error(t)}}cp(),cf.exports=ct;var N0=cf.exports,fp,Lc=N0;fp=Lc.createRoot,Lc.hydrateRoot;var dp={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(dm,function(){return function(n){function r(o){if(i[o])return i[o].exports;var l=i[o]={exports:{},id:o,loaded:!1};return n[o].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function o(N){return N&&N.__esModule?N:{default:N}}var l=Object.assign||function(N){for(var F=1;F<arguments.length;F++){var j=arguments[F];for(var B in j)Object.prototype.hasOwnProperty.call(j,B)&&(N[B]=j[B])}return N},a=i(1),s=(o(a),i(6)),u=o(s),c=i(7),f=o(c),d=i(8),g=o(d),y=i(9),p=o(y),x=i(10),h=o(x),m=i(11),v=o(m),w=i(14),k=o(w),b=[],E=!1,S={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},C=function(){var N=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(N&&(E=!0),E)return b=(0,v.default)(b,S),(0,h.default)(b,S.once),b},z=function(){b=(0,k.default)(),C()},O=function(){b.forEach(function(N,F){N.node.removeAttribute("data-aos"),N.node.removeAttribute("data-aos-easing"),N.node.removeAttribute("data-aos-duration"),N.node.removeAttribute("data-aos-delay")})},P=function(N){return N===!0||N==="mobile"&&p.default.mobile()||N==="phone"&&p.default.phone()||N==="tablet"&&p.default.tablet()||typeof N=="function"&&N()===!0},D=function(N){S=l(S,N),b=(0,k.default)();var F=document.all&&!window.atob;return P(S.disable)||F?O():(S.disableMutationObserver||g.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),S.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",S.easing),document.querySelector("body").setAttribute("data-aos-duration",S.duration),document.querySelector("body").setAttribute("data-aos-delay",S.delay),S.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?C(!0):S.startEvent==="load"?window.addEventListener(S.startEvent,function(){C(!0)}):document.addEventListener(S.startEvent,function(){C(!0)}),window.addEventListener("resize",(0,f.default)(C,S.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(C,S.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,h.default)(b,S.once)},S.throttleDelay)),S.disableMutationObserver||g.default.ready("[data-aos]",z),b)};n.exports={init:D,refresh:C,refreshHard:z}},function(n,r){},,,,,function(n,r){(function(i){function o(P,D,N){function F(G){var Ue=$,en=ue;return $=ue=void 0,Zt=G,ce=P.apply(en,Ue)}function j(G){return Zt=G,ve=setTimeout(R,D),Jt?F(G):ce}function B(G){var Ue=G-Ze,en=G-Zt,Eu=D-Ue;return Ft?z(Eu,xe-en):Eu}function M(G){var Ue=G-Ze,en=G-Zt;return Ze===void 0||Ue>=D||Ue<0||Ft&&en>=xe}function R(){var G=O();return M(G)?I(G):void(ve=setTimeout(R,B(G)))}function I(G){return ve=void 0,ne&&$?F(G):($=ue=void 0,ce)}function W(){ve!==void 0&&clearTimeout(ve),Zt=0,$=Ze=ue=ve=void 0}function V(){return ve===void 0?ce:I(O())}function we(){var G=O(),Ue=M(G);if($=arguments,ue=this,Ze=G,Ue){if(ve===void 0)return j(Ze);if(Ft)return ve=setTimeout(R,D),F(Ze)}return ve===void 0&&(ve=setTimeout(R,D)),ce}var $,ue,xe,ce,ve,Ze,Zt=0,Jt=!1,Ft=!1,ne=!0;if(typeof P!="function")throw new TypeError(d);return D=c(D)||0,a(N)&&(Jt=!!N.leading,Ft="maxWait"in N,xe=Ft?C(c(N.maxWait)||0,D):xe,ne="trailing"in N?!!N.trailing:ne),we.cancel=W,we.flush=V,we}function l(P,D,N){var F=!0,j=!0;if(typeof P!="function")throw new TypeError(d);return a(N)&&(F="leading"in N?!!N.leading:F,j="trailing"in N?!!N.trailing:j),o(P,D,{leading:F,maxWait:D,trailing:j})}function a(P){var D=typeof P>"u"?"undefined":f(P);return!!P&&(D=="object"||D=="function")}function s(P){return!!P&&(typeof P>"u"?"undefined":f(P))=="object"}function u(P){return(typeof P>"u"?"undefined":f(P))=="symbol"||s(P)&&S.call(P)==y}function c(P){if(typeof P=="number")return P;if(u(P))return g;if(a(P)){var D=typeof P.valueOf=="function"?P.valueOf():P;P=a(D)?D+"":D}if(typeof P!="string")return P===0?P:+P;P=P.replace(p,"");var N=h.test(P);return N||m.test(P)?v(P.slice(2),N?2:8):x.test(P)?g:+P}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},d="Expected a function",g=NaN,y="[object Symbol]",p=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt,w=(typeof i>"u"?"undefined":f(i))=="object"&&i&&i.Object===Object&&i,k=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,b=w||k||Function("return this")(),E=Object.prototype,S=E.toString,C=Math.max,z=Math.min,O=function(){return b.Date.now()};n.exports=l}).call(r,function(){return this}())},function(n,r){(function(i){function o(O,P,D){function N(ne){var G=we,Ue=$;return we=$=void 0,Ze=ne,xe=O.apply(Ue,G)}function F(ne){return Ze=ne,ce=setTimeout(M,P),Zt?N(ne):xe}function j(ne){var G=ne-ve,Ue=ne-Ze,en=P-G;return Jt?C(en,ue-Ue):en}function B(ne){var G=ne-ve,Ue=ne-Ze;return ve===void 0||G>=P||G<0||Jt&&Ue>=ue}function M(){var ne=z();return B(ne)?R(ne):void(ce=setTimeout(M,j(ne)))}function R(ne){return ce=void 0,Ft&&we?N(ne):(we=$=void 0,xe)}function I(){ce!==void 0&&clearTimeout(ce),Ze=0,we=ve=$=ce=void 0}function W(){return ce===void 0?xe:R(z())}function V(){var ne=z(),G=B(ne);if(we=arguments,$=this,ve=ne,G){if(ce===void 0)return F(ve);if(Jt)return ce=setTimeout(M,P),N(ve)}return ce===void 0&&(ce=setTimeout(M,P)),xe}var we,$,ue,xe,ce,ve,Ze=0,Zt=!1,Jt=!1,Ft=!0;if(typeof O!="function")throw new TypeError(f);return P=u(P)||0,l(D)&&(Zt=!!D.leading,Jt="maxWait"in D,ue=Jt?S(u(D.maxWait)||0,P):ue,Ft="trailing"in D?!!D.trailing:Ft),V.cancel=I,V.flush=W,V}function l(O){var P=typeof O>"u"?"undefined":c(O);return!!O&&(P=="object"||P=="function")}function a(O){return!!O&&(typeof O>"u"?"undefined":c(O))=="object"}function s(O){return(typeof O>"u"?"undefined":c(O))=="symbol"||a(O)&&E.call(O)==g}function u(O){if(typeof O=="number")return O;if(s(O))return d;if(l(O)){var P=typeof O.valueOf=="function"?O.valueOf():O;O=l(P)?P+"":P}if(typeof O!="string")return O===0?O:+O;O=O.replace(y,"");var D=x.test(O);return D||h.test(O)?m(O.slice(2),D?2:8):p.test(O)?d:+O}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},f="Expected a function",d=NaN,g="[object Symbol]",y=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,v=(typeof i>"u"?"undefined":c(i))=="object"&&i&&i.Object===Object&&i,w=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,k=v||w||Function("return this")(),b=Object.prototype,E=b.toString,S=Math.max,C=Math.min,z=function(){return k.Date.now()};n.exports=o}).call(r,function(){return this}())},function(n,r){function i(c){var f=void 0,d=void 0;for(f=0;f<c.length;f+=1)if(d=c[f],d.dataset&&d.dataset.aos||d.children&&i(d.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function l(){return!!o()}function a(c,f){var d=window.document,g=o(),y=new g(s);u=f,y.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(c){c&&c.forEach(function(f){var d=Array.prototype.slice.call(f.addedNodes),g=Array.prototype.slice.call(f.removedNodes),y=d.concat(g);if(i(y))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:l,ready:a}},function(n,r){function i(d,g){if(!(d instanceof g))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var l=function(){function d(g,y){for(var p=0;p<y.length;p++){var x=y[p];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(g,x.key,x)}}return function(g,y,p){return y&&d(g.prototype,y),p&&d(g,p),g}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function d(){i(this,d)}return l(d,[{key:"phone",value:function(){var g=o();return!(!a.test(g)&&!s.test(g.substr(0,4)))}},{key:"mobile",value:function(){var g=o();return!(!u.test(g)&&!c.test(g.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();r.default=new f},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(l,a,s){var u=l.node.getAttribute("data-aos-once");a>l.position?l.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!s&&u!=="true")&&l.node.classList.remove("aos-animate")},o=function(l,a){var s=window.pageYOffset,u=window.innerHeight;l.forEach(function(c,f){i(c,u+s,a)})};r.default=o},function(n,r,i){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var l=i(12),a=o(l),s=function(u,c){return u.forEach(function(f,d){f.node.classList.add("aos-init"),f.position=(0,a.default)(f.node,c.offset)}),u};r.default=s},function(n,r,i){function o(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var l=i(13),a=o(l),s=function(u,c){var f=0,d=0,g=window.innerHeight,y={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(y.offset&&!isNaN(y.offset)&&(d=parseInt(y.offset)),y.anchor&&document.querySelectorAll(y.anchor)&&(u=document.querySelectorAll(y.anchor)[0]),f=(0,a.default)(u).top,y.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=u.offsetHeight/2;break;case"bottom-bottom":f+=u.offsetHeight;break;case"top-center":f+=g/2;break;case"bottom-center":f+=g/2+u.offsetHeight;break;case"center-center":f+=g/2+u.offsetHeight/2;break;case"top-top":f+=g;break;case"bottom-top":f+=u.offsetHeight+g;break;case"center-top":f+=u.offsetHeight/2+g}return y.anchorPlacement||y.offset||isNaN(c)||(d=c),f+d};r.default=s},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){for(var l=0,a=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)l+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),a+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:a,left:l}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(l){return{node:l}})};r.default=i}])})})(dp);var L0=dp.exports;const D0=Jc(L0);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pp=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=Y.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:l,...a},s)=>Y.createElement("svg",{ref:s,...I0,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:pp("lucide",i),...a},[...l.map(([u,c])=>Y.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(t,e)=>{const n=Y.forwardRef(({className:r,...i},o)=>Y.createElement(F0,{ref:o,iconNode:e,className:pp(`lucide-${R0(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=je("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=je("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=je("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=je("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=je("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=je("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=je("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=je("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=je("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=je("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=je("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=je("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=je("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=je("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),G0="https://www.google.com/maps/place/Albeso+Space/@14.5793337,121.0476797,21z/data=!4m6!3m5!1s0x3397c95165564011:0xfc35408cb045a1ff!8m2!3d14.5794386!4d121.0478301!16s%2Fg%2F11yl_g9k59?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D";function X0(){return _.createElement("section",{id:"about",className:"page-section-anchor lagom-section about-section",style:{padding:"4.5rem 2rem 10rem",maxWidth:"1280px",margin:"0 auto",minHeight:"100vh",display:"flex",alignItems:"flex-start"}},_.createElement("div",{style:{width:"100%"}},_.createElement("div",{className:"section-kicker","data-aos":"fade-up"},"001 / About"),_.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.15fr) minmax(320px, 0.85fr)",gap:"5rem",alignItems:"center"}},_.createElement("div",{"data-aos":"fade-up"},_.createElement("h2",{style:{fontFamily:'"Playfair Display", serif',fontSize:"clamp(3.5rem, 8vw, 7.8rem)",fontWeight:700,color:"#1e40af",marginBottom:"2rem",lineHeight:.95}},"ECMI"),_.createElement("p",{style:{fontSize:"clamp(1.15rem, 1.8vw, 1.45rem)",lineHeight:1.9,color:"#475569",marginBottom:"1.5rem",maxWidth:"760px"}},"ECMI Mandaluyong is a vibrant community of believers passionate about knowing God, making disciples, and transforming lives through the power of the Gospel."),_.createElement("p",{style:{fontSize:"clamp(1.05rem, 1.45vw, 1.2rem)",lineHeight:1.9,color:"#475569",maxWidth:"720px"}},"Whether you're new to faith or have been walking with Christ for years, there's a place for you here. Come as you are, and experience the love of God in our midst.")),_.createElement("div",{"data-aos":"fade-up","data-aos-delay":"120",style:{background:"linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",borderRadius:"20px",padding:"3rem",color:"white",boxShadow:"0 20px 60px rgba(30, 64, 175, 0.2)"}},_.createElement("div",{style:{marginBottom:"2rem"}},_.createElement(ru,{size:40,style:{marginBottom:"1rem"}}),_.createElement("h3",{style:{fontFamily:'"Outfit", sans-serif',fontSize:"1.5rem",fontWeight:600,marginBottom:"0.5rem"}},"Our Location"),_.createElement("a",{href:G0,target:"_blank",rel:"noreferrer",style:{color:"white",opacity:.9,lineHeight:1.7,textDecoration:"none",display:"inline-block"}},"Albeso Space",_.createElement("br",null),"Mandaluyong City",_.createElement("br",null),"Metro Manila, Philippines")),_.createElement("div",null,_.createElement(nu,{size:40,style:{marginBottom:"1rem"}}),_.createElement("h3",{style:{fontFamily:'"Outfit", sans-serif',fontSize:"1.5rem",fontWeight:600,marginBottom:"0.5rem"}},"Service Times"),_.createElement("p",{style:{opacity:.9,lineHeight:1.7}},"Sunday: 9:00 AM & 5:00 PM",_.createElement("br",null),"Wednesday: 7:00 PM",_.createElement("br",null),"Friday Youth: 7:00 PM"))))))}const Dc=40;function K0(){const t=Y.useRef(null),e=Y.useRef(null),[n,r]=Y.useState({isActive:!1,thumbHeight:Dc,thumbTop:0}),[i,o]=Y.useState(!1);Y.useEffect(()=>{const a=()=>{const s=t.current,u=document.documentElement.scrollHeight,c=window.innerHeight,f=u-c;if(!s||f<=0){r(x=>({...x,isActive:!1,thumbTop:0}));return}const d=s.clientHeight,g=Math.max(Dc,c/u*d),p=(d-g)*(window.scrollY/f);r({isActive:!0,thumbHeight:g,thumbTop:p})};return a(),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]),Y.useEffect(()=>{const a=u=>{const c=e.current,f=t.current;if(!c||!f)return;const d=document.documentElement.scrollHeight,g=window.innerHeight,y=d-g,p=f.clientHeight-c.thumbHeight,x=Math.min(Math.max(0,u.clientY-c.startY+c.startTop),p),h=p>0?x/p*y:0;window.scrollTo({top:h})},s=()=>{e.current=null,o(!1)};return i&&(window.addEventListener("pointermove",a),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)),()=>{window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s)}},[i]);const l=a=>{var s,u;a.preventDefault(),(u=(s=a.currentTarget).setPointerCapture)==null||u.call(s,a.pointerId),e.current={startY:a.clientY,startTop:n.thumbTop,thumbHeight:n.thumbHeight},o(!0)};return _.createElement("div",{ref:t,className:`custom-scrollbar body-scroll${n.isActive?" is-active":""}${i?" is-dragging":""}`,"data-scrollbar":!0,"aria-hidden":"true"},_.createElement("div",{className:"scroll-track","data-scrollbar-track":!0,onPointerDown:l,style:{height:`${n.thumbHeight}px`,transform:`translateY(${n.thumbTop}px)`}}))}function q0({events:t}){return _.createElement("section",{id:"events",className:"page-section-anchor lagom-section",style:{padding:"10rem 2rem",background:"white",minHeight:"100vh",display:"flex",alignItems:"center"}},_.createElement("div",{style:{maxWidth:"1280px",width:"100%",margin:"0 auto"}},_.createElement("div",{className:"section-kicker","data-aos":"fade-up"},"002 / Events"),_.createElement("h2",{"data-aos":"fade-up",style:{fontFamily:'"Playfair Display", serif',fontSize:"clamp(3.5rem, 8vw, 7.8rem)",fontWeight:700,color:"#1e40af",marginBottom:"4rem",lineHeight:.95}},"Church Events"),_.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"2rem"}},t.map((e,n)=>_.createElement("div",{key:e.title,"data-aos":"fade-up","data-aos-delay":Math.min(n+1,4)*90,style:{background:"linear-gradient(135deg, #fef3e2 0%, #fde8c8 100%)",borderRadius:"16px",padding:"2rem",borderLeft:"4px solid #f59e0b",transition:"transform 0.3s, box-shadow 0.3s",cursor:"pointer",animation:`fadeInUp 0.6s ease-out ${n*.1}s backwards`}},_.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem",color:"#f59e0b",fontFamily:'"Outfit", sans-serif',fontSize:"0.9rem",fontWeight:600}},_.createElement(j0,{size:16}),e.date),_.createElement("h3",{style:{fontFamily:'"Outfit", sans-serif',fontSize:"1.3rem",fontWeight:600,color:"#1e40af",marginBottom:"1rem"}},e.title),_.createElement("div",{style:{fontSize:"0.95rem",color:"#64748b",marginBottom:"0.5rem"}},_.createElement(nu,{size:14,style:{display:"inline",marginRight:"0.5rem"}}),e.time),_.createElement("div",{style:{fontSize:"0.95rem",color:"#64748b"}},_.createElement(ru,{size:14,style:{display:"inline",marginRight:"0.5rem"}}),e.location))))))}const ou="/assets/logo-DVwyEEyv.png",Z0="https://www.google.com/maps/place/Albeso+Space/@14.5793337,121.0476797,21z/data=!4m6!3m5!1s0x3397c95165564011:0xfc35408cb045a1ff!8m2!3d14.5794386!4d121.0478301!16s%2Fg%2F11yl_g9k59?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D",J0=[{href:"#top",label:"Home"},{href:"#about",label:"About"},{href:"#events",label:"Events"},{href:"#gallery",label:"Gallery"},{href:"#live-stream",label:"Media"},{href:"#give",label:"Give"},{href:"#visit",label:"Visit Us"}],eg=[{label:"Facebook",href:"https://www.facebook.com/officialecmimakati",icon:B0},{label:"YouTube",href:"#",icon:Q0},{label:"Instagram",href:"#",icon:V0},{label:"TikTok",href:"#",icon:W0}];function tg(){return _.createElement("footer",{id:"footer",className:"site-footer-section"},_.createElement("div",{className:"footer-cta-panel","data-aos":"fade-up"},_.createElement("div",{className:"footer-cta-image","aria-hidden":"true"}),_.createElement("div",{className:"footer-cta-content"},_.createElement("div",{className:"footer-section-number"},"007"),_.createElement("h2",null,"Want to know more?"),_.createElement("a",{href:"mailto:ecmi.mandaluyong@gmail.com",className:"footer-cta-button"},"Get in Touch",_.createElement(mp,{size:20})))),_.createElement("div",{className:"footer-directory","data-aos":"fade-up","data-aos-delay":"120"},_.createElement("div",{className:"footer-brand-block"},_.createElement("a",{href:"#top","aria-label":"Back to top",className:"footer-logo-link"},_.createElement("img",{src:ou,alt:"ECMI Mandaluyong logo"})),_.createElement("p",null,"Emmanuel Church Ministries International - Mandaluyong. A community growing together in worship, fellowship, and faith.")),_.createElement("nav",{className:"footer-column","aria-label":"Footer navigation"},_.createElement("h3",null,"Menu"),J0.map(t=>_.createElement("a",{key:t.href,href:t.href},t.label))),_.createElement("div",{className:"footer-column footer-contact-column"},_.createElement("h3",null,"Contacts"),_.createElement("a",{href:"tel:+6321234567"},"(02) 123-4567"),_.createElement("a",{href:"mailto:ecmi.mandaluyong@gmail.com"},"ecmi.mandaluyong@gmail.com"),_.createElement("a",{href:Z0,target:"_blank",rel:"noreferrer"},"Albeso Space, Mandaluyong City")),_.createElement("div",{className:"footer-column"},_.createElement("h3",null,"Social"),_.createElement("div",{className:"footer-social-icons"},eg.map(t=>{const e=t.icon;return _.createElement("a",{key:t.label,href:t.href,target:t.href.startsWith("http")?"_blank":void 0,rel:t.href.startsWith("http")?"noreferrer":void 0,"aria-label":t.label,title:t.label},_.createElement(e,{size:22}))}))),_.createElement("div",{className:"footer-legal-row"},_.createElement("span",null,"© 2026 ECMI Mandaluyong. All Rights Reserved."),_.createElement("span",null,"Emmanuel Church Ministries International"))))}function ng({images:t,selectedImage:e,onClose:n,onNext:r,onPrevious:i}){if(e===null)return null;const o=t[e];return _.createElement("div",{onClick:n,style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.95)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"}},_.createElement("button",{onClick:n,style:{position:"absolute",top:"2rem",right:"2rem",background:"white",border:"none",borderRadius:"50%",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:2001}},_.createElement(Y0,{size:24})),_.createElement("button",{onClick:l=>{l.stopPropagation(),i()},style:{position:"absolute",left:"2rem",background:"white",border:"none",borderRadius:"50%",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:2001}},_.createElement(U0,{size:24})),_.createElement("button",{onClick:l=>{l.stopPropagation(),r()},style:{position:"absolute",right:"2rem",background:"white",border:"none",borderRadius:"50%",width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:2001}},_.createElement(hp,{size:24})),_.createElement("div",{onClick:l=>l.stopPropagation(),style:{maxWidth:"90%",maxHeight:"90%"}},_.createElement("img",{src:o==null?void 0:o.url,alt:o==null?void 0:o.caption,style:{maxWidth:"100%",maxHeight:"80vh",objectFit:"contain",borderRadius:"12px"}}),_.createElement("p",{style:{color:"white",textAlign:"center",marginTop:"1rem",fontFamily:'"Outfit", sans-serif',fontSize:"1.2rem"}},o==null?void 0:o.caption)))}function jt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gp(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var lt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ni={duration:.5,overwrite:!1,delay:0},lu,Te,te,gt=1e8,K=1/gt,Qa=Math.PI*2,rg=Qa/4,ig=0,vp=Math.sqrt,og=Math.cos,lg=Math.sin,Ee=function(e){return typeof e=="string"},de=function(e){return typeof e=="function"},Xt=function(e){return typeof e=="number"},au=function(e){return typeof e>"u"},It=function(e){return typeof e=="object"},Qe=function(e){return e!==!1},su=function(){return typeof window<"u"},uo=function(e){return de(e)||Ee(e)},yp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Le=Array.isArray,ag=/random\([^)]+\)/g,sg=/,\s*/g,Rc=/(?:-?\.?\d|\.)+/gi,_p=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wp=/[+-]=-?[.\d]+/,ug=/[^,'"\[\]\s]+/gi,cg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,oe,Mt,Ga,uu,st={},Ko={},xp,kp=function(e){return(Ko=Lr(e,st))&&qe},cu=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Li=function(e,n){return!n&&console.warn(e)},Sp=function(e,n){return e&&(st[e]=n)&&Ko&&(Ko[e]=n)||st},Di=function(){return 0},fg={suppressEvents:!0,isStart:!0,kill:!1},So={suppressEvents:!0,kill:!1},dg={suppressEvents:!0},fu={},wn=[],Xa={},Ep,et={},Gl={},Ic=30,Eo=[],du="",pu=function(e){var n=e[0],r,i;if(It(n)||de(n)||(e=[e]),!(r=(n._gsap||{}).harness)){for(i=Eo.length;i--&&!Eo[i].targetTest(n););r=Eo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Yp(e[i],r)))||e.splice(i,1);return e},Hn=function(e){return e._gsap||pu(vt(e))[0]._gsap},bp=function(e,n,r){return(r=e[n])&&de(r)?e[n]():au(r)&&e.getAttribute&&e.getAttribute(n)||r},Ge=function(e,n){return(e=e.split(",")).forEach(n)||e},pe=function(e){return Math.round(e*1e5)/1e5||0},re=function(e){return Math.round(e*1e7)/1e7||0},Sr=function(e,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},pg=function(e,n){for(var r=n.length,i=0;e.indexOf(n[i])<0&&++i<r;);return i<r},qo=function(){var e=wn.length,n=wn.slice(0),r,i;for(Xa={},wn.length=0,r=0;r<e;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},mu=function(e){return!!(e._initted||e._startAt||e.add)},Cp=function(e,n,r,i){wn.length&&!Te&&qo(),e.render(n,r,!!(Te&&n<0&&mu(e))),wn.length&&!Te&&qo()},Tp=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(ug).length<2?n:Ee(e)?e.trim():e},Pp=function(e){return e},ut=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},mg=function(e){return function(n,r){for(var i in r)i in n||i==="duration"&&e||i==="ease"||(n[i]=r[i])}},Lr=function(e,n){for(var r in n)e[r]=n[r];return e},Fc=function t(e,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=It(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},Zo=function(e,n){var r={},i;for(i in e)i in n||(r[i]=e[i]);return r},di=function(e){var n=e.parent||oe,r=e.keyframes?mg(Le(e.keyframes)):ut;if(Qe(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},hg=function(e,n){for(var r=e.length,i=r===n.length;i&&r--&&e[r]===n[r];);return r<0},zp=function(e,n,r,i,o){var l=e[i],a;if(o)for(a=n[o];l&&l[o]>a;)l=l._prev;return l?(n._next=l._next,l._next=n):(n._next=e[r],e[r]=n),n._next?n._next._prev=n:e[i]=n,n._prev=l,n.parent=n._dp=e,n},yl=function(e,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=n._prev,l=n._next;o?o._next=l:e[r]===n&&(e[r]=l),l?l._prev=o:e[i]===n&&(e[i]=o),n._next=n._prev=n.parent=null},En=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vn=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},gg=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Ka=function(e,n,r,i){return e._startAt&&(Te?e._startAt.revert(So):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,i))},vg=function t(e){return!e||e._ts&&t(e.parent)},Ac=function(e){return e._repeat?Dr(e._tTime,e=e.duration()+e._rDelay)*e:0},Dr=function(e,n){var r=Math.floor(e=re(e/n));return e&&r===e?r-1:r},Jo=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},_l=function(e){return e._end=re(e._start+(e._tDur/Math.abs(e._ts||e._rts||K)||0))},wl=function(e,n){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=re(r._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),_l(e),r._dirty||Vn(r,e)),e},Mp=function(e,n){var r;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(r=Jo(e.rawTime(),n),(!n._dur||$i(0,n.totalDuration(),r)-n._tTime>K)&&n.render(r,!0)),Vn(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-K}},Nt=function(e,n,r,i){return n.parent&&En(n),n._start=re((Xt(r)?r:r||e!==oe?dt(e,r,n):e._time)+n._delay),n._end=re(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),zp(e,n,"_first","_last",e._sort?"_start":0),qa(n)||(e._recent=n),i||Mp(e,n),e._ts<0&&wl(e,e._tTime),e},Op=function(e,n){return(st.ScrollTrigger||cu("scrollTrigger",n))&&st.ScrollTrigger.create(n,e)},Np=function(e,n,r,i,o){if(gu(e,n,o),!e._initted)return 1;if(!r&&e._pt&&!Te&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ep!==tt.frame)return wn.push(e),e._lazy=[o,i],1},yg=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},qa=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},_g=function(e,n,r,i){var o=e.ratio,l=n<0||!n&&(!e._start&&yg(e)&&!(!e._initted&&qa(e))||(e._ts<0||e._dp._ts<0)&&!qa(e))?0:1,a=e._rDelay,s=0,u,c,f;if(a&&e._repeat&&(s=$i(0,e._tDur,n),c=Dr(s,a),e._yoyo&&c&1&&(l=1-l),c!==Dr(e._tTime,a)&&(o=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==o||Te||i||e._zTime===K||!n&&e._zTime){if(!e._initted&&Np(e,n,i,r,s))return;for(f=e._zTime,e._zTime=n||(r?K:0),r||(r=n&&!f),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=s,u=e._pt;u;)u.r(l,u.d),u=u._next;n<0&&Ka(e,n,r,!0),e._onUpdate&&!r&&rt(e,"onUpdate"),s&&e._repeat&&!r&&e.parent&&rt(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===l&&(l&&En(e,1),!r&&!Te&&(rt(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},wg=function(e,n,r){var i;if(r>n)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},Rr=function(e,n,r,i){var o=e._repeat,l=re(n)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=l/e._dur),e._dur=l,e._tDur=o?o<0?1e10:re(l*(o+1)+e._rDelay*o):l,a>0&&!i&&wl(e,e._tTime=e._tDur*a),e.parent&&_l(e),r||Vn(e.parent,e),e},jc=function(e){return e instanceof He?Vn(e):Rr(e,e._dur)},xg={_start:0,endTime:Di,totalDuration:Di},dt=function t(e,n,r){var i=e.labels,o=e._recent||xg,l=e.duration()>=gt?o.endTime(!1):e._dur,a,s,u;return Ee(n)&&(isNaN(n)||n in i)?(s=n.charAt(0),u=n.substr(-1)==="%",a=n.indexOf("="),s==="<"||s===">"?(a>=0&&(n=n.replace(/=/,"")),(s==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(a<0?o:r).totalDuration()/100:1)):a<0?(n in i||(i[n]=l),i[n]):(s=parseFloat(n.charAt(a-1)+n.substr(a+1)),u&&r&&(s=s/100*(Le(r)?r[0]:r).totalDuration()),a>1?t(e,n.substr(0,a-1),r)+s:l+s)):n==null?l:+n},pi=function(e,n,r){var i=Xt(n[1]),o=(i?2:1)+(e<2?0:1),l=n[o],a,s;if(i&&(l.duration=n[1]),l.parent=r,e){for(a=l,s=r;s&&!("immediateRender"in a);)a=s.vars.defaults||{},s=Qe(s.vars.inherit)&&s.parent;l.immediateRender=Qe(a.immediateRender),e<2?l.runBackwards=1:l.startAt=n[o-1]}return new he(n[0],l,n[o+1])},Mn=function(e,n){return e||e===0?n(e):n},$i=function(e,n,r){return r<e?e:r>n?n:r},Ne=function(e,n){return!Ee(e)||!(n=cg.exec(e))?"":n[1]},kg=function(e,n,r){return Mn(r,function(i){return $i(e,n,i)})},Za=[].slice,Lp=function(e,n){return e&&It(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&It(e[0]))&&!e.nodeType&&e!==Mt},Sg=function(e,n,r){return r===void 0&&(r=[]),e.forEach(function(i){var o;return Ee(i)&&!n||Lp(i,1)?(o=r).push.apply(o,vt(i)):r.push(i)})||r},vt=function(e,n,r){return te&&!n&&te.selector?te.selector(e):Ee(e)&&!r&&(Ga||!Ir())?Za.call((n||uu).querySelectorAll(e),0):Le(e)?Sg(e,r):Lp(e)?Za.call(e,0):e?[e]:[]},Ja=function(e){return e=vt(e)[0]||Li("Invalid scope")||{},function(n){var r=e.current||e.nativeElement||e;return vt(n,r.querySelectorAll?r:r===e?Li("Invalid scope")||uu.createElement("div"):e)}},Dp=function(e){return e.sort(function(){return .5-Math.random()})},Rp=function(e){if(de(e))return e;var n=It(e)?e:{each:e},r=Wn(n.ease),i=n.from||0,o=parseFloat(n.base)||0,l={},a=i>0&&i<1,s=isNaN(i)||a,u=n.axis,c=i,f=i;return Ee(i)?c=f={center:.5,edges:.5,end:1}[i]||0:!a&&s&&(c=i[0],f=i[1]),function(d,g,y){var p=(y||n).length,x=l[p],h,m,v,w,k,b,E,S,C;if(!x){if(C=n.grid==="auto"?0:(n.grid||[1,gt])[1],!C){for(E=-gt;E<(E=y[C++].getBoundingClientRect().left)&&C<p;);C<p&&C--}for(x=l[p]=[],h=s?Math.min(C,p)*c-.5:i%C,m=C===gt?0:s?p*f/C-.5:i/C|0,E=0,S=gt,b=0;b<p;b++)v=b%C-h,w=m-(b/C|0),x[b]=k=u?Math.abs(u==="y"?w:v):vp(v*v+w*w),k>E&&(E=k),k<S&&(S=k);i==="random"&&Dp(x),x.max=E-S,x.min=S,x.v=p=(parseFloat(n.amount)||parseFloat(n.each)*(C>p?p-1:u?u==="y"?p/C:C:Math.max(C,p/C))||0)*(i==="edges"?-1:1),x.b=p<0?o-p:o,x.u=Ne(n.amount||n.each)||0,r=r&&p<0?Ig(r):r}return p=(x[d]-x.min)/x.max||0,re(x.b+(r?r(p):p)*x.v)+x.u}},es=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=re(Math.round(parseFloat(r)/e)*e*n);return(i-i%1)/n+(Xt(r)?0:Ne(r))}},Ip=function(e,n){var r=Le(e),i,o;return!r&&It(e)&&(i=r=e.radius||gt,e.values?(e=vt(e.values),(o=!Xt(e[0]))&&(i*=i)):e=es(e.increment)),Mn(n,r?de(e)?function(l){return o=e(l),Math.abs(o-l)<=i?o:l}:function(l){for(var a=parseFloat(o?l.x:l),s=parseFloat(o?l.y:0),u=gt,c=0,f=e.length,d,g;f--;)o?(d=e[f].x-a,g=e[f].y-s,d=d*d+g*g):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!i||u<=i?e[c]:l,o||c===l||Xt(l)?c:c+Ne(l)}:es(e))},Fp=function(e,n,r,i){return Mn(Le(e)?!n:r===!0?!!(r=0):!i,function(){return Le(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(n-e+r*.99))/r)*r*i)/i})},Eg=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(i){return n.reduce(function(o,l){return l(o)},i)}},bg=function(e,n){return function(r){return e(parseFloat(r))+(n||Ne(r))}},Cg=function(e,n,r){return jp(e,n,0,1,r)},Ap=function(e,n,r){return Mn(r,function(i){return e[~~n(i)]})},Tg=function t(e,n,r){var i=n-e;return Le(e)?Ap(e,t(0,e.length),n):Mn(r,function(o){return(i+(o-e)%i)%i+e})},Pg=function t(e,n,r){var i=n-e,o=i*2;return Le(e)?Ap(e,t(0,e.length-1),n):Mn(r,function(l){return l=(o+(l-e)%o)%o||0,e+(l>i?o-l:l)})},Ri=function(e){return e.replace(ag,function(n){var r=n.indexOf("[")+1,i=n.substring(r||7,r?n.indexOf("]"):n.length-1).split(sg);return Fp(r?i:+i[0],r?0:+i[1],+i[2]||1e-5)})},jp=function(e,n,r,i,o){var l=n-e,a=i-r;return Mn(o,function(s){return r+((s-e)/l*a||0)})},zg=function t(e,n,r,i){var o=isNaN(e+n)?0:function(g){return(1-g)*e+g*n};if(!o){var l=Ee(e),a={},s,u,c,f,d;if(r===!0&&(i=1)&&(r=null),l)e={p:e},n={p:n};else if(Le(e)&&!Le(n)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(t(e[u-1],e[u]));f--,o=function(y){y*=f;var p=Math.min(d,~~y);return c[p](y-p)},r=n}else i||(e=Lr(Le(e)?[]:{},e));if(!c){for(s in n)hu.call(a,e,s,"get",n[s]);o=function(y){return _u(y,a)||(l?e.p:e)}}}return Mn(r,o)},Uc=function(e,n,r){var i=e.labels,o=gt,l,a,s;for(l in i)a=i[l]-n,a<0==!!r&&a&&o>(a=Math.abs(a))&&(s=l,o=a);return s},rt=function(e,n,r){var i=e.vars,o=i[n],l=te,a=e._ctx,s,u,c;if(o)return s=i[n+"Params"],u=i.callbackScope||e,r&&wn.length&&qo(),a&&(te=a),c=s?o.apply(u,s):o.call(u),te=l,c},ti=function(e){return En(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Te),e.progress()<1&&rt(e,"onInterrupt"),e},gr,Up=[],Bp=function(e){if(e)if(e=!e.name&&e.default||e,su()||e.headless){var n=e.name,r=de(e),i=n&&!r&&e.init?function(){this._props=[]}:e,o={init:Di,render:_u,add:hu,kill:Yg,modifier:$g,rawVars:0},l={targetTest:0,get:0,getSetter:yu,aliases:{},register:0};if(Ir(),e!==i){if(et[n])return;ut(i,ut(Zo(e,o),l)),Lr(i.prototype,Lr(o,Zo(e,l))),et[i.prop=n]=i,e.targetTest&&(Eo.push(i),fu[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Sp(n,i),e.register&&e.register(qe,i,Xe)}else Up.push(e)},X=255,ni={aqua:[0,X,X],lime:[0,X,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,X],navy:[0,0,128],white:[X,X,X],olive:[128,128,0],yellow:[X,X,0],orange:[X,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[X,0,0],pink:[X,192,203],cyan:[0,X,X],transparent:[X,X,X,0]},Xl=function(e,n,r){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(r-n)*e*6:e<.5?r:e*3<2?n+(r-n)*(2/3-e)*6:n)*X+.5|0},Hp=function(e,n,r){var i=e?Xt(e)?[e>>16,e>>8&X,e&X]:0:ni.black,o,l,a,s,u,c,f,d,g,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ni[e])i=ni[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),l=e.charAt(2),a=e.charAt(3),e="#"+o+o+l+l+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&X,i&X,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&X,e&X]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(Rc),!n)s=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,l=c<=.5?c*(u+1):c+u-c*u,o=c*2-l,i.length>3&&(i[3]*=1),i[0]=Xl(s+1/3,o,l),i[1]=Xl(s,o,l),i[2]=Xl(s-1/3,o,l);else if(~e.indexOf("="))return i=e.match(_p),r&&i.length<4&&(i[3]=1),i}else i=e.match(Rc)||ni.transparent;i=i.map(Number)}return n&&!y&&(o=i[0]/X,l=i[1]/X,a=i[2]/X,f=Math.max(o,l,a),d=Math.min(o,l,a),c=(f+d)/2,f===d?s=u=0:(g=f-d,u=c>.5?g/(2-f-d):g/(f+d),s=f===o?(l-a)/g+(l<a?6:0):f===l?(a-o)/g+2:(o-l)/g+4,s*=60),i[0]=~~(s+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),r&&i.length<4&&(i[3]=1),i},Vp=function(e){var n=[],r=[],i=-1;return e.split(xn).forEach(function(o){var l=o.match(hr)||[];n.push.apply(n,l),r.push(i+=l.length+1)}),n.c=r,n},Bc=function(e,n,r){var i="",o=(e+i).match(xn),l=n?"hsla(":"rgba(",a=0,s,u,c,f;if(!o)return e;if(o=o.map(function(d){return(d=Hp(d,n,1))&&l+(n?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),r&&(c=Vp(e),s=r.c,s.join(i)!==c.c.join(i)))for(u=e.replace(xn,"1").split(hr),f=u.length-1;a<f;a++)i+=u[a]+(~s.indexOf(a)?o.shift()||l+"0,0,0,0)":(c.length?c:o.length?o:r).shift());if(!u)for(u=e.split(xn),f=u.length-1;a<f;a++)i+=u[a]+o[a];return i+u[f]},xn=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ni)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Mg=/hsl[a]?\(/,Wp=function(e){var n=e.join(" "),r;if(xn.lastIndex=0,xn.test(n))return r=Mg.test(n),e[1]=Bc(e[1],r),e[0]=Bc(e[0],r,Vp(e[1])),!0},Ii,tt=function(){var t=Date.now,e=500,n=33,r=t(),i=r,o=1e3/240,l=o,a=[],s,u,c,f,d,g,y=function p(x){var h=t()-i,m=x===!0,v,w,k,b;if((h>e||h<0)&&(r+=h-n),i+=h,k=i-r,v=k-l,(v>0||m)&&(b=++f.frame,d=k-f.time*1e3,f.time=k=k/1e3,l+=v+(v>=o?4:o-v),w=1),m||(s=u(p)),w)for(g=0;g<a.length;g++)a[g](k,d,b,x)};return f={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(x){return d/(1e3/(x||60))},wake:function(){xp&&(!Ga&&su()&&(Mt=Ga=window,uu=Mt.document||{},st.gsap=qe,(Mt.gsapVersions||(Mt.gsapVersions=[])).push(qe.version),kp(Ko||Mt.GreenSockGlobals||!Mt.gsap&&Mt||{}),Up.forEach(Bp)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,s&&f.sleep(),u=c||function(x){return setTimeout(x,l-f.time*1e3+1|0)},Ii=1,y(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(s),Ii=0,u=Di},lagSmoothing:function(x,h){e=x||1/0,n=Math.min(h||33,e)},fps:function(x){o=1e3/(x||240),l=f.time*1e3+o},add:function(x,h,m){var v=h?function(w,k,b,E){x(w,k,b,E),f.remove(v)}:x;return f.remove(x),a[m?"unshift":"push"](v),Ir(),v},remove:function(x,h){~(h=a.indexOf(x))&&a.splice(h,1)&&g>=h&&g--},_listeners:a},f}(),Ir=function(){return!Ii&&tt.wake()},U={},Og=/^[\d.\-M][\d.\-,\s]/,Ng=/["']/g,Lg=function(e){for(var n={},r=e.substr(1,e.length-3).split(":"),i=r[0],o=1,l=r.length,a,s,u;o<l;o++)s=r[o],a=o!==l-1?s.lastIndexOf(","):s.length,u=s.substr(0,a),n[i]=isNaN(u)?u.replace(Ng,"").trim():+u,i=s.substr(a+1).trim();return n},Dg=function(e){var n=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",n);return e.substring(n,~i&&i<r?e.indexOf(")",r+1):r)},Rg=function(e){var n=(e+"").split("("),r=U[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[Lg(n[1])]:Dg(e).split(",").map(Tp)):U._CE&&Og.test(e)?U._CE("",e):r},Ig=function(e){return function(n){return 1-e(1-n)}},Wn=function(e,n){return e&&(de(e)?e:U[e]||Rg(e))||n},Jn=function(e,n,r,i){r===void 0&&(r=function(s){return 1-n(1-s)}),i===void 0&&(i=function(s){return s<.5?n(s*2)/2:1-n((1-s)*2)/2});var o={easeIn:n,easeOut:r,easeInOut:i},l;return Ge(e,function(a){U[a]=st[a]=o,U[l=a.toLowerCase()]=r;for(var s in o)U[l+(s==="easeIn"?".in":s==="easeOut"?".out":".inOut")]=U[a+"."+s]=o[s]}),o},$p=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Kl=function t(e,n,r){var i=n>=1?n:1,o=(r||(e?.3:.45))/(n<1?n:1),l=o/Qa*(Math.asin(1/i)||0),a=function(c){return c===1?1:i*Math.pow(2,-10*c)*lg((c-l)*o)+1},s=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:$p(a);return o=Qa/o,s.config=function(u,c){return t(e,u,c)},s},ql=function t(e,n){n===void 0&&(n=1.70158);var r=function(l){return l?--l*l*((n+1)*l+n)+1:0},i=e==="out"?r:e==="in"?function(o){return 1-r(1-o)}:$p(r);return i.config=function(o){return t(e,o)},i};Ge("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Jn(t+",Power"+(n-1),e?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});U.Linear.easeNone=U.none=U.Linear.easeIn;Jn("Elastic",Kl("in"),Kl("out"),Kl());(function(t,e){var n=1/e,r=2*n,i=2.5*n,o=function(a){return a<n?t*a*a:a<r?t*Math.pow(a-1.5/e,2)+.75:a<i?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};Jn("Bounce",function(l){return 1-o(1-l)},o)})(7.5625,2.75);Jn("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Jn("Circ",function(t){return-(vp(1-t*t)-1)});Jn("Sine",function(t){return t===1?1:-og(t*rg)+1});Jn("Back",ql("in"),ql("out"),ql());U.SteppedEase=U.steps=st.SteppedEase={config:function(e,n){e===void 0&&(e=1);var r=1/e,i=e+(n?0:1),o=n?1:0,l=1-K;return function(a){return((i*$i(0,l,a)|0)+o)*r}}};Ni.ease=U["quad.out"];Ge("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return du+=t+","+t+"Params,"});var Yp=function(e,n){this.id=ig++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:bp,this.set=n?n.getSetter:yu},Fi=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Rr(this,+n.duration,1,1),this.data=n.data,te&&(this._ctx=te,te.data.push(this)),Ii||tt.wake()}var e=t.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,Rr(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(Ir(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(wl(this,r),!o._dp||o.parent||Mp(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Nt(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===K||!this._initted&&this._dur&&r||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Cp(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Ac(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Ac(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,i):this._repeat?Dr(this._tTime,o)+1:1},e.timeScale=function(r,i){if(!arguments.length)return this._rts===-K?0:this._rts;if(this._rts===r)return this;var o=this.parent&&this._ts?Jo(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-K?0:this._rts,this.totalTime($i(-Math.abs(this._delay),this.totalDuration(),o),i!==!1),_l(this),gg(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ir(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==K&&(this._tTime-=K)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=re(r);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nt(i,this,this._start-this._delay),this}return this._start},e.endTime=function(r){return this._start+(Qe(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jo(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=dg);var i=Te;return Te=r,mu(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Te=i,this},e.globalTime=function(r){for(var i=this,o=arguments.length?r:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):o},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,jc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,jc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(dt(this,r),Qe(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,Qe(i)),this._dur||(this._zTime=-K),this},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-K:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-K,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=i&&o<this.endTime(!0)-K)},e.eventCallback=function(r,i,o){var l=this.vars;return arguments.length>1?(i?(l[r]=i,o&&(l[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=i)):delete l[r],this):l[r]},e.then=function(r){var i=this,o=i._prom;return new Promise(function(l){var a=de(r)?r:Pp,s=function(){var c=i.then;i.then=null,o&&o(),de(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),l(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){ti(this)},t}();ut(Fi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-K,_prom:0,_ps:!1,_rts:1});var He=function(t){gp(e,t);function e(r,i){var o;return r===void 0&&(r={}),o=t.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=Qe(r.sortChildren),oe&&Nt(r.parent||oe,jt(o),i),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&Op(jt(o),r.scrollTrigger),o}var n=e.prototype;return n.to=function(i,o,l){return pi(0,arguments,this),this},n.from=function(i,o,l){return pi(1,arguments,this),this},n.fromTo=function(i,o,l,a){return pi(2,arguments,this),this},n.set=function(i,o,l){return o.duration=0,o.parent=this,di(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new he(i,o,dt(this,l),1),this},n.call=function(i,o,l){return Nt(this,he.delayedCall(0,i,o),l)},n.staggerTo=function(i,o,l,a,s,u,c){return l.duration=o,l.stagger=l.stagger||a,l.onComplete=u,l.onCompleteParams=c,l.parent=this,new he(i,l,dt(this,s)),this},n.staggerFrom=function(i,o,l,a,s,u,c){return l.runBackwards=1,di(l).immediateRender=Qe(l.immediateRender),this.staggerTo(i,o,l,a,s,u,c)},n.staggerFromTo=function(i,o,l,a,s,u,c,f){return a.startAt=l,di(a).immediateRender=Qe(a.immediateRender),this.staggerTo(i,o,a,s,u,c,f)},n.render=function(i,o,l){var a=this._time,s=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:re(i),f=this._zTime<0!=i<0&&(this._initted||!u),d,g,y,p,x,h,m,v,w,k,b,E;if(this!==oe&&c>s&&i>=0&&(c=s),c!==this._tTime||l||f){if(a!==this._time&&u&&(c+=this._time-a,i+=this._time-a),d=c,w=this._start,v=this._ts,h=!v,f&&(u||(a=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,x=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(x*100+i,o,l);if(d=re(c%x),c===s?(p=this._repeat,d=u):(k=re(c/x),p=~~k,p&&p===k&&(d=u,p--),d>u&&(d=u)),k=Dr(this._tTime,x),!a&&this._tTime&&k!==p&&this._tTime-k*x-this._dur<=0&&(k=p),b&&p&1&&(d=u-d,E=1),p!==k&&!this._lock){var S=b&&k&1,C=S===(b&&p&1);if(p<k&&(S=!S),a=S?0:c%u?u:c,this._lock=1,this.render(a||(E?0:re(p*x)),o,!u)._lock=0,this._tTime=c,!o&&this.parent&&rt(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,k=p),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,s=this._tDur,C&&(this._lock=2,a=S?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=wg(this,re(a),re(d)),m&&(c-=d-(d=m._start))),this._tTime=c,this._time=d,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&c&&u&&!o&&!k&&(rt(this,"onStart"),this._tTime!==c))return this;if(d>=a&&i>=0)for(g=this._first;g;){if(y=g._next,(g._act||d>=g._start)&&g._ts&&m!==g){if(g.parent!==this)return this.render(i,o,l);if(g.render(g._ts>0?(d-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(d-g._start)*g._ts,o,l),d!==this._time||!this._ts&&!h){m=0,y&&(c+=this._zTime=-K);break}}g=y}else{g=this._last;for(var z=i<0?i:d;g;){if(y=g._prev,(g._act||z<=g._end)&&g._ts&&m!==g){if(g.parent!==this)return this.render(i,o,l);if(g.render(g._ts>0?(z-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(z-g._start)*g._ts,o,l||Te&&mu(g)),d!==this._time||!this._ts&&!h){m=0,y&&(c+=this._zTime=z?-K:K);break}}g=y}}if(m&&!o&&(this.pause(),m.render(d>=a?0:-K)._zTime=d>=a?1:-1,this._ts))return this._start=w,_l(this),this.render(i,o,l);this._onUpdate&&!o&&rt(this,"onUpdate",!0),(c===s&&this._tTime>=this.totalDuration()||!c&&a)&&(w===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===s&&this._ts>0||!c&&this._ts<0)&&En(this,1),!o&&!(i<0&&!a)&&(c||a||!s)&&(rt(this,c===s&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<s&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,o){var l=this;if(Xt(o)||(o=dt(this,o,i)),!(i instanceof Fi)){if(Le(i))return i.forEach(function(a){return l.add(a,o)}),this;if(Ee(i))return this.addLabel(i,o);if(de(i))i=he.delayedCall(0,i);else return this}return this!==i?Nt(this,i,o):this},n.getChildren=function(i,o,l,a){i===void 0&&(i=!0),o===void 0&&(o=!0),l===void 0&&(l=!0),a===void 0&&(a=-gt);for(var s=[],u=this._first;u;)u._start>=a&&(u instanceof he?o&&s.push(u):(l&&s.push(u),i&&s.push.apply(s,u.getChildren(!0,o,l)))),u=u._next;return s},n.getById=function(i){for(var o=this.getChildren(1,1,1),l=o.length;l--;)if(o[l].vars.id===i)return o[l]},n.remove=function(i){return Ee(i)?this.removeLabel(i):de(i)?this.killTweensOf(i):(i.parent===this&&yl(this,i),i===this._recent&&(this._recent=this._last),Vn(this))},n.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=re(tt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},n.addLabel=function(i,o){return this.labels[i]=dt(this,o),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,o,l){var a=he.delayedCall(0,o||Di,l);return a.data="isPause",this._hasPause=1,Nt(this,a,dt(this,i))},n.removePause=function(i){var o=this._first;for(i=dt(this,i);o;)o._start===i&&o.data==="isPause"&&En(o),o=o._next},n.killTweensOf=function(i,o,l){for(var a=this.getTweensOf(i,l),s=a.length;s--;)un!==a[s]&&a[s].kill(i,o);return this},n.getTweensOf=function(i,o){for(var l=[],a=vt(i),s=this._first,u=Xt(o),c;s;)s instanceof he?pg(s._targets,a)&&(u?(!un||s._initted&&s._ts)&&s.globalTime(0)<=o&&s.globalTime(s.totalDuration())>o:!o||s.isActive())&&l.push(s):(c=s.getTweensOf(a,o)).length&&l.push.apply(l,c),s=s._next;return l},n.tweenTo=function(i,o){o=o||{};var l=this,a=dt(l,i),s=o,u=s.startAt,c=s.onStart,f=s.onStartParams,d=s.immediateRender,g,y=he.to(l,ut({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(u&&"time"in u?u.time:l._time))/l.timeScale())||K,onStart:function(){if(l.pause(),!g){var x=o.duration||Math.abs((a-(u&&"time"in u?u.time:l._time))/l.timeScale());y._dur!==x&&Rr(y,x,0,1).render(y._time,!0,!0),g=1}c&&c.apply(y,f||[])}},o));return d?y.render(0):y},n.tweenFromTo=function(i,o,l){return this.tweenTo(o,ut({startAt:{time:dt(this,i)}},l))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),Uc(this,dt(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),Uc(this,dt(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+K)},n.shiftChildren=function(i,o,l){l===void 0&&(l=0);var a=this._first,s=this.labels,u;for(i=re(i);a;)a._start>=l&&(a._start+=i,a._end+=i),a=a._next;if(o)for(u in s)s[u]>=l&&(s[u]+=i);return Vn(this)},n.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return t.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,l;o;)l=o._next,this.remove(o),o=l;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vn(this)},n.totalDuration=function(i){var o=0,l=this,a=l._last,s=gt,u,c,f;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-i:i));if(l._dirty){for(f=l.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>s&&l._sort&&a._ts&&!l._lock?(l._lock=1,Nt(l,a,c-a._delay,1)._lock=0):s=c,c<0&&a._ts&&(o-=c,(!f&&!l._dp||f&&f.smoothChildTiming)&&(l._start+=re(c/l._ts),l._time-=c,l._tTime-=c),l.shiftChildren(-c,!1,-1/0),s=0),a._end>o&&a._ts&&(o=a._end),a=u;Rr(l,l===oe&&l._time>o?l._time:o,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(i){if(oe._ts&&(Cp(oe,Jo(i,oe)),Ep=tt.frame),tt.frame>=Ic){Ic+=lt.autoSleep||120;var o=oe._first;if((!o||!o._ts)&&lt.autoSleep&&tt._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||tt.sleep()}}},e}(Fi);ut(He.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fg=function(e,n,r,i,o,l,a){var s=new Xe(this._pt,e,n,0,1,Zp,null,o),u=0,c=0,f,d,g,y,p,x,h,m;for(s.b=r,s.e=i,r+="",i+="",(h=~i.indexOf("random("))&&(i=Ri(i)),l&&(m=[r,i],l(m,e,n),r=m[0],i=m[1]),d=r.match(Ql)||[];f=Ql.exec(i);)y=f[0],p=i.substring(u,f.index),g?g=(g+1)%5:p.substr(-5)==="rgba("&&(g=1),y!==d[c++]&&(x=parseFloat(d[c-1])||0,s._pt={_next:s._pt,p:p||c===1?p:",",s:x,c:y.charAt(1)==="="?Sr(x,y)-x:parseFloat(y)-x,m:g&&g<4?Math.round:0},u=Ql.lastIndex);return s.c=u<i.length?i.substring(u,i.length):"",s.fp=a,(wp.test(i)||h)&&(s.e=0),this._pt=s,s},hu=function(e,n,r,i,o,l,a,s,u,c){de(i)&&(i=i(o||0,e,l));var f=e[n],d=r!=="get"?r:de(f)?u?e[n.indexOf("set")||!de(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():f,g=de(f)?u?Hg:Kp:vu,y;if(Ee(i)&&(~i.indexOf("random(")&&(i=Ri(i)),i.charAt(1)==="="&&(y=Sr(d,i)+(Ne(d)||0),(y||y===0)&&(i=y))),!c||d!==i||ts)return!isNaN(d*i)&&i!==""?(y=new Xe(this._pt,e,n,+d||0,i-(d||0),typeof f=="boolean"?Wg:qp,0,g),u&&(y.fp=u),a&&y.modifier(a,this,e),this._pt=y):(!f&&!(n in e)&&cu(n,i),Fg.call(this,e,n,d,i,g,s||lt.stringFilter,u))},Ag=function(e,n,r,i,o){if(de(e)&&(e=mi(e,o,n,r,i)),!It(e)||e.style&&e.nodeType||Le(e)||yp(e))return Ee(e)?mi(e,o,n,r,i):e;var l={},a;for(a in e)l[a]=mi(e[a],o,n,r,i);return l},Qp=function(e,n,r,i,o,l){var a,s,u,c;if(et[e]&&(a=new et[e]).init(o,a.rawVars?n[e]:Ag(n[e],i,o,l,r),r,i,l)!==!1&&(r._pt=s=new Xe(r._pt,o,e,0,1,a.render,a,0,a.priority),r!==gr))for(u=r._ptLookup[r._targets.indexOf(o)],c=a._props.length;c--;)u[a._props[c]]=s;return a},un,ts,gu=function t(e,n,r){var i=e.vars,o=i.ease,l=i.startAt,a=i.immediateRender,s=i.lazy,u=i.onUpdate,c=i.runBackwards,f=i.yoyoEase,d=i.keyframes,g=i.autoRevert,y=e._dur,p=e._startAt,x=e._targets,h=e.parent,m=h&&h.data==="nested"?h.vars.targets:x,v=e._overwrite==="auto"&&!lu,w=e.timeline,k=i.easeReverse||f,b,E,S,C,z,O,P,D,N,F,j,B,M;if(w&&(!d||!o)&&(o="none"),e._ease=Wn(o,Ni.ease),e._rEase=k&&(Wn(k)||e._ease),e._from=!w&&!!i.runBackwards,e._from&&(e.ratio=1),!w||d&&!i.stagger){if(D=x[0]?Hn(x[0]).harness:0,B=D&&i[D.prop],b=Zo(i,fu),p&&(p._zTime<0&&p.progress(1),n<0&&c&&a&&!g?p.render(-1,!0):p.revert(c&&y?So:fg),p._lazy=0),l){if(En(e._startAt=he.set(x,ut({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!p&&Qe(s),startAt:null,delay:0,onUpdate:u&&function(){return rt(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Te||!a&&!g)&&e._startAt.revert(So),a&&y&&n<=0&&r<=0){n&&(e._zTime=n);return}}else if(c&&y&&!p){if(n&&(a=!1),S=ut({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Qe(s),immediateRender:a,stagger:0,parent:h},b),B&&(S[D.prop]=B),En(e._startAt=he.set(x,S)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Te?e._startAt.revert(So):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,K,K);else if(!n)return}for(e._pt=e._ptCache=0,s=y&&Qe(s)||s&&!y,E=0;E<x.length;E++){if(z=x[E],P=z._gsap||pu(x)[E]._gsap,e._ptLookup[E]=F={},Xa[P.id]&&wn.length&&qo(),j=m===x?E:m.indexOf(z),D&&(N=new D).init(z,B||b,e,j,m)!==!1&&(e._pt=C=new Xe(e._pt,z,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(R){F[R]=C}),N.priority&&(O=1)),!D||B)for(S in b)et[S]&&(N=Qp(S,b,e,j,z,m))?N.priority&&(O=1):F[S]=C=hu.call(e,z,S,"get",b[S],j,m,0,i.stringFilter);e._op&&e._op[E]&&e.kill(z,e._op[E]),v&&e._pt&&(un=e,oe.killTweensOf(z,F,e.globalTime(n)),M=!e.parent,un=0),e._pt&&s&&(Xa[P.id]=1)}O&&Jp(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!M,d&&n<=0&&w.render(gt,!0,!0)},jg=function(e,n,r,i,o,l,a,s){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,f,d,g;if(!u)for(u=e._ptCache[n]=[],d=e._ptLookup,g=e._targets.length;g--;){if(c=d[g][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return ts=1,e.vars[n]="+=0",gu(e,a),ts=0,s?Li(n+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(g=u.length;g--;)f=u[g],c=f._pt||f,c.s=(i||i===0)&&!o?i:c.s+(i||0)+l*c.c,c.c=r-c.s,f.e&&(f.e=pe(r)+Ne(f.e)),f.b&&(f.b=c.s+Ne(f.b))},Ug=function(e,n){var r=e[0]?Hn(e[0]).harness:0,i=r&&r.aliases,o,l,a,s;if(!i)return n;o=Lr({},n);for(l in i)if(l in o)for(s=i[l].split(","),a=s.length;a--;)o[s[a]]=o[l];return o},Bg=function(e,n,r,i){var o=n.ease||i||"power1.inOut",l,a;if(Le(n))a=r[e]||(r[e]=[]),n.forEach(function(s,u){return a.push({t:u/(n.length-1)*100,v:s,e:o})});else for(l in n)a=r[l]||(r[l]=[]),l==="ease"||a.push({t:parseFloat(e),v:n[l],e:o})},mi=function(e,n,r,i,o){return de(e)?e.call(n,r,i,o):Ee(e)&&~e.indexOf("random(")?Ri(e):e},Gp=du+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Xp={};Ge(Gp+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Xp[t]=1});var he=function(t){gp(e,t);function e(r,i,o,l){var a;typeof i=="number"&&(o.duration=i,i=o,o=null),a=t.call(this,l?i:di(i))||this;var s=a.vars,u=s.duration,c=s.delay,f=s.immediateRender,d=s.stagger,g=s.overwrite,y=s.keyframes,p=s.defaults,x=s.scrollTrigger,h=i.parent||oe,m=(Le(r)||yp(r)?Xt(r[0]):"length"in i)?[r]:vt(r),v,w,k,b,E,S,C,z;if(a._targets=m.length?pu(m):Li("GSAP target "+r+" not found. https://gsap.com",!lt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=g,y||d||uo(u)||uo(c)){i=a.vars;var O=i.easeReverse||i.yoyoEase;if(v=a.timeline=new He({data:"nested",defaults:p||{},targets:h&&h.data==="nested"?h.vars.targets:m}),v.kill(),v.parent=v._dp=jt(a),v._start=0,d||uo(u)||uo(c)){if(b=m.length,C=d&&Rp(d),It(d))for(E in d)~Gp.indexOf(E)&&(z||(z={}),z[E]=d[E]);for(w=0;w<b;w++)k=Zo(i,Xp),k.stagger=0,O&&(k.easeReverse=O),z&&Lr(k,z),S=m[w],k.duration=+mi(u,jt(a),w,S,m),k.delay=(+mi(c,jt(a),w,S,m)||0)-a._delay,!d&&b===1&&k.delay&&(a._delay=c=k.delay,a._start+=c,k.delay=0),v.to(S,k,C?C(w,S,m):0),v._ease=U.none;v.duration()?u=c=0:a.timeline=0}else if(y){di(ut(v.vars.defaults,{ease:"none"})),v._ease=Wn(y.ease||i.ease||"none");var P=0,D,N,F;if(Le(y))y.forEach(function(j){return v.to(m,j,">")}),v.duration();else{k={};for(E in y)E==="ease"||E==="easeEach"||Bg(E,y[E],k,y.easeEach);for(E in k)for(D=k[E].sort(function(j,B){return j.t-B.t}),P=0,w=0;w<D.length;w++)N=D[w],F={ease:N.e,duration:(N.t-(w?D[w-1].t:0))/100*u},F[E]=N.v,v.to(m,F,P),P+=F.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return g===!0&&!lu&&(un=jt(a),oe.killTweensOf(m),un=0),Nt(h,jt(a),o),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!u&&!y&&a._start===re(h._time)&&Qe(f)&&vg(jt(a))&&h.data!=="nested")&&(a._tTime=-K,a.render(Math.max(0,-c)||0)),x&&Op(jt(a),x),a}var n=e.prototype;return n.render=function(i,o,l){var a=this._time,s=this._tDur,u=this._dur,c=i<0,f=i>s-K&&!c?s:i<K?0:i,d,g,y,p,x,h,m,v;if(!u)_g(this,i,o,l);else if(f!==this._tTime||!i||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,v=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(p*100+i,o,l);if(d=re(f%p),f===s?(y=this._repeat,d=u):(x=re(f/p),y=~~x,y&&y===x?(d=u,y--):d>u&&(d=u)),h=this._yoyo&&y&1,h&&(d=u-d),x=Dr(this._tTime,p),d===a&&!l&&this._initted&&y===x)return this._tTime=f,this;y!==x&&this.vars.repeatRefresh&&!h&&!this._lock&&d!==p&&this._initted&&(this._lock=l=1,this.render(re(p*y),!0).invalidate()._lock=0)}if(!this._initted){if(Np(this,c?i:d,l,o,f))return this._tTime=0,this;if(a!==this._time&&!(l&&this.vars.repeatRefresh&&y!==x))return this;if(u!==this._dur)return this.render(i,o,l)}if(this._rEase){var w=d<a;if(w!==this._inv){var k=w?a:u-a;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=k?(w?-1:1)/k:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(d/u);if(this._from&&(this.ratio=m=1-m),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!o&&!x&&(rt(this,"onStart"),this._tTime!==f))return this;for(g=this._pt;g;)g.r(m,g.d),g=g._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),o,l)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(c&&Ka(this,i,o,l),rt(this,"onUpdate")),this._repeat&&y!==x&&this.vars.onRepeat&&!o&&this.parent&&rt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Ka(this,i,!0,!0),(i||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&En(this,1),!o&&!(c&&!a)&&(f||a||h)&&(rt(this,f===s?"onComplete":"onReverseComplete",!0),this._prom&&!(f<s&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},n.resetTo=function(i,o,l,a,s){Ii||tt.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||gu(this,u),c=this._ease(u/this._dur),jg(this,i,o,l,a,c,u,s)?this.resetTo(i,o,l,a,1):(wl(this,0),this.parent||zp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?ti(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Te),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,un&&un.vars.overwrite!==!0)._first||ti(this),this.parent&&l!==this.timeline.totalDuration()&&Rr(this,this._dur*this.timeline._tDur/l,0,1),this}var a=this._targets,s=i?vt(i):a,u=this._ptLookup,c=this._pt,f,d,g,y,p,x,h;if((!o||o==="all")&&hg(a,s))return o==="all"&&(this._pt=0),ti(this);for(f=this._op=this._op||[],o!=="all"&&(Ee(o)&&(p={},Ge(o,function(m){return p[m]=1}),o=p),o=Ug(a,o)),h=a.length;h--;)if(~s.indexOf(a[h])){d=u[h],o==="all"?(f[h]=o,y=d,g={}):(g=f[h]=f[h]||{},y=o);for(p in y)x=d&&d[p],x&&((!("kill"in x.d)||x.d.kill(p)===!0)&&yl(this,x,"_pt"),delete d[p]),g!=="all"&&(g[p]=1)}return this._initted&&!this._pt&&c&&ti(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return pi(1,arguments)},e.delayedCall=function(i,o,l,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:a})},e.fromTo=function(i,o,l){return pi(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,l){return oe.killTweensOf(i,o,l)},e}(Fi);ut(he.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ge("staggerTo,staggerFrom,staggerFromTo",function(t){he[t]=function(){var e=new He,n=Za.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var vu=function(e,n,r){return e[n]=r},Kp=function(e,n,r){return e[n](r)},Hg=function(e,n,r,i){return e[n](i.fp,r)},Vg=function(e,n,r){return e.setAttribute(n,r)},yu=function(e,n){return de(e[n])?Kp:au(e[n])&&e.setAttribute?Vg:vu},qp=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},Wg=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Zp=function(e,n){var r=n._pt,i="";if(!e&&n.b)i=n.b;else if(e===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},_u=function(e,n){for(var r=n._pt;r;)r.r(e,r.d),r=r._next},$g=function(e,n,r,i){for(var o=this._pt,l;o;)l=o._next,o.p===i&&o.modifier(e,n,r),o=l},Yg=function(e){for(var n=this._pt,r,i;n;)i=n._next,n.p===e&&!n.op||n.op===e?yl(this,n,"_pt"):n.dep||(r=1),n=i;return!r},Qg=function(e,n,r,i){i.mSet(e,n,i.m.call(i.tween,r,i.mt),i)},Jp=function(e){for(var n=e._pt,r,i,o,l;n;){for(r=n._next,i=o;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:l)?n._prev._next=n:o=n,(n._next=i)?i._prev=n:l=n,n=r}e._pt=o},Xe=function(){function t(n,r,i,o,l,a,s,u,c){this.t=r,this.s=o,this.c=l,this.p=i,this.r=a||qp,this.d=s||this,this.set=u||vu,this.pr=c||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(r,i,o){this.mSet=this.mSet||this.set,this.set=Qg,this.m=r,this.mt=o,this.tween=i},t}();Ge(du+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return fu[t]=1});st.TweenMax=st.TweenLite=he;st.TimelineLite=st.TimelineMax=He;oe=new He({sortChildren:!1,defaults:Ni,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});lt.stringFilter=Wp;var $n=[],bo={},Gg=[],Hc=0,Xg=0,Zl=function(e){return(bo[e]||Gg).map(function(n){return n()})},ns=function(){var e=Date.now(),n=[];e-Hc>2&&(Zl("matchMediaInit"),$n.forEach(function(r){var i=r.queries,o=r.conditions,l,a,s,u;for(a in i)l=Mt.matchMedia(i[a]).matches,l&&(s=1),l!==o[a]&&(o[a]=l,u=1);u&&(r.revert(),s&&n.push(r))}),Zl("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),Hc=e,Zl("matchMedia"))},em=function(){function t(n,r){this.selector=r&&Ja(r),this.data=[],this._r=[],this.isReverted=!1,this.id=Xg++,n&&this.add(n)}var e=t.prototype;return e.add=function(r,i,o){de(r)&&(o=i,i=r,r=de);var l=this,a=function(){var u=te,c=l.selector,f;return u&&u!==l&&u.data.push(l),o&&(l.selector=Ja(o)),te=l,f=i.apply(l,arguments),de(f)&&l._r.push(f),te=u,l.selector=c,l.isReverted=!1,f};return l.last=a,r===de?a(l,function(s){return l.add(null,s)}):r?l[r]=a:a},e.ignore=function(r){var i=te;te=null,r(this),te=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof t?r.push.apply(r,i.getTweens()):i instanceof he&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var o=this;if(r?function(){for(var a=o.getTweens(),s=o.data.length,u;s--;)u=o.data[s],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(r)}),s=o.data.length;s--;)u=o.data[s],u instanceof He?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof he)&&u.revert&&u.revert(r);o._r.forEach(function(c){return c(r,o)}),o.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var l=$n.length;l--;)$n[l].id===this.id&&$n.splice(l,1)},e.revert=function(r){this.kill(r||{})},t}(),Kg=function(){function t(n){this.contexts=[],this.scope=n,te&&te.data.push(this)}var e=t.prototype;return e.add=function(r,i,o){It(r)||(r={matches:r});var l=new em(0,o||this.scope),a=l.conditions={},s,u,c;te&&!l.selector&&(l.selector=te.selector),this.contexts.push(l),i=l.add("onMatch",i),l.queries=r;for(u in r)u==="all"?c=1:(s=Mt.matchMedia(r[u]),s&&($n.indexOf(l)<0&&$n.push(l),(a[u]=s.matches)&&(c=1),s.addListener?s.addListener(ns):s.addEventListener("change",ns)));return c&&i(l,function(f){return l.add(null,f)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},t}(),el={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(i){return Bp(i)})},timeline:function(e){return new He(e)},getTweensOf:function(e,n){return oe.getTweensOf(e,n)},getProperty:function(e,n,r,i){Ee(e)&&(e=vt(e)[0]);var o=Hn(e||{}).get,l=r?Pp:Tp;return r==="native"&&(r=""),e&&(n?l((et[n]&&et[n].get||o)(e,n,r,i)):function(a,s,u){return l((et[a]&&et[a].get||o)(e,a,s,u))})},quickSetter:function(e,n,r){if(e=vt(e),e.length>1){var i=e.map(function(c){return qe.quickSetter(c,n,r)}),o=i.length;return function(c){for(var f=o;f--;)i[f](c)}}e=e[0]||{};var l=et[n],a=Hn(e),s=a.harness&&(a.harness.aliases||{})[n]||n,u=l?function(c){var f=new l;gr._pt=0,f.init(e,r?c+r:c,gr,0,[e]),f.render(1,f),gr._pt&&_u(1,gr)}:a.set(e,s);return l?u:function(c){return u(e,s,r?c+r:c,a,1)}},quickTo:function(e,n,r){var i,o=qe.to(e,ut((i={},i[n]="+=0.1",i.paused=!0,i.stagger=0,i),r||{})),l=function(s,u,c){return o.resetTo(n,s,u,c)};return l.tween=o,l},isTweening:function(e){return oe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wn(e.ease,Ni.ease)),Fc(Ni,e||{})},config:function(e){return Fc(lt,e||{})},registerEffect:function(e){var n=e.name,r=e.effect,i=e.plugins,o=e.defaults,l=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!et[a]&&!st[a]&&Li(n+" effect requires "+a+" plugin.")}),Gl[n]=function(a,s,u){return r(vt(a),ut(s||{},o),u)},l&&(He.prototype[n]=function(a,s,u){return this.add(Gl[n](a,It(s)?s:(u=s)&&{},this),u)})},registerEase:function(e,n){U[e]=Wn(n)},parseEase:function(e,n){return arguments.length?Wn(e,n):U},getById:function(e){return oe.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var r=new He(e),i,o;for(r.smoothChildTiming=Qe(e.smoothChildTiming),oe.remove(r),r._dp=0,r._time=r._tTime=oe._time,i=oe._first;i;)o=i._next,(n||!(!i._dur&&i instanceof he&&i.vars.onComplete===i._targets[0]))&&Nt(r,i,i._start-i._delay),i=o;return Nt(oe,r,0),r},context:function(e,n){return e?new em(e,n):te},matchMedia:function(e){return new Kg(e)},matchMediaRefresh:function(){return $n.forEach(function(e){var n=e.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&e.revert()})||ns()},addEventListener:function(e,n){var r=bo[e]||(bo[e]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(e,n){var r=bo[e],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:Tg,wrapYoyo:Pg,distribute:Rp,random:Fp,snap:Ip,normalize:Cg,getUnit:Ne,clamp:kg,splitColor:Hp,toArray:vt,selector:Ja,mapRange:jp,pipe:Eg,unitize:bg,interpolate:zg,shuffle:Dp},install:kp,effects:Gl,ticker:tt,updateRoot:He.updateRoot,plugins:et,globalTimeline:oe,core:{PropTween:Xe,globals:Sp,Tween:he,Timeline:He,Animation:Fi,getCache:Hn,_removeLinkedListItem:yl,reverting:function(){return Te},context:function(e){return e&&te&&(te.data.push(e),e._ctx=te),te},suppressOverwrites:function(e){return lu=e}}};Ge("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return el[t]=he[t]});tt.add(He.updateRoot);gr=el.to({},{duration:0});var qg=function(e,n){for(var r=e._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},Zg=function(e,n){var r=e._targets,i,o,l;for(i in n)for(o=r.length;o--;)l=e._ptLookup[o][i],l&&(l=l.d)&&(l._pt&&(l=qg(l,i)),l&&l.modifier&&l.modifier(n[i],e,r[o],i))},Jl=function(e,n){return{name:e,headless:1,rawVars:1,init:function(i,o,l){l._onInit=function(a){var s,u;if(Ee(o)&&(s={},Ge(o,function(c){return s[c]=1}),o=s),n){s={};for(u in o)s[u]=n(o[u]);o=s}Zg(a,o)}}}},qe=el.registerPlugin({name:"attr",init:function(e,n,r,i,o){var l,a,s;this.tween=r;for(l in n)s=e.getAttribute(l)||"",a=this.add(e,"setAttribute",(s||0)+"",n[l],i,o,0,0,l),a.op=l,a.b=s,this._props.push(l)},render:function(e,n){for(var r=n._pt;r;)Te?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",headless:1,init:function(e,n){for(var r=n.length;r--;)this.add(e,r,e[r]||0,n[r],0,0,0,0,0,1)}},Jl("roundProps",es),Jl("modifiers"),Jl("snap",Ip))||el;he.version=He.version=qe.version="3.15.0";xp=1;su()&&Ir();U.Power0;U.Power1;U.Power2;U.Power3;U.Power4;U.Linear;U.Quad;U.Cubic;U.Quart;U.Quint;U.Strong;U.Elastic;U.Back;U.SteppedEase;U.Bounce;U.Sine;U.Expo;U.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vc,cn,Er,wu,jn,Wc,xu,Jg=function(){return typeof window<"u"},Kt={},Rn=180/Math.PI,br=Math.PI/180,tr=Math.atan2,$c=1e8,ku=/([A-Z])/g,e1=/(left|right|width|margin|padding|x)/i,t1=/[\s,\(]\S/,Lt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rs=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},n1=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},r1=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},i1=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},o1=function(e,n){var r=n.s+n.c*e;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},tm=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},nm=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},l1=function(e,n,r){return e.style[n]=r},a1=function(e,n,r){return e.style.setProperty(n,r)},s1=function(e,n,r){return e._gsap[n]=r},u1=function(e,n,r){return e._gsap.scaleX=e._gsap.scaleY=r},c1=function(e,n,r,i,o){var l=e._gsap;l.scaleX=l.scaleY=r,l.renderTransform(o,l)},f1=function(e,n,r,i,o){var l=e._gsap;l[n]=r,l.renderTransform(o,l)},le="transform",Ke=le+"Origin",d1=function t(e,n){var r=this,i=this.target,o=i.style,l=i._gsap;if(e in Kt&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Lt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return r.tfm[a]=Bt(i,a)}):this.tfm[e]=l.x?l[e]:Bt(i,e),e===Ke&&(this.tfm.zOrigin=l.zOrigin);else return Lt.transform.split(",").forEach(function(a){return t.call(r,a,n)});if(this.props.indexOf(le)>=0)return;l.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ke,n,"")),e=le}(o||n)&&this.props.push(e,n,o[e])},rm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},p1=function(){var e=this.props,n=this.target,r=n.style,i=n._gsap,o,l;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?n[e[o]](e[o+2]):n[e[o]]=e[o+2]:e[o+2]?r[e[o]]=e[o+2]:r.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(ku,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)i[l]=this.tfm[l];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),o=xu(),(!o||!o.isStart)&&!r[le]&&(rm(r),i.zOrigin&&r[Ke]&&(r[Ke]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},im=function(e,n){var r={target:e,props:[],revert:p1,save:d1};return e._gsap||qe.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(i){return r.save(i)}),r},om,is=function(e,n){var r=cn.createElementNS?cn.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cn.createElement(e);return r&&r.style?r:cn.createElement(e)},it=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(ku,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,Fr(n)||n,1)||""},Yc="O,Moz,ms,Ms,Webkit".split(","),Fr=function(e,n,r){var i=n||jn,o=i.style,l=5;if(e in o&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(Yc[l]+e in o););return l<0?null:(l===3?"ms":l>=0?Yc[l]:"")+e},os=function(){Jg()&&window.document&&(Vc=window,cn=Vc.document,Er=cn.documentElement,jn=is("div")||{style:{}},is("div"),le=Fr(le),Ke=le+"Origin",jn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",om=!!Fr("perspective"),xu=qe.core.reverting,wu=1)},Qc=function(e){var n=e.ownerSVGElement,r=is("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),o;i.style.display="block",r.appendChild(i),Er.appendChild(r);try{o=i.getBBox()}catch{}return r.removeChild(i),Er.removeChild(r),o},Gc=function(e,n){for(var r=n.length;r--;)if(e.hasAttribute(n[r]))return e.getAttribute(n[r])},lm=function(e){var n,r;try{n=e.getBBox()}catch{n=Qc(e),r=1}return n&&(n.width||n.height)||r||(n=Qc(e)),n&&!n.width&&!n.x&&!n.y?{x:+Gc(e,["x","cx","x1"])||0,y:+Gc(e,["y","cy","y1"])||0,width:0,height:0}:n},am=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&lm(e))},bn=function(e,n){if(n){var r=e.style,i;n in Kt&&n!==Ke&&(n=le),r.removeProperty?(i=n.substr(0,2),(i==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(i==="--"?n:n.replace(ku,"-$1").toLowerCase())):r.removeAttribute(n)}},fn=function(e,n,r,i,o,l){var a=new Xe(e._pt,n,r,0,1,l?nm:tm);return e._pt=a,a.b=i,a.e=o,e._props.push(r),a},Xc={deg:1,rad:1,turn:1},m1={grid:1,flex:1},Cn=function t(e,n,r,i){var o=parseFloat(r)||0,l=(r+"").trim().substr((o+"").length)||"px",a=jn.style,s=e1.test(n),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(s?"Width":"Height"),f=100,d=i==="px",g=i==="%",y,p,x,h;if(i===l||!o||Xc[i]||Xc[l])return o;if(l!=="px"&&!d&&(o=t(e,n,r,"px")),h=e.getCTM&&am(e),(g||l==="%")&&(Kt[n]||~n.indexOf("adius")))return y=h?e.getBBox()[s?"width":"height"]:e[c],pe(g?o/y*f:o/100*y);if(a[s?"width":"height"]=f+(d?l:i),p=i!=="rem"&&~n.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===cn||!p.appendChild)&&(p=cn.body),x=p._gsap,x&&g&&x.width&&s&&x.time===tt.time&&!x.uncache)return pe(o/x.width*f);if(g&&(n==="height"||n==="width")){var m=e.style[n];e.style[n]=f+i,y=e[c],m?e.style[n]=m:bn(e,n)}else(g||l==="%")&&!m1[it(p,"display")]&&(a.position=it(e,"position")),p===e&&(a.position="static"),p.appendChild(jn),y=jn[c],p.removeChild(jn),a.position="absolute";return s&&g&&(x=Hn(p),x.time=tt.time,x.width=p[c]),pe(d?y*o/f:y&&o?f/y*o:0)},Bt=function(e,n,r,i){var o;return wu||os(),n in Lt&&n!=="transform"&&(n=Lt[n],~n.indexOf(",")&&(n=n.split(",")[0])),Kt[n]&&n!=="transform"?(o=ji(e,i),o=n!=="transformOrigin"?o[n]:o.svg?o.origin:nl(it(e,Ke))+" "+o.zOrigin+"px"):(o=e.style[n],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=tl[n]&&tl[n](e,n,r)||it(e,n)||bp(e,n)||(n==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?Cn(e,n,o,r)+r:o},h1=function(e,n,r,i){if(!r||r==="none"){var o=Fr(n,e,1),l=o&&it(e,o,1);l&&l!==r?(n=o,r=l):n==="borderColor"&&(r=it(e,"borderTopColor"))}var a=new Xe(this._pt,e.style,n,0,1,Zp),s=0,u=0,c,f,d,g,y,p,x,h,m,v,w,k;if(a.b=r,a.e=i,r+="",i+="",i.substring(0,6)==="var(--"&&(i=it(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[n],e.style[n]=i,i=it(e,n)||i,p?e.style[n]=p:bn(e,n)),c=[r,i],Wp(c),r=c[0],i=c[1],d=r.match(hr)||[],k=i.match(hr)||[],k.length){for(;f=hr.exec(i);)x=f[0],m=i.substring(s,f.index),y?y=(y+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(y=1),x!==(p=d[u++]||"")&&(g=parseFloat(p)||0,w=p.substr((g+"").length),x.charAt(1)==="="&&(x=Sr(g,x)+w),h=parseFloat(x),v=x.substr((h+"").length),s=hr.lastIndex-v.length,v||(v=v||lt.units[n]||w,s===i.length&&(i+=v,a.e+=v)),w!==v&&(g=Cn(e,n,p,v)||0),a._pt={_next:a._pt,p:m||u===1?m:",",s:g,c:h-g,m:y&&y<4||n==="zIndex"?Math.round:0});a.c=s<i.length?i.substring(s,i.length):""}else a.r=n==="display"&&i==="none"?nm:tm;return wp.test(i)&&(a.e=0),this._pt=a,a},Kc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},g1=function(e){var n=e.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),n[0]=Kc[r]||r,n[1]=Kc[i]||i,n.join(" ")},v1=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,o=n.u,l=r._gsap,a,s,u;if(o==="all"||o===!0)i.cssText="",s=1;else for(o=o.split(","),u=o.length;--u>-1;)a=o[u],Kt[a]&&(s=1,a=a==="transformOrigin"?Ke:le),bn(r,a);s&&(bn(r,le),l&&(l.svg&&r.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ji(r,1),l.uncache=1,rm(i)))}},tl={clearProps:function(e,n,r,i,o){if(o.data!=="isFromStart"){var l=e._pt=new Xe(e._pt,n,r,0,0,v1);return l.u=i,l.pr=-10,l.tween=o,e._props.push(r),1}}},Ai=[1,0,0,1,0,0],sm={},um=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qc=function(e){var n=it(e,le);return um(n)?Ai:n.substr(7).match(_p).map(pe)},Su=function(e,n){var r=e._gsap||Hn(e),i=e.style,o=qc(e),l,a,s,u;return r.svg&&e.getAttribute("transform")?(s=e.transform.baseVal.consolidate().matrix,o=[s.a,s.b,s.c,s.d,s.e,s.f],o.join(",")==="1,0,0,1,0,0"?Ai:o):(o===Ai&&!e.offsetParent&&e!==Er&&!r.svg&&(s=i.display,i.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Er.appendChild(e)),o=qc(e),s?i.display=s:bn(e,"display"),u&&(a?l.insertBefore(e,a):l?l.appendChild(e):Er.removeChild(e))),n&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},ls=function(e,n,r,i,o,l){var a=e._gsap,s=o||Su(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,g=s[0],y=s[1],p=s[2],x=s[3],h=s[4],m=s[5],v=n.split(" "),w=parseFloat(v[0])||0,k=parseFloat(v[1])||0,b,E,S,C;r?s!==Ai&&(E=g*x-y*p)&&(S=w*(x/E)+k*(-p/E)+(p*m-x*h)/E,C=w*(-y/E)+k*(g/E)-(g*m-y*h)/E,w=S,k=C):(b=lm(e),w=b.x+(~v[0].indexOf("%")?w/100*b.width:w),k=b.y+(~(v[1]||v[0]).indexOf("%")?k/100*b.height:k)),i||i!==!1&&a.smooth?(h=w-u,m=k-c,a.xOffset=f+(h*g+m*p)-h,a.yOffset=d+(h*y+m*x)-m):a.xOffset=a.yOffset=0,a.xOrigin=w,a.yOrigin=k,a.smooth=!!i,a.origin=n,a.originIsAbsolute=!!r,e.style[Ke]="0px 0px",l&&(fn(l,a,"xOrigin",u,w),fn(l,a,"yOrigin",c,k),fn(l,a,"xOffset",f,a.xOffset),fn(l,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",w+" "+k)},ji=function(e,n){var r=e._gsap||new Yp(e);if("x"in r&&!n&&!r.uncache)return r;var i=e.style,o=r.scaleX<0,l="px",a="deg",s=getComputedStyle(e),u=it(e,Ke)||"0",c,f,d,g,y,p,x,h,m,v,w,k,b,E,S,C,z,O,P,D,N,F,j,B,M,R,I,W,V,we,$,ue;return c=f=d=p=x=h=m=v=w=0,g=y=1,r.svg=!!(e.getCTM&&am(e)),s.translate&&((s.translate!=="none"||s.scale!=="none"||s.rotate!=="none")&&(i[le]=(s.translate!=="none"?"translate3d("+(s.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(s.rotate!=="none"?"rotate("+s.rotate+") ":"")+(s.scale!=="none"?"scale("+s.scale.split(" ").join(",")+") ":"")+(s[le]!=="none"?s[le]:"")),i.scale=i.rotate=i.translate="none"),E=Su(e,r.svg),r.svg&&(r.uncache?(M=e.getBBox(),u=r.xOrigin-M.x+"px "+(r.yOrigin-M.y)+"px",B=""):B=!n&&e.getAttribute("data-svg-origin"),ls(e,B||u,!!B||r.originIsAbsolute,r.smooth!==!1,E)),k=r.xOrigin||0,b=r.yOrigin||0,E!==Ai&&(O=E[0],P=E[1],D=E[2],N=E[3],c=F=E[4],f=j=E[5],E.length===6?(g=Math.sqrt(O*O+P*P),y=Math.sqrt(N*N+D*D),p=O||P?tr(P,O)*Rn:0,m=D||N?tr(D,N)*Rn+p:0,m&&(y*=Math.abs(Math.cos(m*br))),r.svg&&(c-=k-(k*O+b*D),f-=b-(k*P+b*N))):(ue=E[6],we=E[7],I=E[8],W=E[9],V=E[10],$=E[11],c=E[12],f=E[13],d=E[14],S=tr(ue,V),x=S*Rn,S&&(C=Math.cos(-S),z=Math.sin(-S),B=F*C+I*z,M=j*C+W*z,R=ue*C+V*z,I=F*-z+I*C,W=j*-z+W*C,V=ue*-z+V*C,$=we*-z+$*C,F=B,j=M,ue=R),S=tr(-D,V),h=S*Rn,S&&(C=Math.cos(-S),z=Math.sin(-S),B=O*C-I*z,M=P*C-W*z,R=D*C-V*z,$=N*z+$*C,O=B,P=M,D=R),S=tr(P,O),p=S*Rn,S&&(C=Math.cos(S),z=Math.sin(S),B=O*C+P*z,M=F*C+j*z,P=P*C-O*z,j=j*C-F*z,O=B,F=M),x&&Math.abs(x)+Math.abs(p)>359.9&&(x=p=0,h=180-h),g=pe(Math.sqrt(O*O+P*P+D*D)),y=pe(Math.sqrt(j*j+ue*ue)),S=tr(F,j),m=Math.abs(S)>2e-4?S*Rn:0,w=$?1/($<0?-$:$):0),r.svg&&(B=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!um(it(e,le)),B&&e.setAttribute("transform",B))),Math.abs(m)>90&&Math.abs(m)<270&&(o?(g*=-1,m+=p<=0?180:-180,p+=p<=0?180:-180):(y*=-1,m+=m<=0?180:-180)),n=n||r.uncache,r.x=c-((r.xPercent=c&&(!n&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+l,r.y=f-((r.yPercent=f&&(!n&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+l,r.z=d+l,r.scaleX=pe(g),r.scaleY=pe(y),r.rotation=pe(p)+a,r.rotationX=pe(x)+a,r.rotationY=pe(h)+a,r.skewX=m+a,r.skewY=v+a,r.transformPerspective=w+l,(r.zOrigin=parseFloat(u.split(" ")[2])||!n&&r.zOrigin||0)&&(i[Ke]=nl(u)),r.xOffset=r.yOffset=0,r.force3D=lt.force3D,r.renderTransform=r.svg?_1:om?cm:y1,r.uncache=0,r},nl=function(e){return(e=e.split(" "))[0]+" "+e[1]},ea=function(e,n,r){var i=Ne(n);return pe(parseFloat(n)+parseFloat(Cn(e,"x",r+"px",i)))+i},y1=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,cm(e,n)},On="0deg",Xr="0px",Nn=") ",cm=function(e,n){var r=n||this,i=r.xPercent,o=r.yPercent,l=r.x,a=r.y,s=r.z,u=r.rotation,c=r.rotationY,f=r.rotationX,d=r.skewX,g=r.skewY,y=r.scaleX,p=r.scaleY,x=r.transformPerspective,h=r.force3D,m=r.target,v=r.zOrigin,w="",k=h==="auto"&&e&&e!==1||h===!0;if(v&&(f!==On||c!==On)){var b=parseFloat(c)*br,E=Math.sin(b),S=Math.cos(b),C;b=parseFloat(f)*br,C=Math.cos(b),l=ea(m,l,E*C*-v),a=ea(m,a,-Math.sin(b)*-v),s=ea(m,s,S*C*-v+v)}x!==Xr&&(w+="perspective("+x+Nn),(i||o)&&(w+="translate("+i+"%, "+o+"%) "),(k||l!==Xr||a!==Xr||s!==Xr)&&(w+=s!==Xr||k?"translate3d("+l+", "+a+", "+s+") ":"translate("+l+", "+a+Nn),u!==On&&(w+="rotate("+u+Nn),c!==On&&(w+="rotateY("+c+Nn),f!==On&&(w+="rotateX("+f+Nn),(d!==On||g!==On)&&(w+="skew("+d+", "+g+Nn),(y!==1||p!==1)&&(w+="scale("+y+", "+p+Nn),m.style[le]=w||"translate(0, 0)"},_1=function(e,n){var r=n||this,i=r.xPercent,o=r.yPercent,l=r.x,a=r.y,s=r.rotation,u=r.skewX,c=r.skewY,f=r.scaleX,d=r.scaleY,g=r.target,y=r.xOrigin,p=r.yOrigin,x=r.xOffset,h=r.yOffset,m=r.forceCSS,v=parseFloat(l),w=parseFloat(a),k,b,E,S,C;s=parseFloat(s),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,s+=c),s||u?(s*=br,u*=br,k=Math.cos(s)*f,b=Math.sin(s)*f,E=Math.sin(s-u)*-d,S=Math.cos(s-u)*d,u&&(c*=br,C=Math.tan(u-c),C=Math.sqrt(1+C*C),E*=C,S*=C,c&&(C=Math.tan(c),C=Math.sqrt(1+C*C),k*=C,b*=C)),k=pe(k),b=pe(b),E=pe(E),S=pe(S)):(k=f,S=d,b=E=0),(v&&!~(l+"").indexOf("px")||w&&!~(a+"").indexOf("px"))&&(v=Cn(g,"x",l,"px"),w=Cn(g,"y",a,"px")),(y||p||x||h)&&(v=pe(v+y-(y*k+p*E)+x),w=pe(w+p-(y*b+p*S)+h)),(i||o)&&(C=g.getBBox(),v=pe(v+i/100*C.width),w=pe(w+o/100*C.height)),C="matrix("+k+","+b+","+E+","+S+","+v+","+w+")",g.setAttribute("transform",C),m&&(g.style[le]=C)},w1=function(e,n,r,i,o){var l=360,a=Ee(o),s=parseFloat(o)*(a&&~o.indexOf("rad")?Rn:1),u=s-i,c=i+u+"deg",f,d;return a&&(f=o.split("_")[1],f==="short"&&(u%=l,u!==u%(l/2)&&(u+=u<0?l:-l)),f==="cw"&&u<0?u=(u+l*$c)%l-~~(u/l)*l:f==="ccw"&&u>0&&(u=(u-l*$c)%l-~~(u/l)*l)),e._pt=d=new Xe(e._pt,n,r,i,u,n1),d.e=c,d.u="deg",e._props.push(r),d},Zc=function(e,n){for(var r in n)e[r]=n[r];return e},x1=function(e,n,r){var i=Zc({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",l=r.style,a,s,u,c,f,d,g,y;i.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),l[le]=n,a=ji(r,1),bn(r,le),r.setAttribute("transform",u)):(u=getComputedStyle(r)[le],l[le]=n,a=ji(r,1),l[le]=u);for(s in Kt)u=i[s],c=a[s],u!==c&&o.indexOf(s)<0&&(g=Ne(u),y=Ne(c),f=g!==y?Cn(r,s,u,y):parseFloat(u),d=parseFloat(c),e._pt=new Xe(e._pt,a,s,f,d-f,rs),e._pt.u=y||0,e._props.push(s));Zc(a,i)};Ge("padding,margin,Width,Radius",function(t,e){var n="Top",r="Right",i="Bottom",o="Left",l=(e<3?[n,r,i,o]:[n+o,n+r,i+r,i+o]).map(function(a){return e<2?t+a:"border"+a+t});tl[e>1?"border"+t:t]=function(a,s,u,c,f){var d,g;if(arguments.length<4)return d=l.map(function(y){return Bt(a,y,u)}),g=d.join(" "),g.split(d[0]).length===5?d[0]:g;d=(c+"").split(" "),g={},l.forEach(function(y,p){return g[y]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(s,g,f)}});var fm={name:"css",register:os,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,r,i,o){var l=this._props,a=e.style,s=r.vars.startAt,u,c,f,d,g,y,p,x,h,m,v,w,k,b,E,S,C;wu||os(),this.styles=this.styles||im(e),S=this.styles.props,this.tween=r;for(p in n)if(p!=="autoRound"&&(c=n[p],!(et[p]&&Qp(p,n,r,i,e,o)))){if(g=typeof c,y=tl[p],g==="function"&&(c=c.call(r,i,e,o),g=typeof c),g==="string"&&~c.indexOf("random(")&&(c=Ri(c)),y)y(this,e,p,c,r)&&(E=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),c+="",xn.lastIndex=0,xn.test(u)||(x=Ne(u),h=Ne(c),h?x!==h&&(u=Cn(e,p,u,h)+h):x&&(c+=x)),this.add(a,"setProperty",u,c,i,o,0,0,p),l.push(p),S.push(p,0,a[p]);else if(g!=="undefined"){if(s&&p in s?(u=typeof s[p]=="function"?s[p].call(r,i,e,o):s[p],Ee(u)&&~u.indexOf("random(")&&(u=Ri(u)),Ne(u+"")||u==="auto"||(u+=lt.units[p]||Ne(Bt(e,p))||""),(u+"").charAt(1)==="="&&(u=Bt(e,p))):u=Bt(e,p),d=parseFloat(u),m=g==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),f=parseFloat(c),p in Lt&&(p==="autoAlpha"&&(d===1&&Bt(e,"visibility")==="hidden"&&f&&(d=0),S.push("visibility",0,a.visibility),fn(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=Lt[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in Kt,v){if(this.styles.save(p),C=c,g==="string"&&c.substring(0,6)==="var(--"){if(c=it(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var z=e.style.perspective;e.style.perspective=c,c=it(e,"perspective"),z?e.style.perspective=z:bn(e,"perspective")}f=parseFloat(c)}if(w||(k=e._gsap,k.renderTransform&&!n.parseTransform||ji(e,n.parseTransform),b=n.smoothOrigin!==!1&&k.smooth,w=this._pt=new Xe(this._pt,a,le,0,1,k.renderTransform,k,0,-1),w.dep=1),p==="scale")this._pt=new Xe(this._pt,k,"scaleY",k.scaleY,(m?Sr(k.scaleY,m+f):f)-k.scaleY||0,rs),this._pt.u=0,l.push("scaleY",p),p+="X";else if(p==="transformOrigin"){S.push(Ke,0,a[Ke]),c=g1(c),k.svg?ls(e,c,0,b,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==k.zOrigin&&fn(this,k,"zOrigin",k.zOrigin,h),fn(this,a,p,nl(u),nl(c)));continue}else if(p==="svgOrigin"){ls(e,c,1,b,0,this);continue}else if(p in sm){w1(this,k,p,d,m?Sr(d,m+c):c);continue}else if(p==="smoothOrigin"){fn(this,k,"smooth",k.smooth,c);continue}else if(p==="force3D"){k[p]=c;continue}else if(p==="transform"){x1(this,c,e);continue}}else p in a||(p=Fr(p)||p);if(v||(f||f===0)&&(d||d===0)&&!t1.test(c)&&p in a)x=(u+"").substr((d+"").length),f||(f=0),h=Ne(c)||(p in lt.units?lt.units[p]:x),x!==h&&(d=Cn(e,p,u,h)),this._pt=new Xe(this._pt,v?k:a,p,d,(m?Sr(d,m+f):f)-d,!v&&(h==="px"||p==="zIndex")&&n.autoRound!==!1?o1:rs),this._pt.u=h||0,v&&C!==c?(this._pt.b=u,this._pt.e=C,this._pt.r=i1):x!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=r1);else if(p in a)h1.call(this,e,p,u,m?m+c:c);else if(p in e)this.add(e,p,u||e[p],m?m+c:c,i,o);else if(p!=="parseTransform"){cu(p,c);continue}v||(p in a?S.push(p,0,a[p]):typeof e[p]=="function"?S.push(p,2,e[p]()):S.push(p,1,u||e[p])),l.push(p)}}E&&Jp(this)},render:function(e,n){if(n.tween._time||!xu())for(var r=n._pt;r;)r.r(e,r.d),r=r._next;else n.styles.revert()},get:Bt,aliases:Lt,getSetter:function(e,n,r){var i=Lt[n];return i&&i.indexOf(",")<0&&(n=i),n in Kt&&n!==Ke&&(e._gsap.x||Bt(e,"x"))?r&&Wc===r?n==="scale"?u1:s1:(Wc=r||{})&&(n==="scale"?c1:f1):e.style&&!au(e.style[n])?l1:~n.indexOf("-")?a1:yu(e,n)},core:{_removeProperty:bn,_getMatrix:Su}};qe.utils.checkPrefix=Fr;qe.core.getStyleSaver=im;(function(t,e,n,r){var i=Ge(t+","+e+","+n,function(o){Kt[o]=1});Ge(e,function(o){lt.units[o]="deg",sm[o]=1}),Lt[i[13]]=t+","+e,Ge(r,function(o){var l=o.split(":");Lt[l[1]]=i[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ge("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){lt.units[t]="px"});qe.registerPlugin(fm);var as=qe.registerPlugin(fm)||qe;as.core.Tween;function k1({images:t,onImageSelect:e}){const n=Y.useRef(null),r=Y.useRef([]),i=[{image:t[0],index:0,className:"gallery-float gallery-float-left"},{image:t[1],index:1,className:"gallery-float gallery-float-right"},{image:t[2],index:2,className:"gallery-float gallery-float-bottom"},{image:t[3],index:3,className:"gallery-float gallery-float-top-small"},{image:t[4],index:4,className:"gallery-float gallery-float-left-small"},{image:t[5],index:5,className:"gallery-float gallery-float-right-small"},{image:t[6],index:6,className:"gallery-float gallery-float-far-left"},{image:t[7],index:7,className:"gallery-float gallery-float-far-right"},{image:t[8],index:8,className:"gallery-float gallery-float-top-mid"},{image:t[9],index:9,className:"gallery-float gallery-float-bottom-left"}];return Y.useEffect(()=>{const o=n.current,l=r.current.filter(Boolean),a=window.matchMedia("(hover: hover) and (pointer: fine)").matches;if(!o||!a)return;const s=[{x:42,y:30,rotate:-2.2},{x:34,y:26,rotate:2},{x:34,y:24,rotate:-1.5},{x:24,y:18,rotate:1.4},{x:24,y:20,rotate:-1.6},{x:24,y:20,rotate:1.6},{x:18,y:18,rotate:-1.2},{x:18,y:18,rotate:1.2},{x:18,y:16,rotate:1},{x:18,y:16,rotate:-1}],u=[-36,32,-28,24,-22,24,-18,20,-20,22];let c={x:0,y:0},f=0;const d=()=>{l.forEach((x,h)=>{const m=s[h]||s[0],v=u[h]||0;as.to(x,{x:c.x*m.x,y:c.y*m.y+f*v,rotate:c.x*m.rotate,duration:.85,ease:"power2.out"})})},g=()=>{const x=o.getBoundingClientRect(),h=window.innerHeight;f=Math.min(Math.max((h-x.top)/(h+x.height),0),1)-.5,d()},y=x=>{const h=o.getBoundingClientRect();c={x:(x.clientX-h.left)/h.width-.5,y:(x.clientY-h.top)/h.height-.5},d()},p=()=>{c={x:0,y:0},d()};return g(),o.addEventListener("mousemove",y),o.addEventListener("mouseleave",p),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g),()=>{o.removeEventListener("mousemove",y),o.removeEventListener("mouseleave",p),window.removeEventListener("scroll",g),window.removeEventListener("resize",g),as.killTweensOf(l)}},[]),_.createElement("section",{id:"gallery",ref:n,className:"page-section-anchor community-gallery-section"},i.filter(({image:o})=>o).map(({image:o,index:l,className:a})=>_.createElement("button",{key:o.caption,ref:s=>{r.current[l]=s},type:"button",className:a,onClick:()=>e(l),"aria-label":`Open ${o.caption}`},_.createElement("img",{src:o.url,alt:o.caption}),l===0&&_.createElement("span",{className:"gallery-play-badge","aria-hidden":"true"},_.createElement(iu,{size:44,fill:"currentColor",strokeWidth:0})))),_.createElement("div",{className:"gallery-center-copy"},_.createElement("div",{className:"section-kicker"},"003 / Community Gallery"),_.createElement("h2",null,"Gallery"),_.createElement("p",null,"Stories of worship, fellowship, and faith from our ECMI Mandaluyong family."),_.createElement("button",{type:"button",onClick:()=>e(0)},"View Our Community")))}function S1(){return _.createElement("section",{id:"give",className:"page-section-anchor lagom-section",style:{padding:"10rem 2rem",background:"linear-gradient(135deg, #fef3e2 0%, #fde8c8 100%)",minHeight:"100vh",display:"flex",alignItems:"center"}},_.createElement("div",{style:{maxWidth:"920px",width:"100%",margin:"0 auto"}},_.createElement("div",{className:"section-kicker","data-aos":"fade-up"},"005 / Give"),_.createElement("h2",{"data-aos":"fade-up",style:{fontFamily:'"Playfair Display", serif',fontSize:"clamp(3.5rem, 8vw, 7.8rem)",fontWeight:700,color:"#1e40af",marginBottom:"2rem",lineHeight:.95}},"Give Online"),_.createElement("p",{"data-aos":"fade-up","data-aos-delay":"120",style:{fontSize:"1.1rem",color:"#475569",marginBottom:"3rem",lineHeight:1.8}},"Your generous giving helps us continue our mission to spread the Gospel and serve our community. Thank you for your support!"),_.createElement("div",{"data-aos":"zoom-in","data-aos-delay":"180",style:{background:"white",borderRadius:"20px",padding:"3rem",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.1)"}},_.createElement(H0,{size:60,style:{color:"#f59e0b",marginBottom:"1.5rem"}}),_.createElement("h3",{style:{fontFamily:'"Outfit", sans-serif',fontSize:"1.5rem",fontWeight:600,color:"#1e40af",marginBottom:"1.5rem"}},"Bank Transfer Details"),_.createElement("div",{style:{textAlign:"left",maxWidth:"400px",margin:"0 auto",lineHeight:2,color:"#475569"}},_.createElement("p",null,_.createElement("strong",null,"Bank Name:")," BDO Unibank"),_.createElement("p",null,_.createElement("strong",null,"Account Name:")," ECMI Mandaluyong"),_.createElement("p",null,_.createElement("strong",null,"Account Number:")," 1234-5678-9012"),_.createElement("p",null,_.createElement("strong",null,"GCash:")," 0917-123-4567")),_.createElement("button",{style:{marginTop:"2rem",background:"linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",color:"white",padding:"1rem 3rem",borderRadius:"50px",border:"none",fontFamily:'"Outfit", sans-serif',fontWeight:600,fontSize:"1rem",cursor:"pointer",transition:"transform 0.3s, box-shadow 0.3s",boxShadow:"0 10px 30px rgba(30, 64, 175, 0.3)"}},"Give Now"))))}function E1(){return _.createElement("style",null,`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Outfit:wght@400;500;600;700&family=Crimson+Pro:wght@400;600&display=swap');

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes bounce {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(10px); }
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      html::-webkit-scrollbar,
      body::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
      }

      html::-webkit-scrollbar-track,
      body::-webkit-scrollbar-track {
        background: transparent;
      }

      html::-webkit-scrollbar-thumb,
      body::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, rgba(30, 64, 175, 0.52), rgba(245, 158, 11, 0.58));
        border: 2px solid transparent;
        border-radius: 999px;
        background-clip: padding-box;
      }

      html::-webkit-scrollbar-thumb:hover,
      body::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, rgba(30, 64, 175, 0.72), rgba(245, 158, 11, 0.78));
      }

      .custom-scrollbar {
        --scrollbar-bg: rgba(56, 51, 47, 0.06);
        --scrollbar-track-bg: rgba(56, 51, 47, 0.16);
        position: absolute;
        z-index: 1200;
        display: flex;
        justify-content: center;
        border-radius: 6px;
        background: var(--scrollbar-bg);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      .custom-scrollbar.is-active {
        opacity: 1;
        pointer-events: auto;
      }

      .custom-scrollbar.body-scroll {
        position: fixed;
        top: clamp(12px, 0.938vw, 18px);
        right: clamp(8px, 0.625vw, 12px);
        bottom: clamp(12px, 0.938vw, 18px);
        width: clamp(4px, 0.313vw, 6px);
      }

      .custom-scrollbar .scroll-track {
        position: absolute;
        top: 0;
        width: 100%;
        border-radius: 6px;
        background: var(--scrollbar-track-bg);
        transition: transform 0.2s linear, background 0.2s ease;
        pointer-events: auto;
        touch-action: none;
      }

      .custom-scrollbar:hover,
      .custom-scrollbar.is-dragging {
        transform: scaleX(1.6);
      }

      .custom-scrollbar:hover .scroll-track,
      .custom-scrollbar.is-dragging .scroll-track {
        background: rgba(56, 51, 47, 0.29);
        cursor: grab;
      }

      .custom-scrollbar.is-dragging,
      .custom-scrollbar.is-dragging .scroll-track {
        cursor: grabbing;
      }

      .page-section-anchor {
        scroll-margin-top: 0;
      }

      .section-kicker {
        color: #f59e0b;
        font-family: "Outfit", sans-serif;
        font-size: 0.9rem;
        font-weight: 800;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        margin-bottom: 1.6rem;
      }

      a:hover {
        color: #f59e0b !important;
      }

      button:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 40px rgba(30, 64, 175, 0.4) !important;
      }

      .site-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 2.35rem 0;
        transform: none;
        transition: all 0.3s ease;
      }

      .site-nav::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
        background: transparent;
        border-bottom: 0 solid transparent;
        backdrop-filter: none;
        transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
      }

      .site-nav.is-solid::before {
        background: rgba(255, 255, 255, 0.98);
        border-bottom: 1px solid rgba(30, 64, 175, 0.1);
        backdrop-filter: blur(10px);
      }

      .site-nav.is-top-hidden::before {
        background: transparent;
        border-bottom-color: transparent;
        backdrop-filter: none;
      }

      .site-nav-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        display: grid;
        grid-template-columns: 170px 1fr 170px;
        align-items: center;
        position: relative;
        z-index: 3;
        transition: opacity 0.25s ease, transform 0.25s ease;
      }

      .nav-spacer {
        display: none;
      }

      .mobile-nav-logo {
        display: none;
      }

      .nav-backdrop {
        display: none;
      }

      .nav-links {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: clamp(1.35rem, 2vw, 2.3rem);
        font-family: "Outfit", sans-serif;
        font-size: 1.08rem;
        font-weight: 650;
        padding: 0;
      }

      @media (min-width: 769px) {
        .site-nav.is-top-hidden .site-nav-inner {
          opacity: 0;
          pointer-events: none;
          transform: translateY(-18px);
        }

        .site-nav:not(.is-side-rail) .nav-links {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .nav-links::before {
        display: none;
      }

      .nav-link {
        position: relative;
        padding: 0.35rem 0;
      }

      .nav-link::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.25rem;
        height: 2px;
        border-radius: 999px;
        background: #fbbf24;
        opacity: 0;
        transform: scaleX(0.25);
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      .nav-link.is-active::after,
      .nav-link:hover::after {
        opacity: 1;
        transform: scaleX(1);
      }

      .nav-link.is-active {
        color: #fbbf24 !important;
      }

      .nav-link.is-active.is-solid {
        color: #1e40af !important;
      }

      @media (min-width: 769px) {
        .site-nav.is-side-rail {
          top: 50%;
          left: auto;
          right: 1.5rem;
          padding: 0;
          transform: translateY(-50%);
        }

        .site-nav.is-side-rail .site-nav-inner {
          display: block;
          max-width: none;
          margin: 0;
          padding: 0;
        }

        .site-nav.is-side-rail .nav-links {
          position: relative;
          left: auto;
          top: auto;
          transform: none;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.85rem;
          font-size: 0.86rem;
          font-weight: 700;
          padding: 0.85rem 0.65rem 0.85rem 1.3rem;
        }

        .site-nav.is-side-rail .nav-links::before {
          content: "";
          display: block;
          position: absolute;
          top: 0.35rem;
          bottom: 0.35rem;
          right: 0.2rem;
          width: 2px;
          border-radius: 999px;
          background: linear-gradient(to bottom, transparent, rgba(30, 64, 175, 0.45), transparent);
        }

        .site-nav.is-side-rail .nav-link {
          min-width: 82px;
          padding: 0.58rem 0.85rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(30, 64, 175, 0.16);
          backdrop-filter: blur(10px);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
          text-align: center;
        }

        .site-nav.is-side-rail .nav-link::after {
          top: 50%;
          left: auto;
          right: -0.7rem;
          bottom: auto;
          width: 9px;
          height: 9px;
          transform: translateY(-50%) scale(0.5);
        }

        .site-nav.is-side-rail .nav-link.is-active::after,
        .site-nav.is-side-rail .nav-link:hover::after {
          transform: translateY(-50%) scale(1);
        }

        .site-nav.is-side-rail .nav-link.is-active {
          background: rgba(255, 255, 255, 0.96);
          border-color: rgba(30, 64, 175, 0.28);
        }
      }

      .nav-menu-button {
        display: none;
        width: 46px;
        height: 46px;
        border: 1px solid rgba(255, 255, 255, 0.48);
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.12);
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.12);
        transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
      }

      .nav-menu-button.is-solid {
        border-color: rgba(30, 64, 175, 0.16);
        background: rgba(255, 255, 255, 0.82);
      }

      .nav-menu-button:hover {
        transform: none;
        background: white;
        border-color: rgba(30, 64, 175, 0.3);
        box-shadow: 0 12px 32px rgba(30, 64, 175, 0.18) !important;
      }

      .nav-menu-button span {
        width: 20px;
        height: 2px;
        border-radius: 999px;
        background: white;
        transition: transform 0.3s ease, opacity 0.2s ease;
      }

      .nav-menu-button.is-solid span {
        background: #1e40af;
      }

      .nav-menu-button.is-open span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }

      .nav-menu-button.is-open span:nth-child(2) {
        opacity: 0;
      }

      .nav-menu-button.is-open span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }

      .desktop-side-nav {
        position: fixed;
        top: 50%;
        right: 2.8rem;
        z-index: 1001;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.85rem;
        padding: 0.85rem 0.65rem 0.85rem 1.3rem;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-50%) translateX(18px);
        transition: opacity 0.25s ease, transform 0.25s ease;
      }

      .desktop-side-nav.is-visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(-50%) translateX(0);
      }

      .desktop-side-nav::before {
        content: "";
        position: absolute;
        top: 0.35rem;
        bottom: 0.35rem;
        right: 0.2rem;
        width: 2px;
        border-radius: 999px;
        background: linear-gradient(to bottom, transparent, rgba(30, 64, 175, 0.45), transparent);
      }

      .desktop-side-nav-link {
        position: relative;
        min-width: 82px;
        padding: 0.58rem 0.85rem;
        border-radius: 999px;
        color: #1e293b;
        background: rgba(255, 255, 255, 0.88);
        border: 1px solid rgba(30, 64, 175, 0.16);
        backdrop-filter: blur(10px);
        box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
        text-align: center;
        text-decoration: none;
        font-family: "Outfit", sans-serif;
        font-size: 0.86rem;
        font-weight: 700;
        transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
      }

      .desktop-side-nav-link::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -0.7rem;
        width: 9px;
        height: 9px;
        border-radius: 999px;
        background: #fbbf24;
        opacity: 0;
        transform: translateY(-50%) scale(0.5);
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      .desktop-side-nav-link.is-active,
      .desktop-side-nav-link:hover {
        color: #1e40af !important;
        background: rgba(255, 255, 255, 0.96);
        border-color: rgba(30, 64, 175, 0.28);
      }

      .desktop-side-nav-link.is-active {
        min-width: 104px;
        padding: 0.76rem 1.05rem;
        font-size: 0.95rem;
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16);
      }

      .desktop-side-nav-link.is-active::after,
      .desktop-side-nav-link:hover::after {
        opacity: 1;
        transform: translateY(-50%) scale(1);
      }

      .back-to-top-button {
        position: fixed;
        right: 1.6rem;
        bottom: 1.6rem;
        z-index: 1001;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #1e40af;
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid rgba(30, 64, 175, 0.16);
        box-shadow: 0 16px 42px rgba(15, 23, 42, 0.18);
        backdrop-filter: blur(12px);
        text-decoration: none;
        opacity: 0;
        pointer-events: none;
        transform: translateY(12px);
        transition: opacity 0.22s ease, transform 0.22s ease, background 0.2s ease;
      }

      .back-to-top-button.is-visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }

      .back-to-top-button:hover {
        color: white !important;
        background: #1e40af;
      }

      .community-gallery-section {
        position: relative;
        min-height: 100vh;
        background: #f2efe9;
        overflow: hidden;
      }

      .gallery-section-index {
        position: absolute;
        top: clamp(2rem, 4vw, 4rem);
        left: clamp(1.2rem, 4vw, 4rem);
        color: rgba(56, 51, 47, 0.45);
        font-family: "Outfit", sans-serif;
        font-size: 0.9rem;
        font-weight: 800;
        letter-spacing: 0.18em;
      }

      .gallery-center-copy {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 3;
        width: min(720px, 58vw);
        text-align: center;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }

      .gallery-center-copy .section-kicker {
        margin-bottom: 1.2rem;
      }

      .gallery-center-copy h2 {
        color: #1e40af;
        font-family: "Playfair Display", serif;
        font-size: clamp(4.5rem, 10vw, 10rem);
        font-weight: 700;
        line-height: 0.9;
        margin: 0 0 1.2rem;
      }

      .gallery-center-copy p {
        max-width: 520px;
        margin: 0 auto 2rem;
        color: rgba(56, 51, 47, 0.7);
        font-family: "Outfit", sans-serif;
        font-size: clamp(1.05rem, 1.35vw, 1.22rem);
        line-height: 1.75;
      }

      .gallery-center-copy button {
        border: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 54px;
        padding: 1rem 1.45rem;
        color: #f8fafc;
        background: #141414;
        border-radius: 999px;
        font-family: "Outfit", sans-serif;
        font-size: 0.86rem;
        font-weight: 800;
        line-height: 1;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 18px 50px rgba(15, 23, 42, 0.18);
        transition: color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        pointer-events: auto;
      }

      .gallery-center-copy button:hover {
        color: #141414;
        background: #fbbf24;
        transform: translateY(-4px);
      }

      .gallery-float {
        position: absolute;
        z-index: 2;
        display: block;
        overflow: hidden;
        border: 0;
        padding: 0;
        background: #d7d1c6;
        box-shadow: none;
        cursor: pointer;
        will-change: transform;
      }

      .gallery-float img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .gallery-float:hover img {
        transform: scale(1.06);
      }

      .gallery-float-left {
        left: clamp(-3rem, -2.4vw, -1.4rem);
        top: clamp(5rem, 8vh, 6rem);
        width: min(400px, 25vw);
        height: min(480px, 54vh);
        animation: galleryFloatIdle 7s ease-in-out infinite;
      }

      .gallery-float-right {
        right: clamp(-3rem, -2.4vw, -1.4rem);
        top: clamp(3rem, 7vh, 5.5rem);
        width: min(265px, 16vw);
        height: min(310px, 35vh);
        animation: galleryFloatIdle 8s ease-in-out infinite reverse;
      }

      .gallery-float-bottom {
        left: auto;
        right: clamp(5rem, 13vw, 12rem);
        bottom: clamp(-2.2rem, -3vh, -1.2rem);
        width: min(310px, 20vw);
        height: min(210px, 24vh);
        z-index: 1;
        animation: galleryFloatIdle 7.5s ease-in-out infinite;
      }

      .gallery-float-top-small {
        left: 26%;
        top: clamp(1rem, 3vh, 2.4rem);
        width: min(155px, 10vw);
        height: min(120px, 13vh);
        z-index: 1;
        animation: galleryFloatIdle 6.5s ease-in-out infinite reverse;
      }

      .gallery-float-left-small {
        left: clamp(5rem, 10vw, 11rem);
        bottom: clamp(13rem, 25vh, 18rem);
        width: min(180px, 11vw);
        height: min(135px, 15vh);
        z-index: 1;
        animation: galleryFloatIdle 8.5s ease-in-out infinite;
      }

      .gallery-float-right-small {
        right: clamp(5.5rem, 11vw, 12rem);
        bottom: clamp(13rem, 25vh, 18rem);
        width: min(170px, 10.5vw);
        height: min(125px, 14vh);
        z-index: 1;
        animation: galleryFloatIdle 7.25s ease-in-out infinite reverse;
      }

      .gallery-float-far-left {
        left: clamp(-2.6rem, -2vw, -1rem);
        bottom: clamp(1rem, 4vh, 2.8rem);
        width: min(140px, 9vw);
        height: min(190px, 21vh);
        z-index: 1;
        animation: galleryFloatIdle 8s ease-in-out infinite;
      }

      .gallery-float-far-right {
        right: clamp(-2.6rem, -2vw, -1rem);
        bottom: clamp(1rem, 4vh, 2.8rem);
        width: min(140px, 9vw);
        height: min(190px, 21vh);
        z-index: 1;
        animation: galleryFloatIdle 6.8s ease-in-out infinite reverse;
      }

      .gallery-float-top-mid {
        left: auto;
        right: 29%;
        top: clamp(1rem, 3vh, 2.4rem);
        width: min(150px, 9.5vw);
        height: min(115px, 13vh);
        z-index: 1;
        animation: galleryFloatIdle 7.6s ease-in-out infinite;
      }

      .gallery-float-bottom-left {
        left: clamp(12rem, 22vw, 24rem);
        bottom: clamp(0.5rem, 3vh, 2rem);
        width: min(155px, 9.5vw);
        height: min(115px, 13vh);
        z-index: 1;
        animation: galleryFloatIdle 8.2s ease-in-out infinite reverse;
      }

      @keyframes galleryFloatIdle {
        0%, 100% {
          margin-top: 0;
        }
        50% {
          margin-top: -14px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .gallery-float {
          animation: none !important;
        }
      }

      .gallery-play-badge {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 74px;
        height: 74px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.94);
        transform: translate(-50%, -50%);
      }

      .church-location-section {
        position: relative;
        min-height: 100vh;
        padding: 0;
        background: #d7d1c6;
        color: #38332f;
        overflow: hidden;
      }

      .location-map-frame {
        position: absolute;
        inset: -8%;
        width: 116%;
        height: 116%;
        border: 0;
        filter: saturate(0.86) contrast(0.98);
        transform-origin: center;
        transition: transform 0.12s linear;
        pointer-events: none;
      }

      .location-section-overlay {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          linear-gradient(90deg, rgba(20, 20, 20, 0.58) 0%, rgba(20, 20, 20, 0.28) 34%, rgba(20, 20, 20, 0.02) 66%),
          linear-gradient(180deg, rgba(20, 20, 20, 0.1), rgba(20, 20, 20, 0.22));
      }

      .location-index {
        position: absolute;
        top: clamp(2rem, 5vw, 4.5rem);
        left: clamp(1.5rem, 5vw, 5rem);
        z-index: 2;
        color: rgba(255, 255, 255, 0.82);
        font-family: "Outfit", sans-serif;
        font-size: 0.9rem;
        font-weight: 800;
        letter-spacing: 0.18em;
      }

      .location-title-block {
        position: absolute;
        left: clamp(1.5rem, 5vw, 5rem);
        top: clamp(6rem, 13vh, 9rem);
        z-index: 2;
        max-width: min(700px, 48vw);
      }

      .location-title-block h2 {
        color: #fff;
        font-family: "Playfair Display", serif;
        font-size: clamp(3.8rem, 7.6vw, 8rem);
        font-weight: 700;
        line-height: 0.9;
        margin: 0;
        text-shadow: 0 22px 60px rgba(0, 0, 0, 0.34);
      }

      .location-floating-card {
        position: absolute;
        left: clamp(1.5rem, 5vw, 5rem);
        bottom: clamp(1.5rem, 5vw, 4.5rem);
        z-index: 2;
        width: min(430px, calc(100% - 2.4rem));
        padding: clamp(1.35rem, 2.2vw, 2rem);
        color: #f8fafc;
        background: rgba(20, 20, 20, 0.92);
        backdrop-filter: blur(14px);
        box-shadow: 0 28px 80px rgba(15, 23, 42, 0.3);
      }

      .location-card-icon {
        width: 48px;
        height: 48px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.3rem;
        color: #141414;
        background: #fbbf24;
        border-radius: 999px;
      }

      .location-card-label {
        margin: 0 0 0.65rem;
        color: rgba(248, 250, 252, 0.62);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .location-floating-card h3 {
        margin: 0 0 0.7rem;
        font-size: clamp(1.55rem, 2vw, 2rem);
        line-height: 1.1;
      }

      .location-floating-card p {
        margin: 0;
        color: rgba(248, 250, 252, 0.78);
        font-size: 1rem;
        line-height: 1.65;
      }

      .location-service-row {
        display: flex;
        gap: 0.65rem;
        align-items: flex-start;
        margin: 1.2rem 0 1.45rem;
        color: rgba(248, 250, 252, 0.86);
        font-size: 0.95rem;
        line-height: 1.45;
      }

      .location-service-row svg {
        flex: 0 0 auto;
        margin-top: 0.1rem;
        color: #fbbf24;
      }

      .location-floating-card a {
        width: fit-content;
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        color: #141414;
        background: #f8fafc;
        border-radius: 999px;
        padding: 0.85rem 1.05rem;
        text-decoration: none;
        font-size: 0.86rem;
        font-weight: 800;
      }

      .location-image-card {
        position: absolute;
        right: clamp(1.5rem, 5vw, 5rem);
        top: clamp(1.5rem, 5vw, 4.5rem);
        z-index: 2;
        width: min(320px, 26vw);
        color: #f8fafc;
        background: rgba(20, 20, 20, 0.9);
        box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22);
      }

      .location-image-card img {
        width: 100%;
        aspect-ratio: 1.35;
        object-fit: cover;
        display: block;
      }

      .location-image-card div {
        display: flex;
        gap: 0.65rem;
        align-items: center;
        padding: 0.95rem;
        font-size: 0.9rem;
        line-height: 1.35;
      }

      .site-footer-section {
        background: #141414;
        color: #f8fafc;
        font-family: "Outfit", sans-serif;
        min-height: 100vh;
        display: grid;
        grid-template-rows: minmax(0, 1fr) auto;
      }

      .footer-cta-panel {
        position: relative;
        min-height: 0;
        display: grid;
        align-items: end;
        overflow: hidden;
        background: #38332f;
      }

      .footer-cta-image {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(180deg, rgba(56, 51, 47, 0.08), rgba(56, 51, 47, 0.78)),
          url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1800&auto=format&fit=crop") center/cover;
        transform: scale(1.02);
      }

      .footer-cta-content {
        position: relative;
        z-index: 1;
        width: min(1280px, calc(100% - 4rem));
        margin: 0 auto;
        padding: clamp(7rem, 11vh, 9rem) 0 clamp(2.2rem, 5vh, 4rem);
      }

      .footer-section-number {
        color: rgba(255, 255, 255, 0.72);
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.18em;
        margin-bottom: 1rem;
      }

      .footer-cta-content h2 {
        max-width: 960px;
        color: #fff;
        font-family: "Playfair Display", serif;
        font-size: clamp(3.4rem, 8.4vw, 8rem);
        font-weight: 700;
        line-height: 0.92;
        margin: 0 0 1.8rem;
      }

      .footer-cta-button {
        width: fit-content;
        display: inline-flex;
        align-items: center;
        gap: 0.85rem;
        color: #38332f;
        background: #f2efe9;
        border: 1px solid rgba(255, 255, 255, 0.42);
        border-radius: 999px;
        padding: 1rem 1.35rem 1rem 1.55rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.16em;
        font-size: 0.82rem;
        font-weight: 800;
        transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
      }

      .footer-cta-button:hover {
        color: #38332f !important;
        background: #fbbf24;
      }

      .footer-directory {
        width: min(1280px, calc(100% - 4rem));
        margin: 0 auto;
        padding: clamp(1.6rem, 3.4vw, 2.8rem) 0 1.35rem;
        display: grid;
        grid-template-columns: minmax(260px, 1.5fr) repeat(3, minmax(150px, 0.75fr));
        gap: clamp(1.5rem, 4vw, 4rem);
        background: #141414;
      }

      .footer-brand-block img {
        width: 104px;
        height: 104px;
        object-fit: contain;
        display: block;
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.55));
      }

      .footer-logo-link {
        display: inline-flex;
        text-decoration: none;
      }

      .footer-brand-block p {
        max-width: 380px;
        margin-top: 1.2rem;
        color: rgba(255, 255, 255, 0.76);
        font-size: clamp(1rem, 1.25vw, 1.14rem);
        line-height: 1.6;
      }

      .footer-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.62rem;
      }

      .footer-column h3 {
        color: rgba(255, 255, 255, 0.58);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.18em;
        margin: 0 0 0.55rem;
        text-transform: uppercase;
      }

      .footer-column a {
        color: #fff;
        font-size: 1.02rem;
        line-height: 1.45;
        text-decoration: none;
      }

      .footer-contact-column a {
        max-width: 270px;
      }

      .footer-social-icons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .footer-social-icons a {
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #f8fafc;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 999px;
        transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
      }

      .footer-social-icons a:hover {
        color: #141414 !important;
        background: #fbbf24;
      }

      .footer-legal-row {
        grid-column: 1 / -1;
        border-top: 1px solid rgba(255, 255, 255, 0.22);
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1.5rem;
        color: rgba(255, 255, 255, 0.58);
        font-size: 0.88rem;
      }

      .hero-collage-bg {
        position: absolute;
        top: -55vh;
        bottom: -55vh;
        left: 50%;
        width: 230vw;
        display: flex;
        justify-content: space-between;
        gap: clamp(0.5rem, 1vw, 1rem);
        transform: translateX(-50%) rotate(-6deg) scale(1.08);
        opacity: 0.9;
        z-index: 1;
      }

      .hero-film-strip {
        width: clamp(420px, 48vw, 780px);
        display: flex;
        flex-direction: column;
        gap: clamp(0.5rem, 1vw, 1rem);
        flex: 0 0 auto;
        will-change: transform;
      }

      .hero-film-strip-left {
        animation: filmMoveDown 34s linear infinite;
      }

      .hero-film-strip-middle-left {
        animation: filmMoveUp 38s linear infinite;
        margin-top: -16rem;
        animation-delay: -12s;
      }

      .hero-film-strip-middle-right {
        animation: filmMoveDown 36s linear infinite;
        margin-top: -7rem;
        animation-delay: -19s;
      }

      .hero-film-strip-right {
        animation: filmMoveUp 40s linear infinite;
        margin-top: -22rem;
        animation-delay: -26s;
      }

      .hero-film-frame {
        height: clamp(680px, 78vh, 1040px);
        border-radius: 0;
        background-size: cover;
        background-position: center;
        box-shadow: none;
        border: 0;
        filter: saturate(0.95) contrast(1.04);
      }

      .hero-scroll-down {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: white;
        background: rgba(15, 23, 42, 0.46);
        border: 1px solid rgba(255, 255, 255, 0.42);
        box-shadow: 0 16px 42px rgba(15, 23, 42, 0.42), 0 0 0 7px rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
        text-decoration: none;
        transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
      }

      .hero-scroll-down:hover {
        color: white !important;
        background: rgba(30, 64, 175, 0.72);
        border-color: rgba(255, 255, 255, 0.72);
        transform: translateY(-2px);
      }

      .hero-desktop-bottom-glow {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 280px;
        background:
          radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0.34) 36%, transparent 72%),
          linear-gradient(to top, rgba(255, 255, 255, 0.48), transparent);
        filter: blur(4px);
        pointer-events: none;
        z-index: 4;
      }

      @keyframes filmMoveUp {
        from { transform: translateY(0); }
        to { transform: translateY(-33.333%); }
      }

      @keyframes filmMoveDown {
        from { transform: translateY(-33.333%); }
        to { transform: translateY(0); }
      }

      @media (max-width: 980px) {
        .gallery-float-left {
          width: 30vw;
          height: 44vh;
        }

        .gallery-float-right {
          width: 20vw;
        }

        .gallery-float-bottom {
          width: 24vw;
        }

        .gallery-float-top-small {
          left: 24%;
          width: 12vw;
        }

        .gallery-float-left-small,
        .gallery-float-right-small,
        .gallery-float-far-left,
        .gallery-float-far-right,
        .gallery-float-bottom-left {
          width: 12vw;
        }

        .gallery-float-top-mid {
          width: 11vw;
        }

        .footer-directory {
          grid-template-columns: 1.2fr 1fr 1fr !important;
        }

        .footer-brand-block {
          grid-column: 1 / -1;
        }

        .footer-grid {
          grid-template-columns: 1fr 1fr !important;
        }

        .footer-main-layout {
          grid-template-columns: 1fr !important;
          gap: 2.5rem !important;
        }

        .footer-contact-layout {
          grid-template-columns: 1fr 1fr !important;
          padding-top: 0 !important;
        }
      }

      @media (max-width: 768px) {
        .community-gallery-section {
          min-height: 820px;
        }

        .gallery-center-copy {
          width: min(390px, calc(100% - 2rem));
        }

        .gallery-center-copy h2 {
          font-size: clamp(4rem, 18vw, 6.4rem);
        }

        .gallery-center-copy p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .gallery-float-left {
          left: 1rem;
          top: 6.5rem;
          width: 58vw;
          height: 260px;
        }

        .gallery-float-right {
          right: -3rem;
          top: 3rem;
          width: 34vw;
          height: 200px;
        }

        .gallery-float-bottom {
          left: auto;
          right: 1rem;
          bottom: 2.5rem;
          width: 58vw;
          height: 220px;
        }

        .gallery-float-top-small {
          left: 48%;
          top: 2.8rem;
          width: 28vw;
          height: 150px;
        }

        .gallery-float-left-small,
        .gallery-float-right-small,
        .gallery-float-far-left,
        .gallery-float-far-right,
        .gallery-float-top-mid,
        .gallery-float-bottom-left {
          display: none;
        }

        .church-location-section {
          min-height: 100vh;
          display: grid;
          align-content: end;
          gap: 1rem;
          padding: 6rem 1rem 1rem;
        }

        .location-section-overlay {
          background:
            linear-gradient(180deg, rgba(20, 20, 20, 0.52) 0%, rgba(20, 20, 20, 0.08) 42%, rgba(20, 20, 20, 0.46) 100%);
        }

        .location-index {
          top: 6.4rem;
          left: 1rem;
        }

        .location-title-block {
          top: 8.4rem;
          left: 1rem;
          right: 1rem;
          max-width: none;
        }

        .location-title-block h2 {
          color: #fff;
          font-size: clamp(3.4rem, 16vw, 5.8rem);
        }

        .location-floating-card {
          position: relative;
          inset: auto;
          width: 100%;
        }

        .location-image-card {
          position: relative;
          inset: auto;
          width: 100%;
          display: grid;
          grid-template-columns: 130px 1fr;
          align-items: stretch;
        }

        .location-image-card img {
          height: 100%;
          aspect-ratio: auto;
        }

        .site-footer-section {
          min-height: auto;
          display: block;
        }

        .footer-cta-panel {
          min-height: 560px;
        }

        .footer-cta-content,
        .footer-directory {
          width: min(420px, calc(100% - 2rem));
        }

        .footer-cta-content {
          padding-top: 7rem;
          padding-bottom: 3.2rem;
        }

        .footer-cta-content h2 {
          font-size: clamp(3.5rem, 17vw, 5.4rem);
          margin-bottom: 1.9rem;
        }

        .footer-cta-button {
          font-size: 0.76rem;
          padding: 0.95rem 1.18rem 0.95rem 1.35rem;
        }

        .footer-directory {
          grid-template-columns: 1fr !important;
          gap: 2.6rem;
          padding-top: 3rem;
        }

        .footer-brand-block,
        .footer-column {
          align-items: center;
          text-align: center;
        }

        .footer-brand-block p,
        .footer-contact-column a {
          max-width: 320px;
        }

        .footer-brand-block img {
          width: 118px;
          height: 118px;
          margin: 0 auto;
        }

        .footer-legal-row {
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.6rem;
        }

        .site-nav {
          top: 0;
          left: 0;
          right: 0;
          transform: none;
          padding: 1.15rem 0;
        }

        .page-section-anchor {
          scroll-margin-top: 74px;
          min-height: auto !important;
          padding-top: 6rem !important;
          padding-bottom: 6rem !important;
          display: block !important;
        }

        .about-section {
          padding-top: 3rem !important;
        }

        .lagom-section > div > div[style*="grid-template-columns"] {
          grid-template-columns: 1fr !important;
          gap: 2.5rem !important;
        }

        .section-kicker {
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          margin-bottom: 1.1rem;
        }

        .site-nav::before {
          background: var(--mobile-nav-surface);
          border-bottom: var(--mobile-nav-border);
          backdrop-filter: var(--mobile-nav-blur);
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
        }

        .nav-backdrop {
          position: fixed;
          inset: 0;
          display: block;
          width: 100vw;
          height: 100vh;
          padding: 0;
          border: 0;
          border-radius: 0;
          background: rgba(15, 23, 42, 0.68);
          cursor: pointer;
          opacity: 0;
          pointer-events: none;
          transform: none;
          transition: opacity 0.25s ease;
          z-index: 1;
        }

        .nav-backdrop:hover {
          transform: none;
          box-shadow: none !important;
        }

        .nav-backdrop.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .site-nav-inner {
          padding: 0 1.25rem;
          display: flex;
          justify-content: flex-end;
          min-height: 54px;
        }

        .mobile-nav-logo {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .mobile-nav-logo img {
          width: 92px;
          height: auto;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.85)) drop-shadow(0 6px 18px rgba(255, 255, 255, 0.25));
        }

        .hero-main-logo {
          display: none !important;
        }

        .nav-menu-button {
          display: flex;
        }

        .nav-links {
          position: absolute;
          top: calc(100% + 0.8rem);
          left: 1.25rem;
          right: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(30, 64, 175, 0.1);
          border-radius: 14px;
          box-shadow: 0 18px 50px rgba(30, 64, 175, 0.16);
          opacity: 0;
          pointer-events: none;
          transform: translateY(-12px) scale(0.98);
          transform-origin: top right;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .nav-links::before {
          display: none;
        }

        .nav-links.is-open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .nav-links a {
          width: 100%;
          min-width: 0;
          padding: 1rem 1.05rem;
          border-radius: 10px;
          font-size: 1.08rem;
          background: transparent;
          border: 0;
          box-shadow: none;
          backdrop-filter: none;
        }

        .nav-link::after {
          display: none;
        }

        .nav-link.is-active {
          background: #fef3e2;
          color: #1e40af !important;
          font-weight: 700;
          text-shadow: none !important;
        }

        .nav-links a:hover {
          background: #fef3e2;
        }

        .desktop-side-nav {
          display: none;
        }

        .back-to-top-button {
          right: 1rem;
          bottom: 1rem;
          width: 44px;
          height: 44px;
        }

        .footer-grid {
          grid-template-columns: 1fr !important;
        }

        .footer-contact-layout {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }

        .footer-shell {
          max-width: 420px !important;
        }

        .footer-main-layout {
          gap: 2.25rem !important;
        }

        .footer-brand-panel {
          text-align: center;
        }

        .footer-brand-panel a {
          justify-content: center;
        }

        .footer-brand-text {
          max-width: 280px !important;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-social-row {
          justify-content: center;
        }

        .footer-contact-item {
          display: grid !important;
          justify-items: center;
          text-align: center;
          padding: 1.25rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
        }

        .footer-contact-item svg {
          margin-bottom: 0.85rem !important;
        }

        .footer-contact-item p {
          max-width: 300px !important;
        }

        .footer-link-row {
          justify-content: center;
          gap: 1.05rem !important;
          margin-top: 3rem !important;
          text-align: center;
          flex-wrap: nowrap !important;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: none;
        }

        .footer-link-row::-webkit-scrollbar {
          display: none;
        }

        .footer-link-row a {
          flex: 0 0 auto;
          font-size: 0.88rem !important;
        }

        .footer-legal {
          text-align: center;
          font-size: 0.78rem !important;
          line-height: 1.5;
        }

        .footer-bottom {
          flex-direction: column;
        }

        .site-footer {
          background-attachment: scroll !important;
        }

        .hero-collage-bg {
          top: -42vh;
          bottom: -42vh;
          left: 50%;
          width: 320vw;
          gap: 0.5rem;
          transform: translateX(-50%) rotate(-8deg) scale(1.06);
          opacity: 0.76;
        }

        .hero-film-strip {
          width: 78vw;
          gap: 0.5rem;
        }

        .hero-film-strip-middle-left,
        .hero-film-strip-right {
          margin-top: -5rem;
        }

        .hero-film-strip-middle-right {
          margin-top: -2rem;
        }

        .hero-film-frame {
          height: 520px;
          border-radius: 0;
        }

        .hero-scroll-down {
          width: 48px;
          height: 48px;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.45), 0 0 0 6px rgba(255, 255, 255, 0.08);
        }

        .hero-desktop-bottom-glow {
          display: none;
        }
      }
    `)}const nr=["https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=700&auto=format&fit=crop","https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=700&auto=format&fit=crop","https://images.unsplash.com/photo-1511895426328-dc8714191300?w=700&auto=format&fit=crop","https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=700&auto=format&fit=crop","https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=700&auto=format&fit=crop","https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&auto=format&fit=crop","https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=700&auto=format&fit=crop","https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=700&auto=format&fit=crop"];function b1(){const t=[{className:"hero-film-strip hero-film-strip-left",images:nr},{className:"hero-film-strip hero-film-strip-middle-left",images:[...nr.slice(2),...nr.slice(0,2)]},{className:"hero-film-strip hero-film-strip-middle-right",images:[...nr].reverse()},{className:"hero-film-strip hero-film-strip-right",images:[...nr.slice(4),...nr.slice(0,4)]}];return _.createElement("section",{id:"top",style:{position:"relative",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#0f172a"}},_.createElement("div",{className:"hero-collage-bg","aria-hidden":"true"},t.map(e=>_.createElement("div",{key:e.className,className:e.className},[...e.images,...e.images,...e.images].map((n,r)=>_.createElement("div",{key:`${n}-${r}`,className:"hero-film-frame",style:{backgroundImage:`url("${n}")`}}))))),_.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(15, 23, 42, 0.82), rgba(30, 64, 175, 0.68), rgba(253, 232, 200, 0.78))",zIndex:2}}),_.createElement("div",{style:{position:"absolute",inset:0,opacity:.18,backgroundImage:"radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",backgroundSize:"42px 42px",zIndex:3}}),_.createElement("div",{className:"hero-desktop-bottom-glow","aria-hidden":"true"}),_.createElement("div",{style:{textAlign:"center",zIndex:10,padding:"0 2rem",animation:"fadeInUp 1s ease-out"}},_.createElement("img",{src:ou,alt:"ECMI Mandaluyong logo",className:"hero-main-logo",style:{width:"clamp(165px, 20vw, 260px)",height:"auto",objectFit:"contain",margin:"0 auto 1rem",display:"block",filter:"drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)) drop-shadow(0 12px 28px rgba(15, 23, 42, 0.35))",animation:"fadeIn 1.5s ease-out"}}),_.createElement("h1",{style:{fontFamily:'"Playfair Display", serif',fontSize:"clamp(3rem, 8vw, 6rem)",fontWeight:700,color:"white",textShadow:"0 18px 45px rgba(15, 23, 42, 0.55)",marginBottom:"1.5rem",lineHeight:1.1,animation:"fadeInUp 1s ease-out 0.2s backwards"}},"God With Us"),_.createElement("p",{style:{fontSize:"clamp(1.35rem, 2vw, 1.65rem)",color:"rgba(255, 255, 255, 0.88)",maxWidth:"980px",margin:"0 auto 1.35rem",lineHeight:1.8,animation:"fadeInUp 1s ease-out 0.4s backwards"}},"Join us in worship, fellowship, and growing together in faith at ECMI Mandaluyong"),_.createElement("div",{style:{color:"white",fontFamily:'"Outfit", sans-serif',fontSize:"clamp(1.08rem, 1.7vw, 1.35rem)",fontWeight:600,lineHeight:1.7,margin:"0 auto 3rem",maxWidth:"900px",textShadow:"0 12px 35px rgba(15, 23, 42, 0.55)",animation:"fadeInUp 1s ease-out 0.5s backwards"}},_.createElement("div",null,"Sunday Church 2026 | 1:00 PM - 3:00 PM"),_.createElement("div",null,"Albeso Space, 60 M. Guevara St. cor. Sinag, Mandaluyong City")),_.createElement("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap",animation:"fadeInUp 1s ease-out 0.6s backwards"}},_.createElement("a",{href:"#live-stream",style:{background:"linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",color:"white",padding:"1rem 2.5rem",borderRadius:"50px",textDecoration:"none",fontFamily:'"Outfit", sans-serif',fontWeight:600,fontSize:"1rem",display:"inline-flex",alignItems:"center",gap:"0.5rem",transition:"transform 0.3s, box-shadow 0.3s",boxShadow:"0 10px 30px rgba(30, 64, 175, 0.3)",cursor:"pointer"}},_.createElement(iu,{size:20})," Watch Live"),_.createElement("a",{href:"#events",style:{background:"white",color:"#1e40af",padding:"1rem 2.5rem",borderRadius:"50px",textDecoration:"none",fontFamily:'"Outfit", sans-serif',fontWeight:600,fontSize:"1rem",border:"2px solid #1e40af",transition:"all 0.3s",cursor:"pointer"}},"Upcoming Events"))),_.createElement("div",{style:{position:"absolute",bottom:"3rem",left:"50%",transform:"translateX(-50%)",animation:"bounce 2s infinite",zIndex:11}},_.createElement("a",{href:"#about","aria-label":"Scroll to about section",className:"hero-scroll-down"},_.createElement(hp,{style:{transform:"rotate(90deg)"},size:32}))))}function C1(){return _.createElement("section",{id:"live-stream",className:"page-section-anchor lagom-section",style:{padding:"10rem 2rem",background:"white",minHeight:"100vh",display:"flex",alignItems:"center"}},_.createElement("div",{style:{maxWidth:"1080px",width:"100%",margin:"0 auto"}},_.createElement("div",{className:"section-kicker","data-aos":"fade-up"},"004 / Live"),_.createElement("h2",{"data-aos":"fade-up",style:{fontFamily:'"Playfair Display", serif',fontSize:"clamp(3.5rem, 8vw, 7.8rem)",fontWeight:700,color:"#1e40af",marginBottom:"2rem",lineHeight:.95}},"Watch Us Live"),_.createElement("p",{"data-aos":"fade-up","data-aos-delay":"120",style:{fontSize:"1.1rem",color:"#475569",marginBottom:"2rem",lineHeight:1.8}},"Can't make it to church? Join us online every Sunday at 9:00 AM and 5:00 PM"),_.createElement("div",{"data-aos":"zoom-in","data-aos-delay":"180",style:{position:"relative",paddingBottom:"56.25%",background:"linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",borderRadius:"16px",overflow:"hidden",boxShadow:"0 20px 60px rgba(30, 64, 175, 0.3)"}},_.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"white"}},_.createElement(iu,{size:80,style:{marginBottom:"1rem",opacity:.9}}),_.createElement("div",{style:{fontFamily:'"Outfit", sans-serif',fontSize:"1.5rem",fontWeight:600}},"Live Stream Coming Soon")))))}const T1="https://www.google.com/maps/place/Albeso+Space/@14.5793337,121.0476797,21z/data=!4m6!3m5!1s0x3397c95165564011:0xfc35408cb045a1ff!8m2!3d14.5794386!4d121.0478301!16s%2Fg%2F11yl_g9k59?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D",P1="https://www.google.com/maps?q=Albeso%20Space%2C%2060%20M.%20Guevara%20St.%20cor.%20Sinag%2C%20Mandaluyong%20City&output=embed";function z1(){const t=Y.useRef(null),[e,n]=Y.useState(0);return Y.useEffect(()=>{const r=()=>{const i=t.current;if(!i)return;const o=i.getBoundingClientRect(),l=window.innerHeight,a=(l-o.top)/(l+o.height),s=Math.min(Math.max(a,0),1);n((s-.5)*72)};return r(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),()=>{window.removeEventListener("scroll",r),window.removeEventListener("resize",r)}},[]),_.createElement("section",{id:"visit",ref:t,className:"page-section-anchor church-location-section"},_.createElement("iframe",{className:"location-map-frame",title:"ECMI Mandaluyong location map",src:P1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!0,style:{transform:`translate3d(0, ${e}px, 0) scale(1.12)`}}),_.createElement("div",{className:"location-section-overlay","aria-hidden":"true"}),_.createElement("div",{className:"location-index","data-aos":"fade-up"},"006"),_.createElement("div",{className:"location-title-block","data-aos":"fade-up"},_.createElement("div",{className:"section-kicker"},"Visit Us"),_.createElement("h2",null,"Church Location")),_.createElement("div",{className:"location-floating-card","data-aos":"fade-up","data-aos-delay":"120"},_.createElement("div",{className:"location-card-icon"},_.createElement(ru,{size:24})),_.createElement("p",{className:"location-card-label"},"ECMI Mandaluyong"),_.createElement("h3",null,"Albeso Space"),_.createElement("p",null,"60 M. Guevara St. cor. Sinag, Mandaluyong City, Metro Manila"),_.createElement("div",{className:"location-service-row"},_.createElement(nu,{size:18}),_.createElement("span",null,"Sunday Church 2026 | 1:00 PM - 3:00 PM")),_.createElement("a",{href:T1,target:"_blank",rel:"noreferrer"},"Open in Google Maps",_.createElement(mp,{size:18}))),_.createElement("div",{className:"location-image-card","data-aos":"fade-up","data-aos-delay":"180","aria-hidden":"true"},_.createElement("img",{src:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=520&auto=format&fit=crop",alt:""}),_.createElement("div",null,_.createElement($0,{size:18}),_.createElement("span",null,"Easy to find, ready to welcome you."))))}function M1({isScrolled:t}){const[e,n]=Y.useState(!1),[r,i]=Y.useState("top"),[o,l]=Y.useState(!1),[a,s]=Y.useState(!1),u=t||e;Y.useEffect(()=>{if(!e)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[e]);const c=[{href:"#about",label:"About"},{href:"#events",label:"Events"},{href:"#gallery",label:"Gallery"},{href:"#live-stream",label:"Live"},{href:"#give",label:"Give"},{href:"#visit",label:"Visit"}],f=[{href:"#top",label:"Home"},...c];Y.useEffect(()=>{const y=c.map(x=>x.href.replace("#","")),p=()=>{const x=window.matchMedia("(max-width: 768px)").matches,h=x?96:1,m=y.reduce((E,S)=>{const C=document.getElementById(S);return C&&C.getBoundingClientRect().top<=h?S:E},"top"),v=document.getElementById("about"),w=document.getElementById("footer"),k=w?w.getBoundingClientRect().top<=window.innerHeight*.72:!1,b=!x&&v?v.getBoundingClientRect().top<=h:!1;i(m),l(b),s(b&&!k)};return p(),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),()=>{window.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[]);const d=()=>{n(!1)},g=(y,p)=>{p.preventDefault();const x=y.replace("#",""),h=document.getElementById(x);h&&(d(),window.history.pushState(null,"",y),x==="top"?window.scrollTo({top:0,behavior:"smooth"}):h.scrollIntoView({behavior:"smooth",block:"start"}),i(x))};return _.createElement("nav",{className:`site-nav ${u?"is-solid":""} ${o?"is-top-hidden":""}`,style:{"--mobile-nav-surface":u?"rgba(255, 255, 255, 0.98)":"transparent","--mobile-nav-border":u?"1px solid rgba(30, 64, 175, 0.1)":"0 solid transparent","--mobile-nav-blur":u?"blur(10px)":"none"}},_.createElement("button",{className:`nav-backdrop ${e?"is-open":""}`,type:"button","aria-label":"Close navigation menu",onClick:d}),_.createElement("div",{className:"site-nav-inner"},_.createElement("div",{className:"nav-spacer"}),_.createElement("button",{className:`nav-menu-button ${e?"is-open":""} ${u?"is-solid":""}`,type:"button","aria-label":e?"Close navigation menu":"Open navigation menu","aria-expanded":e,onClick:()=>n(y=>!y)},_.createElement("span",null),_.createElement("span",null),_.createElement("span",null)),_.createElement("a",{className:"mobile-nav-logo",href:"#top","aria-label":"Back to top",onClick:y=>g("#top",y)},_.createElement("img",{src:ou,alt:"ECMI Mandaluyong logo"})),_.createElement("div",{className:`nav-links ${e?"is-open":""}`},f.map(y=>_.createElement("a",{key:y.href,className:`nav-link ${r===y.href.replace("#","")?"is-active":""} ${u?"is-solid":""}`,href:y.href,onClick:p=>g(y.href,p),style:{color:u?"#1e293b":"white",textDecoration:"none",transition:"color 0.2s",cursor:"pointer",textShadow:u?"none":"0 6px 18px rgba(15, 23, 42, 0.45)"}},y.label)))),_.createElement("div",{className:`desktop-side-nav ${a?"is-visible":""}`,"aria-label":"Section navigation"},c.map(y=>_.createElement("a",{key:y.href,className:`desktop-side-nav-link ${r===y.href.replace("#","")?"is-active":""}`,href:y.href,onClick:p=>g(y.href,p)},y.label))),_.createElement("a",{className:`back-to-top-button ${t?"is-visible":""}`,href:"#top","aria-label":"Back to top",onClick:y=>g("#top",y)},_.createElement(A0,{size:22})))}const Kr=[{url:"https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800",caption:"Sunday Worship Service"},{url:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",caption:"Youth Fellowship"},{url:"https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800",caption:"Community Outreach"},{url:"https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800",caption:"Prayer Meeting"},{url:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800",caption:"Bible Study"},{url:"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",caption:"Worship Team"},{url:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",caption:"Church Family"},{url:"https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",caption:"Small Groups"},{url:"https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=800",caption:"Fellowship Moments"},{url:"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800",caption:"Shared Meals"},{url:"https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800",caption:"Prayer and Worship"},{url:"https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?w=800",caption:"Serving Together"},{url:"https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?w=800",caption:"Sunday Moments"},{url:"https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800",caption:"Community Celebration"}],O1=[{date:"April 26, 2026",time:"9:00 AM",title:"ECMI 55th Anniversary",location:"Main Sanctuary"},{date:"May 4, 2026",time:"9:00 AM",title:"Sunday Celebration Service",location:"Main Sanctuary"},{date:"May 7, 2026",time:"7:00 PM",title:"Midweek Prayer & Bible Study",location:"Fellowship Hall"},{date:"May 11, 2026",time:"9:00 AM",title:"Sunday Worship Service",location:"Main Sanctuary"},{date:"May 14, 2026",time:"6:00 PM",title:"Youth Night",location:"Youth Center"}];function N1(){const[t,e]=Y.useState(!1),[n,r]=Y.useState(null),[i,o]=Y.useState(!1);Y.useEffect(()=>{const c=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),Y.useEffect(()=>{D0.init({duration:950,easing:"ease-out-cubic",once:!0,offset:90,anchorPlacement:"top-bottom"})},[]);const l=c=>{r(c),e(!0)},a=()=>{e(!1),r(null)},s=()=>{r(c=>(c+1)%Kr.length)},u=()=>{r(c=>(c-1+Kr.length)%Kr.length)};return _.createElement("div",{style:{fontFamily:'"Crimson Pro", Georgia, serif',background:"linear-gradient(135deg, #faf8f3 0%, #f5f1e8 100%)",minHeight:"100vh"}},_.createElement(M1,{isScrolled:i}),_.createElement(b1,null),_.createElement(X0,null),_.createElement(q0,{events:O1}),_.createElement(k1,{images:Kr,onImageSelect:l}),_.createElement(C1,null),_.createElement(S1,null),_.createElement(z1,null),_.createElement(tg,null),t&&_.createElement(ng,{images:Kr,selectedImage:n,onClose:a,onNext:s,onPrevious:u}),_.createElement(K0,null),_.createElement(E1,null))}function L1(){return _.createElement(N1,null)}fp(document.getElementById("root")).render(_.createElement(_.StrictMode,null,_.createElement(L1,null)));
