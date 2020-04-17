import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class ShoppingManagerService {
  private catalog: {[k: string]: any} = [
    { name: `shoes`, price: `2000`, id: 1 },
    { name: `bottle`, price: `250`, id: 2},
    { name: `phone`, price: `25000`, id: 3 },
    { name: `bag`, price: `1500`, id : 4 },
    { name: `headphone`, price: `3500`, id : 5}
  ];
  private cart: {[k: string]: any} = [];
  constructor() { }

  getCatalogue(){
    return this.catalog;
  }

  getCart(){
    return this.cart;
  }

  addItemToCart(val) {
    let exist = false;
    this.cart.forEach( (element, index) => {
      if (element.id === val)
      {
        this.cart[index].count += 1;
        exist = true;
        return;
      }
    });
    if (exist){
      return;
    }
    this.catalog.forEach( (element) => {
      if (element.id === val) {
        let newItem: {[k: string]: any} = element;
        newItem.count = 1;
        this.cart.push(newItem);
        return;
      }
    });
  }

  reduceItemFromCart(val) {
    this.cart.forEach( (element) => {
      if (element.id === val)
      {
        element.count -= 1;
        if (element.count === 0)
        {
          this.cart = this.cart.filter(item => item.id !== val);
        }
        return;
      }
    });
  }
}
