<template>
  <div>
    <b-field label="Teste de Cadeia" :type="validacao.type" :message="validacao.message">
      <b-input
        type="text"
        aria-placeholder="Insira a cadeia para testar o autômato"
        v-model="input"
      />
    </b-field>
  </div>
</template>

<script lang="ts">
import { Automato } from "@/models/automato";
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class TesteCadeia extends Vue {
  @Prop({ required: true }) automato!: Automato;
  @Prop({ required: false, default: "" }) private value!: string;

  private input = "";

  mounted() {
    this.atualizarEntrada();
  }

  @Watch("cadeia")
  private atualizarEntrada(): void {
    this.input = this.value;
  }

  @Watch("input")
  private atualizarPai(): void {
    this.$emit("input", this.input);
  }

  private get cadeiaValida(): boolean {
    return this.automato.processarCadeia(this.input);
  }
  private get validacao() {
    return this.cadeiaValida
      ? {
          type: "is-success",
          message: `A cadeia ${this.input} é reconhecida pelo autômato`
        }
      : {
          type: "is-danger",
          message: `A cadeia ${this.input} não é reconhecida pelo autômato`
        };
  }
}
</script>