import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from "ng5-breadcrumb";
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { OrdersModel } from '../models/order';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from '../../shopping/models/category';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {

  orderToGet: CategoryModel;
  private str:string = "test test test";
  constructor(
    private breadcrumbService:BreadcrumbService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private ordersService:OrdersService,
    private categoryService:CategoryService
  ) {  }

  ngOnInit() {
    this.breadcrumbService.hideRoute('/admin');
    this.breadcrumbService.hideRoute('/admin/manager');

    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/orders', 'Orders');
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/orders/create', 'Create');
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/orders/edit', 'Edit');
    
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/products', 'Products'); 
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/products/create', 'Create'); 
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/products/edit', 'Edit'); 

    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/users', 'Users');
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/users/create', 'Create');

    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/categories', 'Categories');
    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/categories/create', 'Create');

    this.breadcrumbService.addFriendlyNameForRoute('/admin/manager/config', 'Config');
  }

  
}
