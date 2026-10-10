import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonButton]
})
export class InicioPage implements OnInit {

  modoOscuro = false; //se aplica en al elemento principal del documento, por lo que afecta a todas las paginas. 

  cambiarModo(): void {
    this.modoOscuro = !this.modoOscuro;


    document.documentElement.classList.toggle(

      'ion-palette-dark',
      this.modoOscuro);

  }

  constructor() { }

  ngOnInit() {
  }

}
