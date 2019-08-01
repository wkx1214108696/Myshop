<template>
  <div id="app">
    <mt-header title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="./assets/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Order">
        <img slot="icon" src="./assets/vip.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="Shopcart">
        <img slot="icon" src="./assets/Shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Mine">
        <img slot="icon" src="./assets/find.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: ""
    };
  },
  watch: {
    selected: function(newCompent, oldComment) {
      // newCompent:存储的是当前单击的菜单项
      // oldComment:存储的是前面所单击的菜单项。
      // this.selected返回的是mt-tab-item中的id属性的值。
      // 去执行对应的路由，找到对应的页面并且进行展示。
      this.$router.push({ name: this.selected });
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}
.mint-tabbar{
  position:fixed
}
</style>
