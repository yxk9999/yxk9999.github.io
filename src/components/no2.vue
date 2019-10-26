<template>
	<div style="width: 80%;margin: 0 auto;min-height: 400px;">
		<div id="nav2">
			<div style="width:40%;height: 60px;float: left;padding-top: 35px;box-sizing: border-box;">
				<el-breadcrumb separator-class="el-icon-arrow-right"  style="float: left;">
			
				<el-breadcrumb-item>您当前的位置：</el-breadcrumb-item>
			
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				
					<el-breadcrumb-item>品牌介绍</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div style="float:right;">
				<ul>
					<li>
						<a href="#c">人才招聘</a>
					</li>
					<li>
						<a href="#b">合作伙伴</a>
					</li>
					<li>
						<a href="#a">品牌简介</a>
					</li>
			   </ul>
			</div>
			
		</div>

		<!--品牌简介-->
		<template id="about">
			<div>
				<div style="width: 100%;height: 300px;margin-top: 50px;padding-bottom:100px;" id="a">
					<div style="text-align: center;">
						<div>
							<p style="font-family: 微软雅黑;font-size: 18px;color: #444444;">品牌简介</p>
							<span style="font-family:Raleway;font-size:13px;font-weight:normal;font-style:normal;color:#999999;display:block;vertical-align:bottom;padding-top: 5px;">ABOUT</span>
						</div>
						<div style="width:20px;height: 1px;background: #444444;margin-top: 10px;margin: 10px auto;"></div>
					</div>
					<div>
						<p style="font-size: 14px;color: #999999;line-height: 30px;margin-top: 30px;">
							我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。
							<br> 我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件…
						</p>
					</div>
				</div>
			</div>
		</template>

		<!--合作伙伴-->
		<template id="about">
			<div>
				<div style="width: 100%;height: 212px;margin-top: 50px;" id="b">
					<div style="text-align: center;">
						<div>
							<p style="font-family: 微软雅黑;font-size: 18px;color: #444444;">合作伙伴</p>
							<span style="font-family:Raleway;font-size:13px;font-weight:normal;font-style:normal;color:#999999;display:block;vertical-align:bottom;padding-top: 5px;">PARTNER</span>
						</div>
						<div style="width:20px;height: 1px;background: #444444;margin-top: 10px;margin: 10px auto;"></div>
					</div>
					<div class="img1">
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MGNkOTE5ODczMmZkZjhmM2EyNDJlMDQ5MzRiMGYzZC5wbmc_p_p100_p_3D.png" style="width: 180px;height: 80px;" />
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MGNkOTE5ODczMmZkZjhmM2EyNDJlMDQ5MzRiMGYzZC5wbmc_p_p100_p_3D.png" style="width: 180px;height: 80px;" />
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MGNkOTE5ODczMmZkZjhmM2EyNDJlMDQ5MzRiMGYzZC5wbmc_p_p100_p_3D.png" style="width: 180px;height: 80px;" />
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MGNkOTE5ODczMmZkZjhmM2EyNDJlMDQ5MzRiMGYzZC5wbmc_p_p100_p_3D.png" style="width: 180px;height: 80px;" />
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MGNkOTE5ODczMmZkZjhmM2EyNDJlMDQ5MzRiMGYzZC5wbmc_p_p100_p_3D.png" style="width: 180px;height: 80px;" />
						<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MGNkOTE5ODczMmZkZjhmM2EyNDJlMDQ5MzRiMGYzZC5wbmc_p_p100_p_3D.png" style="width: 180px;height: 80px;" />
					</div>
				</div>
			</div>
		</template>
		<!--人才招聘-->
		<template id="about">
			<div>
				<div style="width: 100%;height:auto;margin-top: 50px;" id="c">
					<div style="text-align: center;">
						<div>
							<p style="font-family: 微软雅黑;font-size: 18px;color: #444444;">人才招聘</p>
							<span style="font-family:Raleway;font-size:13px;font-weight:normal;font-style:normal;color:#999999;display:block;vertical-align:bottom;padding-top: 5px;">RECRUIT</span>
						</div>
						<div style="width:20px;height: 1px;background: #444444;margin-top: 10px;margin: 10px auto;"></div>
					</div>
					<div style="width: 100%;height: 516px;margin-top: 60px;">
						<div style="width: 50%;float: left;height: 516px;padding-top: 40px;box-sizing: border-box;">
							<p style="font-size: 18px;">应聘岗位：</p>
							<div style="color:#8d9095;font-size: 14px;line-height: 25px;margin-top: 20px;">
								<span style="margin-top: 10px;display: inline-block;font-size: 16px;color: #000000;">一、资格要求：</span>
								<p>1.道德品质良好；</p>
								<p>2.身体健康；</p>
								<p>3.成绩优良，研究生须通过国家英语六级考试，本科生通过国家英语四级考试</p>
							</div>
							<div style="color:#8d9095;font-size: 14px;line-height: 25px;margin-top: 30px;">
								<span style="margin-top: 10px;display: inline-block;font-size: 16px;color: #000000;">二、招聘安排：</span>
								<p>1.即日起接收简历投递，截止日期2016年12月31日；</p>
								<p>2.面试时间另行通知（具体时间以短信形式通知）。</p>
							</div>
							<div style="color:#8d9095;font-size: 14px;line-height: 25px;margin-top: 30px;">
								<span style="margin-top: 10px;display: inline-block;font-size: 16px;color: #000000;">三、应聘方式：</span>
								<p>1.登陆企业网站（www.xxx.com.cn），按要求成功投递电子报名表及登记表视为应聘有</p>
								<p>2.应聘报名表和信息登记表请以同一邮件中两个附件的形式发送至邮箱：邮箱：123@163.com。</p>
								<p>3.人事处联系电话：0000-8888</p>
							</div>

						</div>
						<div style="width: 50%;float: left;height: 516px;">
							<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOS81M2IxMDFjZTkxMDRiNzdjMmNiZDU2ZmRhYjQwYjU5NS00NDB4NTE2LnBuZw_p_p100_p_3D_p_p100_p_3D.png" style="margin-left: 30px;" />
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
	#nav2 {
		width: 100%;
		height: 60px;
	}
	#nav ul {
		width: 40%;
		float: right;
		overflow: hidden;
	}
	
	#nav2 li {
		list-style: none;
		float: right;
		margin-left: 60px;
		color: #666666;
		line-height: 80px;
		height: 60px;
	}
	#nav2 li:hover{
		border-bottom: 1px solid #000;
	}
	#nav2 ul li a {
		color: #666666;
	}
	
	.img1 img {
		margin-left: 20px;
		margin-top: 25px;
	}
	
	.img1 img:nth-child(1) {
		margin-left: 0;
	}
</style>