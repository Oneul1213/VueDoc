<template>
  <div>
    <FancyButton>
      클릭하기!
    </FancyButton>

    <BaseLayout>
      <template #header>
        <h1>다음은 페이지 제목일 수 있습니다.</h1>
      </template>
      <p>주요 내용에 대한 단락입니다.</p>
      <p>그리고 또 하나.</p>
      <template #footer>
        <p>다음은 연락처 정보입니다.</p>
      </template>
    </BaseLayout>

    <MyComponent3 v-slot="{ text, count }">
      {{ text }} {{ count }}
    </MyComponent3>
  </div>
</template>

<script setup>
import MyComponent3 from './components/MyComponent3.vue';
import BaseLayout from './components/BaseLayout.vue';
import FancyButton from './components/FancyButton.vue';
</script>

<style lang="scss" scoped>

</style>