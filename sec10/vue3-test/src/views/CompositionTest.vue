<template>
  <div>
    Compositionテストです
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ nameRef }}</p>
    <p>reactive : {{ book.title }}</p>
    <p>reactive : {{ book.author[0] }}</p>
    <p>reactiveToRefsです : {{ titleRef }}</p>
    <p>reactiveToRefsです : {{ authorRef[1] }}</p>
    <button @click="btnClick">クリックしてね</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

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

        const bookToRefs = reactive({
            titleRef : 'ネッツ',
            authorRef : ['渡辺', 'KD'],
        })

        // JSは変数に関数を含めることができる
        const btnClick = (e) => {
            console.log('クリックしたよ')
            // Setup関数内の変数もそのまま指定可能(this不要) 
            console.log(book.title)
            // 引数にeでイベント取得
            console.log(e)
        }

        return {
            name,
            age,
            nameRef,
            book,
            // ...でオブジェクトを展開
            ...toRefs(bookToRefs),
            btnClick
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