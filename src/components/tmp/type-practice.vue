<template>

    <div>
        <div style="padding: 20px; margin: 20px; background: #ffffff;-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;font-size: 36px;-ms-word-wrap: break-word;word-wrap: break-word;">
            ajfkldsjfklajsdflkdjsakfljsadkfljdskljfklsadjflksadjdflkjsdlakfjdskljfdklsajfdklsajfklsdjfklsdj
        </div>

        <div style="padding: 20px; margin: 20px; background: #7D9EC0;-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;font-size: 36px;">
            <div style="color: #A52A2A;width: 10%;">待输入:</div>
            <div style="text-align: center; width: 100%;">test</div>
        </div>

        <div style="padding: 20px; margin: 20px; background: #EDEDED;-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;font-size: 36px;">
            <input @input="typeKeyboard" v-model="typeChar" autofocus style="font-size: 36px;width:100%;text-align: center;"/>
        </div>

    </div>

    
</template>

<script>
    export default {
        name: "type-practice",
        data:function(){
            return {
                typeChar:"",
                thenChars:"",
                alreadyChars:[]
            }
        },

        methods:{
            typeKeyboard:function(event){
                console.log(event)
            },
            getNextChar(){
                let char = Math.random()*128;
            }
        },
        beforeCreate:function () {

            this.thenChars =
        }


    }
</script>

<style scoped>


</style>