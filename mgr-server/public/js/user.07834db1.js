"use strict";(self["webpackChunkbuilding_material_mgr_fe"]=self["webpackChunkbuilding_material_mgr_fe"]||[]).push([[378],{7098:function(a,e,t){t.r(e),t.d(e,{default:function(){return S}});var c=t(3396),r=t(7139);const o=a=>((0,c.dD)("data-v-3111022f"),a=a(),(0,c.Cn)(),a),s=o((()=>(0,c._)("h2",null,"用户管理",-1))),l={class:"search"},n=(0,c.Uk)("添加用户"),d=(0,c.Uk)("   "),u=(0,c.Uk)("上传EXCEL添加"),i=["onClick"],p=["onClick"],h=(0,c.Uk)("    "),m=["onClick"],w=(0,c.Uk)(" t ");function v(a,e,t,o,v,f){const _=(0,c.up)("a-divider"),k=(0,c.up)("a-input-search"),g=(0,c.up)("a-button"),C=(0,c.up)("a-upload"),y=(0,c.up)("space-between"),b=(0,c.up)("EditOutlined"),U=(0,c.up)("a-table"),W=(0,c.up)("a-pagination"),E=(0,c.up)("flex-end"),A=(0,c.up)("a-card"),Z=(0,c.up)("add-one"),I=(0,c.up)("a-select-option"),j=(0,c.up)("a-select"),q=(0,c.up)("a-modal"),F=(0,c.Q2)("only-admin");return(0,c.wy)(((0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(A,null,{default:(0,c.w5)((()=>[s,(0,c.Wm)(_),(0,c.Wm)(y,null,{default:(0,c.w5)((()=>[(0,c._)("div",l,[(0,c.Wm)(k,{value:a.keyword,"onUpdate:value":e[0]||(e[0]=e=>a.keyword=e),onSearch:a.onSearch,placeholder:"根据用户名搜索","enter-button":""},null,8,["value","onSearch"]),a.isSearch?((0,c.wg)(),(0,c.iD)("a",{key:0,href:"javascript:;",onClick:e[1]||(e[1]=(...e)=>a.searchBack&&a.searchBack(...e))},"返回")):(0,c.kq)("",!0)]),(0,c._)("div",null,[(0,c.Wm)(g,{onClick:e[2]||(e[2]=e=>a.showAddModal=!0)},{default:(0,c.w5)((()=>[n])),_:1}),d,(0,c.Wm)(C,{action:"http://localhost:3000/upload/file",onChange:a.onUploadChange,headers:a.headers},{default:(0,c.w5)((()=>[(0,c.Wm)(g,{type:"primary"},{default:(0,c.w5)((()=>[u])),_:1})])),_:1},8,["onChange","headers"])])])),_:1}),(0,c.Wm)(_),(0,c._)("div",null,[(0,c.Wm)(U,{pagination:!1,columns:a.columns,"data-source":a.list,bordered:""},{createAt:(0,c.w5)((({record:e})=>[(0,c.Uk)((0,r.zw)(a.formatTimeStamp(e.meta.createAt)),1)])),character:(0,c.w5)((({record:e})=>[(0,c._)("a",{href:"javascript:;",onClick:t=>a.onEdit(e)},[(0,c.Wm)(b)],8,i),(0,c.Uk)(" "+(0,r.zw)(a.getCharacterInfoById(e.character).title),1)])),actions:(0,c.w5)((({record:e})=>[(0,c._)("a",{href:"javascript:;",onClick:t=>a.resetPassword(e)},"重置密码",8,p),h,(0,c._)("a",{href:"javascript:;",style:{color:"red"},onClick:t=>a.remove(e)},"删除该用户",8,m)])),default:(0,c.w5)((()=>[w])),_:1},8,["columns","data-source"])]),a.isSearch?(0,c.kq)("",!0):((0,c.wg)(),(0,c.j4)(E,{key:0,style:{"margin-top":"24px"}},{default:(0,c.w5)((()=>[(0,c.Wm)(W,{current:a.curPage,"onUpdate:current":e[3]||(e[3]=e=>a.curPage=e),onChange:a.setPage,total:a.total,"page-size":10},null,8,["current","onChange","total"])])),_:1}))])),_:1}),(0,c.Wm)(Z,{show:a.showAddModal,"onUpdate:show":e[4]||(e[4]=e=>a.showAddModal=e),onGetList:a.getUser},null,8,["show","onGetList"]),(0,c.Wm)(q,{visible:a.showEditCharacterModal,"onUpdate:visible":e[6]||(e[6]=e=>a.showEditCharacterModal=e),title:"修改角色",onOk:a.updateCharacter},{default:(0,c.w5)((()=>[(0,c.Wm)(j,{value:a.editForm.character,"onUpdate:value":e[5]||(e[5]=e=>a.editForm.character=e),style:{width:"200px"}},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(a.characterInfo,(a=>((0,c.wg)(),(0,c.j4)(I,{key:a._id,value:a._id},{default:(0,c.w5)((()=>[(0,c.Uk)((0,r.zw)(a.title),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1},8,["visible","onOk"])])),[[F]])}var f=t(4870),_=t(3926),k=t(1731),g=t(252);function C(a,e,t,o,s,l){const n=(0,c.up)("a-input"),d=(0,c.up)("a-form-item"),u=(0,c.up)("a-select-option"),i=(0,c.up)("a-select"),p=(0,c.up)("a-form"),h=(0,c.up)("a-modal");return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(h,{title:"添加一个用户","ok-text":"确认","cancel-text":"取消",visible:a.props.show,onOk:a.submit,onCancel:a.close},{default:(0,c.w5)((()=>[(0,c.Wm)(p,{"label-col":{span:6},"wrapper-col":{span:16}},{default:(0,c.w5)((()=>[(0,c.Wm)(d,{label:"账号"},{default:(0,c.w5)((()=>[(0,c.Wm)(n,{value:a.addForm.account,"onUpdate:value":e[0]||(e[0]=e=>a.addForm.account=e)},null,8,["value"])])),_:1}),(0,c.Wm)(d,{label:"密码"},{default:(0,c.w5)((()=>[(0,c.Wm)(n,{value:a.addForm.password,"onUpdate:value":e[1]||(e[1]=e=>a.addForm.password=e)},null,8,["value"])])),_:1}),(0,c.Wm)(d,{label:"角色"},{default:(0,c.w5)((()=>[(0,c.Wm)(i,{value:a.addForm.character,"onUpdate:value":e[2]||(e[2]=e=>a.addForm.character=e),style:{width:"120px"}},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(a.characterInfo,(a=>((0,c.wg)(),(0,c.j4)(u,{key:a._id,value:a._id},{default:(0,c.w5)((()=>[(0,c.Uk)((0,r.zw)(a.title),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1})])),_:1})])),_:1},8,["visible","onOk","onCancel"])])}var y=t(4239);const b={account:"",password:"",character:""};var U=(0,c.aZ)({props:{show:Boolean},setup(a,e){const{characterInfo:t}=y.Z.state,c=(0,f.qj)((0,k.d9)(b));c.character=t[1]._id;const r=()=>{e.emit("update:show",!1)},o=async()=>{const a=(0,k.d9)(c),t=await _.EA.add(a.account,a.password,a.character);(0,k.q6)(t).success(((a,{data:t})=>{Object.assign(c,b),g.Z.success(t.msg),e.emit("getList"),r()}))};return{addForm:c,submit:o,props:a,close:r,store:y.Z,characterInfo:t}}}),W=t(89);const E=(0,W.Z)(U,[["render",C]]);var A=E,Z=t(425),I=t(3318),j=t(2874);const q=[{title:"账户",dataIndex:"account"},{title:"创建日期",slots:{customRender:"createAt"}},{title:"角色",slots:{customRender:"character"}},{title:"操作",slots:{customRender:"actions"}}];var F=(0,c.aZ)({components:{AddOne:A,EditOutlined:I.Z},setup(){const a=(0,f.iH)([]),e=(0,f.iH)(1),t=(0,f.iH)(0),r=(0,f.iH)(!1),o=(0,f.iH)(""),s=(0,f.iH)(!1),l=(0,f.iH)(!1),n=(0,f.qj)({character:"",current:{}}),d=async()=>{const c=await _.EA.list(e.value,10,o.value);(0,k.q6)(c).success((({data:{list:e,total:c}})=>{a.value=e,t.value=c}))};(0,c.bv)((()=>{d()}));const u=async({_id:a})=>{const e=await _.EA.remove(a);(0,k.q6)(e).success((({msg:a})=>{d(),g.Z.success(a)}))},i=a=>{e.value=a,d()},p=async({_id:a})=>{const e=await _.EA.resetPassword(a);(0,k.q6)(e).success((({msg:a})=>{g.Z.success(a)}))},h=()=>{d(),s.value=!!o.value},m=()=>{o.value="",s.value=!1,d()},w=a=>{n.current=a,n.character=a.character,l.value=!0},v=async()=>{const a=await _.EA.editCharacter(n.character,n.current._id);(0,k.q6)(a).success((({msg:a})=>{g.Z.success(a),l.value=!1,n.current.character=n.character}))},C=({file:a})=>{a.response&&(0,k.q6)(a.response).success((async a=>{const e=await _.EA.addMany(a);(0,k.q6)(e).success((({data:{account:a}})=>{g.Z.success(`成功添加 ${a}名用户`),d()}))}))};return{list:a,curPage:e,total:t,columns:q,formatTimeStamp:k.jH,remove:u,showAddModal:r,getUser:d,setPage:i,resetPassword:p,onSearch:h,searchBack:m,onEdit:w,keyword:o,isSearch:s,getCharacterInfoById:Z.G,showEditCharacterModal:l,editForm:n,characterInfo:y.Z.state.characterInfo,updateCharacter:v,onUploadChange:C,headers:(0,j.wU)()}}});const H=(0,W.Z)(F,[["render",v],["__scopeId","data-v-3111022f"]]);var S=H}}]);
//# sourceMappingURL=user.07834db1.js.map