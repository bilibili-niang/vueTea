<template>
  <div class="searchRecommend">
    <div class="title">
      <van-icon name="good-job" color="#ee0a24"/>
      推荐商品
    </div>
    <div class="card">
      <el-row>
        <el-col v-for="(item,index) in list" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <div class="imgContainer">
              <img :src="item.imgUrl" class="image">
              <span>{{ item.comment }}</span>
            </div>
            <div style="padding: 10px;">
              <span>{{ item.name }}</span>
              <div class="price">
                <span class="priceNum">${{ item.price }}</span>
                <span :v-if="item.remark" class="remark"><van-icon name="question-o"/>{{ item.remark }}</span>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col></el-col>
        <el-col></el-col>
        <el-col></el-col>
      </el-row>

    </div>

  </div>
</template>

<script>
export default {
  name: "SearchRecommend",
  data() {
    return {
      list: [
        {
          id: 1,
          name: '老八蜜汁小汉堡',
          comment: '吃了一个就管饱',
          price: '88',
          imgUrl: './images/searchRecommend/img_1.png'
        }, {
          id: 2,
          name: '云南凤庆经典蜜香滇红',
          comment: '外形讨喜  甘甜可口',
          price: '858',
          imgUrl: './images/searchRecommend/img_2.png'
        }, {
          id: 3,
          name: '无烟工艺正山小种2号',
          comment: '浓厚薯密香',
          price: '823',
          imgUrl: './images/searchRecommend/img_1.png',
          remark: '大约13一斤'
        }, {
          id: 4,
          name: '武夷山高级大红袍2号',
          comment: '轻火焙制  天然花香',
          price: '210',
          imgUrl: './images/searchRecommend/img_2.png',
          remark: '大约2322一斤'
        }, {
          id: 5,
          name: '武夷山高级大红袍2号',
          comment: '轻火焙制  天然花香',
          price: '210',
          imgUrl: './images/searchRecommend/img_2.png',
          remark: '大约236一斤'
        }
      ]
    }
  }
}

</script>

<style scoped lang="less">
.searchRecommend {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 1.5rem;

  .title {
    display: flex;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    font-size: 0.45rem;
    align-items: center;
  }

  ::v-deep .card {
    .el-row {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-around;

      .el-col {
        max-width: 50%;
      }

      .el-col {
        display: flex;
        min-width: 50%;
        padding: 10px;

        .imgContainer {
          position: relative;

          img {
            width: 100%;
            height: auto;
          }

          span {
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 0.35rem;
            display: flex;
            background: rgba(0, 0, 0, 0.2);
            width: 100%;
            padding-top: 2px;
            padding-bottom: 2px;
            padding-left: 10px;
            color: #FFFFFF;
            white-space: nowrap;
          }
        }
      }

      span {
        font-size: 0.4rem;
        white-space: nowrap;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        align-items: center;

        .priceNum {
          color: #b0352f;
        }

        .remark {
          color: #aba9a9;
          font-size: 0.3rem;
        }
      }
    }
  }

  ::v-deep .el-card__body {
    font-size: 0.5rem;
  }
}

</style>