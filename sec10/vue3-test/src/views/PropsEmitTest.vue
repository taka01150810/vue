<template>
  <div>PropsEmitTestです</div>
  <div>{{ setupBooks }}</div>
  <ul>
    <li v-for="book in setupBooks" :key="book">
        {{ book.title }}
    </li>
  </ul>
  <div>{{ dataBooks }}</div>
</template>

<script>
export default {
    props:{
        setupBooks: Array,
        dataBooks: Array,
    },
    setup(props){
        console.log(props.setupBooks) //結果 オブジェクト
        console.log(props.setupBooks[0].title) //結果 setupタイトル1
        console.log(props.dataBooks) //結果 オブジェクト
    }
}
</script>

<style>

</style>