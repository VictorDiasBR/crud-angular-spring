import { Ex } from './../model/ex';
import { ActivatedRoute } from '@angular/router';
import { TabelaService } from './../services/tabela.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabela-form',
  templateUrl: './tabela-form.component.html',
  styleUrls: ['./tabela-form.component.scss']
})
export class TabelaFormComponent implements OnInit {

  form = this.formB.group({
    id: new FormControl(),
    nome: new FormControl('', {nonNullable:true}),
    categoria: new FormControl('', {nonNullable:true})
  });

  constructor(private formB: FormBuilder,
    private service: TabelaService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    const c: Ex = this.route.snapshot.data['course'];
    this.form.setValue( {
      id: c.id,
      nome: c.nome,
      categoria: c.categoria
    });


  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => console.log(result), error => this.onError());
    this.location.back();
  }

  private onError() {
    this._snackBar.open('erro ao salvar registro!', '')
  }

}
