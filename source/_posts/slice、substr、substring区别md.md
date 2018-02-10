---
title: slice、substr、substring区别
date: 2017-1-10 20:20:05
tags: 
- javascript
---
slice()和subsring()的第二个参数是子字符串中最后一个字符后面的位置
substr()的第二个参数是返回字符的个数
如果没有第二个参数将字符串的长度作为结束位置
    <!--more-->
如果参数是负的情况下
- slice将传入的负值于与字符串的长度相加
- substr第一个参数为字符串的长度加上传入的负值，第二个参数为0
- substring将所有的负值都转换为0

//例子
```
var stringValue = "hello world";

alert(stringValue.slice(-3));
alert(stringValue.substring(-3));
alert(stringValue.substr(-3));
alert(stringValue.slice(3, -4));
alert(stringValue.substring(3, -4));
alert(stringValue.substr(3, -4));



//"rld" //"hello world" //"rld"
//"lo w" //"hel" //""
```