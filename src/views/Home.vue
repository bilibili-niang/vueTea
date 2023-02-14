<template>
  <div class="home">
    <div class="headers">
      <div class="headers-main">
        <Header></Header>
        <ly-tab
            v-model="selectedId"
            :items="items"
            @change="changeTab"
            :options="options">
        </ly-tab>
      </div>
    </div>
    <section ref='wrapper'>
      <div>
        <div
            v-for='(item,index) in newData'
            :key='index'
        >
          <Swiper
              v-if='item.type=="swiperList"'
              :swiperList='item.data'
          ></Swiper>

          <Icons
              v-if='item.type=="iconList"'
              :iconsList='item.data'
          ></Icons>


          <Recommend
              v-if='item.type=="recommendList"'
              :recommendList='item.data'
          ></Recommend>

          <Ad
              v-if='item.type=="adList"'
              :adList='item.data'
          ></Ad>

          <Like
              v-if='item.type=="likeList"'
              :likeList='item.data'
          ></Like>

        </div>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import Tabbar from '@/components/common/Tabbar.vue'
import Swiper from "@/components/home/Swiper.vue";
import Icons from "@/components/home/Icons.vue";
import Recommend from "@/components/common/Recommend.vue";
import BetterScroll from 'better-scroll'
import Like from "@/components/home/Like.vue";
import Ad from "@/components/home/Ad.vue";
import http from '../common/api/request'

export default {
  name: "Home",
  data() {
    return {
      selectedId: 0,
      items: [],
      options: {
        activeColor: '#b0352f'
      },
      newData: [],
      oBetterScroll: '',
      aBetterScroll: '',
    }
  },
  components: {
    Tabbar,
    Header,
    Swiper,
    Icons,
    Recommend,
    Like,
    Ad
  },
  created() {
    this.getData();
  },
  mounted() {
    //这里的dom并没有有更新完,所以加载会出错
    /* new BetterScroll(this.$refs.wrapper, {
       movable: true,
       zoom: true
     })*/
  },
  methods: {
    async getData() {
      let res = await http.$axios({
        url: '/api/index_list/0/data/1'
      })
      this.items = Object.freeze(res.topBar);
      this.newData = res.data;

      // 当dom都加载完毕了再去执行里面的函数
      this.$nextTick(() =>
          this.aBetterScroll = new BetterScroll(this.$refs.wrapper, {
            movable: true,
            zoom: true,
            click: true
          })
      )
    },
    async addData(item, index) {
      let res = await http.$axios({
        url: `/api/index_list/` + index + `/data/1`
      });
      if (res.constructor != Array) {
        this.newData = res.data;
      } else {
        this.newData = res;
      }
      console.log("res请求路径:")
      console.log(`/api/index_list/` + index + `/data/1`)
      // 当dom都加载完毕了再去执行里面的函数
      this.$nextTick(()=>{
        this.BetterScroll = new BetterScroll(this.$refs.wrapper, {
          movable: true,
          zoom: true,
          click:true
        })
      })
    },
    changeTab(item, index) {
      this.addData(item, index)
    },
  }

};
</script>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 50px;
}

.headers {
  width: 100%;
  height: 2.88rem;

  .headers-main {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
}

section {
  flex: 1;
  overflow: hidden;
}

.ly-tab {
  top: 1.6rem;
}

::v-deep .ly-tabbar {
  box-shadow: none;
  border-bottom: none;
}
</style>