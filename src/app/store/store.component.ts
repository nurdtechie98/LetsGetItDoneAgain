import { Component, OnInit } from '@angular/core';
import { ShoppingManagerService } from '../shopping-manager.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor( private storeManager: ShoppingManagerService) { }

  catalog: {[k: string]: any};
  added = false;

  getCatalogue() {
    this.catalog = this.storeManager.getCatalogue();
  }
  ngOnInit(): void {
    this.getCatalogue();
  }

  addToCart(val) {
    this.added = false;
    this.storeManager.addItemToCart(val);
    this.added = true;
  }

}
