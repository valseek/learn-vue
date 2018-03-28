<template>
    <div>
        <div class="example">
            <p>不带参数的自定义事件</p>
            <p>{{total}}</p>
            <inner-template-counter-event-example @incr="incr"></inner-template-counter-event-example>
            <inner-template-counter-event-example @incr="incr"></inner-template-counter-event-example>
        </div>

        <div class="example">
            <p>带参数的自定义事件</p>
            <inner-template-todo-list-label @deleteLabel="deleteLabel" v-for="item in todoList" v-bind="{label:item.label,index:item.key}" v-bind:key="'todo-list-index'+item.key" />
            <div style="margin-top:20px;">
                <input v-model="todo" size="50" /><button @click="addToList"> Add</button>
            </div>

        </div>

    </div>
</template>

<script>
    import InnerTemplateCounterEventExample from "../inner/inner-template-counter-event-example";
    import InnerTemplateTodoListLabel from "../inner/inner-template-todo-list-label";
    import {getUniqueId} from '../../../../js/common/UtilTools'
    const UNIQUE_KEY_PERFIX = "TODO_LIST_PREFIX_";

    export default {
        components: {
            InnerTemplateTodoListLabel,
            InnerTemplateCounterEventExample},
        name: "middle-template-simple-custom-event",
        data: function () {

            return {
                total: 0,
                todoList:[{ key:getUniqueId(UNIQUE_KEY_PERFIX),label:"origin"}],
                todo:"",
            };
        },
        methods: {
            incr: function () {
                this.total++;
            },
            deleteLabel:function({index:index}){
                this.todoList = this.todoList.filter(function(item){
                    return item.key !== index;
                });
            },
            addToList:function(){
                this.todoList.push({key:getUniqueId(UNIQUE_KEY_PERFIX),label:this.todo});
                this.todo="";
            }
        }
    }
</script>

<style scoped>

</style>