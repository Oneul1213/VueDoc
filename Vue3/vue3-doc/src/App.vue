<template>
  <button @click="show = !show">토글</button>
  <Transition name="fade" appear>
    <p v-if="show">안녕</p>
  </Transition>
  <Transition name="slide-fade" appear>
    <p v-if="show">안녕</p>
  </Transition>
  <Transition name="bounce" appear>
    <p v-if="show" style="text-align: center;">
      안녕! 여기에 탄력적인 텍스트가 있어요!
    </p>
  </Transition>
  <Transition
    name="custom-classes"
    enter-active-class="animate__animated animate__tada"
    leage-active-class="animate__animated animate__bounceOutRight"
    appear
  >
    <p v-if="show">안녕</p>
  </Transition>
  <div class="btn-container">
    <Transition name="doc-state">
      <button v-if="docState === 'saved'" @click="docState = 'edited'">수정</button>
      <button v-else-if="docState === 'edited'" @click="docState = 'editing'">저장</button>
      <button v-else-if="docState === 'editing'" @click="docState = 'saved'">취소</button>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import 'animate.css'

const show = ref(true)
const docState = ref('saved')
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
  white-space: pre;
}
.doc-state-enter-active,
.doc-state-leave-active {
  transition: all 0.25s ease-out;
}
.doc-state-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.doc-state-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>