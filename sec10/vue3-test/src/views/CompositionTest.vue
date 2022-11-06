<template>
  <div>
    Compositionテストです
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
export default {
    data(){},
    setup(){
        let name = '大谷'
        const age = 30
        
        return {
            name,
            age
        } 
        //returnに書いた変数・関数をtemplate内で扱える
        //しかしリアクティブではない
    },
    created(){
        console.log('createdです')
    },
    mounted(){
        console.log('mountedです')
    }
}
</script>

<style>

</style>