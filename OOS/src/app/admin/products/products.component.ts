import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/Product.service'
import { CategoryService } from '../services/category.service';
import { ProductStatus } from '../models/product';
import { SpinnerService } from '../../shared/services/spinner.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  statusDefine = ProductStatus;
  products : any;
  id: string;
  constructor(private productService : ProductService, private categoryService : CategoryService,
    private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.loadProducts();

  }
  loadProducts(){
    this.spinnerService.startLoadingSpinner();
    this.productService.gets().subscribe(data =>{
      this.products = data;
      this.spinnerService.turnOffSpinner();
    });
  }
  setId(id){
    this.id = id; 
  }
  deleteProduct(){
    this.productService.delete(this.id).subscribe(data => {
      this.loadProducts();
    });
  }
  }
