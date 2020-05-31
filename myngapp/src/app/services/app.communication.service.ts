import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
   // event emitter that will be subscribed by receiver to
   // receive data
   notify: EventEmitter<string>;
   constructor() {
      this.notify = new EventEmitter<string>();
   }

   // method that will be invoked by sender to send data
   sendData(value: string): void {
     this.notify.emit(value);
   }
}
