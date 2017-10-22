# 正则表达式

## 总结
- [js中的正则表达式](https://segmentfault.com/a/1190000011569990?hmsr=funteas.com&utm_medium=funteas.com&utm_source=funteas.com)
- [在线解析正则](http://www.regexper.com)

## 实例
检测有几个汉字   
```js
//不使用正则
function testChineseNum(str, num) {
  let arr = val.split(''),
        cheArr = [];
  for (let item of arr) {
    if (this.commonReg.Chinese.test(item)) {
      cheArr.push(item);
    }
  }
  return cheArr.length > num - 1;
}
//使用正则
function testChineseNum(str, num) {
  const reg = /[\u4e00-\u9fa5]/g;
  const arr = str.match(reg)
  
  return arr.length > num - 1;
}
```