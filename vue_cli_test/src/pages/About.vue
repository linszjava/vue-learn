<template>
  <h3>我是About页面</h3>
</template>

<script>
export default {
    name: 'About',
    beforeRouteEnter(to,from,next){
        console.log('beforeRouteEnter=========',to,from)
	if(to.meta.isAuth){ //判断是否需要鉴权
		if(localStorage.getItem('school')==='atguigu'){
			next()
		}else{
			alert('学校名不对，无权限查看！')
		}
	}else{
		next()
	}
    },
    beforeRouteLeave(to,from){
        console.log('beforeRouteLeave-----------',to,from);
        document.title = to.meta.title || '测试系统'
    }
    


}
</script>

<style>

</style>