const { execute } = require("apollo-link");
const { WebSocketLink } = require("apollo-link-ws");
const { SubscriptionClient } = require("subscriptions-transport-ws");
const { createHttpLink } = require("apollo-link-http");
const fetch = require("node-fetch");
const ws = require("ws");

const getWsClient = function(wsurl) {
	const client = new SubscriptionClient(
		wsurl, {reconnect: true}, ws
	);
	return client;
};

const createSubscriptionObservable = (wsurl, query, variables) => {
	const link = new WebSocketLink(getWsClient(wsurl));
	return execute(link, {query: query, variables: variables});
};

const gql = require("graphql-tag");
// A subscription query to get changes for author with parametrised id 
// using $id as a query variable
const SUBSCRIBE_QUERY = gql`
subscription {
    clients  {
      active
      cellphone
      customer_id
      date_creation
      date_last_updated
      default_card
      document
      document_type
      email
      id
      last_name
      name
      country
      city
      neighborhood
      state
      street
      street_number
      zipcode
      card_default {
        last_four_digits
        brand
      }
      usuario {
        id
      }
    }
  }
`;

const hasuraLink = createHttpLink({
	uri: "https://geziapp.herokuapp.com/v1/graphql",    
	headers:  {
		"x-hasura-admin-secret": "HasuraGezi@123",
	},
	fetch: fetch,
});

const subscriptionClient = createSubscriptionObservable(
	hasuraLink, // GraphQL endpoint
	SUBSCRIBE_QUERY,                                       // Subscription query
	//{id: 1}                                                // Query variables
);
var consumer = subscriptionClient.subscribe(eventData => {
	// Do something on receipt of the event
	console.log("Received event: ");
	console.log(JSON.stringify(eventData, null, 2));
}, (err) => {
	console.log("Err");
	console.log(err);
});