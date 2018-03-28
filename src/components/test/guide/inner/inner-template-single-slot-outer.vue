<template>
    <div class="example">
        <h1> 这是h1  标题</h1>

        <slot>
            没有分发内容时显示
        </slot>

    </div>
</template>

<script>
    export default {
        name: "inner-template-single-slot-outer"
    }
</script>

<style scoped>

</style>