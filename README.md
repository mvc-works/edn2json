
edn2json
----

> small scripts to convert between **EDN string** and JSON data. based on [`jsedn`](https://github.com/mvc-works/edn2json).

> Notice: the core logics is not robust. Use `jsedn` if you have to keep stable. Checkout tests for details.

### Usage

```bash
npm install @mvc-works/edn2json
```

```js
let {edn2json, json2edn} = require('@mvc-works/edn2json')

json2edn({a: 1, "b?": 2}) // '{:a 1 :b? 2}'
edn2json('{:a 1 :b [2 :x]}') // {a: 1, b: [2, 'x']}
```

Conventions:

* when converting to JSON, `:keyword` drops `:`s.
* when converting to EDN, only keys match `/^[a-z][a-z-]*[\?\!]?$/` turned into keywords.

### License

MIT
