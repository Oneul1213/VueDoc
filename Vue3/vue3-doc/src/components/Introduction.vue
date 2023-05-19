<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<template>
    <button @click="count++">숫자 세기: {{ count }}</button>
</template>

<style scoped>
button {
    font-weight: bold;
}
</style>