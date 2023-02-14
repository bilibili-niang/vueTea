<template>
  <div class='list'>
    <div class="header">
      <div>
        <i class="el-icon-back"></i>
      </div>
      <div class="fontCon">
        <i class="el-icon-search"></i>
        <span>搜索你喜欢的</span>
      </div>
      <i class="el-icon-house"></i>
    </div>

    <section>
      <div class="list-l" ref="left">
        <ul class="l-item">
          <li v-for="(item,index) in leftData"
              :key="index"
              @click="goScroll(index)"
              :class='{active:index==currentIndex}'
          >{{ item.name }}
          </li>
        </ul>
      </div>

      <div class="list-r" ref="right">
        <div>
          <ul
              v-for='(item,index) in rightData'
              :key='index'
              class='shop-list'
          >
            <li
                v-for="(k,i) in item"
                :key='i'
            >
              <h2>{{ k.name }}</h2>
              <ul class='r-content'>
                <li
                    v-for='(j,idx) in k.list'
                    :key='idx'
                >
                  <img :src="j.imgUrl" alt="">
                  <span>{{ j.name }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import http from '../common/api/request'
import BetterScroll from "better-scroll";

export default {
  name: "List",
  components: {
    Tabbar
  },
  data() {
    return {
      //   左侧数据
      leftData: [],
      //   右侧数据
      rightData: [],
      // 右侧滑动
      rightBScroll: '',
      // 右侧高度值
      allHeight: [],
      // 右侧滚动距离
      scrollY: '',
    }
  },
  methods: {
    goScroll(index) {
      console.log(index)
      // 滚动到指定位置
      this.rightBScroll.scrollTo(0, -this.allHeight[index])
    }
  },
  async created() {
    let res = await http.$axios({
      url: '/api/goods/list'
    });
    let leftArr = [];
    let rightArr = [];

    res.forEach(v => {
      leftArr.push({
        id: v.id,
        name: v.name
      })
      rightArr.push(v.data)
    })
    this.leftData = leftArr;
    this.rightData = rightArr;
    // 当dom都加载完毕了再去执行里面的函数


    this.$nextTick(() => {
      //左侧滑动
      // batterScroll默认取消点击事件
      new BetterScroll(this.$refs.left, {
        click: true
      });
      // 右侧
      this.rightBScroll = new BetterScroll(this.$refs.right, {
        probeType: 3
      });
      // 统计右侧所有版块高度值并放入数组
      let height = 0;
      this.allHeight.push(height);
      let uls = this.$refs.right.getElementsByClassName("shop-list");
      // 将dom对象转为数组
      Array.from(uls).forEach(v => {
        height += v.clientHeight;
        this.allHeight.push(height)
      })
      // 得到右侧滚动的值
      this.rightBScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(pos.y);
      })


    })


  },
  computed: {
    currentIndex() {
      return this.allHeight.findIndex((item, index) => {
        return this.scrollY >= item && this.scrollY < this.allHeight[index + 1];
      })
    }

  }
};
</script>
<style scoped lang="less">
.list {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;

  section {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 0.45rem;
    width: 100vw;
    height: 100vh;

    .list-l {
      font-size: 0.45rem;
      display: flex;
      width: 2.48rem;
      height: 100vh;
      align-items: flex-start;

      .l-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li {
          width: 100%;
          line-height: 1.2rem;
          text-align: center;
          font-size: 0.45rem;
          padding: 10px;
          box-sizing: border-box;
        }
      }
    }

    .list-r {
      display: flex;
      width: 100%;
      height: 100vh;
      align-items: flex-start;
      //overflow-y: auto;
      overflow: hidden;
      border-left: 1px gray solid;
      flex-direction: column;

      .shop-list {
        display: flex;
        justify-content: center;

        li {
          h2 {
            display: flex;
            font-size: 0.5rem;
            padding: 10px;
            justify-content: center;
          }
        }

        .r-content {
          display: flex;
          flex-wrap: wrap;

          li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 33.3%;
            min-width: 30%;

            img {
              width: 1.3rem;
              height: 1.3rem;
            }

            span {
              font-size: 0.4rem;
            }
          }

        }
      }
    }
  }

  .header {
    display: flex;
    flex-direction: row;
    background: #b0352f;
    align-items: center;
    height: 1.6rem;
    justify-content: space-around;

    div {
      display: flex;
      align-items: center;
    }

    .fontCon {
      background: #FFFFFF;
      display: flex;
      align-items: center;
      width: 6.56rem;
      height: 0.8rem;
      border-radius: 16px;
      padding: 10px;
      box-sizing: border-box;
      font-size: 0.373333rem;
      color: #ccc;

      i {
        font-size: 16px;
        color: #ccc;
      }
    }

    i {
      color: #FFFFFF;
      font-size: 0.96rem;
    }


  }

}

.active {
  border-left: 5px solid #b0352f;
  color: #b0352f;
}

</style>


