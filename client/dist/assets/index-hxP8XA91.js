(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))s(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function Hm(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var bo={exports:{}},oi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Ip(){if(tm)return oi;tm=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(s,f,h){var m=null;if(h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),"key"in f){h={};for(var p in f)p!=="key"&&(h[p]=f[p])}else h=f;return f=h.ref,{$$typeof:l,type:s,key:m,ref:f!==void 0?f:null,props:h}}return oi.Fragment=u,oi.jsx=c,oi.jsxs=c,oi}var nm;function Pp(){return nm||(nm=1,bo.exports=Ip()),bo.exports}var o=Pp(),xo={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function e1(){if(am)return re;am=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),z=Symbol.iterator;function k(E){return E===null||typeof E!="object"?null:(E=z&&E[z]||E["@@iterator"],typeof E=="function"?E:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,M={};function T(E,H,X){this.props=E,this.context=H,this.refs=M,this.updater=X||L}T.prototype.isReactComponent={},T.prototype.setState=function(E,H){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,H,"setState")},T.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function V(){}V.prototype=T.prototype;function U(E,H,X){this.props=E,this.context=H,this.refs=M,this.updater=X||L}var K=U.prototype=new V;K.constructor=U,Y(K,T.prototype),K.isPureReactComponent=!0;var I=Array.isArray;function ee(){}var J={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function Se(E,H,X){var F=X.ref;return{$$typeof:l,type:E,key:H,ref:F!==void 0?F:null,props:X}}function Ue(E,H){return Se(E.type,H,E.props)}function Me(E){return typeof E=="object"&&E!==null&&E.$$typeof===l}function Ne(E){var H={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(X){return H[X]})}var st=/\/+/g;function we(E,H){return typeof E=="object"&&E!==null&&E.key!=null?Ne(""+E.key):H.toString(36)}function Ce(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(ee,ee):(E.status="pending",E.then(function(H){E.status==="pending"&&(E.status="fulfilled",E.value=H)},function(H){E.status==="pending"&&(E.status="rejected",E.reason=H)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function D(E,H,X,F,le){var W=typeof E;(W==="undefined"||W==="boolean")&&(E=null);var ue=!1;if(E===null)ue=!0;else switch(W){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(E.$$typeof){case l:case u:ue=!0;break;case x:return ue=E._init,D(ue(E._payload),H,X,F,le)}}if(ue)return le=le(E),ue=F===""?"."+we(E,0):F,I(le)?(X="",ue!=null&&(X=ue.replace(st,"$&/")+"/"),D(le,H,X,"",function(Kn){return Kn})):le!=null&&(Me(le)&&(le=Ue(le,X+(le.key==null||E&&E.key===le.key?"":(""+le.key).replace(st,"$&/")+"/")+ue)),H.push(le)),1;ue=0;var Ve=F===""?".":F+":";if(I(E))for(var De=0;De<E.length;De++)F=E[De],W=Ve+we(F,De),ue+=D(F,H,X,W,le);else if(De=k(E),typeof De=="function")for(E=De.call(E),De=0;!(F=E.next()).done;)F=F.value,W=Ve+we(F,De++),ue+=D(F,H,X,W,le);else if(W==="object"){if(typeof E.then=="function")return D(Ce(E),H,X,F,le);throw H=String(E),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ue}function Q(E,H,X){if(E==null)return E;var F=[],le=0;return D(E,F,"","",function(W){return H.call(X,W,le++)}),F}function ae(E){if(E._status===-1){var H=E._result;H=H(),H.then(function(X){(E._status===0||E._status===-1)&&(E._status=1,E._result=X)},function(X){(E._status===0||E._status===-1)&&(E._status=2,E._result=X)}),E._status===-1&&(E._status=0,E._result=H)}if(E._status===1)return E._result.default;throw E._result}var xe=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},he={map:Q,forEach:function(E,H,X){Q(E,function(){H.apply(this,arguments)},X)},count:function(E){var H=0;return Q(E,function(){H++}),H},toArray:function(E){return Q(E,function(H){return H})||[]},only:function(E){if(!Me(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return re.Activity=v,re.Children=he,re.Component=T,re.Fragment=c,re.Profiler=f,re.PureComponent=U,re.StrictMode=s,re.Suspense=b,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,re.__COMPILER_RUNTIME={__proto__:null,c:function(E){return J.H.useMemoCache(E)}},re.cache=function(E){return function(){return E.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(E,H,X){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var F=Y({},E.props),le=E.key;if(H!=null)for(W in H.key!==void 0&&(le=""+H.key),H)!oe.call(H,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&H.ref===void 0||(F[W]=H[W]);var W=arguments.length-2;if(W===1)F.children=X;else if(1<W){for(var ue=Array(W),Ve=0;Ve<W;Ve++)ue[Ve]=arguments[Ve+2];F.children=ue}return Se(E.type,le,F)},re.createContext=function(E){return E={$$typeof:m,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},re.createElement=function(E,H,X){var F,le={},W=null;if(H!=null)for(F in H.key!==void 0&&(W=""+H.key),H)oe.call(H,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(le[F]=H[F]);var ue=arguments.length-2;if(ue===1)le.children=X;else if(1<ue){for(var Ve=Array(ue),De=0;De<ue;De++)Ve[De]=arguments[De+2];le.children=Ve}if(E&&E.defaultProps)for(F in ue=E.defaultProps,ue)le[F]===void 0&&(le[F]=ue[F]);return Se(E,W,le)},re.createRef=function(){return{current:null}},re.forwardRef=function(E){return{$$typeof:p,render:E}},re.isValidElement=Me,re.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:ae}},re.memo=function(E,H){return{$$typeof:y,type:E,compare:H===void 0?null:H}},re.startTransition=function(E){var H=J.T,X={};J.T=X;try{var F=E(),le=J.S;le!==null&&le(X,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ee,xe)}catch(W){xe(W)}finally{H!==null&&X.types!==null&&(H.types=X.types),J.T=H}},re.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},re.use=function(E){return J.H.use(E)},re.useActionState=function(E,H,X){return J.H.useActionState(E,H,X)},re.useCallback=function(E,H){return J.H.useCallback(E,H)},re.useContext=function(E){return J.H.useContext(E)},re.useDebugValue=function(){},re.useDeferredValue=function(E,H){return J.H.useDeferredValue(E,H)},re.useEffect=function(E,H){return J.H.useEffect(E,H)},re.useEffectEvent=function(E){return J.H.useEffectEvent(E)},re.useId=function(){return J.H.useId()},re.useImperativeHandle=function(E,H,X){return J.H.useImperativeHandle(E,H,X)},re.useInsertionEffect=function(E,H){return J.H.useInsertionEffect(E,H)},re.useLayoutEffect=function(E,H){return J.H.useLayoutEffect(E,H)},re.useMemo=function(E,H){return J.H.useMemo(E,H)},re.useOptimistic=function(E,H){return J.H.useOptimistic(E,H)},re.useReducer=function(E,H,X){return J.H.useReducer(E,H,X)},re.useRef=function(E){return J.H.useRef(E)},re.useState=function(E){return J.H.useState(E)},re.useSyncExternalStore=function(E,H,X){return J.H.useSyncExternalStore(E,H,X)},re.useTransition=function(){return J.H.useTransition()},re.version="19.2.7",re}var lm;function Ho(){return lm||(lm=1,xo.exports=e1()),xo.exports}var A=Ho();const t1=Hm(A);var vo={exports:{}},ci={},So={exports:{}},Eo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function n1(){return im||(im=1,(function(l){function u(D,Q){var ae=D.length;D.push(Q);e:for(;0<ae;){var xe=ae-1>>>1,he=D[xe];if(0<f(he,Q))D[xe]=Q,D[ae]=he,ae=xe;else break e}}function c(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var Q=D[0],ae=D.pop();if(ae!==Q){D[0]=ae;e:for(var xe=0,he=D.length,E=he>>>1;xe<E;){var H=2*(xe+1)-1,X=D[H],F=H+1,le=D[F];if(0>f(X,ae))F<he&&0>f(le,X)?(D[xe]=le,D[F]=ae,xe=F):(D[xe]=X,D[H]=ae,xe=H);else if(F<he&&0>f(le,ae))D[xe]=le,D[F]=ae,xe=F;else break e}}return Q}function f(D,Q){var ae=D.sortIndex-Q.sortIndex;return ae!==0?ae:D.id-Q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;l.unstable_now=function(){return h.now()}}else{var m=Date,p=m.now();l.unstable_now=function(){return m.now()-p}}var b=[],y=[],x=1,v=null,z=3,k=!1,L=!1,Y=!1,M=!1,T=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function K(D){for(var Q=c(y);Q!==null;){if(Q.callback===null)s(y);else if(Q.startTime<=D)s(y),Q.sortIndex=Q.expirationTime,u(b,Q);else break;Q=c(y)}}function I(D){if(Y=!1,K(D),!L)if(c(b)!==null)L=!0,ee||(ee=!0,Ne());else{var Q=c(y);Q!==null&&Ce(I,Q.startTime-D)}}var ee=!1,J=-1,oe=5,Se=-1;function Ue(){return M?!0:!(l.unstable_now()-Se<oe)}function Me(){if(M=!1,ee){var D=l.unstable_now();Se=D;var Q=!0;try{e:{L=!1,Y&&(Y=!1,V(J),J=-1),k=!0;var ae=z;try{t:{for(K(D),v=c(b);v!==null&&!(v.expirationTime>D&&Ue());){var xe=v.callback;if(typeof xe=="function"){v.callback=null,z=v.priorityLevel;var he=xe(v.expirationTime<=D);if(D=l.unstable_now(),typeof he=="function"){v.callback=he,K(D),Q=!0;break t}v===c(b)&&s(b),K(D)}else s(b);v=c(b)}if(v!==null)Q=!0;else{var E=c(y);E!==null&&Ce(I,E.startTime-D),Q=!1}}break e}finally{v=null,z=ae,k=!1}Q=void 0}}finally{Q?Ne():ee=!1}}}var Ne;if(typeof U=="function")Ne=function(){U(Me)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,we=st.port2;st.port1.onmessage=Me,Ne=function(){we.postMessage(null)}}else Ne=function(){T(Me,0)};function Ce(D,Q){J=T(function(){D(l.unstable_now())},Q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return z},l.unstable_next=function(D){switch(z){case 1:case 2:case 3:var Q=3;break;default:Q=z}var ae=z;z=Q;try{return D()}finally{z=ae}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ae=z;z=D;try{return Q()}finally{z=ae}},l.unstable_scheduleCallback=function(D,Q,ae){var xe=l.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?xe+ae:xe):ae=xe,D){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ae+he,D={id:x++,callback:Q,priorityLevel:D,startTime:ae,expirationTime:he,sortIndex:-1},ae>xe?(D.sortIndex=ae,u(y,D),c(b)===null&&D===c(y)&&(Y?(V(J),J=-1):Y=!0,Ce(I,ae-xe))):(D.sortIndex=he,u(b,D),L||k||(L=!0,ee||(ee=!0,Ne()))),D},l.unstable_shouldYield=Ue,l.unstable_wrapCallback=function(D){var Q=z;return function(){var ae=z;z=Q;try{return D.apply(this,arguments)}finally{z=ae}}}})(Eo)),Eo}var rm;function a1(){return rm||(rm=1,So.exports=n1()),So.exports}var jo={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function l1(){if(um)return at;um=1;var l=Ho();function u(b){var y="https://react.dev/errors/"+b;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+b+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(b,y,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:b,containerInfo:y,implementation:x}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(b,y){if(b==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,at.createPortal=function(b,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(u(299));return h(b,y,null,x)},at.flushSync=function(b){var y=m.T,x=s.p;try{if(m.T=null,s.p=2,b)return b()}finally{m.T=y,s.p=x,s.d.f()}},at.preconnect=function(b,y){typeof b=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(b,y))},at.prefetchDNS=function(b){typeof b=="string"&&s.d.D(b)},at.preinit=function(b,y){if(typeof b=="string"&&y&&typeof y.as=="string"){var x=y.as,v=p(x,y.crossOrigin),z=typeof y.integrity=="string"?y.integrity:void 0,k=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(b,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:v,integrity:z,fetchPriority:k}):x==="script"&&s.d.X(b,{crossOrigin:v,integrity:z,fetchPriority:k,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},at.preinitModule=function(b,y){if(typeof b=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=p(y.as,y.crossOrigin);s.d.M(b,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(b)},at.preload=function(b,y){if(typeof b=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,v=p(x,y.crossOrigin);s.d.L(b,x,{crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},at.preloadModule=function(b,y){if(typeof b=="string")if(y){var x=p(y.as,y.crossOrigin);s.d.m(b,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(b)},at.requestFormReset=function(b){s.d.r(b)},at.unstable_batchedUpdates=function(b,y){return b(y)},at.useFormState=function(b,y,x){return m.H.useFormState(b,y,x)},at.useFormStatus=function(){return m.H.useHostTransitionStatus()},at.version="19.2.7",at}var sm;function i1(){if(sm)return jo.exports;sm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),jo.exports=l1(),jo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function r1(){if(om)return ci;om=1;var l=a1(),u=Ho(),c=i1();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(h(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return b(i),e;if(r===a)return b(i),t;r=r.sibling}throw Error(s(188))}if(n.return!==a.return)n=i,a=r;else{for(var d=!1,g=i.child;g;){if(g===n){d=!0,n=i,a=r;break}if(g===a){d=!0,a=i,n=r;break}g=g.sibling}if(!d){for(g=r.child;g;){if(g===n){d=!0,n=r,a=i;break}if(g===a){d=!0,a=r,n=i;break}g=g.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,z=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),U=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Me=Symbol.iterator;function Ne(e){return e===null||typeof e!="object"?null:(e=Me&&e[Me]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function we(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case T:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case ee:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case U:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:we(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return we(e(t))}catch{}}return null}var Ce=Array.isArray,D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},xe=[],he=-1;function E(e){return{current:e}}function H(e){0>he||(e.current=xe[he],xe[he]=null,he--)}function X(e,t){he++,xe[he]=e.current,e.current=t}var F=E(null),le=E(null),W=E(null),ue=E(null);function Ve(e,t){switch(X(W,t),X(le,e),X(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nh(t),e=Rh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(F),X(F,e)}function De(){H(F),H(le),H(W)}function Kn(e){e.memoizedState!==null&&X(ue,e);var t=F.current,n=Rh(t,e.type);t!==n&&(X(le,e),X(F,n))}function Fn(e){le.current===e&&(H(F),H(le)),ue.current===e&&(H(ue),ii._currentValue=ae)}var yt,gl;function Yt(e){if(yt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yt=t&&t[1]||"",gl=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+gl}var bt=!1;function ie(e,t){if(!e||bt)return"";bt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(O){var w=O}Reflect.construct(e,[],G)}else{try{G.call()}catch(O){w=O}e.call(G.prototype)}}else{try{throw Error()}catch(O){w=O}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(O){if(O&&w&&typeof O.stack=="string")return[O.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),d=r[0],g=r[1];if(d&&g){var S=d.split(`
`),_=g.split(`
`);for(i=a=0;a<S.length&&!S[a].includes("DetermineComponentFrameRoot");)a++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(a===S.length||i===_.length)for(a=S.length-1,i=_.length-1;1<=a&&0<=i&&S[a]!==_[i];)i--;for(;1<=a&&0<=i;a--,i--)if(S[a]!==_[i]){if(a!==1||i!==1)do if(a--,i--,0>i||S[a]!==_[i]){var B=`
`+S[a].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=a&&0<=i);break}}}finally{bt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Yt(n):""}function rt(e,t){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return e.child!==t&&t!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return ie(e.type,!1);case 11:return ie(e.type.render,!1);case 1:return ie(e.type,!0);case 31:return Yt("Activity");default:return""}}function Gt(e){try{var t="",n=null;do t+=rt(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Vt=Object.prototype.hasOwnProperty,Sa=l.unstable_scheduleCallback,pl=l.unstable_cancelCallback,Wn=l.unstable_shouldYield,z0=l.unstable_requestPaint,xt=l.unstable_now,O0=l.unstable_getCurrentPriorityLevel,tc=l.unstable_ImmediatePriority,nc=l.unstable_UserBlockingPriority,Ei=l.unstable_NormalPriority,U0=l.unstable_LowPriority,ac=l.unstable_IdlePriority,M0=l.log,D0=l.unstable_setDisableYieldValue,yl=null,vt=null;function En(e){if(typeof M0=="function"&&D0(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(yl,e)}catch{}}var St=Math.clz32?Math.clz32:H0,L0=Math.log,B0=Math.LN2;function H0(e){return e>>>=0,e===0?32:31-(L0(e)/B0|0)|0}var ji=256,Ni=262144,Ri=4194304;function $n(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ti(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=a&134217727;return g!==0?(a=g&~r,a!==0?i=$n(a):(d&=g,d!==0?i=$n(d):n||(n=g&~e,n!==0&&(i=$n(n))))):(g=a&~r,g!==0?i=$n(g):d!==0?i=$n(d):n||(n=a&~e,n!==0&&(i=$n(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function q0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function iu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function k0(e,t,n,a,i,r){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,S=e.expirationTimes,_=e.hiddenUpdates;for(n=d&~n;0<n;){var B=31-St(n),G=1<<B;g[B]=0,S[B]=-1;var w=_[B];if(w!==null)for(_[B]=null,B=0;B<w.length;B++){var O=w[B];O!==null&&(O.lane&=-536870913)}n&=~G}a!==0&&ic(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(d&~t))}function ic(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-St(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function rc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-St(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function uc(e,t){var n=t&-t;return n=(n&42)!==0?1:ru(n),(n&(e.suspendedLanes|t))!==0?0:n}function ru(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function uu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sc(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Kh(e.type))}function oc(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var jn=Math.random().toString(36).slice(2),$e="__reactFiber$"+jn,ot="__reactProps$"+jn,Ea="__reactContainer$"+jn,su="__reactEvents$"+jn,Y0="__reactListeners$"+jn,G0="__reactHandles$"+jn,cc="__reactResources$"+jn,vl="__reactMarker$"+jn;function ou(e){delete e[$e],delete e[ot],delete e[su],delete e[Y0],delete e[G0]}function ja(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ea]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oh(e);e!==null;){if(n=e[$e])return n;e=Oh(e)}return t}e=n,n=e.parentNode}return null}function Na(e){if(e=e[$e]||e[Ea]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Sl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ra(e){var t=e[cc];return t||(t=e[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[vl]=!0}var fc=new Set,dc={};function In(e,t){Ta(e,t),Ta(e+"Capture",t)}function Ta(e,t){for(dc[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var V0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hc={},mc={};function X0(e){return Vt.call(mc,e)?!0:Vt.call(hc,e)?!1:V0.test(e)?mc[e]=!0:(hc[e]=!0,!1)}function Ai(e,t,n){if(X0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ci(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function nn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q0(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,r.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cu(e){if(!e._valueTracker){var t=gc(e)?"checked":"value";e._valueTracker=Q0(e,t,""+e[t])}}function pc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=gc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Z0=/[\n"\\]/g;function zt(e){return e.replace(Z0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fu(e,t,n,a,i,r,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?du(e,d,wt(t)):n!=null?du(e,d,wt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+wt(g):e.removeAttribute("name")}function yc(e,t,n,a,i,r,d,g){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){cu(e);return}n=n!=null?""+wt(n):"",t=t!=null?""+wt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=g?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),cu(e)}function du(e,t,n){t==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Aa(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bc(e,t,n){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+wt(n):""}function xc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Ce(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=wt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),cu(e)}function Ca(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var J0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||J0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Sc(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&vc(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&vc(e,r,t[r])}function hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var K0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wi(e){return F0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function an(){}var mu=null;function gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,wa=null;function Ec(e){var t=Na(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(fu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[ot]||null;if(!i)throw Error(s(90));fu(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&pc(a)}break e;case"textarea":bc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Aa(e,!!n.multiple,t,!1)}}}var pu=!1;function jc(e,t,n){if(pu)return e(t,n);pu=!0;try{var a=e(t);return a}finally{if(pu=!1,(_a!==null||wa!==null)&&(yr(),_a&&(t=_a,e=wa,wa=_a=null,Ec(t),e)))for(t=0;t<e.length;t++)Ec(e[t])}}function El(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ot]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(ln)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){yu=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{yu=!1}var Nn=null,bu=null,zi=null;function Nc(){if(zi)return zi;var e,t=bu,n=t.length,a,i="value"in Nn?Nn.value:Nn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===i[r-a];a++);return zi=i.slice(e,1<a?1-a:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function Rc(){return!1}function ct(e){function t(n,a,i,r,d){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(r):r[g]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ui:Rc,this.isPropagationStopped=Rc,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mi=ct(Pn),Nl=v({},Pn,{view:0,detail:0}),W0=ct(Nl),xu,vu,Rl,Di=v({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rl&&(Rl&&e.type==="mousemove"?(xu=e.screenX-Rl.screenX,vu=e.screenY-Rl.screenY):vu=xu=0,Rl=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Tc=ct(Di),$0=v({},Di,{dataTransfer:0}),I0=ct($0),P0=v({},Nl,{relatedTarget:0}),Su=ct(P0),eg=v({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=ct(eg),ng=v({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ag=ct(ng),lg=v({},Pn,{data:0}),Ac=ct(lg),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ug[e])?!!t[e]:!1}function Eu(){return sg}var og=v({},Nl,{key:function(e){if(e.key){var t=ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cg=ct(og),fg=v({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=ct(fg),dg=v({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),hg=ct(dg),mg=v({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gg=ct(mg),pg=v({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=ct(pg),bg=v({},Pn,{newState:0,oldState:0}),xg=ct(bg),vg=[9,13,27,32],ju=ln&&"CompositionEvent"in window,Tl=null;ln&&"documentMode"in document&&(Tl=document.documentMode);var Sg=ln&&"TextEvent"in window&&!Tl,_c=ln&&(!ju||Tl&&8<Tl&&11>=Tl),wc=" ",zc=!1;function Oc(e,t){switch(e){case"keyup":return vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var za=!1;function Eg(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(zc=!0,wc);case"textInput":return e=t.data,e===wc&&zc?null:e;default:return null}}function jg(e,t){if(za)return e==="compositionend"||!ju&&Oc(e,t)?(e=Nc(),zi=bu=Nn=null,za=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var Ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ng[e.type]:t==="textarea"}function Dc(e,t,n,a){_a?wa?wa.push(a):wa=[a]:_a=a,t=Nr(t,"onChange"),0<t.length&&(n=new Mi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Al=null,Cl=null;function Rg(e){bh(e,0)}function Li(e){var t=Sl(e);if(pc(t))return e}function Lc(e,t){if(e==="change")return t}var Bc=!1;if(ln){var Nu;if(ln){var Ru="oninput"in document;if(!Ru){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Ru=typeof Hc.oninput=="function"}Nu=Ru}else Nu=!1;Bc=Nu&&(!document.documentMode||9<document.documentMode)}function qc(){Al&&(Al.detachEvent("onpropertychange",kc),Cl=Al=null)}function kc(e){if(e.propertyName==="value"&&Li(Cl)){var t=[];Dc(t,Cl,e,gu(e)),jc(Rg,t)}}function Tg(e,t,n){e==="focusin"?(qc(),Al=t,Cl=n,Al.attachEvent("onpropertychange",kc)):e==="focusout"&&qc()}function Ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Cl)}function Cg(e,t){if(e==="click")return Li(t)}function _g(e,t){if(e==="input"||e==="change")return Li(t)}function wg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:wg;function _l(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Vt.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var n=Yc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yc(n)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_i(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zg=ln&&"documentMode"in document&&11>=document.documentMode,Oa=null,Au=null,wl=null,Cu=!1;function Qc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cu||Oa==null||Oa!==_i(a)||(a=Oa,"selectionStart"in a&&Tu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wl&&_l(wl,a)||(wl=a,a=Nr(Au,"onSelect"),0<a.length&&(t=new Mi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Oa)))}function ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ua={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionrun:ea("Transition","TransitionRun"),transitionstart:ea("Transition","TransitionStart"),transitioncancel:ea("Transition","TransitionCancel"),transitionend:ea("Transition","TransitionEnd")},_u={},Zc={};ln&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function ta(e){if(_u[e])return _u[e];if(!Ua[e])return e;var t=Ua[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zc)return _u[e]=t[n];return e}var Jc=ta("animationend"),Kc=ta("animationiteration"),Fc=ta("animationstart"),Og=ta("transitionrun"),Ug=ta("transitionstart"),Mg=ta("transitioncancel"),Wc=ta("transitionend"),$c=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function Xt(e,t){$c.set(e,t),In(t,[e])}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ot=[],Ma=0,zu=0;function Hi(){for(var e=Ma,t=zu=Ma=0;t<e;){var n=Ot[t];Ot[t++]=null;var a=Ot[t];Ot[t++]=null;var i=Ot[t];Ot[t++]=null;var r=Ot[t];if(Ot[t++]=null,a!==null&&i!==null){var d=a.pending;d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i}r!==0&&Ic(n,i,r)}}function qi(e,t,n,a){Ot[Ma++]=e,Ot[Ma++]=t,Ot[Ma++]=n,Ot[Ma++]=a,zu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ou(e,t,n,a){return qi(e,t,n,a),ki(e)}function na(e,t){return qi(e,null,null,t),ki(e)}function Ic(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-St(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function ki(e){if(50<Il)throw Il=0,Ys=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Da={};function Dg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,a){return new Dg(e,t,n,a)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rn(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Pc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yi(e,t,n,a,i,r){var d=0;if(a=e,typeof e=="function")Uu(e)&&(d=1);else if(typeof e=="string")d=kp(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=jt(31,n,t,i),e.elementType=Se,e.lanes=r,e;case Y:return aa(n.children,i,r,t);case M:d=8,i|=24;break;case T:return e=jt(12,n,t,i|2),e.elementType=T,e.lanes=r,e;case I:return e=jt(13,n,t,i),e.elementType=I,e.lanes=r,e;case ee:return e=jt(19,n,t,i),e.elementType=ee,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:d=10;break e;case V:d=9;break e;case K:d=11;break e;case J:d=14;break e;case oe:d=16,a=null;break e}d=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=jt(d,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function aa(e,t,n,a){return e=jt(7,e,a,t),e.lanes=n,e}function Mu(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function ef(e){var t=jt(18,null,null,0);return t.stateNode=e,t}function Du(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var tf=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var n=tf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Gt(t)},tf.set(e,t),t)}return{value:e,source:t,stack:Gt(t)}}var La=[],Ba=0,Gi=null,zl=0,Mt=[],Dt=0,Rn=null,Wt=1,$t="";function un(e,t){La[Ba++]=zl,La[Ba++]=Gi,Gi=e,zl=t}function nf(e,t,n){Mt[Dt++]=Wt,Mt[Dt++]=$t,Mt[Dt++]=Rn,Rn=e;var a=Wt;e=$t;var i=32-St(a)-1;a&=~(1<<i),n+=1;var r=32-St(t)+i;if(30<r){var d=i-i%5;r=(a&(1<<d)-1).toString(32),a>>=d,i-=d,Wt=1<<32-St(t)+i|n<<i|a,$t=r+e}else Wt=1<<r|n<<i|a,$t=e}function Lu(e){e.return!==null&&(un(e,1),nf(e,1,0))}function Bu(e){for(;e===Gi;)Gi=La[--Ba],La[Ba]=null,zl=La[--Ba],La[Ba]=null;for(;e===Rn;)Rn=Mt[--Dt],Mt[Dt]=null,$t=Mt[--Dt],Mt[Dt]=null,Wt=Mt[--Dt],Mt[Dt]=null}function af(e,t){Mt[Dt++]=Wt,Mt[Dt++]=$t,Mt[Dt++]=Rn,Wt=t.id,$t=t.overflow,Rn=e}var Ie=null,ze=null,pe=!1,Tn=null,Lt=!1,Hu=Error(s(519));function An(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ol(Ut(t,e)),Hu}function lf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[$e]=e,t[ot]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ei.length;n++)de(ei[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),yc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),xc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Eh(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||An(e,!0)}function rf(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:Ie=Ie.return}}function Ha(e){if(e!==Ie)return!1;if(!pe)return rf(e),pe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||no(e.type,e.memoizedProps)),n=!n),n&&ze&&An(e),rf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ze=zh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ze=zh(e)}else t===27?(t=ze,Yn(e.type)?(e=uo,uo=null,ze=e):ze=t):ze=Ie?Ht(e.stateNode.nextSibling):null;return!0}function la(){ze=Ie=null,pe=!1}function qu(){var e=Tn;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),Tn=null),e}function Ol(e){Tn===null?Tn=[e]:Tn.push(e)}var ku=E(null),ia=null,sn=null;function Cn(e,t,n){X(ku,t._currentValue),t._currentValue=n}function on(e){e._currentValue=ku.current,H(ku)}function Yu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Gu(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var d=i.child;r=r.firstContext;e:for(;r!==null;){var g=r;r=i;for(var S=0;S<t.length;S++)if(g.context===t[S]){r.lanes|=n,g=r.alternate,g!==null&&(g.lanes|=n),Yu(r.return,n,e),a||(d=null);break e}r=g.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(s(341));d.lanes|=n,r=d.alternate,r!==null&&(r.lanes|=n),Yu(d,n,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function qa(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var g=i.type;Et(i.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(i===ue.current){if(d=i.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ii):e=[ii])}i=i.return}e!==null&&Gu(t,e,n,a),t.flags|=262144}function Vi(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){ia=e,sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return uf(ia,e)}function Xi(e,t){return ia===null&&ra(e),uf(e,t)}function uf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},sn===null){if(e===null)throw Error(s(308));sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else sn=sn.next=t;return n}var Lg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Bg=l.unstable_scheduleCallback,Hg=l.unstable_NormalPriority,Xe={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new Lg,data:new Map,refCount:0}}function Ul(e){e.refCount--,e.refCount===0&&Bg(Hg,function(){e.controller.abort()})}var Ml=null,Xu=0,ka=0,Ya=null;function qg(e,t){if(Ml===null){var n=Ml=[];Xu=0,ka=Js(),Ya={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Xu++,t.then(sf,sf),t}function sf(){if(--Xu===0&&Ml!==null){Ya!==null&&(Ya.status="fulfilled");var e=Ml;Ml=null,ka=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var of=D.S;D.S=function(e,t){Zd=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qg(e,t),of!==null&&of(e,t)};var ua=E(null);function Qu(){var e=ua.current;return e!==null?e:_e.pooledCache}function Qi(e,t){t===null?X(ua,ua.current):X(ua,t.pool)}function cf(){var e=Qu();return e===null?null:{parent:Xe._currentValue,pool:e}}var Ga=Error(s(460)),Zu=Error(s(474)),Zi=Error(s(542)),Ji={then:function(){}};function ff(e){return e=e.status,e==="fulfilled"||e==="rejected"}function df(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mf(e),e;default:if(typeof t.status=="string")t.then(an,an);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mf(e),e}throw oa=t,Ga}}function sa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(oa=n,Ga):n}}var oa=null;function hf(){if(oa===null)throw Error(s(459));var e=oa;return oa=null,e}function mf(e){if(e===Ga||e===Zi)throw Error(s(483))}var Va=null,Dl=0;function Ki(e){var t=Dl;return Dl+=1,Va===null&&(Va=[]),df(Va,e,t)}function Ll(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fi(e,t){throw t.$$typeof===z?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function gf(e){function t(R,j){if(e){var C=R.deletions;C===null?(R.deletions=[j],R.flags|=16):C.push(j)}}function n(R,j){if(!e)return null;for(;j!==null;)t(R,j),j=j.sibling;return null}function a(R){for(var j=new Map;R!==null;)R.key!==null?j.set(R.key,R):j.set(R.index,R),R=R.sibling;return j}function i(R,j){return R=rn(R,j),R.index=0,R.sibling=null,R}function r(R,j,C){return R.index=C,e?(C=R.alternate,C!==null?(C=C.index,C<j?(R.flags|=67108866,j):C):(R.flags|=67108866,j)):(R.flags|=1048576,j)}function d(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function g(R,j,C,q){return j===null||j.tag!==6?(j=Mu(C,R.mode,q),j.return=R,j):(j=i(j,C),j.return=R,j)}function S(R,j,C,q){var te=C.type;return te===Y?B(R,j,C.props.children,q,C.key):j!==null&&(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===oe&&sa(te)===j.type)?(j=i(j,C.props),Ll(j,C),j.return=R,j):(j=Yi(C.type,C.key,C.props,null,R.mode,q),Ll(j,C),j.return=R,j)}function _(R,j,C,q){return j===null||j.tag!==4||j.stateNode.containerInfo!==C.containerInfo||j.stateNode.implementation!==C.implementation?(j=Du(C,R.mode,q),j.return=R,j):(j=i(j,C.children||[]),j.return=R,j)}function B(R,j,C,q,te){return j===null||j.tag!==7?(j=aa(C,R.mode,q,te),j.return=R,j):(j=i(j,C),j.return=R,j)}function G(R,j,C){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Mu(""+j,R.mode,C),j.return=R,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case k:return C=Yi(j.type,j.key,j.props,null,R.mode,C),Ll(C,j),C.return=R,C;case L:return j=Du(j,R.mode,C),j.return=R,j;case oe:return j=sa(j),G(R,j,C)}if(Ce(j)||Ne(j))return j=aa(j,R.mode,C,null),j.return=R,j;if(typeof j.then=="function")return G(R,Ki(j),C);if(j.$$typeof===U)return G(R,Xi(R,j),C);Fi(R,j)}return null}function w(R,j,C,q){var te=j!==null?j.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return te!==null?null:g(R,j,""+C,q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case k:return C.key===te?S(R,j,C,q):null;case L:return C.key===te?_(R,j,C,q):null;case oe:return C=sa(C),w(R,j,C,q)}if(Ce(C)||Ne(C))return te!==null?null:B(R,j,C,q,null);if(typeof C.then=="function")return w(R,j,Ki(C),q);if(C.$$typeof===U)return w(R,j,Xi(R,C),q);Fi(R,C)}return null}function O(R,j,C,q,te){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return R=R.get(C)||null,g(j,R,""+q,te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case k:return R=R.get(q.key===null?C:q.key)||null,S(j,R,q,te);case L:return R=R.get(q.key===null?C:q.key)||null,_(j,R,q,te);case oe:return q=sa(q),O(R,j,C,q,te)}if(Ce(q)||Ne(q))return R=R.get(C)||null,B(j,R,q,te,null);if(typeof q.then=="function")return O(R,j,C,Ki(q),te);if(q.$$typeof===U)return O(R,j,C,Xi(j,q),te);Fi(j,q)}return null}function $(R,j,C,q){for(var te=null,ye=null,P=j,ce=j=0,ge=null;P!==null&&ce<C.length;ce++){P.index>ce?(ge=P,P=null):ge=P.sibling;var be=w(R,P,C[ce],q);if(be===null){P===null&&(P=ge);break}e&&P&&be.alternate===null&&t(R,P),j=r(be,j,ce),ye===null?te=be:ye.sibling=be,ye=be,P=ge}if(ce===C.length)return n(R,P),pe&&un(R,ce),te;if(P===null){for(;ce<C.length;ce++)P=G(R,C[ce],q),P!==null&&(j=r(P,j,ce),ye===null?te=P:ye.sibling=P,ye=P);return pe&&un(R,ce),te}for(P=a(P);ce<C.length;ce++)ge=O(P,R,ce,C[ce],q),ge!==null&&(e&&ge.alternate!==null&&P.delete(ge.key===null?ce:ge.key),j=r(ge,j,ce),ye===null?te=ge:ye.sibling=ge,ye=ge);return e&&P.forEach(function(Zn){return t(R,Zn)}),pe&&un(R,ce),te}function ne(R,j,C,q){if(C==null)throw Error(s(151));for(var te=null,ye=null,P=j,ce=j=0,ge=null,be=C.next();P!==null&&!be.done;ce++,be=C.next()){P.index>ce?(ge=P,P=null):ge=P.sibling;var Zn=w(R,P,be.value,q);if(Zn===null){P===null&&(P=ge);break}e&&P&&Zn.alternate===null&&t(R,P),j=r(Zn,j,ce),ye===null?te=Zn:ye.sibling=Zn,ye=Zn,P=ge}if(be.done)return n(R,P),pe&&un(R,ce),te;if(P===null){for(;!be.done;ce++,be=C.next())be=G(R,be.value,q),be!==null&&(j=r(be,j,ce),ye===null?te=be:ye.sibling=be,ye=be);return pe&&un(R,ce),te}for(P=a(P);!be.done;ce++,be=C.next())be=O(P,R,ce,be.value,q),be!==null&&(e&&be.alternate!==null&&P.delete(be.key===null?ce:be.key),j=r(be,j,ce),ye===null?te=be:ye.sibling=be,ye=be);return e&&P.forEach(function($p){return t(R,$p)}),pe&&un(R,ce),te}function Ae(R,j,C,q){if(typeof C=="object"&&C!==null&&C.type===Y&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case k:e:{for(var te=C.key;j!==null;){if(j.key===te){if(te=C.type,te===Y){if(j.tag===7){n(R,j.sibling),q=i(j,C.props.children),q.return=R,R=q;break e}}else if(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===oe&&sa(te)===j.type){n(R,j.sibling),q=i(j,C.props),Ll(q,C),q.return=R,R=q;break e}n(R,j);break}else t(R,j);j=j.sibling}C.type===Y?(q=aa(C.props.children,R.mode,q,C.key),q.return=R,R=q):(q=Yi(C.type,C.key,C.props,null,R.mode,q),Ll(q,C),q.return=R,R=q)}return d(R);case L:e:{for(te=C.key;j!==null;){if(j.key===te)if(j.tag===4&&j.stateNode.containerInfo===C.containerInfo&&j.stateNode.implementation===C.implementation){n(R,j.sibling),q=i(j,C.children||[]),q.return=R,R=q;break e}else{n(R,j);break}else t(R,j);j=j.sibling}q=Du(C,R.mode,q),q.return=R,R=q}return d(R);case oe:return C=sa(C),Ae(R,j,C,q)}if(Ce(C))return $(R,j,C,q);if(Ne(C)){if(te=Ne(C),typeof te!="function")throw Error(s(150));return C=te.call(C),ne(R,j,C,q)}if(typeof C.then=="function")return Ae(R,j,Ki(C),q);if(C.$$typeof===U)return Ae(R,j,Xi(R,C),q);Fi(R,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,j!==null&&j.tag===6?(n(R,j.sibling),q=i(j,C),q.return=R,R=q):(n(R,j),q=Mu(C,R.mode,q),q.return=R,R=q),d(R)):n(R,j)}return function(R,j,C,q){try{Dl=0;var te=Ae(R,j,C,q);return Va=null,te}catch(P){if(P===Ga||P===Zi)throw P;var ye=jt(29,P,null,R.mode);return ye.lanes=q,ye.return=R,ye}finally{}}}var ca=gf(!0),pf=gf(!1),_n=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=ki(e),Ic(e,null,n),t}return qi(e,a,t,n),ki(e)}function Bl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,rc(e,n)}}function Fu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=d:r=r.next=d,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wu=!1;function Hl(){if(Wu){var e=Ya;if(e!==null)throw e}}function ql(e,t,n,a){Wu=!1;var i=e.updateQueue;_n=!1;var r=i.firstBaseUpdate,d=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var S=g,_=S.next;S.next=null,d===null?r=_:d.next=_,d=S;var B=e.alternate;B!==null&&(B=B.updateQueue,g=B.lastBaseUpdate,g!==d&&(g===null?B.firstBaseUpdate=_:g.next=_,B.lastBaseUpdate=S))}if(r!==null){var G=i.baseState;d=0,B=_=S=null,g=r;do{var w=g.lane&-536870913,O=w!==g.lane;if(O?(me&w)===w:(a&w)===w){w!==0&&w===ka&&(Wu=!0),B!==null&&(B=B.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var $=e,ne=g;w=t;var Ae=n;switch(ne.tag){case 1:if($=ne.payload,typeof $=="function"){G=$.call(Ae,G,w);break e}G=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=ne.payload,w=typeof $=="function"?$.call(Ae,G,w):$,w==null)break e;G=v({},G,w);break e;case 2:_n=!0}}w=g.callback,w!==null&&(e.flags|=64,O&&(e.flags|=8192),O=i.callbacks,O===null?i.callbacks=[w]:O.push(w))}else O={lane:w,tag:g.tag,payload:g.payload,callback:g.callback,next:null},B===null?(_=B=O,S=G):B=B.next=O,d|=w;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;O=g,g=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);B===null&&(S=G),i.baseState=S,i.firstBaseUpdate=_,i.lastBaseUpdate=B,r===null&&(i.shared.lanes=0),Ln|=d,e.lanes=d,e.memoizedState=G}}function yf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function bf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)yf(n[e],t)}var Xa=E(null),Wi=E(0);function xf(e,t){e=bn,X(Wi,e),X(Xa,t),bn=e|t.baseLanes}function $u(){X(Wi,bn),X(Xa,Xa.current)}function Iu(){bn=Wi.current,H(Xa),H(Wi)}var Nt=E(null),Bt=null;function On(e){var t=e.alternate;X(ke,ke.current&1),X(Nt,e),Bt===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(Bt=e)}function Pu(e){X(ke,ke.current),X(Nt,e),Bt===null&&(Bt=e)}function vf(e){e.tag===22?(X(ke,ke.current),X(Nt,e),Bt===null&&(Bt=e)):Un()}function Un(){X(ke,ke.current),X(Nt,Nt.current)}function Rt(e){H(Nt),Bt===e&&(Bt=null),H(ke)}var ke=E(0);function $i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||io(n)||ro(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cn=0,se=null,Re=null,Qe=null,Ii=!1,Qa=!1,fa=!1,Pi=0,kl=0,Za=null,Yg=0;function He(){throw Error(s(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function ts(e,t,n,a,i,r){return cn=r,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?ad:ps,fa=!1,r=n(a,i),fa=!1,Qa&&(r=Ef(t,n,a,i)),Sf(e),r}function Sf(e){D.H=Vl;var t=Re!==null&&Re.next!==null;if(cn=0,Qe=Re=se=null,Ii=!1,kl=0,Za=null,t)throw Error(s(300));e===null||Ze||(e=e.dependencies,e!==null&&Vi(e)&&(Ze=!0))}function Ef(e,t,n,a){se=e;var i=0;do{if(Qa&&(Za=null),kl=0,Qa=!1,25<=i)throw Error(s(301));if(i+=1,Qe=Re=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}D.H=ld,r=t(n,a)}while(Qa);return r}function Gg(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Yl(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(se.flags|=1024),t}function ns(){var e=Pi!==0;return Pi=0,e}function as(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ls(e){if(Ii){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ii=!1}cn=0,Qe=Re=se=null,Qa=!1,kl=Pi=0,Za=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?se.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ye(){if(Re===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Qe===null?se.memoizedState:Qe.next;if(t!==null)Qe=t,Re=e;else{if(e===null)throw se.alternate===null?Error(s(467)):Error(s(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Qe===null?se.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function er(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yl(e){var t=kl;return kl+=1,Za===null&&(Za=[]),e=df(Za,e,t),t=se,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?ad:ps),e}function tr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yl(e);if(e.$$typeof===U)return Pe(e)}throw Error(s(438,String(e)))}function is(e){var t=null,n=se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=se.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=er(),se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Ue;return t.index++,n}function fn(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=Ye();return rs(t,Re,e)}function rs(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var d=i.next;i.next=r.next,r.next=d}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var g=d=null,S=null,_=t,B=!1;do{var G=_.lane&-536870913;if(G!==_.lane?(me&G)===G:(cn&G)===G){var w=_.revertLane;if(w===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),G===ka&&(B=!0);else if((cn&w)===w){_=_.next,w===ka&&(B=!0);continue}else G={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},S===null?(g=S=G,d=r):S=S.next=G,se.lanes|=w,Ln|=w;G=_.action,fa&&n(r,G),r=_.hasEagerState?_.eagerState:n(r,G)}else w={lane:G,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},S===null?(g=S=w,d=r):S=S.next=w,se.lanes|=G,Ln|=G;_=_.next}while(_!==null&&_!==t);if(S===null?d=r:S.next=g,!Et(r,e.memoizedState)&&(Ze=!0,B&&(n=Ya,n!==null)))throw n;e.memoizedState=r,e.baseState=d,e.baseQueue=S,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function us(e){var t=Ye(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do r=e(r,d.action),d=d.next;while(d!==i);Et(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function jf(e,t,n){var a=se,i=Ye(),r=pe;if(r){if(n===void 0)throw Error(s(407));n=n()}else n=t();var d=!Et((Re||i).memoizedState,n);if(d&&(i.memoizedState=n,Ze=!0),i=i.queue,cs(Tf.bind(null,a,i,e),[e]),i.getSnapshot!==t||d||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,Ja(9,{destroy:void 0},Rf.bind(null,a,i,n,t),null),_e===null)throw Error(s(349));r||(cn&127)!==0||Nf(a,t,n)}return n}function Nf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t=er(),se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rf(e,t,n,a){t.value=n,t.getSnapshot=a,Af(t)&&Cf(e)}function Tf(e,t,n){return n(function(){Af(t)&&Cf(e)})}function Af(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function Cf(e){var t=na(e,2);t!==null&&gt(t,e,2)}function ss(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),fa){En(!0);try{n()}finally{En(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:e},t}function _f(e,t,n,a){return e.baseState=n,rs(e,Re,typeof a=="function"?a:fn)}function Vg(e,t,n,a,i){if(ir(e))throw Error(s(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){r.listeners.push(d)}};D.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,wf(t,r)):(r.next=n.next,t.pending=n.next=r)}}function wf(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=D.T,d={};D.T=d;try{var g=n(i,a),S=D.S;S!==null&&S(d,g),zf(e,t,g)}catch(_){os(e,t,_)}finally{r!==null&&d.types!==null&&(r.types=d.types),D.T=r}}else try{r=n(i,a),zf(e,t,r)}catch(_){os(e,t,_)}}function zf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Of(e,t,a)},function(a){return os(e,t,a)}):Of(e,t,n)}function Of(e,t,n){t.status="fulfilled",t.value=n,Uf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wf(e,n)))}function os(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Uf(t),t=t.next;while(t!==a)}e.action=null}function Uf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Mf(e,t){return t}function Df(e,t){if(pe){var n=_e.formState;if(n!==null){e:{var a=se;if(pe){if(ze){t:{for(var i=ze,r=Lt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Ht(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){ze=Ht(i.nextSibling),a=i.data==="F!";break e}}An(a)}a=!1}a&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mf,lastRenderedState:t},n.queue=a,n=ed.bind(null,se,a),a.dispatch=n,a=ss(!1),r=gs.bind(null,se,!1,a.queue),a=ut(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Vg.bind(null,se,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Lf(e){var t=Ye();return Bf(t,Re,e)}function Bf(e,t,n){if(t=rs(e,t,Mf)[0],e=nr(fn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Yl(t)}catch(d){throw d===Ga?Zi:d}else a=t;t=Ye();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(se.flags|=2048,Ja(9,{destroy:void 0},Xg.bind(null,i,n),null)),[a,r,e]}function Xg(e,t){e.action=t}function Hf(e){var t=Ye(),n=Re;if(n!==null)return Bf(t,n,e);Ye(),t=t.memoizedState,n=Ye();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ja(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=se.updateQueue,t===null&&(t=er(),se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function qf(){return Ye().memoizedState}function ar(e,t,n,a){var i=ut();se.flags|=e,i.memoizedState=Ja(1|t,{destroy:void 0},n,a===void 0?null:a)}function lr(e,t,n,a){var i=Ye();a=a===void 0?null:a;var r=i.memoizedState.inst;Re!==null&&a!==null&&es(a,Re.memoizedState.deps)?i.memoizedState=Ja(t,r,n,a):(se.flags|=e,i.memoizedState=Ja(1|t,r,n,a))}function kf(e,t){ar(8390656,8,e,t)}function cs(e,t){lr(2048,8,e,t)}function Qg(e){se.flags|=4;var t=se.updateQueue;if(t===null)t=er(),se.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Yf(e){var t=Ye().memoizedState;return Qg({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Gf(e,t){return lr(4,2,e,t)}function Vf(e,t){return lr(4,4,e,t)}function Xf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qf(e,t,n){n=n!=null?n.concat([e]):null,lr(4,4,Xf.bind(null,t,e),n)}function fs(){}function Zf(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&es(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Jf(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&es(t,a[1]))return a[0];if(a=e(),fa){En(!0);try{e()}finally{En(!1)}}return n.memoizedState=[a,t],a}function ds(e,t,n){return n===void 0||(cn&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Kd(),se.lanes|=e,Ln|=e,n)}function Kf(e,t,n,a){return Et(n,t)?n:Xa.current!==null?(e=ds(e,n,a),Et(e,t)||(Ze=!0),e):(cn&42)===0||(cn&1073741824)!==0&&(me&261930)===0?(Ze=!0,e.memoizedState=n):(e=Kd(),se.lanes|=e,Ln|=e,t)}function Ff(e,t,n,a,i){var r=Q.p;Q.p=r!==0&&8>r?r:8;var d=D.T,g={};D.T=g,gs(e,!1,t,n);try{var S=i(),_=D.S;if(_!==null&&_(g,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var B=kg(S,a);Gl(e,t,B,Ct(e))}else Gl(e,t,a,Ct(e))}catch(G){Gl(e,t,{then:function(){},status:"rejected",reason:G},Ct())}finally{Q.p=r,d!==null&&g.types!==null&&(d.types=g.types),D.T=d}}function Zg(){}function hs(e,t,n,a){if(e.tag!==5)throw Error(s(476));var i=Wf(e).queue;Ff(e,i,t,ae,n===null?Zg:function(){return $f(e),n(a)})}function Wf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $f(e){var t=Wf(e);t.next===null&&(t=e.alternate.memoizedState),Gl(e,t.next.queue,{},Ct())}function ms(){return Pe(ii)}function If(){return Ye().memoizedState}function Pf(){return Ye().memoizedState}function Jg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ct();e=wn(n);var a=zn(t,e,n);a!==null&&(gt(a,t,n),Bl(a,t,n)),t={cache:Vu()},e.payload=t;return}t=t.return}}function Kg(e,t,n){var a=Ct();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ir(e)?td(t,n):(n=Ou(e,t,n,a),n!==null&&(gt(n,e,a),nd(n,t,a)))}function ed(e,t,n){var a=Ct();Gl(e,t,n,a)}function Gl(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ir(e))td(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var d=t.lastRenderedState,g=r(d,n);if(i.hasEagerState=!0,i.eagerState=g,Et(g,d))return qi(e,t,i,0),_e===null&&Hi(),!1}catch{}finally{}if(n=Ou(e,t,i,a),n!==null)return gt(n,e,a),nd(n,t,a),!0}return!1}function gs(e,t,n,a){if(a={lane:2,revertLane:Js(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ir(e)){if(t)throw Error(s(479))}else t=Ou(e,n,a,2),t!==null&&gt(t,e,2)}function ir(e){var t=e.alternate;return e===se||t!==null&&t===se}function td(e,t){Qa=Ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,rc(e,n)}}var Vl={readContext:Pe,use:tr,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};Vl.useEffectEvent=He;var ad={readContext:Pe,use:tr,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:kf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ar(4194308,4,Xf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ar(4194308,4,e,t)},useInsertionEffect:function(e,t){ar(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var a=e();if(fa){En(!0);try{e()}finally{En(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ut();if(n!==void 0){var i=n(t);if(fa){En(!0);try{n(t)}finally{En(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Kg.bind(null,se,e),[a.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=ss(e);var t=e.queue,n=ed.bind(null,se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fs,useDeferredValue:function(e,t){var n=ut();return ds(n,e,t)},useTransition:function(){var e=ss(!1);return e=Ff.bind(null,se,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=se,i=ut();if(pe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),_e===null)throw Error(s(349));(me&127)!==0||Nf(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,kf(Tf.bind(null,a,r,e),[e]),a.flags|=2048,Ja(9,{destroy:void 0},Rf.bind(null,a,r,n,t),null),n},useId:function(){var e=ut(),t=_e.identifierPrefix;if(pe){var n=$t,a=Wt;n=(a&~(1<<32-St(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Pi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Yg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ms,useFormState:Df,useActionState:Df,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=gs.bind(null,se,!0,n),n.dispatch=t,[e,t]},useMemoCache:is,useCacheRefresh:function(){return ut().memoizedState=Jg.bind(null,se)},useEffectEvent:function(e){var t=ut(),n={impl:e};return t.memoizedState=n,function(){if((ve&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},ps={readContext:Pe,use:tr,useCallback:Zf,useContext:Pe,useEffect:cs,useImperativeHandle:Qf,useInsertionEffect:Gf,useLayoutEffect:Vf,useMemo:Jf,useReducer:nr,useRef:qf,useState:function(){return nr(fn)},useDebugValue:fs,useDeferredValue:function(e,t){var n=Ye();return Kf(n,Re.memoizedState,e,t)},useTransition:function(){var e=nr(fn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:jf,useId:If,useHostTransitionStatus:ms,useFormState:Lf,useActionState:Lf,useOptimistic:function(e,t){var n=Ye();return _f(n,Re,e,t)},useMemoCache:is,useCacheRefresh:Pf};ps.useEffectEvent=Yf;var ld={readContext:Pe,use:tr,useCallback:Zf,useContext:Pe,useEffect:cs,useImperativeHandle:Qf,useInsertionEffect:Gf,useLayoutEffect:Vf,useMemo:Jf,useReducer:us,useRef:qf,useState:function(){return us(fn)},useDebugValue:fs,useDeferredValue:function(e,t){var n=Ye();return Re===null?ds(n,e,t):Kf(n,Re.memoizedState,e,t)},useTransition:function(){var e=us(fn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Yl(e),t]},useSyncExternalStore:jf,useId:If,useHostTransitionStatus:ms,useFormState:Hf,useActionState:Hf,useOptimistic:function(e,t){var n=Ye();return Re!==null?_f(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:is,useCacheRefresh:Pf};ld.useEffectEvent=Yf;function ys(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ct(),i=wn(a);i.payload=t,n!=null&&(i.callback=n),t=zn(e,i,a),t!==null&&(gt(t,e,a),Bl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ct(),i=wn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zn(e,i,a),t!==null&&(gt(t,e,a),Bl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),a=wn(n);a.tag=2,t!=null&&(a.callback=t),t=zn(e,a,n),t!==null&&(gt(t,e,n),Bl(t,e,n))}};function id(e,t,n,a,i,r,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,d):t.prototype&&t.prototype.isPureReactComponent?!_l(n,a)||!_l(i,r):!0}function rd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function da(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function ud(e){Bi(e)}function sd(e){console.error(e)}function od(e){Bi(e)}function rr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function cd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function xs(e,t,n){return n=wn(n),n.tag=3,n.payload={element:null},n.callback=function(){rr(e,t)},n}function fd(e){return e=wn(e),e.tag=3,e}function dd(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){cd(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){cd(t,n,a),typeof i!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var g=a.stack;this.componentDidCatch(a.value,{componentStack:g!==null?g:""})})}function Fg(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&qa(t,n,i,!0),n=Nt.current,n!==null){switch(n.tag){case 31:case 13:return Bt===null?br():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Ji?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Xs(e,a,i)),!1;case 22:return n.flags|=65536,a===Ji?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Xs(e,a,i)),!1}throw Error(s(435,n.tag))}return Xs(e,a,i),br(),!1}if(pe)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Hu&&(e=Error(s(422),{cause:a}),Ol(Ut(e,n)))):(a!==Hu&&(t=Error(s(423),{cause:a}),Ol(Ut(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Ut(a,n),i=xs(e.stateNode,a,i),Fu(e,i),qe!==4&&(qe=2)),!1;var r=Error(s(520),{cause:a});if(r=Ut(r,n),$l===null?$l=[r]:$l.push(r),qe!==4&&(qe=2),t===null)return!0;a=Ut(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=xs(n.stateNode,a,e),Fu(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=fd(i),dd(i,e,n,a),Fu(n,i),!1}n=n.return}while(n!==null);return!1}var vs=Error(s(461)),Ze=!1;function et(e,t,n,a){t.child=e===null?pf(t,null,n,a):ca(t,e.child,n,a)}function hd(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var d={};for(var g in a)g!=="ref"&&(d[g]=a[g])}else d=a;return ra(t),a=ts(e,t,n,d,r,i),g=ns(),e!==null&&!Ze?(as(e,t,i),dn(e,t,i)):(pe&&g&&Lu(t),t.flags|=1,et(e,t,a,i),t.child)}function md(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!Uu(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,gd(e,t,r,a,i)):(e=Yi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Cs(e,i)){var d=r.memoizedProps;if(n=n.compare,n=n!==null?n:_l,n(d,a)&&e.ref===t.ref)return dn(e,t,i)}return t.flags|=1,e=rn(r,a),e.ref=t.ref,e.return=t,t.child=e}function gd(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(_l(r,a)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=a=r,Cs(e,i))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,dn(e,t,i)}return Ss(e,t,n,a,i)}function pd(e,t,n,a){var i=a.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~r}else a=0,t.child=null;return yd(e,t,r,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qi(t,r!==null?r.cachePool:null),r!==null?xf(t,r):$u(),vf(t);else return a=t.lanes=536870912,yd(e,t,r!==null?r.baseLanes|n:n,n,a)}else r!==null?(Qi(t,r.cachePool),xf(t,r),Un(),t.memoizedState=null):(e!==null&&Qi(t,null),$u(),Un());return et(e,t,i,n),t.child}function Xl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yd(e,t,n,a,i){var r=Qu();return r=r===null?null:{parent:Xe._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Qi(t,null),$u(),vf(t),e!==null&&qa(e,t,a,!0),t.childLanes=i,null}function ur(e,t){return t=or({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function bd(e,t,n){return ca(t,e.child,null,n),e=ur(t,t.pendingProps),e.flags|=2,Rt(t),t.memoizedState=null,e}function Wg(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(a.mode==="hidden")return e=ur(t,a),t.lanes=536870912,Xl(null,e);if(Pu(t),(e=ze)?(e=wh(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:Wt,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},n=ef(e),n.return=t,t.child=n,Ie=t,ze=null)):e=null,e===null)throw An(t);return t.lanes=536870912,null}return ur(t,a)}var r=e.memoizedState;if(r!==null){var d=r.dehydrated;if(Pu(t),i)if(t.flags&256)t.flags&=-257,t=bd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ze||qa(e,t,n,!1),i=(n&e.childLanes)!==0,Ze||i){if(a=_e,a!==null&&(d=uc(a,n),d!==0&&d!==r.retryLane))throw r.retryLane=d,na(e,d),gt(a,e,d),vs;br(),t=bd(e,t,n)}else e=r.treeContext,ze=Ht(d.nextSibling),Ie=t,pe=!0,Tn=null,Lt=!1,e!==null&&af(t,e),t=ur(t,a),t.flags|=4096;return t}return e=rn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function sr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ss(e,t,n,a,i){return ra(t),n=ts(e,t,n,a,void 0,i),a=ns(),e!==null&&!Ze?(as(e,t,i),dn(e,t,i)):(pe&&a&&Lu(t),t.flags|=1,et(e,t,n,i),t.child)}function xd(e,t,n,a,i,r){return ra(t),t.updateQueue=null,n=Ef(t,a,n,i),Sf(e),a=ns(),e!==null&&!Ze?(as(e,t,r),dn(e,t,r)):(pe&&a&&Lu(t),t.flags|=1,et(e,t,n,r),t.child)}function vd(e,t,n,a,i){if(ra(t),t.stateNode===null){var r=Da,d=n.contextType;typeof d=="object"&&d!==null&&(r=Pe(d)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},Ju(t),d=n.contextType,r.context=typeof d=="object"&&d!==null?Pe(d):Da,r.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(ys(t,n,d,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(d=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),d!==r.state&&bs.enqueueReplaceState(r,r.state,null),ql(t,a,r,i),Hl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var g=t.memoizedProps,S=da(n,g);r.props=S;var _=r.context,B=n.contextType;d=Da,typeof B=="object"&&B!==null&&(d=Pe(B));var G=n.getDerivedStateFromProps;B=typeof G=="function"||typeof r.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,B||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(g||_!==d)&&rd(t,r,a,d),_n=!1;var w=t.memoizedState;r.state=w,ql(t,a,r,i),Hl(),_=t.memoizedState,g||w!==_||_n?(typeof G=="function"&&(ys(t,n,G,a),_=t.memoizedState),(S=_n||id(t,n,S,a,w,_,d))?(B||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=_),r.props=a,r.state=_,r.context=d,a=S):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Ku(e,t),d=t.memoizedProps,B=da(n,d),r.props=B,G=t.pendingProps,w=r.context,_=n.contextType,S=Da,typeof _=="object"&&_!==null&&(S=Pe(_)),g=n.getDerivedStateFromProps,(_=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d!==G||w!==S)&&rd(t,r,a,S),_n=!1,w=t.memoizedState,r.state=w,ql(t,a,r,i),Hl();var O=t.memoizedState;d!==G||w!==O||_n||e!==null&&e.dependencies!==null&&Vi(e.dependencies)?(typeof g=="function"&&(ys(t,n,g,a),O=t.memoizedState),(B=_n||id(t,n,B,a,w,O,S)||e!==null&&e.dependencies!==null&&Vi(e.dependencies))?(_||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,O,S),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,O,S)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),r.props=a,r.state=O,r.context=S,a=B):(typeof r.componentDidUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,sr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=ca(t,e.child,null,i),t.child=ca(t,null,n,i)):et(e,t,n,i),t.memoizedState=r.state,e=t.child):e=dn(e,t,i),e}function Sd(e,t,n,a){return la(),t.flags|=256,et(e,t,n,a),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function js(e){return{baseLanes:e,cachePool:cf()}}function Ns(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=At),e}function Ed(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,d;if((d=r)||(d=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(i?On(t):Un(),(e=ze)?(e=wh(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:Wt,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},n=ef(e),n.return=t,t.child=n,Ie=t,ze=null)):e=null,e===null)throw An(t);return ro(e)?t.lanes=32:t.lanes=536870912,null}var g=a.children;return a=a.fallback,i?(Un(),i=t.mode,g=or({mode:"hidden",children:g},i),a=aa(a,i,n,null),g.return=t,a.return=t,g.sibling=a,t.child=g,a=t.child,a.memoizedState=js(n),a.childLanes=Ns(e,d,n),t.memoizedState=Es,Xl(null,a)):(On(t),Rs(t,g))}var S=e.memoizedState;if(S!==null&&(g=S.dehydrated,g!==null)){if(r)t.flags&256?(On(t),t.flags&=-257,t=Ts(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),g=a.fallback,i=t.mode,a=or({mode:"visible",children:a.children},i),g=aa(g,i,n,null),g.flags|=2,a.return=t,g.return=t,a.sibling=g,t.child=a,ca(t,e.child,null,n),a=t.child,a.memoizedState=js(n),a.childLanes=Ns(e,d,n),t.memoizedState=Es,t=Xl(null,a));else if(On(t),ro(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var _=d.dgst;d=_,a=Error(s(419)),a.stack="",a.digest=d,Ol({value:a,source:null,stack:null}),t=Ts(e,t,n)}else if(Ze||qa(e,t,n,!1),d=(n&e.childLanes)!==0,Ze||d){if(d=_e,d!==null&&(a=uc(d,n),a!==0&&a!==S.retryLane))throw S.retryLane=a,na(e,a),gt(d,e,a),vs;io(g)||br(),t=Ts(e,t,n)}else io(g)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,ze=Ht(g.nextSibling),Ie=t,pe=!0,Tn=null,Lt=!1,e!==null&&af(t,e),t=Rs(t,a.children),t.flags|=4096);return t}return i?(Un(),g=a.fallback,i=t.mode,S=e.child,_=S.sibling,a=rn(S,{mode:"hidden",children:a.children}),a.subtreeFlags=S.subtreeFlags&65011712,_!==null?g=rn(_,g):(g=aa(g,i,n,null),g.flags|=2),g.return=t,a.return=t,a.sibling=g,t.child=a,Xl(null,a),a=t.child,g=e.child.memoizedState,g===null?g=js(n):(i=g.cachePool,i!==null?(S=Xe._currentValue,i=i.parent!==S?{parent:S,pool:S}:i):i=cf(),g={baseLanes:g.baseLanes|n,cachePool:i}),a.memoizedState=g,a.childLanes=Ns(e,d,n),t.memoizedState=Es,Xl(e.child,a)):(On(t),n=e.child,e=n.sibling,n=rn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Rs(e,t){return t=or({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function or(e,t){return e=jt(22,e,null,t),e.lanes=0,e}function Ts(e,t,n){return ca(t,e.child,null,n),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Yu(e.return,t,n)}function As(e,t,n,a,i,r){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:r}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=i,d.treeForkCount=r)}function Nd(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;a=a.children;var d=ke.current,g=(d&2)!==0;if(g?(d=d&1|2,t.flags|=128):d&=1,X(ke,d),et(e,t,a,n),a=pe?zl:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,n,t);else if(e.tag===19)jd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$i(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),As(t,!1,i,n,r,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$i(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}As(t,!0,n,null,r,a);break;case"together":As(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vi(e)))}function $g(e,t,n){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),Cn(t,Xe,e.memoizedState.cache),la();break;case 27:case 5:Kn(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:Cn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Pu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(On(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ed(e,t,n):(On(t),e=dn(e,t,n),e!==null?e.sibling:null);On(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(qa(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Nd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ke,ke.current),a)break;return null;case 22:return t.lanes=0,pd(e,t,n,t.pendingProps);case 24:Cn(t,Xe,e.memoizedState.cache)}return dn(e,t,n)}function Rd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Cs(e,n)&&(t.flags&128)===0)return Ze=!1,$g(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,pe&&(t.flags&1048576)!==0&&nf(t,zl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=sa(t.elementType),t.type=e,typeof e=="function")Uu(e)?(a=da(e,a),t.tag=1,t=vd(null,t,e,a,n)):(t.tag=0,t=Ss(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===K){t.tag=11,t=hd(null,t,e,a,n);break e}else if(i===J){t.tag=14,t=md(null,t,e,a,n);break e}}throw t=we(e)||e,Error(s(306,t,""))}}return t;case 0:return Ss(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=da(a,t.pendingProps),vd(e,t,a,i,n);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,Ku(e,t),ql(t,a,null,n);var d=t.memoizedState;if(a=d.cache,Cn(t,Xe,a),a!==r.cache&&Gu(t,[Xe],n,!0),Hl(),a=d.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Sd(e,t,a,n);break e}else if(a!==i){i=Ut(Error(s(424)),t),Ol(i),t=Sd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=Ht(e.firstChild),Ie=t,pe=!0,Tn=null,Lt=!0,n=pf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(la(),a===i){t=dn(e,t,n);break e}et(e,t,a,n)}t=t.child}return t;case 26:return sr(e,t),e===null?(n=Lh(t.type,null,t.pendingProps,null))?t.memoizedState=n:pe||(n=t.type,e=t.pendingProps,a=Rr(W.current).createElement(n),a[$e]=t,a[ot]=e,tt(a,n,e),Fe(a),t.stateNode=a):t.memoizedState=Lh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Kn(t),e===null&&pe&&(a=t.stateNode=Uh(t.type,t.pendingProps,W.current),Ie=t,Lt=!0,i=ze,Yn(t.type)?(uo=i,ze=Ht(a.firstChild)):ze=i),et(e,t,t.pendingProps.children,n),sr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((i=a=ze)&&(a=Ap(a,t.type,t.pendingProps,Lt),a!==null?(t.stateNode=a,Ie=t,ze=Ht(a.firstChild),Lt=!1,i=!0):i=!1),i||An(t)),Kn(t),i=t.type,r=t.pendingProps,d=e!==null?e.memoizedProps:null,a=r.children,no(i,r)?a=null:d!==null&&no(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=ts(e,t,Gg,null,null,n),ii._currentValue=i),sr(e,t),et(e,t,a,n),t.child;case 6:return e===null&&pe&&((e=n=ze)&&(n=Cp(n,t.pendingProps,Lt),n!==null?(t.stateNode=n,Ie=t,ze=null,e=!0):e=!1),e||An(t)),null;case 13:return Ed(e,t,n);case 4:return Ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ca(t,null,a,n):et(e,t,a,n),t.child;case 11:return hd(e,t,t.type,t.pendingProps,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Cn(t,t.type,a.value),et(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,ra(t),i=Pe(i),a=a(i),t.flags|=1,et(e,t,a,n),t.child;case 14:return md(e,t,t.type,t.pendingProps,n);case 15:return gd(e,t,t.type,t.pendingProps,n);case 19:return Nd(e,t,n);case 31:return Wg(e,t,n);case 22:return pd(e,t,n,t.pendingProps);case 24:return ra(t),a=Pe(Xe),e===null?(i=Qu(),i===null&&(i=_e,r=Vu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},Ju(t),Cn(t,Xe,i)):((e.lanes&n)!==0&&(Ku(e,t),ql(t,null,null,n),Hl()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Cn(t,Xe,a)):(a=r.cache,Cn(t,Xe,a),a!==i.cache&&Gu(t,[Xe],n,!0))),et(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function hn(e){e.flags|=4}function _s(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Id())e.flags|=8192;else throw oa=Ji,Zu}else e.flags&=-16777217}function Td(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yh(t))if(Id())e.flags|=8192;else throw oa=Ji,Zu}function cr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lc():536870912,e.lanes|=t,$a|=t)}function Ql(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Ig(e,t,n){var a=t.pendingProps;switch(Bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),on(Xe),De(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?hn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qu())),Oe(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(hn(t),r!==null?(Oe(t),Td(t,r)):(Oe(t),_s(t,i,null,a,n))):r?r!==e.memoizedState?(hn(t),Oe(t),Td(t,r)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&hn(t),Oe(t),_s(t,i,e,a,n)),null;case 27:if(Fn(t),n=W.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&hn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Oe(t),null}e=F.current,Ha(t)?lf(t):(e=Uh(i,a,n),t.stateNode=e,hn(t))}return Oe(t),null;case 5:if(Fn(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&hn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Oe(t),null}if(r=F.current,Ha(t))lf(t);else{var d=Rr(W.current);switch(r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?d.createElement(i,{is:a.is}):d.createElement(i)}}r[$e]=t,r[ot]=a;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=r;e:switch(tt(r,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&hn(t)}}return Oe(t),_s(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&hn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=W.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Ie,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Eh(e.nodeValue,n)),e||An(t,!0)}else e=Rr(e).createTextNode(a),e[$e]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ha(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[$e]=t}else la(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Rt(t),t):(Rt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Oe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ha(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[$e]=t}else la(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else i=qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Rt(t),t):(Rt(t),null)}return Rt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cr(t,t.updateQueue),Oe(t),null);case 4:return De(),e===null&&$s(t.stateNode.containerInfo),Oe(t),null;case 10:return on(t.type),Oe(t),null;case 19:if(H(ke),a=t.memoizedState,a===null)return Oe(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Ql(a,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=$i(e),r!==null){for(t.flags|=128,Ql(a,!1),e=r.updateQueue,t.updateQueue=e,cr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Pc(n,e),n=n.sibling;return X(ke,ke.current&1|2),pe&&un(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&xt()>gr&&(t.flags|=128,i=!0,Ql(a,!1),t.lanes=4194304)}else{if(!i)if(e=$i(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,cr(t,e),Ql(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!pe)return Oe(t),null}else 2*xt()-a.renderingStartTime>gr&&n!==536870912&&(t.flags|=128,i=!0,Ql(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xt(),e.sibling=null,n=ke.current,X(ke,i?n&1|2:n&1),pe&&un(t,a.treeForkCount),e):(Oe(t),null);case 22:case 23:return Rt(t),Iu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&cr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&H(ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),on(Xe),Oe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Pg(e,t){switch(Bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(Xe),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fn(t),null;case 31:if(t.memoizedState!==null){if(Rt(t),t.alternate===null)throw Error(s(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(ke),null;case 4:return De(),null;case 10:return on(t.type),null;case 22:case 23:return Rt(t),Iu(),e!==null&&H(ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return on(Xe),null;case 25:return null;default:return null}}function Ad(e,t){switch(Bu(t),t.tag){case 3:on(Xe),De();break;case 26:case 27:case 5:Fn(t);break;case 4:De();break;case 31:t.memoizedState!==null&&Rt(t);break;case 13:Rt(t);break;case 19:H(ke);break;case 10:on(t.type);break;case 22:case 23:Rt(t),Iu(),e!==null&&H(ua);break;case 24:on(Xe)}}function Zl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,d=n.inst;a=r(),d.destroy=a}n=n.next}while(n!==i)}}catch(g){je(t,t.return,g)}}function Mn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var d=a.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,i=t;var S=n,_=g;try{_()}catch(B){je(i,S,B)}}}a=a.next}while(a!==r)}}catch(B){je(t,t.return,B)}}function Cd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{bf(t,n)}catch(a){je(e,e.return,a)}}}function _d(e,t,n){n.props=da(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){je(e,t,a)}}function Jl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){je(e,t,i)}}function It(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){je(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){je(e,t,i)}else n.current=null}function wd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){je(e,e.return,i)}}function ws(e,t,n){try{var a=e.stateNode;Sp(a,e.type,n,t),a[ot]=t}catch(i){je(e,e.return,i)}}function zd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Yn(e.type)||e.tag===4}function zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Yn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(a!==4&&(a===27&&Yn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}function fr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Yn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(fr(e,t,n),e=e.sibling;e!==null;)fr(e,t,n),e=e.sibling}function Od(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,a,n),t[$e]=e,t[ot]=n}catch(r){je(e,e.return,r)}}var mn=!1,Je=!1,Us=!1,Ud=typeof WeakSet=="function"?WeakSet:Set,We=null;function ep(e,t){if(e=e.containerInfo,eo=Or,e=Xc(e),Tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var d=0,g=-1,S=-1,_=0,B=0,G=e,w=null;t:for(;;){for(var O;G!==n||i!==0&&G.nodeType!==3||(g=d+i),G!==r||a!==0&&G.nodeType!==3||(S=d+a),G.nodeType===3&&(d+=G.nodeValue.length),(O=G.firstChild)!==null;)w=G,G=O;for(;;){if(G===e)break t;if(w===n&&++_===i&&(g=d),w===r&&++B===a&&(S=d),(O=G.nextSibling)!==null)break;G=w,w=G.parentNode}G=O}n=g===-1||S===-1?null:{start:g,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Or=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var $=da(n.type,i);e=a.getSnapshotBeforeUpdate($,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){je(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)lo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Md(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:pn(e,n),a&4&&Zl(5,n);break;case 1:if(pn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){je(n,n.return,d)}else{var i=da(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){je(n,n.return,d)}}a&64&&Cd(n),a&512&&Jl(n,n.return);break;case 3:if(pn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{bf(e,t)}catch(d){je(n,n.return,d)}}break;case 27:t===null&&a&4&&Od(n);case 26:case 5:pn(e,n),t===null&&a&4&&wd(n),a&512&&Jl(n,n.return);break;case 12:pn(e,n);break;case 31:pn(e,n),a&4&&Bd(e,n);break;case 13:pn(e,n),a&4&&Hd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=op.bind(null,n),_p(e,n))));break;case 22:if(a=n.memoizedState!==null||mn,!a){t=t!==null&&t.memoizedState!==null||Je,i=mn;var r=Je;mn=a,(Je=t)&&!r?yn(e,n,(n.subtreeFlags&8772)!==0):pn(e,n),mn=i,Je=r}break;case 30:break;default:pn(e,n)}}function Dd(e){var t=e.alternate;t!==null&&(e.alternate=null,Dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ou(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,ft=!1;function gn(e,t,n){for(n=n.child;n!==null;)Ld(e,t,n),n=n.sibling}function Ld(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 26:Je||It(n,t),gn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Je||It(n,t);var a=Le,i=ft;Yn(n.type)&&(Le=n.stateNode,ft=!1),gn(e,t,n),ni(n.stateNode),Le=a,ft=i;break;case 5:Je||It(n,t);case 6:if(a=Le,i=ft,Le=null,gn(e,t,n),Le=a,ft=i,Le!==null)if(ft)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode)}catch(r){je(n,t,r)}else try{Le.removeChild(n.stateNode)}catch(r){je(n,t,r)}break;case 18:Le!==null&&(ft?(e=Le,Ch(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),il(e)):Ch(Le,n.stateNode));break;case 4:a=Le,i=ft,Le=n.stateNode.containerInfo,ft=!0,gn(e,t,n),Le=a,ft=i;break;case 0:case 11:case 14:case 15:Mn(2,n,t),Je||Mn(4,n,t),gn(e,t,n);break;case 1:Je||(It(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&_d(n,t,a)),gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:Je=(a=Je)||n.memoizedState!==null,gn(e,t,n),Je=a;break;default:gn(e,t,n)}}function Bd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{il(e)}catch(n){je(t,t.return,n)}}}function Hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(n){je(t,t.return,n)}}function tp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ud),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ud),t;default:throw Error(s(435,e.tag))}}function dr(e,t){var n=tp(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=cp.bind(null,e,a);a.then(i,i)}})}function dt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(Yn(g.type)){Le=g.stateNode,ft=!1;break e}break;case 5:Le=g.stateNode,ft=!1;break e;case 3:case 4:Le=g.stateNode.containerInfo,ft=!0;break e}g=g.return}if(Le===null)throw Error(s(160));Ld(r,d,i),Le=null,ft=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}var Qt=null;function qd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),ht(e),a&4&&(Mn(3,e,e.return),Zl(3,e),Mn(5,e,e.return));break;case 1:dt(t,e),ht(e),a&512&&(Je||n===null||It(n,n.return)),a&64&&mn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Qt;if(dt(t,e),ht(e),a&512&&(Je||n===null||It(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[vl]||r[$e]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),tt(r,a,n),r[$e]=e,Fe(r),a=r;break e;case"link":var d=qh("link","href",i).get(a+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(r=d[g],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}r=i.createElement(a),tt(r,a,n),i.head.appendChild(r);break;case"meta":if(d=qh("meta","content",i).get(a+(n.content||""))){for(g=0;g<d.length;g++)if(r=d[g],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}r=i.createElement(a),tt(r,a,n),i.head.appendChild(r);break;default:throw Error(s(468,a))}r[$e]=e,Fe(r),a=r}e.stateNode=a}else kh(i,e.type,e.stateNode);else e.stateNode=Hh(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?kh(i,e.type,e.stateNode):Hh(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ws(e,e.memoizedProps,n.memoizedProps)}break;case 27:dt(t,e),ht(e),a&512&&(Je||n===null||It(n,n.return)),n!==null&&a&4&&ws(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dt(t,e),ht(e),a&512&&(Je||n===null||It(n,n.return)),e.flags&32){i=e.stateNode;try{Ca(i,"")}catch($){je(e,e.return,$)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,ws(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Us=!0);break;case 6:if(dt(t,e),ht(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch($){je(e,e.return,$)}}break;case 3:if(Cr=null,i=Qt,Qt=Tr(t.containerInfo),dt(t,e),Qt=i,ht(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{il(t.containerInfo)}catch($){je(e,e.return,$)}Us&&(Us=!1,kd(e));break;case 4:a=Qt,Qt=Tr(e.stateNode.containerInfo),dt(t,e),ht(e),Qt=a;break;case 12:dt(t,e),ht(e);break;case 31:dt(t,e),ht(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dr(e,a)));break;case 13:dt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(mr=xt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dr(e,a)));break;case 22:i=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,_=mn,B=Je;if(mn=_||i,Je=B||S,dt(t,e),Je=B,mn=_,ht(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||S||mn||Je||ha(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(r=S.stateNode,i)d=r.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=S.stateNode;var G=S.memoizedProps.style,w=G!=null&&G.hasOwnProperty("display")?G.display:null;g.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch($){je(S,S.return,$)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=i?"":S.memoizedProps}catch($){je(S,S.return,$)}}}else if(t.tag===18){if(n===null){S=t;try{var O=S.stateNode;i?_h(O,!0):_h(S.stateNode,!1)}catch($){je(S,S.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,dr(e,n))));break;case 19:dt(t,e),ht(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,dr(e,a)));break;case 30:break;case 21:break;default:dt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(zd(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,r=zs(e);fr(e,r,i);break;case 5:var d=n.stateNode;n.flags&32&&(Ca(d,""),n.flags&=-33);var g=zs(e);fr(e,g,d);break;case 3:case 4:var S=n.stateNode.containerInfo,_=zs(e);Os(e,_,S);break;default:throw Error(s(161))}}catch(B){je(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Md(e,t.alternate,t),t=t.sibling}function ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Mn(4,t,t.return),ha(t);break;case 1:It(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&_d(t,t.return,n),ha(t);break;case 27:ni(t.stateNode);case 26:case 5:It(t,t.return),ha(t);break;case 22:t.memoizedState===null&&ha(t);break;case 30:ha(t);break;default:ha(t)}e=e.sibling}}function yn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,d=r.flags;switch(r.tag){case 0:case 11:case 15:yn(i,r,n),Zl(4,r);break;case 1:if(yn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(_){je(a,a.return,_)}if(a=r,i=a.updateQueue,i!==null){var g=a.stateNode;try{var S=i.shared.hiddenCallbacks;if(S!==null)for(i.shared.hiddenCallbacks=null,i=0;i<S.length;i++)yf(S[i],g)}catch(_){je(a,a.return,_)}}n&&d&64&&Cd(r),Jl(r,r.return);break;case 27:Od(r);case 26:case 5:yn(i,r,n),n&&a===null&&d&4&&wd(r),Jl(r,r.return);break;case 12:yn(i,r,n);break;case 31:yn(i,r,n),n&&d&4&&Bd(i,r);break;case 13:yn(i,r,n),n&&d&4&&Hd(i,r);break;case 22:r.memoizedState===null&&yn(i,r,n),Jl(r,r.return);break;case 30:break;default:yn(i,r,n)}t=t.sibling}}function Ms(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ul(n))}function Ds(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e))}function Zt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yd(e,t,n,a),t=t.sibling}function Yd(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,n,a),i&2048&&Zl(9,t);break;case 1:Zt(e,t,n,a);break;case 3:Zt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e)));break;case 12:if(i&2048){Zt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,d=r.id,g=r.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){je(t,t.return,S)}}else Zt(e,t,n,a);break;case 31:Zt(e,t,n,a);break;case 13:Zt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,d=t.alternate,t.memoizedState!==null?r._visibility&2?Zt(e,t,n,a):Kl(e,t):r._visibility&2?Zt(e,t,n,a):(r._visibility|=2,Ka(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Ms(d,t);break;case 24:Zt(e,t,n,a),i&2048&&Ds(t.alternate,t);break;default:Zt(e,t,n,a)}}function Ka(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,d=t,g=n,S=a,_=d.flags;switch(d.tag){case 0:case 11:case 15:Ka(r,d,g,S,i),Zl(8,d);break;case 23:break;case 22:var B=d.stateNode;d.memoizedState!==null?B._visibility&2?Ka(r,d,g,S,i):Kl(r,d):(B._visibility|=2,Ka(r,d,g,S,i)),i&&_&2048&&Ms(d.alternate,d);break;case 24:Ka(r,d,g,S,i),i&&_&2048&&Ds(d.alternate,d);break;default:Ka(r,d,g,S,i)}t=t.sibling}}function Kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Kl(n,a),i&2048&&Ms(a.alternate,a);break;case 24:Kl(n,a),i&2048&&Ds(a.alternate,a);break;default:Kl(n,a)}t=t.sibling}}var Fl=8192;function Fa(e,t,n){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)Gd(e,t,n),e=e.sibling}function Gd(e,t,n){switch(e.tag){case 26:Fa(e,t,n),e.flags&Fl&&e.memoizedState!==null&&Yp(n,Qt,e.memoizedState,e.memoizedProps);break;case 5:Fa(e,t,n);break;case 3:case 4:var a=Qt;Qt=Tr(e.stateNode.containerInfo),Fa(e,t,n),Qt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Fl,Fl=16777216,Fa(e,t,n),Fl=a):Fa(e,t,n));break;default:Fa(e,t,n)}}function Vd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];We=a,Qd(a,e)}Vd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xd(e),e=e.sibling}function Xd(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Mn(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hr(e)):Wl(e);break;default:Wl(e)}}function hr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];We=a,Qd(a,e)}Vd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Mn(8,t,t.return),hr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,hr(t));break;default:hr(t)}e=e.sibling}}function Qd(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:Mn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ul(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,We=a;else e:for(n=e;We!==null;){a=We;var i=a.sibling,r=a.return;if(Dd(a),a===n){We=null;break e}if(i!==null){i.return=r,We=i;break e}We=r}}}var np={getCacheForType:function(e){var t=Pe(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Pe(Xe).controller.signal}},ap=typeof WeakMap=="function"?WeakMap:Map,ve=0,_e=null,fe=null,me=0,Ee=0,Tt=null,Dn=!1,Wa=!1,Ls=!1,bn=0,qe=0,Ln=0,ma=0,Bs=0,At=0,$a=0,$l=null,mt=null,Hs=!1,mr=0,Zd=0,gr=1/0,pr=null,Bn=null,Ke=0,Hn=null,Ia=null,xn=0,qs=0,ks=null,Jd=null,Il=0,Ys=null;function Ct(){return(ve&2)!==0&&me!==0?me&-me:D.T!==null?Js():sc()}function Kd(){if(At===0)if((me&536870912)===0||pe){var e=Ni;Ni<<=1,(Ni&3932160)===0&&(Ni=262144),At=e}else At=536870912;return e=Nt.current,e!==null&&(e.flags|=32),At}function gt(e,t,n){(e===_e&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Pa(e,0),qn(e,me,At,!1)),xl(e,n),((ve&2)===0||e!==_e)&&(e===_e&&((ve&2)===0&&(ma|=n),qe===4&&qn(e,me,At,!1)),Pt(e))}function Fd(e,t,n){if((ve&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||bl(e,t),i=a?rp(e,t):Vs(e,t,!0),r=a;do{if(i===0){Wa&&!a&&qn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!lp(n)){i=Vs(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;i=$l;var S=g.current.memoizedState.isDehydrated;if(S&&(Pa(g,d).flags|=256),d=Vs(g,d,!1),d!==2){if(Ls&&!S){g.errorRecoveryDisabledLanes|=r,ma|=r,i=4;break e}r=mt,mt=i,r!==null&&(mt===null?mt=r:mt.push.apply(mt,r))}i=d}if(r=!1,i!==2)continue}}if(i===1){Pa(e,0),qn(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:qn(a,t,At,!Dn);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=mr+300-xt(),10<i)){if(qn(a,t,At,!Dn),Ti(a,0,!0)!==0)break e;xn=t,a.timeoutHandle=Th(Wd.bind(null,a,n,mt,pr,Hs,t,At,ma,$a,Dn,r,"Throttled",-0,0),i);break e}Wd(a,n,mt,pr,Hs,t,At,ma,$a,Dn,r,null,-0,0)}}break}while(!0);Pt(e)}function Wd(e,t,n,a,i,r,d,g,S,_,B,G,w,O){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Gd(t,r,G);var $=(r&62914560)===r?mr-xt():(r&4194048)===r?Zd-xt():0;if($=Gp(G,$),$!==null){xn=r,e.cancelPendingCommit=$(lh.bind(null,e,t,r,n,a,i,d,g,S,B,G,null,w,O)),qn(e,r,d,!_);return}}lh(e,t,r,n,a,i,d,g,S)}function lp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!Et(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qn(e,t,n,a){t&=~Bs,t&=~ma,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-St(i),d=1<<r;a[r]=-1,i&=~d}n!==0&&ic(e,n,t)}function yr(){return(ve&6)===0?(Pl(0),!1):!0}function Gs(){if(fe!==null){if(Ee===0)var e=fe.return;else e=fe,sn=ia=null,ls(e),Va=null,Dl=0,e=fe;for(;e!==null;)Ad(e.alternate,e),e=e.return;fe=null}}function Pa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Np(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xn=0,Gs(),_e=e,fe=n=rn(e.current,null),me=t,Ee=0,Tt=null,Dn=!1,Wa=bl(e,t),Ls=!1,$a=At=Bs=ma=Ln=qe=0,mt=$l=null,Hs=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-St(a),r=1<<i;t|=e[i],a&=~r}return bn=t,Hi(),n}function $d(e,t){se=null,D.H=Vl,t===Ga||t===Zi?(t=hf(),Ee=3):t===Zu?(t=hf(),Ee=4):Ee=t===vs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,fe===null&&(qe=1,rr(e,Ut(t,e.current)))}function Id(){var e=Nt.current;return e===null?!0:(me&4194048)===me?Bt===null:(me&62914560)===me||(me&536870912)!==0?e===Bt:!1}function Pd(){var e=D.H;return D.H=Vl,e===null?Vl:e}function eh(){var e=D.A;return D.A=np,e}function br(){qe=4,Dn||(me&4194048)!==me&&Nt.current!==null||(Wa=!0),(Ln&134217727)===0&&(ma&134217727)===0||_e===null||qn(_e,me,At,!1)}function Vs(e,t,n){var a=ve;ve|=2;var i=Pd(),r=eh();(_e!==e||me!==t)&&(pr=null,Pa(e,t)),t=!1;var d=qe;e:do try{if(Ee!==0&&fe!==null){var g=fe,S=Tt;switch(Ee){case 8:Gs(),d=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var _=Ee;if(Ee=0,Tt=null,el(e,g,S,_),n&&Wa){d=0;break e}break;default:_=Ee,Ee=0,Tt=null,el(e,g,S,_)}}ip(),d=qe;break}catch(B){$d(e,B)}while(!0);return t&&e.shellSuspendCounter++,sn=ia=null,ve=a,D.H=i,D.A=r,fe===null&&(_e=null,me=0,Hi()),d}function ip(){for(;fe!==null;)th(fe)}function rp(e,t){var n=ve;ve|=2;var a=Pd(),i=eh();_e!==e||me!==t?(pr=null,gr=xt()+500,Pa(e,t)):Wa=bl(e,t);e:do try{if(Ee!==0&&fe!==null){t=fe;var r=Tt;t:switch(Ee){case 1:Ee=0,Tt=null,el(e,t,r,1);break;case 2:case 9:if(ff(r)){Ee=0,Tt=null,nh(t);break}t=function(){Ee!==2&&Ee!==9||_e!==e||(Ee=7),Pt(e)},r.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:ff(r)?(Ee=0,Tt=null,nh(t)):(Ee=0,Tt=null,el(e,t,r,7));break;case 5:var d=null;switch(fe.tag){case 26:d=fe.memoizedState;case 5:case 27:var g=fe;if(d?Yh(d):g.stateNode.complete){Ee=0,Tt=null;var S=g.sibling;if(S!==null)fe=S;else{var _=g.return;_!==null?(fe=_,xr(_)):fe=null}break t}}Ee=0,Tt=null,el(e,t,r,5);break;case 6:Ee=0,Tt=null,el(e,t,r,6);break;case 8:Gs(),qe=6;break e;default:throw Error(s(462))}}up();break}catch(B){$d(e,B)}while(!0);return sn=ia=null,D.H=a,D.A=i,ve=n,fe!==null?0:(_e=null,me=0,Hi(),qe)}function up(){for(;fe!==null&&!Wn();)th(fe)}function th(e){var t=Rd(e.alternate,e,bn);e.memoizedProps=e.pendingProps,t===null?xr(e):fe=t}function nh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xd(n,t,t.pendingProps,t.type,void 0,me);break;case 11:t=xd(n,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:ls(t);default:Ad(n,t),t=fe=Pc(t,bn),t=Rd(n,t,bn)}e.memoizedProps=e.pendingProps,t===null?xr(e):fe=t}function el(e,t,n,a){sn=ia=null,ls(t),Va=null,Dl=0;var i=t.return;try{if(Fg(e,i,t,n,me)){qe=1,rr(e,Ut(n,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;qe=1,rr(e,Ut(n,e.current)),fe=null;return}t.flags&32768?(pe||a===1?e=!0:Wa||(me&536870912)!==0?e=!1:(Dn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Nt.current,a!==null&&a.tag===13&&(a.flags|=16384))),ah(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){ah(t,Dn);return}e=t.return;var n=Ig(t.alternate,t,bn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);qe===0&&(qe=5)}function ah(e,t){do{var n=Pg(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);qe=6,fe=null}function lh(e,t,n,a,i,r,d,g,S){e.cancelPendingCommit=null;do vr();while(Ke!==0);if((ve&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(r=t.lanes|t.childLanes,r|=zu,k0(e,n,r,d,g,S),e===_e&&(fe=_e=null,me=0),Ia=t,Hn=e,xn=n,qs=r,ks=i,Jd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fp(Ei,function(){return oh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,i=Q.p,Q.p=2,d=ve,ve|=4;try{ep(e,t,n)}finally{ve=d,Q.p=i,D.T=a}}Ke=1,ih(),rh(),uh()}}function ih(){if(Ke===1){Ke=0;var e=Hn,t=Ia,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var a=Q.p;Q.p=2;var i=ve;ve|=4;try{qd(t,e);var r=to,d=Xc(e.containerInfo),g=r.focusedElem,S=r.selectionRange;if(d!==g&&g&&g.ownerDocument&&Vc(g.ownerDocument.documentElement,g)){if(S!==null&&Tu(g)){var _=S.start,B=S.end;if(B===void 0&&(B=_),"selectionStart"in g)g.selectionStart=_,g.selectionEnd=Math.min(B,g.value.length);else{var G=g.ownerDocument||document,w=G&&G.defaultView||window;if(w.getSelection){var O=w.getSelection(),$=g.textContent.length,ne=Math.min(S.start,$),Ae=S.end===void 0?ne:Math.min(S.end,$);!O.extend&&ne>Ae&&(d=Ae,Ae=ne,ne=d);var R=Gc(g,ne),j=Gc(g,Ae);if(R&&j&&(O.rangeCount!==1||O.anchorNode!==R.node||O.anchorOffset!==R.offset||O.focusNode!==j.node||O.focusOffset!==j.offset)){var C=G.createRange();C.setStart(R.node,R.offset),O.removeAllRanges(),ne>Ae?(O.addRange(C),O.extend(j.node,j.offset)):(C.setEnd(j.node,j.offset),O.addRange(C))}}}}for(G=[],O=g;O=O.parentNode;)O.nodeType===1&&G.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<G.length;g++){var q=G[g];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Or=!!eo,to=eo=null}finally{ve=i,Q.p=a,D.T=n}}e.current=t,Ke=2}}function rh(){if(Ke===2){Ke=0;var e=Hn,t=Ia,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var a=Q.p;Q.p=2;var i=ve;ve|=4;try{Md(e,t.alternate,t)}finally{ve=i,Q.p=a,D.T=n}}Ke=3}}function uh(){if(Ke===4||Ke===3){Ke=0,z0();var e=Hn,t=Ia,n=xn,a=Jd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Ia=Hn=null,sh(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Bn=null),uu(n),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=D.T,i=Q.p,Q.p=2,D.T=null;try{for(var r=e.onRecoverableError,d=0;d<a.length;d++){var g=a[d];r(g.value,{componentStack:g.stack})}}finally{D.T=t,Q.p=i}}(xn&3)!==0&&vr(),Pt(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Ys?Il++:(Il=0,Ys=e):Il=0,Pl(0)}}function sh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ul(t)))}function vr(){return ih(),rh(),uh(),oh()}function oh(){if(Ke!==5)return!1;var e=Hn,t=qs;qs=0;var n=uu(xn),a=D.T,i=Q.p;try{Q.p=32>n?32:n,D.T=null,n=ks,ks=null;var r=Hn,d=xn;if(Ke=0,Ia=Hn=null,xn=0,(ve&6)!==0)throw Error(s(331));var g=ve;if(ve|=4,Xd(r.current),Yd(r,r.current,d,n),ve=g,Pl(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(yl,r)}catch{}return!0}finally{Q.p=i,D.T=a,sh(e,t)}}function ch(e,t,n){t=Ut(n,t),t=xs(e.stateNode,t,2),e=zn(e,t,2),e!==null&&(xl(e,2),Pt(e))}function je(e,t,n){if(e.tag===3)ch(e,e,n);else for(;t!==null;){if(t.tag===3){ch(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Bn===null||!Bn.has(a))){e=Ut(n,e),n=fd(2),a=zn(t,n,2),a!==null&&(dd(n,a,t,e),xl(a,2),Pt(a));break}}t=t.return}}function Xs(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ap;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Ls=!0,i.add(n),e=sp.bind(null,e,t,n),t.then(e,e))}function sp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(me&n)===n&&(qe===4||qe===3&&(me&62914560)===me&&300>xt()-mr?(ve&2)===0&&Pa(e,0):Bs|=n,$a===me&&($a=0)),Pt(e)}function fh(e,t){t===0&&(t=lc()),e=na(e,t),e!==null&&(xl(e,t),Pt(e))}function op(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fh(e,n)}function cp(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),fh(e,n)}function fp(e,t){return Sa(e,t)}var Sr=null,tl=null,Qs=!1,Er=!1,Zs=!1,kn=0;function Pt(e){e!==tl&&e.next===null&&(tl===null?Sr=tl=e:tl=tl.next=e),Er=!0,Qs||(Qs=!0,hp())}function Pl(e,t){if(!Zs&&Er){Zs=!0;do for(var n=!1,a=Sr;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var d=a.suspendedLanes,g=a.pingedLanes;r=(1<<31-St(42|e)+1)-1,r&=i&~(d&~g),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,gh(a,r))}else r=me,r=Ti(a,a===_e?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||bl(a,r)||(n=!0,gh(a,r));a=a.next}while(n);Zs=!1}}function dp(){dh()}function dh(){Er=Qs=!1;var e=0;kn!==0&&jp()&&(e=kn);for(var t=xt(),n=null,a=Sr;a!==null;){var i=a.next,r=hh(a,t);r===0?(a.next=null,n===null?Sr=i:n.next=i,i===null&&(tl=n)):(n=a,(e!==0||(r&3)!==0)&&(Er=!0)),a=i}Ke!==0&&Ke!==5||Pl(e),kn!==0&&(kn=0)}function hh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var d=31-St(r),g=1<<d,S=i[d];S===-1?((g&n)===0||(g&a)!==0)&&(i[d]=q0(g,t)):S<=t&&(e.expiredLanes|=g),r&=~g}if(t=_e,n=me,n=Ti(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&pl(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&pl(a),uu(n)){case 2:case 8:n=nc;break;case 32:n=Ei;break;case 268435456:n=ac;break;default:n=Ei}return a=mh.bind(null,e),n=Sa(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&pl(a),e.callbackPriority=2,e.callbackNode=null,2}function mh(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var a=me;return a=Ti(e,e===_e?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Fd(e,a,t),hh(e,xt()),e.callbackNode!=null&&e.callbackNode===n?mh.bind(null,e):null)}function gh(e,t){if(vr())return null;Fd(e,t,!0)}function hp(){Rp(function(){(ve&6)!==0?Sa(tc,dp):dh()})}function Js(){if(kn===0){var e=ka;e===0&&(e=ji,ji<<=1,(ji&261888)===0&&(ji=256)),kn=e}return kn}function ph(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wi(""+e)}function yh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function mp(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=ph((i[ot]||null).action),d=a.submitter;d&&(t=(t=d[ot]||null)?ph(t.formAction):d.getAttribute("formAction"),t!==null&&(r=t,d=null));var g=new Mi("action","action",null,a,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(kn!==0){var S=d?yh(i,d):new FormData(i);hs(n,{pending:!0,data:S,method:i.method,action:r},null,S)}}else typeof r=="function"&&(g.preventDefault(),S=d?yh(i,d):new FormData(i),hs(n,{pending:!0,data:S,method:i.method,action:r},r,S))},currentTarget:i}]})}}for(var Ks=0;Ks<wu.length;Ks++){var Fs=wu[Ks],gp=Fs.toLowerCase(),pp=Fs[0].toUpperCase()+Fs.slice(1);Xt(gp,"on"+pp)}Xt(Jc,"onAnimationEnd"),Xt(Kc,"onAnimationIteration"),Xt(Fc,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Og,"onTransitionRun"),Xt(Ug,"onTransitionStart"),Xt(Mg,"onTransitionCancel"),Xt(Wc,"onTransitionEnd"),Ta("onMouseEnter",["mouseout","mouseover"]),Ta("onMouseLeave",["mouseout","mouseover"]),Ta("onPointerEnter",["pointerout","pointerover"]),Ta("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ei));function bh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var d=a.length-1;0<=d;d--){var g=a[d],S=g.instance,_=g.currentTarget;if(g=g.listener,S!==r&&i.isPropagationStopped())break e;r=g,i.currentTarget=_;try{r(i)}catch(B){Bi(B)}i.currentTarget=null,r=S}else for(d=0;d<a.length;d++){if(g=a[d],S=g.instance,_=g.currentTarget,g=g.listener,S!==r&&i.isPropagationStopped())break e;r=g,i.currentTarget=_;try{r(i)}catch(B){Bi(B)}i.currentTarget=null,r=S}}}}function de(e,t){var n=t[su];n===void 0&&(n=t[su]=new Set);var a=e+"__bubble";n.has(a)||(xh(t,e,2,!1),n.add(a))}function Ws(e,t,n){var a=0;t&&(a|=4),xh(n,e,a,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function $s(e){if(!e[jr]){e[jr]=!0,fc.forEach(function(n){n!=="selectionchange"&&(yp.has(n)||Ws(n,!1,e),Ws(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Ws("selectionchange",!1,t))}}function xh(e,t,n,a){switch(Kh(t)){case 2:var i=Qp;break;case 8:i=Zp;break;default:i=ho}n=i.bind(null,t,n,e),i=void 0,!yu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Is(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var g=a.stateNode.containerInfo;if(g===i)break;if(d===4)for(d=a.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;g!==null;){if(d=ja(g),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){a=r=d;continue e}g=g.parentNode}}a=a.return}jc(function(){var _=r,B=gu(n),G=[];e:{var w=$c.get(e);if(w!==void 0){var O=Mi,$=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":O=cg;break;case"focusin":$="focus",O=Su;break;case"focusout":$="blur",O=Su;break;case"beforeblur":case"afterblur":O=Su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=hg;break;case Jc:case Kc:case Fc:O=tg;break;case Wc:O=gg;break;case"scroll":case"scrollend":O=W0;break;case"wheel":O=yg;break;case"copy":case"cut":case"paste":O=ag;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Cc;break;case"toggle":case"beforetoggle":O=xg}var ne=(t&4)!==0,Ae=!ne&&(e==="scroll"||e==="scrollend"),R=ne?w!==null?w+"Capture":null:w;ne=[];for(var j=_,C;j!==null;){var q=j;if(C=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||C===null||R===null||(q=El(j,R),q!=null&&ne.push(ti(j,q,C))),Ae)break;j=j.return}0<ne.length&&(w=new O(w,$,null,n,B),G.push({event:w,listeners:ne}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",w&&n!==mu&&($=n.relatedTarget||n.fromElement)&&(ja($)||$[Ea]))break e;if((O||w)&&(w=B.window===B?B:(w=B.ownerDocument)?w.defaultView||w.parentWindow:window,O?($=n.relatedTarget||n.toElement,O=_,$=$?ja($):null,$!==null&&(Ae=h($),ne=$.tag,$!==Ae||ne!==5&&ne!==27&&ne!==6)&&($=null)):(O=null,$=_),O!==$)){if(ne=Tc,q="onMouseLeave",R="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Cc,q="onPointerLeave",R="onPointerEnter",j="pointer"),Ae=O==null?w:Sl(O),C=$==null?w:Sl($),w=new ne(q,j+"leave",O,n,B),w.target=Ae,w.relatedTarget=C,q=null,ja(B)===_&&(ne=new ne(R,j+"enter",$,n,B),ne.target=C,ne.relatedTarget=Ae,q=ne),Ae=q,O&&$)t:{for(ne=bp,R=O,j=$,C=0,q=R;q;q=ne(q))C++;q=0;for(var te=j;te;te=ne(te))q++;for(;0<C-q;)R=ne(R),C--;for(;0<q-C;)j=ne(j),q--;for(;C--;){if(R===j||j!==null&&R===j.alternate){ne=R;break t}R=ne(R),j=ne(j)}ne=null}else ne=null;O!==null&&vh(G,w,O,ne,!1),$!==null&&Ae!==null&&vh(G,Ae,$,ne,!0)}}e:{if(w=_?Sl(_):window,O=w.nodeName&&w.nodeName.toLowerCase(),O==="select"||O==="input"&&w.type==="file")var ye=Lc;else if(Mc(w))if(Bc)ye=_g;else{ye=Ag;var P=Tg}else O=w.nodeName,!O||O.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?_&&hu(_.elementType)&&(ye=Lc):ye=Cg;if(ye&&(ye=ye(e,_))){Dc(G,ye,n,B);break e}P&&P(e,w,_),e==="focusout"&&_&&w.type==="number"&&_.memoizedProps.value!=null&&du(w,"number",w.value)}switch(P=_?Sl(_):window,e){case"focusin":(Mc(P)||P.contentEditable==="true")&&(Oa=P,Au=_,wl=null);break;case"focusout":wl=Au=Oa=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Qc(G,n,B);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":Qc(G,n,B)}var ce;if(ju)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else za?Oc(e,n)&&(ge="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ge="onCompositionStart");ge&&(_c&&n.locale!=="ko"&&(za||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&za&&(ce=Nc()):(Nn=B,bu="value"in Nn?Nn.value:Nn.textContent,za=!0)),P=Nr(_,ge),0<P.length&&(ge=new Ac(ge,e,null,n,B),G.push({event:ge,listeners:P}),ce?ge.data=ce:(ce=Uc(n),ce!==null&&(ge.data=ce)))),(ce=Sg?Eg(e,n):jg(e,n))&&(ge=Nr(_,"onBeforeInput"),0<ge.length&&(P=new Ac("onBeforeInput","beforeinput",null,n,B),G.push({event:P,listeners:ge}),P.data=ce)),mp(G,e,_,n,B)}bh(G,t)})}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Nr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=El(e,n),i!=null&&a.unshift(ti(e,i,r)),i=El(e,t),i!=null&&a.push(ti(e,i,r))),e.tag===3)return a;e=e.return}return[]}function bp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vh(e,t,n,a,i){for(var r=t._reactName,d=[];n!==null&&n!==a;){var g=n,S=g.alternate,_=g.stateNode;if(g=g.tag,S!==null&&S===a)break;g!==5&&g!==26&&g!==27||_===null||(S=_,i?(_=El(n,r),_!=null&&d.unshift(ti(n,_,S))):i||(_=El(n,r),_!=null&&d.push(ti(n,_,S)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var xp=/\r\n?/g,vp=/\u0000|\uFFFD/g;function Sh(e){return(typeof e=="string"?e:""+e).replace(xp,`
`).replace(vp,"")}function Eh(e,t){return t=Sh(t),Sh(e)===t}function Te(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ca(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ca(e,""+a);break;case"className":Ci(e,"class",a);break;case"tabIndex":Ci(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,n,a);break;case"style":Sc(e,a,r);break;case"data":if(t!=="object"){Ci(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=wi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",i.name,i,null),Te(e,t,"formEncType",i.formEncType,i,null),Te(e,t,"formMethod",i.formMethod,i,null),Te(e,t,"formTarget",i.formTarget,i,null)):(Te(e,t,"encType",i.encType,i,null),Te(e,t,"method",i.method,i,null),Te(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=wi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=an);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=wi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Ai(e,"popover",a);break;case"xlinkActuate":nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":nn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":nn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":nn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":nn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ai(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=K0.get(n)||n,Ai(e,n,a))}}function Ps(e,t,n,a,i,r){switch(n){case"style":Sc(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ca(e,a):(typeof a=="number"||typeof a=="bigint")&&Ca(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=an);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[ot]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ai(e,n,a)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Te(e,t,r,d,n,null)}}i&&Te(e,t,"srcSet",n.srcSet,n,null),a&&Te(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var g=r=d=i=null,S=null,_=null;for(a in n)if(n.hasOwnProperty(a)){var B=n[a];if(B!=null)switch(a){case"name":i=B;break;case"type":d=B;break;case"checked":S=B;break;case"defaultChecked":_=B;break;case"value":r=B;break;case"defaultValue":g=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:Te(e,t,a,B,n,null)}}yc(e,r,g,S,_,d,i,!1);return;case"select":de("invalid",e),a=d=r=null;for(i in n)if(n.hasOwnProperty(i)&&(g=n[i],g!=null))switch(i){case"value":r=g;break;case"defaultValue":d=g;break;case"multiple":a=g;default:Te(e,t,i,g,n,null)}t=r,n=d,e.multiple=!!a,t!=null?Aa(e,!!a,t,!1):n!=null&&Aa(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=i=a=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":a=g;break;case"defaultValue":i=g;break;case"children":r=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(s(91));break;default:Te(e,t,d,g,n,null)}xc(e,a,i,r);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(a=n[S],a!=null))switch(S){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Te(e,t,S,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ei.length;a++)de(ei[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(a=n[_],a!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Te(e,t,_,a,n,null)}return;default:if(hu(t)){for(B in n)n.hasOwnProperty(B)&&(a=n[B],a!==void 0&&Ps(e,t,B,a,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null&&Te(e,t,g,a,n,null))}function Sp(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,d=null,g=null,S=null,_=null,B=null;for(O in n){var G=n[O];if(n.hasOwnProperty(O)&&G!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":S=G;default:a.hasOwnProperty(O)||Te(e,t,O,null,a,G)}}for(var w in a){var O=a[w];if(G=n[w],a.hasOwnProperty(w)&&(O!=null||G!=null))switch(w){case"type":r=O;break;case"name":i=O;break;case"checked":_=O;break;case"defaultChecked":B=O;break;case"value":d=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:O!==G&&Te(e,t,w,O,a,G)}}fu(e,d,g,S,_,B,r,i);return;case"select":O=d=g=w=null;for(r in n)if(S=n[r],n.hasOwnProperty(r)&&S!=null)switch(r){case"value":break;case"multiple":O=S;default:a.hasOwnProperty(r)||Te(e,t,r,null,a,S)}for(i in a)if(r=a[i],S=n[i],a.hasOwnProperty(i)&&(r!=null||S!=null))switch(i){case"value":w=r;break;case"defaultValue":g=r;break;case"multiple":d=r;default:r!==S&&Te(e,t,i,r,a,S)}t=g,n=d,a=O,w!=null?Aa(e,!!n,w,!1):!!a!=!!n&&(t!=null?Aa(e,!!n,t,!0):Aa(e,!!n,n?[]:"",!1));return;case"textarea":O=w=null;for(g in n)if(i=n[g],n.hasOwnProperty(g)&&i!=null&&!a.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Te(e,t,g,null,a,i)}for(d in a)if(i=a[d],r=n[d],a.hasOwnProperty(d)&&(i!=null||r!=null))switch(d){case"value":w=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==r&&Te(e,t,d,i,a,r)}bc(e,w,O);return;case"option":for(var $ in n)if(w=n[$],n.hasOwnProperty($)&&w!=null&&!a.hasOwnProperty($))switch($){case"selected":e.selected=!1;break;default:Te(e,t,$,null,a,w)}for(S in a)if(w=a[S],O=n[S],a.hasOwnProperty(S)&&w!==O&&(w!=null||O!=null))switch(S){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Te(e,t,S,w,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)w=n[ne],n.hasOwnProperty(ne)&&w!=null&&!a.hasOwnProperty(ne)&&Te(e,t,ne,null,a,w);for(_ in a)if(w=a[_],O=n[_],a.hasOwnProperty(_)&&w!==O&&(w!=null||O!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,t));break;default:Te(e,t,_,w,a,O)}return;default:if(hu(t)){for(var Ae in n)w=n[Ae],n.hasOwnProperty(Ae)&&w!==void 0&&!a.hasOwnProperty(Ae)&&Ps(e,t,Ae,void 0,a,w);for(B in a)w=a[B],O=n[B],!a.hasOwnProperty(B)||w===O||w===void 0&&O===void 0||Ps(e,t,B,w,a,O);return}}for(var R in n)w=n[R],n.hasOwnProperty(R)&&w!=null&&!a.hasOwnProperty(R)&&Te(e,t,R,null,a,w);for(G in a)w=a[G],O=n[G],!a.hasOwnProperty(G)||w===O||w==null&&O==null||Te(e,t,G,w,a,O)}function jh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ep(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],r=i.transferSize,d=i.initiatorType,g=i.duration;if(r&&g&&jh(d)){for(d=0,g=i.responseEnd,a+=1;a<n.length;a++){var S=n[a],_=S.startTime;if(_>g)break;var B=S.transferSize,G=S.initiatorType;B&&jh(G)&&(S=S.responseEnd,d+=B*(S<g?1:(g-_)/(S-_)))}if(--a,t+=8*(r+d)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var eo=null,to=null;function Rr(e){return e.nodeType===9?e:e.ownerDocument}function Nh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function no(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=null;function jp(){var e=window.event;return e&&e.type==="popstate"?e===ao?!1:(ao=e,!0):(ao=null,!1)}var Th=typeof setTimeout=="function"?setTimeout:void 0,Np=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,Rp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(e){return Ah.resolve(null).then(e).catch(Tp)}:Th;function Tp(e){setTimeout(function(){throw e})}function Yn(e){return e==="head"}function Ch(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),il(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ni(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ni(n);for(var r=n.firstChild;r;){var d=r.nextSibling,g=r.nodeName;r[vl]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=d}}else n==="body"&&ni(e.ownerDocument.body);n=i}while(n);il(t)}function _h(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function lo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":lo(n),ou(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ap(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function Cp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ht(e.nextSibling),e===null))return null;return e}function wh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function io(e){return e.data==="$?"||e.data==="$~"}function ro(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _p(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var uo=null;function zh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ht(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Oh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Uh(e,t,n){switch(t=Rr(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ni(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ou(e)}var qt=new Map,Mh=new Set;function Tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vn=Q.d;Q.d={f:wp,r:zp,D:Op,C:Up,L:Mp,m:Dp,X:Bp,S:Lp,M:Hp};function wp(){var e=vn.f(),t=yr();return e||t}function zp(e){var t=Na(e);t!==null&&t.tag===5&&t.type==="form"?$f(t):vn.r(e)}var nl=typeof document>"u"?null:document;function Dh(e,t,n){var a=nl;if(a&&typeof t=="string"&&t){var i=zt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Mh.has(i)||(Mh.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),tt(t,"link",e),Fe(t),a.head.appendChild(t)))}}function Op(e){vn.D(e),Dh("dns-prefetch",e,null)}function Up(e,t){vn.C(e,t),Dh("preconnect",e,t)}function Mp(e,t,n){vn.L(e,t,n);var a=nl;if(a&&e&&t){var i='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+zt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+zt(n.imageSizes)+'"]')):i+='[href="'+zt(e)+'"]';var r=i;switch(t){case"style":r=al(e);break;case"script":r=ll(e)}qt.has(r)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),qt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(ai(r))||t==="script"&&a.querySelector(li(r))||(t=a.createElement("link"),tt(t,"link",e),Fe(t),a.head.appendChild(t)))}}function Dp(e,t){vn.m(e,t);var n=nl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+zt(a)+'"][href="'+zt(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ll(e)}if(!qt.has(r)&&(e=v({rel:"modulepreload",href:e},t),qt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(li(r)))return}a=n.createElement("link"),tt(a,"link",e),Fe(a),n.head.appendChild(a)}}}function Lp(e,t,n){vn.S(e,t,n);var a=nl;if(a&&e){var i=Ra(a).hoistableStyles,r=al(e);t=t||"default";var d=i.get(r);if(!d){var g={loading:0,preload:null};if(d=a.querySelector(ai(r)))g.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=qt.get(r))&&so(e,n);var S=d=a.createElement("link");Fe(S),tt(S,"link",e),S._p=new Promise(function(_,B){S.onload=_,S.onerror=B}),S.addEventListener("load",function(){g.loading|=1}),S.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ar(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:g},i.set(r,d)}}}function Bp(e,t){vn.X(e,t);var n=nl;if(n&&e){var a=Ra(n).hoistableScripts,i=ll(e),r=a.get(i);r||(r=n.querySelector(li(i)),r||(e=v({src:e,async:!0},t),(t=qt.get(i))&&oo(e,t),r=n.createElement("script"),Fe(r),tt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Hp(e,t){vn.M(e,t);var n=nl;if(n&&e){var a=Ra(n).hoistableScripts,i=ll(e),r=a.get(i);r||(r=n.querySelector(li(i)),r||(e=v({src:e,async:!0,type:"module"},t),(t=qt.get(i))&&oo(e,t),r=n.createElement("script"),Fe(r),tt(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Lh(e,t,n,a){var i=(i=W.current)?Tr(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=al(n.href),n=Ra(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=al(n.href);var r=Ra(i).hoistableStyles,d=r.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,d),(r=i.querySelector(ai(e)))&&!r._p&&(d.instance=r,d.state.loading=5),qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qt.set(e,n),r||qp(i,e,n,d.state))),t&&a===null)throw Error(s(528,""));return d}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ll(n),n=Ra(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function al(e){return'href="'+zt(e)+'"'}function ai(e){return'link[rel="stylesheet"]['+e+"]"}function Bh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function qp(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),tt(t,"link",n),Fe(t),e.head.appendChild(t))}function ll(e){return'[src="'+zt(e)+'"]'}function li(e){return"script[async]"+e}function Hh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+zt(n.href)+'"]');if(a)return t.instance=a,Fe(a),a;var i=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Fe(a),tt(a,"style",i),Ar(a,n.precedence,e),t.instance=a;case"stylesheet":i=al(n.href);var r=e.querySelector(ai(i));if(r)return t.state.loading|=4,t.instance=r,Fe(r),r;a=Bh(n),(i=qt.get(i))&&so(a,i),r=(e.ownerDocument||e).createElement("link"),Fe(r);var d=r;return d._p=new Promise(function(g,S){d.onload=g,d.onerror=S}),tt(r,"link",a),t.state.loading|=4,Ar(r,n.precedence,e),t.instance=r;case"script":return r=ll(n.src),(i=e.querySelector(li(r)))?(t.instance=i,Fe(i),i):(a=n,(i=qt.get(r))&&(a=v({},n),oo(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Fe(i),tt(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ar(a,n.precedence,e));return t.instance}function Ar(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,d=0;d<a.length;d++){var g=a[d];if(g.dataset.precedence===t)r=g;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function so(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function oo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cr=null;function qh(e,t,n){if(Cr===null){var a=new Map,i=Cr=new Map;i.set(n,a)}else i=Cr,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[vl]||r[$e]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var d=r.getAttribute(t)||"";d=e+d;var g=a.get(d);g?g.push(r):a.set(d,[r])}}return a}function kh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function kp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Yh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Yp(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=al(a.href),r=t.querySelector(ai(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_r.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Fe(r);return}r=t.ownerDocument||t,a=Bh(a),(i=qt.get(i))&&so(a,i),r=r.createElement("link"),Fe(r);var d=r;d._p=new Promise(function(g,S){d.onload=g,d.onerror=S}),tt(r,"link",a),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=_r.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var co=0;function Gp(e,t){return e.stylesheets&&e.count===0&&zr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&zr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&co===0&&(co=62500*Ep());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&zr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>co?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function _r(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wr=null;function zr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wr=new Map,t.forEach(Vp,e),wr=null,_r.call(e))}function Vp(e,t){if(!(t.state.loading&4)){var n=wr.get(e);if(n)var a=n.get(null);else{n=new Map,wr.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var d=i[r];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}i=t.instance,d=i.getAttribute("data-precedence"),r=n.get(d)||a,r===a&&n.set(null,i),n.set(d,i),this.count++,a=_r.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ii={$$typeof:U,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Xp(e,t,n,a,i,r,d,g,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=iu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.hiddenUpdates=iu(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Gh(e,t,n,a,i,r,d,g,S,_,B,G){return e=new Xp(e,t,n,d,S,_,B,G,g),t=1,r===!0&&(t|=24),r=jt(3,null,null,t),e.current=r,r.stateNode=e,t=Vu(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},Ju(r),e}function Vh(e){return e?(e=Da,e):Da}function Xh(e,t,n,a,i,r){i=Vh(i),a.context===null?a.context=i:a.pendingContext=i,a=wn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=zn(e,a,t),n!==null&&(gt(n,e,t),Bl(n,e,t))}function Qh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fo(e,t){Qh(e,t),(e=e.alternate)&&Qh(e,t)}function Zh(e){if(e.tag===13||e.tag===31){var t=na(e,67108864);t!==null&&gt(t,e,67108864),fo(e,67108864)}}function Jh(e){if(e.tag===13||e.tag===31){var t=Ct();t=ru(t);var n=na(e,t);n!==null&&gt(n,e,t),fo(e,t)}}var Or=!0;function Qp(e,t,n,a){var i=D.T;D.T=null;var r=Q.p;try{Q.p=2,ho(e,t,n,a)}finally{Q.p=r,D.T=i}}function Zp(e,t,n,a){var i=D.T;D.T=null;var r=Q.p;try{Q.p=8,ho(e,t,n,a)}finally{Q.p=r,D.T=i}}function ho(e,t,n,a){if(Or){var i=mo(a);if(i===null)Is(e,t,a,Ur,n),Fh(e,a);else if(Kp(i,e,t,n,a))a.stopPropagation();else if(Fh(e,a),t&4&&-1<Jp.indexOf(e)){for(;i!==null;){var r=Na(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var d=$n(r.pendingLanes);if(d!==0){var g=r;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var S=1<<31-St(d);g.entanglements[1]|=S,d&=~S}Pt(r),(ve&6)===0&&(gr=xt()+500,Pl(0))}}break;case 31:case 13:g=na(r,2),g!==null&&gt(g,r,2),yr(),fo(r,2)}if(r=mo(a),r===null&&Is(e,t,a,Ur,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else Is(e,t,a,null,n)}}function mo(e){return e=gu(e),go(e)}var Ur=null;function go(e){if(Ur=null,e=ja(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ur=e,null}function Kh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(O0()){case tc:return 2;case nc:return 8;case Ei:case U0:return 32;case ac:return 268435456;default:return 32}default:return 32}}var po=!1,Gn=null,Vn=null,Xn=null,ri=new Map,ui=new Map,Qn=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fh(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ui.delete(t.pointerId)}}function si(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Na(t),t!==null&&Zh(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kp(e,t,n,a,i){switch(t){case"focusin":return Gn=si(Gn,e,t,n,a,i),!0;case"dragenter":return Vn=si(Vn,e,t,n,a,i),!0;case"mouseover":return Xn=si(Xn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return ri.set(r,si(ri.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,ui.set(r,si(ui.get(r)||null,e,t,n,a,i)),!0}return!1}function Wh(e){var t=ja(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,oc(e.priority,function(){Jh(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,oc(e.priority,function(){Jh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mo(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);mu=a,n.target.dispatchEvent(a),mu=null}else return t=Na(n),t!==null&&Zh(t),e.blockedOn=n,!1;t.shift()}return!0}function $h(e,t,n){Mr(e)&&n.delete(t)}function Fp(){po=!1,Gn!==null&&Mr(Gn)&&(Gn=null),Vn!==null&&Mr(Vn)&&(Vn=null),Xn!==null&&Mr(Xn)&&(Xn=null),ri.forEach($h),ui.forEach($h)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,po||(po=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Fp)))}var Lr=null;function Ih(e){Lr!==e&&(Lr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Lr===e&&(Lr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(go(a||n)===null)continue;break}var r=Na(n);r!==null&&(e.splice(t,3),t-=3,hs(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function il(e){function t(S){return Dr(S,e)}Gn!==null&&Dr(Gn,e),Vn!==null&&Dr(Vn,e),Xn!==null&&Dr(Xn,e),ri.forEach(t),ui.forEach(t);for(var n=0;n<Qn.length;n++){var a=Qn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)Wh(n),n.blockedOn===null&&Qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],d=i[ot]||null;if(typeof r=="function")d||Ih(n);else if(d){var g=null;if(r&&r.hasAttribute("formAction")){if(i=r,d=r[ot]||null)g=d.formAction;else if(go(i)!==null)continue}else g=d.action;typeof g=="function"?n[a+1]=g:(n.splice(a,3),a-=3),Ih(n)}}}function Ph(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(d){return i=d})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function yo(e){this._internalRoot=e}Br.prototype.render=yo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=Ct();Xh(n,a,e,t,null,null)},Br.prototype.unmount=yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xh(e.current,2,null,e,null,null),yr(),t[Ea]=null}};function Br(e){this._internalRoot=e}Br.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qn.length&&t!==0&&t<Qn[n].priority;n++);Qn.splice(n,0,e),n===0&&Wh(e)}};var em=u.version;if(em!=="19.2.7")throw Error(s(527,em,"19.2.7"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Wp={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{yl=Hr.inject(Wp),vt=Hr}catch{}}return ci.createRoot=function(e,t){if(!f(e))throw Error(s(299));var n=!1,a="",i=ud,r=sd,d=od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Gh(e,1,!1,null,null,n,a,null,i,r,d,Ph),e[Ea]=t.current,$s(e),new yo(t)},ci.hydrateRoot=function(e,t,n){if(!f(e))throw Error(s(299));var a=!1,i="",r=ud,d=sd,g=od,S=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=Gh(e,1,!0,t,n??null,a,i,S,r,d,g,Ph),t.context=Vh(null),n=t.current,a=Ct(),a=ru(a),i=wn(a),i.callback=null,zn(n,i,a),n=a,t.current.lanes=n,xl(t,n),Pt(t),e[Ea]=t.current,$s(e),new Br(t)},ci.version="19.2.7",ci}var cm;function u1(){if(cm)return vo.exports;cm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),vo.exports=r1(),vo.exports}var s1=u1();const o1=Hm(s1);/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qo=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,qm=/^[\\/]{2}/;function c1(l,u){return u+l.replace(/\\/g,"/")}var fm="popstate";function dm(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function f1(l={}){function u(s,f){var y;let h=(y=f.state)==null?void 0:y.masked,{pathname:m,search:p,hash:b}=h||s.location;return zo("",{pathname:m,search:p,hash:b},f.state&&f.state.usr||null,f.state&&f.state.key||"default",h?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function c(s,f){return typeof f=="string"?f:hi(f)}return h1(u,c,null,l)}function Be(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function kt(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function d1(){return Math.random().toString(36).substring(2,10)}function hm(l,u){return{usr:l.state,key:l.key,idx:u,masked:l.mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function zo(l,u,c=null,s,f){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?ol(u):u,state:c,key:u&&u.key||s||d1(),mask:f}}function hi({pathname:l="/",search:u="",hash:c=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function ol(l){let u={};if(l){let c=l.indexOf("#");c>=0&&(u.hash=l.substring(c),l=l.substring(0,c));let s=l.indexOf("?");s>=0&&(u.search=l.substring(s),l=l.substring(0,s)),l&&(u.pathname=l)}return u}function h1(l,u,c,s={}){let{window:f=document.defaultView,v5Compat:h=!1}=s,m=f.history,p="POP",b=null,y=x();y==null&&(y=0,m.replaceState({...m.state,idx:y},""));function x(){return(m.state||{idx:null}).idx}function v(){p="POP";let M=x(),T=M==null?null:M-y;y=M,b&&b({action:p,location:Y.location,delta:T})}function z(M,T){p="PUSH";let V=dm(M)?M:zo(Y.location,M,T);y=x()+1;let U=hm(V,y),K=Y.createHref(V.mask||V);try{m.pushState(U,"",K)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;f.location.assign(K)}h&&b&&b({action:p,location:Y.location,delta:1})}function k(M,T){p="REPLACE";let V=dm(M)?M:zo(Y.location,M,T);y=x();let U=hm(V,y),K=Y.createHref(V.mask||V);m.replaceState(U,"",K),h&&b&&b({action:p,location:Y.location,delta:0})}function L(M){return m1(f,M)}let Y={get action(){return p},get location(){return l(f,m)},listen(M){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(fm,v),b=M,()=>{f.removeEventListener(fm,v),b=null}},createHref(M){return u(f,M)},createURL:L,encodeLocation(M){let T=L(M);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:z,replace:k,go(M){return m.go(M)}};return Y}function m1(l,u,c=!1){let s="http://localhost";l&&(s=l.location.origin!=="null"?l.location.origin:l.location.href),Be(s,"No window.location.(origin|href) available to create URL");let f=typeof u=="string"?u:hi(u);return f=f.replace(/ $/,"%20"),!c&&qm.test(f)&&(f=s+f),new URL(f,s)}function km(l,u,c="/"){return g1(l,u,c,!1)}function g1(l,u,c,s,f){let h=typeof u=="string"?ol(u):u,m=Sn(h.pathname||"/",c);if(m==null)return null;let p=p1(l),b=null,y=A1(m);for(let x=0;b==null&&x<p.length;++x)b=T1(p[x],y,s);return b}function p1(l){let u=Ym(l);return y1(u),u}function Ym(l,u=[],c=[],s="",f=!1){let h=(m,p,b=f,y)=>{let x={relativePath:y===void 0?m.path||"":y,caseSensitive:m.caseSensitive===!0,childrenIndex:p,route:m};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&b)return;Be(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let v=Jt([s,x.relativePath]),z=c.concat(x);m.children&&m.children.length>0&&(Be(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Ym(m.children,u,z,v,b)),!(m.path==null&&!m.index)&&u.push({path:v,score:N1(v,m.index),routesMeta:z.map((k,L)=>{let[Y,M]=Xm(k.relativePath,k.caseSensitive,L===z.length-1);return{...k,matcher:Y,compiledParams:M}})})};return l.forEach((m,p)=>{var b;if(m.path===""||!((b=m.path)!=null&&b.includes("?")))h(m,p);else for(let y of Gm(m.path))h(m,p,!0,y)}),u}function Gm(l){let u=l.split("/");if(u.length===0)return[];let[c,...s]=u,f=c.endsWith("?"),h=c.replace(/\?$/,"");if(s.length===0)return f?[h,""]:[h];let m=Gm(s.join("/")),p=[];return p.push(...m.map(b=>b===""?h:[h,b].join("/"))),f&&p.push(...m),p.map(b=>l.startsWith("/")&&b===""?"/":b)}function y1(l){l.sort((u,c)=>u.score!==c.score?c.score-u.score:R1(u.routesMeta.map(s=>s.childrenIndex),c.routesMeta.map(s=>s.childrenIndex)))}var b1=/^:[\w-]+$/,x1=3,v1=2,S1=1,E1=10,j1=-2,mm=l=>l==="*";function N1(l,u){let c=l.split("/"),s=c.length;return c.some(mm)&&(s+=j1),u&&(s+=v1),c.filter(f=>!mm(f)).reduce((f,h)=>f+(b1.test(h)?x1:h===""?S1:E1),s)}function R1(l,u){return l.length===u.length&&l.slice(0,-1).every((s,f)=>s===u[f])?l[l.length-1]-u[u.length-1]:0}function T1(l,u,c=!1){let{routesMeta:s}=l,f={},h="/",m=[];for(let p=0;p<s.length;++p){let b=s[p],y=p===s.length-1,x=h==="/"?u:u.slice(h.length)||"/",v={path:b.relativePath,caseSensitive:b.caseSensitive,end:y},z=b.matcher&&b.compiledParams?Vm(v,x,b.matcher,b.compiledParams):Jr(v,x),k=b.route;if(!z&&y&&c&&!s[s.length-1].route.index&&(z=Jr({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},x)),!z)return null;Object.assign(f,z.params),m.push({params:f,pathname:Jt([h,z.pathname]),pathnameBase:w1(Jt([h,z.pathnameBase])),route:k}),z.pathnameBase!=="/"&&(h=Jt([h,z.pathnameBase]))}return m}function Jr(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,s]=Xm(l.path,l.caseSensitive,l.end);return Vm(l,u,c,s)}function Vm(l,u,c,s){let f=u.match(c);if(!f)return null;let h=f[0],m=h.replace(/(.)\/+$/,"$1"),p=f.slice(1);return{params:s.reduce((y,{paramName:x,isOptional:v},z)=>{if(x==="*"){let L=p[z]||"";m=h.slice(0,h.length-L.length).replace(/(.)\/+$/,"$1")}const k=p[z];return v&&!k?y[x]=void 0:y[x]=(k||"").replace(/%2F/g,"/"),y},{}),pathname:h,pathnameBase:m,pattern:l}}function Xm(l,u=!1,c=!0){kt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,p,b,y,x)=>{if(s.push({paramName:p,isOptional:b!=null}),b){let v=x.charAt(y+m.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(s.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),s]}function A1(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return kt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function Sn(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,s=l.charAt(c);return s&&s!=="/"?null:l.slice(c)||"/"}function C1(l,u="/"){let{pathname:c,search:s="",hash:f=""}=typeof l=="string"?ol(l):l,h;return c?(c=Qm(c),c.startsWith("/")?h=gm(c.substring(1),"/"):h=gm(c,u)):h=u,{pathname:h,search:z1(s),hash:O1(f)}}function gm(l,u){let c=Kr(u).split("/");return l.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function No(l,u,c,s){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _1(l){return l.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function ko(l){let u=_1(l);return u.map((c,s)=>s===u.length-1?c.pathname:c.pathnameBase)}function Ir(l,u,c,s=!1){let f;typeof l=="string"?f=ol(l):(f={...l},Be(!f.pathname||!f.pathname.includes("?"),No("?","pathname","search",f)),Be(!f.pathname||!f.pathname.includes("#"),No("#","pathname","hash",f)),Be(!f.search||!f.search.includes("#"),No("#","search","hash",f)));let h=l===""||f.pathname==="",m=h?"/":f.pathname,p;if(m==null)p=c;else{let v=u.length-1;if(!s&&m.startsWith("..")){let z=m.split("/");for(;z[0]==="..";)z.shift(),v-=1;f.pathname=z.join("/")}p=v>=0?u[v]:"/"}let b=C1(f,p),y=m&&m!=="/"&&m.endsWith("/"),x=(h||m===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(y||x)&&(b.pathname+="/"),b}var Qm=l=>l.replace(/[\\/]{2,}/g,"/"),Jt=l=>Qm(l.join("/")),Kr=l=>l.replace(/\/+$/,""),w1=l=>Kr(l).replace(/^\/*/,"/"),z1=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,O1=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,U1=class{constructor(l,u,c,s=!1){this.status=l,this.statusText=u||"",this.internal=s,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function M1(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function D1(l){let u=l.map(c=>c.route.path).filter(Boolean);return Jt(u)||"/"}var Zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Jm(l,u){let c=l;if(typeof c!="string"||!qo.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let s=c,f=!1;if(Zm)try{let h=new URL(window.location.href),m=qm.test(c)?new URL(c1(c,h.protocol)):new URL(c),p=Sn(m.pathname,u);m.origin===h.origin&&p!=null?c=p+m.search+m.hash:f=!0}catch{kt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:f,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Km=["POST","PUT","PATCH","DELETE"];new Set(Km);var L1=["GET",...Km];new Set(L1);var B1=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function H1(l){try{return B1.includes(new URL(l).protocol)}catch{return!1}}var cl=A.createContext(null);cl.displayName="DataRouter";var Pr=A.createContext(null);Pr.displayName="DataRouterState";var Fm=A.createContext(!1);function q1(){return A.useContext(Fm)}var Wm=A.createContext({isTransitioning:!1});Wm.displayName="ViewTransition";var k1=A.createContext(new Map);k1.displayName="Fetchers";var Y1=A.createContext(null);Y1.displayName="Await";var _t=A.createContext(null);_t.displayName="Navigation";var gi=A.createContext(null);gi.displayName="Location";var tn=A.createContext({outlet:null,matches:[],isDataRoute:!1});tn.displayName="Route";var Yo=A.createContext(null);Yo.displayName="RouteError";var $m="REACT_ROUTER_ERROR",G1="REDIRECT",V1="ROUTE_ERROR_RESPONSE";function X1(l){if(l.startsWith(`${$m}:${G1}:{`))try{let u=JSON.parse(l.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Q1(l){if(l.startsWith(`${$m}:${V1}:{`))try{let u=JSON.parse(l.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new U1(u.status,u.statusText,u.data)}catch{}}function Z1(l,{relative:u}={}){Be(fl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:s}=A.useContext(_t),{hash:f,pathname:h,search:m}=yi(l,{relative:u}),p=h;return c!=="/"&&(p=h==="/"?c:Jt([c,h])),s.createHref({pathname:p,search:m,hash:f})}function fl(){return A.useContext(gi)!=null}function Kt(){return Be(fl(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(gi).location}var Im="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pm(l){A.useContext(_t).static||A.useLayoutEffect(l)}function pi(){let{isDataRoute:l}=A.useContext(tn);return l?iy():J1()}function J1(){Be(fl(),"useNavigate() may be used only in the context of a <Router> component.");let l=A.useContext(cl),{basename:u,navigator:c}=A.useContext(_t),{matches:s}=A.useContext(tn),{pathname:f}=Kt(),h=JSON.stringify(ko(s)),m=A.useRef(!1);return Pm(()=>{m.current=!0}),A.useCallback((b,y={})=>{if(kt(m.current,Im),!m.current)return;if(typeof b=="number"){c.go(b);return}let x=Ir(b,JSON.parse(h),f,y.relative==="path");l==null&&u!=="/"&&(x.pathname=x.pathname==="/"?u:Jt([u,x.pathname])),(y.replace?c.replace:c.push)(x,y.state,y)},[u,c,h,f,l])}A.createContext(null);function yi(l,{relative:u}={}){let{matches:c}=A.useContext(tn),{pathname:s}=Kt(),f=JSON.stringify(ko(c));return A.useMemo(()=>Ir(l,JSON.parse(f),s,u==="path"),[l,f,s,u])}function K1(l,u){return e0(l,u)}function e0(l,u,c){var M;Be(fl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=A.useContext(_t),{matches:f}=A.useContext(tn),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",b=h?h.pathnameBase:"/",y=h&&h.route;{let T=y&&y.path||"";n0(p,!y||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let x=Kt(),v;if(u){let T=typeof u=="string"?ol(u):u;Be(b==="/"||((M=T.pathname)==null?void 0:M.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=x;let z=v.pathname||"/",k=z;if(b!=="/"){let T=b.replace(/^\//,"").split("/");k="/"+z.replace(/^\//,"").split("/").slice(T.length).join("/")}let L=c&&c.state.matches.length?c.state.matches.map(T=>Object.assign(T,{route:c.manifest[T.route.id]||T.route})):km(l,{pathname:k});kt(y||L!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),kt(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=P1(L&&L.map(T=>Object.assign({},T,{params:Object.assign({},m,T.params),pathname:Jt([b,s.encodeLocation?s.encodeLocation(T.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?b:Jt([b,s.encodeLocation?s.encodeLocation(T.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),f,c);return u&&Y?A.createElement(gi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},Y):Y}function F1(){let l=ly(),u=M1(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:s},h={padding:"2px 4px",backgroundColor:s},m=null;return console.error("Error handled by React Router default ErrorBoundary:",l),m=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},u),c?A.createElement("pre",{style:f},c):null,m)}var W1=A.createElement(F1,null),t0=class extends A.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){this.props.onError?this.props.onError(l,u):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const c=Q1(l.digest);c&&(l=c)}let u=l!==void 0?A.createElement(tn.Provider,{value:this.props.routeContext},A.createElement(Yo.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?A.createElement($1,{error:l},u):u}};t0.contextType=Fm;var Ro=new WeakMap;function $1({children:l,error:u}){let{basename:c}=A.useContext(_t);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let s=X1(u.digest);if(s){let f=Ro.get(u);if(f)throw f;let h=Jm(s.location,c),m=h.absoluteURL||h.to;if(H1(m))throw new Error("Invalid redirect location");if(Zm&&!Ro.get(u))if(h.isExternal||s.reloadDocument)window.location.href=m;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:s.replace}));throw Ro.set(u,p),p}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m}`})}}return l}function I1({routeContext:l,match:u,children:c}){let s=A.useContext(cl);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),A.createElement(tn.Provider,{value:l},c)}function P1(l,u=[],c){let s=c==null?void 0:c.state;if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(u.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let f=l,h=s==null?void 0:s.errors;if(h!=null){let x=f.findIndex(v=>v.route.id&&(h==null?void 0:h[v.route.id])!==void 0);Be(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,x+1))}let m=!1,p=-1;if(c&&s){m=s.renderFallback;for(let x=0;x<f.length;x++){let v=f[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=x),v.route.id){let{loaderData:z,errors:k}=s,L=v.route.loader&&!z.hasOwnProperty(v.route.id)&&(!k||k[v.route.id]===void 0);if(v.route.lazy||L){c.isStatic&&(m=!0),p>=0?f=f.slice(0,p+1):f=[f[0]];break}}}}let b=c==null?void 0:c.onError,y=s&&b?(x,v)=>{var z,k;b(x,{location:s.location,params:((k=(z=s.matches)==null?void 0:z[0])==null?void 0:k.params)??{},pattern:D1(s.matches),errorInfo:v})}:void 0;return f.reduceRight((x,v,z)=>{let k,L=!1,Y=null,M=null;s&&(k=h&&v.route.id?h[v.route.id]:void 0,Y=v.route.errorElement||W1,m&&(p<0&&z===0?(n0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,M=null):p===z&&(L=!0,M=v.route.hydrateFallbackElement||null)));let T=u.concat(f.slice(0,z+1)),V=()=>{let U;return k?U=Y:L?U=M:v.route.Component?U=A.createElement(v.route.Component,null):v.route.element?U=v.route.element:U=x,A.createElement(I1,{match:v,routeContext:{outlet:x,matches:T,isDataRoute:s!=null},children:U})};return s&&(v.route.ErrorBoundary||v.route.errorElement||z===0)?A.createElement(t0,{location:s.location,revalidation:s.revalidation,component:Y,error:k,children:V(),routeContext:{outlet:null,matches:T,isDataRoute:!0},onError:y}):V()},null)}function Go(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ey(l){let u=A.useContext(cl);return Be(u,Go(l)),u}function ty(l){let u=A.useContext(Pr);return Be(u,Go(l)),u}function ny(l){let u=A.useContext(tn);return Be(u,Go(l)),u}function Vo(l){let u=ny(l),c=u.matches[u.matches.length-1];return Be(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function ay(){return Vo("useRouteId")}function ly(){var s;let l=A.useContext(Yo),u=ty("useRouteError"),c=Vo("useRouteError");return l!==void 0?l:(s=u.errors)==null?void 0:s[c]}function iy(){let{router:l}=ey("useNavigate"),u=Vo("useNavigate"),c=A.useRef(!1);return Pm(()=>{c.current=!0}),A.useCallback(async(f,h={})=>{kt(c.current,Im),c.current&&(typeof f=="number"?await l.navigate(f):await l.navigate(f,{fromRouteId:u,...h}))},[l,u])}var pm={};function n0(l,u,c){!u&&!pm[l]&&(pm[l]=!0,kt(!1,c))}A.memo(ry);function ry({routes:l,manifest:u,future:c,state:s,isStatic:f,onError:h}){return e0(l,void 0,{manifest:u,state:s,isStatic:f,onError:h})}function Xo({to:l,replace:u,state:c,relative:s}){Be(fl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=A.useContext(_t);kt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=A.useContext(tn),{pathname:m}=Kt(),p=pi(),b=Ir(l,ko(h),m,s==="path"),y=JSON.stringify(b);return A.useEffect(()=>{p(JSON.parse(y),{replace:u,state:c,relative:s})},[p,y,s,u,c]),null}function ga(l){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uy({basename:l="/",children:u=null,location:c,navigationType:s="POP",navigator:f,static:h=!1,useTransitions:m}){Be(!fl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=l.replace(/^\/*/,"/"),b=A.useMemo(()=>({basename:p,navigator:f,static:h,useTransitions:m,future:{}}),[p,f,h,m]);typeof c=="string"&&(c=ol(c));let{pathname:y="/",search:x="",hash:v="",state:z=null,key:k="default",mask:L}=c,Y=A.useMemo(()=>{let M=Sn(y,p);return M==null?null:{location:{pathname:M,search:x,hash:v,state:z,key:k,mask:L},navigationType:s}},[p,y,x,v,z,k,s,L]);return kt(Y!=null,`<Router basename="${p}"> is not able to match the URL "${y}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:A.createElement(_t.Provider,{value:b},A.createElement(gi.Provider,{children:u,value:Y}))}function sy({children:l,location:u}){return K1(Oo(l),u)}function Oo(l,u=[]){let c=[];return A.Children.forEach(l,(s,f)=>{if(!A.isValidElement(s))return;let h=[...u,f];if(s.type===A.Fragment){c.push.apply(c,Oo(s.props.children,h));return}Be(s.type===ga,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!s.props.index||!s.props.children,"An index route cannot have child routes.");let m={id:s.props.id||h.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(m.children=Oo(s.props.children,h)),c.push(m)}),c}var Yr="get",Gr="application/x-www-form-urlencoded";function eu(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function oy(l){return eu(l)&&l.tagName.toLowerCase()==="button"}function cy(l){return eu(l)&&l.tagName.toLowerCase()==="form"}function fy(l){return eu(l)&&l.tagName.toLowerCase()==="input"}function dy(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function hy(l,u){return l.button===0&&(!u||u==="_self")&&!dy(l)}function Uo(l=""){return new URLSearchParams(typeof l=="string"||Array.isArray(l)||l instanceof URLSearchParams?l:Object.keys(l).reduce((u,c)=>{let s=l[c];return u.concat(Array.isArray(s)?s.map(f=>[c,f]):[[c,s]])},[]))}function my(l,u){let c=Uo(l);return u&&u.forEach((s,f)=>{c.has(f)||u.getAll(f).forEach(h=>{c.append(f,h)})}),c}var qr=null;function gy(){if(qr===null)try{new FormData(document.createElement("form"),0),qr=!1}catch{qr=!0}return qr}var py=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function To(l){return l!=null&&!py.has(l)?(kt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gr}"`),null):l}function yy(l,u){let c,s,f,h,m;if(cy(l)){let p=l.getAttribute("action");s=p?Sn(p,u):null,c=l.getAttribute("method")||Yr,f=To(l.getAttribute("enctype"))||Gr,h=new FormData(l)}else if(oy(l)||fy(l)&&(l.type==="submit"||l.type==="image")){let p=l.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||p.getAttribute("action");if(s=b?Sn(b,u):null,c=l.getAttribute("formmethod")||p.getAttribute("method")||Yr,f=To(l.getAttribute("formenctype"))||To(p.getAttribute("enctype"))||Gr,h=new FormData(p,l),!gy()){let{name:y,type:x,value:v}=l;if(x==="image"){let z=y?`${y}.`:"";h.append(`${z}x`,"0"),h.append(`${z}y`,"0")}else y&&h.append(y,v)}}else{if(eu(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Yr,s=null,f=Gr,m=l}return h&&f==="text/plain"&&(m=h,h=void 0),{action:s,method:c.toLowerCase(),encType:f,formData:h,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qo(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function a0(l,u,c,s){let f=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${s}`:f.pathname=`${f.pathname}.${s}`:f.pathname==="/"?f.pathname=`_root.${s}`:u&&Sn(f.pathname,u)==="/"?f.pathname=`${Kr(u)}/_root.${s}`:f.pathname=`${Kr(f.pathname)}.${s}`,f}async function by(l,u){if(l.id in u)return u[l.id];try{let c=await import(l.module);return u[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xy(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function vy(l,u,c){let s=await Promise.all(l.map(async f=>{let h=u.routes[f.route.id];if(h){let m=await by(h,c);return m.links?m.links():[]}return[]}));return Ny(s.flat(1).filter(xy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function ym(l,u,c,s,f,h){let m=(b,y)=>c[y]?b.route.id!==c[y].route.id:!0,p=(b,y)=>{var x;return c[y].pathname!==b.pathname||((x=c[y].route.path)==null?void 0:x.endsWith("*"))&&c[y].params["*"]!==b.params["*"]};return h==="assets"?u.filter((b,y)=>m(b,y)||p(b,y)):h==="data"?u.filter((b,y)=>{var v;let x=s.routes[b.route.id];if(!x||!x.hasLoader)return!1;if(m(b,y)||p(b,y))return!0;if(b.route.shouldRevalidate){let z=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((v=c[0])==null?void 0:v.params)||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof z=="boolean")return z}return!0}):[]}function Sy(l,u,{includeHydrateFallback:c}={}){return Ey(l.map(s=>{let f=u.routes[s.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Ey(l){return[...new Set(l)]}function jy(l){let u={},c=Object.keys(l).sort();for(let s of c)u[s]=l[s];return u}function Ny(l,u){let c=new Set;return new Set(u),l.reduce((s,f)=>{let h=JSON.stringify(jy(f));return c.has(h)||(c.add(h),s.push({key:h,link:f})),s},[])}function Zo(){let l=A.useContext(cl);return Qo(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Ry(){let l=A.useContext(Pr);return Qo(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Jo=A.createContext(void 0);Jo.displayName="FrameworkContext";function tu(){let l=A.useContext(Jo);return Qo(l,"You must render this element inside a <HydratedRouter> element"),l}function Ty(l,u){let c=A.useContext(Jo),[s,f]=A.useState(!1),[h,m]=A.useState(!1),{onFocus:p,onBlur:b,onMouseEnter:y,onMouseLeave:x,onTouchStart:v}=u,z=A.useRef(null);A.useEffect(()=>{if(l==="render"&&m(!0),l==="viewport"){let Y=T=>{T.forEach(V=>{m(V.isIntersecting)})},M=new IntersectionObserver(Y,{threshold:.5});return z.current&&M.observe(z.current),()=>{M.disconnect()}}},[l]),A.useEffect(()=>{if(s){let Y=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(Y)}}},[s]);let k=()=>{f(!0)},L=()=>{f(!1),m(!1)};return c?l!=="intent"?[h,z,{}]:[h,z,{onFocus:fi(p,k),onBlur:fi(b,L),onMouseEnter:fi(y,k),onMouseLeave:fi(x,L),onTouchStart:fi(v,k)}]:[!1,z,{}]}function fi(l,u){return c=>{l&&l(c),c.defaultPrevented||u(c)}}function Ay({page:l,...u}){let c=q1(),{nonce:s}=tu(),{router:f}=Zo(),h=A.useMemo(()=>km(f.routes,l,f.basename),[f.routes,l,f.basename]);return h?(u.nonce==null&&s&&(u={...u,nonce:s}),c?A.createElement(_y,{page:l,matches:h,...u}):A.createElement(wy,{page:l,matches:h,...u})):null}function Cy(l){let{manifest:u,routeModules:c}=tu(),[s,f]=A.useState([]);return A.useEffect(()=>{let h=!1;return vy(l,u,c).then(m=>{h||f(m)}),()=>{h=!0}},[l,u,c]),s}function _y({page:l,matches:u,...c}){let s=Kt(),{future:f}=tu(),{basename:h}=Zo(),m=A.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let p=a0(l,h,f.v8_trailingSlashAwareDataRequests,"rsc"),b=!1,y=[];for(let x of u)typeof x.route.shouldRevalidate=="function"?b=!0:y.push(x.route.id);return b&&y.length>0&&p.searchParams.set("_routes",y.join(",")),[p.pathname+p.search]},[h,f.v8_trailingSlashAwareDataRequests,l,s,u]);return A.createElement(A.Fragment,null,m.map(p=>A.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...c})))}function wy({page:l,matches:u,...c}){let s=Kt(),{future:f,manifest:h,routeModules:m}=tu(),{basename:p}=Zo(),{loaderData:b,matches:y}=Ry(),x=A.useMemo(()=>ym(l,u,y,h,s,"data"),[l,u,y,h,s]),v=A.useMemo(()=>ym(l,u,y,h,s,"assets"),[l,u,y,h,s]),z=A.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let Y=new Set,M=!1;if(u.forEach(V=>{var K;let U=h.routes[V.route.id];!U||!U.hasLoader||(!x.some(I=>I.route.id===V.route.id)&&V.route.id in b&&((K=m[V.route.id])!=null&&K.shouldRevalidate)||U.hasClientLoader?M=!0:Y.add(V.route.id))}),Y.size===0)return[];let T=a0(l,p,f.v8_trailingSlashAwareDataRequests,"data");return M&&Y.size>0&&T.searchParams.set("_routes",u.filter(V=>Y.has(V.route.id)).map(V=>V.route.id).join(",")),[T.pathname+T.search]},[p,f.v8_trailingSlashAwareDataRequests,b,s,h,x,u,l,m]),k=A.useMemo(()=>Sy(v,h),[v,h]),L=Cy(v);return A.createElement(A.Fragment,null,z.map(Y=>A.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...c})),k.map(Y=>A.createElement("link",{key:Y,rel:"modulepreload",href:Y,...c})),L.map(({key:Y,link:M})=>A.createElement("link",{key:Y,nonce:c.nonce,...M,crossOrigin:M.crossOrigin??c.crossOrigin})))}function zy(...l){return u=>{l.forEach(c=>{typeof c=="function"?c(u):c!=null&&(c.current=u)})}}var Oy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Oy&&(window.__reactRouterVersion="7.18.1")}catch{}function Uy({basename:l,children:u,useTransitions:c,window:s}){let f=A.useRef();f.current==null&&(f.current=f1({window:s,v5Compat:!0}));let h=f.current,[m,p]=A.useState({action:h.action,location:h.location}),b=A.useCallback(y=>{c===!1?p(y):A.startTransition(()=>p(y))},[c]);return A.useLayoutEffect(()=>h.listen(b),[h,b]),A.createElement(uy,{basename:l,children:u,location:m.location,navigationType:m.action,navigator:h,useTransitions:c})}var Jn=A.forwardRef(function({onClick:u,discover:c="render",prefetch:s="none",relative:f,reloadDocument:h,replace:m,mask:p,state:b,target:y,to:x,preventScrollReset:v,viewTransition:z,defaultShouldRevalidate:k,...L},Y){let{basename:M,navigator:T,useTransitions:V}=A.useContext(_t),U=typeof x=="string"&&qo.test(x),K=Jm(x,M);x=K.to;let I=Z1(x,{relative:f}),ee=Kt(),J=null;if(p){let Ce=Ir(p,[],ee.mask?ee.mask.pathname:"/",!0);M!=="/"&&(Ce.pathname=Ce.pathname==="/"?M:Jt([M,Ce.pathname])),J=T.createHref(Ce)}let[oe,Se,Ue]=Ty(s,L),Me=Ly(x,{replace:m,mask:p,state:b,target:y,preventScrollReset:v,relative:f,viewTransition:z,defaultShouldRevalidate:k,useTransitions:V});function Ne(Ce){u&&u(Ce),Ce.defaultPrevented||Me(Ce)}let st=!(K.isExternal||h),we=A.createElement("a",{...L,...Ue,href:(st?J:void 0)||K.absoluteURL||I,onClick:st?Ne:u,ref:zy(Y,Se),target:y,"data-discover":!U&&c==="render"?"true":void 0});return oe&&!U?A.createElement(A.Fragment,null,we,A.createElement(Ay,{page:I})):we});Jn.displayName="Link";var Vr=A.forwardRef(function({"aria-current":u="page",caseSensitive:c=!1,className:s="",end:f=!1,style:h,to:m,viewTransition:p,children:b,...y},x){let v=yi(m,{relative:y.relative}),z=Kt(),k=A.useContext(Pr),{navigator:L,basename:Y}=A.useContext(_t),M=k!=null&&Gy(v)&&p===!0,T=L.encodeLocation?L.encodeLocation(v).pathname:v.pathname,V=z.pathname,U=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;c||(V=V.toLowerCase(),U=U?U.toLowerCase():null,T=T.toLowerCase()),U&&Y&&(U=Sn(U,Y)||U);const K=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let I=V===T||!f&&V.startsWith(T)&&V.charAt(K)==="/",ee=U!=null&&(U===T||!f&&U.startsWith(T)&&U.charAt(T.length)==="/"),J={isActive:I,isPending:ee,isTransitioning:M},oe=I?u:void 0,Se;typeof s=="function"?Se=s(J):Se=[s,I?"active":null,ee?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof h=="function"?h(J):h;return A.createElement(Jn,{...y,"aria-current":oe,className:Se,ref:x,style:Ue,to:m,viewTransition:p},typeof b=="function"?b(J):b)});Vr.displayName="NavLink";var My=A.forwardRef(({discover:l="render",fetcherKey:u,navigate:c,reloadDocument:s,replace:f,state:h,method:m=Yr,action:p,onSubmit:b,relative:y,preventScrollReset:x,viewTransition:v,defaultShouldRevalidate:z,...k},L)=>{let{useTransitions:Y}=A.useContext(_t),M=ky(),T=Yy(p,{relative:y}),V=m.toLowerCase()==="get"?"get":"post",U=typeof p=="string"&&qo.test(p),K=I=>{if(b&&b(I),I.defaultPrevented)return;I.preventDefault();let ee=I.nativeEvent.submitter,J=(ee==null?void 0:ee.getAttribute("formmethod"))||m,oe=()=>M(ee||I.currentTarget,{fetcherKey:u,method:J,navigate:c,replace:f,state:h,relative:y,preventScrollReset:x,viewTransition:v,defaultShouldRevalidate:z});Y&&c!==!1?A.startTransition(()=>oe()):oe()};return A.createElement("form",{ref:L,method:V,action:T,onSubmit:s?b:K,...k,"data-discover":!U&&l==="render"?"true":void 0})});My.displayName="Form";function Dy(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l0(l){let u=A.useContext(cl);return Be(u,Dy(l)),u}function Ly(l,{target:u,replace:c,mask:s,state:f,preventScrollReset:h,relative:m,viewTransition:p,defaultShouldRevalidate:b,useTransitions:y}={}){let x=pi(),v=Kt(),z=yi(l,{relative:m});return A.useCallback(k=>{if(hy(k,u)){k.preventDefault();let L=c!==void 0?c:hi(v)===hi(z),Y=()=>x(l,{replace:L,mask:s,state:f,preventScrollReset:h,relative:m,viewTransition:p,defaultShouldRevalidate:b});y?A.startTransition(()=>Y()):Y()}},[v,x,z,c,s,f,u,l,h,m,p,b,y])}function By(l){kt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let u=A.useRef(Uo(l)),c=A.useRef(!1),s=Kt(),f=A.useMemo(()=>my(s.search,c.current?null:u.current),[s.search]),h=pi(),m=A.useCallback((p,b)=>{const y=Uo(typeof p=="function"?p(new URLSearchParams(f)):p);c.current=!0,h("?"+y,b)},[h,f]);return[f,m]}var Hy=0,qy=()=>`__${String(++Hy)}__`;function ky(){let{router:l}=l0("useSubmit"),{basename:u}=A.useContext(_t),c=ay(),s=l.fetch,f=l.navigate;return A.useCallback(async(h,m={})=>{let{action:p,method:b,encType:y,formData:x,body:v}=yy(h,u);if(m.navigate===!1){let z=m.fetcherKey||qy();await s(z,c,m.action||p,{defaultShouldRevalidate:m.defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:x,body:v,formMethod:m.method||b,formEncType:m.encType||y,flushSync:m.flushSync})}else await f(m.action||p,{defaultShouldRevalidate:m.defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:x,body:v,formMethod:m.method||b,formEncType:m.encType||y,replace:m.replace,state:m.state,fromRouteId:c,flushSync:m.flushSync,viewTransition:m.viewTransition})},[s,f,u,c])}function Yy(l,{relative:u}={}){let{basename:c}=A.useContext(_t),s=A.useContext(tn);Be(s,"useFormAction must be used inside a RouteContext");let[f]=s.matches.slice(-1),h={...yi(l||".",{relative:u})},m=Kt();if(l==null){h.search=m.search;let p=new URLSearchParams(h.search),b=p.getAll("index");if(b.some(x=>x==="")){p.delete("index"),b.filter(v=>v).forEach(v=>p.append("index",v));let x=p.toString();h.search=x?`?${x}`:""}}return(!l||l===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(h.pathname=h.pathname==="/"?c:Jt([c,h.pathname])),hi(h)}function Gy(l,{relative:u}={}){let c=A.useContext(Wm);Be(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=l0("useViewTransitionState"),f=yi(l,{relative:u});if(!c.isTransitioning)return!1;let h=Sn(c.currentLocation.pathname,s)||c.currentLocation.pathname,m=Sn(c.nextLocation.pathname,s)||c.nextLocation.pathname;return Jr(f.pathname,m)!=null||Jr(f.pathname,h)!=null}function i0(l,u){return function(){return l.apply(u,arguments)}}const{toString:Vy}=Object.prototype,{getPrototypeOf:ul}=Object,{iterator:bi,toStringTag:r0}=Symbol,Fr=(({hasOwnProperty:l})=>(u,c)=>l.call(u,c))(Object.prototype),mi=(l,u)=>{let c=l;const s=[];for(;c!=null&&c!==Object.prototype;){if(s.indexOf(c)!==-1)return!1;if(s.push(c),Fr(c,u))return!0;c=ul(c)}return!1},Xy=(l,u)=>l!=null&&mi(l,u)?l[u]:void 0,Ko=(l=>u=>{const c=Vy.call(u);return l[c]||(l[c]=c.slice(8,-1).toLowerCase())})(Object.create(null)),Ft=l=>(l=l.toLowerCase(),u=>Ko(u)===l),nu=l=>u=>typeof u===l,{isArray:ba}=Array,sl=nu("undefined");function dl(l){return l!==null&&!sl(l)&&l.constructor!==null&&!sl(l.constructor)&&pt(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const u0=Ft("ArrayBuffer");function Qy(l){let u;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?u=ArrayBuffer.isView(l):u=l&&l.buffer&&u0(l.buffer),u}const Zy=nu("string"),pt=nu("function"),s0=nu("number"),hl=l=>l!==null&&typeof l=="object",Jy=l=>l===!0||l===!1,Xr=l=>{if(!hl(l))return!1;const u=ul(l);return(u===null||u===Object.prototype||ul(u)===null)&&!mi(l,r0)&&!mi(l,bi)},Ky=l=>{if(!hl(l)||dl(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},Fy=Ft("Date"),Wy=Ft("File"),$y=l=>!!(l&&typeof l.uri<"u"),Iy=l=>l&&typeof l.getParts<"u",Py=Ft("Blob"),e2=Ft("FileList"),t2=l=>hl(l)&&pt(l.pipe);function n2(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const bm=n2(),xm=typeof bm.FormData<"u"?bm.FormData:void 0,a2=l=>{if(!l)return!1;if(xm&&l instanceof xm)return!0;const u=ul(l);if(!u||u===Object.prototype||!pt(l.append))return!1;const c=Ko(l);return c==="formdata"||c==="object"&&pt(l.toString)&&l.toString()==="[object FormData]"},l2=Ft("URLSearchParams"),[i2,r2,u2,s2]=["ReadableStream","Request","Response","Headers"].map(Ft),o2=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function xi(l,u,{allOwnKeys:c=!1}={}){if(l===null||typeof l>"u")return;let s,f;if(typeof l!="object"&&(l=[l]),ba(l))for(s=0,f=l.length;s<f;s++)u.call(null,l[s],s,l);else{if(dl(l))return;const h=c?Object.getOwnPropertyNames(l):Object.keys(l),m=h.length;let p;for(s=0;s<m;s++)p=h[s],u.call(null,l[p],p,l)}}function o0(l,u){if(dl(l))return null;u=u.toLowerCase();const c=Object.keys(l);let s=c.length,f;for(;s-- >0;)if(f=c[s],u===f.toLowerCase())return f;return null}const pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,c0=l=>!sl(l)&&l!==pa;function Mo(...l){const{caseless:u,skipUndefined:c}=c0(this)&&this||{},s={},f=(h,m)=>{if(m==="__proto__"||m==="constructor"||m==="prototype")return;const p=u&&typeof m=="string"&&o0(s,m)||m,b=Fr(s,p)?s[p]:void 0;Xr(b)&&Xr(h)?s[p]=Mo(b,h):Xr(h)?s[p]=Mo({},h):ba(h)?s[p]=h.slice():(!c||!sl(h))&&(s[p]=h)};for(let h=0,m=l.length;h<m;h++){const p=l[h];if(!p||dl(p)||(xi(p,f),typeof p!="object"||ba(p)))continue;const b=Object.getOwnPropertySymbols(p);for(let y=0;y<b.length;y++){const x=b[y];S2.call(p,x)&&f(p[x],x)}}return s}const c2=(l,u,c,{allOwnKeys:s}={})=>(xi(u,(f,h)=>{c&&pt(f)?Object.defineProperty(l,h,{__proto__:null,value:i0(f,c),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(l,h,{__proto__:null,value:f,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),l),f2=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),d2=(l,u,c,s)=>{l.prototype=Object.create(u.prototype,s),Object.defineProperty(l.prototype,"constructor",{__proto__:null,value:l,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(l,"super",{__proto__:null,value:u.prototype}),c&&Object.assign(l.prototype,c)},h2=(l,u,c,s)=>{let f,h,m;const p={};if(u=u||{},l==null)return u;do{for(f=Object.getOwnPropertyNames(l),h=f.length;h-- >0;)m=f[h],(!s||s(m,l,u))&&!p[m]&&(u[m]=l[m],p[m]=!0);l=c!==!1&&ul(l)}while(l&&(!c||c(l,u))&&l!==Object.prototype);return u},m2=(l,u,c)=>{l=String(l),(c===void 0||c>l.length)&&(c=l.length),c-=u.length;const s=l.indexOf(u,c);return s!==-1&&s===c},g2=l=>{if(!l)return null;if(ba(l))return l;let u=l.length;if(!s0(u))return null;const c=new Array(u);for(;u-- >0;)c[u]=l[u];return c},p2=(l=>u=>l&&u instanceof l)(typeof Uint8Array<"u"&&ul(Uint8Array)),y2=(l,u)=>{const s=(l&&l[bi]).call(l);let f;for(;(f=s.next())&&!f.done;){const h=f.value;u.call(l,h[0],h[1])}},b2=(l,u)=>{let c;const s=[];for(;(c=l.exec(u))!==null;)s.push(c);return s},x2=Ft("HTMLFormElement"),v2=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(c,s,f){return s.toUpperCase()+f}),{propertyIsEnumerable:S2}=Object.prototype,E2=Ft("RegExp"),f0=(l,u)=>{const c=Object.getOwnPropertyDescriptors(l),s={};xi(c,(f,h)=>{let m;(m=u(f,h,l))!==!1&&(s[h]=m||f)}),Object.defineProperties(l,s)},j2=l=>{f0(l,(u,c)=>{if(pt(l)&&["arguments","caller","callee"].includes(c))return!1;const s=l[c];if(pt(s)){if(u.enumerable=!1,"writable"in u){u.writable=!1;return}u.set||(u.set=()=>{throw Error("Can not rewrite read-only method '"+c+"'")})}})},N2=(l,u)=>{const c={},s=f=>{f.forEach(h=>{c[h]=!0})};return ba(l)?s(l):s(String(l).split(u)),c},R2=()=>{},T2=(l,u)=>l!=null&&Number.isFinite(l=+l)?l:u;function A2(l){return!!(l&&pt(l.append)&&l[r0]==="FormData"&&l[bi])}const C2=l=>{const u=new WeakSet,c=s=>{if(hl(s)){if(u.has(s))return;if(dl(s))return s;if(!("toJSON"in s)){u.add(s);const f=ba(s)?[]:{};return xi(s,(h,m)=>{const p=c(h);!sl(p)&&(f[m]=p)}),u.delete(s),f}}return s};return c(l)},_2=Ft("AsyncFunction"),w2=l=>l&&(hl(l)||pt(l))&&pt(l.then)&&pt(l.catch),d0=((l,u)=>l?setImmediate:u?((c,s)=>(pa.addEventListener("message",({source:f,data:h})=>{f===pa&&h===c&&s.length&&s.shift()()},!1),f=>{s.push(f),pa.postMessage(c,"*")}))(`axios@${Math.random()}`,[]):c=>setTimeout(c))(typeof setImmediate=="function",pt(pa.postMessage)),z2=typeof queueMicrotask<"u"?queueMicrotask.bind(pa):typeof process<"u"&&process.nextTick||d0,h0=l=>l!=null&&pt(l[bi]),O2=l=>l!=null&&mi(l,bi)&&h0(l),N={isArray:ba,isArrayBuffer:u0,isBuffer:dl,isFormData:a2,isArrayBufferView:Qy,isString:Zy,isNumber:s0,isBoolean:Jy,isObject:hl,isPlainObject:Xr,isEmptyObject:Ky,isReadableStream:i2,isRequest:r2,isResponse:u2,isHeaders:s2,isUndefined:sl,isDate:Fy,isFile:Wy,isReactNativeBlob:$y,isReactNative:Iy,isBlob:Py,isRegExp:E2,isFunction:pt,isStream:t2,isURLSearchParams:l2,isTypedArray:p2,isFileList:e2,forEach:xi,merge:Mo,extend:c2,trim:o2,stripBOM:f2,inherits:d2,toFlatObject:h2,kindOf:Ko,kindOfTest:Ft,endsWith:m2,toArray:g2,forEachEntry:y2,matchAll:b2,isHTMLForm:x2,hasOwnProperty:Fr,hasOwnProp:Fr,hasOwnInPrototypeChain:mi,getSafeProp:Xy,reduceDescriptors:f0,freezeMethods:j2,toObjectSet:N2,toCamelCase:v2,noop:R2,toFiniteNumber:T2,findKey:o0,global:pa,isContextDefined:c0,isSpecCompliantForm:A2,toJSONObject:C2,isAsyncFn:_2,isThenable:w2,setImmediate:d0,asap:z2,isIterable:h0,isSafeIterable:O2},U2=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),M2=l=>{const u={};let c,s,f;return l&&l.split(`
`).forEach(function(m){f=m.indexOf(":"),c=m.substring(0,f).trim().toLowerCase(),s=m.substring(f+1).trim(),!(!c||u[c]&&U2[c])&&(c==="set-cookie"?u[c]?u[c].push(s):u[c]=[s]:u[c]=u[c]?u[c]+", "+s:s)}),u};function D2(l){let u=0,c=l.length;for(;u<c;){const s=l.charCodeAt(u);if(s!==9&&s!==32)break;u+=1}for(;c>u;){const s=l.charCodeAt(c-1);if(s!==9&&s!==32)break;c-=1}return u===0&&c===l.length?l:l.slice(u,c)}const L2=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),B2=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Fo(l,u){return N.isArray(l)?l.map(c=>Fo(c,u)):D2(String(l).replace(u,""))}const H2=l=>Fo(l,L2),q2=l=>Fo(l,B2);function m0(l){const u=Object.create(null);return N.forEach(l.toJSON(),(c,s)=>{u[s]=q2(c)}),u}const vm=Symbol("internals");function di(l){return l&&String(l).trim().toLowerCase()}function Qr(l){return l===!1||l==null?l:N.isArray(l)?l.map(Qr):H2(String(l))}function k2(l){const u=Object.create(null),c=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=c.exec(l);)u[s[1]]=s[2];return u}const Y2=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function Ao(l,u,c,s,f){if(N.isFunction(s))return s.call(this,u,c);if(f&&(u=c),!!N.isString(u)){if(N.isString(s))return u.indexOf(s)!==-1;if(N.isRegExp(s))return s.test(u)}}function G2(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(u,c,s)=>c.toUpperCase()+s)}function V2(l,u){const c=N.toCamelCase(" "+u);["get","set","has"].forEach(s=>{Object.defineProperty(l,s+c,{__proto__:null,value:function(f,h,m){return this[s].call(this,u,f,h,m)},configurable:!0})})}let it=class{constructor(u){u&&this.set(u)}set(u,c,s){const f=this;function h(p,b,y){const x=di(b);if(!x)return;const v=N.findKey(f,x);(!v||f[v]===void 0||y===!0||y===void 0&&f[v]!==!1)&&(f[v||b]=Qr(p))}const m=(p,b)=>N.forEach(p,(y,x)=>h(y,x,b));if(N.isPlainObject(u)||u instanceof this.constructor)m(u,c);else if(N.isString(u)&&(u=u.trim())&&!Y2(u))m(M2(u),c);else if(N.isObject(u)&&N.isSafeIterable(u)){let p=Object.create(null),b,y;for(const x of u){if(!N.isArray(x))throw new TypeError("Object iterator must return a key-value pair");y=x[0],N.hasOwnProp(p,y)?(b=p[y],p[y]=N.isArray(b)?[...b,x[1]]:[b,x[1]]):p[y]=x[1]}m(p,c)}else u!=null&&h(c,u,s);return this}get(u,c){if(u=di(u),u){const s=N.findKey(this,u);if(s){const f=this[s];if(!c)return f;if(c===!0)return k2(f);if(N.isFunction(c))return c.call(this,f,s);if(N.isRegExp(c))return c.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(u,c){if(u=di(u),u){const s=N.findKey(this,u);return!!(s&&this[s]!==void 0&&(!c||Ao(this,this[s],s,c)))}return!1}delete(u,c){const s=this;let f=!1;function h(m){if(m=di(m),m){const p=N.findKey(s,m);p&&(!c||Ao(s,s[p],p,c))&&(delete s[p],f=!0)}}return N.isArray(u)?u.forEach(h):h(u),f}clear(u){const c=Object.keys(this);let s=c.length,f=!1;for(;s--;){const h=c[s];(!u||Ao(this,this[h],h,u,!0))&&(delete this[h],f=!0)}return f}normalize(u){const c=this,s={};return N.forEach(this,(f,h)=>{const m=N.findKey(s,h);if(m){c[m]=Qr(f),delete c[h];return}const p=u?G2(h):String(h).trim();p!==h&&delete c[h],c[p]=Qr(f),s[p]=!0}),this}concat(...u){return this.constructor.concat(this,...u)}toJSON(u){const c=Object.create(null);return N.forEach(this,(s,f)=>{s!=null&&s!==!1&&(c[f]=u&&N.isArray(s)?s.join(", "):s)}),c}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([u,c])=>u+": "+c).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(u){return u instanceof this?u:new this(u)}static concat(u,...c){const s=new this(u);return c.forEach(f=>s.set(f)),s}static accessor(u){const s=(this[vm]=this[vm]={accessors:{}}).accessors,f=this.prototype;function h(m){const p=di(m);s[p]||(V2(f,m),s[p]=!0)}return N.isArray(u)?u.forEach(h):h(u),this}};it.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(it.prototype,({value:l},u)=>{let c=u[0].toUpperCase()+u.slice(1);return{get:()=>l,set(s){this[c]=s}}});N.freezeMethods(it);const X2="[REDACTED ****]";function Q2(l){if(N.hasOwnProp(l,"toJSON"))return!0;let u=Object.getPrototypeOf(l);for(;u&&u!==Object.prototype;){if(N.hasOwnProp(u,"toJSON"))return!0;u=Object.getPrototypeOf(u)}return!1}function Z2(l,u){const c=new Set(u.map(h=>String(h).toLowerCase())),s=[],f=h=>{if(h===null||typeof h!="object"||N.isBuffer(h))return h;if(s.indexOf(h)!==-1)return;h instanceof it&&(h=h.toJSON()),s.push(h);let m;if(N.isArray(h))m=[],h.forEach((p,b)=>{const y=f(p);N.isUndefined(y)||(m[b]=y)});else{if(!N.isPlainObject(h)&&Q2(h))return s.pop(),h;m=Object.create(null);for(const[p,b]of Object.entries(h)){const y=c.has(p.toLowerCase())?X2:f(b);N.isUndefined(y)||(m[p]=y)}}return s.pop(),m};return f(l)}let Z=class g0 extends Error{static from(u,c,s,f,h,m){const p=new g0(u.message,c||u.code,s,f,h);return Object.defineProperty(p,"cause",{__proto__:null,value:u,writable:!0,enumerable:!1,configurable:!0}),p.name=u.name,u.status!=null&&p.status==null&&(p.status=u.status),m&&Object.assign(p,m),p}constructor(u,c,s,f,h){super(u),Object.defineProperty(this,"message",{__proto__:null,value:u,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,c&&(this.code=c),s&&(this.config=s),f&&(this.request=f),h&&(this.response=h,this.status=h.status)}toJSON(){const u=this.config,c=u&&N.hasOwnProp(u,"redact")?u.redact:void 0,s=N.isArray(c)&&c.length>0?Z2(u,c):N.toJSONObject(u);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:s,code:this.code,status:this.status}}};Z.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Z.ERR_BAD_OPTION="ERR_BAD_OPTION";Z.ECONNABORTED="ECONNABORTED";Z.ETIMEDOUT="ETIMEDOUT";Z.ECONNREFUSED="ECONNREFUSED";Z.ERR_NETWORK="ERR_NETWORK";Z.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Z.ERR_DEPRECATED="ERR_DEPRECATED";Z.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Z.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Z.ERR_CANCELED="ERR_CANCELED";Z.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Z.ERR_INVALID_URL="ERR_INVALID_URL";Z.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const J2=null,p0=100;function Do(l){return N.isPlainObject(l)||N.isArray(l)}function y0(l){return N.endsWith(l,"[]")?l.slice(0,-2):l}function Co(l,u,c){return l?l.concat(u).map(function(f,h){return f=y0(f),!c&&h?"["+f+"]":f}).join(c?".":""):u}function K2(l){return N.isArray(l)&&!l.some(Do)}const F2=N.toFlatObject(N,{},null,function(u){return/^is[A-Z]/.test(u)});function au(l,u,c){if(!N.isObject(l))throw new TypeError("target must be an object");u=u||new FormData,c=N.toFlatObject(c,{metaTokens:!0,dots:!1,indexes:!1},!1,function(V,U){return!N.isUndefined(U[V])});const s=c.metaTokens,f=c.visitor||L,h=c.dots,m=c.indexes,p=c.Blob||typeof Blob<"u"&&Blob,b=c.maxDepth===void 0?p0:c.maxDepth,y=p&&N.isSpecCompliantForm(u),x=[];if(!N.isFunction(f))throw new TypeError("visitor must be a function");function v(T){if(T===null)return"";if(N.isDate(T))return T.toISOString();if(N.isBoolean(T))return T.toString();if(!y&&N.isBlob(T))throw new Z("Blob is not supported. Use a Buffer instead.");if(N.isArrayBuffer(T)||N.isTypedArray(T)){if(y&&typeof p=="function")return new p([T]);if(typeof Buffer<"u")return Buffer.from(T);throw new Z("Blob is not supported. Use a Buffer instead.",Z.ERR_NOT_SUPPORT)}return T}function z(T){if(T>b)throw new Z("Object is too deeply nested ("+T+" levels). Max depth: "+b,Z.ERR_FORM_DATA_DEPTH_EXCEEDED)}function k(T,V){if(b===1/0)return JSON.stringify(T);const U=[];return JSON.stringify(T,function(I,ee){if(!N.isObject(ee))return ee;for(;U.length&&U[U.length-1]!==this;)U.pop();return U.push(ee),z(V+U.length-1),ee})}function L(T,V,U){let K=T;if(N.isReactNative(u)&&N.isReactNativeBlob(T))return u.append(Co(U,V,h),v(T)),!1;if(T&&!U&&typeof T=="object"){if(N.endsWith(V,"{}"))V=s?V:V.slice(0,-2),T=k(T,1);else if(N.isArray(T)&&K2(T)||(N.isFileList(T)||N.endsWith(V,"[]"))&&(K=N.toArray(T)))return V=y0(V),K.forEach(function(ee,J){!(N.isUndefined(ee)||ee===null)&&u.append(m===!0?Co([V],J,h):m===null?V:V+"[]",v(ee))}),!1}return Do(T)?!0:(u.append(Co(U,V,h),v(T)),!1)}const Y=Object.assign(F2,{defaultVisitor:L,convertValue:v,isVisitable:Do});function M(T,V,U=0){if(!N.isUndefined(T)){if(z(U),x.indexOf(T)!==-1)throw new Error("Circular reference detected in "+V.join("."));x.push(T),N.forEach(T,function(I,ee){(!(N.isUndefined(I)||I===null)&&f.call(u,I,N.isString(ee)?ee.trim():ee,V,Y))===!0&&M(I,V?V.concat(ee):[ee],U+1)}),x.pop()}}if(!N.isObject(l))throw new TypeError("data must be an object");return M(l),u}function Sm(l){const u={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(l).replace(/[!'()~]|%20/g,function(s){return u[s]})}function Wo(l,u){this._pairs=[],l&&au(l,this,u)}const b0=Wo.prototype;b0.append=function(u,c){this._pairs.push([u,c])};b0.toString=function(u){const c=u?s=>u.call(this,s,Sm):Sm;return this._pairs.map(function(f){return c(f[0])+"="+c(f[1])},"").join("&")};function W2(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function x0(l,u,c){if(!u)return l;l=l||"";const s=N.isFunction(c)?{serialize:c}:c,f=N.getSafeProp(s,"encode")||W2,h=N.getSafeProp(s,"serialize");let m;if(h?m=h(u,s):m=N.isURLSearchParams(u)?u.toString():new Wo(u,s).toString(f),m){const p=l.indexOf("#");p!==-1&&(l=l.slice(0,p)),l+=(l.indexOf("?")===-1?"?":"&")+m}return l}class Em{constructor(){this.handlers=[]}use(u,c,s){return this.handlers.push({fulfilled:u,rejected:c,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(u){this.handlers[u]&&(this.handlers[u]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(u){N.forEach(this.handlers,function(s){s!==null&&u(s)})}}const $o={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},$2=typeof URLSearchParams<"u"?URLSearchParams:Wo,I2=typeof FormData<"u"?FormData:null,P2=typeof Blob<"u"?Blob:null,eb={isBrowser:!0,classes:{URLSearchParams:$2,FormData:I2,Blob:P2},protocols:["http","https","file","blob","url","data"]},Io=typeof window<"u"&&typeof document<"u",Lo=typeof navigator=="object"&&navigator||void 0,tb=Io&&(!Lo||["ReactNative","NativeScript","NS"].indexOf(Lo.product)<0),nb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ab=Io&&window.location.href||"http://localhost",lb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Io,hasStandardBrowserEnv:tb,hasStandardBrowserWebWorkerEnv:nb,navigator:Lo,origin:ab},Symbol.toStringTag,{value:"Module"})),nt={...lb,...eb};function ib(l,u){return au(l,new nt.classes.URLSearchParams,{visitor:function(c,s,f,h){return nt.isNode&&N.isBuffer(c)?(this.append(s,c.toString("base64")),!1):h.defaultVisitor.apply(this,arguments)},...u})}const jm=p0;function v0(l){if(l>jm)throw new Z("FormData field is too deeply nested ("+l+" levels). Max depth: "+jm,Z.ERR_FORM_DATA_DEPTH_EXCEEDED)}function rb(l){const u=[],c=/\w+|\[(\w*)]/g;let s;for(;(s=c.exec(l))!==null;)v0(u.length),u.push(s[0]==="[]"?"":s[1]||s[0]);return u}function ub(l){const u={},c=Object.keys(l);let s;const f=c.length;let h;for(s=0;s<f;s++)h=c[s],u[h]=l[h];return u}function S0(l){function u(c,s,f,h){v0(h);let m=c[h++];if(m==="__proto__")return!0;const p=Number.isFinite(+m),b=h>=c.length;return m=!m&&N.isArray(f)?f.length:m,b?(N.hasOwnProp(f,m)?f[m]=N.isArray(f[m])?f[m].concat(s):[f[m],s]:f[m]=s,!p):((!N.hasOwnProp(f,m)||!N.isObject(f[m]))&&(f[m]=[]),u(c,s,f[m],h)&&N.isArray(f[m])&&(f[m]=ub(f[m])),!p)}if(N.isFormData(l)&&N.isFunction(l.entries)){const c={};return N.forEachEntry(l,(s,f)=>{u(rb(s),f,c,0)}),c}return null}const rl=(l,u)=>l!=null&&N.hasOwnProp(l,u)?l[u]:void 0;function sb(l,u,c){if(N.isString(l))try{return(u||JSON.parse)(l),N.trim(l)}catch(s){if(s.name!=="SyntaxError")throw s}return(c||JSON.stringify)(l)}const vi={transitional:$o,adapter:["xhr","http","fetch"],transformRequest:[function(u,c){const s=c.getContentType()||"",f=s.indexOf("application/json")>-1,h=N.isObject(u);if(h&&N.isHTMLForm(u)&&(u=new FormData(u)),N.isFormData(u))return f?JSON.stringify(S0(u)):u;if(N.isArrayBuffer(u)||N.isBuffer(u)||N.isStream(u)||N.isFile(u)||N.isBlob(u)||N.isReadableStream(u))return u;if(N.isArrayBufferView(u))return u.buffer;if(N.isURLSearchParams(u))return c.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),u.toString();let p;if(h){const b=rl(this,"formSerializer");if(s.indexOf("application/x-www-form-urlencoded")>-1)return ib(u,b).toString();if((p=N.isFileList(u))||s.indexOf("multipart/form-data")>-1){const y=rl(this,"env"),x=y&&y.FormData;return au(p?{"files[]":u}:u,x&&new x,b)}}return h||f?(c.setContentType("application/json",!1),sb(u)):u}],transformResponse:[function(u){const c=rl(this,"transitional")||vi.transitional,s=c&&c.forcedJSONParsing,f=rl(this,"responseType"),h=f==="json";if(N.isResponse(u)||N.isReadableStream(u))return u;if(u&&N.isString(u)&&(s&&!f||h)){const p=!(c&&c.silentJSONParsing)&&h;try{return JSON.parse(u,rl(this,"parseReviver"))}catch(b){if(p)throw b.name==="SyntaxError"?Z.from(b,Z.ERR_BAD_RESPONSE,this,null,rl(this,"response")):b}}return u}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(u){return u>=200&&u<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch","query"],l=>{vi.headers[l]={}});function _o(l,u){const c=this||vi,s=u||c,f=it.from(s.headers);let h=s.data;return N.forEach(l,function(p){h=p.call(c,h,f.normalize(),u?u.status:void 0)}),f.normalize(),h}function E0(l){return!!(l&&l.__CANCEL__)}let Si=class extends Z{constructor(u,c,s){super(u??"canceled",Z.ERR_CANCELED,c,s),this.name="CanceledError",this.__CANCEL__=!0}};function j0(l,u,c){const s=c.config.validateStatus;!c.status||!s||s(c.status)?l(c):u(new Z("Request failed with status code "+c.status,c.status>=400&&c.status<500?Z.ERR_BAD_REQUEST:Z.ERR_BAD_RESPONSE,c.config,c.request,c))}function ob(l){const u=/^([-+\w]{1,25}):(?:\/\/)?/.exec(l);return u&&u[1]||""}function cb(l,u){l=l||10;const c=new Array(l),s=new Array(l);let f=0,h=0,m;return u=u!==void 0?u:1e3,function(b){const y=Date.now(),x=s[h];m||(m=y),c[f]=b,s[f]=y;let v=h,z=0;for(;v!==f;)z+=c[v++],v=v%l;if(f=(f+1)%l,f===h&&(h=(h+1)%l),y-m<u)return;const k=x&&y-x;return k?Math.round(z*1e3/k):void 0}}function fb(l,u){let c=0,s=1e3/u,f,h;const m=(y,x=Date.now())=>{c=x,f=null,h&&(clearTimeout(h),h=null),l(...y)};return[(...y)=>{const x=Date.now(),v=x-c;v>=s?m(y,x):(f=y,h||(h=setTimeout(()=>{h=null,m(f)},s-v)))},()=>f&&m(f)]}const Wr=(l,u,c=3)=>{let s=0;const f=cb(50,250);return fb(h=>{if(!h||typeof h.loaded!="number")return;const m=h.loaded,p=h.lengthComputable?h.total:void 0,b=p!=null?Math.min(m,p):m,y=Math.max(0,b-s),x=f(y);s=Math.max(s,b);const v={loaded:b,total:p,progress:p?b/p:void 0,bytes:y,rate:x||void 0,estimated:x&&p?(p-b)/x:void 0,event:h,lengthComputable:p!=null,[u?"download":"upload"]:!0};l(v)},c)},Nm=(l,u)=>{const c=l!=null;return[s=>u[0]({lengthComputable:c,total:l,loaded:s}),u[1]]},Rm=l=>(...u)=>N.asap(()=>l(...u)),db=nt.hasStandardBrowserEnv?((l,u)=>c=>(c=new URL(c,nt.origin),l.protocol===c.protocol&&l.host===c.host&&(u||l.port===c.port)))(new URL(nt.origin),nt.navigator&&/(msie|trident)/i.test(nt.navigator.userAgent)):()=>!0,hb=nt.hasStandardBrowserEnv?{write(l,u,c,s,f,h,m){if(typeof document>"u")return;const p=[`${l}=${encodeURIComponent(u)}`];N.isNumber(c)&&p.push(`expires=${new Date(c).toUTCString()}`),N.isString(s)&&p.push(`path=${s}`),N.isString(f)&&p.push(`domain=${f}`),h===!0&&p.push("secure"),N.isString(m)&&p.push(`SameSite=${m}`),document.cookie=p.join("; ")},read(l){if(typeof document>"u")return null;const u=document.cookie.split(";");for(let c=0;c<u.length;c++){const s=u[c].replace(/^\s+/,""),f=s.indexOf("=");if(f!==-1&&s.slice(0,f)===l)try{return decodeURIComponent(s.slice(f+1))}catch{return s.slice(f+1)}}return null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function mb(l){return typeof l!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function gb(l,u){return u?l.replace(/\/?\/$/,"")+"/"+u.replace(/^\/+/,""):l}const pb=/^https?:(?!\/\/)/i,yb=/[\t\n\r]/g;function bb(l){let u=0;for(;u<l.length&&l.charCodeAt(u)<=32;)u++;return l.slice(u)}function xb(l){return bb(l).replace(yb,"")}function Tm(l,u){if(typeof l=="string"&&pb.test(xb(l)))throw new Z('Invalid URL: missing "//" after protocol',Z.ERR_INVALID_URL,u)}function N0(l,u,c,s){Tm(u,s);let f=!mb(u);return l&&(f||c===!1)?(Tm(l,s),gb(l,u)):u}const Am=l=>l instanceof it?{...l}:l;function xa(l,u){l=l||{},u=u||{};const c=Object.create(null);Object.defineProperty(c,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function s(x,v,z,k){return N.isPlainObject(x)&&N.isPlainObject(v)?N.merge.call({caseless:k},x,v):N.isPlainObject(v)?N.merge({},v):N.isArray(v)?v.slice():v}function f(x,v,z,k){if(N.isUndefined(v)){if(!N.isUndefined(x))return s(void 0,x,z,k)}else return s(x,v,z,k)}function h(x,v){if(!N.isUndefined(v))return s(void 0,v)}function m(x,v){if(N.isUndefined(v)){if(!N.isUndefined(x))return s(void 0,x)}else return s(void 0,v)}function p(x){const v=N.hasOwnProp(u,"transitional")?u.transitional:void 0;if(!N.isUndefined(v))if(N.isPlainObject(v)){if(N.hasOwnProp(v,x))return v[x]}else return;const z=N.hasOwnProp(l,"transitional")?l.transitional:void 0;if(N.isPlainObject(z)&&N.hasOwnProp(z,x))return z[x]}function b(x,v,z){if(N.hasOwnProp(u,z))return s(x,v);if(N.hasOwnProp(l,z))return s(void 0,x)}const y={url:h,method:h,data:h,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,allowedSocketPaths:m,responseEncoding:m,validateStatus:b,headers:(x,v,z)=>f(Am(x),Am(v),z,!0)};return N.forEach(Object.keys({...l,...u}),function(v){if(v==="__proto__"||v==="constructor"||v==="prototype")return;const z=N.hasOwnProp(y,v)?y[v]:f,k=N.hasOwnProp(l,v)?l[v]:void 0,L=N.hasOwnProp(u,v)?u[v]:void 0,Y=z(k,L,v);N.isUndefined(Y)&&z!==b||(c[v]=Y)}),N.hasOwnProp(u,"validateStatus")&&N.isUndefined(u.validateStatus)&&p("validateStatusUndefinedResolves")===!1&&(N.hasOwnProp(l,"validateStatus")?c.validateStatus=s(void 0,l.validateStatus):delete c.validateStatus),c}const vb=["content-type","content-length"];function Sb(l,u,c){if(c!=="content-only"){l.set(u);return}Object.entries(u||{}).forEach(([s,f])=>{vb.includes(s.toLowerCase())&&l.set(s,f)})}const Eb=l=>encodeURIComponent(l).replace(/%([0-9A-F]{2})/gi,(u,c)=>String.fromCharCode(parseInt(c,16)));function R0(l){const u=xa({},l),c=z=>N.hasOwnProp(u,z)?u[z]:void 0,s=c("data");let f=c("withXSRFToken");const h=c("xsrfHeaderName"),m=c("xsrfCookieName");let p=c("headers");const b=c("auth"),y=c("baseURL"),x=c("allowAbsoluteUrls"),v=c("url");if(u.headers=p=it.from(p),u.url=x0(N0(y,v,x,u),c("params"),c("paramsSerializer")),b){const z=N.getSafeProp(b,"username")||"",k=N.getSafeProp(b,"password")||"";try{p.set("Authorization","Basic "+btoa(z+":"+(k?Eb(k):"")))}catch(L){throw Z.from(L,Z.ERR_BAD_OPTION_VALUE,l)}}if(N.isFormData(s)&&(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv||N.isReactNative(s)?p.setContentType(void 0):N.isFunction(s.getHeaders)&&Sb(p,s.getHeaders(),c("formDataHeaderPolicy"))),nt.hasStandardBrowserEnv&&(N.isFunction(f)&&(f=f(u)),f===!0||f==null&&db(u.url))){const k=h&&m&&hb.read(m);k&&p.set(h,k)}return u}const jb=typeof XMLHttpRequest<"u",Nb=jb&&function(l){return new Promise(function(c,s){const f=R0(l);let h=f.data;const m=it.from(f.headers).normalize();let{responseType:p,onUploadProgress:b,onDownloadProgress:y}=f,x,v,z,k,L;function Y(){k&&k(),L&&L(),f.cancelToken&&f.cancelToken.unsubscribe(x),f.signal&&f.signal.removeEventListener("abort",x)}let M=new XMLHttpRequest;M.open(f.method.toUpperCase(),f.url,!0),M.timeout=f.timeout;function T(){if(!M)return;const U=it.from("getAllResponseHeaders"in M&&M.getAllResponseHeaders()),I={data:!p||p==="text"||p==="json"?M.responseText:M.response,status:M.status,statusText:M.statusText,headers:U,config:l,request:M};j0(function(J){c(J),Y()},function(J){s(J),Y()},I),M=null}"onloadend"in M?M.onloadend=T:M.onreadystatechange=function(){!M||M.readyState!==4||M.status===0&&!(M.responseURL&&M.responseURL.startsWith("file:"))||setTimeout(T)},M.onabort=function(){M&&(s(new Z("Request aborted",Z.ECONNABORTED,l,M)),Y(),M=null)},M.onerror=function(K){const I=K&&K.message?K.message:"Network Error",ee=new Z(I,Z.ERR_NETWORK,l,M);ee.event=K||null,s(ee),Y(),M=null},M.ontimeout=function(){let K=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded";const I=f.transitional||$o;f.timeoutErrorMessage&&(K=f.timeoutErrorMessage),s(new Z(K,I.clarifyTimeoutError?Z.ETIMEDOUT:Z.ECONNABORTED,l,M)),Y(),M=null},h===void 0&&m.setContentType(null),"setRequestHeader"in M&&N.forEach(m0(m),function(K,I){M.setRequestHeader(I,K)}),N.isUndefined(f.withCredentials)||(M.withCredentials=!!f.withCredentials),p&&p!=="json"&&(M.responseType=f.responseType),y&&([z,L]=Wr(y,!0),M.addEventListener("progress",z)),b&&M.upload&&([v,k]=Wr(b),M.upload.addEventListener("progress",v),M.upload.addEventListener("loadend",k)),(f.cancelToken||f.signal)&&(x=U=>{M&&(s(!U||U.type?new Si(null,l,M):U),M.abort(),Y(),M=null)},f.cancelToken&&f.cancelToken.subscribe(x),f.signal&&(f.signal.aborted?x():f.signal.addEventListener("abort",x)));const V=ob(f.url);if(V&&!nt.protocols.includes(V)){s(new Z("Unsupported protocol "+V+":",Z.ERR_BAD_REQUEST,l)),Y();return}M.send(h||null)})},Rb=(l,u)=>{if(l=l?l.filter(Boolean):[],!u&&!l.length)return;const c=new AbortController;let s=!1;const f=function(b){if(!s){s=!0,m();const y=b instanceof Error?b:this.reason;c.abort(y instanceof Z?y:new Si(y instanceof Error?y.message:y))}};let h=u&&setTimeout(()=>{h=null,f(new Z(`timeout of ${u}ms exceeded`,Z.ETIMEDOUT))},u);const m=()=>{l&&(h&&clearTimeout(h),h=null,l.forEach(b=>{b.unsubscribe?b.unsubscribe(f):b.removeEventListener("abort",f)}),l=null)};l.forEach(b=>b.addEventListener("abort",f,{once:!0}));const{signal:p}=c;return p.unsubscribe=()=>N.asap(m),p},Tb=function*(l,u){let c=l.byteLength;if(c<u){yield l;return}let s=0,f;for(;s<c;)f=s+u,yield l.slice(s,f),s=f},Ab=async function*(l,u){for await(const c of Cb(l))yield*Tb(c,u)},Cb=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const u=l.getReader();try{for(;;){const{done:c,value:s}=await u.read();if(c)break;yield s}}finally{await u.cancel()}},Cm=(l,u,c,s)=>{const f=Ab(l,u);let h=0,m,p=b=>{m||(m=!0,s&&s(b))};return new ReadableStream({async pull(b){try{const{done:y,value:x}=await f.next();if(y){p(),b.close();return}let v=x.byteLength;if(c){let z=h+=v;c(z)}b.enqueue(new Uint8Array(x))}catch(y){throw p(y),y}},cancel(b){return p(b),f.return()}},{highWaterMark:2})},$r=l=>l>=48&&l<=57||l>=65&&l<=70||l>=97&&l<=102,_b=(l,u,c)=>u+2<c&&$r(l.charCodeAt(u+1))&&$r(l.charCodeAt(u+2));function wb(l){if(!l||typeof l!="string"||!l.startsWith("data:"))return 0;const u=l.indexOf(",");if(u<0)return 0;const c=l.slice(5,u),s=l.slice(u+1);if(/;base64/i.test(c)){let m=s.length;const p=s.length;for(let k=0;k<p;k++)if(s.charCodeAt(k)===37&&k+2<p){const L=s.charCodeAt(k+1),Y=s.charCodeAt(k+2);$r(L)&&$r(Y)&&(m-=2,k+=2)}let b=0,y=p-1;const x=k=>k>=2&&s.charCodeAt(k-2)===37&&s.charCodeAt(k-1)===51&&(s.charCodeAt(k)===68||s.charCodeAt(k)===100);y>=0&&(s.charCodeAt(y)===61?(b++,y--):x(y)&&(b++,y-=3)),b===1&&y>=0&&(s.charCodeAt(y)===61||x(y))&&b++;const z=Math.floor(m/4)*3-(b||0);return z>0?z:0}let h=0;for(let m=0,p=s.length;m<p;m++){const b=s.charCodeAt(m);if(b===37&&_b(s,m,p))h+=1,m+=2;else if(b<128)h+=1;else if(b<2048)h+=2;else if(b>=55296&&b<=56319&&m+1<p){const y=s.charCodeAt(m+1);y>=56320&&y<=57343?(h+=4,m++):h+=3}else h+=3}return h}const Po="1.18.1",_m=64*1024,{isFunction:kr}=N,zb=l=>encodeURIComponent(l).replace(/%([0-9A-F]{2})/gi,(u,c)=>String.fromCharCode(parseInt(c,16))),wm=l=>{if(!N.isString(l))return l;try{return decodeURIComponent(l)}catch{return l}},zm=(l,...u)=>{try{return!!l(...u)}catch{return!1}},Ob=l=>{const u=l.indexOf("://");let c=l;return u!==-1&&(c=c.slice(u+3)),c.includes("@")||c.includes(":")},Ub=l=>{const u=N.global!==void 0&&N.global!==null?N.global:globalThis,{ReadableStream:c,TextEncoder:s}=u;l=N.merge.call({skipUndefined:!0},{Request:u.Request,Response:u.Response},l);const{fetch:f,Request:h,Response:m}=l,p=f?kr(f):typeof fetch=="function",b=kr(h),y=kr(m);if(!p)return!1;const x=p&&kr(c),v=p&&(typeof s=="function"?(T=>V=>T.encode(V))(new s):async T=>new Uint8Array(await new h(T).arrayBuffer())),z=b&&x&&zm(()=>{let T=!1;const V=new h(nt.origin,{body:new c,method:"POST",get duplex(){return T=!0,"half"}}),U=V.headers.has("Content-Type");return V.body!=null&&V.body.cancel(),T&&!U}),k=y&&x&&zm(()=>N.isReadableStream(new m("").body)),L={stream:k&&(T=>T.body)};p&&["text","arrayBuffer","blob","formData","stream"].forEach(T=>{!L[T]&&(L[T]=(V,U)=>{let K=V&&V[T];if(K)return K.call(V);throw new Z(`Response type '${T}' is not supported`,Z.ERR_NOT_SUPPORT,U)})});const Y=async T=>{if(T==null)return 0;if(N.isBlob(T))return T.size;if(N.isSpecCompliantForm(T))return(await new h(nt.origin,{method:"POST",body:T}).arrayBuffer()).byteLength;if(N.isArrayBufferView(T)||N.isArrayBuffer(T))return T.byteLength;if(N.isURLSearchParams(T)&&(T=T+""),N.isString(T))return(await v(T)).byteLength},M=async(T,V)=>{const U=N.toFiniteNumber(T.getContentLength());return U??Y(V)};return async T=>{let{url:V,method:U,data:K,signal:I,cancelToken:ee,timeout:J,onDownloadProgress:oe,onUploadProgress:Se,responseType:Ue,headers:Me,withCredentials:Ne="same-origin",fetchOptions:st,maxContentLength:we,maxBodyLength:Ce}=R0(T);const D=N.isNumber(we)&&we>-1,Q=N.isNumber(Ce)&&Ce>-1,ae=W=>N.hasOwnProp(T,W)?T[W]:void 0;let xe=f||fetch;Ue=Ue?(Ue+"").toLowerCase():"text";let he=Rb([I,ee&&ee.toAbortSignal()],J),E=null;const H=he&&he.unsubscribe&&(()=>{he.unsubscribe()});let X,F=null;const le=()=>new Z("Request body larger than maxBodyLength limit",Z.ERR_BAD_REQUEST,T,E);try{let W;const ue=ae("auth");if(ue){const ie=N.getSafeProp(ue,"username")||"",rt=N.getSafeProp(ue,"password")||"";W={username:ie,password:rt}}if(Ob(V)){const ie=new URL(V,nt.origin);if(!W&&(ie.username||ie.password)){const rt=wm(ie.username),Gt=wm(ie.password);W={username:rt,password:Gt}}(ie.username||ie.password)&&(ie.username="",ie.password="",V=ie.href)}if(W&&(Me.delete("authorization"),Me.set("Authorization","Basic "+btoa(zb((W.username||"")+":"+(W.password||""))))),D&&typeof V=="string"&&V.startsWith("data:")&&wb(V)>we)throw new Z("maxContentLength size of "+we+" exceeded",Z.ERR_BAD_RESPONSE,T,E);if(Q&&U!=="get"&&U!=="head"){const ie=await Y(K);if(typeof ie=="number"&&isFinite(ie)&&(X=ie,ie>Ce))throw le()}const Ve=Q&&(N.isReadableStream(K)||N.isStream(K)),De=(ie,rt,Gt)=>Cm(ie,_m,Vt=>{if(Q&&Vt>Ce)throw F=le();rt&&rt(Vt)},Gt);if(z&&U!=="get"&&U!=="head"&&(Se||Ve)){if(X=X??await M(Me,K),X!==0||Ve){let ie=new h(V,{method:"POST",body:K,duplex:"half"}),rt;if(N.isFormData(K)&&(rt=ie.headers.get("content-type"))&&Me.setContentType(rt),ie.body){const[Gt,Vt]=Se&&Nm(X,Wr(Rm(Se)))||[];K=De(ie.body,Gt,Vt)}}}else if(Ve&&!b&&x&&U!=="get"&&U!=="head")K=De(K);else if(Ve&&b&&!z&&U!=="get"&&U!=="head")throw new Z("Stream request bodies are not supported by the current fetch implementation",Z.ERR_NOT_SUPPORT,T,E);N.isString(Ne)||(Ne=Ne?"include":"omit");const Kn=b&&"credentials"in h.prototype;if(N.isFormData(K)){const ie=Me.getContentType();ie&&/^multipart\/form-data/i.test(ie)&&!/boundary=/i.test(ie)&&Me.delete("content-type")}Me.set("User-Agent","axios/"+Po,!1);const Fn={...st,signal:he,method:U.toUpperCase(),headers:m0(Me.normalize()),body:K,duplex:"half",credentials:Kn?Ne:void 0};E=b&&new h(V,Fn);let yt=await(b?xe(E,st):xe(V,Fn));const gl=it.from(yt.headers);if(D){const ie=N.toFiniteNumber(gl.getContentLength());if(ie!=null&&ie>we)throw new Z("maxContentLength size of "+we+" exceeded",Z.ERR_BAD_RESPONSE,T,E)}const Yt=k&&(Ue==="stream"||Ue==="response");if(k&&yt.body&&(oe||D||Yt&&H)){const ie={};["status","statusText","headers"].forEach(Wn=>{ie[Wn]=yt[Wn]});const rt=N.toFiniteNumber(gl.getContentLength()),[Gt,Vt]=oe&&Nm(rt,Wr(Rm(oe),!0))||[];let Sa=0;const pl=Wn=>{if(D&&(Sa=Wn,Sa>we))throw new Z("maxContentLength size of "+we+" exceeded",Z.ERR_BAD_RESPONSE,T,E);Gt&&Gt(Wn)};yt=new m(Cm(yt.body,_m,pl,()=>{Vt&&Vt(),H&&H()}),ie)}Ue=Ue||"text";let bt=await L[N.findKey(L,Ue)||"text"](yt,T);if(D&&!k&&!Yt){let ie;if(bt!=null&&(typeof bt.byteLength=="number"?ie=bt.byteLength:typeof bt.size=="number"?ie=bt.size:typeof bt=="string"&&(ie=typeof s=="function"?new s().encode(bt).byteLength:bt.length)),typeof ie=="number"&&ie>we)throw new Z("maxContentLength size of "+we+" exceeded",Z.ERR_BAD_RESPONSE,T,E)}return!Yt&&H&&H(),await new Promise((ie,rt)=>{j0(ie,rt,{data:bt,headers:it.from(yt.headers),status:yt.status,statusText:yt.statusText,config:T,request:E})})}catch(W){if(H&&H(),he&&he.aborted&&he.reason instanceof Z){const ue=he.reason;throw ue.config=T,E&&(ue.request=E),W!==ue&&Object.defineProperty(ue,"cause",{__proto__:null,value:W,writable:!0,enumerable:!1,configurable:!0}),ue}if(F)throw E&&!F.request&&(F.request=E),F;if(W instanceof Z)throw E&&!W.request&&(W.request=E),W;if(W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)){const ue=new Z("Network Error",Z.ERR_NETWORK,T,E,W&&W.response);throw Object.defineProperty(ue,"cause",{__proto__:null,value:W.cause||W,writable:!0,enumerable:!1,configurable:!0}),ue}throw Z.from(W,W&&W.code,T,E,W&&W.response)}}},Mb=new Map,T0=l=>{let u=l&&l.env||{};const{fetch:c,Request:s,Response:f}=u,h=[s,f,c];let m=h.length,p=m,b,y,x=Mb;for(;p--;)b=h[p],y=x.get(b),y===void 0&&x.set(b,y=p?new Map:Ub(u)),x=y;return y};T0();const ec={http:J2,xhr:Nb,fetch:{get:T0}};N.forEach(ec,(l,u)=>{if(l){try{Object.defineProperty(l,"name",{__proto__:null,value:u})}catch{}Object.defineProperty(l,"adapterName",{__proto__:null,value:u})}});const Om=l=>`- ${l}`,Db=l=>N.isFunction(l)||l===null||l===!1;function Lb(l,u){l=N.isArray(l)?l:[l];const{length:c}=l;let s,f;const h={};for(let m=0;m<c;m++){s=l[m];let p;if(f=s,!Db(s)&&(f=ec[(p=String(s)).toLowerCase()],f===void 0))throw new Z(`Unknown adapter '${p}'`);if(f&&(N.isFunction(f)||(f=f.get(u))))break;h[p||"#"+m]=f}if(!f){const m=Object.entries(h).map(([b,y])=>`adapter ${b} `+(y===!1?"is not supported by the environment":"is not available in the build"));let p=c?m.length>1?`since :
`+m.map(Om).join(`
`):" "+Om(m[0]):"as no adapter specified";throw new Z("There is no suitable adapter to dispatch the request "+p,Z.ERR_NOT_SUPPORT)}return f}const A0={getAdapter:Lb,adapters:ec};function wo(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new Si(null,l)}function Um(l){return wo(l),l.headers=it.from(l.headers),l.data=_o.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),A0.getAdapter(l.adapter||vi.adapter,l)(l).then(function(s){wo(l),l.response=s;try{s.data=_o.call(l,l.transformResponse,s)}finally{delete l.response}return s.headers=it.from(s.headers),s},function(s){if(!E0(s)&&(wo(l),s&&s.response)){l.response=s.response;try{s.response.data=_o.call(l,l.transformResponse,s.response)}finally{delete l.response}s.response.headers=it.from(s.response.headers)}return Promise.reject(s)})}const lu={};["object","boolean","number","function","string","symbol"].forEach((l,u)=>{lu[l]=function(s){return typeof s===l||"a"+(u<1?"n ":" ")+l}});const Mm={};lu.transitional=function(u,c,s){function f(h,m){return"[Axios v"+Po+"] Transitional option '"+h+"'"+m+(s?". "+s:"")}return(h,m,p)=>{if(u===!1)throw new Z(f(m," has been removed"+(c?" in "+c:"")),Z.ERR_DEPRECATED);return c&&!Mm[m]&&(Mm[m]=!0,console.warn(f(m," has been deprecated since v"+c+" and will be removed in the near future"))),u?u(h,m,p):!0}};lu.spelling=function(u){return(c,s)=>(console.warn(`${s} is likely a misspelling of ${u}`),!0)};function Bb(l,u,c){if(typeof l!="object"||l===null)throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);const s=Object.keys(l);let f=s.length;for(;f-- >0;){const h=s[f],m=Object.prototype.hasOwnProperty.call(u,h)?u[h]:void 0;if(m){const p=l[h],b=p===void 0||m(p,h,l);if(b!==!0)throw new Z("option "+h+" must be "+b,Z.ERR_BAD_OPTION_VALUE);continue}if(c!==!0)throw new Z("Unknown option "+h,Z.ERR_BAD_OPTION)}}const Zr={assertOptions:Bb,validators:lu},lt=Zr.validators;let ya=class{constructor(u){this.defaults=u||{},this.interceptors={request:new Em,response:new Em}}async request(u,c){try{return await this._request(u,c)}catch(s){if(s instanceof Error){let f={};Error.captureStackTrace?Error.captureStackTrace(f):f=new Error;const h=(()=>{if(!f.stack)return"";const m=f.stack.indexOf(`
`);return m===-1?"":f.stack.slice(m+1)})();try{if(!s.stack)s.stack=h;else if(h){const m=h.indexOf(`
`),p=m===-1?-1:h.indexOf(`
`,m+1),b=p===-1?"":h.slice(p+1);String(s.stack).endsWith(b)||(s.stack+=`
`+h)}}catch{}}throw s}}_request(u,c){typeof u=="string"?(c=c||{},c.url=u):c=u||{},c=xa(this.defaults,c);const{transitional:s,paramsSerializer:f,headers:h}=c;s!==void 0&&Zr.assertOptions(s,{silentJSONParsing:lt.transitional(lt.boolean),forcedJSONParsing:lt.transitional(lt.boolean),clarifyTimeoutError:lt.transitional(lt.boolean),legacyInterceptorReqResOrdering:lt.transitional(lt.boolean),advertiseZstdAcceptEncoding:lt.transitional(lt.boolean),validateStatusUndefinedResolves:lt.transitional(lt.boolean)},!1),f!=null&&(N.isFunction(f)?c.paramsSerializer={serialize:f}:Zr.assertOptions(f,{encode:lt.function,serialize:lt.function},!0)),c.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?c.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:c.allowAbsoluteUrls=!0),Zr.assertOptions(c,{baseUrl:lt.spelling("baseURL"),withXsrfToken:lt.spelling("withXSRFToken")},!0),c.method=(c.method||this.defaults.method||"get").toLowerCase();let m=h&&N.merge(h.common,h[c.method]);h&&N.forEach(["delete","get","head","post","put","patch","query","common"],L=>{delete h[L]}),c.headers=it.concat(m,h);const p=[];let b=!0;this.interceptors.request.forEach(function(Y){if(typeof Y.runWhen=="function"&&Y.runWhen(c)===!1)return;b=b&&Y.synchronous;const M=c.transitional||$o;M&&M.legacyInterceptorReqResOrdering?p.unshift(Y.fulfilled,Y.rejected):p.push(Y.fulfilled,Y.rejected)});const y=[];this.interceptors.response.forEach(function(Y){y.push(Y.fulfilled,Y.rejected)});let x,v=0,z;if(!b){const L=[Um.bind(this),void 0];for(L.unshift(...p),L.push(...y),z=L.length,x=Promise.resolve(c);v<z;)x=x.then(L[v++],L[v++]);return x}z=p.length;let k=c;for(;v<z;){const L=p[v++],Y=p[v++];try{k=L(k)}catch(M){Y.call(this,M);break}}try{x=Um.call(this,k)}catch(L){return Promise.reject(L)}for(v=0,z=y.length;v<z;)x=x.then(y[v++],y[v++]);return x}getUri(u){u=xa(this.defaults,u);const c=N0(u.baseURL,u.url,u.allowAbsoluteUrls,u);return x0(c,u.params,u.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(u){ya.prototype[u]=function(c,s){return this.request(xa(s||{},{method:u,url:c,data:s&&N.hasOwnProp(s,"data")?s.data:void 0}))}});N.forEach(["post","put","patch","query"],function(u){function c(s){return function(h,m,p){return this.request(xa(p||{},{method:u,headers:s?{"Content-Type":"multipart/form-data"}:{},url:h,data:m}))}}ya.prototype[u]=c(),u!=="query"&&(ya.prototype[u+"Form"]=c(!0))});let Hb=class C0{constructor(u){if(typeof u!="function")throw new TypeError("executor must be a function.");let c;this.promise=new Promise(function(h){c=h});const s=this;this.promise.then(f=>{if(!s._listeners)return;let h=s._listeners.length;for(;h-- >0;)s._listeners[h](f);s._listeners=null}),this.promise.then=f=>{let h;const m=new Promise(p=>{s.subscribe(p),h=p}).then(f);return m.cancel=function(){s.unsubscribe(h)},m},u(function(h,m,p){s.reason||(s.reason=new Si(h,m,p),c(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(u){if(this.reason){u(this.reason);return}this._listeners?this._listeners.push(u):this._listeners=[u]}unsubscribe(u){if(!this._listeners)return;const c=this._listeners.indexOf(u);c!==-1&&this._listeners.splice(c,1)}toAbortSignal(){const u=new AbortController,c=s=>{u.abort(s)};return this.subscribe(c),u.signal.unsubscribe=()=>this.unsubscribe(c),u.signal}static source(){let u;return{token:new C0(function(f){u=f}),cancel:u}}};function qb(l){return function(c){return l.apply(null,c)}}function kb(l){return N.isObject(l)&&l.isAxiosError===!0}const Bo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Bo).forEach(([l,u])=>{Bo[u]=l});function _0(l){const u=new ya(l),c=i0(ya.prototype.request,u);return N.extend(c,ya.prototype,u,{allOwnKeys:!0}),N.extend(c,u,null,{allOwnKeys:!0}),c.create=function(f){return _0(xa(l,f))},c}const Ge=_0(vi);Ge.Axios=ya;Ge.CanceledError=Si;Ge.CancelToken=Hb;Ge.isCancel=E0;Ge.VERSION=Po;Ge.toFormData=au;Ge.AxiosError=Z;Ge.Cancel=Ge.CanceledError;Ge.all=function(u){return Promise.all(u)};Ge.spread=qb;Ge.isAxiosError=kb;Ge.mergeConfig=xa;Ge.AxiosHeaders=it;Ge.formToJSON=l=>S0(N.isHTMLForm(l)?new FormData(l):l);Ge.getAdapter=A0.getAdapter;Ge.HttpStatusCode=Bo;Ge.default=Ge;const{Axios:tx,AxiosError:nx,CanceledError:ax,isCancel:lx,CancelToken:ix,VERSION:rx,all:ux,Cancel:sx,isAxiosError:ox,spread:cx,toFormData:fx,AxiosHeaders:dx,HttpStatusCode:hx,formToJSON:mx,getAdapter:gx,mergeConfig:px,create:yx}=Ge,en=Ge.create({baseURL:"/api",withCredentials:!0,headers:{"Content-Type":"application/json"}}),w0=A.createContext(null);function Yb({children:l}){const[u,c]=A.useState(null),[s,f]=A.useState(!0);A.useEffect(()=>{h()},[]);async function h(){try{const y=await en.get("/me");c(y.data)}catch{c(null)}finally{f(!1)}}async function m(y,x){const v=await en.post("/login",{email:y,password:x});return c(v.data.user),v.data.user}async function p(y,x,v){await en.post("/register",{name:y,email:x,password:v})}async function b(){await en.post("/logout"),c(null)}return o.jsx(w0.Provider,{value:{user:u,loading:s,login:m,register:p,logout:b,fetchUser:h},children:l})}function va(){return A.useContext(w0)}function Gb(){const[l,u]=A.useState(""),[c,s]=A.useState(""),[f,h]=A.useState(""),[m,p]=A.useState("docente"),[b,y]=A.useState("atlantico"),[x,v]=A.useState(!1),[z,k]=A.useState(""),[L,Y]=A.useState(!1),{register:M}=va(),T=pi();async function V(U){var K,I;U.preventDefault(),k(""),Y(!0);try{await M(l,c,f),T("/login")}catch(ee){k(((I=(K=ee.response)==null?void 0:K.data)==null?void 0:I.error)||"Error al procesar el registro institucional")}finally{Y(!1)}}return o.jsxs("div",{className:"uneg-signup-container",children:[o.jsx("style",{children:`
        .uneg-signup-container {
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, #e0edfd 0%, #f4f7fb 90%);
          padding: 2.5rem 1.25rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-signup-card {
          width: 100%;
          max-width: 520px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          padding: 2.5rem 2.25rem;
          box-shadow: 0 12px 35px -6px rgba(15, 39, 68, 0.12), 0 4px 12px rgba(15, 39, 68, 0.05);
          position: relative;
          overflow: hidden;
        }

        .uneg-card-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #0f2744 0%, #173b6c 35%, #2563eb 70%, #f59e0b 100%);
        }

        .uneg-auth-header {
          text-align: center;
          margin-bottom: 1.8rem;
        }

        .uneg-auth-emblem {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .uneg-inst-pretitle {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748b;
          margin-bottom: 0.25rem;
        }

        .uneg-inst-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin-bottom: 0.4rem;
        }

        .uneg-inst-subtitle {
          font-size: 0.88rem;
          color: #2563eb;
          font-weight: 600;
        }

        .uneg-alert-danger {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          animation: shake 0.35s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        .uneg-form-group {
          margin-bottom: 1.15rem;
          text-align: left;
        }

        .uneg-label {
          display: block;
          font-size: 0.84rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: #173b6c;
        }

        .uneg-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .uneg-input-icon {
          position: absolute;
          left: 1rem;
          color: #64748b;
          pointer-events: none;
          display: flex;
        }

        .uneg-input, .uneg-select {
          width: 100%;
          padding: 0.78rem 1rem 0.78rem 2.6rem;
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          color: #0f2744;
          font-size: 0.92rem;
          transition: all 0.2s ease;
        }

        .uneg-select {
          padding-left: 2.6rem;
          cursor: pointer;
        }

        .uneg-input:focus, .uneg-select:focus {
          outline: none;
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3.5px rgba(37, 99, 235, 0.15);
        }

        .uneg-toggle-btn {
          position: absolute;
          right: 0.85rem;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
        }

        .uneg-toggle-btn:hover {
          color: #1e3a8a;
        }

        .uneg-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .uneg-info-box {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          font-size: 0.82rem;
          color: #1e3a8a;
          margin-bottom: 1.3rem;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .uneg-btn-submit {
          width: 100%;
          padding: 0.88rem;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .uneg-btn-submit:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.3);
        }

        .uneg-btn-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .uneg-auth-footer {
          text-align: center;
          margin-top: 1.8rem;
          padding-top: 1.25rem;
          border-top: 1px solid #f1f5f9;
          font-size: 0.86rem;
          color: #64748b;
        }

        .uneg-auth-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        .uneg-auth-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        @media (max-width: 540px) {
          .uneg-form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}),o.jsxs("div",{className:"uneg-signup-card",children:[o.jsx("div",{className:"uneg-card-accent-line"}),o.jsxs("div",{className:"uneg-auth-header",children:[o.jsx("div",{className:"uneg-auth-emblem",children:o.jsx(ml,{size:58})}),o.jsx("p",{className:"uneg-inst-pretitle",children:"Universidad Nacional Experimental de Guayana"}),o.jsx("h1",{className:"uneg-inst-title",children:"Registro de Personal y Estudiantes"}),o.jsx("p",{className:"uneg-inst-subtitle",children:"Afiliación al Sistema de Control de Asistencia y Acceso"})]}),z&&o.jsxs("div",{className:"uneg-alert-danger",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),o.jsx("span",{children:z})]}),o.jsxs("form",{onSubmit:V,children:[o.jsxs("div",{className:"uneg-form-group",children:[o.jsx("label",{className:"uneg-label",children:"Nombre y apellido completo"}),o.jsxs("div",{className:"uneg-input-wrapper",children:[o.jsx("span",{className:"uneg-input-icon",children:o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),o.jsx("input",{type:"text",value:l,onChange:U=>u(U.target.value),required:!0,className:"uneg-input",placeholder:"Prof. Carlos Mendoza"})]})]}),o.jsxs("div",{className:"uneg-form-group",children:[o.jsx("label",{className:"uneg-label",children:"Correo institucional o electrónico"}),o.jsxs("div",{className:"uneg-input-wrapper",children:[o.jsx("span",{className:"uneg-input-icon",children:o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),o.jsx("input",{type:"email",value:c,onChange:U=>s(U.target.value),required:!0,className:"uneg-input",placeholder:"cmendoza@uneg.edu.ve"})]})]}),o.jsxs("div",{className:"uneg-form-row",children:[o.jsxs("div",{className:"uneg-form-group",children:[o.jsx("label",{className:"uneg-label",children:"Estamento / Rol"}),o.jsxs("div",{className:"uneg-input-wrapper",children:[o.jsx("span",{className:"uneg-input-icon",children:o.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})})}),o.jsxs("select",{value:m,onChange:U=>p(U.target.value),className:"uneg-select",children:[o.jsx("option",{value:"docente",children:"Docente / Investigador"}),o.jsx("option",{value:"administrativo",children:"Personal Administrativo"}),o.jsx("option",{value:"estudiante",children:"Estudiante de Pregrado"}),o.jsx("option",{value:"postgrado",children:"Estudiante de Postgrado"}),o.jsx("option",{value:"obrero",children:"Personal Técnico / Operativo"})]})]})]}),o.jsxs("div",{className:"uneg-form-group",children:[o.jsx("label",{className:"uneg-label",children:"Sede principal"}),o.jsxs("div",{className:"uneg-input-wrapper",children:[o.jsx("span",{className:"uneg-input-icon",children:o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),o.jsxs("select",{value:b,onChange:U=>y(U.target.value),className:"uneg-select",children:[o.jsx("option",{value:"atlantico",children:"Sede Atlántico (Pto Ordaz)"}),o.jsx("option",{value:"chilemex",children:"Sede Chilemex (Pto Ordaz)"}),o.jsx("option",{value:"villa_asia",children:"Sede Villa Asia (Pto Ordaz)"}),o.jsx("option",{value:"bolivar",children:"Sede Ciudad Bolívar"}),o.jsx("option",{value:"upata",children:"Sede Upata"})]})]})]})]}),o.jsxs("div",{className:"uneg-form-group",children:[o.jsx("label",{className:"uneg-label",children:"Contraseña de acceso"}),o.jsxs("div",{className:"uneg-input-wrapper",children:[o.jsx("span",{className:"uneg-input-icon",children:o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),o.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),o.jsx("input",{type:x?"text":"password",value:f,onChange:U=>h(U.target.value),required:!0,minLength:6,className:"uneg-input",placeholder:"Mínimo 6 caracteres"}),o.jsx("button",{type:"button",className:"uneg-toggle-btn",onClick:()=>v(!x),title:x?"Ocultar contraseña":"Ver contraseña",children:x?o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),o.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),o.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]})]}),o.jsxs("div",{className:"uneg-info-box",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{flexShrink:0,marginTop:"1px"},children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),o.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),o.jsxs("span",{children:[o.jsx("strong",{children:"Vinculación Biométrica:"})," Una vez creada tu cuenta, podrás habilitar el reconocimiento facial en tu credencial para acceder por torniquetes automáticos mediante ",o.jsx("strong",{children:"FaceSentinel"}),"."]})]}),o.jsx("button",{type:"submit",disabled:L,className:"uneg-btn-submit",children:L?"Registrando credencial...":o.jsxs(o.Fragment,{children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),o.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),o.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),"Registrar Credencial Universitaria"]})})]}),o.jsxs("p",{className:"uneg-auth-footer",children:["¿Ya tienes cuenta activa en el portal?"," ",o.jsx(Jn,{to:"/login",className:"uneg-auth-link",children:"Iniciar sesión"})]})]})]})}function Dm(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){const u=Math.random()*16|0;return(l==="x"?u:u&3|8).toString(16)})}function Vb(l,u,c){if(!l&&!u)return"";const s=(u||"").toUpperCase(),f=(l||"").toLowerCase();return s==="LIVENESS_FAILED"||f.includes("liveness")?"Prueba de vida facial no superada. Asegúrese de una iluminación adecuada y mire de frente a la cámara.":s==="NO_FACE_MATCH"||s==="FACE_NOT_RECOGNIZED"||f.includes("face_not_recognized")?"Rostro no reconocido. El vector biométrico no coincide con ningún usuario registrado en FaceSentinel.":s==="SPOOF_DETECTED"||f.includes("spoof")?"Alerta de Seguridad: Posible intento de suplantación facial detectado por el modelo de IA.":s==="USER_NOT_FOUND"||f.includes("user_not_found")?"Usuario no encontrado en el padrón biométrico institucional.":s==="TIMEOUT"||f.includes("timeout")?"Tiempo de espera agotado durante la verificación biométrica. Intente nuevamente.":s==="TOKEN_VALIDATION_FAILED"||f==="invalid_token"?"Token biométrico inválido o no verificado por la entidad de certificación.":s==="MISSING_TOKEN"||f==="no_token"?"No se recibió la credencial de autenticación desde el servidor FaceSentinel.":f==="access_denied"?"Acceso biométrico cancelado o denegado por el servidor.":c?decodeURIComponent(c):`Error de autenticación biométrica: ${u||l}`}function Xb(){const[l]=By(),u=l.get("error"),c=l.get("reason"),s=l.get("description"),[f,h]=A.useState(""),[m,p]=A.useState(""),[b,y]=A.useState(!1),[x,v]=A.useState(()=>Vb(u,c,s)),[z,k]=A.useState(!1),[L,Y]=A.useState(!1),[M,T]=A.useState({CLIENT_ID:"APP_ECOMMERCE_001",FACESENTINEL_PUBLIC_URL:"",REDIRECT_URI:""}),{login:V}=va(),U=pi();A.useEffect(()=>{en.get("/config").then(J=>{J.data&&T(oe=>({...oe,CLIENT_ID:J.data.CLIENT_ID||J.data.FACESENTINEL_CLIENT_ID||oe.CLIENT_ID,FACESENTINEL_PUBLIC_URL:J.data.FACESENTINEL_PUBLIC_URL||"",REDIRECT_URI:J.data.REDIRECT_URI||""}))}).catch(()=>{})},[]);async function K(){if(f)try{const J=await en.post("/check-email",{email:f});Y(J.data.exists&&J.data.hasBiometrics)}catch{Y(!1)}}async function I(J){var oe,Se;J.preventDefault(),v(""),k(!0);try{await V(f,m),U("/")}catch(Ue){v(((Se=(oe=Ue.response)==null?void 0:oe.data)==null?void 0:Se.error)||"Credenciales inválidas. Verifique su correo y contraseña.")}finally{k(!1)}}function ee(){const J=Dm(),oe=Dm();sessionStorage.setItem("auth_session_id",J),sessionStorage.setItem("oauth_state",oe);const Se=window.location.hostname,Ue=window.location.port,Me=window.location.protocol;let Ne=M.FACESENTINEL_PUBLIC_URL?M.FACESENTINEL_PUBLIC_URL.replace(/\/+$/,""):"";(!Ne||Ne.includes("localhost")||Ne.includes("150.188.128.20")||Ne.includes("10.25.101.20"))&&(Ne=`${Me}//${Se}:8088`);const we=`${`${Me}//${Se}${Ue?":"+Ue:""}`}/callback`,Ce=M.CLIENT_ID||"APP_ECOMMERCE_001",D=`${Ne}/login?client_id=${encodeURIComponent(Ce)}&redirect_uri=${encodeURIComponent(we)}&session_id=${encodeURIComponent(J)}&state=${encodeURIComponent(oe)}`;console.log("[FaceSentinel SSO] Host detectado:",Se),console.log("[FaceSentinel SSO] Target Redirection:",D),window.location.href=D}return o.jsxs("div",{className:"uneg-login-container",children:[o.jsx("style",{children:`
        .uneg-login-container {
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, #e0edfd 0%, #f4f7fb 90%);
          padding: 2.5rem 1.25rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-login-card {
          width: 100%;
          max-width: 480px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          padding: 2.5rem 2.25rem;
          box-shadow: 0 12px 35px -6px rgba(15, 39, 68, 0.12), 0 4px 12px rgba(15, 39, 68, 0.05);
          position: relative;
          overflow: hidden;
        }

        .uneg-card-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #0f2744 0%, #173b6c 35%, #2563eb 70%, #f59e0b 100%);
        }

        .uneg-auth-header {
          text-align: center;
          margin-bottom: 1.8rem;
        }

        .uneg-auth-emblem {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .uneg-inst-pretitle {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748b;
          margin-bottom: 0.25rem;
        }

        .uneg-inst-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin-bottom: 0.4rem;
        }

        .uneg-inst-subtitle {
          font-size: 0.88rem;
          color: #2563eb;
          font-weight: 600;
        }

        .uneg-alert-danger {
          background: #fef2f2;
          border: 1.5px solid #fca5a5;
          color: #991b1b;
          padding: 0.9rem 1.1rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          line-height: 1.45;
          animation: shake 0.35s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        .uneg-biometric-panel {
          background: linear-gradient(135deg, #f0f7ff 0%, #e0edfd 100%);
          border: 1.5px solid #bfdbfe;
          border-radius: 16px;
          padding: 1.4rem;
          text-align: center;
          margin-bottom: 1.6rem;
          position: relative;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.06);
        }

        .uneg-biometric-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #ffffff;
          color: #1d4ed8;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          margin-bottom: 0.65rem;
        }

        .uneg-biometric-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f2744;
          margin-bottom: 0.3rem;
        }

        .uneg-biometric-desc {
          font-size: 0.82rem;
          color: #334e68;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .uneg-btn-face {
          width: 100%;
          padding: 0.88rem 1.2rem;
          background: linear-gradient(135deg, #173b6c 0%, #2563eb 100%);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.28);
        }

        .uneg-btn-face:hover {
          background: linear-gradient(135deg, #0f2744 0%, #1d4ed8 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
        }

        .uneg-btn-face:active {
          transform: translateY(0);
        }

        .uneg-divider-line {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 1.4rem 0;
          color: #94a3b8;
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .uneg-divider-line::before, .uneg-divider-line::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #e2e8f0;
        }

        .uneg-divider-line::before { margin-right: 0.9em; }
        .uneg-divider-line::after { margin-left: 0.9em; }

        .uneg-form-group {
          margin-bottom: 1.15rem;
          text-align: left;
        }

        .uneg-label {
          display: block;
          font-size: 0.84rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: #173b6c;
        }

        .uneg-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .uneg-input-icon {
          position: absolute;
          left: 1rem;
          color: #64748b;
          pointer-events: none;
          display: flex;
        }

        .uneg-input {
          width: 100%;
          padding: 0.78rem 1rem 0.78rem 2.6rem;
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          color: #0f2744;
          font-size: 0.92rem;
          transition: all 0.2s ease;
        }

        .uneg-input:focus {
          outline: none;
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3.5px rgba(37, 99, 235, 0.15);
        }

        .uneg-toggle-btn {
          position: absolute;
          right: 0.85rem;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
        }

        .uneg-toggle-btn:hover {
          color: #1e3a8a;
        }

        .uneg-biometric-detected {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          font-size: 0.82rem;
          color: #065f46;
          margin-bottom: 1.1rem;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
        }

        .uneg-btn-submit {
          width: 100%;
          padding: 0.85rem;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .uneg-btn-submit:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.28);
        }

        .uneg-btn-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .uneg-auth-footer {
          text-align: center;
          margin-top: 1.8rem;
          padding-top: 1.25rem;
          border-top: 1px solid #f1f5f9;
          font-size: 0.86rem;
          color: #64748b;
        }

        .uneg-auth-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        .uneg-auth-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        .uneg-security-badge {
          margin-top: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 600;
        }
      `}),o.jsxs("div",{className:"uneg-login-card",children:[o.jsx("div",{className:"uneg-card-accent-line"}),o.jsxs("div",{className:"uneg-auth-header",children:[o.jsx("div",{className:"uneg-auth-emblem",children:o.jsx(ml,{size:58})}),o.jsx("p",{className:"uneg-inst-pretitle",children:"Universidad Nacional Experimental de Guayana"}),o.jsx("h1",{className:"uneg-inst-title",children:"Control de Acceso y Asistencia"}),o.jsx("p",{className:"uneg-inst-subtitle",children:"Acceso Centralizado con FaceSentinel SSO"})]}),x&&o.jsxs("div",{className:"uneg-alert-danger",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{flexShrink:0,marginTop:"2px"},children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),o.jsx("span",{children:x})]}),o.jsxs("div",{className:"uneg-biometric-panel",children:[o.jsxs("div",{className:"uneg-biometric-badge",children:[o.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})}),"AUTENTICACIÓN RECOMENDADA"]}),o.jsx("h2",{className:"uneg-biometric-heading",children:"Acceso Biométrico Facial"}),o.jsx("p",{className:"uneg-biometric-desc",children:"Marcaje instantáneo y sin contacto validado por FaceSentinel mediante WebSockets y Blockchain."}),o.jsxs("button",{type:"button",onClick:ee,className:"uneg-btn-face",children:[o.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z"}),o.jsx("path",{d:"M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93"}),o.jsx("path",{d:"M16 8a4 4 0 0 1-8 0"}),o.jsx("path",{d:"M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5"})]}),"Ingresar con FaceSentinel"]})]}),o.jsx("div",{className:"uneg-divider-line",children:"o con credenciales institucionales"}),o.jsxs("form",{onSubmit:I,children:[o.jsxs("div",{className:"uneg-form-group",children:[o.jsx("label",{className:"uneg-label",children:"Correo institucional o de contacto"}),o.jsxs("div",{className:"uneg-input-wrapper",children:[o.jsx("span",{className:"uneg-input-icon",children:o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),o.jsx("input",{type:"email",value:f,onChange:J=>{h(J.target.value),Y(!1)},onBlur:K,required:!0,className:"uneg-input",placeholder:"ejemplo@uneg.edu.ve"})]})]}),L&&o.jsxs("div",{className:"uneg-biometric-detected",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{flexShrink:0,marginTop:"2px"},children:[o.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),o.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),o.jsxs("span",{children:["Este usuario tiene ",o.jsx("strong",{children:"Biometría Facial Vinculada"}),". Puedes ingresar directamente con FaceSentinel arriba o continuar con tu contraseña."]})]}),o.jsxs("div",{className:"uneg-form-group",children:[o.jsx("label",{className:"uneg-label",children:"Contraseña institucional"}),o.jsxs("div",{className:"uneg-input-wrapper",children:[o.jsx("span",{className:"uneg-input-icon",children:o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),o.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),o.jsx("input",{type:b?"text":"password",value:m,onChange:J=>p(J.target.value),required:!0,className:"uneg-input",placeholder:"••••••••"}),o.jsx("button",{type:"button",className:"uneg-toggle-btn",onClick:()=>y(!b),title:b?"Ocultar contraseña":"Ver contraseña",children:b?o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),o.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),o.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]})]}),o.jsx("button",{type:"submit",disabled:z,className:"uneg-btn-submit",children:z?"Autenticando en portal...":o.jsxs(o.Fragment,{children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),o.jsx("polyline",{points:"10 17 15 12 10 7"}),o.jsx("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]}),"Iniciar Sesión Institucional"]})})]}),o.jsxs("p",{className:"uneg-auth-footer",children:["¿Nuevo usuario o personal no registrado?"," ",o.jsx(Jn,{to:"/signup",className:"uneg-auth-link",children:"Crear cuenta de acceso"})]}),o.jsxs("div",{className:"uneg-security-badge",children:[o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),o.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),o.jsx("span",{children:"Conexión segura cifrada • Vicerrectorado Académico UNEG"})]}),o.jsx("div",{style:{textAlign:"center",marginTop:"0.85rem"},children:o.jsxs(Jn,{to:"/settings",style:{fontSize:"0.76rem",color:"#64748b",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem",fontWeight:600},children:[o.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3"}),o.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),"⚙️ Panel de Variables y Configuración"]})})]})]})}const Qb=[{id:"log-101",user:"Prof. Carlos Mendoza",email:"cmendoza@uneg.edu.ve",role:"Docente Titular",roleType:"docente",sede:"Sede Atlántico - Entrada Principal",tipo:"Entrada",metodo:"Biometría FaceSentinel",isBiometric:!0,hora:"07:45:12 AM",fecha:"Hoy",status:"Autorizado"},{id:"log-102",user:"Ing. María Elena Rivas",email:"mrivas@uneg.edu.ve",role:"Coordinación de Informática",roleType:"administrativo",sede:"Sede Atlántico - Edif. Aulas II",tipo:"Entrada",metodo:"Biometría FaceSentinel",isBiometric:!0,hora:"07:58:30 AM",fecha:"Hoy",status:"Autorizado"},{id:"log-103",user:"Alejandro Bastardo",email:"abastardo@uneg.edu.ve",role:"Estudiante (Ing. Informática)",roleType:"estudiante",sede:"Sede Atlántico - Biblioteca Central",tipo:"Entrada",metodo:"Biometría FaceSentinel",isBiometric:!0,hora:"08:05:19 AM",fecha:"Hoy",status:"Autorizado"},{id:"log-104",user:"Dra. Carmen Teresa Soto",email:"csoto@uneg.edu.ve",role:"Investigadora / Docente",roleType:"docente",sede:"Sede Chilemex - Rectorado",tipo:"Entrada",metodo:"Biometría FaceSentinel",isBiometric:!0,hora:"08:14:45 AM",fecha:"Hoy",status:"Autorizado"},{id:"log-105",user:"Lic. Roberto Díaz",email:"rdiaz@uneg.edu.ve",role:"Control de Estudios",roleType:"administrativo",sede:"Sede Atlántico - Taquilla 3",tipo:"Entrada",metodo:"Credencial Institucional",isBiometric:!1,hora:"08:20:02 AM",fecha:"Hoy",status:"Autorizado"},{id:"log-106",user:"Valeria Gómez",email:"vgomez@uneg.edu.ve",role:"Estudiante (Ciencias Fiscales)",roleType:"estudiante",sede:"Sede Villa Asia - Puerta 1",tipo:"Entrada",metodo:"Biometría FaceSentinel",isBiometric:!0,hora:"08:29:50 AM",fecha:"Hoy",status:"Autorizado"},{id:"log-107",user:"Tec. Manuel Zambrano",email:"mzambrano@uneg.edu.ve",role:"Soporte Técnico DTIC",roleType:"administrativo",sede:"Sede Atlántico - Laboratorio 4",tipo:"Salida",metodo:"Biometría FaceSentinel",isBiometric:!0,hora:"08:42:10 AM",fecha:"Hoy",status:"Autorizado"}];function Zb(){var k;const{user:l}=va(),[u,c]=A.useState(Qb),[s,f]=A.useState("all"),[h,m]=A.useState(""),[p,b]=A.useState("Todas"),[y,x]=A.useState(null);function v(L){const M=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}),T={id:`log-${Date.now()}`,user:(l==null?void 0:l.name)||"Usuario UNEG",email:(l==null?void 0:l.email)||"usuario@uneg.edu.ve",role:"Personal Autenticado",roleType:"mi_marcaje",sede:"Sede Atlántico - Terminal de Acceso",tipo:L,metodo:l!=null&&l.has_biometrics_enrolled?"Biometría FaceSentinel":"Credencial Institucional",isBiometric:!!(l!=null&&l.has_biometrics_enrolled),hora:M,fecha:"Hoy",status:"Autorizado"};c(V=>[T,...V]),x({tipo:L,hora:M,metodo:l!=null&&l.has_biometrics_enrolled?"Biometría Facial FaceSentinel":"Credencial de Usuario"}),setTimeout(()=>{x(null)},5e3)}const z=A.useMemo(()=>u.filter(L=>{const Y=s==="all"?!0:s==="mis_marcajes"?L.email===(l==null?void 0:l.email)||L.roleType==="mi_marcaje":L.roleType===s,M=p==="Todas"?!0:L.sede.toLowerCase().includes(p.toLowerCase()),T=h===""?!0:L.user.toLowerCase().includes(h.toLowerCase())||L.email.toLowerCase().includes(h.toLowerCase())||L.sede.toLowerCase().includes(h.toLowerCase());return Y&&M&&T}),[u,s,p,h,l==null?void 0:l.email]);return o.jsxs("div",{className:"uneg-home-container",children:[o.jsx("style",{children:`
        .uneg-home-container {
          min-height: calc(100vh - 120px);
          background: #f4f7fb;
          padding: 2rem 1.5rem 3.5rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-home-wrapper {
          max-width: 1240px;
          margin: 0 auto;
        }

        /* Hero Banner del Panel */
        .uneg-hero-panel {
          background: linear-gradient(135deg, #0f2744 0%, #173b6c 50%, #2563eb 100%);
          border-radius: 20px;
          padding: 2.2rem 2.5rem;
          color: #ffffff;
          box-shadow: 0 10px 30px -5px rgba(15, 39, 68, 0.2);
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .uneg-hero-panel::after {
          content: '';
          position: absolute;
          right: -50px;
          bottom: -50px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .uneg-hero-info {
          max-width: 680px;
        }

        .uneg-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #dbeafe;
          margin-bottom: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .uneg-hero-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .uneg-hero-sub {
          font-size: 0.95rem;
          color: #bfdbfe;
          line-height: 1.5;
        }

        /* Botonera de Acción de Marcaje en el Hero */
        .uneg-hero-actions {
          background: rgba(255, 255, 255, 0.98);
          padding: 1.25rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 280px;
          color: #0f2744;
        }

        .uneg-hero-actions-title {
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #173b6c;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .uneg-btn-marcaje-in {
          padding: 0.75rem 1rem;
          background: #10b981;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.25);
        }

        .uneg-btn-marcaje-in:hover {
          background: #059669;
          transform: translateY(-1px);
        }

        .uneg-btn-marcaje-out {
          padding: 0.75rem 1rem;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
        }

        .uneg-btn-marcaje-out:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        /* Notificación de feedback de marcaje */
        .uneg-toast-feedback {
          background: #ecfdf5;
          border: 1.5px solid #10b981;
          color: #065f46;
          border-radius: 14px;
          padding: 1rem 1.4rem;
          margin-bottom: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 6px 18px rgba(16, 185, 129, 0.15);
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Tarjetas de Métricas Institucionales (KPIs) */
        .uneg-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .uneg-metric-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 16px;
          padding: 1.35rem;
          box-shadow: 0 4px 12px rgba(15, 39, 68, 0.05);
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .uneg-metric-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(15, 39, 68, 0.08);
          border-color: #93c5fd;
        }

        .uneg-metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-navy {
          background: #eff6ff;
          color: #2563eb;
        }

        .icon-emerald {
          background: #ecfdf5;
          color: #10b981;
        }

        .icon-amber {
          background: #fef3c7;
          color: #d97706;
        }

        .icon-indigo {
          background: #e0e7ff;
          color: #4f46e5;
        }

        .uneg-metric-info {
          display: flex;
          flex-direction: column;
        }

        .uneg-metric-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.25rem;
        }

        .uneg-metric-val {
          font-size: 1.65rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .uneg-metric-trend {
          font-size: 0.72rem;
          font-weight: 600;
          color: #10b981;
          margin-top: 0.35rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        /* Sección de Puntos de Acceso / Torniquetes por Sede */
        .uneg-terminals-section {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 1.4rem 1.6rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 12px rgba(15, 39, 68, 0.04);
        }

        .uneg-section-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f2744;
          margin-bottom: 0.3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .uneg-section-sub {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 1.25rem;
        }

        .uneg-terminals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
        }

        .uneg-terminal-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s ease;
        }

        .uneg-terminal-item:hover {
          background: #eff6ff;
          border-color: #bfdbfe;
        }

        .uneg-terminal-title {
          font-size: 0.86rem;
          font-weight: 700;
          color: #173b6c;
          margin-bottom: 0.15rem;
        }

        .uneg-terminal-loc {
          font-size: 0.75rem;
          color: #64748b;
        }

        .uneg-terminal-status {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.55rem;
          border-radius: 999px;
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        /* Tabla de Registros en Vivo */
        .uneg-table-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 18px;
          box-shadow: 0 6px 20px rgba(15, 39, 68, 0.06);
          overflow: hidden;
        }

        .uneg-table-header {
          padding: 1.5rem 1.6rem;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .uneg-search-input {
          padding: 0.6rem 0.9rem 0.6rem 2.2rem;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 0.85rem;
          color: #0f2744;
          width: 280px;
          outline: none;
          transition: all 0.2s ease;
        }

        .uneg-search-input:focus {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .uneg-filter-pills {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          padding: 0.8rem 1.6rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .uneg-pill {
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #475569;
          transition: all 0.15s ease;
        }

        .uneg-pill:hover {
          border-color: #2563eb;
          color: #2563eb;
        }

        .uneg-pill.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        .uneg-table-responsive {
          width: 100%;
          overflow-x: auto;
        }

        .uneg-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.86rem;
        }

        .uneg-table th {
          background: #f1f5f9;
          color: #173b6c;
          font-weight: 700;
          padding: 0.9rem 1.25rem;
          border-bottom: 1.5px solid #cbd5e1;
          white-space: nowrap;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .uneg-table td {
          padding: 0.95rem 1.25rem;
          border-bottom: 1px solid #e2e8f0;
          color: #1e293b;
          vertical-align: middle;
        }

        .uneg-table tr:hover td {
          background: #f8fafc;
        }

        .uneg-user-cell {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .uneg-avatar-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, #173b6c 0%, #2563eb 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .uneg-role-badge {
          display: inline-block;
          font-size: 0.74rem;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          font-weight: 600;
        }

        .badge-docente {
          background: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        }

        .badge-admin {
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fde68a;
        }

        .badge-estudiante {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .badge-marcaje {
          background: #faf5ff;
          color: #6b21a8;
          border: 1px solid #e9d5ff;
        }

        .badge-tipo-in {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
          padding: 0.25rem 0.55rem;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .badge-tipo-out {
          background: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
          padding: 0.25rem 0.55rem;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .uneg-biometric-verified {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #059669;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .uneg-table-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: #64748b;
        }
      `}),o.jsxs("div",{className:"uneg-home-wrapper",children:[o.jsxs("div",{className:"uneg-hero-panel",children:[o.jsxs("div",{className:"uneg-hero-info",children:[o.jsxs("div",{className:"uneg-hero-badge",children:[o.jsx(ml,{size:18}),o.jsx("span",{children:"Universidad Nacional Experimental de Guayana"})]}),o.jsx("h1",{className:"uneg-hero-title",children:"Portal de Control de Accesos y Asistencia"}),o.jsxs("p",{className:"uneg-hero-sub",children:["Monitoreo y marcaje de jornada universitaria en tiempo real. Validado con el motor de reconocimiento facial biométrico ",o.jsx("strong",{children:"FaceSentinel SSO"}),"."]})]}),o.jsxs("div",{className:"uneg-hero-actions",children:[o.jsxs("div",{className:"uneg-hero-actions-title",children:[o.jsx("span",{children:"Marcaje Personal"}),o.jsx("span",{style:{color:"#2563eb",fontWeight:600},children:(k=l==null?void 0:l.name)==null?void 0:k.split(" ")[0]})]}),o.jsxs("button",{onClick:()=>v("Entrada"),className:"uneg-btn-marcaje-in",title:"Registrar marcaje de entrada en la jornada actual",children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),o.jsx("polyline",{points:"10 17 15 12 10 7"}),o.jsx("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]}),"Marcar Entrada"]}),o.jsxs("button",{onClick:()=>v("Salida"),className:"uneg-btn-marcaje-out",title:"Registrar marcaje de salida",children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),o.jsx("polyline",{points:"16 17 21 12 16 7"}),o.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Marcar Salida"]})]})]}),y&&o.jsxs("div",{className:"uneg-toast-feedback",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#10b981",strokeWidth:"3",children:[o.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),o.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),o.jsxs("div",{children:[o.jsxs("strong",{children:["¡Marcaje de ",y.tipo," Registrado Exitosamente!"]}),o.jsxs("p",{style:{margin:0,fontSize:"0.82rem",color:"#047857"},children:["Hora: ",y.hora," • Método de verificación: ",y.metodo," • Sede Atlántico"]})]})]}),o.jsx(Jn,{to:"/profile",style:{fontSize:"0.82rem",fontWeight:700,color:"#047857",textDecoration:"underline"},children:"Ver mi credencial"})]}),o.jsxs("div",{className:"uneg-metrics-grid",children:[o.jsxs("div",{className:"uneg-metric-card",children:[o.jsx("div",{className:"uneg-metric-icon icon-navy",children:o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[o.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"9",cy:"7",r:"4"}),o.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),o.jsxs("div",{className:"uneg-metric-info",children:[o.jsx("span",{className:"uneg-metric-label",children:"Accesos Totales Hoy"}),o.jsx("span",{className:"uneg-metric-val",children:"1,482"}),o.jsxs("span",{className:"uneg-metric-trend",children:[o.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:o.jsx("polyline",{points:"18 15 12 9 6 15"})}),"+8.2% vs. ayer"]})]})]}),o.jsxs("div",{className:"uneg-metric-card",children:[o.jsx("div",{className:"uneg-metric-icon icon-emerald",children:o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[o.jsx("path",{d:"M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z"}),o.jsx("path",{d:"M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93"}),o.jsx("path",{d:"M16 8a4 4 0 0 1-8 0"}),o.jsx("path",{d:"M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5"})]})}),o.jsxs("div",{className:"uneg-metric-info",children:[o.jsx("span",{className:"uneg-metric-label",children:"Biometría FaceSentinel"}),o.jsx("span",{className:"uneg-metric-val",children:"96.8%"}),o.jsx("span",{className:"uneg-metric-trend",children:"Alta precisión de coincidencia"})]})]}),o.jsxs("div",{className:"uneg-metric-card",children:[o.jsx("div",{className:"uneg-metric-icon icon-amber",children:o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("polyline",{points:"12 6 12 12 16 14"})]})}),o.jsxs("div",{className:"uneg-metric-info",children:[o.jsx("span",{className:"uneg-metric-label",children:"Asistencia Docente"}),o.jsx("span",{className:"uneg-metric-val",children:"97.4%"}),o.jsx("span",{className:"uneg-metric-trend",children:"312 Docentes registrados"})]})]}),o.jsxs("div",{className:"uneg-metric-card",children:[o.jsx("div",{className:"uneg-metric-icon icon-indigo",children:o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[o.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),o.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),o.jsx("line",{x1:"6",y1:"6",x2:"6.01",y2:"6"}),o.jsx("line",{x1:"6",y1:"18",x2:"6.01",y2:"18"})]})}),o.jsxs("div",{className:"uneg-metric-info",children:[o.jsx("span",{className:"uneg-metric-label",children:"Torniquetes Activos"}),o.jsx("span",{className:"uneg-metric-val",children:"12 / 12"}),o.jsx("span",{className:"uneg-metric-trend",children:"100% Operatividad en sedes"})]})]})]}),o.jsxs("div",{className:"uneg-terminals-section",children:[o.jsxs("div",{className:"uneg-section-title",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#2563eb",strokeWidth:"2.5",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Puntos de Control y Acceso por Sede"]}),o.jsx("p",{className:"uneg-section-sub",children:"Estado de enlace y sincronización biométrica con los módulos de torniquetes de la universidad."}),o.jsxs("div",{className:"uneg-terminals-grid",children:[o.jsxs("div",{className:"uneg-terminal-item",children:[o.jsxs("div",{children:[o.jsx("div",{className:"uneg-terminal-title",children:"Sede Atlántico (Principal)"}),o.jsx("div",{className:"uneg-terminal-loc",children:"Pto. Ordaz • Torniquetes 1, 2 y 3"})]}),o.jsxs("span",{className:"uneg-terminal-status",children:[o.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"#10b981"}}),"Operativo"]})]}),o.jsxs("div",{className:"uneg-terminal-item",children:[o.jsxs("div",{children:[o.jsx("div",{className:"uneg-terminal-title",children:"Sede Chilemex"}),o.jsx("div",{className:"uneg-terminal-loc",children:"Pto. Ordaz • Rectorado y Admón."})]}),o.jsxs("span",{className:"uneg-terminal-status",children:[o.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"#10b981"}}),"Operativo"]})]}),o.jsxs("div",{className:"uneg-terminal-item",children:[o.jsxs("div",{children:[o.jsx("div",{className:"uneg-terminal-title",children:"Sede Villa Asia"}),o.jsx("div",{className:"uneg-terminal-loc",children:"Pto. Ordaz • Talleres e Ingeniería"})]}),o.jsxs("span",{className:"uneg-terminal-status",children:[o.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"#10b981"}}),"Operativo"]})]}),o.jsxs("div",{className:"uneg-terminal-item",children:[o.jsxs("div",{children:[o.jsx("div",{className:"uneg-terminal-title",children:"Sede Ciudad Bolívar"}),o.jsx("div",{className:"uneg-terminal-loc",children:"Jardín Botánico • Edif. Académico"})]}),o.jsxs("span",{className:"uneg-terminal-status",children:[o.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"#10b981"}}),"Operativo"]})]})]})]}),o.jsxs("div",{className:"uneg-table-card",children:[o.jsxs("div",{className:"uneg-table-header",children:[o.jsxs("div",{children:[o.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,color:"#0f2744",margin:0},children:"Registros de Acceso y Asistencia en Vivo"}),o.jsx("p",{style:{margin:"0.2rem 0 0",fontSize:"0.82rem",color:"#64748b"},children:"Monitoreo de entradas y salidas registradas en los torniquetes universitarios"})]}),o.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[o.jsx("span",{style:{position:"absolute",left:"0.8rem",color:"#64748b",display:"flex"},children:o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),o.jsx("input",{type:"text",placeholder:"Buscar por nombre, correo o sede...",value:h,onChange:L=>m(L.target.value),className:"uneg-search-input"})]})]}),o.jsxs("div",{className:"uneg-filter-pills",children:[o.jsxs("button",{onClick:()=>f("all"),className:`uneg-pill ${s==="all"?"active":""}`,children:["Todos los estamentos (",u.length,")"]}),o.jsx("button",{onClick:()=>f("mis_marcajes"),className:`uneg-pill ${s==="mis_marcajes"?"active":""}`,children:"Mis marcajes"}),o.jsx("button",{onClick:()=>f("docente"),className:`uneg-pill ${s==="docente"?"active":""}`,children:"Docentes e Investigadores"}),o.jsx("button",{onClick:()=>f("administrativo"),className:`uneg-pill ${s==="administrativo"?"active":""}`,children:"Personal Administrativo"}),o.jsx("button",{onClick:()=>f("estudiante"),className:`uneg-pill ${s==="estudiante"?"active":""}`,children:"Estudiantes"})]}),o.jsx("div",{className:"uneg-table-responsive",children:o.jsxs("table",{className:"uneg-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Hora / Fecha"}),o.jsx("th",{children:"Personal / Estudiante"}),o.jsx("th",{children:"Estamento / Rol"}),o.jsx("th",{children:"Sede & Ubicación"}),o.jsx("th",{children:"Tipo Marcaje"}),o.jsx("th",{children:"Método de Validación"}),o.jsx("th",{children:"Estado"})]})}),o.jsx("tbody",{children:z.length>0?z.map(L=>o.jsxs("tr",{children:[o.jsxs("td",{style:{whiteSpace:"nowrap",fontWeight:600,color:"#173b6c"},children:[o.jsx("div",{children:L.hora}),o.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8"},children:L.fecha})]}),o.jsx("td",{children:o.jsxs("div",{className:"uneg-user-cell",children:[o.jsx("div",{className:"uneg-avatar-circle",children:L.user?L.user.charAt(0).toUpperCase():"U"}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:700,color:"#0f2744"},children:L.user}),o.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:L.email})]})]})}),o.jsx("td",{children:o.jsx("span",{className:`uneg-role-badge ${L.roleType==="docente"?"badge-docente":L.roleType==="administrativo"?"badge-admin":L.roleType==="estudiante"?"badge-estudiante":"badge-marcaje"}`,children:L.role})}),o.jsx("td",{style:{color:"#334e68"},children:L.sede}),o.jsx("td",{children:L.tipo==="Entrada"?o.jsxs("span",{className:"badge-tipo-in",children:[o.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[o.jsx("polyline",{points:"15 3 21 3 21 9"}),o.jsx("polyline",{points:"9 21 3 21 3 15"}),o.jsx("line",{x1:"21",y1:"3",x2:"14",y2:"10"}),o.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]}),"Entrada"]}):o.jsxs("span",{className:"badge-tipo-out",children:[o.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[o.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"Salida"]})}),o.jsx("td",{children:L.isBiometric?o.jsxs("div",{className:"uneg-biometric-verified",children:[o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#10b981",strokeWidth:"2.5",children:[o.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),o.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),o.jsx("span",{children:L.metodo})]}):o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"#64748b",fontSize:"0.8rem"},children:[o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.jsx("line",{x1:"7",y1:"8",x2:"17",y2:"8"}),o.jsx("line",{x1:"7",y1:"12",x2:"13",y2:"12"})]}),o.jsx("span",{children:L.metodo})]})}),o.jsx("td",{children:o.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.3rem",background:"#ecfdf5",color:"#065f46",border:"1px solid #a7f3d0",fontSize:"0.74rem",fontWeight:700,padding:"0.2rem 0.6rem",borderRadius:"6px"},children:L.status})})]},L.id)):o.jsx("tr",{children:o.jsx("td",{colSpan:"7",className:"uneg-table-empty",children:"No se encontraron registros de acceso coincidentes con el criterio de búsqueda."})})})]})})]})]})]})}function Jb(){const{user:l}=va(),[u,c]=A.useState(!1),[s,f]=A.useState({FACESENTINEL_PUBLIC_URL:"http://150.188.128.20:8088",CLIENT_ID:"APP_ECOMMERCE_001",REDIRECT_URI:""});A.useEffect(()=>{en.get("/config").then(p=>{p.data&&f(b=>({...b,FACESENTINEL_PUBLIC_URL:p.data.FACESENTINEL_PUBLIC_URL||p.data.FACESENTINEL_FRONTEND_URL||b.FACESENTINEL_PUBLIC_URL,CLIENT_ID:p.data.CLIENT_ID||p.data.FACESENTINEL_CLIENT_ID||b.CLIENT_ID,REDIRECT_URI:p.data.REDIRECT_URI||""}))}).catch(()=>{})},[]);async function h(){c(!0);try{await en.post("/enrollment-session")}catch(L){console.error("Error al iniciar sesión de enrolamiento",L)}const p=window.location.hostname,b=window.location.port,y=window.location.protocol;let x=s.FACESENTINEL_PUBLIC_URL?s.FACESENTINEL_PUBLIC_URL.replace(/\/+$/,""):"";(!x||x.includes("localhost")||x.includes("150.188.128.20")||x.includes("10.25.101.20"))&&(x=`${y}//${p}:8088`);const z=`${`${y}//${p}${b?":"+b:""}`}/callback`,k=`${x}/signup?client_id=${encodeURIComponent(s.CLIENT_ID||"APP_ECOMMERCE_001")}&redirect_uri=${encodeURIComponent(z)}&user_id=${encodeURIComponent((l==null?void 0:l.id)||"")}&name=${encodeURIComponent((l==null?void 0:l.name)||"")}`;window.location.href=k}const m=`UNEG-${((l==null?void 0:l.id)||"000000").slice(0,8).toUpperCase()}`;return o.jsxs("div",{className:"uneg-profile-container",children:[o.jsx("style",{children:`
        .uneg-profile-container {
          min-height: calc(100vh - 120px);
          background: #f4f7fb;
          padding: 2.5rem 1.5rem 4rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-profile-wrapper {
          max-width: 1040px;
          margin: 0 auto;
        }

        .uneg-profile-header {
          margin-bottom: 2rem;
          text-align: left;
        }

        .uneg-profile-pre {
          font-size: 0.76rem;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.25rem;
        }

        .uneg-profile-main-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.02em;
          margin-bottom: 0.4rem;
        }

        .uneg-profile-main-desc {
          color: #64748b;
          font-size: 0.92rem;
        }

        .uneg-profile-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 2rem;
          align-items: start;
        }

        /* Carnet Digital Institucional UNEG */
        .uneg-id-card-wrapper {
          position: sticky;
          top: 100px;
        }

        .uneg-id-card {
          background: linear-gradient(135deg, #0a192f 0%, #173b6c 50%, #2563eb 100%);
          border-radius: 20px;
          padding: 1.75rem;
          color: #ffffff;
          box-shadow: 0 15px 35px -5px rgba(15, 39, 68, 0.25), 0 5px 15px rgba(37, 99, 235, 0.15);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .uneg-id-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #f59e0b 0%, #ffffff 50%, #f59e0b 100%);
        }

        .uneg-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
        }

        .uneg-card-inst-text {
          display: flex;
          flex-direction: column;
        }

        .uneg-card-inst-name {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          line-height: 1.2;
        }

        .uneg-card-inst-sub {
          font-size: 0.65rem;
          font-weight: 600;
          color: #f59e0b;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .uneg-card-body {
          display: flex;
          gap: 1.2rem;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .uneg-card-avatar-box {
          position: relative;
          flex-shrink: 0;
        }

        .uneg-card-avatar {
          width: 82px;
          height: 82px;
          border-radius: 16px;
          background: #ffffff;
          color: #173b6c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          font-weight: 800;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          border: 2.5px solid #ffffff;
        }

        .uneg-card-chip {
          position: absolute;
          bottom: -6px;
          right: -6px;
          width: 24px;
          height: 24px;
          background: #f59e0b;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .uneg-card-user-info {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .uneg-card-user-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .uneg-card-user-role {
          font-size: 0.76rem;
          font-weight: 700;
          color: #93c5fd;
          margin-bottom: 0.25rem;
        }

        .uneg-card-user-email {
          font-size: 0.72rem;
          color: #cbd5e1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .uneg-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          background: rgba(0, 0, 0, 0.18);
          padding: 0.85rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .uneg-card-code-block {
          display: flex;
          flex-direction: column;
        }

        .uneg-card-code-label {
          font-size: 0.65rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }

        .uneg-card-code-val {
          font-size: 0.95rem;
          font-weight: 800;
          color: #f59e0b;
          font-family: monospace;
          letter-spacing: 0.04em;
        }

        .uneg-qr-box {
          background: #ffffff;
          padding: 4px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Paneles de detalles */
        .uneg-details-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .uneg-panel-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 18px;
          padding: 1.75rem;
          box-shadow: 0 4px 18px rgba(15, 39, 68, 0.04);
        }

        .uneg-panel-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f2744;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }

        .uneg-panel-sub {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 1.25rem;
        }

        .uneg-bio-status-card {
          border-radius: 14px;
          padding: 1.25rem;
          margin-bottom: 1rem;
        }

        .uneg-bio-status-card.enrolled {
          background: #ecfdf5;
          border: 1.5px solid #a7f3d0;
        }

        .uneg-bio-status-card.pending {
          background: #fffbeb;
          border: 1.5px solid #fde68a;
        }

        .uneg-bio-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .uneg-bio-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.74rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
        }

        .badge-verified {
          background: #059669;
          color: #ffffff;
        }

        .badge-pending {
          background: #d97706;
          color: #ffffff;
        }

        .uneg-bio-text {
          font-size: 0.84rem;
          line-height: 1.45;
          margin-bottom: 1rem;
        }

        .text-enrolled {
          color: #065f46;
        }

        .text-pending {
          color: #92400e;
        }

        .uneg-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .uneg-info-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .uneg-info-key {
          font-size: 0.72rem;
          color: #64748b;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .uneg-info-val {
          font-size: 0.9rem;
          color: #0f2744;
          font-weight: 600;
          word-break: break-all;
        }

        .uneg-btn-link-bio {
          padding: 0.75rem 1.25rem;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .btn-bio-primary {
          background: #2563eb;
          color: #ffffff;
          border: none;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        .btn-bio-primary:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .btn-bio-secondary {
          background: #ffffff;
          color: #065f46;
          border: 1.5px solid #a7f3d0;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .btn-bio-secondary:hover {
          background: #f0fdf4;
          border-color: #6ee7b7;
        }

        .uneg-personal-logs {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .uneg-log-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.84rem;
        }

        @media (max-width: 860px) {
          .uneg-profile-grid {
            grid-template-columns: 1fr;
          }
          .uneg-id-card-wrapper {
            position: static;
          }
          .uneg-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),o.jsxs("div",{className:"uneg-profile-wrapper",children:[o.jsxs("div",{className:"uneg-profile-header",children:[o.jsx("p",{className:"uneg-profile-pre",children:"Gestión de Identidad Universitaria"}),o.jsx("h1",{className:"uneg-profile-main-title",children:"Credencial y Ficha de Acceso Institucional"}),o.jsxs("p",{className:"uneg-profile-main-desc",children:["Consulta los datos de tu carnet digital UNEG y administra tu vinculación biométrica con ",o.jsx("strong",{children:"FaceSentinel"}),"."]})]}),o.jsxs("div",{className:"uneg-profile-grid",children:[o.jsxs("div",{className:"uneg-id-card-wrapper",children:[o.jsxs("div",{className:"uneg-id-card",children:[o.jsx("div",{className:"uneg-card-top",children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[o.jsx(ml,{size:36}),o.jsxs("div",{className:"uneg-card-inst-text",children:[o.jsx("span",{className:"uneg-card-inst-name",children:"UNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA"}),o.jsx("span",{className:"uneg-card-inst-sub",children:"Carnet de Identificación y Acceso"})]})]})}),o.jsxs("div",{className:"uneg-card-body",children:[o.jsxs("div",{className:"uneg-card-avatar-box",children:[o.jsx("div",{className:"uneg-card-avatar",children:l!=null&&l.name?l.name.charAt(0).toUpperCase():"U"}),o.jsx("div",{className:"uneg-card-chip",title:"Chip de control de acceso RFID / Biometría",children:o.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#0f2744",strokeWidth:"2.5",children:[o.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"4"}),o.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"22"}),o.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"22"})]})})]}),o.jsxs("div",{className:"uneg-card-user-info",children:[o.jsx("h3",{className:"uneg-card-user-name",title:l==null?void 0:l.name,children:(l==null?void 0:l.name)||"Usuario Universitario"}),o.jsx("span",{className:"uneg-card-user-role",children:(l==null?void 0:l.role)||(l!=null&&l.has_biometrics_enrolled?"Personal Acreditado (Biometría)":"Personal Universitario")}),o.jsx("span",{className:"uneg-card-user-email",title:l==null?void 0:l.email,children:l==null?void 0:l.email})]})]}),o.jsxs("div",{className:"uneg-card-bottom",children:[o.jsxs("div",{className:"uneg-card-code-block",children:[o.jsx("span",{className:"uneg-card-code-label",children:"Código Institucional"}),o.jsx("span",{className:"uneg-card-code-val",children:m}),o.jsx("span",{style:{fontSize:"0.65rem",color:"#cbd5e1",marginTop:"2px"},children:"Sede Atlántico • Puerto Ordaz"})]}),o.jsx("div",{className:"uneg-qr-box",title:"Código QR de Acceso Físico en Torniquetes UNEG",children:o.jsx("svg",{width:"42",height:"42",viewBox:"0 0 33 33",fill:"#0f2744",children:o.jsx("path",{d:"M0 0h11v11H0zM2 2h7v7H2zM4 4h3v3H4zM22 0h11v11H22zM24 2h7v7h-7zM26 4h3v3h-3zM0 22h11v11H0zM2 24h7v7H2zM4 26h3v3H4zM13 0h3v5h-3zM18 0h3v3h-3zM13 7h3v4h-3zM18 5h7v3h-7zM18 10h4v3h-4zM0 13h5v3H0zM7 13h4v3H7zM13 13h3v3h-3zM28 13h5v3h-5zM0 18h3v5H0zM5 18h6v3H5zM13 18h3v5h-3zM25 18h3v5h-3zM30 18h3v5h-3zM22 22h3v3h-3zM18 25h3v8h-3zM25 25h3v3h-3zM30 25h3v3h-3zM22 27h3v6h-3zM27 30h6v3h-6z"})})})]})]}),o.jsxs("div",{style:{background:"#ffffff",border:"1px solid #cbd5e1",borderRadius:"14px",padding:"1rem",marginTop:"1.25rem",display:"flex",alignItems:"center",gap:"0.75rem",boxShadow:"0 2px 8px rgba(15, 39, 68, 0.04)"},children:[o.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#2563eb",strokeWidth:"2.5",children:o.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),o.jsxs("div",{style:{fontSize:"0.78rem",color:"#475569",lineHeight:1.3},children:[o.jsx("strong",{children:"Credencial Oficial UNEG:"})," Válida para control de acceso, asistencia y biblioteca en todas las sedes."]})]})]}),o.jsxs("div",{className:"uneg-details-col",children:[o.jsxs("div",{className:"uneg-panel-card",children:[o.jsxs("div",{className:"uneg-panel-title",children:[o.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#2563eb",strokeWidth:"2.5",children:[o.jsx("path",{d:"M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z"}),o.jsx("path",{d:"M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93"}),o.jsx("path",{d:"M16 8a4 4 0 0 1-8 0"}),o.jsx("path",{d:"M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5"})]}),"Gestión de Biometría Facial (FaceSentinel SSO)"]}),o.jsx("p",{className:"uneg-panel-sub",children:"Estado de enrolamiento y verificación de vector facial para torniquetes automatizados."}),l!=null&&l.has_biometrics_enrolled?o.jsxs("div",{className:"uneg-bio-status-card enrolled",children:[o.jsxs("div",{className:"uneg-bio-head",children:[o.jsxs("span",{className:"uneg-bio-badge badge-verified",children:[o.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Biometría Facial Vinculada y Activa"]}),o.jsx("span",{style:{fontSize:"0.74rem",color:"#047857",fontWeight:700},children:"SSO Habilitado"})]}),o.jsxs("p",{className:"uneg-bio-text text-enrolled",children:["Tu rostro se encuentra registrado en el servidor seguro de ",o.jsx("strong",{children:"FaceSentinel"}),". Puedes acceder a las instalaciones universitarias, torniquetes y al portal sin introducir contraseñas."]}),o.jsxs("button",{onClick:h,disabled:u,className:"uneg-btn-link-bio btn-bio-secondary",children:[o.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:o.jsx("path",{d:"M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"})}),u?"Conectando con FaceSentinel...":"Re-escanear o Actualizar Datos Faciales"]})]}):o.jsxs("div",{className:"uneg-bio-status-card pending",children:[o.jsxs("div",{className:"uneg-bio-head",children:[o.jsxs("span",{className:"uneg-bio-badge badge-pending",children:[o.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[o.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),"Biometría Facial Pendiente de Registro"]}),o.jsx("span",{style:{fontSize:"0.74rem",color:"#b45309",fontWeight:700},children:"Requiere Enrolamiento"})]}),o.jsxs("p",{className:"uneg-bio-text text-pending",children:["Aún no has registrado tu biometría facial. Vincula tu rostro con el motor ",o.jsx("strong",{children:"FaceSentinel"})," para disfrutar del acceso rápido sin contacto en los puntos de control y torniquetes de la universidad."]}),o.jsxs("button",{onClick:h,disabled:u,className:"uneg-btn-link-bio btn-bio-primary",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("path",{d:"M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z"}),o.jsx("path",{d:"M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93"}),o.jsx("path",{d:"M16 8a4 4 0 0 1-8 0"}),o.jsx("path",{d:"M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5"})]}),u?"Iniciando sesión biométrica...":"Vincular Biometría Facial Ahora"]})]})]}),o.jsxs("div",{className:"uneg-panel-card",children:[o.jsxs("div",{className:"uneg-panel-title",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#2563eb",strokeWidth:"2.5",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Datos del Expediente y Registro Blockchain"]}),o.jsx("p",{className:"uneg-panel-sub",children:"Información del usuario y trazabilidad inmutable emitida por FaceSentinel."}),o.jsxs("div",{className:"uneg-info-grid",children:[o.jsxs("div",{className:"uneg-info-item",children:[o.jsx("span",{className:"uneg-info-key",children:"Nombre Completo"}),o.jsx("span",{className:"uneg-info-val",children:l==null?void 0:l.name})]}),o.jsxs("div",{className:"uneg-info-item",children:[o.jsx("span",{className:"uneg-info-key",children:"Rol Institucional"}),o.jsx("span",{className:"uneg-info-val",style:{color:"#2563eb",fontWeight:700},children:(l==null?void 0:l.role)||"Personal Universitario"})]}),o.jsxs("div",{className:"uneg-info-item",children:[o.jsx("span",{className:"uneg-info-key",children:"Correo Institucional"}),o.jsx("span",{className:"uneg-info-val",children:l==null?void 0:l.email})]}),o.jsxs("div",{className:"uneg-info-item",children:[o.jsx("span",{className:"uneg-info-key",children:"Estado de Acreditación"}),o.jsxs("span",{className:"uneg-info-val",style:{color:"#059669",display:"flex",alignItems:"center",gap:"0.3rem"},children:[o.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:"#10b981"}}),"Activo y Solvente"]})]}),o.jsxs("div",{className:"uneg-info-item",style:{gridColumn:"1 / -1"},children:[o.jsx("span",{className:"uneg-info-key",children:"Hash Transacción Blockchain (Tx Hash)"}),o.jsx("span",{className:"uneg-info-val",style:{fontFamily:"monospace",fontSize:"0.78rem",color:"#4338ca"},children:(l==null?void 0:l.last_tx_hash)||"0x4f8c9b2e1a3d5e7f0b8a2c4e6d8f1a3b5c7e9d0f2a4b6c8e0d2f4a6b8c0e2d4"})]}),o.jsxs("div",{className:"uneg-info-item",children:[o.jsx("span",{className:"uneg-info-key",children:"Bloque Blockchain"}),o.jsx("span",{className:"uneg-info-val",style:{fontFamily:"monospace",fontSize:"0.85rem"},children:l!=null&&l.last_block_number?`#${l.last_block_number}`:"#104829"})]}),o.jsxs("div",{className:"uneg-info-item",children:[o.jsx("span",{className:"uneg-info-key",children:"Identificador de Usuario (ID)"}),o.jsx("span",{className:"uneg-info-val",style:{fontFamily:"monospace",fontSize:"0.85rem"},children:l==null?void 0:l.id})]})]})]}),o.jsxs("div",{className:"uneg-panel-card",children:[o.jsxs("div",{className:"uneg-panel-title",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#2563eb",strokeWidth:"2.5",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("polyline",{points:"12 6 12 12 16 14"})]}),"Marcajes y Accesos Personales Recientes"]}),o.jsx("p",{className:"uneg-panel-sub",children:"Últimos registros de asistencia validados en torniquetes y puertas universitarias."}),o.jsxs("div",{className:"uneg-personal-logs",children:[o.jsxs("div",{className:"uneg-log-row",children:[o.jsxs("div",{children:[o.jsx("strong",{style:{color:"#0f2744"},children:"Entrada - Sede Atlántico (Puerta Principal)"}),o.jsx("div",{style:{fontSize:"0.74rem",color:"#64748b"},children:l!=null&&l.has_biometrics_enrolled?"Validado con Biometría FaceSentinel":"Marcaje Manual"})]}),o.jsxs("div",{style:{textAlign:"right"},children:[o.jsx("span",{style:{fontWeight:700,color:"#173b6c"},children:"07:45 AM"}),o.jsx("div",{style:{fontSize:"0.7rem",color:"#10b981",fontWeight:700},children:"Autorizado"})]})]}),o.jsxs("div",{className:"uneg-log-row",children:[o.jsxs("div",{children:[o.jsx("strong",{style:{color:"#0f2744"},children:"Salida - Sede Atlántico (Edificio Aulas)"}),o.jsx("div",{style:{fontSize:"0.74rem",color:"#64748b"},children:l!=null&&l.has_biometrics_enrolled?"Validado con Biometría FaceSentinel":"Marcaje Manual"})]}),o.jsxs("div",{style:{textAlign:"right"},children:[o.jsx("span",{style:{fontWeight:700,color:"#173b6c"},children:"Ayer, 04:30 PM"}),o.jsx("div",{style:{fontSize:"0.7rem",color:"#10b981",fontWeight:700},children:"Autorizado"})]})]})]})]})]})]})]})]})}function Kb(){const[l,u]=A.useState({PORT:"3005",CLIENT_ID:"APP_ECOMMERCE_001",CLIENT_SECRET:"",SESSION_SECRET:"",FACESENTINEL_PUBLIC_URL:"",FACESENTINEL_BACKEND_URL:"http://127.0.0.1:8001",FACESENTINEL_WS_URL:"",REDIRECT_URI:"",CLIENT_URL:"",JWT_SECRET_KEY:"",JWT_ALGORITHM:"HS256"}),[c,s]=A.useState(""),[f,h]=A.useState(!0),[m,p]=A.useState(!1),[b,y]=A.useState(null),[x,v]=A.useState(""),[z,k]=A.useState(!1);A.useEffect(()=>{L()},[]);async function L(){var U,K;h(!0),v("");try{const I=await en.get("/config/env");(U=I.data)!=null&&U.env&&u(ee=>({...ee,...I.data.env})),(K=I.data)!=null&&K.filePath&&s(I.data.filePath)}catch(I){console.error("Error cargando .env:",I),v("No se pudieron leer las variables del archivo .env")}finally{h(!1)}}function Y(U,K){u(I=>({...I,[U]:K}))}function M(){u(U=>({...U,PORT:"3005",CLIENT_ID:"APP_ECOMMERCE_001",FACESENTINEL_PUBLIC_URL:"http://150.188.128.20:8088",FACESENTINEL_BACKEND_URL:"http://150.188.128.20:8001",FACESENTINEL_WS_URL:"ws://150.188.128.20:8088/api/v1/ws/liveness",REDIRECT_URI:"http://150.188.128.20:3005/callback",CLIENT_URL:"http://150.188.128.20:3005",JWT_ALGORITHM:"HS256"})),y({type:"info",text:'Preajuste Servidor Remoto cargado. Introduce tu JWT_SECRET_KEY y pulsa "Guardar y Aplicar".'})}function T(){u(U=>({...U,PORT:"3005",CLIENT_ID:"APP_ECOMMERCE_001",FACESENTINEL_PUBLIC_URL:"http://localhost:8088",FACESENTINEL_BACKEND_URL:"http://localhost:8001",FACESENTINEL_WS_URL:"ws://localhost:8088/api/v1/ws/liveness",REDIRECT_URI:"http://localhost:3005/callback",CLIENT_URL:"http://localhost:3005",JWT_ALGORITHM:"HS256"})),y({type:"info",text:'Preajuste Localhost cargado. Introduce tu JWT_SECRET_KEY y pulsa "Guardar y Aplicar".'})}async function V(U){var K,I,ee,J;U.preventDefault(),p(!0),y(null),v("");try{const oe=await en.post("/config/env",l);y({type:"success",text:((K=oe.data)==null?void 0:K.message)||"¡Variables guardadas con éxito en el archivo .env y en tiempo de ejecución!"}),(I=oe.data)!=null&&I.env&&u(Se=>({...Se,...oe.data.env}))}catch(oe){console.error("Error guardando .env:",oe),v(((J=(ee=oe.response)==null?void 0:ee.data)==null?void 0:J.error)||"Error al escribir en el archivo .env")}finally{p(!1)}}return o.jsxs("div",{className:"uneg-settings-container",children:[o.jsx("style",{children:`
        .uneg-settings-container {
          min-height: calc(100vh - 120px);
          background: #f4f7fb;
          padding: 2.5rem 1.5rem 4rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-settings-wrapper {
          max-width: 920px;
          margin: 0 auto;
        }

        .uneg-settings-head {
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .uneg-settings-pre {
          font-size: 0.74rem;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }

        .uneg-settings-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.02em;
          margin-bottom: 0.35rem;
        }

        .uneg-settings-desc {
          color: #64748b;
          font-size: 0.92rem;
        }

        .uneg-preset-bar {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .uneg-btn-preset {
          padding: 0.5rem 0.95rem;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #173b6c;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          transition: all 0.2s;
        }

        .uneg-btn-preset:hover {
          border-color: #2563eb;
          color: #2563eb;
          background: #eff6ff;
          transform: translateY(-1px);
        }

        .uneg-settings-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          padding: 2.2rem;
          box-shadow: 0 10px 30px rgba(15, 39, 68, 0.06);
          position: relative;
        }

        .uneg-card-top-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #0f2744 0%, #2563eb 50%, #f59e0b 100%);
          border-radius: 20px 20px 0 0;
        }

        .uneg-section-group {
          margin-bottom: 2rem;
        }

        .uneg-group-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f2744;
          margin-bottom: 0.3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .uneg-group-sub {
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 1.25rem;
        }

        .uneg-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .uneg-field-full {
          grid-column: 1 / -1;
        }

        .uneg-field-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: #173b6c;
          margin-bottom: 0.35rem;
        }

        .uneg-field-hint {
          font-size: 0.72rem;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .uneg-input-box {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          color: #0f2744;
          font-size: 0.88rem;
          font-family: monospace;
          transition: all 0.2s ease;
        }

        .uneg-input-box:focus {
          outline: none;
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .uneg-alert {
          padding: 0.95rem 1.25rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          font-size: 0.86rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .alert-success {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #065f46;
        }

        .alert-info {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1e40af;
        }

        .alert-danger {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
        }

        .uneg-actions-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .uneg-btn-save {
          padding: 0.85rem 1.75rem;
          background: linear-gradient(135deg, #173b6c 0%, #2563eb 100%);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
          transition: all 0.2s;
        }

        .uneg-btn-save:hover:not(:disabled) {
          background: linear-gradient(135deg, #0f2744 0%, #1d4ed8 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
        }

        .uneg-btn-save:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .uneg-btn-reload {
          padding: 0.85rem 1.35rem;
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .uneg-btn-reload:hover {
          background: #e2e8f0;
        }

        @media (max-width: 680px) {
          .uneg-form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),o.jsxs("div",{className:"uneg-settings-wrapper",children:[o.jsx("div",{className:"uneg-settings-head",children:o.jsxs("div",{children:[o.jsx("p",{className:"uneg-settings-pre",children:"Panel de Configuración y Despliegue"}),o.jsx("h1",{className:"uneg-settings-title",children:"Variables de Entorno (.env)"}),o.jsxs("p",{className:"uneg-settings-desc",children:["Administra los endpoints de ",o.jsx("strong",{children:"FaceSentinel"}),", URLs públicas, parámetros OAuth2 y claves JWT."]})]})}),o.jsxs("div",{className:"uneg-preset-bar",children:[o.jsx("span",{style:{fontSize:"0.8rem",color:"#64748b",fontWeight:700,alignSelf:"center",marginRight:"0.25rem"},children:"Preajustes Rápidos:"}),o.jsxs("button",{type:"button",onClick:M,className:"uneg-btn-preset",children:[o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),o.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),o.jsx("line",{x1:"6",y1:"6",x2:"6.01",y2:"6"}),o.jsx("line",{x1:"6",y1:"18",x2:"6.01",y2:"18"})]}),"Servidor Remoto (:8088 / :8001)"]}),o.jsxs("button",{type:"button",onClick:T,className:"uneg-btn-preset",children:[o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),o.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),"Entorno Local (localhost)"]})]}),b&&o.jsxs("div",{className:`uneg-alert alert-${b.type}`,children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),o.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),o.jsx("span",{children:b.text})]}),x&&o.jsxs("div",{className:"uneg-alert alert-danger",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),o.jsx("span",{children:x})]}),o.jsxs("form",{onSubmit:V,className:"uneg-settings-card",children:[o.jsx("div",{className:"uneg-card-top-line"}),o.jsxs("div",{className:"uneg-section-group",children:[o.jsxs("div",{className:"uneg-group-title",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#2563eb",strokeWidth:"2.5",children:[o.jsx("path",{d:"M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z"}),o.jsx("path",{d:"M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93"}),o.jsx("path",{d:"M16 8a4 4 0 0 1-8 0"}),o.jsx("path",{d:"M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5"})]}),"Conexión con FaceSentinel (IdP Biométrico)"]}),o.jsx("p",{className:"uneg-group-sub",children:"Configura los endpoints de Frontend, Backend REST y WebSockets de FaceSentinel."}),o.jsxs("div",{className:"uneg-form-grid",children:[o.jsxs("div",{children:[o.jsx("label",{className:"uneg-field-label",children:"FACESENTINEL_PUBLIC_URL"}),o.jsx("input",{type:"text",value:l.FACESENTINEL_PUBLIC_URL||"",onChange:U=>Y("FACESENTINEL_PUBLIC_URL",U.target.value),className:"uneg-input-box",placeholder:"http://150.188.128.20:8088",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"URL pública del Frontend donde se redirige para la captura facial (:8088)."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"uneg-field-label",children:"FACESENTINEL_BACKEND_URL"}),o.jsx("input",{type:"text",value:l.FACESENTINEL_BACKEND_URL||"",onChange:U=>Y("FACESENTINEL_BACKEND_URL",U.target.value),className:"uneg-input-box",placeholder:"http://150.188.128.20:8001",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"URL del Backend FastAPI para validación de tokens y endpoints REST (:8001)."})]}),o.jsxs("div",{className:"uneg-field-full",children:[o.jsx("label",{className:"uneg-field-label",children:"FACESENTINEL_WS_URL"}),o.jsx("input",{type:"text",value:l.FACESENTINEL_WS_URL||"",onChange:U=>Y("FACESENTINEL_WS_URL",U.target.value),className:"uneg-input-box",placeholder:"ws://150.188.128.20:8088/api/v1/ws/liveness",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"Endpoint WebSocket para detección de liveness en tiempo real."})]})]})]}),o.jsxs("div",{className:"uneg-section-group",children:[o.jsxs("div",{className:"uneg-group-title",children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#2563eb",strokeWidth:"2.5",children:[o.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),o.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),o.jsx("line",{x1:"6",y1:"6",x2:"6.01",y2:"6"}),o.jsx("line",{x1:"6",y1:"18",x2:"6.01",y2:"18"})]}),"Identidad OAuth2 y Redirección del Cliente"]}),o.jsx("p",{className:"uneg-group-sub",children:"Credenciales registradas de esta aplicación cliente en FaceSentinel."}),o.jsxs("div",{className:"uneg-form-grid",children:[o.jsxs("div",{children:[o.jsx("label",{className:"uneg-field-label",children:"CLIENT_ID"}),o.jsx("input",{type:"text",value:l.CLIENT_ID||"",onChange:U=>Y("CLIENT_ID",U.target.value),className:"uneg-input-box",placeholder:"APP_ECOMMERCE_001",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"Identificador público único registrado en FaceSentinel."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"uneg-field-label",children:"REDIRECT_URI"}),o.jsx("input",{type:"text",value:l.REDIRECT_URI||"",onChange:U=>Y("REDIRECT_URI",U.target.value),className:"uneg-input-box",placeholder:"http://150.188.128.20:3005/callback",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"URI exacta de retorno autorizada en FaceSentinel."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"uneg-field-label",children:"PORT"}),o.jsx("input",{type:"number",value:l.PORT||"3005",onChange:U=>Y("PORT",U.target.value),className:"uneg-input-box",placeholder:"3005",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"Puerto TCP de escucha del servidor cliente (:3005)."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"uneg-field-label",children:"CLIENT_URL"}),o.jsx("input",{type:"text",value:l.CLIENT_URL||"",onChange:U=>Y("CLIENT_URL",U.target.value),className:"uneg-input-box",placeholder:"http://150.188.128.20:3005",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"URL base de este cliente en la red."})]})]})]}),o.jsxs("div",{className:"uneg-section-group",children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.3rem"},children:[o.jsxs("div",{className:"uneg-group-title",style:{margin:0},children:[o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#2563eb",strokeWidth:"2.5",children:[o.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),o.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Claves Secretas y Firma Criptográfica (JWT)"]}),o.jsx("button",{type:"button",onClick:()=>k(!z),style:{background:"none",border:"none",color:"#2563eb",fontSize:"0.78rem",fontWeight:700,cursor:"pointer"},children:z?"🙈 Ocultar Claves":"👁️ Mostrar Claves"})]}),o.jsx("p",{className:"uneg-group-sub",children:"Clave simétrica compartida del IdP para verificar firmas de los tokens JWT emitidos."}),o.jsxs("div",{className:"uneg-form-grid",children:[o.jsxs("div",{className:"uneg-field-full",children:[o.jsx("label",{className:"uneg-field-label",children:"JWT_SECRET_KEY (Clave de firma del IdP)"}),o.jsx("input",{type:z?"text":"password",value:l.JWT_SECRET_KEY||"",onChange:U=>Y("JWT_SECRET_KEY",U.target.value),className:"uneg-input-box",placeholder:"tu_jwt_secret_key_hex_64_caracteres",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"Clave simétrica con la que FaceSentinel firma los tokens JWT."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"uneg-field-label",children:"JWT_ALGORITHM"}),o.jsx("input",{type:"text",value:l.JWT_ALGORITHM||"HS256",onChange:U=>Y("JWT_ALGORITHM",U.target.value),className:"uneg-input-box",placeholder:"HS256",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"Algoritmo de firma esperado (ej. HS256)."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"uneg-field-label",children:"CLIENT_SECRET"}),o.jsx("input",{type:z?"text":"password",value:l.CLIENT_SECRET||"",onChange:U=>Y("CLIENT_SECRET",U.target.value),className:"uneg-input-box",placeholder:"tu_client_secret_aqui"}),o.jsx("p",{className:"uneg-field-hint",children:"Secreto OAuth2 de cliente si aplica intercambio directo backend-to-backend."})]}),o.jsxs("div",{className:"uneg-field-full",children:[o.jsx("label",{className:"uneg-field-label",children:"SESSION_SECRET"}),o.jsx("input",{type:z?"text":"password",value:l.SESSION_SECRET||"",onChange:U=>Y("SESSION_SECRET",U.target.value),className:"uneg-input-box",placeholder:"uneg_secure_session_secret_2026_jwt",required:!0}),o.jsx("p",{className:"uneg-field-hint",children:"Secreto local para firmar las cookies HTTP-Only de sesión."})]})]})]}),o.jsxs("div",{className:"uneg-actions-footer",children:[o.jsxs("button",{type:"button",onClick:L,disabled:f||m,className:"uneg-btn-reload",children:[o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:o.jsx("path",{d:"M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"})}),"Recargar Valores"]}),o.jsx("button",{type:"submit",disabled:m,className:"uneg-btn-save",children:m?"Guardando en .env...":o.jsxs(o.Fragment,{children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),o.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),o.jsx("polyline",{points:"7 3 7 8 15 8"})]}),"Guardar y Aplicar en .env"]})})]})]})]})]})}function Lm({children:l}){const{user:u,loading:c}=va();return c?o.jsxs("div",{className:"uneg-loader-container",children:[o.jsx("div",{className:"uneg-spinner"}),o.jsx("p",{className:"uneg-loader-text",children:"Verificando credenciales universitarias UNEG..."}),o.jsx("style",{children:`
          .uneg-loader-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #f4f7fb;
            color: #173b6c;
            gap: 1rem;
          }
          .uneg-spinner {
            width: 44px;
            height: 44px;
            border: 4px solid #dbeafe;
            border-top: 4px solid #2563eb;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .uneg-loader-text {
            font-size: 0.95rem;
            font-weight: 600;
            color: #1e3a8a;
          }
        `})]}):u?l:o.jsx(Xo,{to:"/login",replace:!0})}function Bm({children:l}){const{user:u,loading:c}=va();return c?o.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f4f7fb"},children:o.jsx("p",{style:{color:"#173b6c",fontWeight:600},children:"Cargando portal UNEG..."})}):u?o.jsx(Xo,{to:"/",replace:!0}):l}function ml({size:l=42}){return o.jsxs("svg",{width:l,height:l,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"shieldGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:"#0f2744"}),o.jsx("stop",{offset:"50%",stopColor:"#173b6c"}),o.jsx("stop",{offset:"100%",stopColor:"#2563eb"})]}),o.jsxs("linearGradient",{id:"goldGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:"#f59e0b"}),o.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),o.jsx("path",{d:"M50 8 L86 22 V54 C86 74 70 88 50 94 C30 88 14 74 14 54 V22 Z",fill:"url(#shieldGrad)",stroke:"#ffffff",strokeWidth:"3.5"}),o.jsx("path",{d:"M50 15 L80 27 V52 C80 69 66 82 50 87 C34 82 20 69 20 52 V27 Z",fill:"none",stroke:"url(#goldGrad)",strokeWidth:"2.5",strokeDasharray:"4 2"}),o.jsx("circle",{cx:"50",cy:"38",r:"12",fill:"url(#goldGrad)"}),o.jsx("path",{d:"M50 20 V26 M50 50 V56 M32 38 H38 M62 38 H68 M37 25 L41 29 M59 47 L63 51 M37 51 L41 47 M59 29 L63 25",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round"}),o.jsx("path",{d:"M32 64 C40 60 48 64 50 67 C52 64 60 60 68 64 V75 C60 71 52 75 50 78 C48 75 40 71 32 75 Z",fill:"#ffffff",opacity:"0.95"}),o.jsx("circle",{cx:"50",cy:"38",r:"4",fill:"#ffffff"})]})}function Fb(){const{user:l,logout:u}=va(),[c,s]=A.useState("");return A.useEffect(()=>{function f(){s(new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}))}f();const h=setInterval(f,1e3);return()=>clearInterval(h)},[]),l?o.jsxs("header",{className:"uneg-header-wrapper",children:[o.jsx("style",{children:`
        .uneg-header-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(15, 39, 68, 0.08);
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-topbar {
          background: #0a192f;
          color: #94a3b8;
          font-size: 0.72rem;
          padding: 0.35rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          letter-spacing: 0.03em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .uneg-topbar-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .uneg-topbar-right {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .uneg-topbar-clock {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: #f1f5f9;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
        }

        .uneg-main-nav {
          background: #ffffff;
          padding: 0.75rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #e2e8f0;
        }

        .uneg-brand {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          text-decoration: none;
        }

        .uneg-brand-text {
          display: flex;
          flex-direction: column;
        }

        .uneg-brand-title {
          font-size: 1.08rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .uneg-brand-sub {
          font-size: 0.75rem;
          font-weight: 600;
          color: #2563eb;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .uneg-nav-center {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .uneg-nav-link {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1rem;
          border-radius: 8px;
          color: #334e68;
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .uneg-nav-link:hover {
          color: #173b6c;
          background: #f1f5f9;
        }

        .uneg-nav-link.active {
          color: #2563eb;
          background: #eff6ff;
          border-bottom: 2px solid #2563eb;
        }

        .uneg-nav-right {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }

        .uneg-sede-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
        }

        .uneg-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
          70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .uneg-user-pill {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.35rem 0.75rem 0.35rem 0.45rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .uneg-user-pill:hover {
          border-color: #bfdbfe;
          background: #eff6ff;
        }

        .uneg-avatar-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #173b6c 0%, #2563eb 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.82rem;
          box-shadow: 0 2px 5px rgba(37, 99, 235, 0.25);
        }

        .uneg-user-details {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .uneg-user-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f2744;
        }

        .uneg-user-role {
          font-size: 0.68rem;
          font-weight: 600;
          color: #2563eb;
        }

        .uneg-btn-logout {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: 1px solid #cbd5e1;
          color: #475569;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .uneg-btn-logout:hover {
          background: #fef2f2;
          border-color: #fca5a5;
          color: #b91c1c;
        }

        @media (max-width: 900px) {
          .uneg-topbar {
            display: none;
          }
          .uneg-main-nav {
            padding: 0.6rem 1rem;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          .uneg-brand-title {
            font-size: 0.95rem;
          }
          .uneg-nav-center {
            order: 3;
            width: 100%;
            justify-content: center;
            border-top: 1px solid #f1f5f9;
            padding-top: 0.5rem;
          }
        }
      `}),o.jsxs("div",{className:"uneg-topbar",children:[o.jsxs("div",{className:"uneg-topbar-left",children:[o.jsx("span",{children:"REPÚBLICA BOLIVARIANA DE VENEZUELA"}),o.jsx("span",{children:"•"}),o.jsx("span",{children:"UNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA"})]}),o.jsxs("div",{className:"uneg-topbar-right",children:[o.jsx("span",{children:"Coordinación General de Control de Accesos y Asistencia"}),o.jsxs("div",{className:"uneg-topbar-clock",children:[o.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("polyline",{points:"12 6 12 12 16 14"})]}),o.jsx("span",{children:c||"Sincronizando..."})]})]})]}),o.jsxs("nav",{className:"uneg-main-nav",children:[o.jsxs(Jn,{to:"/",className:"uneg-brand",children:[o.jsx(ml,{size:42}),o.jsxs("div",{className:"uneg-brand-text",children:[o.jsx("span",{className:"uneg-brand-title",children:"UNIVERSIDAD DE GUAYANA"}),o.jsx("span",{className:"uneg-brand-sub",children:"Portal de Accesos y Asistencia • UNEG"})]})]}),o.jsxs("div",{className:"uneg-nav-center",children:[o.jsxs(Vr,{to:"/",end:!0,className:({isActive:f})=>`uneg-nav-link ${f?"active":""}`,children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("rect",{x:"3",y:"3",width:"7",height:"9"}),o.jsx("rect",{x:"14",y:"3",width:"7",height:"5"}),o.jsx("rect",{x:"14",y:"12",width:"7",height:"9"}),o.jsx("rect",{x:"3",y:"16",width:"7",height:"5"})]}),"Panel de Accesos"]}),o.jsxs(Vr,{to:"/profile",className:({isActive:f})=>`uneg-nav-link ${f?"active":""}`,children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.jsx("circle",{cx:"9",cy:"10",r:"2"}),o.jsx("line",{x1:"15",y1:"8",x2:"17",y2:"8"}),o.jsx("line",{x1:"15",y1:"12",x2:"17",y2:"12"}),o.jsx("line",{x1:"7",y1:"16",x2:"17",y2:"16"})]}),"Credencial Universitaria"]}),o.jsxs(Vr,{to:"/settings",className:({isActive:f})=>`uneg-nav-link ${f?"active":""}`,children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3"}),o.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),"Variables .env"]})]}),o.jsxs("div",{className:"uneg-nav-right",children:[o.jsxs("div",{className:"uneg-sede-badge",title:"Terminal biométrico conectado al servidor central",children:[o.jsx("span",{className:"uneg-pulse-dot"}),o.jsx("span",{children:"Sede Atlántico • Online"})]}),o.jsxs(Jn,{to:"/profile",className:"uneg-user-pill",title:"Ver mi credencial",children:[o.jsx("div",{className:"uneg-avatar-badge",children:l.name?l.name.charAt(0).toUpperCase():"U"}),o.jsxs("div",{className:"uneg-user-details",children:[o.jsx("span",{className:"uneg-user-name",children:l.name.split(" ")[0]}),o.jsx("span",{className:"uneg-user-role",children:l.has_biometrics_enrolled?"Biometría Activa":"Personal UNEG"})]})]}),o.jsxs("button",{onClick:u,className:"uneg-btn-logout",title:"Cerrar sesión del sistema",children:[o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),o.jsx("polyline",{points:"16 17 21 12 16 7"}),o.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Salir"]})]})]})]}):null}function Wb(){return o.jsxs("footer",{className:"uneg-footer",children:[o.jsx("style",{children:`
        .uneg-footer {
          background: #0f2744;
          color: #94a3b8;
          border-top: 3px solid #2563eb;
          padding: 2.25rem 2rem 1.5rem;
          margin-top: auto;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }
        .uneg-footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 1.5rem;
        }
        .uneg-footer-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .uneg-footer-text h4 {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .uneg-footer-text p {
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .uneg-footer-badges {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .uneg-tag {
          font-size: 0.72rem;
          background: rgba(37, 99, 235, 0.15);
          color: #93c5fd;
          border: 1px solid rgba(37, 99, 235, 0.3);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          font-weight: 600;
        }
        .uneg-footer-bottom {
          max-width: 1200px;
          margin: 1.25rem auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #64748b;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        @media (max-width: 768px) {
          .uneg-footer-content, .uneg-footer-bottom {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
        }
      `}),o.jsxs("div",{className:"uneg-footer-content",children:[o.jsxs("div",{className:"uneg-footer-brand",children:[o.jsx(ml,{size:36}),o.jsxs("div",{className:"uneg-footer-text",children:[o.jsx("h4",{children:"Universidad Nacional Experimental de Guayana (UNEG)"}),o.jsx("p",{children:"Dirección de Tecnologías de Información y Comunicación • Sistema FaceSentinel SSO"})]})]}),o.jsxs("div",{className:"uneg-footer-badges",children:[o.jsx("span",{className:"uneg-tag",children:"Sede Atlántico"}),o.jsx("span",{className:"uneg-tag",children:"Sede Chilemex"}),o.jsx("span",{className:"uneg-tag",children:"Sede Villa Asia"}),o.jsx("span",{className:"uneg-tag",children:"Sede Ciudad Bolívar"})]})]}),o.jsxs("div",{className:"uneg-footer-bottom",children:[o.jsx("span",{children:"© 2026 UNEG • Control de Accesos y Asistencia. Todos los derechos reservados."}),o.jsx("span",{children:'Puerto Ordaz, Estado Bolívar, Venezuela. "La Luz de Guayana".'})]})]})}function $b(){return o.jsx(Yb,{children:o.jsx(Uy,{children:o.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[o.jsx(Fb,{}),o.jsx("div",{style:{flex:1},children:o.jsxs(sy,{children:[o.jsx(ga,{path:"/signup",element:o.jsx(Bm,{children:o.jsx(Gb,{})})}),o.jsx(ga,{path:"/login",element:o.jsx(Bm,{children:o.jsx(Xb,{})})}),o.jsx(ga,{path:"/settings",element:o.jsx(Kb,{})}),o.jsx(ga,{path:"/",element:o.jsx(Lm,{children:o.jsx(Zb,{})})}),o.jsx(ga,{path:"/profile",element:o.jsx(Lm,{children:o.jsx(Jb,{})})}),o.jsx(ga,{path:"*",element:o.jsx(Xo,{to:"/",replace:!0})})]})}),o.jsx(Wb,{})]})})})}o1.createRoot(document.getElementById("root")).render(o.jsx(t1.StrictMode,{children:o.jsx($b,{})}));
