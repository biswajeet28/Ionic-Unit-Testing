import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { SampleServiceProvider } from '../providers/sample-service/sample-service';
import { ProductsProvider } from '../providers/products/products';
import { WishlistServiceProvider } from '../providers/wishlist-service/wishlist-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductPage,
    WishlistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    WishlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SampleServiceProvider,
    ProductsProvider,
    WishlistServiceProvider
  ]
})
export class AppModule {}
