<template>
  <div>
    <b-field
      label="Transições"
      :type="automato.validarTransicoes().valid ? 'is-success' : 'is-danger'"
      :message="automato.validarTransicoes().message"
    >
      <table class="table">
        <thead>
          <b-button
            @click="adicionarTransicao()"
            :type="!disabled && automato.transicoes.length === 0 ? 'is-warning' : ''"
            :disabled="disabled"
          >Adicionar Transição</b-button>
          <p class="help" v-if="automato.transicoes.length === 0">Adicione as transições do autômato</p>
        </thead>
        <tr>
          <th>Estado de Origem</th>
          <th>Elemento</th>
          <th>{{ multiplosDestinos ? 'Estados de Destino' : 'Estado de Destino'}}</th>
          <th>Ações</th>
        </tr>
        <tr v-for="t in automato.transicoes" :key="t[0]+t[1]">
          <td>
            <b-select v-model="t[0]" :disabled="disabled">
              <option v-for="elemento in estados" :value="elemento" :key="elemento">{{ elemento }}</option>
            </b-select>
          </td>
          <td>
            <b-select v-model="t[1]" :disabled="disabled">
              <option v-for="elemento in alfabeto" :value="elemento" :key="elemento">{{ elemento }}</option>
            </b-select>
          </td>
          <td>
            <b-select v-if="typeof t[2] === 'string'" v-model="t[2]" :disabled="disabled">
              <option v-for="elemento in estados" :value="elemento" :key="elemento">{{ elemento }}</option>
            </b-select>
            <b-taginput
              multiple
              v-if="typeof t[2] !== 'string'"
              :value="Array.from(t[2] || [])"
              :data="estados"
              autocomplete
              :allow-new="false"
              :open-on-focus="true"
              :disabled="estados.length === 0"
              @input="(value) => { atualizarEstadosDestino(value, t) }"
            />
          </td>
          <td>
            <b-button
              @click="() => automato.transicoes = automato.transicoes.filter(x => x !== t)"
            >Remover</b-button>
          </td>
        </tr>
      </table>
    </b-field>
  </div>
</template>

<script lang="ts">
import { AutomatoFinitoDeterministico } from "@/models/automato-finito-deterministico";
import { AutomatoFinitoNaoDeterministico } from "@/models/automato-finito-nao-deterministico";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Transicoes extends Vue {
  @Prop({ required: true }) automato!:
    | AutomatoFinitoDeterministico
    | AutomatoFinitoNaoDeterministico;

  private get disabled(): boolean {
    return (
      this.automato.estados.size === 0 || this.automato.alfabeto.size === 0
    );
  }

  private get multiplosDestinos(): boolean {
    return !!(this.automato as AutomatoFinitoDeterministico);
  }

  private get estados(): string[] {
    return [...this.automato.estados];
  }

  private get alfabeto(): string[] {
    return [...this.automato.alfabeto];
  }

  adicionarTransicao() {
    if (this.multiplosDestinos)
      (this.automato as AutomatoFinitoDeterministico).transicoes.push([
        "",
        "",
        ""
      ]);
    else
      (this.automato as AutomatoFinitoNaoDeterministico).transicoes.push([
        "",
        "",
        new Set()
      ]);
  }

  atualizarEstadosDestino(
    novosEstados: string[],
    transicao: [string, string, Set<string>]
  ): void {
    Vue.set(transicao, 2, novosEstados);
  }

  log(value: any) {
    console.log(new Set(value));
  }
}
</script>
