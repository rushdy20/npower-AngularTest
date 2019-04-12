import { OnDestroy, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService } from './event-bus-service';
import { EventModel } from '../models/eventModal';

@Injectable({
    providedIn: 'root',
  })

export class EventBusManagerService implements OnDestroy {

    private eventCallback: Map<string, (event: EventModel) => void>;
    private filters: string[] = [];
    private subscriptions: Subscription = new Subscription();
    private host: any;

    constructor(private eventBusService: EventBusService) {
         const eventBusSubscription = this.eventBusService.event$.subscribe(ke => this.processEvent(ke));
         this.subscriptions.add(eventBusSubscription);
        this.eventCallback = new Map<string, (event: EventModel) => void>();

    }

      processEvent(event: EventModel) {
          if (!this.filters) {
            return;
          } else if (this.filters.indexOf('*') !== -1) {
              this.eventCallback.get(event.eventName)(event);
          } else if (this.filters.indexOf(event.eventName) !== -1) {
             this.eventCallback.get(event.eventName)(event);
         }

    }

    reaiseEvent(event: EventModel) {
        this.eventBusService.raiseEvent(event);
    }

     on(eventName: string, callback: (event: EventModel) => void) {
         console.log('look for event');
         this.filters.push(eventName);
      this.eventCallback.set(eventName, callback.bind(this.host));
     }
    setHost(host: any) {
         this.host = host;
     }


    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

}
