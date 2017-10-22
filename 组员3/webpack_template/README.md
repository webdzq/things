# react-build-template

> A React Build Template 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 说明
```bash
基本构建框架是vue-cli
修改部分依赖与配置来构建react项目，
目前还在学习中，慢慢完善。
```

## changeLog
- 9.25  
  react-router4是没有提供路由钩子的，通过Redirect来实现，好好看下官方文档   
    
- 9.22  
  现在路由钩子出问题了，暂时没找到能用的 react-router-dom 的api 真的是尴尬  
  todo:打算周末看下iscroll   
  
- 9.21  
  路由基本可以正常使用。  
  react-router4 把路由route看做组件，嵌套在页面中也就可以。   
  路由跳转如果使用了`BrowerRoute`则直接使用this.props.history.push(path)即可  
  为什么我在公司电脑提交的代码没有记录，但是还能提交上。   
  todo: 看一下路由的挂载钩子 想去哪 从哪来 等属性  

- 9.20  
  router的history模式在本地dev调试时是通过 [connect-history-api-fallback](https://www.npmjs.com/package/connect-history-api-fallback) 来进行服务端放开路由处理的   
  使用history需要后台处理或者nginx处理 ： [vue router history 处理文档](https://router.vuejs.org/zh-cn/essentials/history-mode.html) 可以参考下   

- 9.19  
  [router参考1](https://github.com/brickspert/blog/issues/1)  
  [router参考2](https://github.com/xiaotuni/react-webpack-demo)  
  9.21之前弄好router  

- 9.14
  写了个小组件试了下可以。  
  todo: 看一下路由的使用  `react-router 4.0+` `react-router-dom`  

- 9.13  
  打包后css正常编译，但是dev模式下不能正常引入。   
  [css-modules](https://www.npmjs.com/package/react-css-modules),还要验证一下 classnames 结合 css-modules的使用，css变量。  
  todo:解决一下dev不能编译的问题，能不能改一下utils中的cssloader相关模块。  

  解决dev引入、编译less/css的问题，解决`autoprefixer`自动补全的坑。vue-loader坑了我。   
  TODO：__看一下`css-modules`的一系列问题__  ----------------  暂时推迟  

- 9.12  
  今天只解决了一个坑，webpack的resolve.extensions看网上别人多了个''空，编译报错，webpack2不需要这个。引入了less，但是好像没有执行。  
  todo:看看为啥没有执行，没有编译less。 

- 9.11  
  研究了下这个utils里的样式loader，发现了 [npm extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) ,主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象  
  ```
  use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader  
  fallback:编译后用什么loader来提取css文件  
  publicfile:用来覆盖项目路径,生成该css文件的文件路径  
  ```
  todo: 写例子测试一下  

- 9.10  
  完成了基本改善，可以跑起来。  
  添加了 [classnames](https://www.npmjs.com/package/classnames) 包，增加了`className`友好度，可以动态处理 className。  
  TODO: 研究下`style css less scss`的问题，看看react的样式应该怎么写，是否需要loader之类的，  
  　　　以及是否存在全局污染问题。

