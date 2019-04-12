import { Component, OnInit, Input, OnDestroy, AfterContentInit, AfterContentChecked } from '@angular/core';
import { ModalData } from 'src/app/models/modalData';

import { EventBusManagerService } from 'src/app/service/event-bus-manager';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent   {

// tslint:disable-next-line:no-input-rename
@Input ('product') product: ModalData;
// tslint:disable-next-line:no-input-rename

  constructor( private eventBusServiceManager: EventBusManagerService) {
    console.log ('showAction' + this.product);
   }

 addToCart(modalData: ModalData) {
  console.log('addToCart');
  this.eventBusServiceManager.reaiseEvent({eventName: 'dialogOpen', eventObject: {modalData: modalData}});


}
}
