import { Component, Input, ViewChild } from '@angular/core';
import { Content, FabButton } from 'ionic-angular';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;

 public items:any= [
    {
        id: 1,
        name: 'Stadium Yellow',
        description: 'T-shirt with a print motif',
        image: 'assets/images/products/1.jpg',
        department: 'TShirt',
        season: '201706',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 2,
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/2.jpg',
        department: 'Tshirt',
        season: '201704',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 3,
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/3.jpg',
        department: 'Tshirt',
        season: '201705',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 4,
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/6.jpg',
        department: 'Ladies wear',
        season: '201706',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 5,
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/4.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 6,
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/1.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 7,
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/4.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 8,
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/5.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    },
    {
        id: 9,
        name: 'ProductName',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'assets/images/products/3.jpg',
        department: 'Shirts',
        season: '201507',
        iconDelate: 'icon-delete',
        iconUndo: 'icon-undo-variant'
    }
]
  constructor(public nav: NavController, private menuCtrl:MenuController) {
    
    this.menuCtrl.enable(true);
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
        e.stopPropagation();
    }
    // if (this.events[event]) {
    //     this.events[event](item);
    // }
}

}
