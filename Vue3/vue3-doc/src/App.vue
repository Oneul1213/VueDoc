<template>
  <div>
    <CustomDirective />
    <br>

    <h1>{{ $translate('greetings.hello') }}</h1>
  </div>
</template>

<script setup>
import CustomDirective from './components/CustomDirective.vue'
</script>

<style lang="scss" scoped>

</style>