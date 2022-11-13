<template>
  <div>
    <a-spin :spinning="loading">
        <a-card>
      <div class="list">
        <div class="item">
          <div class="title">书籍</div>
          <div class="count">共{{ baseInfo.book }}项</div>
        </div>
        <div class="item">
          <div class="title">用户</div>
          <div class="count">共{{ baseInfo.user }}位</div>
        </div>
        <div class="item">
          <div class="title">日志</div>
          <div class="count">共{{ baseInfo.log }}条</div>
        </div>
      </div>
    </a-card>
    </a-spin>

    <div class="table-list">
        <div class="left">
            <book simple/>

        </div>
        <div class="right">
            <log simple/>
        </div>
    </div>
  </div>
</template>

<script src="./index.js">
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
