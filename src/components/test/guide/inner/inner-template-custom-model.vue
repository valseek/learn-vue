<template>
    <div class="example">
        <input type="checkbox" :checked="check"/>
    </div>
</template>

<script>
    export default {
        name: "inner-template-custom-model",
        model:{
            prop:"check",
            event:"change"
        },
        props:['check'],
        data:function(){
            return {
                isCheck:true
            }
        },
    }
</script>

<style scoped>

</style>