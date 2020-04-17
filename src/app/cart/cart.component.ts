import { Component, OnInit } from '@angular/core';
import { ShoppingManagerService } from '../shopping-manager.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private shoppingmanager: ShoppingManagerService) { }

  cart: {[k: string]: any} = [];

  ngOnInit(): void {
    this.cart = this.shoppingmanager.getCart();
  }

  removeItem(id) {
    this.shoppingmanager.reduceItemFromCart(id);
    this.cart = this.shoppingmanager.getCart();
  }
}
