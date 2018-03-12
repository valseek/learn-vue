<template>
    <div>
        <ul>
            <li> Name : {{name}}</li>
            <li> Age : {{age}}</li>
            <li> Address : {{address}}</li>
            <li> Phone : {{phone}}</li>
            <li> Job : {{job}}</li>
            <li> Ip : {{ip}}</li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "inner-template-props-validate",
        props: {
            name: String,
            age: Number,
            job: String,
            phone: [String, Number],
            address: {
                type: String,
                default: function () {
                    return "上海北翟路790号和颐酒店";
                }
            },
            ip: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>