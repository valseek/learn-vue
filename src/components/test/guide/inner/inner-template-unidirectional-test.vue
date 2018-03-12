<template>
    <div style="padding: 20px; margin: 20px; border: 1px solid #000000; -webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;">
        <h2>子组件</h2>
        <p class="info"> My name is {{name }} and I'am {{age}} now !!</p>
        <div>
            <label>name : </label><input v-model="name"/>
            <label>age: </label><input v-model="age"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inner-template-unidirectional-test",
        props:['name','age'],
    }
</script>

<style scoped>

</style>