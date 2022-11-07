<template>
  <div>
    RouterTestです
    <button @click="goHome">ホームに戻る</button>
    <button @click="checkRoutePath">ルート情報</button>
  </div>
</template>

<script>
//setup内でthisは使えないので専用の合成関数を読み込む
import { useRouter, useRoute } from 'vue-router'

export default{
    setup(){
        const router = useRouter()
        const route = useRoute()
        const goHome = () => {
            router.push('/')
        }
    
        const checkRoutePath = () => {
            console.log(route.path)
        }
        return { goHome, checkRoutePath }
    }
}
</script>

<style>

</style>