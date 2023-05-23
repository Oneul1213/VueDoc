<template>
    <div>
        <p>책을 가지고 있다.</p>
        <span>{{ publishedBookMessage }}</span>
        <p>{{ calculateBookMessage() }}</p>

        <div>
            <p>Date.now : {{ getNowDate() }}</p>
            <p>Computed now : {{ computedNowDate }}</p>
        </div>

        <div>
            <p>{{ fullName }}</p>
            <button @click="changeName">Change Name</button>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

const firstName = ref('John')
const lastName = ref('Doe')


const publishedBookMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

const computedNowDate = computed(() => {
    return Date.now()
})

const fullName = computed({
    get() {
        return firstName.value + ' ' + lastName.value
    },

    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})


function calculateBookMessage() {
    return author.books.length > 0 ? 'Yes' : 'No'
}

function getNowDate() {
    return Date.now()
}

function changeName() {
    fullName.value = 'Hong gildong'
}

</script>

<style lang="scss" scoped>

</style>