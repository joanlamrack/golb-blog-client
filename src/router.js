import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Content from "./components/Content.vue";
import Login from "./views/Login.vue";
import CreatePost from "./views/CreatePost.vue";
import SignUp from "./views/SignUp.vue";
import UserPosts from "./views/UserPosts.vue";
import EditPost from "./views/EditPost.vue";

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
					component: () => import("./components/ArticleView.vue")
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
			path: "/userposts",
			name: "userposts",
			component: UserPosts,
			children: [
				{
					path: "/userposts/:id",
					name: "userpostsdetail",
					component: () => import("./components/ArticleView.vue")
				},
				{
					path: "/userposts/edit/:id",
					name: "editpost",
					component: EditPost
				}
			]
		}
	]
});
