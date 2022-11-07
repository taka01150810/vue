<script setup>
import { ref } from "vue";

const props = defineProps({
    title: String
})

const emitTest = defineEmits(['custom-event'])

const count = ref(0);
const increment = () => {
    count.value++;
};
const decrement = () => {
 count.value--;
};
</script>

<template>
<span>{{ props }}</span>
<span>{{ props.title }}</span>
<button @click="emitTest('custom-event', '子からの値')">
    Emitテスト
</button>
<h1>{{ count }}</h1>
<button @click="increment">Incremenボタン</button>
<button @click="decrement">Decrementボタン</button>

</template>