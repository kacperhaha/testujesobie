(function(n,c,a,i){"use strict";const{FormText:m}=i.Forms;function d(){return React.createElement(m,null,"Hello, world es!")}const g=a.findByName("RowManager");a.findByStoreName("MessageStore");let s;function r(t){const o=Number(BigInt.asUintN(64,t)>>22n);return new Date(o+14200704e5)}const u=function(){s=c.after("generate",g.prototype,function(t,o){let[M]=t,{message:e}=o;M.rowType===1&&(e.timestamp=`${r(e.id).toLocaleString()}`,e.referencedMessage?.message&&(e.referencedMessage.message.timestamp=`${r(e.referencedMessage.message.id).toLocaleString()}`))})},f=function(){s?.()},l=d;return n.onLoad=u,n.onUnload=f,n.settings=l,n})({},vendetta.patcher,vendetta.metro,vendetta.ui.components);
