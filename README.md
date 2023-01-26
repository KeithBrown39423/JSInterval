<div style="text-align: center;">
  <img alt="ISC License" src="https://img.shields.io/github/license/keithbrown39423/jsinterval">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/jsinterval">
</div>

# JSInterval

## Description

JSInterval is a JavaScript library that makes working with intervals easier. It has a simple API and can be used in both Node.js and the browser

## Credit

This project makes use of [vercel/ms](https://github.com/vercel/ms)

## Installation

Install JSInterval with npm

```bash
  npm install jsinterval
```

## Features

- Works in both [Node.js](https://nodejs.org/) and in the browser
- Uses [ms](https://npmjs.com/package/ms/) (Node.js only) to allow strings such as "1 minute", "30s", etc.

## Usage/Examples

### HTML

```html
<script src="https://cdn.jsdelivr.net/gh/KeithBrown39423/JSInterval/index.js">
<script>
  const timer = new Interval({
    func: () => {
      console.log(Date.now());
    },
    delay: 1000
  });
</script>
```

### JavaScript / TypeScript

```javascript
const Interval = require("jsinterval");
// TypeScript: import Interval from "jsinterval"; with --esModuleInterop
// TypeScript: import * as Interval from "jsinterval"; with --allowSyntheticDefaultImports
// TypeScript: import Interval = require("jsinterval"); with neither of the above

const timer = new Interval({
  func: () => {
    console.log(Date.now());
  },
  delay: "1 Second"
});
```

## Support

For support, email [keithbrown39423@outlook.com](mailto:keithbrown39423@outlook.com) or make an [issue](https://github.com/KeithBrown39423/JSInterval/issues/new) on GitHub

## License

[MIT](https://github.com/KeithBrown39423/JSInterval/blob/main/LICENSE)
