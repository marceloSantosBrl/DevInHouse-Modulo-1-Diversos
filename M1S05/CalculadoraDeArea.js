export default class CalculadoraDeArea {
    constructor(tipo, base, altura) {
        this.tipo = tipo;
        if (tipo === 'quadrado') {
            this.base = this.altura = base;
        } else {
            this.base = base;
            this.altura = altura;
        }
    }

    _areaTriangulo() {
        return this.base * this.altura / 2;
    }

    _areaRetangulo() {
        return this.base * this.altura;
    }

    calcular() {
        switch (this.tipo) {
            case 'triangulo':
                return this._areaTriangulo();
            case 'quadrado':
            case 'retangulo':
                return this._areaRetangulo();
            default:
                throw new Error('forma não implementada');
        }
    }
}

const a = new CalculadoraDeArea('retangulo', 4, 2);
console.log()