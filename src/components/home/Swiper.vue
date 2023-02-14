<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.imgUrl">
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import '.store/swiper@9.0.3/node_modules/swiper/swiper.css';
import {swiper, swiperSlide} from "vue-awesome-swiper";

export default {
  name: "Swiper",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: 300,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.swiper {
  width: 100%;
  height: 4.4rem;
  position: relative;


  .swiper-slide {
    display: flex;
    justify-content: center;

    img {
      width: auto;
      height: 100%;
    }
  }

  .swiper-container {
    width: 100%;
    height: 4.4rem;
  }

  .swiper-pagination {
    width: 100%;
    bottom: 0;
  }
}


::v-deep .swiper-pagination-bullet-active {
  background: #b0352f;
}

::v-deep .swiper-pagination-bullet {
  margin: 0 0.1rem 0;
}
</style>