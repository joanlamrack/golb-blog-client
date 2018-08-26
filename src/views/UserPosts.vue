<template>
	<div class="row">

		<div class="col s3">
			<div v-if="articles.message =='No articles' ">
				No Articles
			</div>
			<div v-else-if="articles.length > 0">
				<div class="card blue-grey darken-1" style ="cursor:pointer" v-for="(article, key) of articles" :key="key">
						<router-link tag="div" class="card-content white-text" :to='{name:"userpostsdetail",params:{id:article._id}}'>
							<span>{{article.title}}</span><br>
							<span>Written by: You</span>
						</router-link>
						<router-link tag="button" class="btn" :to='{name:"editpost",params:{id:article._id}}'>EDIT</router-link>
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

.sidebar{
	overflow: auto;
	height: 100%
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
		axios.get("https://golb-blog.joanlamrack.me/articles/me", {
			headers:{
				token:localStorage.getItem("token")
			}
		})
		.then(({data})=>{
			console.log(data)
			this.articles = data.data;
		})
		.catch(err=>{
			console.log(err)
		})
	}	
}
</script>