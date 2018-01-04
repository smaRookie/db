<template>
  <div class="search">
    <span class="search_icon" v-show="!query"></span>
    <input type="text" class="search_text" 
    :placeholder="this.placehold"
    v-model="query"
    >
    <span class="search_clear" v-show="query" @click="clear"></span>
  </div>
</template>
<script>
  export default {
    props: {
      placehold: {
        type: String,
        default: '请搜索'
      }
    },
    data () {
      return {
        iconShow: true,
        query: ''
      }
    },
    methods: {
      clear () {
        this.query = ''
      }
    }
  }
</script>
<style scoped lang="less">
@import './../../common/less/index.less';
  .search {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    background-color:  @mColor;
    &_text {
      height: 100%;
      width: 100%;
      border: 0;
      background-color:  @mColor;
    }
    &_icon {
      display: inline-block;
      position: absolute;
      right: 10px;
      height: .5rem;
      width: .5rem;
      background-position: center center;
      background-size: cover;
      background-image: url('./../../assets/search.svg');
    }
    &_clear {
      display: inline-block;
      position: absolute;
      right: 10px;
      height: .5rem;
      width: .5rem;
      background-position: center center;
      background-size: cover;
      background-image: url('./../../assets/clear.svg');
    }
  }
</style>

