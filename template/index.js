(function(n,m,c,i,a,u){"use strict";const{FormText:y,FormInput:f}=i.Forms;function d(){const[t,e]=React.useState(a.storage.format);return u.useProxy(a.storage),React.createElement(f,{value:t,onChange:function(o){a.storage.format=o==""?null:o,e(t)},placeholder:"Custom Format",title:"Custom Timestamp Format"})}const g=c.findByName("RowManager");let s;function l(t){const e=Number(BigInt.asUintN(64,t)>>22n);return new Date(e+14200704e5)}const p=function(){s=m.after("generate",g.prototype,function(t,e){let[o]=t,{message:r}=e;o.rowType===1&&r.timestamp&&(r.timestamp=`${l(r.id).toLocaleString()}`)})},v=function(){s?.()},F=d;return n.onLoad=p,n.onUnload=v,n.settings=F,n})({},vendetta.patcher,vendetta.metro,vendetta.ui.components,vendetta.plugin,vendetta.storage);
