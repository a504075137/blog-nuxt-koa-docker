<template>
  <div class="game">
    <Billboard poster-blue="0" :poster="banneImg" height="450px" is-home-page>
      <h1 class="title">
        一些好玩的项目，敬请期待
      </h1>
    </Billboard>
  </div>
</template>

<script>
import Billboard from "@c/ui/Billboard/Billboard";
const banneImg = require("@imgs/banner5.jpg");
export default {
  components: {
    Billboard
  },
  data() {
    return {
      banneImg
    };
  }
};
</script>

<style lang="less" scoped></style>
