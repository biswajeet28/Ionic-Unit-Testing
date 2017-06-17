import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WishlistServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WishlistServiceProvider {

  products: any[] = [];

  constructor() {
    console.log('Hello WishlistServiceProvider Provider');
  }

  addProduct(product: Object): void {
        if(!(this.products.indexOf(product) > -1)){
            this.products.push(product);            
        }
    }

    deleteProduct(product: Object): void {
 
        let index = this.products.indexOf(product);
 
        if(index > -1){
            this.products.splice(index, 1);
        }
 
    }

}
