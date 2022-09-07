import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comments';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
  
  @Input() photoId: number;
  public commentForm: FormGroup;
  
  public comments$: Observable<PhotoComment[]>;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}
  
  public ngOnInit(): void {
    console.log(this.photoId);
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comments: ['', Validators.maxLength(300)]
    })
  }
}