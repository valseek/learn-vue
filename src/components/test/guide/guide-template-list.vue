<!--中文文档地址 ：https://cn.vuejs.org/v2/guide/list.html-->

<template>
    <div>
        <h2>列表渲染</h2>
        <a href="https://cn.vuejs.org/v2/guide/list.html" target="_blank">中文文档地址</a>

        <hr/>

        <!--用 v-for 把一个数组对应为一组元素-->
        <h3>用 v-for 把一个数组对应为一组元素</h3>
        <p class="info"> 一个简单的数组 例子</p>
        <ul>
            <li v-for="item in baseArr">{{item.name}}</li>
        </ul>
        <p class="explain">
            可以看到 ，当数组里面对象访问不到的值为空 ,
            再者，如果item.name 改为 item.name.toUpperCase() 会报错
        </p>

        <p class="refer"> 在 v-for 块中，我们拥有对父作用域属性的完全访问权限。v-for 还支持一个可选的第二个参数为当前项的索引。</p>
        <ul>
            <li v-for="(item,index) in baseArr">{{index}} . {{ organization.toUpperCase()}}---{{item.name}}</li>
        </ul>

        <hr/>

        <!--一个对象的 v-for-->
        <h3>一个对象的 v-for</h3>
        <p class="info"> 一个简单的例子 </p>
        <ul>
            <li v-for="item in baseObj">{{item.name}}</li>
        </ul>

        <p class="info">你也可以提供第二个的参数为键名：</p>
        <ul>
            <li v-for="(value, key) in baseObj">{{key}}:{{value.age}}</li>
        </ul>

        <p class="info">第三个参数为索引：</p>
        <ul>
            <li v-for="(value, key , index) in baseObj">{{index+1}} . {{key}}:{{value.age}}</li>
        </ul>

        <hr/>

        <!--key-->
        <h3>key</h3>
        <p class="info"> 先看没有key的情况</p>
        <button @click="keyFilter=!keyFilter"> filter</button>
        <ul>
            <li
                    v-for="(value, key , index) in baseObj"
                    v-if="!(keyFilter && index % 2 === 0)"
            >
                {{index+1}} . {{key}}:{{value.age}} email: <input type="email"/>
            </li>
        </ul>

        <p class="info"> 再看有key的情况</p>
        <ul>
            <li
                    v-for="(value, key , index) in baseObj"
                    v-if="!(keyFilter && index % 2 === 0)"
                    :key="'key-filter-'+index"
            >
                {{index+1}} . {{key}}:{{value.age}} email: <input type="email"/>
            </li>
        </ul>

        <hr/>

        <!--数组更新检测-->
        <h2>数组更新检测</h2>

        <h3>变异方法</h3>
        <button @click="changeArr.push(changeArr.length+1)">Add</button>
        <button @click="changeArr.pop()">Dec</button>
        <button @click="changeArr.unshift(changeArr.length+1)">unshift</button>
        <button @click="changeArr.shift()">shift</button>
        <button @click="changeArr.reverse()">Reverse</button>
        <button @click="changeArr.splice(parseInt(changeArr.length/2),0,changeArr.length+1)">Splice</button>
        <button @click="changeArr.sort()">Sort</button>
        <div><span v-for="item in changeArr"> {{item}} </span></div>

        <hr/>

        <!--替换数组-->
        <h3>替换数组</h3>
        <div>
            <button @click="mutationArr.push(mutationArr.length+1)">Add</button>
            <button @click="mutationArr.pop()">Dec</button>
            <button @click="mutationArr.unshift(mutationArr.length+1)">unshift</button>
            <button @click="mutationArr.shift()">shift</button>
            <button @click="mutationArr.reverse()">Reverse</button>
            <button @click="mutationArr.splice(parseInt(mutationArr.length/2),0,mutationArr.length+1)">Splice</button>
            <button @click="mutationArr.sort()">Sort</button>
        </div>
        <div>
            <button @click="mutationArr = mutationArr.filter(function(item){return item%2 })">filter</button>
        </div>
        <div><span v-for="item in mutationArr"> {{item}} </span></div>

        <hr/>

        <!--注意事项-->
        <h3>注意事项</h3>
        <p class="explain"> 用 [] 操作 设置数组 </p>
        <button @click="setArr[setArr.length] = setArr.length+1">[] 设置</button>
        <button @click="setArr.length = setArr.length+1">[] 设置 length</button>
        <button @click="Vue.set(setArr,setArr.length,setArr.length+1)">Vue.set</button>
        <button @click="setArr.splice(setArr.length,0,setArr.length+1)">Splice</button>
        <button @click="setArr.splice(setArr.length+1,0,undefined)">Splice length + 1</button>
        <div><span v-for="item in setArr"> {{item}} ,</span></div>

        <hr/>

        <!--对象更改检测注意事项-->
        <h3>对象更改检测注意事项</h3>
        <ul>
            <li> testDynamicValue : {{testDynamicValue}} </li>
            <li> dynamicObject.test : {{dynamicObject.test}}</li>
        </ul>

        <p class="explain"> 有意思的是 ， 当dynamicObject 为空属性的时候，并不会生效，应该是Vue作了优化 ？</p>

        <hr/>

        <!--显示过滤/排序结果-->
        <h3>显示过滤/排序结果</h3>
        <p class="info" > 原数组</p>
        <div><span v-for="item in filterArr"> {{item}} ,</span></div>
        <p class="info" > 计算属性过滤</p>
        <div><span v-for="item in filterEvenArr"> {{item}} ,</span></div>
        <p class="info" > 方法过滤</p>
        <div><span v-for="item in methodFilterOdd(filterArr)"> {{item}} ,</span></div>

        <hr/>

        <!--一段取值范围的 v-for-->
        <h3>一段取值范围的 v-for</h3>
        <div><span v-for="item in 100"> {{item}} ,</span></div>

        <hr/>

        <!--v-for on a <template>-->
        <h3>v-for on a &lt;template&gt;</h3>
        <template v-for="item in 10">
            <span>{{item}}:</span>
            <input type="checkbox"/>
        </template>

        <hr/>

        <!--v-for with v-if-->
        <h3>v-for with v-if</h3>
        <p class="info" > 用v-if指令 过滤出100 以内7的倍数</p>
        <div><span v-for="item in 100" v-if="item % 7 === 0"> {{item}} ,</span></div>

        <p class="info"> v-for 的 优先级 要大于 v-if  所以，如果想控制v-for的加载，只有在外层套一个模板</p>
        <button @click="forIfValue = !forIfValue">toggle</button>
        <template v-if="forIfValue">
            <div><span v-for="item in 100" v-if="item % 7 === 0"> {{item}} ,</span></div>
        </template>

        <hr/>

        <!--一个组件的 v-for-->
        <h3>一个组件的 v-for</h3>
        <p class="explain" > 这部分内容 放到组件里面讲 ， </p>



    </div>

</template>

<script>
    import Vue from 'vue';
    export default {
        name: "guide-template-list",
        data: function () {
            return {
                Vue:Vue,
                organization: "lck",
                keyFilter: false,
                baseArr: [
                    {name: "faker"},
                    {name: "mata"},
                    {name: "pawn"},
                    {name: "wolf"},
                    {name: "bang"},
                    {age: 18}
                ],
                baseObj: {
                    "faker": {name: "faker", age: 19},
                    "mata": {name: "mata", age: 23},
                    "pawn": {name: "pawn", age: 18},
                    "wolf": {name: "bang", age: 24},
                    "guest": {age: 100}
                },
                changeArr: [1],
                mutationArr: [1],
                setArr:[1],
                dynamicObject:{origin:"aaa"},
                filterArr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                filterNum:30,
                forIfValue:true,
            }
        },

        methods:{
            methodFilterOdd:function(numbers){
                return numbers.filter(function(item){
                    return item % 2 === 1;
                });
            }
        },

        computed:{
            filterEvenArr:function(){
                return this.filterArr.filter(function(item){
                    return item % 2 === 0;
                });
            }
        },

        beforeCreate:function(){
            window.gtList=this
        }
    }
</script>

<style scoped>

</style>