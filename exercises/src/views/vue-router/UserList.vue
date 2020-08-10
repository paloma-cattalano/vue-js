<template>
  <div class="user-list">
    <div class="user" v-for="user in utilisateurs" :key="user.id">
      {{ user.firstname }} {{ user.lastname }}
    </div>

    <!-- Ici on utilise une methode pour se déplacer sur une autre page -->
    <button @click="goToEx1">Aller à l'exercice 1</button>

    <!-- Le router link fonctionne comme une balise <a>
    mais il dirige toujours vers notre application (jamais vers un autre site) -->
    <router-link to="/exo-2">
      <button>Aller à l'exercice 2</button>
    </router-link>
  </div>
</template>

<script>
import { membres } from "./data.js";

export default {
  name: "UserList",
  data() {
    return {
      utilisateurs: membres,
    };
  },
  methods: {
    goToEx1() {
      // L'objet $router nous permet de naviguer sur une autre page grâce au .push
      this.$router.push({ path: "/exo-1" });
    },
  },
};
</script>

<style>
.user {
  width: 100px;
  height: 50px;
  margin: 20px;
  border: solid 1px red;
}
</style>


<template>
  <div class="user-list">
     <!-- Ici on utilise une methode pour se déplacer sur une autre page -->
    <button @click="goToEx1">Aller à l'exercice 1</button>
    <!-- Le router link fonctionne comme une balise <a>
    mais il dirige toujours vers notre application (jamais vers un autre site) -->
    <router-link to="/exo-2">
      <button>Aller à l'exercice 2</button>
    </router-link>
  <div class="candidat">
    <div class="user" v-for="user in utilisateurs" :key="user.id">
      Candidat: {{ user.firstname }} {{ user.lastname }}
       <button @click="goToUser(user.id)">En savoir plus</button>
    </div>
  </div>
  <!-- methode1 en decomposant avec une fonction-->
    <button @click="goToUser(3)">Le profil d'Anne</button>
  <!-- methode 2 avec router-link -->
     <router-link to="/users/2">
      <button>Voir le profil de Jane </button>
    </router-link>
  </div>
</template>
<script>
import { membres } from "./data.js";
export default {
  name: "UserList",
  data() {
    return {
      utilisateurs: membres,
    };
  },
  methods: {
    goToEx1() {
      // L'objet $router nous permet de naviguer sur une autre page grâce au .push
      this.$router.push({ path: "/exo-1" });
    },
    goToUser(identifiant) {
        this.$router.push({ name: "UserDetails", params: { id: identifiant}});
      // this.$router.push({ path: `/users/${identifiant}` });
    }
  },
};
</script>
<style>
.candidat {
  display: flex;
  flex-wrap: wrap;
}
.user {
  width: 300px;
    height: 200px;
    background-color: #F4D9F4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 1vh 2vw;
   box-shadow: 10px 5px 5px #F27DF2;
  }
button {
  margin-top : 5vh;
  padding: 1.2vh;
  color: #d822bd;
  border-color : #FF6FEA;
}
</style>
