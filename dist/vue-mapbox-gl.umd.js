!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('vue'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'vue'], e)
    : e(((t = t || self).Mapbox = {}), t.Vue)
})(this, function (t, e) {
  'use strict'
  e = e && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
  var o = function (t, e) {
    return (o =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e
        }) ||
      function (t, e) {
        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
      })(t, e)
  }
  function n(t, e, o, n) {
    var r,
      i = arguments.length,
      a =
        i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      a = Reflect.decorate(t, e, o, n)
    else
      for (var c = t.length - 1; c >= 0; c--)
        (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a)
    return i > 3 && a && Object.defineProperty(e, o, a), a
    /**
     * vue-class-component v7.2.3
     * (c) 2015-present Evan You
     * @license MIT
     */
  }
  function r(t) {
    return (r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          })(t)
  }
  function i(t, e, o) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = o),
      t
    )
  }
  function a(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, o = new Array(t.length); e < t.length; e++)
            o[e] = t[e]
          return o
        }
      })(t) ||
      (function (t) {
        if (
          Symbol.iterator in Object(t) ||
          '[object Arguments]' === Object.prototype.toString.call(t)
        )
          return Array.from(t)
      })(t) ||
      (function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance')
      })()
    )
  }
  function c() {
    return (
      'undefined' != typeof Reflect &&
      Reflect.defineMetadata &&
      Reflect.getOwnMetadataKeys
    )
  }
  function s(t, e) {
    p(t, e),
      Object.getOwnPropertyNames(e.prototype).forEach(function (o) {
        p(t.prototype, e.prototype, o)
      }),
      Object.getOwnPropertyNames(e).forEach(function (o) {
        p(t, e, o)
      })
  }
  function p(t, e, o) {
    ;(o
      ? Reflect.getOwnMetadataKeys(e, o)
      : Reflect.getOwnMetadataKeys(e)
    ).forEach(function (n) {
      var r = o ? Reflect.getOwnMetadata(n, e, o) : Reflect.getOwnMetadata(n, e)
      o ? Reflect.defineMetadata(n, r, t, o) : Reflect.defineMetadata(n, r, t)
    })
  }
  var u = { __proto__: [] } instanceof Array
  function f(t) {
    'undefined' != typeof console && console.warn('[vue-class-component] ' + t)
  }
  function l(t, o) {
    var n = o.prototype._init
    o.prototype._init = function () {
      var e = this,
        o = Object.getOwnPropertyNames(t)
      if (t.$options.props)
        for (var n in t.$options.props) t.hasOwnProperty(n) || o.push(n)
      o.forEach(function (o) {
        '_' !== o.charAt(0) &&
          Object.defineProperty(e, o, {
            get: function () {
              return t[o]
            },
            set: function (e) {
              t[o] = e
            },
            configurable: !0,
          })
      })
    }
    var r = new o()
    o.prototype._init = n
    var i = {}
    return (
      Object.keys(r).forEach(function (t) {
        void 0 !== r[t] && (i[t] = r[t])
      }),
      'production' !== process.env.NODE_ENV &&
        !(o.prototype instanceof e) &&
        Object.keys(i).length > 0 &&
        f(
          'Component class must inherit Vue or its descendant class when class property is used.'
        ),
      i
    )
  }
  var d = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch',
  ]
  function h(t) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
    o.name = o.name || t._componentTag || t.name
    var n = t.prototype
    Object.getOwnPropertyNames(n).forEach(function (t) {
      if ('constructor' !== t)
        if (d.indexOf(t) > -1) o[t] = n[t]
        else {
          var e = Object.getOwnPropertyDescriptor(n, t)
          void 0 !== e.value
            ? 'function' == typeof e.value
              ? ((o.methods || (o.methods = {}))[t] = e.value)
              : (o.mixins || (o.mixins = [])).push({
                  data: function () {
                    return i({}, t, e.value)
                  },
                })
            : (e.get || e.set) &&
              ((o.computed || (o.computed = {}))[t] = {
                get: e.get,
                set: e.set,
              })
        }
    }),
      (o.mixins || (o.mixins = [])).push({
        data: function () {
          return l(this, t)
        },
      })
    var r = t.__decorators__
    r &&
      (r.forEach(function (t) {
        return t(o)
      }),
      delete t.__decorators__)
    var a = Object.getPrototypeOf(t.prototype),
      p = a instanceof e ? a.constructor : e,
      u = p.extend(o)
    return m(u, t, p), c() && s(u, t), u
  }
  var y = [
      'cid',
      'super',
      'options',
      'superOptions',
      'extendOptions',
      'sealedOptions',
      'component',
      'directive',
      'filter',
    ],
    v = { prototype: !0, arguments: !0, callee: !0, caller: !0 }
  function m(t, e, o) {
    Object.getOwnPropertyNames(e).forEach(function (n) {
      if (!v[n]) {
        var i = Object.getOwnPropertyDescriptor(t, n)
        if (!i || i.configurable) {
          var a,
            c,
            s = Object.getOwnPropertyDescriptor(e, n)
          if (!u) {
            if ('cid' === n) return
            var p = Object.getOwnPropertyDescriptor(o, n)
            if (
              ((a = s.value),
              (c = r(a)),
              null != a &&
                ('object' === c || 'function' === c) &&
                p &&
                p.value === s.value)
            )
              return
          }
          'production' !== process.env.NODE_ENV &&
            y.indexOf(n) >= 0 &&
            f(
              "Static property name '"
                .concat(n, "' declared on class '")
                .concat(e.name, "' ") +
                'conflicts with reserved property name of Vue internal. It may cause unexpected behavior of the component. Consider renaming the property.'
            ),
            Object.defineProperty(t, n, s)
        }
      }
    })
  }
  function g(t) {
    return 'function' == typeof t
      ? h(t)
      : function (e) {
          return h(e, t)
        }
  }
  g.registerHooks = function (t) {
    d.push.apply(d, a(t))
  }
  var b = 'undefined' != typeof Reflect && void 0 !== Reflect.getMetadata
  function O(t) {
    return (
      void 0 === t && (t = {}),
      function (e, o) {
        var n
        !(function (t, e, o) {
          if (
            b &&
            !Array.isArray(t) &&
            'function' != typeof t &&
            void 0 === t.type
          ) {
            var n = Reflect.getMetadata('design:type', e, o)
            n !== Object && (t.type = n)
          }
        })(t, e, o),
          ((n = function (e, o) {
            ;(e.props || (e.props = {}))[o] = t
          }),
          function (t, e, o) {
            var r = 'function' == typeof t ? t : t.constructor
            r.__decorators__ || (r.__decorators__ = []),
              'number' != typeof o && (o = void 0),
              r.__decorators__.push(function (t) {
                return n(t, e, o)
              })
          })(e, o)
      }
    )
  }
  var _ = /\B([A-Z])/g
  function w(t) {
    return function (e, o, n) {
      var r = o.replace(_, '-$1').toLowerCase(),
        i = n.value
      n.value = function () {
        for (var e = this, o = [], n = 0; n < arguments.length; n++)
          o[n] = arguments[n]
        var a = function (n) {
            var i = t || r
            void 0 === n
              ? 0 === o.length
                ? e.$emit(i)
                : 1 === o.length
                ? e.$emit(i, o[0])
                : e.$emit(i, o)
              : e.$emit(i, n)
          },
          c = i.apply(this, o)
        return (
          C(c)
            ? c.then(function (t) {
                a(t)
              })
            : a(c),
          c
        )
      }
    }
  }
  function C(t) {
    return t instanceof Promise || (t && 'function' == typeof t.then)
  }
  const j = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      (function (t, e) {
        function n() {
          this.constructor = t
        }
        o(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()))
      })(e, t),
      (e.prototype.mounted = function () {
        ;(this.map = this.mapInit()),
          this.addControls(this.map),
          this.registerMapEvents(this.map)
      }),
      (e.prototype.beforeDestroy = function () {
        this.map.remove()
      }),
      (e.prototype.mapInit = function () {
        return (
          (mapboxgl.accessToken = this.accessToken),
          Object.prototype.hasOwnProperty.call(this.mapOptions, 'container') ||
            (this.mapOptions.container = 'map'),
          new mapboxgl.Map(this.mapOptions)
        )
      }),
      (e.prototype.registerMapEvents = function (t) {
        var e = this,
          o = [
            'error',
            'load',
            'remove',
            'render',
            'resize',
            'webglcontextlost',
            'webglcontextrestored',
            'dataloading',
            'data',
            'tiledataloading',
            'sourcedataloading',
            'styledataloading',
            'sourcedata',
            'styledata',
            'boxzoomcancel',
            'boxzoomstart',
            'boxzoomend',
            'touchcancel',
            'touchmove',
            'touchend',
            'touchstart',
            'click',
            'contextmenu',
            'dblclick',
            'mousemove',
            'mouseup',
            'mousedown',
            'mouseout',
            'mouseover',
            'mouseenter',
            'mouseleave',
            'movestart',
            'move',
            'moveend',
            'zoomstart',
            'zoom',
            'zoomend',
            'rotatestart',
            'rotate',
            'rotateend',
            'dragstart',
            'drag',
            'dragend',
            'pitchstart',
            'pitch',
            'pitchend',
            'wheel',
          ],
          n = [
            'touchcancel',
            'touchend',
            'touchstart',
            'click',
            'contextmenu',
            'dblclick',
            'mousemove',
            'mouseup',
            'mousedown',
            'mouseout',
            'mouseover',
            'mouseenter',
            'mouseleave',
          ]
        if (Object.keys(this.$listeners).length) {
          var r = function (r) {
            var i = r.replace(/^map-/, '').split(':'),
              a = i[0],
              c = i[1]
            o.indexOf(a) > -1 &&
              (c && n.indexOf(a) > -1
                ? t.on(a, c, function (o) {
                    e.$emit(r, t, o)
                  })
                : t.on(a, function (o) {
                    e.$emit(r, t, o)
                  }))
          }
          for (var i in this.$listeners) r(i)
        }
      }),
      (e.prototype.addControls = function (t) {
        var e = this
        if (this.navControl.show) {
          var o = new mapboxgl.NavigationControl(this.navControl.options)
          t.addControl(o, this.navControl.position)
        }
        if (this.geolocateControl.show) {
          var n = new mapboxgl.GeolocateControl(this.geolocateControl.options)
          t.addControl(n, this.geolocateControl.position)
          var r = [
            'error',
            'trackuserlocationstart',
            'trackuserlocationend',
            'geolocate',
          ]
          if (Object.keys(this.$listeners).length) {
            var i = function (t) {
              var o = t.replace(/^geolocate-/, '')
              r.indexOf(o) > -1 &&
                n.on(o, function (o) {
                  o ? e.$emit(t, n, o) : e.$emit(t, n)
                })
            }
            for (var a in this.$listeners) i(a)
          }
        }
        if (this.scaleControl.show) {
          var c = new mapboxgl.ScaleControl(this.scaleControl.options)
          t.addControl(c, this.scaleControl.position)
        }
        if (this.fullscreenControl.show) {
          var s = new mapboxgl.FullscreenControl()
          t.addControl(s, this.fullscreenControl.position)
        }
      }),
      n([O({ required: !0 })], e.prototype, 'accessToken', void 0),
      n([O({ required: !0 })], e.prototype, 'mapOptions', void 0),
      n(
        [
          O({
            default: function () {
              return { show: !0, position: 'top-right', options: {} }
            },
          }),
        ],
        e.prototype,
        'navControl',
        void 0
      ),
      n(
        [
          O({
            default: function () {
              return { show: !1, position: 'top-left', options: {} }
            },
          }),
        ],
        e.prototype,
        'geolocateControl',
        void 0
      ),
      n(
        [
          O({
            default: function () {
              return { show: !1, position: 'top-left', options: {} }
            },
          }),
        ],
        e.prototype,
        'scaleControl',
        void 0
      ),
      n(
        [
          O({
            default: function () {
              return { show: !1, position: 'top-right', options: {} }
            },
          }),
        ],
        e.prototype,
        'fullscreenControl',
        void 0
      ),
      n(
        [
          O({
            default: function () {
              return { show: !1, position: 'top-right', options: {} }
            },
          }),
        ],
        e.prototype,
        'attributionControl',
        void 0
      ),
      n([w()], e.prototype, 'mapInit', null),
      (e = n([g], e))
    )
  })(e)
  var x = function () {
    var t = this.$createElement
    return (this._self._c || t)('div', {
      attrs: {
        id: Object.prototype.hasOwnProperty.call(this.mapOptions, 'container')
          ? this.mapOptions.container
          : 'map',
      },
    })
  }
  x._withStripped = !0
  const P = (function (t, e, o, n, r, i, a, c, s, p) {
    'boolean' != typeof a && ((s = c), (c = a), (a = !1))
    const u = 'function' == typeof o ? o.options : o
    let f
    if (
      (t &&
        t.render &&
        ((u.render = t.render),
        (u.staticRenderFns = t.staticRenderFns),
        (u._compiled = !0),
        r && (u.functional = !0)),
      n && (u._scopeId = n),
      i
        ? ((f = function (t) {
            ;(t =
              t ||
              (this.$vnode && this.$vnode.ssrContext) ||
              (this.parent &&
                this.parent.$vnode &&
                this.parent.$vnode.ssrContext)) ||
              'undefined' == typeof __VUE_SSR_CONTEXT__ ||
              (t = __VUE_SSR_CONTEXT__),
              e && e.call(this, s(t)),
              t && t._registeredComponents && t._registeredComponents.add(i)
          }),
          (u._ssrRegister = f))
        : e &&
          (f = a
            ? function (t) {
                e.call(this, p(t, this.$root.$options.shadowRoot))
              }
            : function (t) {
                e.call(this, c(t))
              }),
      f)
    )
      if (u.functional) {
        const t = u.render
        u.render = function (e, o) {
          return f.call(o), t(e, o)
        }
      } else {
        const t = u.beforeCreate
        u.beforeCreate = t ? [].concat(t, f) : [f]
      }
    return o
  })(
    { render: x, staticRenderFns: [] },
    void 0,
    j,
    void 0,
    !1,
    void 0,
    !1,
    void 0,
    void 0,
    void 0
  )
  var R,
    $ = {
      install: (R = function (t) {
        R.installed || ((R.installed = !0), t.component('Mapbox', P))
      }),
    },
    E = null
  'undefined' != typeof window && (E = window.Vue),
    E && E.use($),
    (t.default = P),
    Object.defineProperty(t, '__esModule', { value: !0 })
})
