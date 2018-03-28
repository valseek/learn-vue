<template>
    <div>
        <span>{{label}}</span>
        <button @click="deleteLabel">Delete</button>
    </div>
</template>

<script>
    export default {
        name: "inner-template-todo-list-label",
        props:["index","label"],
        methods:{
            deleteLabel:function(){
                this.$emit("deleteLabel",{index:this.index})
            }
        }
    }
</script>

<style scoped>

</style>