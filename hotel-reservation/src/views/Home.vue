<template>
  <div class="Home">
    <Client 
        :nom ="tonNom"
        :prenom ="tonPrenom"
        :adresse ="tonAdresse"
        :email ="tonEmail"
    />
    <Resa
        numeroDeResa = 128,
        numeroDeChambre = 23,
        dateEntree = "10/08/2020"
        dateSortie = "20/08/2020"
    />
  </div>
</template>
 
<script>
  import Client from '@/components/Client.vue';
  import Resa from '@/components/Resa.vue';
 
  export default {
    name: "Home",
 
    components: { Client, Resa },
 
 data(){
   return {
     tonNom: "Dupuis",
     tonPrenom: "Yolande",
     tonAdresse: "15 rue du Paradis",
     tonEmail: "dupuisyolande@gmail.com"

   }
 },
 
  };
</script>


<style lang="scss">

</style>