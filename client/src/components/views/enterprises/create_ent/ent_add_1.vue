<template>
<div>
  <div>
    <!-- <div class="alert alert-danger" role="alert" :style="{visibility: errors.length ? 'visible' : 'hidden'}">
      <p v-if="errors.length">
        <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
        <ul>
          <li v-bind:key=error v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
    </div> -->
    
    <form action="" @submit="checkForm" v-bind:class="{ 'was-validated': validate }">
      <h1 class="text-center">Faça seu cadastro e seja nosso parceiro</h1>
      <h6 id="progress">Progresso</h6>
      <div class="progress" id="progress">
        <div class="progress-bar" role="progressbar" 
            style="width: 25%;" aria-valuenow="25" aria-valuemin="0" 
            aria-valuemax="100">1ª etapa</div>
      </div>

      

      <div class="form-group">
        <div class="col-md-6">
          <ValidationProvider 
            rules="required|min:3|email|max:100" 
            :bails="false"
            v-slot="{
              classes,
              errors
            }">
            <div class="control" :class="classes">
              <label for="email">Email</label>
              <input v-model="enterprise.email" type="email" 
                    class="form-control form-control-sm"
                    name="email" id="email" placeholder="Email" >
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>
      </div>

      <!-- <div class="form-group">
        <div class="col-md-6">
          <label for="email">Email</label>
          <input type="email" v-model="enterprise.email"
              class="form-control form-control-sm" 
              name="email" id="email" placeholder="Email">
        </div>
        <div class="invalid-feedback">{{errors.email}}</div>
      </div> -->
      <div class="form-group">
        <div class="col-md-6">
          <label for="">Senha</label>
          <input type="text"
              class="form-control form-control-sm" 
              name="" id="" placeholder="">
        </div>
      </div>
      <div class="form-group">
        <div class="col-md-6">
          <label for="">Confirme a Senha</label>
          <input type="text"
              class="form-control form-control-sm" 
              name="" id="" placeholder="">
        </div>      
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">
          Li e concordo com nossa
          <span><a href="http://gezi.com.br/#privacypolicy" target="_blank">Política de Privacidade</a></span>
          e os
          <span><a href="http://gezi.com.br/#termsofservice" target="_blank">Termos de Serviço</a></span>
        </label>
      </div>
      <div class="row">
        <div class="col-md-3">
          <button class="btn btn-danger" @click="home()">Cancelar
          </button>      
        </div>
        <div class="col-md-3 text-right">
          <button class="btn btn-primary" type="submit">Próximo &nbsp;
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button>      
        </div>
      </div>
    </form>
  </div>

</div>
</template>

<script>
//import enterpriseModel from "../../models/enterprises_model.vue";
import { extend } from "vee-validate";

extend("min", {
	validate(value, args) {
		return value.length >= args.length;
	},
	params: ["length"]
});

export default {
  
  
	name: "EntAdd",
	data: function() {
		return {
			errors: {
				"ativo": null,  
				"nome": null,
				"id": null,
				"fantasia": "teste",
				"telefone": null,
				"endereco": null,
				"bairro": null,
				"celular": null,
				"cep": null,
				"cidade": null,
				"cnpj": null,
				"contrato": null,
				"complemento": null,
				"cpf": null,
				"email": null,
				"sobrenome": null,
				"razaoSocial": null,
				"numero": null,
				"estado": null,
				"especialidade": null,
				"recipientId": null,
				"site": null,
			},
			enterprise : {
				"ativo": null,  
				"nome": null,
				"id": null,
				"fantasia": "teste",
				"telefone": null,
				"endereco": null,
				"bairro": null,
				"celular": null,
				"cep": null,
				"cidade": null,
				"cnpj": null,
				"contrato": null,
				"complemento": null,
				"cpf": null,
				"email": null,
				"sobrenome": null,
				"razaoSocial": null,
				"numero": null,
				"estado": null,
				"especialidade": null,
				"recipientId": null,
				"site": null,
			},
      
			validate: false,
		};
	},
	methods:{
		checkForm: function () {
			if (this.enterprise.email) {
				return this.entAdd2();        
			}

			this.errors.email = null;
      
			if (!this.enterprise.email == null) {
				this.errors.email.push("Informe um email.");
			}
			/* if (!this.confEmail) {
				this.errors.push("Confirme o email.");
			}
			if (!this.password) {
				this.errors.push("Informe uma senha.");
			}
			if (!this.confPassword) {
				this.errors.push("Confirme a senha.");
			}
			if (!this.name) {
				this.errors.push("O nome é obrigatório.");
			}
			if (!this.lastName) {
				this.errors.push("O sobrenome é obrigatório.");
			} */
      
      

			/* e.preventDefault(); */
      
			this.validate = true;
		},
    
		entAdd2(){
			this.$router.push({
				path: "/createPartner2"
			});
		},
    
		home(){
			this.$router.push({
				path: "/"
			});
		},
    
	}
};
</script>


<style lang="stylus" scoped>

  .control
    width: 100%
    span
      display: block
    input
      padding: 5px 10px

    &.invalid
      span
        color: #EB0600
      input
        border: 1px #EB0600 solid
      .form-control:focus{
        box-shadow: 0 0 0 0.2rem 	rgba(255,0,0, 0.25);
      }
    &.valid
      span
        color: #045929
      input
        border: 1px #045929 solid

</style>