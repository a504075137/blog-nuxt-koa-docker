<template>
  <div class="sideBar">
    <ul class="sidebar-links">
      <li>
        <div
          class="sidebar-group"
          v-for="(item, index) in sideBar"
          :key="index"
        >
          <p class="sidebar-heading">
            <span>{{ item.title }}</span>
          </p>
          <ul
            class="sidebar-group-items"
            v-if="item.children && item.children.length > 0"
          >
            <li v-for="(oitem, oindex) in item.children" :key="oindex">
              <n-link
                :to="`/article/${item.key}/${oitem.id}`"
                class="sidebar-link"
                >{{ oitem.name }}</n-link
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sideBar: {
      default: () => ({})
    }
  }
};
</script>

<style lang="less" scoped>
.sideBar {
  font-size: 15px;
  background-color: #fff;
  width: 20rem;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid #eaecef;
  overflow-y: auto;
  > .sidebar-links {
    height: 2rem;
    line-height: 2rem;
    padding: 1.5rem 0;
    margin: 0;
    list-style-type: none;
    .sidebar-heading {
      transition: color 0.15s ease;
      cursor: pointer;
      font-size: 1.1em;
      font-weight: 700;
      padding: 0 1.5rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
    .sidebar-group-items {
      transition: height 0.1s ease-out;
      overflow: hidden;
    }
    .sidebar-link {
      padding-left: 3rem;
    }
    .nuxt-link-active {
      font-weight: 600;
      color: #3eaf7c;
      border-left-color: #3eaf7c;
    }
  }
}
</style>
