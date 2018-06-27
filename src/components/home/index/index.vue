<template>
<div class="index">
       <index-header></index-header>
        <banners></banners>
</div>
   
</template>
<script>

    import IndexHeader from './indexHeader.vue'
    import banners from './banners.vue'
    
    export default{
        name:'index',
        components:{
            IndexHeader,
            banners
            
        }

    }
</script>

 <style lang="stylus" scoped>


</style>

