<template>
  <div class="background-line-diagonal pt-5">
    <b-row class="m-0">
      <b-col class="col-12 col-md-4 mx-auto">
        <b-card class="text-center">
          <b-row>
            <b-col cols="8" class="mx-auto">
              <h1 class="mb-5">Inicio de sesión</h1>
              <div class="text-left">
                <label>Nombre de usuario</label>
                <b-input-group size="md" class="mb-4">
                  <b-form-input v-model="user"></b-form-input>
                </b-input-group>
              </div>
              <div class="text-left">
                <label>Contraseña</label>
                <b-input-group size="md" class="mb-5">
                  <b-form-input
                    type="password"
                    v-model="password"
                  ></b-form-input>
                </b-input-group>
              </div>
              <b-button block class="button mb-5" @click="signIn"
                >Iniciar Sesion</b-button
              >
            </b-col>
          </b-row>
          <b-alert v-model="show" variant="danger"
            >Inicio de sesión incorrecto</b-alert
          >
        </b-card>
      </b-col> </b-row
    ><br />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "LogIn",
  data() {
    return {
      user: "",
      password: "",
      show: false,
      idToken: ""
    };
  },
  methods: {
    //test@test.net / test123
    signIn() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user, this.password)
        .then(() => {
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(idToken => {
              this.idToken = idToken;
<<<<<<< HEAD
              this.$router.push('/profile')
=======
              this.$router.push("/profile");
>>>>>>> eb24d32fa871f01a8afabb9764badb61e07f253e
            });
        })
        .catch(err => {
          console.log(err.code);
          this.show = true;
        });
    }
  }
};
</script>

<style scoped>
.background-line-diagonal {
  background-image: -webkit-linear-gradient(-109deg, white 50%, #53e0bf 50%);
  height: 100vh;
}
.button {
  background-color: #53e0bf;
  border-color: #53e0bf;
}
</style>
