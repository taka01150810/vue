<template>
  <div>
    RouterTestです
    <button @click="goHome">ホームに戻る</button>
    <button @click="checkRoutePath">ルート情報</button>
  </div>
</template>

<script>
//setup内でthisは使えないので専用の合成関数を読み込む
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router'

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

        onBeforeRouteLeave((to, from)=>{
            console.log(`to: ${to}`)
            console.log(`from: ${from}`)
        })

        return { goHome, checkRoutePath }
    }
}
</script>

<style>

</style>