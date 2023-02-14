<template>
  <header>
    <img src="@/assets/images/logo.png" alt="">
    <div class='search' @click="goSearch()">
      <i class='iconfont icon-fangdajing'></i>
      <span>搜您喜欢的...</span>
    </div>
    <div class='kefu'>
      <i class='iconfont icon-kefu'></i>
    </div>
  </header>
</template>

<style scoped lang="less">
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #b0352f;
  height: 1.6rem;

  img {
    width: 1.6rem;
    display: flex;
    height: auto;
  }

}

.search {
  display: flex;
  align-items: center;
  width: 6.56rem;
  height: 0.8rem;
  background-color: #FFFFFF;
  border-radius: 16px;
}

.search i {
  padding: 0 0.16rem;
  color: #ccc;
}

.search span {
  font-size: 0.373333rem;
  color: #ccc;
}

.kefu i {
  font-size: 0.96rem;
  color: #fff;
}

</style>
<script>
export default ({
  methods: {
    goSearch() {
      this.$router.push("/search");
    }
  }
})

</script>