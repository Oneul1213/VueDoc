<template>
    <div>
        <div>A 컴포넌트</div>
        <span>count: {{ count }}</span> <button @click="increment">+</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment(e) {
    count.value++;
}
</script>