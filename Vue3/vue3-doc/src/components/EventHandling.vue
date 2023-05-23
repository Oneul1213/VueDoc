<template>
    <div>
        <button @click="count++">1 추가</button>
        <p>숫자 값은: {{ count }}</p>

        <button @click="greet">환영하기</button>
        <button @click="say('안녕')">안녕이라고 말하기</button>
        <button @click="say('잘가')">잘가라고 말하기</button>
        <br>
        <button @click="inlineMethod()">인라인 핸들러</button>
        <button @click="inlineMethod">메서드 핸들러</button>
        <br>
        <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">제출하기</button>
        <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.2', event)">제출하기</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const count = ref(0)

const name = ref('Vue.js')


function greet(event) {
    alert(`안녕 ${name.value}!`)

    if (event) {
        alert(event.target.tagName)
    }
}

function say(message) {
    alert(message)
}

function inlineMethod(arg1) {
    alert("arg1은 ")
    alert(arg1)
}

function warn(message, event) {
    if (event) {
        event.preventDefault()
    }
    alert(message)
}
</script>

<style lang="scss" scoped>

</style>