import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products'
/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor( public productsService: ProductsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
