<template>
  <div class="user-details">
    <h2>
      {{ utilisateurSelectionne.firstname }}
      {{ utilisateurSelectionne.lastname }}
    </h2>

    <p>{{ utilisateurSelectionne.email }}</p>
  </div>
</template>

<script>
import { membres } from "./data.js";
export default {
  name: "UserDetails",

  data() {
    return {
      utilisateurs: membres,
      idUtilisateurSelectionne: 0,
      utilisateurSelectionne: {},
    };
  },

  mounted() {
    // On récupère le params id (qui est dans l'url) grâce à l'objet $route
    this.idUtilisateurSelectionne = this.$route.params.id;

    // On sélectionne l'utilisateur qui a le même id que le params récupéré dans $route
    this.utilisateurSelectionne = this.utilisateurs.find(
      (utilisateur) => utilisateur.id == this.idUtilisateurSelectionne
    );
  },
};
</script>

<style></style>
