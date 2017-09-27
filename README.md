## 参考资料
- [PM2实用入门指南](http://imweb.io/topic/57c8cbb27f226f687b365636)
- [Nodejs ORM框架Sequelizejs快速入门](http://hopperclouds.github.io/2016/09/12/Nodejs-ORM%E6%A1%86%E6%9E%B6Sequelizejs%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/)
- [Node.js使用Sequelize操作MySQL](http://www.w3clog.com/21.html)
- [让写入数据库的数据自动写入缓存](https://cnodejs.org/topic/58d5e84ee9ab80d02d377066)
- [Sequelize 中文API文档](https://itbilu.com/nodejs/npm/VkYIaRPz-.html)
- [Sequelize 和 MySQL 对照](https://segmentfault.com/a/1190000003987871#articleHeader11)
- [docker入门指南](https://docker.rails365.net/chapters/1.html)
- [nginx反向代理原理和配置讲解](http://www.cnblogs.com/anruy/p/4989161.html)

## 一些资源
- [awesome-egg](https://github.com/eggjs/awesome-egg)
- [egg-rest](https://github.com/eggjs/egg-rest)
- [Egg 案例](https://github.com/eggjs/examples)
- [Egg 常见问题](https://eggjs.org/zh-cn/faq.html)
- [服务器运维面板 - 宝塔](https://www.bt.cn/)
- [腾讯云 SSL 证书申请](https://console.cloud.tencent.com/ssl)
- [实现 RESTful API](https://eggjs.org/zh-cn/tutorials/restful.html)
- [路由](https://eggjs.org/zh-cn/basics/router.html)
- [egg-restapi-module-tool](https://github.com/fomenyesu/egg-restapi-module-tool)
- [JSON API 格式](http://jsonapi.org.cn/format/)
- [REST API v3](https://developer.github.com/v3/)

## Nginx 反向代理
Egg 的应用跑在 1113 端口（举例），然后 Nginx 反向代理到 443 (https) 端口， 同时 Nginx 将 80 (http) 端口转发到 443 (https) 端口。在宝塔新建站点，配置并开启 SSL，然后修改 Nginx 配置文件：
```
upstream my_nodejs_upstream {
    server 127.0.0.1:1113;
}

server {
    ...    
    root /home/www/project_root;
    ...
    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_max_temp_file_size 0;
        proxy_pass http://my_nodejs_upstream/;
        proxy_redirect off;
        proxy_read_timeout 240s;
    }
}
```
[参考链接](http://imweb.io/topic/57c8cbb27f226f687b365636)

## 命令
### 本地开发

```bash
# 开发
$ npm run dev
# 访问
$ open http://localhost:7001/
```

### 部署

```bash
# 启动
$ npm start
# 停止
$ npm stop
```

### 其他
```bash
# 代码风格检查
$ npm run lint
# 单元测试
$ npm test
# 自动检测依赖更新
$ npm run autod
```

## 注意
- 在基于 async function 编写应用代码时，请确保你的代码运行在 Node.js 7.6+ 的版本上。