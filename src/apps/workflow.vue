<template>
    <div style="height: 100% ; width: 100%;" ref="outer-container">
        <h1> {{ title }} </h1>
        <guide-template-components-childs></guide-template-components-childs>
        <hr/>

    </div>
</template>

<script>
    import GuideTemplateSyntax from "../components/test/guide/guide-template-syntax.vue" ;
    import GuideTemplateComputed from "../components/test/guide/guide-template-computed";
    import GuideTemplateClassAndStyle from "../components/test/guide/guide-template-class-and-style";
    import GuideTemplateConditional from "../components/test/guide/guide-template-conditional";
    import GuideTemplateList from "../components/test/guide/guide-template-list";
    import GuideTemplateEvents from "../components/test/guide/guide-template-events";
    import GuideTemplateForms from "../components/test/guide/guide-template-forms";
    import GuideTemplateComponents from "../components/test/guide/guide-template-components";
    import TypePractice from "../components/tmp/type-practice";
    import GuideTemplateComponentsCustomEvent from "../components/test/guide/guide-template-components-custom-event";
    import GuideTemplateComponentsChilds from "../components/test/guide/guide-template-components-childs";

    export default {
        components: {
            GuideTemplateComponentsChilds,
            GuideTemplateComponentsCustomEvent,
            TypePractice,
            GuideTemplateComponents,
            GuideTemplateForms,
            GuideTemplateEvents,
            GuideTemplateList,
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