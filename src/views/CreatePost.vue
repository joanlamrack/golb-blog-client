<template>
	<div class="createPost">
		<div class="row">
			<form class="col s12">
				<div class="row">
				<div class="input-field col s12">
					<input id="last_name" v-model="title" type="text" class="validate">
					<label for="last_name">Title</label>
				</div>
				</div>
				<div class="row">
				<div class="input-field col s12">
					<input id="email" v-model="content" type="text" class="validate">
					<label for="email">Content</label>
				</div>
				</div>
			</form>
		</div>
		<button class="btn waves-effect waves-light" @click="createpost" type="submit" name="action">Submit
			<i class="material-icons right">send</i>
		</button>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data(){
		return{
			title:"",
			content:""
		}
	},
	methods:{
		createpost(){
			axios.post("https://golb-blog.joanlamrack.me/articles",{
				title:this.title,
				content:this.content
			}, {
			headers:{
				token:localStorage.getItem("token")
			}
		})
		.then(({data})=>{
			alert("Success")
			this.$router.push("/");
		})
		.catch(err=>{
			console.log(err)
		})
		}
	}
}
</script>

<style scoped>
.createPost {
	height: 100%;
}
</style>
