<template>
  <div class="fill-screen">
    <VueSlickCarousel  v-bind="VueSlickCarouselOptions">
      <div v-for="i in 7" :key="i" class="mx-20">
        <img :src="`/img/slider/${i}-slide.png`" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        VueSlickCarouselOptions: {
          "arrows": false,
          "dots": true,
          "autoplay": true,
          "speed": 300,
          "autoplaySpeed": 3000,
          "edgeFriction": 0.35,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    }
  };
</script>

<style>
.fill-screen {
  min-height: 100vh;
}

.slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}

.slick-dots li, .slick-dots li button {
    width: 24px;
    height: 3px;
    cursor: pointer;
}

.slick-dots li {
    position: relative;
    display: inline-block;
    margin: 0 5px;
    padding: 0;
}

.slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    /* padding: 5px; */
    border: 0;
    outline: none;
    color: #718096;
    background: #718096;
}
li.slick-active button {
    background: #cbd5e0;
}
</style>