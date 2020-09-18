<template>
  <div>
    <b-field label="Transições"></b-field>
    <b-button
      @click="adicionarTransicao()"
      :disabled="estados.length === 0 || alfabeto.length === 0"
    >Adicionar Transição</b-button>
    <table class="table">
      <tr>
        <th>Estado de Origem</th>
        <th>Elemento</th>
        <th>Estado de Destino</th>
        <th>Ações</th>
      </tr>
      <tr v-for="t in automato.transicoes" :key="t[0]+t[1]">
        <td>
          <b-select v-model="t[0]" :disabled="estados.length === 0">
            <option v-for="elemento in estados" :value="elemento" :key="elemento">{{ elemento }}</option>
          </b-select>
        </td>
        <td>
          <b-select v-model="t[1]" :disabled="alfabeto.length === 0">
            <option v-for="elemento in alfabeto" :value="elemento" :key="elemento">{{ elemento }}</option>
          </b-select>
        </td>
        <td>
          <b-select v-if="typeof t[2] === 'string'" v-model="t[2]" :disabled="estados.length === 0">
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
            @input="(value) => t[2] = new Set(value)"
          />
        </td>
        <td>
          <b-button
            @click="() => automato.transicoes = automato.transicoes.filter(x => x !== t)"
          >Remover</b-button>
        </td>
      </tr>
    </table>
    <!-- <b-table :data="automato.transicoes" :mobile-cards="true"></b-table> -->
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

  private get multiplosDestinos(): boolean {
    return !(this.automato as AutomatoFinitoDeterministico);
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

  log(value: any) {
    console.log(new Set(value));
  }
}
</script>
