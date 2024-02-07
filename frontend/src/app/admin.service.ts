import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/'


  uploadImage(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.url}upload`, formData);
  }
  

  getAll(){
    return this.http.get<any[]>(`${this.url}getAll`);
  }

  getImageById(imageId: string): Observable<Blob> {
    return this.http.get(`${this.url}image/${imageId}`, { responseType: 'blob' });
  }

  getAl(){
    return this.http.get<any[]>(`${this.url}getAl`);
  }

  getImage(imageId: string): Observable<Blob> {
    return this.http.get(`${this.url}iqoo/${imageId}`, { responseType: 'blob' });
  }

}
