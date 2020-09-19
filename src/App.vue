<template>
  <div id="app" class="content">
    <div class="container">
      <h1 class="title is-spaced">Projeto Autômatos e Bioinformática</h1>
      <h2 class="subtitle is-spaced">Teoria da Computação - PPGCC IFCE</h2>

      <div class="question">
        <p>
          Construa um programa para definir autˆomatos finitos n ̃ao determin
          ́ısticos. Sua implementa ̧c ̃ao deve funcionar para qualquer tipo de
          autˆomato finito n ̃ao determin ́ıstico, ou seja, deve aceitar qualquer
          conjunto de estados, alfabeto, fun ̧c ̃ao de transi ̧c ̃ao, estado inicial e conjunto de estados finais. Depois do
          autˆomato finito n ̃ao determin ́ıstico ser definido, deve ser poss ́ıvel verificar se ele aceita ou rejeita strings
          fornecidas. Isso deve ser feito sem converter o autˆomato finito n ̃ao determin ́ıstico em um determin ́ıstico.
        </p>
      </div>

      <AutomatoNaoDeterministico />
      <AutomatoDeterministico />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import AutomatoNaoDeterministico from "./components/AutomatoNaoDeterministico.vue";
import AutomatoDeterministico from "./components/AutomatoDeterministico.vue";

@Component({
  components: {
    HelloWorld,
    AutomatoNaoDeterministico,
    AutomatoDeterministico
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
