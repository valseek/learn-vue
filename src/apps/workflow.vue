<template>
    <div style="height: 100% ; width: 100%;" ref="outer-container">
        <h1> {{ title }} </h1>
        <guide-template-conditional></guide-template-conditional>
    </div>
</template>

<script>
    import GuideTemplateSyntax from "../components/test/guide/guide-template-syntax.vue" ;
    import GuideTemplateComputed from "../components/test/guide/guide-template-computed";
    import GuideTemplateClassAndStyle from "../components/test/guide/guide-template-class-and-style";
    import GuideTemplateConditional from "../components/test/guide/guide-template-conditional";

    export default {
        components: {
            GuideTemplateConditional,
            GuideTemplateClassAndStyle,
            GuideTemplateComputed,
            GuideTemplateSyntax
        },
        name: "workflow",
        el: "#vue-app",
        data: function () {
            return {
                title: "Vue Learn Test ",
            }
        },
    }
</script>

<style scoped>

</style>