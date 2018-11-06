# mz-project

卖座网的的移动端项目，有最新的电影咨询...

### VUE-CLI 3.0

使用了vue-cli 3.0 构建了卖座网开发环境，cli3 是18年年初开始着手创建的，结合了webpack4.0版本


##### 使用方式：

1. 安装cli  npm i @vue/cli -g

2. 初始化项目 vue create my-project || vue ui -> 开启可视化界面

3. 选择配置: 

    babel -> js的编译。。。。
    linter -> 代码规范
    PWA -> 离线缓存等...
    Router -> vue-router 实现spa
    Vuex   -> 状态管理工具
    CSS pre.... -> css预处理 sass/less/stylus
    test  -> 做单元测试...

##### cli3的项目结构配置：

package.json 中 scripts中利用vue-cli-service工具配置了开发模式

postcss.config.js postcss的配置文件

babel.config.js  babel的配置文件

public 是公共静态目录 可以直接使用/来访问

src  开发目录

##### vue.config.js

cli3 将自己配置文件隐藏了起来，全部封装在了vue-cli-service工具中

如果想要自定义一些配置的话，就可以在根目录中创建[vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)，将需要的配置放进去，就能将默认的配置覆盖


在这里我们可以利用chainWebpack进行webpack中多个选项的配置，例如，resolve.alias（控制模块引入的别名）

config.resolve.alias.set(symbol, path)

##### src 配置指南

默认情况下:

assets 这里的资源可以利用相对地址去引入

components 存放组件的目录

views 存放路由组件

router.js vue-router的配置

store.js  vuex的配置

main.js 项目入口文件 使用render函数去渲染根组件

App.vue 根组件  任何一个项目， 都需要一个根实例，根实例里需要一个根组件


###### 单文件组件

用一个文件来代表一个组件，后缀名为.vue, 文件中分为 

* template (模板) 

* script 中暴露出组件的配置

* style 编写css样式

    lang 指定使用的预处理语言

    scoped 锁定css作用域，只在当前组件生效， 做法： 1. 为当前组件模板都添加上独一无二的自定义属性：data-v-216tedus 2. 将style中的css样式都添加上属性选择器的限制




