<template>
	<div style="width: 85%;margin: 0 auto;min-height: 400px;">
		<div id="nav2">
			<div style="width:40%;height: 60px;float: left;padding-top: 35px;box-sizing: border-box;">
				<el-breadcrumb separator-class="el-icon-arrow-right"  style="float: left;">
			
				<el-breadcrumb-item>您当前的位置：</el-breadcrumb-item>
			
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				
					<el-breadcrumb-item>养殖基地</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<template id="about">
			<div>
				<div style="width: 100%;height: 300px;margin-top: 50px;padding-bottom:100px;" id="a">
					<div style="text-align: center;">
						<div style="padding-top: 100px;">
							<p style="font-family: 微软雅黑;font-size: 18px;color: #444444;">养殖基地</p>
							<span style="font-family:Raleway;font-size:13px;font-weight:normal;font-style:normal;color:#999999;display:block;vertical-align:bottom;padding-top: 5px;">BASE</span>
						</div>
						<div style="width:20px;height: 1px;background: #444444;margin:20px auto;"></div>
					</div>
					
					<div style="width: 100%;height: auto;" class="img_s">
						<div style="float: left;">
							<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS82Njc4NjRjM2UyM2Q0OWI1YWIyNzk3NTIwY2FiNTEyNi00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"/>
						</div>
						<div style="float: left;">
							<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8xZThlZDg5MzM4ZGZiZjZmYTU1MmY0OWRlNGFmOWZiMi00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"/>
						</div>
						<div style="float: left;">
							<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS84ZDcyYzkwY2YzMDJkNmYwNmQyNzk2MWNiYjEwOWM5Ny00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"/>
						</div>
						<div style="float: left;">
							<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS85OWJmZjI0NWJmZWY1YzRmNWUxZmRhNzI1YzY2NGE0My00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"/>
						</div>
						<div style="float: left;">
							<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS85OWJmZjI0NWJmZWY1YzRmNWUxZmRhNzI1YzY2NGE0My00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"/>
						</div>
						<div style="float: left;">
							<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS8xY2FkNmNhNzk0ZDg0MTllYTQ0ODhkMjYwZWNkN2Y0ZS00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"/>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
</script>

<style>
	.img_s img{
		margin: 3px;
	}
	.img_s img:hover{
		transform:scale(1.1);
	}
</style>