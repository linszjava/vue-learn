<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todoTitle" @keyup.enter="addTodoObj"/>
      </div>
</template>

<script>
// 引入nanoid
import {nanoid} from 'nanoid'

export default {
    name: 'TodoListHeader',

    data() {
        return {
          todoTitle: ''
            
        };
    },
    // props:['globalTodoObj'],  // 使用this.$emit完成子组件向父组件传递消息

    methods: {
        addTodoObj(e){
          this.todoTitle = e.target.value
          // 如果为空 不能显示添加一个todo项
          if(this.todoTitle.trim() === '') return
          // 封装nanoid
          const todoObj = { id: nanoid(), name: this.todoTitle, done: false}
          // this.globalTodoObj(todoObj)
          this.$emit('globalTodoObj', todoObj);
          this.todoTitle= ''

        }
    },
};
</script>

<style  scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>