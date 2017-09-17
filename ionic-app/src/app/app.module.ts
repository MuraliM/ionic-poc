import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ProductSamplesPage } from '../pages/product-samples/product-samples';
import { SampleDetailPage } from '../pages/sample-detail/sample-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductDetailPage,
    ProductSamplesPage,
    SampleDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductDetailPage,
    ProductSamplesPage,
    SampleDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
