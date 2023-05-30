<template>
    <div>
        <div>B 컴포넌트</div>
        <input v-model="message" />
        <p>메시지: {{ message }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
</script>