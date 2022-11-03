<template>
  <!-- 親ページ -->
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <button @click="setLogin">ログイン名表示</button>
    {{ $store.state.count }}
    <ul>
      <li v-for="user in visibleUsers" :key="user.id">
        {{ user.id }} : {{ user.name }} : {{ user.isVisible }}
      </li>
      <br>
      {{ getUserById }}<br>
      {{ getUserById.name }}
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default({
  methods:{
    ...mapActions('auth', ['setLoginUser']),
    setLogin(){
      this.setLoginUser({ name: 'レブロン'})
    }
  },
  computed:{
    visibleUsers(){
      return this.$store.getters.visibleUsers
    },
    getUserById(){
      return this.$store.getters.getUserById(2)
    }
  },
})
</script>

