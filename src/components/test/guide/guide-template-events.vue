<!--中文文档地址 https://cn.vuejs.org/v2/guide/events.html-->

<template>
    <div>
        <h2>事件处理</h2>
        <a href="https://cn.vuejs.org/v2/guide/events.html" target="_blank">中文文档地址</a>
        <hr/>

        <!--监听事件-->
        <h3>监听事件</h3>
        <p class="refer">可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。</p>
        <div>
            <button v-on:click="accumulator +=1">Add one</button>
            <p>点击按钮 ， accumulator 的值为 ： {{accumulator}} , 每次累加</p>
        </div>
        <hr/>

        <!--事件处理方法-->
        <h3>事件处理方法</h3>
        <div>
            <button name="alertHelloButton" v-on:click="alertHello">alter hello</button>
            <p> 点击按钮，accumulator 值 +1 ， accumulator : {{accumulator}}</p>
        </div>

        <hr/>

        <!--内联处理器中的方法-->
        <h3>内联处理器中的方法</h3>
        <div id="gt-events-example-3">
            <button v-on:click="say('hi !')">Say hi</button>
            <button v-on:click="say('what ?')">Say what</button>
        </div>

        <p class="refer">有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法：</p>
        <button name="warnButton" v-on:click="warn('hello word ' , $event)">warn</button>

        <hr/>

        <!--事件修饰符-->
        <h3>事件修饰符</h3>

        <p class="info">.stop :  阻止时间继续传播</p>
        <div v-on:click="alert('父级div捕获到点击事件')">
            <button v-on:click="alert('没有添加.stop修饰')">没有添加.stop修饰</button>
            <button v-on:click.stop="alert('添加.stop修饰')">添加.stop修饰</button>
        </div>

        <p class="explain" > 值得注意的是 ，在v-on:click 指令里面写表达式不能访问到原生的alert 方法， 所以我将alert方法包装了一层</p>

        <p class="info">.prevent : 阻止浏览器的默认行为 </p>
        <a target="_blank" href="#" v-on:click="alert('没有添加.prevent修饰')" style="margin-right:50px;">没有添加.prevent修饰</a>
        <a target="_blank" href="#" v-on:click.prevent="alert('添加.prevent修饰')">添加.prevent修饰</a>

        <p class="info">.capture : 添加事件监听器时使用事件捕获模式 , 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 </p>
        <div v-on:click.capture="alert('capture event')" >
            <button v-on:click="alert('button click')"> capture button </button>
        </div>


        <p class="explain">如果没有 .capture ，则按照时间冒泡来处理 </p>
        <div v-on:click="alert('bubble event')" >
            <button v-on:click="alert('button click')"> bubble button </button>
        </div>

        <p class="explain" > 如果不清晰，可以去看一下事件的捕获与冒泡 </p>

        <p class="info">.self : 只当在 event.target 是当前元素自身时触发处理函数,即事件不是从内部元素触发的</p>
        <button v-on:click.once="alert('this alert message only diplay once')"> once event </button>

        <p class="refer" > Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符。</p>
        <p class="explain" > passive: Boolean，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。</p>
        <button v-on:click.passive="testPassive"> test passive</button>

        <hr/>

        <!--按键修饰符-->
        <h3>按键修饰符</h3>
        <p class="info">  input 响应键盘事件 </p>
        <div>
            <label>keyup 修饰符 13 : </label>
            <input v-on:keyup.13="alert('keyup 13 !')"/>
        </div>

        <div>
            <label>keyup 修饰符 enter : </label>
            <input v-on:keyup.enter="alert('keyup enter !')"/>
        </div>

        <div>
            <label>keyup 修饰符 tab : </label>
            <input v-on:keyup.tab="alert('keyup tab !')"/>
        </div>

        <div>
            <label>keyup 修饰符 delete : </label>
            <input v-on:keyup.delete="alert('keyup delete !')"/>
        </div>

        <div>
            <label>keyup 修饰符 esc : </label>
            <input v-on:keyup.esc="alert('keyup esc !')"/>
        </div>

        <div>
            <label>keyup 修饰符 space : </label>
            <input v-on:keyup.space="alert('keyup space !')"/>
        </div>

        <div>
            <label>keyup 修饰符 up : </label>
            <input v-on:keyup.up="alert('keyup up !')"/>
        </div>

        <div>
            <label>keyup 修饰符 down : </label>
            <input v-on:keyup.down="alert('keyup down!')"/>
        </div>

        <div>
            <label>keyup 修饰符 left : </label>
            <input v-on:keyup.left="alert('keyup left !')"/>
        </div>

        <div>
            <label>keyup 修饰符 right : </label>
            <input v-on:keyup.right="alert('keyup right !')"/>
        </div>

        <div>
            <label>keyup 修饰符 page-down : </label>
            <input v-on:keyup.page-down="alert('keyup page-down !')"/>
        </div>

        <div>
            <label>keyup 修饰符 page-up : </label>
            <input v-on:keyup.page-up="alert('keyup page-up !')"/>
        </div>

        <!--系统修饰键-->
        <h3>系统修饰键</h3>
        <p class="info" > 同时按下ctrl + a 测试</p>
        <div>
            <label>keyup 修饰符 ctrl  : </label>
            <input v-on:keyup.ctrl="alert('keyup ctrl !')"/>
        </div>

        <div>
            <label>keyup 修饰符 alt : </label>
            <input v-on:keyup.alt="alert('keyup alt !')"/>
        </div>

        <div>
            <label>keyup 修饰符 shift : </label>
            <input v-on:keyup.shift="alert('keyup shift !')"/>
        </div>

        <div>
            <label>keyup 修饰符 meta : </label>
            <input v-on:keyup.meta="alert('keyup meta !')"/>
        </div>

        <hr/>

        <!--.exact 修饰符-->
        <h3>.exact 修饰符</h3>

        <p class="info" > 没有用 .exact 修饰符 , 同时按下 shift 和 ctrl 可以触发事件 </p>
        <div>
            <input v-on:keyup.shift="alert('no exact !')"/>
        </div>

        <p class="info" > 用 .exact 修饰符 , 同时按下 shift 和 ctrl 不能触发事件 </p>
        <div>
            <input v-on:keyup.shift.exact ="alert('no exact !')"/>
        </div>

        <hr/>

        <!--鼠标按钮修饰符-->
        <h3>鼠标按钮修饰符</h3>
        <div>
            <button @click.left="alert('left click')"> left click</button>
        </div>

        <div>
            <button @click.right="alert('right click')"> right click</button>
        </div>

        <div>
            <button @click.middle="alert('left middle')"> left middle</button>
        </div>

        <hr/>
        <hr/>


    </div>
    
</template>

<script>
    export default {
        name: "guide-template-events",
        data:function(){
            return {
                accumulator:0,
            }
        },
        methods:{
            alert:function(message){
                alert(message);
            },
            alertHello:function(event){
                alert("hello , it's me , I am " + event.target.getAttribute('name'));
                this.accumulator++;
            },
            say:function(message){
                alert(message);
            },
            warn:function(message,event){
                alert(message + " " + event.target.getAttribute("name"));
            },
            captureTestMethod:function(event){
                console.log(event)
            },
            testPassive:function(event){
                alert("test passive event");
                event.preventDefault();
            }
        }
    }
</script>

<style scoped>

</style>