import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../../../core/plataform-detector/platform-detector.service';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
      private elementRef: ElementRef<any>,
      private platFormDetector: PlatformDetectorService
    ) {}

    public ngOnInit(): void {
      this.platFormDetector.isPlatformBrowser &&
      this.elementRef.nativeElement.click();
    }

}
