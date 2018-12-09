import { PriceListFormService } from './../../price-list-form.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PriceList } from '../../core/models/priceList';

@Component({
  selector: 'app-price-list-form',
  templateUrl: './price-list-form.component.html',
  styleUrls: ['./price-list-form.component.scss']
})
export class PriceListFormComponent implements OnInit {

  pricelist: PriceList;
  priceListForm: FormGroup;  

  constructor(private as: PriceListFormService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.priceListForm = new FormGroup({
      class: new FormControl('', Validators.required)

    })
  }

  onSubmit(){
    console.log(this.as.addPriceList(this.priceListForm.value));
  }
}
