import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(){}

  private toastSubject = new Subject<any>();
  toastState = this.toastSubject.asObservable();

  show(type: string, message: string){
    //emitir el evento
    this.toastSubject.next({type, message});
  }
}
