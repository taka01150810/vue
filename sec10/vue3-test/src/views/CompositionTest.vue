<template>
  <div>
    Compositionテストです
  </div>
</template>

<script>
export default {
    data(){},
    setup(){
        console.log('setupです')
        console.log(this) //結果 undefined
        /*
        Setup関数内はthisを使わない
        ->アロー関数が使いやすい
        */
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