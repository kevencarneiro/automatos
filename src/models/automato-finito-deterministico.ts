import { Validation } from "@/interfaces/validation";
import { Automato } from "./automato";
import { AutomatoFinitoNaoDeterministico } from "./automato-finito-nao-deterministico";

export class AutomatoFinitoDeterministico extends Automato {
  public transicoes: [string, string, string][];

  constructor(data: AutomatoFinitoDeterministico | any = null) {
    super(data);

    if (data == null) data = {};

    this.transicoes = data.transicoes || [];
  }

  validarTransicoes(): Validation {
    const transicoesInvalidas = Array.from(this.transicoes)
      .map((x) => {
        const errosTransicao: string[] = [];

        if (!this.estados.has(x[0]))
          errosTransicao.push(
            `o estado de origem ${x[0]} não pertence ao conjunto de estados do autômato`
          );

        if (!this.estados.has(x[2]))
          errosTransicao.push(
            `o estado de destino ${x[2]} não pertence ao conjunto de estados do autômato`
          );

        if (!this.alfabeto.has(x[1]))
          errosTransicao.push(
            `a transição ${x[1]} não pertence ao alfabeto do autômato`
          );

        if (errosTransicao.length === 0) return undefined;

        return `${x[0]}, ${x[1]} -> ${x[2]}: ${errosTransicao.join(", ")}`;
      })
      .filter((x): x is string => x != undefined);
    if (transicoesInvalidas.length > 0)
      return { valid: false, message: transicoesInvalidas.join("; ") };
    return { valid: true };
  }

  public processarCadeia(cadeia: string): boolean {
    let estadoAtual = this.estadoInicial;
    for (const elemento of cadeia.split("")) {
      const transicao = Array.from(this.transicoes).find(
        (t) => t[0] === estadoAtual && t[1] === elemento
      );

      if (!transicao) break;

      estadoAtual = transicao[2];
    }

    return this.estadosFinais.has(estadoAtual);
  }

  public converterParaNaoDeterministico(): AutomatoFinitoNaoDeterministico {
    const afn = new AutomatoFinitoNaoDeterministico();
    afn.alfabeto = this.alfabeto;
    afn.estados = this.estados;
    afn.estadoInicial = this.estadoInicial;
    afn.estadosFinais = this.estadosFinais;
    afn.transicoes = [...this.transicoes].map((x) => [
      x[0],
      x[1],
      new Set([x[2]]),
    ]);
    return afn;
  }
}
