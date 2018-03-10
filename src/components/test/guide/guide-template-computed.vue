<!--中文文档地址 ： https://cn.vuejs.org/v2/guide/computed.html-->
<template>
    <div>
        <h2> 计算属性和侦听器 </h2>
        <a href="https://cn.vuejs.org/v2/guide/computed.html" target="_blank"> 中文文档地址 </a>
        <hr/>

        <!--计算属性-->
        <h3> 计算属性 </h3>
        <p> 原来的属性的值 message : {{message}}</p>
        <p> 计算属性的值 reversedMessage : {{reversedMessage}}</p>
        <div class="explain">
            <p> 本例中 将this的值赋给了window.vm 所以你可以测试一下的说明：</p>
            <p>你可以打开浏览器的控制台，自行修改例子中的 vm。vm.reversedMessage 的值始终取决于 vm.message 的值。</p>
            <p>你可以像绑定普通属性一样在模板中绑定计算属性。</p>
            <p>Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。</p>
            <p>而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。</p>
        </div>

        <hr/>

        <!--计算属性缓存 vs 方法-->
        <h3>计算属性缓存 vs 方法</h3>
        <div class="explain">
            <p>计算属性会缓存值但是方法不会,用控制台改变vm.message 的值来看计算属性和方法的不同. </p>
            <p>你可以看到，每次改变message得值在控制台打印了三次 in method reversed message function ! ， 但是只打印了一次 in computed reversed
                message function !</p>
        </div>
        <p> 计算属性的值 : {{reversedMessage}}</p>
        <p> 计算属性的值 : {{reversedMessage}}</p>
        <p> 计算属性的值 : {{reversedMessage}}</p>
        <p> 方法的出来的值 : {{methodReversedMessage()}}</p>
        <p> 方法的出来的值 : {{methodReversedMessage()}}</p>
        <p> 方法的出来的值 : {{methodReversedMessage()}}</p>

        <hr/>

        <!--计算属性 vs 侦听属性-->
        <h3>计算属性 vs 侦听属性</h3>
        <p> watch 方式 full name a : {{fullNameA}}</p>
        <p> watch 方式 full name b : {{fullNameB}}</p>
        <p class="explain">用控制台改变vm.firstNameA vm.firstNameB vm.lastNameA vm.lastNameB 的值来看计算属性和watch的效果. </p>
        <p class="explain">有趣的是 我们发现每次改变data里面的值，都会打印三次 in method reversed message function ! ， 说明每次改变都会导致component
            重新渲染一遍</p>

        <hr/>

        <!--计算属性的 setter-->
        <h3>计算属性的 setter</h3>
        <p> 查看设置get 和 set 后的值 ： {{getSetNum}}</p>
        <p class="explain"> 通过在控制台改变 vm.getSetNum 的值可以查看上面显示的值为设置的值得两倍+1,因为set 方法将其加倍，get方法将其加一 </p>

        <hr/>

        <!--侦听器-->
        <h3>侦听器</h3>

        <p>
            Ask a yes/no question:
            <input v-model="question">
        </p>
        <p>{{ answer }}</p>
        <p class="explain" >
            原谅我无耻的抄了一个例子 。。。。
            虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
        </p>


    </div>
</template>

<script>
    import _ from 'lodash';
    import axios from 'axios';

    export default {
        name: "guide-template-computed",
        data: function () {
            return {
                // 测试计算属性 和方法
                message: "hello word xlz",
                // 测试 计算属性 和 watch
                firstNameA: "valseek",
                lastNameA: "zuo",
                fullNameA: "valseek zuo",
                firstNameB: "valseek",
                lastNameB: "zuo",
                // 测试计算属性的getter 和setter 方法
                sgNum: 1,
                // 侦听器
                question: '',
                answer: 'I cannot give you an answer until you ask a question!',
            }
        },
        methods: {
            methodReversedMessage: function () {
                console.log("in method reversed message function !")
                return this.message.split(' ').reverse().join(' ');
            },
            // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
            // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
            // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
            // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
            // 请参考：https://lodash.com/docs#debounce
            getAnswer: _.debounce(
                function () {
                    if (this.question.indexOf('?') === -1) {
                        this.answer = 'Questions usually contain a question mark. ;-)'
                        return
                    }
                    this.answer = 'Thinking...'
                    var vm = this
                    axios.get('https://yesno.wtf/api')
                        .then(function (response) {
                            vm.answer = _.capitalize(response.data.answer)
                        })
                        .catch(function (error) {
                            vm.answer = 'Error! Could not reach the API. ' + error
                        })
                },
                // 这是我们为判定用户停止输入等待的毫秒数
                500
            )
        },
        computed: {
            reversedMessage: function () {
                console.log("in computed reversed message function !")
                return this.message.split(' ').reverse().join(' ');
            },
            fullNameB: function () {
                return this.firstNameB + " " + this.lastNameB;
            },
            getSetNum: {
                set: function (newValue) {
                    // 每次设置都是sgNum的两倍
                    this.sgNum = newValue * 2;
                },
                get: function () {
                    // 每次get 到的都是sgNum + 1
                    return this.sgNum + 1;
                }
            }
        },
        watch: {
            firstNameA: function (val) {
                this.fullNameA = val + " " + this.lastNameA;
            },
            lastNameA: function (val) {
                this.fullNameA = this.firstNameA + " " + val;
            },
            // 如果 `question` 发生改变，这个函数就会运行
            question: function (newQuestion, oldQuestion) {
                this.answer = 'Waiting for you to stop typing...'
                this.getAnswer()
            }
        },
        beforeCreate: function () {
            window.vm = this;
        }
    }
</script>

<style scoped>

</style>