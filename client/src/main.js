import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// importa servidor
import server from "./server.js";
const apolloProvider = server();

// rotas
import { createRouter } from "./routers/routers.js";
const router =  createRouter();


// validadores
import { ValidationProvider, ValidationObserver, localize, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import br from "vee-validate/dist/locale/pt_BR.json";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Object.keys(rules).forEach(rule => {
	extend(rule, rules[rule]);
});
localize("pt_BR", br);


new Vue({
	router,
	apolloProvider,
	render: h => h(App),
}).$mount("#app");
