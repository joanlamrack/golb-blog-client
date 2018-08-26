<template>
	<div v-if="Object.keys(articleDetail).length === 0">
		loading....
	</div>
	<div class="article" v-else>
		<h1>{{articleDetail.title}}</h1>
		<h6>{{articleDetail.writer.name}}</h6>
		<p>{{articleDetail.content}}</p>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data(){
		return{
			articleDetail:{}
		}
	},
	methods:{
		loadData(){
			console.log(this.$route.params.id);
			axios.get(`https://golb-blog.joanlamrack.me/articles/${this.$route.params.id}`)
			.then(({data})=>{
				this.articleDetail = data;
			})
			.catch(err=>{

			})
		}
	},
	mounted(){
		this.loadData();
	}
}
</script>


<style scoped>
.article {
	height: 100%;
}
</style>
