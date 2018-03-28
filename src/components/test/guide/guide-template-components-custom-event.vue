<!--中文文档地址 https://cn.vuejs.org/v2/guide/components.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6-->

<template>
    <div>
        <h2> 组件 - 自定义事件 </h2>
        <a href="https://cn.vuejs.org/v2/guide/components.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6" target="_blank">中文文档地址</a>

        <hr/>

        <!--使用 v-on 绑定自定义事件-->
        <h3>使用 v-on 绑定自定义事件</h3>
        <middle-template-simple-custom-event></middle-template-simple-custom-event>

        <hr/>

        <!--给组件绑定原生事件-->
        <h3>给组件绑定原生事件</h3>
        <inner-template-native-event @click.native="nativeEventCount += 1" v-bind:count="nativeEventCount"></inner-template-native-event>

        <!--.sync 修饰符-->
        <h2>.sync 修饰符</h2>
        <middle-template-sync-event></middle-template-sync-event>

        <hr/>

        <!--使用自定义事件的表单输入组件-->
        <h3>使用自定义事件的表单输入组件</h3>
        <inner-template-form-event></inner-template-form-event>

        <!--自定义组件的 v-model-->
        <h3>自定义组件的 v-model</h3>
        <middle-template-custom-model></middle-template-custom-model>

        <!--非父子组件的通信-->
        <h3>非父子组件的通信</h3>
        <middle-template-brother-communication></middle-template-brother-communication>




    </div>
    
</template>

<script>
    import MiddleTemplateSimpleCustomEvent from "./middle/middle-template-simple-custom-event";
    import InnerTemplateNativeEvent from "./inner/inner-template-native-event";
    import MiddleTemplateSyncEvent from "./middle/middle-template-sync-event";
    import InnerTemplateFormEvent from "./inner/inner-template-form-event";
    import MiddleTemplateCustomModel from "./middle/middle-template-custom-model";
    import MiddleTemplateBrotherCommunication from "./middle/middle-template-brother-communication";

    export default {
        components: {
            MiddleTemplateBrotherCommunication,
            MiddleTemplateCustomModel,
            InnerTemplateFormEvent,
            MiddleTemplateSyncEvent,
            InnerTemplateNativeEvent,
            MiddleTemplateSimpleCustomEvent},
        name: "guide-template-components-custom-event",
        data:function(){
            return {
                total:0,
                nativeEventCount:0,
            };
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>