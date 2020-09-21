<template>
  <section class="block">
    <h2 class="subtitle">Autômato Finito Determinístico</h2>
    <b-field label="Alfabeto">
      <b-taginput
        :value="Array.from(afd.alfabeto)"
        @input="(value) => { afd.alfabeto = new Set(value) }"
        ellipsis
        placeholder="Adicione itens ao alfabeto (separado por vírgulas)"
      />
    </b-field>
    <b-field
      label="Estados"
      :type="validationClass(afd.validarEstados())"
      :message="afd.validarEstados().message"
    >
      <b-taginput
        :value="Array.from(afd.estados)"
        @input="(value) => { afd.estados = new Set(value)}"
        ellipsis
        placeholder="Adicione estados (separado por vírgulas)"
      />
    </b-field>
    <b-field
      label="Estado inicial"
      :type="validationClass(afd.validarEstadoInicial())"
      :message="afd.validarEstadoInicial().message"
    >
      <b-select v-model="afd.estadoInicial" :disabled="afd.estados.size === 0">
        <option v-for="elemento in afd.estados" :value="elemento" :key="elemento">{{ elemento }}</option>
      </b-select>
    </b-field>
    <b-field
      label="Estados de aceitação"
      :type="validationClass(afd.validarEstadosFinais())"
      :message="afd.validarEstadosFinais().message"
    >
      <b-taginput
        multiple
        :value="Array.from(afd.estadosFinais)"
        @input="(value) => { afd.estadosFinais = new Set(value) }"
        :data="Array.from(afd.estados)"
        autocomplete
        :allow-new="false"
        :open-on-focus="true"
        :disabled="afd.estados.size === 0"
      />
    </b-field>
    <Transicoes :automato="afd" />

    <div v-if="afd && afd.validar().valid" class="box">
      <h6 class="subtitle is-6">Autômato Gerado</h6>

      <p>M = (Q, Σ, δ, q0, F)</p>
      <p>Σ: { {{formatarSet(afd.alfabeto)}} }</p>
      <p>Q: { {{formatarSet(afd.estados)}} }</p>
      <p>q0: {{afd.estadoInicial}}</p>
      <p>F: { {{formatarSet(afd.estadosFinais)}} }</p>
      <!-- <p> -->
      δ: {
      <ul style="margin-left: 20px;">
        <li v-for="item in transicoesFormatadas" :key="item">{{item}}</li>
      </ul>}
      <!-- </p> -->

      <TesteCadeia :automato="afd" v-model="cadeia" />

      <b-button @click="converter">Converter em Autômato Finito Não Determinístico (AFN)</b-button>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import Transicoes from "@/components/Transicoes.vue";
import { AutomatoFinitoDeterministico } from "@/models/automato-finito-deterministico";
import TesteCadeia from "@/components/TesteCadeia.vue";
import AutomatoNaoDeterministico from "./AutomatoNaoDeterministico.vue";
import { Validation } from "@/interfaces/validation";

@Component({
  components: {
    Transicoes,
    TesteCadeia
  }
})
export default class AutomatoDeterministico extends Vue {
  @Prop({
    required: false,
    default: () => new AutomatoFinitoDeterministico()
  })
  private afd!: AutomatoFinitoDeterministico;
  @Prop({ required: false, default: "" }) private cadeia!: string;

  private get transicoesFormatadas(): string[] {
    return this.afd.transicoes.map(x => `${x[0]}, ${x[1]} -> ${x[2]}}`);
  }

  private formatarSet(set: Set<string>): string {
    return Array.from(set).join(", ");
  }

  private validationClass(validacao: Validation): string {
    return validacao.valid ? "is-success" : "is-danger";
  }

  private converter(): void {
    this.$buefy.modal.open({
      parent: this,
      component: AutomatoNaoDeterministico,
      props: {
        afn: this.afd.converterParaNaoDeterministico(),
        cadeia: this.cadeia
      }
    });
  }
}
</script>
