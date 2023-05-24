<template>
    <div class="blog-post">
        <h4>{{ title }}</h4>
        <button @click="$emit('enlarge-text')">텍스트 확대</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['title'])
const emit = defineEmits(['enlarge-text'])

console.log(props.title)
// emit('enlarge-text')
</script>

<style lang="scss" scoped>

</style>