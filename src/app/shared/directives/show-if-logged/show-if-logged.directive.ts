import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  constructor(
    private elementRef: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) {}

  public ngOnInit(): void {
    !this.userService.isLogged()
      && this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
  }

}
