import store from "@/store";

export const getClassifyTitleById = (id) => {
  const one = store.state.classify.find((item) => item._id === id);
  return one ? one.title : "未知书籍";
};
