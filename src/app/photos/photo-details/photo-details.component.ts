import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./phot-details.css']
})
export class PhotoDetailsComponent implements OnInit {

  public photo$: Observable<Photo>;

  constructor(
    private activedRouter: ActivatedRoute,
    private photoService: PhotoService
  ) {}


  public ngOnInit(): void {
    const id = this.activedRouter.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(id)
  }



}