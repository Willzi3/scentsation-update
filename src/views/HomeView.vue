<template>
  <div class="container">
    <form @submit.prevent="login">
      <h1>Login</h1>
       <input type="text" name="email" v-model="email" placeholder="Email:" />
        <input type="password" name="password" v-model="password" placeholder="Password:" />
         <!-- Button to submit  -->
        <input type="submit" value="Login" />
     <div class="form-extra">
      <router-link to="/register"><p>Register</p></router-link>
       <router-link to="/forgot-psw"><p>Forgot Password</p></router-link>
     </div>
    </form>
    <div v-if="user">Welcome {{ user.fullname }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
h1{
  color: white;
  font-family: 'Rubik Distressed';
  font-size: 3rem;
  letter-spacing: 2px;
}
.container{
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form{
  width: 300px;
  height: 300px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: lightsalmon;
    border-radius: 10px;
    gap: 10px;
}
form input {
  width: 200px;
  border-radius: 5px;
  height: 30px;
  border: none;
  background: white;
  font-weight: bold;
  color: black;
  text-align: left;
}
.form-extra{
  display: flex;
  gap: 12px;
}
.form-extra p {
  background: white;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}
.form-extra a{
  text-decoration: none;
  color: black;
}
</style>
