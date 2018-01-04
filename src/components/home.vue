<template>
  <div class="home">
    <div class="home_con" :class="this.slideShow ? 'active' : ''">
      <vtop>
        <search :placehold="placehold"></search>
      </vtop>
      <carousel :autoplay = 'this.carouselfig.autoplay' :perPage = 'this.carouselfig.perPage'></carousel>
      <vbottom ref="bo" class="vbottom"></vbottom>
    </div>
    <vmenu class="slide"></vmenu>
  </div>
</template>

<script>
import vbottom from './layout/bottom.vue'
import vtop from './layout/top.vue'
import vmenu from './layout/menu.vue'
import search from './search/search.vue'
import carousel from './carousel/carousel'
import {mapGetters, mapMutations, mapActions} from 'vuex'
// import {getData} from './../common/js/get'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: [],
      placehold: '请搜索你需要的内容',
      carouselfig: {
        autoplay: false,
        perPage: 1
      }
    }
  },
  computed: {
    ...mapGetters([
      'login',
      'play',
      'slideShow'
    ])
  },
  mounted () {
    this.$axios.get('/v2/book/search?q=java').then((res) => {
      console.log('lianjiechenggong')
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
  },
  methods: {
    change () {
      this.all({
        login: !this.login,
        play: this.play === '播放' ? '关闭' : '播放'
      })
    },
    slideActive () {
      console.log('ddd')
    },
    ...mapMutations({
      'set_login': 'SET_LOGIN'
    }),
    ...mapActions([
      'all'
    ])
  },
  components: {
    vbottom,
    vtop,
    search,
    vmenu,
    carousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    &_con {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
      background-color: #ccc;
      transition: all .5s;
    }
    .active {
      transform: translateX(-200px);
    }
    .vbottom {
      z-index: 999;
    }
  }
  .slide {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
    }
  .d {
    width: 100px;
    height: 100px;
    border: 1px solid red;
  }
</style>
