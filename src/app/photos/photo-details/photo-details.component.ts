import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  constructor(
    private activedRouter: ActivatedRoute
  ) {}


  public ngOnInit(): void {
    const id = this.activedRouter.snapshot.params.photoId;
    console.log(id);
  }



}