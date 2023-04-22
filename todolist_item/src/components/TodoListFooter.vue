<template>
    <div class="todo-footer" v-show="total === 0 ? false: true">
        <label>
          <input type="checkbox" :checked="isChecked" @click="isAll"/>
        </label>
        <span>
          <span>已完成 {{ finishedTodos }}</span> / 全部 {{ total  }}
        </span>
        <button class="btn btn-danger" @click="clearFinishedTodos">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name: 'TodoListFooter',

    data() {
        return {
            
        };
    },
    props:['todos','clearFinished'],

    mounted() {
        
    },

    methods: {
      isAll(e){
        // console.log('####',e.target.checked);
        if(e.target.checked){
          this.todos.forEach(todo => {
            return todo.done = true 
          });
        }else{
          this.todos.forEach(todo => {
            return todo.done = false 
          });
        }
      },
      clearFinishedTodos(){
        this.clearFinished()
        
      }

        
    },
    computed:{
      finishedTodos(){
        const finished = this.todos.reduce((pre,current)=>{
          return pre + (current.done ? 1: 0)
        },0)
        return finished;
      },
      total(){
        return this.todos.length 
      },
      isChecked(){
        return this.finishedTodos === this.total && this.total > 0
      }
    }
};
</script>

<style  scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>