# vue-lazing [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/vue-lazing.svg?style=flat-square)](https://www.npmjs.com/package/vue-lazing) [![npm](https://img.shields.io/npm/v/vue-lazing.svg?style=flat-square)](https://www.npmjs.com/package/vue-lazing)

> A lazy loading component work with Vue.js 2, and based on [IntersectionObserver].

- [Online sample](https://lbwa.github.io/vue-lazing)

- [Play on the playground](https://jsfiddle.net/imbowen/28fracLu/)

[IntersectionObserver]:https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## Installing

```bash
# npm
npm i vue-lazing --save
```

or

```bash
# yarn
yarn add vue-lazing
```

## Usage

- Install plugin.

```js
import Vue from 'vue'
import VueLazing from 'vue-lazing'
Vue.use(VueLazing)
```

- Use `<vue-lazing>` components. Optionally, you can pass 3 kinds of parameters to control how to lazy loading.

```html
<!-- in single component file using default options -->
<template>
  <vue-lazing :threshold="0.5">
    <img data-src="/1.png" src="/default.png">
    <img data-src="/2.png" src="/default.png">
    <img data-src="/3.png" src="/default.png">
    <div>some other elements<div>
    <img data-src="/4.png" src="/default.png">
    <img data-src="/5.png" src="/default.png">
    <img data-src="/6.png" src="/default.png">
    <img data-src="/7.png" src="/default.png">
  </vue-lazing>
</template>
```

Once target `<img>` element's visibility is over `threshold` value, target's `src` will be replaced by `data-src` attribute.

## API

All API is based on [IntersectionObserver]. There are more [practical experiences].

| Options | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| root | HTMLElement | null ( means viewport ) | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. |
| rootMargin | String | `0px` | Margin around the root. |
| threshold | Number | 0.1 (means 10%) | A number indicate at what percentage of the target's visibility the replace runner should be executed. |

[practical experiences]:https://developers.google.com/web/updates/2016/04/intersectionobserver

## Compatibility

You can check `IntersectionObserver` compatibility from [here], and there is a [polyfill] for unsupporting browsers.

[here]:https://caniuse.com/#search=IntersectionObserver

[polyfill]:https://github.com/w3c/IntersectionObserver/tree/master/polyfill

## Changelog

[Changelog](./CHANGELOG.md)
