import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
