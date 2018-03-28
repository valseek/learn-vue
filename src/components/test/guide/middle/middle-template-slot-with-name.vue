<template>

    <inner-template-slot-with-name-container>
        <inner-template-slot-with-name-a slot="a" value="0"></inner-template-slot-with-name-a>
        <inner-template-slot-with-name-a slot="b" value="rwlkj"></inner-template-slot-with-name-a>
        <inner-template-slot-with-name-a slot="a" value="1"></inner-template-slot-with-name-a>
        <inner-template-slot-with-name-a slot="e"></inner-template-slot-with-name-a>
    </inner-template-slot-with-name-container>
    
</template>

<script>
    import InnerTemplateSlotWithNameContainer from "../inner/inner-template-slot-with-name-container";
    import InnerTemplateSingleSlotOuter from "../inner/inner-template-single-slot-outer";
    import InnerTemplateSlotWithNameA from "../inner/inner-template-slot-with-name-a";

    export default {
        components: {
            InnerTemplateSlotWithNameA,
            InnerTemplateSlotWithNameContainer},
        name: "middle-template-slot-with-name"
    }
</script>

<style scoped>

</style>