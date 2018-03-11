中文文档地址 https://cn.vuejs.org/v2/guide/conditional.html

<template>
    <div>
        <h2> 条件渲染 </h2>
        <a href="https://cn.vuejs.org/v2/guide/conditional.html" target="_blank"> 中文文档地址 </a>
        <hr/>

        <p class="explain"> vue 对象已经赋值给window.gtConditional ， 可在控制台改变值查看变化 </p>

        <!--指令 v-if 的使用-->
        <h3> v-if </h3>
        <p v-if="baseIf"> baseIf 为true ， 可以显示</p>
        <p v-else> baseIf 为 false ， 可以显示</p>

        <hr/>

        <!--在 <template> 元素上使用 v-if 条件渲染分组-->
        <h3>在 &lt;template&gt; 元素上使用 v-if 条件渲染分组</h3>

        <template v-if="showTemplate">
            <div>只是一个div 标签，在template 中，如果 showTemplate 属性为true ， 才可见</div>
            <p>只是一个p 标签，在template 中，如果 showTemplate 属性为true ， 才可见</p>
            <a href="#">只是一个a 标签，在template 中，如果 showTemplate 属性为true ， 才可见</a>
        </template>

        <hr/>

        <!--指令 v-else v-else-if 的使用-->
        <h3> v-else v-else-if </h3>

        <div v-if="elifValue ===  1">当 elifValue的值为1 这个div 标签会显示</div>
        <div v-else-if="elifValue === 2"> elifValue 的值为2 ， 这个div 标签会显示</div>
        <div v-else> elifValue 的值不为1或者2时，这个标签会显示</div>

        <hr/>

        <!--用 key 管理可复用的元素-->
        <h3> 用 key 管理可复用的元素 </h3>


        <p class="info"> 用input来做测试，当你点击toggle，input的值不会变化 </p>

        <button @click="toggleIfInputType">toggle</button>
        <template v-if="ifInputName">
            <label> ifInputName 为 true </label>
            <input type="text" name="name" placeholder="name"/>
        </template>
        <template v-else>
            <label> ifInputName 为 false </label>
            <input type="email" name="email" placeholder="email"/>
        </template>

        <p class="info"> 如果你想 点击 toggle 的时候 ， 改变value ， 有两种办法 </p>
        <p class="info"> 1、官方推荐，使用key ，这个时候会产生两个input 标签</p>

        <button @click="toggleIfInputTypeWithKey">toggle</button>
        <template v-if="ifInputNameWithKey">
            <label> ifInputName 为 true </label>
            <input type="text" name="name" :key="'input-name'" placeholder="name"/>
        </template>
        <template v-else>
            <label> ifInputName 为 false </label>
            <input type="email" name="email" :key="'input-email'" placeholder="email"/>
        </template>

        <p class="info"> 2、绑定value , 这个需要用到以后的知识，<a href="https://cn.vuejs.org/v2/guide/forms.html" target="_blank">表单输入绑定</a>
        </p>

        <button @click="toggleIfInputBindValue">toggle</button>
        <template v-if="ifInputNameBindValue">
            <label> ifInputName 为 true </label>
            <input type="text" name="name" v-model="ifName" placeholder="name"/>
        </template>
        <template v-else>
            <label> ifInputName 为 false </label>
            <input type="email" name="email" v-model="ifEmail" placeholder="email"/>
        </template>

        <hr/>

        <!--指令 v-show 的使用 -->
        <h3>v-show</h3>
        <button @click="showTest = !showTest">toggle show</button>
        <div v-show="showTest"> 这个标签在当showTest 的值为false 时会将style display的值赋为 none</div>

        <hr/>

        <!--v-if vs v-show-->
        <h3>v-if vs v-show</h3>
        <p class="explain" > 打开控制台 ，查看  in show : show is true  和 in if : if is true 打印的数量 </p>
        <button @click="showAndIf = ! showAndIf" > toggle showAndIf</button>
        <template v-show="showAndIf">
            <script type="application/javascript">
                console.log("in show : show is true");
            </script>
        </template>
        <template v-if="showAndIf">
            <script type="application/javascript">
                console.log("in if : if is true")
            </script>
        </template>

        <hr/>

        <!--v-if 与 v-for 一起使用-->
        <h3>v-if 与 v-for 一起使用</h3>
        <p v-if="item % 2 === 0" v-for="item in forIfArr">{{item}}</p>

        <p class="info" > 查看 为何 ，请看下一节 ， <a href="https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if" target="_blank">v-for with v-if</a></p>



    </div>

</template>

<script>
    export default {
        name: "guide-template-conditional",

        data: function () {
            return {
                baseIf: true,
                showTemplate: true,
                elifValue: 3,
                ifNoKey: true,
                ifInputName: true,
                ifInputNameWithKey: true,
                ifInputNameBindValue: true,
                ifName: "",
                ifEmail: "",
                showTest: true,
                showAndIf: false,
                forIfArr:[1,2,3,4,5,6,7,8,9,10],
            }
        },

        methods: {
            toggleIfInputType: function () {
                this.ifInputName = !this.ifInputName;
            },
            toggleIfInputTypeWithKey: function () {
                this.ifInputNameWithKey = !this.ifInputNameWithKey;
            },
            toggleIfInputBindValue: function () {
                this.ifInputNameBindValue = !this.ifInputNameBindValue;
            },
        },

        beforeCreate: function () {
            window.gtConditional = this;
        }

    }
</script>

<style scoped>

</style>