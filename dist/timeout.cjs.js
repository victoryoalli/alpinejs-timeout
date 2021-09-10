var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __require = typeof require !== "undefined" ? require : (x) => {
  throw new Error('Dynamic require of "' + x + '" is not supported');
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// builds/module.js
__export(exports, {
  default: () => module_default
});

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
