export default class Juros {
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }

  calcularJurosSimples() {
    return this.capitalInicial * this.taxaAplicada * this.tempo;
  }

  calcularJurosComposto() {
    return this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
  }
}
