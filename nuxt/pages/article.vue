<template>
  <div>
    <sideBar :sideBar="listData" />
    <div class="article-content">
      <div class="content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "@c/sideBar";
export default {
  components: {
    sideBar
  },
  async asyncData(ctx) {
    const { error, $api } = ctx;
    try {
      const { data } = await $api.getAllArticle();
      return { listData: data };
    } catch (err) {
      error({ statusCode: 400, message: "数据查询失败" });
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
.article-content {
  padding-left: 20rem;
  padding-bottom: 2rem;
  > .content {
    max-width: 740px;
    margin: 0 30px;
    padding: 2rem 2.5rem;
  }
}
</style>
