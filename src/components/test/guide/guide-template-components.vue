<!--中文文档地址 https://cn.vuejs.org/v2/guide/components.html-->

<template>
    <div>
        <h2>组件</h2>
        <a href="https://cn.vuejs.org/v2/guide/components.html" target="_blank">中文文档地址</a>

        <hr/>

        <!--使用组件-->
        <h3>使用组件</h3>

        <h4>全局注册</h4>
        <p class="info"> this is the simplest component demo</p>
        <simple-component></simple-component>
        <p class="refer">请注意，对于自定义标签的命名 Vue.js 不强制遵循 W3C 规则 (小写，并且包含一个短杠)，尽管这被认为是最佳实践。</p>

        <hr/>

        <!--局部注册-->
        <h4>局部注册</h4>
        <inner-scope-component></inner-scope-component>

        <hr/>

        <!--DOM 模板解析注意事项-->
        <h3>DOM 模板解析注意事项</h3>
        <select>
            <html-select-option></html-select-option>
        </select>
        <p class="info"> 为了测试这个 ， 使用一个iframe</p>
        <iframe src="html/component-test.html">
        </iframe>
        <p class="explain"> 查看里面table 的结构， 你就会发现，有个 tr 在 table 外面 </p>

        <hr/>

        <!--data 必须是函数-->
        <h3>data 必须是函数</h3>
        <p class="info">写一个data不为function的组件</p>
        <data-must-function-but-not></data-must-function-but-not>

        <p class="explain"> 这是用返回对象的方式创建的三个按钮，注意查看同步变化 </p>
        <data-function-with-data-obj></data-function-with-data-obj>
        <data-function-with-data-obj></data-function-with-data-obj>
        <data-function-with-data-obj></data-function-with-data-obj>

        <p class="explain"> 这是正常的函数返回，三个按钮异步变化 </p>
        <data-function-with-data-function></data-function-with-data-function>
        <data-function-with-data-function></data-function-with-data-function>
        <data-function-with-data-function></data-function-with-data-function>

        <hr/>

        <p class="explain"> 以后的组件，都在 inner 的文件里面实现</p>

        <!--组件组合-->
        <h3>组件组合</h3>

        <!--使用 Prop 传递数据-->
        <h4>使用 Prop 传递数据</h4>
        <p class="info"> 最简单的值传递 </p>
        <inner-template-simple-prop message="1000"></inner-template-simple-prop>

        <hr/>

        <!--camelCase vs. kebab-case-->
        <h4>camelCase vs. kebab-case</h4>
        <p class="explain"> HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case
            (短横线分隔式命名)： </p>
        <inner-template-case-test
                outer-message="hello , it's me , and now time is 2018-03-13 01:25:00"></inner-template-case-test>

        <hr/>

        <!--动态 Prop-->
        <h4>动态 Prop</h4>
        <div>
            <label>
                这个用来绑定表单
            </label>
            <input v-model="simplePropTransmitValue"/>
        </div>
        <inner-template-simple-prop :message="simplePropTransmitValue"></inner-template-simple-prop>

        <p class="refer">如果你想把一个对象的所有属性作为 prop 进行传递，可以使用不带任何参数的 v-bind</p>
        <p class="info">下面介绍三种传递方式</p>

        <p class="explain">vue 代码 : &lt;inner-template-bind-object v-bind=&quot;transmitObject&quot;&gt;&lt;/inner-template-bind-object&gt;</p>
        <inner-template-bind-object v-bind="transmitObject"></inner-template-bind-object>

        <p class="explain">vue 代码 : &lt;inner-template-bind-object v-bind=&quot;{name:transmitObject.name,age:transmitObject.age}&quot;
            &gt;&lt;/inner-template-bind-object&gt;</p>
        <inner-template-bind-object
                v-bind="{name:transmitObject.name,age:transmitObject.age}"></inner-template-bind-object>

        <p class="explain">vue 代码 : &lt;inner-template-bind-object v-bind:name=&quot;transmitObject.name&quot;
            v-bind:age=&quot;transmitObject.age&quot;&gt;&lt;/inner-template-bind-object&gt;</p>
        <inner-template-bind-object v-bind:name="transmitObject.name"
                                    v-bind:age="transmitObject.age"></inner-template-bind-object>

        <hr/>

        <!--字面量语法 vs 动态语法-->
        <h4>字面量语法 vs 动态语法</h4>

        <p class="info"> 这个是字面量传值 </p>
        <inner-template-simple-prop message="simplePropTransmitValue"></inner-template-simple-prop>

        <p class="info">这个是 传入一个vue动态属性</p>
        <inner-template-simple-prop :message="simplePropTransmitValue"></inner-template-simple-prop>

        <hr/>

        <!--单向数据流-->
        <h4>单向数据流</h4>
        <p class="info"> 父级组件</p>
        <div>
            <label>name : </label><input v-model="unidirectionalValue.name"/>
            <label>age: </label><input v-model="unidirectionalValue.age"/>
        </div>
        <inner-template-unidirectional-test v-bind="unidirectionalValue"></inner-template-unidirectional-test>
        <p class="explain">
            可以看到 ，改变父组件 ，子组件也跟着变化，但是改变子组件，父组件不会变化 。
            题外话：这根React说的单向数据流不一样。React的单向数据流的意思是状态变化只能有model层传入view层。
        </p>

        <hr/>

        <!--Prop 验证-->
        <h3>Prop 验证</h3>
        <inner-template-props-validate v-bind="propsValidate"></inner-template-props-validate>
        <p class="explain">令人沮丧的是，vue2的props 好像没有递归验证</p>

        <hr/>

        <!--替换/合并现有的特性-->
        <h3>替换/合并现有的特性</h3>



    </div>

