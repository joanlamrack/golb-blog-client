<template>
	<header>
		<nav>
			<div class="nav-wrapper">
			<ul id="nav-mobile" class="left hide-on-med-and-down">
				<router-link to="/article" tag="li">
					<a href="">
						<i class="material-icons left">assignment</i>
						<b>Posts</b>
					</a>
				</router-link>
				<router-link to="/create" tag="li" v-if="isloggedin">
					<a href="">
						<i class="material-icons left">create</i>
						<b>Create Post</b>
					</a>
				</router-link>
				<router-link to="/userposts" tag="li" v-if="isloggedin">
					<a href="">
						<i class="material-icons left">view_headline</i>
						<b>Your blog</b>
					</a>
				</router-link>
			</ul>
			<a class="brand-logo center">
				<img src="../assets/logo-black.png" height=55px>
			</a>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<router-link to="/login" tag="li" v-if="!isloggedin">
					<a class="waves-effect waves-dark btn">
						<b>Login</b>
					</a>
				</router-link>
				<router-link to="/signup" tag="li" v-if="!isloggedin">
					<a class="waves-effect waves-dark btn">
						<b>
							Sign Up
						</b>
						
					</a>
				</router-link>
				<li @click="logout" v-if="isloggedin"> 
					<a class="waves-effect waves-dark btn">
						<b>
							Log Out
						</b>
						
					</a>
				</li>
			</ul>
			
			</div>
		</nav>
	</header>
  
</template>

<script>
export default {
	props:["isloggedin", "email"],
	methods:{
		logout(){
			console.log("logged out!")
			
			localStorage.setItem("token", "");
			this.$emit("islogged", false);
			this.$router.push("/")
		}
	}
}
</script>


<style scoped>
nav {
	background-color: rgb(136, 178, 192);
}

.btn {
	background-color: white;
	color: rgb(136, 178, 192);
}
</style>

