/*! For license information please see comments-comments-tab.js.LICENSE.txt */
(()=>{"use strict";var e,o={62641:(e,o,r)=>{var n=r(44350);let i=null;const a=new OCA.Files.Sidebar.Tab({id:"comments",name:t("comments","Comments"),iconSvg:n,async mount(e,t,o){i&&i.$destroy(),i=new OCA.Comments.View("files",{parent:o}),await i.update(t.id),i.$mount(e)},update(e){i.update(e.id)},destroy(){i.$destroy(),i=null},scrollBottomReached(){i.onScrollBottomReached()}});window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(a)}))}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return o[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=o,e=[],n.O=(t,o,r,i)=>{if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,d=0;d<o.length;d++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[d])))?o.splice(d--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.e=()=>Promise.resolve(),n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=576,(()=>{n.b=document.baseURI||self.location.href;var e={576:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,a=o[0],l=o[1],d=o[2],s=0;if(a.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(d)var u=d(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self.webpackChunknextcloud=self.webpackChunknextcloud||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.nc=void 0;var i=n.O(void 0,[7874],(()=>n(62641)));i=n.O(i)})();
//# sourceMappingURL=comments-comments-tab.js.map?v=88c5ff5c7082a1284db8