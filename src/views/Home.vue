<template>
  <div>
    <Header />
    <div class="content">
      <Menu class="nav-menu" />
      <div>
        <Breadcrumb />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  components: {
    Menu,
    Header,
    Breadcrumb
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 60px;
  margin-left: 200px;
  display: flex;
  .nav-menu {
    width: 200px;
    height: 100vh;
    box-shadow: 2px 0px 5px 0px #e4e4e4;
    position: fixed;
    left: 0;
  }
}
</style>
