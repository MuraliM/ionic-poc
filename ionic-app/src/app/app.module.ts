import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ProductSamplesPage } from '../pages/product-samples/product-samples';
import { SampleDetailPage } from '../pages/sample-detail/sample-detail';
import { SampleQRCodePage } from '../pages/sample-qrcode/sample-qrcode';
import { SampleSubmitActionsPage } from '../pages/sample-submit-actions/sample-submit-actions';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductDetailPage,
    ProductSamplesPage,
    SampleDetailPage,
    SampleSubmitActionsPage,
    SampleQRCodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductDetailPage,
    ProductSamplesPage,
    SampleDetailPage,
    SampleSubmitActionsPage,
    SampleQRCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
