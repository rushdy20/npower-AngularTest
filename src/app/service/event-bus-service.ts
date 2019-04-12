import { Subject, Observable } from 'rxjs';
import { EventModel } from '../models/eventModal';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class EventBusService {
    private event = new Subject<EventModel>();
    event$ = this.event.asObservable();

    constructor() {  }
    raiseEvent(event: EventModel) {
     this.event.next(event);
    }

}
