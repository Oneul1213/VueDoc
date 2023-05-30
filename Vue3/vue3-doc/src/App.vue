<template>
  <button @click="show = !show">토글</button>
  <Transition name="fade">
    <p v-if="show">안녕</p>
  </Transition>
  <Transition name="slide-fade">
    <p v-if="show">안녕</p>
  </Transition>
  <Transition name="bounce">
    <p v-if="show" style="text-align: center;">
      안녕! 여기에 탄력적인 텍스트가 있어요!
    </p>
  </Transition>
  <Transition
    name="custom-classes"
    enter-active-class="animate__animated animate__tada"
    leage-active-class="animate__animated animate__bounceOutRight"
  >
    <p v-if="show">안녕</p>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import 'animate.css'

const show = ref(true)
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
</style>