'use strict';
// 配置代码远程发布功能：可以指定远程开发机和测试机
// fis3-deploy-http-push-strong示例代码：(与fis2的deploy类似的)

const conf = {
    //需要部署文件的路径
    path: '{index.html, package.json, app/**, assets/**, diagram-viewer/**}',
    gulpPath: 'everest-mweb/**',
    //测试机的receiver server地址
    testEnv: 'http://192.168.17.224:8999/receiver',
    //开发机的receiver server地址
    devEnv: 'http://192.168.17.131:8999/receiver',
    plugin: (env, gulpTo = '/srv/everest-mweb') => fis.plugin('http-push-strong', {
        //如果配置了receiver，fis会把文件逐个post到接收端上
        receiver: conf[env],
        to: gulpTo
    })
}

fis.media('test').match(conf.path, {
    deploy: conf.plugin('testEnv')
})

fis.media('dev').match(conf.path, {
    deploy: conf.plugin('devEnv')
})

fis.media('gulpdev').match(conf.gulpPath, {
    deploy: conf.plugin('devEnv', '/srv')
})

fis.media('gulptest').match(conf.gulpPath, {
    deploy: conf.plugin('testEnv', '/srv')
})

