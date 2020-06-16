
import Vue from "vue";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import VueApollo /*,  { ApolloProvider } */ from "vue-apollo";

export default function server() {
	const httpLink = new HttpLink({
		uri: "https://geziapp.herokuapp.com/v1/graphql",
		headers:  {
			"x-hasura-admin-secret": "HasuraGezi@123",
		}
	});
	
	const apolloClient = new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache(),
		connectToDevTools: true
	});
	
	Vue.use(VueApollo);

	const apolloProvider = new VueApollo({
		defaultClient: apolloClient
	});
	
	return apolloProvider;
	
}
