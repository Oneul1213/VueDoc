<template>
    <input v-focus />
</template>

<script setup>
import { inject } from 'vue'

const vFocus = {
    mounted: (el) => el.focus()
}

const i18n = inject('i18n')

console.log(i18n.greetings.hello)
</script>

<style lang="scss" scoped>

</style>