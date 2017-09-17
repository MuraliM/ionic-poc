import { Component, Input, ViewChild } from '@angular/core';
import { Content, FabButton } from 'ionic-angular';
import { NavController, MenuController } from 'ionic-angular';
import { ProductService } from '../../services/ProductService';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
    selector: 'page-products',
    templateUrl: 'products.html',
    providers: [ProductService]
})
export class ProductsPage {

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
        department: 'TShirt',
        season: '201706',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: '7BB34A08',
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/2.jpg',
        department: 'Tshirt',
        season: '201704',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 'ABB34A0C',
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/3.jpg',
        department: 'Tshirt',
        season: '201705',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 'CC34A08',
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/6.jpg',
        department: 'Ladies wear',
        season: '201706',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 'D67BC890',
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/4.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 'D67BC850',
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/1.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 'F67BC894',
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/4.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 'BBBC888',
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/5.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 'DABDF356',
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/3.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    }
];

    constructor(public nav: NavController, private menuCtrl: MenuController, private productService: ProductService, ) {
       
        
        this.menuCtrl.enable(true);
    }

    onEvent(item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        this.nav.push(ProductDetailPage, item);
    }

}
