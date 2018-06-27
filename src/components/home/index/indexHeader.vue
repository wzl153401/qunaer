<template>
    <div class="index-header">
       <div class="back iconfont">&#xe600;</div>
       <div class="search">
           <div class="search-content">
               <span class="iconfont">&#xe627;</span>
               输入城市/景点游戏主题
           </div>
       </div>
       <div class="city">北京<em class="iconfont icon">&#xe601;</em></div>
    </div>
</template>
<script>
    export default{
        name:'IndexHeader',

    }
</script>
<style scoped lang="stylus" >
    @import '../../../assets/style/common/color.styl'

    .index-header
        display flex
        background:$bgColor
        height: 0.88rem
        .back
            float:left
            width: 0.48rem
            padding:0 0.2rem
            line-height:0.88rem
            color:#fff
            font-size: 0.36rem
            font-wight:1000
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
            line-height:0.88rem
            max-width:16rem
            color:#fff
            width:1.12rem
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            

</style>
