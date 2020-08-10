<template>
  <div class="exercise-2">
    <div class="card" v-for="(utilisateur, index) in users" :key="index">
      <!-- <p>{{ fullName }}</p> -->
      <p class="name">{{utilisateur.firstname}} {{utilisateur.lastname}}</p>
      <img :src="utilisateur.image" alt="">
      <p>{{ utilisateur.email }}</p>
      <!-- <p v-if="utilisateur.premium">Compte Premium ✨ </p> -->
      <p :class="{'notPremium' : !utilisateur.premium}">Compte Premium ✨</p>
      <p>{{utilisateur.password}}</p>

      <button v-if="!utilisateur.premium" type="button" name="button" :class="{'active': utilisateur.premium}" @click="utilisateur.premium = !utilisateur.premium">
        Devenir Premium</button>

      <button v-if="utilisateur.premium" type="button" name="button" :class="{'active': utilisateur.premium}" @click="utilisateur.premium = !utilisateur.premium">
        Annuler ma Premiumitude
      </button>

    </div>
  </div>
</template>

<script>
  import { users } from "./data";

  export default {
    name: "Exercise2",

    data() {
      return {
        users: users,
        notPremium: true,
        firstname: "",
        lastname: "",
      };
    },

    computed: {
      fullName(){
        return `${this.firstname} ${this.lastname}`;
      }
    }
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
  }

  .card .name {
    font-weight: bold;
  }

  .notPremium {
    display: none;
  }
</style>
