
import Vue from "vue";
import Router from "vue-router";

import EntAdd from "../components/views/enterprises/create_ent/ent_add_1.vue";
import EntAdd2 from "../components/views/enterprises/create_ent/ent_add_2.vue";
import EntAdd3 from "../components/views/enterprises/create_ent/ent_add_2.vue";
import EntAdd4 from "../components/views/enterprises/create_ent/ent_add_2.vue";
import EntList from "../components/views/enterprises/ent_list.vue";
import Home from "../components/views/home/home.vue";

Vue.use(Router);

export function createRouter() {
	return new Router({
		mode: "history",
		fallback: false,
		scrollBehavior: () => ({ y: 0 }),
		routes: [
			{ path: "/", component: Home },
			{
				path: "/listPartners",
				component: EntList
			},
			{
				path: "/createPartner",
				component: EntAdd
			},
			{
				path: "/createPartner2",
				component: EntAdd2
			},
			{
				path: "/createPartner3",
				component: EntAdd3
			},
			{
				path: "/createPartner4",
				component: EntAdd4
			},
		]
	});
}