---
title: var bind = Function.prototype.call.bind(Function.prototype.bind)
date: 2017-02-14 09:40:25
tags: 
- javascript
---
如果仅仅单纯这样写
var slice = Function.prototype.slice
会运行错误
slice([123],1)
VM449:1 Uncaught TypeError: Array.prototype.slice called on null or undefine
<!--more-->
这是因为Function.prototype中为slice方法制定了上下文，单纯的赋值给变量后，slice的就没有指定上下文。
使用call/apply就可以拿到正确的值
slice.call([1, 2, 3], 1)
[2, 3]
这是因为为slice指定了上下文
把call绑定到slice上
var slice = Function.prototype.call.bind(Array.prototype.slice)
slice([1,2,3],1)
[2, 3]
对bind本身绑定call
var bind = Function.prototype.call.bind(Function.prototype.bind);
绑定call后，bind就可以作为"bind(func, context)"这样的形式使用了。