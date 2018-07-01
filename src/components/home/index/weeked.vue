<template>
    <div>
        <div class="week-titie">
            <div>
                <span class="iconfont hot-titel">&#xe648;</span>
                本周热门榜单
            </div>
            <div class="small-div">
                全部榜单
                <span class="iconfont">&#xe630;</span>
            </div>
        </div>
        <!-- content -->
        <div ref="wrapper" class="list-wrapper">
            <ul class="list-content" ref="tabcontent">
                <div v-for="(item) in weekeds" :key="item.id" class="child" ref="child">
                    <div class="img-box">
                         <div class="top">
                            <img class="top-img" :src="item.top" alt="">
                        </div>
                        <div class="big">
                            <img class="big-img" v-lazy="item.bigImg" alt="">
                        </div>
                    </div>
                    <div class="title">{{item.title}}</div>
                    <div class="price">￥{{item.price}}起</div>
                </div>
            </ul>  
        </div>
        
     </div>    
</template>
<script>
import BScroll from 'better-scroll'
    export default{
        name:"weeked",
        data(){
            return {
                objWidth:""
            }
        },
        props:{
            weekeds:Array
        },
        watch:{
            weekeds(){
                this.$nextTick(()=>{
                    this.scroll.refresh()
                })
            }
        },
        methods:{
            initscroll(){
                    this.scroll = new BScroll(this.$refs.wrapper,{
                        click:true,
                        scrollX:true,
                        scrollY:false,
                        bounce: false,
                    })
            
            },
            // ulWidth(){
            //     const liList = this.$refs.tabcontent.children
            //     console.log(liList.lendth)
            //     setTimeout(()=>{
            //          const liWidth = liList[0].clientHeight
            //            const that = this
            //             setTimeout(()=>{
            //                 console.log(liWidth)
                        
            //                 that.objWidth = liList.lendth * liWidth
            //                console.log(this.objWidth)
            //             },5000)
                     
            //     },2000)
              
                
            // }
        },
        mounted(){
            // this. ulWidth()
          
                this.initscroll()
           
        }
    }
</script>

<style lang="stylus" scoped>
    .week-titie
        display flex
        justify-content space-between
        padding .24rem 0 .26rem
        font-size .32rem
        .hot-titel
            color red
        .small-div
            font-size .24rem    
    .list-wrapper
        .list-content
            display flex
            padding 0 0.24rem
            overflow-x scroll 
            white-space nowrap
            width 14rem
            .child
                margin 0 .1rem
                width 2rem
                height 2.5rem
                padding 0.06rem 0.2rem
                .img-box
                    position relative
                    overflow hidden
                    width 2rem
                    height 0
                    padding-bottom 100%
                    .top
                        position absolute
                        top 0
                        left 0
                        z-index 1
                        width .84rem
                        height .4rem
                        .top-img
                            width 100%
                            height 100%
                    .big-img    
                        width 2rem
                        height 2rem
                .title
                    margin-top .12rem
                    color #212121
                    font-size .24rem
                    line-height .32rem
                    text-align center
                    overflow hidden
                    width 100%
                    white-space nowrap
                    text-overflow ellipsis
                .price
                    color #616161
                    font-size .24rem
                    line-height .36rem
                    text-align center


</style>

