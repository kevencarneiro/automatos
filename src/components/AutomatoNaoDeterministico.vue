<template>
  <section class="block">
    <div class="block">
      <h2 class="subtitle">Autômato Finito Não Determinístico</h2>
      <b-field label="Alfabeto">
        <b-taginput
          :value="Array.from(afn.alfabeto)"
          @input="(value) => { afn.alfabeto = new Set(value) }"
          ellipsis
          placeholder="Adicione itens ao alfabeto (separado por vírgulas)"
        />
      </b-field>
      <b-field
        label="Estados"
        :type="validationClass(afn.validarEstados())"
        :message="afn.validarEstados().message"
      >
        <b-taginput
          :value="Array.from(afn.estados)"
          @input="(value) => { afn.estados = new Set(value)}"
          ellipsis
          placeholder="Adicione estados (separado por vírgulas)"
        />
      </b-field>
      <b-field
        label="Estado inicial"
        :type="validationClass(afn.validarEstadoInicial())"
        :message="afn.validarEstadoInicial().message"
      >
        <b-select v-model="afn.estadoInicial" :disabled="afn.estados.size === 0">
          <option v-for="elemento in afn.estados" :value="elemento" :key="elemento">{{ elemento }}</option>
        </b-select>
      </b-field>
      <b-field
        label="Estados de aceitação"
        :type="validationClass(afn.validarEstadosFinais())"
        :message="afn.validarEstadosFinais().message"
      >
        <b-taginput
          multiple
          :value="Array.from(afn.estadosFinais)"
          @input="(value) => { afn.estadosFinais = new Set(value) }"
          :data="Array.from(afn.estados)"
          autocomplete
          :allow-new="false"
          :open-on-focus="true"
          :disabled="afn.estados.size === 0"
        />
      </b-field>
    </div>

    <Transicoes :automato="afn" />
    <div class="block"></div>
    <div v-if="afn && afn.validar().valid" class="box">
      <h6 class="subtitle is-6">Autômato Gerado</h6>

      <p>M = (Q, Σ, δ, q0, F)</p>
      <p>Σ: { {{formatarSet(afn.alfabeto)}} }</p>
      <p>Q: { {{formatarSet(afn.estados)}} }</p>
      <p>q0: {{afn.estadoInicial}}</p>
      <p>F: { {{formatarSet(afn.estadosFinais)}} }</p>
      <!-- <p> -->
      δ: {
      <ul style="margin-left: 20px;">
        <li v-for="item in transicoesFormatadas" :key="item">{{item}}</li>
      </ul>}
      <!-- </p> -->

      <TesteCadeia :automato="afn" v-model="cadeia" />

      <b-button @click="converter">Converter em Autômato Finito Determinístico (AFD)</b-button>
    </div>
  </section>
</template>

<script lang="ts">
import { AutomatoFinitoNaoDeterministico } from "@/models/automato-finito-nao-deterministico";
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import Transicoes from "@/components/Transicoes.vue";
import TesteCadeia from "@/components/TesteCadeia.vue";
import { Validation } from "@/interfaces/validation";
import AutomatoDeterministico from "./AutomatoDeterministico.vue";

@Component({
  components: {
    Transicoes,
    TesteCadeia
  }
})
export default class AutomatoNaoDeterministico extends Vue {
  @Prop({
    required: false,
    default: () => new AutomatoFinitoNaoDeterministico()
  })
  private afn!: AutomatoFinitoNaoDeterministico;
  @Prop({ required: false, default: "" }) private cadeia!: string;

  private get transicoesFormatadas(): string[] {
    return this.afn.transicoes.map(
      x => `${x[0]}, ${x[1]} -> {${Array.from(x[2]).join(", ")}}`
    );
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
      component: AutomatoDeterministico,
      props: {
        afd: this.afn.converterParaDeterministico(),
        cadeia: this.cadeia
      }
    });
  }
}
</script>
