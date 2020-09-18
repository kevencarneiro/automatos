<template>
  <section>
    <b-field label="Alfabeto">
      <b-taginput
        v-model="alfabeto"
        ellipsis
        icon="label"
        placeholder="Adicione itens ao alfabeto (separado por vírgulas)"
      />
    </b-field>
    <b-field label="Estados">
      <b-taginput
        v-model="estados"
        ellipsis
        placeholder="Adicione estados (separado por vírgulas)"
      />
    </b-field>
    <b-field label="Estado inicial">
      <b-select v-model="afn.estadoInicial" :disabled="estados.length === 0">
        <option v-for="elemento in estados" :value="elemento" :key="elemento">{{ elemento }}</option>
      </b-select>
    </b-field>
    <b-field label="Estados de aceitação">
      <b-taginput
        multiple
        v-model="estadosFinais"
        :data="estados"
        autocomplete
        :allow-new="false"
        :open-on-focus="true"
        :disabled="estados.length === 0"
      />
    </b-field>
    <Transicoes :automato="afn" />
  </section>
</template>

<script lang="ts">
import { AutomatoFinitoNaoDeterministico } from "@/models/automato-finito-nao-deterministico";
import { Vue, Component, Watch } from "vue-property-decorator";
import Transicoes from "@/components/Transicoes.vue";

@Component({
  components: {
    Transicoes
  }
})
export default class AutomatoNaoDeterministico extends Vue {
  private alfabeto: string[] = [];
  private estados: string[] = [];
  private estadosFinais: string[] = [];
  private afn: AutomatoFinitoNaoDeterministico = new AutomatoFinitoNaoDeterministico();

  @Watch("alfabeto")
  updateAlfabeto() {
    this.afn.alfabeto = new Set(this.alfabeto);
  }

  @Watch("estados")
  updateEstados() {
    this.afn.estados = new Set(this.estados);
  }

  @Watch("estadosFinais")
  updateEstadosFinais() {
    this.afn.estadosFinais = new Set(this.estadosFinais);
  }
}
</script>
