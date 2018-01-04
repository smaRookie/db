<template>
  <carousel class="main" 
	:autoplay = 'this.autoplay'
	:autoplayHoverPause = 'this.autoplayHoverPause'
	:perPage = 'this.perPage'
	>
    <slide v-for="item in this.srcs" style="width: 100%; height: 180px;"><img :src='item' alt="" style="width: 100%; height: 4.5rem;"></slide>
    <!-- <slide class="slide_item">
      Slide 1 Content
    </slide>
    <slide class="slide_item">
      Slide 2 Content
    </slide>
		<slide class="slide_item">
      Slide 1 Content
    </slide>
    <slide class="slide_item">
      Slide 2 Content
    </slide> -->
  </carousel>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    autoplayHoverPause: {
      type: Boolean,
      default: true
    },
    perPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      srcs: ['./../../static/carousel1.jpg', './../../static/carousel2.jpg', './../../static/carousel3.jpg']
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>
<style lang="less" scoped>
.main {
  width: 100%;
}
.slide_item {
  width: 100%;
}
</style>
