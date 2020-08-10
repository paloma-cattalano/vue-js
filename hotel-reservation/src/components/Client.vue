<template>
  <div class="Client">
    <h2>{{prenom}} {{nom}}</h2>
    <!-- <h1>{{ fullName }}</h1> -->
        <p>{{adresse}}</p>
     
      
  </div>
</template>


<script>
export default {
  name: "Client",
 
  props: { // required infos necessaires pour que props s'affichent
      
      nom: {
          type: String,     
          required: true,
      },
      prenom: {
        type: String,
        required: true,
      },
      adresse: {
          type: String,
          required: true,
      },
      email: {
          type: String,
          required: true,
      },
  },

  computed: {
    fullName() {
      return `${this.prenom} ${this.nom}`
    }
  }
};
</script>



<style lang="scss">

</style>