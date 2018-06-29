<template>
    <div class="subject">
        <div class="sub-top">
            <div class="sub-top-left sub-topp">
                <span class="iconfont">&#xe611;</span>
                定位失败
            </div>
            <div class="sub-top-right sub-topp">
                <span class="iconfont">&#xe629;</span>
                玩水季
            </div>
        </div>

        <div class="sub-bot">
            <div ref="bg" class="sub-bott" v-for="item of bgimgs" :key="item.id" :style="{backgroundImage:'url('+item.imgurl+')',backgroundRepeat:'no-repeat',backgroundPisition:'center center',backgroundSize:'90% 90%'}" >
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"subject",
        props:{
            bgimgs:Array
        },
        // watch:{
        //     bgimgs(){
        //         this.$nextTick(()=>{
        //                 // this.bgImg()
        //         })
        //     }
        // },
        // methods:{
        //     bgImg(){  
        //           this.$refs.bg.forEach((value,index)=>{
        //                  value.style.background = "url(http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png) center center no-repeat #fff"
        //                  value.style.backgroundSize = "90% 90%"
        //           })
        //     }
        // },
        // computed:{
        //     bgimglist(){
        //         const bgimglist =[]
        //        for(var bg in this.bgimgs ){
        //            bgimglist.push(this.bgimgs[bg].imgurl)
        //        }
        //          return bgimglist
        //     }
        // },
    }
</script>

<style lang="stylus" scoped>
    .subject
        width 100%
        .sub-top
            background #e5e5e5
            margin-top .004rem
            width 100%
            height 0.98rem
            text-align center
            .sub-topp
                background #fff
                width 49.9%
                line-height 0.98rem
            .sub-top-left                
                float left
            .sub-top-right
                float right
        .sub-bot
            width 100%
            background #e5e5e5 
            height 1.8rem
            display flex
            justify-content space-between 
            .sub-bott
                margin-top .2rem
                margin-bottom .2rem     
                height 1.4rem   
                width 49.9%
                text-align center
                line-height 1.4rem
                background:#fff
              
               
             
                
                
                
</style>

