<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ScriptSetupTest 
  title="ここにタイトルが入ります"
  @custom-event="parentMethod"
  />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ScriptSetupTest from './components/ScriptSetupTest.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ScriptSetupTest
  },
  methods: {
    parentMethod(e){
      console.log('Emit実行', e)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
