import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { proyecto } from '../model/proyecto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SproyectoService {

  URL = 'http://localhost:8080/proyectos/';

  constructor(private httpClient: HttpClient ) { }

  public lista(): Observable<proyecto[]>{
    return this.httpClient.get<proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<proyecto>{
    return this.httpClient.get<proyecto>(this.URL + `detail/${id}`);
  }

  public save(proyecto: proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyecto);
  }

  public update(id: number, proyecto: proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    
  
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
