<template>
  <div>]
    BookEditです
    {{ books[$route.params.id].title }}
    {{ books }}
  </div>
</template>

<script>
export default {
  name: 'BookEdit',
  props:{
    books:Array
  },
  data(){
    return{
      book: ''
    }
  },
  /*
  next()の中にさらに$nextTickを使うと
  DOM更新を待ってから処理する
  next( vm => {}) で vmを thisのように使える
  */
  beforeRouteEnter(to, from, next){
    next( vm =>{
      //vmを通じてコンポーネントインスタンスにアクセス
      vm.$nextTick(()=>{
        vm.book = vm.books[vm.$route.params.id]
      })
    })}
}
</script>

<style>

</style>