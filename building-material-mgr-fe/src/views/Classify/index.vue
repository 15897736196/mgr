<template>
    
    <div>
        
        <a-card title="书籍分类管理">

            <div>
                <a-input 
                placeholder ="输入书籍分类" 
                style="width:200px; margin-right:24px;"
                v-model:value="title"></a-input>
                
                <a-button @click="add" type="primary">添加</a-button>
            </div>

        <a-divider></a-divider>

        <div>
            <a-table bordered
            :data-source="list"
            :columns="columns"
            :pagination="false"
            >
            
            <template #actions="{record}">
                <a-button size="small" type="danger"
                @click="remove(record)">删除</a-button>
                &nbsp;
                <a-button size="small" type="primary"
                @click="updateTitle(record)">修改</a-button>
            </template>
            
            </a-table>
        </div>
        </a-card>

    </div>
</template>

<script src= "./index.jsx"></script>