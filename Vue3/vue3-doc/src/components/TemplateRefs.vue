<template>
    <div>
        <input ref="input" />

        <ul>
            <li v-for="(item, index) in list" ref="itemRefs" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'

const input = ref(null)
const list = ref([1, 2, 3, 4, 5])

const itemRefs = ref([])


onMounted(() => {
    input.value.focus()
    console.log(itemRefs.value);
})


watchEffect(() => {
    if (input.value) {
        input.value.focus()
    } else {
        //
    }
})
</script>

<style lang="scss" scoped>

</style>