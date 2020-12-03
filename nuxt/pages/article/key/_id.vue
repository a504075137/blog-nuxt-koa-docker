<template>
  <div>
    <a class="article-link" :href="article.content" target="_blank"
      >{{ article.name }}文章链接</a
    >
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error, $api, params }) {
    try {
      const { data } = await $api.searchOneContent({
        key: params.key,
        id: params.id
      });
      return { article: data };
    } catch (error) {
      console.log(error);
      return {
        article: {}
      };
    }
  }
};
</script>

<style></style>
