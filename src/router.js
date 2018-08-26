import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Content from "./components/Content.vue";
import Login from "./views/Login.vue";
import CreatePost from "./views/CreatePost.vue";
import SignUp from "./views/SignUp.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			redirect: "/article"
		},
		{
			path: "/article",
			name: "home",
			component: Content,
			children: [
				{
					path: "/article/:id",
					name: "articledetail",
					component: () =>  import("./components/ArticleView.vue")

				}
			]
		},

		{
			path: "/login",
			name: "login",
			component: Login
		},

		{
			path: "/create",
			name: "create",
			component: CreatePost
		},

		{
			path: "/signup",
			name: "signup",
			component: SignUp
		},

		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
	]
});
