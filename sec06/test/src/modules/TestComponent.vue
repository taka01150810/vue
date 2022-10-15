<template>
  <div>
    テストです
    {{ testData }}
  </div>
</template>

<script>
export default {
    name: 'TestComponent',
    data(){
        return{
            testData: 'テストDataです'
        }
    }
}
</script>

<style>

</style>