<template>
    <div class="example">
         the value is : {{value}}
    </div>
</template>

<script>
    export default {
        name: "inner-template-brother-communication-b",
        props:['value','bus'],
        data:function(){
            let _self = this;
            this.bus.$on('add',function(num){
                _self.value = parseInt(_self.value) + num;
            });
        }
    }
</script>

<style scoped>

</style>