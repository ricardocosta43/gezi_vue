<template>
  <div>
    <!-- <div class="alert alert-danger" role="alert" :style="{visibility: errors.length ? 'visible' : 'hidden'}">
      <p v-if="errors.length">
        <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
        <ul>
          <li v-bind:key=error v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
    </div> -->

    <form action="">
      <h2 class="text-center">Dados da Empresa</h2>
      <h6 id="progress">Progresso</h6>
      <div class="progress" id="progress">
        <div class="progress-bar bg-success" 
              role="progressbar" 
              style="width: 25%" 
              aria-valuenow="25" aria-valuemin="0" 
              aria-valuemax="100">Etapa 1</div>
        <div class="progress-bar bg-primary" 
              role="progressbar" 
              style="width: 25%" 
              aria-valuenow="25" aria-valuemin="0" 
              aria-valuemax="100">Etapa 2</div>
      </div>

      <div class="form-group">
        <div class="col-md-6">
          <label for="">Email</label>
          <input type="text"
              class="form-control form-control-sm" 
              name="" id="" placeholder="">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="container">
              <a type="button" class="btn btn-secondary"
                  href="javascript:void(0)" @click="entAdd">
                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  <span class="align-middle">&nbsp;Voltar</span>
              </a>
          </div>     
        </div>
        <div class="col-md-3 text-right">
          <button class="btn btn-primary">Próximo &nbsp;
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button>      
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
	name: "EntAdd2",
	data: function() {
		return {
			errors: [],
		};
	},
	methods: {
		entAdd(){
			this.$router.push({
				path: "/createPartner"
			});
		},
	}
};
</script>

<style>
  #progress{
    margin: 15px;
  }
</style>