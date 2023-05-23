<template>
    <div>
        <button @click="increment">{{ state.count }}</button>
        <div>
            {{ obj.nested.count }}<br>
            {{ obj.arr }}<br>
            <button @click="mutateDeeply">change nested</button>
        </div>
        <button @click="callSomeFunction(obj2.foo)">{{ obj2.foo }}</button>

        <button @click="incrementRef">{{ countRef }}</button>
    </div>
</template>

<script setup>
import { reactive, nextTick, ref } from 'vue'

const state = reactive({ count: 0 });
const obj = reactive({
    nested: { count: 0 },
    arr: ['foo', 'bar']
});

const count = ref(0);

console.log(count);
console.log(count.value);

console.log(++count.value);

const objectRef = ref({ count: 0 });
objectRef.value = { count: 1 };

const obj2 = {
    foo: ref(1),
    bar: ref(2)
}

const countRef = ref(0);

const countRef2 = ref(0);
const state2 = reactive({
    countRef2
});

console.log("----");
console.log(state2.countRef2);

state2.countRef2 = 1;
console.log(countRef2.value)

const otherCount = ref(2);
state2.countRef2 = otherCount;
console.log("!---");
console.log(state2.countRef2);
console.log(countRef2.value);


function increment() {
    state.count++;
    nextTick(() => {
        console.log(state.count);
    })
}

function mutateDeeply() {
    obj.nested.count++;
    obj.arr.push('baz' + obj.nested.count);
}

function callSomeFunction(foo) {
    console.log('foo: ' + foo.value);
    foo.value++;
    console.log('foo++: ' + foo.value);
}

function incrementRef() {
    countRef.value++;
}

</script>

<style lang="scss" scoped>

</style>