import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './cart/shopping-cart/shopping-cart.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PaymentComponent } from './cart/payment/payment.component';
import { ShippingInfoComponent } from './cart/shipping-info/shipping-info.component';
import { ThankyouComponent } from './cart/thankyou/thankyou.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CategoryDetailComponent } from '../admin/categories/category-detail/category-detail.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SearchComponent } from './search/search.component';
import { ShippingReturnComponent } from './shipping-return/shipping-return.component';
import { ShippingGuideComponent } from './shipping-guide/shipping-guide.component';
import { FaqComponent } from './faq/faq.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';


const shoppingRoutes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      {
        path: 'cart', component: CartComponent,
        children: [
          { path: '', component: ShoppingCartComponent , pathMatch: 'full', data : {activeProcessNumber: '0', active: 'Cart'} },
          { path: 'shipping-info', component: ShippingInfoComponent, data : {activeProcessNumber: '1', active: 'Shipping Information'} },
          { path: 'payment', component: PaymentComponent, data : {activeProcessNumber: '2', active: 'Payment'} },
          { path: 'thankyou', component: ThankyouComponent, data : {activeProcessNumber: '3', active: 'Thank you'} },
        ]
      },
      {
        path: 'category',
        children: [
          { path: ':id', component: CategoryDetailsComponent }
        ]
      },
      {
        path: 'product',
        children: [
          { path: ':id', component: ProductDetailComponent },
        ]
      },
      {
        path: 'contact',
        children: [
          { path: '', component: ContactComponent },
        ]
      },
      { path: 'search', component: SearchComponent },
      { path: 'shipping-return', component: ShippingReturnComponent },
      { path: 'shipping-guide', component: ShippingGuideComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'register', component: CreateAccountComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
