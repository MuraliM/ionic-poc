import { Component, Input } from '@angular/core';

import { NavController, MenuController, NavParams } from 'ionic-angular';
import { ProductSamplesPage } from '../product-samples/product-samples';

@Component({
    selector: 'page-sample-qrcode',
    templateUrl: 'sample-qrcode.html'
})
export class SampleQRCodePage {

    @Input() data: any;
    @Input() events: any;
    sample = {
        id: 180758,
        round: '2 D/S',
        roundid: 1,
        color: 'Natural',
        image: 'assets/images/samples/1.jpg',
        material: {},
        comments: {},
        product: {
            id: '15B34A09',
            name: 'Stadium Yellow',
            description: 'T-shirt with a print motif',
            image: 'assets/images/products/1.jpg',
            department: 'TShirt',
            season: '201706'
        },
        qrCode: '15B34A09 2 D/S',
        commentCount: 4
    };



    productMenuText = 'QR Code';

    product = {
        name: '',
        department: '',
        season: ''
    };

    constructor(public nav: NavController, private menuCtrl: MenuController, private navParams: NavParams) {

        if (this.navParams.data.id) {

            this.sample = this.navParams.data;
            this.sample.qrCode = this.sample.id + this.sample.round;
            this.productMenuText = this.navParams.data.name;
        }
    }

    emailCode() {

    }

    attachCode() {

    }

    printCode() {

    }
}
