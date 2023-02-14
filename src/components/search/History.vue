<template>
  <div class="history">
    <div class="title">
      <div>
        <i class="el-icon-time"/>
        搜索历史
      </div>
      <el-button @click="clearHistory()" v-if="historyList.length">清空历史记录</el-button>
    </div>
    <div class="hotlist" v-if="historyList.length">
      <div class="item">
        <el-row>
          <el-button v-for="(item,index) in historyList" :key="index" @click="goSearchItem(item)">
            <el-link>{{ item }}</el-link>
          </el-button>
        </el-row>
      </div>
    </div>
    <div class="small" v-if="!historyList.length">暂无搜索记录</div>
  </div>
</template>

<script>

import {MessageBox} from "mint-ui";

export default {
  name: "History",
  data() {
    return {
      historyList: [
        "踢馆一"
      ]
    }
  },
  methods: {
    getInitHistoryData() {
      console.log('init data')
      this.historyList = JSON.parse(localStorage.getItem("searchList"));
      console.log(this.historyList)
    },
    clearHistory() {
      MessageBox.confirm("确定删除吗", "确定").then(res => {
        console.log(res)
        localStorage.setItem("searchList", '[]');
        console.log("删除历史记录")
        localStorage.removeItem("searchList");
        // 清空数据
        this.historyList = [];
      }).catch(err => {
        console.log(err)
        console.log("不删除")
      })
    },
    goSearchItem(item) {
      console.log(item)
      this.$router.push({
        name: 'list',
        query: {
          key: item
        }
      })
    }
  },
  created() {
    this.getInitHistoryData();
  }

}
</script>

<style scoped lang="less">
.history {
  display: flex;
  width: 100%;
  flex-direction: column;

  .small {
    font-size: 15px;
  }

  .title {
    display: flex;
    width: 100%;
    padding: 7px;
    justify-content: space-between;
    font-size: 0.45rem;
    align-items: center;
    box-sizing: border-box;

    i {
      color: #ee0a24;
      font-size: 0.45rem;
    }
  }

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