import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo.model';

const baseUrl = 'http://localhost:8080/api/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(baseUrl);
  }

  get(id: any): Observable<Grupo> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(nombre: any): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
