"use strict";(self["webpackChunkbuilding_material_mgr_fe"]=self["webpackChunkbuilding_material_mgr_fe"]||[]).push([[429],{956:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=a(3396),u=a(7139);const s=(0,n.Uk)(" 添加 "),l={style:{color:"#84AF9B"}},c=(0,n.Uk)(" 删除 ");function o(t,e,a,o,i,r){const d=(0,n.up)("a-input-number"),m=(0,n.up)("a-button"),p=(0,n.up)("a-divider"),v=(0,n.up)("a-table"),g=(0,n.up)("a-pagination"),_=(0,n.up)("flex-end"),f=(0,n.up)("a-card");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(f,{title:"邀请码管理"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(d,{id:"input",value:t.count,"onUpdate:value":e[0]||(e[0]=e=>t.count=e),min:1,max:9999},null,8,["value"]),(0,n.Wm)(m,{type:"primary",style:{"margin-left":"24px"},onClick:t.add},{default:(0,n.w5)((()=>[s])),_:1},8,["onClick"])]),(0,n.Wm)(p),(0,n._)("div",null,[(0,n.Wm)(v,{bordered:"",columns:t.columns,"data-source":t.list,pagination:!1},{status:(0,n.w5)((({record:t})=>[(0,n._)("div",l,(0,u.zw)(t.user?"该邀请码已被使用":"未使用"),1)])),actions:(0,n.w5)((({record:e})=>[(0,n.Wm)(m,{onClick:a=>t.remove(e),type:"danger",size:"small"},{default:(0,n.w5)((()=>[c])),_:2},1032,["onClick"])])),_:1},8,["columns","data-source"])]),(0,n.Wm)(_,{style:{"margin-top":"24px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{current:t.curPage,"onUpdate:current":e[1]||(e[1]=e=>t.curPage=e),pageSize:15,total:t.total,onChange:t.setChange},null,8,["current","total","onChange"])])),_:1})])),_:1})])}var i=a(4870),r=a(3926),d=a(1731),m=a(252);const p=[{title:"邀请码",dataIndex:"code"},{title:"是否被使用过",slots:{customRender:"status"}},{title:"操作",slots:{customRender:"actions"}}];var v=(0,n.aZ)({setup(){const t=(0,i.iH)(1),e=(0,i.iH)(1),a=(0,i.iH)([]),u=(0,i.iH)(0),s=async()=>{const t=await r.jQ.list(e.value,15);(0,d.q6)(t).success((({data:{list:t,total:e}})=>{a.value=t,u.value=e}))};(0,n.bv)((()=>{s()}));const l=t=>{e.value=t,s()},c=async()=>{const e=await r.jQ.add(t.value);(0,d.q6)(e).success((()=>{s(),m.Z.success(`成功添加${t.value}条邀请码`)}))},o=async({_id:t})=>{const e=await r.jQ.remove(t);(0,d.q6)(e).success((({msg:t})=>{m.Z.success(t),s()}))};return{count:t,list:a,curPage:e,total:u,columns:p,setChange:l,add:c,remove:o}}}),g=a(89);const _=(0,g.Z)(v,[["render",o]]);var f=_}}]);
//# sourceMappingURL=InviteCode.a087bacf.js.map