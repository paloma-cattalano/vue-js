
<template>
 <div class="exercise-4">
<!-- je précise le contenu de la props msgAlert à l'intérieur de la balise Bouton -->
 <Bouton msgAlert="Wazaaaaaa!">Text 1</Bouton>
 <Bouton>Text 2</Bouton>
<!-- le <Bouton> est vide et affiche le contenu déclaré par défaut dans le composant enfant Bouton.vue -->

<New>
  <template v-slot:groseille>
    <header>Groseille : </header>
  </template>
  <template v-slot:cerise>
    <h2>cerise : </h2>
  </template>
  <template v-slot:fraise>
    <button>
     fraise :
    </button>
  </template>
</New>

</div>

</template>


<script>
import Bouton from "./Bouton.vue";
import New from "./New.vue";

export default {
 name: "Exercise4",
 components: {Bouton, New},
};
</script>