</template>

<script>
    import Vue from 'vue';
    import InnerTemplateSimpleProp from "./inner/inner-template-simple-prop";
    import InnerTemplateCaseTest from "./inner/inner-template-case-test";
    import InnerTemplateBindObject from "./inner/inner-template-bind-object";
    import InnerTemplateUnidirectionalTest from "./inner/inner-template-unidirectional-test";
    import InnerTemplatePropsValidate from "./inner/inner-template-props-validate";

    var dataObj = {counter: 1};

    Vue.component('simple-component', {
        template: '<p style="text-align: center;">这是一个最简单的Component </p>',
        name: "simple-component",
    });

    let ChildComponent = {
        template: '<p style="text-align: right;"> 这是一个局部注册的Component </p>'
    };

    let HtmlSelectOption = {
        template: "<option> 这是一个li 的测试</option>"
    };

    let DataMustFunctionButNot = {
        template: '<p>组件的 data.message ： {{message}}</p>',
        data: {
            message: "如果这个出现，就说明Component的data可以不为function",
        }
    };

    let DataFunctionWithDataObj = {
        template: '<button @click="counter+=1">{{counter}}</button>',
        data: function () {
            return dataObj;
        },
    };

    let DataFunctionWithDataFunction = {
        template: '<button @click="counter+=1">{{counter}}</button>',
        data: function () {
            return {
                counter: 1
            }
        },
    };


    export default {
        name: "guide-template-components",
        components: {
            InnerTemplatePropsValidate,
            InnerTemplateUnidirectionalTest,
            InnerTemplateBindObject,
            InnerTemplateCaseTest,
            InnerTemplateSimpleProp,
            'inner-scope-component': ChildComponent,
            'html-select-option': HtmlSelectOption,
            'data-must-function-but-not': DataMustFunctionButNot,
            'data-function-with-data-obj': DataFunctionWithDataObj,
            'data-function-with-data-function': DataFunctionWithDataFunction,
        },
        data: function () {
            return {
                simplePropTransmitValue: "通过绑定属性传入动态值 : 1000 ",
                transmitObject: {
                    name: "Valseek Zuo",
                    age: 24,
                },
                unidirectionalValue: {
                    name: "Valseek Zuo",
                    age: 24,
                },
                propsValidate: {
                    name: "valseek",
                    age: "weaf",
                    phone: 13206307251,
                    job: "programmer",
                }
            };
        },

    }
</script>

<style scoped>

    button {
        margin-right: 20px;
    }

</style>