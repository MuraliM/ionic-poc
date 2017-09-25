import { Component, Input } from '@angular/core';

import { NavController, MenuController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import { ProductsPage } from '../products/products';
import { SampleQRCodePage } from '../sample-qrcode/sample-qrcode';
import { SampleSubmitActionsPage } from '../sample-submit-actions/sample-submit-actions';

@Component({
    selector: 'page-sample-detail',
    templateUrl: 'sample-detail.html'
})
export class SampleDetailPage {

    @Input() data: any;
    @Input() events: any;
    departmentList: any;
    suppliers:any;
    showSupplierList: boolean = false;
    saveButtonText = 'Submit Sample';
    productMenuText = 'Add Sample';
    isNewSample = true;
    sample = {
        id: null,
        round: '',
        roundid: null,
        color: null,
        image: null,
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
        commentCount: null
    };

    constructor(public nav: NavController, private menuCtrl: MenuController, private navParams: NavParams
        , private camera: Camera, public actionSheetCtrl: ActionSheetController
        , private toastCtrl: ToastController) {

        if (this.navParams.data.roundid) {

            this.sample = this.navParams.data;
            this.isNewSample = false;
            this.productMenuText = this.navParams.data.product.name + ' - ' + this.navParams.data.round;
        }

    }
    initializeSuppliers() {
        this.suppliers = [
          'AKC Pvt Ltd',
          'Jiaxing Export Co., Ltd',
          'WGT Textile',
          'AMA Industries',
          'Sunshine Fabrics',
          'Banglore works'
        ];
      }

      getSuppliers(ev: any) {
        // Reset items back to all of the items
        this.initializeSuppliers();
    
        // set val to the value of the searchbar
        let val = ev.target.value;
    
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          
          // Filter the items
          this.suppliers = this.suppliers.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
          
          // Show the results
          this.showSupplierList = true;
        } else {
          
          // hide the results when the query is empty
          this.showSupplierList = false;
        }
      }

    gotoHomePage() {
        this.nav.setRoot(ProductsPage);
    }

    takePicture() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 300,
            targetWidth: 400,
            correctOrientation: true
        };

        this.camera.getPicture(options).then((imageUri) => {
            this.sample.image = imageUri;
        }, (err) => {

        });
    }
    openGallery() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 300,
            targetWidth: 400,
            correctOrientation: true
        };

        this.camera.getPicture(options).then((imageUri) => {
            this.sample.image = imageUri;
        }, (err) => {

        });
    }

    removePicture() {
        this.sample.image = null;
    }

    filterItems(searchTerm) {

        return this.departmentList.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }

    onSampleSave(item: any) {
        let toast = this.toastCtrl.create({
            message: 'Sample saved successfully',
            duration: 3000,
            position: 'bottom',
            cssClass: 'danger'
        });

        toast.onDidDismiss(() => {

        });

        toast.present();
        this.isNewSample = false;
    }




    presentSampleActions() {
        let actionButtons = [
            {
                text: 'Save Sample',
                handler: () => {
                    this.onSampleSave(this.sample);
                    this.isNewSample=false;
                }
            }];
        if (!this.isNewSample) {
            actionButtons = [
                {
                    text: 'Goto Portal',
                    handler: () => {
                        this.gotoHomePage();
                    }
                }, {
                    text: 'Submit',
                    handler: () => {
                        this.onSampleSave(this.sample);
                        this.nav.push(SampleSubmitActionsPage, this.sample);
                    }
                }
            ];
        }
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Actions',
            buttons: actionButtons
        });
        actionSheet.present();
    }


}
