export default class Personagem {
  percentualVida = 100;

  constructor(nome) {
    this.nome = nome;
  }

  sofreuDano(percentualDano) {
    this.percentualVida =
      this.percentualVida >= percentualDano
        ? this.percentualVida - percentualDano
        : 0;
  }

  usouKitMedico() {
    this.percentualVida =
      this.percentualVida > 90 ? 100 : this.percentualVida + 10;
  }
}