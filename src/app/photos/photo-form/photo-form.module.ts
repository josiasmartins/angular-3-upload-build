import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      VMessageModule,
      PhotoModule
    ]
})
export class PhotoFormModule { }