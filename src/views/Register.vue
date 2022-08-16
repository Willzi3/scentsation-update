<template>
  <div class="container">
    <form @submit.prevent="register">
      <p>Register your profile on Scentsation</p>
      <fieldset>
        <input type="text" name="full_name" v-model="full_name" placeholder="Full Name" />
        <input type="text" name="email" v-model="email" placeholder="Email" />
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <input type="text" name="user_type" v-model="user_type" placeholder="User Type:" />
        <input type="text" name="billing_address" v-model="billing_address" placeholder="Billing Address:" />
        <input type="text" name="default_shpping_address" v-model="default_shipping_address" placeholder="Default Shipping Address:" />
        <input type="text" name="country" v-model="country" placeholder="Country:" />
        <input type="text" name="phone" v-model="phone" placeholder="Phone:" />
        <!-- Button to submit  -->
      <input type="submit" value="Register" />
      </fieldset>
      
    </form>
    <div v-if="user">
      Welcome {{ user.fullname }}, Your sign up was successsul
    </div>
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
      full_name: "",
      email: "",
      password: "",
      user_type: "",
      phone: "",
      country: "",
      billing_address: "",
      default_shipping_address: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
    full_name: this.full_name,
      email: this.email,
      password: this.password,
      user_type: this.user_type,
      phone: this.phone,
      country: this.country,
      billing_address: this.billing_address,
      default_shipping_address: this.default_shipping_address,
      });
    },
  },
};
</script>
<style>
.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}</style>
