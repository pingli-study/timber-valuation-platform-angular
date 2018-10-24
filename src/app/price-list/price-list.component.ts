import { PriceListService } from './../price-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  //priceList$;

  //constructor(private PriceListService: PriceListService) {
  //  this.priceList$ = this.PriceListService.getAll();
   // }

  priceListMethods = [
    { id: 1, name: 'Teak - Super Luxury Class - Both Non RCT and RCT (Felled volume basis)'},
    { id: 2, name: 'Super Luxury Class(Nadun)'},
    { id: 2, name: 'Super Luxury Class - Ebony & Calamader'},
    { id: 2, name: 'Luxury Class - Satin'},
    { id: 2, name: 'Luxury Class - Halmilla, Rose wood'},
    { id: 2, name: 'Luxury Class - Milla, Jak'}
  ];

  

  ngOnInit() {
  }

}
