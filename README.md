# Wenxin's Bioinformatics Web
> 这是一个利用Vue全家桶搭建的项目(Vue是目前全球工业界最火的三大框架之一)

## 前台项目
[开源代码地址](https://github.com/Xinsen-Zhang/Wenxin-s-Bioinformatics-Web-User-Interface)<br/>
[线上效果展示](http://114.115.184.117/)
## 后台项目
[开源代码地址](https://github.com/Xinsen-Zhang/Wenxin-s-Bioinformatics-Web-Admin-Zone)<br/>
[线上效果地址](http://23.106.135.251:8080/admin)


## 技术栈

### 前端
* HTML5 及 HTML5 之前的技术
* CSS3 及 CSS3之前的技术
* 符合 ES6 规范的 JavaScript
* Vue全家桶框架
    * vue.js
        * 组件的编写
        * 基于数据的响应式网页
    * vuex.js
        * 组件间数据的状态管理
    * vue-router.js
        * 单页应用网页(SAP)的路由注册于管理
* Bootstrap
    * 网页页面的 normalization 和 基本字体大小的媒体查询
* pubsub-js
    * 分发订阅机制进行组建的个性化状态管理
* jquery
    * 便捷的 DOM 操作
*  showdown
    * 将 markdown 内容渲染成 html 内容
* webpack
    * 网页项目的工程化
    * 数据压缩
    * 打包
### 后端
* MySQL 数据的增删改查
* NodeJS 后端业务的交付,API 的维护
    * express后台管理系统的搭建
    * express-session 在后台系统中加入 session 机制
    * cheerio 爬虫爬取天气信息
    * mysql 在 nodejs 中使用 mysql
    * simplemde 构建简单的 markdown 编辑器
    ...

## 编译安装
### 安装 nodejs 之后
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

## 开发效果
### 前台页面
文件夹 htdocs 中
* 打开页面之后会进入开始画面.点击`go and explore →`进入网页
#### 路由
##### home
* 左侧
    * 网页的链接
    * 点击后另外打开一个窗口对应于点开的页面
* 中间
    * 轮播图
    * 各个路由页面的简介
* 右侧
    * 登录业务
    * 业务暂未开放
##### lecture
* 左侧
    * 目录
    * 点击跳转
* 右侧
    * 正文内容
* 特定文章路由`/lecture/id`, 其中 id 为1-4之间的整数
##### analysis
* 左侧
    * 目录
    * 点击跳转
* 右侧
    * 正文内容
* 特定文章路由`/analysis/id`, 其中 id 为1或者2
* 有一个暂未解决的 bug
    * <font color="#dd0000">跳转 python 功能页面会后回到网页会重新进入开始页面.理论上开始页面应该只出现一次</font>
##### reflection
* 上面
    * 恭喜过年
    * 点击之后有红包跳出
    * 点击左上角能够关闭
* 下面
    * reflection 正文内容
##### profile
* 照片轮播图
* 自我介绍
* 家乡杭州的介绍
* 联系方式

### 后台页面
* 请进入[手工搭建的简单后台页面](http://23.106.135.251:8080/admin)进行查看
    * 账号:`xu`
    * 密码:`Xwx19980703`
    * 功能:文章内容的修改(markdown 格式的文本)
* 后端 api 的维护(`express` + `mysql`搭建)
    * JSONP
        * 返回 json 数据类型
        * 支持跨域访问
    * API 详细
        * 后台 API
            * http://39.107.99.64:1221/admin/api/content?field=LectureContent&id=1
                * 最后的 id 可以是1,2,3,4
                * 返回 Lecture 文章内容
            * http://39.107.99.64:1221/admin/api/content?field=AnalysisContent&id=1
                * 最后的 id 可以是1,2
                * 返回 Analysis 文章内容
            * http://39.107.99.64:1221/admin/api/title?field=Lecture
                * 返回 Lecture 的文章题目
            * http://39.107.99.64:1221/admin/api/title?field=Analysis
                * 返回 Analysis 的文章题目
            * http://39.107.99.64:1221/admin/api/user?username=xu
                * 获取 用户的头像保存路径
        * 前台 API
            * http://39.107.99.64:1221/api/lectures/
                * 获取 Lecture 的文章标题
                * 效果同`http://39.107.99.64:1221/admin/api/title?field=Lecture`
            * http://39.107.99.64:1221/api/lectures/content/
                * 最后的 id 可以是1,2,3,4
                * 返回 Lecture 文章内容
                * 效果同`http://39.107.99.64:1221/admin/api/content?field=LectureContent&id=1`
            * http://39.107.99.64:1221/api/analysis/
                * 获取 analysis 的文章标题
                * 效果同`http://39.107.99.64:1221/admin/api/title?field=Analysis`
            * http://39.107.99.64:1221/api/analysis/content/?id=1
                * id 可以是1,2
                * 返回 Analysis 文章内容
                * 效果同`39.107.99.64:1221/admin/api/content?field=LectureContent&id=1`
            * http://39.107.99.64:1221/weather
                * 获取杭州的天气

## 谢谢观看.烦请给个 star, 嘻嘻