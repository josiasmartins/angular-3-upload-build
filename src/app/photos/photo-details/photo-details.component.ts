import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { PhotoComment } from '../photo/photo-comments';
import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  public photo$: Observable<Photo>;
  public comments$: Observable<PhotoComment[]>;
  public photoId: number;

  constructor(
    private activedRouter: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService
  ) {}


  public ngOnInit(): void {
    this.photoId = this.activedRouter.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  public remove() {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.alertService.success('Photo removed!');
        this.router.navigate([''])
     },
     err => {
      console.log(err);
      this.alertService.warning('Could not delete the photo!')
     });
  }
}
