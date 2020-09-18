import { Validation } from "@/interfaces/validation";

export abstract class Automato {
  public alfabeto: Set<string>;
  public estados: Set<string>;
  public estadoInicial: string;
  public estadosFinais: Set<string>;
  public static readonly EPSILON: string = "epsilon";

  constructor(data: Automato | any = null) {
    if (data == null) data = {};

    this.alfabeto = data.alfabeto || new Set<string>();
    this.estados = data.estados || new Set<string>();
    this.estadoInicial = data.estadoInicial || "";
    this.estadosFinais = data.estadosFinais || new Set<string>();
  }

  public abstract validarTransicoes(): Validation;

  public abstract processarCadeia(cadeia: string): boolean;

  public validarEstadoInicial(): Validation {
    if (this.estados.has(this.estadoInicial)) return { valid: true };
    return {
      valid: false,
      message: `O estado ${this.estadoInicial} não pertence ao conjunto de estados do autômato`,
    };
  }

  public validarEstadosFinais(): Validation {
    const estadosInvalidos: string[] = [];
    this.estadosFinais.forEach((x) => {
      if (!this.estados.has(x)) estadosInvalidos.push(x);
    });
    if (estadosInvalidos.length > 0) {
      return {
        valid: false,
        message: `O(s) estado(s) ${estadosInvalidos.join(
          ", "
        )} não pertence(m) ao conjunto de estados do autômato`,
      };
    }
    return { valid: true };
  }

  public validar(): Validation {
    const validacaoEstadoInicial = this.validarEstadoInicial();
    const validacaoEstadosFinais = this.validarEstadosFinais();
    const validacaoTransicoes = this.validarTransicoes();

    const erros: string[] = [];
    if (validacaoEstadoInicial.message)
      erros.push(validacaoEstadoInicial.message);

    if (validacaoEstadosFinais.message)
      erros.push(validacaoEstadosFinais.message);

    if (validacaoTransicoes.message) erros.push(validacaoTransicoes.message);

    return {
      valid:
        validacaoEstadoInicial.valid &&
        validacaoEstadosFinais.valid &&
        validacaoTransicoes.valid,
      message: erros.length > 0 ? erros.join(", ") : undefined,
    };
  }
}
