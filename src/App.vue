<template>
  <div id="app">
      <router-view></router-view>
      <TabBar />
  </div>
</template>

<script>
import TabBar from "@common/components/tabBar"
export default {
  name: 'app',
  components: {
    TabBar,
  }
}
</script>

<style lang="scss">

</style>
