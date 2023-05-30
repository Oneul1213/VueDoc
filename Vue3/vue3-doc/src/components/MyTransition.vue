<template>
    <Transition
        name="my-transition"
        @enter="onEnter"
        @leave="onLeave">
        <slot></slot>
    </Transition>
</template>

<script setup>
function onEnter(e) {

}

function onLeave(e) {

}
</script>

<style>

</style>