<template>
  <div class="ad">
    <Card>
      <span>广告</span>
    </Card>
    <div class="" v-for="(item,index) in adList" :key="index">
      <img :src="item.imgUrl" alt="">
    </div>
  </div>
</template>

<script>
import Card from "@/components/home/Card.vue";

export default {
  name: "Ad",
  components: {Card},
  props: {
    adList: Array
  }
}
</script>

<style scoped lang="less">
.ad {
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
}

</style>