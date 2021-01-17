<template>
  <b-container class="home__container d-flex align-items-center justify-content-center">
      <div class="weighty-card px-5">
          <div class="home__logo py-3">
            <img src="../assets/logo.svg" alt="weighty-logo" width='45'>
            <h1>Weighty</h1>
          </div>
          <div class="home__description">
              <p>Weighty es una aplicación de salud que te ayuda a lograr tus objetivos de peso, el cual puedes ingresar diariamente.</p>
              <p>Por otro lado, te ayuda a la concresión de metas, sugiriendo consumo diario de calorías, tomando en cuenta tu dieta y objetivos.</p>
              <p>También ayuda a mantener a tu familia y mascotas saludables, permitiendo llevar el control de más personas.</p>
              <h4>¿Qué esperas para cumplir tus metas?</h4>
          </div>
          <div class="home__btns">
              <b-row>
                  <b-col class='col-12 col-md-6 my-1'>
                      <router-link to="/login"><button class="w-100 btns__login">Iniciar Sesión</button></router-link>
                  </b-col>
                  <b-col class='col-12 col-md-6 my-1'>
                      <router-link to="/signup"><button class="w-100 btns__signup">Regístrate</button></router-link>
                  </b-col>
              </b-row>
          </div>
          
      </div>
  </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
  background-image: -webkit-linear-gradient(-109deg, white 50%, #53e0bf 50%);
}
.weighty-card {
  border: 0.5rem solid #53E0BF;
}

.weighty-card h1, .weighty-card h4 {
    color: #53E0BF;
}
.home__container {
    height: 100vh;
}
.home__description p{
    color: #707070a1;
}
.home__btns button {
  border: none;
  padding: 0.3rem 2rem;
  border-radius: 0.5rem;
  width: 100%;
  color: #fff;
}
.home__btns .btns__login {
    background-color: #53e0bf;
}
.home__btns .btns__signup {
    background-color: #64A0D8;
}

</style>