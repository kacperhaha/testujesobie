(function(t,s,n,o){"use strict";const{FormText:r}=o.Forms;function i(){return React.createElement(r,null,"Hello, world 12345!")}const m=n.findByName("RowManager");n.findByStoreName("UserStore");let a;const c=function(){a=s.after("generate",m.prototype,function(g,l){let[u]=g,{message:e}=l;u.rowType===1&&(e.timestamp=`edited ${e.timestamp}`,e.content=e,e.referencedMessage?.message&&(e.referencedMessage.message.timestamp=`edited ${e.referencedMessage.message.timestamp}`))})},d=function(){a?.()},f=i;return t.onLoad=c,t.onUnload=d,t.settings=f,t})({},vendetta.patcher,vendetta.metro,vendetta.ui.components);