<template>
  <div class="Resa">
    <h2>Numéro de réservation: {{numeroDeResa}} Numéro de chambre{{numeroDeResa}}</h2>

        <p>date d'entrée: {{dateEntree}}</p>
        <p>date de sortie: {{dateSortie}}</p>
     
      
  </div>
</template>


<script>
export default {
  name: "Resa",
 
  props: { // required infos necessaires pour que props s'affichent
      
      numeroDeResa: {
          type: Number,     
          required: true,
      },
      numeroDeChambre: {
        type: Number,
        required: true,
      },
      dateEntree: {
          type: String,
          required: true,
      },
      dateSortie: {
          type: String,
          required: true,
      },
  },

};
</script>



<style lang="scss">

</style>