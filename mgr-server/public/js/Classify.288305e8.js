'use strict';
(self['webpackChunkbuilding_material_mgr_fe'] =
  self['webpackChunkbuilding_material_mgr_fe'] || []).push([
  [344],
  {
    1224: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return y;
          },
        });
      var l = a(3396);
      const s = (0, l.Uk)('添加'),
        i = (0, l.Uk)('删除'),
        n = (0, l.Uk)('   '),
        c = (0, l.Uk)('修改');
      function u(t, e, a, u, o, r) {
        const d = (0, l.up)('a-input'),
          m = (0, l.up)('a-button'),
          p = (0, l.up)('a-divider'),
          _ = (0, l.up)('a-table'),
          v = (0, l.up)('a-card');
        return (
          (0, l.wg)(),
          (0, l.iD)('div', null, [
            (0, l.Wm)(
              v,
              { title: '书籍分类管理' },
              {
                default: (0, l.w5)(() => [
                  (0, l._)('div', null, [
                    (0, l.Wm)(
                      d,
                      {
                        placeholder: '输入书籍分类',
                        style: { width: '200px', 'margin-right': '24px' },
                        value: t.title,
                        'onUpdate:value': e[0] || (e[0] = (e) => (t.title = e)),
                      },
                      null,
                      8,
                      ['value']
                    ),
                    (0, l.Wm)(
                      m,
                      { onClick: t.add, type: 'primary' },
                      { default: (0, l.w5)(() => [s]), _: 1 },
                      8,
                      ['onClick']
                    ),
                  ]),
                  (0, l.Wm)(p),
                  (0, l._)('div', null, [
                    (0, l.Wm)(
                      _,
                      {
                        bordered: '',
                        'data-source': t.list,
                        columns: t.columns,
                        pagination: !1,
                      },
                      {
                        actions: (0, l.w5)(({ record: e }) => [
                          (0, l.Wm)(
                            m,
                            {
                              size: 'small',
                              type: 'danger',
                              onClick: (a) => t.remove(e),
                            },
                            { default: (0, l.w5)(() => [i]), _: 2 },
                            1032,
                            ['onClick']
                          ),
                          n,
                          (0, l.Wm)(
                            m,
                            {
                              size: 'small',
                              type: 'primary',
                              onClick: (a) => t.updateTitle(e),
                            },
                            { default: (0, l.w5)(() => [c]), _: 2 },
                            1032,
                            ['onClick']
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['data-source', 'columns']
                    ),
                  ]),
                ]),
                _: 1,
              }
            ),
          ])
        );
      }
      var o = a(4870),
        r = a(3926),
        d = a(1731),
        m = a(252),
        p = a(3330),
        _ = a(8626);
      const v = [
        { title: '分类', dataIndex: 'title' },
        { title: '操作', slots: { customRender: 'actions' } },
      ];
      var k = (0, l.aZ)({
          setup() {
            const t = (0, o.iH)(''),
              e = (0, o.iH)([]),
              a = async () => {
                const t = await r.xk.list();
                (0, d.q6)(t).success(({ data: t }) => {
                  e.value = t;
                });
              },
              s = async () => {
                const e = await r.xk.add(t.value);
                (0, d.q6)(e).success(() => {
                  a(), (t.value = '');
                });
              };
            (0, l.bv)(() => {
              a();
            });
            const i = async ({ _id: t }) => {
                const e = await r.xk.remove(t);
                (0, d.q6)(e).success(({ msg: t }) => {
                  m.Z.success(t), a();
                });
              },
              n = async ({ _id: t }) => {
                p.Z.confirm({
                  title: '请输入新的分类名称',
                  content: (0, l.Wm)('div', { style: 'margin-top:16px' }, [
                    (0, l.Wm)(_.ZP, { class: '__classify_new_title' }, null),
                  ]),
                  onOk: async () => {
                    const e = document.querySelector(
                        '.__classify_new_title'
                      ).value,
                      l = await r.xk.updateTitle(t, e);
                    (0, d.q6)(l).success(({ msg: t }) => {
                      m.Z.success(t), a();
                    });
                  },
                });
              };
            return {
              add: s,
              list: e,
              title: t,
              columns: v,
              remove: i,
              updateTitle: n,
            };
          },
        }),
        f = a(89);
      const w = (0, f.Z)(k, [['render', u]]);
      var y = w;
    },
  },
]);
//# sourceMappingURL=Classify.288305e8.js.map
