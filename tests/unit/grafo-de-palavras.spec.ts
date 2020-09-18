import { GrafoDePalavras } from "@/models/grafo-de-palavras";
import "./common";

const criarGrafoDePalavras = () => new GrafoDePalavras();

describe("grafo-de-palavras", () => {
  it("reconhece cadeia treinada", () => {
    const cadeia = "abcde";
    const dawg = criarGrafoDePalavras();
    dawg.treinar([[cadeia, true]]);
    expect(dawg.processarCadeia(cadeia)).toBeTruthy();
  });

  it("não reconhece cadeias não treinadas", () => {
    const dawg = criarGrafoDePalavras();
    dawg.treinar([
      ["abc", true],
      ["abcd", true],
    ]);
    expect(dawg.processarCadeia("abd")).toBeFalsy();
    expect(dawg.processarCadeia("abf")).toBeFalsy();
  });

  it('não reconhece cadeias treinadas como "não reconhecidas"', () => {
    const dawg = criarGrafoDePalavras();
    dawg.treinar([
      ["bota", true],
      ["bola", true],
      ["abc", true],
      ["abd", false],
    ]);
    expect(dawg.processarCadeia("abd")).toBeFalsy();
    expect(dawg.processarCadeia("abc")).toBeTruthy();
  });

  it("um afd gerado a partir do dawg deve reconhecer as mesmas cadeias", () => {
    const dawg = criarGrafoDePalavras();
    const cadeias = ["abcde", "abcdef", "abcdeg", "abcdeh"];
    dawg.treinar(cadeias.map((x) => [x, true]));
    cadeias.forEach((x) => {
      expect(dawg.processarCadeia(x)).toBeTruthy();
    });
    const afd = dawg.automato.converterParaDeterministico();
    cadeias.forEach((x) => {
      expect(GrafoDePalavras.processarCadeia(x, afd)).toBeTruthy();
    });
  });
});
