<template>
  <div class="btn">
    <button type="submit" @click="bidule()">
<!-- le slot est rempli si on veut spécifier un contenu par défaut. Pour un bouton par ex: "En savoir plus", "Acheter", "Envoyer" etc... -->
        <slot>Default Text</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Bouton",
  methods: {
      bidule() {
//je fais référence au contenu de la props msgAlert déclaré à l'intérieur de ce composant (d'où le this)
          alert(this.msgAlert);
      }
  },
  props: {
      msgAlert: {
          type: String,
          default: "Coucou!",
      }
  }
};
</script>
