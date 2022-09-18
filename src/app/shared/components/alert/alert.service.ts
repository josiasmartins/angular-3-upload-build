import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';
import { NavigationStart, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AlertService {
  // Subject
  // Um Subject é um tipo genérico, isto é, o tipo que definirmos será o tipo de dado emitido.
  // Possui o método `asObservable' .
  public alertSubject: Subject<Alert> = new Subject<Alert>();
  public keepAfterRouteChange = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    })
  }

  public success(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChange)
  }

  public warning(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.WARNING, message, keepAfterRouteChange);
  }

  public danger(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAfterRouteChange);
  }

  public info(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.INFO, message, keepAfterRouteChange);
  }

  private alert(alertType: AlertType, message: string, keepAfterRouteChange: boolean) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.alertSubject.next(new Alert(alertType, message))
  }

  public getAlert() {
    return this.alertSubject.asObservable();
  }

  public clear() {
    this.alertSubject.next(null);
  }

}
