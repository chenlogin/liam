import { d as i, c as _, s as d, o as m, a as p, b as e, t as o, u as t, F as b } from './index.4d458e66.js'
const f = { class: 'about' },
  k = i({
    __name: 'AboutPage',
    setup(g) {
      const s = _(),
        { name: u, count: l, doublePlusOne: r } = d(s),
        { increment: a } = s
      return (v, n) => (
        m(),
        p(
          b,
          null,
          [
            n[1] || (n[1] = e('div', null, o('>> aboutPage'), -1)),
            e('div', f, [
              e('div', null, o(t(u)) + ': ' + o(t(l)), 1),
              e('div', null, 'doublePlusOne: ' + o(t(r)), 1),
              e('button', { onClick: n[0] || (n[0] = (...c) => t(a) && t(a)(...c)) }, 'increment'),
            ]),
          ],
          64
        )
      )
    },
  })
export { k as default }
