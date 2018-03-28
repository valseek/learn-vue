<template>
    <div>
        <input @change="updateSyncValue" v-model="syncValue"/>
    </div>
</template>

<script>
    export default {
        name: "inner-template-decorate-sync",
        props:['syncValue'],
        methods:{
            updateSyncValue:function(){
                this.$emit('update:syncValue',this.syncValue)
            }
        }
    }
</script>

<style scoped>

</style>