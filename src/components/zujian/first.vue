<template>
	<div>
		<div id="list">
			<div class="no1">
				<a :href="'#/no_1/'+json.uid"><img :src="json.imgurl" /></a>
			</div>
			<div class="no2">
				{{json.name}}
			</div>
			<div class="no3">
				{{json.content}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['no3_json'],
		data() {
			return {
				json: this.no3_json
			}
		}
	}
</script>

<style>
	#list {
		padding: 10px;
	}
	#list>.no1:hover img{
		transform:scale(1.1);
	}
	#list>.no1 {
		min-height: 100px;
		/*background: #CCCCCC;*/
		width: 300px;
	}
	
	#list>.no1 img {
		width: 100%;
		height: 200px;
	}
	
	#list>.no2 {
		font-weight: normal;
		color: #444444;
		line-height: 16px;
		text-align: left;
		margin-top: 10px;
	}
	
	#list>.no3 {
		color: #aaaaaa;
		font-size: 13px;
		font-family: 微软雅黑;
		padding-top: 2px;
		/*padding-left: 10px;*/
		padding-right: 10px;
	}
</style>