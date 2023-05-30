<template>
  <div>
    <label>
      <input type="radio" v-model="activeComponent" :value="CompA" /> A
    </label>

    <label>
      <input type="radio" v-model="activeComponent" :value="CompB" /> B
    </label>

    <p>현재 컴포넌트: {{ activeComponent === CompA ? 'A' : 'B' }}</p>
    <KeepAlive :max="2">
      <component :is="activeComponent" />
    </KeepAlive>
  </div>
</template>

<script setup>
import CompA from '@/components/CompA.vue'
import CompB from '@/components/CompB.vue'
import { shallowRef } from 'vue'

const activeComponent = shallowRef(CompA)
</script>

<style scoped>

</style>