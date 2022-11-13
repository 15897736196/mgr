<template>
  <div>
    <a-card :title="simple ? '最近添加的书籍' : ''">
      <div v-if="!simple">
        <h2>书籍列表</h2>
        <a-divider />

        <space-between>
          <div class="search">
            <a-input-search v-model:value="keyword" @search="onSearch" placeholder="根据书籍名搜索" enter-button />
            <a href="javascript:;" @click="searchBack" v-if="isSearch">返回</a>
          </div>

          <div>
            <a-button @click="show = true" v-only-admin>添加一条</a-button>
            &nbsp;
            <a-upload action="/upload/file" @change="onUploadChange" :headers="headers">
              <a-button type="primary">上传EXCEL添加</a-button>
            </a-upload>
          </div>
        </space-between>

        <a-divider />
      </div>

      <a-table :columns="columns" :data-source="list" :pagination="false" bordered :scroll="{ x: 'max-content' }">
        <template #publishDate="data">
          {{ formatTimeStamp(data.record.publishDate) }}
        </template>

        <template #classify="{ record }">
          {{ getClassifyTitleById(record.classify) }}
        </template>

        <template #actions="record" v-if="!simple">
          <a href="javascript:;" @click="toDetail(record)">详情</a>
          &nbsp;
          <a href="javascript:;" @click="update(record)" v-only-admin>编辑</a>
          &nbsp;
          <a href="javascript:;" @click="remove(record)" v-only-admin>删除</a>
        </template>

        <template #count="data">
          <a href="javascript:;" @click="updateCount('IN_COUNT', data.record)">入库</a>
          {{ data.record.count }}
          <a href="javascript:;" @click="updateCount('OUT_COUNT', data.record)">出库</a>
        </template>
      </a-table>

      <space-between style="margin-top: 24px" v-if="!simple">
        <div></div>
        <a-pagination v-model:current="curPage" @change="setPage" :total="total" :page-size="10" />
      </space-between>
    </a-card>

    <add-one v-model:show="show" :classifyList="classifyList" @getList="getList" />

    <update v-model:show="showUpdateModal" :book="curEditBook" @update="updateCurBook" />
  </div>
</template>

<script src='./index.jsx'></script>

<style scoped lang='scss'>
@import "./index.scss";
</style>