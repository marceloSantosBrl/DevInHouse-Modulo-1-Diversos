class Animal {
  constructor(nome, idade, som) {
    this.nome = nome;
    this.idade = idade;
    this.som = som;
  }
}

class Cachorro extends Animal {
  constructor(...args){
    super(...args, 'latido');
  }
}


class Gato extends Animal {
  constructor(...args){
    super(...args, 'miado');
  }
}

export {Cachorro, Gato};