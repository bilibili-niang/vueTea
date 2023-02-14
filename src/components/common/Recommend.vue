<template>
  <div class="recommend">
    <Card>
      <span>爆款推荐</span>
    </Card>
    <ul>
      <li v-for="(item,index) in recommendList" :key="index">
        <h2>
          <img :src="item.imgUrl" alt="">
        </h2>
        <div class="name">
          <div>
            <h3>
              {{ item.name }}
            </h3>
            <p>
              {{ item.content }}
            </p>
          </div>
          <div class="price">
            <span>$</span>
            <b>{{ item.price }}</b>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/home/Card.vue";

export default {
  name: "Recommend",
  data() {
    return {}
  },
  props: {
    recommendList: Array
  },
  components: {
    Card

  }
}
</script>

<style scoped lang="less">
.recommend {
  ul {
    li {
      position: relative;
      padding: 0.2rem;
      font-size: 16px;
      display: flex;

      img {
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
      }

      div.name {
        position: absolute;
        right: 0;
        top: 0;
        padding-right: 0.5rem;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-around;

        .price {
          color: #b0352f;;
        }
      }
    }
  }
}
</style>