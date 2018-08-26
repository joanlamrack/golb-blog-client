<template>
	<div class="createPost">
		<div v-if='title == ""'>
			<div class="preloader-wrapper big active">
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
		<div class="row" v-else>
			<form class="col s12">
				<div class="row">
				<div class="input-field col s12">
					<input id="last_name" v-model="title" placeholder="Title" type="text" class="validate">
					<label for="last_name">Title</label>
				</div>
				</div>
				<div class="row">
				<div class="input-field col s12">
					<input id="email" v-model="content" placeholder="Content" type="text" class="validate">
					<label for="email">Content</label>
				</div>
				</div>
			</form>
		</div>
		<button  v-if='!title == ""' class="btn waves-effect waves-light" @click="createpost" type="submit" name="action">Submit
			<i class="material-icons right">send</i>
		</button>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name:"editpost",
	data(){
		return{
			title:"",
			content:""
		}
	},
	methods:{
		createpost(){
			let self = this;
			axios.patch(`https://golb-blog.joanlamrack.me/articles/${this.$route.params.id}`,{
				title:this.title,
				content:this.content
			}, {
			headers:{
				token:localStorage.getItem("token")
			}
		})
		.then(({data})=>{
			alert("Success")
			this.$router.push("/article");
		})
		.catch(err=>{
			console.log(err)
		})
		}
	},
	mounted(){
		axios.get(`https://golb-blog.joanlamrack.me/articles/${this.$route.params.id}`)
			.then(({data})=>{
				this.title=data.title
				this.content=data.content
			})
			.catch(err=>{

			})
	}
}
</script>

<style scoped>
.createPost {
	height: 100%;
}
</style>
