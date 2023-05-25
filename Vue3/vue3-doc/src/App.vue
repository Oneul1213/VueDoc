<template>
  <div>
    <CustomInput v-model="searchText" />
    <p>{{ searchText }}</p>
    <br />

    <MyComponent v-model:title="bookTitle" />
    <p>{{ bookTitle }}</p>
    <br/>

    <UserName
      v-model:first-name="first"
      v-model:last-name="last"
    />
    <p>{{ fullName }}</p>
    <br/>

    <MyComponent2 v-model.capitalize="myText"/>
    <p>{{ myText }}</p>

    <MyButton class="large" @click="click" />

    <CustomLayout id="custom-layout" @click="changeValue" />
  </div>
</template>

<script setup>
import CustomLayout from './components/CustomLayout.vue';
import MyButton from './components/MyButton.vue';
import MyComponent2 from './components/MyComponent2.vue';
import UserName from './components/UserName.vue';
import MyComponent from './components/MyComponent.vue';
import CustomInput from './components/CustomInput.vue';
import { ref, computed } from 'vue'


const searchText = ref('')
const bookTitle = ref('')
const first = ref('')
const last = ref('')
const myText = ref('')


const fullName = computed(() => first.value + ' ' + last.value)


function click(e) {
  console.log('hi')
}

function changeValue(e) {
  console.log('changeValue')
}
</script>

<style lang="scss" scoped>

</style>