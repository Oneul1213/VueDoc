<template>
    <div>
        <div :class="[activeClass, errorClass]" :style="styleObject">active?</div>
    </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'


const isActive = ref(true)
const error = ref(null)

const activeClass = ref('active')
const errorClass = ref('text-danger')

const activeColor = ref('red')
const fontSize = ref(30)

const styleObject = reactive({
    color: 'red',
    fontSize: '50px'
})


const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
}))

</script>

<style scoped>
</style>