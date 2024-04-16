# @hankliu/rc-footer

HankLiu UI React Footer Component.

## Feature

- [x] Placeholder
- [x] Preview
- [x] Rotate
- [x] Zoom
- [x] Flip
- [x] Fallback
- [x] Multiple Preview

## install
``` bash
npm install @hankliu/rc-footer --save
```

or

``` bash
yarn add @hankliu/rc-footer
```

or

``` bash
pnpm install @hankliu/rc-footer
```

## Usage

```bash
npm install
npm start
```

```js
import Footer from '@hankliu/rc-footer';

export default () => (
  <Footer />
);
```

## API

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| className | string | - | 组件外层元素classname |
| prefixCls | string | hlui-footer | 组件外层元素 classname 前缀 |
| productLinks | `Array<{ name: string, link: string}>` | 默认值在如下所示 | 产品列表 |

#### productLinks 参数默认值

``` ts
[
  {
    name: '设计动画',
    link: 'https://hankliu62.github.io/icss/',
  },
  {
    name: '个人简历',
    link: 'https://hankliu62.github.io/resume/',
  },
  {
    name: '面试宝典',
    link: 'https://hankliu62.github.io/interview/',
  },
  {
    name: 'Hank-Design',
    link: 'https://hankliu62.github.io/hankliu-ui/',
  },
  {
    name: '中午吃什么',
    link: 'https://hankliu62.github.io/what-lunch/',
  },
  {
    name: '懒人选择器',
    link: 'https://hankliu62.github.io/lucky-choose/',
  },
]
```

## 案例

`npm start` 然后打开 http://localhost:8000/examples/

线上案例: https://hankliu62.github.io/rc-footer

## 单元测试

```
npm test
```

## 覆盖率

```
npm run coverage
```

## License

@hankliu/rc-footer is released under the MIT license.
