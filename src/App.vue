<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
      
      <!-- 判断底部 是否需要 -->
      <TabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from "@common/components/tabBar"

export default {
  name: 'app',
  components: {
    TabBar,
  },
  
}
</script>

<style lang="scss">
  .page{
    height:100%;
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    padding-bottom:0.44rem;
  }
</style>
