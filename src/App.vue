<template>
	<div id="app">
		<div style="height: auto;background: #F1f1f1f1;">
			<div style="padding-top: 20px;">
				<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNDA5ZGI4ZjgzODFlOTMwNTJlMzUzNzNkMTI2ZTMwMzYucG5n.png" style="height: 50px;margin-left: 550px;display: inline-block;" />
			</div>
			<div style="border-bottom: 1px solid #f1f1f1;">
				<nav_v :app_arr='arr'></nav_v>
			</div>
		</div>
		<div style="height:auto;background:#FFFFFF;margin-bottom: 10px;">
			<router-view></router-view>
		</div>
		<div>
			<div style="width:80%;height: 300px;margin: 0 auto;margin-top:550px;">
				<div style="width: 30%;height: 300px;float: left;">
					<p style="color: rgb(102, 102, 102)">品牌生鲜网站</p>
					<div style="font-size: 13px;color: rgb(153, 153, 153);margin-top:30px;line-height: 30px;">
						<p>地址：苏州市工业园区金鸡湖大道099号大厦</p>
						<p>电话：000-66668888</p>
						<p>手机：12345678911</p>
						<p>传真：000-66668888</p>
						<p>邮箱：website@qq.com</p>
						<div style="width: 25px;height:25px;background: #00B7FF;float: left;"></div>
						<div style="width: 25px;height:25px;background: antiquewhite;float: left;margin-left: 30px;"></div>
						<div style="width: 25px;height:25px;background: #2C3E50;float: left;margin-left: 30px;"></div>
					</div>
				</div>
				<div style="width: 60%;height: 300px;float: right;">
					<div style="width: 100%;height: 40px;">
						<div style="width: 220px;height: 40px;padding-left: 10px;border-bottom:1px solid #CCCCCC;float: left;">
							姓名
						</div>
						<div style="width: 220px;height: 40px;padding-left: 10px;border-bottom:1px solid #CCCCCC;float: left;margin-left: 10px;">
							电话
						</div>
						<div style="width: 220px;height: 40px;padding-left: 10px;border-bottom:1px solid #CCCCCC;float: left;margin-left: 10px;">
							邮箱
						</div>
						<div style="width:650px;height: 60px;padding-top: 10px;border-bottom:1px solid #CCCCCC;float: left;margin-left: 10px;margin-top: 10px;">
							内容
						</div>
					</div>
					<div style="width: 110px;height: 36px;background:#CCCCCC ;border: 1px solid #dddddd;text-align: center;line-height: 36px;margin-top: 150px;">
						提交
					</div>
				</div>
			</div>
		</div>
		
		<div style="height: 50px;background: #f2f2f2;font-size: 13px;line-height: 50px;padding-left: 150px;">
			<p>版权所有 ©2017 苏ICP备1230012300号</p>
		</div>
		
	</div>
</template>

<script>
	import nav_v from './components/router.vue'
	export default {
		name: 'app',
		components: {
			nav_v
		},
		data() {
			return {
				arr: [{
						path: '/',
						title: '首页'
					},
					{
						path: '/no2',
						title: '品牌介绍'
					},
					{
						path: '/no3',
						title: '产品中心'
					},
					{
						path: '/no4',
						title: '资讯动态'
					},
					{
						path: '/no5',
						title: '养殖基地'
					},
					{
						path: '/no6',
						title: '联系我们'
					}
				]
			}
		}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
</style>