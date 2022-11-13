import { defineComponent, ref, onMounted } from "vue";
import AddOne from "./AddOne/index.vue";
import { book, classify } from "@/service";
import { getClassifyTitleById } from "@/helpers/book-classify";
//useRoute提供当前页面与路由的信息prams等  useRouter提供操作路由的方法 如前进一页 后退一页
import { useRouter } from "vue-router";
import { result, formatTimeStamp } from "@/helpers/utils";
// import { BookFilled } from '@ant-design/icons-vue'
import { message, Modal, Input } from "ant-design-vue";
import Update from "./Update/index.vue";
import { getHeaders } from "@/helpers/request";

export default defineComponent({
  components: { AddOne, Update },
  props: {
    simple: Boolean,
  },
  setup(props) {
    const router = useRouter();
    const columns = [
      {
        title: "书籍名",
        dataIndex: "name",
      },
      {
        title: "价格",
        dataIndex: "price",
      },
      {
        title: "库存 /件",
        dataIndex: "",
        slots: {
          customRender: "count",
        },
      },

      {
        title: "操作者",
        dataIndex: "author",
      },
      {
        title: "分类",
        slots: {
          customRender: "classify",
        },
      },
      {
        title: "生产日期",
        dataIndex: "publishDate",
        slots: {
          customRender: "publishDate",
        },
      },
    ];
    if (!props.simple) {
      columns.push({
        title: "操作",
        slots: {
          customRender: "actions",
        },
      });
    }

    const show = ref(false);
    const showUpdateModal = ref(false);
    const total = ref(0);
    const curPage = ref(1);
    const keyword = ref("");
    const list = ref([]);
    const isSearch = ref(false);
    const curEditBook = ref({});
    // const classifyList = ref([]);

    //拿到自定义的分类列表

    //获取书籍列表
    const getList = async () => {
      const res = await book.list({
        page: curPage.value,
        size: 10,
        keyword: keyword.value,
      });
      result(res).success(({ data }) => {
        const { list: l, total: t } = data;
        (total.value = t), (list.value = l);
      });
    };

    onMounted(async () => {
      // await getClassify();
      getList();
    });

    //当页码发生变化时做什么 拿到的参数是当前页码
    const setPage = (page) => {
      //curPage更改时 会使得双向绑定的模板也发生变化
      curPage.value = page;
      getList();
    };
    //触发搜索
    const onSearch = () => {
      getList();
      isSearch.value = keyword.value;
    };
    //回到初始列表
    const searchBack = () => {
      keyword.value = "";
      isSearch.value = false;
      getList();
    };

    //删除一条列表信息
    const remove = async ({ text: record }) => {
      // console.log(record)
      const { _id } = record;
      const res = await book.remove(_id);

      result(res).success(({ msg }) => {
        message.success(msg);
        getList();
      });
    };

    const updateCount = (type, record) => {
      let word = "增加";
      if (type === "OUT_COUNT") {
        word = "减少";
      }
      Modal.confirm({
        title: `要${word}多少件库存`,
        content: (
          <div>
            <Input class="__book_input_count" />
          </div>
        ),

        onOk: async () => {
          const el = document.querySelector(".__book_input_count");
          let num = el.value;
          // console.log(record)
          // const { id } = record;
          const res = await book.updateCount({
            id: record._id,
            num,
            type,
          });
          result(res).success((data) => {
            if (type === "IN_COUNT") {
              num = Math.abs(num);
            } else {
              //出库
              num = -Math.abs(num);
            }

            const one = list.value.find((item) => {
              return item._id === record._id;
            });
            if (one) {
              one.count += num;
              message.success(`成功${word}  ${Math.abs(num)}件`);
            }
          });
        },
      });
    };

    //点击编辑时触发的方法
    const update = ({ record }) => {
      showUpdateModal.value = true;
      curEditBook.value = record;
    };
    //更新数据
    const updateCurBook = (newData) => {
      Object.assign(curEditBook.value, newData);
    };

    //进入详情页面
    const toDetail = ({ record }) => {
      //去下一页
      router.push(`/main/${record._id}`);
    };

    const onUploadChange = ({ file }) => {
      if (file.response) {
        result(file.response).success(async (key) => {
          const res = await book.addMany(key);
          result(res).success(({ data: { addCount } }) => {
            message.success(`成功添加 ${addCount}项书籍`);
            getList();
          });
        });
      }
    };

    return {
      columns,
      show,
      list,
      formatTimeStamp,
      curPage,
      total,
      setPage,
      keyword,
      onSearch,
      searchBack,
      isSearch,
      remove,
      updateCount,
      showUpdateModal,
      update,
      curEditBook,
      updateCurBook,
      toDetail,
      getList,
      getClassifyTitleById,
      simple: props.simple,
      onUploadChange,
      headers: getHeaders(),
    };
  },
});
