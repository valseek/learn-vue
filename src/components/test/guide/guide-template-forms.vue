<!--中文文档地址 https://cn.vuejs.org/v2/guide/forms.html-->

<template>
    <div>
        <h2> 表单输入绑定 </h2>
        <a href="https://cn.vuejs.org/v2/guide/forms.html" target="_blank"> 中文文档地址 </a>
        <hr/>

        <!--文本-->
        <h3> 文本 </h3>
        <div id="gt-forms-simple-test">
            <label>simpleInputValue:</label>
            <input v-model="simpleInputValue" type="text"/>
            <p> the simpleInputValue is : {{simpleInputValue}}</p>
        </div>

        <hr/>

        <!--多行文本-->
        <h3>多行文本</h3>
        <div>
            <label>simpleTextAreaValue</label>
            <textarea v-model="simpleTextAreaValue"></textarea>
            <p style="white-space: pre-line;">{{ simpleTextAreaValue }}</p>
        </div>

        <hr/>

        <!--复选框-->
        <h3>复选框</h3>

        <p class="info">一个简单的例子</p>
        <div>
            <input v-model="simpleCheckboxValue" type="checkbox"/>
            <label>{{simpleCheckboxValue}}</label>
        </div>

        <p class="info">多个复选框的例子</p>
        <div>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>

        <p class="info"> 使用对象进行更复杂的操作 </p>

        <div>
            <input type="checkbox" v-model="multiCheckbox.jack"/>
            <label>Jack</label>

            <input type="checkbox" v-model="multiCheckbox.john"/>
            <label>John</label>

            <input type="checkbox" v-model="multiCheckbox.tom"/>
            <label>Tom</label>
        </div>
        <div>
            the selected people : <span v-for="item in selectNames">{{item}} , </span>
        </div>

        <p class="info"> 如果使用v-for 指令生成多个复选框 </p>
        <div>
            <template v-for="item in multiAllNames">
                <input type="checkbox" v-bind:key="'multi-name-'+item" :value="item" v-model="multiSelectedNames"/>
                <label style="margin-right: 20px;">{{item}}</label>
            </template>
        </div>
        <div>{{multiSelectedNames}}</div>

        <hr/>

        <!--单选按钮-->
        <h3>单选按钮</h3>
        <div>
            <input type="radio" id="one" value="Vue" v-model="simpleRadioValue">
            <label for="one">oh , let learn vue.</label>
            <br>
            <input type="radio" id="two" value="React" v-model="simpleRadioValue">
            <label for="two">vue is so week, let's learn react !</label>
            <br>
            <span>Picked: {{ simpleRadioValue }}</span>
        </div>

        <hr/>

        <!--选择框-->
        <h3>选择框</h3>
        <p class="info"> 一个简单的选择框demo </p>
        <div>
            <select v-model="simpleSelected">
                <option disabled value="">请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ simpleSelected }}</span>
        </div>

        <p class="info"> 多选的选择框demo </p>
        <div>
            <select v-model="multipleSelected" multiple style="width: 50px;">
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
                <option>H</option>
            </select>
            <br>
            <span>Selected: {{ multipleSelected }}</span>
        </div>

        <hr/>

        <!--值绑定-->
        <h3> 值绑定 </h3>
        <p class="info"> 一个简单的例子  , 用单选框做例子</p>
        <div>
            <template v-for="item in simpleRadioBindArr">
                <input v-model="simpleRadioBindValueModel" type="radio" :value="item.value" />
                <label style="margin-right:20px;">{{item.label}}</label>
            </template>
         <p>select id is : {{simpleRadioBindValueModel}}</p>
        </div>

        <!--值绑定-复选框-->
        <h3>值绑定-复选框</h3>
        <label>
            <input
                    type="checkbox"
                    v-model="simpleCheckboxValueModel"
                    true-value="react"
                    false-value="vue"
            />
            <label> you learn Vue or React</label>
        </label>
        <p> you choose is : {{ simpleCheckboxValueModel }}</p>

        <hr/>

        <!--值绑定-单选按钮-->
        <h3>值绑定-单选按钮</h3>
        <p class="explain"> 上面的例子 已经可以看到 </p>

        <hr/>

        <!--值绑定-选择框的选项-->
        <h3>值绑定-选择框的选项</h3>

        <div>
            <select v-model="simpleSelectBindValue">
                <option v-for="item in simpleSelectBindValueArr" :value="item.value" > {{item.label}}</option>
            </select>
            <p> the selected option value is : {{simpleSelectBindValue}}</p>
        </div>

        <!--修饰符-->
        <h3>修饰符</h3>

        <p class="info">修饰符 .lazy</p>
        <div>
            <p> 有 .lazy 修饰符 </p>
            <input v-model.lazy="hasLazyQualifier"/>
            <label>{{hasLazyQualifier}}</label>
        </div>

        <div>
            <p> 没有 .lazy 修饰符 </p>
            <input v-model="noLazyQualifier"/>
            <label>{{noLazyQualifier}}</label>
        </div>

        <p class="info" >  .number 修饰符 </p>
        <div>
            <input v-model.number="numberQualifierValue"/>
            <label>{{numberQualifierValue}}</label>
        </div>

        <p class="info" >  .trim 修饰符  , 方便观察 ，将空格改为 - </p>
        <p> 有.trim 修饰符 </p>
        <div>
            <input v-model.trim="hasTrimQualifierValue"/>
            <label>{{hasTrimQualifierValue.replace(/ /g,'-')}}</label>
        </div>

        <p>  没有.trim 修饰符 </p>
        <div>
            <input v-model="noTrimQualifierValue"/>
            <label>{{noTrimQualifierValue.replace(/ /g,'-')}}</label>
        </div>

        <hr/>

        <!--在组件上使用 v-model-->
        <h3>在组件上使用 v-model</h3>
        <p class="explain">
            这一各特性会在下一节中讲解
        </p>









    </div>
</template>

<script>
    export default {
        name: "guide-template-forms",
        data: function () {
            return {
                simpleInputValue: "default input value",
                simpleTextAreaValue: "default text area value",
                simpleCheckboxValue: true,
                multiCheckbox: {
                    jack: true,
                    john: false,
                    tom: true,
                },
                checkedNames: [],
                multiAllNames: ['faker', 'mata', 'deft', 'pawn', 'wolf', 'bang', 'blank', 'marin', 'bengi'],
                multiSelectedNames: [],
                simpleRadioValue:"",
                simpleSelected:"",
                multipleSelected:[],
                simpleRadioBindArr:[
                    {label:"faker",value:1},
                    {label:'mata',value:2},
                    {label:'deft',value:3},
                    {label:'wolf',value:4},
                    {label:'bang',value:5}
                ],
                simpleRadioBindValueModel:1,
                simpleCheckboxValueModel:'react',
                simpleSelectBindValue:"",
                simpleSelectBindValueArr:[
                    {label:"请选择" ,value:""},
                    {label:"faker",value:1},
                    {label:'mata',value:2},
                    {label:'deft',value:3},
                    {label:'wolf',value:4},
                    {label:'bang',value:5}
                ],
                hasLazyQualifier:"has lazy qualifier",
                noLazyQualifier:"no lazy qualifier",
                numberQualifierValue:1,
                hasTrimQualifierValue:"",
                noTrimQualifierValue:"",


            };
        },
        computed: {
            selectNames: function () {
                let res = [];
                for (let i in this.multiCheckbox) {
                    if (this.multiCheckbox[i] === true) {
                        res.push(i);
                    }
                }
                return res;
            }
        }
    }
</script>

<style scoped>

</style>