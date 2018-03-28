<template>

    <h1>
        This is slot B and the value is : {{value}}
    </h1>

</template>

<script>
    export default {
        name: "inner-template-slot-with-name-b",
        props:['value']
    }
</script>

<style scoped>

</style>