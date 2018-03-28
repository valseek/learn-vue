<!--中文文档地址 https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9-->

<template>
    <div>
        <h2>使用插槽分发内容</h2>
        <a href="https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9" target="_blank">中文文档地址</a>
        <hr/>

        <!--单个插槽-->
        <h3>单个插槽</h3>
        <middle-template-single-slot></middle-template-single-slot>

        <hr/>

        <!--具名插槽-->
        <h3>具名插槽</h3>
        <middle-template-slot-with-name></middle-template-slot-with-name>

        <!--作用域插槽-->
        <h3>作用域插槽</h3>









    </div>

</template>

<script>

    import MiddleTemplateSingleSlot from "./middle/middle-template-single-solt";
    import MiddleTemplateSlotWithName from "./middle/middle-template-slot-with-name";

    export default {
        components: {
            MiddleTemplateSlotWithName,
            MiddleTemplateSingleSlot},
        name: "guide-template-components-childs"
    }
</script>

<style scoped>

</style>