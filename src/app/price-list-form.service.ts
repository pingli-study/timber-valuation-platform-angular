import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceList } from './core/models/priceList';
import { map } from 'rxjs/operators';

@Injectable()({
  providedIn: 'root'
})
export class PriceListFormService {

  private priceListCollection: AngularFirestoreCollection<PriceList>;
  pricelist$: Observable<PriceList>;

  constructor(private afs: AngularFirestore) {
    this.priceListCollection = afs.collection("priceList");
   }
   
   addPriceList(data) {
    return this.priceListCollection.add(data);
  }
}
