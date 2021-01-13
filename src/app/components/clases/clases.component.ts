import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  alerta: string = 'alert-danger';
  // tslint:disable-next-line:ban-types
  propiedades: Object = {
    danger: false
  };
  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  ejecutar(){
    this.loading = true;
    setTimeout( () => this.loading = false, 3000);

  }

}
