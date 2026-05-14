(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function LS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var nh={exports:{}},Io={};var L0;function OS(){if(L0)return Io;L0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var O0;function PS(){return O0||(O0=1,nh.exports=OS()),nh.exports}var G=PS(),ih={exports:{}},ae={};var P0;function IS(){if(P0)return ae;P0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function v(I,Q,St){this.props=I,this.context=Q,this.refs=S,this.updater=St||T}v.prototype.isReactComponent={},v.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=v.prototype;function N(I,Q,St){this.props=I,this.context=Q,this.refs=S,this.updater=St||T}var U=N.prototype=new C;U.constructor=N,w(U,v.prototype),U.isPureReactComponent=!0;var V=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function P(I,Q,St){var At=St.ref;return{$$typeof:o,type:I,key:Q,ref:At!==void 0?At:null,props:St}}function W(I,Q){return P(I.type,Q,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function K(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(St){return Q[St]})}var ut=/\/+/g;function mt(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?K(""+I.key):Q.toString(36)}function q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(Q){I.status==="pending"&&(I.status="fulfilled",I.value=Q)},function(Q){I.status==="pending"&&(I.status="rejected",I.reason=Q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,Q,St,At,ht){var tt=typeof I;(tt==="undefined"||tt==="boolean")&&(I=null);var Mt=!1;if(I===null)Mt=!0;else switch(tt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(I.$$typeof){case o:case e:Mt=!0;break;case M:return Mt=I._init,O(Mt(I._payload),Q,St,At,ht)}}if(Mt)return ht=ht(I),Mt=At===""?"."+mt(I,0):At,V(ht)?(St="",Mt!=null&&(St=Mt.replace(ut,"$&/")+"/"),O(ht,Q,St,"",function($t){return $t})):ht!=null&&(H(ht)&&(ht=W(ht,St+(ht.key==null||I&&I.key===ht.key?"":(""+ht.key).replace(ut,"$&/")+"/")+Mt)),Q.push(ht)),1;Mt=0;var bt=At===""?".":At+":";if(V(I))for(var Ht=0;Ht<I.length;Ht++)At=I[Ht],tt=bt+mt(At,Ht),Mt+=O(At,Q,St,tt,ht);else if(Ht=y(I),typeof Ht=="function")for(I=Ht.call(I),Ht=0;!(At=I.next()).done;)At=At.value,tt=bt+mt(At,Ht++),Mt+=O(At,Q,St,tt,ht);else if(tt==="object"){if(typeof I.then=="function")return O(q(I),Q,St,At,ht);throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function B(I,Q,St){if(I==null)return I;var At=[],ht=0;return O(I,At,"","",function(tt){return Q.call(St,tt,ht++)}),At}function ot(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(St){(I._status===0||I._status===-1)&&(I._status=1,I._result=St)},function(St){(I._status===0||I._status===-1)&&(I._status=2,I._result=St)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var gt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},yt={map:B,forEach:function(I,Q,St){B(I,function(){Q.apply(this,arguments)},St)},count:function(I){var Q=0;return B(I,function(){Q++}),Q},toArray:function(I){return B(I,function(Q){return Q})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ae.Activity=x,ae.Children=yt,ae.Component=v,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=N,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ae.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},ae.cache=function(I){return function(){return I.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(I,Q,St){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var At=w({},I.props),ht=I.key;if(Q!=null)for(tt in Q.key!==void 0&&(ht=""+Q.key),Q)!b.call(Q,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&Q.ref===void 0||(At[tt]=Q[tt]);var tt=arguments.length-2;if(tt===1)At.children=St;else if(1<tt){for(var Mt=Array(tt),bt=0;bt<tt;bt++)Mt[bt]=arguments[bt+2];At.children=Mt}return P(I.type,ht,At)},ae.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ae.createElement=function(I,Q,St){var At,ht={},tt=null;if(Q!=null)for(At in Q.key!==void 0&&(tt=""+Q.key),Q)b.call(Q,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(ht[At]=Q[At]);var Mt=arguments.length-2;if(Mt===1)ht.children=St;else if(1<Mt){for(var bt=Array(Mt),Ht=0;Ht<Mt;Ht++)bt[Ht]=arguments[Ht+2];ht.children=bt}if(I&&I.defaultProps)for(At in Mt=I.defaultProps,Mt)ht[At]===void 0&&(ht[At]=Mt[At]);return P(I,tt,ht)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(I){return{$$typeof:p,render:I}},ae.isValidElement=H,ae.lazy=function(I){return{$$typeof:M,_payload:{_status:-1,_result:I},_init:ot}},ae.memo=function(I,Q){return{$$typeof:d,type:I,compare:Q===void 0?null:Q}},ae.startTransition=function(I){var Q=F.T,St={};F.T=St;try{var At=I(),ht=F.S;ht!==null&&ht(St,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(L,gt)}catch(tt){gt(tt)}finally{Q!==null&&St.types!==null&&(Q.types=St.types),F.T=Q}},ae.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ae.use=function(I){return F.H.use(I)},ae.useActionState=function(I,Q,St){return F.H.useActionState(I,Q,St)},ae.useCallback=function(I,Q){return F.H.useCallback(I,Q)},ae.useContext=function(I){return F.H.useContext(I)},ae.useDebugValue=function(){},ae.useDeferredValue=function(I,Q){return F.H.useDeferredValue(I,Q)},ae.useEffect=function(I,Q){return F.H.useEffect(I,Q)},ae.useEffectEvent=function(I){return F.H.useEffectEvent(I)},ae.useId=function(){return F.H.useId()},ae.useImperativeHandle=function(I,Q,St){return F.H.useImperativeHandle(I,Q,St)},ae.useInsertionEffect=function(I,Q){return F.H.useInsertionEffect(I,Q)},ae.useLayoutEffect=function(I,Q){return F.H.useLayoutEffect(I,Q)},ae.useMemo=function(I,Q){return F.H.useMemo(I,Q)},ae.useOptimistic=function(I,Q){return F.H.useOptimistic(I,Q)},ae.useReducer=function(I,Q,St){return F.H.useReducer(I,Q,St)},ae.useRef=function(I){return F.H.useRef(I)},ae.useState=function(I){return F.H.useState(I)},ae.useSyncExternalStore=function(I,Q,St){return F.H.useSyncExternalStore(I,Q,St)},ae.useTransition=function(){return F.H.useTransition()},ae.version="19.2.6",ae}var I0;function Id(){return I0||(I0=1,ih.exports=IS()),ih.exports}var zi=Id();const FS=LS(zi);var ah={exports:{}},Fo={},sh={exports:{}},rh={};var F0;function BS(){return F0||(F0=1,(function(o){function e(O,B){var ot=O.length;O.push(B);t:for(;0<ot;){var gt=ot-1>>>1,yt=O[gt];if(0<l(yt,B))O[gt]=B,O[ot]=yt,ot=gt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],ot=O.pop();if(ot!==B){O[0]=ot;t:for(var gt=0,yt=O.length,I=yt>>>1;gt<I;){var Q=2*(gt+1)-1,St=O[Q],At=Q+1,ht=O[At];if(0>l(St,ot))At<yt&&0>l(ht,St)?(O[gt]=ht,O[At]=ot,gt=At):(O[gt]=St,O[Q]=ot,gt=Q);else if(At<yt&&0>l(ht,ot))O[gt]=ht,O[At]=ot,gt=At;else break t}}return B}function l(O,B){var ot=O.sortIndex-B.sortIndex;return ot!==0?ot:O.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],M=1,x=null,g=3,y=!1,T=!1,w=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var B=i(d);B!==null;){if(B.callback===null)s(d);else if(B.startTime<=O)s(d),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(d)}}function V(O){if(w=!1,U(O),!T)if(i(m)!==null)T=!0,L||(L=!0,K());else{var B=i(d);B!==null&&q(V,B.startTime-O)}}var L=!1,F=-1,b=5,P=-1;function W(){return S?!0:!(o.unstable_now()-P<b)}function H(){if(S=!1,L){var O=o.unstable_now();P=O;var B=!0;try{t:{T=!1,w&&(w=!1,C(F),F=-1),y=!0;var ot=g;try{e:{for(U(O),x=i(m);x!==null&&!(x.expirationTime>O&&W());){var gt=x.callback;if(typeof gt=="function"){x.callback=null,g=x.priorityLevel;var yt=gt(x.expirationTime<=O);if(O=o.unstable_now(),typeof yt=="function"){x.callback=yt,U(O),B=!0;break e}x===i(m)&&s(m),U(O)}else s(m);x=i(m)}if(x!==null)B=!0;else{var I=i(d);I!==null&&q(V,I.startTime-O),B=!1}}break t}finally{x=null,g=ot,y=!1}B=void 0}}finally{B?K():L=!1}}}var K;if(typeof N=="function")K=function(){N(H)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,mt=ut.port2;ut.port1.onmessage=H,K=function(){mt.postMessage(null)}}else K=function(){v(H,0)};function q(O,B){F=v(function(){O(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var ot=g;g=B;try{return O()}finally{g=ot}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ot=g;g=O;try{return B()}finally{g=ot}},o.unstable_scheduleCallback=function(O,B,ot){var gt=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?gt+ot:gt):ot=gt,O){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=ot+yt,O={id:M++,callback:B,priorityLevel:O,startTime:ot,expirationTime:yt,sortIndex:-1},ot>gt?(O.sortIndex=ot,e(d,O),i(m)===null&&O===i(d)&&(w?(C(F),F=-1):w=!0,q(V,ot-gt))):(O.sortIndex=yt,e(m,O),T||y||(T=!0,L||(L=!0,K()))),O},o.unstable_shouldYield=W,o.unstable_wrapCallback=function(O){var B=g;return function(){var ot=g;g=B;try{return O.apply(this,arguments)}finally{g=ot}}}})(rh)),rh}var B0;function zS(){return B0||(B0=1,sh.exports=BS()),sh.exports}var oh={exports:{}},Nn={};var z0;function HS(){if(z0)return Nn;z0=1;var o=Id();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)d+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,M){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:M}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,d){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,M)},Nn.flushSync=function(m){var d=h.T,M=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=M,s.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var M=d.as,x=p(M,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;M==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):M==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var M=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:M,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var M=d.as,x=p(M,d.crossOrigin);s.d.L(m,M,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var M=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:M,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,M){return h.H.useFormState(m,d,M)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.6",Nn}var H0;function GS(){if(H0)return oh.exports;H0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),oh.exports=HS(),oh.exports}var G0;function VS(){if(G0)return Fo;G0=1;var o=zS(),e=Id(),i=GS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,r=f;break}if(R===r){_=!0,r=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=u;break}if(R===r){_=!0,r=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function M(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=M(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case V:return"Suspense";case L:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case N:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var q=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},gt=[],yt=-1;function I(t){return{current:t}}function Q(t){0>yt||(t.current=gt[yt],gt[yt]=null,yt--)}function St(t,n){yt++,gt[yt]=t.current,t.current=n}var At=I(null),ht=I(null),tt=I(null),Mt=I(null);function bt(t,n){switch(St(tt,n),St(ht,t),St(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?n0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=n0(n),t=i0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(At),St(At,t)}function Ht(){Q(At),Q(ht),Q(tt)}function $t(t){t.memoizedState!==null&&St(Mt,t);var n=At.current,a=i0(n,t.type);n!==a&&(St(ht,t),St(At,a))}function Qt(t){ht.current===t&&(Q(At),Q(ht)),Mt.current===t&&(Q(Mt),No._currentValue=ot)}var ke,fe;function ve(t){if(ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ke=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+t+fe}var Ne=!1;function le(t,n){if(!t||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var rt=lt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(lt){rt=lt}t.call(xt.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var z=_.split(`
`),nt=R.split(`
`);for(u=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(r===z.length||u===nt.length)for(r=z.length-1,u=nt.length-1;1<=r&&0<=u&&z[r]!==nt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(z[r]!==nt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||z[r]!==nt[u]){var dt=`
`+z[r].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=r&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ve(a):""}function rn(t,n){switch(t.tag){case 26:case 27:case 5:return ve(t.type);case 16:return ve("Lazy");case 13:return t.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return ve("Activity");default:return""}}function je(t){try{var n="",a=null;do n+=rn(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var En=Object.prototype.hasOwnProperty,j=o.unstable_scheduleCallback,$e=o.unstable_cancelCallback,he=o.unstable_shouldYield,ze=o.unstable_requestPaint,Ct=o.unstable_now,Ze=o.unstable_getCurrentPriorityLevel,D=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,J=o.unstable_NormalPriority,vt=o.unstable_LowPriority,Tt=o.unstable_IdlePriority,wt=o.log,Lt=o.unstable_setDisableYieldValue,ct=null,ft=null;function Ot(t){if(typeof wt=="function"&&Lt(t),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(ct,t)}catch{}}var Pt=Math.clz32?Math.clz32:ne,Ut=Math.log,Dt=Math.LN2;function ne(t){return t>>>=0,t===0?32:31-(Ut(t)/Dt|0)|0}var ie=256,pe=262144,k=4194304;function Rt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Rt(r):(_&=R,_!==0?u=Rt(_):a||(a=R&~t,a!==0&&(u=Rt(a))))):(R=r&~f,R!==0?u=Rt(R):_!==0?u=Rt(_):a||(a=r&~t,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Nt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function jt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function te(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,r,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,nt=t.hiddenUpdates;for(a=_&~a;0<a;){var dt=31-Pt(a),xt=1<<dt;R[dt]=0,z[dt]=-1;var rt=nt[dt];if(rt!==null)for(nt[dt]=null,dt=0;dt<rt.length;dt++){var lt=rt[dt];lt!==null&&(lt.lane&=-536870913)}a&=~xt}r!==0&&we(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function we(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Pt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function fi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Pt(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Kn(t,n){var a=n&-n;return a=(a&42)!==0?1:ls(a),(a&(t.suspendedLanes|n))!==0?0:a}function ls(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function kr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xr(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:A0(t.type))}function Wr(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var Dn=Math.random().toString(36).slice(2),on="__reactFiber$"+Dn,bn="__reactProps$"+Dn,qi="__reactContainer$"+Dn,ya="__reactEvents$"+Dn,$o="__reactListeners$"+Dn,zs="__reactHandles$"+Dn,jr="__reactResources$"+Dn,Ea="__reactMarker$"+Dn;function qr(t){delete t[on],delete t[bn],delete t[ya],delete t[$o],delete t[zs]}function ba(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[qi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=u0(t);t!==null;){if(a=t[on])return a;t=u0(t)}return n}t=a,a=t.parentNode}return null}function Ta(t){if(t=t[on]||t[qi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function cs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Aa(t){var n=t[jr];return n||(n=t[jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(t){t[Ea]=!0}var tl=new Set,A={};function Y(t,n){st(t,n),st(t+"Capture",n)}function st(t,n){for(A[t]=n,t=0;t<n.length;t++)tl.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},Ft={};function Vt(t){return En.call(Ft,t)?!0:En.call(at,t)?!1:it.test(t)?Ft[t]=!0:(at[t]=!0,!1)}function It(t,n,a){if(Vt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function kt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function re(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ae(t){if(!t._valueTracker){var n=re(t)?"checked":"value";t._valueTracker=Yt(t,n,""+t[n])}}function Ke(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=re(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Xe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Le=/[\n"\\]/g;function Oe(t){return t.replace(Le,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(t,n,a,r,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zt(n)):t.value!==""+Zt(n)&&(t.value=""+Zt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?me(t,_,Zt(n)):a!=null?me(t,_,Zt(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Zt(R):t.removeAttribute("name")}function Un(t,n,a,r,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ae(t);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ae(t)}function me(t,n,a){n==="number"&&Xe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function gn(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qn(t,n,a){if(n!=null&&(n=""+Zt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Zt(a):""}function Mi(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(q(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Zt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ae(t)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qe(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Pe.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function yi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Qe(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Qe(t,f,n[f])}function Ue(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ra=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function us(t){return Ra.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function ep(t){var n=Ta(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Oe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[bn]||null;if(!u)throw Error(s(90));Gt(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Ke(r)}break t;case"textarea":Qn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gn(t,!!a.multiple,n,!1)}}}var tu=!1;function np(t,n,a){if(tu)return t(n,a);tu=!0;try{var r=t(n);return r}finally{if(tu=!1,(Hs!==null||Gs!==null)&&(Gl(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,ep(n),t)))for(n=0;n<t.length;n++)ep(t[n])}}function Yr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[bn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Zi)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{eu=!1}var Ca=null,nu=null,el=null;function ip(){if(el)return el;var t,n=nu,a=n.length,r,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return el=u.slice(t,1<r?1-r:void 0)}function nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function ap(){return!1}function Gn(t){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:ap,this.isPropagationStopped=ap,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Gn(fs),Kr=x({},fs,{view:0,detail:0}),Uv=Gn(Kr),iu,au,Qr,sl=x({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qr&&(Qr&&t.type==="mousemove"?(iu=t.screenX-Qr.screenX,au=t.screenY-Qr.screenY):au=iu=0,Qr=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:au}}),sp=Gn(sl),Nv=x({},sl,{dataTransfer:0}),Lv=Gn(Nv),Ov=x({},Kr,{relatedTarget:0}),su=Gn(Ov),Pv=x({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Gn(Pv),Fv=x({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bv=Gn(Fv),zv=x({},fs,{data:0}),rp=Gn(zv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Vv[t])?!!n[t]:!1}function ru(){return kv}var Xv=x({},Kr,{key:function(t){if(t.key){var n=Hv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wv=Gn(Xv),jv=x({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Gn(jv),qv=x({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Yv=Gn(qv),Zv=x({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Gn(Zv),Qv=x({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=Gn(Qv),$v=x({},fs,{newState:0,oldState:0}),tx=Gn($v),ex=[9,13,27,32],ou=Zi&&"CompositionEvent"in window,Jr=null;Zi&&"documentMode"in document&&(Jr=document.documentMode);var nx=Zi&&"TextEvent"in window&&!Jr,lp=Zi&&(!ou||Jr&&8<Jr&&11>=Jr),cp=" ",up=!1;function fp(t,n){switch(t){case"keyup":return ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function ix(t,n){switch(t){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(up=!0,cp);case"textInput":return t=n.data,t===cp&&up?null:t;default:return null}}function ax(t,n){if(Vs)return t==="compositionend"||!ou&&fp(t,n)?(t=ip(),el=nu=Ca=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lp&&n.locale!=="ko"?null:n.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sx[t.type]:n==="textarea"}function pp(t,n,a,r){Hs?Gs?Gs.push(r):Gs=[r]:Hs=r,n=Yl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var $r=null,to=null;function rx(t){Kg(t,0)}function rl(t){var n=cs(t);if(Ke(n))return t}function mp(t,n){if(t==="change")return n}var gp=!1;if(Zi){var lu;if(Zi){var cu="oninput"in document;if(!cu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),cu=typeof _p.oninput=="function"}lu=cu}else lu=!1;gp=lu&&(!document.documentMode||9<document.documentMode)}function vp(){$r&&($r.detachEvent("onpropertychange",xp),to=$r=null)}function xp(t){if(t.propertyName==="value"&&rl(to)){var n=[];pp(n,to,t,$c(t)),np(rx,n)}}function ox(t,n,a){t==="focusin"?(vp(),$r=n,to=a,$r.attachEvent("onpropertychange",xp)):t==="focusout"&&vp()}function lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(to)}function cx(t,n){if(t==="click")return rl(n)}function ux(t,n){if(t==="input"||t==="change")return rl(n)}function fx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:fx;function eo(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!En.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,n){var a=Sp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Sp(a)}}function yp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?yp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ep(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xe(t.document)}return n}function uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hx=Zi&&"documentMode"in document&&11>=document.documentMode,ks=null,fu=null,no=null,hu=!1;function bp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||ks==null||ks!==Xe(r)||(r=ks,"selectionStart"in r&&uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&eo(no,r)||(no=r,r=Yl(fu,"onSelect"),0<r.length&&(n=new al("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ks)))}function hs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xs={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},du={},Tp={};Zi&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function ds(t){if(du[t])return du[t];if(!Xs[t])return t;var n=Xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tp)return du[t]=n[a];return t}var Ap=ds("animationend"),Rp=ds("animationiteration"),Cp=ds("animationstart"),dx=ds("transitionrun"),px=ds("transitionstart"),mx=ds("transitioncancel"),wp=ds("transitionend"),Dp=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function Ei(t,n){Dp.set(t,n),Y(n,[t])}var ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],Ws=0,mu=0;function ll(){for(var t=Ws,n=mu=Ws=0;n<t;){var a=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Up(a,u,f)}}function cl(t,n,a,r){hi[Ws++]=t,hi[Ws++]=n,hi[Ws++]=a,hi[Ws++]=r,mu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function gu(t,n,a,r){return cl(t,n,a,r),ul(t)}function ps(t,n){return cl(t,null,null,n),ul(t)}function Up(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pt(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ul(t){if(50<To)throw To=0,Af=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var js={};function gx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,r){return new gx(t,n,a,r)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Np(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function fl(t,n,a,r,u,f){var _=0;if(r=t,typeof t=="function")_u(t)&&(_=1);else if(typeof t=="string")_=MS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case P:return t=ti(31,a,n,u),t.elementType=P,t.lanes=f,t;case w:return ms(a.children,u,f,n);case S:_=8,u|=24;break;case v:return t=ti(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case V:return t=ti(13,a,n,u),t.elementType=V,t.lanes=f,t;case L:return t=ti(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:_=10;break t;case C:_=9;break t;case U:_=11;break t;case F:_=14;break t;case b:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ti(_,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function ms(t,n,a,r){return t=ti(7,t,r,n),t.lanes=a,t}function vu(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function Lp(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function xu(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Op=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Op.get(t);return a!==void 0?a:(n={value:t,source:n,stack:je(n)},Op.set(t,n),n)}return{value:t,source:n,stack:je(n)}}var qs=[],Ys=0,hl=null,io=0,pi=[],mi=0,wa=null,Li=1,Oi="";function Qi(t,n){qs[Ys++]=io,qs[Ys++]=hl,hl=t,io=n}function Pp(t,n,a){pi[mi++]=Li,pi[mi++]=Oi,pi[mi++]=wa,wa=t;var r=Li;t=Oi;var u=32-Pt(r)-1;r&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Li=1<<32-Pt(n)+u|a<<u|r,Oi=f+t}else Li=1<<f|a<<u|r,Oi=t}function Su(t){t.return!==null&&(Qi(t,1),Pp(t,1,0))}function Mu(t){for(;t===hl;)hl=qs[--Ys],qs[Ys]=null,io=qs[--Ys],qs[Ys]=null;for(;t===wa;)wa=pi[--mi],pi[mi]=null,Oi=pi[--mi],pi[mi]=null,Li=pi[--mi],pi[mi]=null}function Ip(t,n){pi[mi++]=Li,pi[mi++]=Oi,pi[mi++]=wa,Li=n.id,Oi=n.overflow,wa=t}var Tn=null,qe=null,ye=!1,Da=null,gi=!1,yu=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(di(n,t)),yu}function Fp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[on]=t,n[bn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)_e(Ro[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Un(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Mi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||t0(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ua(t,!0)}function Bp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Tn=Tn.return}}function Zs(t){if(t!==Tn)return!1;if(!ye)return Bp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gf(t.type,t.memoizedProps)),a=!a),a&&qe&&Ua(t),Bp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=c0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=c0(t)}else n===27?(n=qe,Wa(t.type)?(t=jf,jf=null,qe=t):qe=n):qe=Tn?vi(t.stateNode.nextSibling):null;return!0}function gs(){qe=Tn=null,ye=!1}function Eu(){var t=Da;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Da=null),t}function ao(t){Da===null?Da=[t]:Da.push(t)}var bu=I(null),_s=null,Ji=null;function Na(t,n,a){St(bu,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=bu.current,Q(bu)}function Tu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Au(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Tu(f.return,a,t),r||(_=null);break t}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Tu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ks(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;$n(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===Mt.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&Au(n,t,a,r),n.flags|=262144}function dl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vs(t){_s=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return zp(_s,t)}function pl(t,n){return _s===null&&vs(t),zp(t,n)}function zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(s(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var _x=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},vx=o.unstable_scheduleCallback,xx=o.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new _x,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&vx(xx,function(){t.controller.abort()})}var ro=null,Cu=0,Qs=0,Js=null;function Sx(t,n){if(ro===null){var a=ro=[];Cu=0,Qs=Nf(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Cu++,n.then(Hp,Hp),n}function Hp(){if(--Cu===0&&ro!==null){Js!==null&&(Js.status="fulfilled");var t=ro;ro=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Mx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Gp=O.S;O.S=function(t,n){bg=Ct(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(t,n),Gp!==null&&Gp(t,n)};var xs=I(null);function wu(){var t=xs.current;return t!==null?t:We.pooledCache}function ml(t,n){n===null?St(xs,xs.current):St(xs,n.pool)}function Vp(){var t=wu();return t===null?null:{parent:fn._currentValue,pool:t}}var $s=Error(s(460)),Du=Error(s(474)),gl=Error(s(542)),_l={then:function(){}};function kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t}throw Ms=n,$s}}function Ss(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ms=a,$s):a}}var Ms=null;function Wp(){if(Ms===null)throw Error(s(459));var t=Ms;return Ms=null,t}function jp(t){if(t===$s||t===gl)throw Error(s(483))}var tr=null,oo=0;function vl(t){var n=oo;return oo+=1,tr===null&&(tr=[]),Xp(tr,t,n)}function lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function qp(t){function n(Z,X){if(t){var et=Z.deletions;et===null?(Z.deletions=[X],Z.flags|=16):et.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function r(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=Ki(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,et){return Z.index=et,t?(et=Z.alternate,et!==null?(et=et.index,et<X?(Z.flags|=67108866,X):et):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,X,et,_t){return X===null||X.tag!==6?(X=vu(et,Z.mode,_t),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function z(Z,X,et,_t){var Kt=et.type;return Kt===w?dt(Z,X,et.props.children,_t,et.key):X!==null&&(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&Ss(Kt)===X.type)?(X=u(X,et.props),lo(X,et),X.return=Z,X):(X=fl(et.type,et.key,et.props,null,Z.mode,_t),lo(X,et),X.return=Z,X)}function nt(Z,X,et,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=xu(et,Z.mode,_t),X.return=Z,X):(X=u(X,et.children||[]),X.return=Z,X)}function dt(Z,X,et,_t,Kt){return X===null||X.tag!==7?(X=ms(et,Z.mode,_t,Kt),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function xt(Z,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=vu(""+X,Z.mode,et),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return et=fl(X.type,X.key,X.props,null,Z.mode,et),lo(et,X),et.return=Z,et;case T:return X=xu(X,Z.mode,et),X.return=Z,X;case b:return X=Ss(X),xt(Z,X,et)}if(q(X)||K(X))return X=ms(X,Z.mode,et,null),X.return=Z,X;if(typeof X.then=="function")return xt(Z,vl(X),et);if(X.$$typeof===N)return xt(Z,pl(Z,X),et);xl(Z,X)}return null}function rt(Z,X,et,_t){var Kt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Kt!==null?null:R(Z,X,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===Kt?z(Z,X,et,_t):null;case T:return et.key===Kt?nt(Z,X,et,_t):null;case b:return et=Ss(et),rt(Z,X,et,_t)}if(q(et)||K(et))return Kt!==null?null:dt(Z,X,et,_t,null);if(typeof et.then=="function")return rt(Z,X,vl(et),_t);if(et.$$typeof===N)return rt(Z,X,pl(Z,et),_t);xl(Z,et)}return null}function lt(Z,X,et,_t,Kt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get(et)||null,R(X,Z,""+_t,Kt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Z=Z.get(_t.key===null?et:_t.key)||null,z(X,Z,_t,Kt);case T:return Z=Z.get(_t.key===null?et:_t.key)||null,nt(X,Z,_t,Kt);case b:return _t=Ss(_t),lt(Z,X,et,_t,Kt)}if(q(_t)||K(_t))return Z=Z.get(et)||null,dt(X,Z,_t,Kt,null);if(typeof _t.then=="function")return lt(Z,X,et,vl(_t),Kt);if(_t.$$typeof===N)return lt(Z,X,et,pl(X,_t),Kt);xl(X,_t)}return null}function Wt(Z,X,et,_t){for(var Kt=null,Re=null,qt=X,ce=X=0,Se=null;qt!==null&&ce<et.length;ce++){qt.index>ce?(Se=qt,qt=null):Se=qt.sibling;var Ce=rt(Z,qt,et[ce],_t);if(Ce===null){qt===null&&(qt=Se);break}t&&qt&&Ce.alternate===null&&n(Z,qt),X=f(Ce,X,ce),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce,qt=Se}if(ce===et.length)return a(Z,qt),ye&&Qi(Z,ce),Kt;if(qt===null){for(;ce<et.length;ce++)qt=xt(Z,et[ce],_t),qt!==null&&(X=f(qt,X,ce),Re===null?Kt=qt:Re.sibling=qt,Re=qt);return ye&&Qi(Z,ce),Kt}for(qt=r(qt);ce<et.length;ce++)Se=lt(qt,Z,ce,et[ce],_t),Se!==null&&(t&&Se.alternate!==null&&qt.delete(Se.key===null?ce:Se.key),X=f(Se,X,ce),Re===null?Kt=Se:Re.sibling=Se,Re=Se);return t&&qt.forEach(function(Ka){return n(Z,Ka)}),ye&&Qi(Z,ce),Kt}function Jt(Z,X,et,_t){if(et==null)throw Error(s(151));for(var Kt=null,Re=null,qt=X,ce=X=0,Se=null,Ce=et.next();qt!==null&&!Ce.done;ce++,Ce=et.next()){qt.index>ce?(Se=qt,qt=null):Se=qt.sibling;var Ka=rt(Z,qt,Ce.value,_t);if(Ka===null){qt===null&&(qt=Se);break}t&&qt&&Ka.alternate===null&&n(Z,qt),X=f(Ka,X,ce),Re===null?Kt=Ka:Re.sibling=Ka,Re=Ka,qt=Se}if(Ce.done)return a(Z,qt),ye&&Qi(Z,ce),Kt;if(qt===null){for(;!Ce.done;ce++,Ce=et.next())Ce=xt(Z,Ce.value,_t),Ce!==null&&(X=f(Ce,X,ce),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return ye&&Qi(Z,ce),Kt}for(qt=r(qt);!Ce.done;ce++,Ce=et.next())Ce=lt(qt,Z,ce,Ce.value,_t),Ce!==null&&(t&&Ce.alternate!==null&&qt.delete(Ce.key===null?ce:Ce.key),X=f(Ce,X,ce),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return t&&qt.forEach(function(NS){return n(Z,NS)}),ye&&Qi(Z,ce),Kt}function Ve(Z,X,et,_t){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var Kt=et.key;X!==null;){if(X.key===Kt){if(Kt=et.type,Kt===w){if(X.tag===7){a(Z,X.sibling),_t=u(X,et.props.children),_t.return=Z,Z=_t;break t}}else if(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&Ss(Kt)===X.type){a(Z,X.sibling),_t=u(X,et.props),lo(_t,et),_t.return=Z,Z=_t;break t}a(Z,X);break}else n(Z,X);X=X.sibling}et.type===w?(_t=ms(et.props.children,Z.mode,_t,et.key),_t.return=Z,Z=_t):(_t=fl(et.type,et.key,et.props,null,Z.mode,_t),lo(_t,et),_t.return=Z,Z=_t)}return _(Z);case T:t:{for(Kt=et.key;X!==null;){if(X.key===Kt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(Z,X.sibling),_t=u(X,et.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}_t=xu(et,Z.mode,_t),_t.return=Z,Z=_t}return _(Z);case b:return et=Ss(et),Ve(Z,X,et,_t)}if(q(et))return Wt(Z,X,et,_t);if(K(et)){if(Kt=K(et),typeof Kt!="function")throw Error(s(150));return et=Kt.call(et),Jt(Z,X,et,_t)}if(typeof et.then=="function")return Ve(Z,X,vl(et),_t);if(et.$$typeof===N)return Ve(Z,X,pl(Z,et),_t);xl(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(Z,X.sibling),_t=u(X,et),_t.return=Z,Z=_t):(a(Z,X),_t=vu(et,Z.mode,_t),_t.return=Z,Z=_t),_(Z)):a(Z,X)}return function(Z,X,et,_t){try{oo=0;var Kt=Ve(Z,X,et,_t);return tr=null,Kt}catch(qt){if(qt===$s||qt===gl)throw qt;var Re=ti(29,qt,null,Z.mode);return Re.lanes=_t,Re.return=Z,Re}}}var ys=qp(!0),Yp=qp(!1),La=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ul(t),Up(t,null,a),n}return cl(t,r,n,a),ul(t)}function co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,fi(t,a)}}function Lu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ou=!1;function uo(){if(Ou){var t=Js;if(t!==null)throw t}}function fo(t,n,a,r){Ou=!1;var u=t.updateQueue;La=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,nt=z.next;z.next=null,_===null?f=nt:_.next=nt,_=z;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==_&&(R===null?dt.firstBaseUpdate=nt:R.next=nt,dt.lastBaseUpdate=z))}if(f!==null){var xt=u.baseState;_=0,dt=nt=z=null,R=f;do{var rt=R.lane&-536870913,lt=rt!==R.lane;if(lt?(xe&rt)===rt:(r&rt)===rt){rt!==0&&rt===Qs&&(Ou=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=t,Jt=R;rt=n;var Ve=a;switch(Jt.tag){case 1:if(Wt=Jt.payload,typeof Wt=="function"){xt=Wt.call(Ve,xt,rt);break t}xt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=Jt.payload,rt=typeof Wt=="function"?Wt.call(Ve,xt,rt):Wt,rt==null)break t;xt=x({},xt,rt);break t;case 2:La=!0}}rt=R.callback,rt!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(nt=dt=lt,z=xt):dt=dt.next=lt,_|=rt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(z=xt),u.baseState=z,u.firstBaseUpdate=nt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ha|=_,t.lanes=_,t.memoizedState=xt}}function Zp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Kp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zp(a[t],n)}var er=I(null),Sl=I(0);function Qp(t,n){t=la,St(Sl,t),St(er,n),la=t|n.baseLanes}function Pu(){St(Sl,la),St(er,er.current)}function Iu(){la=Sl.current,Q(er),Q(Sl)}var ei=I(null),_i=null;function Ia(t){var n=t.alternate;St(ln,ln.current&1),St(ei,t),_i===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(_i=t)}function Fu(t){St(ln,ln.current),St(ei,t),_i===null&&(_i=t)}function Jp(t){t.tag===22?(St(ln,ln.current),St(ei,t),_i===null&&(_i=t)):Fa()}function Fa(){St(ln,ln.current),St(ei,ei.current)}function ni(t){Q(ei),_i===t&&(_i=null),Q(ln)}var ln=I(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,oe=null,He=null,hn=null,yl=!1,nr=!1,Es=!1,El=0,ho=0,ir=null,yx=0;function en(){throw Error(s(321))}function Bu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function zu(t,n,a,r,u,f){return ta=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Pm:tf,Es=!1,f=a(r,u),Es=!1,nr&&(f=tm(n,a,r,u)),$p(t),f}function $p(t){O.H=go;var n=He!==null&&He.next!==null;if(ta=0,hn=He=oe=null,yl=!1,ho=0,ir=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&dl(t)&&(dn=!0))}function tm(t,n,a,r){oe=t;var u=0;do{if(nr&&(ir=null),ho=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,hn=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Im,f=n(a,r)}while(nr);return f}function Ex(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(oe.flags|=1024),n}function Hu(){var t=El!==0;return El=0,t}function Gu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vu(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}ta=0,hn=He=oe=null,nr=!1,ho=El=0,ir=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?oe.memoizedState=hn=t:hn=hn.next=t,hn}function cn(){if(He===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=hn===null?oe.memoizedState:hn.next;if(n!==null)hn=n,He=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},hn===null?oe.memoizedState=hn=t:hn=hn.next=t}return hn}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,ir===null&&(ir=[]),t=Xp(ir,t,n),n=oe,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Pm:tf),t}function Tl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===N)return An(t)}throw Error(s(438,String(t)))}function ku(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=W;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Al(t){var n=cn();return Xu(n,He,t)}function Xu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,z=null,nt=n,dt=!1;do{var xt=nt.lane&-536870913;if(xt!==nt.lane?(xe&xt)===xt:(ta&xt)===xt){var rt=nt.revertLane;if(rt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),xt===Qs&&(dt=!0);else if((ta&rt)===rt){nt=nt.next,rt===Qs&&(dt=!0);continue}else xt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},z===null?(R=z=xt,_=f):z=z.next=xt,oe.lanes|=rt,Ha|=rt;xt=nt.action,Es&&a(f,xt),f=nt.hasEagerState?nt.eagerState:a(f,xt)}else rt={lane:xt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},z===null?(R=z=rt,_=f):z=z.next=rt,oe.lanes|=xt,Ha|=xt;nt=nt.next}while(nt!==null&&nt!==n);if(z===null?_=f:z.next=R,!$n(f,t.memoizedState)&&(dn=!0,dt&&(a=Js,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=z,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Wu(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);$n(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function em(t,n,a){var r=oe,u=cn(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!$n((He||u).memoizedState,a);if(_&&(u.memoizedState=a,dn=!0),u=u.queue,Yu(am.bind(null,r,u,t),[t]),u.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(r.flags|=2048,ar(9,{destroy:void 0},im.bind(null,r,u,a,n),null),We===null)throw Error(s(349));f||(ta&127)!==0||nm(r,n,a)}return a}function nm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=bl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function im(t,n,a,r){n.value=a,n.getSnapshot=r,sm(n)&&rm(t)}function am(t,n,a){return a(function(){sm(n)&&rm(t)})}function sm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function rm(t){var n=ps(t,2);n!==null&&jn(n,t,2)}function ju(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Es){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function om(t,n,a,r){return t.baseState=a,Xu(t,He,typeof r=="function"?r:ea)}function bx(t,n,a,r,u){if(wl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,lm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function lm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var R=a(u,r),z=O.S;z!==null&&z(_,R),cm(t,n,R)}catch(nt){qu(t,n,nt)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,r),cm(t,n,f)}catch(nt){qu(t,n,nt)}}function cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){um(t,n,r)},function(r){return qu(t,n,r)}):um(t,n,a)}function um(t,n,a){n.status="fulfilled",n.value=a,fm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,lm(t,a)))}function qu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,fm(n),n=n.next;while(n!==r)}t.action=null}function fm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function hm(t,n){return n}function dm(t,n){if(ye){var a=We.formState;if(a!==null){t:{var r=oe;if(ye){if(qe){e:{for(var u=qe,f=gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=vi(u.nextSibling),r=u.data==="F!";break t}}Ua(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=r,a=Nm.bind(null,oe,r),r.dispatch=a,r=ju(!1),f=$u.bind(null,oe,!1,r.queue),r=Fn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=bx.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function pm(t){var n=cn();return mm(n,He,t)}function mm(t,n,a){if(n=Xu(t,n,hm)[0],t=Al(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=po(n)}catch(_){throw _===$s?gl:_}else r=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,ar(9,{destroy:void 0},Tx.bind(null,u,a),null)),[r,f,t]}function Tx(t,n){t.action=n}function gm(t){var n=cn(),a=He;if(a!==null)return mm(n,a,t);cn(),n=n.memoizedState,a=cn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ar(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=bl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function _m(){return cn().memoizedState}function Rl(t,n,a,r){var u=Fn();oe.flags|=t,u.memoizedState=ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function Cl(t,n,a,r){var u=cn();r=r===void 0?null:r;var f=u.memoizedState.inst;He!==null&&r!==null&&Bu(r,He.memoizedState.deps)?u.memoizedState=ar(n,f,a,r):(oe.flags|=t,u.memoizedState=ar(1|n,f,a,r))}function vm(t,n){Rl(8390656,8,t,n)}function Yu(t,n){Cl(2048,8,t,n)}function Ax(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=bl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function xm(t){var n=cn().memoizedState;return Ax({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Sm(t,n){return Cl(4,2,t,n)}function Mm(t,n){return Cl(4,4,t,n)}function ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Em(t,n,a){a=a!=null?a.concat([t]):null,Cl(4,4,ym.bind(null,n,t),a)}function Zu(){}function bm(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Bu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Tm(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Bu(n,r[1]))return r[0];if(r=t(),Es){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function Ku(t,n,a){return a===void 0||(ta&1073741824)!==0&&(xe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ag(),oe.lanes|=t,Ha|=t,a)}function Am(t,n,a,r){return $n(a,n)?a:er.current!==null?(t=Ku(t,a,r),$n(t,n)||(dn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(xe&261930)===0?(dn=!0,t.memoizedState=a):(t=Ag(),oe.lanes|=t,Ha|=t,n)}function Rm(t,n,a,r,u){var f=B.p;B.p=f!==0&&8>f?f:8;var _=O.T,R={};O.T=R,$u(t,!1,n,a);try{var z=u(),nt=O.S;if(nt!==null&&nt(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=Mx(z,r);mo(t,n,dt,si(t))}else mo(t,n,r,si(t))}catch(xt){mo(t,n,{then:function(){},status:"rejected",reason:xt},si())}finally{B.p=f,_!==null&&R.types!==null&&(_.types=R.types),O.T=_}}function Rx(){}function Qu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Cm(t).queue;Rm(t,u,n,ot,a===null?Rx:function(){return wm(t),a(r)})}function Cm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function wm(t){var n=Cm(t);n.next===null&&(n=t.alternate.memoizedState),mo(t,n.next.queue,{},si())}function Ju(){return An(No)}function Dm(){return cn().memoizedState}function Um(){return cn().memoizedState}function Cx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Oa(a);var r=Pa(n,t,a);r!==null&&(jn(r,n,a),co(r,n,a)),n={cache:Ru()},t.payload=n;return}n=n.return}}function wx(t,n,a){var r=si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(t)?Lm(n,a):(a=gu(t,n,a,r),a!==null&&(jn(a,t,r),Om(a,n,r)))}function Nm(t,n,a){var r=si();mo(t,n,a,r)}function mo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(t))Lm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,_))return cl(t,n,u,0),We===null&&ll(),!1}catch{}if(a=gu(t,n,u,r),a!==null)return jn(a,t,r),Om(a,n,r),!0}return!1}function $u(t,n,a,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},wl(t)){if(n)throw Error(s(479))}else n=gu(t,a,r,2),n!==null&&jn(n,t,2)}function wl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function Lm(t,n){nr=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Om(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,fi(t,a)}}var go={readContext:An,use:Tl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};go.useEffectEvent=en;var Pm={readContext:An,use:Tl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:vm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Rl(4194308,4,ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Rl(4194308,4,t,n)},useInsertionEffect:function(t,n){Rl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var r=t();if(Es){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Fn();if(a!==void 0){var u=a(n);if(Es){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=wx.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=ju(t);var n=t.queue,a=Nm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(t,n){var a=Fn();return Ku(a,t,n)},useTransition:function(){var t=ju(!1);return t=Rm.bind(null,oe,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,u=Fn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(xe&127)!==0||nm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,vm(am.bind(null,r,f,t),[t]),r.flags|=2048,ar(9,{destroy:void 0},im.bind(null,r,f,a,n),null),a},useId:function(){var t=Fn(),n=We.identifierPrefix;if(ye){var a=Oi,r=Li;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ju,useFormState:dm,useActionState:dm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$u.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:ku,useCacheRefresh:function(){return Fn().memoizedState=Cx.bind(null,oe)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},tf={readContext:An,use:Tl,useCallback:bm,useContext:An,useEffect:Yu,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:Mm,useMemo:Tm,useReducer:Al,useRef:_m,useState:function(){return Al(ea)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=cn();return Am(a,He.memoizedState,t,n)},useTransition:function(){var t=Al(ea)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:Ju,useFormState:pm,useActionState:pm,useOptimistic:function(t,n){var a=cn();return om(a,He,t,n)},useMemoCache:ku,useCacheRefresh:Um};tf.useEffectEvent=xm;var Im={readContext:An,use:Tl,useCallback:bm,useContext:An,useEffect:Yu,useImperativeHandle:Em,useInsertionEffect:Sm,useLayoutEffect:Mm,useMemo:Tm,useReducer:Wu,useRef:_m,useState:function(){return Wu(ea)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=cn();return He===null?Ku(a,t,n):Am(a,He.memoizedState,t,n)},useTransition:function(){var t=Wu(ea)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:Ju,useFormState:gm,useActionState:gm,useOptimistic:function(t,n){var a=cn();return He!==null?om(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Um};Im.useEffectEvent=xm;function ef(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=si(),u=Oa(r);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,r),n!==null&&(jn(n,t,r),co(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=si(),u=Oa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,r),n!==null&&(jn(n,t,r),co(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),r=Oa(a);r.tag=2,n!=null&&(r.callback=n),n=Pa(t,r,a),n!==null&&(jn(n,t,a),co(n,t,a))}};function Fm(t,n,a,r,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!eo(a,r)||!eo(u,f):!0}function Bm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&nf.enqueueReplaceState(n,n.state,null)}function bs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function zm(t){ol(t)}function Hm(t){console.error(t)}function Gm(t){ol(t)}function Dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Vm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function af(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(t,n)},a}function km(t){return t=Oa(t),t.tag=3,t}function Xm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Vm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Vm(n,a,r),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Dx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?Vl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),wf(t,r,u)),!1;case 22:return a.flags|=65536,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),wf(t,r,u)),!1}throw Error(s(435,a.tag))}return wf(t,r,u),Vl(),!1}if(ye)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==yu&&(t=Error(s(422),{cause:r}),ao(di(t,a)))):(r!==yu&&(n=Error(s(423),{cause:r}),ao(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=di(r,a),u=af(t.stateNode,r,u),Lu(t,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=di(f,a),bo===null?bo=[f]:bo.push(f),nn!==4&&(nn=2),n===null)return!0;r=di(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=af(a.stateNode,r,t),Lu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=km(u),Xm(u,t,a,r),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(s(461)),dn=!1;function Rn(t,n,a,r){n.child=t===null?Yp(n,null,a,r):ys(n,t.child,a,r)}function Wm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return vs(n),r=zu(t,n,a,_,f,u),R=Hu(),t!==null&&!dn?(Gu(t,n,u),na(t,n,u)):(ye&&R&&Su(n),n.flags|=1,Rn(t,n,r,u),n.child)}function jm(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,qm(t,n,f,r,u)):(t=fl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!df(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(_,r)&&t.ref===n.ref)return na(t,n,u)}return n.flags|=1,t=Ki(f,r),t.ref=n.ref,t.return=n,n.child=t}function qm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(eo(f,r)&&t.ref===n.ref)if(dn=!1,n.pendingProps=r=f,df(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,na(t,n,u)}return rf(t,n,a,r,u)}function Ym(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Zm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ml(n,f!==null?f.cachePool:null),f!==null?Qp(n,f):Pu(),Jp(n);else return r=n.lanes=536870912,Zm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ml(n,f.cachePool),Qp(n,f),Fa(),n.memoizedState=null):(t!==null&&ml(n,null),Pu(),Fa());return Rn(t,n,u,a),n.child}function _o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Zm(t,n,a,r,u){var f=wu();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ml(n,null),Pu(),Jp(n),t!==null&&Ks(t,n,r,!0),n.childLanes=u,null}function Ul(t,n){return n=Ll({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Km(t,n,a){return ys(n,t.child,null,a),t=Ul(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function Ux(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(r.mode==="hidden")return t=Ul(n,r),n.lanes=536870912,_o(null,t);if(Fu(n),(t=qe)?(t=l0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Lp(t),a.return=n,n.child=a,Tn=n,qe=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Ul(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Fu(n),u)if(n.flags&256)n.flags&=-257,n=Km(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(r=We,r!==null&&(_=Kn(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ps(t,_),jn(r,t,_),sf;Vl(),n=Km(t,n,a)}else t=f.treeContext,qe=vi(_.nextSibling),Tn=n,ye=!0,Da=null,gi=!1,t!==null&&Ip(n,t),n=Ul(n,r),n.flags|=4096;return n}return t=Ki(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rf(t,n,a,r,u){return vs(n),a=zu(t,n,a,r,void 0,u),r=Hu(),t!==null&&!dn?(Gu(t,n,u),na(t,n,u)):(ye&&r&&Su(n),n.flags|=1,Rn(t,n,a,u),n.child)}function Qm(t,n,a,r,u,f){return vs(n),n.updateQueue=null,a=tm(n,r,a,u),$p(t),r=Hu(),t!==null&&!dn?(Gu(t,n,f),na(t,n,f)):(ye&&r&&Su(n),n.flags|=1,Rn(t,n,a,f),n.child)}function Jm(t,n,a,r,u){if(vs(n),n.stateNode===null){var f=js,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Uu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):js,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ef(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&nf.enqueueReplaceState(f,f.state,null),fo(n,r,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,z=bs(a,R);f.props=z;var nt=f.context,dt=a.contextType;_=js,typeof dt=="object"&&dt!==null&&(_=An(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||nt!==_)&&Bm(n,f,r,_),La=!1;var rt=n.memoizedState;f.state=rt,fo(n,r,f,u),uo(),nt=n.memoizedState,R||rt!==nt||La?(typeof xt=="function"&&(ef(n,a,xt,r),nt=n.memoizedState),(z=La||Fm(n,a,z,r,rt,nt,_))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=_,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Nu(t,n),_=n.memoizedProps,dt=bs(a,_),f.props=dt,xt=n.pendingProps,rt=f.context,nt=a.contextType,z=js,typeof nt=="object"&&nt!==null&&(z=An(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xt||rt!==z)&&Bm(n,f,r,z),La=!1,rt=n.memoizedState,f.state=rt,fo(n,r,f,u),uo();var lt=n.memoizedState;_!==xt||rt!==lt||La||t!==null&&t.dependencies!==null&&dl(t.dependencies)?(typeof R=="function"&&(ef(n,a,R,r),lt=n.memoizedState),(dt=La||Fm(n,a,dt,r,rt,lt,z)||t!==null&&t.dependencies!==null&&dl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=z,r=dt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Nl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ys(n,t.child,null,u),n.child=ys(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=na(t,n,u),t}function $m(t,n,a,r){return gs(),n.flags|=256,Rn(t,n,a,r),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(t){return{baseLanes:t,cachePool:Vp()}}function cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function tg(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(u?Ia(n):Fa(),(t=qe)?(t=l0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Lp(t),a.return=n,n.child=a,Tn=n,qe=null)):t=null,t===null)throw Ua(n);return Wf(t)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(Fa(),u=n.mode,R=Ll({mode:"hidden",children:R},u),r=ms(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=lf(a),r.childLanes=cf(t,_,a),n.memoizedState=of,_o(null,r)):(Ia(n),uf(n,R))}var z=t.memoizedState;if(z!==null&&(R=z.dehydrated,R!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=ff(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),R=r.fallback,u=n.mode,r=Ll({mode:"visible",children:r.children},u),R=ms(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,ys(n,t.child,null,a),r=n.child,r.memoizedState=lf(a),r.childLanes=cf(t,_,a),n.memoizedState=of,n=_o(null,r));else if(Ia(n),Wf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var nt=_.dgst;_=nt,r=Error(s(419)),r.stack="",r.digest=_,ao({value:r,source:null,stack:null}),n=ff(t,n,a)}else if(dn||Ks(t,n,a,!1),_=(a&t.childLanes)!==0,dn||_){if(_=We,_!==null&&(r=Kn(_,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,ps(t,r),jn(_,t,r),sf;Xf(R)||Vl(),n=ff(t,n,a)}else Xf(R)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,qe=vi(R.nextSibling),Tn=n,ye=!0,Da=null,gi=!1,t!==null&&Ip(n,t),n=uf(n,r.children),n.flags|=4096);return n}return u?(Fa(),R=r.fallback,u=n.mode,z=t.child,nt=z.sibling,r=Ki(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,nt!==null?R=Ki(nt,R):(R=ms(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,_o(null,r),r=n.child,R=t.child.memoizedState,R===null?R=lf(a):(u=R.cachePool,u!==null?(z=fn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Vp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=cf(t,_,a),n.memoizedState=of,_o(t.child,r)):(Ia(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function uf(t,n){return n=Ll({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ll(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function ff(t,n,a){return ys(n,t.child,null,a),t=uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function eg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Tu(t.return,n,a)}function hf(t,n,a,r,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function ng(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=ln.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,St(ln,_),Rn(t,n,r,a),r=ye?io:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,a,n);else if(t.tag===19)eg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}hf(n,!0,a,null,f,r);break;case"together":hf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&dl(t)))}function Nx(t,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),Na(n,fn,t.memoizedState.cache),gs();break;case 27:case 5:$t(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Fu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tg(t,n,a):(Ia(n),t=na(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return ng(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(ln,ln.current),r)break;return null;case 22:return n.lanes=0,Ym(t,n,a,n.pendingProps);case 24:Na(n,fn,t.memoizedState.cache)}return na(t,n,a)}function ig(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!df(t,a)&&(n.flags&128)===0)return dn=!1,Nx(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,ye&&(n.flags&1048576)!==0&&Pp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ss(n.elementType),n.type=t,typeof t=="function")_u(t)?(r=bs(t,r),n.tag=1,n=Jm(null,n,t,r,a)):(n.tag=0,n=rf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=Wm(null,n,t,r,a);break t}else if(u===F){n.tag=14,n=jm(null,n,t,r,a);break t}}throw n=mt(t)||t,Error(s(306,n,""))}}return n;case 0:return rf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=bs(r,n.pendingProps),Jm(t,n,r,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Nu(t,n),fo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Na(n,fn,r),r!==f.cache&&Au(n,[fn],a,!0),uo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$m(t,n,r,a);break t}else if(r!==u){u=di(Error(s(424)),n),ao(u),n=$m(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qe=vi(t.firstChild),Tn=n,ye=!0,Da=null,gi=!0,a=Yp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),r===u){n=na(t,n,a);break t}Rn(t,n,r,a)}n=n.child}return n;case 26:return Nl(t,n),t===null?(a=p0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,r=Zl(tt.current).createElement(a),r[on]=n,r[bn]=t,Cn(r,a,t),un(r),n.stateNode=r):n.memoizedState=p0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $t(n),t===null&&ye&&(r=n.stateNode=f0(n.type,n.pendingProps,tt.current),Tn=n,gi=!0,u=qe,Wa(n.type)?(jf=u,qe=vi(r.firstChild)):qe=u),Rn(t,n,n.pendingProps.children,a),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((u=r=qe)&&(r=lS(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,Tn=n,qe=vi(r.firstChild),gi=!1,u=!0):u=!1),u||Ua(n)),$t(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Gf(u,f)?r=null:_!==null&&Gf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=zu(t,n,Ex,null,null,a),No._currentValue=u),Nl(t,n),Rn(t,n,r,a),n.child;case 6:return t===null&&ye&&((t=a=qe)&&(a=cS(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Tn=n,qe=null,t=!0):t=!1),t||Ua(n)),null;case 13:return tg(t,n,a);case 4:return bt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ys(n,null,r,a):Rn(t,n,r,a),n.child;case 11:return Wm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Na(n,n.type,r.value),Rn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,vs(n),u=An(u),r=r(u),n.flags|=1,Rn(t,n,r,a),n.child;case 14:return jm(t,n,n.type,n.pendingProps,a);case 15:return qm(t,n,n.type,n.pendingProps,a);case 19:return ng(t,n,a);case 31:return Ux(t,n,a);case 22:return Ym(t,n,a,n.pendingProps);case 24:return vs(n),r=An(fn),t===null?(u=wu(),u===null&&(u=We,f=Ru(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Uu(n),Na(n,fn,u)):((t.lanes&a)!==0&&(Nu(t,n),fo(n,null,null,a),uo()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,fn,r)):(r=f.cache,Na(n,fn,r),r!==u.cache&&Au(n,[fn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(t){t.flags|=4}function pf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Dg())t.flags|=8192;else throw Ms=_l,Du}else t.flags&=-16777217}function ag(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!x0(n))if(Dg())t.flags|=8192;else throw Ms=_l,Du}function Ol(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Et():536870912,t.lanes|=n,lr|=n)}function vo(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Lx(t,n,a){var r=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$i(fn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Ye(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ia(n),f!==null?(Ye(n),ag(n,f)):(Ye(n),pf(n,u,null,r,a))):f?f!==t.memoizedState?(ia(n),Ye(n),ag(n,f)):(Ye(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ia(n),Ye(n),pf(n,u,t,r,a)),null;case 27:if(Qt(n),a=tt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}t=At.current,Zs(n)?Fp(n):(t=f0(u,r,a),n.stateNode=t,ia(n))}return Ye(n),null;case 5:if(Qt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(f=At.current,Zs(n))Fp(n);else{var _=Zl(tt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[on]=n,f[bn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ia(n)}}return Ye(n),pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=tt.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||t0(t.nodeValue,a)),t||Ua(n,!0)}else t=Zl(t).createTextNode(r),t[on]=n,n.stateNode=t}return Ye(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),t=!1}else a=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),Ye(n),null);case 4:return Ht(),t===null&&If(n.stateNode.containerInfo),Ye(n),null;case 10:return $i(n.type),Ye(n),null;case 19:if(Q(ln),r=n.memoizedState,r===null)return Ye(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)vo(r,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,vo(r,!1),t=f.updateQueue,n.updateQueue=t,Ol(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Np(a,t),a=a.sibling;return St(ln,ln.current&1|2),ye&&Qi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Ct()>zl&&(n.flags|=128,u=!0,vo(r,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ol(n,t),vo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!ye)return Ye(n),null}else 2*Ct()-r.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,u=!0,vo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Ct(),t.sibling=null,a=ln.current,St(ln,u?a&1|2:a&1),ye&&Qi(n,r.treeForkCount),t):(Ye(n),null);case 22:case 23:return ni(n),Iu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Q(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(fn),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ox(t,n){switch(Mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(fn),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(ln),null;case 4:return Ht(),null;case 10:return $i(n.type),null;case 22:case 23:return ni(n),Iu(),t!==null&&Q(xs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(fn),null;case 25:return null;default:return null}}function sg(t,n){switch(Mu(n),n.tag){case 3:$i(fn),Ht();break;case 26:case 27:case 5:Qt(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Q(ln);break;case 10:$i(n.type);break;case 22:case 23:ni(n),Iu(),t!==null&&Q(xs);break;case 24:$i(fn)}}function xo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(R){Fe(n,n.return,R)}}function Ba(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var z=a,nt=R;try{nt()}catch(dt){Fe(u,z,dt)}}}r=r.next}while(r!==f)}}catch(dt){Fe(n,n.return,dt)}}function rg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Kp(n,a)}catch(r){Fe(t,t.return,r)}}}function og(t,n,a){a.props=bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(t,n,r)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Fe(t,n,u)}}function Pi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function lg(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function mf(t,n,a){try{var r=t.stateNode;nS(r,t.type,a,n),r[bn]=n}catch(u){Fe(t,t.return,u)}}function cg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function gf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(r===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function Pl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Pl(t,n,a),t=t.sibling;t!==null;)Pl(t,n,a),t=t.sibling}function ug(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[on]=t,n[bn]=a}catch(f){Fe(t,t.return,f)}}var aa=!1,pn=!1,vf=!1,fg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Px(t,n){if(t=t.containerInfo,zf=nc,t=Ep(t),uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,R=-1,z=-1,nt=0,dt=0,xt=t,rt=null;e:for(;;){for(var lt;xt!==a||u!==0&&xt.nodeType!==3||(R=_+u),xt!==f||r!==0&&xt.nodeType!==3||(z=_+r),xt.nodeType===3&&(_+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)rt=xt,xt=lt;for(;;){if(xt===t)break e;if(rt===a&&++nt===u&&(R=_),rt===f&&++dt===r&&(z=_),(lt=xt.nextSibling)!==null)break;xt=rt,rt=xt.parentNode}xt=lt}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hf={focusedElem:t,selectionRange:a},nc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Wt=bs(a.type,u);t=r.getSnapshotBeforeUpdate(Wt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Fe(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function hg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),r&4&&xo(5,a);break;case 1:if(ra(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}r&64&&rg(a),r&512&&So(a,a.return);break;case 3:if(ra(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(t,n)}catch(_){Fe(a,a.return,_)}}break;case 27:n===null&&r&4&&ug(a);case 26:case 5:ra(t,a),n===null&&r&4&&lg(a),r&512&&So(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),r&4&&mg(t,a);break;case 13:ra(t,a),r&4&&gg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Xx.bind(null,a),uS(t,a))));break;case 22:if(r=a.memoizedState!==null||aa,!r){n=n!==null&&n.memoizedState!==null||pn,u=aa;var f=pn;aa=r,(pn=n)&&!f?oa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),aa=u,pn=f}break;case 30:break;default:ra(t,a)}}function dg(t){var n=t.alternate;n!==null&&(t.alternate=null,dg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&qr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Vn=!1;function sa(t,n,a){for(a=a.child;a!==null;)pg(t,n,a),a=a.sibling}function pg(t,n,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:pn||Pi(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Pi(a,n);var r=Je,u=Vn;Wa(a.type)&&(Je=a.stateNode,Vn=!1),sa(t,n,a),wo(a.stateNode),Je=r,Vn=u;break;case 5:pn||Pi(a,n);case 6:if(r=Je,u=Vn,Je=null,sa(t,n,a),Je=r,Vn=u,Je!==null)if(Vn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(Vn?(t=Je,r0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gr(t)):r0(Je,a.stateNode));break;case 4:r=Je,u=Vn,Je=a.stateNode.containerInfo,Vn=!0,sa(t,n,a),Je=r,Vn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),pn||Ba(4,a,n),sa(t,n,a);break;case 1:pn||(Pi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&og(a,n,r)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:pn=(r=pn)||a.memoizedState!==null,sa(t,n,a),pn=r;break;default:sa(t,n,a)}}function mg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gr(t)}catch(a){Fe(n,n.return,a)}}}function gg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gr(t)}catch(a){Fe(n,n.return,a)}}function Ix(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new fg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new fg),n;default:throw Error(s(435,t.tag))}}function Il(t,n){var a=Ix(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Wx.bind(null,t,r);r.then(u,u)}})}function kn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,_=n,R=_;t:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){Je=R.stateNode,Vn=!1;break t}break;case 5:Je=R.stateNode,Vn=!1;break t;case 3:case 4:Je=R.stateNode.containerInfo,Vn=!0;break t}R=R.return}if(Je===null)throw Error(s(160));pg(f,_,u),Je=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_g(n,t),n=n.sibling}var bi=null;function _g(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),r&4&&(Ba(3,t,t.return),xo(3,t),Ba(5,t,t.return));break;case 1:kn(n,t),Xn(t),r&512&&(pn||a===null||Pi(a,a.return)),r&64&&aa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=bi;if(kn(n,t),Xn(t),r&512&&(pn||a===null||Pi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ea]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[on]=t,un(f),r=f;break t;case"link":var _=_0("link","href",u).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=_0("meta","content",u).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=t,un(f),r=f}t.stateNode=r}else v0(u,t.type,t.stateNode);else t.stateNode=g0(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?v0(u,t.type,t.stateNode):g0(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),r&512&&(pn||a===null||Pi(a,a.return)),a!==null&&r&4&&mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),r&512&&(pn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{Jn(u,"")}catch(Wt){Fe(t,t.return,Wt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,mf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(vf=!0);break;case 6:if(kn(n,t),Xn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Wt){Fe(t,t.return,Wt)}}break;case 3:if(Jl=null,u=bi,bi=Kl(n.containerInfo),kn(n,t),bi=u,Xn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(Wt){Fe(t,t.return,Wt)}vf&&(vf=!1,vg(t));break;case 4:r=bi,bi=Kl(t.stateNode.containerInfo),kn(n,t),Xn(t),bi=r;break;case 12:kn(n,t),Xn(t);break;case 31:kn(n,t),Xn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=Ct()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,nt=aa,dt=pn;if(aa=nt||u,pn=dt||z,kn(n,t),pn=dt,aa=nt,Xn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||aa||pn||Ts(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=z.stateNode;var xt=z.memoizedProps.style,rt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Wt){Fe(z,z.return,Wt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Wt){Fe(z,z.return,Wt)}}}else if(n.tag===18){if(a===null){z=n;try{var lt=z.stateNode;u?o0(lt,!0):o0(z.stateNode,!1)}catch(Wt){Fe(z,z.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Il(t,a))));break;case 19:kn(n,t),Xn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(cg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=gf(t);Pl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Jn(_,""),a.flags&=-33);var R=gf(t);Pl(t,R,_);break;case 3:case 4:var z=a.stateNode.containerInfo,nt=gf(t);_f(t,nt,z);break;default:throw Error(s(161))}}catch(dt){Fe(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function vg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hg(t,n.alternate,n),n=n.sibling}function Ts(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ts(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&og(n,n.return,a),Ts(n);break;case 27:wo(n.stateNode);case 26:case 5:Pi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),xo(4,f);break;case 1:if(oa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Fe(r,r.return,nt)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Zp(z[u],R)}catch(nt){Fe(r,r.return,nt)}}a&&_&64&&rg(f),So(f,f.return);break;case 27:ug(f);case 26:case 5:oa(u,f,a),a&&r===null&&_&4&&lg(f),So(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&_&4&&mg(u,f);break;case 13:oa(u,f,a),a&&_&4&&gg(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),So(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function xf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Sf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function Ti(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xg(t,n,a,r),n=n.sibling}function xg(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,r),u&2048&&xo(9,n);break;case 1:Ti(t,n,a,r);break;case 3:Ti(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){Ti(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Ti(t,n,a,r);break;case 31:Ti(t,n,a,r);break;case 13:Ti(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,r):Mo(t,n):f._visibility&2?Ti(t,n,a,r):(f._visibility|=2,sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xf(_,n);break;case 24:Ti(t,n,a,r),u&2048&&Sf(n.alternate,n);break;default:Ti(t,n,a,r)}}function sr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,z=r,nt=_.flags;switch(_.tag){case 0:case 11:case 15:sr(f,_,R,z,u),xo(8,_);break;case 23:break;case 22:var dt=_.stateNode;_.memoizedState!==null?dt._visibility&2?sr(f,_,R,z,u):Mo(f,_):(dt._visibility|=2,sr(f,_,R,z,u)),u&&nt&2048&&xf(_.alternate,_);break;case 24:sr(f,_,R,z,u),u&&nt&2048&&Sf(_.alternate,_);break;default:sr(f,_,R,z,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Mo(a,r),u&2048&&xf(r.alternate,r);break;case 24:Mo(a,r),u&2048&&Sf(r.alternate,r);break;default:Mo(a,r)}n=n.sibling}}var yo=8192;function rr(t,n,a){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)Sg(t,n,a),t=t.sibling}function Sg(t,n,a){switch(t.tag){case 26:rr(t,n,a),t.flags&yo&&t.memoizedState!==null&&yS(a,bi,t.memoizedState,t.memoizedProps);break;case 5:rr(t,n,a);break;case 3:case 4:var r=bi;bi=Kl(t.stateNode.containerInfo),rr(t,n,a),bi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=yo,yo=16777216,rr(t,n,a),yo=r):rr(t,n,a));break;default:rr(t,n,a)}}function Mg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,Eg(r,t)}Mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):Eo(t);break;default:Eo(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,Eg(r,t)}Mg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function Eg(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:so(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Sn=r;else t:for(a=t;Sn!==null;){r=Sn;var u=r.sibling,f=r.return;if(dg(r),r===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var Fx={getCacheForType:function(t){var n=An(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(fn).controller.signal}},Bx=typeof WeakMap=="function"?WeakMap:Map,De=0,We=null,ge=null,xe=0,Ie=0,ii=null,za=!1,or=!1,Mf=!1,la=0,nn=0,Ha=0,As=0,yf=0,ai=0,lr=0,bo=null,Wn=null,Ef=!1,Bl=0,bg=0,zl=1/0,Hl=null,Ga=null,_n=0,Va=null,cr=null,ca=0,bf=0,Tf=null,Tg=null,To=0,Af=null;function si(){return(De&2)!==0&&xe!==0?xe&-xe:O.T!==null?Nf():Xr()}function Ag(){if(ai===0)if((xe&536870912)===0||ye){var t=pe;pe<<=1,(pe&3932160)===0&&(pe=262144),ai=t}else ai=536870912;return t=ei.current,t!==null&&(t.flags|=32),ai}function jn(t,n,a){(t===We&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(ur(t,0),ka(t,xe,ai,!1)),te(t,a),((De&2)===0||t!==We)&&(t===We&&((De&2)===0&&(As|=a),nn===4&&ka(t,xe,ai,!1)),Ii(t))}function Rg(t,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),u=r?Gx(t,n):Cf(t,n,!0),f=r;do{if(u===0){or&&!r&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!zx(a)){u=Cf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=t;u=bo;var z=R.current.memoizedState.isDehydrated;if(z&&(ur(R,_).flags|=256),_=Cf(R,_,!1),_!==2){if(Mf&&!z){R.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ur(t,0),ka(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(r,n,ai,!za);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bl+300-Ct(),10<u)){if(ka(r,n,ai,!za),pt(r,0,!0)!==0)break t;ca=n,r.timeoutHandle=a0(Cg.bind(null,r,a,Wn,Hl,Ef,n,ai,As,lr,za,f,"Throttled",-0,0),u);break t}Cg(r,a,Wn,Hl,Ef,n,ai,As,lr,za,f,null,-0,0)}}break}while(!0);Ii(t)}function Cg(t,n,a,r,u,f,_,R,z,nt,dt,xt,rt,lt){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},Sg(n,f,xt);var Wt=(f&62914560)===f?Bl-Ct():(f&4194048)===f?bg-Ct():0;if(Wt=ES(xt,Wt),Wt!==null){ca=f,t.cancelPendingCommit=Wt(Ig.bind(null,t,n,f,a,r,u,_,R,z,dt,xt,null,rt,lt)),ka(t,f,_,!nt);return}}Ig(t,n,f,a,r,u,_,R,z)}function zx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,r){n&=~yf,n&=~As,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&we(t,a,n)}function Gl(){return(De&6)===0?(Ao(0),!1):!0}function Rf(){if(ge!==null){if(Ie===0)var t=ge.return;else t=ge,Ji=_s=null,Vu(t),tr=null,oo=0,t=ge;for(;t!==null;)sg(t.alternate,t),t=t.return;ge=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,sS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ca=0,Rf(),We=t,ge=a=Ki(t.current,null),xe=n,Ie=0,ii=null,za=!1,or=Bt(t,n),Mf=!1,lr=ai=yf=As=Ha=nn=0,Wn=bo=null,Ef=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Pt(r),f=1<<u;n|=t[u],r&=~f}return la=n,ll(),a}function wg(t,n){oe=null,O.H=go,n===$s||n===gl?(n=Wp(),Ie=3):n===Du?(n=Wp(),Ie=4):Ie=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,ge===null&&(nn=1,Dl(t,di(n,t.current)))}function Dg(){var t=ei.current;return t===null?!0:(xe&4194048)===xe?_i===null:(xe&62914560)===xe||(xe&536870912)!==0?t===_i:!1}function Ug(){var t=O.H;return O.H=go,t===null?go:t}function Ng(){var t=O.A;return O.A=Fx,t}function Vl(){nn=4,za||(xe&4194048)!==xe&&ei.current!==null||(or=!0),(Ha&134217727)===0&&(As&134217727)===0||We===null||ka(We,xe,ai,!1)}function Cf(t,n,a){var r=De;De|=2;var u=Ug(),f=Ng();(We!==t||xe!==n)&&(Hl=null,ur(t,n)),n=!1;var _=nn;t:do try{if(Ie!==0&&ge!==null){var R=ge,z=ii;switch(Ie){case 8:Rf(),_=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var nt=Ie;if(Ie=0,ii=null,fr(t,R,z,nt),a&&or){_=0;break t}break;default:nt=Ie,Ie=0,ii=null,fr(t,R,z,nt)}}Hx(),_=nn;break}catch(dt){wg(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Ji=_s=null,De=r,O.H=u,O.A=f,ge===null&&(We=null,xe=0,ll()),_}function Hx(){for(;ge!==null;)Lg(ge)}function Gx(t,n){var a=De;De|=2;var r=Ug(),u=Ng();We!==t||xe!==n?(Hl=null,zl=Ct()+500,ur(t,n)):or=Bt(t,n);t:do try{if(Ie!==0&&ge!==null){n=ge;var f=ii;e:switch(Ie){case 1:Ie=0,ii=null,fr(t,n,f,1);break;case 2:case 9:if(kp(f)){Ie=0,ii=null,Og(n);break}n=function(){Ie!==2&&Ie!==9||We!==t||(Ie=7),Ii(t)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:kp(f)?(Ie=0,ii=null,Og(n)):(Ie=0,ii=null,fr(t,n,f,7));break;case 5:var _=null;switch(ge.tag){case 26:_=ge.memoizedState;case 5:case 27:var R=ge;if(_?x0(_):R.stateNode.complete){Ie=0,ii=null;var z=R.sibling;if(z!==null)ge=z;else{var nt=R.return;nt!==null?(ge=nt,kl(nt)):ge=null}break e}}Ie=0,ii=null,fr(t,n,f,5);break;case 6:Ie=0,ii=null,fr(t,n,f,6);break;case 8:Rf(),nn=6;break t;default:throw Error(s(462))}}Vx();break}catch(dt){wg(t,dt)}while(!0);return Ji=_s=null,O.H=r,O.A=u,De=a,ge!==null?0:(We=null,xe=0,ll(),nn)}function Vx(){for(;ge!==null&&!he();)Lg(ge)}function Lg(t){var n=ig(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?kl(t):ge=n}function Og(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Qm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Qm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Vu(n);default:sg(a,n),n=ge=Np(n,la),n=ig(a,n,la)}t.memoizedProps=t.pendingProps,n===null?kl(t):ge=n}function fr(t,n,a,r){Ji=_s=null,Vu(n),tr=null,oo=0;var u=n.return;try{if(Dx(t,u,n,a,xe)){nn=1,Dl(t,di(a,t.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;nn=1,Dl(t,di(a,t.current)),ge=null;return}n.flags&32768?(ye||r===1?t=!0:or||(xe&536870912)!==0?t=!1:(za=t=!0,(r===2||r===9||r===3||r===6)&&(r=ei.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pg(n,t)):kl(n)}function kl(t){var n=t;do{if((n.flags&32768)!==0){Pg(n,za);return}t=n.return;var a=Lx(n.alternate,n,la);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);nn===0&&(nn=5)}function Pg(t,n){do{var a=Ox(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);nn=6,ge=null}function Ig(t,n,a,r,u,f,_,R,z){t.cancelPendingCommit=null;do Xl();while(_n!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=mu,tn(t,a,f,_,R,z),t===We&&(ge=We=null,xe=0),cr=n,Va=t,ca=a,bf=f,Tf=u,Tg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,jx(J,function(){return Gg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=B.p,B.p=2,_=De,De|=4;try{Px(t,n,a)}finally{De=_,B.p=u,O.T=r}}_n=1,Fg(),Bg(),zg()}}function Fg(){if(_n===1){_n=0;var t=Va,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=De;De|=4;try{_g(n,t);var f=Hf,_=Ep(t.containerInfo),R=f.focusedElem,z=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&yp(R.ownerDocument.documentElement,R)){if(z!==null&&uu(R)){var nt=z.start,dt=z.end;if(dt===void 0&&(dt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(dt,R.value.length);else{var xt=R.ownerDocument||document,rt=xt&&xt.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),Wt=R.textContent.length,Jt=Math.min(z.start,Wt),Ve=z.end===void 0?Jt:Math.min(z.end,Wt);!lt.extend&&Jt>Ve&&(_=Ve,Ve=Jt,Jt=_);var Z=Mp(R,Jt),X=Mp(R,Ve);if(Z&&X&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var et=xt.createRange();et.setStart(Z.node,Z.offset),lt.removeAllRanges(),Jt>Ve?(lt.addRange(et),lt.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),lt.addRange(et))}}}}for(xt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var _t=xt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}nc=!!zf,Hf=zf=null}finally{De=u,B.p=r,O.T=a}}t.current=n,_n=2}}function Bg(){if(_n===2){_n=0;var t=Va,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=De;De|=4;try{hg(t,n.alternate,n)}finally{De=u,B.p=r,O.T=a}}_n=3}}function zg(){if(_n===4||_n===3){_n=0,ze();var t=Va,n=cr,a=ca,r=Tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,cr=Va=null,Hg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),kr(a),n=n.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=B.p,B.p=2,O.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{O.T=n,B.p=u}}(ca&3)!==0&&Xl(),Ii(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Af?To++:(To=0,Af=t):To=0,Ao(0)}}function Hg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function Xl(){return Fg(),Bg(),zg(),Gg()}function Gg(){if(_n!==5)return!1;var t=Va,n=bf;bf=0;var a=kr(ca),r=O.T,u=B.p;try{B.p=32>a?32:a,O.T=null,a=Tf,Tf=null;var f=Va,_=ca;if(_n=0,cr=Va=null,ca=0,(De&6)!==0)throw Error(s(331));var R=De;if(De|=4,yg(f.current),xg(f,f.current,_,a),De=R,Ao(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{B.p=u,O.T=r,Hg(t,n)}}function Vg(t,n,a){n=di(a,n),n=af(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(te(t,2),Ii(t))}function Fe(t,n,a){if(t.tag===3)Vg(t,t,a);else for(;n!==null;){if(n.tag===3){Vg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ga===null||!Ga.has(r))){t=di(a,t),a=km(2),r=Pa(n,a,2),r!==null&&(Xm(a,r,n,t),te(r,2),Ii(r));break}}n=n.return}}function wf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Bx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Mf=!0,u.add(a),t=kx.bind(null,t,n,a),n.then(t,t))}function kx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(xe&a)===a&&(nn===4||nn===3&&(xe&62914560)===xe&&300>Ct()-Bl?(De&2)===0&&ur(t,0):yf|=a,lr===xe&&(lr=0)),Ii(t)}function kg(t,n){n===0&&(n=Et()),t=ps(t,n),t!==null&&(te(t,n),Ii(t))}function Xx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(t,a)}function Wx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),kg(t,a)}function jx(t,n){return j(t,n)}var Wl=null,hr=null,Df=!1,jl=!1,Uf=!1,Xa=0;function Ii(t){t!==hr&&t.next===null&&(hr===null?Wl=hr=t:hr=hr.next=t),jl=!0,Df||(Df=!0,Yx())}function Ao(t,n){if(!Uf&&jl){Uf=!0;do for(var a=!1,r=Wl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,qg(r,f))}else f=xe,f=pt(r,r===We?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Bt(r,f)||(a=!0,qg(r,f));r=r.next}while(a);Uf=!1}}function qx(){Xg()}function Xg(){jl=Df=!1;var t=0;Xa!==0&&aS()&&(t=Xa);for(var n=Ct(),a=null,r=Wl;r!==null;){var u=r.next,f=Wg(r,n);f===0?(r.next=null,a===null?Wl=u:a.next=u,u===null&&(hr=a)):(a=r,(t!==0||(f&3)!==0)&&(jl=!0)),r=u}_n!==0&&_n!==5||Ao(t),Xa!==0&&(Xa=0)}function Wg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Pt(f),R=1<<_,z=u[_];z===-1?((R&a)===0||(R&r)!==0)&&(u[_]=Nt(R,n)):z<=n&&(t.expiredLanes|=R),f&=~R}if(n=We,a=xe,a=pt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$e(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&$e(r),kr(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=Tt;break;default:a=J}return r=jg.bind(null,t),a=j(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&$e(r),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var r=xe;return r=pt(t,t===We?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Rg(t,r,n),Wg(t,Ct()),t.callbackNode!=null&&t.callbackNode===a?jg.bind(null,t):null)}function qg(t,n){if(Xl())return null;Rg(t,n,!0)}function Yx(){rS(function(){(De&6)!==0?j(D,qx):Xg()})}function Nf(){if(Xa===0){var t=Qs;t===0&&(t=ie,ie<<=1,(ie&261888)===0&&(ie=256)),Xa=t}return Xa}function Yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:us(""+t)}function Zg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Zx(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Yg((u[bn]||null).action),_=r.submitter;_&&(n=(n=_[bn]||null)?Yg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new al("action","action",null,r,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var z=_?Zg(u,_):new FormData(u);Qu(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(R.preventDefault(),z=_?Zg(u,_):new FormData(u),Qu(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Lf=0;Lf<pu.length;Lf++){var Of=pu[Lf],Kx=Of.toLowerCase(),Qx=Of[0].toUpperCase()+Of.slice(1);Ei(Kx,"on"+Qx)}Ei(Ap,"onAnimationEnd"),Ei(Rp,"onAnimationIteration"),Ei(Cp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(dx,"onTransitionRun"),Ei(px,"onTransitionStart"),Ei(mx,"onTransitionCancel"),Ei(wp,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function Kg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],z=R.instance,nt=R.currentTarget;if(R=R.listener,z!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(dt){ol(dt)}u.currentTarget=null,f=z}else for(_=0;_<r.length;_++){if(R=r[_],z=R.instance,nt=R.currentTarget,R=R.listener,z!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(dt){ol(dt)}u.currentTarget=null,f=z}}}}function _e(t,n){var a=n[ya];a===void 0&&(a=n[ya]=new Set);var r=t+"__bubble";a.has(r)||(Qg(n,t,2,!1),a.add(r))}function Pf(t,n,a){var r=0;n&&(r|=4),Qg(a,t,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[ql]){t[ql]=!0,tl.forEach(function(a){a!=="selectionchange"&&(Jx.has(a)||Pf(a,!1,t),Pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ql]||(n[ql]=!0,Pf("selectionchange",!1,n))}}function Qg(t,n,a,r){switch(A0(n)){case 2:var u=AS;break;case 8:u=RS;break;default:u=Qf}a=u.bind(null,n,a,t),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Ff(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=r.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=ba(R),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){r=f=_;continue t}R=R.parentNode}}r=r.return}np(function(){var nt=f,dt=$c(a),xt=[];t:{var rt=Dp.get(t);if(rt!==void 0){var lt=al,Wt=t;switch(t){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":lt=Wv;break;case"focusin":Wt="focus",lt=su;break;case"focusout":Wt="blur",lt=su;break;case"beforeblur":case"afterblur":lt=su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Yv;break;case Ap:case Rp:case Cp:lt=Iv;break;case wp:lt=Kv;break;case"scroll":case"scrollend":lt=Uv;break;case"wheel":lt=Jv;break;case"copy":case"cut":case"paste":lt=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=op;break;case"toggle":case"beforetoggle":lt=tx}var Jt=(n&4)!==0,Ve=!Jt&&(t==="scroll"||t==="scrollend"),Z=Jt?rt!==null?rt+"Capture":null:rt;Jt=[];for(var X=nt,et;X!==null;){var _t=X;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||Z===null||(_t=Yr(X,Z),_t!=null&&Jt.push(Co(X,_t,et))),Ve)break;X=X.return}0<Jt.length&&(rt=new lt(rt,Wt,null,a,dt),xt.push({event:rt,listeners:Jt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",rt&&a!==Jc&&(Wt=a.relatedTarget||a.fromElement)&&(ba(Wt)||Wt[qi]))break t;if((lt||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=nt,Wt=Wt?ba(Wt):null,Wt!==null&&(Ve=c(Wt),Jt=Wt.tag,Wt!==Ve||Jt!==5&&Jt!==27&&Jt!==6)&&(Wt=null)):(lt=null,Wt=nt),lt!==Wt)){if(Jt=sp,_t="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=op,_t="onPointerLeave",Z="onPointerEnter",X="pointer"),Ve=lt==null?rt:cs(lt),et=Wt==null?rt:cs(Wt),rt=new Jt(_t,X+"leave",lt,a,dt),rt.target=Ve,rt.relatedTarget=et,_t=null,ba(dt)===nt&&(Jt=new Jt(Z,X+"enter",Wt,a,dt),Jt.target=et,Jt.relatedTarget=Ve,_t=Jt),Ve=_t,lt&&Wt)e:{for(Jt=$x,Z=lt,X=Wt,et=0,_t=Z;_t;_t=Jt(_t))et++;_t=0;for(var Kt=X;Kt;Kt=Jt(Kt))_t++;for(;0<et-_t;)Z=Jt(Z),et--;for(;0<_t-et;)X=Jt(X),_t--;for(;et--;){if(Z===X||X!==null&&Z===X.alternate){Jt=Z;break e}Z=Jt(Z),X=Jt(X)}Jt=null}else Jt=null;lt!==null&&Jg(xt,rt,lt,Jt,!1),Wt!==null&&Ve!==null&&Jg(xt,Ve,Wt,Jt,!0)}}t:{if(rt=nt?cs(nt):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var Re=mp;else if(dp(rt))if(gp)Re=ux;else{Re=lx;var qt=ox}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ue(nt.elementType)&&(Re=mp):Re=cx;if(Re&&(Re=Re(t,nt))){pp(xt,Re,a,dt);break t}qt&&qt(t,rt,nt),t==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&me(rt,"number",rt.value)}switch(qt=nt?cs(nt):window,t){case"focusin":(dp(qt)||qt.contentEditable==="true")&&(ks=qt,fu=nt,no=null);break;case"focusout":no=fu=ks=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,bp(xt,a,dt);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":bp(xt,a,dt)}var ce;if(ou)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Vs?fp(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(lp&&a.locale!=="ko"&&(Vs||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Vs&&(ce=ip()):(Ca=dt,nu="value"in Ca?Ca.value:Ca.textContent,Vs=!0)),qt=Yl(nt,Se),0<qt.length&&(Se=new rp(Se,t,null,a,dt),xt.push({event:Se,listeners:qt}),ce?Se.data=ce:(ce=hp(a),ce!==null&&(Se.data=ce)))),(ce=nx?ix(t,a):ax(t,a))&&(Se=Yl(nt,"onBeforeInput"),0<Se.length&&(qt=new rp("onBeforeInput","beforeinput",null,a,dt),xt.push({event:qt,listeners:Se}),qt.data=ce)),Zx(xt,t,nt,a,dt)}Kg(xt,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Yr(t,a),u!=null&&r.unshift(Co(t,u,f)),u=Yr(t,n),u!=null&&r.push(Co(t,u,f))),t.tag===3)return r;t=t.return}return[]}function $x(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Jg(t,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,z=R.alternate,nt=R.stateNode;if(R=R.tag,z!==null&&z===r)break;R!==5&&R!==26&&R!==27||nt===null||(z=nt,u?(nt=Yr(a,f),nt!=null&&_.unshift(Co(a,nt,z))):u||(nt=Yr(a,f),nt!=null&&_.push(Co(a,nt,z)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var tS=/\r\n?/g,eS=/\u0000|\uFFFD/g;function $g(t){return(typeof t=="string"?t:""+t).replace(tS,`
`).replace(eS,"")}function t0(t,n){return n=$g(n),$g(t)===n}function Ge(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Jn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Jn(t,""+r);break;case"className":Xt(t,"class",r);break;case"tabIndex":Xt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(t,a,r);break;case"style":yi(t,r,f);break;case"data":if(n!=="object"){Xt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=us(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=us(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Yi);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=us(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),It(t,"popover",r);break;case"xlinkActuate":kt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":kt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":kt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":kt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":kt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":kt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":kt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":kt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":kt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":It(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ni.get(a)||a,It(t,a,r))}}function Bf(t,n,a,r,u,f){switch(a){case"style":yi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Jn(t,r):(typeof r=="number"||typeof r=="bigint")&&Jn(t,""+r);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):It(t,a,r)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,f,_,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),r&&Ge(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var R=f=_=u=null,z=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":u=dt;break;case"type":_=dt;break;case"checked":z=dt;break;case"defaultChecked":nt=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Ge(t,n,r,dt,a,null)}}Un(t,f,R,z,nt,_,u,!1);return;case"select":_e("invalid",t),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:Ge(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!r,n!=null?gn(t,!!r,n,!1):a!=null&&gn(t,!!r,a,!0);return;case"textarea":_e("invalid",t),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ge(t,n,_,R,a,null)}Mi(t,r,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(r=a[z],r!=null)&&(z==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(t,n,z,r,a,null));return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<Ro.length;r++)_e(Ro[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,nt,r,a,null)}return;default:if(Ue(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Bf(t,n,dt,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Ge(t,n,R,r,a,null))}function nS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,z=null,nt=null,dt=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":z=xt;default:r.hasOwnProperty(lt)||Ge(t,n,lt,null,r,xt)}}for(var rt in r){var lt=r[rt];if(xt=a[rt],r.hasOwnProperty(rt)&&(lt!=null||xt!=null))switch(rt){case"type":f=lt;break;case"name":u=lt;break;case"checked":nt=lt;break;case"defaultChecked":dt=lt;break;case"value":_=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&Ge(t,n,rt,lt,r,xt)}}Gt(t,_,R,z,nt,dt,f,u);return;case"select":lt=_=R=rt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":lt=z;default:r.hasOwnProperty(f)||Ge(t,n,f,null,r,z)}for(u in r)if(f=r[u],z=a[u],r.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":rt=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==z&&Ge(t,n,u,f,r,z)}n=R,a=_,r=lt,rt!=null?gn(t,!!a,rt,!1):!!r!=!!a&&(n!=null?gn(t,!!a,n,!0):gn(t,!!a,a?[]:"",!1));return;case"textarea":lt=rt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ge(t,n,R,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":rt=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ge(t,n,_,u,r,f)}Qn(t,rt,lt);return;case"option":for(var Wt in a)rt=a[Wt],a.hasOwnProperty(Wt)&&rt!=null&&!r.hasOwnProperty(Wt)&&(Wt==="selected"?t.selected=!1:Ge(t,n,Wt,null,r,rt));for(z in r)rt=r[z],lt=a[z],r.hasOwnProperty(z)&&rt!==lt&&(rt!=null||lt!=null)&&(z==="selected"?t.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Ge(t,n,z,rt,r,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)rt=a[Jt],a.hasOwnProperty(Jt)&&rt!=null&&!r.hasOwnProperty(Jt)&&Ge(t,n,Jt,null,r,rt);for(nt in r)if(rt=r[nt],lt=a[nt],r.hasOwnProperty(nt)&&rt!==lt&&(rt!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ge(t,n,nt,rt,r,lt)}return;default:if(Ue(n)){for(var Ve in a)rt=a[Ve],a.hasOwnProperty(Ve)&&rt!==void 0&&!r.hasOwnProperty(Ve)&&Bf(t,n,Ve,void 0,r,rt);for(dt in r)rt=r[dt],lt=a[dt],!r.hasOwnProperty(dt)||rt===lt||rt===void 0&&lt===void 0||Bf(t,n,dt,rt,r,lt);return}}for(var Z in a)rt=a[Z],a.hasOwnProperty(Z)&&rt!=null&&!r.hasOwnProperty(Z)&&Ge(t,n,Z,null,r,rt);for(xt in r)rt=r[xt],lt=a[xt],!r.hasOwnProperty(xt)||rt===lt||rt==null&&lt==null||Ge(t,n,xt,rt,r,lt)}function e0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&e0(_)){for(_=0,R=u.responseEnd,r+=1;r<a.length;r++){var z=a[r],nt=z.startTime;if(nt>R)break;var dt=z.transferSize,xt=z.initiatorType;dt&&e0(xt)&&(z=z.responseEnd,_+=dt*(z<R?1:(R-nt)/(z-nt)))}if(--r,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zf=null,Hf=null;function Zl(t){return t.nodeType===9?t:t.ownerDocument}function n0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Gf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function aS(){var t=window.event;return t&&t.type==="popstate"?t===Vf?!1:(Vf=t,!0):(Vf=null,!1)}var a0=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,s0=typeof Promise=="function"?Promise:void 0,rS=typeof queueMicrotask=="function"?queueMicrotask:typeof s0<"u"?function(t){return s0.resolve(null).then(t).catch(oS)}:a0;function oS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function r0(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ea]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&wo(t.ownerDocument.body);a=u}while(a);gr(n)}function o0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function lS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ea])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function cS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function l0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Xf(t){return t.data==="$?"||t.data==="$~"}function Wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function uS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var jf=null;function c0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function u0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function f0(t,n,a){switch(n=Zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qr(t)}var xi=new Map,h0=new Set;function Kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=B.d;B.d={f:fS,r:hS,D:dS,C:pS,L:mS,m:gS,X:vS,S:_S,M:xS};function fS(){var t=ua.f(),n=Gl();return t||n}function hS(t){var n=Ta(t);n!==null&&n.tag===5&&n.type==="form"?wm(n):ua.r(t)}var dr=typeof document>"u"?null:document;function d0(t,n,a){var r=dr;if(r&&typeof n=="string"&&n){var u=Oe(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),h0.has(u)||(h0.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",t),un(n),r.head.appendChild(n)))}}function dS(t){ua.D(t),d0("dns-prefetch",t,null)}function pS(t,n){ua.C(t,n),d0("preconnect",t,n)}function mS(t,n,a){ua.L(t,n,a);var r=dr;if(r&&t&&n){var u='link[rel="preload"][as="'+Oe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Oe(a.imageSizes)+'"]')):u+='[href="'+Oe(t)+'"]';var f=u;switch(n){case"style":f=pr(t);break;case"script":f=mr(t)}xi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),xi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Do(f))||n==="script"&&r.querySelector(Uo(f))||(n=r.createElement("link"),Cn(n,"link",t),un(n),r.head.appendChild(n)))}}function gS(t,n){ua.m(t,n);var a=dr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Oe(r)+'"][href="'+Oe(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(t)}if(!xi.has(f)&&(t=x({rel:"modulepreload",href:t},n),xi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}r=a.createElement("link"),Cn(r,"link",t),un(r),a.head.appendChild(r)}}}function _S(t,n,a){ua.S(t,n,a);var r=dr;if(r&&t){var u=Aa(r).hoistableStyles,f=pr(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(Do(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=xi.get(f))&&qf(t,a);var z=_=r.createElement("link");un(z),Cn(z,"link",t),z._p=new Promise(function(nt,dt){z.onload=nt,z.onerror=dt}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ql(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function vS(t,n){ua.X(t,n);var a=dr;if(a&&t){var r=Aa(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Uo(u)),f||(t=x({src:t,async:!0},n),(n=xi.get(u))&&Yf(t,n),f=a.createElement("script"),un(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function xS(t,n){ua.M(t,n);var a=dr;if(a&&t){var r=Aa(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Uo(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=xi.get(u))&&Yf(t,n),f=a.createElement("script"),un(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function p0(t,n,a,r){var u=(u=tt.current)?Kl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Aa(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var f=Aa(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Do(t)))&&!f._p&&(_.instance=f,_.state.loading=5),xi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(t,a),f||SS(u,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Aa(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+Oe(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function m0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function SS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),un(n),t.head.appendChild(n))}function mr(t){return'[src="'+Oe(t)+'"]'}function Uo(t){return"script[async]"+t}function g0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Oe(a.href)+'"]');if(r)return n.instance=r,un(r),r;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),un(r),Cn(r,"style",u),Ql(r,a.precedence,t),n.instance=r;case"stylesheet":u=pr(a.href);var f=t.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,un(f),f;r=m0(a),(u=xi.get(u))&&qf(r,u),f=(t.ownerDocument||t).createElement("link"),un(f);var _=f;return _._p=new Promise(function(R,z){_.onload=R,_.onerror=z}),Cn(f,"link",r),n.state.loading|=4,Ql(f,a.precedence,t),n.instance=f;case"script":return f=mr(a.src),(u=t.querySelector(Uo(f)))?(n.instance=u,un(u),u):(r=a,(u=xi.get(f))&&(r=x({},a),Yf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),un(u),Cn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ql(r,a.precedence,t));return n.instance}function Ql(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Jl=null;function _0(t,n,a){if(Jl===null){var r=new Map,u=Jl=new Map;u.set(a,r)}else u=Jl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ea]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function v0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function MS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(r.href),f=n.querySelector(Do(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=$l.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,un(f);return}f=n.ownerDocument||n,r=m0(r),(u=xi.get(u))&&qf(r,u),f=f.createElement("link"),un(f);var _=f;_._p=new Promise(function(R,z){_.onload=R,_.onerror=z}),Cn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=$l.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zf=0;function ES(t,n){return t.stylesheets&&t.count===0&&ec(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ec(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Zf===0&&(Zf=62500*iS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ec(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tc=null;function ec(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tc=new Map,n.forEach(bS,t),tc=null,$l.call(t))}function bS(t,n){if(!(n.state.loading&4)){var a=tc.get(t);if(a)var r=a.get(null);else{a=new Map,tc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=$l.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:N,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function TS(t,n,a,r,u,f,_,R,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jt(0),this.hiddenUpdates=jt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function S0(t,n,a,r,u,f,_,R,z,nt,dt,xt){return t=new TS(t,n,a,_,z,nt,dt,xt,R),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=Ru(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Uu(f),t}function M0(t){return t?(t=js,t):js}function y0(t,n,a,r,u,f){u=M0(u),r.context===null?r.context=u:r.pendingContext=u,r=Oa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Pa(t,r,n),a!==null&&(jn(a,t,n),co(a,t,n))}function E0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Kf(t,n){E0(t,n),(t=t.alternate)&&E0(t,n)}function b0(t){if(t.tag===13||t.tag===31){var n=ps(t,67108864);n!==null&&jn(n,t,67108864),Kf(t,67108864)}}function T0(t){if(t.tag===13||t.tag===31){var n=si();n=ls(n);var a=ps(t,n);a!==null&&jn(a,t,n),Kf(t,n)}}var nc=!0;function AS(t,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=2,Qf(t,n,a,r)}finally{B.p=f,O.T=u}}function RS(t,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=8,Qf(t,n,a,r)}finally{B.p=f,O.T=u}}function Qf(t,n,a,r){if(nc){var u=Jf(r);if(u===null)Ff(t,n,r,ic,a),R0(t,r);else if(wS(u,t,n,a,r))r.stopPropagation();else if(R0(t,r),n&4&&-1<CS.indexOf(t)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Rt(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var z=1<<31-Pt(_);R.entanglements[1]|=z,_&=~z}Ii(f),(De&6)===0&&(zl=Ct()+500,Ao(0))}}break;case 31:case 13:R=ps(f,2),R!==null&&jn(R,f,2),Gl(),Kf(f,2)}if(f=Jf(r),f===null&&Ff(t,n,r,ic,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Ff(t,n,r,null,a)}}function Jf(t){return t=$c(t),$f(t)}var ic=null;function $f(t){if(ic=null,t=ba(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ic=t,null}function A0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ze()){case D:return 2;case E:return 8;case J:case vt:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var th=!1,ja=null,qa=null,Ya=null,Lo=new Map,Oo=new Map,Za=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R0(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&b0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function wS(t,n,a,r,u){switch(n){case"focusin":return ja=Po(ja,t,n,a,r,u),!0;case"dragenter":return qa=Po(qa,t,n,a,r,u),!0;case"mouseover":return Ya=Po(Ya,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Lo.set(f,Po(Lo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,t,n,a,r,u)),!0}return!1}function C0(t){var n=ba(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Wr(t.priority,function(){T0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Wr(t.priority,function(){T0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Jc=r,a.target.dispatchEvent(r),Jc=null}else return n=Ta(a),n!==null&&b0(n),t.blockedOn=a,!1;n.shift()}return!0}function w0(t,n,a){ac(t)&&a.delete(n)}function DS(){th=!1,ja!==null&&ac(ja)&&(ja=null),qa!==null&&ac(qa)&&(qa=null),Ya!==null&&ac(Ya)&&(Ya=null),Lo.forEach(w0),Oo.forEach(w0)}function sc(t,n){t.blockedOn===n&&(t.blockedOn=null,th||(th=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,DS)))}var rc=null;function D0(t){rc!==t&&(rc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===t&&(rc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if($f(r||a)===null)continue;break}var f=Ta(a);f!==null&&(t.splice(n,3),n-=3,Qu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function gr(t){function n(z){return sc(z,t)}ja!==null&&sc(ja,t),qa!==null&&sc(qa,t),Ya!==null&&sc(Ya,t),Lo.forEach(n),Oo.forEach(n);for(var a=0;a<Za.length;a++){var r=Za[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)C0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[bn]||null;if(typeof f=="function")_||D0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[bn]||null)R=_.formAction;else if($f(u)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),D0(a)}}}function U0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function eh(t){this._internalRoot=t}oc.prototype.render=eh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=si();y0(a,r,t,n,null,null)},oc.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;y0(t.current,2,null,t,null,null),Gl(),n[qi]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&C0(t)}};var N0=e.version;if(N0!=="19.2.6")throw Error(s(527,N0,"19.2.6"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?M(t):null,t=t===null?null:t.stateNode,t};var US={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{ct=lc.inject(US),ft=lc}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=zm,f=Hm,_=Gm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=S0(t,1,!1,null,null,a,r,null,u,f,_,U0),t[qi]=n.current,If(t),new eh(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=zm,_=Hm,R=Gm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=S0(t,1,!0,n,a??null,r,u,z,f,_,R,U0),n.context=M0(null),a=n.current,r=si(),r=ls(r),u=Oa(r),u.callback=null,Pa(a,u,r),a=r,n.current.lanes=a,te(n,a),Ii(n),t[qi]=n.current,If(t),new oc(n)},Fo.version="19.2.6",Fo}var V0;function kS(){if(V0)return ah.exports;V0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ah.exports=VS(),ah.exports}var XS=kS();function WS({metrics:o}){return G.jsx("section",{className:"dark-section section",id:"about","aria-labelledby":"about-title",children:G.jsxs("div",{className:"shell",children:[G.jsx("h2",{className:"impact section-title",id:"about-title",children:"About"}),G.jsxs("div",{className:"about-grid",children:[G.jsxs("div",{className:"about-main",children:[G.jsxs("p",{className:"lead",children:["I turn ",G.jsx("span",{className:"text-blue",children:"complex workflows"})," into"," ",G.jsx("span",{className:"text-green",children:"clear digital systems"}),"."]}),G.jsx("p",{children:"I build polished interfaces, practical automations, and connected tools that help people work faster with less manual effort."}),G.jsx("div",{className:"metric-grid","aria-label":"Portfolio metrics",children:o.map(e=>G.jsxs("div",{className:"metric",children:[G.jsx("strong",{children:e.value}),G.jsx("span",{children:e.label})]},e.label))})]}),G.jsxs("div",{className:"expertise-panel",children:[G.jsxs("article",{children:[G.jsx("h3",{children:"Web Interfaces"}),G.jsx("p",{children:"Clean React experiences with responsive layouts, strong visual hierarchy, and smooth interactions."})]}),G.jsxs("article",{children:[G.jsx("h3",{children:"AI Automation"}),G.jsx("p",{children:"Workflow systems that reduce repetitive tasks, connect tools, and make handoffs easier."})]}),G.jsxs("article",{children:[G.jsx("h3",{children:"System Integration"}),G.jsx("p",{children:"Reliable bridges between apps, databases, APIs, spreadsheets, and internal operations."})]})]})]})]})})}function jS({profile:o,form:e,errors:i,status:s,onChange:l,onSubmit:c}){return G.jsx("section",{className:"light-section section contact-section",id:"contact","aria-labelledby":"contact-title",children:G.jsx("div",{className:"contact-shell",children:G.jsxs("div",{className:"contact-panel",children:[G.jsx("div",{className:"contact-head",children:G.jsxs("div",{children:[G.jsx("p",{className:"contact-eyebrow",children:"Start a build"}),G.jsx("h2",{className:"impact contact-title",id:"contact-title",children:"Contact"}),G.jsx("p",{className:"contact-intro",children:"Tell me what you want to build, improve, or automate. I will reply with a clear next step."})]})}),G.jsx("div",{className:"contact-layout",children:G.jsxs("form",{className:"contact-form",onSubmit:c,noValidate:!0,children:[G.jsxs("div",{className:"form-grid",children:[G.jsxs("div",{className:"field",children:[G.jsx("label",{htmlFor:"name",children:"Name"}),G.jsx("input",{id:"name",name:"name",type:"text",autoComplete:"name",placeholder:"Your name",value:e.name,onChange:l,"aria-invalid":!!i.name,"aria-describedby":i.name?"name-error":void 0}),i.name&&G.jsx("p",{className:"field-error",id:"name-error",role:"alert",children:i.name})]}),G.jsxs("div",{className:"field",children:[G.jsx("label",{htmlFor:"email",children:"Email"}),G.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",placeholder:"you@example.com",value:e.email,onChange:l,"aria-invalid":!!i.email,"aria-describedby":i.email?"email-error":void 0}),i.email&&G.jsx("p",{className:"field-error",id:"email-error",role:"alert",children:i.email})]})]}),G.jsxs("div",{className:"field",children:[G.jsx("label",{htmlFor:"message",children:"Project Details"}),G.jsx("textarea",{id:"message",name:"message",rows:"5",placeholder:"Tell me about your project, timeline, and what success should look like",value:e.message,onChange:l,"aria-invalid":!!i.message,"aria-describedby":i.message?"message-error":void 0}),i.message&&G.jsx("p",{className:"field-error",id:"message-error",role:"alert",children:i.message})]}),G.jsx("button",{className:"transmit-button",type:"submit",children:"Send Message"}),G.jsx("p",{className:"form-status","aria-live":"polite",children:s})]})}),G.jsxs("div",{className:"contact-footer",children:[G.jsx("div",{className:"profile-links","aria-label":"Profile links",children:o.links.map(h=>G.jsx("a",{href:h.href,target:h.href.startsWith("http")?"_blank":void 0,rel:h.href.startsWith("http")?"noreferrer":void 0,children:h.label},h.label))}),G.jsx("p",{children:o.location})]})]})})})}function qS({profile:o,footerNavItems:e,socialLinks:i,currentYear:s}){return G.jsx("footer",{className:"site-footer",children:G.jsxs("div",{className:"shell footer-inner",children:[G.jsxs("div",{className:"footer-top",children:[G.jsxs("a",{className:"brand footer-brand",href:"#home","aria-label":`${o.name} home`,children:[G.jsx("span",{className:"brand-mark","aria-hidden":"true",children:o.mark}),G.jsx("span",{className:"brand-word",children:o.name})]}),G.jsx("a",{className:"back-top",href:"#home",children:"Back to top"})]}),G.jsxs("div",{className:"footer-main",children:[G.jsxs("div",{className:"footer-block footer-summary",children:[G.jsx("h2",{children:"Overview"}),G.jsx("p",{children:"Clean web systems, AI automations, and polished interfaces for teams that need practical tools."})]}),G.jsxs("nav",{className:"footer-block footer-nav","aria-label":"Footer navigation",children:[G.jsx("h2",{children:"Navigate"}),G.jsx("div",{children:e.map(l=>G.jsx("a",{href:l.href,children:l.label},l.href))})]}),G.jsxs("div",{className:"footer-block footer-socials","aria-label":"Social and contact links",children:[G.jsx("h2",{children:"Connect"}),G.jsx("div",{children:i.map(l=>G.jsx("a",{className:"social-link",href:l.href,target:l.href.startsWith("http")?"_blank":void 0,rel:l.href.startsWith("http")?"noreferrer":void 0,children:l.label},l.label))})]})]}),G.jsxs("div",{className:"footer-bottom",children:[G.jsxs("p",{className:"footer-availability",children:[G.jsx("span",{"aria-hidden":"true"}),"Open to freelance and collaboration opportunities."]}),G.jsxs("small",{children:["© ",s," ",o.name,". All rights reserved."]}),G.jsxs("p",{children:["Built by ",o.name," with React and Vite."]})]})]})})}function YS({profile:o,navItems:e,menuOpen:i,onMenuToggle:s,onNavClick:l}){return G.jsx("header",{className:"site-header",children:G.jsxs("nav",{className:"nav shell","aria-label":"Main navigation",children:[G.jsx("a",{className:"brand",href:"#home","aria-label":`${o.name} home`,children:G.jsx("span",{className:"brand-word",children:o.name})}),G.jsxs("button",{className:"menu-button",type:"button","aria-label":"Toggle navigation menu","aria-expanded":i,"aria-controls":"primary-navigation",onClick:s,children:[G.jsx("span",{"aria-hidden":"true"}),G.jsx("span",{"aria-hidden":"true"}),G.jsx("span",{"aria-hidden":"true"})]}),G.jsx("div",{className:`nav-links ${i?"is-open":""}`,id:"primary-navigation",children:e.map(c=>G.jsx("a",{href:c.href,onClick:h=>l(h,c.href),children:c.label},c.href))}),G.jsx("a",{className:"hire-link",href:"#contact",onClick:c=>l(c,"#contact"),children:"Hire Me"})]})})}const ZS="/assets/image1-odVjXuGw.jpg";const Fd="184",KS=0,k0=1,QS=2,Lc=1,JS=2,Wo=3,rs=0,Yn=1,ga=2,va=0,Lr=1,X0=2,W0=3,j0=4,$S=5,Ns=100,tM=101,eM=102,nM=103,iM=104,aM=200,sM=201,rM=202,oM=203,Vh=204,kh=205,lM=206,cM=207,uM=208,fM=209,hM=210,dM=211,pM=212,mM=213,gM=214,Xh=0,Wh=1,jh=2,Pr=3,qh=4,Yh=5,Zh=6,Kh=7,W_=0,_M=1,vM=2,ki=0,j_=1,q_=2,Y_=3,Z_=4,K_=5,Q_=6,J_=7,$_=300,Is=301,Ir=302,lh=303,ch=304,qc=306,Qh=1e3,_a=1001,Jh=1002,wn=1003,xM=1004,cc=1005,In=1006,uh=1007,Os=1008,ui=1009,tv=1010,ev=1011,Yo=1012,Bd=1013,Wi=1014,Gi=1015,Sa=1016,zd=1017,Hd=1018,Zo=1020,nv=35902,iv=35899,av=1021,sv=1022,Di=1023,Ma=1026,Ps=1027,rv=1028,Gd=1029,Fs=1030,Vd=1031,kd=1033,Oc=33776,Pc=33777,Ic=33778,Fc=33779,$h=35840,td=35841,ed=35842,nd=35843,id=36196,ad=37492,sd=37496,rd=37488,od=37489,Hc=37490,ld=37491,cd=37808,ud=37809,fd=37810,hd=37811,dd=37812,pd=37813,md=37814,gd=37815,_d=37816,vd=37817,xd=37818,Sd=37819,Md=37820,yd=37821,Ed=36492,bd=36494,Td=36495,Ad=36283,Rd=36284,Gc=36285,Cd=36286,SM=3200,wd=0,MM=1,is="",li="srgb",Vc="srgb-linear",kc="linear",Be="srgb",_r=7680,q0=519,yM=512,EM=513,bM=514,Xd=515,TM=516,AM=517,Wd=518,RM=519,Y0=35044,Z0="300 es",Vi=2e3,Ko=2001;function CM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wM(){const o=Xc("canvas");return o.style.display="block",o}const K0={};function Q0(...o){const e="THREE."+o.shift();console.log(e,...o)}function ov(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ee(...o){o=ov(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Te(...o){o=ov(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Dd(...o){const e=o.join(" ");e in K0||(K0[e]=!0,ee(...o))}function DM(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const UM={[Xh]:Wh,[jh]:Zh,[qh]:Kh,[Pr]:Yh,[Wh]:Xh,[Zh]:jh,[Kh]:qh,[Yh]:Pr};class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=Math.PI/180,Ud=180/Math.PI;function Qo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function NM(o,e){return(o%e+e)%e}function hh(o,e,i){return(1-i)*o+i*e}function Bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Kd=class Kd{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kd.prototype.isVector2=!0;let be=Kd;class zr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],M=s[l+2],x=s[l+3],g=c[h+0],y=c[h+1],T=c[h+2],w=c[h+3];if(x!==w||m!==g||d!==y||M!==T){let S=m*g+d*y+M*T+x*w;S<0&&(g=-g,y=-y,T=-T,w=-w,S=-S);let v=1-p;if(S<.9995){const C=Math.acos(S),N=Math.sin(C);v=Math.sin(v*C)/N,p=Math.sin(p*C)/N,m=m*v+g*p,d=d*v+y*p,M=M*v+T*p,x=x*v+w*p}else{m=m*v+g*p,d=d*v+y*p,M=M*v+T*p,x=x*v+w*p;const C=1/Math.sqrt(m*m+d*d+M*M+x*x);m*=C,d*=C,M*=C,x*=C}}e[i]=m,e[i+1]=d,e[i+2]=M,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],M=s[l+3],x=c[h],g=c[h+1],y=c[h+2],T=c[h+3];return e[i]=p*T+M*x+m*y-d*g,e[i+1]=m*T+M*g+d*x-p*y,e[i+2]=d*T+M*y+p*g-m*x,e[i+3]=M*T-p*x-m*g-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),M=p(l/2),x=p(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*M*x+d*y*T,this._y=d*y*x-g*M*T,this._z=d*M*T+g*y*x,this._w=d*M*x-g*y*T;break;case"YXZ":this._x=g*M*x+d*y*T,this._y=d*y*x-g*M*T,this._z=d*M*T-g*y*x,this._w=d*M*x+g*y*T;break;case"ZXY":this._x=g*M*x-d*y*T,this._y=d*y*x+g*M*T,this._z=d*M*T+g*y*x,this._w=d*M*x-g*y*T;break;case"ZYX":this._x=g*M*x-d*y*T,this._y=d*y*x+g*M*T,this._z=d*M*T-g*y*x,this._w=d*M*x+g*y*T;break;case"YZX":this._x=g*M*x+d*y*T,this._y=d*y*x+g*M*T,this._z=d*M*T-g*y*x,this._w=d*M*x-g*y*T;break;case"XZY":this._x=g*M*x-d*y*T,this._y=d*y*x-g*M*T,this._z=d*M*T+g*y*x,this._w=d*M*x+g*y*T;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],M=i[6],x=i[10],g=s+p+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(M-m)*y,this._y=(c-d)*y,this._z=(h-l)*y}else if(s>p&&s>x){const y=2*Math.sqrt(1+s-p-x);this._w=(M-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+d)/y}else if(p>x){const y=2*Math.sqrt(1+p-s-x);this._w=(c-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+M)/y}else{const y=2*Math.sqrt(1+x-s-p);this._w=(h-l)/y,this._x=(c+d)/y,this._y=(m+M)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,M=i._w;return this._x=s*M+h*p+l*d-c*m,this._y=l*M+h*m+c*p-s*d,this._z=c*M+h*d+s*m-l*p,this._w=h*M-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),M=Math.sin(d);m=Math.sin(m*d)/M,i=Math.sin(i*d)/M,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qd=class Qd{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(J0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(J0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),M=2*(p*i-c*l),x=2*(c*s-h*i);return this.x=i+m*d+h*x-p*M,this.y=s+m*M+p*d-c*x,this.z=l+m*x+c*M-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qd.prototype.isVector3=!0;let $=Qd;const dh=new $,J0=new zr,Jd=class Jd{constructor(e,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d)}set(e,i,s,l,c,h,p,m,d){const M=this.elements;return M[0]=e,M[1]=l,M[2]=p,M[3]=i,M[4]=c,M[5]=m,M[6]=s,M[7]=h,M[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],M=s[4],x=s[7],g=s[2],y=s[5],T=s[8],w=l[0],S=l[3],v=l[6],C=l[1],N=l[4],U=l[7],V=l[2],L=l[5],F=l[8];return c[0]=h*w+p*C+m*V,c[3]=h*S+p*N+m*L,c[6]=h*v+p*U+m*F,c[1]=d*w+M*C+x*V,c[4]=d*S+M*N+x*L,c[7]=d*v+M*U+x*F,c[2]=g*w+y*C+T*V,c[5]=g*S+y*N+T*L,c[8]=g*v+y*U+T*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],M=e[8];return i*h*M-i*p*d-s*c*M+s*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],M=e[8],x=M*h-p*d,g=p*m-M*c,y=d*c-h*m,T=i*x+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=x*w,e[1]=(l*d-M*s)*w,e[2]=(p*s-l*h)*w,e[3]=g*w,e[4]=(M*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=y*w,e[7]=(s*m-d*i)*w,e[8]=(h*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(ph.makeScale(e,i)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,i){return this.premultiply(ph.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jd.prototype.isMatrix3=!0;let se=Jd;const ph=new se,$0=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LM(){const o={enabled:!0,workingColorSpace:Vc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Dd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Dd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Vc]:{primaries:e,whitePoint:s,transfer:kc,toXYZ:$0,fromXYZ:t_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:$0,fromXYZ:t_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Ee=LM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Or(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vr;class OM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{vr===void 0&&(vr=Xc("canvas")),vr.width=e.width,vr.height=e.height;const l=vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:e.width,height:e.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PM=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(mh(l[h].image)):c.push(mh(l[h]))}else c=mh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function mh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let IM=0;const gh=new $;class zn extends Bs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=_a,l=_a,c=In,h=Os,p=Di,m=ui,d=zn.DEFAULT_ANISOTROPY,M=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Qo(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=M,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qh:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case Jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qh:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case Jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=$_;zn.DEFAULT_ANISOTROPY=1;const $d=class $d{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],M=m[4],x=m[8],g=m[1],y=m[5],T=m[9],w=m[2],S=m[6],v=m[10];if(Math.abs(M-g)<.01&&Math.abs(x-w)<.01&&Math.abs(T-S)<.01){if(Math.abs(M+g)<.1&&Math.abs(x+w)<.1&&Math.abs(T+S)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(d+1)/2,U=(y+1)/2,V=(v+1)/2,L=(M+g)/4,F=(x+w)/4,b=(T+S)/4;return N>U&&N>V?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=L/s,c=F/s):U>V?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=L/l,c=b/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=F/c,l=b/c),this.set(s,l,c,i),this}let C=Math.sqrt((S-T)*(S-T)+(x-w)*(x-w)+(g-M)*(g-M));return Math.abs(C)<.001&&(C=1),this.x=(S-T)/C,this.y=(x-w)/C,this.z=(g-M)/C,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$d.prototype.isVector4=!0;let an=$d;class FM extends Bs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new zn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends FM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class lv extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BM extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(e,i,s,l,c,h,p,m,d,M,x,g,y,T,w,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d,M,x,g,y,T,w,S)}set(e,i,s,l,c,h,p,m,d,M,x,g,y,T,w,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=p,v[13]=m,v[2]=d,v[6]=M,v[10]=x,v[14]=g,v[3]=y,v[7]=T,v[11]=w,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),h=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),M=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=h*M,y=h*x,T=p*M,w=p*x;i[0]=m*M,i[4]=-m*x,i[8]=d,i[1]=y+T*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=T+y*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*M,y=m*x,T=d*M,w=d*x;i[0]=g+w*p,i[4]=T*p-y,i[8]=h*d,i[1]=h*x,i[5]=h*M,i[9]=-p,i[2]=y*p-T,i[6]=w+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*M,y=m*x,T=d*M,w=d*x;i[0]=g-w*p,i[4]=-h*x,i[8]=T+y*p,i[1]=y+T*p,i[5]=h*M,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*M,y=h*x,T=p*M,w=p*x;i[0]=m*M,i[4]=T*d-y,i[8]=g*d+w,i[1]=m*x,i[5]=w*d+g,i[9]=y*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,y=h*d,T=p*m,w=p*d;i[0]=m*M,i[4]=w-g*x,i[8]=T*x+y,i[1]=x,i[5]=h*M,i[9]=-p*M,i[2]=-d*M,i[6]=y*x+T,i[10]=g-w*x}else if(e.order==="XZY"){const g=h*m,y=h*d,T=p*m,w=p*d;i[0]=m*M,i[4]=-x,i[8]=d*M,i[1]=g*x+w,i[5]=h*M,i[9]=y*x-T,i[2]=T*x-y,i[6]=p*M,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,HM)}lookAt(e,i,s){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Qa.crossVectors(s,ri),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Qa.crossVectors(s,ri)),Qa.normalize(),uc.crossVectors(ri,Qa),l[0]=Qa.x,l[4]=uc.x,l[8]=ri.x,l[1]=Qa.y,l[5]=uc.y,l[9]=ri.y,l[2]=Qa.z,l[6]=uc.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],M=s[1],x=s[5],g=s[9],y=s[13],T=s[2],w=s[6],S=s[10],v=s[14],C=s[3],N=s[7],U=s[11],V=s[15],L=l[0],F=l[4],b=l[8],P=l[12],W=l[1],H=l[5],K=l[9],ut=l[13],mt=l[2],q=l[6],O=l[10],B=l[14],ot=l[3],gt=l[7],yt=l[11],I=l[15];return c[0]=h*L+p*W+m*mt+d*ot,c[4]=h*F+p*H+m*q+d*gt,c[8]=h*b+p*K+m*O+d*yt,c[12]=h*P+p*ut+m*B+d*I,c[1]=M*L+x*W+g*mt+y*ot,c[5]=M*F+x*H+g*q+y*gt,c[9]=M*b+x*K+g*O+y*yt,c[13]=M*P+x*ut+g*B+y*I,c[2]=T*L+w*W+S*mt+v*ot,c[6]=T*F+w*H+S*q+v*gt,c[10]=T*b+w*K+S*O+v*yt,c[14]=T*P+w*ut+S*B+v*I,c[3]=C*L+N*W+U*mt+V*ot,c[7]=C*F+N*H+U*q+V*gt,c[11]=C*b+N*K+U*O+V*yt,c[15]=C*P+N*ut+U*B+V*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],M=e[2],x=e[6],g=e[10],y=e[14],T=e[3],w=e[7],S=e[11],v=e[15],C=m*y-d*g,N=p*y-d*x,U=p*g-m*x,V=h*y-d*M,L=h*g-m*M,F=h*x-p*M;return i*(w*C-S*N+v*U)-s*(T*C-S*V+v*L)+l*(T*N-w*V+v*F)-c*(T*U-w*L+S*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],M=e[8],x=e[9],g=e[10],y=e[11],T=e[12],w=e[13],S=e[14],v=e[15],C=i*p-s*h,N=i*m-l*h,U=i*d-c*h,V=s*m-l*p,L=s*d-c*p,F=l*d-c*m,b=M*w-x*T,P=M*S-g*T,W=M*v-y*T,H=x*S-g*w,K=x*v-y*w,ut=g*v-y*S,mt=C*ut-N*K+U*H+V*W-L*P+F*b;if(mt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/mt;return e[0]=(p*ut-m*K+d*H)*q,e[1]=(l*K-s*ut-c*H)*q,e[2]=(w*F-S*L+v*V)*q,e[3]=(g*L-x*F-y*V)*q,e[4]=(m*W-h*ut-d*P)*q,e[5]=(i*ut-l*W+c*P)*q,e[6]=(S*U-T*F-v*N)*q,e[7]=(M*F-g*U+y*N)*q,e[8]=(h*K-p*W+d*b)*q,e[9]=(s*W-i*K-c*b)*q,e[10]=(T*L-w*U+v*C)*q,e[11]=(x*U-M*L-y*C)*q,e[12]=(p*P-h*H-m*b)*q,e[13]=(i*H-s*P+l*b)*q,e[14]=(w*N-T*V-S*C)*q,e[15]=(M*V-x*N+g*C)*q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,p=e.y,m=e.z,d=c*h,M=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,M*p+s,M*m-l*h,0,d*m-l*p,M*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,M=h+h,x=p+p,g=c*d,y=c*M,T=c*x,w=h*M,S=h*x,v=p*x,C=m*d,N=m*M,U=m*x,V=s.x,L=s.y,F=s.z;return l[0]=(1-(w+v))*V,l[1]=(y+U)*V,l[2]=(T-N)*V,l[3]=0,l[4]=(y-U)*L,l[5]=(1-(g+v))*L,l[6]=(S+C)*L,l[7]=0,l[8]=(T+N)*F,l[9]=(S-C)*F,l[10]=(1-(g+w))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=xr.set(l[0],l[1],l[2]).length();const p=xr.set(l[4],l[5],l[6]).length(),m=xr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ai.copy(this);const d=1/h,M=1/p,x=1/m;return Ai.elements[0]*=d,Ai.elements[1]*=d,Ai.elements[2]*=d,Ai.elements[4]*=M,Ai.elements[5]*=M,Ai.elements[6]*=M,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,i.setFromRotationMatrix(Ai),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,h,p=Vi,m=!1){const d=this.elements,M=2*c/(i-e),x=2*c/(s-l),g=(i+e)/(i-e),y=(s+l)/(s-l);let T,w;if(m)T=c/(h-c),w=h*c/(h-c);else if(p===Vi)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===Ko)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=M,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,h,p=Vi,m=!1){const d=this.elements,M=2/(i-e),x=2/(s-l),g=-(i+e)/(i-e),y=-(s+l)/(s-l);let T,w;if(m)T=1/(h-c),w=h/(h-c);else if(p===Vi)T=-2/(h-c),w=-(h+c)/(h-c);else if(p===Ko)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=M,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};jc.prototype.isMatrix4=!0;let sn=jc;const xr=new $,Ai=new sn,zM=new $(0,0,0),HM=new $(1,1,1),Qa=new $,uc=new $,ri=new $,e_=new sn,n_=new zr;class os{constructor(e=0,i=0,s=0,l=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],M=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-M,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-M,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-M,y),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return e_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return n_.setFromEuler(this),this.setFromQuaternion(n_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GM=0;const i_=new $,Sr=new zr,fa=new sn,fc=new $,zo=new $,VM=new $,kM=new zr,a_=new $(1,0,0),s_=new $(0,1,0),r_=new $(0,0,1),o_={type:"added"},XM={type:"removed"},Mr={type:"childadded",child:null},_h={type:"childremoved",child:null};class Hn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new $,i=new os,s=new zr,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new se}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(a_,e)}rotateY(e){return this.rotateOnAxis(s_,e)}rotateZ(e){return this.rotateOnAxis(r_,e)}translateOnAxis(e,i){return i_.copy(e).applyQuaternion(this.quaternion),this.position.add(i_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(a_,e)}translateY(e){return this.translateOnAxis(s_,e)}translateZ(e){return this.translateOnAxis(r_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?fc.copy(e):fc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(zo,fc,this.up):fa.lookAt(fc,zo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(fa),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Te("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(o_),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(XM),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(o_),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,VM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,kM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,M=m.length;d<M;d++){const x=m[d];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),M=h(e.images),x=h(e.shapes),g=h(e.skeletons),y=h(e.animations),T=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),M.length>0&&(s.images=M),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const M=p[d];delete M.metadata,m.push(M)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new $(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class as extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const w of e.hand.values()){const S=i.getJointPose(w,s),v=this._getHandJoint(d,w);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const M=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=M.position.distanceTo(x.position),y=.02,T=.005;d.inputState.pinching&&g>y+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=y-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new as;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},hc={h:0,s:0,l:0};function xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class de{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ee.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ee.workingColorSpace){if(e=NM(e,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=xh(h,c,e+1/3),this.g=xh(h,c,e),this.b=xh(h,c,e-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(e,i=li){function s(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const s=uv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Ee.workingToColorSpace(On.copy(this),e),Math.round(Me(On.r*255,0,255))*65536+Math.round(Me(On.g*255,0,255))*256+Math.round(Me(On.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const M=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=M<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=M,e}getRGB(e,i=Ee.workingColorSpace){return Ee.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=li){Ee.workingToColorSpace(On.copy(this),e);const i=On.r,s=On.g,l=On.b;return e!==li?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(hc);const s=hh(Ja.h,hc.h,i),l=hh(Ja.s,hc.s,i),c=hh(Ja.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new de;de.NAMES=uv;class jM extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new $,ha=new $,Sh=new $,da=new $,yr=new $,Er=new $,l_=new $,Mh=new $,yh=new $,Eh=new $,bh=new an,Th=new an,Ah=new an;class wi{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ri.subVectors(l,i),ha.subVectors(s,i),Sh.subVectors(e,i);const h=Ri.dot(Ri),p=Ri.dot(ha),m=Ri.dot(Sh),d=ha.dot(ha),M=ha.dot(Sh),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(d*m-p*M)*g,T=(h*M-p*m)*g;return c.set(1-y-T,T,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,s,l,c,h,p,m){return this.getBarycoord(e,i,s,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(h,da.y),m.addScaledVector(p,da.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return bh.setScalar(0),Th.setScalar(0),Ah.setScalar(0),bh.fromBufferAttribute(e,i),Th.fromBufferAttribute(e,s),Ah.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(bh,c.x),h.addScaledVector(Th,c.y),h.addScaledVector(Ah,c.z),h}static isFrontFacing(e,i,s,l){return Ri.subVectors(s,i),ha.subVectors(e,i),Ri.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,p;yr.subVectors(l,s),Er.subVectors(c,s),Mh.subVectors(e,s);const m=yr.dot(Mh),d=Er.dot(Mh);if(m<=0&&d<=0)return i.copy(s);yh.subVectors(e,l);const M=yr.dot(yh),x=Er.dot(yh);if(M>=0&&x<=M)return i.copy(l);const g=m*x-M*d;if(g<=0&&m>=0&&M<=0)return h=m/(m-M),i.copy(s).addScaledVector(yr,h);Eh.subVectors(e,c);const y=yr.dot(Eh),T=Er.dot(Eh);if(T>=0&&y<=T)return i.copy(c);const w=y*d-m*T;if(w<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Er,p);const S=M*T-y*x;if(S<=0&&x-M>=0&&y-T>=0)return l_.subVectors(c,l),p=(x-M)/(x-M+(y-T)),i.copy(l).addScaledVector(l_,p);const v=1/(S+w+g);return h=w*v,p=g*v,i.copy(s).addScaledVector(yr,h).addScaledVector(Er,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jo{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Ci):Ci.fromBufferAttribute(c,h),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),dc.copy(s.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),pc.subVectors(this.max,Ho),br.subVectors(e.a,Ho),Tr.subVectors(e.b,Ho),Ar.subVectors(e.c,Ho),$a.subVectors(Tr,br),ts.subVectors(Ar,Tr),Rs.subVectors(br,Ar);let i=[0,-$a.z,$a.y,0,-ts.z,ts.y,0,-Rs.z,Rs.y,$a.z,0,-$a.x,ts.z,0,-ts.x,Rs.z,0,-Rs.x,-$a.y,$a.x,0,-ts.y,ts.x,0,-Rs.y,Rs.x,0];return!Rh(i,br,Tr,Ar,pc)||(i=[1,0,0,0,1,0,0,0,1],!Rh(i,br,Tr,Ar,pc))?!1:(mc.crossVectors($a,ts),i=[mc.x,mc.y,mc.z],Rh(i,br,Tr,Ar,pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pa=[new $,new $,new $,new $,new $,new $,new $,new $],Ci=new $,dc=new Jo,br=new $,Tr=new $,Ar=new $,$a=new $,ts=new $,Rs=new $,Ho=new $,pc=new $,mc=new $,Cs=new $;function Rh(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Cs.fromArray(o,c);const p=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=e.dot(Cs),d=i.dot(Cs),M=s.dot(Cs);if(Math.max(-Math.max(m,d,M),Math.min(m,d,M))>p)return!1}return!0}const mn=new $,gc=new be;let qM=0;class Ui extends Bs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Y0,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Bo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),c=qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Y0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fv extends Ui{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class hv extends Ui{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class yn extends Ui{constructor(e,i,s){super(new Float32Array(e),i,s)}}const YM=new Jo,Go=new $,Ch=new $;class Yc{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):YM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Go,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Ch)),this.expandByPoint(Go.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ZM=0;const Si=new sn,wh=new Hn,Rr=new $,oi=new Jo,Vo=new Jo,Mn=new $;class Zn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CM(e)?hv:fv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new se().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new yn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Vo.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(oi.min,Vo.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,Vo.max),oi.expandByPoint(Mn)):(oi.expandByPoint(Vo.min),oi.expandByPoint(Vo.max))}oi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,M=p.count;d<M;d++)Mn.fromBufferAttribute(p,d),m&&(Rr.fromBufferAttribute(e,d),Mn.add(Rr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new $,m[b]=new $;const d=new $,M=new $,x=new $,g=new be,y=new be,T=new be,w=new $,S=new $;function v(b,P,W){d.fromBufferAttribute(s,b),M.fromBufferAttribute(s,P),x.fromBufferAttribute(s,W),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,P),T.fromBufferAttribute(c,W),M.sub(d),x.sub(d),y.sub(g),T.sub(g);const H=1/(y.x*T.y-T.x*y.y);isFinite(H)&&(w.copy(M).multiplyScalar(T.y).addScaledVector(x,-y.y).multiplyScalar(H),S.copy(x).multiplyScalar(y.x).addScaledVector(M,-T.x).multiplyScalar(H),p[b].add(w),p[P].add(w),p[W].add(w),m[b].add(S),m[P].add(S),m[W].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let b=0,P=C.length;b<P;++b){const W=C[b],H=W.start,K=W.count;for(let ut=H,mt=H+K;ut<mt;ut+=3)v(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const N=new $,U=new $,V=new $,L=new $;function F(b){V.fromBufferAttribute(l,b),L.copy(V);const P=p[b];N.copy(P),N.sub(V.multiplyScalar(V.dot(P))).normalize(),U.crossVectors(L,P);const H=U.dot(m[b])<0?-1:1;h.setXYZW(b,N.x,N.y,N.z,H)}for(let b=0,P=C.length;b<P;++b){const W=C[b],H=W.start,K=W.count;for(let ut=H,mt=H+K;ut<mt;ut+=3)F(e.getX(ut+0)),F(e.getX(ut+1)),F(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,h=new $,p=new $,m=new $,d=new $,M=new $,x=new $;if(e)for(let g=0,y=e.count;g<y;g+=3){const T=e.getX(g+0),w=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),M.subVectors(h,c),x.subVectors(l,c),M.cross(x),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,S),p.add(M),m.add(M),d.add(M),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),M.subVectors(h,c),x.subVectors(l,c),M.cross(x),s.setXYZ(g+0,M.x,M.y,M.z),s.setXYZ(g+1,M.x,M.y,M.z),s.setXYZ(g+2,M.x,M.y,M.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(p,m){const d=p.array,M=p.itemSize,x=p.normalized,g=new d.constructor(m.length*M);let y=0,T=0;for(let w=0,S=m.length;w<S;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*M;for(let v=0;v<M;v++)g[T++]=d[y++]}return new Ui(g,M,x)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let M=0,x=d.length;M<x;M++){const g=d[M],y=e(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],M=[];for(let x=0,g=d.length;x<g;x++){const y=d[x];M.push(y.toJSON(e.data))}M.length>0&&(l[m]=M,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const M=l[d];this.setAttribute(d,M.clone(i))}const c=e.morphAttributes;for(const d in c){const M=[],x=c[d];for(let g=0,y=x.length;g<y;g++)M.push(x[g].clone(i));this.morphAttributes[d]=M}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,M=h.length;d<M;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KM=0;class Hr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Lr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vh&&(s.blendSrc=this.blendSrc),this.blendDst!==kh&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ma=new $,Dh=new $,_c=new $,es=new $,Uh=new $,vc=new $,Nh=new $;class dv{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Dh.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),es.copy(this.origin).sub(Dh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(_c),p=es.dot(this.direction),m=-es.dot(_c),d=es.lengthSq(),M=Math.abs(1-h*h);let x,g,y,T;if(M>0)if(x=h*m-p,g=h*p-m,T=c*M,x>=0)if(g>=-T)if(g<=T){const w=1/M;x*=w,g*=w,y=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),y=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),y=-x*x+g*(g+2*m)+d;else g<=-T?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+d):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),y=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Dh).addScaledVector(_c,g),y}intersectSphere(e,i){ma.subVectors(e.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,p,m;const d=1/this.direction.x,M=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),M>=0?(c=(e.min.y-g.y)*M,h=(e.max.y-g.y)*M):(c=(e.max.y-g.y)*M,h=(e.min.y-g.y)*M),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,i,s,l,c){Uh.subVectors(i,e),vc.subVectors(s,e),Nh.crossVectors(Uh,vc);let h=this.direction.dot(Nh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;es.subVectors(this.origin,e);const m=p*this.direction.dot(vc.crossVectors(es,vc));if(m<0)return null;const d=p*this.direction.dot(Uh.cross(es));if(d<0||m+d>h)return null;const M=-p*es.dot(Nh);return M<0?null:this.at(M/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nr extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=W_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const c_=new sn,ws=new dv,xc=new Yc,u_=new $,Sc=new $,Mc=new $,yc=new $,Lh=new $,Ec=new $,f_=new $,bc=new $;class Pn extends Hn{constructor(e=new Zn,i=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Ec.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const M=p[m],x=c[m];M!==0&&(Lh.fromBufferAttribute(x,e),h?Ec.addScaledVector(Lh,M):Ec.addScaledVector(Lh.sub(i),M))}i.add(Ec)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(c),ws.copy(e.ray).recast(e.near),!(xc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(xc,u_)===null||ws.origin.distanceToSquared(u_)>(e.far-e.near)**2))&&(c_.copy(c).invert(),ws.copy(e.ray).applyMatrix4(c_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ws)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,M=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const S=g[T],v=h[S.materialIndex],C=Math.max(S.start,y.start),N=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let U=C,V=N;U<V;U+=3){const L=p.getX(U),F=p.getX(U+1),b=p.getX(U+2);l=Tc(this,v,e,s,d,M,x,L,F,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let S=T,v=w;S<v;S+=3){const C=p.getX(S),N=p.getX(S+1),U=p.getX(S+2);l=Tc(this,h,e,s,d,M,x,C,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const S=g[T],v=h[S.materialIndex],C=Math.max(S.start,y.start),N=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let U=C,V=N;U<V;U+=3){const L=U,F=U+1,b=U+2;l=Tc(this,v,e,s,d,M,x,L,F,b),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let S=T,v=w;S<v;S+=3){const C=S,N=S+1,U=S+2;l=Tc(this,h,e,s,d,M,x,C,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function QM(o,e,i,s,l,c,h,p){let m;if(e.side===Yn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,e.side===rs,p),m===null)return null;bc.copy(p),bc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(bc);return d<i.near||d>i.far?null:{distance:d,point:bc.clone(),object:o}}function Tc(o,e,i,s,l,c,h,p,m,d){o.getVertexPosition(p,Sc),o.getVertexPosition(m,Mc),o.getVertexPosition(d,yc);const M=QM(o,e,i,s,Sc,Mc,yc,f_);if(M){const x=new $;wi.getBarycoord(f_,Sc,Mc,yc,x),l&&(M.uv=wi.getInterpolatedAttribute(l,p,m,d,x,new be)),c&&(M.uv1=wi.getInterpolatedAttribute(c,p,m,d,x,new be)),h&&(M.normal=wi.getInterpolatedAttribute(h,p,m,d,x,new $),M.normal.dot(s.direction)>0&&M.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new $,materialIndex:0};wi.getNormal(Sc,Mc,yc,g.normal),M.face=g,M.barycoord=x}return M}class JM extends zn{constructor(e=null,i=1,s=1,l,c,h,p,m,d=wn,M=wn,x,g){super(null,h,p,m,d,M,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=new $,$M=new $,ty=new se;class Us{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Oh.subVectors(s,i).cross($M.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Oh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||ty.getNormalMatrix(e),l=this.coplanarPoint(Oh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Yc,ey=new be(.5,.5),Ac=new $;class qd{constructor(e=new Us,i=new Us,s=new Us,l=new Us,c=new Us,h=new Us){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Vi,s=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],M=c[4],x=c[5],g=c[6],y=c[7],T=c[8],w=c[9],S=c[10],v=c[11],C=c[12],N=c[13],U=c[14],V=c[15];if(l[0].setComponents(d-h,y-M,v-T,V-C).normalize(),l[1].setComponents(d+h,y+M,v+T,V+C).normalize(),l[2].setComponents(d+p,y+x,v+w,V+N).normalize(),l[3].setComponents(d-p,y-x,v-w,V-N).normalize(),s)l[4].setComponents(m,g,S,U).normalize(),l[5].setComponents(d-m,y-g,v-S,V-U).normalize();else if(l[4].setComponents(d-m,y-g,v-S,V-U).normalize(),i===Vi)l[5].setComponents(d+m,y+g,v+S,V+U).normalize();else if(i===Ko)l[5].setComponents(m,g,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const i=ey.distanceTo(e.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ac.x=l.normal.x>0?e.max.x:e.min.x,Ac.y=l.normal.y>0?e.max.y:e.min.y,Ac.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const h_=new sn,Nd=new dv,Rc=new Yc,Cc=new $;class ny extends Hn{constructor(e=new Zn,i=new pv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,e.ray.intersectsSphere(Rc)===!1)return;h_.copy(l).invert(),Nd.copy(e.ray).applyMatrix4(h_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,x=s.attributes.position;if(d!==null){const g=Math.max(0,h.start),y=Math.min(d.count,h.start+h.count);for(let T=g,w=y;T<w;T++){const S=d.getX(T);Cc.fromBufferAttribute(x,S),d_(Cc,S,m,l,e,i,this)}}else{const g=Math.max(0,h.start),y=Math.min(x.count,h.start+h.count);for(let T=g,w=y;T<w;T++)Cc.fromBufferAttribute(x,T),d_(Cc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function d_(o,e,i,s,l,c,h){const p=Nd.distanceSqToPoint(o);if(p<i){const m=new $;Nd.closestPointToPoint(o,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class mv extends zn{constructor(e=[],i=Is,s,l,c,h,p,m,d,M){super(e,i,s,l,c,h,p,m,d,M),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fr extends zn{constructor(e,i,s=Wi,l,c,h,p=wn,m=wn,d,M=Ma,x=1){if(M!==Ma&&M!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,h,p,m,M,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class iy extends Fr{constructor(e,i=Wi,s=Is,l,c,h=wn,p=wn,m,d=Ma){const M={width:e,height:e,depth:1},x=[M,M,M,M,M,M];super(e,e,i,s,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gv extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gr extends Zn{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],M=[],x=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new yn(d,3)),this.setAttribute("normal",new yn(M,3)),this.setAttribute("uv",new yn(x,2));function T(w,S,v,C,N,U,V,L,F,b,P){const W=U/F,H=V/b,K=U/2,ut=V/2,mt=L/2,q=F+1,O=b+1;let B=0,ot=0;const gt=new $;for(let yt=0;yt<O;yt++){const I=yt*H-ut;for(let Q=0;Q<q;Q++){const St=Q*W-K;gt[w]=St*C,gt[S]=I*N,gt[v]=mt,d.push(gt.x,gt.y,gt.z),gt[w]=0,gt[S]=0,gt[v]=L>0?1:-1,M.push(gt.x,gt.y,gt.z),x.push(Q/F),x.push(1-yt/b),B+=1}}for(let yt=0;yt<b;yt++)for(let I=0;I<F;I++){const Q=g+I+q*yt,St=g+I+q*(yt+1),At=g+(I+1)+q*(yt+1),ht=g+(I+1)+q*yt;m.push(Q,St,ht),m.push(St,At,ht),ot+=6}p.addGroup(y,ot,P),y+=ot,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yd extends Zn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],h=[];p(l),d(s),M(),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(c.slice(),3)),this.setAttribute("uv",new yn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(C){const N=new $,U=new $,V=new $;for(let L=0;L<i.length;L+=3)y(i[L+0],N),y(i[L+1],U),y(i[L+2],V),m(N,U,V,C)}function m(C,N,U,V){const L=V+1,F=[];for(let b=0;b<=L;b++){F[b]=[];const P=C.clone().lerp(U,b/L),W=N.clone().lerp(U,b/L),H=L-b;for(let K=0;K<=H;K++)K===0&&b===L?F[b][K]=P:F[b][K]=P.clone().lerp(W,K/H)}for(let b=0;b<L;b++)for(let P=0;P<2*(L-b)-1;P++){const W=Math.floor(P/2);P%2===0?(g(F[b][W+1]),g(F[b+1][W]),g(F[b][W])):(g(F[b][W+1]),g(F[b+1][W+1]),g(F[b+1][W]))}}function d(C){const N=new $;for(let U=0;U<c.length;U+=3)N.x=c[U+0],N.y=c[U+1],N.z=c[U+2],N.normalize().multiplyScalar(C),c[U+0]=N.x,c[U+1]=N.y,c[U+2]=N.z}function M(){const C=new $;for(let N=0;N<c.length;N+=3){C.x=c[N+0],C.y=c[N+1],C.z=c[N+2];const U=S(C)/2/Math.PI+.5,V=v(C)/Math.PI+.5;h.push(U,1-V)}T(),x()}function x(){for(let C=0;C<h.length;C+=6){const N=h[C+0],U=h[C+2],V=h[C+4],L=Math.max(N,U,V),F=Math.min(N,U,V);L>.9&&F<.1&&(N<.2&&(h[C+0]+=1),U<.2&&(h[C+2]+=1),V<.2&&(h[C+4]+=1))}}function g(C){c.push(C.x,C.y,C.z)}function y(C,N){const U=C*3;N.x=e[U+0],N.y=e[U+1],N.z=e[U+2]}function T(){const C=new $,N=new $,U=new $,V=new $,L=new be,F=new be,b=new be;for(let P=0,W=0;P<c.length;P+=9,W+=6){C.set(c[P+0],c[P+1],c[P+2]),N.set(c[P+3],c[P+4],c[P+5]),U.set(c[P+6],c[P+7],c[P+8]),L.set(h[W+0],h[W+1]),F.set(h[W+2],h[W+3]),b.set(h[W+4],h[W+5]),V.copy(C).add(N).add(U).divideScalar(3);const H=S(V);w(L,W+0,C,H),w(F,W+2,N,H),w(b,W+4,U,H)}}function w(C,N,U,V){V<0&&C.x===1&&(h[N]=C.x-1),U.x===0&&U.z===0&&(h[N]=V/2/Math.PI+.5)}function S(C){return Math.atan2(C.z,-C.x)}function v(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yd(e.vertices,e.indices,e.radius,e.detail)}}class Wc extends Yd{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Wc(e.radius,e.detail)}}class Zc extends Zn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,M=m+1,x=e/p,g=i/m,y=[],T=[],w=[],S=[];for(let v=0;v<M;v++){const C=v*g-h;for(let N=0;N<d;N++){const U=N*x-c;T.push(U,-C,0),w.push(0,0,1),S.push(N/p),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<p;C++){const N=C+d*v,U=C+d*(v+1),V=C+1+d*(v+1),L=C+1+d*v;y.push(N,U,L),y.push(U,V,L)}this.setIndex(y),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(w,3)),this.setAttribute("uv",new yn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zd extends Zn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const M=[],x=new $,g=new $,y=[],T=[],w=[],S=[];for(let v=0;v<=s;v++){const C=[],N=v/s;let U=0;v===0&&h===0?U=.5/i:v===s&&m===Math.PI&&(U=-.5/i);for(let V=0;V<=i;V++){const L=V/i;x.x=-e*Math.cos(l+L*c)*Math.sin(h+N*p),x.y=e*Math.cos(h+N*p),x.z=e*Math.sin(l+L*c)*Math.sin(h+N*p),T.push(x.x,x.y,x.z),g.copy(x).normalize(),w.push(g.x,g.y,g.z),S.push(L+U,1-N),C.push(d++)}M.push(C)}for(let v=0;v<s;v++)for(let C=0;C<i;C++){const N=M[v][C+1],U=M[v][C],V=M[v+1][C],L=M[v+1][C+1];(v!==0||h>0)&&y.push(N,U,L),(v!==s-1||m<Math.PI)&&y.push(U,V,L)}this.setIndex(y),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(w,3)),this.setAttribute("uv",new yn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qo extends Zn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],d=[],M=[],x=[],g=new $,y=new $,T=new $;for(let w=0;w<=s;w++){const S=h+w/s*p;for(let v=0;v<=l;v++){const C=v/l*c;y.x=(e+i*Math.cos(S))*Math.cos(C),y.y=(e+i*Math.cos(S))*Math.sin(C),y.z=i*Math.sin(S),d.push(y.x,y.y,y.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),T.subVectors(y,g).normalize(),M.push(T.x,T.y,T.z),x.push(v/l),x.push(w/s)}}for(let w=1;w<=s;w++)for(let S=1;S<=l;S++){const v=(l+1)*w+S-1,C=(l+1)*(w-1)+S-1,N=(l+1)*(w-1)+S,U=(l+1)*w+S;m.push(v,C,U),m.push(C,N,U)}this.setIndex(m),this.setAttribute("position",new yn(d,3)),this.setAttribute("normal",new yn(M,3)),this.setAttribute("uv",new yn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Br(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(p_(l))l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(p_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const s=Br(o[i]);for(const l in s)e[l]=s[l]}return e}function p_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function ay(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function _v(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const sy={clone:Br,merge:Bn};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ly extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bc extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cy extends Bc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class uy extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fy extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vv extends Hn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Ph=new sn,m_=new $,g_=new $;class hy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;m_.setFromMatrixPosition(e.matrixWorld),i.position.copy(m_),g_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(g_),i.updateMatrixWorld(),Ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Ko||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wc=new $,Dc=new zr,Fi=new $;class xv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(wc,Dc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new $,__=new be,v_=new be;class ci extends xv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,__,v_),i.subVectors(v_,__)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class dy extends hy{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0}}class x_ extends vv{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new dy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Sv extends xv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,M=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=M*this.view.offsetY,m=p-M*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class py extends vv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Cr=-90,wr=1;class my extends Hn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(Cr,wr,e,i);l.layers=this.layers,this.add(l);const c=new ci(Cr,wr,e,i);c.layers=this.layers,this.add(c);const h=new ci(Cr,wr,e,i);h.layers=this.layers,this.add(h);const p=new ci(Cr,wr,e,i);p.layers=this.layers,this.add(p);const m=new ci(Cr,wr,e,i);m.layers=this.layers,this.add(m);const d=new ci(Cr,wr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ko)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,M]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,M),e.setRenderTarget(x,g,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class gy extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _y{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const tp=class tp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};tp.prototype.isMatrix2=!0;let S_=tp;function M_(o,e,i,s){const l=vy(s);switch(i){case av:return o*e;case rv:return o*e/l.components*l.byteLength;case Gd:return o*e/l.components*l.byteLength;case Fs:return o*e*2/l.components*l.byteLength;case Vd:return o*e*2/l.components*l.byteLength;case sv:return o*e*3/l.components*l.byteLength;case Di:return o*e*4/l.components*l.byteLength;case kd:return o*e*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case td:case nd:return Math.max(o,16)*Math.max(e,8)/4;case $h:case ed:return Math.max(o,8)*Math.max(e,8)/2;case id:case ad:case rd:case od:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case sd:case Hc:case ld:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case hd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case dd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Md:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ed:case bd:case Td:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ad:case Rd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gc:case Cd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vy(o){switch(o){case ui:case tv:return{byteLength:1,components:1};case Yo:case ev:case Sa:return{byteLength:2,components:1};case zd:case Hd:return{byteLength:2,components:4};case Wi:case Bd:case Gi:return{byteLength:4,components:1};case nv:case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);function Mv(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function xy(o){const e=new WeakMap;function i(p,m){const d=p.array,M=p.usage,x=d.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,d,M),p.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const M=m.array,x=m.updateRanges;if(o.bindBuffer(d,p),x.length===0)o.bufferSubData(d,0,M);else{x.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<x.length;y++){const T=x[g],w=x[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,x[g]=w)}x.length=g+1;for(let y=0,T=x.length;y<T;y++){const w=x[y];o.bufferSubData(d,w.start*M.BYTES_PER_ELEMENT,M,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const M=e.get(p);(!M||M.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,My=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,by=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ly=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:Sy,alphahash_pars_fragment:My,alphamap_fragment:yy,alphamap_pars_fragment:Ey,alphatest_fragment:by,alphatest_pars_fragment:Ty,aomap_fragment:Ay,aomap_pars_fragment:Ry,batching_pars_vertex:Cy,batching_vertex:wy,begin_vertex:Dy,beginnormal_vertex:Uy,bsdfs:Ny,iridescence_fragment:Ly,bumpmap_pars_fragment:Oy,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Iy,clipping_planes_pars_vertex:Fy,clipping_planes_vertex:By,color_fragment:zy,color_pars_fragment:Hy,color_pars_vertex:Gy,color_vertex:Vy,common:ky,cube_uv_reflection_fragment:Xy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:jy,displacementmap_vertex:qy,emissivemap_fragment:Yy,emissivemap_pars_fragment:Zy,colorspace_fragment:Ky,colorspace_pars_fragment:Qy,envmap_fragment:Jy,envmap_common_pars_fragment:$y,envmap_pars_fragment:tE,envmap_pars_vertex:eE,envmap_physical_pars_fragment:hE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:aE,fog_fragment:sE,fog_pars_fragment:rE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:dE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:_E,lights_physical_pars_fragment:vE,lights_fragment_begin:xE,lights_fragment_maps:SE,lights_fragment_end:ME,lightprobes_pars_fragment:yE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:RE,map_pars_fragment:CE,map_particle_fragment:wE,map_particle_pars_fragment:DE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:NE,morphinstance_vertex:LE,morphcolor_vertex:OE,morphnormal_vertex:PE,morphtarget_pars_vertex:IE,morphtarget_vertex:FE,normal_fragment_begin:BE,normal_fragment_maps:zE,normal_pars_fragment:HE,normal_pars_vertex:GE,normal_vertex:VE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:jE,iridescence_pars_fragment:qE,opaque_fragment:YE,packing:ZE,premultiplied_alpha_fragment:KE,project_vertex:QE,dithering_fragment:JE,dithering_pars_fragment:$E,roughnessmap_fragment:tb,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:nb,shadowmap_pars_vertex:ib,shadowmap_vertex:ab,shadowmask_pars_fragment:sb,skinbase_vertex:rb,skinning_pars_vertex:ob,skinning_vertex:lb,skinnormal_vertex:cb,specularmap_fragment:ub,specularmap_pars_fragment:fb,tonemapping_fragment:hb,tonemapping_pars_fragment:db,transmission_fragment:pb,transmission_pars_fragment:mb,uv_pars_fragment:gb,uv_pars_vertex:_b,uv_vertex:vb,worldpos_vertex:xb,background_vert:Sb,background_frag:Mb,backgroundCube_vert:yb,backgroundCube_frag:Eb,cube_vert:bb,cube_frag:Tb,depth_vert:Ab,depth_frag:Rb,distance_vert:Cb,distance_frag:wb,equirect_vert:Db,equirect_frag:Ub,linedashed_vert:Nb,linedashed_frag:Lb,meshbasic_vert:Ob,meshbasic_frag:Pb,meshlambert_vert:Ib,meshlambert_frag:Fb,meshmatcap_vert:Bb,meshmatcap_frag:zb,meshnormal_vert:Hb,meshnormal_frag:Gb,meshphong_vert:Vb,meshphong_frag:kb,meshphysical_vert:Xb,meshphysical_frag:Wb,meshtoon_vert:jb,meshtoon_frag:qb,points_vert:Yb,points_frag:Zb,shadow_vert:Kb,shadow_frag:Qb,sprite_vert:Jb,sprite_frag:$b},zt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Hi={basic:{uniforms:Bn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Bn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Bn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Bn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Bn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new de(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Bn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Bn([zt.points,zt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Bn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Bn([zt.common,zt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Bn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Bn([zt.sprite,zt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Bn([zt.common,zt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Bn([zt.lights,zt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Hi.physical={uniforms:Bn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Uc={r:0,b:0,g:0},tT=new sn,yv=new se;yv.set(-1,0,0,0,1,0,0,0,1);function eT(o,e,i,s,l,c){const h=new de(0);let p=l===!0?0:1,m,d,M=null,x=0,g=null;function y(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const U=C.backgroundBlurriness>0;N=e.get(N,U)}return N}function T(C){let N=!1;const U=y(C);U===null?S(h,p):U&&U.isColor&&(S(U,1),N=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(C,N){const U=y(N);U&&(U.isCubeTexture||U.mapping===qc)?(d===void 0&&(d=new Pn(new Gr(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Br(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(V,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=U,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(N.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(yv),d.material.toneMapped=Ee.getTransfer(U.colorSpace)!==Be,(M!==U||x!==U.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,M=U,x=U.version,g=o.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Pn(new Zc(2,2),new ji({name:"BackgroundMaterial",uniforms:Br(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Ee.getTransfer(U.colorSpace)!==Be,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(M!==U||x!==U.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,M=U,x=U.version,g=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function S(C,N){C.getRGB(Uc,_v(o)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,N,c)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,N=1){h.set(C),p=N,S(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,S(h,p)},render:T,addToRenderList:w,dispose:v}}function nT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(H,K,ut,mt,q){let O=!1;const B=x(H,mt,ut,K);c!==B&&(c=B,d(c.object)),O=y(H,mt,ut,q),O&&T(H,mt,ut,q),q!==null&&e.update(q,o.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,U(H,K,ut,mt),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function M(H){return o.deleteVertexArray(H)}function x(H,K,ut,mt){const q=mt.wireframe===!0;let O=s[K.id];O===void 0&&(O={},s[K.id]=O);const B=H.isInstancedMesh===!0?H.id:0;let ot=O[B];ot===void 0&&(ot={},O[B]=ot);let gt=ot[ut.id];gt===void 0&&(gt={},ot[ut.id]=gt);let yt=gt[q];return yt===void 0&&(yt=g(m()),gt[q]=yt),yt}function g(H){const K=[],ut=[],mt=[];for(let q=0;q<i;q++)K[q]=0,ut[q]=0,mt[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ut,attributeDivisors:mt,object:H,attributes:{},index:null}}function y(H,K,ut,mt){const q=c.attributes,O=K.attributes;let B=0;const ot=ut.getAttributes();for(const gt in ot)if(ot[gt].location>=0){const I=q[gt];let Q=O[gt];if(Q===void 0&&(gt==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),gt==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==mt}function T(H,K,ut,mt){const q={},O=K.attributes;let B=0;const ot=ut.getAttributes();for(const gt in ot)if(ot[gt].location>=0){let I=O[gt];I===void 0&&(gt==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),gt==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),q[gt]=Q,B++}c.attributes=q,c.attributesNum=B,c.index=mt}function w(){const H=c.newAttributes;for(let K=0,ut=H.length;K<ut;K++)H[K]=0}function S(H){v(H,0)}function v(H,K){const ut=c.newAttributes,mt=c.enabledAttributes,q=c.attributeDivisors;ut[H]=1,mt[H]===0&&(o.enableVertexAttribArray(H),mt[H]=1),q[H]!==K&&(o.vertexAttribDivisor(H,K),q[H]=K)}function C(){const H=c.newAttributes,K=c.enabledAttributes;for(let ut=0,mt=K.length;ut<mt;ut++)K[ut]!==H[ut]&&(o.disableVertexAttribArray(ut),K[ut]=0)}function N(H,K,ut,mt,q,O,B){B===!0?o.vertexAttribIPointer(H,K,ut,q,O):o.vertexAttribPointer(H,K,ut,mt,q,O)}function U(H,K,ut,mt){w();const q=mt.attributes,O=ut.getAttributes(),B=K.defaultAttributeValues;for(const ot in O){const gt=O[ot];if(gt.location>=0){let yt=q[ot];if(yt===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(yt=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(yt=H.instanceColor)),yt!==void 0){const I=yt.normalized,Q=yt.itemSize,St=e.get(yt);if(St===void 0)continue;const At=St.buffer,ht=St.type,tt=St.bytesPerElement,Mt=ht===o.INT||ht===o.UNSIGNED_INT||yt.gpuType===Bd;if(yt.isInterleavedBufferAttribute){const bt=yt.data,Ht=bt.stride,$t=yt.offset;if(bt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<gt.locationSize;Qt++)v(gt.location+Qt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Qt=0;Qt<gt.locationSize;Qt++)S(gt.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Qt=0;Qt<gt.locationSize;Qt++)N(gt.location+Qt,Q/gt.locationSize,ht,I,Ht*tt,($t+Q/gt.locationSize*Qt)*tt,Mt)}else{if(yt.isInstancedBufferAttribute){for(let bt=0;bt<gt.locationSize;bt++)v(gt.location+bt,yt.meshPerAttribute);H.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let bt=0;bt<gt.locationSize;bt++)S(gt.location+bt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let bt=0;bt<gt.locationSize;bt++)N(gt.location+bt,Q/gt.locationSize,ht,I,Q*tt,Q/gt.locationSize*bt*tt,Mt)}}else if(B!==void 0){const I=B[ot];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(gt.location,I);break;case 3:o.vertexAttrib3fv(gt.location,I);break;case 4:o.vertexAttrib4fv(gt.location,I);break;default:o.vertexAttrib1fv(gt.location,I)}}}}C()}function V(){P();for(const H in s){const K=s[H];for(const ut in K){const mt=K[ut];for(const q in mt){const O=mt[q];for(const B in O)M(O[B].object),delete O[B];delete mt[q]}}delete s[H]}}function L(H){if(s[H.id]===void 0)return;const K=s[H.id];for(const ut in K){const mt=K[ut];for(const q in mt){const O=mt[q];for(const B in O)M(O[B].object),delete O[B];delete mt[q]}}delete s[H.id]}function F(H){for(const K in s){const ut=s[K];for(const mt in ut){const q=ut[mt];if(q[H.id]===void 0)continue;const O=q[H.id];for(const B in O)M(O[B].object),delete O[B];delete q[H.id]}}}function b(H){for(const K in s){const ut=s[K],mt=H.isInstancedMesh===!0?H.id:0,q=ut[mt];if(q!==void 0){for(const O in q){const B=q[O];for(const ot in B)M(B[ot].object),delete B[ot];delete q[O]}delete ut[mt],Object.keys(ut).length===0&&delete s[K]}}}function P(){W(),h=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:W,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:S,disableUnusedAttributes:C}}function iT(o,e,i){let s;function l(m){s=m}function c(m,d){o.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,M){M!==0&&(o.drawArraysInstanced(s,m,d,M),i.update(d,s,M))}function p(m,d,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,M);let g=0;for(let y=0;y<M;y++)g+=d[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function aT(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Di&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const b=F===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ui&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Gi&&!b)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const M=m(d);M!==d&&(ee("WebGLRenderer:",d,"not supported, using",M,"instead."),d=M);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:U,maxSamples:V,samples:L}}function sT(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Us,p=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,M(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=M(x,g,0)},this.setState=function(x,g,y){const T=x.clippingPlanes,w=x.clipIntersection,S=x.clipShadows,v=o.get(x);if(!l||T===null||T.length===0||c&&!S)c?M(null):d();else{const C=c?0:s,N=C*4;let U=v.clippingState||null;m.value=U,U=M(T,g,N,y);for(let V=0;V!==N;++V)U[V]=i[V];v.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function M(x,g,y,T){const w=x!==null?x.length:0;let S=null;if(w!==0){if(S=m.value,T!==!0||S===null){const v=y+w*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(S===null||S.length<v)&&(S=new Float32Array(v));for(let N=0,U=y;N!==w;++N,U+=4)h.copy(x[N]).applyMatrix4(C,p),h.normal.toArray(S,U),S[U+3]=h.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}const ss=4,y_=[.125,.215,.35,.446,.526,.582],Ls=20,rT=256,ko=new Sv,E_=new de;let Ih=null,Fh=0,Bh=0,zh=!1;const oT=new $;class b_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=oT}=c;Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Fh,Bh),this._renderer.xr.enabled=zh,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Is||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Sa,format:Di,colorSpace:Vc,depthBuffer:!1},l=T_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lT(c)),this._blurMaterial=uT(c,e,i),this._ggxMaterial=cT(c,e,i)}return l}_compileMaterial(e){const i=new Pn(new Zn,e);this._renderer.compile(i,ko)}_sceneToCubeUV(e,i,s,l,c){const m=new ci(90,1,i,s),d=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(E_),x.toneMapping=ki,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new Gr,new Nr({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let v=!1;const C=e.background;C?C.isColor&&(S.color.copy(C),e.background=null,v=!0):(S.color.copy(E_),v=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+M[N],c.y,c.z)):U===1?(m.up.set(0,0,d[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+M[N],c.z)):(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+M[N]));const V=this._cubeSize;Dr(l,U*V,N>2?V:0,V,V),x.setRenderTarget(l),v&&x.render(w,m),x.render(e,m)}x.toneMapping=y,x.autoClear=g,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Is||e.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Dr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,ko)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),M=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-M*M),g=0+d*1.25,y=x*g,{_lodMax:T}=this,w=this._sizeLods[s],S=3*w*(s>T-ss?s-T+ss:0),v=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=T-i,Dr(c,S,v,3*w,2*w),l.setRenderTarget(c),l.render(p,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Dr(e,S,v,3*w,2*w),l.setRenderTarget(e),l.render(p,ko)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");const M=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ls-1),w=c/T,S=isFinite(c)?1+Math.floor(M*w):Ls;S>Ls&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ls}`);const v=[];let C=0;for(let F=0;F<Ls;++F){const b=F/w,P=Math.exp(-b*b/2);v.push(P),F===0?C+=P:F<S&&(C+=2*P)}for(let F=0;F<v.length;F++)v[F]=v[F]/C;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=v,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=T,g.mipInt.value=N-s;const U=this._sizeLods[l],V=3*U*(l>N-ss?l-N+ss:0),L=4*(this._cubeSize-U);Dr(i,V,L,3*U,2*U),m.setRenderTarget(i),m.render(x,ko)}}function lT(o){const e=[],i=[],s=[];let l=o;const c=o-ss+1+y_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>o-ss?m=y_[h-o+ss-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),M=-d,x=1+d,g=[M,M,x,M,x,x,M,M,x,x,M,x],y=6,T=6,w=3,S=2,v=1,C=new Float32Array(w*T*y),N=new Float32Array(S*T*y),U=new Float32Array(v*T*y);for(let L=0;L<y;L++){const F=L%3*2/3-1,b=L>2?0:-1,P=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];C.set(P,w*T*L),N.set(g,S*T*L);const W=[L,L,L,L,L,L];U.set(W,v*T*L)}const V=new Zn;V.setAttribute("position",new Ui(C,w)),V.setAttribute("uv",new Ui(N,S)),V.setAttribute("faceIndex",new Ui(U,v)),s.push(new Pn(V,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function T_(o,e,i){const s=new Xi(o,e,i);return s.texture.mapping=qc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function cT(o,e,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function uT(o,e,i){const s=new Float32Array(Ls),l=new $(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function A_(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function R_(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ev extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new mv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Gr(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:va});c.uniforms.tEquirect.value=i;const h=new Pn(l,c),p=i.minFilter;return i.minFilter===Os&&(i.minFilter=In),new my(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}function fT(o){let e=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===lh||y===ch)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Ev(T.height);return w.fromEquirectangularTexture(o,g),e.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===lh||y===ch,w=y===Is||y===Ir;if(T||w){let S=i.get(g);const v=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new b_(o)),S=T?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const C=g.image;return T&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new b_(o)),S=T?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",M),S.texture):null}}}return g}function p(g,y){return y===lh?g.mapping=Is:y===ch&&(g.mapping=Ir),g}function m(g){let y=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&y++;return y===T}function d(g){const y=g.target;y.removeEventListener("dispose",d);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function M(g){const y=g.target;y.removeEventListener("dispose",M);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function hT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Dd("WebGLRenderer: "+s+" extension not supported."),l}}}function dT(o,e,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(e.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)e.update(g[y],o.ARRAY_BUFFER)}function d(x){const g=[],y=x.index,T=x.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let N=0,U=C.length;N<U;N+=3){const V=C[N+0],L=C[N+1],F=C[N+2];g.push(V,L,L,F,F,V)}}else{const C=T.array;w=T.version;for(let N=0,U=C.length/3-1;N<U;N+=3){const V=N+0,L=N+1,F=N+2;g.push(V,L,L,F,F,V)}}const S=new(T.count>=65535?hv:fv)(g,1);S.version=w;const v=c.get(x);v&&e.remove(v),c.set(x,S)}function M(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:M}}function pT(o,e,i){let s;function l(x){s=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,g){o.drawElements(s,g,c,x*h),i.update(g,s,1)}function d(x,g,y){y!==0&&(o.drawElementsInstanced(s,g,c,x*h,y),i.update(g,s,y))}function M(x,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,y);let w=0;for(let S=0;S<y;S++)w+=g[S];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=M}function mT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Te("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function gT(o,e,i){const s=new WeakMap,l=new an;function c(h,p,m){const d=h.morphTargetInfluences,M=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=M!==void 0?M.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let W=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",W)};var y=W;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let U=0;T===!0&&(U=1),w===!0&&(U=2),S===!0&&(U=3);let V=p.attributes.position.count*U,L=1;V>e.maxTextureSize&&(L=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*L*4*x),b=new lv(F,V,L,x);b.type=Gi,b.needsUpdate=!0;const P=U*4;for(let H=0;H<x;H++){const K=v[H],ut=C[H],mt=N[H],q=V*L*4*H;for(let O=0;O<K.count;O++){const B=O*P;T===!0&&(l.fromBufferAttribute(K,O),F[q+B+0]=l.x,F[q+B+1]=l.y,F[q+B+2]=l.z,F[q+B+3]=0),w===!0&&(l.fromBufferAttribute(ut,O),F[q+B+4]=l.x,F[q+B+5]=l.y,F[q+B+6]=l.z,F[q+B+7]=0),S===!0&&(l.fromBufferAttribute(mt,O),F[q+B+8]=l.x,F[q+B+9]=l.y,F[q+B+10]=l.z,F[q+B+11]=mt.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new be(V,L)},s.set(p,g),p.addEventListener("dispose",W)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let S=0;S<d.length;S++)T+=d[S];const w=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function _T(o,e,i,s,l){let c=new WeakMap;function h(d){const M=l.render.frame,x=d.geometry,g=e.get(d,x);if(c.get(g)!==M&&(e.update(g),c.set(g,M)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==M&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,M))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==M&&(y.update(),c.set(y,M))}return g}function p(){c=new WeakMap}function m(d){const M=d.target;M.removeEventListener("dispose",m),s.releaseStatesOfObject(M),i.remove(M.instanceMatrix),M.instanceColor!==null&&i.remove(M.instanceColor)}return{update:h,dispose:p}}const vT={[j_]:"LINEAR_TONE_MAPPING",[q_]:"REINHARD_TONE_MAPPING",[Y_]:"CINEON_TONE_MAPPING",[Z_]:"ACES_FILMIC_TONE_MAPPING",[Q_]:"AGX_TONE_MAPPING",[J_]:"NEUTRAL_TONE_MAPPING",[K_]:"CUSTOM_TONE_MAPPING"};function xT(o,e,i,s,l){const c=new Xi(e,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Fr(e,i):void 0}),h=new Xi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),p=new Zn;p.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new yn([0,2,0,0,2,0],2));const m=new ly({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Pn(p,m),M=new Sv(-1,1,1,-1,0,1);let x=null,g=null,y=!1,T,w=null,S=[],v=!1;this.setSize=function(C,N){c.setSize(C,N),h.setSize(C,N);for(let U=0;U<S.length;U++){const V=S[U];V.setSize&&V.setSize(C,N)}},this.setEffects=function(C){S=C,v=S.length>0&&S[0].isRenderPass===!0;const N=c.width,U=c.height;for(let V=0;V<S.length;V++){const L=S[V];L.setSize&&L.setSize(N,U)}},this.begin=function(C,N){if(y||C.toneMapping===ki&&S.length===0)return!1;if(w=N,N!==null){const U=N.width,V=N.height;(c.width!==U||c.height!==V)&&this.setSize(U,V)}return v===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return v},this.end=function(C,N){C.toneMapping=T,y=!0;let U=c,V=h;for(let L=0;L<S.length;L++){const F=S[L];if(F.enabled!==!1&&(F.render(C,V,U,N),F.needsSwap!==!1)){const b=U;U=V,V=b}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},Ee.getTransfer(x)===Be&&(m.defines.SRGB_TRANSFER="");const L=vT[g];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(w),C.render(d,M),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const bv=new zn,Ld=new Fr(1,1),Tv=new lv,Av=new BM,Rv=new mv,C_=[],w_=[],D_=new Float32Array(16),U_=new Float32Array(9),N_=new Float32Array(4);function Vr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=C_[l];if(c===void 0&&(c=new Float32Array(l),C_[l]=c),e!==0){s.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(c,p)}return c}function vn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Qc(o,e){let i=w_[e];i===void 0&&(i=new Int32Array(e),w_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function ST(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function bT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;N_.set(s),o.uniformMatrix2fv(this.addr,!1,N_),xn(i,s)}}function TT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;U_.set(s),o.uniformMatrix3fv(this.addr,!1,U_),xn(i,s)}}function AT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;D_.set(s),o.uniformMatrix4fv(this.addr,!1,D_),xn(i,s)}}function RT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function UT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function PT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Ld.compareFunction=i.isReversedDepthBuffer()?Wd:Xd,c=Ld):c=bv,i.setTexture2D(e||c,l)}function IT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Av,l)}function FT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Rv,l)}function BT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Tv,l)}function zT(o){switch(o){case 5126:return ST;case 35664:return MT;case 35665:return yT;case 35666:return ET;case 35674:return bT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return NT;case 36295:return LT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(o,e){o.uniform1fv(this.addr,e)}function GT(o,e){const i=Vr(e,this.size,2);o.uniform2fv(this.addr,i)}function VT(o,e){const i=Vr(e,this.size,3);o.uniform3fv(this.addr,i)}function kT(o,e){const i=Vr(e,this.size,4);o.uniform4fv(this.addr,i)}function XT(o,e){const i=Vr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function WT(o,e){const i=Vr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function jT(o,e){const i=Vr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function qT(o,e){o.uniform1iv(this.addr,e)}function YT(o,e){o.uniform2iv(this.addr,e)}function ZT(o,e){o.uniform3iv(this.addr,e)}function KT(o,e){o.uniform4iv(this.addr,e)}function QT(o,e){o.uniform1uiv(this.addr,e)}function JT(o,e){o.uniform2uiv(this.addr,e)}function $T(o,e){o.uniform3uiv(this.addr,e)}function t1(o,e){o.uniform4uiv(this.addr,e)}function e1(o,e,i){const s=this.cache,l=e.length,c=Qc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Ld:h=bv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function n1(o,e,i){const s=this.cache,l=e.length,c=Qc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Av,c[h])}function i1(o,e,i){const s=this.cache,l=e.length,c=Qc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Rv,c[h])}function a1(o,e,i){const s=this.cache,l=e.length,c=Qc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Tv,c[h])}function s1(o){switch(o){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return WT;case 35676:return jT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return a1}}class r1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=zT(i.type)}}class o1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=s1(i.type)}}class l1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function L_(o,e){o.seq.push(e),o.map[e.id]=e}function c1(o,e,i){const s=o.name,l=s.length;for(Hh.lastIndex=0;;){const c=Hh.exec(s),h=Hh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){L_(i,d===void 0?new r1(p,o,e):new o1(p,o,e));break}else{let x=i.map[p];x===void 0&&(x=new l1(p),L_(i,x)),i=x}}}class zc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);c1(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function O_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const u1=37297;let f1=0;function h1(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const P_=new se;function d1(o){Ee._getMatrix(P_,Ee.workingColorSpace,o);const e=`mat3( ${P_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case kc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function I_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+h1(o.getShaderSource(e),p)}else return c}function p1(o,e){const i=d1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const m1={[j_]:"Linear",[q_]:"Reinhard",[Y_]:"Cineon",[Z_]:"ACESFilmic",[Q_]:"AgX",[J_]:"Neutral",[K_]:"Custom"};function g1(o,e){const i=m1[e];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new $;function _1(){Ee.getLuminanceCoefficients(Nc);const o=Nc.x.toFixed(4),e=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function x1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function S1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function jo(o){return o!==""}function F_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(o){return o.replace(M1,E1)}const y1=new Map;function E1(o,e){let i=ue[e];if(i===void 0){const s=y1.get(e);if(s!==void 0)i=ue[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Od(i)}const b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z_(o){return o.replace(b1,T1)}function T1(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function H_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const A1={[Lc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function R1(o){return A1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C1={[Is]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function w1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":C1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const D1={[Ir]:"ENVMAP_MODE_REFRACTION"};function U1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":D1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N1={[W_]:"ENVMAP_BLENDING_MULTIPLY",[_M]:"ENVMAP_BLENDING_MIX",[vM]:"ENVMAP_BLENDING_ADD"};function L1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":N1[o.combine]||"ENVMAP_BLENDING_NONE"}function O1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function P1(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=R1(i),d=w1(i),M=U1(i),x=L1(i),g=O1(i),y=v1(i),T=x1(c),w=l.createProgram();let S,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),v.length>0&&(v+=`
`)):(S=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+M:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),v=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+M:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ue.tonemapping_pars_fragment:"",i.toneMapping!==ki?g1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,p1("linearToOutputTexel",i.outputColorSpace),_1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),h=Od(h),h=F_(h,i),h=B_(h,i),p=Od(p),p=F_(p,i),p=B_(p,i),h=z_(h),p=z_(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===Z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=C+S+h,U=C+v+p,V=O_(l,l.VERTEX_SHADER,N),L=O_(l,l.FRAGMENT_SHADER,U);l.attachShader(w,V),l.attachShader(w,L),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(H){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",ut=l.getShaderInfoLog(V)||"",mt=l.getShaderInfoLog(L)||"",q=K.trim(),O=ut.trim(),B=mt.trim();let ot=!0,gt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,V,L);else{const yt=I_(l,V,"vertex"),I=I_(l,L,"fragment");Te("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+yt+`
`+I)}else q!==""?ee("WebGLProgram: Program Info Log:",q):(O===""||B==="")&&(gt=!1);gt&&(H.diagnostics={runnable:ot,programLog:q,vertexShader:{log:O,prefix:S},fragmentShader:{log:B,prefix:v}})}l.deleteShader(V),l.deleteShader(L),b=new zc(l,w),P=S1(l,w)}let b;this.getUniforms=function(){return b===void 0&&F(this),b};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(w,u1)),W},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=f1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=L,this}let I1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new B1(e),i.set(e,s)),s}}class B1{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}}function z1(o){return o===Fs||o===Hc||o===Gc}function H1(o,e,i,s,l,c){const h=new cv,p=new F1,m=new Set,d=[],M=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,P,W,H,K,ut){const mt=H.fog,q=K.geometry,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ot=e.get(b.envMap||O,B),gt=ot&&ot.mapping===qc?ot.image.height:null,yt=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&ee("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const I=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Q=I!==void 0?I.length:0;let St=0;q.morphAttributes.position!==void 0&&(St=1),q.morphAttributes.normal!==void 0&&(St=2),q.morphAttributes.color!==void 0&&(St=3);let At,ht,tt,Mt;if(yt){const te=Hi[yt];At=te.vertexShader,ht=te.fragmentShader}else At=b.vertexShader,ht=b.fragmentShader,p.update(b),tt=p.getVertexShaderID(b),Mt=p.getFragmentShaderID(b);const bt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),$t=K.isInstancedMesh===!0,Qt=K.isBatchedMesh===!0,ke=!!b.map,fe=!!b.matcap,ve=!!ot,Ne=!!b.aoMap,le=!!b.lightMap,rn=!!b.bumpMap,je=!!b.normalMap,En=!!b.displacementMap,j=!!b.emissiveMap,$e=!!b.metalnessMap,he=!!b.roughnessMap,ze=b.anisotropy>0,Ct=b.clearcoat>0,Ze=b.dispersion>0,D=b.iridescence>0,E=b.sheen>0,J=b.transmission>0,vt=ze&&!!b.anisotropyMap,Tt=Ct&&!!b.clearcoatMap,wt=Ct&&!!b.clearcoatNormalMap,Lt=Ct&&!!b.clearcoatRoughnessMap,ct=D&&!!b.iridescenceMap,ft=D&&!!b.iridescenceThicknessMap,Ot=E&&!!b.sheenColorMap,Pt=E&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,Dt=!!b.specularColorMap,ne=!!b.specularIntensityMap,ie=J&&!!b.transmissionMap,pe=J&&!!b.thicknessMap,k=!!b.gradientMap,Rt=!!b.alphaMap,pt=b.alphaTest>0,Bt=!!b.alphaHash,Nt=!!b.extensions;let Et=ki;b.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Et=o.toneMapping);const jt={shaderID:yt,shaderType:b.type,shaderName:b.name,vertexShader:At,fragmentShader:ht,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:Mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&K._colorsTexture!==null,instancing:$t,instancingColor:$t&&K.instanceColor!==null,instancingMorph:$t&&K.morphTexture!==null,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:fe,envMap:ve,envMapMode:ve&&ot.mapping,envMapCubeUVHeight:gt,aoMap:Ne,lightMap:le,bumpMap:rn,normalMap:je,displacementMap:En,emissiveMap:j,normalMapObjectSpace:je&&b.normalMapType===MM,normalMapTangentSpace:je&&b.normalMapType===wd,packedNormalMap:je&&b.normalMapType===wd&&z1(b.normalMap.format),metalnessMap:$e,roughnessMap:he,anisotropy:ze,anisotropyMap:vt,clearcoat:Ct,clearcoatMap:Tt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Lt,dispersion:Ze,iridescence:D,iridescenceMap:ct,iridescenceThicknessMap:ft,sheen:E,sheenColorMap:Ot,sheenRoughnessMap:Pt,specularMap:Ut,specularColorMap:Dt,specularIntensityMap:ne,transmission:J,transmissionMap:ie,thicknessMap:pe,gradientMap:k,opaque:b.transparent===!1&&b.blending===Lr&&b.alphaToCoverage===!1,alphaMap:Rt,alphaTest:pt,alphaHash:Bt,combine:b.combine,mapUv:ke&&T(b.map.channel),aoMapUv:Ne&&T(b.aoMap.channel),lightMapUv:le&&T(b.lightMap.channel),bumpMapUv:rn&&T(b.bumpMap.channel),normalMapUv:je&&T(b.normalMap.channel),displacementMapUv:En&&T(b.displacementMap.channel),emissiveMapUv:j&&T(b.emissiveMap.channel),metalnessMapUv:$e&&T(b.metalnessMap.channel),roughnessMapUv:he&&T(b.roughnessMap.channel),anisotropyMapUv:vt&&T(b.anisotropyMap.channel),clearcoatMapUv:Tt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&T(b.sheenRoughnessMap.channel),specularMapUv:Ut&&T(b.specularMap.channel),specularColorMapUv:Dt&&T(b.specularColorMap.channel),specularIntensityMapUv:ne&&T(b.specularIntensityMap.channel),transmissionMapUv:ie&&T(b.transmissionMap.channel),thicknessMapUv:pe&&T(b.thicknessMap.channel),alphaMapUv:Rt&&T(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(je||ze),vertexNormals:!!q.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!q.attributes.uv&&(ke||Rt),fog:!!mt,useFog:b.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||q.attributes.normal===void 0&&je===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ht,skinning:K.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:St,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&W.length>0,shadowMapType:o.shadowMap.type,toneMapping:Et,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&Ee.getTransfer(b.map.colorSpace)===Be,decodeVideoTextureEmissive:j&&b.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(b.emissiveMap.colorSpace)===Be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ga,flipSided:b.side===Yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Nt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&b.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function S(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)P.push(W),P.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(v(P,b),C(P,b),P.push(o.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function v(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function C(b,P){h.disableAll(),P.instancing&&h.enable(0),P.instancingColor&&h.enable(1),P.instancingMorph&&h.enable(2),P.matcap&&h.enable(3),P.envMap&&h.enable(4),P.normalMapObjectSpace&&h.enable(5),P.normalMapTangentSpace&&h.enable(6),P.clearcoat&&h.enable(7),P.iridescence&&h.enable(8),P.alphaTest&&h.enable(9),P.vertexColors&&h.enable(10),P.vertexAlphas&&h.enable(11),P.vertexUv1s&&h.enable(12),P.vertexUv2s&&h.enable(13),P.vertexUv3s&&h.enable(14),P.vertexTangents&&h.enable(15),P.anisotropy&&h.enable(16),P.alphaHash&&h.enable(17),P.batching&&h.enable(18),P.dispersion&&h.enable(19),P.batchingColor&&h.enable(20),P.gradientMap&&h.enable(21),P.packedNormalMap&&h.enable(22),P.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),P.fog&&h.enable(0),P.useFog&&h.enable(1),P.flatShading&&h.enable(2),P.logarithmicDepthBuffer&&h.enable(3),P.reversedDepthBuffer&&h.enable(4),P.skinning&&h.enable(5),P.morphTargets&&h.enable(6),P.morphNormals&&h.enable(7),P.morphColors&&h.enable(8),P.premultipliedAlpha&&h.enable(9),P.shadowMapEnabled&&h.enable(10),P.doubleSided&&h.enable(11),P.flipSided&&h.enable(12),P.useDepthPacking&&h.enable(13),P.dithering&&h.enable(14),P.transmission&&h.enable(15),P.sheen&&h.enable(16),P.opaque&&h.enable(17),P.pointsUvs&&h.enable(18),P.decodeVideoTexture&&h.enable(19),P.decodeVideoTextureEmissive&&h.enable(20),P.alphaToCoverage&&h.enable(21),P.numLightProbeGrids>0&&h.enable(22),b.push(h.mask)}function N(b){const P=y[b.type];let W;if(P){const H=Hi[P];W=sy.clone(H.uniforms)}else W=b.uniforms;return W}function U(b,P){let W=M.get(P);return W!==void 0?++W.usedTimes:(W=new P1(o,P,b,l),d.push(W),M.set(P,W)),W}function V(b){if(--b.usedTimes===0){const P=d.indexOf(b);d[P]=d[d.length-1],d.pop(),M.delete(b.cacheKey),b.destroy()}}function L(b){p.remove(b)}function F(){p.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:N,acquireProgram:U,releaseProgram:V,releaseShaderCache:L,programs:d,dispose:F}}function G1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function V1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function G_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function V_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,T,w,S,v){let C=o[e];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:S,group:v},o[e]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=S,C.group=v),e++,C}function m(g,y,T,w,S,v){const C=p(g,y,T,w,S,v);T.transmission>0?s.push(C):T.transparent===!0?l.push(C):i.push(C)}function d(g,y,T,w,S,v){const C=p(g,y,T,w,S,v);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function M(g,y){i.length>1&&i.sort(g||V1),s.length>1&&s.sort(y||G_),l.length>1&&l.sort(y||G_)}function x(){for(let g=e,y=o.length;g<y;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:M}}function k1(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new V_,o.set(s,[h])):l>=c.length?(h=new V_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function X1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new de};break;case"SpotLight":i={position:new $,direction:new $,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function W1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let j1=0;function q1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Y1(o){const e=new X1,i=W1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new $);const l=new $,c=new sn,h=new sn;function p(d){let M=0,x=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let y=0,T=0,w=0,S=0,v=0,C=0,N=0,U=0,V=0,L=0,F=0;d.sort(q1);for(let P=0,W=d.length;P<W;P++){const H=d[P],K=H.color,ut=H.intensity,mt=H.distance;let q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Fs?q=H.shadow.map.texture:q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)M+=K.r*ut,x+=K.g*ut,g+=K.b*ut;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],ut);F++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,ot=i.get(H);ot.shadowIntensity=B.intensity,ot.shadowBias=B.bias,ot.shadowNormalBias=B.normalBias,ot.shadowRadius=B.radius,ot.shadowMapSize=B.mapSize,s.directionalShadow[y]=ot,s.directionalShadowMap[y]=q,s.directionalShadowMatrix[y]=H.shadow.matrix,C++}s.directional[y]=O,y++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(K).multiplyScalar(ut),O.distance=mt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[w]=O;const B=H.shadow;if(H.map&&(s.spotLightMap[V]=H.map,V++,B.updateMatrices(H),H.castShadow&&L++),s.spotLightMatrix[w]=B.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=B.intensity,ot.shadowBias=B.bias,ot.shadowNormalBias=B.normalBias,ot.shadowRadius=B.radius,ot.shadowMapSize=B.mapSize,s.spotShadow[w]=ot,s.spotShadowMap[w]=q,U++}w++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(K).multiplyScalar(ut),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=O,S++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const B=H.shadow,ot=i.get(H);ot.shadowIntensity=B.intensity,ot.shadowBias=B.bias,ot.shadowNormalBias=B.normalBias,ot.shadowRadius=B.radius,ot.shadowMapSize=B.mapSize,ot.shadowCameraNear=B.camera.near,ot.shadowCameraFar=B.camera.far,s.pointShadow[T]=ot,s.pointShadowMap[T]=q,s.pointShadowMatrix[T]=H.shadow.matrix,N++}s.point[T]=O,T++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(ut),O.groundColor.copy(H.groundColor).multiplyScalar(ut),s.hemi[v]=O,v++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=M,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==S||b.hemiLength!==v||b.numDirectionalShadows!==C||b.numPointShadows!==N||b.numSpotShadows!==U||b.numSpotMaps!==V||b.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=S,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+V-L,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=F,b.directionalLength=y,b.pointLength=T,b.spotLength=w,b.rectAreaLength=S,b.hemiLength=v,b.numDirectionalShadows=C,b.numPointShadows=N,b.numSpotShadows=U,b.numSpotMaps=V,b.numLightProbes=F,s.version=j1++)}function m(d,M){let x=0,g=0,y=0,T=0,w=0;const S=M.matrixWorldInverse;for(let v=0,C=d.length;v<C;v++){const N=d[v];if(N.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),x++}else if(N.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),h.identity(),c.copy(N.matrixWorld),c.premultiply(S),h.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),T++}else if(N.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),g++}else if(N.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(S),w++}}}return{setup:p,setupView:m,state:s}}function k_(o){const e=new Y1(o),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function M(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:M,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function Z1(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new k_(o),e.set(l,[p])):c>=h.length?(p=new k_(o),h.push(p)):p=h[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,J1=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],$1=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],X_=new sn,Xo=new $,Gh=new $;function tA(o,e,i){let s=new qd;const l=new be,c=new be,h=new an,p=new uy,m=new fy,d={},M=i.maxTextureSize,x={[rs]:Yn,[Yn]:rs,[ga]:ga},g=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:K1,fragmentShader:Q1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new Zn;T.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Pn(T,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let v=this.type;this.render=function(L,F,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===JS&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lc);const P=o.getRenderTarget(),W=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),K=o.state;K.setBlending(va),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ut=v!==this.type;ut&&F.traverse(function(mt){mt.material&&(Array.isArray(mt.material)?mt.material.forEach(q=>q.needsUpdate=!0):mt.material.needsUpdate=!0)});for(let mt=0,q=L.length;mt<q;mt++){const O=L[mt],B=O.shadow;if(B===void 0){ee("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ot=B.getFrameExtents();l.multiply(ot),c.copy(B.mapSize),(l.x>M||l.y>M)&&(l.x>M&&(c.x=Math.floor(M/ot.x),l.x=c.x*ot.x,B.mapSize.x=c.x),l.y>M&&(c.y=Math.floor(M/ot.y),l.y=c.y*ot.y,B.mapSize.y=c.y));const gt=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=gt,B.map===null||ut===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Wo){if(O.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Xi(l.x,l.y,{format:Fs,type:Sa,minFilter:In,magFilter:In,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new Fr(l.x,l.y,Gi),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Ma,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn}else O.isPointLight?(B.map=new Ev(l.x),B.map.depthTexture=new iy(l.x,Wi)):(B.map=new Xi(l.x,l.y),B.map.depthTexture=new Fr(l.x,l.y,Wi)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Ma,this.type===Lc?(B.map.depthTexture.compareFunction=gt?Wd:Xd,B.map.depthTexture.minFilter=In,B.map.depthTexture.magFilter=In):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn);B.camera.updateProjectionMatrix()}const yt=B.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<yt;I++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,I),o.clear();else{I===0&&(o.setRenderTarget(B.map),o.clear());const Q=B.getViewport(I);h.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),K.viewport(h)}if(O.isPointLight){const Q=B.camera,St=B.matrix,At=O.distance||Q.far;At!==Q.far&&(Q.far=At,Q.updateProjectionMatrix()),Xo.setFromMatrixPosition(O.matrixWorld),Q.position.copy(Xo),Gh.copy(Q.position),Gh.add(J1[I]),Q.up.copy($1[I]),Q.lookAt(Gh),Q.updateMatrixWorld(),St.makeTranslation(-Xo.x,-Xo.y,-Xo.z),X_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(X_,Q.coordinateSystem,Q.reversedDepth)}else B.updateMatrices(O);s=B.getFrustum(),U(F,b,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Wo&&C(B,b),B.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(P,W,H)};function C(L,F){const b=e.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Xi(l.x,l.y,{format:Fs,type:Sa})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(F,null,b,g,w,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(F,null,b,y,w,null)}function N(L,F,b,P){let W=null;const H=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)W=H;else if(W=b.isPointLight===!0?m:p,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=W.uuid,ut=F.uuid;let mt=d[K];mt===void 0&&(mt={},d[K]=mt);let q=mt[ut];q===void 0&&(q=W.clone(),mt[ut]=q,F.addEventListener("dispose",V)),W=q}if(W.visible=F.visible,W.wireframe=F.wireframe,P===Wo?W.side=F.shadowSide!==null?F.shadowSide:F.side:W.side=F.shadowSide!==null?F.shadowSide:x[F.side],W.alphaMap=F.alphaMap,W.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,W.map=F.map,W.clipShadows=F.clipShadows,W.clippingPlanes=F.clippingPlanes,W.clipIntersection=F.clipIntersection,W.displacementMap=F.displacementMap,W.displacementScale=F.displacementScale,W.displacementBias=F.displacementBias,W.wireframeLinewidth=F.wireframeLinewidth,W.linewidth=F.linewidth,b.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const K=o.properties.get(W);K.light=b}return W}function U(L,F,b,P,W){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&W===Wo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const ut=e.update(L),mt=L.material;if(Array.isArray(mt)){const q=ut.groups;for(let O=0,B=q.length;O<B;O++){const ot=q[O],gt=mt[ot.materialIndex];if(gt&&gt.visible){const yt=N(L,gt,P,W);L.onBeforeShadow(o,L,F,b,ut,yt,ot),o.renderBufferDirect(b,null,ut,yt,L,ot),L.onAfterShadow(o,L,F,b,ut,yt,ot)}}}else if(mt.visible){const q=N(L,mt,P,W);L.onBeforeShadow(o,L,F,b,ut,q,null),o.renderBufferDirect(b,null,ut,q,L,null),L.onAfterShadow(o,L,F,b,ut,q,null)}}const K=L.children;for(let ut=0,mt=K.length;ut<mt;ut++)U(K[ut],F,b,P,W)}function V(L){L.target.removeEventListener("dispose",V);for(const b in d){const P=d[b],W=L.target.uuid;W in P&&(P[W].dispose(),delete P[W])}}}function eA(o,e){function i(){let k=!1;const Rt=new an;let pt=null;const Bt=new an(0,0,0,0);return{setMask:function(Nt){pt!==Nt&&!k&&(o.colorMask(Nt,Nt,Nt,Nt),pt=Nt)},setLocked:function(Nt){k=Nt},setClear:function(Nt,Et,jt,te,tn){tn===!0&&(Nt*=te,Et*=te,jt*=te),Rt.set(Nt,Et,jt,te),Bt.equals(Rt)===!1&&(o.clearColor(Nt,Et,jt,te),Bt.copy(Rt))},reset:function(){k=!1,pt=null,Bt.set(-1,0,0,0)}}}function s(){let k=!1,Rt=!1,pt=null,Bt=null,Nt=null;return{setReversed:function(Et){if(Rt!==Et){const jt=e.get("EXT_clip_control");Et?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Et;const te=Nt;Nt=null,this.setClear(te)}},getReversed:function(){return Rt},setTest:function(Et){Et?bt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(Et){pt!==Et&&!k&&(o.depthMask(Et),pt=Et)},setFunc:function(Et){if(Rt&&(Et=UM[Et]),Bt!==Et){switch(Et){case Xh:o.depthFunc(o.NEVER);break;case Wh:o.depthFunc(o.ALWAYS);break;case jh:o.depthFunc(o.LESS);break;case Pr:o.depthFunc(o.LEQUAL);break;case qh:o.depthFunc(o.EQUAL);break;case Yh:o.depthFunc(o.GEQUAL);break;case Zh:o.depthFunc(o.GREATER);break;case Kh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=Et}},setLocked:function(Et){k=Et},setClear:function(Et){Nt!==Et&&(Nt=Et,Rt&&(Et=1-Et),o.clearDepth(Et))},reset:function(){k=!1,pt=null,Bt=null,Nt=null,Rt=!1}}}function l(){let k=!1,Rt=null,pt=null,Bt=null,Nt=null,Et=null,jt=null,te=null,tn=null;return{setTest:function(we){k||(we?bt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(we){Rt!==we&&!k&&(o.stencilMask(we),Rt=we)},setFunc:function(we,fi,Kn){(pt!==we||Bt!==fi||Nt!==Kn)&&(o.stencilFunc(we,fi,Kn),pt=we,Bt=fi,Nt=Kn)},setOp:function(we,fi,Kn){(Et!==we||jt!==fi||te!==Kn)&&(o.stencilOp(we,fi,Kn),Et=we,jt=fi,te=Kn)},setLocked:function(we){k=we},setClear:function(we){tn!==we&&(o.clearStencil(we),tn=we)},reset:function(){k=!1,Rt=null,pt=null,Bt=null,Nt=null,Et=null,jt=null,te=null,tn=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let M={},x={},g={},y=new WeakMap,T=[],w=null,S=!1,v=null,C=null,N=null,U=null,V=null,L=null,F=null,b=new de(0,0,0),P=0,W=!1,H=null,K=null,ut=null,mt=null,q=null;const O=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,ot=0;const gt=o.getParameter(o.VERSION);gt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(gt)[1]),B=ot>=1):gt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(gt)[1]),B=ot>=2);let yt=null,I={};const Q=o.getParameter(o.SCISSOR_BOX),St=o.getParameter(o.VIEWPORT),At=new an().fromArray(Q),ht=new an().fromArray(St);function tt(k,Rt,pt,Bt){const Nt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(k,Et),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<pt;jt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Nt):o.texImage2D(Rt+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Nt);return Et}const Mt={};Mt[o.TEXTURE_2D]=tt(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=tt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=tt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=tt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),bt(o.DEPTH_TEST),h.setFunc(Pr),rn(!1),je(k0),bt(o.CULL_FACE),Ne(va);function bt(k){M[k]!==!0&&(o.enable(k),M[k]=!0)}function Ht(k){M[k]!==!1&&(o.disable(k),M[k]=!1)}function $t(k,Rt){return g[k]!==Rt?(o.bindFramebuffer(k,Rt),g[k]=Rt,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Rt),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Qt(k,Rt){let pt=T,Bt=!1;if(k){pt=y.get(Rt),pt===void 0&&(pt=[],y.set(Rt,pt));const Nt=k.textures;if(pt.length!==Nt.length||pt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,jt=Nt.length;Et<jt;Et++)pt[Et]=o.COLOR_ATTACHMENT0+Et;pt.length=Nt.length,Bt=!0}}else pt[0]!==o.BACK&&(pt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(pt)}function ke(k){return w!==k?(o.useProgram(k),w=k,!0):!1}const fe={[Ns]:o.FUNC_ADD,[tM]:o.FUNC_SUBTRACT,[eM]:o.FUNC_REVERSE_SUBTRACT};fe[nM]=o.MIN,fe[iM]=o.MAX;const ve={[aM]:o.ZERO,[sM]:o.ONE,[rM]:o.SRC_COLOR,[Vh]:o.SRC_ALPHA,[hM]:o.SRC_ALPHA_SATURATE,[uM]:o.DST_COLOR,[lM]:o.DST_ALPHA,[oM]:o.ONE_MINUS_SRC_COLOR,[kh]:o.ONE_MINUS_SRC_ALPHA,[fM]:o.ONE_MINUS_DST_COLOR,[cM]:o.ONE_MINUS_DST_ALPHA,[dM]:o.CONSTANT_COLOR,[pM]:o.ONE_MINUS_CONSTANT_COLOR,[mM]:o.CONSTANT_ALPHA,[gM]:o.ONE_MINUS_CONSTANT_ALPHA};function Ne(k,Rt,pt,Bt,Nt,Et,jt,te,tn,we){if(k===va){S===!0&&(Ht(o.BLEND),S=!1);return}if(S===!1&&(bt(o.BLEND),S=!0),k!==$S){if(k!==v||we!==W){if((C!==Ns||V!==Ns)&&(o.blendEquation(o.FUNC_ADD),C=Ns,V=Ns),we)switch(k){case Lr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case X0:o.blendFunc(o.ONE,o.ONE);break;case W0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case j0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Te("WebGLState: Invalid blending: ",k);break}else switch(k){case Lr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case X0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case W0:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j0:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",k);break}N=null,U=null,L=null,F=null,b.set(0,0,0),P=0,v=k,W=we}return}Nt=Nt||Rt,Et=Et||pt,jt=jt||Bt,(Rt!==C||Nt!==V)&&(o.blendEquationSeparate(fe[Rt],fe[Nt]),C=Rt,V=Nt),(pt!==N||Bt!==U||Et!==L||jt!==F)&&(o.blendFuncSeparate(ve[pt],ve[Bt],ve[Et],ve[jt]),N=pt,U=Bt,L=Et,F=jt),(te.equals(b)===!1||tn!==P)&&(o.blendColor(te.r,te.g,te.b,tn),b.copy(te),P=tn),v=k,W=!1}function le(k,Rt){k.side===ga?Ht(o.CULL_FACE):bt(o.CULL_FACE);let pt=k.side===Yn;Rt&&(pt=!pt),rn(pt),k.blending===Lr&&k.transparent===!1?Ne(va):Ne(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Bt=k.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),j(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function rn(k){H!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),H=k)}function je(k){k!==KS?(bt(o.CULL_FACE),k!==K&&(k===k0?o.cullFace(o.BACK):k===QS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),K=k}function En(k){k!==ut&&(B&&o.lineWidth(k),ut=k)}function j(k,Rt,pt){k?(bt(o.POLYGON_OFFSET_FILL),(mt!==Rt||q!==pt)&&(mt=Rt,q=pt,h.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,pt))):Ht(o.POLYGON_OFFSET_FILL)}function $e(k){k?bt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function he(k){k===void 0&&(k=o.TEXTURE0+O-1),yt!==k&&(o.activeTexture(k),yt=k)}function ze(k,Rt,pt){pt===void 0&&(yt===null?pt=o.TEXTURE0+O-1:pt=yt);let Bt=I[pt];Bt===void 0&&(Bt={type:void 0,texture:void 0},I[pt]=Bt),(Bt.type!==k||Bt.texture!==Rt)&&(yt!==pt&&(o.activeTexture(pt),yt=pt),o.bindTexture(k,Rt||Mt[k]),Bt.type=k,Bt.texture=Rt)}function Ct(){const k=I[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ze(){try{o.compressedTexImage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function E(){try{o.texSubImage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function J(){try{o.texSubImage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function vt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function Tt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function wt(){try{o.texStorage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function Lt(){try{o.texStorage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function ct(){try{o.texImage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function ft(){try{o.texImage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function Ot(k){return x[k]!==void 0?x[k]:o.getParameter(k)}function Pt(k,Rt){x[k]!==Rt&&(o.pixelStorei(k,Rt),x[k]=Rt)}function Ut(k){At.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function Dt(k){ht.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),ht.copy(k))}function ne(k,Rt){let pt=d.get(Rt);pt===void 0&&(pt=new WeakMap,d.set(Rt,pt));let Bt=pt.get(k);Bt===void 0&&(Bt=o.getUniformBlockIndex(Rt,k.name),pt.set(k,Bt))}function ie(k,Rt){const Bt=d.get(Rt).get(k);m.get(Rt)!==Bt&&(o.uniformBlockBinding(Rt,Bt,k.__bindingPointIndex),m.set(Rt,Bt))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),M={},x={},yt=null,I={},g={},y=new WeakMap,T=[],w=null,S=!1,v=null,C=null,N=null,U=null,V=null,L=null,F=null,b=new de(0,0,0),P=0,W=!1,H=null,K=null,ut=null,mt=null,q=null,At.set(0,0,o.canvas.width,o.canvas.height),ht.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:bt,disable:Ht,bindFramebuffer:$t,drawBuffers:Qt,useProgram:ke,setBlending:Ne,setMaterial:le,setFlipSided:rn,setCullFace:je,setLineWidth:En,setPolygonOffset:j,setScissorTest:$e,activeTexture:he,bindTexture:ze,unbindTexture:Ct,compressedTexImage2D:Ze,compressedTexImage3D:D,texImage2D:ct,texImage3D:ft,pixelStorei:Pt,getParameter:Ot,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:wt,texStorage3D:Lt,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:vt,compressedTexSubImage3D:Tt,scissor:Ut,viewport:Dt,reset:pe}}function nA(o,e,i,s,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new be,M=new WeakMap,x=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return T?new OffscreenCanvas(D,E):Xc("canvas")}function S(D,E,J){let vt=1;const Tt=Ze(D);if((Tt.width>J||Tt.height>J)&&(vt=J/Math.max(Tt.width,Tt.height)),vt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const wt=Math.floor(vt*Tt.width),Lt=Math.floor(vt*Tt.height);g===void 0&&(g=w(wt,Lt));const ct=E?w(wt,Lt):g;return ct.width=wt,ct.height=Lt,ct.getContext("2d").drawImage(D,0,0,wt,Lt),ee("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+wt+"x"+Lt+")."),ct}else return"data"in D&&ee("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),D;return D}function v(D){return D.generateMipmaps}function C(D){o.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(D,E,J,vt,Tt,wt=!1){if(D!==null){if(o[D]!==void 0)return o[D];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Lt;vt&&(Lt=e.get("EXT_texture_norm16"),Lt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=E;if(E===o.RED&&(J===o.FLOAT&&(ct=o.R32F),J===o.HALF_FLOAT&&(ct=o.R16F),J===o.UNSIGNED_BYTE&&(ct=o.R8),J===o.UNSIGNED_SHORT&&Lt&&(ct=Lt.R16_EXT),J===o.SHORT&&Lt&&(ct=Lt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.R8UI),J===o.UNSIGNED_SHORT&&(ct=o.R16UI),J===o.UNSIGNED_INT&&(ct=o.R32UI),J===o.BYTE&&(ct=o.R8I),J===o.SHORT&&(ct=o.R16I),J===o.INT&&(ct=o.R32I)),E===o.RG&&(J===o.FLOAT&&(ct=o.RG32F),J===o.HALF_FLOAT&&(ct=o.RG16F),J===o.UNSIGNED_BYTE&&(ct=o.RG8),J===o.UNSIGNED_SHORT&&Lt&&(ct=Lt.RG16_EXT),J===o.SHORT&&Lt&&(ct=Lt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RG8UI),J===o.UNSIGNED_SHORT&&(ct=o.RG16UI),J===o.UNSIGNED_INT&&(ct=o.RG32UI),J===o.BYTE&&(ct=o.RG8I),J===o.SHORT&&(ct=o.RG16I),J===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),J===o.UNSIGNED_INT&&(ct=o.RGB32UI),J===o.BYTE&&(ct=o.RGB8I),J===o.SHORT&&(ct=o.RGB16I),J===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),J===o.UNSIGNED_INT&&(ct=o.RGBA32UI),J===o.BYTE&&(ct=o.RGBA8I),J===o.SHORT&&(ct=o.RGBA16I),J===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_SHORT&&Lt&&(ct=Lt.RGB16_EXT),J===o.SHORT&&Lt&&(ct=Lt.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),E===o.RGBA){const ft=wt?kc:Ee.getTransfer(Tt);J===o.FLOAT&&(ct=o.RGBA32F),J===o.HALF_FLOAT&&(ct=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ct=ft===Be?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&Lt&&(ct=Lt.RGBA16_EXT),J===o.SHORT&&Lt&&(ct=Lt.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function V(D,E){let J;return D?E===null||E===Wi||E===Zo?J=o.DEPTH24_STENCIL8:E===Gi?J=o.DEPTH32F_STENCIL8:E===Yo&&(J=o.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===Zo?J=o.DEPTH_COMPONENT24:E===Gi?J=o.DEPTH_COMPONENT32F:E===Yo&&(J=o.DEPTH_COMPONENT16),J}function L(D,E){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function F(D){const E=D.target;E.removeEventListener("dispose",F),P(E),E.isVideoTexture&&M.delete(E),E.isHTMLTexture&&x.delete(E)}function b(D){const E=D.target;E.removeEventListener("dispose",b),H(E)}function P(D){const E=s.get(D);if(E.__webglInit===void 0)return;const J=D.source,vt=y.get(J);if(vt){const Tt=vt[E.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&W(D),Object.keys(vt).length===0&&y.delete(J)}s.remove(D)}function W(D){const E=s.get(D);o.deleteTexture(E.__webglTexture);const J=D.source,vt=y.get(J);delete vt[E.__cacheKey],h.memory.textures--}function H(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(E.__webglFramebuffer[vt]))for(let Tt=0;Tt<E.__webglFramebuffer[vt].length;Tt++)o.deleteFramebuffer(E.__webglFramebuffer[vt][Tt]);else o.deleteFramebuffer(E.__webglFramebuffer[vt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[vt])}else{if(Array.isArray(E.__webglFramebuffer))for(let vt=0;vt<E.__webglFramebuffer.length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[vt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let vt=0;vt<E.__webglColorRenderbuffer.length;vt++)E.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[vt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=D.textures;for(let vt=0,Tt=J.length;vt<Tt;vt++){const wt=s.get(J[vt]);wt.__webglTexture&&(o.deleteTexture(wt.__webglTexture),h.memory.textures--),s.remove(J[vt])}s.remove(D)}let K=0;function ut(){K=0}function mt(){return K}function q(D){K=D}function O(){const D=K;return D>=l.maxTextures&&ee("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),K+=1,D}function B(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ot(D,E){const J=s.get(D);if(D.isVideoTexture&&ze(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const vt=D.image;if(vt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(J,D,E);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function gt(D,E){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Ht(J,D,E);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function yt(D,E){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Ht(J,D,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function I(D,E){const J=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){$t(J,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const Q={[Qh]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[Jh]:o.MIRRORED_REPEAT},St={[wn]:o.NEAREST,[xM]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[uh]:o.LINEAR_MIPMAP_NEAREST,[Os]:o.LINEAR_MIPMAP_LINEAR},At={[yM]:o.NEVER,[RM]:o.ALWAYS,[EM]:o.LESS,[Xd]:o.LEQUAL,[bM]:o.EQUAL,[Wd]:o.GEQUAL,[TM]:o.GREATER,[AM]:o.NOTEQUAL};function ht(D,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===uh||E.magFilter===cc||E.magFilter===Os||E.minFilter===In||E.minFilter===uh||E.minFilter===cc||E.minFilter===Os)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Q[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Q[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Q[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,St[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==cc&&E.minFilter!==Os||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function tt(D,E){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",F));const vt=E.source;let Tt=y.get(vt);Tt===void 0&&(Tt={},y.set(vt,Tt));const wt=B(E);if(wt!==D.__cacheKey){Tt[wt]===void 0&&(Tt[wt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),Tt[wt].usedTimes++;const Lt=Tt[D.__cacheKey];Lt!==void 0&&(Tt[D.__cacheKey].usedTimes--,Lt.usedTimes===0&&W(E)),D.__cacheKey=wt,D.__webglTexture=Tt[wt].texture}return J}function Mt(D,E,J){return Math.floor(Math.floor(D/J)/E)}function bt(D,E,J,vt){const wt=D.updateRanges;if(wt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,vt,E.data);else{wt.sort((Pt,Ut)=>Pt.start-Ut.start);let Lt=0;for(let Pt=1;Pt<wt.length;Pt++){const Ut=wt[Lt],Dt=wt[Pt],ne=Ut.start+Ut.count,ie=Mt(Dt.start,E.width,4),pe=Mt(Ut.start,E.width,4);Dt.start<=ne+1&&ie===pe&&Mt(Dt.start+Dt.count-1,E.width,4)===ie?Ut.count=Math.max(Ut.count,Dt.start+Dt.count-Ut.start):(++Lt,wt[Lt]=Dt)}wt.length=Lt+1;const ct=i.getParameter(o.UNPACK_ROW_LENGTH),ft=i.getParameter(o.UNPACK_SKIP_PIXELS),Ot=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Pt=0,Ut=wt.length;Pt<Ut;Pt++){const Dt=wt[Pt],ne=Math.floor(Dt.start/4),ie=Math.ceil(Dt.count/4),pe=ne%E.width,k=Math.floor(ne/E.width),Rt=ie,pt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,pe,k,Rt,pt,J,vt,E.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ct),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ot)}}function Ht(D,E,J){let vt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(vt=o.TEXTURE_3D);const Tt=tt(D,E),wt=E.source;i.bindTexture(vt,D.__webglTexture,o.TEXTURE0+J);const Lt=s.get(wt);if(wt.version!==Lt.__version||Tt===!0){if(i.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pt=Ee.getPrimaries(Ee.workingColorSpace),Bt=E.colorSpace===is?null:Ee.getPrimaries(E.colorSpace),Nt=E.colorSpace===is||pt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let ft=S(E.image,!1,l.maxTextureSize);ft=Ct(E,ft);const Ot=c.convert(E.format,E.colorSpace),Pt=c.convert(E.type);let Ut=U(E.internalFormat,Ot,Pt,E.normalized,E.colorSpace,E.isVideoTexture);ht(vt,E);let Dt;const ne=E.mipmaps,ie=E.isVideoTexture!==!0,pe=Lt.__version===void 0||Tt===!0,k=wt.dataReady,Rt=L(E,ft);if(E.isDepthTexture)Ut=V(E.format===Ps,E.type),pe&&(ie?i.texStorage2D(o.TEXTURE_2D,1,Ut,ft.width,ft.height):i.texImage2D(o.TEXTURE_2D,0,Ut,ft.width,ft.height,0,Ot,Pt,null));else if(E.isDataTexture)if(ne.length>0){ie&&pe&&i.texStorage2D(o.TEXTURE_2D,Rt,Ut,ne[0].width,ne[0].height);for(let pt=0,Bt=ne.length;pt<Bt;pt++)Dt=ne[pt],ie?k&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,Ot,Pt,Dt.data):i.texImage2D(o.TEXTURE_2D,pt,Ut,Dt.width,Dt.height,0,Ot,Pt,Dt.data);E.generateMipmaps=!1}else ie?(pe&&i.texStorage2D(o.TEXTURE_2D,Rt,Ut,ft.width,ft.height),k&&bt(E,ft,Ot,Pt)):i.texImage2D(o.TEXTURE_2D,0,Ut,ft.width,ft.height,0,Ot,Pt,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Ut,ne[0].width,ne[0].height,ft.depth);for(let pt=0,Bt=ne.length;pt<Bt;pt++)if(Dt=ne[pt],E.format!==Di)if(Ot!==null)if(ie){if(k)if(E.layerUpdates.size>0){const Nt=M_(Dt.width,Dt.height,E.format,E.type);for(const Et of E.layerUpdates){const jt=Dt.data.subarray(Et*Nt/Dt.data.BYTES_PER_ELEMENT,(Et+1)*Nt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,Et,Dt.width,Dt.height,1,Ot,jt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,Dt.width,Dt.height,ft.depth,Ot,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pt,Ut,Dt.width,Dt.height,ft.depth,0,Dt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,Dt.width,Dt.height,ft.depth,Ot,Pt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pt,Ut,Dt.width,Dt.height,ft.depth,0,Ot,Pt,Dt.data)}else{ie&&pe&&i.texStorage2D(o.TEXTURE_2D,Rt,Ut,ne[0].width,ne[0].height);for(let pt=0,Bt=ne.length;pt<Bt;pt++)Dt=ne[pt],E.format!==Di?Ot!==null?ie?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,Ot,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,pt,Ut,Dt.width,Dt.height,0,Dt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?k&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,Ot,Pt,Dt.data):i.texImage2D(o.TEXTURE_2D,pt,Ut,Dt.width,Dt.height,0,Ot,Pt,Dt.data)}else if(E.isDataArrayTexture)if(ie){if(pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Ut,ft.width,ft.height,ft.depth),k)if(E.layerUpdates.size>0){const pt=M_(ft.width,ft.height,E.format,E.type);for(const Bt of E.layerUpdates){const Nt=ft.data.subarray(Bt*pt/ft.data.BYTES_PER_ELEMENT,(Bt+1)*pt/ft.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Bt,ft.width,ft.height,1,Ot,Pt,Nt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ot,Pt,ft.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ut,ft.width,ft.height,ft.depth,0,Ot,Pt,ft.data);else if(E.isData3DTexture)ie?(pe&&i.texStorage3D(o.TEXTURE_3D,Rt,Ut,ft.width,ft.height,ft.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ot,Pt,ft.data)):i.texImage3D(o.TEXTURE_3D,0,Ut,ft.width,ft.height,ft.depth,0,Ot,Pt,ft.data);else if(E.isFramebufferTexture){if(pe)if(ie)i.texStorage2D(o.TEXTURE_2D,Rt,Ut,ft.width,ft.height);else{let pt=ft.width,Bt=ft.height;for(let Nt=0;Nt<Rt;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,Ut,pt,Bt,0,Ot,Pt,null),pt>>=1,Bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const pt=o.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ft.parentNode!==pt){pt.appendChild(ft),x.add(E),pt.onpaint=te=>{const tn=te.changedElements;for(const we of x)tn.includes(we.image)&&(we.needsUpdate=!0)},pt.requestPaint();return}const Bt=0,Nt=o.RGBA,Et=o.RGBA,jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Bt,Nt,Et,jt,ft),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ie&&pe){const pt=Ze(ne[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Ut,pt.width,pt.height)}for(let pt=0,Bt=ne.length;pt<Bt;pt++)Dt=ne[pt],ie?k&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,Ot,Pt,Dt):i.texImage2D(o.TEXTURE_2D,pt,Ut,Ot,Pt,Dt);E.generateMipmaps=!1}else if(ie){if(pe){const pt=Ze(ft);i.texStorage2D(o.TEXTURE_2D,Rt,Ut,pt.width,pt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,Pt,ft)}else i.texImage2D(o.TEXTURE_2D,0,Ut,Ot,Pt,ft);v(E)&&C(vt),Lt.__version=wt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function $t(D,E,J){if(E.image.length!==6)return;const vt=tt(D,E),Tt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const wt=s.get(Tt);if(Tt.version!==wt.__version||vt===!0){i.activeTexture(o.TEXTURE0+J);const Lt=Ee.getPrimaries(Ee.workingColorSpace),ct=E.colorSpace===is?null:Ee.getPrimaries(E.colorSpace),ft=E.colorSpace===is||Lt===ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ot=E.isCompressedTexture||E.image[0].isCompressedTexture,Pt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let Et=0;Et<6;Et++)!Ot&&!Pt?Ut[Et]=S(E.image[Et],!0,l.maxCubemapSize):Ut[Et]=Pt?E.image[Et].image:E.image[Et],Ut[Et]=Ct(E,Ut[Et]);const Dt=Ut[0],ne=c.convert(E.format,E.colorSpace),ie=c.convert(E.type),pe=U(E.internalFormat,ne,ie,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Rt=wt.__version===void 0||vt===!0,pt=Tt.dataReady;let Bt=L(E,Dt);ht(o.TEXTURE_CUBE_MAP,E);let Nt;if(Ot){k&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,pe,Dt.width,Dt.height);for(let Et=0;Et<6;Et++){Nt=Ut[Et].mipmaps;for(let jt=0;jt<Nt.length;jt++){const te=Nt[jt];E.format!==Di?ne!==null?k?pt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,te.width,te.height,ne,te.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,pe,te.width,te.height,0,te.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,te.width,te.height,ne,ie,te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,pe,te.width,te.height,0,ne,ie,te.data)}}}else{if(Nt=E.mipmaps,k&&Rt){Nt.length>0&&Bt++;const Et=Ze(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,pe,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Pt){k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Ut[Et].width,Ut[Et].height,ne,ie,Ut[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,pe,Ut[Et].width,Ut[Et].height,0,ne,ie,Ut[Et].data);for(let jt=0;jt<Nt.length;jt++){const tn=Nt[jt].image[Et].image;k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,tn.width,tn.height,ne,ie,tn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,pe,tn.width,tn.height,0,ne,ie,tn.data)}}else{k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ne,ie,Ut[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,pe,ne,ie,Ut[Et]);for(let jt=0;jt<Nt.length;jt++){const te=Nt[jt];k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,ne,ie,te.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,pe,ne,ie,te.image[Et])}}}v(E)&&C(o.TEXTURE_CUBE_MAP),wt.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Qt(D,E,J,vt,Tt,wt){const Lt=c.convert(J.format,J.colorSpace),ct=c.convert(J.type),ft=U(J.internalFormat,Lt,ct,J.normalized,J.colorSpace),Ot=s.get(E),Pt=s.get(J);if(Pt.__renderTarget=E,!Ot.__hasExternalTextures){const Ut=Math.max(1,E.width>>wt),Dt=Math.max(1,E.height>>wt);Tt===o.TEXTURE_3D||Tt===o.TEXTURE_2D_ARRAY?i.texImage3D(Tt,wt,ft,Ut,Dt,E.depth,0,Lt,ct,null):i.texImage2D(Tt,wt,ft,Ut,Dt,0,Lt,ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),he(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,Tt,Pt.__webglTexture,0,$e(E)):(Tt===o.TEXTURE_2D||Tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,Tt,Pt.__webglTexture,wt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const vt=E.depthTexture,Tt=vt&&vt.isDepthTexture?vt.type:null,wt=V(E.stencilBuffer,Tt),Lt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;he(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e(E),wt,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e(E),wt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,wt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,D)}else{const vt=E.textures;for(let Tt=0;Tt<vt.length;Tt++){const wt=vt[Tt],Lt=c.convert(wt.format,wt.colorSpace),ct=c.convert(wt.type),ft=U(wt.internalFormat,Lt,ct,wt.normalized,wt.colorSpace);he(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e(E),ft,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e(E),ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function fe(D,E,J){const vt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=s.get(E.depthTexture);if(Tt.__renderTarget=E,(!Tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),vt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),Tt.__webglTexture===void 0){Tt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Tt.__webglTexture),ht(o.TEXTURE_CUBE_MAP,E.depthTexture);const Ot=c.convert(E.depthTexture.format),Pt=c.convert(E.depthTexture.type);let Ut;E.depthTexture.format===Ma?Ut=o.DEPTH_COMPONENT24:E.depthTexture.format===Ps&&(Ut=o.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Ut,E.width,E.height,0,Ot,Pt,null)}}else ot(E.depthTexture,0);const wt=Tt.__webglTexture,Lt=$e(E),ct=vt?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,ft=E.depthTexture.format===Ps?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)he(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,ct,wt,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,ft,ct,wt,0);else if(E.depthTexture.format===Ps)he(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,ct,wt,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,ft,ct,wt,0);else throw new Error("Unknown depthTexture format")}function ve(D){const E=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const vt=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),vt){const Tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,vt.removeEventListener("dispose",Tt)};vt.addEventListener("dispose",Tt),E.__depthDisposeCallback=Tt}E.__boundDepthTexture=vt}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let vt=0;vt<6;vt++)fe(E.__webglFramebuffer[vt],D,vt);else{const vt=D.texture.mipmaps;vt&&vt.length>0?fe(E.__webglFramebuffer[0],D,0):fe(E.__webglFramebuffer,D,0)}else if(J){E.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[vt]),E.__webglDepthbuffer[vt]===void 0)E.__webglDepthbuffer[vt]=o.createRenderbuffer(),ke(E.__webglDepthbuffer[vt],D,!1);else{const Tt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=E.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,wt)}}else{const vt=D.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ke(E.__webglDepthbuffer,D,!1);else{const Tt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,wt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ne(D,E,J){const vt=s.get(D);E!==void 0&&Qt(vt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&ve(D)}function le(D){const E=D.texture,J=s.get(D),vt=s.get(E);D.addEventListener("dispose",b);const Tt=D.textures,wt=D.isWebGLCubeRenderTarget===!0,Lt=Tt.length>1;if(Lt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=E.version,h.memory.textures++),wt){J.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ct]=[];for(let ft=0;ft<E.mipmaps.length;ft++)J.__webglFramebuffer[ct][ft]=o.createFramebuffer()}else J.__webglFramebuffer[ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)J.__webglFramebuffer[ct]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let ct=0,ft=Tt.length;ct<ft;ct++){const Ot=s.get(Tt[ct]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&he(D)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ct=0;ct<Tt.length;ct++){const ft=Tt[ct];J.__webglColorRenderbuffer[ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[ct]);const Ot=c.convert(ft.format,ft.colorSpace),Pt=c.convert(ft.type),Ut=U(ft.internalFormat,Ot,Pt,ft.normalized,ft.colorSpace,D.isXRRenderTarget===!0),Dt=$e(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,Ut,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ct,o.RENDERBUFFER,J.__webglColorRenderbuffer[ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(wt){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),ht(o.TEXTURE_CUBE_MAP,E);for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)Qt(J.__webglFramebuffer[ct][ft],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else Qt(J.__webglFramebuffer[ct],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);v(E)&&C(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let ct=0,ft=Tt.length;ct<ft;ct++){const Ot=Tt[ct],Pt=s.get(Ot);let Ut=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Pt.__webglTexture),ht(Ut,Ot),Qt(J.__webglFramebuffer,D,Ot,o.COLOR_ATTACHMENT0+ct,Ut,0),v(Ot)&&C(Ut)}i.unbindTexture()}else{let ct=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ct=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ct,vt.__webglTexture),ht(ct,E),E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)Qt(J.__webglFramebuffer[ft],D,E,o.COLOR_ATTACHMENT0,ct,ft);else Qt(J.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,ct,0);v(E)&&C(ct),i.unbindTexture()}D.depthBuffer&&ve(D)}function rn(D){const E=D.textures;for(let J=0,vt=E.length;J<vt;J++){const Tt=E[J];if(v(Tt)){const wt=N(D),Lt=s.get(Tt).__webglTexture;i.bindTexture(wt,Lt),C(wt),i.unbindTexture()}}}const je=[],En=[];function j(D){if(D.samples>0){if(he(D)===!1){const E=D.textures,J=D.width,vt=D.height;let Tt=o.COLOR_BUFFER_BIT;const wt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=s.get(D),ct=E.length>1;if(ct)for(let Ot=0;Ot<E.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const ft=D.texture.mipmaps;ft&&ft.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ot=0;Ot<E.length;Ot++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Tt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Tt|=o.STENCIL_BUFFER_BIT)),ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const Pt=s.get(E[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pt,0)}o.blitFramebuffer(0,0,J,vt,0,0,J,vt,Tt,o.NEAREST),m===!0&&(je.length=0,En.length=0,je.push(o.COLOR_ATTACHMENT0+Ot),D.depthBuffer&&D.resolveDepthBuffer===!1&&(je.push(wt),En.push(wt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,En)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,je))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ct)for(let Ot=0;Ot<E.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const Pt=s.get(E[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,Pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function $e(D){return Math.min(l.maxSamples,D.samples)}function he(D){const E=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(D){const E=h.render.frame;M.get(D)!==E&&(M.set(D,E),D.update())}function Ct(D,E){const J=D.colorSpace,vt=D.format,Tt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Vc&&J!==is&&(Ee.getTransfer(J)===Be?(vt!==Di||Tt!==ui)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",J)),E}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=O,this.resetTextureUnits=ut,this.getTextureUnits=mt,this.setTextureUnits=q,this.setTexture2D=ot,this.setTexture2DArray=gt,this.setTexture3D=yt,this.setTextureCube=I,this.rebindTextures=Ne,this.setupRenderTarget=le,this.updateRenderTargetMipmap=rn,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iA(o,e){function i(s,l=is){let c;const h=Ee.getTransfer(l);if(s===ui)return o.UNSIGNED_BYTE;if(s===zd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Hd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===nv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===iv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===tv)return o.BYTE;if(s===ev)return o.SHORT;if(s===Yo)return o.UNSIGNED_SHORT;if(s===Bd)return o.INT;if(s===Wi)return o.UNSIGNED_INT;if(s===Gi)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===av)return o.ALPHA;if(s===sv)return o.RGB;if(s===Di)return o.RGBA;if(s===Ma)return o.DEPTH_COMPONENT;if(s===Ps)return o.DEPTH_STENCIL;if(s===rv)return o.RED;if(s===Gd)return o.RED_INTEGER;if(s===Fs)return o.RG;if(s===Vd)return o.RG_INTEGER;if(s===kd)return o.RGBA_INTEGER;if(s===Oc||s===Pc||s===Ic||s===Fc)if(h===Be)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$h||s===td||s===ed||s===nd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===$h)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===td)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===id||s===ad||s===sd||s===rd||s===od||s===Hc||s===ld)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===id||s===ad)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===sd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===rd)return c.COMPRESSED_R11_EAC;if(s===od)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Hc)return c.COMPRESSED_RG11_EAC;if(s===ld)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===Md||s===yd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===cd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ud)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===md)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_d)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Md)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ed||s===bd||s===Td)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ed)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Td)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ad||s===Rd||s===Gc||s===Cd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ad)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Rd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new gv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ji({vertexShader:aA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pn(new Zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends Bs{constructor(e,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,M=null,x=null,g=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",S=new rA,v={},C=i.getContextAttributes();let N=null,U=null;const V=[],L=[],F=new be;let b=null;const P=new ci;P.viewport=new an;const W=new ci;W.viewport=new an;const H=[P,W],K=new gy;let ut=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Mt=V[tt];return Mt===void 0&&(Mt=new vh,V[tt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let Mt=V[tt];return Mt===void 0&&(Mt=new vh,V[tt]=Mt),Mt.getGripSpace()},this.getHand=function(tt){let Mt=V[tt];return Mt===void 0&&(Mt=new vh,V[tt]=Mt),Mt.getHandSpace()};function q(tt){const Mt=L.indexOf(tt.inputSource);if(Mt===-1)return;const bt=V[Mt];bt!==void 0&&(bt.update(tt.inputSource,tt.frame,d||h),bt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function O(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let tt=0;tt<V.length;tt++){const Mt=L[tt];Mt!==null&&(L[tt]=null,V[tt].disconnect(Mt))}ut=null,mt=null,S.reset();for(const tt in v)delete v[tt];e.setRenderTarget(N),y=null,g=null,x=null,l=null,U=null,ht.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){p=tt,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(tt){d=tt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ht=null,$t=null;C.depth&&($t=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=C.stencil?Ps:Ma,Ht=C.stencil?Zo:Wi);const Qt={colorFormat:i.RGBA8,depthFormat:$t,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Qt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),U=new Xi(g.textureWidth,g.textureHeight,{format:Di,type:ui,depthTexture:new Fr(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Xi(y.framebufferWidth,y.framebufferHeight,{format:Di,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),ht.setContext(l),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(tt){for(let Mt=0;Mt<tt.removed.length;Mt++){const bt=tt.removed[Mt],Ht=L.indexOf(bt);Ht>=0&&(L[Ht]=null,V[Ht].disconnect(bt))}for(let Mt=0;Mt<tt.added.length;Mt++){const bt=tt.added[Mt];let Ht=L.indexOf(bt);if(Ht===-1){for(let Qt=0;Qt<V.length;Qt++)if(Qt>=L.length){L.push(bt),Ht=Qt;break}else if(L[Qt]===null){L[Qt]=bt,Ht=Qt;break}if(Ht===-1)break}const $t=V[Ht];$t&&$t.connect(bt)}}const ot=new $,gt=new $;function yt(tt,Mt,bt){ot.setFromMatrixPosition(Mt.matrixWorld),gt.setFromMatrixPosition(bt.matrixWorld);const Ht=ot.distanceTo(gt),$t=Mt.projectionMatrix.elements,Qt=bt.projectionMatrix.elements,ke=$t[14]/($t[10]-1),fe=$t[14]/($t[10]+1),ve=($t[9]+1)/$t[5],Ne=($t[9]-1)/$t[5],le=($t[8]-1)/$t[0],rn=(Qt[8]+1)/Qt[0],je=ke*le,En=ke*rn,j=Ht/(-le+rn),$e=j*-le;if(Mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX($e),tt.translateZ(j),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),$t[10]===-1)tt.projectionMatrix.copy(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const he=ke+j,ze=fe+j,Ct=je-$e,Ze=En+(Ht-$e),D=ve*fe/ze*he,E=Ne*fe/ze*he;tt.projectionMatrix.makePerspective(Ct,Ze,D,E,he,ze),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function I(tt,Mt){Mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let Mt=tt.near,bt=tt.far;S.texture!==null&&(S.depthNear>0&&(Mt=S.depthNear),S.depthFar>0&&(bt=S.depthFar)),K.near=W.near=P.near=Mt,K.far=W.far=P.far=bt,(ut!==K.near||mt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ut=K.near,mt=K.far),K.layers.mask=tt.layers.mask|6,P.layers.mask=K.layers.mask&-5,W.layers.mask=K.layers.mask&-3;const Ht=tt.parent,$t=K.cameras;I(K,Ht);for(let Qt=0;Qt<$t.length;Qt++)I($t[Qt],Ht);$t.length===2?yt(K,P,W):K.projectionMatrix.copy(P.projectionMatrix),Q(tt,K,Ht)};function Q(tt,Mt,bt){bt===null?tt.matrix.copy(Mt.matrixWorld):(tt.matrix.copy(bt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ud*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(tt){m=tt,g!==null&&(g.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(tt){return v[tt]};let St=null;function At(tt,Mt){if(M=Mt.getViewerPose(d||h),T=Mt,M!==null){const bt=M.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let Ht=!1;bt.length!==K.cameras.length&&(K.cameras.length=0,Ht=!0);for(let fe=0;fe<bt.length;fe++){const ve=bt[fe];let Ne=null;if(y!==null)Ne=y.getViewport(ve);else{const rn=x.getViewSubImage(g,ve);Ne=rn.viewport,fe===0&&(e.setRenderTargetTextures(U,rn.colorTexture,rn.depthStencilTexture),e.setRenderTarget(U))}let le=H[fe];le===void 0&&(le=new ci,le.layers.enable(fe),le.viewport=new an,H[fe]=le),le.matrix.fromArray(ve.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ve.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),fe===0&&(K.matrix.copy(le.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ht===!0&&K.cameras.push(le)}const $t=l.enabledFeatures;if($t&&$t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const fe=x.getDepthInformation(bt[0]);fe&&fe.isValid&&fe.texture&&S.init(fe,l.renderState)}if($t&&$t.includes("camera-access")&&w){e.state.unbindTexture(),x=s.getBinding();for(let fe=0;fe<bt.length;fe++){const ve=bt[fe].camera;if(ve){let Ne=v[ve];Ne||(Ne=new gv,v[ve]=Ne);const le=x.getCameraImage(ve);Ne.sourceTexture=le}}}}for(let bt=0;bt<V.length;bt++){const Ht=L[bt],$t=V[bt];Ht!==null&&$t!==void 0&&$t.update(Ht,Mt,d||h)}St&&St(tt,Mt),Mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Mt}),T=null}const ht=new Mv;ht.setAnimationLoop(At),this.setAnimationLoop=function(tt){St=tt},this.dispose=function(){}}}const lA=new sn,Cv=new se;Cv.set(-1,0,0,0,1,0,0,0,1);function cA(o,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,_v(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,C,N,U){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(S,v):v.isMeshLambertMaterial?(c(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(S,v),x(S,v)):v.isMeshPhongMaterial?(c(S,v),M(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(S,v),g(S,v),v.isMeshPhysicalMaterial&&y(S,v,U)):v.isMeshMatcapMaterial?(c(S,v),T(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),w(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(h(S,v),v.isLineDashedMaterial&&p(S,v)):v.isPointsMaterial?m(S,v,C,N):v.isSpriteMaterial?d(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Yn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Yn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const C=e.get(v),N=C.envMap,U=C.envMapRotation;N&&(S.envMap.value=N,S.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(U)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Cv),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function p(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,C,N){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*C,S.scale.value=N*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function M(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function g(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,C){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function w(S,v){const C=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uA(o,e,i,s){let l={},c={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const U=N.program;s.uniformBlockBinding(C,U)}function d(C,N){let U=l[C.id];U===void 0&&(T(C),U=M(C),l[C.id]=U,C.addEventListener("dispose",S));const V=N.program;s.updateUBOMapping(C,V);const L=e.render.frame;c[C.id]!==L&&(g(C),c[C.id]=L)}function M(C){const N=x();C.__bindingPointIndex=N;const U=o.createBuffer(),V=C.__size,L=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,V,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function x(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],U=C.uniforms,V=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let L=0,F=U.length;L<F;L++){const b=Array.isArray(U[L])?U[L]:[U[L]];for(let P=0,W=b.length;P<W;P++){const H=b[P];if(y(H,L,P,V)===!0){const K=H.__offset,ut=Array.isArray(H.value)?H.value:[H.value];let mt=0;for(let q=0;q<ut.length;q++){const O=ut[q],B=w(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,K+mt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):ArrayBuffer.isView(O)?H.__data.set(new O.constructor(O.buffer,O.byteOffset,H.__data.length)):(O.toArray(H.__data,mt),mt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,N,U,V){const L=C.value,F=N+"_"+U;if(V[F]===void 0)return typeof L=="number"||typeof L=="boolean"?V[F]=L:ArrayBuffer.isView(L)?V[F]=L.slice():V[F]=L.clone(),!0;{const b=V[F];if(typeof L=="number"||typeof L=="boolean"){if(b!==L)return V[F]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(b.equals(L)===!1)return b.copy(L),!0}}return!1}function T(C){const N=C.uniforms;let U=0;const V=16;for(let F=0,b=N.length;F<b;F++){const P=Array.isArray(N[F])?N[F]:[N[F]];for(let W=0,H=P.length;W<H;W++){const K=P[W],ut=Array.isArray(K.value)?K.value:[K.value];for(let mt=0,q=ut.length;mt<q;mt++){const O=ut[mt],B=w(O),ot=U%V,gt=ot%B.boundary,yt=ot+gt;U+=gt,yt!==0&&V-yt<B.storage&&(U+=V-yt),K.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=B.storage}}}const L=U%V;return L>0&&(U+=V-L),C.__size=U,C.__cache={},this}function w(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",C),N}function S(C){const N=C.target;N.removeEventListener("dispose",S);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:v}}const fA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function hA(){return Bi===null&&(Bi=new JM(fA,16,16,Fs,Sa),Bi.name="DFG_LUT",Bi.minFilter=In,Bi.magFilter=In,Bi.wrapS=_a,Bi.wrapT=_a,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class dA{constructor(e={}){const{canvas:i=wM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:M="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ui}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=y,S=new Set([kd,Vd,Gd]),v=new Set([ui,Wi,Yo,Zo,zd,Hd]),C=new Uint32Array(4),N=new Int32Array(4),U=new $;let V=null,L=null;const F=[],b=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let H=!1,K=null;this._outputColorSpace=li;let ut=0,mt=0,q=null,O=-1,B=null;const ot=new an,gt=new an;let yt=null;const I=new de(0);let Q=0,St=i.width,At=i.height,ht=1,tt=null,Mt=null;const bt=new an(0,0,St,At),Ht=new an(0,0,St,At);let $t=!1;const Qt=new qd;let ke=!1,fe=!1;const ve=new sn,Ne=new $,le=new an,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function En(){return q===null?ht:1}let j=s;function $e(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:M,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fd}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",te,!1),j===null){const Y="webgl2";if(j=$e(Y,A),j===null)throw $e(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Te("WebGLRenderer: "+A.message),A}let he,ze,Ct,Ze,D,E,J,vt,Tt,wt,Lt,ct,ft,Ot,Pt,Ut,Dt,ne,ie,pe,k,Rt,pt;function Bt(){he=new hT(j),he.init(),k=new iA(j,he),ze=new aT(j,he,e,k),Ct=new eA(j,he),ze.reversedDepthBuffer&&g&&Ct.buffers.depth.setReversed(!0),Ze=new mT(j),D=new G1,E=new nA(j,he,Ct,D,ze,k,Ze),J=new fT(W),vt=new xy(j),Rt=new nT(j,vt),Tt=new dT(j,vt,Ze,Rt),wt=new _T(j,Tt,vt,Rt,Ze),ne=new gT(j,ze,E),Pt=new sT(D),Lt=new H1(W,J,he,ze,Rt,Pt),ct=new cA(W,D),ft=new k1,Ot=new Z1(he),Dt=new eT(W,J,Ct,wt,T,m),Ut=new tA(W,wt,ze),pt=new uA(j,Ze,ze,Ct),ie=new iT(j,he,Ze),pe=new pT(j,he,Ze),Ze.programs=Lt.programs,W.capabilities=ze,W.extensions=he,W.properties=D,W.renderLists=ft,W.shadowMap=Ut,W.state=Ct,W.info=Ze}Bt(),w!==ui&&(P=new xT(w,i.width,i.height,l,c));const Nt=new oA(W,j);this.xr=Nt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(A){A!==void 0&&(ht=A,this.setSize(St,At,!1))},this.getSize=function(A){return A.set(St,At)},this.setSize=function(A,Y,st=!0){if(Nt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}St=A,At=Y,i.width=Math.floor(A*ht),i.height=Math.floor(Y*ht),st===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(St*ht,At*ht).floor()},this.setDrawingBufferSize=function(A,Y,st){St=A,At=Y,ht=st,i.width=Math.floor(A*st),i.height=Math.floor(Y*st),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(w===ui){Te("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){ee("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ot)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,Y,st,it){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,Y,st,it),Ct.viewport(ot.copy(bt).multiplyScalar(ht).round())},this.getScissor=function(A){return A.copy(Ht)},this.setScissor=function(A,Y,st,it){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,Y,st,it),Ct.scissor(gt.copy(Ht).multiplyScalar(ht).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(A){Ct.setScissorTest($t=A)},this.setOpaqueSort=function(A){tt=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,st=!0){let it=0;if(A){let at=!1;if(q!==null){const Ft=q.texture.format;at=S.has(Ft)}if(at){const Ft=q.texture.type,Vt=v.has(Ft),It=Dt.getClearColor(),Xt=Dt.getClearAlpha(),kt=It.r,Zt=It.g,re=It.b;Vt?(C[0]=kt,C[1]=Zt,C[2]=re,C[3]=Xt,j.clearBufferuiv(j.COLOR,0,C)):(N[0]=kt,N[1]=Zt,N[2]=re,N[3]=Xt,j.clearBufferiv(j.COLOR,0,N))}else it|=j.COLOR_BUFFER_BIT}Y&&(it|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(it|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&j.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",te,!1),Dt.dispose(),ft.dispose(),Ot.dispose(),D.dispose(),J.dispose(),wt.dispose(),Rt.dispose(),pt.dispose(),Lt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Xr),Nt.removeEventListener("sessionend",Wr),Dn.stop()};function Et(A){A.preventDefault(),Q0("WebGLRenderer: Context Lost."),H=!0}function jt(){Q0("WebGLRenderer: Context Restored."),H=!1;const A=Ze.autoReset,Y=Ut.enabled,st=Ut.autoUpdate,it=Ut.needsUpdate,at=Ut.type;Bt(),Ze.autoReset=A,Ut.enabled=Y,Ut.autoUpdate=st,Ut.needsUpdate=it,Ut.type=at}function te(A){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tn(A){const Y=A.target;Y.removeEventListener("dispose",tn),we(Y)}function we(A){fi(A),D.remove(A)}function fi(A){const Y=D.get(A).programs;Y!==void 0&&(Y.forEach(function(st){Lt.releaseProgram(st)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,st,it,at,Ft){Y===null&&(Y=rn);const Vt=at.isMesh&&at.matrixWorld.determinant()<0,It=ba(A,Y,st,it,at);Ct.setMaterial(it,Vt);let Xt=st.index,kt=1;if(it.wireframe===!0){if(Xt=Tt.getWireframeAttribute(st),Xt===void 0)return;kt=2}const Zt=st.drawRange,re=st.attributes.position;let Yt=Zt.start*kt,Ae=(Zt.start+Zt.count)*kt;Ft!==null&&(Yt=Math.max(Yt,Ft.start*kt),Ae=Math.min(Ae,(Ft.start+Ft.count)*kt)),Xt!==null?(Yt=Math.max(Yt,0),Ae=Math.min(Ae,Xt.count)):re!=null&&(Yt=Math.max(Yt,0),Ae=Math.min(Ae,re.count));const Ke=Ae-Yt;if(Ke<0||Ke===1/0)return;Rt.setup(at,it,It,st,Xt);let Xe,Le=ie;if(Xt!==null&&(Xe=vt.get(Xt),Le=pe,Le.setIndex(Xe)),at.isMesh)it.wireframe===!0?(Ct.setLineWidth(it.wireframeLinewidth*En()),Le.setMode(j.LINES)):Le.setMode(j.TRIANGLES);else if(at.isLine){let Oe=it.linewidth;Oe===void 0&&(Oe=1),Ct.setLineWidth(Oe*En()),at.isLineSegments?Le.setMode(j.LINES):at.isLineLoop?Le.setMode(j.LINE_LOOP):Le.setMode(j.LINE_STRIP)}else at.isPoints?Le.setMode(j.POINTS):at.isSprite&&Le.setMode(j.TRIANGLES);if(at.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Le.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Oe=at._multiDrawStarts,Gt=at._multiDrawCounts,Un=at._multiDrawCount,me=Xt?vt.get(Xt).bytesPerElement:1,gn=D.get(it).currentProgram.getUniforms();for(let Qn=0;Qn<Un;Qn++)gn.setValue(j,"_gl_DrawID",Qn),Le.render(Oe[Qn]/me,Gt[Qn])}else if(at.isInstancedMesh)Le.renderInstances(Yt,Ke,at.count);else if(st.isInstancedBufferGeometry){const Oe=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Gt=Math.min(st.instanceCount,Oe);Le.renderInstances(Yt,Ke,Gt)}else Le.render(Yt,Ke)};function Kn(A,Y,st){A.transparent===!0&&A.side===ga&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,zs(A,Y,st),A.side=rs,A.needsUpdate=!0,zs(A,Y,st),A.side=ga):zs(A,Y,st)}this.compile=function(A,Y,st=null){st===null&&(st=A),L=Ot.get(st),L.init(Y),b.push(L),st.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(L.pushLight(at),at.castShadow&&L.pushShadow(at))}),A!==st&&A.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(L.pushLight(at),at.castShadow&&L.pushShadow(at))}),L.setupLights();const it=new Set;return A.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Ft=at.material;if(Ft)if(Array.isArray(Ft))for(let Vt=0;Vt<Ft.length;Vt++){const It=Ft[Vt];Kn(It,st,at),it.add(It)}else Kn(Ft,st,at),it.add(Ft)}),L=b.pop(),it},this.compileAsync=function(A,Y,st=null){const it=this.compile(A,Y,st);return new Promise(at=>{function Ft(){if(it.forEach(function(Vt){D.get(Vt).currentProgram.isReady()&&it.delete(Vt)}),it.size===0){at(A);return}setTimeout(Ft,10)}he.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let ls=null;function kr(A){ls&&ls(A)}function Xr(){Dn.stop()}function Wr(){Dn.start()}const Dn=new Mv;Dn.setAnimationLoop(kr),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(A){ls=A,Nt.setAnimationLoop(A),A===null?Dn.stop():Dn.start()},Nt.addEventListener("sessionstart",Xr),Nt.addEventListener("sessionend",Wr),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;K!==null&&K.renderStart(A,Y);const st=Nt.enabled===!0&&Nt.isPresenting===!0,it=P!==null&&(q===null||st)&&P.begin(W,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Y),Y=Nt.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,Y,q),L=Ot.get(A,b.length),L.init(Y),L.state.textureUnits=E.getTextureUnits(),b.push(L),ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Qt.setFromProjectionMatrix(ve,Vi,Y.reversedDepth),fe=this.localClippingEnabled,ke=Pt.init(this.clippingPlanes,fe),V=ft.get(A,F.length),V.init(),F.push(V),Nt.enabled===!0&&Nt.isPresenting===!0){const Vt=W.xr.getDepthSensingMesh();Vt!==null&&on(Vt,Y,-1/0,W.sortObjects)}on(A,Y,0,W.sortObjects),V.finish(),W.sortObjects===!0&&V.sort(tt,Mt),je=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,je&&Dt.addToRenderList(V,A),this.info.render.frame++,ke===!0&&Pt.beginShadows();const at=L.state.shadowsArray;if(Ut.render(at,A,Y),ke===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&P.hasRenderPass())===!1){const Vt=V.opaque,It=V.transmissive;if(L.setupLights(),Y.isArrayCamera){const Xt=Y.cameras;if(It.length>0)for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt];qi(Vt,It,A,re)}je&&Dt.render(A);for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt];bn(V,A,re,re.viewport)}}else It.length>0&&qi(Vt,It,A,Y),je&&Dt.render(A),bn(V,A,Y)}q!==null&&mt===0&&(E.updateMultisampleRenderTarget(q),E.updateRenderTargetMipmap(q)),it&&P.end(W),A.isScene===!0&&A.onAfterRender(W,A,Y),Rt.resetDefaultState(),O=-1,B=null,b.pop(),b.length>0?(L=b[b.length-1],E.setTextureUnits(L.state.textureUnits),ke===!0&&Pt.setGlobalState(W.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?V=F[F.length-1]:V=null,K!==null&&K.renderEnd()};function on(A,Y,st,it){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qt.intersectsSprite(A)){it&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const Vt=wt.update(A),It=A.material;It.visible&&V.push(A,Vt,It,st,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qt.intersectsObject(A))){const Vt=wt.update(A),It=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),le.copy(Vt.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(It)){const Xt=Vt.groups;for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt],Yt=It[re.materialIndex];Yt&&Yt.visible&&V.push(A,Vt,Yt,st,le.z,re)}}else It.visible&&V.push(A,Vt,It,st,le.z,null)}}const Ft=A.children;for(let Vt=0,It=Ft.length;Vt<It;Vt++)on(Ft[Vt],Y,st,it)}function bn(A,Y,st,it){const{opaque:at,transmissive:Ft,transparent:Vt}=A;L.setupLightsView(st),ke===!0&&Pt.setGlobalState(W.clippingPlanes,st),it&&Ct.viewport(ot.copy(it)),at.length>0&&ya(at,Y,st),Ft.length>0&&ya(Ft,Y,st),Vt.length>0&&ya(Vt,Y,st),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function qi(A,Y,st,it){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[it.id]===void 0){const Yt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[it.id]=new Xi(1,1,{generateMipmaps:!0,type:Yt?Sa:ui,minFilter:Os,samples:Math.max(4,ze.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const Ft=L.state.transmissionRenderTarget[it.id],Vt=it.viewport||ot;Ft.setSize(Vt.z*W.transmissionResolutionScale,Vt.w*W.transmissionResolutionScale);const It=W.getRenderTarget(),Xt=W.getActiveCubeFace(),kt=W.getActiveMipmapLevel();W.setRenderTarget(Ft),W.getClearColor(I),Q=W.getClearAlpha(),Q<1&&W.setClearColor(16777215,.5),W.clear(),je&&Dt.render(st);const Zt=W.toneMapping;W.toneMapping=ki;const re=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),L.setupLightsView(it),ke===!0&&Pt.setGlobalState(W.clippingPlanes,it),ya(A,st,it),E.updateMultisampleRenderTarget(Ft),E.updateRenderTargetMipmap(Ft),he.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ae=0,Ke=Y.length;Ae<Ke;Ae++){const Xe=Y[Ae],{object:Le,geometry:Oe,material:Gt,group:Un}=Xe;if(Gt.side===ga&&Le.layers.test(it.layers)){const me=Gt.side;Gt.side=Yn,Gt.needsUpdate=!0,$o(Le,st,it,Oe,Gt,Un),Gt.side=me,Gt.needsUpdate=!0,Yt=!0}}Yt===!0&&(E.updateMultisampleRenderTarget(Ft),E.updateRenderTargetMipmap(Ft))}W.setRenderTarget(It,Xt,kt),W.setClearColor(I,Q),re!==void 0&&(it.viewport=re),W.toneMapping=Zt}function ya(A,Y,st){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let at=0,Ft=A.length;at<Ft;at++){const Vt=A[at],{object:It,geometry:Xt,group:kt}=Vt;let Zt=Vt.material;Zt.allowOverride===!0&&it!==null&&(Zt=it),It.layers.test(st.layers)&&$o(It,Y,st,Xt,Zt,kt)}}function $o(A,Y,st,it,at,Ft){A.onBeforeRender(W,Y,st,it,at,Ft),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),at.onBeforeRender(W,Y,st,it,A,Ft),at.transparent===!0&&at.side===ga&&at.forceSinglePass===!1?(at.side=Yn,at.needsUpdate=!0,W.renderBufferDirect(st,Y,it,at,A,Ft),at.side=rs,at.needsUpdate=!0,W.renderBufferDirect(st,Y,it,at,A,Ft),at.side=ga):W.renderBufferDirect(st,Y,it,at,A,Ft),A.onAfterRender(W,Y,st,it,at,Ft)}function zs(A,Y,st){Y.isScene!==!0&&(Y=rn);const it=D.get(A),at=L.state.lights,Ft=L.state.shadowsArray,Vt=at.state.version,It=Lt.getParameters(A,at.state,Ft,Y,st,L.state.lightProbeGridArray),Xt=Lt.getProgramCacheKey(It);let kt=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,it.fog=Y.fog;const Zt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=J.get(A.envMap||it.environment,Zt),it.envMapRotation=it.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",tn),kt=new Map,it.programs=kt);let re=kt.get(Xt);if(re!==void 0){if(it.currentProgram===re&&it.lightsStateVersion===Vt)return Ea(A,It),re}else It.uniforms=Lt.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,st,It),A.onBeforeCompile(It,W),re=Lt.acquireProgram(It,Xt),kt.set(Xt,re),it.uniforms=It.uniforms;const Yt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=Pt.uniform),Ea(A,It),it.needsLights=cs(A),it.lightsStateVersion=Vt,it.needsLights&&(Yt.ambientLightColor.value=at.state.ambient,Yt.lightProbe.value=at.state.probe,Yt.directionalLights.value=at.state.directional,Yt.directionalLightShadows.value=at.state.directionalShadow,Yt.spotLights.value=at.state.spot,Yt.spotLightShadows.value=at.state.spotShadow,Yt.rectAreaLights.value=at.state.rectArea,Yt.ltc_1.value=at.state.rectAreaLTC1,Yt.ltc_2.value=at.state.rectAreaLTC2,Yt.pointLights.value=at.state.point,Yt.pointLightShadows.value=at.state.pointShadow,Yt.hemisphereLights.value=at.state.hemi,Yt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Yt.spotLightMatrix.value=at.state.spotLightMatrix,Yt.spotLightMap.value=at.state.spotLightMap,Yt.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=L.state.lightProbeGridArray.length>0,it.currentProgram=re,it.uniformsList=null,re}function jr(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=zc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Ea(A,Y){const st=D.get(A);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function qr(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;U.setFromMatrixPosition(Y.matrixWorld);for(let st=0,it=A.length;st<it;st++){const at=A[st];if(at.texture!==null&&at.boundingBox.containsPoint(U))return at}return null}function ba(A,Y,st,it,at){Y.isScene!==!0&&(Y=rn),E.resetTextureUnits();const Ft=Y.fog,Vt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Y.environment:null,It=q===null?W.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ee.workingColorSpace,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,kt=J.get(it.envMap||Vt,Xt),Zt=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,re=!!st.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Yt=!!st.morphAttributes.position,Ae=!!st.morphAttributes.normal,Ke=!!st.morphAttributes.color;let Xe=ki;it.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Xe=W.toneMapping);const Le=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Oe=Le!==void 0?Le.length:0,Gt=D.get(it),Un=L.state.lights;if(ke===!0&&(fe===!0||A!==B)){const Ue=A===B&&it.id===O;Pt.setState(it,A,Ue)}let me=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Un.state.version||Gt.outputColorSpace!==It||at.isBatchedMesh&&Gt.batching===!1||!at.isBatchedMesh&&Gt.batching===!0||at.isBatchedMesh&&Gt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Gt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Gt.instancing===!1||!at.isInstancedMesh&&Gt.instancing===!0||at.isSkinnedMesh&&Gt.skinning===!1||!at.isSkinnedMesh&&Gt.skinning===!0||at.isInstancedMesh&&Gt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Gt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Gt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Gt.instancingMorph===!1&&at.morphTexture!==null||Gt.envMap!==kt||it.fog===!0&&Gt.fog!==Ft||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Pt.numPlanes||Gt.numIntersection!==Pt.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==re||Gt.morphTargets!==Yt||Gt.morphNormals!==Ae||Gt.morphColors!==Ke||Gt.toneMapping!==Xe||Gt.morphTargetsCount!==Oe||!!Gt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Gt.__version=it.version);let gn=Gt.currentProgram;me===!0&&(gn=zs(it,Y,at),K&&it.isNodeMaterial&&K.onUpdateProgram(it,gn,Gt));let Qn=!1,Mi=!1,Jn=!1;const Pe=gn.getUniforms(),Qe=Gt.uniforms;if(Ct.useProgram(gn.program)&&(Qn=!0,Mi=!0,Jn=!0),it.id!==O&&(O=it.id,Mi=!0),Gt.needsLights){const Ue=qr(L.state.lightProbeGridArray,at);Gt.lightProbeGrid!==Ue&&(Gt.lightProbeGrid=Ue,Mi=!0)}if(Qn||B!==A){Ct.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pe.setValue(j,"projectionMatrix",A.projectionMatrix),Pe.setValue(j,"viewMatrix",A.matrixWorldInverse);const Ni=Pe.map.cameraPosition;Ni!==void 0&&Ni.setValue(j,Ne.setFromMatrixPosition(A.matrixWorld)),ze.logarithmicDepthBuffer&&Pe.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Pe.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Mi=!0,Jn=!0)}if(Gt.needsLights&&(Un.state.directionalShadowMap.length>0&&Pe.setValue(j,"directionalShadowMap",Un.state.directionalShadowMap,E),Un.state.spotShadowMap.length>0&&Pe.setValue(j,"spotShadowMap",Un.state.spotShadowMap,E),Un.state.pointShadowMap.length>0&&Pe.setValue(j,"pointShadowMap",Un.state.pointShadowMap,E)),at.isSkinnedMesh){Pe.setOptional(j,at,"bindMatrix"),Pe.setOptional(j,at,"bindMatrixInverse");const Ue=at.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(j,"boneTexture",Ue.boneTexture,E))}at.isBatchedMesh&&(Pe.setOptional(j,at,"batchingTexture"),Pe.setValue(j,"batchingTexture",at._matricesTexture,E),Pe.setOptional(j,at,"batchingIdTexture"),Pe.setValue(j,"batchingIdTexture",at._indirectTexture,E),Pe.setOptional(j,at,"batchingColorTexture"),at._colorsTexture!==null&&Pe.setValue(j,"batchingColorTexture",at._colorsTexture,E));const yi=st.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&ne.update(at,st,gn),(Mi||Gt.receiveShadow!==at.receiveShadow)&&(Gt.receiveShadow=at.receiveShadow,Pe.setValue(j,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Y.environment!==null&&(Qe.envMapIntensity.value=Y.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=hA()),Mi){if(Pe.setValue(j,"toneMappingExposure",W.toneMappingExposure),Gt.needsLights&&Ta(Qe,Jn),Ft&&it.fog===!0&&ct.refreshFogUniforms(Qe,Ft),ct.refreshMaterialUniforms(Qe,it,ht,At,L.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ue=Gt.lightProbeGrid;Qe.probesSH.value=Ue.texture,Qe.probesMin.value.copy(Ue.boundingBox.min),Qe.probesMax.value.copy(Ue.boundingBox.max),Qe.probesResolution.value.copy(Ue.resolution)}zc.upload(j,jr(Gt),Qe,E)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(zc.upload(j,jr(Gt),Qe,E),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Pe.setValue(j,"center",at.center),Pe.setValue(j,"modelViewMatrix",at.modelViewMatrix),Pe.setValue(j,"normalMatrix",at.normalMatrix),Pe.setValue(j,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const Ue=it.uniformsGroups;for(let Ni=0,Ra=Ue.length;Ni<Ra;Ni++){const us=Ue[Ni];pt.update(us,gn),pt.bind(us,gn)}}return gn}function Ta(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function cs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return mt},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Y,st){const it=D.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=Y,D.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:st,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const st=D.get(A);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const Aa=j.createFramebuffer();this.setRenderTarget=function(A,Y=0,st=0){q=A,ut=Y,mt=st;let it=null,at=!1,Ft=!1;if(A){const It=D.get(A);if(It.__useDefaultFramebuffer!==void 0){Ct.bindFramebuffer(j.FRAMEBUFFER,It.__webglFramebuffer),ot.copy(A.viewport),gt.copy(A.scissor),yt=A.scissorTest,Ct.viewport(ot),Ct.scissor(gt),Ct.setScissorTest(yt),O=-1;return}else if(It.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(It.__hasExternalTextures)E.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(It.__boundDepthTexture!==Zt){if(Zt!==null&&D.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ft=!0);const kt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[Y])?it=kt[Y][st]:it=kt[Y],at=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?it=D.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?it=kt[st]:it=kt,ot.copy(A.viewport),gt.copy(A.scissor),yt=A.scissorTest}else ot.copy(bt).multiplyScalar(ht).floor(),gt.copy(Ht).multiplyScalar(ht).floor(),yt=$t;if(st!==0&&(it=Aa),Ct.bindFramebuffer(j.FRAMEBUFFER,it)&&Ct.drawBuffers(A,it),Ct.viewport(ot),Ct.scissor(gt),Ct.setScissorTest(yt),at){const It=D.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,st)}else if(Ft){const It=Y;for(let Xt=0;Xt<A.textures.length;Xt++){const kt=D.get(A.textures[Xt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,st,It)}}else if(A!==null&&st!==0){const It=D.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,It.__webglTexture,st)}O=-1},this.readRenderTargetPixels=function(A,Y,st,it,at,Ft,Vt,It=0){if(!(A&&A.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){Ct.bindFramebuffer(j.FRAMEBUFFER,Xt);try{const kt=A.textures[It],Zt=kt.format,re=kt.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+It),!ze.textureFormatReadable(Zt)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(re)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-it&&st>=0&&st<=A.height-at&&j.readPixels(Y,st,it,at,k.convert(Zt),k.convert(re),Ft)}finally{const kt=q!==null?D.get(q).__webglFramebuffer:null;Ct.bindFramebuffer(j.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,st,it,at,Ft,Vt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(Y>=0&&Y<=A.width-it&&st>=0&&st<=A.height-at){Ct.bindFramebuffer(j.FRAMEBUFFER,Xt);const kt=A.textures[It],Zt=kt.format,re=kt.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+It),!ze.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Yt),j.bufferData(j.PIXEL_PACK_BUFFER,Ft.byteLength,j.STREAM_READ),j.readPixels(Y,st,it,at,k.convert(Zt),k.convert(re),0);const Ae=q!==null?D.get(q).__webglFramebuffer:null;Ct.bindFramebuffer(j.FRAMEBUFFER,Ae);const Ke=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await DM(j,Ke,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Yt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ft),j.deleteBuffer(Yt),j.deleteSync(Ke),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,st=0){const it=Math.pow(2,-st),at=Math.floor(A.image.width*it),Ft=Math.floor(A.image.height*it),Vt=Y!==null?Y.x:0,It=Y!==null?Y.y:0;E.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,st,0,0,Vt,It,at,Ft),Ct.unbindTexture()};const un=j.createFramebuffer(),tl=j.createFramebuffer();this.copyTextureToTexture=function(A,Y,st=null,it=null,at=0,Ft=0){let Vt,It,Xt,kt,Zt,re,Yt,Ae,Ke;const Xe=A.isCompressedTexture?A.mipmaps[Ft]:A.image;if(st!==null)Vt=st.max.x-st.min.x,It=st.max.y-st.min.y,Xt=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,Zt=st.min.y,re=st.isBox3?st.min.z:0;else{const Qe=Math.pow(2,-at);Vt=Math.floor(Xe.width*Qe),It=Math.floor(Xe.height*Qe),A.isDataArrayTexture?Xt=Xe.depth:A.isData3DTexture?Xt=Math.floor(Xe.depth*Qe):Xt=1,kt=0,Zt=0,re=0}it!==null?(Yt=it.x,Ae=it.y,Ke=it.z):(Yt=0,Ae=0,Ke=0);const Le=k.convert(Y.format),Oe=k.convert(Y.type);let Gt;Y.isData3DTexture?(E.setTexture3D(Y,0),Gt=j.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(E.setTexture2DArray(Y,0),Gt=j.TEXTURE_2D_ARRAY):(E.setTexture2D(Y,0),Gt=j.TEXTURE_2D),Ct.activeTexture(j.TEXTURE0),Ct.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),Ct.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Ct.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const Un=Ct.getParameter(j.UNPACK_ROW_LENGTH),me=Ct.getParameter(j.UNPACK_IMAGE_HEIGHT),gn=Ct.getParameter(j.UNPACK_SKIP_PIXELS),Qn=Ct.getParameter(j.UNPACK_SKIP_ROWS),Mi=Ct.getParameter(j.UNPACK_SKIP_IMAGES);Ct.pixelStorei(j.UNPACK_ROW_LENGTH,Xe.width),Ct.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Xe.height),Ct.pixelStorei(j.UNPACK_SKIP_PIXELS,kt),Ct.pixelStorei(j.UNPACK_SKIP_ROWS,Zt),Ct.pixelStorei(j.UNPACK_SKIP_IMAGES,re);const Jn=A.isDataArrayTexture||A.isData3DTexture,Pe=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Qe=D.get(A),yi=D.get(Y),Ue=D.get(Qe.__renderTarget),Ni=D.get(yi.__renderTarget);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ra=0;Ra<Xt;Ra++)Jn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,D.get(A).__webglTexture,at,re+Ra),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,D.get(Y).__webglTexture,Ft,Ke+Ra)),j.blitFramebuffer(kt,Zt,Vt,It,Yt,Ae,Vt,It,j.DEPTH_BUFFER_BIT,j.NEAREST);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(at!==0||A.isRenderTargetTexture||D.has(A)){const Qe=D.get(A),yi=D.get(Y);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,un),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,tl);for(let Ue=0;Ue<Xt;Ue++)Jn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Qe.__webglTexture,at,re+Ue):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Qe.__webglTexture,at),Pe?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,yi.__webglTexture,Ft,Ke+Ue):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,yi.__webglTexture,Ft),at!==0?j.blitFramebuffer(kt,Zt,Vt,It,Yt,Ae,Vt,It,j.COLOR_BUFFER_BIT,j.NEAREST):Pe?j.copyTexSubImage3D(Gt,Ft,Yt,Ae,Ke+Ue,kt,Zt,Vt,It):j.copyTexSubImage2D(Gt,Ft,Yt,Ae,kt,Zt,Vt,It);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pe?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Gt,Ft,Yt,Ae,Ke,Vt,It,Xt,Le,Oe,Xe.data):Y.isCompressedArrayTexture?j.compressedTexSubImage3D(Gt,Ft,Yt,Ae,Ke,Vt,It,Xt,Le,Xe.data):j.texSubImage3D(Gt,Ft,Yt,Ae,Ke,Vt,It,Xt,Le,Oe,Xe):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ft,Yt,Ae,Vt,It,Le,Oe,Xe.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ft,Yt,Ae,Xe.width,Xe.height,Le,Xe.data):j.texSubImage2D(j.TEXTURE_2D,Ft,Yt,Ae,Vt,It,Le,Oe,Xe);Ct.pixelStorei(j.UNPACK_ROW_LENGTH,Un),Ct.pixelStorei(j.UNPACK_IMAGE_HEIGHT,me),Ct.pixelStorei(j.UNPACK_SKIP_PIXELS,gn),Ct.pixelStorei(j.UNPACK_SKIP_ROWS,Qn),Ct.pixelStorei(j.UNPACK_SKIP_IMAGES,Mi),Ft===0&&Y.generateMipmaps&&j.generateMipmap(Gt),Ct.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Ct.unbindTexture()},this.resetState=function(){ut=0,mt=0,q=null,Ct.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}function wv({variant:o="hero",label:e="Animated 3D system model"}){const i=zi.useRef(null);return zi.useEffect(()=>{const s=i.current;if(!s)return;const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c=new jM,h=new ci(42,1,.1,100);h.position.set(o==="history"?.2:-.2,o==="history"?1.1:.85,7.2);const p=new dA({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});p.outputColorSpace=li,p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),p.domElement.setAttribute("aria-hidden","true"),s.appendChild(p.domElement);const m=new as;m.rotation.x=o==="history"?-.24:-.16,m.rotation.y=o==="history"?-.34:.28,c.add(m);const d=new py(9419007,1.65),M=new x_(6678978,35,18);M.position.set(-3,3.2,4);const x=new x_(7186687,28,18);x.position.set(3.4,-1.8,3),c.add(d,M,x);const g=new de("#62a8ff"),y=new de("#30e59a"),T=new de("#8b5cf6"),w=new cy({color:14412542,roughness:.18,metalness:.12,transmission:.35,thickness:.7,transparent:!0,opacity:.24,emissive:g,emissiveIntensity:.12}),S=new Nr({color:10405375,wireframe:!0,transparent:!0,opacity:.38}),v=new Nr({color:g,transparent:!0,opacity:.42}),C=new Nr({color:y,transparent:!0,opacity:.36}),N=new Nr({color:T,transparent:!0,opacity:.28}),U=[new Bc({color:10405375,emissive:6465791,emissiveIntensity:1.4,roughness:.36}),new Bc({color:9435084,emissive:3204506,emissiveIntensity:1.25,roughness:.34})],V=new Pn(new Wc(.88,1),w),L=new Pn(new Wc(1.18,1),S);m.add(V,L);const F=new as,b=new Pn(new qo(2.26,.012,8,144),v),P=new Pn(new qo(1.68,.012,8,144),C),W=new Pn(new qo(2.92,.009,8,144),N);b.rotation.x=Math.PI/2.7,P.rotation.x=Math.PI/2.15,P.rotation.y=Math.PI/5,W.rotation.x=Math.PI/2.95,W.rotation.z=Math.PI/4,F.add(b,P,W),m.add(F);const H=new as,K=new Zd(.09,20,20),ut=o==="history"?11:9;for(let ht=0;ht<ut;ht+=1){const tt=ht/ut*Math.PI*2,Mt=ht%3===0?2.52:2.04,bt=new Pn(K,U[ht%U.length]);bt.position.set(Math.cos(tt)*Mt,Math.sin(tt*1.8)*.28,Math.sin(tt)*Mt*.34),bt.scale.setScalar(ht%4===0?1.35:1),H.add(bt)}m.add(H);const mt=new as,q=new Gr(.36,.36,.36);for(let ht=0;ht<7;ht+=1){const tt=new Pn(q,new Bc({color:ht%2?1319219:1190175,emissive:ht%2?3235729:2061906,emissiveIntensity:.5,roughness:.28,metalness:.42})),Mt=ht%2===0?-1:1;tt.position.set(Mt*(1.35+ht*.1),-1.2+ht*.24,-.44+ht*.08),tt.rotation.set(ht*.22,ht*.32,ht*.16),mt.add(tt)}m.add(mt);const O=new Zn,B=o==="history"?95:70,ot=new Float32Array(B*3);for(let ht=0;ht<B;ht+=1)ot[ht*3]=(Math.random()-.5)*7.2,ot[ht*3+1]=(Math.random()-.5)*4.4,ot[ht*3+2]=(Math.random()-.5)*4.2;O.setAttribute("position",new Ui(ot,3));const gt=new ny(O,new pv({color:o==="history"?9435084:10405375,size:.028,transparent:!0,opacity:.55,depthWrite:!1}));m.add(gt);let yt=0;const I=new _y,Q=()=>{const{width:ht,height:tt}=s.getBoundingClientRect();p.setSize(Math.max(ht,1),Math.max(tt,1),!1),h.aspect=Math.max(ht,1)/Math.max(tt,1),h.updateProjectionMatrix()},St=()=>{const ht=I.getElapsedTime();l||(m.rotation.y+=o==="history"?.0022:.0018,F.rotation.z=ht*(o==="history"?.16:.13),b.rotation.z=ht*.28,P.rotation.z=-ht*.22,V.rotation.y=ht*.36,V.rotation.x=ht*.2,L.rotation.y=-ht*.2,H.children.forEach((tt,Mt)=>{tt.position.y+=Math.sin(ht*1.4+Mt)*9e-4}),mt.rotation.y=Math.sin(ht*.7)*.12,gt.rotation.y=-ht*.028),p.render(c,h),yt=window.requestAnimationFrame(St)};Q(),St();const At=new ResizeObserver(Q);return At.observe(s),()=>{window.cancelAnimationFrame(yt),At.disconnect(),s.removeChild(p.domElement),O.dispose(),K.dispose(),q.dispose(),V.geometry.dispose(),L.geometry.dispose(),b.geometry.dispose(),P.geometry.dispose(),W.geometry.dispose(),w.dispose(),S.dispose(),v.dispose(),C.dispose(),N.dispose(),U.forEach(ht=>ht.dispose()),mt.children.forEach(ht=>ht.material.dispose()),gt.material.dispose(),p.dispose()}},[o]),G.jsx("div",{className:`three-scene three-scene-${o}`,ref:i,role:"img","aria-label":e})}function pA({profile:o,heroSignals:e,heroInsights:i,heroCapabilities:s,onNavClick:l}){return G.jsx("section",{className:"hero-section",id:"home","aria-labelledby":"hero-title",children:G.jsx("div",{className:"shell hero-shell",children:G.jsxs("div",{className:"hero-stage",children:[G.jsxs("div",{className:"hero-copy",children:[G.jsxs("div",{className:"hero-kicker",children:[G.jsx("span",{children:"Freelance"}),G.jsx("span",{children:o.role})]}),G.jsx("h1",{id:"hero-title",children:"Hi, I am Boris Matthew Dairo"}),G.jsx("p",{children:o.summary}),G.jsx("div",{className:"hero-actions",children:G.jsx("a",{className:"hire-link hero-action",href:"#contact",onClick:c=>l(c,"#contact"),children:"Hire Me"})}),G.jsx("ul",{className:"hero-signals","aria-label":"Portfolio highlights",children:e.map(c=>G.jsxs("li",{children:[G.jsx("span",{"aria-hidden":"true"}),c]},c))}),G.jsx("div",{className:"hero-dashboard","aria-label":"Build process highlights",children:i.map(c=>G.jsxs("div",{children:[G.jsx("strong",{children:c.value}),G.jsx("span",{children:c.label})]},c.label))}),G.jsx("div",{className:"hero-capabilities","aria-label":"Capabilities",children:s.map(c=>G.jsx("span",{children:c},c))})]}),G.jsxs("div",{className:"hero-visual",children:[G.jsx(wv,{variant:"hero",label:"3D orbiting interface model"}),G.jsx("div",{className:"hero-orbit hero-orbit-one","aria-hidden":"true"}),G.jsx("div",{className:"hero-orbit hero-orbit-two","aria-hidden":"true"}),G.jsx("div",{className:"hero-cube hero-cube-one","aria-hidden":"true"}),G.jsx("div",{className:"hero-cube hero-cube-two","aria-hidden":"true"}),G.jsxs("figure",{className:"portrait-stage","aria-label":"Portrait of Boris Matthew Dairo",children:[G.jsx("div",{className:"portrait-depth portrait-depth-back","aria-hidden":"true"}),G.jsx("div",{className:"portrait-depth portrait-depth-mid","aria-hidden":"true"}),G.jsxs("div",{className:"portrait-frame",children:[G.jsx("img",{src:ZS,width:"1364",height:"1536",alt:"Boris Matthew Dairo wearing graduation attire",fetchPriority:"high"}),G.jsx("div",{className:"portrait-sheen","aria-hidden":"true"})]})]}),G.jsxs("div",{className:"hero-badge hero-badge-design",children:[G.jsx("strong",{children:"AI Systems"}),G.jsx("span",{children:"Automation ready"})]}),G.jsxs("div",{className:"hero-badge hero-badge-stack",children:[G.jsx("strong",{children:"UI UX"}),G.jsx("span",{children:"React interfaces"})]}),G.jsxs("div",{className:"hero-badge hero-badge-code",children:[G.jsx("strong",{children:"3D Web"}),G.jsx("span",{children:"Glass interface"})]}),G.jsxs("div",{className:"hero-badge hero-badge-build",children:[G.jsx("strong",{children:"Clean Builds"}),G.jsx("span",{children:"Launch focused"})]})]}),G.jsxs("a",{className:"scroll-cue",href:"#about",children:["Scroll Down",G.jsx("span",{"aria-hidden":"true",children:"v"})]})]})})})}function mA({history:o}){return G.jsx("section",{className:"dark-section section history-section",id:"history","aria-labelledby":"history-title",children:G.jsxs("div",{className:"shell",children:[G.jsxs("div",{className:"history-stage",children:[G.jsxs("div",{className:"history-heading",children:[G.jsx("h2",{className:"impact muted-title",id:"history-title",children:"History"}),G.jsx("p",{children:"A focused path through interface design, automation, and system building for real operational workflows."})]}),G.jsxs("div",{className:"history-visual","aria-hidden":"true",children:[G.jsx(wv,{variant:"history",label:"3D timeline system model"}),G.jsx("div",{className:"history-axis",children:o.map(e=>G.jsx("span",{},e.title))})]})]}),G.jsx("div",{className:"timeline",children:o.map((e,i)=>G.jsxs("article",{className:"timeline-row",children:[G.jsxs("div",{className:"timeline-meta",children:[G.jsx("strong",{children:String(i+1).padStart(2,"0")}),G.jsx("p",{children:e.period}),G.jsx("span",{children:e.focus})]}),G.jsxs("div",{className:"timeline-copy",children:[G.jsx("h3",{children:e.title}),G.jsx("p",{children:e.description}),G.jsx("ul",{children:e.points.map(s=>G.jsx("li",{children:s},s))})]}),G.jsx("p",{className:"timeline-note",children:e.highlight})]},e.title))})]})})}function gA({services:o}){return G.jsx("section",{className:"light-section section",id:"services","aria-labelledby":"services-title",children:G.jsxs("div",{className:"shell",children:[G.jsxs("div",{className:"split-heading",children:[G.jsx("h2",{className:"impact section-title",id:"services-title",children:"Services"}),G.jsx("p",{children:"Focused builds for people who need clean interfaces, reliable automation, and systems that feel easy to use."})]}),G.jsx("div",{className:"services-grid",children:o.map((e,i)=>G.jsxs("article",{className:"service-card",children:[G.jsx("span",{className:"service-number","aria-hidden":"true",children:String(i+1).padStart(2,"0")}),G.jsx("p",{children:e.eyebrow}),G.jsx("h3",{children:e.title}),G.jsx("p",{children:e.description})]},e.title))})]})})}function _A({coreStack:o,carouselStack:e}){return G.jsx("section",{className:"light-section section",id:"skills","aria-labelledby":"skills-title",children:G.jsxs("div",{className:"shell",children:[G.jsxs("div",{className:"split-heading",children:[G.jsx("h2",{className:"impact section-title",id:"skills-title",children:"Skills"}),G.jsx("p",{children:"Tools I use to design interfaces, connect data, automate workflows, and ship reliable web systems."})]}),G.jsx("div",{className:"stack-layout",children:G.jsx("ul",{className:"stack-grid","aria-label":"Core technology stack",children:o.map(i=>G.jsxs("li",{children:[G.jsx("span",{className:"stack-icon","aria-hidden":"true",children:G.jsx("img",{src:i.icon,alt:"",loading:"lazy"})}),G.jsx("strong",{children:i.label}),G.jsx("small",{children:i.group})]},i.label))})}),G.jsx("div",{className:"stack-carousel","aria-label":"More technologies",children:G.jsx("div",{className:"stack-track",children:e.map((i,s)=>G.jsxs("div",{className:"stack-pill",children:[G.jsx("span",{"aria-hidden":"true",children:G.jsx("img",{src:i.icon,alt:"",loading:"lazy"})}),G.jsx("strong",{children:i.label}),G.jsx("small",{children:i.group})]},`${i.label}-${s}`))})})]})})}function vA({projects:o}){return G.jsx("section",{className:"dark-section section",id:"work","aria-labelledby":"work-title",children:G.jsxs("div",{className:"shell",children:[G.jsxs("div",{className:"work-heading",children:[G.jsx("h2",{className:"impact section-title",id:"work-title",children:"Work"}),G.jsx("p",{children:"Selected systems with clear workflows, polished interfaces, and reliable data movement."})]}),G.jsx("div",{className:"project-list",children:o.map((e,i)=>G.jsxs("article",{className:"project-row",children:[G.jsx("div",{className:`project-visual visual-${i+1}`,"aria-hidden":"true",children:G.jsxs("div",{className:"visual-screen",children:[G.jsx("span",{}),G.jsx("span",{}),G.jsx("span",{}),G.jsx("span",{})]})}),G.jsxs("div",{className:"project-copy",children:[G.jsx("p",{children:e.category}),G.jsx("h3",{children:e.title}),G.jsx("p",{children:e.description}),G.jsx("div",{className:"project-stats","aria-label":`${e.title} highlights`,children:e.stats.map(s=>G.jsx("span",{children:s},s))}),G.jsx("ul",{"aria-label":`${e.title} technologies`,children:e.tags.map(s=>G.jsx("li",{children:s},s))})]})]},e.title))})]})})}const Ur={name:"Boris Matthew Dairo",mark:"BD",role:"Full Stack and AI Automation",location:"Davao Core Node PH",email:"hello@example.com",summary:"I design full stack web systems, AI automations, and polished interfaces that help teams remove manual work, move faster, and ship with confidence.",links:[{label:"GitHub",href:"https://github.com/"},{label:"LinkedIn",href:"https://www.linkedin.com/"},{label:"Resume",href:"#"}]},Dv=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Skills",href:"#skills"},{label:"Work",href:"#work"},{label:"History",href:"#history"},{label:"Contact",href:"#contact"}],xA=[{value:"50+",label:"Builds Shipped"},{value:"200+",label:"Automated Runs"},{value:"5+",label:"Years Experience"}],SA=["React + Vite builds","AI workflow automation","Mobile first interfaces"],MA=[{value:"01",label:"Discovery"},{value:"02",label:"Interface"},{value:"03",label:"Automation"}],yA=["Landing pages","Dashboards","Workflow systems","API bridges"],EA=[{eyebrow:"Product Design",title:"Portfolio and Landing Pages",description:"Modern responsive pages that present your brand clearly, load fast, and guide visitors toward action."},{eyebrow:"Automation",title:"AI Workflow Systems",description:"Practical automations for leads, reports, notifications, content workflows, and repetitive daily tasks."},{eyebrow:"Full Stack",title:"Web App Development",description:"Interactive dashboards, forms, and tools built around real workflows, clean data, and smooth user experience."},{eyebrow:"Integration",title:"API and Toolchain Bridges",description:"Reliable connections between CRMs, databases, spreadsheets, AI tools, email platforms, and internal systems."}],Pd=[{icon:"https://cdn.simpleicons.org/react/61DAFB",label:"React",group:"Frontend"},{icon:"https://cdn.simpleicons.org/vite/646CFF",label:"Vite",group:"Build Tool"},{icon:"https://cdn.simpleicons.org/javascript/F7DF1E",label:"JavaScript",group:"Language"},{icon:"https://cdn.simpleicons.org/python/3776AB",label:"Python",group:"Automation"},{icon:"https://cdn.simpleicons.org/n8n/EA4B71",label:"n8n",group:"Workflow"},{icon:"https://cdn.simpleicons.org/supabase/3FCF8E",label:"Supabase",group:"Backend"},{icon:"https://cdn.simpleicons.org/postgresql/4169E1",label:"Postgres",group:"Database"},{icon:"https://cdn.simpleicons.org/openai/10A37F",label:"OpenAI",group:"AI Systems"},{icon:"https://cdn.simpleicons.org/swagger/85EA2D",label:"REST APIs",group:"Integration"},{icon:"https://cdn.simpleicons.org/github/FFFFFF",label:"GitHub",group:"Versioning"},{icon:"https://cdn.simpleicons.org/tailwindcss/06B6D4",label:"Tailwind",group:"Styling"},{icon:"https://cdn.simpleicons.org/nextdotjs/FFFFFF",label:"Next.js",group:"Framework"},{icon:"https://cdn.simpleicons.org/nodedotjs/5FA04E",label:"Node.js",group:"Runtime"},{icon:"https://cdn.simpleicons.org/firebase/FFCA28",label:"Firebase",group:"Backend"},{icon:"https://cdn.simpleicons.org/docker/2496ED",label:"Docker",group:"DevOps"},{icon:"https://cdn.simpleicons.org/cloudflare/F38020",label:"Cloudflare",group:"Deploy"}],bA=Pd.slice(0,8),TA=[...Pd,...Pd],AA=[{title:"Nebula Dash",category:"Fintech Dashboard",description:"A real time asset dashboard with portfolio states, alerts, and clean interaction patterns for fast decision making.",tags:["React","Supabase"],stats:["Live states","Smart alerts"]},{title:"CoreSync",category:"Backend System",description:"A synchronization gateway that keeps operational data flowing across tools with reliable handoffs and minimal downtime.",tags:["API","Redis"],stats:["API gateway","Data sync"]},{title:"MediTrack Records",category:"Medical Records System",description:"A patient records platform for organizing profiles, visits, notes, and history in a secure and easy to scan clinical workflow.",tags:["React","Database","Forms"],stats:["Patient files","Visit history"]}],RA=[{period:"2024 to Present",focus:"Current Focus",title:"Lead Systems Architect",highlight:"Systems that feel clean, useful, and ready to maintain.",description:"Designing modular web interfaces and automation flows that turn messy operations into reliable day to day tools.",points:["React interfaces","AI workflows","API bridges"]},{period:"2021 to 2024",focus:"Automation Builds",title:"Senior Automation Engineer",highlight:"Less repetitive work, clearer handoffs, faster decisions.",description:"Built connected automation hubs for lead handling, reporting, notifications, and synchronized data movement across tools.",points:["Workflow mapping","Data sync","Operations support"]},{period:"2019 to 2021",focus:"Design Foundation",title:"Full Stack Developer",highlight:"Practical product thinking with polished implementation.",description:"Shaped responsive pages, dashboards, forms, and database connected screens with attention to clarity and performance.",points:["Responsive UI","Forms","Database tools"]}],CA=[{label:"GitHub",href:"https://github.com/"},{label:"LinkedIn",href:"https://www.linkedin.com/"},{label:"Email",href:`mailto:${Ur.email}`},{label:"X",href:"https://x.com/"},{label:"Behance",href:"https://www.behance.net/"}],wA=Dv.filter(({label:o})=>["About","Services","Skills","Work","History","Contact"].includes(o));function DA(){const[o,e]=zi.useState(!1),[i,s]=zi.useState({name:"",email:"",message:""}),[l,c]=zi.useState({}),[h,p]=zi.useState(""),m=zi.useMemo(()=>new Date().getFullYear(),[]);zi.useEffect(()=>{const y=T=>{T.key==="Escape"&&e(!1)};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]),zi.useEffect(()=>{const y=document.querySelectorAll(".section .shell, .contact-shell, .service-card, .project-row, .history-visual, .timeline-row");if(!("IntersectionObserver"in window)){y.forEach(w=>w.classList.add("is-visible"));return}y.forEach(w=>w.classList.add("reveal-item"));const T=new IntersectionObserver(w=>{w.forEach(S=>{S.isIntersecting&&(S.target.classList.add("is-visible"),T.unobserve(S.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"});return y.forEach(w=>T.observe(w)),()=>T.disconnect()},[]);const d=()=>{const y={};return i.name.trim().length<2&&(y.name="Enter at least 2 characters."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email.trim())||(y.email="Enter a valid email address."),i.message.trim().length<10&&(y.message="Write at least 10 characters."),c(y),Object.keys(y).length===0},M=y=>{if(y.preventDefault(),p(""),!d()){p("Please review the highlighted fields.");return}const T=encodeURIComponent(`Portfolio inquiry from ${i.name}`),w=encodeURIComponent(`${i.message}

Reply to: ${i.email}`);window.location.href=`mailto:${Ur.email}?subject=${T}&body=${w}`,p("Opening your email app.")},x=y=>{const{name:T,value:w}=y.target;s(S=>({...S,[T]:w})),l[T]&&c(S=>({...S,[T]:""}))},g=(y,T)=>{if(!T.startsWith("#"))return;const w=document.querySelector(T);if(!w)return;y.preventDefault(),e(!1);const S=document.querySelector(".site-header")?.getBoundingClientRect().height??0,v=window.matchMedia("(prefers-reduced-motion: reduce)").matches,N=(T==="#contact"?document.querySelector(".contact-panel")??w:w).getBoundingClientRect(),U=window.innerHeight-S,V=T==="#contact"?S+Math.max((U-N.height)/2,18):S,L=Math.max(N.top+window.scrollY-V,0);window.history.pushState(null,"",T),window.scrollTo({top:L,behavior:v?"auto":"smooth"})};return G.jsxs(G.Fragment,{children:[G.jsx(YS,{profile:Ur,navItems:Dv,menuOpen:o,onMenuToggle:()=>e(y=>!y),onNavClick:g}),G.jsxs("main",{id:"main",children:[G.jsx(pA,{profile:Ur,heroSignals:SA,heroInsights:MA,heroCapabilities:yA,onNavClick:g}),G.jsx(WS,{metrics:xA}),G.jsx(gA,{services:EA}),G.jsx(_A,{coreStack:bA,carouselStack:TA}),G.jsx(vA,{projects:AA}),G.jsx(mA,{history:RA}),G.jsx(jS,{profile:Ur,form:i,errors:l,status:h,onChange:x,onSubmit:M})]}),G.jsx(qS,{profile:Ur,footerNavItems:wA,socialLinks:CA,currentYear:m})]})}XS.createRoot(document.getElementById("root")).render(G.jsx(FS.StrictMode,{children:G.jsx(DA,{})}));
