<template>
  <div class="exercise-2">
    <div class="card" v-for="(utilisateur) in tableauUsers" :key="utilisateur.id">

      <p>{{ fullName(utilisateur) }}</p>
      <!-- ou bien :  -->

      <!-- <p :class="{premium: utilisateur.premium}">✨Bravo!!! Vous êtes premium!!!✨</p> -->

      <!-- ou bien :  -->
      <p v-if="utilisateur.premium" class="premium">✨Bravo!!! Vous êtes premium!!!✨</p>

      <!-- <img :src="utilisateur.image" alt=""> -->
      <!-- fonctionne si l'image est dans la bdd du l'utilisateur -->

      <!-- ou bien avec des template string à déclarer dans la data du composant -->
      <img :src="urlImage + utilisateur.id" alt="">

      <p>{{ utilisateur.email }}</p>
      <p>{{ utilisateur.password }}</p>

      <button @click="utilisateur.premium = !utilisateur.premium">
        <span v-if="!utilisateur.premium">Se Premiumiser</span>
        <span v-if="utilisateur.premium">Se Dépremiumiser</span>
      </button>

      <button @click="supprimer(utilisateur)" type="button" name="button">Supprimer</button>


    </div>
  </div>
</template>

<script>
import { users } from "./data";

export default {
  name: "Exercise2bis",

  data() {
    return {
      tableauUsers: users,
      urlImage: "http://lorempixel.com/400/200/animals/",
    };
  },

  methods: {
    fullName(utilisateur) {
      return utilisateur.firstname + " " + utilisateur.lastname;
    },

    supprimer(membre){
      this.$emit("delete", membre)
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../theme.styl';

.exercise-2 {
  color: $grey;
  display: flex;
  flex-direction : column;
  align-items: center;
}

.card {
  /* width: 300px;
  height: 200px; */
  background-color: #d1e4fb;;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 1vh 2vw;
  padding: 4vh;
}

.card .name {
  font-weight: bold;
}

.notPremium {
  display: none;
}

.premium {
  color: gold;
  background-color: lightsalmon;
  padding: 1em;
  border-radius: 0.3em;
}

button {
 color: #FF1493;
 background-color: #8FBC8F;
 border-radius: 1.7em;
 padding: 0.6em;
 margin: 0.6em;
}
</style>
