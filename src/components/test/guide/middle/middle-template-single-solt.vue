<template>
    <inner-template-single-slot-outer>
        <inner-template-single-slot-inner></inner-template-single-slot-inner>
        <inner-template-single-slot-inner></inner-template-single-slot-inner>
        <inner-template-single-slot-inner></inner-template-single-slot-inner>
    </inner-template-single-slot-outer>

</template>

<script>
    import InnerTemplateSingleSlotOuter from "../inner/inner-template-single-slot-outer";
    import InnerTemplateSingleSlotInner from "../inner/inner-template-single-slot-inner";

    export default {
        components: {
            InnerTemplateSingleSlotInner,
            InnerTemplateSingleSlotOuter},
        name: "middle-template-single-slot"
    }
</script>

<style scoped>

</style>