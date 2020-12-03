<template>
  <div class="container">
    <Billboard poster-blue="0" height="640px" is-home-page>
      <img class="my-avatar" src="@imgs/ltc.jpg" alt="" />
      <h1 class="title">
        <rotating-text :words="words" width="3em" />的个人博客网站
      </h1>
      <p class="direction">菜鸟前端，擅长javascript，欢迎来到我的网站。</p>
      <div class="bike"></div>
    </Billboard>
  </div>
</template>

<script>
import RotatingText from "@c/ui/RotatingText/RotatingText";
import Billboard from "@c/ui/Billboard/Billboard";
export default {
  components: {
    RotatingText,
    Billboard
  },
  data() {
    return {
      words: [
        {
          label: "罗小淳",
          color: "#2db7f5"
        },
        {
          label: "罗小淳",
          color: "#38B9CC"
        },
        {
          label: "罗小淳",
          color: "#49BC8D"
        },
        {
          label: "罗小淳",
          color: "#6bc30d"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.container {
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .my-avatar {
    width: 10rem;
    display: block;
  }
  .direction {
    max-width: 35rem;
    font-size: 1.6rem;
    line-height: 1.3;
    color: #6a8bad;
  }
  .bike {
    margin: 50px auto;
    width: 190px;
    height: 100px;
    background: url(~@imgs/sprite/bike.png);
    animation: changes 0.5s steps(1, start) infinite;
  }
  @keyframes changes {
    0% {
      background-position: 0 0;
    }
    20% {
      background-position: -190px 0;
    }
    40% {
      background-position: -380px 0;
    }
    60% {
      background-position: 0 -100px;
    }
    80% {
      background-position: -190px -100px;
    }
    100% {
      background-position: -380px -100px;
    }
  }
}

.title {
  margin: 1.8rem auto;
  text-align: center;
  color: #ffffff;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
