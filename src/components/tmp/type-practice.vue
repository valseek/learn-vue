<template>

    <div>
        <div style="padding: 20px; margin: 20px; background: #ffffff;-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;font-size: 26px;-ms-word-wrap: break-word;word-wrap: break-word;">
            <template v-for="char in alreadyContent">
                <span>{{char.value}}</span>
                <span v-if="char.result === 0" class="red-text" v-html="'('+char.type+')'"></span>
            </template>
            <template v-for="char in alreadyChars">
                <span>{{char.value}}</span>
                <span v-if="char.result === 0" class="red-text" v-html="'('+char.type+')'"></span>
            </template>
        </div>

        <div style="padding: 20px; margin: 20px; background: #7D9EC0;-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;font-size: 36px;">
            <div style="color: #A52A2A;">待输入:</div>
            <div style="text-align: center; width: 100%;">
                <template v-for="char in alreadyChars">
                    <span>{{char.value}}</span>
                    <span v-if="char.result === 0" class="red-text" v-html="'('+char.type+')'"></span>
                </template>
                <span class="current-char" v-html="thenChar"></span>
                <span v-for="char in thenChars" v-html="char"></span>
            </div>
        </div>

        <div style="padding: 20px; margin: 20px; background: #EDEDED;-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;font-size: 36px;">
            <input ref="selfInput" @input="typeKeyboard" @keydown.delete="backspaceInput" v-model="typeChar" autofocus
                   style="font-size: 36px;width:100%;text-align: center;"/>
        </div>

    </div>


</template>

<script>
    export default {
        name: "type-practice",
        data: function () {
            return {
                typeChar: "",
                thenChar: "",
                thenChars: [],
                alreadyContent: [],
                alreadyChars: [],
                contentChars: [],
                inputFocus:true
            }
        },

        methods: {
            backspaceInput: function () {
                if (this.alreadyChars.length === 0) {
                    return;
                }
                this.thenChars.unshift(this.thenChar);
                this.thenChars.pop();
                if (this.alreadyContent.length > 0) {
                    this.alreadyChars.unshift(this.alreadyContent.pop())
                }
                this.thenChar = this.alreadyChars.pop().value;
            },
            typeKeyboard: function (event) {
                if (event.data == null) {
                    this.typeChar = "";
                    return false;
                }
                let res = null;
                if (event.data === this.thenChar ||
                    (event.data === " " && this.thenChar === "&nbsp;")
                ) {
                    res = {
                        "value": this.thenChar,
                        "type": this.thenChar,
                        "result": 1
                    };

                } else {
                    res = {
                        "type": event.data,
                        "value": this.thenChar,
                        "result": 0
                    };
                }
                this.contentChars.push(res)
                this.alreadyChars.push(res);
                while (this.alreadyChars.length > 5) {
                    this.alreadyContent.push(this.alreadyChars.shift());

                }
                this.thenChar = this.thenChars.shift();
                this.thenChars.push(this.getNextChars(1)[0]);
                this.typeChar = "";
            },
            getNextChars(length) {
                let count = length;
                 let res = [];
                while (count > 0) {
                    let charNum = Math.random() * 128;
                    charNum = parseInt(charNum);
                    if (charNum < 32 || charNum >= 127) {
                        continue;
                    }
                    count--;
                    let char = String.fromCharCode(charNum)
                    if(char === " "){
                        char = "&nbsp;";
                    }
                    res.push(char);
                }
                return res;
            }
        },
        mounted: function () {
            this.thenChars = this.getNextChars(5);
            this.thenChar = this.getNextChars(1)[0];
            let self = this;
            setInterval(function(){
                self.$refs.selfInput.focus();
            },400);

        }


    }
</script>

<style scoped>

    .red-text {
        color: #CD2626;
    }

    .black-text {
        color: #000000;
    }

    .current-char {
        color: #A52A2A;

        padding: 5px;
        margin: 5px;
        border: 2px solid #444444;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;

    }

    span {
        font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Courier New", monospace;
    }

</style>