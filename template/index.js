(function(e,a,n){"use strict";const r=n.findByName("RowManager"),i=n.findByStoreName("UserStore");let o;const d=function(){o=a.after("generate",r.prototype,function(m,s){let[u]=m,{message:t}=s;u.rowType===1&&(t.timestamp=`${t.timestamp} - ${i.get(t.authorId)?.username}`)})},c=function(){o?.()};return e.onLoad=d,e.onUnload=c,e})({},vendetta.patcher,vendetta.metro);
