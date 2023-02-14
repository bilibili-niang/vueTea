<template>
  <el-divider content-position="center">
    <h3 class="base">
      <slot>
        火爆推荐
      </slot>
    </h3>
  </el-divider>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped lang="less">
.base {
  font-size: 18px;
}
</style>