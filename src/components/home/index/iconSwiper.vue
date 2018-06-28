<template>
            <swiper :options="iconSwiperOption" class="icon-swiper">
                <swiper-slide v-for="(page,index) in pages" :key="index">
                    <div class="icon-list">
                        <div v-for="item of page" :key="item.id" class="icon-item">
                            <img class="icon-img" :src="item.imgurl" >                  
                            <p class="icon-content">{{item.title}}</p>
                        </div>
                    </div>
                 </swiper-slide>
                 <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
</template>
<script>
    export default{
        name:'IconSwiper',
        props:{
            icons:Array
        },
        data(){
            return {
                iconSwiperOption:{
                    pagination:'.swiper-pagination'
                }
            }
        },
        computed :{
            pages(){
                const pages = []
                this.icons.forEach((value,index) => {
                    const page = Math.floor(index / 8)
                    if(!pages[page]){
                        pages[page]= []
                    }
                    pages[page].push(value)
                });
               
                return pages
            }
        }
        
    }
</script>
<style lang="stylus" scoped>

    .icon-swiper
        overflow hidden
        width 100%
        height 0
        padding-bottom 50%
        .icon-list
            display flex
            flex-wrap wrap
            .icon-item
                width 25%
                height 1.5rem
                margin-top .1rem
                text-align center
                .icon-img
                    width 1.1rem
                    height 1.1rem
                .icon-content
                    text-align center
                    font-size .28rem
                    color #212121
                    padding-top .1rem

</style>

<style lang="stylus">
    @import '../../../assets/style/common/color.styl'
    .icon-swiper
        .swiper-pagination-bullet
            background #ccc
            width .12rem
            height .12rem
        .swiper-pagination-bullet-active
            background $bgColor
</style>