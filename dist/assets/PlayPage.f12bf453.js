import {
  r as o,
  e as x,
  n as g,
  f as D,
  w as P,
  g as y,
  h as I,
  i as C,
  j as n,
  k as A,
  l as L,
  m as v,
  d as b,
  H as _,
  B as E,
  I as H,
  p as N,
  q as S,
  o as F,
  a as O,
  u as q,
  b as z,
  v as M,
  x as V,
  y as j,
  _ as K,
} from './index.4d458e66.js'
const W = (e, s) => {
  const t = o(),
    a = () => {
      t.value = C(e).height
    }
  return (
    x(() => {
      if ((g(a), s)) for (let l = 1; l <= 3; l++) setTimeout(a, 100 * l)
    }),
    D(() => g(a)),
    P([y, I], a),
    t
  )
}
function Z(e, s) {
  const t = W(e, !0)
  return a => n('div', { class: s('placeholder'), style: { height: t.value ? `${t.value}px` : void 0 } }, [a()])
}
const [$, i] = A('nav-bar'),
  G = {
    title: String,
    fixed: Boolean,
    zIndex: L,
    border: v,
    leftText: String,
    rightText: String,
    leftDisabled: Boolean,
    rightDisabled: Boolean,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: v,
  }
var J = b({
  name: $,
  props: G,
  emits: ['clickLeft', 'clickRight'],
  setup(e, { emit: s, slots: t }) {
    const a = o(),
      l = Z(a, i),
      u = r => {
        e.leftDisabled || s('clickLeft', r)
      },
      c = r => {
        e.rightDisabled || s('clickRight', r)
      },
      d = () =>
        t.left
          ? t.left()
          : [
              e.leftArrow && n(H, { class: i('arrow'), name: 'arrow-left' }, null),
              e.leftText && n('span', { class: i('text') }, [e.leftText]),
            ],
      f = () => (t.right ? t.right() : n('span', { class: i('text') }, [e.rightText])),
      h = () => {
        const { title: r, fixed: B, border: k, zIndex: w } = e,
          m = N(w),
          R = e.leftArrow || e.leftText || t.left,
          T = e.rightText || t.right
        return n(
          'div',
          { ref: a, style: m, class: [i({ fixed: B }), { [E]: k, 'van-safe-area-top': e.safeAreaInsetTop }] },
          [
            n('div', { class: i('content') }, [
              R &&
                n(
                  'div',
                  {
                    class: [i('left', { disabled: e.leftDisabled }), e.clickable && !e.leftDisabled ? _ : ''],
                    onClick: u,
                  },
                  [d()]
                ),
              n('div', { class: [i('title'), 'van-ellipsis'] }, [t.title ? t.title() : r]),
              T &&
                n(
                  'div',
                  {
                    class: [i('right', { disabled: e.rightDisabled }), e.clickable && !e.rightDisabled ? _ : ''],
                    onClick: c,
                  },
                  [f()]
                ),
            ]),
          ]
        )
      }
    return () => (e.fixed && e.placeholder ? l(h) : h())
  },
})
const Q = S(J),
  U = ['src'],
  X = b({
    __name: 'PlayPage',
    setup(e) {
      const s = M(),
        t = V(),
        a = o(''),
        l = o(''),
        u = s.query.index,
        c = j[parseInt(u)]
      x(() => {
        ;(a.value = c.name), (l.value = c.url)
      })
      const d = () => {
          t.push('/')
        },
        f = () => {
          window.open(l.value)
        }
      return (h, r) => (
        F(),
        O('div', null, [
          n(
            q(Q),
            {
              title: a.value,
              'left-text': '\u8FD4\u56DE',
              'right-text': '\u6253\u5F00\u65B0\u9875',
              'left-arrow': '',
              onClickLeft: d,
              onClickRight: f,
            },
            null,
            8,
            ['title']
          ),
          z('iframe', { src: l.value, width: '600', height: '400' }, null, 8, U),
        ])
      )
    },
  })
const p = K(X, [['__scopeId', 'data-v-3eaeeb4a']])
export { p as default }
