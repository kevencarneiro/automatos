import { Validation } from "@/interfaces/validation";
import { Automato } from "@/models/automato";
import { AutomatoFinitoNaoDeterministico } from "@/models/automato-finito-nao-deterministico";
import { shallowMount } from "@vue/test-utils";
import { range } from "lodash";
import "./common";

export const set = (array: string[]) => new Set<string>(array);

const criarAutomato = () => {
  const automato = new AutomatoFinitoNaoDeterministico();
  automato.alfabeto = set(["0", "1"]);
  automato.estados = set(["q0", "q1", "q2"]);
  automato.estadoInicial = "q0";
  automato.estadosFinais = set(["q2"]);
  automato.transicoes = [
    ["q0", "0", set(["q0"])],
    ["q0", "1", set(["q0", "q1"])],
    ["q1", "0", set(["q2"])],
    ["q1", "1", set(["q2"])],
  ];
  return automato;
};

const criarEpsilonNfa = () => {
  const automato = new AutomatoFinitoNaoDeterministico();
  automato.alfabeto = set([
    "+",
    "-",
    ".",
    Automato.EPSILON,
    ...range(10).map((x) => x.toString()),
  ]);
  automato.estados = set(range(6).map((x) => "q" + x));
  automato.estadoInicial = "q0";
  automato.estadosFinais = set(["q4"]);

  const transicoesNumericas = (
    de: string,
    para: Set<string>
  ): [string, string, Set<string>][] =>
    range(10).map((x) => [de, x.toString(), para]);

  automato.transicoes = [
    ["q0", Automato.EPSILON, set(["q1"])],
    ["q0", "+", set(["q1"])],
    ["q0", "-", set(["q1"])],
    ["q1", ".", set(["q2"])],
    ...transicoesNumericas("q1", set(["q1", "q5"])),
    ...transicoesNumericas("q2", set(["q3"])),
    ["q3", Automato.EPSILON, set(["q4"])],
    ...transicoesNumericas("q3", set(["q3"])),
    ["q5", ".", set(["q3"])],
  ];
  return automato;
};

describe("automato-finito-nao-deterministico", () => {
  it("valida estado inicial pertencente aos estados do autômato", () => {
    const automato = criarAutomato();
    automato.estadoInicial = "q0";

    expect(automato.validarEstadoInicial()).toBeValid();
  });

  it("valida estado inicial não pertencente aos estados do autômato", () => {
    const automato = criarAutomato();
    automato.estadoInicial = "q10";
    expect(automato.validarEstadoInicial()).toBeInvalid();
  });

  it("valida estados finais pertencentes aos estados do autômato", () => {
    const automato = criarAutomato();
    automato.estadosFinais = set(["q2"]);
    expect(automato.validarEstadosFinais()).toBeValid();
  });

  it("valida estados finais não pertencentes aos estados do autômato", () => {
    const automato = criarAutomato();
    automato.estadosFinais = set(["q3", "q4"]);
    expect(automato.validarEstadosFinais()).toBeInvalid();
  });

  it("valida transições que não contém estado inicial pertencente ao conjunto de estados", () => {
    const automato = criarAutomato();
    automato.transicoes = [["q999", "0", set(["q0"])]];
    expect(automato.validarTransicoes()).toBeInvalid();
  });

  it("valida transições que possuem elemento de transição que não pertence ao alfabeto", () => {
    const automato = criarAutomato();
    automato.transicoes = [["q0", "a", set(["q0"])]];
    expect(automato.validarTransicoes()).toBeInvalid();
  });

  it("valida transições que possuem algum destino que não pertence ao conjunto de estados", () => {
    const automato = criarAutomato();
    automato.transicoes = [["q0", "0", set(["q0", "q999"])]];
    expect(automato.validarTransicoes()).toBeInvalid();
  });

  it("valida transições que seguem todas as regras de validação", () => {
    const automato = criarAutomato();
    automato.transicoes = [
      ["q0", "0", set(["q0"])],
      ["q0", Automato.EPSILON, set(["q0"])],
    ];
    expect(automato.validarTransicoes()).toBeValid();
  });

  it("processa cadeia aceita pelo autômato", () => {
    const automato = criarAutomato();
    expect(automato.processarCadeia("110")).toBeTruthy();
    expect(automato.processarCadeia("010")).toBeTruthy();
    expect(automato.processarCadeia("11")).toBeTruthy();
    expect(automato.processarCadeia("111")).toBeTruthy();
  });

  it("processa cadeia não aceita pelo autômato", () => {
    const automato = criarAutomato();
    expect(automato.processarCadeia("101")).toBeFalsy();
    expect(automato.processarCadeia("0")).toBeFalsy();
    expect(automato.processarCadeia("000")).toBeFalsy();
    expect(automato.processarCadeia("100")).toBeFalsy();
    expect(automato.processarCadeia("001")).toBeFalsy();
  });

  it("processa cadeia aceita pelo autômato com transições espontâneas", () => {
    const automato = criarEpsilonNfa();
    expect(automato.processarCadeia("10.01")).toBeTruthy();
  });

  it("processa cadeia não aceita pelo autômato com transições espontâneas", () => {
    const automato = criarEpsilonNfa();
    expect(automato.processarCadeia("9999")).toBeFalsy();
  });

  it("um afn convertido em afd deve reconhecer as mesmas cadeias", () => {
    const afn = criarAutomato();
    const afd = afn.converterParaDeterministico();

    expect(afn.processarCadeia("110")).toEqual(afd.processarCadeia("110"));
    expect(afn.processarCadeia("010")).toEqual(afd.processarCadeia("010"));
    expect(afn.processarCadeia("11")).toEqual(afd.processarCadeia("11"));
    expect(afn.processarCadeia("111")).toEqual(afd.processarCadeia("111"));

    expect(afn.processarCadeia("101")).toEqual(afd.processarCadeia("101"));
    expect(afn.processarCadeia("0")).toEqual(afd.processarCadeia("0"));
    expect(afn.processarCadeia("000")).toEqual(afd.processarCadeia("000"));
    expect(afn.processarCadeia("100")).toEqual(afd.processarCadeia("100"));
    expect(afn.processarCadeia("001")).toEqual(afd.processarCadeia("001"));
  });
});
