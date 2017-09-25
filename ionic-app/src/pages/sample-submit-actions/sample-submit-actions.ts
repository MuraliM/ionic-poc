import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { SampleQRCodePage } from '../sample-qrcode/sample-qrcode';


@Component({
  selector: 'page-sample-submit-actions',
  templateUrl: 'sample-submit-actions.html',
})
export class SampleSubmitActionsPage {

  sample: any;
  constructor(public nav: NavController, private menuCtrl: MenuController,
    public navParams: NavParams, private toastCtrl: ToastController) {
    if (this.navParams.data.id) {

      this.sample = this.navParams.data;

    }

  }

  ionViewDidLoad() {

  }
  
  editSampleInformation(){
    this.nav.pop();
  }
  
  gotoQRCodePage() {
    this.nav.push(SampleQRCodePage, this.sample);
  }
  sendSampleToPO() {
    let toast = this.toastCtrl.create({
      message: 'Sample was sent to PO successfully',
      duration: 3000,
      position: 'bottom',
      cssClass: 'danger'
    });

    toast.onDidDismiss(() => {

    });

    toast.present();
  }
}
