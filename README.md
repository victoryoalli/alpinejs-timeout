# alpinejs-timeout

> An Alpine JS timeout plugin


Usage
Using `x-timeout` with ($moment().format('LTS'))[https://github.com/victoryoalli/alpinejs-moment] you could build a clock really ease.
```js
<div  x-data x-timeout:1000="$el.innerText=$moment().format('LTS')"></div>
```
