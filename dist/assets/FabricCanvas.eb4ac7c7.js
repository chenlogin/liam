import { _ as fn, o as gn, a as pn, b as I, z as wi, A as xi } from './index.4d458e66.js'
function g(o, t, e) {
  return (
    (t = yn(t)) in o
      ? Object.defineProperty(o, t, { value: e, enumerable: !0, configurable: !0, writable: !0 })
      : (o[t] = e),
    o
  )
}
function bi(o, t) {
  var e = Object.keys(o)
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(o)
    t &&
      (s = s.filter(function (i) {
        return Object.getOwnPropertyDescriptor(o, i).enumerable
      })),
      e.push.apply(e, s)
  }
  return e
}
function p(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? bi(Object(e), !0).forEach(function (s) {
          g(o, s, e[s])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e))
      : bi(Object(e)).forEach(function (s) {
          Object.defineProperty(o, s, Object.getOwnPropertyDescriptor(e, s))
        })
  }
  return o
}
function j(o, t) {
  if (o == null) return {}
  var e,
    s,
    i = mn(o, t)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o)
    for (s = 0; s < r.length; s++)
      (e = r[s]), t.indexOf(e) >= 0 || ({}.propertyIsEnumerable.call(o, e) && (i[e] = o[e]))
  }
  return i
}
function mn(o, t) {
  if (o == null) return {}
  var e = {}
  for (var s in o)
    if ({}.hasOwnProperty.call(o, s)) {
      if (t.indexOf(s) >= 0) continue
      e[s] = o[s]
    }
  return e
}
function Wt(o, t) {
  return t || (t = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(t) } }))
}
function _n(o, t) {
  if (typeof o != 'object' || !o) return o
  var e = o[Symbol.toPrimitive]
  if (e !== void 0) {
    var s = e.call(o, t || 'default')
    if (typeof s != 'object') return s
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(o)
}
function yn(o) {
  var t = _n(o, 'string')
  return typeof t == 'symbol' ? t : t + ''
}
class Ti {
  constructor() {
    g(this, 'browserShadowBlurConstant', 1),
      g(this, 'DPI', 96),
      g(this, 'devicePixelRatio', typeof window < 'u' ? window.devicePixelRatio : 1),
      g(this, 'perfLimitSizeTotal', 2097152),
      g(this, 'maxCacheSideLimit', 4096),
      g(this, 'minCacheSideLimit', 256),
      g(this, 'disableStyleCopyPaste', !1),
      g(this, 'enableGLFiltering', !0),
      g(this, 'textureSize', 4096),
      g(this, 'forceGLPutImageData', !1),
      g(this, 'cachesBoundsOfCurve', !1),
      g(this, 'fontPaths', {}),
      g(this, 'NUM_FRACTION_DIGITS', 4)
  }
}
class vn extends Ti {
  constructor(t) {
    super(), this.configure(t)
  }
  configure() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    Object.assign(this, t)
  }
  addFonts() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    this.fontPaths = p(p({}, this.fontPaths), t)
  }
  removeFonts() {
    ;(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).forEach(e => {
      delete this.fontPaths[e]
    })
  }
  clearFonts() {
    this.fontPaths = {}
  }
  restoreDefaults(t) {
    const e = new Ti(),
      s = (t == null ? void 0 : t.reduce((i, r) => ((i[r] = e[r]), i), {})) || e
    this.configure(s)
  }
}
const E = new vn(),
  Bt = function (o) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) e[s - 1] = arguments[s]
    return console[o]('fabric', ...e)
  }
class wt extends Error {
  constructor(t, e) {
    super('fabric: '.concat(t), e)
  }
}
class Cn extends wt {
  constructor(t) {
    super(''.concat(t, " 'options.signal' is in 'aborted' state"))
  }
}
class Sn {}
class wn extends Sn {
  testPrecision(t, e) {
    const s = 'precision '.concat(
        e,
        ` float;
void main(){}`
      ),
      i = t.createShader(t.FRAGMENT_SHADER)
    return i ? (t.shaderSource(i, s), t.compileShader(i), !!t.getShaderParameter(i, t.COMPILE_STATUS)) : !1
  }
  queryWebGL(t) {
    const e = t.getContext('webgl')
    e &&
      ((this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE)),
      (this.GLPrecision = ['highp', 'mediump', 'lowp'].find(s => this.testPrecision(e, s))),
      e.getExtension('WEBGL_lose_context').loseContext(),
      Bt('log', 'WebGL: max texture size '.concat(this.maxTextureSize)))
  }
  isSupported(t) {
    return !!this.maxTextureSize && this.maxTextureSize >= t
  }
}
const xn = {},
  bn = () => ({
    document,
    window,
    isTouchSupported:
      'ontouchstart' in window ||
      'ontouchstart' in document ||
      (window && window.navigator && window.navigator.maxTouchPoints > 0),
    WebGLProbe: new wn(),
    dispose() {},
    copyPasteData: xn,
  })
let Oi
const bt = () => Oi || (Oi = bn()),
  oe = () => bt().document,
  Js = () => bt().window,
  rr = () => {
    var o
    return Math.max((o = E.devicePixelRatio) !== null && o !== void 0 ? o : Js().devicePixelRatio, 1)
  }
class Tn {
  constructor() {
    g(this, 'charWidthsCache', {}), g(this, 'boundsOfCurveCache', {})
  }
  getFontCache(t) {
    let { fontFamily: e, fontStyle: s, fontWeight: i } = t
    ;(e = e.toLowerCase()), this.charWidthsCache[e] || (this.charWidthsCache[e] = {})
    const r = this.charWidthsCache[e],
      n = ''.concat(s.toLowerCase(), '_').concat((i + '').toLowerCase())
    return r[n] || (r[n] = {}), r[n]
  }
  clearFontCache(t) {
    ;(t = (t || '').toLowerCase()),
      t ? this.charWidthsCache[t] && delete this.charWidthsCache[t] : (this.charWidthsCache = {})
  }
  limitDimsByArea(t) {
    const { perfLimitSizeTotal: e } = E,
      s = Math.sqrt(e * t)
    return [Math.floor(s), Math.floor(e / s)]
  }
}
const me = new Tn()
var On = '6.4.3'
const Is = On
function Ae() {}
const Te = Math.PI / 2,
  Be = Math.PI * 2,
  Zs = Math.PI / 180,
  et = Object.freeze([1, 0, 0, 1, 0, 0]),
  Qs = 16,
  Di = 2,
  jt = 1 - 0.5522847498,
  k = 'center',
  A = 'left',
  it = 'top',
  Vs = 'bottom',
  W = 'right',
  rt = 'none',
  ti = /\r?\n/,
  nr = 'moving',
  es = 'scaling',
  or = 'rotating',
  ei = 'rotate',
  ar = 'skewing',
  Ce = 'resizing',
  Dn = 'modifyPoly',
  kn = 'modifyPath',
  Ie = 'changed',
  ss = 'scale',
  nt = 'scaleX',
  ut = 'scaleY',
  ae = 'skewX',
  he = 'skewY',
  H = 'fill',
  Q = 'stroke',
  Ve = 'modified',
  Jt = 'json',
  ks = 'svg'
class Mn {
  constructor() {
    ;(this[Jt] = new Map()), (this[ks] = new Map())
  }
  has(t) {
    return this[Jt].has(t)
  }
  getClass(t) {
    const e = this[Jt].get(t)
    if (!e) throw new wt('No class registered for '.concat(t))
    return e
  }
  setClass(t, e) {
    e ? this[Jt].set(e, t) : (this[Jt].set(t.type, t), this[Jt].set(t.type.toLowerCase(), t))
  }
  getSVGClass(t) {
    return this[ks].get(t)
  }
  setSVGClass(t, e) {
    this[ks].set(e != null ? e : t.type.toLowerCase(), t)
  }
}
const x = new Mn()
class En extends Array {
  remove(t) {
    const e = this.indexOf(t)
    e > -1 && this.splice(e, 1)
  }
  cancelAll() {
    const t = this.splice(0)
    return t.forEach(e => e.abort()), t
  }
  cancelByCanvas(t) {
    if (!t) return []
    const e = this.filter(s => {
      var i
      return (
        s.target === t ||
        (typeof s.target == 'object' && ((i = s.target) === null || i === void 0 ? void 0 : i.canvas) === t)
      )
    })
    return e.forEach(s => s.abort()), e
  }
  cancelByTarget(t) {
    if (!t) return []
    const e = this.filter(s => s.target === t)
    return e.forEach(s => s.abort()), e
  }
}
const Ye = new En()
class Pn {
  constructor() {
    g(this, '__eventListeners', {})
  }
  on(t, e) {
    if ((this.__eventListeners || (this.__eventListeners = {}), typeof t == 'object'))
      return (
        Object.entries(t).forEach(s => {
          let [i, r] = s
          this.on(i, r)
        }),
        () => this.off(t)
      )
    if (e) {
      const s = t
      return (
        this.__eventListeners[s] || (this.__eventListeners[s] = []),
        this.__eventListeners[s].push(e),
        () => this.off(s, e)
      )
    } else return () => !1
  }
  once(t, e) {
    if (typeof t == 'object') {
      const s = []
      return (
        Object.entries(t).forEach(i => {
          let [r, n] = i
          s.push(this.once(r, n))
        }),
        () => s.forEach(i => i())
      )
    } else if (e) {
      const s = this.on(t, function () {
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a]
        e.call(this, ...n), s()
      })
      return s
    } else return () => !1
  }
  _removeEventListener(t, e) {
    if (!!this.__eventListeners[t])
      if (e) {
        const s = this.__eventListeners[t],
          i = s.indexOf(e)
        i > -1 && s.splice(i, 1)
      } else this.__eventListeners[t] = []
  }
  off(t, e) {
    if (!!this.__eventListeners)
      if (typeof t > 'u') for (const s in this.__eventListeners) this._removeEventListener(s)
      else
        typeof t == 'object'
          ? Object.entries(t).forEach(s => {
              let [i, r] = s
              this._removeEventListener(i, r)
            })
          : this._removeEventListener(t, e)
  }
  fire(t, e) {
    var s
    if (!this.__eventListeners) return
    const i = (s = this.__eventListeners[t]) === null || s === void 0 ? void 0 : s.concat()
    if (i) for (let r = 0; r < i.length; r++) i[r].call(this, e || {})
  }
}
const Qt = (o, t) => {
    const e = o.indexOf(t)
    return e !== -1 && o.splice(e, 1), o
  },
  kt = o => {
    if (o === 0) return 1
    switch (Math.abs(o) / Te) {
      case 1:
      case 3:
        return 0
      case 2:
        return -1
    }
    return Math.cos(o)
  },
  Mt = o => {
    if (o === 0) return 0
    const t = o / Te,
      e = Math.sign(o)
    switch (t) {
      case 1:
        return e
      case 2:
        return 0
      case 3:
        return -e
    }
    return Math.sin(o)
  }
class _ {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
      e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
    typeof t == 'object' ? ((this.x = t.x), (this.y = t.y)) : ((this.x = t), (this.y = e))
  }
  add(t) {
    return new _(this.x + t.x, this.y + t.y)
  }
  addEquals(t) {
    return (this.x += t.x), (this.y += t.y), this
  }
  scalarAdd(t) {
    return new _(this.x + t, this.y + t)
  }
  scalarAddEquals(t) {
    return (this.x += t), (this.y += t), this
  }
  subtract(t) {
    return new _(this.x - t.x, this.y - t.y)
  }
  subtractEquals(t) {
    return (this.x -= t.x), (this.y -= t.y), this
  }
  scalarSubtract(t) {
    return new _(this.x - t, this.y - t)
  }
  scalarSubtractEquals(t) {
    return (this.x -= t), (this.y -= t), this
  }
  multiply(t) {
    return new _(this.x * t.x, this.y * t.y)
  }
  scalarMultiply(t) {
    return new _(this.x * t, this.y * t)
  }
  scalarMultiplyEquals(t) {
    return (this.x *= t), (this.y *= t), this
  }
  divide(t) {
    return new _(this.x / t.x, this.y / t.y)
  }
  scalarDivide(t) {
    return new _(this.x / t, this.y / t)
  }
  scalarDivideEquals(t) {
    return (this.x /= t), (this.y /= t), this
  }
  eq(t) {
    return this.x === t.x && this.y === t.y
  }
  lt(t) {
    return this.x < t.x && this.y < t.y
  }
  lte(t) {
    return this.x <= t.x && this.y <= t.y
  }
  gt(t) {
    return this.x > t.x && this.y > t.y
  }
  gte(t) {
    return this.x >= t.x && this.y >= t.y
  }
  lerp(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.5
    return (e = Math.max(Math.min(1, e), 0)), new _(this.x + (t.x - this.x) * e, this.y + (t.y - this.y) * e)
  }
  distanceFrom(t) {
    const e = this.x - t.x,
      s = this.y - t.y
    return Math.sqrt(e * e + s * s)
  }
  midPointFrom(t) {
    return this.lerp(t)
  }
  min(t) {
    return new _(Math.min(this.x, t.x), Math.min(this.y, t.y))
  }
  max(t) {
    return new _(Math.max(this.x, t.x), Math.max(this.y, t.y))
  }
  toString() {
    return ''.concat(this.x, ',').concat(this.y)
  }
  setXY(t, e) {
    return (this.x = t), (this.y = e), this
  }
  setX(t) {
    return (this.x = t), this
  }
  setY(t) {
    return (this.y = t), this
  }
  setFromPoint(t) {
    return (this.x = t.x), (this.y = t.y), this
  }
  swap(t) {
    const e = this.x,
      s = this.y
    ;(this.x = t.x), (this.y = t.y), (t.x = e), (t.y = s)
  }
  clone() {
    return new _(this.x, this.y)
  }
  rotate(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : si
    const s = Mt(t),
      i = kt(t),
      r = this.subtract(e)
    return new _(r.x * i - r.y * s, r.x * s + r.y * i).add(e)
  }
  transform(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    return new _(t[0] * this.x + t[2] * this.y + (e ? 0 : t[4]), t[1] * this.x + t[3] * this.y + (e ? 0 : t[5]))
  }
}
const si = new _(0, 0),
  Fe = o => !!o && Array.isArray(o._objects)
function hr(o) {
  class t extends o {
    constructor() {
      super(...arguments), g(this, '_objects', [])
    }
    _onObjectAdded(s) {}
    _onObjectRemoved(s) {}
    _onStackOrderChanged(s) {}
    add() {
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r]
      const n = this._objects.push(...i)
      return i.forEach(a => this._onObjectAdded(a)), n
    }
    insertAt(s) {
      for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) r[n - 1] = arguments[n]
      return this._objects.splice(s, 0, ...r), r.forEach(a => this._onObjectAdded(a)), this._objects.length
    }
    remove() {
      const s = this._objects,
        i = []
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a]
      return (
        n.forEach(h => {
          const l = s.indexOf(h)
          l !== -1 && (s.splice(l, 1), i.push(h), this._onObjectRemoved(h))
        }),
        i
      )
    }
    forEachObject(s) {
      this.getObjects().forEach((i, r, n) => s(i, r, n))
    }
    getObjects() {
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r]
      return i.length === 0 ? [...this._objects] : this._objects.filter(n => n.isType(...i))
    }
    item(s) {
      return this._objects[s]
    }
    isEmpty() {
      return this._objects.length === 0
    }
    size() {
      return this._objects.length
    }
    contains(s, i) {
      return this._objects.includes(s) ? !0 : i ? this._objects.some(r => r instanceof t && r.contains(s, !0)) : !1
    }
    complexity() {
      return this._objects.reduce((s, i) => ((s += i.complexity ? i.complexity() : 0), s), 0)
    }
    sendObjectToBack(s) {
      return !s || s === this._objects[0]
        ? !1
        : (Qt(this._objects, s), this._objects.unshift(s), this._onStackOrderChanged(s), !0)
    }
    bringObjectToFront(s) {
      return !s || s === this._objects[this._objects.length - 1]
        ? !1
        : (Qt(this._objects, s), this._objects.push(s), this._onStackOrderChanged(s), !0)
    }
    sendObjectBackwards(s, i) {
      if (!s) return !1
      const r = this._objects.indexOf(s)
      if (r !== 0) {
        const n = this.findNewLowerIndex(s, r, i)
        return Qt(this._objects, s), this._objects.splice(n, 0, s), this._onStackOrderChanged(s), !0
      }
      return !1
    }
    bringObjectForward(s, i) {
      if (!s) return !1
      const r = this._objects.indexOf(s)
      if (r !== this._objects.length - 1) {
        const n = this.findNewUpperIndex(s, r, i)
        return Qt(this._objects, s), this._objects.splice(n, 0, s), this._onStackOrderChanged(s), !0
      }
      return !1
    }
    moveObjectTo(s, i) {
      return s === this._objects[i]
        ? !1
        : (Qt(this._objects, s), this._objects.splice(i, 0, s), this._onStackOrderChanged(s), !0)
    }
    findNewLowerIndex(s, i, r) {
      let n
      if (r) {
        n = i
        for (let a = i - 1; a >= 0; --a)
          if (s.isOverlapping(this._objects[a])) {
            n = a
            break
          }
      } else n = i - 1
      return n
    }
    findNewUpperIndex(s, i, r) {
      let n
      if (r) {
        n = i
        for (let a = i + 1; a < this._objects.length; ++a)
          if (s.isOverlapping(this._objects[a])) {
            n = a
            break
          }
      } else n = i + 1
      return n
    }
    collectObjects(s) {
      let { left: i, top: r, width: n, height: a } = s,
        { includeIntersecting: h = !0 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      const l = [],
        c = new _(i, r),
        u = c.add(new _(n, a))
      for (let d = this._objects.length - 1; d >= 0; d--) {
        const f = this._objects[d]
        f.selectable &&
          f.visible &&
          ((h && f.intersectsWithRect(c, u)) ||
            f.isContainedWithinRect(c, u) ||
            (h && f.containsPoint(c)) ||
            (h && f.containsPoint(u))) &&
          l.push(f)
      }
      return l
    }
  }
  return t
}
class lr extends Pn {
  _setOptions() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    for (const e in t) this.set(e, t[e])
  }
  _setObject(t) {
    for (const e in t) this._set(e, t[e])
  }
  set(t, e) {
    return typeof t == 'object' ? this._setObject(t) : this._set(t, e), this
  }
  _set(t, e) {
    this[t] = e
  }
  toggle(t) {
    const e = this.get(t)
    return typeof e == 'boolean' && this.set(t, !e), this
  }
  get(t) {
    return this[t]
  }
}
function Le(o) {
  return Js().requestAnimationFrame(o)
}
function An(o) {
  return Js().cancelAnimationFrame(o)
}
let Fn = 0
const It = () => Fn++,
  G = () => {
    const o = oe().createElement('canvas')
    if (!o || typeof o.getContext > 'u') throw new wt('Failed to create `canvas` element')
    return o
  },
  Ln = () => oe().createElement('img'),
  cr = (o, t, e) => o.toDataURL('image/'.concat(t), e),
  jn = o => !!o && o.getContext !== void 0,
  X = o => o * Zs,
  Nt = o => o / Zs,
  Rn = o => o.every((t, e) => t === et[e]),
  st = (o, t, e) => new _(o).transform(t, e),
  pt = o => {
    const t = 1 / (o[0] * o[3] - o[1] * o[2]),
      e = [t * o[3], -t * o[1], -t * o[2], t * o[0], 0, 0],
      { x: s, y: i } = new _(o[4], o[5]).transform(e, !0)
    return (e[4] = -s), (e[5] = -i), e
  },
  q = (o, t, e) => [
    o[0] * t[0] + o[2] * t[1],
    o[1] * t[0] + o[3] * t[1],
    o[0] * t[2] + o[2] * t[3],
    o[1] * t[2] + o[3] * t[3],
    e ? 0 : o[0] * t[4] + o[2] * t[5] + o[4],
    e ? 0 : o[1] * t[4] + o[3] * t[5] + o[5],
  ],
  ii = (o, t) => o.reduceRight((e, s) => (s && e ? q(s, e, t) : s || e), void 0) || et.concat(),
  ur = o => {
    let [t, e] = o
    return Math.atan2(e, t)
  },
  We = o => {
    const t = ur(o),
      e = Math.pow(o[0], 2) + Math.pow(o[1], 2),
      s = Math.sqrt(e),
      i = (o[0] * o[3] - o[2] * o[1]) / s,
      r = Math.atan2(o[0] * o[2] + o[1] * o[3], e)
    return { angle: Nt(t), scaleX: s, scaleY: i, skewX: Nt(r), skewY: 0, translateX: o[4] || 0, translateY: o[5] || 0 }
  },
  Oe = function (o) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
    return [1, 0, 0, 1, o, t]
  }
function De() {
  let { angle: o = 0 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    { x: t = 0, y: e = 0 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const s = X(o),
    i = kt(s),
    r = Mt(s)
  return [i, r, -r, i, t ? t - (i * t - r * e) : 0, e ? e - (r * t + i * e) : 0]
}
const ri = function (o) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o
    return [o, 0, 0, t, 0, 0]
  },
  dr = o => Math.tan(X(o)),
  fr = o => [1, 0, dr(o), 1, 0, 0],
  gr = o => [1, dr(o), 0, 1, 0, 0],
  is = o => {
    let { scaleX: t = 1, scaleY: e = 1, flipX: s = !1, flipY: i = !1, skewX: r = 0, skewY: n = 0 } = o,
      a = ri(s ? -t : t, i ? -e : e)
    return r && (a = q(a, fr(r), !0)), n && (a = q(a, gr(n), !0)), a
  },
  Bn = o => {
    const { translateX: t = 0, translateY: e = 0, angle: s = 0 } = o
    let i = Oe(t, e)
    s && (i = q(i, De({ angle: s })))
    const r = is(o)
    return Rn(r) || (i = q(i, r)), i
  },
  je = function (o) {
    let { signal: t, crossOrigin: e = null } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return new Promise(function (s, i) {
      if (t && t.aborted) return i(new Cn('loadImage'))
      const r = Ln()
      let n
      t &&
        ((n = function (h) {
          ;(r.src = ''), i(h)
        }),
        t.addEventListener('abort', n, { once: !0 }))
      const a = function () {
        ;(r.onload = r.onerror = null), n && (t == null || t.removeEventListener('abort', n)), s(r)
      }
      if (!o) {
        a()
        return
      }
      ;(r.onload = a),
        (r.onerror = function () {
          n && (t == null || t.removeEventListener('abort', n)), i(new wt('Error loading '.concat(r.src)))
        }),
        e && (r.crossOrigin = e),
        (r.src = o)
    })
  },
  Se = function (o) {
    let { signal: t, reviver: e = Ae } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return new Promise((s, i) => {
      const r = []
      t && t.addEventListener('abort', i, { once: !0 }),
        Promise.all(
          o.map(n =>
            x
              .getClass(n.type)
              .fromObject(n, { signal: t })
              .then(a => (e(n, a), r.push(a), a))
          )
        )
          .then(s)
          .catch(n => {
            r.forEach(a => {
              a.dispose && a.dispose()
            }),
              i(n)
          })
          .finally(() => {
            t && t.removeEventListener('abort', i)
          })
    })
  },
  rs = function (o) {
    let { signal: t } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return new Promise((e, s) => {
      const i = []
      t && t.addEventListener('abort', s, { once: !0 })
      const r = Object.values(o).map(
          a =>
            a &&
            (a.type && x.has(a.type)
              ? Se([a], { signal: t }).then(h => {
                  let [l] = h
                  return i.push(l), l
                })
              : a)
        ),
        n = Object.keys(o)
      Promise.all(r)
        .then(a => a.reduce((h, l, c) => ((h[n[c]] = l), h), {}))
        .then(e)
        .catch(a => {
          i.forEach(h => {
            h.dispose && h.dispose()
          }),
            s(a)
        })
        .finally(() => {
          t && t.removeEventListener('abort', s)
        })
    })
  },
  le = function (o) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []).reduce(
      (e, s) => (s in o && (e[s] = o[s]), e),
      {}
    )
  },
  ni = (o, t) => Object.keys(o).reduce((e, s) => (t(o[s], s, o) && (e[s] = o[s]), e), {}),
  ki = {
    aliceblue: '#F0F8FF',
    antiquewhite: '#FAEBD7',
    aqua: '#0FF',
    aquamarine: '#7FFFD4',
    azure: '#F0FFFF',
    beige: '#F5F5DC',
    bisque: '#FFE4C4',
    black: '#000',
    blanchedalmond: '#FFEBCD',
    blue: '#00F',
    blueviolet: '#8A2BE2',
    brown: '#A52A2A',
    burlywood: '#DEB887',
    cadetblue: '#5F9EA0',
    chartreuse: '#7FFF00',
    chocolate: '#D2691E',
    coral: '#FF7F50',
    cornflowerblue: '#6495ED',
    cornsilk: '#FFF8DC',
    crimson: '#DC143C',
    cyan: '#0FF',
    darkblue: '#00008B',
    darkcyan: '#008B8B',
    darkgoldenrod: '#B8860B',
    darkgray: '#A9A9A9',
    darkgrey: '#A9A9A9',
    darkgreen: '#006400',
    darkkhaki: '#BDB76B',
    darkmagenta: '#8B008B',
    darkolivegreen: '#556B2F',
    darkorange: '#FF8C00',
    darkorchid: '#9932CC',
    darkred: '#8B0000',
    darksalmon: '#E9967A',
    darkseagreen: '#8FBC8F',
    darkslateblue: '#483D8B',
    darkslategray: '#2F4F4F',
    darkslategrey: '#2F4F4F',
    darkturquoise: '#00CED1',
    darkviolet: '#9400D3',
    deeppink: '#FF1493',
    deepskyblue: '#00BFFF',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1E90FF',
    firebrick: '#B22222',
    floralwhite: '#FFFAF0',
    forestgreen: '#228B22',
    fuchsia: '#F0F',
    gainsboro: '#DCDCDC',
    ghostwhite: '#F8F8FF',
    gold: '#FFD700',
    goldenrod: '#DAA520',
    gray: '#808080',
    grey: '#808080',
    green: '#008000',
    greenyellow: '#ADFF2F',
    honeydew: '#F0FFF0',
    hotpink: '#FF69B4',
    indianred: '#CD5C5C',
    indigo: '#4B0082',
    ivory: '#FFFFF0',
    khaki: '#F0E68C',
    lavender: '#E6E6FA',
    lavenderblush: '#FFF0F5',
    lawngreen: '#7CFC00',
    lemonchiffon: '#FFFACD',
    lightblue: '#ADD8E6',
    lightcoral: '#F08080',
    lightcyan: '#E0FFFF',
    lightgoldenrodyellow: '#FAFAD2',
    lightgray: '#D3D3D3',
    lightgrey: '#D3D3D3',
    lightgreen: '#90EE90',
    lightpink: '#FFB6C1',
    lightsalmon: '#FFA07A',
    lightseagreen: '#20B2AA',
    lightskyblue: '#87CEFA',
    lightslategray: '#789',
    lightslategrey: '#789',
    lightsteelblue: '#B0C4DE',
    lightyellow: '#FFFFE0',
    lime: '#0F0',
    limegreen: '#32CD32',
    linen: '#FAF0E6',
    magenta: '#F0F',
    maroon: '#800000',
    mediumaquamarine: '#66CDAA',
    mediumblue: '#0000CD',
    mediumorchid: '#BA55D3',
    mediumpurple: '#9370DB',
    mediumseagreen: '#3CB371',
    mediumslateblue: '#7B68EE',
    mediumspringgreen: '#00FA9A',
    mediumturquoise: '#48D1CC',
    mediumvioletred: '#C71585',
    midnightblue: '#191970',
    mintcream: '#F5FFFA',
    mistyrose: '#FFE4E1',
    moccasin: '#FFE4B5',
    navajowhite: '#FFDEAD',
    navy: '#000080',
    oldlace: '#FDF5E6',
    olive: '#808000',
    olivedrab: '#6B8E23',
    orange: '#FFA500',
    orangered: '#FF4500',
    orchid: '#DA70D6',
    palegoldenrod: '#EEE8AA',
    palegreen: '#98FB98',
    paleturquoise: '#AFEEEE',
    palevioletred: '#DB7093',
    papayawhip: '#FFEFD5',
    peachpuff: '#FFDAB9',
    peru: '#CD853F',
    pink: '#FFC0CB',
    plum: '#DDA0DD',
    powderblue: '#B0E0E6',
    purple: '#800080',
    rebeccapurple: '#639',
    red: '#F00',
    rosybrown: '#BC8F8F',
    royalblue: '#4169E1',
    saddlebrown: '#8B4513',
    salmon: '#FA8072',
    sandybrown: '#F4A460',
    seagreen: '#2E8B57',
    seashell: '#FFF5EE',
    sienna: '#A0522D',
    silver: '#C0C0C0',
    skyblue: '#87CEEB',
    slateblue: '#6A5ACD',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#FFFAFA',
    springgreen: '#00FF7F',
    steelblue: '#4682B4',
    tan: '#D2B48C',
    teal: '#008080',
    thistle: '#D8BFD8',
    tomato: '#FF6347',
    turquoise: '#40E0D0',
    violet: '#EE82EE',
    wheat: '#F5DEB3',
    white: '#FFF',
    whitesmoke: '#F5F5F5',
    yellow: '#FF0',
    yellowgreen: '#9ACD32',
  },
  In = () =>
    /^rgba?\(\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d{0,3}(?:\.\d+)?%?)\s*)?\)$/i,
  Vn = () =>
    /^hsla?\(\s*([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d*(?:\.\d+)?%?)\s*)?\)$/i,
  Yn = () => /^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i,
  Ms = (o, t, e) => (
    e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6 ? o + (t - o) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? o + (t - o) * (2 / 3 - e) * 6 : o
  ),
  Mi = (o, t, e, s) => {
    ;(o /= 255), (t /= 255), (e /= 255)
    const i = Math.max(o, t, e),
      r = Math.min(o, t, e)
    let n, a
    const h = (i + r) / 2
    if (i === r) n = a = 0
    else {
      const l = i - r
      switch (((a = h > 0.5 ? l / (2 - i - r) : l / (i + r)), i)) {
        case o:
          n = (t - e) / l + (t < e ? 6 : 0)
          break
        case t:
          n = (e - o) / l + 2
          break
        case e:
          n = (o - t) / l + 4
          break
      }
      n /= 6
    }
    return [Math.round(n * 360), Math.round(a * 100), Math.round(h * 100), s]
  },
  Ei = function () {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '1'
    return parseFloat(o) / (o.endsWith('%') ? 100 : 1)
  },
  Me = o => Math.min(Math.round(o), 255).toString(16).toUpperCase().padStart(2, '0'),
  Pi = o => {
    let [t, e, s, i = 1] = o
    const r = Math.round(t * 0.3 + e * 0.59 + s * 0.11)
    return [r, r, r, i]
  }
class P {
  constructor(t) {
    if ((g(this, 'isUnrecognised', !1), !t)) this.setSource([0, 0, 0, 1])
    else if (t instanceof P) this.setSource([...t._source])
    else if (Array.isArray(t)) {
      const [e, s, i, r = 1] = t
      this.setSource([e, s, i, r])
    } else this.setSource(this._tryParsingColor(t))
  }
  _tryParsingColor(t) {
    return (
      t in ki && (t = ki[t]),
      t === 'transparent'
        ? [255, 255, 255, 0]
        : P.sourceFromHex(t) || P.sourceFromRgb(t) || P.sourceFromHsl(t) || ((this.isUnrecognised = !0) && [0, 0, 0, 1])
    )
  }
  getSource() {
    return this._source
  }
  setSource(t) {
    this._source = t
  }
  toRgb() {
    const [t, e, s] = this.getSource()
    return 'rgb('.concat(t, ',').concat(e, ',').concat(s, ')')
  }
  toRgba() {
    return 'rgba('.concat(this.getSource().join(','), ')')
  }
  toHsl() {
    const [t, e, s] = Mi(...this.getSource())
    return 'hsl('.concat(t, ',').concat(e, '%,').concat(s, '%)')
  }
  toHsla() {
    const [t, e, s, i] = Mi(...this.getSource())
    return 'hsla('.concat(t, ',').concat(e, '%,').concat(s, '%,').concat(i, ')')
  }
  toHex() {
    return this.toHexa().slice(0, 6)
  }
  toHexa() {
    const [t, e, s, i] = this.getSource()
    return ''
      .concat(Me(t))
      .concat(Me(e))
      .concat(Me(s))
      .concat(Me(Math.round(i * 255)))
  }
  getAlpha() {
    return this.getSource()[3]
  }
  setAlpha(t) {
    return (this._source[3] = t), this
  }
  toGrayscale() {
    return this.setSource(Pi(this.getSource())), this
  }
  toBlackWhite(t) {
    const [e, , , s] = Pi(this.getSource()),
      i = e < (t || 127) ? 0 : 255
    return this.setSource([i, i, i, s]), this
  }
  overlayWith(t) {
    t instanceof P || (t = new P(t))
    const e = this.getSource(),
      s = 0.5,
      i = t.getSource(),
      [r, n, a] = e.map((h, l) => Math.round(h * (1 - s) + i[l] * s))
    return this.setSource([r, n, a, e[3]]), this
  }
  static fromRgb(t) {
    return P.fromRgba(t)
  }
  static fromRgba(t) {
    return new P(P.sourceFromRgb(t))
  }
  static sourceFromRgb(t) {
    const e = t.match(In())
    if (e) {
      const [s, i, r] = e.slice(1, 4).map(n => {
        const a = parseFloat(n)
        return n.endsWith('%') ? Math.round(a * 2.55) : a
      })
      return [s, i, r, Ei(e[4])]
    }
  }
  static fromHsl(t) {
    return P.fromHsla(t)
  }
  static fromHsla(t) {
    return new P(P.sourceFromHsl(t))
  }
  static sourceFromHsl(t) {
    const e = t.match(Vn())
    if (!e) return
    const i = (((P.parseAngletoDegrees(e[1]) % 360) + 360) % 360) / 360,
      r = parseFloat(e[2]) / 100,
      n = parseFloat(e[3]) / 100
    let a, h, l
    if (r === 0) a = h = l = n
    else {
      const c = n <= 0.5 ? n * (r + 1) : n + r - n * r,
        u = n * 2 - c
      ;(a = Ms(u, c, i + 1 / 3)), (h = Ms(u, c, i)), (l = Ms(u, c, i - 1 / 3))
    }
    return [Math.round(a * 255), Math.round(h * 255), Math.round(l * 255), Ei(e[4])]
  }
  static fromHex(t) {
    return new P(P.sourceFromHex(t))
  }
  static sourceFromHex(t) {
    if (t.match(Yn())) {
      const e = t.slice(t.indexOf('#') + 1),
        s = e.length <= 4
      let i
      s ? (i = e.split('').map(l => l + l)) : (i = e.match(/.{2}/g))
      const [r, n, a, h = 255] = i.map(l => parseInt(l, 16))
      return [r, n, a, h / 255]
    }
  }
  static parseAngletoDegrees(t) {
    const e = t.toLowerCase(),
      s = parseFloat(e)
    return e.includes('rad') ? Nt(s) : e.includes('turn') ? s * 360 : s
  }
}
const B = (o, t) => parseFloat(Number(o).toFixed(t)),
  se = function (o) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qs
    const e = /\D{0,2}$/.exec(o),
      s = parseFloat(o),
      i = E.DPI
    switch (e == null ? void 0 : e[0]) {
      case 'mm':
        return (s * i) / 25.4
      case 'cm':
        return (s * i) / 2.54
      case 'in':
        return s * i
      case 'pt':
        return (s * i) / 72
      case 'pc':
        return ((s * i) / 72) * 12
      case 'em':
        return s * t
      default:
        return s
    }
  },
  Wn = o => (o && o !== rt ? [o.slice(1, 4), o.slice(5, 8)] : o === rt ? [o, o] : ['Mid', 'Mid']),
  Xn = o => {
    const [t, e] = o.trim().split(' '),
      [s, i] = Wn(t)
    return { meetOrSlice: e || 'meet', alignX: s, alignY: i }
  },
  Xe = o => 'matrix(' + o.map(t => B(t, E.NUM_FRACTION_DIGITS)).join(' ') + ')',
  we = function (o, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
      s,
      i
    if (!t) s = 'none'
    else if (t.toLive) s = 'url(#SVGID_'.concat(t.id, ')')
    else {
      const r = new P(t),
        n = r.getAlpha()
      ;(s = r.toRgb()), n !== 1 && (i = n.toString())
    }
    return e
      ? ''
          .concat(o, ': ')
          .concat(s, '; ')
          .concat(i ? ''.concat(o, '-opacity: ').concat(i, '; ') : '')
      : ''
          .concat(o, '="')
          .concat(s, '" ')
          .concat(i ? ''.concat(o, '-opacity="').concat(i, '" ') : '')
  },
  zn = function (o, t) {
    let { left: e, top: s, width: i, height: r } = t,
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : E.NUM_FRACTION_DIGITS
    const a = we(H, o, !1),
      [h, l, c, u] = [e, s, i, r].map(d => B(d, n))
    return '<rect '
      .concat(a, ' x="')
      .concat(h, '" y="')
      .concat(l, '" width="')
      .concat(c, '" height="')
      .concat(u, '"></rect>')
  },
  ct = o => !!o && o.toLive !== void 0,
  Ai = o => !!o && typeof o.toObject == 'function',
  Fi = o => !!o && o.offsetX !== void 0 && 'source' in o,
  pr = o => !!o && typeof o._renderText == 'function',
  Hn = o => !!o && typeof o._renderPathCommands == 'function',
  Gt = o => !!o && 'multiSelectionStacking' in o
function mr(o) {
  const t = o && gt(o)
  let e = 0,
    s = 0
  if (!o || !t) return { left: e, top: s }
  let i = o
  const r = t.documentElement,
    n = t.body || { scrollLeft: 0, scrollTop: 0 }
  for (
    ;
    i &&
    (i.parentNode || i.host) &&
    ((i = i.parentNode || i.host),
    i === t
      ? ((e = n.scrollLeft || r.scrollLeft || 0), (s = n.scrollTop || r.scrollTop || 0))
      : ((e += i.scrollLeft || 0), (s += i.scrollTop || 0)),
    !(i.nodeType === 1 && i.style.position === 'fixed'));

  );
  return { left: e, top: s }
}
const gt = o => o.ownerDocument || null,
  _r = o => {
    var t
    return ((t = o.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView) || null
  },
  yr = function (o, t, e) {
    let { width: s, height: i } = e,
      r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1
    ;(o.width = s),
      (o.height = i),
      r > 1 &&
        (o.setAttribute('width', (s * r).toString()), o.setAttribute('height', (i * r).toString()), t.scale(r, r))
  },
  Ys = (o, t) => {
    let { width: e, height: s } = t
    e && (o.style.width = typeof e == 'number' ? ''.concat(e, 'px') : e),
      s && (o.style.height = typeof s == 'number' ? ''.concat(s, 'px') : s)
  }
function Gn(o) {
  var t
  const e = o && gt(o),
    s = { left: 0, top: 0 }
  if (!e) return s
  const i = ((t = _r(o)) === null || t === void 0 ? void 0 : t.getComputedStyle(o, null)) || {}
  ;(s.left += parseInt(i.borderLeftWidth, 10) || 0),
    (s.top += parseInt(i.borderTopWidth, 10) || 0),
    (s.left += parseInt(i.paddingLeft, 10) || 0),
    (s.top += parseInt(i.paddingTop, 10) || 0)
  let r = { left: 0, top: 0 }
  const n = e.documentElement
  typeof o.getBoundingClientRect < 'u' && (r = o.getBoundingClientRect())
  const a = mr(o)
  return { left: r.left + a.left - (n.clientLeft || 0) + s.left, top: r.top + a.top - (n.clientTop || 0) + s.top }
}
function Li(o) {
  return typeof o.onselectstart < 'u' && (o.onselectstart = () => !1), (o.style.userSelect = rt), o
}
class vr {
  constructor(t) {
    g(this, '_originalCanvasStyle', void 0), g(this, 'lower', void 0)
    const e = this.createLowerCanvas(t)
    this.lower = { el: e, ctx: e.getContext('2d') }
  }
  createLowerCanvas(t) {
    const e = jn(t) ? t : (t && oe().getElementById(t)) || G()
    if (e.hasAttribute('data-fabric'))
      throw new wt(
        'Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?'
      )
    return (
      (this._originalCanvasStyle = e.style.cssText),
      e.setAttribute('data-fabric', 'main'),
      e.classList.add('lower-canvas'),
      e
    )
  }
  cleanupDOM(t) {
    let { width: e, height: s } = t
    const { el: i } = this.lower
    i.classList.remove('lower-canvas'),
      i.removeAttribute('data-fabric'),
      i.setAttribute('width', ''.concat(e)),
      i.setAttribute('height', ''.concat(s)),
      (i.style.cssText = this._originalCanvasStyle || ''),
      (this._originalCanvasStyle = void 0)
  }
  setDimensions(t, e) {
    const { el: s, ctx: i } = this.lower
    yr(s, i, t, e)
  }
  setCSSDimensions(t) {
    Ys(this.lower.el, t)
  }
  calcOffset() {
    return Gn(this.lower.el)
  }
  dispose() {
    bt().dispose(this.lower.el), delete this.lower
  }
}
const Nn = {
  backgroundVpt: !0,
  backgroundColor: '',
  overlayVpt: !0,
  overlayColor: '',
  includeDefaultValues: !0,
  svgViewportTransformation: !0,
  renderOnAddRemove: !0,
  skipOffscreen: !0,
  enableRetinaScaling: !0,
  imageSmoothingEnabled: !0,
  controlsAboveOverlay: !1,
  allowTouchScrolling: !1,
  viewportTransform: [...et],
}
class ke extends hr(lr) {
  get lowerCanvasEl() {
    var t
    return (t = this.elements.lower) === null || t === void 0 ? void 0 : t.el
  }
  get contextContainer() {
    var t
    return (t = this.elements.lower) === null || t === void 0 ? void 0 : t.ctx
  }
  static getDefaults() {
    return ke.ownDefaults
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      Object.assign(this, this.constructor.getDefaults()),
      this.set(e),
      this.initElements(t),
      this._setDimensionsImpl({
        width: this.width || this.elements.lower.el.width || 0,
        height: this.height || this.elements.lower.el.height || 0,
      }),
      (this.skipControlsDrawing = !1),
      (this.viewportTransform = [...this.viewportTransform]),
      this.calcViewportBoundaries()
  }
  initElements(t) {
    this.elements = new vr(t)
  }
  add() {
    const t = super.add(...arguments)
    return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t
  }
  insertAt(t) {
    for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) s[i - 1] = arguments[i]
    const r = super.insertAt(t, ...s)
    return s.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), r
  }
  remove() {
    const t = super.remove(...arguments)
    return t.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t
  }
  _onObjectAdded(t) {
    t.canvas &&
      t.canvas !== this &&
      (Bt(
        'warn',
        `Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`
      ),
      t.canvas.remove(t)),
      t._set('canvas', this),
      t.setCoords(),
      this.fire('object:added', { target: t }),
      t.fire('added', { target: this })
  }
  _onObjectRemoved(t) {
    t._set('canvas', void 0), this.fire('object:removed', { target: t }), t.fire('removed', { target: this })
  }
  _onStackOrderChanged() {
    this.renderOnAddRemove && this.requestRenderAll()
  }
  getRetinaScaling() {
    return this.enableRetinaScaling ? rr() : 1
  }
  calcOffset() {
    return (this._offset = this.elements.calcOffset())
  }
  getWidth() {
    return this.width
  }
  getHeight() {
    return this.height
  }
  setWidth(t, e) {
    return this.setDimensions({ width: t }, e)
  }
  setHeight(t, e) {
    return this.setDimensions({ height: t }, e)
  }
  _setDimensionsImpl(t) {
    let { cssOnly: e = !1, backstoreOnly: s = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (!e) {
      const i = p({ width: this.width, height: this.height }, t)
      this.elements.setDimensions(i, this.getRetinaScaling()),
        (this.hasLostContext = !0),
        (this.width = i.width),
        (this.height = i.height)
    }
    s || this.elements.setCSSDimensions(t), this.calcOffset()
  }
  setDimensions(t, e) {
    this._setDimensionsImpl(t, e), (!e || !e.cssOnly) && this.requestRenderAll()
  }
  getZoom() {
    return this.viewportTransform[0]
  }
  setViewportTransform(t) {
    ;(this.viewportTransform = t), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll()
  }
  zoomToPoint(t, e) {
    const s = t,
      i = [...this.viewportTransform],
      r = st(t, pt(i))
    ;(i[0] = e), (i[3] = e)
    const n = st(r, i)
    ;(i[4] += s.x - n.x), (i[5] += s.y - n.y), this.setViewportTransform(i)
  }
  setZoom(t) {
    this.zoomToPoint(new _(0, 0), t)
  }
  absolutePan(t) {
    const e = [...this.viewportTransform]
    return (e[4] = -t.x), (e[5] = -t.y), this.setViewportTransform(e)
  }
  relativePan(t) {
    return this.absolutePan(new _(-t.x - this.viewportTransform[4], -t.y - this.viewportTransform[5]))
  }
  getElement() {
    return this.elements.lower.el
  }
  clearContext(t) {
    t.clearRect(0, 0, this.width, this.height)
  }
  getContext() {
    return this.elements.lower.ctx
  }
  clear() {
    this.remove(...this.getObjects()),
      (this.backgroundImage = void 0),
      (this.overlayImage = void 0),
      (this.backgroundColor = ''),
      (this.overlayColor = ''),
      this.clearContext(this.getContext()),
      this.fire('canvas:cleared'),
      this.renderOnAddRemove && this.requestRenderAll()
  }
  renderAll() {
    this.cancelRequestedRender(), !this.destroyed && this.renderCanvas(this.getContext(), this._objects)
  }
  renderAndReset() {
    ;(this.nextRenderHandle = 0), this.renderAll()
  }
  requestRenderAll() {
    !this.nextRenderHandle &&
      !this.disposed &&
      !this.destroyed &&
      (this.nextRenderHandle = Le(() => this.renderAndReset()))
  }
  calcViewportBoundaries() {
    const t = this.width,
      e = this.height,
      s = pt(this.viewportTransform),
      i = st({ x: 0, y: 0 }, s),
      r = st({ x: t, y: e }, s),
      n = i.min(r),
      a = i.max(r)
    return (this.vptCoords = { tl: n, tr: new _(a.x, n.y), bl: new _(n.x, a.y), br: a })
  }
  cancelRequestedRender() {
    this.nextRenderHandle && (An(this.nextRenderHandle), (this.nextRenderHandle = 0))
  }
  drawControls(t) {}
  renderCanvas(t, e) {
    if (this.destroyed) return
    const s = this.viewportTransform,
      i = this.clipPath
    this.calcViewportBoundaries(),
      this.clearContext(t),
      (t.imageSmoothingEnabled = this.imageSmoothingEnabled),
      (t.patternQuality = 'best'),
      this.fire('before:render', { ctx: t }),
      this._renderBackground(t),
      t.save(),
      t.transform(s[0], s[1], s[2], s[3], s[4], s[5]),
      this._renderObjects(t, e),
      t.restore(),
      !this.controlsAboveOverlay && !this.skipControlsDrawing && this.drawControls(t),
      i &&
        (i._set('canvas', this),
        i.shouldCache(),
        (i._transformDone = !0),
        i.renderCache({ forClipping: !0 }),
        this.drawClipPathOnCanvas(t, i)),
      this._renderOverlay(t),
      this.controlsAboveOverlay && !this.skipControlsDrawing && this.drawControls(t),
      this.fire('after:render', { ctx: t }),
      this.__cleanupTask && (this.__cleanupTask(), (this.__cleanupTask = void 0))
  }
  drawClipPathOnCanvas(t, e) {
    const s = this.viewportTransform
    t.save(),
      t.transform(...s),
      (t.globalCompositeOperation = 'destination-in'),
      e.transform(t),
      t.scale(1 / e.zoomX, 1 / e.zoomY),
      t.drawImage(e._cacheCanvas, -e.cacheTranslationX, -e.cacheTranslationY),
      t.restore()
  }
  _renderObjects(t, e) {
    for (let s = 0, i = e.length; s < i; ++s) e[s] && e[s].render(t)
  }
  _renderBackgroundOrOverlay(t, e) {
    const s = this[''.concat(e, 'Color')],
      i = this[''.concat(e, 'Image')],
      r = this.viewportTransform,
      n = this[''.concat(e, 'Vpt')]
    if (!s && !i) return
    const a = ct(s)
    if (s) {
      if (
        (t.save(),
        t.beginPath(),
        t.moveTo(0, 0),
        t.lineTo(this.width, 0),
        t.lineTo(this.width, this.height),
        t.lineTo(0, this.height),
        t.closePath(),
        (t.fillStyle = a ? s.toLive(t) : s),
        n && t.transform(...r),
        a)
      ) {
        t.transform(1, 0, 0, 1, s.offsetX || 0, s.offsetY || 0)
        const h = s.gradientTransform || s.patternTransform
        h && t.transform(...h)
      }
      t.fill(), t.restore()
    }
    if (i) {
      t.save()
      const { skipOffscreen: h } = this
      ;(this.skipOffscreen = n), n && t.transform(...r), i.render(t), (this.skipOffscreen = h), t.restore()
    }
  }
  _renderBackground(t) {
    this._renderBackgroundOrOverlay(t, 'background')
  }
  _renderOverlay(t) {
    this._renderBackgroundOrOverlay(t, 'overlay')
  }
  getCenter() {
    return { top: this.height / 2, left: this.width / 2 }
  }
  getCenterPoint() {
    return new _(this.width / 2, this.height / 2)
  }
  centerObjectH(t) {
    return this._centerObject(t, new _(this.getCenterPoint().x, t.getCenterPoint().y))
  }
  centerObjectV(t) {
    return this._centerObject(t, new _(t.getCenterPoint().x, this.getCenterPoint().y))
  }
  centerObject(t) {
    return this._centerObject(t, this.getCenterPoint())
  }
  viewportCenterObject(t) {
    return this._centerObject(t, this.getVpCenter())
  }
  viewportCenterObjectH(t) {
    return this._centerObject(t, new _(this.getVpCenter().x, t.getCenterPoint().y))
  }
  viewportCenterObjectV(t) {
    return this._centerObject(t, new _(t.getCenterPoint().x, this.getVpCenter().y))
  }
  getVpCenter() {
    return st(this.getCenterPoint(), pt(this.viewportTransform))
  }
  _centerObject(t, e) {
    t.setXY(e, k, k), t.setCoords(), this.renderOnAddRemove && this.requestRenderAll()
  }
  toDatalessJSON(t) {
    return this.toDatalessObject(t)
  }
  toObject(t) {
    return this._toObjectMethod('toObject', t)
  }
  toJSON() {
    return this.toObject()
  }
  toDatalessObject(t) {
    return this._toObjectMethod('toDatalessObject', t)
  }
  _toObjectMethod(t, e) {
    const s = this.clipPath,
      i = s && !s.excludeFromExport ? this._toObject(s, t, e) : null
    return p(
      p(
        p({ version: Is }, le(this, e)),
        {},
        { objects: this._objects.filter(r => !r.excludeFromExport).map(r => this._toObject(r, t, e)) },
        this.__serializeBgOverlay(t, e)
      ),
      i ? { clipPath: i } : null
    )
  }
  _toObject(t, e, s) {
    let i
    this.includeDefaultValues || ((i = t.includeDefaultValues), (t.includeDefaultValues = !1))
    const r = t[e](s)
    return this.includeDefaultValues || (t.includeDefaultValues = !!i), r
  }
  __serializeBgOverlay(t, e) {
    const s = {},
      i = this.backgroundImage,
      r = this.overlayImage,
      n = this.backgroundColor,
      a = this.overlayColor
    return (
      ct(n) ? n.excludeFromExport || (s.background = n.toObject(e)) : n && (s.background = n),
      ct(a) ? a.excludeFromExport || (s.overlay = a.toObject(e)) : a && (s.overlay = a),
      i && !i.excludeFromExport && (s.backgroundImage = this._toObject(i, t, e)),
      r && !r.excludeFromExport && (s.overlayImage = this._toObject(r, t, e)),
      s
    )
  }
  toSVG() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = arguments.length > 1 ? arguments[1] : void 0
    t.reviver = e
    const s = []
    return (
      this._setSVGPreamble(s, t),
      this._setSVGHeader(s, t),
      this.clipPath &&
        s.push(
          '<g clip-path="url(#'.concat(
            this.clipPath.clipPathId,
            `)" >
`
          )
        ),
      this._setSVGBgOverlayColor(s, 'background'),
      this._setSVGBgOverlayImage(s, 'backgroundImage', e),
      this._setSVGObjects(s, e),
      this.clipPath &&
        s.push(`</g>
`),
      this._setSVGBgOverlayColor(s, 'overlay'),
      this._setSVGBgOverlayImage(s, 'overlayImage', e),
      s.push('</svg>'),
      s.join('')
    )
  }
  _setSVGPreamble(t, e) {
    e.suppressPreamble ||
      t.push(
        '<?xml version="1.0" encoding="',
        e.encoding || 'UTF-8',
        `" standalone="no" ?>
`,
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
        `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`
      )
  }
  _setSVGHeader(t, e) {
    const s = e.width || ''.concat(this.width),
      i = e.height || ''.concat(this.height),
      r = E.NUM_FRACTION_DIGITS,
      n = e.viewBox
    let a
    if (n) a = 'viewBox="'.concat(n.x, ' ').concat(n.y, ' ').concat(n.width, ' ').concat(n.height, '" ')
    else if (this.svgViewportTransformation) {
      const h = this.viewportTransform
      a = 'viewBox="'
        .concat(B(-h[4] / h[0], r), ' ')
        .concat(B(-h[5] / h[3], r), ' ')
        .concat(B(this.width / h[0], r), ' ')
        .concat(B(this.height / h[3], r), '" ')
    } else a = 'viewBox="0 0 '.concat(this.width, ' ').concat(this.height, '" ')
    t.push(
      '<svg ',
      'xmlns="http://www.w3.org/2000/svg" ',
      'xmlns:xlink="http://www.w3.org/1999/xlink" ',
      'version="1.1" ',
      'width="',
      s,
      '" ',
      'height="',
      i,
      '" ',
      a,
      `xml:space="preserve">
`,
      '<desc>Created with Fabric.js ',
      Is,
      `</desc>
`,
      `<defs>
`,
      this.createSVGFontFacesMarkup(),
      this.createSVGRefElementsMarkup(),
      this.createSVGClipPathMarkup(e),
      `</defs>
`
    )
  }
  createSVGClipPathMarkup(t) {
    const e = this.clipPath
    return e
      ? ((e.clipPathId = 'CLIPPATH_'.concat(It())),
        '<clipPath id="'
          .concat(
            e.clipPathId,
            `" >
`
          )
          .concat(
            e.toClipPathSVG(t.reviver),
            `</clipPath>
`
          ))
      : ''
  }
  createSVGRefElementsMarkup() {
    return ['background', 'overlay']
      .map(t => {
        const e = this[''.concat(t, 'Color')]
        if (ct(e)) {
          const s = this[''.concat(t, 'Vpt')],
            i = this.viewportTransform,
            r = { isType: () => !1, width: this.width / (s ? i[0] : 1), height: this.height / (s ? i[3] : 1) }
          return e.toSVG(r, { additionalTransform: s ? Xe(i) : '' })
        }
      })
      .join('')
  }
  createSVGFontFacesMarkup() {
    const t = [],
      e = {},
      s = E.fontPaths
    this._objects.forEach(function r(n) {
      t.push(n), Fe(n) && n._objects.forEach(r)
    }),
      t.forEach(r => {
        if (!pr(r)) return
        const { styles: n, fontFamily: a } = r
        e[a] ||
          !s[a] ||
          ((e[a] = !0),
          n &&
            Object.values(n).forEach(h => {
              Object.values(h).forEach(l => {
                let { fontFamily: c = '' } = l
                !e[c] && s[c] && (e[c] = !0)
              })
            }))
      })
    const i = Object.keys(e)
      .map(r =>
        `		@font-face {
			font-family: '`
          .concat(
            r,
            `';
			src: url('`
          )
          .concat(
            s[r],
            `');
		}
`
          )
      )
      .join('')
    return i
      ? `	<style type="text/css"><![CDATA[
`.concat(
          i,
          `]]></style>
`
        )
      : ''
  }
  _setSVGObjects(t, e) {
    this.forEachObject(s => {
      s.excludeFromExport || this._setSVGObject(t, s, e)
    })
  }
  _setSVGObject(t, e, s) {
    t.push(e.toSVG(s))
  }
  _setSVGBgOverlayImage(t, e, s) {
    const i = this[e]
    i && !i.excludeFromExport && i.toSVG && t.push(i.toSVG(s))
  }
  _setSVGBgOverlayColor(t, e) {
    const s = this[''.concat(e, 'Color')]
    if (!!s)
      if (ct(s)) {
        const i = s.repeat || '',
          r = this.width,
          n = this.height,
          a = this[''.concat(e, 'Vpt')],
          h = a ? Xe(pt(this.viewportTransform)) : ''
        t.push(
          '<rect transform="'
            .concat(h, ' translate(')
            .concat(r / 2, ',')
            .concat(n / 2, ')" x="')
            .concat(s.offsetX - r / 2, '" y="')
            .concat(s.offsetY - n / 2, '" width="')
            .concat((i === 'repeat-y' || i === 'no-repeat') && Fi(s) ? s.source.width : r, '" height="')
            .concat((i === 'repeat-x' || i === 'no-repeat') && Fi(s) ? s.source.height : n, '" fill="url(#SVGID_')
            .concat(
              s.id,
              `)"></rect>
`
            )
        )
      } else
        t.push(
          '<rect x="0" y="0" width="100%" height="100%" ',
          'fill="',
          s,
          '"',
          `></rect>
`
        )
  }
  loadFromJSON(t, e) {
    let { signal: s } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    if (!t) return Promise.reject(new wt('`json` is undefined'))
    const i = typeof t == 'string' ? JSON.parse(t) : t,
      { objects: r = [], backgroundImage: n, background: a, overlayImage: h, overlay: l, clipPath: c } = i,
      u = this.renderOnAddRemove
    return (
      (this.renderOnAddRemove = !1),
      Promise.all([
        Se(r, { reviver: e, signal: s }),
        rs({ backgroundImage: n, backgroundColor: a, overlayImage: h, overlayColor: l, clipPath: c }, { signal: s }),
      ]).then(d => {
        let [f, m] = d
        return this.clear(), this.add(...f), this.set(i), this.set(m), (this.renderOnAddRemove = u), this
      })
    )
  }
  clone(t) {
    const e = this.toObject(t)
    return this.cloneWithoutData().loadFromJSON(e)
  }
  cloneWithoutData() {
    const t = G()
    return (t.width = this.width), (t.height = this.height), new this.constructor(t)
  }
  toDataURL() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const { format: e = 'png', quality: s = 1, multiplier: i = 1, enableRetinaScaling: r = !1 } = t,
      n = i * (r ? this.getRetinaScaling() : 1)
    return cr(this.toCanvasElement(n, t), e, s)
  }
  toCanvasElement() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1,
      {
        width: e,
        height: s,
        left: i,
        top: r,
        filter: n,
      } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const a = (e || this.width) * t,
      h = (s || this.height) * t,
      l = this.getZoom(),
      c = this.width,
      u = this.height,
      d = this.skipControlsDrawing,
      f = l * t,
      m = this.viewportTransform,
      y = (m[4] - (i || 0)) * t,
      v = (m[5] - (r || 0)) * t,
      C = [f, 0, 0, f, y, v],
      S = this.enableRetinaScaling,
      w = G(),
      T = n ? this._objects.filter(b => n(b)) : this._objects
    return (
      (w.width = a),
      (w.height = h),
      (this.enableRetinaScaling = !1),
      (this.viewportTransform = C),
      (this.width = a),
      (this.height = h),
      (this.skipControlsDrawing = !0),
      this.calcViewportBoundaries(),
      this.renderCanvas(w.getContext('2d'), T),
      (this.viewportTransform = m),
      (this.width = c),
      (this.height = u),
      this.calcViewportBoundaries(),
      (this.enableRetinaScaling = S),
      (this.skipControlsDrawing = d),
      w
    )
  }
  dispose() {
    return (
      !this.disposed && this.elements.cleanupDOM({ width: this.width, height: this.height }),
      Ye.cancelByCanvas(this),
      (this.disposed = !0),
      new Promise((t, e) => {
        const s = () => {
          this.destroy(), t(!0)
        }
        ;(s.kill = e),
          this.__cleanupTask && this.__cleanupTask.kill('aborted'),
          this.destroyed ? t(!1) : this.nextRenderHandle ? (this.__cleanupTask = s) : s()
      })
    )
  }
  destroy() {
    ;(this.destroyed = !0),
      this.cancelRequestedRender(),
      this.forEachObject(t => t.dispose()),
      (this._objects = []),
      this.backgroundImage && this.backgroundImage.dispose(),
      (this.backgroundImage = void 0),
      this.overlayImage && this.overlayImage.dispose(),
      (this.overlayImage = void 0),
      this.elements.dispose()
  }
  toString() {
    return '#<Canvas ('.concat(this.complexity(), '): { objects: ').concat(this._objects.length, ' }>')
  }
}
g(ke, 'ownDefaults', Nn)
const Un = ['touchstart', 'touchmove', 'touchend']
function Kn(o) {
  const t = o.changedTouches
  return t && t[0] ? t[0] : o
}
const qn = o => {
    const t = o.target,
      e = mr(t),
      s = Kn(o)
    return new _(s.clientX + e.left, s.clientY + e.top)
  },
  Ws = o => Un.includes(o.type) || o.pointerType === 'touch',
  Xs = o => {
    o.preventDefault(), o.stopPropagation()
  },
  Dt = o => {
    let t = 0,
      e = 0,
      s = 0,
      i = 0
    for (let r = 0, n = o.length; r < n; r++) {
      const { x: a, y: h } = o[r]
      ;(a > s || !r) && (s = a), (a < t || !r) && (t = a), (h > i || !r) && (i = h), (h < e || !r) && (e = h)
    }
    return { left: t, top: e, width: s - t, height: i - e }
  },
  $n = ['translateX', 'translateY', 'scaleX', 'scaleY'],
  Jn = (o, t) => ze(o, q(t, o.calcOwnMatrix())),
  ze = (o, t) => {
    const e = We(t),
      { translateX: s, translateY: i, scaleX: r, scaleY: n } = e,
      a = j(e, $n),
      h = new _(s, i)
    ;(o.flipX = !1),
      (o.flipY = !1),
      Object.assign(o, a),
      o.set({ scaleX: r, scaleY: n }),
      o.setPositionByOrigin(h, k, k)
  },
  Zn = o => {
    ;(o.scaleX = 1), (o.scaleY = 1), (o.skewX = 0), (o.skewY = 0), (o.flipX = !1), (o.flipY = !1), o.rotate(0)
  },
  Cr = o => ({
    scaleX: o.scaleX,
    scaleY: o.scaleY,
    skewX: o.skewX,
    skewY: o.skewY,
    angle: o.angle,
    left: o.left,
    flipX: o.flipX,
    flipY: o.flipY,
    top: o.top,
  }),
  oi = (o, t, e) => {
    const s = o / 2,
      i = t / 2,
      r = [new _(-s, -i), new _(s, -i), new _(-s, i), new _(s, i)].map(a => a.transform(e)),
      n = Dt(r)
    return new _(n.width, n.height)
  },
  ns = function () {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : et,
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : et
    return q(pt(t), o)
  },
  ie = function (o) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : et,
      e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : et
    return o.transform(ns(t, e))
  },
  Qn = function (o) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : et,
      e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : et
    return o.transform(ns(t, e), !0)
  },
  to = (o, t, e) => {
    const s = ns(t, e)
    return ze(o, q(s, o.calcOwnMatrix())), s
  },
  Sr = (o, t) => {
    var e
    const {
      transform: { target: s },
    } = t
    ;(e = s.canvas) === null || e === void 0 || e.fire('object:'.concat(o), p(p({}, t), {}, { target: s })),
      s.fire(o, t)
  },
  eo = { left: -0.5, top: -0.5, center: 0, bottom: 0.5, right: 0.5 },
  z = o => (typeof o == 'string' ? eo[o] : o - 0.5),
  He = 'not-allowed',
  so = (o, t, e, s) => {
    if (!t || !o) return 'drag'
    const i = s.controls[t]
    return i.getActionName(e, i, s)
  }
function wr(o) {
  return z(o.originX) === z(k) && z(o.originY) === z(k)
}
function ji(o) {
  return -z(o) + 0.5
}
const mt = (o, t) => o[t],
  xr = (o, t, e, s) => ({ e: o, transform: t, pointer: new _(e, s) })
function br(o, t) {
  const e = o.getTotalAngle(),
    s = e + Nt(Math.atan2(t.y, t.x)) + 360
  return Math.round((s % 360) / 45)
}
function io(o, t, e, s) {
  const i = o.getRelativeCenterPoint(),
    r = typeof e < 'u' && typeof s < 'u' ? o.translateToGivenOrigin(i, k, k, e, s) : new _(o.left, o.top)
  return (o.angle ? t.rotate(-X(o.angle), i) : t).subtract(r)
}
function ai(o, t, e, s, i) {
  var r
  let { target: n, corner: a } = o
  const h = n.controls[a],
    l = ((r = n.canvas) === null || r === void 0 ? void 0 : r.getZoom()) || 1,
    c = n.padding / l,
    u = io(n, new _(s, i), t, e)
  return (
    u.x >= c && (u.x -= c),
    u.x <= -c && (u.x += c),
    u.y >= c && (u.y -= c),
    u.y <= c && (u.y += c),
    (u.x -= h.offsetX),
    (u.y -= h.offsetY),
    u
  )
}
const ro = (o, t, e, s) => {
  const { target: i, offsetX: r, offsetY: n } = t,
    a = e - r,
    h = s - n,
    l = !mt(i, 'lockMovementX') && i.left !== a,
    c = !mt(i, 'lockMovementY') && i.top !== h
  return l && i.set(A, a), c && i.set(it, h), (l || c) && Sr(nr, xr(o, t, e, s)), l || c
}
class Tr {
  getSvgStyles(t) {
    const e = this.fillRule ? this.fillRule : 'nonzero',
      s = this.strokeWidth ? this.strokeWidth : '0',
      i = this.strokeDashArray ? this.strokeDashArray.join(' ') : rt,
      r = this.strokeDashOffset ? this.strokeDashOffset : '0',
      n = this.strokeLineCap ? this.strokeLineCap : 'butt',
      a = this.strokeLineJoin ? this.strokeLineJoin : 'miter',
      h = this.strokeMiterLimit ? this.strokeMiterLimit : '4',
      l = typeof this.opacity < 'u' ? this.opacity : '1',
      c = this.visible ? '' : ' visibility: hidden;',
      u = t ? '' : this.getSvgFilter(),
      d = we(H, this.fill)
    return [
      we(Q, this.stroke),
      'stroke-width: ',
      s,
      '; ',
      'stroke-dasharray: ',
      i,
      '; ',
      'stroke-linecap: ',
      n,
      '; ',
      'stroke-dashoffset: ',
      r,
      '; ',
      'stroke-linejoin: ',
      a,
      '; ',
      'stroke-miterlimit: ',
      h,
      '; ',
      d,
      'fill-rule: ',
      e,
      '; ',
      'opacity: ',
      l,
      ';',
      u,
      c,
    ].join('')
  }
  getSvgFilter() {
    return this.shadow ? 'filter: url(#SVGID_'.concat(this.shadow.id, ');') : ''
  }
  getSvgCommons() {
    return [
      this.id ? 'id="'.concat(this.id, '" ') : '',
      this.clipPath ? 'clip-path="url(#'.concat(this.clipPath.clipPathId, ')" ') : '',
    ].join('')
  }
  getSvgTransform(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    const s = t ? this.calcTransformMatrix() : this.calcOwnMatrix(),
      i = 'transform="'.concat(Xe(s))
    return ''.concat(i).concat(e, '" ')
  }
  _toSVG(t) {
    return ['']
  }
  toSVG(t) {
    return this._createBaseSVGMarkup(this._toSVG(t), { reviver: t })
  }
  toClipPathSVG(t) {
    return '	' + this._createBaseClipPathSVGMarkup(this._toSVG(t), { reviver: t })
  }
  _createBaseClipPathSVGMarkup(t) {
    let { reviver: e, additionalTransform: s = '' } =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const i = [this.getSvgTransform(!0, s), this.getSvgCommons()].join(''),
      r = t.indexOf('COMMON_PARTS')
    return (t[r] = i), e ? e(t.join('')) : t.join('')
  }
  _createBaseSVGMarkup(t) {
    let {
      noStyle: e,
      reviver: s,
      withShadow: i,
      additionalTransform: r,
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const n = e ? '' : 'style="'.concat(this.getSvgStyles(), '" '),
      a = i ? 'style="'.concat(this.getSvgFilter(), '" ') : '',
      h = this.clipPath,
      l = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : '',
      c = h && h.absolutePositioned,
      u = this.stroke,
      d = this.fill,
      f = this.shadow,
      m = [],
      y = t.indexOf('COMMON_PARTS')
    let v
    h &&
      ((h.clipPathId = 'CLIPPATH_'.concat(It())),
      (v = '<clipPath id="'
        .concat(
          h.clipPathId,
          `" >
`
        )
        .concat(
          h.toClipPathSVG(s),
          `</clipPath>
`
        ))),
      c &&
        m.push(
          '<g ',
          a,
          this.getSvgCommons(),
          ` >
`
        ),
      m.push(
        '<g ',
        this.getSvgTransform(!1),
        c ? '' : a + this.getSvgCommons(),
        ` >
`
      )
    const C = [n, l, e ? '' : this.addPaintOrder(), ' ', r ? 'transform="'.concat(r, '" ') : ''].join('')
    return (
      (t[y] = C),
      ct(d) && m.push(d.toSVG(this)),
      ct(u) && m.push(u.toSVG(this)),
      f && m.push(f.toSVG(this)),
      h && m.push(v),
      m.push(t.join('')),
      m.push(`</g>
`),
      c &&
        m.push(`</g>
`),
      s ? s(m.join('')) : m.join('')
    )
  }
  addPaintOrder() {
    return this.paintFirst !== H ? ' paint-order="'.concat(this.paintFirst, '" ') : ''
  }
}
function os(o) {
  return new RegExp('^(' + o.join('|') + ')\\b', 'i')
}
var Ri
const Ut = String.raw(
    Ri ||
      (Ri = Wt(['(?:[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?)'], ['(?:[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?)']))
  ),
  no = new RegExp(
    '(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(' +
      Ut +
      '(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|' +
      Ut +
      '))?\\s+(.*)'
  ),
  oo = ['path', 'circle', 'polygon', 'polyline', 'ellipse', 'rect', 'line', 'image', 'text'],
  ao = ['symbol', 'image', 'marker', 'pattern', 'view', 'svg'],
  ho = ['pattern', 'defs', 'symbol', 'metadata', 'clipPath', 'mask', 'desc'],
  lo = ['symbol', 'g', 'a', 'svg', 'clipPath', 'defs'],
  co = {
    cx: A,
    x: A,
    r: 'radius',
    cy: it,
    y: it,
    display: 'visible',
    visibility: 'visible',
    transform: 'transformMatrix',
    'fill-opacity': 'fillOpacity',
    'fill-rule': 'fillRule',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-style': 'fontStyle',
    'font-weight': 'fontWeight',
    'letter-spacing': 'charSpacing',
    'paint-order': 'paintFirst',
    'stroke-dasharray': 'strokeDashArray',
    'stroke-dashoffset': 'strokeDashOffset',
    'stroke-linecap': 'strokeLineCap',
    'stroke-linejoin': 'strokeLineJoin',
    'stroke-miterlimit': 'strokeMiterLimit',
    'stroke-opacity': 'strokeOpacity',
    'stroke-width': 'strokeWidth',
    'text-decoration': 'textDecoration',
    'text-anchor': 'textAnchor',
    opacity: 'opacity',
    'clip-path': 'clipPath',
    'clip-rule': 'clipRule',
    'vector-effect': 'strokeUniform',
    'image-rendering': 'imageSmoothing',
  },
  Es = 'font-size',
  Ps = 'clip-path'
os(oo)
os(ao)
const Bi = os(lo),
  uo = new _(1, 0),
  Or = new _(),
  Dr = (o, t) => o.rotate(t),
  zs = (o, t) => new _(t).subtract(o),
  Hs = o => o.distanceFrom(Or),
  Gs = (o, t) => Math.atan2(_e(o, t), go(o, t)),
  fo = o => Gs(uo, o),
  hi = o => (o.eq(Or) ? o : o.scalarDivide(Hs(o))),
  kr = function (o) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
    return hi(new _(-o.y, o.x).scalarMultiply(t ? 1 : -1))
  },
  _e = (o, t) => o.x * t.y - o.y * t.x,
  go = (o, t) => o.x * t.x + o.y * t.y,
  Ii = (o, t, e) => {
    if (o.eq(t) || o.eq(e)) return !0
    const s = _e(t, e),
      i = _e(t, o),
      r = _e(e, o)
    return s >= 0 ? i >= 0 && r <= 0 : !(i <= 0 && r >= 0)
  },
  Vi = '(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?',
  Yi = new RegExp('(?:\\s|^)' + Vi + Vi + '(' + Ut + '?(?:px)?)?(?:\\s?|$)(?:$|\\s)'),
  po = {
    color: 'rgb(0,0,0)',
    blur: 0,
    offsetX: 0,
    offsetY: 0,
    affectStroke: !1,
    includeDefaultValues: !0,
    nonScaling: !1,
  }
class xt {
  constructor(t) {
    const e = typeof t == 'string' ? xt.parseShadow(t) : t
    Object.assign(this, xt.ownDefaults, e), (this.id = It())
  }
  static parseShadow(t) {
    const e = t.trim(),
      [, s = 0, i = 0, r = 0] = (Yi.exec(e) || []).map(a => parseFloat(a) || 0)
    return { color: (e.replace(Yi, '') || 'rgb(0,0,0)').trim(), offsetX: s, offsetY: i, blur: r }
  }
  toString() {
    return [this.offsetX, this.offsetY, this.blur, this.color].join('px ')
  }
  toSVG(t) {
    const e = Dr(new _(this.offsetX, this.offsetY), X(-t.angle)),
      s = 20,
      i = new P(this.color)
    let r = 40,
      n = 40
    return (
      t.width &&
        t.height &&
        ((r = B((Math.abs(e.x) + this.blur) / t.width, E.NUM_FRACTION_DIGITS) * 100 + s),
        (n = B((Math.abs(e.y) + this.blur) / t.height, E.NUM_FRACTION_DIGITS) * 100 + s)),
      t.flipX && (e.x *= -1),
      t.flipY && (e.y *= -1),
      '<filter id="SVGID_'
        .concat(this.id, '" y="-')
        .concat(n, '%" height="')
        .concat(100 + 2 * n, '%" x="-')
        .concat(r, '%" width="')
        .concat(
          100 + 2 * r,
          `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="`
        )
        .concat(
          B(this.blur ? this.blur / 2 : 0, E.NUM_FRACTION_DIGITS),
          `"></feGaussianBlur>
	<feOffset dx="`
        )
        .concat(B(e.x, E.NUM_FRACTION_DIGITS), '" dy="')
        .concat(
          B(e.y, E.NUM_FRACTION_DIGITS),
          `" result="oBlur" ></feOffset>
	<feFlood flood-color="`
        )
        .concat(i.toRgb(), '" flood-opacity="')
        .concat(
          i.getAlpha(),
          `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`
        )
    )
  }
  toObject() {
    const t = {
        color: this.color,
        blur: this.blur,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        affectStroke: this.affectStroke,
        nonScaling: this.nonScaling,
        type: this.constructor.type,
      },
      e = xt.ownDefaults
    return this.includeDefaultValues ? t : ni(t, (s, i) => s !== e[i])
  }
  static async fromObject(t) {
    return new this(t)
  }
}
g(xt, 'ownDefaults', po)
g(xt, 'type', 'shadow')
x.setClass(xt, 'shadow')
const ne = (o, t, e) => Math.max(o, Math.min(t, e)),
  mo = [
    it,
    A,
    nt,
    ut,
    'flipX',
    'flipY',
    'originX',
    'originY',
    'angle',
    'opacity',
    'globalCompositeOperation',
    'shadow',
    'visible',
    ae,
    he,
  ],
  At = [
    H,
    Q,
    'strokeWidth',
    'strokeDashArray',
    'width',
    'height',
    'paintFirst',
    'strokeUniform',
    'strokeLineCap',
    'strokeDashOffset',
    'strokeLineJoin',
    'strokeMiterLimit',
    'backgroundColor',
    'clipPath',
  ],
  _o = {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    angle: 0,
    flipX: !1,
    flipY: !1,
    scaleX: 1,
    scaleY: 1,
    minScaleLimit: 0,
    skewX: 0,
    skewY: 0,
    originX: A,
    originY: it,
    strokeWidth: 1,
    strokeUniform: !1,
    padding: 0,
    opacity: 1,
    paintFirst: H,
    fill: 'rgb(0,0,0)',
    fillRule: 'nonzero',
    stroke: null,
    strokeDashArray: null,
    strokeDashOffset: 0,
    strokeLineCap: 'butt',
    strokeLineJoin: 'miter',
    strokeMiterLimit: 4,
    globalCompositeOperation: 'source-over',
    backgroundColor: '',
    shadow: null,
    visible: !0,
    includeDefaultValues: !0,
    excludeFromExport: !1,
    objectCaching: !0,
    clipPath: void 0,
    inverted: !1,
    absolutePositioned: !1,
    centeredRotation: !0,
    centeredScaling: !1,
    dirty: !0,
  },
  yo = {
    noScaleCache: !0,
    lockMovementX: !1,
    lockMovementY: !1,
    lockRotation: !1,
    lockScalingX: !1,
    lockScalingY: !1,
    lockSkewingX: !1,
    lockSkewingY: !1,
    lockScalingFlip: !1,
    cornerSize: 13,
    touchCornerSize: 24,
    transparentCorners: !0,
    cornerColor: 'rgb(178,204,255)',
    cornerStrokeColor: '',
    cornerStyle: 'rect',
    cornerDashArray: null,
    hasControls: !0,
    borderColor: 'rgb(178,204,255)',
    borderDashArray: null,
    borderOpacityWhenMoving: 0.4,
    borderScaleFactor: 1,
    hasBorders: !0,
    selectionBackgroundColor: '',
    selectable: !0,
    evented: !0,
    perPixelTargetFind: !1,
    activeOn: 'down',
    hoverCursor: null,
    moveCursor: null,
  },
  vo = (o, t, e, s) => -e * Math.cos((o / s) * Te) + e + t,
  Co = () => !1
class li {
  constructor(t) {
    let {
      startValue: e,
      byValue: s,
      duration: i = 500,
      delay: r = 0,
      easing: n = vo,
      onStart: a = Ae,
      onChange: h = Ae,
      onComplete: l = Ae,
      abort: c = Co,
      target: u,
    } = t
    g(this, '_state', 'pending'),
      g(this, 'durationProgress', 0),
      g(this, 'valueProgress', 0),
      (this.tick = this.tick.bind(this)),
      (this.duration = i),
      (this.delay = r),
      (this.easing = n),
      (this._onStart = a),
      (this._onChange = h),
      (this._onComplete = l),
      (this._abort = c),
      (this.target = u),
      (this.startValue = e),
      (this.byValue = s),
      (this.value = this.startValue),
      (this.endValue = Object.freeze(this.calculate(this.duration).value))
  }
  get state() {
    return this._state
  }
  isDone() {
    return this._state === 'aborted' || this._state === 'completed'
  }
  start() {
    const t = e => {
      this._state === 'pending' &&
        ((this.startTime = e || +new Date()), (this._state = 'running'), this._onStart(), this.tick(this.startTime))
    }
    this.register(), this.delay > 0 ? setTimeout(() => Le(t), this.delay) : Le(t)
  }
  tick(t) {
    const e = (t || +new Date()) - this.startTime,
      s = Math.min(e, this.duration)
    this.durationProgress = s / this.duration
    const { value: i, valueProgress: r } = this.calculate(s)
    ;(this.value = Object.freeze(i)),
      (this.valueProgress = r),
      this._state !== 'aborted' &&
        (this._abort(this.value, this.valueProgress, this.durationProgress)
          ? ((this._state = 'aborted'), this.unregister())
          : e >= this.duration
          ? ((this.durationProgress = this.valueProgress = 1),
            this._onChange(this.endValue, this.valueProgress, this.durationProgress),
            (this._state = 'completed'),
            this._onComplete(this.endValue, this.valueProgress, this.durationProgress),
            this.unregister())
          : (this._onChange(this.value, this.valueProgress, this.durationProgress), Le(this.tick)))
  }
  register() {
    Ye.push(this)
  }
  unregister() {
    Ye.remove(this)
  }
  abort() {
    ;(this._state = 'aborted'), this.unregister()
  }
}
const So = ['startValue', 'endValue']
class wo extends li {
  constructor(t) {
    let { startValue: e = 0, endValue: s = 100 } = t,
      i = j(t, So)
    super(p(p({}, i), {}, { startValue: e, byValue: s - e }))
  }
  calculate(t) {
    const e = this.easing(t, this.startValue, this.byValue, this.duration)
    return { value: e, valueProgress: Math.abs((e - this.startValue) / this.byValue) }
  }
}
const xo = ['startValue', 'endValue']
class bo extends li {
  constructor(t) {
    let { startValue: e = [0], endValue: s = [100] } = t,
      i = j(t, xo)
    super(p(p({}, i), {}, { startValue: e, byValue: s.map((r, n) => r - e[n]) }))
  }
  calculate(t) {
    const e = this.startValue.map((s, i) => this.easing(t, s, this.byValue[i], this.duration, i))
    return { value: e, valueProgress: Math.abs((e[0] - this.startValue[0]) / this.byValue[0]) }
  }
}
const To = ['startValue', 'endValue', 'easing', 'onChange', 'onComplete', 'abort'],
  Oo = (o, t, e, s) => {
    const i = 1 - Math.cos((o / s) * Te)
    return t + e * i
  },
  As = o => o && ((t, e, s) => o(new P(t).toRgba(), e, s))
class Do extends li {
  constructor(t) {
    let { startValue: e, endValue: s, easing: i = Oo, onChange: r, onComplete: n, abort: a } = t,
      h = j(t, To)
    const l = new P(e).getSource(),
      c = new P(s).getSource()
    super(
      p(
        p({}, h),
        {},
        {
          startValue: l,
          byValue: c.map((u, d) => u - l[d]),
          easing: i,
          onChange: As(r),
          onComplete: As(n),
          abort: As(a),
        }
      )
    )
  }
  calculate(t) {
    const [e, s, i, r] = this.startValue.map((a, h) => this.easing(t, a, this.byValue[h], this.duration, h)),
      n = [...[e, s, i].map(Math.round), ne(0, r, 1)]
    return {
      value: n,
      valueProgress:
        n
          .map((a, h) => (this.byValue[h] !== 0 ? Math.abs((a - this.startValue[h]) / this.byValue[h]) : 0))
          .find(a => a !== 0) || 0,
    }
  }
}
const ko = o => Array.isArray(o.startValue) || Array.isArray(o.endValue)
function Mr(o) {
  const t = ko(o) ? new bo(o) : new wo(o)
  return t.start(), t
}
function Mo(o) {
  const t = new Do(o)
  return t.start(), t
}
class R {
  constructor(t) {
    ;(this.status = t), (this.points = [])
  }
  includes(t) {
    return this.points.some(e => e.eq(t))
  }
  append() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s]
    return (this.points = this.points.concat(e.filter(i => !this.includes(i)))), this
  }
  static isPointContained(t, e, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
    if (e.eq(s)) return t.eq(e)
    if (e.x === s.x) return t.x === e.x && (i || (t.y >= Math.min(e.y, s.y) && t.y <= Math.max(e.y, s.y)))
    if (e.y === s.y) return t.y === e.y && (i || (t.x >= Math.min(e.x, s.x) && t.x <= Math.max(e.x, s.x)))
    {
      const r = zs(e, s),
        a = zs(e, t).divide(r)
      return i ? Math.abs(a.x) === Math.abs(a.y) : a.x === a.y && a.x >= 0 && a.x <= 1
    }
  }
  static isPointInPolygon(t, e) {
    const s = new _(t).setX(Math.min(t.x - 1, ...e.map(r => r.x)))
    let i = 0
    for (let r = 0; r < e.length; r++) {
      const n = this.intersectSegmentSegment(e[r], e[(r + 1) % e.length], t, s)
      if (n.includes(t)) return !0
      i += Number(n.status === 'Intersection')
    }
    return i % 2 === 1
  }
  static intersectLineLine(t, e, s, i) {
    let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0
    const a = e.x - t.x,
      h = e.y - t.y,
      l = i.x - s.x,
      c = i.y - s.y,
      u = t.x - s.x,
      d = t.y - s.y,
      f = l * d - c * u,
      m = a * d - h * u,
      y = c * a - l * h
    if (y !== 0) {
      const v = f / y,
        C = m / y
      return (r || (0 <= v && v <= 1)) && (n || (0 <= C && C <= 1))
        ? new R('Intersection').append(new _(t.x + v * a, t.y + v * h))
        : new R()
    } else if (f === 0 || m === 0) {
      const v =
        r ||
        n ||
        R.isPointContained(t, s, i) ||
        R.isPointContained(e, s, i) ||
        R.isPointContained(s, t, e) ||
        R.isPointContained(i, t, e)
      return new R(v ? 'Coincident' : void 0)
    } else return new R('Parallel')
  }
  static intersectSegmentLine(t, e, s, i) {
    return R.intersectLineLine(t, e, s, i, !1, !0)
  }
  static intersectSegmentSegment(t, e, s, i) {
    return R.intersectLineLine(t, e, s, i, !1, !1)
  }
  static intersectLinePolygon(t, e, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0
    const r = new R(),
      n = s.length
    for (let a = 0, h, l, c; a < n; a++) {
      if (((h = s[a]), (l = s[(a + 1) % n]), (c = R.intersectLineLine(t, e, h, l, i, !1)), c.status === 'Coincident'))
        return c
      r.append(...c.points)
    }
    return r.points.length > 0 && (r.status = 'Intersection'), r
  }
  static intersectSegmentPolygon(t, e, s) {
    return R.intersectLinePolygon(t, e, s, !1)
  }
  static intersectPolygonPolygon(t, e) {
    const s = new R(),
      i = t.length,
      r = []
    for (let n = 0; n < i; n++) {
      const a = t[n],
        h = t[(n + 1) % i],
        l = R.intersectSegmentPolygon(a, h, e)
      l.status === 'Coincident' ? (r.push(l), s.append(a, h)) : s.append(...l.points)
    }
    return r.length > 0 && r.length === t.length
      ? new R('Coincident')
      : (s.points.length > 0 && (s.status = 'Intersection'), s)
  }
  static intersectPolygonRectangle(t, e, s) {
    const i = e.min(s),
      r = e.max(s),
      n = new _(r.x, i.y),
      a = new _(i.x, r.y)
    return R.intersectPolygonPolygon(t, [i, n, r, a])
  }
}
class Eo extends lr {
  getX() {
    return this.getXY().x
  }
  setX(t) {
    this.setXY(this.getXY().setX(t))
  }
  getY() {
    return this.getXY().y
  }
  setY(t) {
    this.setXY(this.getXY().setY(t))
  }
  getRelativeX() {
    return this.left
  }
  setRelativeX(t) {
    this.left = t
  }
  getRelativeY() {
    return this.top
  }
  setRelativeY(t) {
    this.top = t
  }
  getXY() {
    const t = this.getRelativeXY()
    return this.group ? st(t, this.group.calcTransformMatrix()) : t
  }
  setXY(t, e, s) {
    this.group && (t = st(t, pt(this.group.calcTransformMatrix()))), this.setRelativeXY(t, e, s)
  }
  getRelativeXY() {
    return new _(this.left, this.top)
  }
  setRelativeXY(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.originX,
      s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.originY
    this.setPositionByOrigin(t, e, s)
  }
  isStrokeAccountedForInDimensions() {
    return !1
  }
  getCoords() {
    const { tl: t, tr: e, br: s, bl: i } = this.aCoords || (this.aCoords = this.calcACoords()),
      r = [t, e, s, i]
    if (this.group) {
      const n = this.group.calcTransformMatrix()
      return r.map(a => st(a, n))
    }
    return r
  }
  intersectsWithRect(t, e) {
    return R.intersectPolygonRectangle(this.getCoords(), t, e).status === 'Intersection'
  }
  intersectsWithObject(t) {
    const e = R.intersectPolygonPolygon(this.getCoords(), t.getCoords())
    return (
      e.status === 'Intersection' ||
      e.status === 'Coincident' ||
      t.isContainedWithinObject(this) ||
      this.isContainedWithinObject(t)
    )
  }
  isContainedWithinObject(t) {
    return this.getCoords().every(s => t.containsPoint(s))
  }
  isContainedWithinRect(t, e) {
    const { left: s, top: i, width: r, height: n } = this.getBoundingRect()
    return s >= t.x && s + r <= e.x && i >= t.y && i + n <= e.y
  }
  isOverlapping(t) {
    return this.intersectsWithObject(t) || this.isContainedWithinObject(t) || t.isContainedWithinObject(this)
  }
  containsPoint(t) {
    return R.isPointInPolygon(t, this.getCoords())
  }
  isOnScreen() {
    if (!this.canvas) return !1
    const { tl: t, br: e } = this.canvas.vptCoords
    return this.getCoords().some(i => i.x <= e.x && i.x >= t.x && i.y <= e.y && i.y >= t.y) ||
      this.intersectsWithRect(t, e)
      ? !0
      : this.containsPoint(t.midPointFrom(e))
  }
  isPartiallyOnScreen() {
    if (!this.canvas) return !1
    const { tl: t, br: e } = this.canvas.vptCoords
    return this.intersectsWithRect(t, e)
      ? !0
      : this.getCoords().every(i => (i.x >= e.x || i.x <= t.x) && (i.y >= e.y || i.y <= t.y)) &&
          this.containsPoint(t.midPointFrom(e))
  }
  getBoundingRect() {
    return Dt(this.getCoords())
  }
  getScaledWidth() {
    return this._getTransformedDimensions().x
  }
  getScaledHeight() {
    return this._getTransformedDimensions().y
  }
  scale(t) {
    this._set(nt, t), this._set(ut, t), this.setCoords()
  }
  scaleToWidth(t) {
    const e = this.getBoundingRect().width / this.getScaledWidth()
    return this.scale(t / this.width / e)
  }
  scaleToHeight(t) {
    const e = this.getBoundingRect().height / this.getScaledHeight()
    return this.scale(t / this.height / e)
  }
  getCanvasRetinaScaling() {
    var t
    return ((t = this.canvas) === null || t === void 0 ? void 0 : t.getRetinaScaling()) || 1
  }
  getTotalAngle() {
    return this.group ? Nt(ur(this.calcTransformMatrix())) : this.angle
  }
  getViewportTransform() {
    var t
    return ((t = this.canvas) === null || t === void 0 ? void 0 : t.viewportTransform) || et.concat()
  }
  calcACoords() {
    const t = De({ angle: this.angle }),
      { x: e, y: s } = this.getRelativeCenterPoint(),
      i = Oe(e, s),
      r = q(i, t),
      n = this._getTransformedDimensions(),
      a = n.x / 2,
      h = n.y / 2
    return {
      tl: st({ x: -a, y: -h }, r),
      tr: st({ x: a, y: -h }, r),
      bl: st({ x: -a, y: h }, r),
      br: st({ x: a, y: h }, r),
    }
  }
  setCoords() {
    this.aCoords = this.calcACoords()
  }
  transformMatrixKey() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
      e = []
    return (
      !t && this.group && (e = this.group.transformMatrixKey(t)),
      e.push(
        this.top,
        this.left,
        this.width,
        this.height,
        this.scaleX,
        this.scaleY,
        this.angle,
        this.strokeWidth,
        this.skewX,
        this.skewY,
        +this.flipX,
        +this.flipY,
        z(this.originX),
        z(this.originY)
      ),
      e
    )
  }
  calcTransformMatrix() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
      e = this.calcOwnMatrix()
    if (t || !this.group) return e
    const s = this.transformMatrixKey(t),
      i = this.matrixCache
    return i && i.key.every((r, n) => r === s[n])
      ? i.value
      : (this.group && (e = q(this.group.calcTransformMatrix(!1), e)), (this.matrixCache = { key: s, value: e }), e)
  }
  calcOwnMatrix() {
    const t = this.transformMatrixKey(!0),
      e = this.ownMatrixCache
    if (e && e.key === t) return e.value
    const s = this.getRelativeCenterPoint(),
      i = {
        angle: this.angle,
        translateX: s.x,
        translateY: s.y,
        scaleX: this.scaleX,
        scaleY: this.scaleY,
        skewX: this.skewX,
        skewY: this.skewY,
        flipX: this.flipX,
        flipY: this.flipY,
      },
      r = Bn(i)
    return (this.ownMatrixCache = { key: t, value: r }), r
  }
  _getNonTransformedDimensions() {
    return new _(this.width, this.height).scalarAdd(this.strokeWidth)
  }
  _calculateCurrentDimensions(t) {
    return this._getTransformedDimensions(t)
      .transform(this.getViewportTransform(), !0)
      .scalarAdd(2 * this.padding)
  }
  _getTransformedDimensions() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const e = p(
        {
          scaleX: this.scaleX,
          scaleY: this.scaleY,
          skewX: this.skewX,
          skewY: this.skewY,
          width: this.width,
          height: this.height,
          strokeWidth: this.strokeWidth,
        },
        t
      ),
      s = e.strokeWidth
    let i = s,
      r = 0
    this.strokeUniform && ((i = 0), (r = s))
    const n = e.width + i,
      a = e.height + i,
      h = e.skewX === 0 && e.skewY === 0
    let l
    return h ? (l = new _(n * e.scaleX, a * e.scaleY)) : (l = oi(n, a, is(e))), l.scalarAdd(r)
  }
  translateToGivenOrigin(t, e, s, i, r) {
    let n = t.x,
      a = t.y
    const h = z(i) - z(e),
      l = z(r) - z(s)
    if (h || l) {
      const c = this._getTransformedDimensions()
      ;(n += h * c.x), (a += l * c.y)
    }
    return new _(n, a)
  }
  translateToCenterPoint(t, e, s) {
    if (e === k && s === k) return t
    const i = this.translateToGivenOrigin(t, e, s, k, k)
    return this.angle ? i.rotate(X(this.angle), t) : i
  }
  translateToOriginPoint(t, e, s) {
    const i = this.translateToGivenOrigin(t, k, k, e, s)
    return this.angle ? i.rotate(X(this.angle), t) : i
  }
  getCenterPoint() {
    const t = this.getRelativeCenterPoint()
    return this.group ? st(t, this.group.calcTransformMatrix()) : t
  }
  getRelativeCenterPoint() {
    return this.translateToCenterPoint(new _(this.left, this.top), this.originX, this.originY)
  }
  getPointByOrigin(t, e) {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), t, e)
  }
  setPositionByOrigin(t, e, s) {
    const i = this.translateToCenterPoint(t, e, s),
      r = this.translateToOriginPoint(i, this.originX, this.originY)
    this.set({ left: r.x, top: r.y })
  }
  _getLeftTopCoords() {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), A, it)
  }
}
const Po = ['type'],
  Ao = ['extraParam']
let Ft = class Re extends Eo {
  static getDefaults() {
    return Re.ownDefaults
  }
  get type() {
    const t = this.constructor.type
    return t === 'FabricObject' ? 'object' : t.toLowerCase()
  }
  set type(t) {
    Bt('warn', 'Setting type has no effect', t)
  }
  constructor(t) {
    super(), g(this, '_cacheContext', null), Object.assign(this, Re.ownDefaults), this.setOptions(t)
  }
  _createCacheCanvas() {
    ;(this._cacheCanvas = G()),
      (this._cacheContext = this._cacheCanvas.getContext('2d')),
      this._updateCacheCanvas(),
      (this.dirty = !0)
  }
  _limitCacheSize(t) {
    const e = t.width,
      s = t.height,
      i = E.maxCacheSideLimit,
      r = E.minCacheSideLimit
    if (e <= i && s <= i && e * s <= E.perfLimitSizeTotal) return e < r && (t.width = r), s < r && (t.height = r), t
    const n = e / s,
      [a, h] = me.limitDimsByArea(n),
      l = ne(r, a, i),
      c = ne(r, h, i)
    return (
      e > l && ((t.zoomX /= e / l), (t.width = l), (t.capped = !0)),
      s > c && ((t.zoomY /= s / c), (t.height = c), (t.capped = !0)),
      t
    )
  }
  _getCacheCanvasDimensions() {
    const t = this.getTotalObjectScaling(),
      e = this._getTransformedDimensions({ skewX: 0, skewY: 0 }),
      s = (e.x * t.x) / this.scaleX,
      i = (e.y * t.y) / this.scaleY
    return { width: s + Di, height: i + Di, zoomX: t.x, zoomY: t.y, x: s, y: i }
  }
  _updateCacheCanvas() {
    const t = this._cacheCanvas,
      e = this._cacheContext,
      s = this._limitCacheSize(this._getCacheCanvasDimensions()),
      i = E.minCacheSideLimit,
      r = s.width,
      n = s.height,
      a = s.zoomX,
      h = s.zoomY,
      l = r !== t.width || n !== t.height,
      c = this.zoomX !== a || this.zoomY !== h
    if (!t || !e) return !1
    let u,
      d,
      f = l || c,
      m = 0,
      y = 0,
      v = !1
    if (l) {
      const C = this._cacheCanvas.width,
        S = this._cacheCanvas.height,
        w = r > C || n > S,
        T = (r < C * 0.9 || n < S * 0.9) && C > i && S > i
      ;(v = w || T), w && !s.capped && (r > i || n > i) && ((m = r * 0.1), (y = n * 0.1))
    }
    return (
      pr(this) &&
        this.path &&
        ((f = !0), (v = !0), (m += this.getHeightOfLine(0) * this.zoomX), (y += this.getHeightOfLine(0) * this.zoomY)),
      f
        ? (v
            ? ((t.width = Math.ceil(r + m)), (t.height = Math.ceil(n + y)))
            : (e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t.width, t.height)),
          (u = s.x / 2),
          (d = s.y / 2),
          (this.cacheTranslationX = Math.round(t.width / 2 - u) + u),
          (this.cacheTranslationY = Math.round(t.height / 2 - d) + d),
          e.translate(this.cacheTranslationX, this.cacheTranslationY),
          e.scale(a, h),
          (this.zoomX = a),
          (this.zoomY = h),
          !0)
        : !1
    )
  }
  setOptions() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    this._setOptions(t)
  }
  transform(t) {
    const e = (this.group && !this.group._transformDone) || (this.group && this.canvas && t === this.canvas.contextTop),
      s = this.calcTransformMatrix(!e)
    t.transform(s[0], s[1], s[2], s[3], s[4], s[5])
  }
  getObjectScaling() {
    if (!this.group) return new _(Math.abs(this.scaleX), Math.abs(this.scaleY))
    const t = We(this.calcTransformMatrix())
    return new _(Math.abs(t.scaleX), Math.abs(t.scaleY))
  }
  getTotalObjectScaling() {
    const t = this.getObjectScaling()
    if (this.canvas) {
      const e = this.canvas.getZoom(),
        s = this.getCanvasRetinaScaling()
      return t.scalarMultiply(e * s)
    }
    return t
  }
  getObjectOpacity() {
    let t = this.opacity
    return this.group && (t *= this.group.getObjectOpacity()), t
  }
  _constrainScale(t) {
    return Math.abs(t) < this.minScaleLimit ? (t < 0 ? -this.minScaleLimit : this.minScaleLimit) : t === 0 ? 1e-4 : t
  }
  _set(t, e) {
    ;(t === nt || t === ut) && (e = this._constrainScale(e)),
      t === nt && e < 0
        ? ((this.flipX = !this.flipX), (e *= -1))
        : t === 'scaleY' && e < 0
        ? ((this.flipY = !this.flipY), (e *= -1))
        : t === 'shadow' && e && !(e instanceof xt) && (e = new xt(e))
    const s = this[t] !== e
    return (
      (this[t] = e),
      s && this.constructor.cacheProperties.includes(t) && (this.dirty = !0),
      this.parent &&
        (this.dirty || (s && this.constructor.stateProperties.includes(t))) &&
        this.parent._set('dirty', !0),
      this
    )
  }
  isNotVisible() {
    return this.opacity === 0 || (!this.width && !this.height && this.strokeWidth === 0) || !this.visible
  }
  render(t) {
    this.isNotVisible() ||
      (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen()) ||
      (t.save(),
      this._setupCompositeOperation(t),
      this.drawSelectionBackground(t),
      this.transform(t),
      this._setOpacity(t),
      this._setShadow(t),
      this.shouldCache()
        ? (this.renderCache(), this.drawCacheOnCanvas(t))
        : (this._removeCacheCanvas(), this.drawObject(t), (this.dirty = !1)),
      t.restore())
  }
  drawSelectionBackground(t) {}
  renderCache(t) {
    ;(t = t || {}),
      (!this._cacheCanvas || !this._cacheContext) && this._createCacheCanvas(),
      this.isCacheDirty() &&
        this._cacheContext &&
        (this.drawObject(this._cacheContext, t.forClipping), (this.dirty = !1))
  }
  _removeCacheCanvas() {
    ;(this._cacheCanvas = void 0), (this._cacheContext = null)
  }
  hasStroke() {
    return this.stroke && this.stroke !== 'transparent' && this.strokeWidth !== 0
  }
  hasFill() {
    return this.fill && this.fill !== 'transparent'
  }
  needsItsOwnCache() {
    return !!((this.paintFirst === Q && this.hasFill() && this.hasStroke() && !!this.shadow) || this.clipPath)
  }
  shouldCache() {
    return (
      (this.ownCaching =
        this.needsItsOwnCache() || (this.objectCaching && (!this.parent || !this.parent.isOnACache()))),
      this.ownCaching
    )
  }
  willDrawShadow() {
    return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0)
  }
  drawClipPathOnCache(t, e) {
    if (
      (t.save(),
      e.inverted ? (t.globalCompositeOperation = 'destination-out') : (t.globalCompositeOperation = 'destination-in'),
      e.absolutePositioned)
    ) {
      const s = pt(this.calcTransformMatrix())
      t.transform(s[0], s[1], s[2], s[3], s[4], s[5])
    }
    e.transform(t),
      t.scale(1 / e.zoomX, 1 / e.zoomY),
      t.drawImage(e._cacheCanvas, -e.cacheTranslationX, -e.cacheTranslationY),
      t.restore()
  }
  drawObject(t, e) {
    const s = this.fill,
      i = this.stroke
    e ? ((this.fill = 'black'), (this.stroke = ''), this._setClippingProperties(t)) : this._renderBackground(t),
      this._render(t),
      this._drawClipPath(t, this.clipPath),
      (this.fill = s),
      (this.stroke = i)
  }
  _drawClipPath(t, e) {
    !e ||
      (e._set('canvas', this.canvas),
      e.shouldCache(),
      (e._transformDone = !0),
      e.renderCache({ forClipping: !0 }),
      this.drawClipPathOnCache(t, e))
  }
  drawCacheOnCanvas(t) {
    t.scale(1 / this.zoomX, 1 / this.zoomY),
      t.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY)
  }
  isCacheDirty() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
    if (this.isNotVisible()) return !1
    const e = this._cacheCanvas,
      s = this._cacheContext
    return e && s && !t && this._updateCacheCanvas()
      ? !0
      : this.dirty || (this.clipPath && this.clipPath.absolutePositioned)
      ? (e &&
          s &&
          !t &&
          (s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, e.width, e.height), s.restore()),
        !0)
      : !1
  }
  _renderBackground(t) {
    if (!this.backgroundColor) return
    const e = this._getNonTransformedDimensions()
    ;(t.fillStyle = this.backgroundColor), t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y), this._removeShadow(t)
  }
  _setOpacity(t) {
    this.group && !this.group._transformDone
      ? (t.globalAlpha = this.getObjectOpacity())
      : (t.globalAlpha *= this.opacity)
  }
  _setStrokeStyles(t, e) {
    const s = e.stroke
    s &&
      ((t.lineWidth = e.strokeWidth),
      (t.lineCap = e.strokeLineCap),
      (t.lineDashOffset = e.strokeDashOffset),
      (t.lineJoin = e.strokeLineJoin),
      (t.miterLimit = e.strokeMiterLimit),
      ct(s)
        ? s.gradientUnits === 'percentage' || s.gradientTransform || s.patternTransform
          ? this._applyPatternForTransformedGradient(t, s)
          : ((t.strokeStyle = s.toLive(t)), this._applyPatternGradientTransform(t, s))
        : (t.strokeStyle = e.stroke))
  }
  _setFillStyles(t, e) {
    let { fill: s } = e
    s && (ct(s) ? ((t.fillStyle = s.toLive(t)), this._applyPatternGradientTransform(t, s)) : (t.fillStyle = s))
  }
  _setClippingProperties(t) {
    ;(t.globalAlpha = 1), (t.strokeStyle = 'transparent'), (t.fillStyle = '#000000')
  }
  _setLineDash(t, e) {
    !e || e.length === 0 || (1 & e.length && e.push(...e), t.setLineDash(e))
  }
  _setShadow(t) {
    if (!this.shadow) return
    const e = this.shadow,
      s = this.canvas,
      i = this.getCanvasRetinaScaling(),
      [r, , , n] = (s == null ? void 0 : s.viewportTransform) || et,
      a = r * i,
      h = n * i,
      l = e.nonScaling ? new _(1, 1) : this.getObjectScaling()
    ;(t.shadowColor = e.color),
      (t.shadowBlur = (e.blur * E.browserShadowBlurConstant * (a + h) * (l.x + l.y)) / 4),
      (t.shadowOffsetX = e.offsetX * a * l.x),
      (t.shadowOffsetY = e.offsetY * h * l.y)
  }
  _removeShadow(t) {
    !this.shadow || ((t.shadowColor = ''), (t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0))
  }
  _applyPatternGradientTransform(t, e) {
    if (!ct(e)) return { offsetX: 0, offsetY: 0 }
    const s = e.gradientTransform || e.patternTransform,
      i = -this.width / 2 + e.offsetX || 0,
      r = -this.height / 2 + e.offsetY || 0
    return (
      e.gradientUnits === 'percentage'
        ? t.transform(this.width, 0, 0, this.height, i, r)
        : t.transform(1, 0, 0, 1, i, r),
      s && t.transform(s[0], s[1], s[2], s[3], s[4], s[5]),
      { offsetX: i, offsetY: r }
    )
  }
  _renderPaintInOrder(t) {
    this.paintFirst === Q ? (this._renderStroke(t), this._renderFill(t)) : (this._renderFill(t), this._renderStroke(t))
  }
  _render(t) {}
  _renderFill(t) {
    !this.fill ||
      (t.save(), this._setFillStyles(t, this), this.fillRule === 'evenodd' ? t.fill('evenodd') : t.fill(), t.restore())
  }
  _renderStroke(t) {
    if (!(!this.stroke || this.strokeWidth === 0)) {
      if ((this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this.strokeUniform)) {
        const e = this.getObjectScaling()
        t.scale(1 / e.x, 1 / e.y)
      }
      this._setLineDash(t, this.strokeDashArray), this._setStrokeStyles(t, this), t.stroke(), t.restore()
    }
  }
  _applyPatternForTransformedGradient(t, e) {
    var s
    const i = this._limitCacheSize(this._getCacheCanvasDimensions()),
      r = G(),
      n = this.getCanvasRetinaScaling(),
      a = i.x / this.scaleX / n,
      h = i.y / this.scaleY / n
    ;(r.width = Math.ceil(a)), (r.height = Math.ceil(h))
    const l = r.getContext('2d')
    !l ||
      (l.beginPath(),
      l.moveTo(0, 0),
      l.lineTo(a, 0),
      l.lineTo(a, h),
      l.lineTo(0, h),
      l.closePath(),
      l.translate(a / 2, h / 2),
      l.scale(i.zoomX / this.scaleX / n, i.zoomY / this.scaleY / n),
      this._applyPatternGradientTransform(l, e),
      (l.fillStyle = e.toLive(t)),
      l.fill(),
      t.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2),
      t.scale((n * this.scaleX) / i.zoomX, (n * this.scaleY) / i.zoomY),
      (t.strokeStyle = (s = l.createPattern(r, 'no-repeat')) !== null && s !== void 0 ? s : ''))
  }
  _findCenterFromElement() {
    return new _(this.left + this.width / 2, this.top + this.height / 2)
  }
  clone(t) {
    const e = this.toObject(t)
    return this.constructor.fromObject(e)
  }
  cloneAsImage(t) {
    const e = this.toCanvasElement(t),
      s = x.getClass('image')
    return new s(e)
  }
  toCanvasElement() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const e = Cr(this),
      s = this.group,
      i = this.shadow,
      r = Math.abs,
      n = t.enableRetinaScaling ? rr() : 1,
      a = (t.multiplier || 1) * n,
      h = t.canvasProvider || (S => new ke(S, { enableRetinaScaling: !1, renderOnAddRemove: !1, skipOffscreen: !1 }))
    delete this.group,
      t.withoutTransform && Zn(this),
      t.withoutShadow && (this.shadow = null),
      t.viewportTransform && to(this, this.getViewportTransform()),
      this.setCoords()
    const l = G(),
      c = this.getBoundingRect(),
      u = this.shadow,
      d = new _()
    if (u) {
      const S = u.blur,
        w = u.nonScaling ? new _(1, 1) : this.getObjectScaling()
      ;(d.x = 2 * Math.round(r(u.offsetX) + S) * r(w.x)), (d.y = 2 * Math.round(r(u.offsetY) + S) * r(w.y))
    }
    const f = c.width + d.x,
      m = c.height + d.y
    ;(l.width = Math.ceil(f)), (l.height = Math.ceil(m))
    const y = h(l)
    t.format === 'jpeg' && (y.backgroundColor = '#fff'),
      this.setPositionByOrigin(new _(y.width / 2, y.height / 2), k, k)
    const v = this.canvas
    ;(y._objects = [this]), this.set('canvas', y), this.setCoords()
    const C = y.toCanvasElement(a || 1, t)
    return (
      this.set('canvas', v),
      (this.shadow = i),
      s && (this.group = s),
      this.set(e),
      this.setCoords(),
      (y._objects = []),
      y.destroy(),
      C
    )
  }
  toDataURL() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    return cr(this.toCanvasElement(t), t.format || 'png', t.quality || 1)
  }
  isType() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s]
    return e.includes(this.constructor.type) || e.includes(this.type)
  }
  complexity() {
    return 1
  }
  toJSON() {
    return this.toObject()
  }
  rotate(t) {
    const { centeredRotation: e, originX: s, originY: i } = this
    if (e) {
      const { x: r, y: n } = this.getRelativeCenterPoint()
      ;(this.originX = k), (this.originY = k), (this.left = r), (this.top = n)
    }
    if ((this.set('angle', t), e)) {
      const { x: r, y: n } = this.translateToOriginPoint(this.getRelativeCenterPoint(), s, i)
      ;(this.left = r), (this.top = n), (this.originX = s), (this.originY = i)
    }
  }
  setOnGroup() {}
  _setupCompositeOperation(t) {
    this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation)
  }
  dispose() {
    Ye.cancelByTarget(this),
      this.off(),
      this._set('canvas', void 0),
      this._cacheCanvas && bt().dispose(this._cacheCanvas),
      (this._cacheCanvas = void 0),
      (this._cacheContext = null)
  }
  animate(t, e) {
    return Object.entries(t).reduce((s, i) => {
      let [r, n] = i
      return (s[r] = this._animate(r, n, e)), s
    }, {})
  }
  _animate(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const i = t.split('.'),
      r = this.constructor.colorProperties.includes(i[i.length - 1]),
      { abort: n, startValue: a, onChange: h, onComplete: l } = s,
      c = p(
        p({}, s),
        {},
        {
          target: this,
          startValue: a != null ? a : i.reduce((u, d) => u[d], this),
          endValue: e,
          abort: n == null ? void 0 : n.bind(this),
          onChange: (u, d, f) => {
            i.reduce((m, y, v) => (v === i.length - 1 && (m[y] = u), m[y]), this), h && h(u, d, f)
          },
          onComplete: (u, d, f) => {
            this.setCoords(), l && l(u, d, f)
          },
        }
      )
    return r ? Mo(c) : Mr(c)
  }
  isDescendantOf(t) {
    const { parent: e, group: s } = this
    return e === t || s === t || (!!e && e.isDescendantOf(t)) || (!!s && s !== e && s.isDescendantOf(t))
  }
  getAncestors() {
    const t = []
    let e = this
    do (e = e.parent), e && t.push(e)
    while (e)
    return t
  }
  findCommonAncestors(t) {
    if (this === t) return { fork: [], otherFork: [], common: [this, ...this.getAncestors()] }
    const e = this.getAncestors(),
      s = t.getAncestors()
    if (e.length === 0 && s.length > 0 && this === s[s.length - 1])
      return { fork: [], otherFork: [t, ...s.slice(0, s.length - 1)], common: [this] }
    for (let i = 0, r; i < e.length; i++) {
      if (((r = e[i]), r === t)) return { fork: [this, ...e.slice(0, i)], otherFork: [], common: e.slice(i) }
      for (let n = 0; n < s.length; n++) {
        if (this === s[n]) return { fork: [], otherFork: [t, ...s.slice(0, n)], common: [this, ...e] }
        if (r === s[n]) return { fork: [this, ...e.slice(0, i)], otherFork: [t, ...s.slice(0, n)], common: e.slice(i) }
      }
    }
    return { fork: [this, ...e], otherFork: [t, ...s], common: [] }
  }
  hasCommonAncestors(t) {
    const e = this.findCommonAncestors(t)
    return e && !!e.common.length
  }
  isInFrontOf(t) {
    if (this === t) return
    const e = this.findCommonAncestors(t)
    if (e.fork.includes(t)) return !0
    if (e.otherFork.includes(this)) return !1
    const s = e.common[0] || this.canvas
    if (!s) return
    const i = e.fork.pop(),
      r = e.otherFork.pop(),
      n = s._objects.indexOf(i),
      a = s._objects.indexOf(r)
    return n > -1 && n > a
  }
  toObject() {
    const e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).concat(
      Re.customProperties,
      this.constructor.customProperties || []
    )
    let s
    const i = E.NUM_FRACTION_DIGITS,
      {
        clipPath: r,
        fill: n,
        stroke: a,
        shadow: h,
        strokeDashArray: l,
        left: c,
        top: u,
        originX: d,
        originY: f,
        width: m,
        height: y,
        strokeWidth: v,
        strokeLineCap: C,
        strokeDashOffset: S,
        strokeLineJoin: w,
        strokeUniform: T,
        strokeMiterLimit: b,
        scaleX: O,
        scaleY: M,
        angle: D,
        flipX: F,
        flipY: V,
        opacity: J,
        visible: U,
        backgroundColor: K,
        fillRule: L,
        paintFirst: Y,
        globalCompositeOperation: vt,
        skewX: fe,
        skewY: Ct,
      } = this
    r && !r.excludeFromExport && (s = r.toObject(e.concat('inverted', 'absolutePositioned')))
    const ht = dn => B(dn, i),
      Si = p(
        p({}, le(this, e)),
        {},
        {
          type: this.constructor.type,
          version: Is,
          originX: d,
          originY: f,
          left: ht(c),
          top: ht(u),
          width: ht(m),
          height: ht(y),
          fill: Ai(n) ? n.toObject() : n,
          stroke: Ai(a) ? a.toObject() : a,
          strokeWidth: ht(v),
          strokeDashArray: l && l.concat(),
          strokeLineCap: C,
          strokeDashOffset: S,
          strokeLineJoin: w,
          strokeUniform: T,
          strokeMiterLimit: ht(b),
          scaleX: ht(O),
          scaleY: ht(M),
          angle: ht(D),
          flipX: F,
          flipY: V,
          opacity: ht(J),
          shadow: h && h.toObject(),
          visible: U,
          backgroundColor: K,
          fillRule: L,
          paintFirst: Y,
          globalCompositeOperation: vt,
          skewX: ht(fe),
          skewY: ht(Ct),
        },
        s ? { clipPath: s } : null
      )
    return this.includeDefaultValues ? Si : this._removeDefaultValues(Si)
  }
  toDatalessObject(t) {
    return this.toObject(t)
  }
  _removeDefaultValues(t) {
    const e = this.constructor.getDefaults(),
      i = Object.keys(e).length > 0 ? e : Object.getPrototypeOf(this)
    return ni(t, (r, n) => {
      if (n === A || n === it || n === 'type') return !0
      const a = i[n]
      return r !== a && !(Array.isArray(r) && Array.isArray(a) && r.length === 0 && a.length === 0)
    })
  }
  toString() {
    return '#<'.concat(this.constructor.type, '>')
  }
  static _fromObject(t) {
    let e = j(t, Po),
      s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      { extraParam: i } = s,
      r = j(s, Ao)
    return rs(e, r).then(n => (i ? (delete n[i], new this(e[i], n)) : new this(n)))
  }
  static fromObject(t, e) {
    return this._fromObject(t, e)
  }
}
g(Ft, 'stateProperties', mo)
g(Ft, 'cacheProperties', At)
g(Ft, 'ownDefaults', _o)
g(Ft, 'type', 'FabricObject')
g(Ft, 'colorProperties', [H, Q, 'backgroundColor'])
g(Ft, 'customProperties', [])
x.setClass(Ft)
x.setClass(Ft, 'object')
const ce = (o, t, e) => (s, i, r, n) => {
  const a = t(s, i, r, n)
  return a && Sr(o, p(p({}, xr(s, i, r, n)), e)), a
}
function ue(o) {
  return (t, e, s, i) => {
    const { target: r, originX: n, originY: a } = e,
      h = r.getRelativeCenterPoint(),
      l = r.translateToOriginPoint(h, n, a),
      c = o(t, e, s, i)
    return r.setPositionByOrigin(l, e.originX, e.originY), c
  }
}
const Fo = (o, t, e, s) => {
    const i = ai(t, t.originX, t.originY, e, s)
    if (z(t.originX) === z(k) || (z(t.originX) === z(W) && i.x < 0) || (z(t.originX) === z(A) && i.x > 0)) {
      const { target: r } = t,
        n = r.strokeWidth / (r.strokeUniform ? r.scaleX : 1),
        a = wr(t) ? 2 : 1,
        h = r.width,
        l = Math.abs((i.x * a) / r.scaleX) - n
      return r.set('width', Math.max(l, 1)), h !== r.width
    }
    return !1
  },
  Wi = ce(Ce, ue(Fo))
function Lo(o, t, e, s, i) {
  s = s || {}
  const r = this.sizeX || s.cornerSize || i.cornerSize,
    n = this.sizeY || s.cornerSize || i.cornerSize,
    a = typeof s.transparentCorners < 'u' ? s.transparentCorners : i.transparentCorners,
    h = a ? Q : H,
    l = !a && (s.cornerStrokeColor || i.cornerStrokeColor)
  let c = t,
    u = e,
    d
  o.save(),
    (o.fillStyle = s.cornerColor || i.cornerColor || ''),
    (o.strokeStyle = s.cornerStrokeColor || i.cornerStrokeColor || ''),
    r > n
      ? ((d = r), o.scale(1, n / r), (u = (e * r) / n))
      : n > r
      ? ((d = n), o.scale(r / n, 1), (c = (t * n) / r))
      : (d = r),
    (o.lineWidth = 1),
    o.beginPath(),
    o.arc(c, u, d / 2, 0, Be, !1),
    o[h](),
    l && o.stroke(),
    o.restore()
}
function jo(o, t, e, s, i) {
  s = s || {}
  const r = this.sizeX || s.cornerSize || i.cornerSize,
    n = this.sizeY || s.cornerSize || i.cornerSize,
    a = typeof s.transparentCorners < 'u' ? s.transparentCorners : i.transparentCorners,
    h = a ? Q : H,
    l = !a && (s.cornerStrokeColor || i.cornerStrokeColor),
    c = r / 2,
    u = n / 2
  o.save(),
    (o.fillStyle = s.cornerColor || i.cornerColor || ''),
    (o.strokeStyle = s.cornerStrokeColor || i.cornerStrokeColor || ''),
    (o.lineWidth = 1),
    o.translate(t, e)
  const d = i.getTotalAngle()
  o.rotate(X(d)), o[''.concat(h, 'Rect')](-c, -u, r, n), l && o.strokeRect(-c, -u, r, n), o.restore()
}
class dt {
  constructor(t) {
    g(this, 'visible', !0),
      g(this, 'actionName', ss),
      g(this, 'angle', 0),
      g(this, 'x', 0),
      g(this, 'y', 0),
      g(this, 'offsetX', 0),
      g(this, 'offsetY', 0),
      g(this, 'sizeX', 0),
      g(this, 'sizeY', 0),
      g(this, 'touchSizeX', 0),
      g(this, 'touchSizeY', 0),
      g(this, 'cursorStyle', 'crosshair'),
      g(this, 'withConnection', !1),
      Object.assign(this, t)
  }
  shouldActivate(t, e, s, i) {
    var r
    let { tl: n, tr: a, br: h, bl: l } = i
    return (
      ((r = e.canvas) === null || r === void 0 ? void 0 : r.getActiveObject()) === e &&
      e.isControlVisible(t) &&
      R.isPointInPolygon(s, [n, a, h, l])
    )
  }
  getActionHandler(t, e, s) {
    return this.actionHandler
  }
  getMouseDownHandler(t, e, s) {
    return this.mouseDownHandler
  }
  getMouseUpHandler(t, e, s) {
    return this.mouseUpHandler
  }
  cursorStyleHandler(t, e, s) {
    return e.cursorStyle
  }
  getActionName(t, e, s) {
    return e.actionName
  }
  getVisibility(t, e) {
    var s, i
    return (s = (i = t._controlsVisibility) === null || i === void 0 ? void 0 : i[e]) !== null && s !== void 0
      ? s
      : this.visible
  }
  setVisibility(t, e, s) {
    this.visible = t
  }
  positionHandler(t, e, s, i) {
    return new _(this.x * t.x + this.offsetX, this.y * t.y + this.offsetY).transform(e)
  }
  calcCornerCoords(t, e, s, i, r, n) {
    const a = ii([
      Oe(s, i),
      De({ angle: t }),
      ri((r ? this.touchSizeX : this.sizeX) || e, (r ? this.touchSizeY : this.sizeY) || e),
    ])
    return {
      tl: new _(-0.5, -0.5).transform(a),
      tr: new _(0.5, -0.5).transform(a),
      br: new _(0.5, 0.5).transform(a),
      bl: new _(-0.5, 0.5).transform(a),
    }
  }
  render(t, e, s, i, r) {
    switch (((i = i || {}), i.cornerStyle || r.cornerStyle)) {
      case 'circle':
        Lo.call(this, t, e, s, i, r)
        break
      default:
        jo.call(this, t, e, s, i, r)
    }
  }
}
const Ro = (o, t, e) => (e.lockRotation ? He : t.cursorStyle),
  Bo = (o, t, e, s) => {
    let { target: i, ex: r, ey: n, theta: a, originX: h, originY: l } = t
    const c = i.translateToOriginPoint(i.getRelativeCenterPoint(), h, l)
    if (mt(i, 'lockRotation')) return !1
    const u = Math.atan2(n - c.y, r - c.x),
      d = Math.atan2(s - c.y, e - c.x)
    let f = Nt(d - u + a)
    if (i.snapAngle && i.snapAngle > 0) {
      const y = i.snapAngle,
        v = i.snapThreshold || y,
        C = Math.ceil(f / y) * y,
        S = Math.floor(f / y) * y
      Math.abs(f - S) < v ? (f = S) : Math.abs(f - C) < v && (f = C)
    }
    f < 0 && (f = 360 + f), (f %= 360)
    const m = i.angle !== f
    return (i.angle = f), m
  },
  Io = ce(or, ue(Bo))
function Er(o, t) {
  const e = t.canvas,
    s = o[e.uniScaleKey]
  return (e.uniformScaling && !s) || (!e.uniformScaling && s)
}
function Pr(o, t, e) {
  const s = mt(o, 'lockScalingX'),
    i = mt(o, 'lockScalingY')
  if ((s && i) || (!t && (s || i) && e) || (s && t === 'x') || (i && t === 'y')) return !0
  const { width: r, height: n, strokeWidth: a } = o
  return (r === 0 && a === 0 && t !== 'y') || (n === 0 && a === 0 && t !== 'x')
}
const Vo = ['e', 'se', 's', 'sw', 'w', 'nw', 'n', 'ne', 'e'],
  pe = (o, t, e) => {
    const s = Er(o, e),
      i = t.x !== 0 && t.y === 0 ? 'x' : t.x === 0 && t.y !== 0 ? 'y' : ''
    if (Pr(e, i, s)) return He
    const r = br(e, t)
    return ''.concat(Vo[r], '-resize')
  }
function ci(o, t, e, s) {
  let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}
  const r = t.target,
    n = i.by,
    a = Er(o, r),
    h = Pr(r, n, a)
  let l, c, u, d, f, m
  if (h) return !1
  if (t.gestureScale) (c = t.scaleX * t.gestureScale), (u = t.scaleY * t.gestureScale)
  else {
    if (
      ((l = ai(t, t.originX, t.originY, e, s)),
      (f = n !== 'y' ? Math.sign(l.x || t.signX || 1) : 1),
      (m = n !== 'x' ? Math.sign(l.y || t.signY || 1) : 1),
      t.signX || (t.signX = f),
      t.signY || (t.signY = m),
      mt(r, 'lockScalingFlip') && (t.signX !== f || t.signY !== m))
    )
      return !1
    if (((d = r._getTransformedDimensions()), a && !n)) {
      const C = Math.abs(l.x) + Math.abs(l.y),
        { original: S } = t,
        w = Math.abs((d.x * S.scaleX) / r.scaleX) + Math.abs((d.y * S.scaleY) / r.scaleY),
        T = C / w
      ;(c = S.scaleX * T), (u = S.scaleY * T)
    } else (c = Math.abs((l.x * r.scaleX) / d.x)), (u = Math.abs((l.y * r.scaleY) / d.y))
    wr(t) && ((c *= 2), (u *= 2)),
      t.signX !== f && n !== 'y' && ((t.originX = ji(t.originX)), (c *= -1), (t.signX = f)),
      t.signY !== m && n !== 'x' && ((t.originY = ji(t.originY)), (u *= -1), (t.signY = m))
  }
  const y = r.scaleX,
    v = r.scaleY
  return (
    n
      ? (n === 'x' && r.set(nt, c), n === 'y' && r.set(ut, u))
      : (!mt(r, 'lockScalingX') && r.set(nt, c), !mt(r, 'lockScalingY') && r.set(ut, u)),
    y !== r.scaleX || v !== r.scaleY
  )
}
const Yo = (o, t, e, s) => ci(o, t, e, s),
  Wo = (o, t, e, s) => ci(o, t, e, s, { by: 'x' }),
  Xo = (o, t, e, s) => ci(o, t, e, s, { by: 'y' }),
  Ee = ce(es, ue(Yo)),
  zo = ce(es, ue(Wo)),
  Ho = ce(es, ue(Xo)),
  Go = ['target', 'ex', 'ey', 'skewingSide'],
  Ns = {
    x: { counterAxis: 'y', scale: nt, skew: ae, lockSkewing: 'lockSkewingX', origin: 'originX', flip: 'flipX' },
    y: { counterAxis: 'x', scale: ut, skew: he, lockSkewing: 'lockSkewingY', origin: 'originY', flip: 'flipY' },
  },
  No = ['ns', 'nesw', 'ew', 'nwse'],
  Uo = (o, t, e) => {
    if ((t.x !== 0 && mt(e, 'lockSkewingY')) || (t.y !== 0 && mt(e, 'lockSkewingX'))) return He
    const s = br(e, t) % 4
    return ''.concat(No[s], '-resize')
  }
function Ko(o, t, e) {
  let { target: s, ex: i, ey: r, skewingSide: n } = t,
    a = j(t, Go)
  const { skew: h } = Ns[o],
    l = e.subtract(new _(i, r)).divide(new _(s.scaleX, s.scaleY))[o],
    c = s[h],
    u = a[h],
    d = Math.tan(X(u)),
    f =
      o === 'y'
        ? s._getTransformedDimensions({ scaleX: 1, scaleY: 1, skewX: 0 }).x
        : s._getTransformedDimensions({ scaleX: 1, scaleY: 1 }).y,
    m = (2 * l * n) / Math.max(f, 1) + d,
    y = Nt(Math.atan(m))
  s.set(h, y)
  const v = c !== s[h]
  if (v && o === 'y') {
    const { skewX: C, scaleX: S } = s,
      w = s._getTransformedDimensions({ skewY: c }),
      T = s._getTransformedDimensions(),
      b = C !== 0 ? w.x / T.x : 1
    b !== 1 && s.set(nt, b * S)
  }
  return v
}
function Ar(o, t, e, s, i) {
  const { target: r } = e,
    { counterAxis: n, origin: a, lockSkewing: h, skew: l, flip: c } = Ns[o]
  if (mt(r, h)) return !1
  const { origin: u, flip: d } = Ns[n],
    f = z(e[u]) * (r[d] ? -1 : 1),
    m = -Math.sign(f) * (r[c] ? -1 : 1),
    y = ((r[l] === 0 && ai(e, k, k, s, i)[o] > 0) || r[l] > 0 ? 1 : -1) * m,
    v = -y * 0.5 + 0.5
  return ce(
    ar,
    ue((S, w, T, b) => Ko(o, w, new _(T, b)))
  )(t, p(p({}, e), {}, { [a]: v, skewingSide: m }), s, i)
}
const qo = (o, t, e, s) => Ar('x', o, t, e, s),
  $o = (o, t, e, s) => Ar('y', o, t, e, s)
function as(o, t) {
  return o[t.canvas.altActionKey]
}
const Pe = (o, t, e) => {
    const s = as(o, e)
    return t.x === 0 ? (s ? ae : ut) : t.y === 0 ? (s ? he : nt) : ''
  },
  te = (o, t, e) => (as(o, e) ? Uo(o, t, e) : pe(o, t, e)),
  Xi = (o, t, e, s) => (as(o, t.target) ? $o(o, t, e, s) : zo(o, t, e, s)),
  zi = (o, t, e, s) => (as(o, t.target) ? qo(o, t, e, s) : Ho(o, t, e, s)),
  Fr = () => ({
    ml: new dt({ x: -0.5, y: 0, cursorStyleHandler: te, actionHandler: Xi, getActionName: Pe }),
    mr: new dt({ x: 0.5, y: 0, cursorStyleHandler: te, actionHandler: Xi, getActionName: Pe }),
    mb: new dt({ x: 0, y: 0.5, cursorStyleHandler: te, actionHandler: zi, getActionName: Pe }),
    mt: new dt({ x: 0, y: -0.5, cursorStyleHandler: te, actionHandler: zi, getActionName: Pe }),
    tl: new dt({ x: -0.5, y: -0.5, cursorStyleHandler: pe, actionHandler: Ee }),
    tr: new dt({ x: 0.5, y: -0.5, cursorStyleHandler: pe, actionHandler: Ee }),
    bl: new dt({ x: -0.5, y: 0.5, cursorStyleHandler: pe, actionHandler: Ee }),
    br: new dt({ x: 0.5, y: 0.5, cursorStyleHandler: pe, actionHandler: Ee }),
    mtr: new dt({
      x: 0,
      y: -0.5,
      actionHandler: Io,
      cursorStyleHandler: Ro,
      offsetY: -40,
      withConnection: !0,
      actionName: ei,
    }),
  }),
  Jo = () => ({
    mr: new dt({ x: 0.5, y: 0, actionHandler: Wi, cursorStyleHandler: te, actionName: Ce }),
    ml: new dt({ x: -0.5, y: 0, actionHandler: Wi, cursorStyleHandler: te, actionName: Ce }),
  }),
  Zo = () => p(p({}, Fr()), Jo())
class xe extends Ft {
  static getDefaults() {
    return p(p({}, super.getDefaults()), xe.ownDefaults)
  }
  constructor(t) {
    super(), Object.assign(this, this.constructor.createControls(), xe.ownDefaults), this.setOptions(t)
  }
  static createControls() {
    return { controls: Fr() }
  }
  _updateCacheCanvas() {
    const t = this.canvas
    if (this.noScaleCache && t && t._currentTransform) {
      const e = t._currentTransform,
        s = e.target,
        i = e.action
      if (this === s && i && i.startsWith(ss)) return !1
    }
    return super._updateCacheCanvas()
  }
  getActiveControl() {
    const t = this.__corner
    return t ? { key: t, control: this.controls[t], coord: this.oCoords[t] } : void 0
  }
  findControl(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    if (!this.hasControls || !this.canvas) return
    this.__corner = void 0
    const s = Object.entries(this.oCoords)
    for (let i = s.length - 1; i >= 0; i--) {
      const [r, n] = s[i],
        a = this.controls[r]
      if (a.shouldActivate(r, this, t, e ? n.touchCorner : n.corner))
        return (this.__corner = r), { key: r, control: a, coord: this.oCoords[r] }
    }
  }
  calcOCoords() {
    const t = this.getViewportTransform(),
      e = this.getCenterPoint(),
      s = Oe(e.x, e.y),
      i = De({ angle: this.getTotalAngle() - (!!this.group && this.flipX ? 180 : 0) }),
      r = q(s, i),
      n = q(t, r),
      a = q(n, [1 / t[0], 0, 0, 1 / t[3], 0, 0]),
      h = this.group ? We(this.calcTransformMatrix()) : void 0
    h && ((h.scaleX = Math.abs(h.scaleX)), (h.scaleY = Math.abs(h.scaleY)))
    const l = this._calculateCurrentDimensions(h),
      c = {}
    return (
      this.forEachControl((u, d) => {
        const f = u.positionHandler(l, a, this, u)
        c[d] = Object.assign(f, this._calcCornerCoords(u, f))
      }),
      c
    )
  }
  _calcCornerCoords(t, e) {
    const s = this.getTotalAngle(),
      i = t.calcCornerCoords(s, this.cornerSize, e.x, e.y, !1, this),
      r = t.calcCornerCoords(s, this.touchCornerSize, e.x, e.y, !0, this)
    return { corner: i, touchCorner: r }
  }
  setCoords() {
    super.setCoords(), this.canvas && (this.oCoords = this.calcOCoords())
  }
  forEachControl(t) {
    for (const e in this.controls) t(this.controls[e], e, this)
  }
  drawSelectionBackground(t) {
    if (!this.selectionBackgroundColor || (this.canvas && this.canvas._activeObject !== this)) return
    t.save()
    const e = this.getRelativeCenterPoint(),
      s = this._calculateCurrentDimensions(),
      i = this.getViewportTransform()
    t.translate(e.x, e.y),
      t.scale(1 / i[0], 1 / i[3]),
      t.rotate(X(this.angle)),
      (t.fillStyle = this.selectionBackgroundColor),
      t.fillRect(-s.x / 2, -s.y / 2, s.x, s.y),
      t.restore()
  }
  strokeBorders(t, e) {
    t.strokeRect(-e.x / 2, -e.y / 2, e.x, e.y)
  }
  _drawBorders(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const i = p(
      { hasControls: this.hasControls, borderColor: this.borderColor, borderDashArray: this.borderDashArray },
      s
    )
    t.save(),
      (t.strokeStyle = i.borderColor),
      this._setLineDash(t, i.borderDashArray),
      this.strokeBorders(t, e),
      i.hasControls && this.drawControlsConnectingLines(t, e),
      t.restore()
  }
  _renderControls(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const { hasBorders: s, hasControls: i } = this,
      r = p({ hasBorders: s, hasControls: i }, e),
      n = this.getViewportTransform(),
      a = r.hasBorders,
      h = r.hasControls,
      l = q(n, this.calcTransformMatrix()),
      c = We(l)
    t.save(),
      t.translate(c.translateX, c.translateY),
      (t.lineWidth = 1 * this.borderScaleFactor),
      this.group === this.parent && (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1),
      this.flipX && (c.angle -= 180),
      t.rotate(X(this.group ? c.angle : this.angle)),
      a && this.drawBorders(t, c, e),
      h && this.drawControls(t, e),
      t.restore()
  }
  drawBorders(t, e, s) {
    let i
    if ((s && s.forActiveSelection) || this.group) {
      const r = oi(this.width, this.height, is(e)),
        n = this.isStrokeAccountedForInDimensions()
          ? si
          : (this.strokeUniform
              ? new _().scalarAdd(this.canvas ? this.canvas.getZoom() : 1)
              : new _(e.scaleX, e.scaleY)
            ).scalarMultiply(this.strokeWidth)
      i = r
        .add(n)
        .scalarAdd(this.borderScaleFactor)
        .scalarAdd(this.padding * 2)
    } else i = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor)
    this._drawBorders(t, i, s)
  }
  drawControlsConnectingLines(t, e) {
    let s = !1
    t.beginPath(),
      this.forEachControl((i, r) => {
        i.withConnection &&
          i.getVisibility(this, r) &&
          ((s = !0), t.moveTo(i.x * e.x, i.y * e.y), t.lineTo(i.x * e.x + i.offsetX, i.y * e.y + i.offsetY))
      }),
      s && t.stroke()
  }
  drawControls(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    t.save()
    const s = this.getCanvasRetinaScaling(),
      { cornerStrokeColor: i, cornerDashArray: r, cornerColor: n } = this,
      a = p({ cornerStrokeColor: i, cornerDashArray: r, cornerColor: n }, e)
    t.setTransform(s, 0, 0, s, 0, 0),
      (t.strokeStyle = t.fillStyle = a.cornerColor),
      this.transparentCorners || (t.strokeStyle = a.cornerStrokeColor),
      this._setLineDash(t, a.cornerDashArray),
      this.forEachControl((h, l) => {
        if (h.getVisibility(this, l)) {
          const c = this.oCoords[l]
          h.render(t, c.x, c.y, a, this)
        }
      }),
      t.restore()
  }
  isControlVisible(t) {
    return this.controls[t] && this.controls[t].getVisibility(this, t)
  }
  setControlVisible(t, e) {
    this._controlsVisibility || (this._controlsVisibility = {}), (this._controlsVisibility[t] = e)
  }
  setControlsVisibility() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    Object.entries(t).forEach(e => {
      let [s, i] = e
      return this.setControlVisible(s, i)
    })
  }
  clearContextTop(t) {
    if (!this.canvas) return
    const e = this.canvas.contextTop
    if (!e) return
    const s = this.canvas.viewportTransform
    e.save(), e.transform(s[0], s[1], s[2], s[3], s[4], s[5]), this.transform(e)
    const i = this.width + 4,
      r = this.height + 4
    return e.clearRect(-i / 2, -r / 2, i, r), t || e.restore(), e
  }
  onDeselect(t) {
    return !1
  }
  onSelect(t) {
    return !1
  }
  shouldStartDragging(t) {
    return !1
  }
  onDragStart(t) {
    return !1
  }
  canDrop(t) {
    return !1
  }
  renderDragSourceEffect(t) {}
  renderDropTargetEffect(t) {}
}
g(xe, 'ownDefaults', yo)
function Lr(o, t) {
  return (
    t.forEach(e => {
      Object.getOwnPropertyNames(e.prototype).forEach(s => {
        s !== 'constructor' &&
          Object.defineProperty(o.prototype, s, Object.getOwnPropertyDescriptor(e.prototype, s) || Object.create(null))
      })
    }),
    o
  )
}
class $ extends xe {}
Lr($, [Tr])
x.setClass($)
x.setClass($, 'object')
const Qo = (o, t, e, s) => {
    s = Math.round(s)
    const i = s * 2 + 1,
      { data: r } = o.getImageData(t - s, e - s, i, i)
    for (let n = 3; n < r.length; n += 4) if (r[n] > 0) return !1
    return !0
  },
  ta = (o, t) => {
    for (let e = o.length - 1; e >= 0; e--) if (t(o[e], e, o)) return e
    return -1
  }
class jr {
  constructor(t) {
    ;(this.options = t),
      (this.strokeProjectionMagnitude = this.options.strokeWidth / 2),
      (this.scale = new _(this.options.scaleX, this.options.scaleY)),
      (this.strokeUniformScalar = this.options.strokeUniform
        ? new _(1 / this.options.scaleX, 1 / this.options.scaleY)
        : new _(1, 1))
  }
  createSideVector(t, e) {
    const s = zs(t, e)
    return this.options.strokeUniform ? s.multiply(this.scale) : s
  }
  projectOrthogonally(t, e, s) {
    return this.applySkew(t.add(this.calcOrthogonalProjection(t, e, s)))
  }
  isSkewed() {
    return this.options.skewX !== 0 || this.options.skewY !== 0
  }
  applySkew(t) {
    const e = new _(t)
    return (e.y += e.x * Math.tan(X(this.options.skewY))), (e.x += e.y * Math.tan(X(this.options.skewX))), e
  }
  scaleUnitVector(t, e) {
    return t.multiply(this.strokeUniformScalar).scalarMultiply(e)
  }
}
const ea = new _()
class re extends jr {
  static getOrthogonalRotationFactor(t, e) {
    const s = e ? Gs(t, e) : fo(t)
    return Math.abs(s) < Te ? -1 : 1
  }
  constructor(t, e, s, i) {
    super(i),
      g(this, 'AB', void 0),
      g(this, 'AC', void 0),
      g(this, 'alpha', void 0),
      g(this, 'bisector', void 0),
      (this.A = new _(t)),
      (this.B = new _(e)),
      (this.C = new _(s)),
      (this.AB = this.createSideVector(this.A, this.B)),
      (this.AC = this.createSideVector(this.A, this.C)),
      (this.alpha = Gs(this.AB, this.AC)),
      (this.bisector = hi(Dr(this.AB.eq(ea) ? this.AC : this.AB, this.alpha / 2)))
  }
  calcOrthogonalProjection(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.strokeProjectionMagnitude
    const i = this.createSideVector(t, e),
      r = kr(i),
      n = re.getOrthogonalRotationFactor(r, this.bisector)
    return this.scaleUnitVector(r, s * n)
  }
  projectBevel() {
    const t = []
    return (
      (this.alpha % Be === 0 ? [this.B] : [this.B, this.C]).forEach(e => {
        t.push(this.projectOrthogonally(this.A, e)),
          t.push(this.projectOrthogonally(this.A, e, -this.strokeProjectionMagnitude))
      }),
      t
    )
  }
  projectMiter() {
    const t = [],
      e = Math.abs(this.alpha),
      s = 1 / Math.sin(e / 2),
      i = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * s),
      r = this.options.strokeUniform
        ? Hs(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit))
        : this.options.strokeMiterLimit
    return (
      Hs(i) / this.strokeProjectionMagnitude <= r && t.push(this.applySkew(this.A.add(i))),
      t.push(...this.projectBevel()),
      t
    )
  }
  projectRoundNoSkew(t, e) {
    const s = [],
      i = new _(
        re.getOrthogonalRotationFactor(this.bisector),
        re.getOrthogonalRotationFactor(new _(this.bisector.y, this.bisector.x))
      ),
      r = new _(1, 0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i),
      n = new _(0, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i)
    return (
      [r, n].forEach(a => {
        Ii(a, t, e) && s.push(this.A.add(a))
      }),
      s
    )
  }
  projectRoundWithSkew(t, e) {
    const s = [],
      { skewX: i, skewY: r, scaleX: n, scaleY: a, strokeUniform: h } = this.options,
      l = new _(Math.tan(X(i)), Math.tan(X(r))),
      c = this.strokeProjectionMagnitude,
      u = h ? c / a / Math.sqrt(1 / a ** 2 + (1 / n ** 2) * l.y ** 2) : c / Math.sqrt(1 + l.y ** 2),
      d = new _(Math.sqrt(Math.max(c ** 2 - u ** 2, 0)), u),
      f = h
        ? c / Math.sqrt(1 + (l.x ** 2 * (1 / a) ** 2) / (1 / n + (1 / n) * l.x * l.y) ** 2)
        : c / Math.sqrt(1 + l.x ** 2 / (1 + l.x * l.y) ** 2),
      m = new _(f, Math.sqrt(Math.max(c ** 2 - f ** 2, 0)))
    return (
      [m, m.scalarMultiply(-1), d, d.scalarMultiply(-1)]
        .map(y => this.applySkew(h ? y.multiply(this.strokeUniformScalar) : y))
        .forEach(y => {
          Ii(y, t, e) && s.push(this.applySkew(this.A).add(y))
        }),
      s
    )
  }
  projectRound() {
    const t = []
    t.push(...this.projectBevel())
    const e = this.alpha % Be === 0,
      s = this.applySkew(this.A),
      i = t[e ? 0 : 2].subtract(s),
      r = t[e ? 1 : 0].subtract(s),
      n = e
        ? this.applySkew(this.AB.scalarMultiply(-1))
        : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)),
      a = _e(i, n) > 0,
      h = a ? i : r,
      l = a ? r : i
    return this.isSkewed() ? t.push(...this.projectRoundWithSkew(h, l)) : t.push(...this.projectRoundNoSkew(h, l)), t
  }
  projectPoints() {
    switch (this.options.strokeLineJoin) {
      case 'miter':
        return this.projectMiter()
      case 'round':
        return this.projectRound()
      default:
        return this.projectBevel()
    }
  }
  project() {
    return this.projectPoints().map(t => ({
      originPoint: this.A,
      projectedPoint: t,
      angle: this.alpha,
      bisector: this.bisector,
    }))
  }
}
class Hi extends jr {
  constructor(t, e, s) {
    super(s), (this.A = new _(t)), (this.T = new _(e))
  }
  calcOrthogonalProjection(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.strokeProjectionMagnitude
    const i = this.createSideVector(t, e)
    return this.scaleUnitVector(kr(i), s)
  }
  projectButt() {
    return [
      this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude),
      this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude),
    ]
  }
  projectRound() {
    const t = []
    if (!this.isSkewed() && this.A.eq(this.T)) {
      const e = new _(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar)
      t.push(this.applySkew(this.A.add(e)), this.applySkew(this.A.subtract(e)))
    } else t.push(...new re(this.A, this.T, this.T, this.options).projectRound())
    return t
  }
  projectSquare() {
    const t = []
    if (this.A.eq(this.T)) {
      const e = new _(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar)
      t.push(this.A.add(e), this.A.subtract(e))
    } else {
      const e = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude),
        s = this.scaleUnitVector(hi(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude),
        i = this.A.add(s)
      t.push(i.add(e), i.subtract(e))
    }
    return t.map(e => this.applySkew(e))
  }
  projectPoints() {
    switch (this.options.strokeLineCap) {
      case 'round':
        return this.projectRound()
      case 'square':
        return this.projectSquare()
      default:
        return this.projectButt()
    }
  }
  project() {
    return this.projectPoints().map(t => ({ originPoint: this.A, projectedPoint: t }))
  }
}
const sa = function (o, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
    const s = []
    if (o.length === 0) return s
    const i = o.reduce((r, n) => (r[r.length - 1].eq(n) || r.push(new _(n)), r), [new _(o[0])])
    if (i.length === 1) e = !0
    else if (!e) {
      const r = i[0],
        n = ta(i, a => !a.eq(r))
      i.splice(n + 1)
    }
    return (
      i.forEach((r, n, a) => {
        let h, l
        n === 0
          ? ((l = a[1]), (h = e ? r : a[a.length - 1]))
          : n === a.length - 1
          ? ((h = a[n - 1]), (l = e ? r : a[0]))
          : ((h = a[n - 1]), (l = a[n + 1])),
          e && a.length === 1
            ? s.push(...new Hi(r, r, t).project())
            : e && (n === 0 || n === a.length - 1)
            ? s.push(...new Hi(r, n === 0 ? l : h, t).project())
            : s.push(...new re(r, h, l, t).project())
      }),
      s
    )
  },
  ui = o => {
    const t = {}
    return (
      Object.keys(o).forEach(e => {
        ;(t[e] = {}),
          Object.keys(o[e]).forEach(s => {
            t[e][s] = p({}, o[e][s])
          })
      }),
      t
    )
  },
  ia = o =>
    o
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;'),
  di = o => {
    const t = []
    for (let e = 0, s; e < o.length; e++) (s = ra(o, e)) !== !1 && t.push(s)
    return t
  },
  ra = (o, t) => {
    const e = o.charCodeAt(t)
    if (isNaN(e)) return ''
    if (e < 55296 || e > 57343) return o.charAt(t)
    if (55296 <= e && e <= 56319) {
      if (o.length <= t + 1) throw 'High surrogate without following low surrogate'
      const i = o.charCodeAt(t + 1)
      if (56320 > i || i > 57343) throw 'High surrogate without following low surrogate'
      return o.charAt(t) + o.charAt(t + 1)
    }
    if (t === 0) throw 'Low surrogate without preceding high surrogate'
    const s = o.charCodeAt(t - 1)
    if (55296 > s || s > 56319) throw 'Low surrogate without preceding high surrogate'
    return !1
  },
  fi = function (o, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
    return (
      o.fill !== t.fill ||
      o.stroke !== t.stroke ||
      o.strokeWidth !== t.strokeWidth ||
      o.fontSize !== t.fontSize ||
      o.fontFamily !== t.fontFamily ||
      o.fontWeight !== t.fontWeight ||
      o.fontStyle !== t.fontStyle ||
      o.textBackgroundColor !== t.textBackgroundColor ||
      o.deltaY !== t.deltaY ||
      (e && (o.overline !== t.overline || o.underline !== t.underline || o.linethrough !== t.linethrough))
    )
  },
  na = (o, t) => {
    const e = t.split(`
`),
      s = []
    let i = -1,
      r = {}
    o = ui(o)
    for (let n = 0; n < e.length; n++) {
      const a = di(e[n])
      if (!o[n]) {
        ;(i += a.length), (r = {})
        continue
      }
      for (let h = 0; h < a.length; h++) {
        i++
        const l = o[n][h]
        l &&
          Object.keys(l).length > 0 &&
          (fi(r, l, !0) ? s.push({ start: i, end: i + 1, style: l }) : s[s.length - 1].end++),
          (r = l || {})
      }
    }
    return s
  },
  oa = (o, t) => {
    if (!Array.isArray(o)) return ui(o)
    const e = t.split(ti),
      s = {}
    let i = -1,
      r = 0
    for (let n = 0; n < e.length; n++) {
      const a = di(e[n])
      for (let h = 0; h < a.length; h++)
        i++,
          o[r] &&
            o[r].start <= i &&
            i < o[r].end &&
            ((s[n] = s[n] || {}), (s[n][h] = p({}, o[r].style)), i === o[r].end - 1 && r++)
    }
    return s
  },
  Xt = [
    'display',
    'transform',
    H,
    'fill-opacity',
    'fill-rule',
    'opacity',
    Q,
    'stroke-dasharray',
    'stroke-linecap',
    'stroke-dashoffset',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'id',
    'paint-order',
    'vector-effect',
    'instantiated_by_use',
    'clip-path',
  ]
function Rr(o, t) {
  const e = o.nodeName,
    s = o.getAttribute('class'),
    i = o.getAttribute('id'),
    r = '(?![a-zA-Z\\-]+)'
  let n
  if (
    ((n = new RegExp('^' + e, 'i')),
    (t = t.replace(n, '')),
    i && t.length && ((n = new RegExp('#' + i + r, 'i')), (t = t.replace(n, ''))),
    s && t.length)
  ) {
    const a = s.split(' ')
    for (let h = a.length; h--; ) (n = new RegExp('\\.' + a[h] + r, 'i')), (t = t.replace(n, ''))
  }
  return t.length === 0
}
function aa(o, t) {
  let e,
    s = !0
  for (; o.parentElement && o.parentElement.nodeType === 1 && t.length; )
    s && (e = t.pop()), (o = o.parentElement), (s = Rr(o, e))
  return t.length === 0
}
function ha(o, t) {
  let e = !0
  const s = Rr(o, t.pop())
  return s && t.length && (e = aa(o, t)), s && e && t.length === 0
}
function la(o) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    e = {}
  for (const s in t) ha(o, s.split(' ')) && (e = p(p({}, e), t[s]))
  return e
}
const ca = o => {
    var t
    return (t = co[o]) !== null && t !== void 0 ? t : o
  },
  ua = new RegExp('('.concat(Ut, ')'), 'gi'),
  da = o => o.replace(ua, ' $1 ').replace(/,/gi, ' ').replace(/\s+/gi, ' ')
var Gi, Ni, Ui, Ki, qi, $i, Ji
const Z = '('.concat(Ut, ')'),
  fa = String.raw(Gi || (Gi = Wt(['(skewX)(', ')'], ['(skewX)\\(', '\\)'])), Z),
  ga = String.raw(Ni || (Ni = Wt(['(skewY)(', ')'], ['(skewY)\\(', '\\)'])), Z),
  pa = String.raw(Ui || (Ui = Wt(['(rotate)(', '(?: ', ' ', ')?)'], ['(rotate)\\(', '(?: ', ' ', ')?\\)'])), Z, Z, Z),
  ma = String.raw(Ki || (Ki = Wt(['(scale)(', '(?: ', ')?)'], ['(scale)\\(', '(?: ', ')?\\)'])), Z, Z),
  _a = String.raw(qi || (qi = Wt(['(translate)(', '(?: ', ')?)'], ['(translate)\\(', '(?: ', ')?\\)'])), Z, Z),
  ya = String.raw(
    $i || ($i = Wt(['(matrix)(', ' ', ' ', ' ', ' ', ' ', ')'], ['(matrix)\\(', ' ', ' ', ' ', ' ', ' ', '\\)'])),
    Z,
    Z,
    Z,
    Z,
    Z,
    Z
  ),
  gi = '(?:'.concat(ya, '|').concat(_a, '|').concat(pa, '|').concat(ma, '|').concat(fa, '|').concat(ga, ')'),
  va = '(?:'.concat(gi, '*)'),
  Ca = String.raw(Ji || (Ji = Wt(['^s*(?:', '?)s*$'], ['^\\s*(?:', '?)\\s*$'])), va),
  Sa = new RegExp(Ca),
  wa = new RegExp(gi),
  xa = new RegExp(gi, 'g')
function Us(o) {
  o = da(o).replace(/\s*([()])\s*/gi, '$1')
  const t = []
  if (!o || (o && !Sa.test(o))) return [...et]
  for (const e of o.matchAll(xa)) {
    const s = wa.exec(e[0])
    if (!s) continue
    let i = et
    const r = s.filter(m => !!m),
      [, n, ...a] = r,
      [h, l, c, u, d, f] = a.map(m => parseFloat(m))
    switch (n) {
      case 'translate':
        i = Oe(h, l)
        break
      case ei:
        i = De({ angle: h }, { x: l, y: c })
        break
      case ss:
        i = ri(h, l)
        break
      case ae:
        i = fr(h)
        break
      case he:
        i = gr(h)
        break
      case 'matrix':
        i = [h, l, c, u, d, f]
        break
    }
    t.push(i)
  }
  return ii(t)
}
function ba(o, t, e, s) {
  const i = Array.isArray(t)
  let r,
    n = t
  if ((o === H || o === Q) && t === rt) n = ''
  else {
    if (o === 'strokeUniform') return t === 'non-scaling-stroke'
    if (o === 'strokeDashArray') t === rt ? (n = null) : (n = t.replace(/,/g, ' ').split(/\s+/).map(parseFloat))
    else if (o === 'transformMatrix') e && e.transformMatrix ? (n = q(e.transformMatrix, Us(t))) : (n = Us(t))
    else if (o === 'visible') (n = t !== rt && t !== 'hidden'), e && e.visible === !1 && (n = !1)
    else if (o === 'opacity') (n = parseFloat(t)), e && typeof e.opacity < 'u' && (n *= e.opacity)
    else if (o === 'textAnchor') n = t === 'start' ? A : t === 'end' ? W : k
    else if (o === 'charSpacing') r = (se(t, s) / s) * 1e3
    else if (o === 'paintFirst') {
      const a = t.indexOf(H),
        h = t.indexOf(Q)
      ;(n = H), ((a > -1 && h > -1 && h < a) || (a === -1 && h > -1)) && (n = Q)
    } else {
      if (o === 'href' || o === 'xlink:href' || o === 'font' || o === 'id') return t
      if (o === 'imageSmoothing') return t === 'optimizeQuality'
      r = i ? t.map(se) : se(t, s)
    }
  }
  return !i && isNaN(r) ? n : r
}
function Ta(o, t) {
  const e = o.match(no)
  if (!e) return
  const s = e[1],
    i = e[3],
    r = e[4],
    n = e[5],
    a = e[6]
  s && (t.fontStyle = s),
    i && (t.fontWeight = isNaN(parseFloat(i)) ? i : parseFloat(i)),
    r && (t.fontSize = se(r)),
    a && (t.fontFamily = a),
    n && (t.lineHeight = n === 'normal' ? 1 : n)
}
function Oa(o, t) {
  Object.entries(o).forEach(e => {
    let [s, i] = e
    i !== void 0 && (t[s.toLowerCase()] = i)
  })
}
function Da(o, t) {
  o.replace(/;\s*$/, '')
    .split(';')
    .forEach(e => {
      if (!e) return
      const [s, i] = e.split(':')
      t[s.trim().toLowerCase()] = i.trim()
    })
}
function ka(o) {
  const t = {},
    e = o.getAttribute('style')
  return e && (typeof e == 'string' ? Da(e, t) : Oa(e, t)), t
}
const Ma = { stroke: 'strokeOpacity', fill: 'fillOpacity' }
function Ea(o) {
  const t = $.getDefaults()
  return (
    Object.entries(Ma).forEach(e => {
      let [s, i] = e
      if (typeof o[i] > 'u' || o[s] === '') return
      if (typeof o[s] > 'u') {
        if (!t[s]) return
        o[s] = t[s]
      }
      if (o[s].indexOf('url(') === 0) return
      const r = new P(o[s])
      o[s] = r.setAlpha(B(r.getAlpha() * o[i], 2)).toRgba()
    }),
    o
  )
}
function Lt(o, t, e) {
  if (!o) return {}
  let s = {},
    i,
    r = Qs
  o.parentNode &&
    Bi.test(o.parentNode.nodeName) &&
    ((s = Lt(o.parentElement, t, e)), s.fontSize && (i = r = se(s.fontSize)))
  const n = p(
    p(
      p(
        {},
        t.reduce((l, c) => {
          const u = o.getAttribute(c)
          return u && (l[c] = u), l
        }, {})
      ),
      la(o, e)
    ),
    ka(o)
  )
  n[Ps] && o.setAttribute(Ps, n[Ps]), n[Es] && ((i = se(n[Es], r)), (n[Es] = ''.concat(i)))
  const a = {}
  for (const l in n) {
    const c = ca(l),
      u = ba(c, n[l], s, i)
    a[c] = u
  }
  a && a.font && Ta(a.font, a)
  const h = p(p({}, s), a)
  return Bi.test(o.nodeName) ? h : Ea(h)
}
const Pa = ['left', 'top', 'width', 'height', 'visible'],
  Aa = { rx: 0, ry: 0 },
  Br = ['rx', 'ry']
class _t extends $ {
  static getDefaults() {
    return p(p({}, super.getDefaults()), _t.ownDefaults)
  }
  constructor(t) {
    super(), Object.assign(this, _t.ownDefaults), this.setOptions(t), this._initRxRy()
  }
  _initRxRy() {
    const { rx: t, ry: e } = this
    t && !e ? (this.ry = t) : e && !t && (this.rx = e)
  }
  _render(t) {
    const { width: e, height: s } = this,
      i = -e / 2,
      r = -s / 2,
      n = this.rx ? Math.min(this.rx, e / 2) : 0,
      a = this.ry ? Math.min(this.ry, s / 2) : 0,
      h = n !== 0 || a !== 0
    t.beginPath(),
      t.moveTo(i + n, r),
      t.lineTo(i + e - n, r),
      h && t.bezierCurveTo(i + e - jt * n, r, i + e, r + jt * a, i + e, r + a),
      t.lineTo(i + e, r + s - a),
      h && t.bezierCurveTo(i + e, r + s - jt * a, i + e - jt * n, r + s, i + e - n, r + s),
      t.lineTo(i + n, r + s),
      h && t.bezierCurveTo(i + jt * n, r + s, i, r + s - jt * a, i, r + s - a),
      t.lineTo(i, r + a),
      h && t.bezierCurveTo(i, r + jt * a, i + jt * n, r, i + n, r),
      t.closePath(),
      this._renderPaintInOrder(t)
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    return super.toObject([...Br, ...t])
  }
  _toSVG() {
    const { width: t, height: e, rx: s, ry: i } = this
    return [
      '<rect ',
      'COMMON_PARTS',
      'x="'
        .concat(-t / 2, '" y="')
        .concat(-e / 2, '" rx="')
        .concat(s, '" ry="')
        .concat(i, '" width="')
        .concat(t, '" height="')
        .concat(
          e,
          `" />
`
        ),
    ]
  }
  static async fromElement(t, e, s) {
    const i = Lt(t, this.ATTRIBUTE_NAMES, s),
      { left: r = 0, top: n = 0, width: a = 0, height: h = 0, visible: l = !0 } = i,
      c = j(i, Pa)
    return new this(p(p(p({}, e), c), {}, { left: r, top: n, width: a, height: h, visible: Boolean(l && a && h) }))
  }
}
g(_t, 'type', 'Rect')
g(_t, 'cacheProperties', [...At, ...Br])
g(_t, 'ownDefaults', Aa)
g(_t, 'ATTRIBUTE_NAMES', [...Xt, 'x', 'y', 'rx', 'ry', 'width', 'height'])
x.setClass(_t)
x.setSVGClass(_t)
const Ot = 'initialization',
  Ge = 'added',
  pi = 'removed',
  Ne = 'imperative',
  Fa = 'object_modified',
  La = 'object_modifying',
  Ir = (o, t) => {
    const { strokeUniform: e, strokeWidth: s, width: i, height: r, group: n } = t,
      a = n && n !== o ? ns(n.calcTransformMatrix(), o.calcTransformMatrix()) : null,
      h = a ? t.getRelativeCenterPoint().transform(a) : t.getRelativeCenterPoint(),
      l = !t.isStrokeAccountedForInDimensions(),
      c = e && l ? Qn(new _(s, s), void 0, o.calcTransformMatrix()) : si,
      u = !e && l ? s : 0,
      d = oi(i + u, r + u, ii([a, t.calcOwnMatrix()], !0))
        .add(c)
        .scalarDivide(2)
    return [h.subtract(d), h.add(d)]
  }
class hs {
  calcLayoutResult(t, e) {
    if (this.shouldPerformLayout(t)) return this.calcBoundingBox(e, t)
  }
  shouldPerformLayout(t) {
    let { type: e, prevStrategy: s, strategy: i } = t
    return e === Ot || e === Ne || (!!s && i !== s)
  }
  shouldLayoutClipPath(t) {
    let {
      type: e,
      target: { clipPath: s },
    } = t
    return e !== Ot && s && !s.absolutePositioned
  }
  getInitialSize(t, e) {
    return e.size
  }
  calcBoundingBox(t, e) {
    const { type: s, target: i } = e
    if (s === Ne && e.overrides) return e.overrides
    if (t.length === 0) return
    const { left: r, top: n, width: a, height: h } = Dt(t.map(d => Ir(i, d)).reduce((d, f) => d.concat(f), [])),
      l = new _(a, h),
      u = new _(r, n).add(l.scalarDivide(2))
    if (s === Ot) {
      const d = this.getInitialSize(e, { size: l, center: u })
      return { center: u, relativeCorrection: new _(0, 0), size: d }
    } else return { center: u.transform(i.calcOwnMatrix()), size: l }
  }
}
g(hs, 'type', 'strategy')
class mi extends hs {
  shouldPerformLayout(t) {
    return !0
  }
}
g(mi, 'type', 'fit-content')
x.setClass(mi)
const ja = ['strategy'],
  Ra = ['target', 'strategy', 'bubbles', 'prevStrategy'],
  Vr = 'layoutManager'
class be {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new mi()
    g(this, 'strategy', void 0), (this.strategy = t), (this._subscriptions = new Map())
  }
  performLayout(t) {
    const e = p(
      p({ bubbles: !0, strategy: this.strategy }, t),
      {},
      {
        prevStrategy: this._prevLayoutStrategy,
        stopPropagation() {
          this.bubbles = !1
        },
      }
    )
    this.onBeforeLayout(e)
    const s = this.getLayoutResult(e)
    s && this.commitLayout(e, s), this.onAfterLayout(e, s), (this._prevLayoutStrategy = e.strategy)
  }
  attachHandlers(t, e) {
    const { target: s } = e
    return [Ve, nr, Ce, or, es, ar, Ie, Dn, kn].map(i =>
      t.on(i, r =>
        this.performLayout(
          i === Ve ? { type: Fa, trigger: i, e: r, target: s } : { type: La, trigger: i, e: r, target: s }
        )
      )
    )
  }
  subscribe(t, e) {
    this.unsubscribe(t, e)
    const s = this.attachHandlers(t, e)
    this._subscriptions.set(t, s)
  }
  unsubscribe(t, e) {
    ;(this._subscriptions.get(t) || []).forEach(s => s()), this._subscriptions.delete(t)
  }
  unsubscribeTargets(t) {
    t.targets.forEach(e => this.unsubscribe(e, t))
  }
  subscribeTargets(t) {
    t.targets.forEach(e => this.subscribe(e, t))
  }
  onBeforeLayout(t) {
    const { target: e, type: s } = t,
      { canvas: i } = e
    if (
      (s === Ot || s === Ge ? this.subscribeTargets(t) : s === pi && this.unsubscribeTargets(t),
      e.fire('layout:before', { context: t }),
      i && i.fire('object:layout:before', { target: e, context: t }),
      s === Ne && t.deep)
    ) {
      const r = j(t, ja)
      e.forEachObject(
        n => n.layoutManager && n.layoutManager.performLayout(p(p({}, r), {}, { bubbles: !1, target: n }))
      )
    }
  }
  getLayoutResult(t) {
    const { target: e, strategy: s, type: i } = t,
      r = s.calcLayoutResult(t, e.getObjects())
    if (!r) return
    const n = i === Ot ? new _() : e.getRelativeCenterPoint(),
      { center: a, correction: h = new _(), relativeCorrection: l = new _() } = r,
      c = n
        .subtract(a)
        .add(h)
        .transform(i === Ot ? et : pt(e.calcOwnMatrix()), !0)
        .add(l)
    return { result: r, prevCenter: n, nextCenter: a, offset: c }
  }
  commitLayout(t, e) {
    const { target: s } = t,
      {
        result: { size: i },
        nextCenter: r,
      } = e
    if ((s.set({ width: i.x, height: i.y }), this.layoutObjects(t, e), t.type === Ot)) {
      var n, a
      s.set({
        left: (n = t.x) !== null && n !== void 0 ? n : r.x + i.x * z(s.originX),
        top: (a = t.y) !== null && a !== void 0 ? a : r.y + i.y * z(s.originY),
      })
    } else s.setPositionByOrigin(r, k, k), s.setCoords(), s.set('dirty', !0)
  }
  layoutObjects(t, e) {
    const { target: s } = t
    s.forEachObject(i => {
      i.group === s && this.layoutObject(t, e, i)
    }),
      t.strategy.shouldLayoutClipPath(t) && this.layoutObject(t, e, s.clipPath)
  }
  layoutObject(t, e, s) {
    let { offset: i } = e
    s.set({ left: s.left + i.x, top: s.top + i.y })
  }
  onAfterLayout(t, e) {
    const { target: s, strategy: i, bubbles: r, prevStrategy: n } = t,
      a = j(t, Ra),
      { canvas: h } = s
    s.fire('layout:after', { context: t, result: e }),
      h && h.fire('object:layout:after', { context: t, result: e, target: s })
    const l = s.parent
    r &&
      l !== null &&
      l !== void 0 &&
      l.layoutManager &&
      ((a.path || (a.path = [])).push(s), l.layoutManager.performLayout(p(p({}, a), {}, { target: l }))),
      s.set('dirty', !0)
  }
  dispose() {
    const { _subscriptions: t } = this
    t.forEach(e => e.forEach(s => s())), t.clear()
  }
  toObject() {
    return { type: Vr, strategy: this.strategy.constructor.type }
  }
  toJSON() {
    return this.toObject()
  }
}
x.setClass(be, Vr)
const Ba = ['type', 'objects', 'layoutManager']
class Ia extends be {
  performLayout() {}
}
const Va = { strokeWidth: 0, subTargetCheck: !1, interactive: !1 }
class Kt extends hr($) {
  static getDefaults() {
    return p(p({}, super.getDefaults()), Kt.ownDefaults)
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      g(this, '_activeObjects', []),
      g(this, '__objectSelectionTracker', void 0),
      g(this, '__objectSelectionDisposer', void 0),
      Object.assign(this, Kt.ownDefaults),
      this.setOptions(e),
      this.groupInit(t, e)
  }
  groupInit(t, e) {
    var s
    ;(this._objects = [...t]),
      (this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, !0)),
      (this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, !1)),
      this.forEachObject(i => {
        this.enterGroup(i, !1)
      }),
      (this.layoutManager = (s = e.layoutManager) !== null && s !== void 0 ? s : new be()),
      this.layoutManager.performLayout({ type: Ot, target: this, targets: [...t], x: e.left, y: e.top })
  }
  canEnterGroup(t) {
    return t === this || this.isDescendantOf(t)
      ? (Bt('error', 'Group: circular object trees are not supported, this call has no effect'), !1)
      : this._objects.indexOf(t) !== -1
      ? (Bt('error', 'Group: duplicate objects are not supported inside group, this call has no effect'), !1)
      : !0
  }
  _filterObjectsBeforeEnteringGroup(t) {
    return t.filter((e, s, i) => this.canEnterGroup(e) && i.indexOf(e) === s)
  }
  add() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s]
    const i = this._filterObjectsBeforeEnteringGroup(e),
      r = super.add(...i)
    return this._onAfterObjectsChange(Ge, i), r
  }
  insertAt(t) {
    for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) s[i - 1] = arguments[i]
    const r = this._filterObjectsBeforeEnteringGroup(s),
      n = super.insertAt(t, ...r)
    return this._onAfterObjectsChange(Ge, r), n
  }
  remove() {
    const t = super.remove(...arguments)
    return this._onAfterObjectsChange(pi, t), t
  }
  _onObjectAdded(t) {
    this.enterGroup(t, !0), this.fire('object:added', { target: t }), t.fire('added', { target: this })
  }
  _onObjectRemoved(t, e) {
    this.exitGroup(t, e), this.fire('object:removed', { target: t }), t.fire('removed', { target: this })
  }
  _onAfterObjectsChange(t, e) {
    this.layoutManager.performLayout({ type: t, targets: e, target: this })
  }
  _onStackOrderChanged() {
    this._set('dirty', !0)
  }
  _set(t, e) {
    const s = this[t]
    return (
      super._set(t, e),
      t === 'canvas' &&
        s !== e &&
        (this._objects || []).forEach(i => {
          i._set(t, e)
        }),
      this
    )
  }
  _shouldSetNestedCoords() {
    return this.subTargetCheck
  }
  removeAll() {
    return (this._activeObjects = []), this.remove(...this._objects)
  }
  __objectSelectionMonitor(t, e) {
    let { target: s } = e
    const i = this._activeObjects
    if (t) i.push(s), this._set('dirty', !0)
    else if (i.length > 0) {
      const r = i.indexOf(s)
      r > -1 && (i.splice(r, 1), this._set('dirty', !0))
    }
  }
  _watchObject(t, e) {
    t && this._watchObject(!1, e),
      t
        ? (e.on('selected', this.__objectSelectionTracker), e.on('deselected', this.__objectSelectionDisposer))
        : (e.off('selected', this.__objectSelectionTracker), e.off('deselected', this.__objectSelectionDisposer))
  }
  enterGroup(t, e) {
    t.group && t.group.remove(t), t._set('parent', this), this._enterGroup(t, e)
  }
  _enterGroup(t, e) {
    e && ze(t, q(pt(this.calcTransformMatrix()), t.calcTransformMatrix())),
      this._shouldSetNestedCoords() && t.setCoords(),
      t._set('group', this),
      t._set('canvas', this.canvas),
      this._watchObject(!0, t)
    const s = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject()
    s && (s === t || t.isDescendantOf(s)) && this._activeObjects.push(t)
  }
  exitGroup(t, e) {
    this._exitGroup(t, e), t._set('parent', void 0), t._set('canvas', void 0)
  }
  _exitGroup(t, e) {
    t._set('group', void 0),
      e || (ze(t, q(this.calcTransformMatrix(), t.calcTransformMatrix())), t.setCoords()),
      this._watchObject(!1, t)
    const s = this._activeObjects.length > 0 ? this._activeObjects.indexOf(t) : -1
    s > -1 && this._activeObjects.splice(s, 1)
  }
  shouldCache() {
    const t = $.prototype.shouldCache.call(this)
    if (t) {
      for (let e = 0; e < this._objects.length; e++)
        if (this._objects[e].willDrawShadow()) return (this.ownCaching = !1), !1
    }
    return t
  }
  willDrawShadow() {
    if (super.willDrawShadow()) return !0
    for (let t = 0; t < this._objects.length; t++) if (this._objects[t].willDrawShadow()) return !0
    return !1
  }
  isOnACache() {
    return this.ownCaching || (!!this.parent && this.parent.isOnACache())
  }
  drawObject(t) {
    this._renderBackground(t)
    for (let s = 0; s < this._objects.length; s++) {
      var e
      ;(e = this.canvas) !== null && e !== void 0 && e.preserveObjectStacking && this._objects[s].group !== this
        ? (t.save(), t.transform(...pt(this.calcTransformMatrix())), this._objects[s].render(t), t.restore())
        : this._objects[s].group === this && this._objects[s].render(t)
    }
    this._drawClipPath(t, this.clipPath)
  }
  setCoords() {
    super.setCoords(), this._shouldSetNestedCoords() && this.forEachObject(t => t.setCoords())
  }
  triggerLayout() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    this.layoutManager.performLayout(p({ target: this, type: Ne }, t))
  }
  render(t) {
    ;(this._transformDone = !0), super.render(t), (this._transformDone = !1)
  }
  __serializeObjects(t, e) {
    const s = this.includeDefaultValues
    return this._objects
      .filter(function (i) {
        return !i.excludeFromExport
      })
      .map(function (i) {
        const r = i.includeDefaultValues
        i.includeDefaultValues = s
        const n = i[t || 'toObject'](e)
        return (i.includeDefaultValues = r), n
      })
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    const e = this.layoutManager.toObject()
    return p(
      p(
        p({}, super.toObject(['subTargetCheck', 'interactive', ...t])),
        e.strategy !== 'fit-content' || this.includeDefaultValues ? { layoutManager: e } : {}
      ),
      {},
      { objects: this.__serializeObjects('toObject', t) }
    )
  }
  toString() {
    return '#<Group: ('.concat(this.complexity(), ')>')
  }
  dispose() {
    this.layoutManager.unsubscribeTargets({ targets: this.getObjects(), target: this }),
      (this._activeObjects = []),
      this.forEachObject(t => {
        this._watchObject(!1, t), t.dispose()
      }),
      super.dispose()
  }
  _createSVGBgRect(t) {
    if (!this.backgroundColor) return ''
    const e = _t.prototype._toSVG.call(this),
      s = e.indexOf('COMMON_PARTS')
    e[s] = 'for="group" '
    const i = e.join('')
    return t ? t(i) : i
  }
  _toSVG(t) {
    const e = [
        '<g ',
        'COMMON_PARTS',
        ` >
`,
      ],
      s = this._createSVGBgRect(t)
    s && e.push('		', s)
    for (let i = 0; i < this._objects.length; i++) e.push('		', this._objects[i].toSVG(t))
    return (
      e.push(`</g>
`),
      e
    )
  }
  getSvgStyles() {
    const t = typeof this.opacity < 'u' && this.opacity !== 1 ? 'opacity: '.concat(this.opacity, ';') : '',
      e = this.visible ? '' : ' visibility: hidden;'
    return [t, this.getSvgFilter(), e].join('')
  }
  toClipPathSVG(t) {
    const e = [],
      s = this._createSVGBgRect(t)
    s && e.push('	', s)
    for (let i = 0; i < this._objects.length; i++) e.push('	', this._objects[i].toClipPathSVG(t))
    return this._createBaseClipPathSVGMarkup(e, { reviver: t })
  }
  static fromObject(t, e) {
    let { type: s, objects: i = [], layoutManager: r } = t,
      n = j(t, Ba)
    return Promise.all([Se(i, e), rs(n, e)]).then(a => {
      let [h, l] = a
      const c = new this(h, p(p(p({}, n), l), {}, { layoutManager: new Ia() }))
      if (r) {
        const u = x.getClass(r.type),
          d = x.getClass(r.strategy)
        c.layoutManager = new u(new d())
      } else c.layoutManager = new be()
      return c.layoutManager.subscribeTargets({ type: Ot, target: c, targets: c.getObjects() }), c.setCoords(), c
    })
  }
}
g(Kt, 'type', 'Group')
g(Kt, 'ownDefaults', Va)
x.setClass(Kt)
const Ya = (o, t) => Math.min(t.width / o.width, t.height / o.height),
  Wa = (o, t) => Math.max(t.width / o.width, t.height / o.height),
  Ks = '\\s*,?\\s*',
  ge = ''.concat(Ks, '(').concat(Ut, ')'),
  Xa = ''.concat(ge).concat(ge).concat(ge).concat(Ks, '([01])').concat(Ks, '([01])').concat(ge).concat(ge),
  za = '[mzlhvcsqta][^mzlhvcsqta]*',
  Ha = { m: 'l', M: 'L' },
  Ga = (o, t, e, s, i, r, n, a, h, l, c) => {
    const u = kt(o),
      d = Mt(o),
      f = kt(t),
      m = Mt(t),
      y = e * i * f - s * r * m + n,
      v = s * i * f + e * r * m + a,
      C = l + h * (-e * i * d - s * r * u),
      S = c + h * (-s * i * d + e * r * u),
      w = y + h * (e * i * m + s * r * f),
      T = v + h * (s * i * m - e * r * f)
    return ['C', C, S, w, T, y, v]
  },
  Na = (o, t, e, s, i, r, n) => {
    if (e === 0 || s === 0) return []
    let a = 0,
      h = 0,
      l = 0
    const c = Math.PI,
      u = n * Zs,
      d = Mt(u),
      f = kt(u),
      m = 0.5 * (-f * o - d * t),
      y = 0.5 * (-f * t + d * o),
      v = e ** 2,
      C = s ** 2,
      S = y ** 2,
      w = m ** 2,
      T = v * C - v * S - C * w
    let b = Math.abs(e),
      O = Math.abs(s)
    if (T < 0) {
      const Ct = Math.sqrt(1 - T / (v * C))
      ;(b *= Ct), (O *= Ct)
    } else l = (i === r ? -1 : 1) * Math.sqrt(T / (v * S + C * w))
    const M = (l * b * y) / O,
      D = (-l * O * m) / b,
      F = f * M - d * D + o * 0.5,
      V = d * M + f * D + t * 0.5
    let J = Zi(1, 0, (m - M) / b, (y - D) / O),
      U = Zi((m - M) / b, (y - D) / O, (-m - M) / b, (-y - D) / O)
    r === 0 && U > 0 ? (U -= 2 * c) : r === 1 && U < 0 && (U += 2 * c)
    const K = Math.ceil(Math.abs((U / c) * 2)),
      L = [],
      Y = U / K,
      vt = ((8 / 3) * Math.sin(Y / 4) * Math.sin(Y / 4)) / Math.sin(Y / 2)
    let fe = J + Y
    for (let Ct = 0; Ct < K; Ct++)
      (L[Ct] = Ga(J, fe, f, d, b, O, F, V, vt, a, h)), (a = L[Ct][5]), (h = L[Ct][6]), (J = fe), (fe += Y)
    return L
  },
  Zi = (o, t, e, s) => {
    const i = Math.atan2(t, o),
      r = Math.atan2(s, e)
    return r >= i ? r - i : 2 * Math.PI - (i - r)
  },
  Ua = o => o ** 3,
  Ka = o => 3 * o ** 2 * (1 - o),
  qa = o => 3 * o * (1 - o) ** 2,
  $a = o => (1 - o) ** 3
function Qi(o, t, e, s, i, r, n, a) {
  let h
  if (E.cachesBoundsOfCurve && ((h = [...arguments].join()), me.boundsOfCurveCache[h])) return me.boundsOfCurveCache[h]
  const l = Math.sqrt,
    c = Math.abs,
    u = [],
    d = [
      [0, 0],
      [0, 0],
    ]
  let f = 6 * o - 12 * e + 6 * i,
    m = -3 * o + 9 * e - 9 * i + 3 * n,
    y = 3 * e - 3 * o
  for (let T = 0; T < 2; ++T) {
    if (
      (T > 0 && ((f = 6 * t - 12 * s + 6 * r), (m = -3 * t + 9 * s - 9 * r + 3 * a), (y = 3 * s - 3 * t)), c(m) < 1e-12)
    ) {
      if (c(f) < 1e-12) continue
      const F = -y / f
      0 < F && F < 1 && u.push(F)
      continue
    }
    const b = f * f - 4 * y * m
    if (b < 0) continue
    const O = l(b),
      M = (-f + O) / (2 * m)
    0 < M && M < 1 && u.push(M)
    const D = (-f - O) / (2 * m)
    0 < D && D < 1 && u.push(D)
  }
  let v = u.length
  const C = v,
    S = Yr(o, t, e, s, i, r, n, a)
  for (; v--; ) {
    const { x: T, y: b } = S(u[v])
    ;(d[0][v] = T), (d[1][v] = b)
  }
  ;(d[0][C] = o), (d[1][C] = t), (d[0][C + 1] = n), (d[1][C + 1] = a)
  const w = [new _(Math.min(...d[0]), Math.min(...d[1])), new _(Math.max(...d[0]), Math.max(...d[1]))]
  return E.cachesBoundsOfCurve && (me.boundsOfCurveCache[h] = w), w
}
const Ja = (o, t, e) => {
    let [s, i, r, n, a, h, l, c] = e
    const u = Na(l - o, c - t, i, r, a, h, n)
    for (let d = 0, f = u.length; d < f; d++)
      (u[d][1] += o), (u[d][2] += t), (u[d][3] += o), (u[d][4] += t), (u[d][5] += o), (u[d][6] += t)
    return u
  },
  Za = o => {
    let t = 0,
      e = 0,
      s = 0,
      i = 0
    const r = []
    let n,
      a = 0,
      h = 0
    for (const l of o) {
      const c = [...l]
      let u
      switch (c[0]) {
        case 'l':
          ;(c[1] += t), (c[2] += e)
        case 'L':
          ;(t = c[1]), (e = c[2]), (u = ['L', t, e])
          break
        case 'h':
          c[1] += t
        case 'H':
          ;(t = c[1]), (u = ['L', t, e])
          break
        case 'v':
          c[1] += e
        case 'V':
          ;(e = c[1]), (u = ['L', t, e])
          break
        case 'm':
          ;(c[1] += t), (c[2] += e)
        case 'M':
          ;(t = c[1]), (e = c[2]), (s = c[1]), (i = c[2]), (u = ['M', t, e])
          break
        case 'c':
          ;(c[1] += t), (c[2] += e), (c[3] += t), (c[4] += e), (c[5] += t), (c[6] += e)
        case 'C':
          ;(a = c[3]), (h = c[4]), (t = c[5]), (e = c[6]), (u = ['C', c[1], c[2], a, h, t, e])
          break
        case 's':
          ;(c[1] += t), (c[2] += e), (c[3] += t), (c[4] += e)
        case 'S':
          n === 'C' ? ((a = 2 * t - a), (h = 2 * e - h)) : ((a = t), (h = e)),
            (t = c[3]),
            (e = c[4]),
            (u = ['C', a, h, c[1], c[2], t, e]),
            (a = u[3]),
            (h = u[4])
          break
        case 'q':
          ;(c[1] += t), (c[2] += e), (c[3] += t), (c[4] += e)
        case 'Q':
          ;(a = c[1]), (h = c[2]), (t = c[3]), (e = c[4]), (u = ['Q', a, h, t, e])
          break
        case 't':
          ;(c[1] += t), (c[2] += e)
        case 'T':
          n === 'Q' ? ((a = 2 * t - a), (h = 2 * e - h)) : ((a = t), (h = e)),
            (t = c[1]),
            (e = c[2]),
            (u = ['Q', a, h, t, e])
          break
        case 'a':
          ;(c[6] += t), (c[7] += e)
        case 'A':
          Ja(t, e, c).forEach(d => r.push(d)), (t = c[6]), (e = c[7])
          break
        case 'z':
        case 'Z':
          ;(t = s), (e = i), (u = ['Z'])
          break
      }
      u ? (r.push(u), (n = u[0])) : (n = '')
    }
    return r
  },
  Ue = (o, t, e, s) => Math.sqrt((e - o) ** 2 + (s - t) ** 2),
  Yr = (o, t, e, s, i, r, n, a) => h => {
    const l = Ua(h),
      c = Ka(h),
      u = qa(h),
      d = $a(h)
    return new _(n * l + i * c + e * u + o * d, a * l + r * c + s * u + t * d)
  },
  Wr = o => o ** 2,
  Xr = o => 2 * o * (1 - o),
  zr = o => (1 - o) ** 2,
  Qa = (o, t, e, s, i, r, n, a) => h => {
    const l = Wr(h),
      c = Xr(h),
      u = zr(h),
      d = 3 * (u * (e - o) + c * (i - e) + l * (n - i)),
      f = 3 * (u * (s - t) + c * (r - s) + l * (a - r))
    return Math.atan2(f, d)
  },
  th = (o, t, e, s, i, r) => n => {
    const a = Wr(n),
      h = Xr(n),
      l = zr(n)
    return new _(i * a + e * h + o * l, r * a + s * h + t * l)
  },
  eh = (o, t, e, s, i, r) => n => {
    const a = 1 - n,
      h = 2 * (a * (e - o) + n * (i - e)),
      l = 2 * (a * (s - t) + n * (r - s))
    return Math.atan2(l, h)
  },
  tr = (o, t, e) => {
    let s = new _(t, e),
      i = 0
    for (let r = 1; r <= 100; r += 1) {
      const n = o(r / 100)
      ;(i += Ue(s.x, s.y, n.x, n.y)), (s = n)
    }
    return i
  },
  er = (o, t) => {
    let e = 0,
      s = 0,
      i = { x: o.x, y: o.y },
      r = p({}, i),
      n,
      a = 0.01,
      h = 0
    const l = o.iterator,
      c = o.angleFinder
    for (; s < t && a > 1e-4; )
      (r = l(e)),
        (h = e),
        (n = Ue(i.x, i.y, r.x, r.y)),
        n + s > t ? ((e -= a), (a /= 2)) : ((i = r), (e += a), (s += n))
    return p(p({}, r), {}, { angle: c(h) })
  },
  Hr = o => {
    let t = 0,
      e = 0,
      s = 0,
      i = 0,
      r = 0,
      n,
      a
    const h = []
    for (const l of o) {
      const c = { x: e, y: s, command: l[0], length: 0 }
      switch (l[0]) {
        case 'M':
          ;(a = c), (a.x = i = e = l[1]), (a.y = r = s = l[2])
          break
        case 'L':
          ;(a = c), (a.length = Ue(e, s, l[1], l[2])), (e = l[1]), (s = l[2])
          break
        case 'C':
          ;(n = Yr(e, s, l[1], l[2], l[3], l[4], l[5], l[6])),
            (a = c),
            (a.iterator = n),
            (a.angleFinder = Qa(e, s, l[1], l[2], l[3], l[4], l[5], l[6])),
            (a.length = tr(n, e, s)),
            (e = l[5]),
            (s = l[6])
          break
        case 'Q':
          ;(n = th(e, s, l[1], l[2], l[3], l[4])),
            (a = c),
            (a.iterator = n),
            (a.angleFinder = eh(e, s, l[1], l[2], l[3], l[4])),
            (a.length = tr(n, e, s)),
            (e = l[3]),
            (s = l[4])
          break
        case 'Z':
          ;(a = c), (a.destX = i), (a.destY = r), (a.length = Ue(e, s, i, r)), (e = i), (s = r)
          break
      }
      ;(t += a.length), h.push(a)
    }
    return h.push({ length: t, x: e, y: s }), h
  },
  sh = function (o, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hr(o),
      s = 0
    for (; t - e[s].length > 0 && s < e.length - 2; ) (t -= e[s].length), s++
    const i = e[s],
      r = t / i.length,
      n = o[s]
    switch (i.command) {
      case 'M':
        return { x: i.x, y: i.y, angle: 0 }
      case 'Z':
        return p(
          p({}, new _(i.x, i.y).lerp(new _(i.destX, i.destY), r)),
          {},
          { angle: Math.atan2(i.destY - i.y, i.destX - i.x) }
        )
      case 'L':
        return p(p({}, new _(i.x, i.y).lerp(new _(n[1], n[2]), r)), {}, { angle: Math.atan2(n[2] - i.y, n[1] - i.x) })
      case 'C':
        return er(i, t)
      case 'Q':
        return er(i, t)
    }
  },
  ih = new RegExp(za, 'gi'),
  sr = new RegExp(Xa, 'g'),
  rh = new RegExp(Ut, 'gi'),
  nh = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 },
  oh = o => {
    var t
    const e = [],
      s = (t = o.match(ih)) !== null && t !== void 0 ? t : []
    for (const i of s) {
      const r = i[0]
      if (r === 'z' || r === 'Z') {
        e.push([r])
        continue
      }
      const n = nh[r.toLowerCase()]
      let a = []
      if (r === 'a' || r === 'A') {
        sr.lastIndex = 0
        for (let h = null; (h = sr.exec(i)); ) a.push(...h.slice(1))
      } else a = i.match(rh) || []
      for (let h = 0; h < a.length; h += n) {
        const l = new Array(n),
          c = Ha[r]
        l[0] = h > 0 && c ? c : r
        for (let u = 0; u < n; u++) l[u + 1] = parseFloat(a[h + u])
        e.push(l)
      }
    }
    return e
  },
  ah = function (o) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      e = new _(o[0]),
      s = new _(o[1]),
      i = 1,
      r = 0
    const n = [],
      a = o.length,
      h = a > 2
    h && ((i = o[2].x < s.x ? -1 : o[2].x === s.x ? 0 : 1), (r = o[2].y < s.y ? -1 : o[2].y === s.y ? 0 : 1)),
      n.push(['M', e.x - i * t, e.y - r * t])
    let l
    for (l = 1; l < a; l++) {
      if (!e.eq(s)) {
        const c = e.midPointFrom(s)
        n.push(['Q', e.x, e.y, c.x, c.y])
      }
      ;(e = o[l]), l + 1 < o.length && (s = o[l + 1])
    }
    return (
      h &&
        ((i = e.x > o[l - 2].x ? 1 : e.x === o[l - 2].x ? 0 : -1),
        (r = e.y > o[l - 2].y ? 1 : e.y === o[l - 2].y ? 0 : -1)),
      n.push(['L', e.x + i * t, e.y + r * t]),
      n
    )
  },
  Gr = (o, t) => o.map(e => e.map((s, i) => (i === 0 || t === void 0 ? s : B(s, t))).join(' ')).join(' ')
function qs(o, t) {
  const e = o.style
  !e ||
    !t ||
    (typeof t == 'string'
      ? (e.cssText += ';' + t)
      : Object.entries(t).forEach(s => {
          let [i, r] = s
          return e.setProperty(i, r)
        }))
}
class hh extends vr {
  constructor(t) {
    let { allowTouchScrolling: e = !1, containerClass: s = '' } =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(t), g(this, 'upper', void 0), g(this, 'container', void 0)
    const { el: i } = this.lower,
      r = this.createUpperCanvas()
    ;(this.upper = { el: r, ctx: r.getContext('2d') }),
      this.applyCanvasStyle(i, { allowTouchScrolling: e }),
      this.applyCanvasStyle(r, { allowTouchScrolling: e, styles: { position: 'absolute', left: '0', top: '0' } })
    const n = this.createContainerElement()
    n.classList.add(s), i.parentNode && i.parentNode.replaceChild(n, i), n.append(i, r), (this.container = n)
  }
  createUpperCanvas() {
    const { el: t } = this.lower,
      e = G()
    return (
      (e.className = t.className),
      e.classList.remove('lower-canvas'),
      e.classList.add('upper-canvas'),
      e.setAttribute('data-fabric', 'top'),
      (e.style.cssText = t.style.cssText),
      e.setAttribute('draggable', 'true'),
      e
    )
  }
  createContainerElement() {
    const t = oe().createElement('div')
    return t.setAttribute('data-fabric', 'wrapper'), qs(t, { position: 'relative' }), Li(t), t
  }
  applyCanvasStyle(t, e) {
    const { styles: s, allowTouchScrolling: i } = e
    qs(t, p(p({}, s), {}, { 'touch-action': i ? 'manipulation' : rt })), Li(t)
  }
  setDimensions(t, e) {
    super.setDimensions(t, e)
    const { el: s, ctx: i } = this.upper
    yr(s, i, t, e)
  }
  setCSSDimensions(t) {
    super.setCSSDimensions(t), Ys(this.upper.el, t), Ys(this.container, t)
  }
  cleanupDOM(t) {
    const e = this.container,
      { el: s } = this.lower,
      { el: i } = this.upper
    super.cleanupDOM(t), e.removeChild(i), e.removeChild(s), e.parentNode && e.parentNode.replaceChild(s, e)
  }
  dispose() {
    super.dispose(), bt().dispose(this.upper.el), delete this.upper, delete this.container
  }
}
const lh = {
  uniformScaling: !0,
  uniScaleKey: 'shiftKey',
  centeredScaling: !1,
  centeredRotation: !1,
  centeredKey: 'altKey',
  altActionKey: 'shiftKey',
  selection: !0,
  selectionKey: 'shiftKey',
  selectionColor: 'rgba(100, 100, 255, 0.3)',
  selectionDashArray: [],
  selectionBorderColor: 'rgba(255, 255, 255, 0.3)',
  selectionLineWidth: 1,
  selectionFullyContained: !1,
  hoverCursor: 'move',
  moveCursor: 'move',
  defaultCursor: 'default',
  freeDrawingCursor: 'crosshair',
  notAllowedCursor: 'not-allowed',
  perPixelTargetFind: !1,
  targetFindTolerance: 0,
  skipTargetFind: !1,
  stopContextMenu: !1,
  fireRightClick: !1,
  fireMiddleClick: !1,
  enablePointerEvents: !1,
  containerClass: 'canvas-container',
  preserveObjectStacking: !1,
}
class ls extends ke {
  constructor() {
    super(...arguments),
      g(this, 'targets', []),
      g(this, '_hoveredTargets', []),
      g(this, '_objectsToRender', void 0),
      g(this, '_currentTransform', null),
      g(this, '_groupSelector', null),
      g(this, 'contextTopDirty', !1)
  }
  static getDefaults() {
    return p(p({}, super.getDefaults()), ls.ownDefaults)
  }
  get upperCanvasEl() {
    var t
    return (t = this.elements.upper) === null || t === void 0 ? void 0 : t.el
  }
  get contextTop() {
    var t
    return (t = this.elements.upper) === null || t === void 0 ? void 0 : t.ctx
  }
  get wrapperEl() {
    return this.elements.container
  }
  initElements(t) {
    ;(this.elements = new hh(t, {
      allowTouchScrolling: this.allowTouchScrolling,
      containerClass: this.containerClass,
    })),
      this._createCacheCanvas()
  }
  _onObjectAdded(t) {
    ;(this._objectsToRender = void 0), super._onObjectAdded(t)
  }
  _onObjectRemoved(t) {
    ;(this._objectsToRender = void 0),
      t === this._activeObject &&
        (this.fire('before:selection:cleared', { deselected: [t] }),
        this._discardActiveObject(),
        this.fire('selection:cleared', { deselected: [t] }),
        t.fire('deselected', { target: t })),
      t === this._hoveredTarget && ((this._hoveredTarget = void 0), (this._hoveredTargets = [])),
      super._onObjectRemoved(t)
  }
  _onStackOrderChanged() {
    ;(this._objectsToRender = void 0), super._onStackOrderChanged()
  }
  _chooseObjectsToRender() {
    const t = this._activeObject
    return !this.preserveObjectStacking && t ? this._objects.filter(e => !e.group && e !== t).concat(t) : this._objects
  }
  renderAll() {
    this.cancelRequestedRender(),
      !this.destroyed &&
        (this.contextTopDirty &&
          !this._groupSelector &&
          !this.isDrawingMode &&
          (this.clearContext(this.contextTop), (this.contextTopDirty = !1)),
        this.hasLostContext && (this.renderTopLayer(this.contextTop), (this.hasLostContext = !1)),
        !this._objectsToRender && (this._objectsToRender = this._chooseObjectsToRender()),
        this.renderCanvas(this.getContext(), this._objectsToRender))
  }
  renderTopLayer(t) {
    t.save(),
      this.isDrawingMode &&
        this._isCurrentlyDrawing &&
        (this.freeDrawingBrush && this.freeDrawingBrush._render(), (this.contextTopDirty = !0)),
      this.selection && this._groupSelector && (this._drawSelection(t), (this.contextTopDirty = !0)),
      t.restore()
  }
  renderTop() {
    const t = this.contextTop
    this.clearContext(t), this.renderTopLayer(t), this.fire('after:render', { ctx: t })
  }
  setTargetFindTolerance(t) {
    ;(t = Math.round(t)), (this.targetFindTolerance = t)
    const e = this.getRetinaScaling(),
      s = Math.ceil((t * 2 + 1) * e)
    ;(this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = s), this.pixelFindContext.scale(e, e)
  }
  isTargetTransparent(t, e, s) {
    const i = this.targetFindTolerance,
      r = this.pixelFindContext
    this.clearContext(r), r.save(), r.translate(-e + i, -s + i), r.transform(...this.viewportTransform)
    const n = t.selectionBackgroundColor
    ;(t.selectionBackgroundColor = ''), t.render(r), (t.selectionBackgroundColor = n), r.restore()
    const a = Math.round(i * this.getRetinaScaling())
    return Qo(r, a, a, a)
  }
  _isSelectionKeyPressed(t) {
    const e = this.selectionKey
    return e ? (Array.isArray(e) ? !!e.find(s => !!s && t[s] === !0) : t[e]) : !1
  }
  _shouldClearSelection(t, e) {
    const s = this.getActiveObjects(),
      i = this._activeObject
    return !!(
      !e ||
      (e && i && s.length > 1 && s.indexOf(e) === -1 && i !== e && !this._isSelectionKeyPressed(t)) ||
      (e && !e.evented) ||
      (e && !e.selectable && i && i !== e)
    )
  }
  _shouldCenterTransform(t, e, s) {
    if (!t) return
    let i
    return (
      e === ss || e === nt || e === ut || e === Ce
        ? (i = this.centeredScaling || t.centeredScaling)
        : e === ei && (i = this.centeredRotation || t.centeredRotation),
      i ? !s : s
    )
  }
  _getOriginFromCorner(t, e) {
    const s = { x: t.originX, y: t.originY }
    return (
      e &&
        (['ml', 'tl', 'bl'].includes(e) ? (s.x = W) : ['mr', 'tr', 'br'].includes(e) && (s.x = A),
        ['tl', 'mt', 'tr'].includes(e) ? (s.y = Vs) : ['bl', 'mb', 'br'].includes(e) && (s.y = it)),
      s
    )
  }
  _setupCurrentTransform(t, e, s) {
    var i
    const r = e.group ? ie(this.getScenePoint(t), void 0, e.group.calcTransformMatrix()) : this.getScenePoint(t),
      { key: n = '', control: a } = e.getActiveControl() || {},
      h = s && a ? ((i = a.getActionHandler(t, e, a)) === null || i === void 0 ? void 0 : i.bind(a)) : ro,
      l = so(s, n, t, e),
      c = t[this.centeredKey],
      u = this._shouldCenterTransform(e, l, c) ? { x: k, y: k } : this._getOriginFromCorner(e, n),
      d = {
        target: e,
        action: l,
        actionHandler: h,
        actionPerformed: !1,
        corner: n,
        scaleX: e.scaleX,
        scaleY: e.scaleY,
        skewX: e.skewX,
        skewY: e.skewY,
        offsetX: r.x - e.left,
        offsetY: r.y - e.top,
        originX: u.x,
        originY: u.y,
        ex: r.x,
        ey: r.y,
        lastX: r.x,
        lastY: r.y,
        theta: X(e.angle),
        width: e.width,
        height: e.height,
        shiftKey: t.shiftKey,
        altKey: c,
        original: p(p({}, Cr(e)), {}, { originX: u.x, originY: u.y }),
      }
    ;(this._currentTransform = d), this.fire('before:transform', { e: t, transform: d })
  }
  setCursor(t) {
    this.upperCanvasEl.style.cursor = t
  }
  _drawSelection(t) {
    const { x: e, y: s, deltaX: i, deltaY: r } = this._groupSelector,
      n = new _(e, s).transform(this.viewportTransform),
      a = new _(e + i, s + r).transform(this.viewportTransform),
      h = this.selectionLineWidth / 2
    let l = Math.min(n.x, a.x),
      c = Math.min(n.y, a.y),
      u = Math.max(n.x, a.x),
      d = Math.max(n.y, a.y)
    this.selectionColor && ((t.fillStyle = this.selectionColor), t.fillRect(l, c, u - l, d - c)),
      !(!this.selectionLineWidth || !this.selectionBorderColor) &&
        ((t.lineWidth = this.selectionLineWidth),
        (t.strokeStyle = this.selectionBorderColor),
        (l += h),
        (c += h),
        (u -= h),
        (d -= h),
        $.prototype._setLineDash.call(this, t, this.selectionDashArray),
        t.strokeRect(l, c, u - l, d - c))
  }
  findTarget(t) {
    if (this.skipTargetFind) return
    const e = this.getViewportPoint(t),
      s = this._activeObject,
      i = this.getActiveObjects()
    if (((this.targets = []), s && i.length >= 1)) {
      if (s.findControl(e, Ws(t))) return s
      if (i.length > 1 && this.searchPossibleTargets([s], e)) return s
      if (s === this.searchPossibleTargets([s], e))
        if (this.preserveObjectStacking) {
          const r = this.targets
          this.targets = []
          const n = this.searchPossibleTargets(this._objects, e)
          return t[this.altSelectionKey] && n && n !== s ? ((this.targets = r), s) : n
        } else return s
    }
    return this.searchPossibleTargets(this._objects, e)
  }
  _pointIsInObjectSelectionArea(t, e) {
    let s = t.getCoords()
    const i = this.getZoom(),
      r = t.padding / i
    if (r) {
      const [n, a, h, l] = s,
        c = Math.atan2(a.y - n.y, a.x - n.x),
        u = kt(c) * r,
        d = Mt(c) * r,
        f = u + d,
        m = u - d
      s = [new _(n.x - m, n.y - f), new _(a.x + f, a.y - m), new _(h.x + m, h.y + f), new _(l.x - f, l.y + m)]
    }
    return R.isPointInPolygon(e, s)
  }
  _checkTarget(t, e) {
    if (t && t.visible && t.evented && this._pointIsInObjectSelectionArea(t, ie(e, void 0, this.viewportTransform)))
      if ((this.perPixelTargetFind || t.perPixelTargetFind) && !t.isEditing) {
        if (!this.isTargetTransparent(t, e.x, e.y)) return !0
      } else return !0
    return !1
  }
  _searchPossibleTargets(t, e) {
    let s = t.length
    for (; s--; ) {
      const i = t[s]
      if (this._checkTarget(i, e)) {
        if (Fe(i) && i.subTargetCheck) {
          const r = this._searchPossibleTargets(i._objects, e)
          r && this.targets.push(r)
        }
        return i
      }
    }
  }
  searchPossibleTargets(t, e) {
    const s = this._searchPossibleTargets(t, e)
    if (s && Fe(s) && s.interactive && this.targets[0]) {
      const i = this.targets
      for (let r = i.length - 1; r > 0; r--) {
        const n = i[r]
        if (!(Fe(n) && n.interactive)) return n
      }
      return i[0]
    }
    return s
  }
  getViewportPoint(t) {
    return this._pointer ? this._pointer : this.getPointer(t, !0)
  }
  getScenePoint(t) {
    return this._absolutePointer ? this._absolutePointer : this.getPointer(t)
  }
  getPointer(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    const s = this.upperCanvasEl,
      i = s.getBoundingClientRect()
    let r = qn(t),
      n = i.width || 0,
      a = i.height || 0
    ;(!n || !a) &&
      (it in i && Vs in i && (a = Math.abs(i.top - i.bottom)), W in i && A in i && (n = Math.abs(i.right - i.left))),
      this.calcOffset(),
      (r.x = r.x - this._offset.left),
      (r.y = r.y - this._offset.top),
      e || (r = ie(r, void 0, this.viewportTransform))
    const h = this.getRetinaScaling()
    h !== 1 && ((r.x /= h), (r.y /= h))
    const l = n === 0 || a === 0 ? new _(1, 1) : new _(s.width / n, s.height / a)
    return r.multiply(l)
  }
  _setDimensionsImpl(t, e) {
    this._resetTransformEventData(),
      super._setDimensionsImpl(t, e),
      this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop)
  }
  _createCacheCanvas() {
    ;(this.pixelFindCanvasEl = G()),
      (this.pixelFindContext = this.pixelFindCanvasEl.getContext('2d', { willReadFrequently: !0 })),
      this.setTargetFindTolerance(this.targetFindTolerance)
  }
  getTopContext() {
    return this.elements.upper.ctx
  }
  getSelectionContext() {
    return this.elements.upper.ctx
  }
  getSelectionElement() {
    return this.elements.upper.el
  }
  getActiveObject() {
    return this._activeObject
  }
  getActiveObjects() {
    const t = this._activeObject
    return Gt(t) ? t.getObjects() : t ? [t] : []
  }
  _fireSelectionEvents(t, e) {
    let s = !1,
      i = !1
    const r = this.getActiveObjects(),
      n = [],
      a = []
    t.forEach(h => {
      r.includes(h) || ((s = !0), h.fire('deselected', { e, target: h }), a.push(h))
    }),
      r.forEach(h => {
        t.includes(h) || ((s = !0), h.fire('selected', { e, target: h }), n.push(h))
      }),
      t.length > 0 && r.length > 0
        ? ((i = !0), s && this.fire('selection:updated', { e, selected: n, deselected: a }))
        : r.length > 0
        ? ((i = !0), this.fire('selection:created', { e, selected: n }))
        : t.length > 0 && ((i = !0), this.fire('selection:cleared', { e, deselected: a })),
      i && (this._objectsToRender = void 0)
  }
  setActiveObject(t, e) {
    const s = this.getActiveObjects(),
      i = this._setActiveObject(t, e)
    return this._fireSelectionEvents(s, e), i
  }
  _setActiveObject(t, e) {
    const s = this._activeObject
    return s === t || (!this._discardActiveObject(e, t) && this._activeObject) || t.onSelect({ e })
      ? !1
      : ((this._activeObject = t), Gt(t) && s !== t && t.set('canvas', this), t.setCoords(), !0)
  }
  _discardActiveObject(t, e) {
    const s = this._activeObject
    return s
      ? s.onDeselect({ e: t, object: e })
        ? !1
        : (this._currentTransform && this._currentTransform.target === s && this.endCurrentTransform(t),
          Gt(s) && s === this._hoveredTarget && (this._hoveredTarget = void 0),
          (this._activeObject = void 0),
          !0)
      : !1
  }
  discardActiveObject(t) {
    const e = this.getActiveObjects(),
      s = this.getActiveObject()
    e.length && this.fire('before:selection:cleared', { e: t, deselected: [s] })
    const i = this._discardActiveObject(t)
    return this._fireSelectionEvents(e, t), i
  }
  endCurrentTransform(t) {
    const e = this._currentTransform
    this._finalizeCurrentTransform(t), e && e.target && (e.target.isMoving = !1), (this._currentTransform = null)
  }
  _finalizeCurrentTransform(t) {
    const e = this._currentTransform,
      s = e.target,
      i = { e: t, target: s, transform: e, action: e.action }
    s._scaling && (s._scaling = !1),
      s.setCoords(),
      e.actionPerformed && (this.fire('object:modified', i), s.fire(Ve, i))
  }
  setViewportTransform(t) {
    super.setViewportTransform(t)
    const e = this._activeObject
    e && e.setCoords()
  }
  destroy() {
    const t = this._activeObject
    Gt(t) && (t.removeAll(), t.dispose()),
      delete this._activeObject,
      super.destroy(),
      (this.pixelFindContext = null),
      (this.pixelFindCanvasEl = void 0)
  }
  clear() {
    this.discardActiveObject(), (this._activeObject = void 0), this.clearContext(this.contextTop), super.clear()
  }
  drawControls(t) {
    const e = this._activeObject
    e && e._renderControls(t)
  }
  _toObject(t, e, s) {
    const i = this._realizeGroupTransformOnObject(t),
      r = super._toObject(t, e, s)
    return t.set(i), r
  }
  _realizeGroupTransformOnObject(t) {
    const { group: e } = t
    if (e && Gt(e) && this._activeObject === e) {
      const i = le(t, ['angle', 'flipX', 'flipY', A, nt, ut, ae, he, it])
      return Jn(t, e.calcOwnMatrix()), i
    } else return {}
  }
  _setSVGObject(t, e, s) {
    const i = this._realizeGroupTransformOnObject(e)
    super._setSVGObject(t, e, s), e.set(i)
  }
}
g(ls, 'ownDefaults', lh)
class ch {
  constructor(t) {
    g(this, 'targets', []), g(this, '__disposer', void 0)
    const e = () => {
        const { hiddenTextarea: i } = t.getActiveObject() || {}
        i && i.focus()
      },
      s = t.upperCanvasEl
    s.addEventListener('click', e), (this.__disposer = () => s.removeEventListener('click', e))
  }
  exitTextEditing() {
    ;(this.target = void 0),
      this.targets.forEach(t => {
        t.isEditing && t.exitEditing()
      })
  }
  add(t) {
    this.targets.push(t)
  }
  remove(t) {
    this.unregister(t), Qt(this.targets, t)
  }
  register(t) {
    this.target = t
  }
  unregister(t) {
    t === this.target && (this.target = void 0)
  }
  onMouseMove(t) {
    var e
    !((e = this.target) === null || e === void 0) && e.isEditing && this.target.updateSelectionOnMouseMove(t)
  }
  clear() {
    ;(this.targets = []), (this.target = void 0)
  }
  dispose() {
    this.clear(), this.__disposer(), delete this.__disposer
  }
}
const uh = ['target', 'oldTarget', 'fireCanvas', 'e'],
  ot = { passive: !1 },
  Zt = (o, t) => {
    const e = o.getViewportPoint(t),
      s = o.getScenePoint(t)
    return { viewportPoint: e, scenePoint: s, pointer: e, absolutePointer: s }
  },
  Rt = function (o) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) e[s - 1] = arguments[s]
    return o.addEventListener(...e)
  },
  lt = function (o) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) e[s - 1] = arguments[s]
    return o.removeEventListener(...e)
  },
  dh = {
    mouse: {
      in: 'over',
      out: 'out',
      targetIn: 'mouseover',
      targetOut: 'mouseout',
      canvasIn: 'mouse:over',
      canvasOut: 'mouse:out',
    },
    drag: {
      in: 'enter',
      out: 'leave',
      targetIn: 'dragenter',
      targetOut: 'dragleave',
      canvasIn: 'drag:enter',
      canvasOut: 'drag:leave',
    },
  }
class $s extends ls {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(t, e),
      g(this, '_isClick', void 0),
      g(this, 'textEditingManager', new ch(this)),
      [
        '_onMouseDown',
        '_onTouchStart',
        '_onMouseMove',
        '_onMouseUp',
        '_onTouchEnd',
        '_onResize',
        '_onMouseWheel',
        '_onMouseOut',
        '_onMouseEnter',
        '_onContextMenu',
        '_onDoubleClick',
        '_onDragStart',
        '_onDragEnd',
        '_onDragProgress',
        '_onDragOver',
        '_onDragEnter',
        '_onDragLeave',
        '_onDrop',
      ].forEach(s => {
        this[s] = this[s].bind(this)
      }),
      this.addOrRemove(Rt, 'add')
  }
  _getEventPrefix() {
    return this.enablePointerEvents ? 'pointer' : 'mouse'
  }
  addOrRemove(t, e) {
    const s = this.upperCanvasEl,
      i = this._getEventPrefix()
    t(_r(s), 'resize', this._onResize),
      t(s, i + 'down', this._onMouseDown),
      t(s, ''.concat(i, 'move'), this._onMouseMove, ot),
      t(s, ''.concat(i, 'out'), this._onMouseOut),
      t(s, ''.concat(i, 'enter'), this._onMouseEnter),
      t(s, 'wheel', this._onMouseWheel),
      t(s, 'contextmenu', this._onContextMenu),
      t(s, 'dblclick', this._onDoubleClick),
      t(s, 'dragstart', this._onDragStart),
      t(s, 'dragend', this._onDragEnd),
      t(s, 'dragover', this._onDragOver),
      t(s, 'dragenter', this._onDragEnter),
      t(s, 'dragleave', this._onDragLeave),
      t(s, 'drop', this._onDrop),
      this.enablePointerEvents || t(s, 'touchstart', this._onTouchStart, ot)
  }
  removeListeners() {
    this.addOrRemove(lt, 'remove')
    const t = this._getEventPrefix(),
      e = gt(this.upperCanvasEl)
    lt(e, ''.concat(t, 'up'), this._onMouseUp),
      lt(e, 'touchend', this._onTouchEnd, ot),
      lt(e, ''.concat(t, 'move'), this._onMouseMove, ot),
      lt(e, 'touchmove', this._onMouseMove, ot)
  }
  _onMouseWheel(t) {
    this.__onMouseWheel(t)
  }
  _onMouseOut(t) {
    const e = this._hoveredTarget,
      s = p({ e: t }, Zt(this, t))
    this.fire('mouse:out', p(p({}, s), {}, { target: e })),
      (this._hoveredTarget = void 0),
      e && e.fire('mouseout', p({}, s)),
      this._hoveredTargets.forEach(i => {
        this.fire('mouse:out', p(p({}, s), {}, { target: i })), i && i.fire('mouseout', p({}, s))
      }),
      (this._hoveredTargets = [])
  }
  _onMouseEnter(t) {
    !this._currentTransform &&
      !this.findTarget(t) &&
      (this.fire('mouse:over', p({ e: t }, Zt(this, t))), (this._hoveredTarget = void 0), (this._hoveredTargets = []))
  }
  _onDragStart(t) {
    this._isClick = !1
    const e = this.getActiveObject()
    if (e && e.onDragStart(t)) {
      this._dragSource = e
      const s = { e: t, target: e }
      this.fire('dragstart', s), e.fire('dragstart', s), Rt(this.upperCanvasEl, 'drag', this._onDragProgress)
      return
    }
    Xs(t)
  }
  _renderDragEffects(t, e, s) {
    let i = !1
    const r = this._dropTarget
    r && r !== e && r !== s && (r.clearContextTop(), (i = !0)),
      e == null || e.clearContextTop(),
      s !== e && (s == null || s.clearContextTop())
    const n = this.contextTop
    n.save(),
      n.transform(...this.viewportTransform),
      e && (n.save(), e.transform(n), e.renderDragSourceEffect(t), n.restore(), (i = !0)),
      s && (n.save(), s.transform(n), s.renderDropTargetEffect(t), n.restore(), (i = !0)),
      n.restore(),
      i && (this.contextTopDirty = !0)
  }
  _onDragEnd(t) {
    const e = !!t.dataTransfer && t.dataTransfer.dropEffect !== rt,
      s = e ? this._activeObject : void 0,
      i = {
        e: t,
        target: this._dragSource,
        subTargets: this.targets,
        dragSource: this._dragSource,
        didDrop: e,
        dropTarget: s,
      }
    lt(this.upperCanvasEl, 'drag', this._onDragProgress),
      this.fire('dragend', i),
      this._dragSource && this._dragSource.fire('dragend', i),
      delete this._dragSource,
      this._onMouseUp(t)
  }
  _onDragProgress(t) {
    const e = { e: t, target: this._dragSource, dragSource: this._dragSource, dropTarget: this._draggedoverTarget }
    this.fire('drag', e), this._dragSource && this._dragSource.fire('drag', e)
  }
  findDragTargets(t) {
    return (
      (this.targets = []),
      { target: this._searchPossibleTargets(this._objects, this.getViewportPoint(t)), targets: [...this.targets] }
    )
  }
  _onDragOver(t) {
    const e = 'dragover',
      { target: s, targets: i } = this.findDragTargets(t),
      r = this._dragSource,
      n = { e: t, target: s, subTargets: i, dragSource: r, canDrop: !1, dropTarget: void 0 }
    let a
    this.fire(e, n), this._fireEnterLeaveEvents(s, n), s && (s.canDrop(t) && (a = s), s.fire(e, n))
    for (let h = 0; h < i.length; h++) {
      const l = i[h]
      l.canDrop(t) && (a = l), l.fire(e, n)
    }
    this._renderDragEffects(t, r, a), (this._dropTarget = a)
  }
  _onDragEnter(t) {
    const { target: e, targets: s } = this.findDragTargets(t),
      i = { e: t, target: e, subTargets: s, dragSource: this._dragSource }
    this.fire('dragenter', i), this._fireEnterLeaveEvents(e, i)
  }
  _onDragLeave(t) {
    const e = { e: t, target: this._draggedoverTarget, subTargets: this.targets, dragSource: this._dragSource }
    this.fire('dragleave', e),
      this._fireEnterLeaveEvents(void 0, e),
      this._renderDragEffects(t, this._dragSource),
      (this._dropTarget = void 0),
      (this.targets = []),
      (this._hoveredTargets = [])
  }
  _onDrop(t) {
    const { target: e, targets: s } = this.findDragTargets(t),
      i = this._basicEventHandler(
        'drop:before',
        p({ e: t, target: e, subTargets: s, dragSource: this._dragSource }, Zt(this, t))
      )
    ;(i.didDrop = !1), (i.dropTarget = void 0), this._basicEventHandler('drop', i), this.fire('drop:after', i)
  }
  _onContextMenu(t) {
    const e = this.findTarget(t),
      s = this.targets || [],
      i = this._basicEventHandler('contextmenu:before', { e: t, target: e, subTargets: s })
    return this.stopContextMenu && Xs(t), this._basicEventHandler('contextmenu', i), !1
  }
  _onDoubleClick(t) {
    this._cacheTransformEventData(t), this._handleEvent(t, 'dblclick'), this._resetTransformEventData()
  }
  getPointerId(t) {
    const e = t.changedTouches
    return e ? e[0] && e[0].identifier : this.enablePointerEvents ? t.pointerId : -1
  }
  _isMainEvent(t) {
    return t.isPrimary === !0
      ? !0
      : t.isPrimary === !1
      ? !1
      : t.type === 'touchend' && t.touches.length === 0
      ? !0
      : t.changedTouches
      ? t.changedTouches[0].identifier === this.mainTouchId
      : !0
  }
  _onTouchStart(t) {
    t.preventDefault(),
      this.mainTouchId === void 0 && (this.mainTouchId = this.getPointerId(t)),
      this.__onMouseDown(t),
      this._resetTransformEventData()
    const e = this.upperCanvasEl,
      s = this._getEventPrefix(),
      i = gt(e)
    Rt(i, 'touchend', this._onTouchEnd, ot),
      Rt(i, 'touchmove', this._onMouseMove, ot),
      lt(e, ''.concat(s, 'down'), this._onMouseDown)
  }
  _onMouseDown(t) {
    this.__onMouseDown(t), this._resetTransformEventData()
    const e = this.upperCanvasEl,
      s = this._getEventPrefix()
    lt(e, ''.concat(s, 'move'), this._onMouseMove, ot)
    const i = gt(e)
    Rt(i, ''.concat(s, 'up'), this._onMouseUp), Rt(i, ''.concat(s, 'move'), this._onMouseMove, ot)
  }
  _onTouchEnd(t) {
    if (t.touches.length > 0) return
    this.__onMouseUp(t), this._resetTransformEventData(), delete this.mainTouchId
    const e = this._getEventPrefix(),
      s = gt(this.upperCanvasEl)
    lt(s, 'touchend', this._onTouchEnd, ot),
      lt(s, 'touchmove', this._onMouseMove, ot),
      this._willAddMouseDown && clearTimeout(this._willAddMouseDown),
      (this._willAddMouseDown = setTimeout(() => {
        Rt(this.upperCanvasEl, ''.concat(e, 'down'), this._onMouseDown), (this._willAddMouseDown = 0)
      }, 400))
  }
  _onMouseUp(t) {
    this.__onMouseUp(t), this._resetTransformEventData()
    const e = this.upperCanvasEl,
      s = this._getEventPrefix()
    if (this._isMainEvent(t)) {
      const i = gt(this.upperCanvasEl)
      lt(i, ''.concat(s, 'up'), this._onMouseUp),
        lt(i, ''.concat(s, 'move'), this._onMouseMove, ot),
        Rt(e, ''.concat(s, 'move'), this._onMouseMove, ot)
    }
  }
  _onMouseMove(t) {
    const e = this.getActiveObject()
    !this.allowTouchScrolling && (!e || !e.shouldStartDragging(t)) && t.preventDefault && t.preventDefault(),
      this.__onMouseMove(t)
  }
  _onResize() {
    this.calcOffset(), this._resetTransformEventData()
  }
  _shouldRender(t) {
    const e = this.getActiveObject()
    return !!e != !!t || (e && t && e !== t)
  }
  __onMouseUp(t) {
    var e
    this._cacheTransformEventData(t), this._handleEvent(t, 'up:before')
    const s = this._currentTransform,
      i = this._isClick,
      r = this._target,
      { button: n } = t
    if (n) {
      ;((this.fireMiddleClick && n === 1) || (this.fireRightClick && n === 2)) && this._handleEvent(t, 'up'),
        this._resetTransformEventData()
      return
    }
    if (this.isDrawingMode && this._isCurrentlyDrawing) {
      this._onMouseUpInDrawingMode(t)
      return
    }
    if (!this._isMainEvent(t)) return
    let a = !1
    if ((s && (this._finalizeCurrentTransform(t), (a = s.actionPerformed)), !i)) {
      const c = r === this._activeObject
      this.handleSelection(t), a || (a = this._shouldRender(r) || (!c && r === this._activeObject))
    }
    let h, l
    if (r) {
      const c = r.findControl(this.getViewportPoint(t), Ws(t)),
        { key: u, control: d } = c || {}
      if (((l = u), r.selectable && r !== this._activeObject && r.activeOn === 'up'))
        this.setActiveObject(r, t), (a = !0)
      else if (d) {
        const f = d.getMouseUpHandler(t, r, d)
        f && ((h = this.getScenePoint(t)), f.call(d, t, s, h.x, h.y))
      }
      r.isMoving = !1
    }
    if (s && (s.target !== r || s.corner !== l)) {
      const c = s.target && s.target.controls[s.corner],
        u = c && c.getMouseUpHandler(t, s.target, c)
      ;(h = h || this.getScenePoint(t)), u && u.call(c, t, s, h.x, h.y)
    }
    this._setCursorFromEvent(t, r),
      this._handleEvent(t, 'up'),
      (this._groupSelector = null),
      (this._currentTransform = null),
      r && (r.__corner = void 0),
      a
        ? this.requestRenderAll()
        : !i && !((e = this._activeObject) !== null && e !== void 0 && e.isEditing) && this.renderTop()
  }
  _basicEventHandler(t, e) {
    const { target: s, subTargets: i = [] } = e
    this.fire(t, e), s && s.fire(t, e)
    for (let r = 0; r < i.length; r++) i[r] !== s && i[r].fire(t, e)
    return e
  }
  _handleEvent(t, e) {
    const s = this._target,
      i = this.targets || [],
      r = p(
        p({ e: t, target: s, subTargets: i }, Zt(this, t)),
        {},
        { transform: this._currentTransform },
        e === 'up:before' || e === 'up'
          ? { isClick: this._isClick, currentTarget: this.findTarget(t), currentSubTargets: this.targets }
          : {}
      )
    this.fire('mouse:'.concat(e), r), s && s.fire('mouse'.concat(e), r)
    for (let n = 0; n < i.length; n++) i[n] !== s && i[n].fire('mouse'.concat(e), r)
  }
  _onMouseDownInDrawingMode(t) {
    ;(this._isCurrentlyDrawing = !0), this.getActiveObject() && (this.discardActiveObject(t), this.requestRenderAll())
    const e = this.getScenePoint(t)
    this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(e, { e: t, pointer: e }), this._handleEvent(t, 'down')
  }
  _onMouseMoveInDrawingMode(t) {
    if (this._isCurrentlyDrawing) {
      const e = this.getScenePoint(t)
      this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(e, { e: t, pointer: e })
    }
    this.setCursor(this.freeDrawingCursor), this._handleEvent(t, 'move')
  }
  _onMouseUpInDrawingMode(t) {
    const e = this.getScenePoint(t)
    this.freeDrawingBrush
      ? (this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({ e: t, pointer: e }))
      : (this._isCurrentlyDrawing = !1),
      this._handleEvent(t, 'up')
  }
  __onMouseDown(t) {
    ;(this._isClick = !0), this._cacheTransformEventData(t), this._handleEvent(t, 'down:before')
    let e = this._target
    const { button: s } = t
    if (s) {
      ;((this.fireMiddleClick && s === 1) || (this.fireRightClick && s === 2)) && this._handleEvent(t, 'down'),
        this._resetTransformEventData()
      return
    }
    if (this.isDrawingMode) {
      this._onMouseDownInDrawingMode(t)
      return
    }
    if (!this._isMainEvent(t) || this._currentTransform) return
    let i = this._shouldRender(e),
      r = !1
    if (
      (this.handleMultiSelection(t, e)
        ? ((e = this._activeObject), (r = !0), (i = !0))
        : this._shouldClearSelection(t, e) && this.discardActiveObject(t),
      this.selection && (!e || (!e.selectable && !e.isEditing && e !== this._activeObject)))
    ) {
      const n = this.getScenePoint(t)
      this._groupSelector = { x: n.x, y: n.y, deltaY: 0, deltaX: 0 }
    }
    if (e) {
      const n = e === this._activeObject
      e.selectable && e.activeOn === 'down' && this.setActiveObject(e, t)
      const a = e.findControl(this.getViewportPoint(t), Ws(t))
      if (e === this._activeObject && (a || !r)) {
        this._setupCurrentTransform(t, e, n)
        const h = a ? a.control : void 0,
          l = this.getScenePoint(t),
          c = h && h.getMouseDownHandler(t, e, h)
        c && c.call(h, t, this._currentTransform, l.x, l.y)
      }
    }
    i && (this._objectsToRender = void 0), this._handleEvent(t, 'down'), i && this.requestRenderAll()
  }
  _resetTransformEventData() {
    ;(this._target = void 0), (this._pointer = void 0), (this._absolutePointer = void 0)
  }
  _cacheTransformEventData(t) {
    this._resetTransformEventData(),
      (this._pointer = this.getViewportPoint(t)),
      (this._absolutePointer = ie(this._pointer, void 0, this.viewportTransform)),
      (this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t))
  }
  __onMouseMove(t) {
    if (
      ((this._isClick = !1), this._cacheTransformEventData(t), this._handleEvent(t, 'move:before'), this.isDrawingMode)
    ) {
      this._onMouseMoveInDrawingMode(t)
      return
    }
    if (!this._isMainEvent(t)) return
    const e = this._groupSelector
    if (e) {
      const s = this.getScenePoint(t)
      ;(e.deltaX = s.x - e.x), (e.deltaY = s.y - e.y), this.renderTop()
    } else if (this._currentTransform) this._transformObject(t)
    else {
      const s = this.findTarget(t)
      this._setCursorFromEvent(t, s), this._fireOverOutEvents(t, s)
    }
    this.textEditingManager.onMouseMove(t), this._handleEvent(t, 'move'), this._resetTransformEventData()
  }
  _fireOverOutEvents(t, e) {
    const s = this._hoveredTarget,
      i = this._hoveredTargets,
      r = this.targets,
      n = Math.max(i.length, r.length)
    this.fireSyntheticInOutEvents('mouse', { e: t, target: e, oldTarget: s, fireCanvas: !0 })
    for (let a = 0; a < n; a++) this.fireSyntheticInOutEvents('mouse', { e: t, target: r[a], oldTarget: i[a] })
    ;(this._hoveredTarget = e), (this._hoveredTargets = this.targets.concat())
  }
  _fireEnterLeaveEvents(t, e) {
    const s = this._draggedoverTarget,
      i = this._hoveredTargets,
      r = this.targets,
      n = Math.max(i.length, r.length)
    this.fireSyntheticInOutEvents('drag', p(p({}, e), {}, { target: t, oldTarget: s, fireCanvas: !0 }))
    for (let a = 0; a < n; a++)
      this.fireSyntheticInOutEvents('drag', p(p({}, e), {}, { target: r[a], oldTarget: i[a] }))
    this._draggedoverTarget = t
  }
  fireSyntheticInOutEvents(t, e) {
    let { target: s, oldTarget: i, fireCanvas: r, e: n } = e,
      a = j(e, uh)
    const { targetIn: h, targetOut: l, canvasIn: c, canvasOut: u } = dh[t],
      d = i !== s
    if (i && d) {
      const f = p(p({}, a), {}, { e: n, target: i, nextTarget: s }, Zt(this, n))
      r && this.fire(u, f), i.fire(l, f)
    }
    if (s && d) {
      const f = p(p({}, a), {}, { e: n, target: s, previousTarget: i }, Zt(this, n))
      r && this.fire(c, f), s.fire(h, f)
    }
  }
  __onMouseWheel(t) {
    this._cacheTransformEventData(t), this._handleEvent(t, 'wheel'), this._resetTransformEventData()
  }
  _transformObject(t) {
    const e = this.getScenePoint(t),
      s = this._currentTransform,
      i = s.target,
      r = i.group ? ie(e, void 0, i.group.calcTransformMatrix()) : e
    ;(s.shiftKey = t.shiftKey),
      (s.altKey = !!this.centeredKey && t[this.centeredKey]),
      this._performTransformAction(t, s, r),
      s.actionPerformed && this.requestRenderAll()
  }
  _performTransformAction(t, e, s) {
    const { action: i, actionHandler: r, target: n } = e,
      a = !!r && r(t, e, s.x, s.y)
    a && n.setCoords(),
      i === 'drag' && a && ((e.target.isMoving = !0), this.setCursor(e.target.moveCursor || this.moveCursor)),
      (e.actionPerformed = e.actionPerformed || a)
  }
  _setCursorFromEvent(t, e) {
    if (!e) {
      this.setCursor(this.defaultCursor)
      return
    }
    let s = e.hoverCursor || this.hoverCursor
    const i = Gt(this._activeObject) ? this._activeObject : null,
      r = (!i || e.group !== i) && e.findControl(this.getViewportPoint(t))
    if (!r)
      e.subTargetCheck &&
        this.targets
          .concat()
          .reverse()
          .map(n => {
            s = n.hoverCursor || s
          }),
        this.setCursor(s)
    else {
      const n = r.control
      this.setCursor(n.cursorStyleHandler(t, n, e))
    }
  }
  handleMultiSelection(t, e) {
    const s = this._activeObject,
      i = Gt(s)
    if (
      !!s &&
      this._isSelectionKeyPressed(t) &&
      this.selection &&
      !!e &&
      e.selectable &&
      (s !== e || i) &&
      (i || (!e.isDescendantOf(s) && !s.isDescendantOf(e))) &&
      !e.onSelect({ e: t }) &&
      !s.getActiveControl()
    ) {
      if (i) {
        const r = s.getObjects()
        if (e === s) {
          const n = this.getViewportPoint(t)
          if (
            ((e = this.searchPossibleTargets(r, n) || this.searchPossibleTargets(this._objects, n)),
            !e || !e.selectable)
          )
            return !1
        }
        e.group === s
          ? (s.remove(e),
            (this._hoveredTarget = e),
            (this._hoveredTargets = [...this.targets]),
            s.size() === 1 && this._setActiveObject(s.item(0), t))
          : (s.multiSelectAdd(e), (this._hoveredTarget = s), (this._hoveredTargets = [...this.targets])),
          this._fireSelectionEvents(r, t)
      } else {
        s.exitEditing && s.exitEditing()
        const r = x.getClass('ActiveSelection'),
          n = new r([], { canvas: this })
        n.multiSelectAdd(s, e),
          (this._hoveredTarget = n),
          this._setActiveObject(n, t),
          this._fireSelectionEvents([s], t)
      }
      return !0
    }
    return !1
  }
  handleSelection(t) {
    if (!this.selection || !this._groupSelector) return !1
    const { x: e, y: s, deltaX: i, deltaY: r } = this._groupSelector,
      n = new _(e, s),
      a = n.add(new _(i, r)),
      h = n.min(a),
      l = n.max(a),
      c = l.subtract(h),
      u = this.collectObjects(
        { left: h.x, top: h.y, width: c.x, height: c.y },
        { includeIntersecting: !this.selectionFullyContained }
      ),
      d = n.eq(a) ? (u[0] ? [u[0]] : []) : u.length > 1 ? u.filter(f => !f.onSelect({ e: t })).reverse() : u
    if (d.length === 1) this.setActiveObject(d[0], t)
    else if (d.length > 1) {
      const f = x.getClass('ActiveSelection')
      this.setActiveObject(new f(d, { canvas: this }), t)
    }
    return (this._groupSelector = null), !0
  }
  clear() {
    this.textEditingManager.clear(), super.clear()
  }
  destroy() {
    this.removeListeners(), this.textEditingManager.dispose(), super.destroy()
  }
}
const Nr = { x1: 0, y1: 0, x2: 0, y2: 0 },
  fh = p(p({}, Nr), {}, { r1: 0, r2: 0 }),
  ee = (o, t) => (isNaN(o) && typeof t == 'number' ? t : o),
  gh = /^(\d+\.\d+)%|(\d+)%$/
function Ur(o) {
  return o && gh.test(o)
}
function Kr(o, t) {
  const e = typeof o == 'number' ? o : typeof o == 'string' ? parseFloat(o) / (Ur(o) ? 100 : 1) : NaN
  return ne(0, ee(e, t), 1)
}
const ph = /\s*;\s*/,
  mh = /\s*:\s*/
function _h(o, t) {
  let e, s
  const i = o.getAttribute('style')
  if (i) {
    const n = i.split(ph)
    n[n.length - 1] === '' && n.pop()
    for (let a = n.length; a--; ) {
      const [h, l] = n[a].split(mh).map(c => c.trim())
      h === 'stop-color' ? (e = l) : h === 'stop-opacity' && (s = l)
    }
  }
  const r = new P(e || o.getAttribute('stop-color') || 'rgb(0,0,0)')
  return {
    offset: Kr(o.getAttribute('offset'), 0),
    color: r.toRgb(),
    opacity: ee(parseFloat(s || o.getAttribute('stop-opacity') || ''), 1) * r.getAlpha() * t,
  }
}
function yh(o, t) {
  const e = [],
    s = o.getElementsByTagName('stop'),
    i = Kr(t, 1)
  for (let r = s.length; r--; ) e.push(_h(s[r], i))
  return e
}
function qr(o) {
  return o.nodeName === 'linearGradient' || o.nodeName === 'LINEARGRADIENT' ? 'linear' : 'radial'
}
function $r(o) {
  return o.getAttribute('gradientUnits') === 'userSpaceOnUse' ? 'pixels' : 'percentage'
}
function vh(o, t) {
  let { width: e, height: s, gradientUnits: i } = t,
    r
  return Object.keys(o).reduce((n, a) => {
    const h = o[a]
    return (
      h === 'Infinity'
        ? (r = 1)
        : h === '-Infinity'
        ? (r = 0)
        : ((r = typeof h == 'string' ? parseFloat(h) : h),
          typeof h == 'string' &&
            Ur(h) &&
            ((r *= 0.01),
            i === 'pixels' &&
              ((a === 'x1' || a === 'x2' || a === 'r2') && (r *= e), (a === 'y1' || a === 'y2') && (r *= s)))),
      (n[a] = r),
      n
    )
  }, {})
}
function ft(o, t) {
  return o.getAttribute(t)
}
function Ch(o) {
  return { x1: ft(o, 'x1') || 0, y1: ft(o, 'y1') || 0, x2: ft(o, 'x2') || '100%', y2: ft(o, 'y2') || 0 }
}
function Sh(o) {
  return {
    x1: ft(o, 'fx') || ft(o, 'cx') || '50%',
    y1: ft(o, 'fy') || ft(o, 'cy') || '50%',
    r1: 0,
    x2: ft(o, 'cx') || '50%',
    y2: ft(o, 'cy') || '50%',
    r2: ft(o, 'r') || '50%',
  }
}
function wh(o, t) {
  return vh(qr(o) === 'linear' ? Ch(o) : Sh(o), p(p({}, t), {}, { gradientUnits: $r(o) }))
}
class cs {
  constructor(t) {
    const {
      type: e = 'linear',
      gradientUnits: s = 'pixels',
      coords: i = {},
      colorStops: r = [],
      offsetX: n = 0,
      offsetY: a = 0,
      gradientTransform: h,
      id: l,
    } = t || {}
    Object.assign(this, {
      type: e,
      gradientUnits: s,
      coords: p(p({}, e === 'radial' ? fh : Nr), i),
      colorStops: r,
      offsetX: n,
      offsetY: a,
      gradientTransform: h,
      id: l ? ''.concat(l, '_').concat(It()) : It(),
    })
  }
  addColorStop(t) {
    for (const e in t) {
      const s = new P(t[e])
      this.colorStops.push({ offset: parseFloat(e), color: s.toRgb(), opacity: s.getAlpha() })
    }
    return this
  }
  toObject(t) {
    return p(
      p({}, le(this, t)),
      {},
      {
        type: this.type,
        coords: p({}, this.coords),
        colorStops: this.colorStops.map(e => p({}, e)),
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        gradientUnits: this.gradientUnits,
        gradientTransform: this.gradientTransform ? [...this.gradientTransform] : void 0,
      }
    )
  }
  toSVG(t) {
    let { additionalTransform: e } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const s = [],
      i = this.gradientTransform ? this.gradientTransform.concat() : et.concat(),
      r = this.gradientUnits === 'pixels' ? 'userSpaceOnUse' : 'objectBoundingBox',
      n = this.colorStops.map(c => p({}, c)).sort((c, u) => c.offset - u.offset)
    let a = -this.offsetX,
      h = -this.offsetY
    r === 'objectBoundingBox' ? ((a /= t.width), (h /= t.height)) : ((a += t.width / 2), (h += t.height / 2)),
      Hn(t) && this.gradientUnits !== 'percentage' && ((a -= t.pathOffset.x), (h -= t.pathOffset.y)),
      (i[4] -= a),
      (i[5] -= h)
    const l = [
      'id="SVGID_'.concat(this.id, '"'),
      'gradientUnits="'.concat(r, '"'),
      'gradientTransform="'.concat(e ? e + ' ' : '').concat(Xe(i), '"'),
      '',
    ].join(' ')
    if (this.type === 'linear') {
      const { x1: c, y1: u, x2: d, y2: f } = this.coords
      s.push(
        '<linearGradient ',
        l,
        ' x1="',
        c,
        '" y1="',
        u,
        '" x2="',
        d,
        '" y2="',
        f,
        `">
`
      )
    } else if (this.type === 'radial') {
      const { x1: c, y1: u, x2: d, y2: f, r1: m, r2: y } = this.coords,
        v = m > y
      s.push(
        '<radialGradient ',
        l,
        ' cx="',
        v ? c : d,
        '" cy="',
        v ? u : f,
        '" r="',
        v ? m : y,
        '" fx="',
        v ? d : c,
        '" fy="',
        v ? f : u,
        `">
`
      ),
        v &&
          (n.reverse(),
          n.forEach(S => {
            S.offset = 1 - S.offset
          }))
      const C = Math.min(m, y)
      if (C > 0) {
        const S = Math.max(m, y),
          w = C / S
        n.forEach(T => {
          T.offset += w * (1 - T.offset)
        })
      }
    }
    return (
      n.forEach(c => {
        let { color: u, offset: d, opacity: f } = c
        s.push(
          '<stop ',
          'offset="',
          d * 100 + '%',
          '" style="stop-color:',
          u,
          typeof f < 'u' ? ';stop-opacity: ' + f : ';',
          `"/>
`
        )
      }),
      s.push(
        this.type === 'linear' ? '</linearGradient>' : '</radialGradient>',
        `
`
      ),
      s.join('')
    )
  }
  toLive(t) {
    const { x1: e, y1: s, x2: i, y2: r, r1: n, r2: a } = this.coords,
      h = this.type === 'linear' ? t.createLinearGradient(e, s, i, r) : t.createRadialGradient(e, s, n, i, r, a)
    return (
      this.colorStops.forEach(l => {
        let { color: c, opacity: u, offset: d } = l
        h.addColorStop(d, typeof u < 'u' ? new P(c).setAlpha(u).toRgba() : c)
      }),
      h
    )
  }
  static async fromObject(t) {
    const { colorStops: e, gradientTransform: s } = t
    return new this(
      p(p({}, t), {}, { colorStops: e ? e.map(i => p({}, i)) : void 0, gradientTransform: s ? [...s] : void 0 })
    )
  }
  static fromElement(t, e, s) {
    const i = $r(t),
      r = e._findCenterFromElement()
    return new this(
      p(
        {
          id: t.getAttribute('id') || void 0,
          type: qr(t),
          coords: wh(t, { width: s.viewBoxWidth || s.width, height: s.viewBoxHeight || s.height }),
          colorStops: yh(t, s.opacity),
          gradientUnits: i,
          gradientTransform: Us(t.getAttribute('gradientTransform') || ''),
        },
        i === 'pixels' ? { offsetX: e.width / 2 - r.x, offsetY: e.height / 2 - r.y } : { offsetX: 0, offsetY: 0 }
      )
    )
  }
}
g(cs, 'type', 'Gradient')
x.setClass(cs, 'gradient')
x.setClass(cs, 'linear')
x.setClass(cs, 'radial')
const xh = ['type', 'source', 'patternTransform']
class _i {
  get type() {
    return 'pattern'
  }
  set type(t) {
    Bt('warn', 'Setting type has no effect', t)
  }
  constructor(t) {
    g(this, 'repeat', 'repeat'),
      g(this, 'offsetX', 0),
      g(this, 'offsetY', 0),
      g(this, 'crossOrigin', ''),
      (this.id = It()),
      Object.assign(this, t)
  }
  isImageSource() {
    return !!this.source && typeof this.source.src == 'string'
  }
  isCanvasSource() {
    return !!this.source && !!this.source.toDataURL
  }
  sourceToString() {
    return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : ''
  }
  toLive(t) {
    return !this.source ||
      (this.isImageSource() &&
        (!this.source.complete || this.source.naturalWidth === 0 || this.source.naturalHeight === 0))
      ? null
      : t.createPattern(this.source, this.repeat)
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    const { repeat: e, crossOrigin: s } = this
    return p(
      p({}, le(this, t)),
      {},
      {
        type: 'pattern',
        source: this.sourceToString(),
        repeat: e,
        crossOrigin: s,
        offsetX: B(this.offsetX, E.NUM_FRACTION_DIGITS),
        offsetY: B(this.offsetY, E.NUM_FRACTION_DIGITS),
        patternTransform: this.patternTransform ? [...this.patternTransform] : null,
      }
    )
  }
  toSVG(t) {
    let { width: e, height: s } = t
    const { source: i, repeat: r, id: n } = this,
      a = ee(this.offsetX / e, 0),
      h = ee(this.offsetY / s, 0),
      l = r === 'repeat-y' || r === 'no-repeat' ? 1 + Math.abs(a || 0) : ee(i.width / e, 0),
      c = r === 'repeat-x' || r === 'no-repeat' ? 1 + Math.abs(h || 0) : ee(i.height / s, 0)
    return [
      '<pattern id="SVGID_'
        .concat(n, '" x="')
        .concat(a, '" y="')
        .concat(h, '" width="')
        .concat(l, '" height="')
        .concat(c, '">'),
      '<image x="0" y="0" width="'
        .concat(i.width, '" height="')
        .concat(i.height, '" xlink:href="')
        .concat(this.sourceToString(), '"></image>'),
      '</pattern>',
      '',
    ].join(`
`)
  }
  static async fromObject(t, e) {
    let { type: s, source: i, patternTransform: r } = t,
      n = j(t, xh)
    const a = await je(i, p(p({}, e), {}, { crossOrigin: n.crossOrigin }))
    return new this(p(p({}, n), {}, { patternTransform: r && r.slice(0), source: a }))
  }
}
g(_i, 'type', 'Pattern')
x.setClass(_i)
x.setClass(_i, 'pattern')
class bh {
  constructor(t) {
    g(this, 'color', 'rgb(0, 0, 0)'),
      g(this, 'width', 1),
      g(this, 'shadow', null),
      g(this, 'strokeLineCap', 'round'),
      g(this, 'strokeLineJoin', 'round'),
      g(this, 'strokeMiterLimit', 10),
      g(this, 'strokeDashArray', null),
      g(this, 'limitedToCanvasSize', !1),
      (this.canvas = t)
  }
  _setBrushStyles(t) {
    ;(t.strokeStyle = this.color),
      (t.lineWidth = this.width),
      (t.lineCap = this.strokeLineCap),
      (t.miterLimit = this.strokeMiterLimit),
      (t.lineJoin = this.strokeLineJoin),
      t.setLineDash(this.strokeDashArray || [])
  }
  _saveAndTransform(t) {
    const e = this.canvas.viewportTransform
    t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
  }
  needsFullRender() {
    return new P(this.color).getAlpha() < 1 || !!this.shadow
  }
  _setShadow() {
    if (!this.shadow || !this.canvas) return
    const t = this.canvas,
      e = this.shadow,
      s = t.contextTop,
      i = t.getZoom() * t.getRetinaScaling()
    ;(s.shadowColor = e.color),
      (s.shadowBlur = e.blur * i),
      (s.shadowOffsetX = e.offsetX * i),
      (s.shadowOffsetY = e.offsetY * i)
  }
  _resetShadow() {
    const t = this.canvas.contextTop
    ;(t.shadowColor = ''), (t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0)
  }
  _isOutSideCanvas(t) {
    return t.x < 0 || t.x > this.canvas.getWidth() || t.y < 0 || t.y > this.canvas.getHeight()
  }
}
const Th = ['path', 'left', 'top'],
  Oh = ['d']
class zt extends $ {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      { path: s, left: i, top: r } = e,
      n = j(e, Th)
    super(),
      Object.assign(this, zt.ownDefaults),
      this.setOptions(n),
      this._setPath(t || [], !0),
      typeof i == 'number' && this.set(A, i),
      typeof r == 'number' && this.set(it, r)
  }
  _setPath(t, e) {
    ;(this.path = Za(Array.isArray(t) ? t : oh(t))), this.setBoundingBox(e)
  }
  _findCenterFromElement() {
    const t = this._calcBoundsFromPath()
    return new _(t.left + t.width / 2, t.top + t.height / 2)
  }
  _renderPathCommands(t) {
    const e = -this.pathOffset.x,
      s = -this.pathOffset.y
    t.beginPath()
    for (const i of this.path)
      switch (i[0]) {
        case 'L':
          t.lineTo(i[1] + e, i[2] + s)
          break
        case 'M':
          t.moveTo(i[1] + e, i[2] + s)
          break
        case 'C':
          t.bezierCurveTo(i[1] + e, i[2] + s, i[3] + e, i[4] + s, i[5] + e, i[6] + s)
          break
        case 'Q':
          t.quadraticCurveTo(i[1] + e, i[2] + s, i[3] + e, i[4] + s)
          break
        case 'Z':
          t.closePath()
          break
      }
  }
  _render(t) {
    this._renderPathCommands(t), this._renderPaintInOrder(t)
  }
  toString() {
    return '#<Path ('.concat(this.complexity(), '): { "top": ').concat(this.top, ', "left": ').concat(this.left, ' }>')
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    return p(p({}, super.toObject(t)), {}, { path: this.path.map(e => e.slice()) })
  }
  toDatalessObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    const e = this.toObject(t)
    return this.sourcePath && (delete e.path, (e.sourcePath = this.sourcePath)), e
  }
  _toSVG() {
    const t = Gr(this.path, E.NUM_FRACTION_DIGITS)
    return [
      '<path ',
      'COMMON_PARTS',
      'd="'.concat(
        t,
        `" stroke-linecap="round" />
`
      ),
    ]
  }
  _getOffsetTransform() {
    const t = E.NUM_FRACTION_DIGITS
    return ' translate('.concat(B(-this.pathOffset.x, t), ', ').concat(B(-this.pathOffset.y, t), ')')
  }
  toClipPathSVG(t) {
    const e = this._getOffsetTransform()
    return '	' + this._createBaseClipPathSVGMarkup(this._toSVG(), { reviver: t, additionalTransform: e })
  }
  toSVG(t) {
    const e = this._getOffsetTransform()
    return this._createBaseSVGMarkup(this._toSVG(), { reviver: t, additionalTransform: e })
  }
  complexity() {
    return this.path.length
  }
  setDimensions() {
    this.setBoundingBox()
  }
  setBoundingBox(t) {
    const { width: e, height: s, pathOffset: i } = this._calcDimensions()
    this.set({ width: e, height: s, pathOffset: i }), t && this.setPositionByOrigin(i, k, k)
  }
  _calcBoundsFromPath() {
    const t = []
    let e = 0,
      s = 0,
      i = 0,
      r = 0
    for (const n of this.path)
      switch (n[0]) {
        case 'L':
          ;(i = n[1]), (r = n[2]), t.push({ x: e, y: s }, { x: i, y: r })
          break
        case 'M':
          ;(i = n[1]), (r = n[2]), (e = i), (s = r)
          break
        case 'C':
          t.push(...Qi(i, r, n[1], n[2], n[3], n[4], n[5], n[6])), (i = n[5]), (r = n[6])
          break
        case 'Q':
          t.push(...Qi(i, r, n[1], n[2], n[1], n[2], n[3], n[4])), (i = n[3]), (r = n[4])
          break
        case 'Z':
          ;(i = e), (r = s)
          break
      }
    return Dt(t)
  }
  _calcDimensions() {
    const t = this._calcBoundsFromPath()
    return p(p({}, t), {}, { pathOffset: new _(t.left + t.width / 2, t.top + t.height / 2) })
  }
  static fromObject(t) {
    return this._fromObject(t, { extraParam: 'path' })
  }
  static async fromElement(t, e, s) {
    const i = Lt(t, this.ATTRIBUTE_NAMES, s),
      { d: r } = i,
      n = j(i, Oh)
    return new this(r, p(p(p({}, n), e), {}, { left: void 0, top: void 0 }))
  }
}
g(zt, 'type', 'Path')
g(zt, 'cacheProperties', [...At, 'path', 'fillRule'])
g(zt, 'ATTRIBUTE_NAMES', [...Xt, 'd'])
x.setClass(zt)
x.setSVGClass(zt)
function Dh(o) {
  return Gr(o) === 'M 0 0 Q 0 0 0 0 L 0 0'
}
class Ke extends bh {
  constructor(t) {
    super(t),
      g(this, 'decimate', 0.4),
      g(this, 'drawStraightLine', !1),
      g(this, 'straightLineKey', 'shiftKey'),
      (this._points = []),
      (this._hasStraightLine = !1)
  }
  needsFullRender() {
    return super.needsFullRender() || this._hasStraightLine
  }
  static drawSegment(t, e, s) {
    const i = e.midPointFrom(s)
    return t.quadraticCurveTo(e.x, e.y, i.x, i.y), i
  }
  onMouseDown(t, e) {
    let { e: s } = e
    !this.canvas._isMainEvent(s) ||
      ((this.drawStraightLine = !!this.straightLineKey && s[this.straightLineKey]),
      this._prepareForDrawing(t),
      this._addPoint(t),
      this._render())
  }
  onMouseMove(t, e) {
    let { e: s } = e
    if (
      !!this.canvas._isMainEvent(s) &&
      ((this.drawStraightLine = !!this.straightLineKey && s[this.straightLineKey]),
      !(this.limitedToCanvasSize === !0 && this._isOutSideCanvas(t)) && this._addPoint(t) && this._points.length > 1)
    )
      if (this.needsFullRender()) this.canvas.clearContext(this.canvas.contextTop), this._render()
      else {
        const i = this._points,
          r = i.length,
          n = this.canvas.contextTop
        this._saveAndTransform(n),
          this.oldEnd && (n.beginPath(), n.moveTo(this.oldEnd.x, this.oldEnd.y)),
          (this.oldEnd = Ke.drawSegment(n, i[r - 2], i[r - 1])),
          n.stroke(),
          n.restore()
      }
  }
  onMouseUp(t) {
    let { e } = t
    return this.canvas._isMainEvent(e)
      ? ((this.drawStraightLine = !1), (this.oldEnd = void 0), this._finalizeAndAddPath(), !1)
      : !0
  }
  _prepareForDrawing(t) {
    this._reset(), this._addPoint(t), this.canvas.contextTop.moveTo(t.x, t.y)
  }
  _addPoint(t) {
    return this._points.length > 1 && t.eq(this._points[this._points.length - 1])
      ? !1
      : (this.drawStraightLine && this._points.length > 1 && ((this._hasStraightLine = !0), this._points.pop()),
        this._points.push(t),
        !0)
  }
  _reset() {
    ;(this._points = []), this._setBrushStyles(this.canvas.contextTop), this._setShadow(), (this._hasStraightLine = !1)
  }
  _render() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.canvas.contextTop,
      e = this._points[0],
      s = this._points[1]
    if ((this._saveAndTransform(t), t.beginPath(), this._points.length === 2 && e.x === s.x && e.y === s.y)) {
      const i = this.width / 1e3
      ;(e.x -= i), (s.x += i)
    }
    t.moveTo(e.x, e.y)
    for (let i = 1; i < this._points.length; i++)
      Ke.drawSegment(t, e, s), (e = this._points[i]), (s = this._points[i + 1])
    t.lineTo(e.x, e.y), t.stroke(), t.restore()
  }
  convertPointsToSVGPath(t) {
    const e = this.width / 1e3
    return ah(t, e)
  }
  createPath(t) {
    const e = new zt(t, {
      fill: null,
      stroke: this.color,
      strokeWidth: this.width,
      strokeLineCap: this.strokeLineCap,
      strokeMiterLimit: this.strokeMiterLimit,
      strokeLineJoin: this.strokeLineJoin,
      strokeDashArray: this.strokeDashArray,
    })
    return this.shadow && ((this.shadow.affectStroke = !0), (e.shadow = new xt(this.shadow))), e
  }
  decimatePoints(t, e) {
    if (t.length <= 2) return t
    let s = t[0],
      i
    const r = this.canvas.getZoom(),
      n = Math.pow(e / r, 2),
      a = t.length - 1,
      h = [s]
    for (let l = 1; l < a - 1; l++)
      (i = Math.pow(s.x - t[l].x, 2) + Math.pow(s.y - t[l].y, 2)), i >= n && ((s = t[l]), h.push(s))
    return h.push(t[a]), h
  }
  _finalizeAndAddPath() {
    this.canvas.contextTop.closePath(),
      this.decimate && (this._points = this.decimatePoints(this._points, this.decimate))
    const e = this.convertPointsToSVGPath(this._points)
    if (Dh(e)) {
      this.canvas.requestRenderAll()
      return
    }
    const s = this.createPath(e)
    this.canvas.clearContext(this.canvas.contextTop),
      this.canvas.fire('before:path:created', { path: s }),
      this.canvas.add(s),
      this.canvas.requestRenderAll(),
      s.setCoords(),
      this._resetShadow(),
      this.canvas.fire('path:created', { path: s })
  }
}
const kh = ['left', 'top', 'radius'],
  Jr = ['radius', 'startAngle', 'endAngle', 'counterClockwise'],
  Mh = { radius: 0, startAngle: 0, endAngle: 360, counterClockwise: !1 }
class Tt extends $ {
  static getDefaults() {
    return p(p({}, super.getDefaults()), Tt.ownDefaults)
  }
  constructor(t) {
    super(), Object.assign(this, Tt.ownDefaults), this.setOptions(t)
  }
  _set(t, e) {
    return super._set(t, e), t === 'radius' && this.setRadius(e), this
  }
  _render(t) {
    t.beginPath(),
      t.arc(0, 0, this.radius, X(this.startAngle), X(this.endAngle), this.counterClockwise),
      this._renderPaintInOrder(t)
  }
  getRadiusX() {
    return this.get('radius') * this.get(nt)
  }
  getRadiusY() {
    return this.get('radius') * this.get(ut)
  }
  setRadius(t) {
    ;(this.radius = t), this.set({ width: t * 2, height: t * 2 })
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    return super.toObject([...Jr, ...t])
  }
  _toSVG() {
    const t = (this.endAngle - this.startAngle) % 360
    if (t === 0)
      return [
        '<circle ',
        'COMMON_PARTS',
        'cx="0" cy="0" ',
        'r="',
        ''.concat(this.radius),
        `" />
`,
      ]
    {
      const { radius: e } = this,
        s = X(this.startAngle),
        i = X(this.endAngle),
        r = kt(s) * e,
        n = Mt(s) * e,
        a = kt(i) * e,
        h = Mt(i) * e,
        l = t > 180 ? 1 : 0,
        c = this.counterClockwise ? 0 : 1
      return [
        '<path d="M '
          .concat(r, ' ')
          .concat(n, ' A ')
          .concat(e, ' ')
          .concat(e, ' 0 ')
          .concat(l, ' ')
          .concat(c, ' ')
          .concat(a, ' ')
          .concat(h, '" '),
        'COMMON_PARTS',
        ` />
`,
      ]
    }
  }
  static async fromElement(t, e, s) {
    const i = Lt(t, this.ATTRIBUTE_NAMES, s),
      { left: r = 0, top: n = 0, radius: a = 0 } = i,
      h = j(i, kh)
    return new this(p(p({}, h), {}, { radius: a, left: r - a, top: n - a }))
  }
  static fromObject(t) {
    return super._fromObject(t)
  }
}
g(Tt, 'type', 'Circle')
g(Tt, 'cacheProperties', [...At, ...Jr])
g(Tt, 'ownDefaults', Mh)
g(Tt, 'ATTRIBUTE_NAMES', ['cx', 'cy', 'r', ...Xt])
x.setClass(Tt)
x.setSVGClass(Tt)
const Eh = ['x1', 'y1', 'x2', 'y2'],
  Ph = ['x1', 'y1', 'x2', 'y2'],
  yi = ['x1', 'x2', 'y1', 'y2']
class Ht extends $ {
  constructor() {
    let [t, e, s, i] = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [0, 0, 0, 0],
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      Object.assign(this, Ht.ownDefaults),
      this.setOptions(r),
      (this.x1 = t),
      (this.x2 = s),
      (this.y1 = e),
      (this.y2 = i),
      this._setWidthHeight()
    const { left: n, top: a } = r
    typeof n == 'number' && this.set(A, n), typeof a == 'number' && this.set(it, a)
  }
  _setWidthHeight() {
    const { x1: t, y1: e, x2: s, y2: i } = this
    ;(this.width = Math.abs(s - t)), (this.height = Math.abs(i - e))
    const {
        left: r,
        top: n,
        width: a,
        height: h,
      } = Dt([
        { x: t, y: e },
        { x: s, y: i },
      ]),
      l = new _(r + a / 2, n + h / 2)
    this.setPositionByOrigin(l, k, k)
  }
  _set(t, e) {
    return super._set(t, e), yi.includes(t) && this._setWidthHeight(), this
  }
  _render(t) {
    t.beginPath()
    const e = this.calcLinePoints()
    t.moveTo(e.x1, e.y1), t.lineTo(e.x2, e.y2), (t.lineWidth = this.strokeWidth)
    const s = t.strokeStyle
    if (ct(this.stroke)) t.strokeStyle = this.stroke.toLive(t)
    else {
      var i
      t.strokeStyle = (i = this.stroke) !== null && i !== void 0 ? i : t.fillStyle
    }
    this.stroke && this._renderStroke(t), (t.strokeStyle = s)
  }
  _findCenterFromElement() {
    return new _((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2)
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    return p(p({}, super.toObject(t)), this.calcLinePoints())
  }
  _getNonTransformedDimensions() {
    const t = super._getNonTransformedDimensions()
    return (
      this.strokeLineCap === 'butt' &&
        (this.width === 0 && (t.y -= this.strokeWidth), this.height === 0 && (t.x -= this.strokeWidth)),
      t
    )
  }
  calcLinePoints() {
    const { x1: t, x2: e, y1: s, y2: i, width: r, height: n } = this,
      a = t <= e ? -1 : 1,
      h = s <= i ? -1 : 1,
      l = (a * r) / 2,
      c = (h * n) / 2,
      u = (a * -r) / 2,
      d = (h * -n) / 2
    return { x1: l, x2: u, y1: c, y2: d }
  }
  _toSVG() {
    const { x1: t, x2: e, y1: s, y2: i } = this.calcLinePoints()
    return [
      '<line ',
      'COMMON_PARTS',
      'x1="'
        .concat(t, '" y1="')
        .concat(s, '" x2="')
        .concat(e, '" y2="')
        .concat(
          i,
          `" />
`
        ),
    ]
  }
  static async fromElement(t, e, s) {
    const i = Lt(t, this.ATTRIBUTE_NAMES, s),
      { x1: r = 0, y1: n = 0, x2: a = 0, y2: h = 0 } = i,
      l = j(i, Eh)
    return new this([r, n, a, h], l)
  }
  static fromObject(t) {
    let { x1: e, y1: s, x2: i, y2: r } = t,
      n = j(t, Ph)
    return this._fromObject(p(p({}, n), {}, { points: [e, s, i, r] }), { extraParam: 'points' })
  }
}
g(Ht, 'type', 'Line')
g(Ht, 'cacheProperties', [...At, ...yi])
g(Ht, 'ATTRIBUTE_NAMES', Xt.concat(yi))
x.setClass(Ht)
x.setSVGClass(Ht)
const Ah = { width: 100, height: 100 }
class Vt extends $ {
  static getDefaults() {
    return p(p({}, super.getDefaults()), Vt.ownDefaults)
  }
  constructor(t) {
    super(), Object.assign(this, Vt.ownDefaults), this.setOptions(t)
  }
  _render(t) {
    const e = this.width / 2,
      s = this.height / 2
    t.beginPath(), t.moveTo(-e, s), t.lineTo(0, -s), t.lineTo(e, s), t.closePath(), this._renderPaintInOrder(t)
  }
  _toSVG() {
    const t = this.width / 2,
      e = this.height / 2,
      s = ''.concat(-t, ' ').concat(e, ',0 ').concat(-e, ',').concat(t, ' ').concat(e)
    return ['<polygon ', 'COMMON_PARTS', 'points="', s, '" />']
  }
}
g(Vt, 'type', 'Triangle')
g(Vt, 'ownDefaults', Ah)
x.setClass(Vt)
x.setSVGClass(Vt)
const Fh = { rx: 0, ry: 0 },
  Zr = ['rx', 'ry']
class Et extends $ {
  static getDefaults() {
    return p(p({}, super.getDefaults()), Et.ownDefaults)
  }
  constructor(t) {
    super(), Object.assign(this, Et.ownDefaults), this.setOptions(t)
  }
  _set(t, e) {
    switch ((super._set(t, e), t)) {
      case 'rx':
        ;(this.rx = e), this.set('width', e * 2)
        break
      case 'ry':
        ;(this.ry = e), this.set('height', e * 2)
        break
    }
    return this
  }
  getRx() {
    return this.get('rx') * this.get(nt)
  }
  getRy() {
    return this.get('ry') * this.get(ut)
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    return super.toObject([...Zr, ...t])
  }
  _toSVG() {
    return [
      '<ellipse ',
      'COMMON_PARTS',
      'cx="0" cy="0" rx="'.concat(this.rx, '" ry="').concat(
        this.ry,
        `" />
`
      ),
    ]
  }
  _render(t) {
    t.beginPath(),
      t.save(),
      t.transform(1, 0, 0, this.ry / this.rx, 0, 0),
      t.arc(0, 0, this.rx, 0, Be, !1),
      t.restore(),
      this._renderPaintInOrder(t)
  }
  static async fromElement(t, e, s) {
    const i = Lt(t, this.ATTRIBUTE_NAMES, s)
    return (i.left = (i.left || 0) - i.rx), (i.top = (i.top || 0) - i.ry), new this(i)
  }
}
g(Et, 'type', 'Ellipse')
g(Et, 'cacheProperties', [...At, ...Zr])
g(Et, 'ownDefaults', Fh)
g(Et, 'ATTRIBUTE_NAMES', [...Xt, 'cx', 'cy', 'rx', 'ry'])
x.setClass(Et)
x.setSVGClass(Et)
function Lh(o) {
  if (!o) return []
  const t = o.replace(/,/g, ' ').trim().split(/\s+/),
    e = []
  for (let s = 0; s < t.length; s += 2) e.push({ x: parseFloat(t[s]), y: parseFloat(t[s + 1]) })
  return e
}
const jh = ['left', 'top'],
  Qr = { exactBoundingBox: !1 }
class yt extends $ {
  static getDefaults() {
    return p(p({}, super.getDefaults()), yt.ownDefaults)
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(), g(this, 'strokeDiff', void 0), Object.assign(this, yt.ownDefaults), this.setOptions(e), (this.points = t)
    const { left: s, top: i } = e
    ;(this.initialized = !0),
      this.setBoundingBox(!0),
      typeof s == 'number' && this.set(A, s),
      typeof i == 'number' && this.set(it, i)
  }
  isOpen() {
    return !0
  }
  _projectStrokeOnPoints(t) {
    return sa(this.points, t, this.isOpen())
  }
  _calcDimensions(t) {
    t = p(
      {
        scaleX: this.scaleX,
        scaleY: this.scaleY,
        skewX: this.skewX,
        skewY: this.skewY,
        strokeLineCap: this.strokeLineCap,
        strokeLineJoin: this.strokeLineJoin,
        strokeMiterLimit: this.strokeMiterLimit,
        strokeUniform: this.strokeUniform,
        strokeWidth: this.strokeWidth,
      },
      t || {}
    )
    const e = this.exactBoundingBox ? this._projectStrokeOnPoints(t).map(l => l.projectedPoint) : this.points
    if (e.length === 0)
      return { left: 0, top: 0, width: 0, height: 0, pathOffset: new _(), strokeOffset: new _(), strokeDiff: new _() }
    const s = Dt(e),
      i = is(p(p({}, t), {}, { scaleX: 1, scaleY: 1 })),
      r = Dt(this.points.map(l => st(l, i, !0))),
      n = new _(this.scaleX, this.scaleY)
    let a = s.left + s.width / 2,
      h = s.top + s.height / 2
    return (
      this.exactBoundingBox && ((a = a - h * Math.tan(X(this.skewX))), (h = h - a * Math.tan(X(this.skewY)))),
      p(
        p({}, s),
        {},
        {
          pathOffset: new _(a, h),
          strokeOffset: new _(r.left, r.top).subtract(new _(s.left, s.top)).multiply(n),
          strokeDiff: new _(s.width, s.height).subtract(new _(r.width, r.height)).multiply(n),
        }
      )
    )
  }
  _findCenterFromElement() {
    const t = Dt(this.points)
    return new _(t.left + t.width / 2, t.top + t.height / 2)
  }
  setDimensions() {
    this.setBoundingBox()
  }
  setBoundingBox(t) {
    const {
      left: e,
      top: s,
      width: i,
      height: r,
      pathOffset: n,
      strokeOffset: a,
      strokeDiff: h,
    } = this._calcDimensions()
    this.set({ width: i, height: r, pathOffset: n, strokeOffset: a, strokeDiff: h }),
      t && this.setPositionByOrigin(new _(e + i / 2, s + r / 2), k, k)
  }
  isStrokeAccountedForInDimensions() {
    return this.exactBoundingBox
  }
  _getNonTransformedDimensions() {
    return this.exactBoundingBox ? new _(this.width, this.height) : super._getNonTransformedDimensions()
  }
  _getTransformedDimensions() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    if (this.exactBoundingBox) {
      let n
      if (Object.keys(t).some(a => this.strokeUniform || this.constructor.layoutProperties.includes(a))) {
        var e, s
        const { width: a, height: h } = this._calcDimensions(t)
        n = new _((e = t.width) !== null && e !== void 0 ? e : a, (s = t.height) !== null && s !== void 0 ? s : h)
      } else {
        var i, r
        n = new _(
          (i = t.width) !== null && i !== void 0 ? i : this.width,
          (r = t.height) !== null && r !== void 0 ? r : this.height
        )
      }
      return n.multiply(new _(t.scaleX || this.scaleX, t.scaleY || this.scaleY))
    } else return super._getTransformedDimensions(t)
  }
  _set(t, e) {
    const s = this.initialized && this[t] !== e,
      i = super._set(t, e)
    return (
      this.exactBoundingBox &&
        s &&
        (((t === nt || t === ut) &&
          this.strokeUniform &&
          this.constructor.layoutProperties.includes('strokeUniform')) ||
          this.constructor.layoutProperties.includes(t)) &&
        this.setDimensions(),
      i
    )
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    return p(
      p({}, super.toObject(t)),
      {},
      {
        points: this.points.map(e => {
          let { x: s, y: i } = e
          return { x: s, y: i }
        }),
      }
    )
  }
  _toSVG() {
    const t = [],
      e = this.pathOffset.x,
      s = this.pathOffset.y,
      i = E.NUM_FRACTION_DIGITS
    for (let r = 0, n = this.points.length; r < n; r++)
      t.push(B(this.points[r].x - e, i), ',', B(this.points[r].y - s, i), ' ')
    return [
      '<'.concat(this.constructor.type.toLowerCase(), ' '),
      'COMMON_PARTS',
      'points="'.concat(
        t.join(''),
        `" />
`
      ),
    ]
  }
  _render(t) {
    const e = this.points.length,
      s = this.pathOffset.x,
      i = this.pathOffset.y
    if (!(!e || isNaN(this.points[e - 1].y))) {
      t.beginPath(), t.moveTo(this.points[0].x - s, this.points[0].y - i)
      for (let r = 0; r < e; r++) {
        const n = this.points[r]
        t.lineTo(n.x - s, n.y - i)
      }
      !this.isOpen() && t.closePath(), this._renderPaintInOrder(t)
    }
  }
  complexity() {
    return this.points.length
  }
  static async fromElement(t, e, s) {
    const i = Lh(t.getAttribute('points')),
      r = Lt(t, this.ATTRIBUTE_NAMES, s),
      n = j(r, jh)
    return new this(i, p(p({}, n), e))
  }
  static fromObject(t) {
    return this._fromObject(t, { extraParam: 'points' })
  }
}
g(yt, 'ownDefaults', Qr)
g(yt, 'type', 'Polyline')
g(yt, 'layoutProperties', [
  ae,
  he,
  'strokeLineCap',
  'strokeLineJoin',
  'strokeMiterLimit',
  'strokeWidth',
  'strokeUniform',
  'points',
])
g(yt, 'cacheProperties', [...At, 'points'])
g(yt, 'ATTRIBUTE_NAMES', [...Xt])
x.setClass(yt)
x.setSVGClass(yt)
class us extends yt {
  isOpen() {
    return !1
  }
}
g(us, 'ownDefaults', Qr)
g(us, 'type', 'Polygon')
x.setClass(us)
x.setSVGClass(us)
const tn = ['fontSize', 'fontWeight', 'fontFamily', 'fontStyle'],
  en = ['underline', 'overline', 'linethrough'],
  sn = [
    ...tn,
    'lineHeight',
    'text',
    'charSpacing',
    'textAlign',
    'styles',
    'path',
    'pathStartOffset',
    'pathSide',
    'pathAlign',
  ],
  rn = [...sn, ...en, 'textBackgroundColor', 'direction'],
  Rh = [...tn, ...en, Q, 'strokeWidth', H, 'deltaY', 'textBackgroundColor'],
  Bh = {
    _reNewline: ti,
    _reSpacesAndTabs: /[ \t\r]/g,
    _reSpaceAndTab: /[ \t\r]/,
    _reWords: /\S+/g,
    fontSize: 40,
    fontWeight: 'normal',
    fontFamily: 'Times New Roman',
    underline: !1,
    overline: !1,
    linethrough: !1,
    textAlign: A,
    fontStyle: 'normal',
    lineHeight: 1.16,
    superscript: { size: 0.6, baseline: -0.35 },
    subscript: { size: 0.6, baseline: 0.11 },
    textBackgroundColor: '',
    stroke: null,
    shadow: null,
    path: void 0,
    pathStartOffset: 0,
    pathSide: A,
    pathAlign: 'baseline',
    _fontSizeFraction: 0.222,
    offsets: { underline: 0.1, linethrough: -0.315, overline: -0.88 },
    _fontSizeMult: 1.13,
    charSpacing: 0,
    deltaY: 0,
    direction: 'ltr',
    CACHE_FONT_SIZE: 400,
    MIN_TEXT_WIDTH: 2,
  },
  St = 'justify',
  qe = 'justify-left',
  ye = 'justify-right',
  ve = 'justify-center'
class nn extends $ {
  isEmptyStyles(t) {
    if (!this.styles || (typeof t < 'u' && !this.styles[t])) return !0
    const e = typeof t > 'u' ? this.styles : { line: this.styles[t] }
    for (const s in e) for (const i in e[s]) for (const r in e[s][i]) return !1
    return !0
  }
  styleHas(t, e) {
    if (!this.styles || (typeof e < 'u' && !this.styles[e])) return !1
    const s = typeof e > 'u' ? this.styles : { 0: this.styles[e] }
    for (const i in s) for (const r in s[i]) if (typeof s[i][r][t] < 'u') return !0
    return !1
  }
  cleanStyle(t) {
    if (!this.styles) return !1
    const e = this.styles
    let s = 0,
      i,
      r,
      n = !0,
      a = 0
    for (const h in e) {
      i = 0
      for (const l in e[h]) {
        const c = e[h][l] || {},
          u = c[t] !== void 0
        s++,
          u ? (r ? c[t] !== r && (n = !1) : (r = c[t]), c[t] === this[t] && delete c[t]) : (n = !1),
          Object.keys(c).length !== 0 ? i++ : delete e[h][l]
      }
      i === 0 && delete e[h]
    }
    for (let h = 0; h < this._textLines.length; h++) a += this._textLines[h].length
    n && s === a && ((this[t] = r), this.removeStyle(t))
  }
  removeStyle(t) {
    if (!this.styles) return
    const e = this.styles
    let s, i, r
    for (i in e) {
      s = e[i]
      for (r in s) delete s[r][t], Object.keys(s[r]).length === 0 && delete s[r]
      Object.keys(s).length === 0 && delete e[i]
    }
  }
  _extendStyles(t, e) {
    const { lineIndex: s, charIndex: i } = this.get2DCursorLocation(t)
    this._getLineStyle(s) || this._setLineStyle(s)
    const r = ni(p(p({}, this._getStyleDeclaration(s, i)), e), n => n !== void 0)
    this._setStyleDeclaration(s, i, r)
  }
  getSelectionStyles(t, e, s) {
    const i = []
    for (let r = t; r < (e || t); r++) i.push(this.getStyleAtPosition(r, s))
    return i
  }
  getStyleAtPosition(t, e) {
    const { lineIndex: s, charIndex: i } = this.get2DCursorLocation(t)
    return e ? this.getCompleteStyleDeclaration(s, i) : this._getStyleDeclaration(s, i)
  }
  setSelectionStyles(t, e, s) {
    for (let i = e; i < (s || e); i++) this._extendStyles(i, t)
    this._forceClearCache = !0
  }
  _getStyleDeclaration(t, e) {
    var s
    const i = this.styles && this.styles[t]
    return i ? ((s = i[e]) !== null && s !== void 0 ? s : {}) : {}
  }
  getCompleteStyleDeclaration(t, e) {
    return p(p({}, le(this, this.constructor._styleProperties)), this._getStyleDeclaration(t, e))
  }
  _setStyleDeclaration(t, e, s) {
    this.styles[t][e] = s
  }
  _deleteStyleDeclaration(t, e) {
    delete this.styles[t][e]
  }
  _getLineStyle(t) {
    return !!this.styles[t]
  }
  _setLineStyle(t) {
    this.styles[t] = {}
  }
  _deleteLineStyle(t) {
    delete this.styles[t]
  }
}
g(nn, '_styleProperties', Rh)
const Ih = /  +/g,
  Vh = /"/g
function Fs(o, t, e, s, i) {
  return '		'.concat(
    zn(o, { left: t, top: e, width: s, height: i }),
    `
`
  )
}
class Yh extends Tr {
  _toSVG() {
    const t = this._getSVGLeftTopOffsets(),
      e = this._getSVGTextAndBg(t.textTop, t.textLeft)
    return this._wrapSVGTextAndBg(e)
  }
  toSVG(t) {
    return this._createBaseSVGMarkup(this._toSVG(), { reviver: t, noStyle: !0, withShadow: !0 })
  }
  _getSVGLeftTopOffsets() {
    return { textLeft: -this.width / 2, textTop: -this.height / 2, lineTop: this.getHeightOfLine(0) }
  }
  _wrapSVGTextAndBg(t) {
    let { textBgRects: e, textSpans: s } = t
    const i = !0,
      r = this.getSvgTextDecoration(this)
    return [
      e.join(''),
      '		<text xml:space="preserve" ',
      this.fontFamily ? 'font-family="'.concat(this.fontFamily.replace(Vh, "'"), '" ') : '',
      this.fontSize ? 'font-size="'.concat(this.fontSize, '" ') : '',
      this.fontStyle ? 'font-style="'.concat(this.fontStyle, '" ') : '',
      this.fontWeight ? 'font-weight="'.concat(this.fontWeight, '" ') : '',
      r ? 'text-decoration="'.concat(r, '" ') : '',
      this.direction === 'rtl' ? 'direction="'.concat(this.direction, '" ') : '',
      'style="',
      this.getSvgStyles(i),
      '"',
      this.addPaintOrder(),
      ' >',
      s.join(''),
      `</text>
`,
    ]
  }
  _getSVGTextAndBg(t, e) {
    const s = [],
      i = []
    let r = t,
      n
    this.backgroundColor &&
      i.push(...Fs(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height))
    for (let a = 0, h = this._textLines.length; a < h; a++)
      (n = this._getLineLeftOffset(a)),
        this.direction === 'rtl' && (n += this.width),
        (this.textBackgroundColor || this.styleHas('textBackgroundColor', a)) && this._setSVGTextLineBg(i, a, e + n, r),
        this._setSVGTextLineText(s, a, e + n, r),
        (r += this.getHeightOfLine(a))
    return { textSpans: s, textBgRects: i }
  }
  _createTextCharSpan(t, e, s, i) {
    const r = this.getSvgSpanStyles(e, t !== t.trim() || !!t.match(Ih)),
      n = r ? 'style="'.concat(r, '"') : '',
      a = e.deltaY,
      h = a ? ' dy="'.concat(B(a, E.NUM_FRACTION_DIGITS), '" ') : ''
    return '<tspan x="'
      .concat(B(s, E.NUM_FRACTION_DIGITS), '" y="')
      .concat(B(i, E.NUM_FRACTION_DIGITS), '" ')
      .concat(h)
      .concat(n, '>')
      .concat(ia(t), '</tspan>')
  }
  _setSVGTextLineText(t, e, s, i) {
    const r = this.getHeightOfLine(e),
      n = this.textAlign.includes(St),
      a = this._textLines[e]
    let h,
      l,
      c = '',
      u,
      d,
      f = 0,
      m
    i += (r * (1 - this._fontSizeFraction)) / this.lineHeight
    for (let y = 0, v = a.length - 1; y <= v; y++)
      (m = y === v || this.charSpacing),
        (c += a[y]),
        (u = this.__charBounds[e][y]),
        f === 0 ? ((s += u.kernedWidth - u.width), (f += u.width)) : (f += u.kernedWidth),
        n && !m && this._reSpaceAndTab.test(a[y]) && (m = !0),
        m ||
          ((h = h || this.getCompleteStyleDeclaration(e, y)),
          (l = this.getCompleteStyleDeclaration(e, y + 1)),
          (m = fi(h, l, !0))),
        m &&
          ((d = this._getStyleDeclaration(e, y)),
          t.push(this._createTextCharSpan(c, d, s, i)),
          (c = ''),
          (h = l),
          this.direction === 'rtl' ? (s -= f) : (s += f),
          (f = 0))
  }
  _setSVGTextLineBg(t, e, s, i) {
    const r = this._textLines[e],
      n = this.getHeightOfLine(e) / this.lineHeight
    let a = 0,
      h = 0,
      l,
      c = this.getValueOfPropertyAt(e, 0, 'textBackgroundColor')
    for (let u = 0; u < r.length; u++) {
      const { left: d, width: f, kernedWidth: m } = this.__charBounds[e][u]
      ;(l = this.getValueOfPropertyAt(e, u, 'textBackgroundColor')),
        l !== c ? (c && t.push(...Fs(c, s + h, i, a, n)), (h = d), (a = f), (c = l)) : (a += m)
    }
    l && t.push(...Fs(c, s + h, i, a, n))
  }
  _getSVGLineTopOffset(t) {
    let e = 0,
      s
    for (s = 0; s < t; s++) e += this.getHeightOfLine(s)
    const i = this.getHeightOfLine(s)
    return {
      lineTop: e,
      offset: ((this._fontSizeMult - this._fontSizeFraction) * i) / (this.lineHeight * this._fontSizeMult),
    }
  }
  getSvgStyles(t) {
    return ''.concat(super.getSvgStyles(t), ' white-space: pre;')
  }
  getSvgSpanStyles(t, e) {
    const {
        fontFamily: s,
        strokeWidth: i,
        stroke: r,
        fill: n,
        fontSize: a,
        fontStyle: h,
        fontWeight: l,
        deltaY: c,
      } = t,
      u = this.getSvgTextDecoration(t)
    return [
      r ? we(Q, r) : '',
      i ? 'stroke-width: '.concat(i, '; ') : '',
      s ? 'font-family: '.concat(!s.includes("'") && !s.includes('"') ? "'".concat(s, "'") : s, '; ') : '',
      a ? 'font-size: '.concat(a, 'px; ') : '',
      h ? 'font-style: '.concat(h, '; ') : '',
      l ? 'font-weight: '.concat(l, '; ') : '',
      u && 'text-decoration: '.concat(u, '; '),
      n ? we(H, n) : '',
      c ? 'baseline-shift: '.concat(-c, '; ') : '',
      e ? 'white-space: pre; ' : '',
    ].join('')
  }
  getSvgTextDecoration(t) {
    return ['overline', 'underline', 'line-through'].filter(e => t[e.replace('-', '')]).join(' ')
  }
}
const Wh = ['textAnchor', 'textDecoration', 'dx', 'dy', 'top', 'left', 'fontSize', 'strokeWidth']
let Ls
function Xh() {
  if (!Ls) {
    const o = G()
    ;(o.width = o.height = 0), (Ls = o.getContext('2d'))
  }
  return Ls
}
class tt extends nn {
  static getDefaults() {
    return p(p({}, super.getDefaults()), tt.ownDefaults)
  }
  constructor(t, e) {
    super(),
      g(this, '__charBounds', []),
      Object.assign(this, tt.ownDefaults),
      this.setOptions(e),
      this.styles || (this.styles = {}),
      (this.text = t),
      (this.initialized = !0),
      this.path && this.setPathInfo(),
      this.initDimensions(),
      this.setCoords()
  }
  setPathInfo() {
    const t = this.path
    t && (t.segmentsInfo = Hr(t.path))
  }
  _splitText() {
    const t = this._splitTextIntoLines(this.text)
    return (
      (this.textLines = t.lines),
      (this._textLines = t.graphemeLines),
      (this._unwrappedTextLines = t._unwrappedLines),
      (this._text = t.graphemeText),
      t
    )
  }
  initDimensions() {
    this._splitText(),
      this._clearCache(),
      (this.dirty = !0),
      this.path
        ? ((this.width = this.path.width), (this.height = this.path.height))
        : ((this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH),
          (this.height = this.calcTextHeight())),
      this.textAlign.includes(St) && this.enlargeSpaces()
  }
  enlargeSpaces() {
    let t, e, s, i, r, n, a
    for (let h = 0, l = this._textLines.length; h < l; h++)
      if (
        !(this.textAlign !== St && (h === l - 1 || this.isEndOfWrapping(h))) &&
        ((i = 0),
        (r = this._textLines[h]),
        (e = this.getLineWidth(h)),
        e < this.width && (a = this.textLines[h].match(this._reSpacesAndTabs)))
      ) {
        ;(s = a.length), (t = (this.width - e) / s)
        for (let c = 0; c <= r.length; c++)
          (n = this.__charBounds[h][c]),
            this._reSpaceAndTab.test(r[c])
              ? ((n.width += t), (n.kernedWidth += t), (n.left += i), (i += t))
              : (n.left += i)
      }
  }
  isEndOfWrapping(t) {
    return t === this._textLines.length - 1
  }
  missingNewlineOffset(t) {
    return 1
  }
  get2DCursorLocation(t, e) {
    const s = e ? this._unwrappedTextLines : this._textLines
    let i
    for (i = 0; i < s.length; i++) {
      if (t <= s[i].length) return { lineIndex: i, charIndex: t }
      t -= s[i].length + this.missingNewlineOffset(i, e)
    }
    return { lineIndex: i - 1, charIndex: s[i - 1].length < t ? s[i - 1].length : t }
  }
  toString() {
    return '#<Text ('
      .concat(this.complexity(), '): { "text": "')
      .concat(this.text, '", "fontFamily": "')
      .concat(this.fontFamily, '" }>')
  }
  _getCacheCanvasDimensions() {
    const t = super._getCacheCanvasDimensions(),
      e = this.fontSize
    return (t.width += e * t.zoomX), (t.height += e * t.zoomY), t
  }
  _render(t) {
    const e = this.path
    e && !e.isNotVisible() && e._render(t),
      this._setTextStyles(t),
      this._renderTextLinesBackground(t),
      this._renderTextDecoration(t, 'underline'),
      this._renderText(t),
      this._renderTextDecoration(t, 'overline'),
      this._renderTextDecoration(t, 'linethrough')
  }
  _renderText(t) {
    this.paintFirst === Q
      ? (this._renderTextStroke(t), this._renderTextFill(t))
      : (this._renderTextFill(t), this._renderTextStroke(t))
  }
  _setTextStyles(t, e, s) {
    if (((t.textBaseline = 'alphabetic'), this.path))
      switch (this.pathAlign) {
        case k:
          t.textBaseline = 'middle'
          break
        case 'ascender':
          t.textBaseline = it
          break
        case 'descender':
          t.textBaseline = Vs
          break
      }
    t.font = this._getFontDeclaration(e, s)
  }
  calcTextWidth() {
    let t = this.getLineWidth(0)
    for (let e = 1, s = this._textLines.length; e < s; e++) {
      const i = this.getLineWidth(e)
      i > t && (t = i)
    }
    return t
  }
  _renderTextLine(t, e, s, i, r, n) {
    this._renderChars(t, e, s, i, r, n)
  }
  _renderTextLinesBackground(t) {
    if (!this.textBackgroundColor && !this.styleHas('textBackgroundColor')) return
    const e = t.fillStyle,
      s = this._getLeftOffset()
    let i = this._getTopOffset()
    for (let r = 0, n = this._textLines.length; r < n; r++) {
      const a = this.getHeightOfLine(r)
      if (!this.textBackgroundColor && !this.styleHas('textBackgroundColor', r)) {
        i += a
        continue
      }
      const h = this._textLines[r].length,
        l = this._getLineLeftOffset(r)
      let c = 0,
        u = 0,
        d,
        f,
        m = this.getValueOfPropertyAt(r, 0, 'textBackgroundColor')
      for (let y = 0; y < h; y++) {
        const v = this.__charBounds[r][y]
        ;(f = this.getValueOfPropertyAt(r, y, 'textBackgroundColor')),
          this.path
            ? (t.save(),
              t.translate(v.renderLeft, v.renderTop),
              t.rotate(v.angle),
              (t.fillStyle = f),
              f &&
                t.fillRect(
                  -v.width / 2,
                  (-a / this.lineHeight) * (1 - this._fontSizeFraction),
                  v.width,
                  a / this.lineHeight
                ),
              t.restore())
            : f !== m
            ? ((d = s + l + u),
              this.direction === 'rtl' && (d = this.width - d - c),
              (t.fillStyle = m),
              m && t.fillRect(d, i, c, a / this.lineHeight),
              (u = v.left),
              (c = v.width),
              (m = f))
            : (c += v.kernedWidth)
      }
      f &&
        !this.path &&
        ((d = s + l + u),
        this.direction === 'rtl' && (d = this.width - d - c),
        (t.fillStyle = f),
        t.fillRect(d, i, c, a / this.lineHeight)),
        (i += a)
    }
    ;(t.fillStyle = e), this._removeShadow(t)
  }
  _measureChar(t, e, s, i) {
    const r = me.getFontCache(e),
      n = this._getFontDeclaration(e),
      a = s + t,
      h = s && n === this._getFontDeclaration(i),
      l = e.fontSize / this.CACHE_FONT_SIZE
    let c, u, d, f
    if (
      (s && r[s] !== void 0 && (d = r[s]),
      r[t] !== void 0 && (f = c = r[t]),
      h && r[a] !== void 0 && ((u = r[a]), (f = u - d)),
      c === void 0 || d === void 0 || u === void 0)
    ) {
      const m = Xh()
      this._setTextStyles(m, e, !0),
        c === void 0 && ((f = c = m.measureText(t).width), (r[t] = c)),
        d === void 0 && h && s && ((d = m.measureText(s).width), (r[s] = d)),
        h && u === void 0 && ((u = m.measureText(a).width), (r[a] = u), (f = u - d))
    }
    return { width: c * l, kernedWidth: f * l }
  }
  getHeightOfChar(t, e) {
    return this.getValueOfPropertyAt(t, e, 'fontSize')
  }
  measureLine(t) {
    const e = this._measureLine(t)
    return this.charSpacing !== 0 && (e.width -= this._getWidthOfCharSpacing()), e.width < 0 && (e.width = 0), e
  }
  _measureLine(t) {
    let e = 0,
      s,
      i
    const r = this.pathSide === W,
      n = this.path,
      a = this._textLines[t],
      h = a.length,
      l = new Array(h)
    this.__charBounds[t] = l
    for (let c = 0; c < h; c++) {
      const u = a[c]
      ;(i = this._getGraphemeBox(u, t, c, s)), (l[c] = i), (e += i.kernedWidth), (s = u)
    }
    if (
      ((l[h] = { left: i ? i.left + i.width : 0, width: 0, kernedWidth: 0, height: this.fontSize, deltaY: 0 }),
      n && n.segmentsInfo)
    ) {
      let c = 0
      const u = n.segmentsInfo[n.segmentsInfo.length - 1].length
      switch (this.textAlign) {
        case A:
          c = r ? u - e : 0
          break
        case k:
          c = (u - e) / 2
          break
        case W:
          c = r ? 0 : u - e
          break
      }
      c += this.pathStartOffset * (r ? -1 : 1)
      for (let d = r ? h - 1 : 0; r ? d >= 0 : d < h; r ? d-- : d++)
        (i = l[d]), c > u ? (c %= u) : c < 0 && (c += u), this._setGraphemeOnPath(c, i), (c += i.kernedWidth)
    }
    return { width: e, numOfSpaces: 0 }
  }
  _setGraphemeOnPath(t, e) {
    const s = t + e.kernedWidth / 2,
      i = this.path,
      r = sh(i.path, s, i.segmentsInfo)
    ;(e.renderLeft = r.x - i.pathOffset.x),
      (e.renderTop = r.y - i.pathOffset.y),
      (e.angle = r.angle + (this.pathSide === W ? Math.PI : 0))
  }
  _getGraphemeBox(t, e, s, i, r) {
    const n = this.getCompleteStyleDeclaration(e, s),
      a = i ? this.getCompleteStyleDeclaration(e, s - 1) : {},
      h = this._measureChar(t, n, i, a)
    let l = h.kernedWidth,
      c = h.width,
      u
    this.charSpacing !== 0 && ((u = this._getWidthOfCharSpacing()), (c += u), (l += u))
    const d = { width: c, left: 0, height: n.fontSize, kernedWidth: l, deltaY: n.deltaY }
    if (s > 0 && !r) {
      const f = this.__charBounds[e][s - 1]
      d.left = f.left + f.width + h.kernedWidth - h.width
    }
    return d
  }
  getHeightOfLine(t) {
    if (this.__lineHeights[t]) return this.__lineHeights[t]
    let e = this.getHeightOfChar(t, 0)
    for (let s = 1, i = this._textLines[t].length; s < i; s++) e = Math.max(this.getHeightOfChar(t, s), e)
    return (this.__lineHeights[t] = e * this.lineHeight * this._fontSizeMult)
  }
  calcTextHeight() {
    let t,
      e = 0
    for (let s = 0, i = this._textLines.length; s < i; s++)
      (t = this.getHeightOfLine(s)), (e += s === i - 1 ? t / this.lineHeight : t)
    return e
  }
  _getLeftOffset() {
    return this.direction === 'ltr' ? -this.width / 2 : this.width / 2
  }
  _getTopOffset() {
    return -this.height / 2
  }
  _renderTextCommon(t, e) {
    t.save()
    let s = 0
    const i = this._getLeftOffset(),
      r = this._getTopOffset()
    for (let n = 0, a = this._textLines.length; n < a; n++) {
      const h = this.getHeightOfLine(n),
        l = h / this.lineHeight,
        c = this._getLineLeftOffset(n)
      this._renderTextLine(e, t, this._textLines[n], i + c, r + s + l, n), (s += h)
    }
    t.restore()
  }
  _renderTextFill(t) {
    ;(!this.fill && !this.styleHas(H)) || this._renderTextCommon(t, 'fillText')
  }
  _renderTextStroke(t) {
    ;((!this.stroke || this.strokeWidth === 0) && this.isEmptyStyles()) ||
      (this.shadow && !this.shadow.affectStroke && this._removeShadow(t),
      t.save(),
      this._setLineDash(t, this.strokeDashArray),
      t.beginPath(),
      this._renderTextCommon(t, 'strokeText'),
      t.closePath(),
      t.restore())
  }
  _renderChars(t, e, s, i, r, n) {
    const a = this.getHeightOfLine(n),
      h = this.textAlign.includes(St),
      l = this.path,
      c = !h && this.charSpacing === 0 && this.isEmptyStyles(n) && !l,
      u = this.direction === 'ltr',
      d = this.direction === 'ltr' ? 1 : -1,
      f = e.direction
    let m,
      y,
      v = '',
      C,
      S = 0,
      w,
      T
    if (
      (e.save(),
      f !== this.direction &&
        (e.canvas.setAttribute('dir', u ? 'ltr' : 'rtl'), (e.direction = u ? 'ltr' : 'rtl'), (e.textAlign = u ? A : W)),
      (r -= (a * this._fontSizeFraction) / this.lineHeight),
      c)
    ) {
      this._renderChar(t, e, n, 0, s.join(''), i, r), e.restore()
      return
    }
    for (let b = 0, O = s.length - 1; b <= O; b++)
      (w = b === O || this.charSpacing || l),
        (v += s[b]),
        (C = this.__charBounds[n][b]),
        S === 0 ? ((i += d * (C.kernedWidth - C.width)), (S += C.width)) : (S += C.kernedWidth),
        h && !w && this._reSpaceAndTab.test(s[b]) && (w = !0),
        w ||
          ((m = m || this.getCompleteStyleDeclaration(n, b)),
          (y = this.getCompleteStyleDeclaration(n, b + 1)),
          (w = fi(m, y, !1))),
        w &&
          (l
            ? (e.save(),
              e.translate(C.renderLeft, C.renderTop),
              e.rotate(C.angle),
              this._renderChar(t, e, n, b, v, -S / 2, 0),
              e.restore())
            : ((T = i), this._renderChar(t, e, n, b, v, T, r)),
          (v = ''),
          (m = y),
          (i += d * S),
          (S = 0))
    e.restore()
  }
  _applyPatternGradientTransformText(t) {
    const e = G(),
      s = this.width + this.strokeWidth,
      i = this.height + this.strokeWidth,
      r = e.getContext('2d')
    return (
      (e.width = s),
      (e.height = i),
      r.beginPath(),
      r.moveTo(0, 0),
      r.lineTo(s, 0),
      r.lineTo(s, i),
      r.lineTo(0, i),
      r.closePath(),
      r.translate(s / 2, i / 2),
      (r.fillStyle = t.toLive(r)),
      this._applyPatternGradientTransform(r, t),
      r.fill(),
      r.createPattern(e, 'no-repeat')
    )
  }
  handleFiller(t, e, s) {
    let i, r
    return ct(s)
      ? s.gradientUnits === 'percentage' || s.gradientTransform || s.patternTransform
        ? ((i = -this.width / 2),
          (r = -this.height / 2),
          t.translate(i, r),
          (t[e] = this._applyPatternGradientTransformText(s)),
          { offsetX: i, offsetY: r })
        : ((t[e] = s.toLive(t)), this._applyPatternGradientTransform(t, s))
      : ((t[e] = s), { offsetX: 0, offsetY: 0 })
  }
  _setStrokeStyles(t, e) {
    let { stroke: s, strokeWidth: i } = e
    return (
      (t.lineWidth = i),
      (t.lineCap = this.strokeLineCap),
      (t.lineDashOffset = this.strokeDashOffset),
      (t.lineJoin = this.strokeLineJoin),
      (t.miterLimit = this.strokeMiterLimit),
      this.handleFiller(t, 'strokeStyle', s)
    )
  }
  _setFillStyles(t, e) {
    let { fill: s } = e
    return this.handleFiller(t, 'fillStyle', s)
  }
  _renderChar(t, e, s, i, r, n, a) {
    const h = this._getStyleDeclaration(s, i),
      l = this.getCompleteStyleDeclaration(s, i),
      c = t === 'fillText' && l.fill,
      u = t === 'strokeText' && l.stroke && l.strokeWidth
    if (!(!u && !c)) {
      if (
        (e.save(),
        (e.font = this._getFontDeclaration(l)),
        h.textBackgroundColor && this._removeShadow(e),
        h.deltaY && (a += h.deltaY),
        c)
      ) {
        const d = this._setFillStyles(e, l)
        e.fillText(r, n - d.offsetX, a - d.offsetY)
      }
      if (u) {
        const d = this._setStrokeStyles(e, l)
        e.strokeText(r, n - d.offsetX, a - d.offsetY)
      }
      e.restore()
    }
  }
  setSuperscript(t, e) {
    this._setScript(t, e, this.superscript)
  }
  setSubscript(t, e) {
    this._setScript(t, e, this.subscript)
  }
  _setScript(t, e, s) {
    const i = this.get2DCursorLocation(t, !0),
      r = this.getValueOfPropertyAt(i.lineIndex, i.charIndex, 'fontSize'),
      n = this.getValueOfPropertyAt(i.lineIndex, i.charIndex, 'deltaY'),
      a = { fontSize: r * s.size, deltaY: n + r * s.baseline }
    this.setSelectionStyles(a, t, e)
  }
  _getLineLeftOffset(t) {
    const e = this.getLineWidth(t),
      s = this.width - e,
      i = this.textAlign,
      r = this.direction,
      n = this.isEndOfWrapping(t)
    let a = 0
    return i === St || (i === ve && !n) || (i === ye && !n) || (i === qe && !n)
      ? 0
      : (i === k && (a = s / 2),
        i === W && (a = s),
        i === ve && (a = s / 2),
        i === ye && (a = s),
        r === 'rtl' &&
          (i === W || i === St || i === ye
            ? (a = 0)
            : i === A || i === qe
            ? (a = -s)
            : (i === k || i === ve) && (a = -s / 2)),
        a)
  }
  _clearCache() {
    ;(this._forceClearCache = !1), (this.__lineWidths = []), (this.__lineHeights = []), (this.__charBounds = [])
  }
  getLineWidth(t) {
    if (this.__lineWidths[t] !== void 0) return this.__lineWidths[t]
    const { width: e } = this.measureLine(t)
    return (this.__lineWidths[t] = e), e
  }
  _getWidthOfCharSpacing() {
    return this.charSpacing !== 0 ? (this.fontSize * this.charSpacing) / 1e3 : 0
  }
  getValueOfPropertyAt(t, e, s) {
    var i
    return (i = this._getStyleDeclaration(t, e)[s]) !== null && i !== void 0 ? i : this[s]
  }
  _renderTextDecoration(t, e) {
    if (!this[e] && !this.styleHas(e)) return
    let s = this._getTopOffset()
    const i = this._getLeftOffset(),
      r = this.path,
      n = this._getWidthOfCharSpacing(),
      a = this.offsets[e]
    for (let h = 0, l = this._textLines.length; h < l; h++) {
      const c = this.getHeightOfLine(h)
      if (!this[e] && !this.styleHas(e, h)) {
        s += c
        continue
      }
      const u = this._textLines[h],
        d = c / this.lineHeight,
        f = this._getLineLeftOffset(h)
      let m = 0,
        y = 0,
        v = this.getValueOfPropertyAt(h, 0, e),
        C = this.getValueOfPropertyAt(h, 0, H),
        S,
        w
      const T = s + d * (1 - this._fontSizeFraction)
      let b = this.getHeightOfChar(h, 0),
        O = this.getValueOfPropertyAt(h, 0, 'deltaY')
      for (let D = 0, F = u.length; D < F; D++) {
        const V = this.__charBounds[h][D]
        ;(S = this.getValueOfPropertyAt(h, D, e)), (w = this.getValueOfPropertyAt(h, D, H))
        const J = this.getHeightOfChar(h, D),
          U = this.getValueOfPropertyAt(h, D, 'deltaY')
        if (r && S && w)
          t.save(),
            (t.fillStyle = C),
            t.translate(V.renderLeft, V.renderTop),
            t.rotate(V.angle),
            t.fillRect(-V.kernedWidth / 2, a * J + U, V.kernedWidth, this.fontSize / 15),
            t.restore()
        else if ((S !== v || w !== C || J !== b || U !== O) && y > 0) {
          let K = i + f + m
          this.direction === 'rtl' && (K = this.width - K - y),
            v && C && ((t.fillStyle = C), t.fillRect(K, T + a * b + O, y, this.fontSize / 15)),
            (m = V.left),
            (y = V.width),
            (v = S),
            (C = w),
            (b = J),
            (O = U)
        } else y += V.kernedWidth
      }
      let M = i + f + m
      this.direction === 'rtl' && (M = this.width - M - y),
        (t.fillStyle = w),
        S && w && t.fillRect(M, T + a * b + O, y - n, this.fontSize / 15),
        (s += c)
    }
    this._removeShadow(t)
  }
  _getFontDeclaration() {
    let {
        fontFamily: t = this.fontFamily,
        fontStyle: e = this.fontStyle,
        fontWeight: s = this.fontWeight,
        fontSize: i = this.fontSize,
      } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0
    const n =
      t.includes("'") || t.includes('"') || t.includes(',') || tt.genericFonts.includes(t.toLowerCase())
        ? t
        : '"'.concat(t, '"')
    return [e, s, ''.concat(r ? this.CACHE_FONT_SIZE : i, 'px'), n].join(' ')
  }
  render(t) {
    !this.visible ||
      (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen()) ||
      (this._forceClearCache && this.initDimensions(), super.render(t))
  }
  graphemeSplit(t) {
    return di(t)
  }
  _splitTextIntoLines(t) {
    const e = t.split(this._reNewline),
      s = new Array(e.length),
      i = [
        `
`,
      ]
    let r = []
    for (let n = 0; n < e.length; n++) (s[n] = this.graphemeSplit(e[n])), (r = r.concat(s[n], i))
    return r.pop(), { _unwrappedLines: s, lines: e, graphemeText: r, graphemeLines: s }
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    return p(
      p({}, super.toObject([...rn, ...t])),
      {},
      { styles: na(this.styles, this.text) },
      this.path ? { path: this.path.toObject() } : {}
    )
  }
  set(t, e) {
    const { textLayoutProperties: s } = this.constructor
    super.set(t, e)
    let i = !1,
      r = !1
    if (typeof t == 'object')
      for (const n in t) n === 'path' && this.setPathInfo(), (i = i || s.includes(n)), (r = r || n === 'path')
    else (i = s.includes(t)), (r = t === 'path')
    return r && this.setPathInfo(), i && this.initialized && (this.initDimensions(), this.setCoords()), this
  }
  complexity() {
    return 1
  }
  static async fromElement(t, e, s) {
    const i = Lt(t, tt.ATTRIBUTE_NAMES, s),
      r = p(p({}, e), i),
      {
        textAnchor: n = A,
        textDecoration: a = '',
        dx: h = 0,
        dy: l = 0,
        top: c = 0,
        left: u = 0,
        fontSize: d = Qs,
        strokeWidth: f = 1,
      } = r,
      m = j(r, Wh),
      y = (t.textContent || '').replace(/^\s+|\s+$|\n+/g, '').replace(/\s+/g, ' '),
      v = new this(
        y,
        p(
          {
            left: u + h,
            top: c + l,
            underline: a.includes('underline'),
            overline: a.includes('overline'),
            linethrough: a.includes('line-through'),
            strokeWidth: 0,
            fontSize: d,
          },
          m
        )
      ),
      C = v.getScaledHeight() / v.height,
      S = (v.height + v.strokeWidth) * v.lineHeight - v.height,
      w = S * C,
      T = v.getScaledHeight() + w
    let b = 0
    return (
      n === k && (b = v.getScaledWidth() / 2),
      n === W && (b = v.getScaledWidth()),
      v.set({
        left: v.left - b,
        top: v.top - (T - v.fontSize * (0.07 + v._fontSizeFraction)) / v.lineHeight,
        strokeWidth: f,
      }),
      v
    )
  }
  static fromObject(t) {
    return this._fromObject(p(p({}, t), {}, { styles: oa(t.styles || {}, t.text) }), { extraParam: 'text' })
  }
}
g(tt, 'textLayoutProperties', sn)
g(tt, 'cacheProperties', [...At, ...rn])
g(tt, 'ownDefaults', Bh)
g(tt, 'type', 'Text')
g(tt, 'genericFonts', [
  'serif',
  'sans-serif',
  'monospace',
  'cursive',
  'fantasy',
  'system-ui',
  'ui-serif',
  'ui-sans-serif',
  'ui-monospace',
  'ui-rounded',
  'math',
  'emoji',
  'fangsong',
])
g(
  tt,
  'ATTRIBUTE_NAMES',
  Xt.concat(
    'x',
    'y',
    'dx',
    'dy',
    'font-family',
    'font-style',
    'font-weight',
    'font-size',
    'letter-spacing',
    'text-decoration',
    'text-anchor'
  )
)
Lr(tt, [Yh])
x.setClass(tt)
x.setSVGClass(tt)
class zh {
  constructor(t) {
    g(this, 'target', void 0),
      g(this, '__mouseDownInPlace', !1),
      g(this, '__dragStartFired', !1),
      g(this, '__isDraggingOver', !1),
      g(this, '__dragStartSelection', void 0),
      g(this, '__dragImageDisposer', void 0),
      g(this, '_dispose', void 0),
      (this.target = t)
    const e = [
      this.target.on('dragenter', this.dragEnterHandler.bind(this)),
      this.target.on('dragover', this.dragOverHandler.bind(this)),
      this.target.on('dragleave', this.dragLeaveHandler.bind(this)),
      this.target.on('dragend', this.dragEndHandler.bind(this)),
      this.target.on('drop', this.dropHandler.bind(this)),
    ]
    this._dispose = () => {
      e.forEach(s => s()), (this._dispose = void 0)
    }
  }
  isPointerOverSelection(t) {
    const e = this.target,
      s = e.getSelectionStartFromPointer(t)
    return e.isEditing && s >= e.selectionStart && s <= e.selectionEnd && e.selectionStart < e.selectionEnd
  }
  start(t) {
    return (this.__mouseDownInPlace = this.isPointerOverSelection(t))
  }
  isActive() {
    return this.__mouseDownInPlace
  }
  end(t) {
    const e = this.isActive()
    return (
      e && !this.__dragStartFired && (this.target.setCursorByClick(t), this.target.initDelayedCursor(!0)),
      (this.__mouseDownInPlace = !1),
      (this.__dragStartFired = !1),
      (this.__isDraggingOver = !1),
      e
    )
  }
  getDragStartSelection() {
    return this.__dragStartSelection
  }
  setDragImage(t, e) {
    var s
    let { selectionStart: i, selectionEnd: r } = e
    const n = this.target,
      a = n.canvas,
      h = new _(n.flipX ? -1 : 1, n.flipY ? -1 : 1),
      l = n._getCursorBoundaries(i),
      u = new _(l.left + l.leftOffset, l.top + l.topOffset).multiply(h).transform(n.calcTransformMatrix()),
      f = a.getScenePoint(t).subtract(u),
      m = n.getCanvasRetinaScaling(),
      y = n.getBoundingRect(),
      v = u.subtract(new _(y.left, y.top)),
      C = a.viewportTransform,
      S = v.add(f).transform(C, !0),
      w = n.backgroundColor,
      T = ui(n.styles)
    n.backgroundColor = ''
    const b = { stroke: 'transparent', fill: 'transparent', textBackgroundColor: 'transparent' }
    n.setSelectionStyles(b, 0, i), n.setSelectionStyles(b, r, n.text.length), (n.dirty = !0)
    const O = n.toCanvasElement({ enableRetinaScaling: a.enableRetinaScaling, viewportTransform: !0 })
    ;(n.backgroundColor = w),
      (n.styles = T),
      (n.dirty = !0),
      qs(O, {
        position: 'fixed',
        left: ''.concat(-O.width, 'px'),
        border: rt,
        width: ''.concat(O.width / m, 'px'),
        height: ''.concat(O.height / m, 'px'),
      }),
      this.__dragImageDisposer && this.__dragImageDisposer(),
      (this.__dragImageDisposer = () => {
        O.remove()
      }),
      gt(t.target || this.target.hiddenTextarea).body.appendChild(O),
      (s = t.dataTransfer) === null || s === void 0 || s.setDragImage(O, S.x, S.y)
  }
  onDragStart(t) {
    this.__dragStartFired = !0
    const e = this.target,
      s = this.isActive()
    if (s && t.dataTransfer) {
      const i = (this.__dragStartSelection = { selectionStart: e.selectionStart, selectionEnd: e.selectionEnd }),
        r = e._text.slice(i.selectionStart, i.selectionEnd).join(''),
        n = p({ text: e.text, value: r }, i)
      t.dataTransfer.setData('text/plain', r),
        t.dataTransfer.setData(
          'application/fabric',
          JSON.stringify({ value: r, styles: e.getSelectionStyles(i.selectionStart, i.selectionEnd, !0) })
        ),
        (t.dataTransfer.effectAllowed = 'copyMove'),
        this.setDragImage(t, n)
    }
    return e.abortCursorAnimation(), s
  }
  canDrop(t) {
    if (this.target.editable && !this.target.getActiveControl() && !t.defaultPrevented) {
      if (this.isActive() && this.__dragStartSelection) {
        const e = this.target.getSelectionStartFromPointer(t),
          s = this.__dragStartSelection
        return e < s.selectionStart || e > s.selectionEnd
      }
      return !0
    }
    return !1
  }
  targetCanDrop(t) {
    return this.target.canDrop(t)
  }
  dragEnterHandler(t) {
    let { e } = t
    const s = this.targetCanDrop(e)
    !this.__isDraggingOver && s && (this.__isDraggingOver = !0)
  }
  dragOverHandler(t) {
    const { e } = t,
      s = this.targetCanDrop(e)
    !this.__isDraggingOver && s
      ? (this.__isDraggingOver = !0)
      : this.__isDraggingOver && !s && (this.__isDraggingOver = !1),
      this.__isDraggingOver && (e.preventDefault(), (t.canDrop = !0), (t.dropTarget = this.target))
  }
  dragLeaveHandler() {
    ;(this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = !1)
  }
  dropHandler(t) {
    var e
    const { e: s } = t,
      i = s.defaultPrevented
    ;(this.__isDraggingOver = !1), s.preventDefault()
    let r = (e = s.dataTransfer) === null || e === void 0 ? void 0 : e.getData('text/plain')
    if (r && !i) {
      const n = this.target,
        a = n.canvas
      let h = n.getSelectionStartFromPointer(s)
      const { styles: l } = s.dataTransfer.types.includes('application/fabric')
          ? JSON.parse(s.dataTransfer.getData('application/fabric'))
          : {},
        c = r[Math.max(0, r.length - 1)],
        u = 0
      if (this.__dragStartSelection) {
        const d = this.__dragStartSelection.selectionStart,
          f = this.__dragStartSelection.selectionEnd
        h > d && h <= f ? (h = d) : h > f && (h -= f - d), n.removeChars(d, f), delete this.__dragStartSelection
      }
      n._reNewline.test(c) && (n._reNewline.test(n._text[h]) || h === n._text.length) && (r = r.trimEnd()),
        (t.didDrop = !0),
        (t.dropTarget = n),
        n.insertChars(r, l, h),
        a.setActiveObject(n),
        n.enterEditing(s),
        (n.selectionStart = Math.min(h + u, n._text.length)),
        (n.selectionEnd = Math.min(n.selectionStart + r.length, n._text.length)),
        (n.hiddenTextarea.value = n.text),
        n._updateTextarea(),
        n.hiddenTextarea.focus(),
        n.fire(Ie, { index: h + u, action: 'drop' }),
        a.fire('text:changed', { target: n }),
        (a.contextTopDirty = !0),
        a.requestRenderAll()
    }
  }
  dragEndHandler(t) {
    let { e } = t
    if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
      var s
      const i = this.target,
        r = this.target.canvas,
        { selectionStart: n, selectionEnd: a } = this.__dragStartSelection,
        h = ((s = e.dataTransfer) === null || s === void 0 ? void 0 : s.dropEffect) || rt
      h === rt
        ? ((i.selectionStart = n), (i.selectionEnd = a), i._updateTextarea(), i.hiddenTextarea.focus())
        : (i.clearContextTop(),
          h === 'move' &&
            (i.removeChars(n, a),
            (i.selectionStart = i.selectionEnd = n),
            i.hiddenTextarea && (i.hiddenTextarea.value = i.text),
            i._updateTextarea(),
            i.fire(Ie, { index: n, action: 'dragend' }),
            r.fire('text:changed', { target: i }),
            r.requestRenderAll()),
          i.exitEditing())
    }
    this.__dragImageDisposer && this.__dragImageDisposer(),
      delete this.__dragImageDisposer,
      delete this.__dragStartSelection,
      (this.__isDraggingOver = !1)
  }
  dispose() {
    this._dispose && this._dispose()
  }
}
const ir = /[ \n\.,;!\?\-]/
class Hh extends tt {
  constructor() {
    super(...arguments), g(this, '_currentCursorOpacity', 1)
  }
  initBehavior() {
    ;(this._tick = this._tick.bind(this)),
      (this._onTickComplete = this._onTickComplete.bind(this)),
      (this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this))
  }
  onDeselect(t) {
    return this.isEditing && this.exitEditing(), (this.selected = !1), super.onDeselect(t)
  }
  _animateCursor(t) {
    let { toValue: e, duration: s, delay: i, onComplete: r } = t
    return Mr({
      startValue: this._currentCursorOpacity,
      endValue: e,
      duration: s,
      delay: i,
      onComplete: r,
      abort: () => !this.canvas || this.selectionStart !== this.selectionEnd,
      onChange: n => {
        ;(this._currentCursorOpacity = n), this.renderCursorOrSelection()
      },
    })
  }
  _tick(t) {
    this._currentTickState = this._animateCursor({
      toValue: 0,
      duration: this.cursorDuration / 2,
      delay: Math.max(t || 0, 100),
      onComplete: this._onTickComplete,
    })
  }
  _onTickComplete() {
    var t
    ;(t = this._currentTickCompleteState) === null || t === void 0 || t.abort(),
      (this._currentTickCompleteState = this._animateCursor({
        toValue: 1,
        duration: this.cursorDuration,
        onComplete: this._tick,
      }))
  }
  initDelayedCursor(t) {
    this.abortCursorAnimation(), this._tick(t ? 0 : this.cursorDelay)
  }
  abortCursorAnimation() {
    let t = !1
    ;[this._currentTickState, this._currentTickCompleteState].forEach(e => {
      e && !e.isDone() && ((t = !0), e.abort())
    }),
      (this._currentCursorOpacity = 1),
      t && this.clearContextTop()
  }
  restartCursorIfNeeded() {
    ;[this._currentTickState, this._currentTickCompleteState].some(t => !t || t.isDone()) && this.initDelayedCursor()
  }
  selectAll() {
    return (
      (this.selectionStart = 0),
      (this.selectionEnd = this._text.length),
      this._fireSelectionChanged(),
      this._updateTextarea(),
      this
    )
  }
  getSelectedText() {
    return this._text.slice(this.selectionStart, this.selectionEnd).join('')
  }
  findWordBoundaryLeft(t) {
    let e = 0,
      s = t - 1
    if (this._reSpace.test(this._text[s])) for (; this._reSpace.test(this._text[s]); ) e++, s--
    for (; /\S/.test(this._text[s]) && s > -1; ) e++, s--
    return t - e
  }
  findWordBoundaryRight(t) {
    let e = 0,
      s = t
    if (this._reSpace.test(this._text[s])) for (; this._reSpace.test(this._text[s]); ) e++, s++
    for (; /\S/.test(this._text[s]) && s < this._text.length; ) e++, s++
    return t + e
  }
  findLineBoundaryLeft(t) {
    let e = 0,
      s = t - 1
    for (; !/\n/.test(this._text[s]) && s > -1; ) e++, s--
    return t - e
  }
  findLineBoundaryRight(t) {
    let e = 0,
      s = t
    for (; !/\n/.test(this._text[s]) && s < this._text.length; ) e++, s++
    return t + e
  }
  searchWordBoundary(t, e) {
    const s = this._text
    let i = t > 0 && this._reSpace.test(s[t]) && (e === -1 || !ti.test(s[t - 1])) ? t - 1 : t,
      r = s[i]
    for (; i > 0 && i < s.length && !ir.test(r); ) (i += e), (r = s[i])
    return e === -1 && ir.test(r) && i++, i
  }
  selectWord(t) {
    t = t || this.selectionStart
    const e = this.searchWordBoundary(t, -1),
      s = Math.max(e, this.searchWordBoundary(t, 1))
    ;(this.selectionStart = e),
      (this.selectionEnd = s),
      this._fireSelectionChanged(),
      this._updateTextarea(),
      this.renderCursorOrSelection()
  }
  selectLine(t) {
    t = t || this.selectionStart
    const e = this.findLineBoundaryLeft(t),
      s = this.findLineBoundaryRight(t)
    return (
      (this.selectionStart = e), (this.selectionEnd = s), this._fireSelectionChanged(), this._updateTextarea(), this
    )
  }
  enterEditing(t) {
    this.isEditing ||
      !this.editable ||
      (this.canvas && (this.canvas.calcOffset(), this.canvas.textEditingManager.exitTextEditing()),
      (this.isEditing = !0),
      this.initHiddenTextarea(),
      this.hiddenTextarea.focus(),
      (this.hiddenTextarea.value = this.text),
      this._updateTextarea(),
      this._saveEditingProps(),
      this._setEditingProps(),
      (this._textBeforeEdit = this.text),
      this._tick(),
      this.fire('editing:entered', t ? { e: t } : void 0),
      this._fireSelectionChanged(),
      this.canvas && (this.canvas.fire('text:editing:entered', { target: this, e: t }), this.canvas.requestRenderAll()))
  }
  updateSelectionOnMouseMove(t) {
    if (this.getActiveControl()) return
    const e = this.hiddenTextarea
    gt(e).activeElement !== e && e.focus()
    const s = this.getSelectionStartFromPointer(t),
      i = this.selectionStart,
      r = this.selectionEnd
    ;((s !== this.__selectionStartOnMouseDown || i === r) && (i === s || r === s)) ||
      (s > this.__selectionStartOnMouseDown
        ? ((this.selectionStart = this.__selectionStartOnMouseDown), (this.selectionEnd = s))
        : ((this.selectionStart = s), (this.selectionEnd = this.__selectionStartOnMouseDown)),
      (this.selectionStart !== i || this.selectionEnd !== r) &&
        (this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()))
  }
  _setEditingProps() {
    ;(this.hoverCursor = 'text'),
      this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = 'text'),
      (this.borderColor = this.editingBorderColor),
      (this.hasControls = this.selectable = !1),
      (this.lockMovementX = this.lockMovementY = !0)
  }
  fromStringToGraphemeSelection(t, e, s) {
    const i = s.slice(0, t),
      r = this.graphemeSplit(i).length
    if (t === e) return { selectionStart: r, selectionEnd: r }
    const n = s.slice(t, e),
      a = this.graphemeSplit(n).length
    return { selectionStart: r, selectionEnd: r + a }
  }
  fromGraphemeToStringSelection(t, e, s) {
    const i = s.slice(0, t),
      r = i.join('').length
    if (t === e) return { selectionStart: r, selectionEnd: r }
    const n = s.slice(t, e),
      a = n.join('').length
    return { selectionStart: r, selectionEnd: r + a }
  }
  _updateTextarea() {
    if (((this.cursorOffsetCache = {}), !!this.hiddenTextarea)) {
      if (!this.inCompositionMode) {
        const t = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text)
        ;(this.hiddenTextarea.selectionStart = t.selectionStart), (this.hiddenTextarea.selectionEnd = t.selectionEnd)
      }
      this.updateTextareaPosition()
    }
  }
  updateFromTextArea() {
    if (!this.hiddenTextarea) return
    this.cursorOffsetCache = {}
    const t = this.hiddenTextarea
    ;(this.text = t.value), this.set('dirty', !0), this.initDimensions(), this.setCoords()
    const e = this.fromStringToGraphemeSelection(t.selectionStart, t.selectionEnd, t.value)
    ;(this.selectionEnd = this.selectionStart = e.selectionEnd),
      this.inCompositionMode || (this.selectionStart = e.selectionStart),
      this.updateTextareaPosition()
  }
  updateTextareaPosition() {
    if (this.selectionStart === this.selectionEnd) {
      const t = this._calcTextareaPosition()
      ;(this.hiddenTextarea.style.left = t.left), (this.hiddenTextarea.style.top = t.top)
    }
  }
  _calcTextareaPosition() {
    if (!this.canvas) return { left: '1px', top: '1px' }
    const t = this.inCompositionMode ? this.compositionStart : this.selectionStart,
      e = this._getCursorBoundaries(t),
      s = this.get2DCursorLocation(t),
      i = s.lineIndex,
      r = s.charIndex,
      n = this.getValueOfPropertyAt(i, r, 'fontSize') * this.lineHeight,
      a = e.leftOffset,
      h = this.getCanvasRetinaScaling(),
      l = this.canvas.upperCanvasEl,
      c = l.width / h,
      u = l.height / h,
      d = c - n,
      f = u - n,
      m = new _(e.left + a, e.top + e.topOffset + n)
        .transform(this.calcTransformMatrix())
        .transform(this.canvas.viewportTransform)
        .multiply(new _(l.clientWidth / c, l.clientHeight / u))
    return (
      m.x < 0 && (m.x = 0),
      m.x > d && (m.x = d),
      m.y < 0 && (m.y = 0),
      m.y > f && (m.y = f),
      (m.x += this.canvas._offset.left),
      (m.y += this.canvas._offset.top),
      { left: ''.concat(m.x, 'px'), top: ''.concat(m.y, 'px'), fontSize: ''.concat(n, 'px'), charHeight: n }
    )
  }
  _saveEditingProps() {
    this._savedProps = {
      hasControls: this.hasControls,
      borderColor: this.borderColor,
      lockMovementX: this.lockMovementX,
      lockMovementY: this.lockMovementY,
      hoverCursor: this.hoverCursor,
      selectable: this.selectable,
      defaultCursor: this.canvas && this.canvas.defaultCursor,
      moveCursor: this.canvas && this.canvas.moveCursor,
    }
  }
  _restoreEditingProps() {
    !this._savedProps ||
      ((this.hoverCursor = this._savedProps.hoverCursor),
      (this.hasControls = this._savedProps.hasControls),
      (this.borderColor = this._savedProps.borderColor),
      (this.selectable = this._savedProps.selectable),
      (this.lockMovementX = this._savedProps.lockMovementX),
      (this.lockMovementY = this._savedProps.lockMovementY),
      this.canvas &&
        ((this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor),
        (this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor)),
      delete this._savedProps)
  }
  _exitEditing() {
    const t = this.hiddenTextarea
    ;(this.selected = !1),
      (this.isEditing = !1),
      t && (t.blur && t.blur(), t.parentNode && t.parentNode.removeChild(t)),
      (this.hiddenTextarea = null),
      this.abortCursorAnimation(),
      this.selectionStart !== this.selectionEnd && this.clearContextTop()
  }
  exitEditing() {
    const t = this._textBeforeEdit !== this.text
    return (
      this._exitEditing(),
      (this.selectionEnd = this.selectionStart),
      this._restoreEditingProps(),
      this._forceClearCache && (this.initDimensions(), this.setCoords()),
      this.fire('editing:exited'),
      t && this.fire(Ve),
      this.canvas &&
        (this.canvas.fire('text:editing:exited', { target: this }),
        t && this.canvas.fire('object:modified', { target: this })),
      this
    )
  }
  _removeExtraneousStyles() {
    for (const t in this.styles) this._textLines[t] || delete this.styles[t]
  }
  removeStyleFromTo(t, e) {
    const { lineIndex: s, charIndex: i } = this.get2DCursorLocation(t, !0),
      { lineIndex: r, charIndex: n } = this.get2DCursorLocation(e, !0)
    if (s !== r) {
      if (this.styles[s]) for (let a = i; a < this._unwrappedTextLines[s].length; a++) delete this.styles[s][a]
      if (this.styles[r])
        for (let a = n; a < this._unwrappedTextLines[r].length; a++) {
          const h = this.styles[r][a]
          h && (this.styles[s] || (this.styles[s] = {}), (this.styles[s][i + a - n] = h))
        }
      for (let a = s + 1; a <= r; a++) delete this.styles[a]
      this.shiftLineStyles(r, s - r)
    } else if (this.styles[s]) {
      const a = this.styles[s],
        h = n - i
      for (let l = i; l < n; l++) delete a[l]
      for (const l in this.styles[s]) {
        const c = parseInt(l, 10)
        c >= n && ((a[c - h] = a[l]), delete a[l])
      }
    }
  }
  shiftLineStyles(t, e) {
    const s = Object.assign({}, this.styles)
    for (const i in this.styles) {
      const r = parseInt(i, 10)
      r > t && ((this.styles[r + e] = s[r]), s[r - e] || delete this.styles[r])
    }
  }
  insertNewlineStyleObject(t, e, s, i) {
    const r = {},
      n = this._unwrappedTextLines[t].length,
      a = n === e
    let h = !1
    s || (s = 1), this.shiftLineStyles(t, s)
    const l = this.styles[t] ? this.styles[t][e === 0 ? e : e - 1] : void 0
    for (const u in this.styles[t]) {
      const d = parseInt(u, 10)
      d >= e && ((h = !0), (r[d - e] = this.styles[t][u]), (a && e === 0) || delete this.styles[t][u])
    }
    let c = !1
    for (h && !a && ((this.styles[t + s] = r), (c = !0)), (c || n > e) && s--; s > 0; )
      i && i[s - 1]
        ? (this.styles[t + s] = { 0: p({}, i[s - 1]) })
        : l
        ? (this.styles[t + s] = { 0: p({}, l) })
        : delete this.styles[t + s],
        s--
    this._forceClearCache = !0
  }
  insertCharStyleObject(t, e, s, i) {
    this.styles || (this.styles = {})
    const r = this.styles[t],
      n = r ? p({}, r) : {}
    s || (s = 1)
    for (const h in n) {
      const l = parseInt(h, 10)
      l >= e && ((r[l + s] = n[l]), n[l - s] || delete r[l])
    }
    if (((this._forceClearCache = !0), i)) {
      for (; s--; )
        !Object.keys(i[s]).length || (this.styles[t] || (this.styles[t] = {}), (this.styles[t][e + s] = p({}, i[s])))
      return
    }
    if (!r) return
    const a = r[e ? e - 1 : 1]
    for (; a && s--; ) this.styles[t][e + s] = p({}, a)
  }
  insertNewStyleBlock(t, e, s) {
    const i = this.get2DCursorLocation(e, !0),
      r = [0]
    let n = 0
    for (let h = 0; h < t.length; h++)
      t[h] ===
      `
`
        ? (n++, (r[n] = 0))
        : r[n]++
    r[0] > 0 && (this.insertCharStyleObject(i.lineIndex, i.charIndex, r[0], s), (s = s && s.slice(r[0] + 1))),
      n && this.insertNewlineStyleObject(i.lineIndex, i.charIndex + r[0], n)
    let a
    for (a = 1; a < n; a++)
      r[a] > 0
        ? this.insertCharStyleObject(i.lineIndex + a, 0, r[a], s)
        : s && this.styles[i.lineIndex + a] && s[0] && (this.styles[i.lineIndex + a][0] = s[0]),
        (s = s && s.slice(r[a] + 1))
    r[a] > 0 && this.insertCharStyleObject(i.lineIndex + a, 0, r[a], s)
  }
  removeChars(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t + 1
    this.removeStyleFromTo(t, e),
      this._text.splice(t, e - t),
      (this.text = this._text.join('')),
      this.set('dirty', !0),
      this.initDimensions(),
      this.setCoords(),
      this._removeExtraneousStyles()
  }
  insertChars(t, e, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : s
    i > s && this.removeStyleFromTo(s, i)
    const r = this.graphemeSplit(t)
    this.insertNewStyleBlock(r, s, e),
      (this._text = [...this._text.slice(0, s), ...r, ...this._text.slice(i)]),
      (this.text = this._text.join('')),
      this.set('dirty', !0),
      this.initDimensions(),
      this.setCoords(),
      this._removeExtraneousStyles()
  }
  setSelectionStartEndWithShift(t, e, s) {
    s <= t
      ? (e === t
          ? (this._selectionDirection = A)
          : this._selectionDirection === W && ((this._selectionDirection = A), (this.selectionEnd = t)),
        (this.selectionStart = s))
      : s > t && s < e
      ? this._selectionDirection === W
        ? (this.selectionEnd = s)
        : (this.selectionStart = s)
      : (e === t
          ? (this._selectionDirection = W)
          : this._selectionDirection === A && ((this._selectionDirection = W), (this.selectionStart = e)),
        (this.selectionEnd = s))
  }
}
class Gh extends Hh {
  initHiddenTextarea() {
    const t = (this.canvas && gt(this.canvas.getElement())) || oe(),
      e = t.createElement('textarea')
    Object.entries({
      autocapitalize: 'off',
      autocorrect: 'off',
      autocomplete: 'off',
      spellcheck: 'false',
      'data-fabric': 'textarea',
      wrap: 'off',
    }).map(n => {
      let [a, h] = n
      return e.setAttribute(a, h)
    })
    const { top: s, left: i, fontSize: r } = this._calcTextareaPosition()
    ;(e.style.cssText = 'position: absolute; top: '
      .concat(s, '; left: ')
      .concat(i, '; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ')
      .concat(r, ';')),
      (this.hiddenTextareaContainer || t.body).appendChild(e),
      Object.entries({
        blur: 'blur',
        keydown: 'onKeyDown',
        keyup: 'onKeyUp',
        input: 'onInput',
        copy: 'copy',
        cut: 'copy',
        paste: 'paste',
        compositionstart: 'onCompositionStart',
        compositionupdate: 'onCompositionUpdate',
        compositionend: 'onCompositionEnd',
      }).map(n => {
        let [a, h] = n
        return e.addEventListener(a, this[h].bind(this))
      }),
      (this.hiddenTextarea = e)
  }
  blur() {
    this.abortCursorAnimation()
  }
  onKeyDown(t) {
    if (!this.isEditing) return
    const e = this.direction === 'rtl' ? this.keysMapRtl : this.keysMap
    if (t.keyCode in e) this[e[t.keyCode]](t)
    else if (t.keyCode in this.ctrlKeysMapDown && (t.ctrlKey || t.metaKey)) this[this.ctrlKeysMapDown[t.keyCode]](t)
    else return
    t.stopImmediatePropagation(),
      t.preventDefault(),
      t.keyCode >= 33 && t.keyCode <= 40
        ? ((this.inCompositionMode = !1), this.clearContextTop(), this.renderCursorOrSelection())
        : this.canvas && this.canvas.requestRenderAll()
  }
  onKeyUp(t) {
    if (!this.isEditing || this._copyDone || this.inCompositionMode) {
      this._copyDone = !1
      return
    }
    if (t.keyCode in this.ctrlKeysMapUp && (t.ctrlKey || t.metaKey)) this[this.ctrlKeysMapUp[t.keyCode]](t)
    else return
    t.stopImmediatePropagation(), t.preventDefault(), this.canvas && this.canvas.requestRenderAll()
  }
  onInput(t) {
    const e = this.fromPaste
    if (((this.fromPaste = !1), t && t.stopPropagation(), !this.isEditing)) return
    const s = () => {
      this.updateFromTextArea(),
        this.fire(Ie),
        this.canvas && (this.canvas.fire('text:changed', { target: this }), this.canvas.requestRenderAll())
    }
    if (this.hiddenTextarea.value === '') {
      ;(this.styles = {}), s()
      return
    }
    const i = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText,
      r = this._text.length,
      n = i.length,
      a = this.selectionStart,
      h = this.selectionEnd,
      l = a !== h
    let c,
      u,
      d = n - r,
      f,
      m
    const y = this.fromStringToGraphemeSelection(
        this.hiddenTextarea.selectionStart,
        this.hiddenTextarea.selectionEnd,
        this.hiddenTextarea.value
      ),
      v = a > y.selectionStart
    l
      ? ((u = this._text.slice(a, h)), (d += h - a))
      : n < r && (v ? (u = this._text.slice(h + d, h)) : (u = this._text.slice(a, a - d)))
    const C = i.slice(y.selectionEnd - d, y.selectionEnd)
    if (
      (u &&
        u.length &&
        (C.length && ((c = this.getSelectionStyles(a, a + 1, !1)), (c = C.map(() => c[0]))),
        l ? ((f = a), (m = h)) : v ? ((f = h - u.length), (m = h)) : ((f = h), (m = h + u.length)),
        this.removeStyleFromTo(f, m)),
      C.length)
    ) {
      const { copyPasteData: S } = bt()
      e && C.join('') === S.copiedText && !E.disableStyleCopyPaste && (c = S.copiedTextStyle),
        this.insertNewStyleBlock(C, a, c)
    }
    s()
  }
  onCompositionStart() {
    this.inCompositionMode = !0
  }
  onCompositionEnd() {
    this.inCompositionMode = !1
  }
  onCompositionUpdate(t) {
    let { target: e } = t
    const { selectionStart: s, selectionEnd: i } = e
    ;(this.compositionStart = s), (this.compositionEnd = i), this.updateTextareaPosition()
  }
  copy() {
    if (this.selectionStart === this.selectionEnd) return
    const { copyPasteData: t } = bt()
    ;(t.copiedText = this.getSelectedText()),
      E.disableStyleCopyPaste
        ? (t.copiedTextStyle = void 0)
        : (t.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0)),
      (this._copyDone = !0)
  }
  paste() {
    this.fromPaste = !0
  }
  _getWidthBeforeCursor(t, e) {
    let s = this._getLineLeftOffset(t),
      i
    return e > 0 && ((i = this.__charBounds[t][e - 1]), (s += i.left + i.width)), s
  }
  getDownCursorOffset(t, e) {
    const s = this._getSelectionForOffset(t, e),
      i = this.get2DCursorLocation(s),
      r = i.lineIndex
    if (r === this._textLines.length - 1 || t.metaKey || t.keyCode === 34) return this._text.length - s
    const n = i.charIndex,
      a = this._getWidthBeforeCursor(r, n),
      h = this._getIndexOnLine(r + 1, a)
    return this._textLines[r].slice(n).length + h + 1 + this.missingNewlineOffset(r)
  }
  _getSelectionForOffset(t, e) {
    return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart
  }
  getUpCursorOffset(t, e) {
    const s = this._getSelectionForOffset(t, e),
      i = this.get2DCursorLocation(s),
      r = i.lineIndex
    if (r === 0 || t.metaKey || t.keyCode === 33) return -s
    const n = i.charIndex,
      a = this._getWidthBeforeCursor(r, n),
      h = this._getIndexOnLine(r - 1, a),
      l = this._textLines[r].slice(0, n),
      c = this.missingNewlineOffset(r - 1)
    return -this._textLines[r - 1].length + h - l.length + (1 - c)
  }
  _getIndexOnLine(t, e) {
    const s = this._textLines[t]
    let r = this._getLineLeftOffset(t),
      n = 0,
      a,
      h
    for (let l = 0, c = s.length; l < c; l++)
      if (((a = this.__charBounds[t][l].width), (r += a), r > e)) {
        h = !0
        const u = r - a,
          d = r,
          f = Math.abs(u - e)
        n = Math.abs(d - e) < f ? l : l - 1
        break
      }
    return h || (n = s.length - 1), n
  }
  moveCursorDown(t) {
    ;(this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length) ||
      this._moveCursorUpOrDown('Down', t)
  }
  moveCursorUp(t) {
    ;(this.selectionStart === 0 && this.selectionEnd === 0) || this._moveCursorUpOrDown('Up', t)
  }
  _moveCursorUpOrDown(t, e) {
    const s = this['get'.concat(t, 'CursorOffset')](e, this._selectionDirection === W)
    if ((e.shiftKey ? this.moveCursorWithShift(s) : this.moveCursorWithoutShift(s), s !== 0)) {
      const i = this.text.length
      ;(this.selectionStart = ne(0, this.selectionStart, i)),
        (this.selectionEnd = ne(0, this.selectionEnd, i)),
        this.abortCursorAnimation(),
        this.initDelayedCursor(),
        this._fireSelectionChanged(),
        this._updateTextarea()
    }
  }
  moveCursorWithShift(t) {
    const e = this._selectionDirection === A ? this.selectionStart + t : this.selectionEnd + t
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e), t !== 0
  }
  moveCursorWithoutShift(t) {
    return (
      t < 0
        ? ((this.selectionStart += t), (this.selectionEnd = this.selectionStart))
        : ((this.selectionEnd += t), (this.selectionStart = this.selectionEnd)),
      t !== 0
    )
  }
  moveCursorLeft(t) {
    ;(this.selectionStart === 0 && this.selectionEnd === 0) || this._moveCursorLeftOrRight('Left', t)
  }
  _move(t, e, s) {
    let i
    if (t.altKey) i = this['findWordBoundary'.concat(s)](this[e])
    else if (t.metaKey || t.keyCode === 35 || t.keyCode === 36) i = this['findLineBoundary'.concat(s)](this[e])
    else return (this[e] += s === 'Left' ? -1 : 1), !0
    return typeof i < 'u' && this[e] !== i ? ((this[e] = i), !0) : !1
  }
  _moveLeft(t, e) {
    return this._move(t, e, 'Left')
  }
  _moveRight(t, e) {
    return this._move(t, e, 'Right')
  }
  moveCursorLeftWithoutShift(t) {
    let e = !0
    return (
      (this._selectionDirection = A),
      this.selectionEnd === this.selectionStart &&
        this.selectionStart !== 0 &&
        (e = this._moveLeft(t, 'selectionStart')),
      (this.selectionEnd = this.selectionStart),
      e
    )
  }
  moveCursorLeftWithShift(t) {
    if (this._selectionDirection === W && this.selectionStart !== this.selectionEnd)
      return this._moveLeft(t, 'selectionEnd')
    if (this.selectionStart !== 0) return (this._selectionDirection = A), this._moveLeft(t, 'selectionStart')
  }
  moveCursorRight(t) {
    ;(this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length) ||
      this._moveCursorLeftOrRight('Right', t)
  }
  _moveCursorLeftOrRight(t, e) {
    const s = 'moveCursor'.concat(t).concat(e.shiftKey ? 'WithShift' : 'WithoutShift')
    ;(this._currentCursorOpacity = 1),
      this[s](e) &&
        (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea())
  }
  moveCursorRightWithShift(t) {
    if (this._selectionDirection === A && this.selectionStart !== this.selectionEnd)
      return this._moveRight(t, 'selectionStart')
    if (this.selectionEnd !== this._text.length)
      return (this._selectionDirection = W), this._moveRight(t, 'selectionEnd')
  }
  moveCursorRightWithoutShift(t) {
    let e = !0
    return (
      (this._selectionDirection = W),
      this.selectionStart === this.selectionEnd
        ? ((e = this._moveRight(t, 'selectionStart')), (this.selectionEnd = this.selectionStart))
        : (this.selectionStart = this.selectionEnd),
      e
    )
  }
}
const js = o => !!o.button
class Nh extends Gh {
  constructor() {
    super(...arguments), g(this, 'draggableTextDelegate', void 0)
  }
  initBehavior() {
    this.on('mousedown', this._mouseDownHandler),
      this.on('mousedown:before', this._mouseDownHandlerBefore),
      this.on('mouseup', this.mouseUpHandler),
      this.on('mousedblclick', this.doubleClickHandler),
      this.on('tripleclick', this.tripleClickHandler),
      (this.__lastClickTime = +new Date()),
      (this.__lastLastClickTime = +new Date()),
      (this.__lastPointer = {}),
      this.on('mousedown', this.onMouseDown),
      (this.draggableTextDelegate = new zh(this)),
      super.initBehavior()
  }
  shouldStartDragging() {
    return this.draggableTextDelegate.isActive()
  }
  onDragStart(t) {
    return this.draggableTextDelegate.onDragStart(t)
  }
  canDrop(t) {
    return this.draggableTextDelegate.canDrop(t)
  }
  onMouseDown(t) {
    if (!this.canvas) return
    this.__newClickTime = +new Date()
    const e = t.pointer
    this.isTripleClick(e) && (this.fire('tripleclick', t), Xs(t.e)),
      (this.__lastLastClickTime = this.__lastClickTime),
      (this.__lastClickTime = this.__newClickTime),
      (this.__lastPointer = e),
      (this.__lastSelected = this.selected && !this.getActiveControl())
  }
  isTripleClick(t) {
    return (
      this.__newClickTime - this.__lastClickTime < 500 &&
      this.__lastClickTime - this.__lastLastClickTime < 500 &&
      this.__lastPointer.x === t.x &&
      this.__lastPointer.y === t.y
    )
  }
  doubleClickHandler(t) {
    !this.isEditing || this.selectWord(this.getSelectionStartFromPointer(t.e))
  }
  tripleClickHandler(t) {
    !this.isEditing || this.selectLine(this.getSelectionStartFromPointer(t.e))
  }
  _mouseDownHandler(t) {
    let { e } = t
    !this.canvas ||
      !this.editable ||
      js(e) ||
      this.getActiveControl() ||
      this.draggableTextDelegate.start(e) ||
      (this.canvas.textEditingManager.register(this),
      this.selected && ((this.inCompositionMode = !1), this.setCursorByClick(e)),
      this.isEditing &&
        ((this.__selectionStartOnMouseDown = this.selectionStart),
        this.selectionStart === this.selectionEnd && this.abortCursorAnimation(),
        this.renderCursorOrSelection()))
  }
  _mouseDownHandlerBefore(t) {
    let { e } = t
    !this.canvas || !this.editable || js(e) || (this.selected = this === this.canvas._activeObject)
  }
  mouseUpHandler(t) {
    let { e, transform: s } = t
    const i = this.draggableTextDelegate.end(e)
    if (this.canvas) {
      this.canvas.textEditingManager.unregister(this)
      const r = this.canvas._activeObject
      if (r && r !== this) return
    }
    !this.editable ||
      (this.group && !this.group.interactive) ||
      (s && s.actionPerformed) ||
      js(e) ||
      i ||
      (this.__lastSelected && !this.getActiveControl()
        ? ((this.selected = !1),
          (this.__lastSelected = !1),
          this.enterEditing(e),
          this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection())
        : (this.selected = !0))
  }
  setCursorByClick(t) {
    const e = this.getSelectionStartFromPointer(t),
      s = this.selectionStart,
      i = this.selectionEnd
    t.shiftKey ? this.setSelectionStartEndWithShift(s, i, e) : ((this.selectionStart = e), (this.selectionEnd = e)),
      this.isEditing && (this._fireSelectionChanged(), this._updateTextarea())
  }
  getSelectionStartFromPointer(t) {
    const e = this.canvas
      .getScenePoint(t)
      .transform(pt(this.calcTransformMatrix()))
      .add(new _(-this._getLeftOffset(), -this._getTopOffset()))
    let s = 0,
      i = 0,
      r = 0
    for (let c = 0; c < this._textLines.length && s <= e.y; c++)
      (s += this.getHeightOfLine(c)),
        (r = c),
        c > 0 && (i += this._textLines[c - 1].length + this.missingNewlineOffset(c - 1))
    let a = Math.abs(this._getLineLeftOffset(r))
    const h = this._textLines[r].length,
      l = this.__charBounds[r]
    for (let c = 0; c < h; c++) {
      const u = l[c].kernedWidth,
        d = a + u
      if (e.x <= d) {
        Math.abs(e.x - d) <= Math.abs(e.x - a) && i++
        break
      }
      ;(a = d), i++
    }
    return Math.min(this.flipX ? h - i : i, this._text.length)
  }
}
const $e = 'moveCursorUp',
  Je = 'moveCursorDown',
  Ze = 'moveCursorLeft',
  Qe = 'moveCursorRight',
  ts = 'exitEditing',
  Uh = { 9: ts, 27: ts, 33: $e, 34: Je, 35: Qe, 36: Ze, 37: Ze, 38: $e, 39: Qe, 40: Je },
  Kh = { 9: ts, 27: ts, 33: $e, 34: Je, 35: Ze, 36: Qe, 37: Qe, 38: $e, 39: Ze, 40: Je },
  qh = { 67: 'copy', 88: 'cut' },
  $h = { 65: 'selectAll' },
  Jh = { _selectionDirection: null, _reSpace: /\s|\r?\n/, inCompositionMode: !1 },
  Zh = p(
    {
      selectionStart: 0,
      selectionEnd: 0,
      selectionColor: 'rgba(17,119,255,0.3)',
      isEditing: !1,
      editable: !0,
      editingBorderColor: 'rgba(102,153,255,0.25)',
      cursorWidth: 2,
      cursorColor: '',
      cursorDelay: 1e3,
      cursorDuration: 600,
      caching: !0,
      hiddenTextareaContainer: null,
      keysMap: Uh,
      keysMapRtl: Kh,
      ctrlKeysMapDown: $h,
      ctrlKeysMapUp: qh,
    },
    Jh
  )
class Pt extends Nh {
  static getDefaults() {
    return p(p({}, super.getDefaults()), Pt.ownDefaults)
  }
  get type() {
    const t = super.type
    return t === 'itext' ? 'i-text' : t
  }
  constructor(t, e) {
    super(t, p(p({}, Pt.ownDefaults), e)), this.initBehavior()
  }
  _set(t, e) {
    return this.isEditing && this._savedProps && t in this._savedProps
      ? ((this._savedProps[t] = e), this)
      : (t === 'canvas' &&
          (this.canvas instanceof $s && this.canvas.textEditingManager.remove(this),
          e instanceof $s && e.textEditingManager.add(this)),
        super._set(t, e))
  }
  setSelectionStart(t) {
    ;(t = Math.max(t, 0)), this._updateAndFire('selectionStart', t)
  }
  setSelectionEnd(t) {
    ;(t = Math.min(t, this.text.length)), this._updateAndFire('selectionEnd', t)
  }
  _updateAndFire(t, e) {
    this[t] !== e && (this._fireSelectionChanged(), (this[t] = e)), this._updateTextarea()
  }
  _fireSelectionChanged() {
    this.fire('selection:changed'), this.canvas && this.canvas.fire('text:selection:changed', { target: this })
  }
  initDimensions() {
    this.isEditing && this.initDelayedCursor(), super.initDimensions()
  }
  getSelectionStyles() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart || 0,
      e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selectionEnd,
      s = arguments.length > 2 ? arguments[2] : void 0
    return super.getSelectionStyles(t, e, s)
  }
  setSelectionStyles(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selectionStart || 0,
      s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.selectionEnd
    return super.setSelectionStyles(t, e, s)
  }
  get2DCursorLocation() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart,
      e = arguments.length > 1 ? arguments[1] : void 0
    return super.get2DCursorLocation(t, e)
  }
  render(t) {
    super.render(t), (this.cursorOffsetCache = {}), this.renderCursorOrSelection()
  }
  toCanvasElement(t) {
    const e = this.isEditing
    this.isEditing = !1
    const s = super.toCanvasElement(t)
    return (this.isEditing = e), s
  }
  renderCursorOrSelection() {
    if (!this.isEditing) return
    const t = this.clearContextTop(!0)
    if (!t) return
    const e = this._getCursorBoundaries()
    this.selectionStart === this.selectionEnd ? this.renderCursor(t, e) : this.renderSelection(t, e),
      (this.canvas.contextTopDirty = !0),
      t.restore()
  }
  _getCursorBoundaries() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart,
      e = arguments.length > 1 ? arguments[1] : void 0
    const s = this._getLeftOffset(),
      i = this._getTopOffset(),
      r = this._getCursorBoundariesOffsets(t, e)
    return { left: s, top: i, leftOffset: r.left, topOffset: r.top }
  }
  _getCursorBoundariesOffsets(t, e) {
    return e
      ? this.__getCursorBoundariesOffsets(t)
      : this.cursorOffsetCache && 'top' in this.cursorOffsetCache
      ? this.cursorOffsetCache
      : (this.cursorOffsetCache = this.__getCursorBoundariesOffsets(t))
  }
  __getCursorBoundariesOffsets(t) {
    let e = 0,
      s = 0
    const { charIndex: i, lineIndex: r } = this.get2DCursorLocation(t)
    for (let l = 0; l < r; l++) e += this.getHeightOfLine(l)
    const n = this._getLineLeftOffset(r),
      a = this.__charBounds[r][i]
    a && (s = a.left), this.charSpacing !== 0 && i === this._textLines[r].length && (s -= this._getWidthOfCharSpacing())
    const h = { top: e, left: n + (s > 0 ? s : 0) }
    return (
      this.direction === 'rtl' &&
        (this.textAlign === W || this.textAlign === St || this.textAlign === ye
          ? (h.left *= -1)
          : (this.textAlign === A || this.textAlign === qe || this.textAlign === k || this.textAlign === ve) &&
            (h.left = n - (s > 0 ? s : 0))),
      h
    )
  }
  renderCursorAt(t) {
    const e = this._getCursorBoundaries(t, !0)
    this._renderCursor(this.canvas.contextTop, e, t)
  }
  renderCursor(t, e) {
    this._renderCursor(t, e, this.selectionStart)
  }
  _renderCursor(t, e, s) {
    const i = this.get2DCursorLocation(s),
      r = i.lineIndex,
      n = i.charIndex > 0 ? i.charIndex - 1 : 0,
      a = this.getValueOfPropertyAt(r, n, 'fontSize'),
      h = this.getObjectScaling().x * this.canvas.getZoom(),
      l = this.cursorWidth / h,
      c = this.getValueOfPropertyAt(r, n, 'deltaY'),
      u =
        e.topOffset +
        ((1 - this._fontSizeFraction) * this.getHeightOfLine(r)) / this.lineHeight -
        a * (1 - this._fontSizeFraction)
    this.inCompositionMode && this.renderSelection(t, e),
      (t.fillStyle = this.cursorColor || this.getValueOfPropertyAt(r, n, H)),
      (t.globalAlpha = this._currentCursorOpacity),
      t.fillRect(e.left + e.leftOffset - l / 2, u + e.top + c, l, a)
  }
  renderSelection(t, e) {
    const s = {
      selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart,
      selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd,
    }
    this._renderSelection(t, s, e)
  }
  renderDragSourceEffect() {
    const t = this.draggableTextDelegate.getDragStartSelection()
    this._renderSelection(this.canvas.contextTop, t, this._getCursorBoundaries(t.selectionStart, !0))
  }
  renderDropTargetEffect(t) {
    const e = this.getSelectionStartFromPointer(t)
    this.renderCursorAt(e)
  }
  _renderSelection(t, e, s) {
    const i = e.selectionStart,
      r = e.selectionEnd,
      n = this.textAlign.includes(St),
      a = this.get2DCursorLocation(i),
      h = this.get2DCursorLocation(r),
      l = a.lineIndex,
      c = h.lineIndex,
      u = a.charIndex < 0 ? 0 : a.charIndex,
      d = h.charIndex < 0 ? 0 : h.charIndex
    for (let f = l; f <= c; f++) {
      const m = this._getLineLeftOffset(f) || 0
      let y = this.getHeightOfLine(f),
        v = 0,
        C = 0,
        S = 0
      if ((f === l && (C = this.__charBounds[l][u].left), f >= l && f < c))
        S = n && !this.isEndOfWrapping(f) ? this.width : this.getLineWidth(f) || 5
      else if (f === c)
        if (d === 0) S = this.__charBounds[c][d].left
        else {
          const M = this._getWidthOfCharSpacing()
          S = this.__charBounds[c][d - 1].left + this.__charBounds[c][d - 1].width - M
        }
      ;(v = y), (this.lineHeight < 1 || (f === c && this.lineHeight > 1)) && (y /= this.lineHeight)
      let w = s.left + m + C,
        T = y,
        b = 0
      const O = S - C
      this.inCompositionMode
        ? ((t.fillStyle = this.compositionColor || 'black'), (T = 1), (b = y))
        : (t.fillStyle = this.selectionColor),
        this.direction === 'rtl' &&
          (this.textAlign === W || this.textAlign === St || this.textAlign === ye
            ? (w = this.width - w - O)
            : (this.textAlign === A || this.textAlign === qe || this.textAlign === k || this.textAlign === ve) &&
              (w = s.left + m - S)),
        t.fillRect(w, s.top + s.topOffset + b, O, T),
        (s.topOffset += v)
    }
  }
  getCurrentCharFontSize() {
    const t = this._getCurrentCharIndex()
    return this.getValueOfPropertyAt(t.l, t.c, 'fontSize')
  }
  getCurrentCharColor() {
    const t = this._getCurrentCharIndex()
    return this.getValueOfPropertyAt(t.l, t.c, H)
  }
  _getCurrentCharIndex() {
    const t = this.get2DCursorLocation(this.selectionStart, !0),
      e = t.charIndex > 0 ? t.charIndex - 1 : 0
    return { l: t.lineIndex, c: e }
  }
  dispose() {
    this._exitEditing(), this.draggableTextDelegate.dispose(), super.dispose()
  }
}
g(Pt, 'ownDefaults', Zh)
g(Pt, 'type', 'IText')
x.setClass(Pt)
x.setClass(Pt, 'i-text')
const Qh = {
  minWidth: 20,
  dynamicMinWidth: 2,
  lockScalingFlip: !0,
  noScaleCache: !1,
  _wordJoiners: /[ \t\r]/,
  splitByGrapheme: !1,
}
class Yt extends Pt {
  static getDefaults() {
    return p(p({}, super.getDefaults()), Yt.ownDefaults)
  }
  constructor(t, e) {
    super(t, p(p({}, Yt.ownDefaults), e))
  }
  static createControls() {
    return { controls: Zo() }
  }
  initDimensions() {
    !this.initialized ||
      (this.isEditing && this.initDelayedCursor(),
      this._clearCache(),
      (this.dynamicMinWidth = 0),
      (this._styleMap = this._generateStyleMap(this._splitText())),
      this.dynamicMinWidth > this.width && this._set('width', this.dynamicMinWidth),
      this.textAlign.includes(St) && this.enlargeSpaces(),
      (this.height = this.calcTextHeight()))
  }
  _generateStyleMap(t) {
    let e = 0,
      s = 0,
      i = 0
    const r = {}
    for (let n = 0; n < t.graphemeLines.length; n++)
      t.graphemeText[i] ===
        `
` && n > 0
        ? ((s = 0), i++, e++)
        : !this.splitByGrapheme && this._reSpaceAndTab.test(t.graphemeText[i]) && n > 0 && (s++, i++),
        (r[n] = { line: e, offset: s }),
        (i += t.graphemeLines[n].length),
        (s += t.graphemeLines[n].length)
    return r
  }
  styleHas(t, e) {
    if (this._styleMap && !this.isWrapping) {
      const s = this._styleMap[e]
      s && (e = s.line)
    }
    return super.styleHas(t, e)
  }
  isEmptyStyles(t) {
    if (!this.styles) return !0
    let e = 0,
      s = t + 1,
      i,
      r = !1
    const n = this._styleMap[t],
      a = this._styleMap[t + 1]
    n && ((t = n.line), (e = n.offset)), a && ((s = a.line), (r = s === t), (i = a.offset))
    const h = typeof t > 'u' ? this.styles : { line: this.styles[t] }
    for (const l in h)
      for (const c in h[l]) {
        const u = parseInt(c, 10)
        if (u >= e && (!r || u < i)) for (const d in h[l][c]) return !1
      }
    return !0
  }
  _getStyleDeclaration(t, e) {
    if (this._styleMap && !this.isWrapping) {
      const s = this._styleMap[t]
      if (!s) return {}
      ;(t = s.line), (e = s.offset + e)
    }
    return super._getStyleDeclaration(t, e)
  }
  _setStyleDeclaration(t, e, s) {
    const i = this._styleMap[t]
    super._setStyleDeclaration(i.line, i.offset + e, s)
  }
  _deleteStyleDeclaration(t, e) {
    const s = this._styleMap[t]
    super._deleteStyleDeclaration(s.line, s.offset + e)
  }
  _getLineStyle(t) {
    const e = this._styleMap[t]
    return !!this.styles[e.line]
  }
  _setLineStyle(t) {
    const e = this._styleMap[t]
    super._setLineStyle(e.line)
  }
  _wrapText(t, e) {
    this.isWrapping = !0
    const s = this.getGraphemeDataForRender(t),
      i = []
    for (let r = 0; r < s.wordsData.length; r++) i.push(...this._wrapLine(r, e, s))
    return (this.isWrapping = !1), i
  }
  getGraphemeDataForRender(t) {
    const e = this.splitByGrapheme,
      s = e ? '' : ' '
    let i = 0
    return {
      wordsData: t.map((n, a) => {
        let h = 0
        const l = e ? this.graphemeSplit(n) : this.wordSplit(n)
        return l.length === 0
          ? [{ word: [], width: 0 }]
          : l.map(c => {
              const u = e ? [c] : this.graphemeSplit(c),
                d = this._measureWord(u, a, h)
              return (i = Math.max(d, i)), (h += u.length + s.length), { word: u, width: d }
            })
      }),
      largestWordWidth: i,
    }
  }
  _measureWord(t, e) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = 0,
      r
    const n = !0
    for (let a = 0, h = t.length; a < h; a++) (i += this._getGraphemeBox(t[a], e, a + s, r, n).kernedWidth), (r = t[a])
    return i
  }
  wordSplit(t) {
    return t.split(this._wordJoiners)
  }
  _wrapLine(t, e, s) {
    let { largestWordWidth: i, wordsData: r } = s,
      n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
    const a = this._getWidthOfCharSpacing(),
      h = this.splitByGrapheme,
      l = [],
      c = h ? '' : ' '
    let u = 0,
      d = [],
      f = 0,
      m = 0,
      y = !0
    e -= n
    const v = Math.max(e, i, this.dynamicMinWidth),
      C = r[t]
    f = 0
    let S
    for (S = 0; S < C.length; S++) {
      const { word: w, width: T } = C[S]
      ;(f += w.length),
        (u += m + T - a),
        u > v && !y ? (l.push(d), (d = []), (u = T), (y = !0)) : (u += a),
        !y && !h && d.push(c),
        (d = d.concat(w)),
        (m = h ? 0 : this._measureWord([c], t, f)),
        f++,
        (y = !1)
    }
    return S && l.push(d), i + n > this.dynamicMinWidth && (this.dynamicMinWidth = i - a + n), l
  }
  isEndOfWrapping(t) {
    return !this._styleMap[t + 1] || this._styleMap[t + 1].line !== this._styleMap[t].line
  }
  missingNewlineOffset(t, e) {
    return this.splitByGrapheme && !e ? (this.isEndOfWrapping(t) ? 1 : 0) : 1
  }
  _splitTextIntoLines(t) {
    const e = super._splitTextIntoLines(t),
      s = this._wrapText(e.lines, this.width),
      i = new Array(s.length)
    for (let r = 0; r < s.length; r++) i[r] = s[r].join('')
    return (e.lines = i), (e.graphemeLines = s), e
  }
  getMinWidth() {
    return Math.max(this.minWidth, this.dynamicMinWidth)
  }
  _removeExtraneousStyles() {
    const t = new Map()
    for (const e in this._styleMap) {
      const s = parseInt(e, 10)
      if (this._textLines[s]) {
        const i = this._styleMap[e].line
        t.set(''.concat(i), !0)
      }
    }
    for (const e in this.styles) t.has(e) || delete this.styles[e]
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    return super.toObject(['minWidth', 'splitByGrapheme', ...t])
  }
}
g(Yt, 'type', 'Textbox')
g(Yt, 'textLayoutProperties', [...Pt.textLayoutProperties, 'width'])
g(Yt, 'ownDefaults', Qh)
x.setClass(Yt)
class on extends hs {
  shouldPerformLayout(t) {
    return !!t.target.clipPath && super.shouldPerformLayout(t)
  }
  shouldLayoutClipPath() {
    return !1
  }
  calcLayoutResult(t, e) {
    const { target: s } = t,
      { clipPath: i, group: r } = s
    if (!i || !this.shouldPerformLayout(t)) return
    const { width: n, height: a } = Dt(Ir(s, i)),
      h = new _(n, a)
    if (i.absolutePositioned)
      return { center: ie(i.getRelativeCenterPoint(), void 0, r ? r.calcTransformMatrix() : void 0), size: h }
    {
      const l = i.getRelativeCenterPoint().transform(s.calcOwnMatrix(), !0)
      if (this.shouldPerformLayout(t)) {
        const { center: c = new _(), correction: u = new _() } = this.calcBoundingBox(e, t) || {}
        return { center: c.add(l), correction: u.subtract(l), size: h }
      } else return { center: s.getRelativeCenterPoint().add(l), size: h }
    }
  }
}
g(on, 'type', 'clip-path')
x.setClass(on)
class an extends hs {
  getInitialSize(t, e) {
    let { target: s } = t,
      { size: i } = e
    return new _(s.width || i.x, s.height || i.y)
  }
}
g(an, 'type', 'fixed')
x.setClass(an)
class tl extends be {
  subscribeTargets(t) {
    const e = t.target
    t.targets
      .reduce((i, r) => (r.parent && i.add(r.parent), i), new Set())
      .forEach(i => {
        i.layoutManager.subscribeTargets({ target: i, targets: [e] })
      })
  }
  unsubscribeTargets(t) {
    const e = t.target,
      s = e.getObjects()
    t.targets
      .reduce((r, n) => (n.parent && r.add(n.parent), r), new Set())
      .forEach(r => {
        !s.some(n => n.parent === r) && r.layoutManager.unsubscribeTargets({ target: r, targets: [e] })
      })
  }
}
const el = { multiSelectionStacking: 'canvas-stacking' }
class qt extends Kt {
  static getDefaults() {
    return p(p({}, super.getDefaults()), qt.ownDefaults)
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(), Object.assign(this, qt.ownDefaults), this.setOptions(e)
    const { left: s, top: i, layoutManager: r } = e
    this.groupInit(t, { left: s, top: i, layoutManager: r != null ? r : new tl() })
  }
  _shouldSetNestedCoords() {
    return !0
  }
  __objectSelectionMonitor() {}
  multiSelectAdd() {
    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s]
    this.multiSelectionStacking === 'selection-order'
      ? this.add(...e)
      : e.forEach(i => {
          const r = this._objects.findIndex(a => a.isInFrontOf(i)),
            n = r === -1 ? this.size() : r
          this.insertAt(n, i)
        })
  }
  canEnterGroup(t) {
    return this.getObjects().some(e => e.isDescendantOf(t) || t.isDescendantOf(e))
      ? (Bt('error', 'ActiveSelection: circular object trees are not supported, this call has no effect'), !1)
      : super.canEnterGroup(t)
  }
  enterGroup(t, e) {
    t.parent && t.parent === t.group ? t.parent._exitGroup(t) : t.group && t.parent !== t.group && t.group.remove(t),
      this._enterGroup(t, e)
  }
  exitGroup(t, e) {
    this._exitGroup(t, e), t.parent && t.parent._enterGroup(t, !0)
  }
  _onAfterObjectsChange(t, e) {
    super._onAfterObjectsChange(t, e)
    const s = new Set()
    e.forEach(i => {
      const { parent: r } = i
      r && s.add(r)
    }),
      t === pi
        ? s.forEach(i => {
            i._onAfterObjectsChange(Ge, e)
          })
        : s.forEach(i => {
            i._set('dirty', !0)
          })
  }
  onDeselect() {
    return this.removeAll(), !1
  }
  toString() {
    return '#<ActiveSelection: ('.concat(this.complexity(), ')>')
  }
  shouldCache() {
    return !1
  }
  isOnACache() {
    return !1
  }
  _renderControls(t, e, s) {
    t.save(), (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1)
    const i = p(p({ hasControls: !1 }, s), {}, { forActiveSelection: !0 })
    for (let r = 0; r < this._objects.length; r++) this._objects[r]._renderControls(t, i)
    super._renderControls(t, e), t.restore()
  }
}
g(qt, 'type', 'ActiveSelection')
g(qt, 'ownDefaults', el)
x.setClass(qt)
x.setClass(qt, 'activeSelection')
class sl {
  constructor() {
    g(this, 'resources', {})
  }
  applyFilters(t, e, s, i, r) {
    const n = r.getContext('2d')
    if (!n) return
    n.drawImage(e, 0, 0, s, i)
    const a = n.getImageData(0, 0, s, i),
      h = n.getImageData(0, 0, s, i),
      l = {
        sourceWidth: s,
        sourceHeight: i,
        imageData: a,
        originalEl: e,
        originalImageData: h,
        canvasEl: r,
        ctx: n,
        filterBackend: this,
      }
    t.forEach(u => {
      u.applyTo(l)
    })
    const { imageData: c } = l
    return (c.width !== s || c.height !== i) && ((r.width = c.width), (r.height = c.height)), n.putImageData(c, 0, 0), l
  }
}
class hn {
  constructor() {
    let { tileSize: t = E.textureSize } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    g(this, 'aPosition', new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])),
      g(this, 'resources', {}),
      (this.tileSize = t),
      this.setupGLContext(t, t),
      this.captureGPUInfo()
  }
  setupGLContext(t, e) {
    this.dispose(), this.createWebGLCanvas(t, e)
  }
  createWebGLCanvas(t, e) {
    const s = G()
    ;(s.width = t), (s.height = e)
    const i = { alpha: !0, premultipliedAlpha: !1, depth: !1, stencil: !1, antialias: !1 },
      r = s.getContext('webgl', i)
    !r || (r.clearColor(0, 0, 0, 0), (this.canvas = s), (this.gl = r))
  }
  applyFilters(t, e, s, i, r, n) {
    const a = this.gl,
      h = r.getContext('2d')
    if (!a || !h) return
    let l
    n && (l = this.getCachedTexture(n, e))
    const c = {
        originalWidth: e.width || e.originalWidth || 0,
        originalHeight: e.height || e.originalHeight || 0,
        sourceWidth: s,
        sourceHeight: i,
        destinationWidth: s,
        destinationHeight: i,
        context: a,
        sourceTexture: this.createTexture(a, s, i, l ? void 0 : e),
        targetTexture: this.createTexture(a, s, i),
        originalTexture: l || this.createTexture(a, s, i, l ? void 0 : e),
        passes: t.length,
        webgl: !0,
        aPosition: this.aPosition,
        programCache: this.programCache,
        pass: 0,
        filterBackend: this,
        targetCanvas: r,
      },
      u = a.createFramebuffer()
    return (
      a.bindFramebuffer(a.FRAMEBUFFER, u),
      t.forEach(d => {
        d && d.applyTo(c)
      }),
      il(c),
      this.copyGLTo2D(a, c),
      a.bindTexture(a.TEXTURE_2D, null),
      a.deleteTexture(c.sourceTexture),
      a.deleteTexture(c.targetTexture),
      a.deleteFramebuffer(u),
      h.setTransform(1, 0, 0, 1, 0, 0),
      c
    )
  }
  dispose() {
    this.canvas && ((this.canvas = null), (this.gl = null)), this.clearWebGLCaches()
  }
  clearWebGLCaches() {
    ;(this.programCache = {}), (this.textureCache = {})
  }
  createTexture(t, e, s, i, r) {
    const {
        NEAREST: n,
        TEXTURE_2D: a,
        RGBA: h,
        UNSIGNED_BYTE: l,
        CLAMP_TO_EDGE: c,
        TEXTURE_MAG_FILTER: u,
        TEXTURE_MIN_FILTER: d,
        TEXTURE_WRAP_S: f,
        TEXTURE_WRAP_T: m,
      } = t,
      y = t.createTexture()
    return (
      t.bindTexture(a, y),
      t.texParameteri(a, u, r || n),
      t.texParameteri(a, d, r || n),
      t.texParameteri(a, f, c),
      t.texParameteri(a, m, c),
      i ? t.texImage2D(a, 0, h, h, l, i) : t.texImage2D(a, 0, h, e, s, 0, h, l, null),
      y
    )
  }
  getCachedTexture(t, e, s) {
    const { textureCache: i } = this
    if (i[t]) return i[t]
    {
      const r = this.createTexture(this.gl, e.width, e.height, e, s)
      return r && (i[t] = r), r
    }
  }
  evictCachesForKey(t) {
    this.textureCache[t] && (this.gl.deleteTexture(this.textureCache[t]), delete this.textureCache[t])
  }
  copyGLTo2D(t, e) {
    const s = t.canvas,
      i = e.targetCanvas,
      r = i.getContext('2d')
    if (!r) return
    r.translate(0, i.height), r.scale(1, -1)
    const n = s.height - i.height
    r.drawImage(s, 0, n, i.width, i.height, 0, 0, i.width, i.height)
  }
  copyGLTo2DPutImageData(t, e) {
    const s = e.targetCanvas,
      i = s.getContext('2d'),
      r = e.destinationWidth,
      n = e.destinationHeight,
      a = r * n * 4
    if (!i) return
    const h = new Uint8Array(this.imageBuffer, 0, a),
      l = new Uint8ClampedArray(this.imageBuffer, 0, a)
    t.readPixels(0, 0, r, n, t.RGBA, t.UNSIGNED_BYTE, h)
    const c = new ImageData(l, r, n)
    i.putImageData(c, 0, 0)
  }
  captureGPUInfo() {
    if (this.gpuInfo) return this.gpuInfo
    const t = this.gl,
      e = { renderer: '', vendor: '' }
    if (!t) return e
    const s = t.getExtension('WEBGL_debug_renderer_info')
    if (s) {
      const i = t.getParameter(s.UNMASKED_RENDERER_WEBGL),
        r = t.getParameter(s.UNMASKED_VENDOR_WEBGL)
      i && (e.renderer = i.toLowerCase()), r && (e.vendor = r.toLowerCase())
    }
    return (this.gpuInfo = e), e
  }
}
function il(o) {
  const t = o.targetCanvas,
    e = t.width,
    s = t.height,
    i = o.destinationWidth,
    r = o.destinationHeight
  ;(e !== i || s !== r) && ((t.width = i), (t.height = r))
}
let Rs
function rl() {
  const { WebGLProbe: o } = bt()
  return (
    o.queryWebGL(G()),
    E.enableGLFiltering && o.isSupported(E.textureSize) ? new hn({ tileSize: E.textureSize }) : new sl()
  )
}
function Bs() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
  return !Rs && o && (Rs = rl()), Rs
}
const nl = ['filters', 'resizeFilter', 'src', 'crossOrigin', 'type'],
  ol = { strokeWidth: 0, srcFromAttribute: !1, minimumScaleTrigger: 0.5, cropX: 0, cropY: 0, imageSmoothing: !0 },
  ln = ['cropX', 'cropY']
class at extends $ {
  static getDefaults() {
    return p(p({}, super.getDefaults()), at.ownDefaults)
  }
  constructor(t, e) {
    super(),
      g(this, '_lastScaleX', 1),
      g(this, '_lastScaleY', 1),
      g(this, '_filterScalingX', 1),
      g(this, '_filterScalingY', 1),
      (this.filters = []),
      Object.assign(this, at.ownDefaults),
      this.setOptions(e),
      (this.cacheKey = 'texture'.concat(It())),
      this.setElement(
        typeof t == 'string' ? ((this.canvas && gt(this.canvas.getElement())) || oe()).getElementById(t) : t,
        e
      )
  }
  getElement() {
    return this._element
  }
  setElement(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.removeTexture(this.cacheKey),
      this.removeTexture(''.concat(this.cacheKey, '_filtered')),
      (this._element = t),
      (this._originalElement = t),
      this._setWidthHeight(e),
      t.classList.add(at.CSS_CANVAS),
      this.filters.length !== 0 && this.applyFilters(),
      this.resizeFilter && this.applyResizeFilters()
  }
  removeTexture(t) {
    const e = Bs(!1)
    e instanceof hn && e.evictCachesForKey(t)
  }
  dispose() {
    super.dispose(),
      this.removeTexture(this.cacheKey),
      this.removeTexture(''.concat(this.cacheKey, '_filtered')),
      (this._cacheContext = null),
      ['_originalElement', '_element', '_filteredEl', '_cacheCanvas'].forEach(t => {
        const e = this[t]
        e && bt().dispose(e), (this[t] = void 0)
      })
  }
  getCrossOrigin() {
    return this._originalElement && (this._originalElement.crossOrigin || null)
  }
  getOriginalSize() {
    const t = this.getElement()
    return t ? { width: t.naturalWidth || t.width, height: t.naturalHeight || t.height } : { width: 0, height: 0 }
  }
  _stroke(t) {
    if (!this.stroke || this.strokeWidth === 0) return
    const e = this.width / 2,
      s = this.height / 2
    t.beginPath(), t.moveTo(-e, -s), t.lineTo(e, -s), t.lineTo(e, s), t.lineTo(-e, s), t.lineTo(-e, -s), t.closePath()
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    const e = []
    return (
      this.filters.forEach(s => {
        s && e.push(s.toObject())
      }),
      p(
        p({}, super.toObject([...ln, ...t])),
        {},
        { src: this.getSrc(), crossOrigin: this.getCrossOrigin(), filters: e },
        this.resizeFilter ? { resizeFilter: this.resizeFilter.toObject() } : {}
      )
    )
  }
  hasCrop() {
    return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height
  }
  _toSVG() {
    const t = [],
      e = this._element,
      s = -this.width / 2,
      i = -this.height / 2
    let r = [],
      n = [],
      a = '',
      h = ''
    if (!e) return []
    if (this.hasCrop()) {
      const l = It()
      r.push(
        '<clipPath id="imageCrop_' +
          l +
          `">
`,
        '	<rect x="' +
          s +
          '" y="' +
          i +
          '" width="' +
          this.width +
          '" height="' +
          this.height +
          `" />
`,
        `</clipPath>
`
      ),
        (a = ' clip-path="url(#imageCrop_' + l + ')" ')
    }
    if (
      (this.imageSmoothing || (h = ' image-rendering="optimizeSpeed"'),
      t.push(
        '	<image ',
        'COMMON_PARTS',
        'xlink:href="'
          .concat(this.getSvgSrc(!0), '" x="')
          .concat(s - this.cropX, '" y="')
          .concat(i - this.cropY, '" width="')
          .concat(e.width || e.naturalWidth, '" height="')
          .concat(e.height || e.naturalHeight, '"')
          .concat(h)
          .concat(
            a,
            `></image>
`
          )
      ),
      this.stroke || this.strokeDashArray)
    ) {
      const l = this.fill
      ;(this.fill = null),
        (n = [
          '	<rect x="'
            .concat(s, '" y="')
            .concat(i, '" width="')
            .concat(this.width, '" height="')
            .concat(this.height, '" style="')
            .concat(
              this.getSvgStyles(),
              `" />
`
            ),
        ]),
        (this.fill = l)
    }
    return this.paintFirst !== H ? (r = r.concat(n, t)) : (r = r.concat(t, n)), r
  }
  getSrc(t) {
    const e = t ? this._element : this._originalElement
    return e
      ? e.toDataURL
        ? e.toDataURL()
        : this.srcFromAttribute
        ? e.getAttribute('src') || ''
        : e.src
      : this.src || ''
  }
  getSvgSrc(t) {
    return this.getSrc(t)
  }
  setSrc(t) {
    let { crossOrigin: e, signal: s } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return je(t, { crossOrigin: e, signal: s }).then(i => {
      typeof e < 'u' && this.set({ crossOrigin: e }), this.setElement(i)
    })
  }
  toString() {
    return '#<Image: { src: "'.concat(this.getSrc(), '" }>')
  }
  applyResizeFilters() {
    const t = this.resizeFilter,
      e = this.minimumScaleTrigger,
      s = this.getTotalObjectScaling(),
      i = s.x,
      r = s.y,
      n = this._filteredEl || this._originalElement
    if ((this.group && this.set('dirty', !0), !t || (i > e && r > e))) {
      ;(this._element = n),
        (this._filterScalingX = 1),
        (this._filterScalingY = 1),
        (this._lastScaleX = i),
        (this._lastScaleY = r)
      return
    }
    const a = G(),
      h = n.width,
      l = n.height
    ;(a.width = h),
      (a.height = l),
      (this._element = a),
      (this._lastScaleX = t.scaleX = i),
      (this._lastScaleY = t.scaleY = r),
      Bs().applyFilters([t], n, h, l, this._element),
      (this._filterScalingX = a.width / this._originalElement.width),
      (this._filterScalingY = a.height / this._originalElement.height)
  }
  applyFilters() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.filters || []
    if (
      ((t = t.filter(r => r && !r.isNeutralState())),
      this.set('dirty', !0),
      this.removeTexture(''.concat(this.cacheKey, '_filtered')),
      t.length === 0)
    ) {
      ;(this._element = this._originalElement),
        (this._filteredEl = void 0),
        (this._filterScalingX = 1),
        (this._filterScalingY = 1)
      return
    }
    const e = this._originalElement,
      s = e.naturalWidth || e.width,
      i = e.naturalHeight || e.height
    if (this._element === this._originalElement) {
      const r = G()
      ;(r.width = s), (r.height = i), (this._element = r), (this._filteredEl = r)
    } else
      this._filteredEl &&
        ((this._element = this._filteredEl),
        this._filteredEl.getContext('2d').clearRect(0, 0, s, i),
        (this._lastScaleX = 1),
        (this._lastScaleY = 1))
    Bs().applyFilters(t, this._originalElement, s, i, this._element),
      (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) &&
        ((this._filterScalingX = this._element.width / this._originalElement.width),
        (this._filterScalingY = this._element.height / this._originalElement.height))
  }
  _render(t) {
    ;(t.imageSmoothingEnabled = this.imageSmoothing),
      this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(),
      this._stroke(t),
      this._renderPaintInOrder(t)
  }
  drawCacheOnCanvas(t) {
    ;(t.imageSmoothingEnabled = this.imageSmoothing), super.drawCacheOnCanvas(t)
  }
  shouldCache() {
    return this.needsItsOwnCache()
  }
  _renderFill(t) {
    const e = this._element
    if (!e) return
    const s = this._filterScalingX,
      i = this._filterScalingY,
      r = this.width,
      n = this.height,
      a = Math.max(this.cropX, 0),
      h = Math.max(this.cropY, 0),
      l = e.naturalWidth || e.width,
      c = e.naturalHeight || e.height,
      u = a * s,
      d = h * i,
      f = Math.min(r * s, l - u),
      m = Math.min(n * i, c - d),
      y = -r / 2,
      v = -n / 2,
      C = Math.min(r, l / s - a),
      S = Math.min(n, c / i - h)
    e && t.drawImage(e, u, d, f, m, y, v, C, S)
  }
  _needsResize() {
    const t = this.getTotalObjectScaling()
    return t.x !== this._lastScaleX || t.y !== this._lastScaleY
  }
  _resetWidthHeight() {
    this.set(this.getOriginalSize())
  }
  _setWidthHeight() {
    let { width: t, height: e } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const s = this.getOriginalSize()
    ;(this.width = t || s.width), (this.height = e || s.height)
  }
  parsePreserveAspectRatioAttribute() {
    const t = Xn(this.preserveAspectRatio || ''),
      e = this.width,
      s = this.height,
      i = { width: e, height: s }
    let r = this._element.width,
      n = this._element.height,
      a = 1,
      h = 1,
      l = 0,
      c = 0,
      u = 0,
      d = 0,
      f
    return (
      t && (t.alignX !== rt || t.alignY !== rt)
        ? (t.meetOrSlice === 'meet' &&
            ((a = h = Ya(this._element, i)),
            (f = (e - r * a) / 2),
            t.alignX === 'Min' && (l = -f),
            t.alignX === 'Max' && (l = f),
            (f = (s - n * h) / 2),
            t.alignY === 'Min' && (c = -f),
            t.alignY === 'Max' && (c = f)),
          t.meetOrSlice === 'slice' &&
            ((a = h = Wa(this._element, i)),
            (f = r - e / a),
            t.alignX === 'Mid' && (u = f / 2),
            t.alignX === 'Max' && (u = f),
            (f = n - s / h),
            t.alignY === 'Mid' && (d = f / 2),
            t.alignY === 'Max' && (d = f),
            (r = e / a),
            (n = s / h)))
        : ((a = e / r), (h = s / n)),
      { width: r, height: n, scaleX: a, scaleY: h, offsetLeft: l, offsetTop: c, cropX: u, cropY: d }
    )
  }
  static fromObject(t, e) {
    let { filters: s, resizeFilter: i, src: r, crossOrigin: n, type: a } = t,
      h = j(t, nl)
    return Promise.all([je(r, p(p({}, e), {}, { crossOrigin: n })), s && Se(s, e), i && Se([i], e), rs(h, e)]).then(
      l => {
        let [c, u = [], [d] = [], f = {}] = l
        return new this(c, p(p({}, h), {}, { src: r, filters: u, resizeFilter: d }, f))
      }
    )
  }
  static fromURL(t) {
    let { crossOrigin: e = null, signal: s } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      i = arguments.length > 2 ? arguments[2] : void 0
    return je(t, { crossOrigin: e, signal: s }).then(r => new this(r, i))
  }
  static async fromElement(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = arguments.length > 2 ? arguments[2] : void 0
    const i = Lt(t, this.ATTRIBUTE_NAMES, s)
    return this.fromURL(i['xlink:href'], e, i).catch(r => (Bt('log', 'Unable to parse Image', r), null))
  }
}
g(at, 'type', 'Image')
g(at, 'cacheProperties', [...At, ...ln])
g(at, 'ownDefaults', ol)
g(at, 'CSS_CANVAS', 'canvas-img')
g(at, 'ATTRIBUTE_NAMES', [
  ...Xt,
  'x',
  'y',
  'width',
  'height',
  'preserveAspectRatio',
  'xlink:href',
  'crossOrigin',
  'image-rendering',
])
x.setClass(at)
x.setSVGClass(at)
os(ho)
const ds = o => o.webgl !== void 0,
  vi = 'precision highp float',
  al = `
    `.concat(
    vi,
    `;
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`
  ),
  hl = `
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`,
  ll = ['type'],
  cl = ['type'],
  ul = new RegExp(vi, 'g')
class N {
  get type() {
    return this.constructor.type
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = j(t, ll)
    Object.assign(this, this.constructor.defaults, e)
  }
  getFragmentSource() {
    return al
  }
  getVertexSource() {
    return hl
  }
  createProgram(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getFragmentSource(),
      s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.getVertexSource()
    const {
      WebGLProbe: { GLPrecision: i = 'highp' },
    } = bt()
    i !== 'highp' && (e = e.replace(ul, vi.replace('highp', i)))
    const r = t.createShader(t.VERTEX_SHADER),
      n = t.createShader(t.FRAGMENT_SHADER),
      a = t.createProgram()
    if (!r || !n || !a) throw new wt('Vertex, fragment shader or program creation error')
    if ((t.shaderSource(r, s), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)))
      throw new wt('Vertex shader compile error for '.concat(this.type, ': ').concat(t.getShaderInfoLog(r)))
    if ((t.shaderSource(n, e), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)))
      throw new wt('Fragment shader compile error for '.concat(this.type, ': ').concat(t.getShaderInfoLog(n)))
    if ((t.attachShader(a, r), t.attachShader(a, n), t.linkProgram(a), !t.getProgramParameter(a, t.LINK_STATUS)))
      throw new wt('Shader link error for "'.concat(this.type, '" ').concat(t.getProgramInfoLog(a)))
    const h = this.getUniformLocations(t, a) || {}
    return (
      (h.uStepW = t.getUniformLocation(a, 'uStepW')),
      (h.uStepH = t.getUniformLocation(a, 'uStepH')),
      { program: a, attributeLocations: this.getAttributeLocations(t, a), uniformLocations: h }
    )
  }
  getAttributeLocations(t, e) {
    return { aPosition: t.getAttribLocation(e, 'aPosition') }
  }
  getUniformLocations(t, e) {
    const s = this.constructor.uniformLocations,
      i = {}
    for (let r = 0; r < s.length; r++) i[s[r]] = t.getUniformLocation(e, s[r])
    return i
  }
  sendAttributeData(t, e, s) {
    const i = e.aPosition,
      r = t.createBuffer()
    t.bindBuffer(t.ARRAY_BUFFER, r),
      t.enableVertexAttribArray(i),
      t.vertexAttribPointer(i, 2, t.FLOAT, !1, 0, 0),
      t.bufferData(t.ARRAY_BUFFER, s, t.STATIC_DRAW)
  }
  _setupFrameBuffer(t) {
    const e = t.context
    if (t.passes > 1) {
      const s = t.destinationWidth,
        i = t.destinationHeight
      ;(t.sourceWidth !== s || t.sourceHeight !== i) &&
        (e.deleteTexture(t.targetTexture), (t.targetTexture = t.filterBackend.createTexture(e, s, i))),
        e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.targetTexture, 0)
    } else e.bindFramebuffer(e.FRAMEBUFFER, null), e.finish()
  }
  _swapTextures(t) {
    t.passes--, t.pass++
    const e = t.targetTexture
    ;(t.targetTexture = t.sourceTexture), (t.sourceTexture = e)
  }
  isNeutralState(t) {
    return !1
  }
  applyTo(t) {
    ds(t) ? (this._setupFrameBuffer(t), this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t)
  }
  applyTo2d(t) {}
  getCacheKey() {
    return this.type
  }
  retrieveShader(t) {
    const e = this.getCacheKey()
    return t.programCache[e] || (t.programCache[e] = this.createProgram(t.context)), t.programCache[e]
  }
  applyToWebGL(t) {
    const e = t.context,
      s = this.retrieveShader(t)
    t.pass === 0 && t.originalTexture
      ? e.bindTexture(e.TEXTURE_2D, t.originalTexture)
      : e.bindTexture(e.TEXTURE_2D, t.sourceTexture),
      e.useProgram(s.program),
      this.sendAttributeData(e, s.attributeLocations, t.aPosition),
      e.uniform1f(s.uniformLocations.uStepW, 1 / t.sourceWidth),
      e.uniform1f(s.uniformLocations.uStepH, 1 / t.sourceHeight),
      this.sendUniformData(e, s.uniformLocations),
      e.viewport(0, 0, t.destinationWidth, t.destinationHeight),
      e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
  }
  bindAdditionalTexture(t, e, s) {
    t.activeTexture(s), t.bindTexture(t.TEXTURE_2D, e), t.activeTexture(t.TEXTURE0)
  }
  unbindAdditionalTexture(t, e) {
    t.activeTexture(e), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE0)
  }
  sendUniformData(t, e) {}
  createHelpLayer(t) {
    if (!t.helpLayer) {
      const e = G()
      ;(e.width = t.sourceWidth), (e.height = t.sourceHeight), (t.helpLayer = e)
    }
  }
  toObject() {
    const t = Object.keys(this.constructor.defaults || {})
    return p(
      { type: this.type },
      t.reduce((e, s) => ((e[s] = this[s]), e), {})
    )
  }
  toJSON() {
    return this.toObject()
  }
  static async fromObject(t, e) {
    let s = j(t, cl)
    return new this(s)
  }
}
g(N, 'type', 'BaseFilter')
g(N, 'uniformLocations', [])
const dl = {
    multiply: `gl_FragColor.rgb *= uColor.rgb;
`,
    screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,
    add: `gl_FragColor.rgb += uColor.rgb;
`,
    difference: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,
    subtract: `gl_FragColor.rgb -= uColor.rgb;
`,
    lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,
    darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,
    exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,
    overlay: `
    if (uColor.r < 0.5) {
      gl_FragColor.r *= 2.0 * uColor.r;
    } else {
      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
    }
    if (uColor.g < 0.5) {
      gl_FragColor.g *= 2.0 * uColor.g;
    } else {
      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
    }
    if (uColor.b < 0.5) {
      gl_FragColor.b *= 2.0 * uColor.b;
    } else {
      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
    }
    `,
    tint: `
    gl_FragColor.rgb *= (1.0 - uColor.a);
    gl_FragColor.rgb += uColor.rgb;
    `,
  },
  fl = { color: '#F95C63', mode: 'multiply', alpha: 1 }
class fs extends N {
  getCacheKey() {
    return ''.concat(this.type, '_').concat(this.mode)
  }
  getFragmentSource() {
    return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          `.concat(
      dl[this.mode],
      `
        }
      }
      `
    )
  }
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    const s = new P(this.color).getSource(),
      i = s[0] * this.alpha,
      r = s[1] * this.alpha,
      n = s[2] * this.alpha,
      a = 1 - this.alpha
    for (let h = 0; h < e.length; h += 4) {
      const l = e[h],
        c = e[h + 1],
        u = e[h + 2]
      switch (this.mode) {
        case 'multiply':
          ;(e[h] = (l * i) / 255), (e[h + 1] = (c * r) / 255), (e[h + 2] = (u * n) / 255)
          break
        case 'screen':
          ;(e[h] = 255 - ((255 - l) * (255 - i)) / 255),
            (e[h + 1] = 255 - ((255 - c) * (255 - r)) / 255),
            (e[h + 2] = 255 - ((255 - u) * (255 - n)) / 255)
          break
        case 'add':
          ;(e[h] = l + i), (e[h + 1] = c + r), (e[h + 2] = u + n)
          break
        case 'difference':
          ;(e[h] = Math.abs(l - i)), (e[h + 1] = Math.abs(c - r)), (e[h + 2] = Math.abs(u - n))
          break
        case 'subtract':
          ;(e[h] = l - i), (e[h + 1] = c - r), (e[h + 2] = u - n)
          break
        case 'darken':
          ;(e[h] = Math.min(l, i)), (e[h + 1] = Math.min(c, r)), (e[h + 2] = Math.min(u, n))
          break
        case 'lighten':
          ;(e[h] = Math.max(l, i)), (e[h + 1] = Math.max(c, r)), (e[h + 2] = Math.max(u, n))
          break
        case 'overlay':
          ;(e[h] = i < 128 ? (2 * l * i) / 255 : 255 - (2 * (255 - l) * (255 - i)) / 255),
            (e[h + 1] = r < 128 ? (2 * c * r) / 255 : 255 - (2 * (255 - c) * (255 - r)) / 255),
            (e[h + 2] = n < 128 ? (2 * u * n) / 255 : 255 - (2 * (255 - u) * (255 - n)) / 255)
          break
        case 'exclusion':
          ;(e[h] = i + l - (2 * i * l) / 255),
            (e[h + 1] = r + c - (2 * r * c) / 255),
            (e[h + 2] = n + u - (2 * n * u) / 255)
          break
        case 'tint':
          ;(e[h] = i + l * a), (e[h + 1] = r + c * a), (e[h + 2] = n + u * a)
      }
    }
  }
  sendUniformData(t, e) {
    const s = new P(this.color).getSource()
    ;(s[0] = (this.alpha * s[0]) / 255),
      (s[1] = (this.alpha * s[1]) / 255),
      (s[2] = (this.alpha * s[2]) / 255),
      (s[3] = this.alpha),
      t.uniform4fv(e.uColor, s)
  }
}
g(fs, 'defaults', fl)
g(fs, 'type', 'BlendColor')
g(fs, 'uniformLocations', ['uColor'])
x.setClass(fs)
const gl = {
    multiply: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.rgba *= color2.rgba;
      gl_FragColor = color;
    }
    `,
    mask: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.a = color2.a;
      gl_FragColor = color;
    }
    `,
  },
  pl = `
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `,
  ml = ['type', 'image'],
  _l = { mode: 'multiply', alpha: 1 }
class gs extends N {
  getCacheKey() {
    return ''.concat(this.type, '_').concat(this.mode)
  }
  getFragmentSource() {
    return gl[this.mode]
  }
  getVertexSource() {
    return pl
  }
  applyToWebGL(t) {
    const e = t.context,
      s = this.createTexture(t.filterBackend, this.image)
    this.bindAdditionalTexture(e, s, e.TEXTURE1), super.applyToWebGL(t), this.unbindAdditionalTexture(e, e.TEXTURE1)
  }
  createTexture(t, e) {
    return t.getCachedTexture(e.cacheKey, e.getElement())
  }
  calculateMatrix() {
    const t = this.image,
      { width: e, height: s } = t.getElement()
    return [1 / t.scaleX, 0, 0, 0, 1 / t.scaleY, 0, -t.left / e, -t.top / s, 1]
  }
  applyTo2d(t) {
    let {
      imageData: { data: e, width: s, height: i },
      filterBackend: { resources: r },
    } = t
    const n = this.image
    r.blendImage || (r.blendImage = G())
    const a = r.blendImage,
      h = a.getContext('2d')
    a.width !== s || a.height !== i ? ((a.width = s), (a.height = i)) : h.clearRect(0, 0, s, i),
      h.setTransform(n.scaleX, 0, 0, n.scaleY, n.left, n.top),
      h.drawImage(n.getElement(), 0, 0, s, i)
    const l = h.getImageData(0, 0, s, i).data
    for (let c = 0; c < e.length; c += 4) {
      const u = e[c],
        d = e[c + 1],
        f = e[c + 2],
        m = e[c + 3],
        y = l[c],
        v = l[c + 1],
        C = l[c + 2],
        S = l[c + 3]
      switch (this.mode) {
        case 'multiply':
          ;(e[c] = (u * y) / 255), (e[c + 1] = (d * v) / 255), (e[c + 2] = (f * C) / 255), (e[c + 3] = (m * S) / 255)
          break
        case 'mask':
          e[c + 3] = S
          break
      }
    }
  }
  sendUniformData(t, e) {
    const s = this.calculateMatrix()
    t.uniform1i(e.uImage, 1), t.uniformMatrix3fv(e.uTransformMatrix, !1, s)
  }
  toObject() {
    return p(p({}, super.toObject()), {}, { image: this.image && this.image.toObject() })
  }
  static async fromObject(t, e) {
    let { type: s, image: i } = t,
      r = j(t, ml)
    return at.fromObject(i, e).then(n => new this(p(p({}, r), {}, { image: n })))
  }
}
g(gs, 'type', 'BlendImage')
g(gs, 'defaults', _l)
g(gs, 'uniformLocations', ['uTransformMatrix', 'uImage'])
x.setClass(gs)
const yl = `
    precision highp float;
    uniform sampler2D uTexture;
    uniform vec2 uDelta;
    varying vec2 vTexCoord;
    const float nSamples = 15.0;
    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
    float random(vec3 scale) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
    }
    void main() {
      vec4 color = vec4(0.0);
      float total = 0.0;
      float offset = random(v3offset);
      for (float t = -nSamples; t <= nSamples; t++) {
        float percent = (t + offset - 0.5) / nSamples;
        float weight = 1.0 - abs(percent);
        color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;
        total += weight;
      }
      gl_FragColor = color / total;
    }
  `,
  vl = { blur: 0 }
class ps extends N {
  getFragmentSource() {
    return yl
  }
  applyTo(t) {
    ds(t)
      ? ((this.aspectRatio = t.sourceWidth / t.sourceHeight),
        t.passes++,
        this._setupFrameBuffer(t),
        (this.horizontal = !0),
        this.applyToWebGL(t),
        this._swapTextures(t),
        this._setupFrameBuffer(t),
        (this.horizontal = !1),
        this.applyToWebGL(t),
        this._swapTextures(t))
      : this.applyTo2d(t)
  }
  applyTo2d(t) {
    t.imageData = this.simpleBlur(t)
  }
  simpleBlur(t) {
    let {
      ctx: e,
      imageData: s,
      filterBackend: { resources: i },
    } = t
    const { width: r, height: n } = s
    i.blurLayer1 || ((i.blurLayer1 = G()), (i.blurLayer2 = G()))
    const a = i.blurLayer1,
      h = i.blurLayer2
    ;(a.width !== r || a.height !== n) && ((h.width = a.width = r), (h.height = a.height = n))
    const l = a.getContext('2d'),
      c = h.getContext('2d'),
      u = 15,
      d = this.blur * 0.06 * 0.5
    let f, m, y, v
    for (l.putImageData(s, 0, 0), c.clearRect(0, 0, r, n), v = -u; v <= u; v++)
      (f = (Math.random() - 0.5) / 4),
        (m = v / u),
        (y = d * m * r + f),
        (c.globalAlpha = 1 - Math.abs(m)),
        c.drawImage(a, y, f),
        l.drawImage(h, 0, 0),
        (c.globalAlpha = 1),
        c.clearRect(0, 0, h.width, h.height)
    for (v = -u; v <= u; v++)
      (f = (Math.random() - 0.5) / 4),
        (m = v / u),
        (y = d * m * n + f),
        (c.globalAlpha = 1 - Math.abs(m)),
        c.drawImage(a, f, y),
        l.drawImage(h, 0, 0),
        (c.globalAlpha = 1),
        c.clearRect(0, 0, h.width, h.height)
    e.drawImage(a, 0, 0)
    const C = e.getImageData(0, 0, a.width, a.height)
    return (l.globalAlpha = 1), l.clearRect(0, 0, a.width, a.height), C
  }
  sendUniformData(t, e) {
    const s = this.chooseRightDelta()
    t.uniform2fv(e.uDelta, s)
  }
  isNeutralState() {
    return this.blur === 0
  }
  chooseRightDelta() {
    let t = 1
    const e = [0, 0]
    this.horizontal
      ? this.aspectRatio > 1 && (t = 1 / this.aspectRatio)
      : this.aspectRatio < 1 && (t = this.aspectRatio)
    const s = t * this.blur * 0.12
    return this.horizontal ? (e[0] = s) : (e[1] = s), e
  }
}
g(ps, 'type', 'Blur')
g(ps, 'defaults', vl)
g(ps, 'uniformLocations', ['uDelta'])
x.setClass(ps)
const Cl = `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`,
  Sl = { brightness: 0 }
class ms extends N {
  getFragmentSource() {
    return Cl
  }
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    const s = Math.round(this.brightness * 255)
    for (let i = 0; i < e.length; i += 4) (e[i] = e[i] + s), (e[i + 1] = e[i + 1] + s), (e[i + 2] = e[i + 2] + s)
  }
  isNeutralState() {
    return this.brightness === 0
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uBrightness, this.brightness)
  }
}
g(ms, 'type', 'Brightness')
g(ms, 'defaults', Sl)
g(ms, 'uniformLocations', ['uBrightness'])
x.setClass(ms)
const wl = `
  precision highp float;
  uniform sampler2D uTexture;
  varying vec2 vTexCoord;
  uniform mat4 uColorMatrix;
  uniform vec4 uConstants;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color *= uColorMatrix;
    color += uConstants;
    gl_FragColor = color;
  }`,
  xl = { matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], colorsOnly: !0 }
class de extends N {
  getFragmentSource() {
    return wl
  }
  applyTo2d(t) {
    const e = t.imageData,
      s = e.data,
      i = this.matrix,
      r = this.colorsOnly
    for (let n = 0; n < s.length; n += 4) {
      const a = s[n],
        h = s[n + 1],
        l = s[n + 2]
      if (r)
        (s[n] = a * i[0] + h * i[1] + l * i[2] + i[4] * 255),
          (s[n + 1] = a * i[5] + h * i[6] + l * i[7] + i[9] * 255),
          (s[n + 2] = a * i[10] + h * i[11] + l * i[12] + i[14] * 255)
      else {
        const c = s[n + 3]
        ;(s[n] = a * i[0] + h * i[1] + l * i[2] + c * i[3] + i[4] * 255),
          (s[n + 1] = a * i[5] + h * i[6] + l * i[7] + c * i[8] + i[9] * 255),
          (s[n + 2] = a * i[10] + h * i[11] + l * i[12] + c * i[13] + i[14] * 255),
          (s[n + 3] = a * i[15] + h * i[16] + l * i[17] + c * i[18] + i[19] * 255)
      }
    }
  }
  sendUniformData(t, e) {
    const s = this.matrix,
      i = [s[0], s[1], s[2], s[3], s[5], s[6], s[7], s[8], s[10], s[11], s[12], s[13], s[15], s[16], s[17], s[18]],
      r = [s[4], s[9], s[14], s[19]]
    t.uniformMatrix4fv(e.uColorMatrix, !1, i), t.uniform4fv(e.uConstants, r)
  }
  toObject() {
    return p(p({}, super.toObject()), {}, { matrix: [...this.matrix] })
  }
}
g(de, 'type', 'ColorMatrix')
g(de, 'defaults', xl)
g(de, 'uniformLocations', ['uColorMatrix', 'uConstants'])
x.setClass(de)
function $t(o, t) {
  var e
  const s =
    ((e = class extends de {
      toObject() {
        return { type: this.type, colorsOnly: this.colorsOnly }
      }
    }),
    g(e, 'type', o),
    g(e, 'defaults', { colorsOnly: !1, matrix: t }),
    e)
  return x.setClass(s, o), s
}
$t(
  'Brownie',
  [
    0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095, 0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0, -0.02965,
    0, 0, 0, 1, 0,
  ]
)
$t(
  'Vintage',
  [
    0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411, 0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0,
    0.02023, 0, 0, 0, 1, 0,
  ]
)
$t(
  'Kodachrome',
  [
    1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352, -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0,
    0.13972, 0, 0, 0, 1, 0,
  ]
)
$t(
  'Technicolor',
  [
    1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589, -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0,
    0.12137, 0, 0, 0, 1, 0,
  ]
)
$t('Polaroid', [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0])
$t('Sepia', [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0])
$t('BlackWhite', [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0])
class cn extends N {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    super(t), (this.subFilters = t.subFilters || [])
  }
  applyTo(t) {
    ds(t) && (t.passes += this.subFilters.length - 1),
      this.subFilters.forEach(e => {
        e.applyTo(t)
      })
  }
  toObject() {
    return { type: this.type, subFilters: this.subFilters.map(t => t.toObject()) }
  }
  isNeutralState() {
    return !this.subFilters.some(t => !t.isNeutralState())
  }
  static fromObject(t, e) {
    return Promise.all((t.subFilters || []).map(s => x.getClass(s.type).fromObject(s, e))).then(
      s => new this({ subFilters: s })
    )
  }
}
g(cn, 'type', 'Composed')
x.setClass(cn)
const bl = `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`,
  Tl = { contrast: 0 }
class _s extends N {
  getFragmentSource() {
    return bl
  }
  isNeutralState() {
    return this.contrast === 0
  }
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    const s = Math.floor(this.contrast * 255),
      i = (259 * (s + 255)) / (255 * (259 - s))
    for (let r = 0; r < e.length; r += 4)
      (e[r] = i * (e[r] - 128) + 128), (e[r + 1] = i * (e[r + 1] - 128) + 128), (e[r + 2] = i * (e[r + 2] - 128) + 128)
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uContrast, this.contrast)
  }
}
g(_s, 'type', 'Contrast')
g(_s, 'defaults', Tl)
g(_s, 'uniformLocations', ['uContrast'])
x.setClass(_s)
const Ol = {
    Convolute_3_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,
    Convolute_3_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,
    Convolute_5_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,
    Convolute_5_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,
    Convolute_7_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,
    Convolute_7_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,
    Convolute_9_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,
    Convolute_9_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,
  },
  Dl = { opaque: !1, matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0] }
class ys extends N {
  getCacheKey() {
    return ''
      .concat(this.type, '_')
      .concat(Math.sqrt(this.matrix.length), '_')
      .concat(this.opaque ? 1 : 0)
  }
  getFragmentSource() {
    return Ol[this.getCacheKey()]
  }
  applyTo2d(t) {
    const e = t.imageData,
      s = e.data,
      i = this.matrix,
      r = Math.round(Math.sqrt(i.length)),
      n = Math.floor(r / 2),
      a = e.width,
      h = e.height,
      l = t.ctx.createImageData(a, h),
      c = l.data,
      u = this.opaque ? 1 : 0
    let d, f, m, y, v, C, S, w, T, b, O, M, D
    for (O = 0; O < h; O++)
      for (b = 0; b < a; b++) {
        for (v = (O * a + b) * 4, d = 0, f = 0, m = 0, y = 0, D = 0; D < r; D++)
          for (M = 0; M < r; M++)
            (S = O + D - n),
              (C = b + M - n),
              !(S < 0 || S >= h || C < 0 || C >= a) &&
                ((w = (S * a + C) * 4),
                (T = i[D * r + M]),
                (d += s[w] * T),
                (f += s[w + 1] * T),
                (m += s[w + 2] * T),
                u || (y += s[w + 3] * T))
        ;(c[v] = d), (c[v + 1] = f), (c[v + 2] = m), u ? (c[v + 3] = s[v + 3]) : (c[v + 3] = y)
      }
    t.imageData = l
  }
  sendUniformData(t, e) {
    t.uniform1fv(e.uMatrix, this.matrix)
  }
  toObject() {
    return p(p({}, super.toObject()), {}, { opaque: this.opaque, matrix: [...this.matrix] })
  }
}
g(ys, 'type', 'Convolute')
g(ys, 'defaults', Dl)
g(ys, 'uniformLocations', ['uMatrix', 'uOpaque', 'uHalfSize', 'uSize'])
x.setClass(ys)
const kl = `
  precision highp float;
  uniform sampler2D uTexture;
  uniform vec3 uGamma;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    vec3 correction = (1.0 / uGamma);
    color.r = pow(color.r, correction.r);
    color.g = pow(color.g, correction.g);
    color.b = pow(color.b, correction.b);
    gl_FragColor = color;
    gl_FragColor.rgb *= color.a;
  }
`,
  un = 'Gamma',
  Ml = { gamma: [1, 1, 1] }
class vs extends N {
  getFragmentSource() {
    return kl
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    super(t), (this.gamma = t.gamma || this.constructor.defaults.gamma.concat())
  }
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    const s = this.gamma,
      i = 1 / s[0],
      r = 1 / s[1],
      n = 1 / s[2]
    this.rgbValues || (this.rgbValues = { r: new Uint8Array(256), g: new Uint8Array(256), b: new Uint8Array(256) })
    const a = this.rgbValues
    for (let h = 0; h < 256; h++)
      (a.r[h] = Math.pow(h / 255, i) * 255),
        (a.g[h] = Math.pow(h / 255, r) * 255),
        (a.b[h] = Math.pow(h / 255, n) * 255)
    for (let h = 0; h < e.length; h += 4) (e[h] = a.r[e[h]]), (e[h + 1] = a.g[e[h + 1]]), (e[h + 2] = a.b[e[h + 2]])
  }
  sendUniformData(t, e) {
    t.uniform3fv(e.uGamma, this.gamma)
  }
  isNeutralState() {
    const { gamma: t } = this
    return t[0] === 1 && t[1] === 1 && t[2] === 1
  }
  toObject() {
    return { type: un, gamma: this.gamma.concat() }
  }
}
g(vs, 'type', un)
g(vs, 'defaults', Ml)
g(vs, 'uniformLocations', ['uGamma'])
x.setClass(vs)
const El = {
    average: `
    precision highp float;
    uniform sampler2D uTexture;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      float average = (color.r + color.b + color.g) / 3.0;
      gl_FragColor = vec4(average, average, average, color.a);
    }
    `,
    lightness: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `,
    luminosity: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `,
  },
  Pl = { mode: 'average' }
class Cs extends N {
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    for (let s = 0, i; s < e.length; s += 4) {
      switch (this.mode) {
        case 'average':
          i = (e[s] + e[s + 1] + e[s + 2]) / 3
          break
        case 'lightness':
          i = (Math.min(e[s], e[s + 1], e[s + 2]) + Math.max(e[s], e[s + 1], e[s + 2])) / 2
          break
        case 'luminosity':
          i = 0.21 * e[s] + 0.72 * e[s + 1] + 0.07 * e[s + 2]
          break
      }
      ;(e[s] = i), (e[s + 1] = i), (e[s + 2] = i)
    }
  }
  getCacheKey() {
    return ''.concat(this.type, '_').concat(this.mode)
  }
  getFragmentSource() {
    return El[this.mode]
  }
  sendUniformData(t, e) {
    t.uniform1i(e.uMode, 1)
  }
  isNeutralState() {
    return !1
  }
}
g(Cs, 'type', 'Grayscale')
g(Cs, 'defaults', Pl)
g(Cs, 'uniformLocations', ['uMode'])
x.setClass(Cs)
const Al = { rotation: 0 }
class Ci extends de {
  calculateMatrix() {
    const t = this.rotation * Math.PI,
      e = kt(t),
      s = Mt(t),
      i = 1 / 3,
      r = Math.sqrt(i) * s,
      n = 1 - e
    ;(this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
      (this.matrix[0] = e + n / 3),
      (this.matrix[1] = i * n - r),
      (this.matrix[2] = i * n + r),
      (this.matrix[5] = i * n + r),
      (this.matrix[6] = e + i * n),
      (this.matrix[7] = i * n - r),
      (this.matrix[10] = i * n - r),
      (this.matrix[11] = i * n + r),
      (this.matrix[12] = e + i * n)
  }
  isNeutralState() {
    return this.rotation === 0
  }
  applyTo(t) {
    this.calculateMatrix(), super.applyTo(t)
  }
  toObject() {
    return { type: this.type, rotation: this.rotation }
  }
}
g(Ci, 'type', 'HueRotation')
g(Ci, 'defaults', Al)
x.setClass(Ci)
const Fl = `
  precision highp float;
  uniform sampler2D uTexture;
  uniform int uInvert;
  uniform int uAlpha;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    if (uInvert == 1) {
      if (uAlpha == 1) {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);
      } else {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
      }
    } else {
      gl_FragColor = color;
    }
  }
`,
  Ll = { alpha: !1, invert: !0 }
class Ss extends N {
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    for (let s = 0; s < e.length; s += 4)
      (e[s] = 255 - e[s]),
        (e[s + 1] = 255 - e[s + 1]),
        (e[s + 2] = 255 - e[s + 2]),
        this.alpha && (e[s + 3] = 255 - e[s + 3])
  }
  getFragmentSource() {
    return Fl
  }
  isNeutralState() {
    return !this.invert
  }
  sendUniformData(t, e) {
    t.uniform1i(e.uInvert, Number(this.invert)), t.uniform1i(e.uAlpha, Number(this.alpha))
  }
}
g(Ss, 'type', 'Invert')
g(Ss, 'defaults', Ll)
g(Ss, 'uniformLocations', ['uInvert', 'uAlpha'])
x.setClass(Ss)
const jl = `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uStepH;
  uniform float uNoise;
  uniform float uSeed;
  varying vec2 vTexCoord;
  float rand(vec2 co, float seed, float vScale) {
    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
  }
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
    gl_FragColor = color;
  }
`,
  Rl = { noise: 0 }
class ws extends N {
  getFragmentSource() {
    return jl
  }
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    const s = this.noise
    for (let i = 0; i < e.length; i += 4) {
      const r = (0.5 - Math.random()) * s
      ;(e[i] += r), (e[i + 1] += r), (e[i + 2] += r)
    }
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uNoise, this.noise / 255), t.uniform1f(e.uSeed, Math.random())
  }
  isNeutralState() {
    return this.noise === 0
  }
}
g(ws, 'type', 'Noise')
g(ws, 'defaults', Rl)
g(ws, 'uniformLocations', ['uNoise', 'uSeed'])
x.setClass(ws)
const Bl = `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBlocksize;
  uniform float uStepW;
  uniform float uStepH;
  varying vec2 vTexCoord;
  void main() {
    float blockW = uBlocksize * uStepW;
    float blockH = uBlocksize * uStepH;
    int posX = int(vTexCoord.x / blockW);
    int posY = int(vTexCoord.y / blockH);
    float fposX = float(posX);
    float fposY = float(posY);
    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
    vec4 color = texture2D(uTexture, squareCoords);
    gl_FragColor = color;
  }
`,
  Il = { blocksize: 4 }
class xs extends N {
  applyTo2d(t) {
    let {
      imageData: { data: e, width: s, height: i },
    } = t
    for (let r = 0; r < i; r += this.blocksize)
      for (let n = 0; n < s; n += this.blocksize) {
        const a = r * 4 * s + n * 4,
          h = e[a],
          l = e[a + 1],
          c = e[a + 2],
          u = e[a + 3]
        for (let d = r; d < Math.min(r + this.blocksize, i); d++)
          for (let f = n; f < Math.min(n + this.blocksize, s); f++) {
            const m = d * 4 * s + f * 4
            ;(e[m] = h), (e[m + 1] = l), (e[m + 2] = c), (e[m + 3] = u)
          }
      }
  }
  isNeutralState() {
    return this.blocksize === 1
  }
  getFragmentSource() {
    return Bl
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uBlocksize, this.blocksize)
  }
}
g(xs, 'type', 'Pixelate')
g(xs, 'defaults', Il)
g(xs, 'uniformLocations', ['uBlocksize'])
x.setClass(xs)
const Vl = `
precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
  gl_FragColor = texture2D(uTexture, vTexCoord);
  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
    gl_FragColor.a = 0.0;
  }
}
`,
  Yl = { color: '#FFFFFF', distance: 0.02, useAlpha: !1 }
class bs extends N {
  getFragmentSource() {
    return Vl
  }
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    const s = this.distance * 255,
      i = new P(this.color).getSource(),
      r = [i[0] - s, i[1] - s, i[2] - s],
      n = [i[0] + s, i[1] + s, i[2] + s]
    for (let a = 0; a < e.length; a += 4) {
      const h = e[a],
        l = e[a + 1],
        c = e[a + 2]
      h > r[0] && l > r[1] && c > r[2] && h < n[0] && l < n[1] && c < n[2] && (e[a + 3] = 0)
    }
  }
  sendUniformData(t, e) {
    const s = new P(this.color).getSource(),
      i = this.distance,
      r = [0 + s[0] / 255 - i, 0 + s[1] / 255 - i, 0 + s[2] / 255 - i, 1],
      n = [s[0] / 255 + i, s[1] / 255 + i, s[2] / 255 + i, 1]
    t.uniform4fv(e.uLow, r), t.uniform4fv(e.uHigh, n)
  }
}
g(bs, 'type', 'RemoveColor')
g(bs, 'defaults', Yl)
g(bs, 'uniformLocations', ['uLow', 'uHigh'])
x.setClass(bs)
const Wl = { resizeType: 'hermite', scaleX: 1, scaleY: 1, lanczosLobes: 3 }
class Ts extends N {
  sendUniformData(t, e) {
    t.uniform2fv(e.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]),
      t.uniform1fv(e.uTaps, this.taps)
  }
  getFilterWindow() {
    const t = this.tempScale
    return Math.ceil(this.lanczosLobes / t)
  }
  getCacheKey() {
    const t = this.getFilterWindow()
    return ''.concat(this.type, '_').concat(t)
  }
  getFragmentSource() {
    const t = this.getFilterWindow()
    return this.generateShader(t)
  }
  getTaps() {
    const t = this.lanczosCreate(this.lanczosLobes),
      e = this.tempScale,
      s = this.getFilterWindow(),
      i = new Array(s)
    for (let r = 1; r <= s; r++) i[r - 1] = t(r * e)
    return i
  }
  generateShader(t) {
    const e = new Array(t)
    for (let s = 1; s <= t; s++) e[s - 1] = ''.concat(s, '.0 * uDelta')
    return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec2 uDelta;
      varying vec2 vTexCoord;
      uniform float uTaps[`
      .concat(
        t,
        `];
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        float sum = 1.0;
        `
      )
      .concat(
        e.map((s, i) =>
          `
              color += texture2D(uTexture, vTexCoord + `
            .concat(s, ') * uTaps[')
            .concat(i, '] + texture2D(uTexture, vTexCoord - ')
            .concat(s, ') * uTaps[')
            .concat(
              i,
              `];
              sum += 2.0 * uTaps[`
            )
            .concat(
              i,
              `];
            `
            )
        ).join(`
`),
        `
        gl_FragColor = color / sum;
      }
    `
      )
  }
  applyToForWebgl(t) {
    t.passes++,
      (this.width = t.sourceWidth),
      (this.horizontal = !0),
      (this.dW = Math.round(this.width * this.scaleX)),
      (this.dH = t.sourceHeight),
      (this.tempScale = this.dW / this.width),
      (this.taps = this.getTaps()),
      (t.destinationWidth = this.dW),
      super.applyTo(t),
      (t.sourceWidth = t.destinationWidth),
      (this.height = t.sourceHeight),
      (this.horizontal = !1),
      (this.dH = Math.round(this.height * this.scaleY)),
      (this.tempScale = this.dH / this.height),
      (this.taps = this.getTaps()),
      (t.destinationHeight = this.dH),
      super.applyTo(t),
      (t.sourceHeight = t.destinationHeight)
  }
  applyTo(t) {
    ds(t) ? this.applyToForWebgl(t) : this.applyTo2d(t)
  }
  isNeutralState() {
    return this.scaleX === 1 && this.scaleY === 1
  }
  lanczosCreate(t) {
    return e => {
      if (e >= t || e <= -t) return 0
      if (e < 11920929e-14 && e > -11920929e-14) return 1
      e *= Math.PI
      const s = e / t
      return ((Math.sin(e) / e) * Math.sin(s)) / s
    }
  }
  applyTo2d(t) {
    const e = t.imageData,
      s = this.scaleX,
      i = this.scaleY
    ;(this.rcpScaleX = 1 / s), (this.rcpScaleY = 1 / i)
    const r = e.width,
      n = e.height,
      a = Math.round(r * s),
      h = Math.round(n * i)
    let l
    this.resizeType === 'sliceHack'
      ? (l = this.sliceByTwo(t, r, n, a, h))
      : this.resizeType === 'hermite'
      ? (l = this.hermiteFastResize(t, r, n, a, h))
      : this.resizeType === 'bilinear'
      ? (l = this.bilinearFiltering(t, r, n, a, h))
      : this.resizeType === 'lanczos'
      ? (l = this.lanczosResize(t, r, n, a, h))
      : (l = new ImageData(a, h)),
      (t.imageData = l)
  }
  sliceByTwo(t, e, s, i, r) {
    const n = t.imageData,
      a = 0.5
    let h = !1,
      l = !1,
      c = e * a,
      u = s * a
    const d = t.filterBackend.resources
    let f = 0,
      m = 0
    const y = e
    let v = 0
    d.sliceByTwo || (d.sliceByTwo = G())
    const C = d.sliceByTwo
    ;(C.width < e * 1.5 || C.height < s) && ((C.width = e * 1.5), (C.height = s))
    const S = C.getContext('2d')
    for (S.clearRect(0, 0, e * 1.5, s), S.putImageData(n, 0, 0), i = Math.floor(i), r = Math.floor(r); !h || !l; )
      (e = c),
        (s = u),
        i < Math.floor(c * a) ? (c = Math.floor(c * a)) : ((c = i), (h = !0)),
        r < Math.floor(u * a) ? (u = Math.floor(u * a)) : ((u = r), (l = !0)),
        S.drawImage(C, f, m, e, s, y, v, c, u),
        (f = y),
        (m = v),
        (v += u)
    return S.getImageData(f, m, i, r)
  }
  lanczosResize(t, e, s, i, r) {
    function n(T) {
      let b, O, M, D, F, V, J, U, K, L, Y
      for (S.x = (T + 0.5) * u, w.x = Math.floor(S.x), b = 0; b < r; b++) {
        for (
          S.y = (b + 0.5) * d, w.y = Math.floor(S.y), F = 0, V = 0, J = 0, U = 0, K = 0, O = w.x - y;
          O <= w.x + y;
          O++
        )
          if (!(O < 0 || O >= e)) {
            ;(L = Math.floor(1e3 * Math.abs(O - S.x))), C[L] || (C[L] = {})
            for (let vt = w.y - v; vt <= w.y + v; vt++)
              vt < 0 ||
                vt >= s ||
                ((Y = Math.floor(1e3 * Math.abs(vt - S.y))),
                C[L][Y] || (C[L][Y] = c(Math.sqrt(Math.pow(L * f, 2) + Math.pow(Y * m, 2)) / 1e3)),
                (M = C[L][Y]),
                M > 0 &&
                  ((D = (vt * e + O) * 4),
                  (F += M),
                  (V += M * a[D]),
                  (J += M * a[D + 1]),
                  (U += M * a[D + 2]),
                  (K += M * a[D + 3])))
          }
        ;(D = (b * i + T) * 4), (l[D] = V / F), (l[D + 1] = J / F), (l[D + 2] = U / F), (l[D + 3] = K / F)
      }
      return ++T < i ? n(T) : h
    }
    const a = t.imageData.data,
      h = t.ctx.createImageData(i, r),
      l = h.data,
      c = this.lanczosCreate(this.lanczosLobes),
      u = this.rcpScaleX,
      d = this.rcpScaleY,
      f = 2 / this.rcpScaleX,
      m = 2 / this.rcpScaleY,
      y = Math.ceil((u * this.lanczosLobes) / 2),
      v = Math.ceil((d * this.lanczosLobes) / 2),
      C = {},
      S = { x: 0, y: 0 },
      w = { x: 0, y: 0 }
    return n(0)
  }
  bilinearFiltering(t, e, s, i, r) {
    let n,
      a,
      h,
      l,
      c,
      u,
      d,
      f,
      m,
      y,
      v,
      C,
      S = 0,
      w
    const T = this.rcpScaleX,
      b = this.rcpScaleY,
      O = 4 * (e - 1),
      D = t.imageData.data,
      F = t.ctx.createImageData(i, r),
      V = F.data
    for (d = 0; d < r; d++)
      for (f = 0; f < i; f++)
        for (
          c = Math.floor(T * f), u = Math.floor(b * d), m = T * f - c, y = b * d - u, w = 4 * (u * e + c), v = 0;
          v < 4;
          v++
        )
          (n = D[w + v]),
            (a = D[w + 4 + v]),
            (h = D[w + O + v]),
            (l = D[w + O + 4 + v]),
            (C = n * (1 - m) * (1 - y) + a * m * (1 - y) + h * y * (1 - m) + l * m * y),
            (V[S++] = C)
    return F
  }
  hermiteFastResize(t, e, s, i, r) {
    const n = this.rcpScaleX,
      a = this.rcpScaleY,
      h = Math.ceil(n / 2),
      l = Math.ceil(a / 2),
      c = t.imageData,
      u = c.data,
      d = t.ctx.createImageData(i, r),
      f = d.data
    for (let m = 0; m < r; m++)
      for (let y = 0; y < i; y++) {
        const v = (y + m * i) * 4
        let C = 0,
          S = 0,
          w = 0,
          T = 0,
          b = 0,
          O = 0,
          M = 0
        const D = (m + 0.5) * a
        for (let F = Math.floor(m * a); F < (m + 1) * a; F++) {
          const V = Math.abs(D - (F + 0.5)) / l,
            J = (y + 0.5) * n,
            U = V * V
          for (let K = Math.floor(y * n); K < (y + 1) * n; K++) {
            let L = Math.abs(J - (K + 0.5)) / h
            const Y = Math.sqrt(U + L * L)
            ;(Y > 1 && Y < -1) ||
              ((C = 2 * Y * Y * Y - 3 * Y * Y + 1),
              C > 0 &&
                ((L = 4 * (K + F * e)),
                (M += C * u[L + 3]),
                (w += C),
                u[L + 3] < 255 && (C = (C * u[L + 3]) / 250),
                (T += C * u[L]),
                (b += C * u[L + 1]),
                (O += C * u[L + 2]),
                (S += C)))
          }
        }
        ;(f[v] = T / S), (f[v + 1] = b / S), (f[v + 2] = O / S), (f[v + 3] = M / w)
      }
    return d
  }
}
g(Ts, 'type', 'Resize')
g(Ts, 'defaults', Wl)
g(Ts, 'uniformLocations', ['uDelta', 'uTaps'])
x.setClass(Ts)
const Xl = `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uSaturation;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float rgMax = max(color.r, color.g);
    float rgbMax = max(rgMax, color.b);
    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
    gl_FragColor = color;
  }
`,
  zl = { saturation: 0 }
class Os extends N {
  getFragmentSource() {
    return Xl
  }
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    const s = -this.saturation
    for (let i = 0; i < e.length; i += 4) {
      const r = Math.max(e[i], e[i + 1], e[i + 2])
      ;(e[i] += r !== e[i] ? (r - e[i]) * s : 0),
        (e[i + 1] += r !== e[i + 1] ? (r - e[i + 1]) * s : 0),
        (e[i + 2] += r !== e[i + 2] ? (r - e[i + 2]) * s : 0)
    }
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uSaturation, -this.saturation)
  }
  isNeutralState() {
    return this.saturation === 0
  }
}
g(Os, 'type', 'Saturation')
g(Os, 'defaults', zl)
g(Os, 'uniformLocations', ['uSaturation'])
x.setClass(Os)
const Hl = `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uVibrance;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float max = max(color.r, max(color.g, color.b));
    float avg = (color.r + color.g + color.b) / 3.0;
    float amt = (abs(max - avg) * 2.0) * uVibrance;
    color.r += max != color.r ? (max - color.r) * amt : 0.00;
    color.g += max != color.g ? (max - color.g) * amt : 0.00;
    color.b += max != color.b ? (max - color.b) * amt : 0.00;
    gl_FragColor = color;
  }
`,
  Gl = { vibrance: 0 }
class Ds extends N {
  getFragmentSource() {
    return Hl
  }
  applyTo2d(t) {
    let {
      imageData: { data: e },
    } = t
    const s = -this.vibrance
    for (let i = 0; i < e.length; i += 4) {
      const r = Math.max(e[i], e[i + 1], e[i + 2]),
        n = (e[i] + e[i + 1] + e[i + 2]) / 3,
        a = ((Math.abs(r - n) * 2) / 255) * s
      ;(e[i] += r !== e[i] ? (r - e[i]) * a : 0),
        (e[i + 1] += r !== e[i + 1] ? (r - e[i + 1]) * a : 0),
        (e[i + 2] += r !== e[i + 2] ? (r - e[i + 2]) * a : 0)
    }
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uVibrance, -this.vibrance)
  }
  isNeutralState() {
    return this.vibrance === 0
  }
}
g(Ds, 'type', 'Vibrance')
g(Ds, 'defaults', Gl)
g(Ds, 'uniformLocations', ['uVibrance'])
x.setClass(Ds)
const Nl = {
    data() {
      return {
        colors: '#FF6767',
        width: 3,
        strokeWidth: 3,
        fontSize: 18,
        canvas: null,
        pencilBrush: null,
        drawingObject: null,
        textObject: null,
        mouseFrom: {},
        mouseTo: {},
        currentType: 'free',
        idDrawing: !1,
        stateArr: [],
        isRedoing: !1,
      }
    },
    watch: {
      width: function () {
        ;(this.canvas.freeDrawingBrush.width = parseInt(this.width, 10)), (this.strokeWidth = parseInt(this.width, 10))
      },
    },
    mounted() {
      this.initfreeDraw(), this.initEvent()
    },
    methods: {
      initfreeDraw() {
        ;(this.canvas = new $s('canvas', { isDrawingMode: !1, backgroundColor: '#efefef' })),
          (this.pencilBrush = new Ke(this.canvas)),
          (this.canvas.freeDrawingBrush = this.pencilBrush),
          (this.canvas.freeDrawingBrush.color = this.colors),
          (this.canvas.freeDrawingBrush.width = this.width),
          this.canvas.renderAll()
      },
      initEvent() {
        const o = ['line', 'circle', 'rect', 'triangle', 'text']
        this.canvas.on('mouse:down', t => {
          if ((console.log('===mouse:down==='), o.indexOf(this.currentType) != -1))
            switch (
              ((this.mouseFrom.x = t.e.clientX),
              (this.mouseFrom.y = t.e.clientY - 50),
              (this.idDrawing = !0),
              this.currentType)
            ) {
              case 'text':
                this.initText()
                break
            }
        }),
          this.canvas.on('mouse:move', t => {
            if (this.idDrawing && o.indexOf(this.currentType) != -1)
              switch (
                (console.log('===mouse:move==='),
                (this.mouseTo.x = t.e.clientX),
                (this.mouseTo.y = t.e.clientY - 50),
                this.currentType)
              ) {
                case 'line':
                  this.initLine()
                  break
                case 'circle':
                  this.initCircle()
                  break
                case 'rect':
                  this.initRect()
                  break
                case 'triangle':
                  this.initTriangle()
                  break
              }
          }),
          this.canvas.on('mouse:up', t => {
            o.indexOf(this.currentType) != -1 &&
              (console.log('===mouse:up==='),
              (this.mouseTo.x = t.e.clientX),
              (this.mouseTo.y = t.e.clientY - 50),
              (this.drawingObject = null),
              (this.idDrawing = !1),
              this.resetMove())
          }),
          this.canvas.on('object:added', () => {
            this.isRedoing == !1 && (this.stateArr = [])
          })
      },
      freeDraw() {
        this.removeTextObject(), (this.canvas.isDrawingMode = !0), (this.currentType = 'free')
      },
      lineDraw() {
        ;(this.currentType = 'line'), this.initLine()
      },
      circleDraw() {
        ;(this.currentType = 'circle'), this.initCircle()
      },
      rectDraw() {
        ;(this.currentType = 'rect'), this.initRect()
      },
      triangleDraw() {
        ;(this.currentType = 'triangle'), this.initTriangle()
      },
      textDraw() {
        ;(this.currentType = 'text'),
          (this.canvas.isDrawingMode = !1),
          (this.canvas.selection = !1),
          this.drawingObject && this.canvas.remove(this.drawingObject)
      },
      imgDraw() {
        document.getElementById('uploadfile').click()
      },
      uploadFile(o) {
        ;(this.canvas.isDrawingMode = !1), this.removeTextObject()
        var t = o.target.files[0],
          e = new FileReader()
        ;(e.onload = s => {
          var i = s.target.result
          at.fromURL(i, r => {
            this.canvas.add(r).renderAll()
          })
        }),
          e.readAsDataURL(t),
          (o.target.value = '')
      },
      toggleDrawingObject(o) {
        ;(this.canvas.isDrawingMode = !1),
          (this.canvas.selection = !1),
          (o.selectable = !1),
          this.drawingObject && this.canvas.remove(this.drawingObject),
          this.canvas.add(o),
          (this.drawingObject = o),
          this.textObject && (this.textObject.exitEditing(), (this.textObject = null))
      },
      initLine() {
        let o = new Ht([this.mouseFrom.x, this.mouseFrom.y, this.mouseTo.x, this.mouseTo.y], {
          fill: this.colors,
          stroke: this.colors,
          strokeWidth: this.strokeWidth,
        })
        this.toggleDrawingObject(o)
      },
      initCircle() {
        let o = this.mouseFrom.x,
          t = this.mouseFrom.y,
          e = Math.sqrt((this.mouseTo.x - o) * (this.mouseTo.x - o) + (this.mouseTo.y - t) * (this.mouseTo.y - t)) / 2,
          s = new Tt({
            left: o,
            top: t,
            stroke: this.colors,
            fill: 'rgba(255, 255, 255, 0)',
            radius: e,
            strokeWidth: this.strokeWidth,
          })
        this.toggleDrawingObject(s)
      },
      initRect() {
        let o = this.mouseFrom.x,
          t = this.mouseFrom.y,
          e = this.mouseTo.x - this.mouseFrom.x,
          s = this.mouseTo.y - this.mouseFrom.y,
          i = new _t({
            left: o,
            top: t,
            width: e,
            height: s,
            stroke: this.colors,
            fill: 'rgba(255, 255, 255, 0)',
            strokeWidth: this.strokeWidth,
          })
        this.toggleDrawingObject(i)
      },
      initTriangle() {
        let o = this.mouseFrom.x,
          t = this.mouseFrom.y,
          e = this.mouseTo.y - this.mouseFrom.y,
          s = Math.sqrt(Math.pow(e, 2) + Math.pow(e / 2, 2)),
          i = new Vt({
            left: o,
            top: t,
            width: s,
            height: e,
            stroke: this.colors,
            fill: 'rgba(255, 255, 255, 0)',
            strokeWidth: this.strokeWidth,
          })
        this.toggleDrawingObject(i)
      },
      initText() {
        ;(this.canvas.isDrawingMode = !1),
          (this.canvas.selection = !1),
          (this.textObject = new Yt('\u4F60\u597D', {
            left: this.mouseFrom.x,
            top: this.mouseFrom.y,
            fontSize: this.fontSize,
            fill: this.colors,
            hasControls: !1,
          })),
          this.canvas.add(this.textObject),
          this.textObject.enterEditing(),
          this.textObject.hiddenTextarea.focus()
      },
      undoDraw() {
        this.canvas._objects.length > 0 && (this.stateArr.push(this.canvas._objects.pop()), this.canvas.renderAll())
      },
      redoDraw() {
        this.stateArr.length > 0 &&
          ((this.isRedoing = !0), this.canvas.add(this.stateArr.pop()), this.canvas.renderAll())
      },
      resetMove() {
        ;(this.mouseFrom = {}), (this.mouseTo = {})
      },
      removeTextObject() {
        ;(this.currentType = ''),
          this.textObject && (console.log('remove text'), this.textObject.exitEditing(), (this.textObject = null))
      },
      clear() {
        this.canvas.clear(),
          (this.canvas.backgroundColor = '#efefef'),
          this.resetMove(),
          (this.isRedoing = !1),
          (this.stateArr = [])
      },
      exportCanvas() {
        const o = this.canvas.toDataURL({
            width: this.canvas.width,
            height: this.canvas.height,
            left: 0,
            top: 0,
            format: 'png',
          }),
          t = document.createElement('a')
        ;(t.download = 'canvas.png'),
          (t.href = o),
          document.body.appendChild(t),
          t.click(),
          document.body.removeChild(t)
      },
      selectDraw() {
        this.removeTextObject(),
          this.canvas.getObjects().map(o => {
            o.set('selectable', !0)
          })
      },
      unselectDraw() {
        this.removeTextObject(),
          this.canvas.getObjects().map(o => {
            o.set('selectable', !1)
          })
      },
    },
  },
  Ul = { class: 'home' },
  Kl = { class: 'btnwrap' },
  ql = { class: 'brushWidth' },
  $l = { class: 'brushWidth' }
function Jl(o, t, e, s, i, r) {
  return (
    gn(),
    pn('div', Ul, [
      I('div', Kl, [
        I('div', ql, [
          t[16] || (t[16] = I('label', null, '\u753B\u7B14\u7EBF\u6761\u7C97\u7EC6:', -1)),
          wi(
            I(
              'input',
              {
                'onUpdate:modelValue': t[0] || (t[0] = n => (i.width = n)),
                type: 'range',
                name: 'vol',
                min: '1',
                max: '100',
              },
              null,
              512
            ),
            [[xi, i.width]]
          ),
        ]),
        I('div', $l, [
          t[17] || (t[17] = I('label', null, '\u5B57\u4F53\u5927\u5C0F:', -1)),
          wi(
            I(
              'input',
              {
                'onUpdate:modelValue': t[1] || (t[1] = n => (i.fontSize = n)),
                type: 'range',
                name: 'vol',
                min: '18',
                max: '50',
              },
              null,
              512
            ),
            [[xi, i.fontSize]]
          ),
        ]),
        I('button', { class: 'freeDrawBtn', onClick: t[2] || (t[2] = n => r.freeDraw()) }, '\u81EA\u7531\u7ED8\u5236'),
        I('button', { class: 'lineDrawBtn', onClick: t[3] || (t[3] = n => r.lineDraw()) }, '\u76F4\u7EBF'),
        I('button', { class: 'cricleDrawBtn', onClick: t[4] || (t[4] = n => r.circleDraw()) }, '\u5706'),
        I('button', { class: 'rectDrawBtn', onClick: t[5] || (t[5] = n => r.rectDraw()) }, '\u77E9\u5F62'),
        I(
          'button',
          { class: 'triangleDrawBtn', onClick: t[6] || (t[6] = n => r.triangleDraw()) },
          '\u4E09\u89D2\u5F62'
        ),
        I('button', { class: 'textDrawBtn', onClick: t[7] || (t[7] = n => r.textDraw()) }, '\u6587\u672C'),
        I('button', { class: 'imgDrawBtn', onClick: t[8] || (t[8] = n => r.imgDraw()) }, '\u672C\u5730\u56FE\u7247'),
        I(
          'input',
          {
            id: 'uploadfile',
            type: 'file',
            accept: 'image/*',
            style: { display: 'none' },
            onChange: t[9] || (t[9] = (...n) => r.uploadFile && r.uploadFile(...n)),
          },
          null,
          32
        ),
        I('button', { class: 'undoBtn', onClick: t[10] || (t[10] = n => r.undoDraw()) }, '\u64A4\u9500'),
        I('button', { class: 'redoBtn', onClick: t[11] || (t[11] = n => r.redoDraw()) }, '\u6062\u590D'),
        I('button', { class: 'exportBtn', onClick: t[12] || (t[12] = n => r.exportCanvas()) }, '\u5BFC\u51FA'),
        I('button', { class: 'clearBtn', onClick: t[13] || (t[13] = n => r.clear()) }, '\u6E05\u9664'),
        I('button', { class: 'selectDrawBtn', onClick: t[14] || (t[14] = n => r.selectDraw()) }, '\u53EF\u9009\u4E2D'),
        I(
          'button',
          { class: 'selectDrawBtn', onClick: t[15] || (t[15] = n => r.unselectDraw()) },
          '\u4E0D\u53EF\u9009\u4E2D'
        ),
      ]),
      t[18] || (t[18] = I('canvas', { id: 'canvas', width: '1440', height: '600' }, null, -1)),
    ])
  )
}
const tc = fn(Nl, [
  ['render', Jl],
  ['__scopeId', 'data-v-b9add072'],
])
export { tc as default }
