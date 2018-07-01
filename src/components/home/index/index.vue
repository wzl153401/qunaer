<template>
<div class="index">
    <index-header></index-header>
    <banners :swipers = "swipers"></banners>
    <icon-swiper :icons = "icons"></icon-swiper>
    <subject :bgimgs = "bgimgs"></subject>
    <weeked :weekeds = "weekeds"></weeked>
     
</div>
   
</template>
<script>

    import IndexHeader from './indexHeader.vue'
    import banners from './banners.vue'
    import IconSwiper from './iconSwiper.vue'
    import subject from './subject.vue'
    import weeked from './weeked.vue'
    
    import axios from 'axios'
    import {mapState ,mapMutations }from 'vuex'


    export default{
        name:'index',
        components:{
            IndexHeader,
            banners,
            IconSwiper,
            subject,
            weeked
        },
        data (){
            return {
                swipers:[],
                icons:[],
                bgimgs:[],
                weekeds:[]
            }
        },
        computed:{
            ...mapState(['city'])
        },
        methods:{
            ...mapMutations(['changeCity']),
            getBaners(){
                     axios.get('/api/index.json')
                        .then(this.getinfosucc.bind(this))
                        .catch(this.getinfoerror.bind(this));
            },
            getinfosucc(res){
                 res = res.data;
                if(res&&res.data){
                    if(res.data.swiper&&res.data.icons&&res.data.bgimgs&&res.data.weekeds&&res.data.city){
                        this.swipers = res.data.swiper
                        this.icons = res.data.icons
                        this.bgimgs = res.data.bgimgs
                        this.weekeds = res.data.weekeds
                    }                    
                }else {
                    this.getinfoerror(123)
                }  
            },
            getinfoerror(error){
                console.log(error)
            }
        },
        mounted (){
            this.getBaners()
        }
    }
</script>

 <style lang="stylus" scoped>
    
        

</style>

