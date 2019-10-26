<template>
	<div>
		<div id="no4_1">
			<div class="index_1">				
				<el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;line-height: 120px;">
					<el-breadcrumb-item>您当前的位置：</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>资讯动态</el-breadcrumb-item>
				</el-breadcrumb>
				
				<div style="float:right;line-height: 120px;" class="gongsi">
					<span v-for="i in nav_arr" style="padding: 0 35px;width: 100px;height: 80px;background:#FFFFFF;display: inline-block;" @click="btn(i)">{{i}}</span>
				</div>
			
			<div class="text">
				<el-row v-loading="loading" style='margin-top: 20px;'>
				<el-col :span="60" v-for="i in list_arr">
					<xun :no4_json="i" v-if="i.type == index"></xun>
				</el-col>
			</el-row>
			</div>
				
			</div>
			
			<!--<div class="text">
				<el-row v-loading="loading" style='margin-top: 20px;'>
				<el-col :span="8" v-for="i in list_arr">
					<xun :no4_json="i" v-if="i.type == index"></xun>
				</el-col>
			</el-row>
			</div>-->
			
		</div>
	</div>
</template>

<script>
	import xun from './zujian/zixun.vue'
	export default {
		components: {
			xun
		},
		methods: {
			btn(i) {

				this.loading = true
				setTimeout(() => {
					this.index = i
					this.loading = false
				}, 1000)

			}
		},
		data() {
			return {

				loading: false,
				nav_arr: ['公司新闻', '行业资讯'],
				index: '公司新闻',
				list_arr: [{
						name: '2323',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '公司新闻'
					},
					{
						name: '物美价廉',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '公司新闻'
					},
					{
						name: '火腿很有嚼劲',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '公司新闻'
					},
					{
						name: '内质鲜嫩，口感非常好',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '公司新闻'
					},
					{
						name: '新疆畜牧业加强推广“四良一规范”',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '公司新闻'
					},

					{
						name: '传统农牧业70年的现代重构',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '公司新闻'
					},
					{
						name: '物美价廉',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '行业资讯'
					},
					{
						name: '内质鲜嫩，口感非常好',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '行业资讯'
					},
					{
						name: '传统农牧业70年的现代重构',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '行业资讯'
					},

					{
						name: '内蒙古东乌珠穆沁旗大力培育畜牧业科技示范园区',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '行业资讯'
					},
					{
						name: '2017全国绿色养殖发展大会在京召开 开启畜牧业绿色发展新纪元',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持....",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '行业资讯'
					},
					{
						name: '畜牧养牛产业全面覆盖助力喀左县脱贫',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9mZDA4OTQxNDJlNzM0OTM4MDVlNmY3YzA1ZTliNzA3OC0yMDB4MTIzLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
						type: '行业资讯'
					},

				]
			}
		}
	}
</script>

<style>
  .index_1{
  	width: 90%;
  	height: 800px;
  	/*background: firebrick;*/
  	margin: 20px auto;
  	/*margin-left: 100px;*/
  }
  .text{
  	width: 90%;
  	height: 600px;
  	/*background: darkblue;*/
  	/*margin-top: 30px;*/
  	margin: 0 auto;
  	position: absolute;
  	top: 300px;
  	/*padding: 0 5px;*/
  
  	
  	
  }
  .gongsi span:hover {
  	border-bottom: 1px solid #CCCCCC;
  }
</style>