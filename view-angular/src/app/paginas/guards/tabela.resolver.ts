import { TabelaService } from './../services/tabela.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ex } from '../model/ex';

@Injectable({
  providedIn: 'root'
})
export class TabelaResolver implements Resolve<Ex> {
  constructor(private service: TabelaService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ex> {
    if (route.params && route.params['id']) {
      return this.service.listById(route.params['id']);
    }
    return of({nome:'', categoria:''});
  }
}
