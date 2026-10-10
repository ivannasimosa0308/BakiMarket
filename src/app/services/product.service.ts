import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductResponse } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private http = inject(HttpClient);
    private apiUrl = 'https://dummyjson.com/products';

    getProducts(limit = 8, skip = 0): Observable<ProductResponse> {
        return this.http.get<ProductResponse>(this.apiUrl, {

            params: {
                limit: String(limit), //la cantidad de productos a mostrar
                skip: String(skip) //la cantidad de productos a omitir, es decir, empieza desde el primero
            }
        });
    }
    
}