# H5打开App组件  

## 引入
[OpenApp组件](http://192.168.17.117/everest/everest-ecitic-h5/blob/dev/src/components/OpenApp.vue)
```javascript
import OpenApp from '@/components/OpenApp'
```   
    
## 例子  
```javascript
//template
<button @click="click"></button>
<open-app :type="type" :openUrl="openUrl" ></open-app>
//script
data(){
  return {
    type: '',
    openUrl: 'weixin://'
  }
},
methods: {
  click() {
    this.type = new Date();
  }
}
```   
     
## API
| 参数      | 说明           | 类型  |
| ------------- |-------------| -----|
| type      | 父组件触发事件，子组件监听以便触发openApp事件，保证每次不一样即可 | String  |
| openUrl      | App约定的openUrl      |   String   |
| downUrl   | 下载App链接     |    String    |
| appName  | App名称     |    String    |
    

## 兼容说明
在打开App时只要有提示询问用户是否打开的，都不能进行下载处理，也就是最好不要传`downUrl   appName `  这两个参数。  
因为询问事件会阻碍打开事件，代码继续运行，会被认定为是没有安装App，从而进行提示没有安装并跳转下载。  
如果没有传递这两个参数则只打开App，不进行是否存在App的判断。 如果不存在也就不会进行下载。  
存在该问题的手机/浏览器： ios9+,  魅族UC浏览器。  
不能在微信内使用。   
  
  
## 触发事件说明
该组件使用的是子组件中监听（watch）type的变化来进行父组件中事件触发的监听。  
官方推荐做法是： 
1. 创建 let bus = new Vue();  
    父组件： bus.$emit('openApp','val')  
    子组件： bus.$on('openApp', () => {/* doing something */})   
2. 使用vuex进行状态管理
















