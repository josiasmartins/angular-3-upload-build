import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoComment } from '../photo/photo-comments';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoOwnerDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from '../../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerDirective
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PhotoModule,
    VMessageModule,
    ShowIfLoggedModule
  ]
})
export class PhotoDetailsModule {

}
