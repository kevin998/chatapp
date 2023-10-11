import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({providedIn:"root"})
export class Service {
    data = new Subject<ChatItem>();

 constructor() { }
 setData(data:ChatItem) {
      this.data.next(data);
 }
}

export interface ChatItem {
    person: string;
    message: string;
  }