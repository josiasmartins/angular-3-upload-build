import { Photo } from './../../photo/photo';
import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
  selector: '[photoOwnerOnly]'
})
export class PhotoOwnerDirective implements OnInit {

  @Input() public ownerPhoto: Photo;

  constructor(
    private elementRef: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) {}

  public ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe(user => {
        if (!user || user.id != this.ownerPhoto.userId) {
          this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
        }
      })
  }

}