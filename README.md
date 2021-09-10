# Alpine.js plugin Timeout

> x-timeout The method calls a function or evaluates an expression after a specified number of milliseconds.

## Instalation
### Via script include
```html
<script src="/js/timeout.min.js" defer></script>
<script src="/js/alpine.js" defer></script>
```

### Via CDN
```html
<!-- Alpine Plugins -->
<script src="https://unpkg.com/@victoryoalli/alpinejs-timeout@1.0.0/dist/timeout.min.js" defer></script>
<!-- Alpine Core -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Via NPM

```bash
npm i @victoryoalli/alpinejs-timeout
```

```javascript
import Alpine from 'alpinejs'

import timeout from '@victoryoalli/alpinejs-timeout'
Alpine.plugin(timeout)

window.Alpine = Alpine
window.Alpine.start()
```

# x-timeout

Directive

`x-timeout`:`miliseconds`

```html
    <div x-data x-timeout="alert('screen resized')"></div>
```

### Example

Timeout for 1000 miliseconds to show the time. In this example the alpine.js plugin moment is being used.

```html
<div  x-data x-timeout:1000="$el.innerText=$moment().format('LTS')"></div>
```
