<template>
    <div>
        <ul class="todo-main">  
          <!-- 下面的qwe是随便取的 但是你要通过子组件带过去并且让子组件中用props接收 只不过为了方便使用 用 :todo="todo" -->
         <!-- <todo-list-item v-for="todo in todos"  
         :key="todo.id" 
         :todo="todo"
         :handleChecked="handleChecked"
         :handleDelete="handleDelete"></todo-list-item> -->
         <todo-list-item v-for="todo in todos"  
         :key="todo.id" 
         :todo="todo"></todo-list-item>
      </ul>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
  components: { TodoListItem },
  name: 'TodoListList',

  // props:['todos', 'handleChecked', 'handleDelete'],
  props:['todos'],


   

    mounted() {
        
    },

    methods: {
      
        
    },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>