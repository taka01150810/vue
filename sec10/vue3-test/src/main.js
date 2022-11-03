//必要な機能を指定
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// createAppはアプリケーションAPIをチェーンで繋げる事ができる
createApp(App).use(store).use(router).mount('#app')
