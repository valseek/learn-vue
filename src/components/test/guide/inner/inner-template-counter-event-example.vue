<template>
        <button @click="addButton">{{val}}</button>
</template>

<script>
    export default {
        name: "inner-template-counter-event-example",
        data:function(){
            return {
                val:0
            };
        },

        methods:{
            addButton(event){
                this.val ++ ;
                this.$emit('incr');
            },
        }
    }
</script>

<style scoped>

</style>