<template>
<div class="index">
    <index-header></index-header>
    <banners :swipers = "swipers"></banners>
    <icon-swiper :icons = "icons"></icon-swiper>
    
</div>
   
</template>
<script>

    import IndexHeader from './indexHeader.vue'
    import banners from './banners.vue'
    import IconSwiper from './iconSwiper.vue'

    import axios from 'axios'
    export default{
        name:'index',
        components:{
            IndexHeader,
            banners,
            IconSwiper
        },
        data (){
            return {
                swipers:[],
                icons:[]
            }
        },
        methods:{
            getBaners(){
                     axios.get('/api/index.json')
                        .then(this.getinfosucc.bind(this))
                        .catch(this.getinfoerror.bind(this));
            },
            getinfosucc(res){
                 res = res.data;
                if(res&&res.data){
                    if(res.data.swiper&&res.data.icons){
                        this.swipers = res.data.swiper
                        this.icons = res.data.icons
                    }                    
                }else {
                    this.getinfoerror()
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

