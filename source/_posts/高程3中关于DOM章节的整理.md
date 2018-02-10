---
title: 高程3中关于DOM章节的整理
date: 2016-12-26 09:57:05
tags: 
- javascript
---
Dom是HTML/XML的一个 API，描绘了一个层次化的节点树。
    <!--more-->

- DOM1
	- nodeType
		- Element 1
			- nodeNmae: 标签名
			- 特性
				- getAttribute(attributeName)
				- setAttribute(name, value)
				- removeAttribute
			- Attributes属性包含于NodeLIst类似的NamedNodeMap对象,nodeName是特性名称，nodeValue是特性值。
				- getNamedItem(name)
				- removeNamedItem(name)
				- setNamedItem(node)
				- item(pos)
			- createElement(tagName)
		- Attr 2
			- createAttribute(name)
		- Text 3
			- nodeName #text
			- nodeValue 包含文本
			- splitText(offset)
			- createTextNode(data)
		- Document 9
			- nodeName: #document
			- document.title
			- document.url
			- document.domain
			- document.refferrer
			- getElementById //将取得类似nodeList的HTMLCollection对象
			- getElementsByTagName //可使用位置或名字获取指定项
	- 节点关系
		- 每一个节点都有childNodes属性，保存nodeList类数组对象。
将nodeList转换为数组：var Arr = Array.prototype.slice.call(NodeList, 0)
		- 每一个节点有parentNode属性，chileNodes列表里的所有节点都指向同一个parentNode。
		- 可以使用previousSibling和nextSibling 访问它们的同胞节点。
		- 如果一个节点包含另一个节点,hasChildNodes将返回true.
		- ownerDocument将放回Document。

	- 操作节点(操作的是parenNode的子节点)
		1. appendChild(appendChild) 向childNodes末尾添加节点，如果该节点已存在，将移到末尾
		2. insertBefore(newElement, referenceElement) 向childNodes的特定位置添加节点。
			- someNode.insertBefore(newNode, null) //成为最后一个节点
			- someNode.insertBefore(newNode, someNode.firstNode) //成为第一个节点
		3. replaceChild 
			- var returnedNode = someNode.repalceChild(newNode, someNode.firstChild) //第一个节点被替换
		4. removeChild(child)
- Dom扩展
	- Selectors APILevel 1 
		- querySelector //取得匹配的第一个元素
		- querySelectorAll //返回NodeList实例
	- HTML5
		- getElementsByClassName //返回NOdeLIst实例
		- classLIst
			- add
			- contains
			- remove
			- toggle
		- focus
			- activeElement
			- hasfoces
		- HTMLDocument
			- readyState
			- compatMode
			- head
			- charset
			- dataset DOMStringMap实例
			- innerHTML
			- outerHTML
			- insertAdjacentHTML
		- 专用扩展
			- documentMode //<meta http-equiv="X-UA-Compatible" content="IE=IEVersion"
			- children
			- contains
			- innerText
			- outerText
		- scrollIntoView()
- Dom2&Dom3
	- style
		- cssText(可写)
	- document.defaultView.getComputedStyle()
	- document.styleSheets
		- disabled
		- href
		- cssRule
			- cssText(只读)
			- selectorText
			- style
		- insertRule
		- deleteRule
	- getBoundingClientRect()