import { Automato } from "./automato";
import { AutomatoFinitoNaoDeterministico } from "./automato-finito-nao-deterministico";

export class GrafoDePalavras {
  private static FIM_DA_PALAVRA: string = "#";
  public automato: AutomatoFinitoNaoDeterministico = new AutomatoFinitoNaoDeterministico(
    {
      estadoInicial: "q0",
      estadosFinais: new Set(["qA"]),
      estados: new Set(["q0", "qA"]),
    }
  );

  public treinar(cadeias: [string, boolean][]) {
    const set = (estado: string) => new Set([estado]);
    cadeias.forEach((x) => {
      const cadeia: string = x[0];
      const reconhecida: boolean = x[1];

      let estadoAtual = "q0";

      for (const elemento of (cadeia + GrafoDePalavras.FIM_DA_PALAVRA).split(
        ""
      )) {
        if (!this.automato.alfabeto.has(elemento))
          this.automato.alfabeto.add(elemento);

        const transicao = this.automato.transicoes.find(
          (x) => x[0] === estadoAtual && x[1] === elemento
        );

        if (elemento === GrafoDePalavras.FIM_DA_PALAVRA) {
          if (reconhecida) {
            if (!transicao)
              this.automato.transicoes.push([estadoAtual, elemento, set("qA")]);
          } else {
            if (transicao)
              this.automato.transicoes = this.automato.transicoes.filter(
                (x) => x !== transicao
              );
          }
          break;
        }

        if (transicao == undefined) {
          const novoEstado = this.criarEstado();
          this.automato.transicoes.push([
            estadoAtual,
            elemento,
            set(novoEstado),
          ]);
          estadoAtual = novoEstado;
        } else {
          estadoAtual = transicao[2].values().next().value;
        }
      }
    });
  }

  public processarCadeia(cadeia: string): boolean {
    return GrafoDePalavras.processarCadeia(cadeia, this.automato);
  }

  public static processarCadeia(cadeia: string, automato: Automato): boolean {
    return automato.processarCadeia(cadeia + GrafoDePalavras.FIM_DA_PALAVRA);
  }

  private criarEstado(): string {
    const novoEstado = "q" + this.automato.estados.size;
    this.automato.estados.add(novoEstado);
    return novoEstado;
  }
}
