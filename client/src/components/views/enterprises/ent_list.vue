<template>
  <div>
    <h1>Empresas</h1>
    <ent-item v-for="ent in empresas" v-bind:key="ent.id" :enterprise="ent"></ent-item>
  </div>
</template>

<script>
import EntItem from "./ent_item";
import gql from "graphql-tag";

const GET_EMPRESAS = gql`
  query {
    empresas {
      id
      fantasia
    }
  }
`;

export default {
	name: "EntList",
	components: { EntItem },
	data() {
		return {
			empresas: []
		};
	},
	apollo: {
		empresas: {
			query: GET_EMPRESAS,
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
