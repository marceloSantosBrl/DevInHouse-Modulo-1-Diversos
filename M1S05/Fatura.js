export default class Fatura {
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;
    this.quantia = quantia >= 0 ? quantia : 0;
    this.preco = preco >= 0 ? preco : 0;
  }

  obterValorTotal() {
    return this.preco * this.quantia;
  }

  get valorTotal() {
    return this.preco * this.quantia;
  }
}
