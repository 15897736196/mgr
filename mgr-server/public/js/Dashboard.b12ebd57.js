'use strict';
(self['webpackChunkbuilding_material_mgr_fe'] =
  self['webpackChunkbuilding_material_mgr_fe'] || []).push([
  [362, 179, 326],
  {
    2505: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return z;
          },
        });
      var s = t(3396),
        n = t(7139);
      const i = (e) => (
          (0, s.dD)('data-v-010faa67'), (e = e()), (0, s.Cn)(), e
        ),
        l = { class: 'list' },
        c = { class: 'item' },
        o = i(() => (0, s._)('div', { class: 'title' }, '书籍', -1)),
        u = { class: 'count' },
        r = { class: 'item' },
        d = i(() => (0, s._)('div', { class: 'title' }, '用户', -1)),
        p = { class: 'count' },
        m = { class: 'item' },
        v = i(() => (0, s._)('div', { class: 'title' }, '日志', -1)),
        f = { class: 'count' },
        g = { class: 'table-list' },
        _ = { class: 'left' },
        w = { class: 'right' };
      function b(e, a, t, i, b, k) {
        const h = (0, s.up)('a-card'),
          I = (0, s.up)('a-spin'),
          W = (0, s.up)('book'),
          q = (0, s.up)('log');
        return (
          (0, s.wg)(),
          (0, s.iD)('div', null, [
            (0, s.Wm)(
              I,
              { spinning: e.loading },
              {
                default: (0, s.w5)(() => [
                  (0, s.Wm)(h, null, {
                    default: (0, s.w5)(() => [
                      (0, s._)('div', l, [
                        (0, s._)('div', c, [
                          o,
                          (0, s._)(
                            'div',
                            u,
                            '共' + (0, n.zw)(e.baseInfo.book) + '项',
                            1
                          ),
                        ]),
                        (0, s._)('div', r, [
                          d,
                          (0, s._)(
                            'div',
                            p,
                            '共' + (0, n.zw)(e.baseInfo.user) + '位',
                            1
                          ),
                        ]),
                        (0, s._)('div', m, [
                          v,
                          (0, s._)(
                            'div',
                            f,
                            '共' + (0, n.zw)(e.baseInfo.log) + '条',
                            1
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ['spinning']
            ),
            (0, s._)('div', g, [
              (0, s._)('div', _, [(0, s.Wm)(W, { simple: '' })]),
              (0, s._)('div', w, [(0, s.Wm)(q, { simple: '' })]),
            ]),
          ])
        );
      }
      var k = t(4870),
        h = t(3926),
        I = t(1731),
        W = t(6792),
        q = t(3275),
        y = (0, s.aZ)({
          components: { Book: q['default'], Log: W['default'] },
          setup() {
            const e = (0, k.iH)(!0),
              a = (0, k.iH)({}),
              t = async () => {
                e.value = !0;
                const t = await h.sI.baseInfo();
                (e.value = !1),
                  (0, I.q6)(t).success(({ data: e }) => {
                    a.value = e;
                  });
              };
            return (
              (0, s.bv)(() => {
                t();
              }),
              { baseInfo: a, loading: e }
            );
          },
        }),
        C = t(89);
      const H = (0, C.Z)(y, [
        ['render', b],
        ['__scopeId', 'data-v-010faa67'],
      ]);
      var z = H;
    },
    6792: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return _;
          },
        });
      var s = t(3396),
        n = t(7139);
      const i = { key: 0 },
        l = ['onClick'];
      function c(e, a, t, c, o, u) {
        const r = (0, s.up)('a-divider'),
          d = (0, s.up)('a-table'),
          p = (0, s.up)('a-pagination'),
          m = (0, s.up)('flex-end'),
          v = (0, s.up)('a-card'),
          f = (0, s.up)('a-spin');
        return (
          (0, s.wg)(),
          (0, s.iD)('div', null, [
            (0, s.Wm)(
              f,
              { spinning: e.loading },
              {
                default: (0, s.w5)(() => [
                  (0, s.Wm)(
                    v,
                    { title: e.simple ? '最近的操作日志' : '' },
                    {
                      default: (0, s.w5)(() => [
                        e.simple
                          ? (0, s.kq)('', !0)
                          : ((0, s.wg)(), (0, s.iD)('h2', i, '操作日志')),
                        e.simple
                          ? (0, s.kq)('', !0)
                          : ((0, s.wg)(), (0, s.j4)(r, { key: 1 })),
                        (0, s.Wm)(
                          d,
                          {
                            bordered: '',
                            'data-source': e.list,
                            columns: e.columns,
                            pagination: !1,
                          },
                          (0, s.Nv)(
                            {
                              createdAt: (0, s.w5)(({ record: a }) => [
                                (0, s.Uk)(
                                  (0, n.zw)(e.formatTimeStamp(a.meta.createAt)),
                                  1
                                ),
                              ]),
                              _: 2,
                            },
                            [
                              e.simple
                                ? void 0
                                : {
                                    name: 'action',
                                    fn: (0, s.w5)(({ record: a }) => [
                                      (0, s._)(
                                        'a',
                                        {
                                          href: 'javascript:;',
                                          onClick: (t) => e.remove(a),
                                        },
                                        '删除',
                                        8,
                                        l
                                      ),
                                    ]),
                                  },
                            ]
                          ),
                          1032,
                          ['data-source', 'columns']
                        ),
                        (0, s.Wm)(m, null, {
                          default: (0, s.w5)(() => [
                            e.simple
                              ? (0, s.kq)('', !0)
                              : ((0, s.wg)(),
                                (0, s.j4)(
                                  p,
                                  {
                                    key: 0,
                                    style: { 'margin-top': '24px' },
                                    current: e.curPage,
                                    'onUpdate:current':
                                      a[0] || (a[0] = (a) => (e.curPage = a)),
                                    pageSize: 20,
                                    total: e.total,
                                    onChange: e.setPage,
                                  },
                                  null,
                                  8,
                                  ['current', 'total', 'onChange']
                                )),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    ['title']
                  ),
                ]),
                _: 1,
              },
              8,
              ['spinning']
            ),
          ])
        );
      }
      var o = t(4870),
        u = t(3926),
        r = t(1731);
      const d = [
          ['/character/list', '获取角色列表'],
          ['/log/list', '获取日志列表'],
          ['/user/info', '获取自己的登入信息'],
        ],
        p = (e) => {
          let a = '';
          return (
            d.forEach((t) => {
              e.includes(t[0]) && (a = e.replace(t[0], t[1]));
            }),
            a || e
          );
        };
      var m = t(252);
      var v = (0, s.aZ)({
          props: { simple: Boolean },
          setup(e) {
            const a = [
              { title: '用户名', dataIndex: 'user.account' },
              { title: '动作', dataIndex: 'action' },
              { title: '记录时间', slots: { customRender: 'createdAt' } },
            ];
            e.simple ||
              a.push({ title: '操作', slots: { customRender: 'action' } });
            const t = (0, o.iH)(1),
              n = (0, o.iH)(0),
              i = (0, o.iH)([]),
              l = (0, o.iH)(!0),
              c = async () => {
                l.value = !0;
                const e = await u.cM.list(t.value, 20);
                (l.value = !1),
                  (0, r.q6)(e).success(({ data: { list: e, total: a } }) => {
                    e.forEach((e) => {
                      e.action = p(e.request.url);
                    }),
                      (i.value = e),
                      (n.value = a);
                  });
              };
            (0, s.bv)(() => {
              c();
            });
            const d = (e) => {
                (t.value = e), c();
              },
              v = async ({ _id: e }) => {
                const a = await u.cM.remove(e);
                (0, r.q6)(a).success(({ msg: e }) => {
                  m.Z.success(e);
                });
              };
            return {
              curPage: t,
              total: n,
              list: i,
              columns: a,
              setPage: d,
              loading: l,
              formatTimeStamp: r.jH,
              remove: v,
              simple: e.simple,
            };
          },
        }),
        f = t(89);
      const g = (0, f.Z)(v, [['render', c]]);
      var _ = g;
    },
  },
]);
//# sourceMappingURL=Dashboard.b12ebd57.js.map
