import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListOrdersComponent } from './order/list-orders/list-orders.component';
import { NavTopoComponent } from './nav-topo/nav-topo.component';
import { NewOrderComponent } from './order/new-order/new-order.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListOrdersComponent,
    NavTopoComponent,
    NewOrderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
