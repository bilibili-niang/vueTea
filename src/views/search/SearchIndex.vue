<template>
  <div class="searchIndex">
    <SearchHeader></SearchHeader>
    <section ref='wrapper'>
      <History></History>
      <SearchHot></SearchHot>
      <SearchRecommend></SearchRecommend>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import SearchHeader from "@/components/search/SearchHeader.vue";
import SearchHot from "@/components/search/SearchHot.vue";
import SearchRecommend from "@/components/search/SearchRecommend.vue";
import Tabbar from "@/components/common/Tabbar.vue";
import History from "@/components/search/History.vue";

export default {
  name: "SearchIndex",
  components: {History, Tabbar, SearchRecommend, SearchHot, SearchHeader},
  created() {
  },
  methods: {
  }

}
</script>

<style scoped lang="less">

section {
  flex: 1;
  overflow: hidden;
}
</style>