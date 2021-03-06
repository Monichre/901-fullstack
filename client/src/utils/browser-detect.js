export const BROWSER = {
  mQ: num => window.matchMedia(`(max-width: ${num}px)`),

  isSafari: () => navigator.userAgent.indexOf('Safari') > -1,

  isChrome: () => navigator.userAgent.indexOf('Chrome') > -1,

  isExplorer: () =>
    navigator.appName === 'Microsoft Internet Explorer' ||
    !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) ||
    navigator.userAgent.indexOf('MSIE') > -1,

  isFirefox: () => navigator.userAgent.indexOf('Firefox') > -1,

  isEdge: () => navigator.userAgent.indexOf('Edge/') > -1,

  handlePolyfill: () => {
    const body = document.querySelector('body')
    const polyfill = document.createElement('script')
    polyfill.src = 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js'
    polyfill.id = 'polyfill'
    body.appendChild(polyfill)
  },

  removePolyFill: () => {
    const body = document.querySelector('body')
    const polyfill = document.getElementById('polyfill')
    body.removeChild(polyfill)
  },

  isSmallerThanTablet: num => num < 768,

  isLandscape: ()  => window.orientation === 90,

  isShrinkingVertically: (browser_height) => browser_height <= 500,

  addObjectFindPolyfill: () => {
    if (!Array.prototype.find) {
      return Object.defineProperty(Array.prototype, 'find', {
        value: function(predicate) {
          if (this == null) {
            throw new TypeError('"this" is null or not defined')
          }

          var o = Object(this)
          var len = o.length >>> 0

          if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function')
          }

          var thisArg = arguments[1]
          var k = 0

          while (k < len) {
            var kValue = o[k]
            if (predicate.call(thisArg, kValue, k, o)) {
              return kValue
            }
            // e. Increase k by 1.
            k++
          }

          // 7. Return undefined.
          return undefined
        }
      })
    }

    if (typeof Object.assign != 'function') {
      Object.assign = function(target, varArgs) {
        // .length of function is 2
        'use strict'
        if (target == null) {
          // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object')
        }

        var to = Object(target)

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index]

          if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey]
              }
            }
          }
        }
        return to
      }
    }
  }
}
