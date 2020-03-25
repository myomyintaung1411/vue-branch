<template>
  <div class="register">
    <header>
      <h3>
        INSTA
        <span>CLONE</span>
        <h4>Register</h4>
      </h3>
    </header>

    <main class="form-group">
      <input type="text" v-model="forename" placeholder="Forename" />
      <input type="text" v-model="surname" placeholder="Surname" />
      <input type="text" v-model="email" placeholder="Email" :class="(hasErrors)?'err':''" />
      <input type="password" v-model="password" placeholder="Password" />
      <button class="login-btn" @click="register">Register</button>
      <div class="error_msg" v-if="hasErrors">{{error}}</div>
    </main>
    <footer>
      <p>
        Already Registerd?
        <router-link to="/login" class="link">Sign up</router-link>.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      forename: "",
      surname: "",
      email: "",
      password: "",
      hasErrors: false,
      error: ""
    };
  },
  methods: {
    register() {
      let api_url = this.$store.state.api_url;
      if (
        this.email == "" ||
        this.password == "" ||
        this.forename == "" ||
        this.surname == ""
      ) {
        return alert("Please fill in all field");
      }

      this.$http
        .post(api_url + "user/register", {
          forename: this.forename,
          surname: this.surname,
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.auth) {
            localStorage.setItem("jwt", response.data.token);
            this.$router.push("/");
          } else {
            this.error = response.data.msg;
            this.hasErrors = true;
          }
        })
        .catch(err => {
          this.hasErrors = true;
          this.error = err;
        });
    }
  }
};
</script>

<style lang="scss">
</style>
