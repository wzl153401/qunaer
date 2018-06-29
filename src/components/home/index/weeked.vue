<template>
    <div class="weeked">
        <div ref="wrapper" class="list-wrapper">
            <ul class="list-content" ref="tabcontent">
                <div v-for="(itme,index) in 10" :key="index" class="list">{{index}}</div>
            </ul>  
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

    export default{
        name:"weeked",
        methods:{
            initscroll(){
            // let width= 10 * 80;
            this.$refs.tabcontent.style.width=200+'rem';
                this.$nextTick(()=>{
                    this.scroll = new BScroll(this.$refs.wrapper,{
                        // startX:0,
                        click:true,
                        scrollX:true,
                        // scrollY:false,
                        // eventPassthrough:'vertical'
                    })
                })
            }
        },
        created(){
            this.$nextTick(()=>{
                this.initscroll()
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .list-wrapper
        width 10rem
        height 2rem
        background pink
        .list
            float left
            width 2rem
            height 2rem
            background green
              


</style>

