(function(n,c,s,i){"use strict";const{FormText:d}=i.Forms;function m(){return React.createElement(d,null,"Hello, world 1234567!")}const f=s.findByName("RowManager");s.findByStoreName("UserStore");let a;const u=function(){const o=new WeakSet;return function(r,e){if(typeof e=="object"&&e!==null){if(o.has(e))return;o.add(e)}return e}},g=function(){a=c.after("generate",f.prototype,function(o,r){let[e]=o,{message:t}=r;e.rowType===1&&(t.timestamp=`edited ${t.timestamp}`,t.content=JSON.stringify(t,u()),t.referencedMessage?.message&&(t.referencedMessage.message.timestamp=`edited ${t.referencedMessage.message.timestamp}`))})},l=function(){a?.()},p=m;return n.onLoad=g,n.onUnload=l,n.settings=p,n})({},vendetta.patcher,vendetta.metro,vendetta.ui.components);
