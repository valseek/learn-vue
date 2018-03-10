<!--
文档地址 :  https://cn.vuejs.org/v2/guide/syntax.html
 -->

<template>
    <div>
        <h2>Guide Template : 模板语法</h2>
        <a href="https://cn.vuejs.org/v2/guide/syntax.html" target="_blank"> 官方中文文档 </a>
        <hr/>

        <!--文本-->
        <h3> 插值 </h3>
        <p> Message : {{ message }}</p>

        <hr/>

        <!--指令v-once，一次性插值  -->
        <p> 没有 v-once 指令 : {{ accumulator.value }}</p>
        <p v-once> 有 v-once 指令: {{ accumulator.value }}</p>
        <button v-on:click="accumulatorAdd">add</button>

        <hr/>

        <!--原始 HTML-->
        <h3>原始 HTML</h3>
        <p> 没有 v-html 指令 : {{ originHtml }} </p>
        <p>使用 v-html 指令 ：<span v-html="originHtml"></span></p>
        <p class="attention"> 你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。 </p>

        <hr/>

        <h3> 特性 </h3>
        <div class="explain">
            Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令 。 Mustache 指的双大括号插值的模板语言 ， 特性指的HTML 标签的属性值。
            也就是 {{errorMustacheContent}} 这种写法有问题
        </div>
        <p :id="vBindElementId"> 使用v-bind 指令给特性赋值</p>
        <button :disabled="vBindDisabled"> v-bind 给 布尔型赋值</button>

        <hr/>

        <!--JavaScript变量-->
        <h3> JavaScript 变量 </h3>
        <p> number 加 2 ： {{ number + 2}}</p>
        <p> is ok ? : {{ isOk ? "YES" : "NO"}}</p>
        <p> 将空格替换成 -  : {{ expressionMessage.split(' ').join('-')}} </p>

        <!--不是表达式的例子-->
        <p style="margin-top: 50px;"> 以下不是表达式 :  </p>
        <p v-pre > {{ var a = 1 }} </p>
        <p v-pre> {{ if (ok) { return message } }}</p>

        <div class="explain" > 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。</div>

        <hr/>

        <!--指令-->
        <h3>指令</h3>
        <div class="explain" >
            指令 (Directives) 是带有 v- 前缀的特殊属性。指令属性的值预期是单个 JavaScript 表达式.
            (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
        </div>
        <p v-if="canSeen" > 注意看 ， 将canSeen得值设为false ，这个标签就没有了</p>

        <hr/>

        <!--参数-->
        <h3> 参数 </h3>
        <p class="explain" >一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML 属性</p>
        <button v-on:click="addHrefA" > add a </button>
        <a :href="testHref"> 看这个标签的href属性的值 : {{testHref}}</a>

        <hr/>

        <!--修饰符-->
        <p class="explain" >
            修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
            例如，.stop 修饰符告诉 v-on 指令对于触发的事件调用 event.stopPropagation() .
            即阻止事件冒泡。
        </p>
        <div v-on:click="clickParent">
            <button v-on:click.stop="clickChildStop"> 有.stop </button>
            <button @click="clickChildNoStop"> 没有.stop </button>
        </div>

        <hr/>

        <!--缩写-->
        <h3> 缩写 </h3>
        <div class="explain" >
            <p>为了简单操作 ， Vue 给 v-bind  和 v-on 两个指令提供了缩写 , v-bind 为 : , v-on 为 @ 。</p>
            <p>这个没啥好说的 ， 上面的代码都有体现 </p>
        </div>


    </div>
</template>

<script>
    export default {
        name: "guide-template-syntax",
        /**
         * data 如果写成模板， data 必须为一个函数
         * 英文文档 :  https://vuejs.org/v2/api/#data
         * 中文文档 ： https://cn.vuejs.org/v2/api/index.html#data
         * @returns {{message: string}}
         */
        data: () => {
            return {

                // * 普通变量插值
                message: "this is a simple vue2 test!",

                /**
                 *  测试 v-once 指令
                 *  这个特性很奇怪，他不仅可以监听引用本身，还可以监听引用内部数据的变化
                 */
                accumulator: {value: 0},

                // 测试 HTML 渲染
                originHtml : "<h1> can this render to h1 tag ? </h1>",

                //  带有 html 语义的字符串
                errorMustacheContent:"<div id=\"{{elementId}}\"></div> ",

                // html 特性的绑定
                vBindElementId:"v-bind-id",
                vBindDisabled:true,

                //  使用 JavaScript 表达式
                number : 1,
                isOk : true,
                expressionMessage:"this is a expression message",

                // 指令
                canSeen:true,

                // 参数
                testHref:"#figureA-"
            }
        },

        methods: {
            accumulatorAdd: function (event) {
                this.accumulator.value++;
            },
            addHrefA:function(event){
                this.testHref+="a";
            },
            clickParent:function(event){
                alert("父 DIV");
            },
            clickChildStop:function(event){
                alert("子 DIV  有 .stop 修饰符")
            },
            clickChildNoStop:function(event){
                alert("子 DIV  没有 .stop 修饰符")
            }
        },

    }
</script>

<style scoped>

</style>