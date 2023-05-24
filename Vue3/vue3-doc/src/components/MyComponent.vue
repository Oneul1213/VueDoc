<template>
    <input
        type="text"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
    />
</template>

<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>

<style lang="scss" scoped>

</style>