<template>
	<div class="Login">
		<div class="row">
			<form class="col s12">
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

			<button class="btn waves-effect waves-light" @click="signin" type="submit" name="action">Submit
				<i class="material-icons right">send</i>
			</button>
			
		</div>
	</div>	
</template>

<script>
import axios from "axios"

export default {
	data(){
		return{
			email:"",
			password:""
		}
		
	},
	methods:{
		signin(){
			axios.post("https://golb-blog.joanlamrack.me/login",{
				email:this.email,
				password:this.password
			})
			.then(({data}) =>{
				localStorage.setItem("token",data.token);
				alert("Success");
				this.$emit("islogged", true);
				this.$emit("email", this.email);
				this.$router.push("/");
			})
			.catch(error=>{
				alert("Email or Password Wrong")
				this.$router.push("/signup")
			})
		}
	}
}
</script>


<style scoped>
.Login {
	height: 100%;
}
</style>

