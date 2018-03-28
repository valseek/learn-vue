<template>
    <div>
        <div class="example">
            <p>simple example</p>
            <input type="text" v-model="inputValue"/>
            <p>
                {{inputValue}}
            </p>
        </div>
        <div class="example">
            <p>change input</p>
            <input type="text" :value="inputValueNumber" @input="inputValueNumber = parseInt($event.target.value)"/>
            <p>{{inputValueNumber}}</p>

        </div>
    </div>

</template>

<script>
    export default {
        name: "inner-template-form-event",
        data: function () {
            return {
                inputValue: "",
                inputValueNumber:0,
            };
        }
    }
</script>

<style scoped>

</style>