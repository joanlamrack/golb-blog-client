<template>
  <div id="app">

	<Navbar :isloggedin="isLoggedIn"></Navbar>
	
	<router-view></router-view>
    
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
		  isLoggedIn:false
	  }
  }
};
</script>

<style scoped>
	#app{
		height: 100%;
	}
</style>


