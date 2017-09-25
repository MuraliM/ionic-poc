import { Component, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { NavController, MenuController, NavParams } from 'ionic-angular';
import { ProductSamplesPage } from '../product-samples/product-samples';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-product-detail',
    templateUrl: 'product-detail.html'
})
export class ProductDetailPage {

    @Input() data: any;
    @Input() events: any;
    departments: any;
    newProduct = true;
    saveButtonText = 'Add Product';
    productMenuText = 'Add Product';
    productDetailForm: FormGroup;

    product = {
        name: '',
        department: '',
        season: ''
    };

    constructor(public nav: NavController, private menuCtrl: MenuController, private navParams: NavParams
        , private toastCtrl: ToastController, public formBuilder: FormBuilder) {

        this.departments = [
            'Jackets'
            , 'Jeans'
            , 'Ladies Wear'
            , 'Shirts'
            , 'Skirts'
            , 'TShirts'
            , 'Tops'];

        if (this.navParams.data.id) {
            this.newProduct = false;
            this.product = this.navParams.data;
            this.saveButtonText = 'Save Product';
            this.productMenuText = this.navParams.data.name;
        }
    }

    ionViewWillLoad() {

    }
    gotoProducts() {

    }

    getoProductSamples(item: any, e: any) {

        this.nav.push(ProductSamplesPage, item);
    }

    

    onProductSave(item: any, e: any) {
        let toast = this.toastCtrl.create({
            message: 'Product saved successfully',
            duration: 3000,
            position: 'bottom',
            cssClass: 'danger'
        });

        toast.onDidDismiss(() => {

        });

        toast.present();
        this.nav.pop();
    }


}
