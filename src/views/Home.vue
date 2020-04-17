<template>
  <div class="home-container">
    <Header />
    <Menu class="nav-menu" />
    <div class="container">
      <Breadcrumb class="nav" />
      <div class="content">
        <router-view></router-view>
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
.home-container {
  padding-top: 60px;

  .nav-menu {
    width: 200px;
    height: 100vh;
    position: fixed;
    left: 0;
    border: none;
  }

  .container {
    margin-left: 200px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 60px);
    background-color: #f8f9fe;

    .nav {
      padding: 10px 20px;
      background-color: #fdfdfe;
      position: fixed;
      width: calc(100vw - 200px);
      z-index: 2;
    }

    .content {
      background-color: #f8f9fe;
      padding: 55px 20px 20px;
      // flex: 1;
    }
  }
}
</style>
