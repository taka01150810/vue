<template>
  <div>PropsEmitTestです</div>
  <div>{{ setupBooks }}</div>
  <ul>
    <li v-for="book in setupBooks" :key="book">
        {{ book.title }}
    </li>
  </ul>
  <div>{{ dataBooks }}</div>
  <button @click="emitTest">emitTestです</button>
</template>

<script>
export default {
    props:{
        setupBooks: Array,
        dataBooks: Array,
    },
    //setup(props, { emit }) でも可能
    setup(props, context){
        console.log(props.setupBooks) //結果 オブジェクト
        console.log(props.setupBooks[0].title) //結果 setupタイトル1
        console.log(props.dataBooks) //結果 オブジェクト

        const emitTest = () => {
            context.emit('custom-event', '子の値')
            //setup(props, { emit }) でもにした場合は emit('custom-event', '子の値')
        }

        return { emitTest }
    }
}
</script>

<style>

</style>