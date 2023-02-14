<template>
  <div class="list">
    <div class="headers">
      <SearchHeader></SearchHeader>

      <ul>
        <li v-for="(item,index) in searchList.data" :key="index" @click="changeTab(index)">
          <div :class='searchList.currentIndex==index ? "red":""'>{{ item.name }}</div>
          <div v-if='index !=0 '>
            <i class="el-icon-caret-top" :class=' item.status == 1 ? "red" : ""'></i>
            <i class="el-icon-caret-bottom" :class='item.status ==  2 ? "red":""'></i>
          </div>
        </li>
      </ul>
    </div>
    <section>

      <div class="searchResult" v-if="goodsList.length">
        <el-row>
          <el-col :span="12" v-for="(item,index) in goodsList" :key="index">
            <el-card :body-style="{ padding: '0px' }">
              <img v-lazy="item.imgUrl" class="image">
              <div>
                <div class="bottom clearfix">
                  <span>{{ item.name }}</span>
                  <div class="price">
                    <time class="time">${{ item.price }}</time>
                    <el-button type="text" class="button">立即购买</el-button>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div v-else>暂无数据...</div>

    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import SearchHeader from "@/components/search/SearchHeader.vue";
import Tabbar from "@/components/common/Tabbar.vue";
import http from "@/common/api/request";
import search from "@/views/Search.vue";

export default {
  name: "List",
  computed: {
    search() {
      return search
    },
    orderBy() {
      //知道当前是哪一个对象
      let obj = this.searchList.data[this.searchList.currentIndex];
      //针对于状态，判断是升序还是降序
      let val = obj.status == '1' ? 'asc' : 'desc';
      return {
        [obj.key]: val
      }
    }
  },
  components: {SearchHeader, Tabbar},
  data() {
    return {
      goodsList: [],
      searchList: {
        currentIndex: 0,
        data: [
          /*
          status:0 都不亮
          status:1 上箭头亮
          status:2 下箭头亮
          * */
          {
            name: '综合',
            key: 'zh'
          }, {
            name: '价格',
            status: 0,
            key: 'price'
          }, {
            name: '销量',
            status: 0,
            key: 'num'
          }
        ]
      }

    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      http.$axios({
        url: '/api/goods/shopList',
        params: {
          searchName: this.$route.query.key,
          ...this.orderBy
        }
      })
          .then(res => {
            console.log('搜索请求:')
            console.log(res)
            this.goodsList = res;
          })
          .catch(err => {
            console.log(err)
          })
    },
    // 切换
    changeTab(index) {
      console.log(index)
      this.searchList.currentIndex = index;
      // 点击的下表对应的数据是哪一个
      let item = this.searchList.data[index];
      // 取消所有的状态值
      this.searchList.data.forEach((v, i) => {
        if (i != index) {
          v.status = 0;
        }
      })
      //当前点击的改变状态
      if (index == this.searchList.currentIndex) {
        item.status = item.status == 1 ? 2 : 1;
      }
      //发请求
      this.getData();

    }
  },
  watch: {
    $route() {
      this.getData();
    }
  }
}
</script>

<style scoped lang="less">
section {
  flex: 1;
  overflow: hidden;
}

.headers {
  ul {
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    li {
      font-size: 0.45rem;
      display: flex;
      flex-direction: row;
    }
  }
}

::v-deep .el-card {
  margin: 0.1rem;
  padding-bottom: 0.1rem;

  .el-card__body {
    img {
      width: 100%;
      height: auto;
    }

    div {
      span, time {
        font-size: 0.45rem;
        display: flex;
        padding: 0.2rem;
        height: 0.5rem;
      }

      .price {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 0.4rem;
      }

      button {
        background: #b0352f;
        height: 1rem;
        padding: 0;

        span {
          color: #ffffff;
          font-size: 0.3rem;
          height: 0.3rem;
        }
      }
    }
  }
}

.red {
  color: #b0352f;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
