<template>
  <div class="search">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Search",
  components: {},
  created() {
  },
  methods: {}
}
</script>

<style scoped lang="less">
.search {
  display: flex;
  width: 100vw;
  flex-direction: column;
  position: relative;
}


</style>