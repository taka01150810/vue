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
    <p>computedです: {{ totalPrice }}</p>
    <div>watchです: <input v-model="search">{{ search }}</div>
    <div>watchEffectです: <input v-model="searchEffect">{{ searchEffect }}</div> 
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect } from 'vue'

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

        const item = reactive({
            price: 100,
            number: 3
        })

        const totalPrice = computed(()=>{
            return item.price * item.number //必ずreturnが必要
        })

        //watchは入力されたタイミングで実行
        const search = ref('')
        watch(search, (newValue, prevValue)=>{
            console.log(`watch: ${search.value}`)
            //変更後
            console.log(`new: ${newValue}`)
            //変更前
            console.log(`prev: ${prevValue}`)
        })

        //watchEffectは画面が読み込まれたタイミングで実行
        const searchEffect = ref('')
        watchEffect( () => { //引数なしのコールバック関数
            console.log(`watchEffect: ${searchEffect.value}`)
        })

        return {
            name,
            age,
            nameRef,
            book,
            // ...でオブジェクトを展開
            ...toRefs(bookToRefs),
            btnClick,
            item,
            totalPrice,
            search,
            searchEffect
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