<template>
  <div class="like">
    <Card>
      <span>猜你喜欢</span>
    </Card>
    <div class="cards">
      <div class="card" v-for="(item,index) in likeList"
           :key="index"
           @click="goDetail()"
      >
        <div class="des">
          <img class="image" v-lazy="item.imgUrl">
          <div class="prices">
            <span>{{ item.name }}</span>
            <div class="price">${{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/home/Card.vue";

export default {
  name: "Like",
  components: {
    Card
  },
  props: {
    likeList: Array
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    goDetail() {
      console.log("click")
      this.$router.push('/detail')
    }
  }
}
</script>

<style scoped lang="less">
.cards {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  .card {
    display: flex;
    flex-direction: column;
    width: 50%;
    box-sizing: border-box;
    padding: 10px;

    .des {
      img {
        display: flex;
        width: 100%;
        height: auto;
      }

      .prices {
        font-size: 16px;
      }
    }
  }
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>