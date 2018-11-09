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


---
### 项目具体实现

1. 利用vue-awesome-swiper来完成轮播图开发

> 轮播图小坑：因为swiper-slide是手动循环出来的，所以动态数据的时候无法loop/autoplay，解决办法:利用v-if判断数据来渲染swiper，保证swiper组件被渲染的时候，已经有了数据

2. 在vue.config.js中进行proxy代理

3. 使用fetch进行数据交互

> fetch是ES6原生API，提供了数据交互的方式，兼容性差

4. 利用babel-polyfill垫片实现高级语法兼容

5. 使用axios进行数据交互/ jsonp async-await

> 想要在任何组件中都能使用到axios -> 将其挂载在Vue.prototype上

---

### vue-router 使用

vue提供了强大的vue-router路由工具供我们使用

需要安装vue-router包：

yarn add vue-router --save

原理：监听地址栏变化后进行对于的路由组件的卸载和安装

路由的配置需要实例化路由工具router并将其注入到根实例


需要配置路由表routes

    名字（具名路由）/重定向/别名alias...

配置mode选项来控制路由模式:hash/history(采用H5的history API，需要后端配置（忽略前端路由中的路径）)

配置路由出口 router-view


利用router-link生成dom进行路由调整 

    to / tag
    methods: push

利用this.$router/router的api方法（go,back,push,replace）进行路由的切换 -> 编程式导航


路由参数有两种:

1. 路径参数 直接匹配在path中，如：

    /detail/1 ; /detail/2  此时的1和2就是参数

    需要在路由中进行配置,强制性的必须有参数 path: '/detail/:param/...'

    router.push({name: 'detail', params:{...}})

    route.params

2. querystring 参数， ?a=1&b=2

    不需要配置
    router.push({name: 'detail', query:{...}})

    route.query


利用全局的路由守卫，监听路由的切换

路由守卫有很多种:全局守卫/路由独享守卫/组件内守卫，可以监听路由的跳转情况和状态，利用全局守卫实现了路由切换的时候更改头部的title，利用路由独享守卫，实现了登录权限验证，没有登录不能进入到某个路由

问题：

登录之后，后端利用响应头中的set-cookie会在浏览器端存入一些验证数据，然后进入个人中心的时候发送请求cookie会跟过去，从而得到正确的数据

但是，因为后端响应cookie的时候domain设置的不是我的域，导致无法将cookie存入到当前的域下

想要模拟cookie，自己存，问题是我也不知道存啥

    准备从响应头中取出set-cookie字段，然后自己存储，发现res.headers中没有set-cookie

    准备设置响应头拦截的中间件，查看一下能否有set-cookie发现也没有

    最终知道：想要从响应头中取出什么，却决于后端让你能取出什么：

    Access-Control-Expose-Headers : 'set-cookie'

> axios默认在发送请求的时候不会携带cookie，需要携带的时候，设置: axios.defaults.withCredentials = true;


#### keep-alive

可以利用内置的keep-alive组件去保存切换后的组件的状态，当组件切换回来的时候，会直接使用到缓存的这些数据，不会再次经历初始化阶段，当切换出去的时候也不会经历销毁阶段

应用场景：

路由切换后，组件需要重新获取数据，用户体验差，所以可以使用keep-alive处理，

如果有的情况下，数据变动较为频繁，就不能使用keep-alive

问题: 如果没有了mounted和destroyed，需要使用的时候怎么办

如果是路由组件的话可以用beforeRouteEnter和beforeRouteLeave来替代，如果不是路由组件，怎么办？

当使用了keep-alive后，生命周期钩子函数会多出来两个：activated （重新进入，mounted），deactivated (离开 destroyed)



#### 上拉加载

1. better-sroll

问题： 回到顶部，按钮是放在长列表中的，当点击按钮的时候，会先停止滚动，第二次点击才会触发点击事件

解决: 将按钮放到父组件中，控制按钮显示隐藏的数据挂载在父组件中，sync传递给list组件，list在监听滚动后，触发事件更改父组件的数据

    点击按钮时，利用ref找到子组件后调用子组件（list）的回到顶部方法


##### 组件库的使用

vue的生态系统很健全，很庞大，周边有很多vue相关的插件或者组件...

例如，使用了vue-progressbar实现了头部的进度条，注入$Progress在 this._proto_._proto_上，也就是说this是组件的实例，this._proto是组件的prototype，组件的prototype的_proto_指向的是Vue的prototype（因为组件是Vue的子类）

问题:

我们是在全局守卫中开启进度和完成进度的，但是当进入user-info的时候，因为没有登录，可以就会直接跳转到login，此时，全局的守卫beforeEach会执行两次，afterEach会执行一次，导致start两次，finish一次，在login中点击个人中心按钮的时候，beforeEach会执行一次，不会执行afterEach，导致start执行一次，没有finish，导致此时进度条不正常

解决:

在全局守卫中不为user-info加progress，在其组件内的守卫中加入progress


什么是组件库?拥有很多组件的库

市场上流行的组件库有很多，分别有PC的/移动的...

PC： element-ui,iview

移动： mint-ui, vux

组件库一般都有两种使用方式: 全局引入（把组件库中所有的组件都引入进行全部注册），按需引入（需要哪个加载哪个）


使用mint-ui实现了上拉加载/toast/indicator/index list 。。。 

实现了城市的页面逻辑后，有了一个小小的问题：城市这个数据需要在很多很多组件中共用，用普通的组件通信方式不好解决。。


#### 插件 / 自定义指令

准备开发一套属于自己的组件库/插件，

任何的组件似乎都需要Vue.use来处理一下，实质上是在执行这个模块对象中的install方法，install方法就能接收到Vue和配置参数，就可以在install方法中写入组件的注册等等的事情

提供组件

提供一些方法

提供一些指令

    v-lazy...

自定义指令

    实现了v-gp8-lazy指令，模拟v-lazy能力，出现了问题: bind中给window绑定事件的时候使用addEventListner，准备在销毁的时候unbind的时候去给window解绑，要求必须传入一样的函数。

    解决方案： 因为每一个钩子函数都能接收到el属性，而且是同一个el，就可以将函数挂载在el身上

指令的作用就是操作dom，不要用指令来更改数据！但是，如果真的需要用到数据或者修改/操作数据的话，只能这样了：

钩子函数中的第三个参数Vnode中可以取出context，其实就是指令所处的组件实例，这样的话，就可以拿到数据之类的了