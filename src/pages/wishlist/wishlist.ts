import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WishlistServiceProvider } from '../../providers/wishlist-service/wishlist-service'

/**
 * Generated class for the WishlistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {

  constructor(public navCtrl: NavController, public wishlistService: WishlistServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }
  deleteFromWishlist(product){
    this.wishlistService.deleteProduct(product);
  }

}
