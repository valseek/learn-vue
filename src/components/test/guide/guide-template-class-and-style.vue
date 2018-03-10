<!--中文文档地址： https://cn.vuejs.org/v2/guide/class-and-style.html-->

<template>
    <div>
        <h2 >Class 与 Style 绑定</h2>
        <a href="https://cn.vuejs.org/v2/guide/class-and-style.html" target="_blank" >中文文档地址</a>
        <hr/>

        <!--绑定 HTML Class-->
        <h3>绑定HTML Class</h3>

        <!--对象语法-->
        <h4>对象语法</h4>

        <!--在指令中根据data的值动态改变class-->
        <div :class="{active:isActive , error:hasError}">  检查一下这个元素的 class 属性，在控制台动态设置 vm.isActive 、 hasError 的值，查看class 属性的变化</div>

        <!--指令的值直接填入一个对象-->
        <div :class="classObject">  检查一下这个元素的 class 属性，在控制台动态设置 vm.classObject.active 、 vm.classObject['text-danger']的值，查看class 属性的变化</div>

        <!--指令的值为计算属性，可以完成更为复杂的操作，这里只举一个例子-->
        <div :class="computedStyle">  检查一下这个元素的 class 属性，在控制台动态设置 vm.isActive 、 hasError 的值，查看class 属性的变化</div>


        <hr/>

        <!--数组语法 -->
        <h4>数组语法</h4>
        <div :class="[activeClass, errorClass]" >我们可以把一个数组传给 v-bind:class，以应用一个 class 列表 : [activeClass, errorClass]</div>

        <div v-bind:class="[isActive ? activeClass : '', errorClass]"> [isActive ? activeClass : '', errorClass] </div>

        <div v-bind:class="[{ active: isActive }, errorClass]">[{ active: isActive }, errorClass]</div>

        <!--用在组件上-->
        <h4>用在组件上</h4>
        <my-component v-bind:class="{ active: isActive }"> </my-component>

        <hr/>

        <!--绑定内联样式-->
        <h3>绑定内联样式</h3>

        <!--对象语法-->
        <h4>对象语法</h4>

        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"> style="{ color: activeColor, fontSize: fontSize + 'px' }" </div>

        <div v-bind:style="styleObject">style="styleObject"</div>

        <hr/>

        <!--数组语法-->
        <h3>数组语法</h3>
        <div v-bind:style="[padding50,styleObject]">style="[padding50,styleObject]"</div>

        <hr/>

        <!--自动添加前缀-->
        <h4>自动添加前缀</h4>

        <div v-bind:style="[padding50,styleObject,{transform:'rotate(-2deg)'}]">style="[padding50,styleObject,{transform:"rotate(2deg)"}]" 注意查看内联样式，说好的浏览器前缀呢 ？ </div>

        <hr/>

        <!--多重值 -->
        <h4>多重值</h4>
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"> 看看这个display最后是什么</div>


    </div>
    
</template>

<script>
    import Vue from 'vue';
    Vue.component('my-component', {
        template: '<div class="text-danger">使用my-component 组件， 同时拥有两个class </div>'
    })

    export default {
        name: "guide-template-class-and-style",
        data:function(){
            return {
                isActive:true,
                hasError:false,
                classObject:{
                    active:true,
                    'text-danger':true,
                },
                activeClass:'active',
                errorClass:'text-danger',
                activeColor:"#00aaf0",
                fontSize:"24px",
                styleObject:{
                    color:"#aa00ff",
                    fontSize:"16px",
                    backgroundColor:"#cccccc",
                },
                padding50:{
                    padding:"60px"
                },
                styleTransform:{
                    transform:"rotate(-7deg)",
                    borderRadius:"10px",
                }
            }
        },
        computed:{
            computedStyle:function(){
                return {
                    active:this.isActive ,
                    'text-danger' : this.hasError,
                }
            }
        },
        beforeCreate:function(){
            window.vm=this
        }

    }
</script>

<style scoped>

    div{
        margin-top:15px;
        padding:5px;
    }

</style>