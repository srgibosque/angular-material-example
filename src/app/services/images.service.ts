import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<any>{
    return this.http.get('https://picsum.photos/v2/list');
  }
}
