<template>
	<div>
		<div class="no4">
			<div class="all">
				<h4>{{json.name}}
				</h4>
				<p>{{json.content}}</p>
			</div>

			<div class="img">
				<img :src="json.imgurl"/>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		props: ['no4_json'],
		data() {
			return {
				json: this.no4_json
			}
		}
	}
</script>

<style>
	
	.all{
		float:left;
		width: 83%;
		height: 150px;
		border-bottom: 1px dashed #CCCCCC;
		margin-top: 10px;
	}
	.all:hover p{
		padding-left: 10px;
	}
	.img:hover{
		transform: scale(1.1);
	}
	.all h4{
		color: #444444;
    font-size: 15px;
    font-family: 微软雅黑;
    line-height: 15px;
    margin-top: 10px;
	}
	.all p{
		color:#999999;font-size:12px;font-family:微软雅黑;line-height:24px;padding-right:60px;
		margin-top: 20px;
	}
	.img{
		float:right;
		padding-top: 10px;
		display: inline-block;
	}
</style>