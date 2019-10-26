import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import no2 from './components/no2.vue'
import no3 from './components/no3.vue'
import no4 from './components/no4.vue'
import no5 from './components/no5.vue'
import no6 from './components/no6.vue'
import no_1 from './components/no_1.vue'

Vue.use(Router)
//    肉分类
		Vue.component('lee',{
			template:'#lee',
			data(){
				return{
					
				}
			}
		})
		//品牌介绍
		Vue.component('jieshao',{
			template:'#jieshao',
			data(){
				return{
					
				}
			}
		})
		
		//食品产业链
		Vue.component('shipin',{
			template:'#shipin',
			data(){
				return{
					
				}
			}
		})
//		制作方法
		Vue.component('cooking',{
			template:'#cooking',
			data(){
				return{
					
				}
			}
		})
		//新闻
		Vue.component('news',{
			template:'#news',
			data(){
				return{
					
				}
			}
		})
		//客户评价
		Vue.component('kehu',{
			template:'#kehu',
			data(){
				return{
					
				}
			}
		})
		//合作伙伴
		Vue.component('hezuo',{
			template:'#hezuo',
			data(){
				return{
					
				}
			}
		})
		
		//尾部
		Vue.component('ender',{
			template:'#ender',
			data(){
				return{
					
				}
			}
		})
		
		//第二页
		
		//品牌介绍
		component:'about',{
			template:'#about',
			data(){
				return{
					
				}
			}
		}
		var routes = [
		{
		  path:'/',
		  name:'index',
		  component:index
		},
		
		{
		  path:'/no_1/:uid',
		  name:'no_1',
		  component:no_1
		},
		{
		  path:'/no2',
		  name:'no2',
		  component:no2
		},
		{
		  path:'/no3',
		  name:'no3',
		  component:no3
		},
		{
		  path:'/no4',
		  name:'no4',
		  component:no4
		},
		{
		  path:'/no5',
		  name:'no5',
		  component:no5
		},
		{
		  path:'/no6',
		  name:'no6',
		  component:no6
		},
		]
		
var router = new Router({
	routes
})

export default router
