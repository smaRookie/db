<template>
  <div class="top">
    <span class="logo"></span>
    <div class="top_search">
      <slot></slot>
    </div>
    <span class="menu" @click="menuState.next()"></span>
  </div>
</template>
<script scoped>
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        menuState: ''
      }
    },
    mounted () {
      this.menuGenerator()
    },
    methods: {
      menuGenerator () {
        let self = this
        function* a () {
          while (true) {
            self.changeSlide(true)
            yield
            self.changeSlide(false)
            yield
          }
        }
        this.menuState = a()
      },
      ...mapMutations({
        'changeSlide': 'SET_SLIDESHOW'
      })
    }
  }
</script>
<style lang="less" scoped>
@import './../../common/less/index.less';
  .top {
    width: 100%;
    height: 1rem;
    background-color: @mColor;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .25rem;
    .logo {
      width: .8rem;
      height: .8rem;
      background-image: url('./../../assets/logo.png');
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .top_search {
      display: inline-block;
      flex-grow: 1;
      height: .8rem;
    }
    .menu {
      width: .8rem;
      height: .8rem;
      background-image: url('./../../assets/menu.svg');
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
</style>
