<template>
  <div>
    Compositionテストです
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ nameRef }}</p>
    <p>reactive : {{ book.title }}</p>
    <p>reactive : {{ book.author[0] }}</p>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    data(){},
    setup(){
        let name = '大谷'
        const age = 30
        /* ref リアクティブな変数
        1つの値をリアクティブにしたい場合に使う
        値を参照オブジェクトでラップすることで
        リアクティブな状態にする
        */
        const nameRef = ref('レブロン')

        console.log(nameRef)//結果 オブジェクトの値
        console.log(nameRef.value)//結果 レブロン

        /*
        reactive リアクティブなオブジェクト
        dataに近い。オブジェクトで指定する
        */
        const book = reactive({
            title: 'ウォリアーズ',
            author: ['カリー', 'トンプソン'],
        })
        /*
        こちらはvalue不要
        template内, script内 ともに
        book.title などで表示できる
        */
        console.log(book.title);
        
        return {
            name,
            age,
            nameRef,
            book
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