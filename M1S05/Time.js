export default class Time {
  constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos) {
    this.nome = nome;
    this.sigla = sigla;
    this.vitorias = vitorias;
    this.derrotas = derrotas;
    this.empates = empates;
    this.golsMarcados = golsMarcados;
    this.golsSofridos = golsSofridos;
  }

  get numeroDeJogos() {
    return this.vitorias + this.derrotas + this.empates;
  }

  get numeroDePontos() {
    const pontosVitoria = 3;
    const pontosEmpates = 1;
    const pontosDerrota = 0;
    return this.vitorias * pontosVitoria
      + this.empates * pontosEmpates
      + this.derrotas * pontosDerrota;
  }

  #calcularGols(partida) {
    switch (this.sigla) {
      case partida.siglaTimeA:
        return {
          golsMarcadosPartida: partida.golsTimeA,
          golsSofridosPartida: partida.golsTimeB,
        };
      case partida.siglaTimeB:
        return {
          golsMarcadosPartida: partida.golsTimeB,
          golsSofridosPartida: partida.golsTimeA,
        };
      default:
        throw new Error('Time não está na partida');
    }
  }

  computarPartida(partida) {
    const { golsMarcadosPartida, golsSofridosPartida } = this.#calcularGols(partida);
    this.golsMarcados += golsMarcadosPartida;
    this.golsSofridos += golsSofridosPartida;
    if (golsMarcadosPartida > golsSofridosPartida) {
      this.vitorias += 1;
    } else if (golsMarcadosPartida === golsSofridosPartida) {
      this.empates += 1;
    } else {
      this.derrotas += 1;
    }
  }

  exibirSituacao() {
    console.log(`nome do time: ${this.nome}`);
    console.log(`sigla do time: ${this.sigla}`);
    console.log(`vitorias do time: ${this.vitorias}`);
    console.log(`derrotas do time: ${this.derrotas}`);
    console.log(`empates do time: ${this.empates}`);
    console.log(`gols marcados do time: ${this.golsMarcados}`);
    console.log(`gols sofridos do time: ${this.golsSofridos}`);
  }
}
