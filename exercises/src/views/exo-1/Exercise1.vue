<template>
  <div class="exercise-1">
    <!-- ## Templating -->
    <h1>Bienvenue, {{ firstname + " " + lastname }} !</h1>
    <!-- ou bien -->
    <h1>Bienvenue, {{ firstname }} {{ lastname }} !</h1>
    <!-- ou bien -->
    <p>Veuillez remplir le champs ci-dessous :</p>
    <div class="exercise-1">
      <input type="text" v-model="firstname" />
      <input type="text" v-model="lastname" />
    </div>
    <p v-if="firstname || lastname">
      Bienvenue, {{ firstname }} {{ lastname }} !
    </p>

    <!-- ## Data Binding -->
    <label for="">Mon animal totem est : {{ animalTotem }}</label
    ><br />
    <input type="text" v-model="animalTotem" /><br /><br />
    <!--## Conditionnal Templating-->
    <p>
      Dis-moi quel âge tu as, je te donnerai une date pour ton permis et je te
      donnerai ton âge :
    </p>
    <p v-if="age && age >= 0">
      J'ai {{ age }} an(s) et je suis née en {{ 2020 - age }}
    </p>
    <input type="number" v-model="age" />
    <!-- parseInt(variable) string > int ou variable.toString() int > string -->
    <p v-if="parseInt(age) > 18">Youpi ! Je peux conduire !</p>
    <p v-else-if="parseInt(age) === 18">
      C'est le grand jour, je passe mon permis.
    </p>
    <p v-else-if="parseInt(age) < 18">
      Je peux passer mon permis dans {{ 18 - age }} année(s)
    </p>
  </div>
</template>

<script>
export default {
  name: "Exercise1",
  data() {
    return {
      firstname: "Anne",
      lastname: "Trotreau",
      animalTotem: "",
      age: ""
    };
  }
};

// ou bien :

// export default {
//   name: 'Exercise1',
//   data() {
//     return {
//       firstname: "",
//       lastname: "",
//     };
//   },
// };
</script>

<style lang="stylus" scoped>
@import '../../theme.styl';
.exercise-1 h1 {
  color: $grey;
}
</style>
