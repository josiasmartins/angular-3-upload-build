import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { Photo } from "./photo";
import { PhotoComment } from './photo-comments';
import { of, throwError } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos', { params });
    }

    public upload(descripton: string, allowComments: boolean, file: File) {
      const formData = new FormData;
      formData.append('description', descripton);
      formData.append('allowComments', allowComments ? 'true' : 'false');
      formData.append('imageFile', file);
      return this.http.post(API + '/photos/upload', formData);
    }

    public findById(photoId: number) {
      return this.http.get<Photo>(API + '/photos/' + photoId);
    }

    public getComments(photoId: number) {
      return this.http.get<PhotoComment[]>(API + '/photos/' + photoId + '/comments');
    }

    public addComment(photoId: number, commentText: string) {
      console.log('chamei');
      return this.http.post(
        API + '/photos/' + photoId + '/comments',
        { commentText }
      )
    }

    public removePhoto(photoId: number) {
      return this.http.delete(API + '/photos/' + photoId);
    }

    public like(photoId: number) {
      return this.http.post(
        API + '/photos/' + photoId + '/like', {}, { observe: 'response' }
      )
      .pipe(map(res => true))
      .pipe(catchError(err => {
        return err.status == '304' ? of(false) : throwError(err);
      }));
    }
}
