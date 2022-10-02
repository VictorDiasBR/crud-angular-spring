import { catchError, Observable, of } from 'rxjs';
import { Ex } from './../model/ex';
import { TabelaService } from './../services/tabela.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'actions'];
  dataSource$: Observable<Ex[]>;
  constructor(private tabelaService: TabelaService,
    public dialog: MatDialog,
    private router: Router,
  private route: ActivatedRoute) {

    this.dataSource$ = this.tabelaService.listAll().pipe(
      catchError(error => {
        this.openDialog('Erro ao carregar dados.');
        return of([])
      })
    );
  }
  openDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  onEdit(ex:Ex) {
    this.router.navigate(['edit', ex.id], {relativeTo: this.route});
  }

  onDelete(id:number) {
    this.tabelaService.delete(id).subscribe(response => console.log(response));
  }

  ngOnInit(): void {
  }

}
