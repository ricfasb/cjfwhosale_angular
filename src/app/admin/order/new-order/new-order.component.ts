import { OrderItem } from './../models/order-item';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  orderItemForm!: FormGroup;
  items: Array<OrderItem> = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.orderItemForm = this.formBuilder.group({
      product: ['', [Validators.required]],
      quantity: [0, [Validators.required]],
      value: [0]
    });
  }

  addItem() {
    const orderItem = this.orderItemForm.getRawValue() as OrderItem;
    console.log(orderItem.product);
    console.log(orderItem);
    this.items.push(orderItem);
  }

}
