import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.baseUrl}/grafica`);
  }

  getDonaData(){
    return this.getUsuarios()
      .pipe(
        map(data => {
          const labels = Object.keys(data)
          const values = Object.values(data)
          return {labels, values};
        })
      )
  }
}
