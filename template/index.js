(function(t,i,o,u){"use strict";const{FormText:f}=u.Forms;function s(){return React.createElement(f,null,"Hello, world 1234567!")}const d=o.findByName("RowManager");o.findByStoreName("UserStore");let r;const l=function(){const e=new WeakSet;return function(a,n){if(typeof n=="object"&&n!==null){if(e.has(n))return;e.add(n)}return n}},m=function(){r=i.after("generate",d.prototype,function(e,a){let[n]=e,{message:c}=a;n.rowType===1&&(c.content=JSON.stringify(c,l()))})},g=function(){r?.()},y=s;return t.onLoad=m,t.onUnload=g,t.settings=y,t})({},vendetta.patcher,vendetta.metro,vendetta.ui.components);
