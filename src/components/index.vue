<template>
	<div>
		<div style="height:700px;">
			<el-carousel indicator-position="outside" style='width: 100%;height:700px;'>
				<el-carousel-item style='width: 100%;height: 700px;'></el-carousel-item>
				<el-carousel-item style='width: 100%;height: 700px;'></el-carousel-item>
			</el-carousel>
		</div>
		<template id="lee">
			<div>
				<div style="width: 90%;margin: 50px auto;overflow: hidden;">
					<div style="float: left;">
						<div>
							<div class="le">
								<p>产品种类</p>
								<span>Food types</span>
							</div>
						</div>
						<div style="line-height: 50px;margin-top: 30px;">
							<span v-for="i in nav_arr" style="padding: 0 15px;display: block;font-size: 12px;font-weight: normal;color: #999;" @click="btn(i)">{{i}}</span>
						</div>
					</div>

					<div style="margin-left: 200px;width:80%;height:auto;background:#FFFFFF;">
						<el-row v-loading="loading">
							<el-col :span="8" v-for="i in list_arr">
								<list :no3_json="i" v-if="i.type == index">
								</list>
							</el-col>
						</el-row>
					</div>
				</div>

			</div>
		</template>
		<!--品牌介绍-->
		<template id="jieshao">
			<div>
				<div style="width: 100%;height: auto;">
					<div style="width: 50%;height: 400px;background: #f1f1f1;float: left;padding: 100px 80px;box-sizing: border-box;">
						<p style="font-family: 宋体;font-size: 24px;font-weight: normal;font-style: normal;color: #555555;">品牌简介</p>
						<span style="color: #aaaaaa;display: block;font-size: 13px;">About us</span>
						<p style="font-size: 14px;color: rgb(153, 153, 153);line-height: 25px;margin-top: 16px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站…</p>
						<a href="#/no2" style="font-size: 13px;color: rgb(153, 153, 153);margin:30px 10px;display: inline-block;">MORE></a>
					</div>
					<div style="width: 50%;height: 400px;background: #A0522D;float: left;">
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS81OWU3NmRmZWFlOTJhNGQ5ZmQ5NmY3NWQyNjQwZmUxYy5qcGc_p_p100_p_3D.jpg" style="width: 100%;height: 100%;" />
					</div>
				</div>
			</div>
		</template>
		<!--食品产业链-->
		<template id="shipin">
			<div>
				<div style="width: 100%;height: auto;">
					<div style="width: 90%;height: auto;float: left;padding-left:80px;box-sizing: border-box;margin: 60px auto;">
						<p style="font-family: 宋体;font-size: 24px;font-weight: normal;font-style: normal;color: #555555;">食品产业链</p>
						<span style="color: #aaaaaa;display: block;font-size: 13px;">Industry chain</span>

						<div style="width: 100%;height: 300px;margin-top: 20px;">
							<div style="width: 100px;height: auto;float: left;margin-left: 110px;" v-for="i in 6">
								<div>
									<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8wYzJmZWY4NmNlZGNkZjI1NjE3YzFmZTE3M2NiM2Y5MTEtMzAweDMwMC5wbmc_p_p100_p_3D.png" alt="" style="width: 100px;height: 100px;" />
								</div>
								<div style="width: 100px;height: 28px;font-size: 15px; color: #444444;background: #CCCCCC;text-align: center;line-height: 28px;">
									农场养殖
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</template>
		<!--制作方法-->
		<template id="cooking">
			<div>
				<div style="width: 100%;height:auto;">
					<div style="width: 90%;height: auto;float: left;padding-left:80px;box-sizing: border-box;margin:-60px auto;">
						<p style="font-family: 宋体;font-size: 24px;font-weight: normal;font-style: normal;color: #555555;">制作方法</p>
						<span style="color: #aaaaaa;display: block;font-size: 13px;">Cooking</span>
					</div>
				</div>
				<div style="width: 100%;height: auto;">
					<div style="width: 60%;height: 500px;background: #A0522D;float: left;">
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9hNDkzMzE1MDRkYzI5MWU4ZmE3NzAxYzA1M2Y4ZjhlMS5qcGc_p_p100_p_3D.jpg" style="width: 100%;height: 100%;"/>
					</div>
					<div style="width:40%;height:500px;background: #f1f1f1;float: left;padding: 100px 80px;box-sizing: border-box;">
						<p style="font-family: 宋体;font-size: 24px;font-weight: normal;font-style: normal;color: #555555;">白切牛肉</p>
						<span style="color: #aaaaaa;display: block;font-size: 13px;">原汁原味，酥烂香鲜</span>
						<p style="font-size: 14px;color: rgb(170,170,170);line-height: 25px;margin-top: 16px;"><p>将牛腱子肉洗净，漂去血水，用沸水烫—次，放锅中，加清水淹没，置旺火上烧沸，撇去浮沫，加黄酒、八角、姜块(拍松)、葱段、精盐，盖严盖，移至小火上煮至酥烂，以筷子可以戳穿为好，端下锅晾凉，取出牛。将牛肉切成薄片，整齐地排在平盘中，将白酱油、味精、香油同放碗中调匀，浇在牛肉片上，撒上香菜段、红辣椒丝、蒜蓉，即可上桌。</p>
					</div>
				</div>
			</div>
		</template>
		<!--新闻资讯-->
		<template id="news">
			<div>
				<div style="width: 100%;height:auto;">
					<div style="width: 90%;height: auto;float: left;padding-left:80px;box-sizing: border-box;margin:80px auto;">
						<p style="font-family: 宋体;font-size: 24px;font-weight: normal;font-style: normal;color: #555555;">新闻资讯</p>
						<span style="color: #aaaaaa;display: block;font-size: 13px;">News</span>
					</div>
				</div>
				
				<div style="width: 100%;height: auto;">
					<div style="width: 50%;height: 500px;background: #F2F3F1;float: left;position: relative;">
						<div style="width: 470px;height: 290px;position: absolute;left: 50%;top: 50%;margin-left: -235px;margin-top: -165px;">
							<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS85OWJmZjI0NWJmZWY1YzRmNWUxZmRhNzI1YzY2NGE0My02MDB4MzcwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" style="width: 100%;height: 100%;"/>
						</div>
						<div style="position: absolute;bottom: 30px;width: 470px;margin-left: 140px;">
							<p style="color: #444444;">全国粮改饲技术创新与推广...</p>
							<span style="color:#999;font-size: 14px;line-height: 25px;">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普...</span>
						</div>
					</div>
					<div style="width:50%;height:500px;background: #FFFFFF;float: left;padding: 100px 80px;box-sizing: border-box;">
						<div style="width: 80%;margin: 0 auto; margin-bottom: 50px;" v-for="i in 3" class="back_hover">
							<p style="font-family: 宋体;font-size: 24px;font-weight: normal;font-style: normal;color: #555555;">畜牧养牛产业全面覆盖助力...</p>
							<span style="color: #aaaaaa;display: block;font-size: 13px;margin-top: 20px;">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普...</span>
						</div>
					</div>
				</div>
			</div>
		</template>
		<!--客户评价-->
		<template id="kehu">
			<div>
				<div style="width: 100%;height:auto;">
					<div style="width: 90%;height: auto;float: left;padding-left:80px;box-sizing: border-box;margin:80px auto;">
						<p style="font-family: 宋体;font-size: 24px;font-weight: normal;font-style: normal;color: #555555;">客户评价</p>
						<span style="color: #aaaaaa;display: block;font-size: 13px;">Customer comments</span>
					</div>
				</div>
				
				<div style="width: 100%;height:auto;overflow: hidden;">
					<div style="width: 80%;margin: 0 auto;">
						<div style="width: 46%;height:196px;background: #f1f1f1;float: left;margin: 15px;" v-for="i in 4">
							<div style="width: 40%;height: 196px;float: left;">
								<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS9hOGE4ZmU3NTdjNGU5OWZjODIzMmQyMDg3YzBlNzRkZC5wbmc_p_p100_p_3D.png" style="width: 100%;height: 100%;"/>
							</div>
							<div style="width: 60%;height: 196px;background: #f1f1f1;float: right;padding:50px 15px 20px 20px;box-sizing: border-box;line-height: 25px;">
								<p style="font-family: 宋体;font-size: 18px;color: #555555;">肉质鲜嫩，口感很不错</p>
								<span style="color: #aaaaaa;display: block;font-size: 13px;padding-top: 10px;">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作更加简单。</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
		
		<!--合作伙伴-->
		<template id="hezuo">
			<div>
				<div style="width: 100%;height: auto;">
					<div style="width: 90%;height: auto;float: left;padding-left:80px;box-sizing: border-box;margin: 60px auto;">
						<p style="font-family: 宋体;font-size: 24px;font-weight: normal;font-style: normal;color: #555555;">合作伙伴</p>
						<span style="color: #aaaaaa;display: block;font-size: 13px;">Partner</span>

						<div style="width: 100%;height: 100px;margin-top: 20px;border-bottom: 1px solid #CCCCCC;">
							<div style="width: 180px;height: auto;float: left;margin-left: 30px;" v-for="i in 6">
								<div>
									<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC80ZDYwNmViNDIxNDYwNzdjMjlkMzIxNDVkNTg3MmJiOC5wbmc_p_p100_p_3D.png" alt="" style="width: 100%;height: 80px;" />
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</template>
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
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-repeat: no-repeat;
		background-image: url("https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvZWM1OTM5ZWUyNDMxNjg0MWRmMmJkOTM4MWJjN2IyYTEuanBn.jpg");
		background-size: cover;
		background-position: center center;
		width: 100%;
		height: 100%;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-repeat: no-repeat;
		background-image: url("https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvYzJhZjM3OWRjMDZkMDEwNDk0ZmJlNWZmYzcwNDc4ZDEuanBn.jpg");
		background-size: cover;
		background-position: center top;
		width: 100%;
		height: 100%;
	}
	
	.le p {
		font-family: 宋体;
		font-size: 24px;
		font-weight: normal;
		font-style: normal;
		color: #555555;
		text-align: ;
	}
	
	.le span {
		font-family: georgia;
		font-size: 15px;
		color: #aaaaaa;
	}
	
	.active {
		color: aqua;
	}
	.back_hover:hover{
		background: #CCCCCC;
	}
</style>