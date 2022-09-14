import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';

@Injectable({ providedIn: 'root' })
export class AlertService {

  public alertSubject: Subject<Alert>;

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
