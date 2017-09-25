import { Component, Input, ViewChild } from '@angular/core';
import { Content, FabButton } from 'ionic-angular';
import { NavController, MenuController } from 'ionic-angular';
import { ProductService } from '../../services/ProductService';
import { ProductDetailPage } from '../product-detail/product-detail';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
    selector: 'page-products',
    templateUrl: 'products.html',
    providers: [ProductService]
})
export class ProductsPage {
    searchTerm:any="";
    allItems:any;
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    @ViewChild(FabButton)
    fabButton: FabButton;    
    items=[
    {
        id: '15B34A09',
        name: 'Stadium Yellow',
        description: 'T-shirt with a print motif',
        image: 'assets/images/products/1.jpg',
        department: 'TShirts',
        season: '201706',        
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant',
        samples:[
            {
                id: 180758,
                round: '2 D/S',
                roundid:2,
                color: 'Natural',
                image: 'assets/images/samples/1.jpg',
                material: {},
                comments: {},
                product: {
                    id: '15B34A09',
                    name: 'Stadium Yellow',
                    description: 'T-shirt with a print motif',
                    image: 'assets/images/products/1.jpg',
                    department: 'TShirts',
                    season: '201706'
                },
                commentCount: 4,
                date:'2017-09-22',
                purpose:'Look/Fitting',
                supplier:'AMA Industries'
            },
            {
                id: 168520,
                round: '1 D/S',
                roundid:1,
                color: 'Natural',
                image: 'assets/images/samples/2.jpg',
                material: {},
                comments: {},
                product: {
                    id: '15B34A09',
                    name: 'Stadium Yellow',
                    description: 'T-shirt with a print motif',
                    image: 'assets/images/products/1.jpg',
                    department: 'TShirts',
                    season: '201706'
                },
                commentCount: 2,
                date:'2017-09-19',
                purpose:'Color',
                supplier:'WGT Textile'
            }]
    },
    {
        id: '7BB34A08',
        name: 'Grey marl good stuff',
        description: 'Printed T-Shirt',
        image: 'assets/images/products/2.jpg',
        department: 'TShirts',
        season: '201704',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant',
        samples:[
            {
                id: 168521,
                round: '2 D/S',
                roundid:2,
                color: 'Natural',
                image: 'assets/images/samples/21.jpg',
                material: {},
                comments: {},
                product: {
                    id: '15B34A09',
                    name: 'Grey marl good stuff',
                    description: 'Printed T-Shirt',
                    image: 'assets/images/products/2.jpg',
                    department: 'TShirts',
                    season: '201704'
                },
                commentCount: 1,
                date:'2017-09-20',
                purpose:'Look/Fitting',
                supplier:'Jiaxing Export Co., Ltd'
            },
            {
                id: 168522,
                round: '1 D/S',
                roundid:1,
                color: 'Natural',
                image: 'assets/images/samples/22.jpg',
                material: {},
                comments: {},
                product: {
                    id: '15B34A09',
                    name: 'Stadium Yellow',
                    description: 'T-shirt with a print motif',
                    image: 'assets/images/products/2.jpg',
                    department: 'TShirts',
                    season: '201706'
                },
                commentCount: 2,
                date:'2017-09-19',
                purpose:'Material',
                supplier:'AMA Industries'
            },
            {
                id: 168523,
                round: '1 D/S',
                roundid:1,
                color: 'Natural',
                image: 'assets/images/samples/23.jpg',
                material: {},
                comments: {},
                product: {
                    id: '15B34A09',
                    name: 'Stadium Yellow',
                    description: 'T-shirt with a print motif',
                    image: 'assets/images/products/2.jpg',
                    department: 'TShirts',
                    season: '201706'
                },
                commentCount: 2,
                date:'2017-09-19',
                purpose:'Color',
                supplier:'WGT Textile'
            }]
    },
    {
        id: 'ABB34A0C',
        name: 'Short wrap skirt',
        description: 'Short wrap skirt',
        image: 'assets/images/products/3.jpg',
        department: 'Skirts',
        season: '201705',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant',
        samples:[
            {
                id: 168531,
                round: '2 D/S',
                roundid:2,
                color: 'Natural',
                image: 'assets/images/samples/31.jpg',
                material: {},
                comments: {},
                product: {
                    id: 'ABB34A0C',
                    name: 'Short wrap skirt',
                    description: 'Short wrap skirt',
                    image: 'assets/images/products/3.jpg',
                    department: 'Skirts',
                    season: '201705'
                },
                commentCount: 1,
                date:'2017-09-20',
                purpose:'Look/Fitting',
                supplier:'AMA Industries'
            },
            {
                id: 168532,
                round: '1 D/S',
                roundid:1,
                color: 'Natural',
                image: 'assets/images/samples/32.jpg',
                material: {},
                comments: {},
                product: {
                    id: 'ABB34A0C',
                    name: 'Short wrap skirt',
                    description: 'Short wrap skirt',
                    image: 'assets/images/products/3.jpg',
                    department: 'Skirts',
                    season: '201705'
                },
                commentCount: 2,
                date:'2017-08-05',
                purpose:'Color',
                supplier:'Jiaxing Export Co., Ltd'
            },
            {
                id: 168533,
                round: '1 D/S',
                roundid:1,
                color: 'Natural',
                image: 'assets/images/samples/33.jpg',
                material: {},
                comments: {},
                product: {
                    id: '15B34A09',
                    name: 'Stadium Yellow',
                    description: 'T-shirt with a print motif',
                    image: 'assets/images/products/2.jpg',
                    department: 'Skirts',
                    season: '201706'
                },
                commentCount: 2,
                date:'2017-09-19',
                purpose:'Look/Fitting',
                supplier:'WGT Textile'
            }]
    },
    {
        id: 'CC34A08',
        name: 'Silk jacket',
        description: 'Green Silk jacket',
        image: 'assets/images/products/4.jpg',
        department: 'Ladies Wear',
        season: '201706',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant',
        samples:[
            {
                id: 168541,
                round: '5 D/S',
                roundid:2,
                color: 'Natural',
                image: 'assets/images/samples/41.jpg',
                material: {},
                comments: {},
                product: {
                    id: 'CC34A08',
                    name: 'Silk jacket',
                    description: 'Green Silk jacket',
                    image: 'assets/images/products/4.jpg',
                    department: 'Ladies Wear',
                    season: '201706',
                },
                commentCount: 6,
                date:'2017-07-10',
                purpose:'Material',
                supplier:'AMA Industries'
            }]
    },
    {
        id: 'D67BC890',
        name: 'Long jacket',
        description: 'Black Long jacket',
        image: 'assets/images/products/5.jpg',
        department: 'Jackets',
        season: '201802',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant',
        samples:[
            {
                id: 168551,
                round: '4 D/S',
                roundid:4,
                color: 'Natural',
                image: 'assets/images/samples/51.jpg',
                material: {},
                comments: {},
                product: {
                    id: 'D67BC890',
                    name: 'Long jacket',
                    description: 'Black Long jacket',
                    image: 'assets/images/products/5.jpg',
                    department: 'Jackets',
                    season: '201802'
                },
                commentCount: 5,
                date:'2017-06-11',
                purpose:'Look/Fitting',
                supplier:'AMA Industries'
            }]
    },
    {
        id: 'D67BC850',
        name: 'Crêpe top',
        description: 'Red color Crêpe top',
        image: 'assets/images/products/6.jpg',
        department: 'Tops',
        season: '201801',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant',
        samples:[
            {
                id: 168561,
                round: '3 D/S',
                roundid:3,
                color: 'Natural',
                image: 'assets/images/samples/61.jpg',
                material: {},
                comments: {},
                product: {
                    id: 'D67BC850',
                    name: 'Crêpe top',
                    description: 'Red color Crêpe top',
                    image: 'assets/images/products/6.jpg',
                    department: 'Tops',
                    season: '201801'
                },
                commentCount: 2,
                date:'2017-06-29',
                purpose:'Look/Fitting',
                supplier:'Jiaxing Export Co., Ltd'
            }]
    },
    {
        id: 'F67BC894',
        name: 'Fleece jacket',
        description: 'Fleece jacket with a hood',
        image: 'assets/images/products/7.jpg',
        department: 'Jackets',
        season: '201705',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant',
        samples:[
            {
                id: 168571,
                round: '3 D/S',
                roundid:3,
                color: 'Natural',
                image: 'assets/images/samples/71.jpg',
                material: {},
                comments: {},
                product: {
                    id: 'F67BC894',
                    name: 'Fleece jacket',
                    description: 'Fleece jacket with a hood',
                    image: 'assets/images/products/7.jpg',
                    department: 'Jackets',
                    season: '201705',
                },
                commentCount: 1,
                date:'2017-09-20',
                purpose:'Material',
                supplier:'AMA Industries'
            },
            {
                id: 168572,
                round: '1 D/S',
                roundid:1,
                color: 'Natural',
                image: 'assets/images/samples/72.jpg',
                material: {},
                comments: {},
                product: {
                    id: 'F67BC894',
                    name: 'Fleece jacket',
                    description: 'Fleece jacket with a hood',
                    image: 'assets/images/products/7.jpg',
                    department: 'Jackets',
                    season: '201705',
                },
                commentCount: 2,
                date:'2017-08-05',
                purpose:'Color',
                supplier:'AMA Industries'
            }]
    },
    {
        id: 'BBBC888',
        name: 'Mom Jeans',
        description: 'Blue Mom Jeans',
        image: 'assets/images/products/8.jpg',
        department: 'Jeans',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant',
        samples:[
            {
                id: 168581,
                round: '3 D/S',
                roundid:3,
                color: 'Natural',
                image: 'assets/images/samples/81.jpg',
                material: {},
                comments: {},
                product: {
                    id: 'BBBC888',
                    name: 'Mom Jeans',
                    description: 'Blue Mom Jeans',
                    image: 'assets/images/products/8.jpg',
                    department: 'Jeans',
                    season: '201507'
                },
                commentCount: 1,
                date:'2017-09-20',
                purpose:'Material',
                supplier:'Jiaxing Export Co., Ltd'
            },
            {
                id: 168582,
                round: '2 D/S',
                roundid:1,
                color: 'Natural',
                image: 'assets/images/samples/82.jpg',
                material: {},
                comments: {},
                product: {
                    id: 'BBBC888',
                    name: 'Mom Jeans',
                    description: 'Blue Mom Jeans',
                    image: 'assets/images/products/8.jpg',
                    department: 'Jeans',
                    season: '201507'
                },
                commentCount: 2,
                date:'2017-08-05',
                purpose:'Color',
                supplier:'AMA Industries'
            }]
    },
    {
        id: 'DABDF356',
        name: 'Batik-patterned T-shirt',
        description: 'Yellow Batik-patterned T-shirt',
        image: 'assets/images/products/9.jpg',
        department: 'TShirts',
        season: '201503',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant',
        samples:[]
    }
];

    constructor(public nav: NavController, private menuCtrl: MenuController, 
        private productService: ProductService, 
        private barcodeScanner: BarcodeScanner) {
       
        
        this.menuCtrl.enable(true);
    }

    onEvent(item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        
        this.nav.push(ProductDetailPage, item);
    }

    
  getItems():void {
   
    if (!this.allItems) {
      this.allItems = this.items;
    }
    this.items = this.allItems.filter((item) => {
        return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
        || item.id.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  scanBarcode() {
    this.barcodeScanner.scan()
    .then((result) => {
        this.searchTerm  = 'D67BC890';
        this.getItems();
    })
    .catch((error) => {
        alert(error);
    })
}


}
