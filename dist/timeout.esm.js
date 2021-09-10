// src/index.js
var Plugin = function(Alpine) {
  const timer = function(fn, value) {
    setTimeout(() => {
      fn();
      timer(fn, value);
    }, value);
  };
  Alpine.directive("timeout", (el, obj, { evaluateLater, effect, cleanup }) => {
    let { value, expression, modifiers } = obj;
    let fn = evaluateLater(expression);
    timer(fn, value);
  });
};
var src_default = Plugin;

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
