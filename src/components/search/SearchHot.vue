<template>
  <div class="searchHot">
    <div class="hot">
      <van-icon name="fire" color="#ee0a24"/>
      热门搜索
    </div>

    <div class="hotlist">
      <div class="item">
        <el-row>
          <el-button v-for="(item,index) in hotList" :key="index">
            <el-link :href="item.url">{{ item.title }}</el-link>
          </el-button>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHot",
  data() {
    return {
      hotList: [
        {
          title: '易冲泡茶叶',
          url: "biying.com"
        }, {
          title: '经典紫砂壶',
          url: "biying.com"
        }, {
          title: '送礼',
          url: "biying.com"
        }, {
          title: '旅行茶具',
          url: "biying.com"
        }, {
          title: '代课茶',
          url: "biying.com"
        }, {
          title: '新手入门茶',
          url: "biying.com"
        }, {
          title: '大师壶',
          url: "biying.com"
        }, {
          title: '福鼎白茶',
          url: "biying.com"
        }, {
          title: '绿茶',
          url: "biying.com"
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
.searchHot {
  display: flex;
  width: 100%;
  flex-direction: column;

  .hot, .hotlist {
    display: flex;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    font-size: 0.45rem;
    align-items: center;
  }

  .hotlist {
    padding: 10px;

    ::v-deep .el-row {
      button {
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 9px;

        span {
          a {
            color: #aba9a9;

          }
        }
      }
    }
  }
}
</style>