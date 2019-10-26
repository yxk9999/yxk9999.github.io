<template>
	<ul id="nav">
		<li v-for="(i,$index) in arr">
			<a :href="'#'+i.path" @click="index=$index" :class="index==$index?'active':''">{{i.title}}</a>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['app_arr'],
		data() {
			return {
				index:0,
				arr: this.app_arr
			}
		}
	}
</script>

<style>
	#nav {
		list-style: none;
		overflow: hidden;
		margin-left: 200px;
	}
	
	#nav li {
		float: left;
		padding-left: 80px;
		line-height: 60px;
		width: 100px;
		height: 60px;
/*		background: red;*/
	}
	
	#nav li a {
		color: rgb(141, 144, 149);
		font-size: 16px;
		line-height: 24px;
		font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;
		padding-bottom: 18px;
	}
	.active{
		border-bottom: 1px solid #000000;
	}
</style>