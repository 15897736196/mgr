"use strict";(self["webpackChunkbuilding_material_mgr_fe"]=self["webpackChunkbuilding_material_mgr_fe"]||[]).push([[58],{421:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var n=e(3396);const u=(0,n.Uk)("重置密码"),s=(0,n.Uk)("   "),c=(0,n.Uk)("忽略");function l(t,a,e,l,i,o){const r=(0,n.up)("a-button"),d=(0,n.up)("a-table"),m=(0,n.up)("a-pagination"),g=(0,n.up)("flex-end"),p=(0,n.up)("a-card");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(p,{title:"重置密码申请列表"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{bordered:"","data-source":t.list,columns:t.columns,pagination:!1},{actions:(0,n.w5)((({record:a})=>[(0,n.Wm)(r,{size:"small",type:"primary",onClick:e=>t.changeStatus(a,2)},{default:(0,n.w5)((()=>[u])),_:2},1032,["onClick"]),s,(0,n.Wm)(r,{size:"small",type:"primary",onClick:e=>t.changeStatus(a,3)},{default:(0,n.w5)((()=>[c])),_:2},1032,["onClick"])])),_:1},8,["data-source","columns"]),(0,n.Wm)(g,{style:{"margin-top":"24px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{current:t.curPage,"onUpdate:current":a[0]||(a[0]=a=>t.curPage=a),pageSize:20,total:t.total,onChange:t.setPage},null,8,["current","total","onChange"])])),_:1})])),_:1})])}var i=e(4870),o=e(3926),r=e(1731),d=e(252),m=(0,n.aZ)({setup(){const t=(0,i.iH)([]),a=(0,i.iH)(1),e=(0,i.iH)(0),u=[{title:"账户",dataIndex:"account"},{title:"操作",slots:{customRender:"actions"}}],s=async()=>{const n=await o.c0.list(a.value,20);(0,r.q6)(n).success((({data:{list:a,total:n}})=>{t.value=a,e.value=n}))};(0,n.bv)((()=>{s()}));const c=async({_id:t},a)=>{const e=await o.c0.updateStatus(t,a);(0,r.q6)(e).success((({msg:t})=>{d.Z.success(t),s()}))},l=t=>{a.value=t,s()};return{total:e,list:t,columns:u,changeStatus:c,setPage:l,curPage:a}}}),g=e(89);const p=(0,g.Z)(m,[["render",l]]);var f=p}}]);
//# sourceMappingURL=resetPassword.7513e118.js.map