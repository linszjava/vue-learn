<template>
    <div>
        <ul class="todo-main">
         <todo-list-item/>
         <todo-list-item/>
         <todo-list-item/>
         <todo-list-item/>
      </ul>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
  components: { TodoListItem },
    name: 'TodoListList',

    data() {
        return {
            
        };
    },

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