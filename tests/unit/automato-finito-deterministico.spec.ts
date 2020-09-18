import { AutomatoFinitoDeterministico } from "@/models/automato-finito-deterministico";
import { range } from "lodash";
import "./common";

export const set = (array: string[]) => new Set<string>(array);

const criarAutomato = () => {
  const automato = new AutomatoFinitoDeterministico();
  automato.alfabeto = set(["0", "1"]);
  automato.estados = set([
    "q000",
    "q001",
    "q010",
    "q011",
    "q100",
    "q101",
    "q110",
    "q111",
  ]);
  automato.estadoInicial = "q000";
  automato.estadosFinais = set(["q100", "q101", "q110", "q111"]);
  automato.transicoes = [
    ["q000", "0", "q000"],
    ["q000", "1", "q001"],
    ["q001", "0", "q010"],
    ["q001", "1", "q011"],
    ["q010", "0", "q100"],
    ["q010", "1", "q101"],
    ["q011", "0", "q110"],
    ["q011", "1", "q111"],
    ["q100", "0", "q000"],
    ["q100", "1", "q001"],
    ["q101", "0", "q010"],
    ["q101", "1", "q011"],
    ["q110", "0", "q100"],
    ["q110", "1", "q101"],
    ["q111", "0", "q110"],
    ["q111", "1", "q111"],
  ];
  return automato;
};

describe("automato-finito-deterministico", () => {
  it("valida estado inicial pertencente aos estados do autômato", () => {
    const automato = criarAutomato();
    automato.estadoInicial = "q000";

    expect(automato.validarEstadoInicial()).toBeValid();
  });

  it("valida estado inicial não pertencente aos estados do autômato", () => {
    const automato = criarAutomato();
    automato.estadoInicial = "não existe";
    expect(automato.validarEstadoInicial()).toBeInvalid();
  });

  it("valida estados finais pertencentes aos estados do autômato", () => {
    const automato = criarAutomato();
    automato.estadosFinais = set(["q111"]);
    expect(automato.validarEstadosFinais()).toBeValid();
  });

  it("valida estados finais não pertencentes aos estados do autômato", () => {
    const automato = criarAutomato();
    automato.estadosFinais = set(["q3", "q4"]);
    expect(automato.validarEstadosFinais()).toBeInvalid();
  });

  it("valida transições que não contém estado inicial pertencente ao conjunto de estados", () => {
    const automato = criarAutomato();
    automato.transicoes = [["q999", "0", "q000"]];
    expect(automato.validarTransicoes()).toBeInvalid();
  });

  it("valida transições que possuem elemento de transição que não pertence ao alfabeto", () => {
    const automato = criarAutomato();
    automato.transicoes = [["q000", "a", "q000"]];
    expect(automato.validarTransicoes()).toBeInvalid();
  });

  it("valida transições que possuem algum destino que não pertence ao conjunto de estados", () => {
    const automato = criarAutomato();
    automato.transicoes = [["q000", "0", "q999"]];
    expect(automato.validarTransicoes()).toBeInvalid();
  });

  it("valida transições que seguem todas as regras de validação", () => {
    const automato = criarAutomato();
    expect(automato.validarTransicoes()).toBeValid();
  });

  it("processa cadeia aceita pelo automato", () => {
    const automato = criarAutomato();
    expect(automato.processarCadeia("100")).toBeTruthy();
    expect(automato.processarCadeia("101")).toBeTruthy();
    expect(automato.processarCadeia("110")).toBeTruthy();
    expect(automato.processarCadeia("111")).toBeTruthy();
  });

  it("processa cadeia não aceita pelo autômato", () => {
    const automato = criarAutomato();
    expect(automato.processarCadeia("000")).toBeFalsy();
    expect(automato.processarCadeia("001")).toBeFalsy();
    expect(automato.processarCadeia("010")).toBeFalsy();
    expect(automato.processarCadeia("011")).toBeFalsy();
  });

  it("um afd convertido em afn deve reconhecer as mesmas cadeias", () => {
    const afd = criarAutomato();
    const afn = afd.converterParaNaoDeterministico();

    ["000", "001", "010", "011", "100", "101", "110", "111"].forEach(
      (cadeia) => {
        expect(afd.processarCadeia(cadeia)).toEqual(
          afn.processarCadeia(cadeia)
        );
      }
    );
  });
});
