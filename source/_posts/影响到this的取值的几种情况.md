---
title: 影响到this的取值的几种情况
date: 2017-01-01 17:44:25
tags: 
- javascript
---
Javascript的4种调用模式：方法调用、函数调用、构造器调用、call/apply调用；

这四种模式可能影响到this的取值；
<!--more-->
- 方法调用：当函数为对象的一个属性时，它称为方法。当方法被调用，this绑定到该对象。通过this可取得它们所属对象的上下文的方法称为公共方法。

- 函数调用：当一个函数并非一个对象的属性，当他被调用时，称为函数调用。当函数被调用时，this绑定全局对象。当内部函数被调用时，this不能绑定到外部函数的this变量。找一个变量，比如that，并给它赋值为this后，内部函数就可以通过这个变量访问到外部变量的this。

- 构造器调用：一个函数前面带上"new"来调用，会创建一个连接到该函数的prototype成员的新对象，同时this会绑定到新对象上。"new"也会改变return语句的行为。

- call/apply调用：Javascript是函数式的面向对象语言，所以函数可以拥有方法，Function.apply(this,[])，把Function里的this绑定到参数1的this后，参数1的那个对象拥有Function里的属性或者方法，所以可以实现继承。

多层this
```
var o = {
     f1: function() {
          console.log(this);
          var f2 = function() {
               console.log(this)
           }()
     }
}
o.f1()
//第一层指向O对象，第二层指向全局对象。
```

```
var temp = function() {
      console.log(this)
}
var o  = {
     f1: function() {
          console.log(this)
          var f2 = temp()
     }
 }
forEach方法的回调函数中的this指向全局对象
```