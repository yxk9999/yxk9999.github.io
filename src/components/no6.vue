<template>
	<div id="allmap" class="allmap"></div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {

			}
		},
		mounted() {
			// 百度地图API功能
			var map = new BMap.Map("allmap"); // 创建Map实例
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
			map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
			map.setCurrentCity("河南");
			// 开启鼠标滚轮缩放
			map.enableScrollWheelZoom(true);
				map.addControl(new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_TOP_LEFT
		}));
		map.addControl(new BMap.NavigationControl());
		map.addControl(
			new BMap.NavigationControl({
				anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
				type: BMAP_NAVIGATION_CONTROL_SMALL
			})
		);
		}
	}
</script>
<style scoped>
	html,
	body,
	.allmap {
		width: 80%;
		height: 700px;
		margin: 50px auto;
	}
</style>