<template>
	<div class="row">

		<div class="col s3">
			
			<div v-if="articles.length > 0">
				<div class="card blue-grey darken-1" v-for="(article, key) of articles" :key="key">
					<div class="card-content white-text">
						<span class="card-title">{{article.title}}</span>
						<span>{{article.writer.name}}</span>
						<router-link :to='{name:"articledetail",params:{id:article._id}}'>click</router-link>
					</div>
				</div>
			</div>
			<div class="preloader-wrapper big active" v-else>
				<div class="spinner-layer spinner-blue-only">
				<div class="circle-clipper left">
					<div class="circle"></div>
				</div><div class="gap-patch">
					<div class="circle"></div>
				</div><div class="circle-clipper right">
					<div class="circle"></div>
				</div>
				</div>
			</div>
			
		</div>
		
		<div class="col s9 content">
			<router-view :key="$route.fullPath"></router-view>
		</div>

	</div>
</template>

<style scoped>
 .row {
	height: 100%;
}
.content {
	height: 100%;
	overflow: auto;
}

.preloader-wrapper{
	margin-left:50%;
	margin-top:20%;
}

</style>

<script>
import axios from "axios";

export default {
	data(){
		return {
			articles:[]
		}
	},
	created(){
		axios.get("https://golb-blog.joanlamrack.me/articles")
		.then(({data})=>{
			this.articles = data;
		})
		.catch(err=>{
			
		})
	}	
}
</script>
