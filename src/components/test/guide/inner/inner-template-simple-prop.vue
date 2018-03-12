<template>
    <div>
        外部的传入的值 : " {{message}} "
    </div>
    
</template>

<script>
    export default {
        name: "inner-template-simple-prop",
        props:['message'],
    }
</script>

<style scoped>

</style>