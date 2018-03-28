<template>
    <button>
        Inner Button and the count is {{count}}
    </button>
</template>

<script>
    export default {
        name: "inner-template-native-event",
        props:['count']
    }
</script>

<style scoped>

</style>