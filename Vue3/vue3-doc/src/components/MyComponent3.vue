<template>
    <div>
        <slot :text="greetingMessage" :count="1"></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const greetingMessage = ref('hi')
</script>

<style lang="scss" scoped>

</style>