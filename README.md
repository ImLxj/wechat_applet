#### 小程序API

##### 事件监听API

​	```特点：以on开头，用来监听某些事件的触发```

##### 同步API

​	``` 特点：以Sync结尾的API都是同步的API、同步API的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常。```

##### 异步API

​	``` 特点：类似于jQuery中的$.ajax(options)函数，需要通过success、fail、compete接收调用的结果。```

#### 小程序页面导航

##### 声明式导航

​	在页面上声明一个<navigator>导航组件

​	通过点击<navigator>组件现页面跳转

###### 1、导航到tabBar页面

```
	tabBar页面指的是被配置为tabBar的页面。
	使用<navigator>组件跳转到指定的tabBar页面时,需要指定url属性和open-type属性，其中：
	url表示要跳转的页面的地址，必须以/开头
	open-type表示要跳转的方式，必须为switchTab

示例代码如下：
<navigator url="/pages/home/home" open-type="switchTab">
  跳转到主页
</navigator>
```

###### 2、导航到非tabBar页面

```
使用<navigator>组件跳转到指定的非tabBar页面时,需要指定url属性和open-type属性，其中：
	url表示要跳转的页面的地址，必须以/开头
	open-type表示要跳转的方式，必须为navigate
	
示例代码如下：
<navigator url="/pages/info/info" open-type="navigate">
  跳转到info页面
</navigator>
注意：在跳转非tabBar页面的时候open-type这个属性可以省略不写。
```

###### 3、后退导航

```
如果要后退到上一页面或者多级页面，则需要指定open-type属性和delta属性，其中：
	open-type的值必须是navigateBack，表示要进行后退导航。
	delta的值必须是数字，表示要后退的层级。
示例代码如下：
<navigator open-type="navigateBack" delta="1">
  返回上一级
</navigator>
注意：如果只需要后退一位的话，不需要指定delta属性
```



##### 编程式导航

​	调用小程序的导航API，实现页面的跳转。

###### 1、导航到tabBar页面

​	调用wx.switchTab(Object object)方法，可以跳转到tabBar页面。其中Object参数对象的属性列表如下：

| 属性     | 类型     | 是否必选 | 说明                                               |
| -------- | -------- | -------- | :------------------------------------------------- |
| url      | string   | 是       | 需要跳转的tabBar页面的路径，路径后不能带参数       |
| success  | function | 否       | 接口调用成功的回调函数                             |
| fail     | function | 否       | 接口调用失败的回调函数                             |
| complete | function | 否       | 结构调用结束的回调函数(不管是成功还是失败都会执行) |

示例代码如下：

```
  // 通过js里面的点击事件响应的函数
  gotoMessage() {
    wx.switchTab({
      url: '/pages/message/message',
    })
  },
  // 在wxml里面
  <button bindtap="gotoMessage">跳转到消息页面</button>
```

###### 2、导航到非tabBar页面

​	调用wx.navigateTo(Object object)方法,可以跳转到非tabBar页面，其中Object参数对象的属性列表如下：

| 属性     | 类型     | 是否必选 | 说明                                                   |
| -------- | -------- | -------- | :----------------------------------------------------- |
| url      | string   | 是       | 返回的页面数,如果delta大于现有的页面数，则返回到首页。 |
| success  | function | 否       | 接口调用成功的回调函数                                 |
| fail     | function | 否       | 接口调用失败的回调函数                                 |
| complete | function | 否       | 结构调用结束的回调函数(不管是成功还是失败都会执行)     |

示例代码如下：

```
// 页面结构
  <button bindtap="gotoInfo">跳转到info页面</button>

// 详细代码
  gotoInfo(){
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
```

###### 3、后退导航

​	调用wx.navigateBack(Object object)方法，可以返回上一页面或多级页面。

| 属性     | 类型     | 是否必选 | 默认值 | 说明                                               |
| -------- | -------- | -------- | :----- | -------------------------------------------------- |
| delte    | number   | 否       | 1      | 需要跳转的非tabBar页面的路径，路径后不能带参数     |
| success  | function | 否       |        | 接口调用成功的回调函数                             |
| fail     | function | 否       |        | 接口调用失败的回调函数                             |
| complete | function | 否       |        | 结构调用结束的回调函数(不管是成功还是失败都会执行) |
