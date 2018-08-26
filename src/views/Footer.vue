<template>
   <footer class="page-footer">
		<div class="footer-copyright">
			<div class="container">
				<a class="grey-text text-lighten-4 center" href="#!">{{text}}</a>
			</div>
		</div>
    </footer>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data(){
	  return{
		  text:"© 2018 Joan Lamrack"
	  }
  }
}
</script>

<style scoped>
.page-footer {
	background-color: rgb(136, 178, 192);
}

</style>

