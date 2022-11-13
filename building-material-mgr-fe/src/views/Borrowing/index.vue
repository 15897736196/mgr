<template>
  <a-card>
    <h2>借阅管理</h2>
    <a-divider />
    <div class="btn_contain">
      <a-button type="primary">
        <template #icon>
          <SearchOutlined />
        </template>
        查询
      </a-button>
      <a-button> Button</a-button>
      <a-button> Button</a-button>
      <a-button> Button</a-button>
    </div>
    <a-table :columns="columns" :data-source="data" bordered>
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #operation>
        <a>删除</a>
      </template>
      <!-- <template #title>Header</template>
      <template #footer>Footer</template> -->
    </a-table>
  </a-card>
</template>

<script>
import { defineComponent } from 'vue';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    slots: { customRender: 'name' },
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    slots: {
      customRender: 'operation',
    },
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];
export default defineComponent({
  setup() {
    let onDelete = () => {}
    return {
      data,
      columns,
      onDelete,
    }
  }
})
</script>

<style lang="scss" scoped>
.btn_contain {
  margin-bottom: 24px;
  .ant-btn {
    margin-right: 14px;
  }
}
</style>