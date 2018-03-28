<template>
    <div class="example">
        <input type="checkbox" :checked="isCheck" @change="isCheck = !isCheck"/>
        <inner-template-custom-model v-model="isCheck"></inner-template-custom-model>
        <p> Outer state  : {{isCheck}}</p>
    </div>
</template>

<script>
    import InnerTemplateCustomModel from "../inner/inner-template-custom-model";

    export default {
        components: {InnerTemplateCustomModel},
        name: "middle-template-custom-model",
        data:function(){
            return {
                isCheck:true
            }
        },
    }
</script>

<style scoped>

</style>