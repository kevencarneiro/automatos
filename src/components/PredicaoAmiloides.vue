<template>
  <section class="block">
    <h2 class="subtitle">Predição de proteínas amilóides com DAWG (Directed Acyclic Word Graph)</h2>
    <p>
      Dados utilizados no treinamento:
      <a href="waltz.txt">waltz.txt</a>. Dados utilizados no teste:
      <a href="waltzdb.csv">waltzdb.csv</a>
    </p>
    <div class="block columns">
      <b-field label="Arquivo de Treinamento" class="column">
        <b-upload v-model="arquivoTreino" drag-drop accept=".txt" @input="treinar()">
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Arraste o arquivo até aqui ou clique para fazer upload</p>
            </div>
          </section>
        </b-upload>
      </b-field>
      <div class="column">
        <p v-for="(x, idx) in resultadosTreinamento" :key="idx">{{x}}</p>
      </div>
    </div>
    <div class="block columns">
      <b-field label="Arquivo de Teste" class="column">
        <b-upload
          v-model="arquivoTeste"
          drag-drop
          accept=".csv"
          :disabled="!treinado"
          @input="processarArquivoTeste()"
        >
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Arraste o arquivo até aqui ou clique para fazer upload</p>
            </div>
          </section>
        </b-upload>
      </b-field>
      <div class="column">
        <p v-for="(x, idx) in resultadosTeste" :key="idx">{{x}}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { GrafoDePalavras } from "@/models/grafo-de-palavras";
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class PredicaoAmiloides extends Vue {
  private arquivoTreino: File | null = null;
  private arquivoTeste: File | null = null;
  private dawg = new GrafoDePalavras();
  private treinado = false;
  private dadosTeste: [string, boolean][] = [];
  private resultadosTreinamento: string[] = [];
  private resultadosTeste: string[] = [];

  private treinar(): void {
    if (!this.arquivoTreino) return;
    this.treinado = false;
    this.resultadosTreinamento = [];
    this.resultadosTreinamento.push("Carregando arquivo");
    this.arquivoTreino.text().then(arquivo => {
      const dadosTreinamento: [string, boolean][] = arquivo
        .split("\n")
        .map(linha => {
          const elementos = linha.split("\t");
          const cadeia = elementos[0];
          const aceita = elementos.length > 1 && elementos[1] === "+";

          console.log(elementos);
          console.log("#" + cadeia + "#");

          return [cadeia, aceita];
        });
      this.resultadosTreinamento.push(
        dadosTreinamento.length + " amostras de treinamento encontradas"
      );
      this.dawg.treinar(dadosTreinamento);
      this.resultadosTreinamento.push("Treinamento concluído");
      this.treinado = true;
    });
  }

  private processarArquivoTeste(): void {
    if (!this.arquivoTeste) return;
    this.resultadosTeste = [];
    this.resultadosTeste.push("Carregando arquivo");
    this.arquivoTeste.text().then(arquivo => {
      this.dadosTeste = arquivo
        .split("\n")
        .filter((linha, idx) => idx !== 0)
        .map(linha => {
          const elementos = linha.split(",");
          const aceita = (elementos[0] || "").trim() === "amyloid";
          const cadeia = elementos[1];
          return [cadeia, aceita];
        });
      this.resultadosTeste.push(
        this.dadosTeste.length + " amostras de teste encontradas"
      );
      this.testar();
    });
  }

  private testar(): void {
    if (this.dadosTeste.length === 0) return;
    [
      {
        automato: this.dawg.automato,
        nome: "Autômato Finito Não Determinístico"
      },
      {
        automato: this.dawg.automato.converterParaDeterministico(),
        nome: "Autômato Finito Determinístico"
      }
    ].forEach(({ automato, nome }) => {
      this.resultadosTeste.push("Teste com " + nome);
      const inicio = new Date();
      const acertos = this.dadosTeste.map(
        x => x[1] === GrafoDePalavras.processarCadeia(x[0], automato)
      );
      const fim = new Date();
      const tempoProcessamento = (+fim - +inicio) / 1000;
      const acuracia = (
        (acertos.filter(x => x === true).length * 100) /
        acertos.length
      ).toFixed(2);
      this.resultadosTeste.push("Acurácia: " + acuracia + "%");
      this.resultadosTeste.push(
        "Tempo de processamento: " + tempoProcessamento + "s"
      );
    });
  }
}
</script>
