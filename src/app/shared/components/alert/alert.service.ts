import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';

@Injectable({ providedIn: 'root' })
export class AlertService {
  // Subject
  // Um Subject é um tipo genérico, isto é, o tipo que definirmos será o tipo de dado emitido.
  // Possui o método `asObservable' .
  public alertSubject: Subject<Alert> = new Subject<Alert>();

  public success(message: string) {
    this.alert(AlertType.SUCCESS, message)
  }

  public warning(message: string) {
    this.alert(AlertType.WARNING, message);
  }

  public danger(message: string) {
    this.alert(AlertType.DANGER, message);
  }

  public info(message: string) {
    this.alert(AlertType.INFO, message);
  }

  private alert(alertType: AlertType, message: string) {
    this.alertSubject.next(new Alert(alertType, message))
  }

  public getAlert() {
    return this.alertSubject.asObservable();
  }

}
