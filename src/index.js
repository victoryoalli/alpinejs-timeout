const Plugin = function (Alpine) {
    const timer = function (fn, value) {
        setTimeout(() => {
            fn()
            timer(fn, value)
        }, value)
    }

    Alpine.directive('timeout', (el, obj, { evaluateLater, effect, cleanup }) => {
        let { value, expression, modifiers } = obj
        let fn = evaluateLater(expression)
        timer(fn, value)
    })
}

export default Plugin
