<template>
    <button @click="add">+{{addNum}}</button>
</template>

<script>
    export default {
        name: "inner-template-brother-communication-a",
        props:['bus','addNum'],
        methods:{
            add:function(){
                this.bus.$emit('add',parseInt(this.addNum))
            }
        }
    }
</script>

<style scoped>

</style>