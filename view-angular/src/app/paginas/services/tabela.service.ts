import { Ex } from './../model/ex';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  private readonly API = 'api/tabela';
  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Ex[]>(this.API)
      .pipe(

        tap(ex => console.log(ex))
      );
  }

  listById(id:number) {
    return this.httpClient.get<Ex>(`${this.API}/${id}`)
      .pipe(
        tap(ex => console.log(ex))
      );
  }

  save(record: Partial<Ex>) {
    if (record.id) {
      return this.httpClient.put<Ex>(`${this.API}/${record.id}`, record);
    }
    return this.httpClient.post<Ex>(this.API, record);
  }

  delete(id:number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(
      tap(ex => console.log(ex))
    )
  }
}
