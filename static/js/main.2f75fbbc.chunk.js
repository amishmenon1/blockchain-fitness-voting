(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,e,n){t.exports=n(143)},110:function(t,e,n){},123:function(t,e,n){},131:function(t,e){},140:function(t,e){},143:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(34),i=n.n(a),c=(n(110),n(111),n(29)),u=(n(123),n(47));var l=function(t){var e=t.message;return o.a.createElement(u.a,{className:"centeralign"},o.a.createElement("h3",null,"Disclaimer"),o.a.createElement(u.a,null,o.a.createElement("p",null,e)))},s=n(10),f=n(161),h=n(164),d=n(167),p=n(26);var v=function(){var t=o.a.useState(!1),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(p.useMetaMask)(),i=a.connect,c=a.status,u={connectButton:{backgroundColor:"#D6DBDF",color:"#000000"},dialogButton:{backgroundColor:"#1976D2",color:"#FFFFFF"}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{variant:"contained",onClick:function(){return r(!0)},style:u.connectButton},"Connect Wallet"),o.a.createElement(f.a,{open:n,onClose:function(){return r(!1)},maxWidth:"sm",fullWidth:!0},o.a.createElement(h.a,null,"Connect wallet"),o.a.createElement(d.a,null,o.a.createElement(D,{onClick:i,disabled:"connecting"===c,style:u.dialogButton},"connecting"===c?"Connecting":"MetaMask"))))},g=n(48),m=n(166),y={IDLE:"idle",PENDING:"pending",VOTES_LOADING:"votes loading",VOTES_LOADED:"votes loaded",VOTE_ACTION_RESOLVED:"vote resolved",CONTRACTS_LOADED:"contract loaded",LOADING_CONTRACTS:"loading contracts",REJECTED:"rejected",FILTERED:"filtered"},E=n(16);function w(t,e){switch(console.log("votingStatusReducer --- render"),e.type){case y.IDLE:return console.log("votingStatusReducer --- status: idle"),{status:y.IDLE,votingState:null,error:null};case y.PENDING:return console.log("votingStatusReducer --- status: pending"),c.toast.warn("Placing vote...",{position:c.toast.POSITION.TOP_RIGHT,autoClose:5e3}),Object(E.a)({},t,e.votingState,{status:y.PENDING,error:null});case y.VOTES_LOADING:return console.log("votingStatusReducer --- status: votes loading"),Object(E.a)({},t,{status:y.VOTES_LOADING,error:null});case y.VOTE_ACTION_RESOLVED:return console.log("votingStatusReducer --- status: resolved"),c.toast.success("Vote successful. Please wait for vote count to refresh.",{position:c.toast.POSITION.TOP_RIGHT,autoClose:5e3}),Object(E.a)({},e.votingState,{status:y.VOTE_ACTION_RESOLVED,error:null});case y.VOTES_LOADED:return console.log("votingStatusReducer --- status: votes loaded"),Object(E.a)({},e.votingState,{status:y.VOTES_LOADED,error:null});case y.REJECTED:return console.log("VotingContextProvider --- reducer --- status: rejected",e.error),c.toast.error("Failed to fetch. Check Metamask connection: "+e.error,{position:c.toast.POSITION.TOP_RIGHT,autoClose:1e4}),{status:y.REJECTED,error:e.error};default:throw console.log("VotingContextProvider --- reducer --- should not occur"),new Error("Unhandled action type: ".concat(e.type))}}var O={INITIALIZING:"initializing",UNAVAILABLE:"unavailable",NOT_CONNECTED:"notConnected",CONNECTING:"connecting",CONNECTED:"connected"},b=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"voteCardio",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"voteWeightlifting",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"cardioVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"weightliftingVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],L=n(49);function T(){T=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return C()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var s={};function f(){}function h(){}function d(){}var p={};c(p,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(x([])));g&&g!==e&&n.call(g,o)&&(p=g);var m=d.prototype=f.prototype=Object.create(p);function y(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=d,c(m,"constructor",d),c(d,"constructor",h),h.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(m),c(m,i,"Generator"),c(m,o,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var x=o.a.createContext();function C(){var t=Object(r.useReducer)(w,{numWeightliftingVotes:0,numCardioVotes:0,status:y.IDLE,error:null}),e=Object(s.a)(t,2),n=e[0],a=e[1],i=function(){var t=Object(p.useConnectedMetaMask)().ethereum,e=new L.a.providers.Web3Provider(t);return o.a.useMemo(function(){return new L.a.Contract("0xB326177fF7884c2612f7a7cA31D8e24276d85dcd",b,e)},[t])}(),l=Object(p.useMetaMask)().status;function v(){return E.apply(this,arguments)}function E(){return(E=Object(g.a)(T().mark(function t(){var e,n,r;return T().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y.VOTES_LOADING}),t.next=3,i.functions.weightliftingVotes();case 3:return e=t.sent,t.next=6,i.functions.cardioVotes();case 6:n=t.sent,e[0]&&n[0]||console.error("Could not fetch vote counts"),r={numWeightliftingVotes:e[0],numCardioVotes:n[0]},a({votingState:r,type:y.VOTES_LOADED});case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(r.useEffect)(function(){function t(){return(t=Object(g.a)(T().mark(function t(){return T().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}i?function(){t.apply(this,arguments)}():a({type:y.REJECTED,error:"Contracts not deployed to current chain."})},[i]);var C;switch(l){case O.INITIALIZING:return C="Checking Web3 connection...",o.a.createElement(m.a,{variant:"link",id:"loader",className:"text-center"},C);case O.UNAVAILABLE:return void c.toast.warn("Wallet unavailable",{position:c.toast.POSITION.TOP_RIGHT,autoClose:5e3});case O.NOT_CONNECTED:return;case O.CONNECTED:return n.status===y.REJECTED?o.a.createElement(f.a,{open:!0,maxWidth:"sm",fullWidth:!0},o.a.createElement(h.a,null,"An Error Occurred"),o.a.createElement(d.a,null,n.error)):o.a.createElement(u.a,null,o.a.createElement(x.Provider,{value:[n,a]},o.a.createElement(u.a,null,o.a.createElement(P,{loadVotes:v})),o.a.createElement(u.a,null,o.a.createElement(M,{loadVotes:v}))));default:return}}var N=n(163),I=n(162);var D=function(t){var e=t.onClick,n=t.disabled,a=void 0!==n&&n,i=t.style,c=t.children,u=Object(r.useState)(!1),l=Object(s.a)(u,2),f=l[0],h=l[1],d=Object(E.a)({},i,{backgroundColor:f?"#000000":i.backgroundColor,color:f?"#FFFFFF":i.color});return o.a.createElement(I.a,{variant:"contained",onClick:e,onMouseEnter:function(t){h(!0)},onMouseLeave:function(t){h(!1)},style:d,disabled:a},c)};var _=function(t){var e=t.variant,n=t.voteDisabled,a=void 0!==n&&n,i=t.voteCallback,c=Object(r.useState)(!1),u=Object(s.a)(c,2),l=u[0],f=u[1],h={button:{backgroundColor:l?"#000000":"#D6DBDF",color:l?"#FFFFFF":"#000000"},image:{objectFit:"cover",borderRadius:40,height:"80px"},card:{width:"18rem"},header:{marginTop:"10px",marginBottom:"10px",fontFamily:"cursive",fontSize:"large"}};return o.a.createElement(N.a,{key:e.value,variant:"light",style:h.card,className:"mb-2 img-fluid"},o.a.createElement(N.a.Img,{src:e.image,style:h.image}),o.a.createElement(N.a.Header,{style:h.header},e.text),o.a.createElement(N.a.Body,null,o.a.createElement(D,{type:"submit",onClick:i,value:e.value,key:e.value,disabled:a,className:"btn btn-primary btn-block btn-lg",onMouseEnter:function(t){f(!0)},onMouseLeave:function(t){f(!1)},style:h.button,"aria-label":e.value},"Vote!")))},S=n(91),A=n.n(S),k=n(92),j=n.n(k),F=n(93),V=n.n(F),G={WEIGHTLIFTING:{text:"Weightlifting",value:"WEIGHTLIFTING",image:j.a},CARDIO:{text:"Cardio",value:"CARDIO",image:V.a}};function R(){R=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return x()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var s={};function f(){}function h(){}function d(){}var p={};c(p,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(T([])));g&&g!==e&&n.call(g,o)&&(p=g);var m=d.prototype=f.prototype=Object.create(p);function y(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:x}}function x(){return{value:void 0,done:!0}}return h.prototype=d,c(m,"constructor",d),c(d,"constructor",h),h.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(m),c(m,i,"Generator"),c(m,o,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var P=function(t){var e=t.loadVotes,n=G.WEIGHTLIFTING,a=G.CARDIO,i=Object(r.useState)([n,a]),c=Object(s.a)(i,1)[0],l=Object(r.useContext)(x),f=Object(s.a)(l,2),h=f[0],d=f[1],v=function(){var t=Object(p.useConnectedMetaMask)().ethereum;return o.a.useMemo(function(){var e=new L.a.providers.Web3Provider(t).getSigner();return console.log("contract address: ".concat("0x87aA67600E213900bBefa67eBA46afC352c2Fc69")),new L.a.Contract("0xB326177fF7884c2612f7a7cA31D8e24276d85dcd",b,e)},[t])}(),m=Object(r.useState)(!1),E=Object(s.a)(m,2),w=E[0],O=E[1];function T(){return(T=Object(g.a)(R().mark(function t(r){var o,a;return R().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d({type:y.PENDING,votingState:h}),o=r===n.value,a=o?v.voteWeightlifting:v.voteCardio,t.next=5,a();case 5:t.sent.wait().then(function(t){d({type:y.VOTE_ACTION_RESOLVED,votingState:h})}).then(function(){e()});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(r.useEffect)(function(){h&&O(h.status!==y.VOTES_LOADED)},[h.status]);var C={cardDisplay:{display:"flex",justifyContent:"center"},card:{width:"18rem"},spacer:{width:"400px",display:"flex",justifyContent:"center"}};function N(){return c.map(function(t){return o.a.createElement("div",{key:t.value,style:C.spacer,img:A.a},o.a.createElement(_,{variant:t,voteDisabled:w,voteCallback:function(){return function(t){return T.apply(this,arguments)}(t.value)}}))})}return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{style:C.cardDisplay},function(){switch(h.status){case y.IDLE:return o.a.createElement("div",null);case y.PENDING:return console.log("voting status: pending"),N();case y.VOTES_LOADING:case y.VOTE_ACTION_RESOLVED:return N();case y.VOTES_LOADED:return console.log("voting status: votes loaded"),N();default:console.log("default case - unexpected")}}()))};var M=function(){var t=Object(r.useContext)(x),e=Object(s.a)(t,1)[0],n=e.numWeightliftingVotes,a=e.numCardioVotes,i={loader:{color:"#FFFFFF"},scoreboard:{backgroundColor:"#000000",opacity:"80%",color:"#FFFFFF",width:"400px",display:"inline-block",borderRadius:"20px"}};return o.a.createElement(function(){var t,r=function(t){return o.a.createElement("div",{style:i.scoreboard},o.a.createElement(m.a,{style:i.loader,variant:"link",id:"loader",className:"text-center"},t))};switch(e.status){case y.IDLE:return o.a.createElement(o.a.Fragment,null);case y.PENDING:return r("Updating votes...");case y.VOTES_LOADING:return r("Loading votes...");case y.VOTE_ACTION_RESOLVED:return r("Refreshing vote results...");case y.VOTES_LOADED:return t=function(){console.log("determining winner");var t=G.WEIGHTLIFTING,e=G.CARDIO;return n>a?t:n<a?e:{text:"Tied",value:"TIED"}}(),o.a.createElement("div",{style:i.scoreboard},o.a.createElement("h2",null,"TIED"===t.value?t.text:"Leader: ".concat(t.text),"!"),o.a.createElement("p",null,"Weightlifting Votes: ",n.toString()),o.a.createElement("p",null,"Cardio Votes: ",a.toString()));default:console.log("default case - unexpected")}},null)};var W=function(){var t=Object(p.useMetaMask)().account;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"App-header"},t&&o.a.createElement("div",{style:{fontStyle:"italic"}}," ","Wallet Connected: ",t.slice(0,3),"...",t.slice(-3)),o.a.createElement("h1",{className:"App-title"},"Blockchain Fitness Voting App")))};var B=function(){return o.a.createElement("footer",{className:"App-footer",style:{marginTop:"20px"}},o.a.createElement(l,{message:"In order for this app to work successfully, you must have a Metamask wallet connected to the Ropsten testnet."}))};function H(t){var e=t.account;return o.a.createElement(U,{account:e})}function J(){return o.a.createElement("div",null,o.a.createElement(u.a,null,"*** Connect wallet to the Ropsten testnet to place your vote! ***"),o.a.createElement("br",null),o.a.createElement(u.a,null,o.a.createElement(v,null)))}function U(){return o.a.createElement(C,null)}var Y=function(){var t=Object(p.useMetaMask)();return o.a.createElement(o.a.Fragment,null,"connected"!==t.status?o.a.createElement(J,null):o.a.createElement(H,null))},z=function(){console.log("App component -- render");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement(W,null),o.a.createElement(c.ToastContainer,null),o.a.createElement(u.a,{style:{display:"flex",justifyContent:"center"}},o.a.createElement(Y,null)),o.a.createElement(B,null)))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(t){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(t){console.error("Error during service worker registration:",t)})}i.a.render(o.a.createElement(p.MetaMaskProvider,null,o.a.createElement(z,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){var t=new URL("/blockchain-fitness-voting",window.location);if(console.log("contract address: ",Object({NODE_ENV:"production",PUBLIC_URL:"/blockchain-fitness-voting",REACT_APP_VOTING_CONTRACT_ADDRESS:"0x87aA67600E213900bBefa67eBA46afC352c2Fc69",REACT_APP_VOTING_CONTRACT_ADDRESS_NEW:"0xB326177fF7884c2612f7a7cA31D8e24276d85dcd",REACT_APP_INFURA_PROJECT_ID:""}).VOTING_CONTRACT_ADDRESS),t.origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/blockchain-fitness-voting","/service-worker.js");Z?(function(t){fetch(t).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):Q(t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Q(t)})}}()},91:function(t,e,n){t.exports=n.p+"static/media/bg-1.d85eef01.jpeg"},92:function(t,e,n){t.exports=n.p+"static/media/weightlifting-gif.b3731764.gif"},93:function(t,e,n){t.exports=n.p+"static/media/cardio2-gif.b92a3bff.gif"}},[[105,1,2]]]);
//# sourceMappingURL=main.2f75fbbc.chunk.js.map