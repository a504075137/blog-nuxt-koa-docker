<template>
  <div>
    <nuxt-child v-if="$route.params.id"></nuxt-child>
    <div v-else>
      一些技术分享
    </div>
  </div>
</template>

<script>
export default {
  created() {}
};
</script>

<style></style>
