import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products'
import { WishlistPage } from '../wishlist/wishlist';
import { WishlistServiceProvider } from '../../providers/wishlist-service/wishlist-service';

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

  constructor( public navCtrl: NavController,public productsService: ProductsProvider, public wishlistService: WishlistServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.productsService.load();
  }

  launchWishlist() {
 
    this.navCtrl.push(WishlistPage);
 
  } 

    addToWishlist(product){
    this.wishlistService.addProduct(product);
  }

}
