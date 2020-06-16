<template>
	<div>
		<h1>Esta é a home</h1>
		<div class="alert alert-success" role="alert">
			<strong>success</strong>
		</div>
		<form action="">
			<div class="form-group">
				<label for=""></label>
				<input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="">
				<small id="emailHelpId" class="form-text text-muted">Help text</small>
			</div>
			<div class="form-group">
			<label for=""></label>
			<input type="text"
				class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
			<small id="helpId" class="form-text text-muted">Help text</small>
			</div>
			<button type="button" class="btn btn-primary" @click="sendMail()">Enviar email</button>
		</form>
	</div>	
	
</template>

<script>
import axios from "axios/dist/axios";

export default {
	name: "Home",
	data: function() {
		return  {			
			dataOk:"",
		};
	},
	methods: {
		sendMail(){
			var data = {
				to: "ricardo_costa43@hotmail.com",
				subject: "email de teste",
				html: "<h1> email enviado </h1>",
			};

			axios({
				url: "http://localhost:8081/sendmail",
				method: "POST",
				contentType: "application/json",
				data:{data},
			}).then(() => {
				this.dataOk = "ok";
			});
		}
	}
	
};
</script>