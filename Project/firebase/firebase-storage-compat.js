!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,function(Je,Ze){"use strict";try{!(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(Je);function r(t){const r=[];let s=0;for(let n=0;n<t.length;n++){let e=t.charCodeAt(n);e<128?r[s++]=e:(e<2048?r[s++]=e>>6|192:(55296==(64512&e)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(e=65536+((1023&e)<<10)+(1023&t.charCodeAt(++n)),r[s++]=e>>18|240,r[s++]=e>>12&63|128):r[s++]=e>>12|224,r[s++]=e>>6&63|128),r[s++]=63&e|128)}return r}function i(e){return n(e).replace(/\./g,"")}const s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();var s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_;const n=[];for(let u=0;u<r.length;u+=3){var i=r[u],o=u+1<r.length,a=o?r[u+1]:0,h=u+2<r.length,l=h?r[u+2]:0;let e=(15&a)<<2|l>>6,t=63&l;h||(t=64,o||(e=64)),n.push(s[i>>2],s[(3&i)<<4|a>>4],s[e],s[t])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,s=0;for(;r<e.length;){var n,i,o=e[r++];o<128?t[s++]=String.fromCharCode(o):191<o&&o<224?(n=e[r++],t[s++]=String.fromCharCode((31&o)<<6|63&n)):239<o&&o<365?(i=((7&o)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536,t[s++]=String.fromCharCode(55296+(i>>10)),t[s++]=String.fromCharCode(56320+(1023&i))):(n=e[r++],i=e[r++],t[s++]=String.fromCharCode((15&o)<<12|(63&n)<<6|63&i))}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();var r=t?this.charToByteMapWebSafe_:this.charToByteMap_;const s=[];for(let h=0;h<e.length;){var n=r[e.charAt(h++)],i=h<e.length?r[e.charAt(h)]:0;++h;var o=h<e.length?r[e.charAt(h)]:64;++h;var a=h<e.length?r[e.charAt(h)]:64;if(++h,null==n||null==i||null==o||null==a)throw Error();s.push(n<<2|i>>4),64!==o&&(s.push(i<<4&240|o>>2),64!==a&&s.push(o<<6&192|a))}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},n=function(e){var t=r(e);return s.encodeByteArray(t,!0)};class o extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a.prototype.create)}}class a{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var s,r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],i=i?(s=r,i.replace(h,(e,t)=>{var r=s[t];return null!=r?String(r):`<${t}?>`})):"Error",i=`${this.serviceName}: ${i} (${n}).`;return new o(n,i,r)}}const h=/\{\$([^}]+)}/g;function l(e){return e&&e._delegate?e._delegate:e}var u,c,d,_,p=(f.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},f.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},f.prototype.setServiceProps=function(e){return this.serviceProps=e,this},f.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},f);function f(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}const g="firebasestorage.googleapis.com",m="storageBucket";class b extends o{constructor(e,t){super(v(e),`Firebase Storage: ${t} (${v(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,b.prototype)}_codeEquals(e){return v(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function v(e){return"storage/"+e}function y(){return new b("unknown","An unknown error occurred, please check the error payload for server response.")}function w(){return new b("canceled","User canceled the upload/download.")}function T(){return new b("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function R(e){return new b("invalid-argument",e)}function k(){return new b("app-deleted","The Firebase app was deleted.")}function S(e){return new b("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function C(e,t){return new b("invalid-format","String does not match format '"+e+"': "+t)}function E(e){throw new b("internal-error","Internal error: "+e)}class A{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=A.makeFromUrl(t,e)}catch(e){return new A(t,"")}if(""===r.path)return r;throw t=t,new b("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(e,t){let r=null;var s="([A-Za-z0-9.\\-_]+)";var n=new RegExp("^gs://"+s+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}var o=t.replace(/[.]/g,"\\."),a=new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),o=t===g?"(?:storage.googleapis.com|storage.cloud.google.com)":t,h=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${o}/${s}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let c=0;c<h.length;c++){const d=h[c];var l=d.regex.exec(e);if(l){var u=l[d.indices.bucket];let e=l[d.indices.path];e=e||"",r=new A(u,e),d.postModify(r);break}}if(null==r)throw t=e,new b("invalid-url","Invalid URL '"+t+"'.");return r}}class x{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=0){}}function U(e){return"string"==typeof e||e instanceof String}function O(e){return P()&&e instanceof Blob}function P(){return"undefined"!=typeof Blob}function I(e,t,r,s){if(s<t)throw R(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r<s)throw R(`Invalid value for '${e}'. Expected ${r} or less.`)}function M(e,t,r){let s=null==r?`https://${t}`:t;return`${r}://${s}/v0${e}`}function B(e){const t=encodeURIComponent;let r="?";for(const n in e){var s;e.hasOwnProperty(n)&&(s=t(n)+"="+t(e[n]),r=r+s+"&")}return r=r.slice(0,-1),r}(c=u=u||{})[c.NO_ERROR=0]="NO_ERROR",c[c.NETWORK_ERROR=1]="NETWORK_ERROR",c[c.ABORT=2]="ABORT";class N{constructor(e,t,r,s,n,i,o,a,h,l,u){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=n,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=h,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){var e=(s,e)=>{if(e)s(!1,new D(!1,null,!0));else{const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{var t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;var e,t=n.getErrorCode()===u.NO_ERROR,r=n.getStatus();t&&!this.isRetryStatusCode_(r)?(e=-1!==this.successCodes_.indexOf(r),s(!0,new D(e,n))):(e=n.getErrorCode()===u.ABORT,s(!1,new D(!1,null,e)))})}},t=(e,t)=>{const r=this.resolve_,s=this.reject_,n=t.connection;if(t.wasSuccessCode)try{var i=this.callback_(n,n.getResponseText());void 0!==i?r(i):r()}catch(e){s(e)}else if(null!==n){const a=y();a.serverResponse=n.getResponseText(),this.errorCallback_?s(this.errorCallback_(n,a)):s(a)}else{var o;t.canceled?(o=(this.appDelete_?k:w)(),s(o)):(o=new b("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),s(o))}};this.canceled_?t(0,new D(!1,null,!0)):this.backoffId_=function(t,r,e){let s=1,n=null,i=!1,o=0;function a(){return 2===o}let h=!1;function l(...e){h||(h=!0,r.apply(null,e))}function u(e){n=setTimeout(()=>{n=null,t(c,a())},e)}function c(e,...t){if(!h)if(e)l.call(null,e,...t);else if(a()||i)l.call(null,e,...t);else{s<64&&(s*=2);let e;e=1===o?(o=2,0):1e3*(s+Math.random()),u(e)}}let d=!1;function _(e){d||(d=!0,h||(null!==n?(e||(o=2),clearTimeout(n),u(0)):e||(o=1)))}return u(0),setTimeout(()=>{_(i=!0)},e),_}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){var t=500<=e&&e<600,r=-1!==[408,429].indexOf(e),s=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||s}}class D{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function L(...t){const r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==r){const s=new r;for(let e=0;e<t.length;e++)s.append(t[e]);return s.getBlob()}if(P())return new Blob(t);throw new b("unsupported-environment","This browser doesn't seem to support creating Blobs")}const q={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class F{constructor(e,t){this.data=e,this.contentType=t||null}}function j(e,t){switch(e){case q.RAW:return new F(z(t));case q.BASE64:case q.BASE64URL:return new F(H(e,t));case q.DATA_URL:return new F((r=t,(s=new $(r)).base64?H(q.BASE64,s.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw C(q.DATA_URL,"Malformed data URL.")}return z(t)}(s.rest)),(r=t,new $(r).contentType))}var r,s;throw y()}function z(t){const r=[];for(let i=0;i<t.length;i++){let e=t.charCodeAt(i);var s,n;e<=127?r.push(e):e<=2047?r.push(192|e>>6,128|63&e):55296==(64512&e)?i<t.length-1&&56320==(64512&t.charCodeAt(i+1))?(s=e,n=t.charCodeAt(++i),e=65536|(1023&s)<<10|1023&n,r.push(240|e>>18,128|e>>12&63,128|e>>6&63,128|63&e)):r.push(239,191,189):56320==(64512&e)?r.push(239,191,189):r.push(224|e>>12,128|e>>6&63,128|63&e)}return new Uint8Array(r)}function H(t,e){switch(t){case q.BASE64:var r=-1!==e.indexOf("-"),s=-1!==e.indexOf("_");if(r||s)throw C(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case q.BASE64URL:s=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(s||r)throw C(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}let n;try{n=atob(e)}catch(e){throw C(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let o=0;o<n.length;o++)i[o]=n.charCodeAt(o);return i}class ${constructor(e){this.base64=!1,this.contentType=null;var t,r,s=e.match(/^data:([^,]+)?,/);if(null===s)throw C(q.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;null!=n&&(this.base64=(t=n,r=";base64",t.length>=r.length&&t.substring(t.length-r.length)===r),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class W{constructor(e,t){let r=0,s="";O(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(O(this.data_)){var r=this.data_,r=(n=e,i=t,(s=r).webkitSlice?s.webkitSlice(n,i):s.mozSlice?s.mozSlice(n,i):s.slice?s.slice(n,i):null);return null===r?null:new W(r)}var s,n,i,r=new Uint8Array(this.data_.buffer,e,t-e);return new W(r,!0)}static getBlob(...e){if(P()){var t=e.map(e=>e instanceof W?e.data_:e);return new W(L.apply(null,t))}{const s=e.map(e=>U(e)?j(q.RAW,e).data:e.data_);let t=0;s.forEach(e=>{t+=e.byteLength});const n=new Uint8Array(t);let r=0;return s.forEach(e=>{for(let t=0;t<e.length;t++)n[r++]=e[t]}),new W(n,!0)}}uploadData(){return this.data_}}function V(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(e=t)||Array.isArray(e)?null:t}function G(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function X(e,t){return t}class K{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||X}}let J=null;function Z(){if(J)return J;const e=[];e.push(new K("bucket")),e.push(new K("generation")),e.push(new K("metageneration")),e.push(new K("name","fullPath",!0));const t=new K("name");t.xform=function(e,t){return!U(t=t)||t.length<2?t:G(t)},e.push(t);const r=new K("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new K("timeCreated")),e.push(new K("updated")),e.push(new K("md5Hash",null,!0)),e.push(new K("cacheControl",null,!0)),e.push(new K("contentDisposition",null,!0)),e.push(new K("contentEncoding",null,!0)),e.push(new K("contentLanguage",null,!0)),e.push(new K("contentType",null,!0)),e.push(new K("metadata","customMetadata",!0)),J=e,J}function Y(r,s){Object.defineProperty(r,"ref",{get:function(){var e=r.bucket,t=r.fullPath,t=new A(e,t);return s._makeStorageReference(t)}})}function Q(e,t,r){var s=V(t);return null===s?null:function(e,t,r){const s={type:"file"};var n=r.length;for(let i=0;i<n;i++){const o=r[i];s[o.local]=o.xform(s,t[o.server])}return Y(s,e),s}(e,s,r)}function ee(e,t){const r={};var s=t.length;for(let i=0;i<s;i++){var n=t[i];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}const te="prefixes";function re(e,t,r){var s=V(r);return null===s?null:function(e,t,r){const s={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[te])for(const o of r[te]){var n=o.replace(/\/$/,""),n=e._makeStorageReference(new A(t,n));s.prefixes.push(n)}if(r.items)for(const a of r.items){var i=e._makeStorageReference(new A(t,a.name));s.items.push(i)}return s}(e,t,s)}class se{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function ne(e){if(!e)throw y()}function ie(s,n){return function(e,t){var r=Q(s,t,n);return ne(null!==r),r}}function oe(s,n){return function(e,t){var r=re(s,n,t);return ne(null!==r),r}}function ae(s,n){return function(e,t){var r=Q(s,t,n);return ne(null!==r),function(s,e,n,i){var t=V(e);if(null===t)return null;if(!U(t.downloadTokens))return null;const r=t.downloadTokens;if(0===r.length)return null;const o=encodeURIComponent,a=r.split(",");return a.map(e=>{var t=s.bucket,r=s.fullPath;return M("/b/"+o(t)+"/o/"+o(r),n,i)+B({alt:"media",token:e})})[0]}(r,t,s.host,s._protocol)}}function he(n){return function(e,t){let r;var s;return r=401===e.getStatus()?e.getResponseText().includes("Firebase App Check token is invalid")?new b("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new b("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(s=n.bucket,new b("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(e=n.path,new b("unauthorized","User does not have permission to access '"+e+"'.")):t,r.serverResponse=t.serverResponse,r}}function le(s){const n=he(s);return function(e,t){let r=n(e,t);return 404===e.getStatus()&&(r=(e=s.path,new b("object-not-found","Object '"+e+"' does not exist."))),r.serverResponse=t.serverResponse,r}}function ue(e,t,r){var s=M(t.fullServerUrl(),e.host,e._protocol),n=e.maxOperationRetryTime;const i=new se(s,"GET",ie(e,r),n);return i.errorHandler=le(t),i}function ce(e,t,r){const s=Object.assign({},r);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=(e=t,(t=null)&&t.contentType||e&&e.type()||"application/octet-stream")),s}function de(e,t,r,s,n){var i=t.bucketOnlyServerUrl();const o={"X-Goog-Upload-Protocol":"multipart"};var a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;var h=ce(t,s,n),l="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ee(h,r)+"\r\n--"+a+"\r\nContent-Type: "+h.contentType+"\r\n\r\n",a="\r\n--"+a+"--";const u=W.getBlob(l,s,a);if(null===u)throw T();a={name:h.fullPath},h=M(i,e.host,e._protocol),i=e.maxUploadRetryTime;const c=new se(h,"POST",ie(e,r),i);return c.urlParams=a,c.headers=o,c.body=u.uploadData(),c.errorHandler=he(t),c}class _e{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function pe(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){ne(!1)}const s=t||["active"];return ne(!!r&&-1!==s.indexOf(r)),r}function fe(e,t,r,s,n){var i=t.bucketOnlyServerUrl(),o=ce(t,s,n),a={name:o.fullPath},h=M(i,e.host,e._protocol),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},i=ee(o,r),o=e.maxUploadRetryTime;const u=new se(h,"POST",function(e){pe(e);let t;try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){ne(!1)}return ne(U(t)),t},o);return u.urlParams=a,u.headers=l,u.body=i,u.errorHandler=he(t),u}function ge(e,t,r,n){var s=e.maxUploadRetryTime;const i=new se(r,"POST",function(e){var t=pe(e,["active","final"]);let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){ne(!1)}r||ne(!1);var s=Number(r);return ne(!isNaN(s)),new _e(s,n.size(),"final"===t)},s);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=he(t),i}function me(e,o,t,a,r,h,s,n){const l=new _e(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=a.size()),a.size()!==l.total)throw new b("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var i=l.total-l.current;let u=i;0<r&&(u=Math.min(u,r));var c=l.current,d=c+u,i={"X-Goog-Upload-Command":u===i?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`};const _=a.slice(c,d);if(null===_)throw T();d=o.maxUploadRetryTime;const p=new se(t,"POST",function(e,t){var r=pe(e,["active","final"]),s=l.current+u,n=a.size();let i;return i="final"===r?ie(o,h)(e,t):null,new _e(s,n,"final"===r,i)},d);return p.headers=i,p.body=_.uploadData(),p.progressCallback=n||null,p.errorHandler=he(e),p}const be={STATE_CHANGED:"state_changed"},ve={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ye(e){switch(e){case"running":case"pausing":case"canceling":return ve.RUNNING;case"paused":return ve.PAUSED;case"success":return ve.SUCCESS;case"canceled":return ve.CANCELED;default:return ve.ERROR}}class we{constructor(e,t,r){var s;"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=(s=e).next,this.error=s.error,this.complete=s.complete)}}function Te(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Re{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=u.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=u.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=u.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw E("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==s)for(const n in s)s.hasOwnProperty(n)&&this.xhr_.setRequestHeader(n,s[n].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw E("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw E("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw E("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}function ke(){return new Re}class Se{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Z(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(e){return 262144<e.size()}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(r){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,t])=>{switch(this._state){case"running":r(e,t);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{var r=fe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata);const s=this._ref.storage._makeRequest(r,ke,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const n=this._uploadUrl;this._resolveToken((e,t)=>{var r=ge(this._ref.storage,this._ref._location,n,this._blob);const s=this._ref.storage._makeRequest(r,ke,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const n=262144*this._chunkMultiplier,i=new _e(this._transferred,this._blob.size()),o=this._uploadUrl;this._resolveToken((e,t)=>{let r;try{r=me(this._ref._location,this._ref.storage,o,this._blob,n,this._mappings,i,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const s=this._ref.storage._makeRequest(r,ke,e,t);this._request=s,s.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){262144*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{var r=ue(this._ref.storage,this._ref._location,this._mappings);const s=this._ref.storage._makeRequest(r,ke,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{var r=de(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata);const s=this._ref.storage._makeRequest(r,ke,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":var t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=w(),this._state=e,this._notifyObservers();break;case"error":case"success":this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){var e=ye(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const n=new we(t||void 0,r||void 0,s||void 0);return this._addObserver(n),()=>{this._removeObserver(n)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(ye(this._state)){case ve.SUCCESS:Te(this._resolve.bind(null,this.snapshot))();break;case ve.CANCELED:case ve.ERROR:const t=this._reject;Te(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ye(this._state)){case ve.RUNNING:case ve.PAUSED:e.next&&Te(e.next.bind(e,this.snapshot))();break;case ve.SUCCESS:e.complete&&Te(e.complete.bind(e))();break;case ve.CANCELED:case ve.ERROR:default:e.error&&Te(e.error.bind(e,this._error))()}}resume(){var e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){var e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){var e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class Ce{constructor(e,t){this._service=e,t instanceof A?this._location=t:this._location=A.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ce(e,t)}get root(){var e=new A(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return G(this._location.path)}get storage(){return this._service}get parent(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;e=new A(this._location.bucket,e);return new Ce(this._service,e)}_throwIfRoot(e){if(""===this._location.path)throw S(e)}}function Ee(e){const t={prefixes:[],items:[]};return async function e(t,r,s){const n={pageToken:s};const i=await Ae(t,n);r.prefixes.push(...i.prefixes);r.items.push(...i.items);null!=i.nextPageToken&&await e(t,r,i.nextPageToken)}(e,t).then(()=>t)}function Ae(e,t){null!=t&&"number"==typeof t.maxResults&&I("options.maxResults",1,1e3,t.maxResults);var r=t||{},r=function(e,t,r,s,n){const i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&0<r.length&&(i.delimiter=r),s&&(i.pageToken=s),n&&(i.maxResults=n);var o=M(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime;const h=new se(o,"GET",oe(e,t.bucket),a);return h.urlParams=i,h.errorHandler=he(t),h}(e.storage,e._location,"/",r.pageToken,r.maxResults);return e.storage.makeRequestWithTokens(r,ke)}function xe(e,t){e._throwIfRoot("updateMetadata");var r=function(e,t,r,s){var n=M(t.fullServerUrl(),e.host,e._protocol),i=ee(r,s),o=e.maxOperationRetryTime;const a=new se(n,"PATCH",ie(e,s),o);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=i,a.errorHandler=le(t),a}(e.storage,e._location,t,Z());return e.storage.makeRequestWithTokens(r,ke)}function Ue(e){e._throwIfRoot("getDownloadURL");var t=function(e,t,r){var s=M(t.fullServerUrl(),e.host,e._protocol),n=e.maxOperationRetryTime;const i=new se(s,"GET",ae(e,r),n);return i.errorHandler=le(t),i}(e.storage,e._location,Z());return e.storage.makeRequestWithTokens(t,ke).then(e=>{if(null===e)throw new b("no-download-url","The given file does not have any download URLs.");return e})}function Oe(e){e._throwIfRoot("deleteObject");var t=function(e,t){var r=M(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime;const n=new se(r,"DELETE",function(e,t){},s);return n.successCodes=[200,204],n.errorHandler=le(t),n}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ke)}function Pe(e,t){var r,s=(r=e._location.path,s=t.split("/").filter(e=>0<e.length).join("/"),0===r.length?s:r+"/"+s),s=new A(e._location.bucket,s);return new Ce(e.storage,s)}function Ie(e,t){if(e instanceof De){var r=e;if(null==r._bucket)throw new b("no-default-bucket","No default bucket found. Did you set the '"+m+"' property when initializing the app?");r=new Ce(r,r._bucket);return null!=t?Ie(r,t):r}return void 0!==t?Pe(e,t):e}function Me(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof De)return r=e,s=t,new Ce(r,s);throw R("To use ref(service, url), the first argument must be a Storage instance.")}return Ie(e,t);var r,s}function Be(e,t){var r=null==t?void 0:t[m];return null==r?null:A.makeFromBucketSpec(r,e)}function Ne(e,t,r,s={}){e.host=`${t}:${r}`,e._protocol="http";var n=s["mockUserToken"];n&&(e._overrideAuthToken="string"==typeof n?n:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var r=t||"demo-project",s=e.iat||0,n=e.sub||e.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");return n=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},e),[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(n)),""].join(".")}(n,e.app.options.projectId))}class De{constructor(e,t,r,s,n){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=n,this._bucket=null,this._host=g,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=s?A.makeFromBucketSpec(s,this._host):Be(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=Be(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){I("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){I("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){var t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ce(this,e)}_makeRequest(e,t,r,s){if(this._deleted)return new x(k());{const l=(n=e,i=this._appId,o=r,e=s,r=t,s=this._firebaseVersion,a=B(n.urlParams),h=n.url+a,a=Object.assign({},n.headers),t=a,(i=i)&&(t["X-Firebase-GMPID"]=i),i=a,null!==(o=o)&&0<o.length&&(i.Authorization="Firebase "+o),s=s,a["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),s=a,null!==(e=e)&&(s["X-Firebase-AppCheck"]=e),new N(h,n.method,a,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r));return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}var n,i,o,a,h}async makeRequestWithTokens(e,t){var[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Le="@firebase/storage";function qe(e,t,r){return e=l(e),t=t,r=r,(e=e)._throwIfRoot("uploadBytesResumable"),new Se(e,new W(t),r)}function Fe(e){return function(e){e._throwIfRoot("getMetadata");var t=ue(e.storage,e._location,Z());return e.storage.makeRequestWithTokens(t,ke)}(e=l(e))}function je(e,t){return Me(e=l(e),t)}function ze(e,{instanceIdentifier:t}){var r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return new De(r,s,n,t,Ze.SDK_VERSION)}Ze._registerComponent(new p("storage",ze,"PUBLIC").setMultipleInstances(!0)),Ze.registerVersion(Le,"0.8.4",""),Ze.registerVersion(Le,"0.8.4","esm2017");class He{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}class $e{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new He(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then(e=>{if(t)return t(new He(e,this,this._ref))},e)}on(e,t,r,s){let n=void 0;return t&&(n="function"==typeof t?e=>t(new He(e,this,this._ref)):{next:t.next?e=>t.next(new He(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,n,r||void 0,s||void 0)}}class We{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Ve(e,this._service))}get items(){return this._delegate.items.map(e=>new Ve(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}class Ve{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){var t=Pe(this._delegate,e);return new Ve(t,this.storage)}get root(){return new Ve(this._delegate.root,this.storage)}get parent(){var e=this._delegate.parent;return null==e?null:new Ve(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new $e(qe(this._delegate,e,t),this)}putString(e,t=q.RAW,r){this._throwIfRoot("putString");var s=j(t,e);const n=Object.assign({},r);return null==n.contentType&&null!=s.contentType&&(n.contentType=s.contentType),new $e(new Se(this._delegate,new W(s.data,!0),n),this)}listAll(){return Ee(l(this._delegate)).then(e=>new We(e,this.storage))}list(e){return t=this._delegate,e=e||void 0,Ae(t=l(t),e).then(e=>new We(e,this.storage));var t}getMetadata(){return Fe(this._delegate)}updateMetadata(e){return xe(l(this._delegate),e)}getDownloadURL(){return Ue(l(this._delegate))}delete(){return this._throwIfRoot("delete"),Oe(l(this._delegate))}_throwIfRoot(e){if(""===this._delegate._location.path)throw S(e)}}class Ge{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Xe(e))throw R("ref() expected a child path but got a URL, use refFromURL instead.");return new Ve(je(this._delegate,e),this)}refFromURL(e){if(!Xe(e))throw R("refFromURL() expected a full URL but got a child path, use ref() instead.");try{A.makeFromUrl(e,this._delegate.host)}catch(e){throw R("refFromUrl() expected a valid full URL but got an invalid one.")}return new Ve(je(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){var s;[s,e,t,r={}]=[this._delegate,e,t,r],Ne(s,e,t,r)}}function Xe(e){return/^[A-Za-z]+:\/\//.test(e)}function Ke(e,{instanceIdentifier:t}){var r=e.getProvider("app-compat").getImmediate(),s=e.getProvider("storage").getImmediate({identifier:t});return new Ge(r,s)}d=t.default,_={TaskState:ve,TaskEvent:be,StringFormat:q,Storage:Ge,Reference:Ve},d.INTERNAL.registerComponent(new p("storage-compat",Ke,"PUBLIC").setServiceProps(_).setMultipleInstances(!0)),d.registerVersion("@firebase/storage-compat","0.1.4")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-storage-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-storage-compat.js.map