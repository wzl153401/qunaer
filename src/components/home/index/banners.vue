<template>
    <swiper :options="swiperOption" class="banners">
        <swiper-slide v-for="item of swipers" :key="item.id">
            <img class="swiper-img" :src="item.imgurl" >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default{
        name:'banner',
        props:{
            swipers:Array
        },
        data() {
            return {
                swiperOption: {
                loop:true,
                autoplay:3000,
                pagination: '.swiper-pagination'
                }    
            }
    },

    }
</script>
<style lang="stylus" scoped>
    .banners
        overflow hidden
        width 100%
        height 0
        padding-bottom 26.6%
        .swiper-img
            width 100%
       
</style>
<style lang="stylus">
    .banners
        .swiper-pagination-bullet
            background #ccc 
            width .12rem
            height .12rem
        .swiper-pagination-bullet-active
            background #fff
</style>

