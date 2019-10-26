<template>
	<div>
		<div id="no3_1">
			<div style="overflow: hidden;line-height: 120px;">
				<el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;line-height: 120px;">
					<el-breadcrumb-item>您当前的位置：</el-breadcrumb-item>
					
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>产品中心</el-breadcrumb-item>
				</el-breadcrumb>
				<div style="float: right;">
					<span v-for="i in nav_arr" style="padding: 0 15px;" @click="btn(i)">{{i}}</span>
				</div>
			</div>
			<el-row v-loading="loading">
				<el-col :span="8" v-for="i in list_arr">
					<list :no3_json="i" v-if="i.type == index"></list>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import list from './zujian/first.vue'
	export default {
		components: {
			list
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
				nav_arr: ['冷冻生鲜', '加工产品', '农副产品'],
				index: '冷冻生鲜',
				list_arr: [{
						name: '火腿',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mOGI1NzYwMmRjMGI5NTk1ZTEzNDNlZjg5Yzg0MzYxMC00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '农副产品'
					},
					{
						name: '雪花肉',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9jMTMxNjViYjM3ZjA1ZDE2MTQ4MzUzZDc3MmI1M2RiZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '农副产品'
					},
					{
						name: '牛棒骨',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC85MWVjZTczNGYxNWZmZWY1NjY0YmY5YTRjMDBkNTMwZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '农副产品'
					},
					{
						name: '火腿',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZjhiNTc2MDJkYzBiOTU5NWUxMzQzZWY4OWM4NDM2MTAtNDAweDIzMC5qcGc_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},
					{
						name: '外脊',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZjIxNzEwNGU2ZGMyNGU2ZDZjY2QwODMzZGRiZmU2NjEtNDAweDIzMC5qcGc_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},

					{
						name: '牛板筋',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},
					{
						name: '牛百叶',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzEzMTY1YmIzN2YwNWQxNjE0ODM1M2Q3NzJiNTNkYmYtNDAweDIzMC5qcGc_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},
					{
						name: '牛板筋',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},
					{
						name: '牛百叶',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzEzMTY1YmIzN2YwNWQxNjE0ODM1M2Q3NzJiNTNkYmYtNDAweDIzMC5qcGc_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},

					{
						name: '牛棒骨',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC85MWVjZTczNGYxNWZmZWY1NjY0YmY5YTRjMDBkNTMwZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '加工产品'
					},
					{
						name: '带骨肉',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNzM1ZmQwM2VmZmFjYzRiMDZhODAxNGU3NzY2MmVmODItNDAweDIzMC5qcGc_p_p100_p_3D.jpg',
						type: '加工产品'
					},
					{
						name: '干巴肉',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNzM1ZmQwM2VmZmFjYzRiMDZhODAxNGU3NzY2MmVmODItNDAweDIzMC5qcGc_p_p100_p_3D.jpg',
						type: '加工产品'
					},

				]
			}
		}
	}
</script>

<style>
  #no3_1{
  	width: 80%;
  	height: auto;
  	margin: 0 auto;
  }
</style>