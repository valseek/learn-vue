<template>
    <div>

        <inner-template-decorate-sync :syncValue.sync="innerInput"></inner-template-decorate-sync>
        <p>Outer value is : {{innerInput}}</p>
        <p class="explain">
            这个console 还是会报错，所以 其实并不推荐这么用
        </p>

    </div>

</template>

<script>
    import InnerTemplateDecorateSync from "../inner/inner-template-decorate-sync";

    export default {
        components: {InnerTemplateDecorateSync},
        name: "middle-template-sync-event",
        data:function(){
            return {
                innerInput:"",
            };
        }
    }
</script>

<style scoped>

</style>