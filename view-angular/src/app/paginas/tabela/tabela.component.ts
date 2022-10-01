import { catchError, Observable, of } from 'rxjs';
import { Ex } from './../model/ex';
import { TabelaService } from './../services/tabela.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource$: Observable <Ex[]>;
  constructor(private tabelaService: TabelaService,
    public dialog: MatDialog) {

    this.dataSource$ = this.tabelaService.listAll().pipe(
      catchError(error => {
        this.openDialog('Erro ao carregar dados.');
        return of ([])
      })
    );
  }
  openDialog(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void {
  }

}
