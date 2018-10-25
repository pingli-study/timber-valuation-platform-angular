import { PriceListService } from './../price-list.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  //priceList$;
  show;
  show1 = false;
  show2 = false;

  //constructor(private PriceListService: PriceListService) {
  //  this.priceList$ = this.PriceListService.getAll();
   // }

  priceListMethods = [
    { id: 1, name: 'Teak - Super Luxury Class - Both Non RCT and RCT (Felled volume basis)'},
    { id: 2, name: 'Super Luxury Class(Nadun)'},
    { id: 3, name: 'Super Luxury Class - Ebony & Calamader'},
    { id: 4, name: 'Luxury Class - Satin'},
    { id: 5, name: 'Luxury Class - Halmilla, Rose wood'},
    { id: 6, name: 'Luxury Class - Milla, Jak'}
  ];

  toggleShow(){
    if(this.show==1){
      this.show1 = true;     
    }else if(this.show==2){
      this.show2 = true; 
    } 
  }

  selected(event: any){
    this.show = event.target.value;
  }
  

  ngOnInit() {
  }

}
