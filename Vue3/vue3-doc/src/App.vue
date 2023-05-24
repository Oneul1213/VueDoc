<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    />
  </div>
</template>

<script setup>
import BlogPost from './components/BlogPost.vue';
import { ref } from 'vue'

const posts = ref([
  { id: 1, title: 'Vue와 함께한 나의 여행' },
  { id: 2, title: 'Vue로 블로깅하기' },
  { id: 3, title: 'Vue가 재밌는 이유' },
])

const postFontSize = ref(1)
</script>

<style lang="scss" scoped>

</style>