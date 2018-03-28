<template>
    <div>
        <inner-template-brother-communication-a :bus="bus" addNum="4" ></inner-template-brother-communication-a>
        <inner-template-brother-communication-a :bus="bus" addNum="3" ></inner-template-brother-communication-a>
        <inner-template-brother-communication-b :bus="bus" value='4'></inner-template-brother-communication-b>

    </div>

</template>

<script>
    import Vue from 'vue'
    import InnerTemplateBrotherCommunicationA from "../inner/inner-template-brother-communication-a";
    import InnerTemplateBrotherCommunicationB from "../inner/inner-template-brother-communication-b";

    export default {
        components: {
            InnerTemplateBrotherCommunicationB,
            InnerTemplateBrotherCommunicationA},
        name: "middle-template-brother-communication",
        data:function(){
            return {
                bus:new Vue(),
            };
        },

    }
</script>

<style scoped>

</style>