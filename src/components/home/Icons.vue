<template>
  <div class="icons">
    <li v-for="(item,index) in iconsList" :key="index">
      <img :src="item.imgUrl" :alt="item.title">
      <span>{{ item.title }}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: "Icons",
  props:{
    iconsList:Array
  }
}
</script>

<style scoped lang="less">
.icons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 0.5rem;

  li {
    list-style: none;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.1rem;

    img {
      display: flex;
      width: 1.1rem;
      height: 1.1rem;
      justify-content: center;
      padding-bottom: 0.2rem;
    }

    span {
      font-size: 0.4rem;
      text-align: center;
    }
  }
}

</style>