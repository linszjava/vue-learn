<template>
    <div>
        <li>
          <label>
            <input  type="checkbox" 
            :checked="todo.done"
            @click="isChecked(todo.id)"
            :handleChecked="handleChecked"
            :handleDelete="handleDelete"/>
            <span v-show="!todo.isEdit">{{todo.name}}</span>
            <input v-show="todo.isEdit" type="text" 
            :value="todo.name"
             @blur="handleBlur(todo,$event)"
             ref="inputTitle"/>
          </label>
          <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
          <button class="btn btn-edit" @click="handleEdit(todo)"  >编辑</button>
        </li>
    </div>
</template>

<script>
export default {
    name: 'TodoListItem',

    data() {
        return {
            
        };
    },
    props:['todo','handleChecked','handleDelete'],
    methods:{
      // 处理checked方法
      isChecked(id){
        // this.handleChecked(id)
        this.$bus.$emit('handleChecked',id)
      },
      // 删除一个ToDo item项
      deleteItem(id){
        //  this.handleDelete(id)
        this.$bus.$emit('clearFinished',id)
       
      },
      handleEdit(todo){
        // 处理使之可编辑
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
        }else{
          this.$set(todo,'isEdit',true)
          
        }
        this.$nextTick(function () {
            this.$refs.inputTitle.focus()
        });
        
      },
      handleBlur(todo,e){
        // 当失去焦点时
        todo.isEdit = false
        // console.log('@@',e.target.value);
        this.$bus.$emit('updateTodo',todo.id,e.target.value)

      }
    }
};
</script>

<style  scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>