<template>
  <div class="background-line-diagonal mt-5">
    <b-row>
      <b-col cols="4"></b-col>
      <b-col cols="4">
        <b-card class="text-center">
          <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="8">
              <h1 class="mb-5">Inicio de sesión</h1>
              <div class="text-left">
                <label>Nombre de usuario</label>
                <b-input-group size="md" class="mb-4">
                  <b-form-input></b-form-input>
                </b-input-group>
              </div>
              <div class="text-left">
                <label>Contraseña</label>
                <b-input-group size="md" class="mb-5">
                  <b-form-input></b-form-input>
                </b-input-group>
              </div>
              <b-button block class="button mb-5">Iniciar Sesion</b-button>
            </b-col>
            <b-col cols="2"></b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="4"></b-col>
    </b-row><br>
  </div>
</template>

<script>
export default {
  name: "LogIn",
};
</script>

<style scoped>
.background-line-diagonal {
    background-image: -webkit-linear-gradient(-109deg, white 50%, #53E0BF 50%);
  }
.button {
    background-color: #53E0BF;
    border-color: #53E0BF;
}  
</style>