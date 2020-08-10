<template>
  <div class="exercise-5">
    <div class="">{{ restaurants }}</div>
    <button @click="getRestaurants()">Affiche-moi donc les restaurants</button>
    <div class="" v-for="restaurant in restaurants" :key="restaurant.id">
      <p>{{ restaurant.nom }}</p>
      <p>{{ restaurant.type }}</p>
      <p>{{ restaurant.adresse }}</p>
      <p>{{ restaurant.telephone }}</p>
      <p>{{ restaurant.plats }}</p>
      <img :src="restaurant.image" alt="Que c'est bon!"/>

    </div>
  </div>
</template>

<script>
// import Vignette from "./Vignette.vue";
export default {
  name: "Exercise5",

  data(){
    return{
      // info: null,
      restaurants: null,
  }
},

// components: { Vignette },

methods: {
    getRestaurants() {
      const axios = require('axios');
      axios.get(`https://restop-toulouse.herokuapp.com/restos`)
      .then(response => (this.restaurants = response.data))
    }
  },
};

</script>

<style lang="stylus" scoped>
@import '../../theme.styl';

.exercise-5 {
  color: $grey;
}
</style>
