<template>
    <div>
      <!-- <img alt="Vue logo" src="./assets/logo.png" width="150"> -->
      <div id="header">
         <Header></Header>
      </div>
      <div class="container" id="container">
        <router-view></router-view>
      </div>    
      
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import "font-awesome/css/font-awesome.css";

import Header from "./components/views/home/header.vue";

export default {
	name: "App",
	components: {	Header }
};
</script>

<style>
  #container {
    padding: 30px;
  }
</style>
