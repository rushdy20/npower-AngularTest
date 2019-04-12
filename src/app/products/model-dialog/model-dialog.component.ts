import { Component, OnInit, Input } from '@angular/core';
import { ModalData } from 'src/app/models/modalData';
import { EventModel } from 'src/app/models/eventModal';
import { EventBusManagerService } from 'src/app/service/event-bus-manager';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'model-dialog',
  templateUrl: './model-dialog.component.html',
  styleUrls: ['./model-dialog.component.css']
})
export class ModelDialogComponent  {
  // tslint:disable-next-line:no-input-rename
  modalData: ModalData;

  constructor(private eventBusManager: EventBusManagerService) {
      this.eventBusManager.setHost(this);
    this.eventBusManager.on('dialogOpen', this.openDialog);

  }

  visible: boolean;
  closeModel() {
    console.log('closeDialog');
    this.visible = false;
  }
  openDialog(modal: EventModel) {
    console.log('openDialog');
    this.modalData = modal.eventObject.modalData;
   this.visible = true;
  }

}
