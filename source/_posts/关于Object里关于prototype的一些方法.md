---
title: 关于Object里关于prototype的一些方法
date: 2016-12-28 19:55:09
tags: 
- javascript
---
Object.defineProperty() 一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。赋值后不可改变。
    <!--more-->
- Object.getPrototypeOf() 返回对象的原型
-  Object.setPrototypeOf(现有对象， 原型对象) 为现有对象设置原型
- Object.getOwnPropertyNames() 返回本身所有属性的键名，不包含继承属性
```
function F() {}
var f = new F()
//等于
var f = Object.setPrototypeOf({}, F.prototype)
F.call(f)
```
- Objcet.prototype.hasOwnProperty 判断某个属性定义在原型上还是自身上
- bject.prototype.isPrototypeOf() 实例的isPrototypeOf方法来判断一个对象是否是另外一个对象的原型
```
var f1 = {}
var f2 = Object.create(f1)
var f3 = Object.create(f2)
f2.isPrototypeOf(f1)
f3.isPrototypeOf(f2)
```
- Object.prototype.__proto__ 可以改写某对象的原型对象
//自身
- Objcet.keys 返回本身可以枚举的属性
- for...in 某个对象是否有某个属性，不区分自身属性还是继承属性
在for...in循环中获得自身属性可以，用hasOwnproerty方法