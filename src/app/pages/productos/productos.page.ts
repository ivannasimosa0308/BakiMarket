import {
  Component, OnInit, inject, signal, computed
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonSpinner, IonButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/angular';

import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonSpinner, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ]
})
export class ProductosPage implements OnInit {
  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  total = signal(0);
  loading = signal(false);
  error = signal('');

  pagina = signal(1);
  readonly porPagina = 8;

  totalPaginas = computed(() =>
    Math.max(1, Math.ceil(this.total() / this.porPagina)) // hace la division de productos totales entre los productos por pagina y redondea hacia arriba, para que si hay 9 productos y 8 por pagina, haya 2 paginas
  );

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(paginaSolicitada = this.pagina()): void {
    if (this.loading()) return;

    this.loading.set(true);
    this.error.set('');

    const skip = (paginaSolicitada - 1) * this.porPagina;

    this.productService.getProducts(this.porPagina, skip)
      .subscribe({
        next: (response) => {
          this.products.set(response.products);
          this.total.set(response.total);
          this.pagina.set(paginaSolicitada);
          this.loading.set(false);
        },
        error: (error) => {
          console.error(error);
          this.error.set('No se han podido cargar los productos.');
          this.loading.set(false);
        }
      });
  }

  cambiarPagina(nuevaPagina: number): void {
    if (
      nuevaPagina < 1 ||
      nuevaPagina > this.totalPaginas() ||
      this.loading()
    ) return;

    this.loadProducts(nuevaPagina);
  }
}

