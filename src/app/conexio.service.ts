import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class conexionService {

  constructor(private http:HttpClient) { }

  urlApi = 'http://localhost:3000/datos'


  public obtener():Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public agregar(body:any){
    return this.http.post(this.urlApi, body);
  }
  public delete(id:string){
    return this.http.delete(this.urlApi + `/${id}`);
  }
  public actualizar(id:string, body:any){
    return this.http.put(this.urlApi + `/${id}`, body)
  }
}
