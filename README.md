# @hankliu/rc-footer

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![build status][github-actions-image]][github-actions-url]
[![Codecov][codecov-image]][codecov-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]
[![dumi][dumi-image]][dumi-url]

[npm-image]: http://img.shields.io/npm/v/rc-footer.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@hankliu/rc-footer
[travis-image]: https://img.shields.io/travis/hankliu62/rc-footer/master?style=flat-square
[github-actions-image]: https://github.com/hankliu62/rc-footer/workflows/CI/badge.svg
[github-actions-url]: https://github.com/hankliu62/rc-footer/actions
[codecov-image]: https://img.shields.io/codecov/c/github/hankliu62/rc-footer/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/hankliu62/rc-footer
[download-image]: https://img.shields.io/npm/dm/@hankliu/rc-footer.svg?style=flat-square
[download-url]: https://npmjs.org/package/@hankliu/rc-footer
[bundlephobia-url]: https://bundlephobia.com/package/@hankliu/rc-footer
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@hankliu/rc-footer
[dumi-url]: https://github.com/umijs/dumi
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square

在 `HankLiu WebApp` 页面中使用的通用的 `Footer` 组件，包含 `Logo`，产品矩阵，联系我们，关于产品等模块内容。

## 功能特征

- [x] Logo
- [x] 产品矩阵
- [x] 联系我们
- [x] 关于产品

## 安装

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
