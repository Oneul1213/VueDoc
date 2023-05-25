<template>
  마우스 위치: {{ x }}, {{ y }}
</template>

<script setup>
import { useMouse } from '@/mouse.js'

const { x, y } = useMouse()
</script>

<style lang="scss" scoped>

</style>