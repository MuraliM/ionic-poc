import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { ProductSamplesPage } from '../pages/product-samples/product-samples';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
    rootPage: any = HomePage;
  
    pages: Array<{title: string, component: any, icon: string,iconcolor: string}>;
  
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
      this.initializeApp();
  
      // used for an example of ngFor and navigation
      this.pages = [
        
        { title: 'Products', component: ProductsPage, icon:'paper-plane',iconcolor:'danger' },
        { title: 'Samples', component: ProductSamplesPage, icon:'shirt', iconcolor:'secondary'  },
        { title: 'Logout', component: HomePage, icon:'log-out',iconcolor:'dark'   }
      ];
  
    }
  
    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  
    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }
}

