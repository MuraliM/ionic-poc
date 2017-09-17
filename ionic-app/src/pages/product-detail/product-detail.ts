import { Component, Input } from '@angular/core';

import { NavController, MenuController, NavParams } from 'ionic-angular';
import { ProductSamplesPage } from '../product-samples/product-samples';

@Component({
    selector: 'page-product-detail',
    templateUrl: 'product-detail.html'
})
export class ProductDetailPage {

    @Input() data: any;
    @Input() events: any;
    departmentList: any;
    
    saveButtonText='Add Product';
    productMenuText='Add Product';

    product= {
        name:'',        
        department:'',
        season:''
    };

    constructor(public nav: NavController, private menuCtrl: MenuController, private navParams:NavParams) {

        this.departmentList = [
            { name: '1023 - Nivea Beaute' },
            { name: '1024 - Maybelline' },
            { name: '1019 - Own Production' },
            { name: '1026 - Mineral Make-up' },
            { name: '1073 - Other' },
            { name: '1075 - Man' },
            { name:'1076 -LOreal'}
        ]

        if(this.navParams.data.id){            
            
            this.product=this.navParams.data;
            this.saveButtonText='Save Product';            
            this.productMenuText=this.navParams.data.name;
        }
    }

    gotoProducts() {

    }

    getoProductSamples(item: any, e: any) {
       
        this.nav.push(ProductSamplesPage, item);
    }

    filterItems(searchTerm) {

        return this.departmentList.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }

    onProductSave(item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        this.nav.pop();
    }


}
