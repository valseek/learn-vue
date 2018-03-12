<template>
    <div>
        <p>Hi ! I am {{ name }} and I'm {{age}} now.</p>
    </div>
</template>

<script>
    export default {
        name: "inner-template-bind-object",
        props:['name','age'],
    }
</script>

<style scoped>

</style>