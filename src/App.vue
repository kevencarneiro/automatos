<template>
  <div id="app" class="content">
    <div class="container">
      <h1 class="title is-spaced">Projeto Autômatos e Bioinformática</h1>
      <h2 class="subtitle is-spaced">Teoria da Computação - PPGCC IFCE</h2>

      <AutomatoNaoDeterministico class="block is-spaced" />
      <AutomatoDeterministico class="block is-spaced" />
      <PredicaoAmiloides class="block is-spaced" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import AutomatoNaoDeterministico from "./components/AutomatoNaoDeterministico.vue";
import AutomatoDeterministico from "./components/AutomatoDeterministico.vue";
import PredicaoAmiloides from "./components/PredicaoAmiloides.vue";

@Component({
  components: {
    HelloWorld,
    AutomatoNaoDeterministico,
    AutomatoDeterministico,
    PredicaoAmiloides
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
