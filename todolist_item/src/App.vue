<template>
  <div id="app">
    <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <todo-list-header :globalTodoObj="globalTodoObj"></todo-list-header> -->
      <todo-list-header @globalTodoObj="globalTodoObj"></todo-list-header>
      <todo-list-list :todos="todos" ></todo-list-list>
      <!-- <todo-list-list :todos="todos" 
      :handleChecked="handleChecked"
      :handleDelete="handleDelete"></todo-list-list> -->
      <!-- <todo-list-footer :todos="todos"
      :clearFinished="clearFinished"></todo-list-footer> -->
      <todo-list-footer :todos="todos"
      @clearFinished="clearFinished"></todo-list-footer>
    </div>
  </div>
</div>
  
  </div>
</template>

<script>
import TodoListFooter from './components/TodoListFooter.vue'
import TodoListHeader from './components/TodoListHeader.vue'
import TodoListList from './components/TodoListList.vue'


export default {
  name: 'App',
  components: {
    TodoListHeader,
    TodoListFooter,
    TodoListList

  },
  data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || []
            
        };
    },
    methods:{
      globalTodoObj(todoObj){
        this.todos.unshift(todoObj)
        
      },
      // 判断是否勾选
      handleChecked(id){
        this.todos.forEach((todo)=>{
          if(id === todo.id) todo.done = ! todo.done
        })
      },
      // 删除一个todo项
      handleDelete(id){
       this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
       })
      },
      // 清除已完成的
      clearFinished(){
        this.todos = this.todos.filter(todo =>{
          return todo.done !== true
        })
      },
      updateTodo(id,title){
        this.todos.forEach((todo)=>{
          if(id === todo.id) todo.name = title
        })
      }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value)) 
        }
      }
    },
    mounted(){
      this.$bus.$on('handleChecked',this.handleChecked)
      this.$bus.$on('clearFinished',this.clearFinished)
      this.$bus.$on('updateTodo',this.updateTodo)
    },
    beforeDestroy(){
      this.$bus.this.$off(['handleChecked','clearFinished','updateTodo']);
    }
}
</script>

<style>

/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid skyblue;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}





</style>
