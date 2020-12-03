<template>
  <div>
    <header class="navbar">
      <div class="sidebar-button">
        <i class="el-icon-s-fold"></i>
      </div>
      <n-link to="/" class="home-link">
        <span class="site-name">罗小淳的个人网站</span>
      </n-link>
      <div class="links">
        <div class="nav-links can-hide">
          <div class="nav-item" v-for="(item, index) in navList" :key="index">
            <n-link
              v-if="item.type == 'router'"
              :to="item.path"
              class="home-link"
              >{{ item.name }}</n-link
            >
            <a :href="item.path" target="_blank" v-else class="home-link">{{
              item.name
            }}</a>
          </div>
        </div>
      </div>
    </header>
    <section class="content">
      <Nuxt />
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["navList"])
  },
  created() {}
};
</script>

<style lang="less">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover,
a:visited,
a:link,
a:active {
  color: #333;
  // 设置使所有a标签的四种状态都和本身颜色保持一致，样式代码自己写
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  right: 0;
  height: @heightHeader;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  padding: 0 1.5rem;
  line-height: @heightHeader;
  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    position: relative;
  }
  > .sidebar-button {
    display: none;
    cursor: pointer;
    @media (max-width: 719px) {
      display: inline-block;
    }
  }
}
.links {
  font-size: 0.9rem;
  position: absolute;
  right: 1.5rem;
  top: 0;
  > .nav-links {
    display: inline-block;
    @media (max-width: 719px) {
      display: none;
    }
    > .nav-item {
      position: relative;
      cursor: pointer;
      margin-left: 1.5rem;
      display: inline-block;
      a {
        &::after {
          content: "";
          .center-row();
          bottom: 0;
          height: 2px;
          width: 0;
          border-radius: 2px;
          background-image: linear-gradient(90deg, #2db7f5, #6bc30d);
          transition: all 0.3s ease;
          background: #2db7f5;
        }
        &.nuxt-link-active,
        &:hover {
          color: #6bc30d;
          font-weight: 600;
          background: linear-gradient(90deg, #2db7f5, #6bc30d);
          -webkit-background-clip: text;
          color: transparent;
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}
.content {
  padding-top: 4rem;
}
</style>
