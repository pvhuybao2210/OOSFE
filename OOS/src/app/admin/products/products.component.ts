import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/Product.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any;
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.gets().subscribe(data =>{
      this.products = data;
    });
  }
  setId(id:string){
    this.productService.setId(id);
  }
  }
