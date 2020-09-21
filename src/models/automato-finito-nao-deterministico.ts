import { Validation } from "@/interfaces/validation";
import { isEqual } from "lodash";
import { Automato } from "./automato";
import { AutomatoFinitoDeterministico } from "./automato-finito-deterministico";

export class AutomatoFinitoNaoDeterministico extends Automato {
  public transicoes: [string, string, Set<string>][];

  constructor(data: AutomatoFinitoNaoDeterministico | any = null) {
    super(data);

    if (data == null) data = {};

    this.transicoes = data.transicoes || [];
  }

  validarTransicoes(): Validation {
    const transicoesInvalidas: string[] = [];
    this.transicoes.forEach((x, idx) => {
      const errosTransicao: string[] = [];
      const origemInvalida: string | undefined = !this.estados.has(x[0])
        ? x[0]
        : undefined;
      const destinosInvalidos: string[] = [...x[2]]
        .map((q) =>
          !this.estados.has(q) && q !== Automato.EPSILON ? q : undefined
        )
        .filter((q): q is string => q != undefined);

      if (!this.alfabeto.has(x[1]) && x[1] !== Automato.EPSILON)
        errosTransicao.push(
          `a transição ${x[1]} não pertence ao alfabeto do autômato`
        );

      if (origemInvalida)
        errosTransicao.push(
          `a estado de origem ${origemInvalida} não pertence ao conjunto de estados do autômato`
        );

      if (x[2].size === 0)
        errosTransicao.push("nenhum estado definido como destino");

      if (
        this.transicoes.some(
          (t, indexTransicao) =>
            idx !== indexTransicao && t[0] === x[0] && t[1] === x[1]
        )
      )
        errosTransicao.push("transição duplicada");

      if (destinosInvalidos.length > 0)
        errosTransicao.push(
          `o(s) estado(s) de destino {${destinosInvalidos.join(
            ", "
          )}} não pertence(m) ao conjunto de estados do autômato`
        );

      if (errosTransicao.length > 0)
        transicoesInvalidas.push(
          `${x[0]}, ${x[1]} -> {${[...x[2]].join(", ")}}: ${errosTransicao.join(
            "; "
          )}`
        );
    });

    if (transicoesInvalidas.length > 0)
      return { valid: false, message: transicoesInvalidas.join(", ") };
    return { valid: true };
  }

  processarCadeia(cadeia: string): boolean {
    let estadosAtuais = new Set<string>([this.estadoInicial]);
    estadosAtuais = this.calcularEclose(estadosAtuais);
    for (const elemento of cadeia.split("")) {
      try {
        estadosAtuais = this.realizarTransicao(estadosAtuais, elemento);
      } catch (e) {
        break;
      }
    }

    return Array.from(estadosAtuais).some((q) => this.estadosFinais.has(q));
  }

  public converterParaDeterministico(): AutomatoFinitoDeterministico {
    const afd = new AutomatoFinitoDeterministico();

    const estados = new Map<Set<string>, boolean>();
    const transicoes: [Set<string>, string, Set<string>][] = [];
    const estadosIniciais = this.calcularEclose(new Set([this.estadoInicial]));
    estados.set(estadosIniciais, false);
    do {
      estados.forEach((processado, estado) => {
        if (processado) return;
        this.alfabeto.forEach((elemento) => {
          if (elemento === Automato.EPSILON) return;
          try {
            const novoEstado = this.realizarTransicao(estado, elemento);
            transicoes.push([estado, elemento, novoEstado]);
            if (!Array.from(estados.keys()).some((x) => isEqual(x, novoEstado)))
              estados.set(novoEstado, false);
          } catch (e) {
            // pass
          }
        });
        estados.set(estado, true);
      });
    } while ([...estados.values()].some((x) => x === false));
    const estadosFinais = [...estados.keys()].filter((x) =>
      [...this.estadosFinais].some((y) => x.has(y))
    );

    const juntarNomeEstados = (conjunto: Set<string>) =>
      [...conjunto].reduce((previous, current) => previous + current, "");

    afd.alfabeto = new Set(
      [...this.alfabeto].filter((x) => x !== Automato.EPSILON)
    );

    afd.estados = new Set(
      [...estados.keys()].map((conjunto) => juntarNomeEstados(conjunto))
    );

    afd.estadoInicial = juntarNomeEstados(estadosIniciais);

    afd.estadosFinais = new Set(
      estadosFinais.map((conjunto) => juntarNomeEstados(conjunto))
    );

    const transicoesAfd: [
      string,
      string,
      string
    ][] = transicoes.map((transicao) => [
      juntarNomeEstados(transicao[0]),
      transicao[1],
      juntarNomeEstados(transicao[2]),
    ]);
    afd.transicoes = transicoesAfd;

    return afd;
  }

  private calcularEclose(estadosAtuais: Set<string>): Set<string> {
    let ecloseAnterior: Set<string>;
    do {
      ecloseAnterior = new Set(estadosAtuais);
      estadosAtuais = this.transicoes
        .filter((t) => estadosAtuais.has(t[0]) && t[1] == Automato.EPSILON)
        .map((t) => t[2])
        .reduce(
          (previous, current) => new Set<string>([...previous, ...current]),
          estadosAtuais
        );
    } while (!isEqual(ecloseAnterior, estadosAtuais));
    return estadosAtuais;
  }

  private realizarTransicao(
    estados: Set<string>,
    elemento: string
  ): Set<string> {
    const estadosAnteriores = [...estados];
    const transicoesAtuais = this.transicoes.filter(
      (t) => estados.has(t[0]) && t[1] == elemento
    );

    if (!transicoesAtuais || transicoesAtuais.length === 0)
      throw new Error("Transicao Inválida");

    estados = transicoesAtuais
      .map((t) => t[2])
      .reduce(
        (previous, current) => new Set<string>([...previous, ...current]),
        new Set<string>()
      );
    estados = this.calcularEclose(estados);

    // console.log(
    //   `cadeia ${cadeia}: {${estadosAnteriores.join(", ")}}, ${elemento} -> ${[
    //     ...estados,
    //   ].join(", ")}`
    // );
    return estados;
  }
}
