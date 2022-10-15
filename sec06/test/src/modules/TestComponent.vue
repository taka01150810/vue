<template>
  <div class="red-b">
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

<!-- scoped = 有効範囲を狭めることでこのクラス内だけで使えるCSSを作成できる-->
<style scoped> 

.red-b{
  border:1px red solid;
}

</style>