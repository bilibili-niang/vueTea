<template>
  <!--商品详情页-->
  <div class="detail">
    <header>
      <div class="header-returns" v-show="!isShow">
        <i class="el-icon-back"></i>
        <i class="el-icon-time"></i>
      </div>
      <div class="header-bar" v-show="isShow">
        <i class="el-icon-back"></i>
        <div class="selections">
          <ul>
            <li><p>商品详情</p></li>
            <li><p>商品评价</p></li>
          </ul>
        </div>
        <i class="el-icon-time"></i>
      </div>
    </header>
    <section ref="wrapper">
      <div>
        <div class="swiperCon">
          <div class='swiper-main'>
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in swiperList" :key="index">
                <img :src="item.imgUrl">
              </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="goodsDetail">
          <div class='goods-name'>
            <h1>{{ goods.name }}</h1>
            <div>性价首选，茶感十足、鲜醇耐泡的大众口粮茶</div>
          </div>
          <div class='goods-price'>
            <div class='oprice'>
              <span>¥</span>
              <b>{{ goods.price }}</b>
            </div>
            <div class='pprice'>
              <span>价格:</span>
              <del>¥{{ goods.price }}</del>
            </div>
          </div>
          <div>
            <img style='width:100%;height: 500px;' :src="goods.imgUrl" alt="">
            <img style='width:100%;height: 500px;' :src="goods.imgUrl" alt="">
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="left">
        <span>
        <van-icon name="friends-o"/>
          客服
        </span>
        <p></p>
        <span>
        <van-icon name="cart-o"/>
          购物车
        </span>
        <p></p>
        <span>
        <van-icon name="star-o"/>
          收藏
        </span>
      </div>
      <div class="right">
        <button class="cart">加入购物车</button>
        <button class="buy">立即购买</button>
      </div>
    </footer>
  </div>
</template>

<script>
import '.store/swiper@9.0.3/node_modules/swiper/swiper.css';
import {swiper, swiperSlide} from "vue-awesome-swiper";
import BetterScroll from 'better-scroll'
import Search from "@/views/Search.vue";

export default {
  name: "Detail",
  components: {
    Search,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: 300,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction'
        }
      },
      swiperList: [
        {imgUrl: './images/goods1.png'},
        {imgUrl: './images/goods2.png'},
        {imgUrl: './images/goods3.png'},
      ],
      goods: {
        name: '东湖的水',
        price: 999,
        imgUrl: './images/like/img.png'
      },
      isShow: false,
      BetterScroll: '',
    }
  },
  mounted() {
    this.BetterScroll = new BetterScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true,
      click: true
    })
  }
}
</script>

<style scoped lang="less">
.detail {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

section {
  flex: 1;
}

header {
  height: 1.17rem;

  .header-returns {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 15px;
    box-sizing: border-box;

    i {
      display: flex;
      width: 0.9rem;
      height: 0.9rem;
      background: rgba(72, 61, 61, 0.4);
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;
      font-size: 0.5rem;
    }
  }

  .header-bar {
    height: 1.17rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 15px;
    box-sizing: border-box;

    i {
      display: flex;
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      color: rgb(34, 34, 34);
      font-size: 0.5rem;
    }

    .selections {
      width: 50%;
      display: flex;
      align-items: center;

      ul {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;

        li {
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
}

.swiperCon {
  overflow: hidden;
  width: 100%;
  height: 10rem;
  position: relative;

  .swiper-slide {
    display: flex;
    justify-content: center;

    img {
      display: flex;
      width: auto;
      height: 100%;
    }
  }

  .swiper-main {
    .swiper-pagination {
      position: absolute;
      bottom: 0;
      right: 10px;
      color: #ffffff;
      font-size: 12px;
      display: flex;
      width: auto;
      padding: 2px 5px;
      border-radius: 5px;
      background: rgba(51, 51, 51, 0.4);
      justify-content: flex-end;
    }
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    width: 100%;
    bottom: 0;
  }

  ::v-deep .swiper-pagination-bullet-active {
    background: #b0352f;
  }

  ::v-deep .swiper-pagination-bullet {
    margin: 0 0.1rem 0;
  }
}

.goodsDetail {
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  font-size: 0.45rem;

  .goods-name {
    border-bottom: 1px rgba(153, 153, 153, 0.8) solid;
    padding-bottom: 0.3rem;

    h1 {
      font-size: 18px;
      line-height: 1.4;
      font-weight: 400;
    }

    div {
      color: #999999;
      font-size: 14px;
    }
  }

  .goods-price {
    padding-top: 0.3rem;

    .oprice {
      color: #b0352f;
    }

    .pprice {
      color: #999;
      font-size: 14px;
    }
  }
}


footer {
  background: #FFFFFF;
  height: 1.3rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;

  div {
    display: flex;
    width: 45%;
    justify-content: space-evenly;
    align-items: center;

    p {
      display: flex;
      width: 1px;
      height: 90%;
      background: rgba(122, 118, 118, 0.2);
    }

    color: #cccccc;

    span {
      display: flex;
      flex-direction: column;
      font-size: 0.4rem;
      color: #cccccc;

      i {
        font-size: 0.7rem;
        justify-content: center;
        display: flex;
      }
    }
  }

  .right {
    width: 55%;

    button {
      font-size: 0.45rem;
      border: none;
      display: flex;
      width: 50%;
      height: 100%;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
    }

    .cart {
      background: #FF9500;
    }

    .buy {
      background: #DD2727;
    }
  }
}

</style>