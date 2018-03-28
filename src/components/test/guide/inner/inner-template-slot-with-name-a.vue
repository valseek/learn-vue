<template>
    <h1>
        This is slot A and the value is : {{value}}
    </h1>
    
</template>

<script>
    export default {
        name: "inner-template-slot-with-name-a",
        props:['value']
    }
</script>

<style scoped>

</style>