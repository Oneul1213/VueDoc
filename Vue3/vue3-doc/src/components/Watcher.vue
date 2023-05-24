<template>
    <div>
        <p>
            예/아니오 질문: 
            <input v-model="question" />
        </p>
        <p>{{ answer }}</p>

        <div>
            <button @click="add10ToX">X += 10</button>
            <button @click="add2ToY">Y += 2</button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'

const question = ref('')
const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.')

const x = ref(0)
const y = ref(0)

const obj = reactive({ count: 0 })

const someObject = reactive({ count: 0 })


watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.indexOf('?') > -1) {
        answer.value = '생각 중...'
        try {
            const res = await fetch('https://yesno.wtf/api')
            answer.value = (await res.json()).answer === 'yes' ? ' 네' : '아니오'
        } catch (error) {
            answer.value = '에러! API에 연결할 수 없습니다.' + error
        }
    }
})

// watch 의 첫 번째 인자
// 단일 ref
watch(x, (newX) => {
    console.log(`x 값: ${newX}`)
})

// getter
watch(
    () => x.value + y.value,
    (sum) => {
        console.log(`x + y: ${sum}`)
    }
)

// 여러 소스의 배열
watch([x, () => y.value + 1], ([newX, newY]) => {
    console.log(`x는 ${newX}이고, y + 1은 ${newY} 입니다.`)
})

// 반응형 객체의 속성
// getter 사용
watch(
    () => obj.count,
    (count) => {
        console.log(`count 값: ${count}`)
    }
)

watch(someObject, (newValue, oldValue) => {
    console.log(`someObject?`, someObject)
    console.log(`newValue?`, newValue)
    console.log(`oldValue?`, oldValue)
}, { immediate: true })

someObject.count++


function add10ToX(event) {
    x.value += 10;
}

function add2ToY(event) {
    y.value += 2
}
</script>

<style lang="scss" scoped>

</style>