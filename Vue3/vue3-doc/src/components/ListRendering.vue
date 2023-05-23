<template>
    <div>
        <li v-for="({ message }, index) in items" :key="index">
            {{ parentMessage }} - {{ index }} - {{ message }}
        </li>

        <ul>
            <li v-for="(value, key, index) in myObject" :key="index">
                {{ key }} : {{ value }}
            </li>
        </ul>

        <span v-for="n in 10" :key="n">{{ n }}</span>

        <ul>
            <template v-for="(item, index) in items2" :key="index">
                <li>{{ item.msg }}</li>
                <li class="divider" role="presentation"></li>
            </template>
        </ul>

        <li v-for="(n, idx) in evenNumbers" :key="idx">{{ n }}</li>

        <ul v-for="(numbers, i) in sets" :key="i">
            <li v-for="(n, j) in even(numbers)" :key="j">{{ n }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'


const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const items2 = ref([{ msg: 'Foo' }, { msg: 'Bar' }])

const myObject = reactive({
    title: 'Vue에서 목록을 작성하는 방법',
    author: '홍길동',
    publishedAt: '2016-04-10'
})

const numbers = ref([1, 2, 3, 4, 5])

const sets = ref([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
])


const evenNumbers = computed(() => {
    return numbers.value.filter((n) => n % 2 === 0)
})


function even(numbers) {
    return numbers.filter((number) => number % 2 === 0)
}
</script>

<style lang="scss" scoped>

</style>