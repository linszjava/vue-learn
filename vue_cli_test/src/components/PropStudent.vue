<template>
    <div>
        <h3>学生姓名:{{ name }}</h3>
        <!-- <h3>学生年龄:{{ age + 1 }}</h3> -->
        <h3>学生年龄:{{ realAge +1 }}</h3>
        <h3>学生性别:{{ sex }}</h3>
        
    </div>
</template>

<script>
export default {
    name: 'PropStudent',

    data() {
        return {
            name: 'linsz',
            age: 18,
            sex: '男',
            realAge: this.age  // 强制要修改props中的值
        };
    },
    // props: ['name','age','sex']   // ① 简单写法
    // props:{                          // ② 写法二 声明该属性的类型
    //     name: String,
    //     age: Number,
    //     sex: String
    // }
    props:{    // 写法三 声明该属性的类型 是否需要 默认值
        name:{
            type: String,
            require: true
        },
        age:{
            type: Number,
            default: 99
        },
        sex:{
            type: String,
            default: '女'
        }
    }

};
</script>

