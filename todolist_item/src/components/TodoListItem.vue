<template>
    <div>
        <li>
          <label>
            <input type="checkbox" 
            :checked="todo.done"
            @click="isChecked(todo.id)"
            :handleChecked="handleChecked"
            :handleDelete="handleDelete"/>
            <span>{{todo.name}}</span>
          </label>
          <button class="btn btn-danger" @click="deleteItem(todo.id)" >删除</button>
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
        this.handleChecked(id)
      },
      // 删除一个ToDo item项
      deleteItem(id){
         this.handleDelete(id)
       
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