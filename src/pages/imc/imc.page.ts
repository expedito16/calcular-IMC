import { Component, OnInit } from '@angular/core';
import { IMC } from 'src/models/imc.interface';
import { ImcService } from './service/imc.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class IMCPage implements OnInit {

  altura: number;
  peso: number;
  resultado: IMC;

  constructor(
    private imcService: ImcService
  ) { }

  ngOnInit() {
  }

  calcularImc() {
    this.resultado = this.imcService.calcularImc(this.altura, this.peso);
  }


}
