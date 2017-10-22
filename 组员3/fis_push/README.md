# fis3 自动远程部署
 
## 直接提交：  
```bash
npm run pushtest
npm run pushdev
npm run gulpdev
npm run gulptest
```  

## 建议使用脚本构建提交：  
`./gulp.sh -e dev -m`  
脚本参数说明  

| 参数      | 说明           | 默认值  |
| ------------- |-------------| -----|
| e      | 构建的环境； 可选值： `dev`  `test` |  `test`  |
| m      | 构建是否使用sourcemap     |   no   |
   
## 参考资料
[node receiver](https://github.com/fex-team/receiver),    
[fis3-deploy-http-push-strong](https://github.com/fanxinqi/fis3-deploy-http-push-strong)  
运行shell建议使用[git bash](https://git-scm.com/downloads) 
__使用这个push脚本部署联调完后一定不要忘记提交代码到git！！__   
