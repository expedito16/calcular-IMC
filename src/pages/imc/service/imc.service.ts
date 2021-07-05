import { Injectable } from '@angular/core';
import { IMC } from 'src/models/imc.interface';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  constructor() { }

  calcularImc(altura: number, peso: number) {
    const imc =  parseFloat((peso / (Math.pow(altura, 2))).toFixed(2));

    return <IMC> {
      imc,
      classificacao: this.classificacaoImc(imc)
    }
  }

  private classificacaoImc(imc: number) {
    if (imc > 18.5) {
      return 'Abaixo do peso'
    } else if (imc > 18.5 && imc < 24.9) {
      return 'Peso normal'
    } else if (imc > 25 && imc < 29.9) {
      return 'Sobrepeso'
    } else if (imc > 30 && imc < 34.9) {
      return 'Obesidade grau 1'
    } else if (imc > 35 && imc < 39.9) {
      return 'Obesidade grau 2'
    } else if (imc > 40) {
      return 'Obesidade grau 3 ou mórbida'
    }
  }
}
