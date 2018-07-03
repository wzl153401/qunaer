<template>
    <div class="index-header">
       <div class="back iconfont">&#xe600;</div>
       <div class="search">
           <div class="search-content">
               <span class="iconfont">&#xe627;</span>
               输入城市/景点游戏主题
           </div>
       </div>
       <router-link to = /city>
           <div class="city"  >{{city}}<em class="iconfont icon">&#xe601;</em></div>
       </router-link>
       
    </div>
</template>
<script>
    import {mapState} from 'vuex'

    export default{
        name:'IndexHeader',
        computed:{
            ...mapState(['city'])
        },

    }
</script>
<style scoped lang="stylus" >
    @import '../../../assets/style/common/color.styl'

    .index-header
        display flex
        background:$bgColor
        height: 0.88rem
        .back
            float left
            width 0.68rem
            padding 0 0.2rem
            line-height 0.88rem
            color #fff
            font-size 0.36rem
            font-weight bold
            text-align center
        .search
            flex:1
            line-height:0.88rem
           
            .search-content
                background:#fff
                margin-top:0.14rem
                line-height:0.6rem
                border-radius: .06rem;
                color:#ccc
        .city
            position relative
            line-height:0.88rem
            color:#fff
            max-width:1.42rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            padding 0 .6rem 0 .2rem
            text-align right 
            .icon
                position absolute
                right 0.2rem



           
            

</style>
