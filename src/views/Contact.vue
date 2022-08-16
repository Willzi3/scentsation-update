<template>
  <div class="container">
    
    <form>
      <input type="text" name="full_name" v-model="full_name" placeholder="Full Name:"/>
      <input type="text" name="email" v-model="email" placeholder="Email:"/>
      <input type="text" name="phone" v-model="phone" placeholder="Phone:"/>
      <input type="text" name="country" v-model="country" placeholder="Country:"/>
      <textarea name="textarea" id="" cols="30" rows="10"></textarea>
      <button>Submit</button>
    </form>
    <div class="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1660652823266!5m2!1sen!2sza" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
form{
  box-shadow: 5px 5px 5px 5px lightsalmon;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  gap: 10px;
  background: salmon;
  border-radius: 10px;
}
form input{
  width: 240px;
  border: none;
  height: 30px;
  border-radius: 5px;
}
form button {
  width: 240px;
  height: 30px;
  border: none;
  border-radius: 5px;
}
form textarea{
  border: none;
  border-radius: 5px;
}
.location iframe {
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px lightsalmon;
}

</style>