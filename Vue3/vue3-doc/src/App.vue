<template>
  <button @click="addRandomIdx">추가</button>
  <button @click="removeRandomIdx">제거</button>
  <button @click="shuffle">섞기</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>
  <input v-model="query" />
  <TransitionGroup
    tag="ul"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <li
      v-for="(item, index) in computedList"
      :key="item.msg"
      :data-index="index"
    >
      {{ item.msg }}
    </li>
  </TransitionGroup>
</template>

<script setup>
import { shuffle as _shuffle } from 'lodash'
import { ref, computed } from 'vue'


const items = ref([1, 2, 3, 4, 5])
const current = ref(5)
const query = ref('')
const list = [
    { msg: 'Bruce Lee' },
    { msg: 'Jackie Chan' },
    { msg: 'Chuck Norris' },
    { msg: 'Jet Li' },
    { msg: 'Kung Fury' },
  ]


const computedList = computed(() => {
  return list.filter((item) => item.msg.toLowerCase().includes(query.value))
})

function addRandomIdx(e) {
  const idx = Math.floor(Math.random() * items.value.length)
  items.value.splice(idx, 0, ++current.value)
}

function removeRandomIdx(e) {
  const idx = Math.floor(Math.random() * items.value.length)
  items.value.splice(idx, 1)
}

function shuffle(e) {
  items.value = _shuffle(items.value)
}

function onBeforeEnter(e) {

}

function onEnter(e) {
  
}

function onLeave(e) {

}
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>