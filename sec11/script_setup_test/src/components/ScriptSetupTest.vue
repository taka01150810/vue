<script setup>
import { ref } from "vue";

const count = ref(0);
const increment = () => {
    count.value++;
};
const decrement = () => {
 count.value--;
};
</script>

<template>

<h1>{{ count }}</h1>
<button @click="increment">Incremenボタン</button>
<button @click="decrement">Decrementボタン</button>

</template>