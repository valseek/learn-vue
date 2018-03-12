<template>
    <div>
        驼峰命名和横杠可以适配兼容哦 ！！ 外部写 outer-message , 内部属性是 outMessage  : {{outerMessage}}
    </div>
</template>

<script>
    export default {
        name: "inner-template-case-test",
        props:["outerMessage"]
    }
</script>

<style scoped>

</style>