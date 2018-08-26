<template>
  <div id="app">

	<Navbar @token="setTokenToNull" :isloggedin="isLoggedIn" :email="email" @islogged="setToLoggedOn"></Navbar>
	
	<router-view @islogged="setToLoggedOn" @email="setEmail"></router-view>
    
	<Footer></Footer>

  </div>
</template>

<script>
//@ is an alias to /src
import Navbar from "@/views/Navbar.vue";
import Footer from "@/views/Footer.vue";
import Content from "@/components/Content.vue";

export default {
  name: "home",
  components: {
	Navbar,
	Footer,
	Content
  },
  data(){
	  return{
		  email:"",
		  isLoggedIn:false,
		  token:""
	  }
  },
  methods:{
	  setToLoggedOn(param){
		  console.log(param);
		 this.isLoggedIn = param;
	  },
	  setEmail(email){
		  this.email= email;
	  },
	  setTokenToNull(){
		  this.token = null;
	  }
  },
  mounted(){
	  console.log("mounted");
	  this.token = localStorage.getItem("token")
  },
  watch:{
	  token:function(val){
		  if(val!=="" && val){
			  this.isLoggedIn=true;
		  }
		  else{
			  this.isLoggedIn=false;
		  }
	  }
  }
};
</script>

<style scoped>
#app {
	height: 100%;
}
</style>


