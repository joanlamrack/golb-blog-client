<template>
	<div class="signup">
		<!-- {{error}} -->
		<div class="row">
			<form class="col s12">
				<div class="row">
				<div class="input-field col s12">
					<input id="last_name" v-model="name" type="text" class="validate">
					<label for="last_name">Name</label>
				</div>
				</div>
				<div class="row">
				<div class="input-field col s12">
					<input id="email" v-model="email" type="email" class="validate">
					<label for="email">Email</label>
				</div>
				</div>
				<div class="row">
				<div class="input-field col s12">
					<input id="password" v-model="password" type="password" class="validate">
					<label for="password">Password</label>
				</div>
				</div>
			</form>
		</div>
		<button class="btn waves-effect waves-light" @click="signup" type="submit" name="action">Submit
			<i class="material-icons right">send</i>
		</button>
	</div>
</template>

<script>
import axios from "axios"

export default {
	data(){
		return{
			error:"",
			name:"",
			email:"",
			password:"",
		}
	},
	methods:{
		signup(){
			axios.post("https://golb-blog.joanlamrack.me/register",{
				email: this.email,
				name: this.name,
				password: this.password
			})
			.then(({data})=>{
				alert("Success");
				this.$router.push('/login')
			})
			.catch((error)=>{
				this.error=error.response.data.error
			})
		}	
	},
	watch:{
		error:function(val){
			if(val){
				alert(val);
				this.error = ""
			}
		}
	}
	
}
</script>


<style scoped>
.signup {
	height: 100%;
}
</style>
