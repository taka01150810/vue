<template>
  <div class="red-b">

    <div class="border__blue">
      SCSSテストです
    </div>

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

<style scoped lang="scss">
.red-b{
  border:1px red solid;
}

.border{
  &__blue{
    border:1px blue solid;
  }
}


</style>