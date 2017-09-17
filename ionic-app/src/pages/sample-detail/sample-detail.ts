import { Component, Input } from '@angular/core';

import { NavController, MenuController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ProductsPage } from '../products/products';
import { ActionSheetController } from 'ionic-angular';

@Component({
    selector: 'page-sample-detail',
    templateUrl: 'sample-detail.html'
})
export class SampleDetailPage {

    @Input() data: any;
    @Input() events: any;
    departmentList: any;

    saveButtonText = 'Submit Sample';
    productMenuText = 'Add Sample';

    sample = {
        id: 180758,
        round: '2 D/S',
        roundid:1,
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
        commentCount: 4
    };

    constructor(public nav: NavController, private menuCtrl: MenuController, private navParams: NavParams
        , private camera: Camera, public actionSheetCtrl: ActionSheetController) {

        this.departmentList = [
            { name: '1023 - Nivea Beaute' },
            { name: '1024 - Maybelline' },
            { name: '1019 - Own Production' },
            { name: '1026 - Mineral Make-up' },
            { name: '1073 - Other' },
            { name: '1075 - Man' },
            { name: '1076 -LOreal' }
        ]
        
        if (this.navParams.data.id) {

            this.sample = this.navParams.data;
            
            this.productMenuText = this.navParams.data.product.name+' - '+ this.navParams.data.round;
        }
    }

    gotoHomePage() {
        this.nav.push(ProductsPage);
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
            this.sample.image=imageUri;
        }, (err) => {
            
        });
    }
    openGallery(){
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
            this.sample.image=imageUri;
        }, (err) => {
            
        });
    }

    removePicture(){
        this.sample.image=null;
    }

    filterItems(searchTerm) {

        return this.departmentList.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }

    onSampleSave(item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        this.nav.pop();
    }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
          title: 'Modify your album',
          buttons: [
            {
              text: 'Destructive',
              role: 'destructive',
              handler: () => {
                console.log('Destructive clicked');
              }
            },{
              text: 'Archive',
              handler: () => {
                console.log('Archive clicked');
              }
            },{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();
      }

}
