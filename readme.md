# pypi-name

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]


> Check whether a package name is available on Pypi


## Installation

```
$ npm install --save pypi-name
```


## Usage

```js
const npmName = require('pypi-name');

npmName('django-oscar').then(available => {
	console.log(available);
	//=> false
});
```

## Related

- idea from [npm-name](https://github.com/sindresorhus/npm-name) - Check whether a package name is available on npm

## License

MIT © [Kai-Chu Chung](http://kaichu.io/)

[npm-image]: https://badge.fury.io/js/pypi-name.svg
[npm-url]: https://npmjs.org/package/pypi-name
[travis-image]: https://travis-ci.org/cage1016/pypi-name.svg?branch=master
[travis-url]: https://travis-ci.org/cage1016/pypi-name
