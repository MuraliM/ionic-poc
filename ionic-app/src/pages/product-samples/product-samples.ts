import { Component, Input } from '@angular/core';

import { NavController, MenuController, NavParams } from 'ionic-angular';
import { SampleDetailPage } from '../sample-detail/sample-detail';

@Component({
    selector: 'page-product-samples',
    templateUrl: 'product-samples.html'
})
export class ProductSamplesPage {

    @Input() events: any;
    sampleList: any;
    sample: any;
    items: any;

    constructor(public nav: NavController, private menuCtrl: MenuController, private navParams: NavParams) {

        this.sampleList = [
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
                    department: 'TShirt',
                    season: '201706'
                },
                commentCount: 4,
                date:'2017-09-22'
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
                    department: 'TShirt',
                    season: '201706'
                },
                commentCount: 2,
                date:'2017-09-19'
            }];

        if (this.navParams.data.id) {

            this.sample = this.navParams.data;

        }
    }

    toggleGroup(group: any) {
        group.show = !group.show;
    }

    isGroupShown(group: any) {
        return group.show;
    }

    getoProductSamples(item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        this.nav.pop();
    }

    filterItems(searchTerm) {

        return this.sampleList.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }
    gotoSample(item: any, e: any) {
        this.nav.push(SampleDetailPage, item);
    }
    onSaveSample(item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        this.nav.pop();
    }

}
