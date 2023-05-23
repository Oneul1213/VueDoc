<template>
    <div>
        <button @click="awesome = !awesome">전환</button>
        <h1 v-if="awesome">Vue는 정말 멋지죠!</h1>
        <h1 v-else>아닌가요? 😢</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const awesome = ref(true)
</script>

<style lang="scss" scoped>

</style>