# vue-components

#### 效果展示
![](https://user-gold-cdn.xitu.io/2019/5/23/16ae353e96ecfaf7?w=416&h=740&f=png&s=28898)
![](https://user-gold-cdn.xitu.io/2019/5/23/16ae3eefb99dcb9c?w=381&h=672&f=gif&s=114076)
![](https://user-gold-cdn.xitu.io/2019/5/23/16ae35430e58923b?w=413&h=733&f=gif&s=73782)
![](https://user-gold-cdn.xitu.io/2019/5/23/16ae35467c7af239?w=413&h=733&f=gif&s=32598)
![](https://user-gold-cdn.xitu.io/2019/5/23/16ae3eff314deb33?w=381&h=672&f=gif&s=44496)
![](https://user-gold-cdn.xitu.io/2019/5/23/16ae3e51d3029b72?w=361&h=642&f=gif&s=49481)
![](https://user-gold-cdn.xitu.io/2019/5/23/16ae3e5553970921?w=361&h=642&f=gif&s=1201931)

### 1. Toast组件
#### 基本用法
```js
Toast('提示文案');
Toast({
  type: 'loading',
  message: '加载中...'
});
Toast.success('成功文案');
Toast.fail('失败文案');
```

#### 方法
|       方法名      |          参数        |    返回值  |      介绍      |
|----------------|----------------------|------------|----------------|
| Toast          | `options | message`  | toast 实例 | 展示提示       |
| Toast.loading  | `options | message`  | toast 实例 | 展示加载提示   |
| Toast.success  | `options | message`  | toast 实例 | 展示成功提示   |
| Toast.fail     | `options | message`  | toast 实例 | 展示失败提示   |
| Toast.close    | `close: Boolean`     | `Void`     | 关闭提示       |

#### Options
|       参数    |                                   说明                                   |   类型   | 默认值 |
|---------------|--------------------------------------------------------------------------|----------|--------|
| type     |提示类型，可选值为`loading` `success` `fail` `close` `normal` `colorful` `html`| `String` | `text` |
| position | 位置，可选值为 `top bottom`                    |  `String`  | `middle`   |
| duration | 展示时长(ms)                                   |  `Number`  | `3000`     |
| mask     | 是否显示背景遮罩层                             |  `Boolean` | `true`     |
|transition| 提示开场动画，可选值为`slide-down` `slide-up` `slide-left` `slide-right` |  `String`    | `fade`    |
| bgContent| 提示内容的背景颜色，可选值为`white` `transparent`|  `String`  | `black`    |
|background| 遮盖层的背景，支持十六进制和rgb格式            |  `String`  |  `rgba(0, 0, 0, 0.3)`  |
| colorText| 色彩文案，只限于type为`colorful`使用           |  `String`  | -          |
| color    | 色彩文案颜色，只限于type为`colorful`使用       |  `String`  | `#F89516`  |
| title    | 标题，只限于type为`normal`使用                 |  `String`  | -          |
| icon     | 加载的图标，只支持svg                          |  `String`  | `loading`  |
| size     | 加载的图标大小                                 |  `Number`  | `48`       |
| isClose  | 主动关闭加载提示                               |  `Boolean` | `false`    |
| animation| 是否开启加载的，只限于type为loading            |  `Boolean` | `false`    |
| animationName| 开启加载的动画，只限于type为loading        |  `String`  | -          |

### 2. Step组件
#### 基本用法
```js
<pl-step :active="active" active-text-color="#313131">
    <pl-steps>预约成功</pl-steps>
    <pl-steps>预约专家</pl-steps>
    <pl-steps>正在服务</pl-steps>
    <pl-steps>完成服务</pl-steps>
</pl-step>
<van-button type="default" @click="handleNext">下一步</van-button>
```
#### API
|       参数      |         说明        |    类型  |      默认值    |
|-----------------|---------------------|----------|----------------|
| active            | 当前步骤                         | `Number` | 0       |
| active-svg        | 自定义激活状态底部图标，详见svg组件  | `String` | `checked`   |
| dot-svg           | 自定义未激活状态底部图标，详见svg组件| `String` | `dot-circle`|
| active-text-color | 自定义激活状态颜色               | `String` | `#268AED`   |
| active-line-color | 自定义激活线束颜色               | `String` | `#268AED`   |

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
