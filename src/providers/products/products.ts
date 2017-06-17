import { Injectable } from '@angular/core';
/*import { Http } from '@angular/http';
import 'rxjs/add/operator/map';*/

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductsProvider {

products: any;

  constructor() {
    console.log('Hello ProductsProvider Provider');
    this.products = [
            {title: 'Cool shoes', description: 'Isn\'t it obvious?', price: '39.99'},
            {title: 'Broken shoes', description: 'You should probably get the other ones', price: '89.99'},
            {title: 'Socks', description: 'The essential footwear companion', price: '2.99'}
        ];
  }

}
