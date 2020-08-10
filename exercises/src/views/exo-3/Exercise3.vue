<template>
  <div class="exercise-3">
    <Bouton hasError :title="name" :error="error"/>
    <Bouton :title="name2" green/>
  </div>
</template>

<script>
  import Bouton from "./Component/Bouton.vue";

  export default {
    name: "Exercise3",

    components: { Bouton },

    data() {
      return {
        name: "Un joli bouton",
        name2: "un autre joli bouton",
        error: "voici une erreur",
      }
    }

  };
</script>

<style lang="stylus" scoped>
    @import '../../theme.styl';

    .exercise-3 {
      color: $grey;
    }
</style>
