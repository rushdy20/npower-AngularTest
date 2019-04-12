import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../service/product.service';

import { ActivatedRoute } from '@angular/router';
import { ModalData } from '../models/modalData';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products: ModalData[] = [];
  constructor(route: ActivatedRoute,
    private productService: ProductService) {
      this.products =   this.productService.getAllProducts(); 
     // this.initaializeTable(prods);
     }

}





