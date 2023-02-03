export default class CalculadoraDeArea {
  constructor(tipo, base, altura) {
    this.tipo = tipo;
    if (tipo === 'quadrado') {
      this.base = base;
      this.altura = base;
    } else {
      this.base = base;
      this.altura = altura;
    }
  }

  #areaTriangulo() {
    return this.base * (this.altura / 2);
  }

  #areaRetangulo() {
    return this.base * this.altura;
  }

  calcular() {
    switch (this.tipo) {
      case 'triangulo':
        return this.#areaTriangulo();
      case 'quadrado':
      case 'retangulo':
        return this.#areaRetangulo();
      default:
        throw new Error('forma não implementada');
    }
  }
}
