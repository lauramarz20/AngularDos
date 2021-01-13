import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <br>
    <app-css></app-css>
    <br>
    <app-clases></app-clases>
    <br>
    <p [appResaltado]="'blue'">
        Hola Mundo...
    </p>
    <br>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit,  DoCheck, AfterContentInit,
              AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
   }
  // tslint:disable-next-line:typedef
  ngOnDestroy() {
   console.log('ngOnDestroy');
  }
  // tslint:disable-next-line:typedef
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  // tslint:disable-next-line:typedef
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  // tslint:disable-next-line:typedef
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  // tslint:disable-next-line:typedef
  ngDoCheck() {
    console.log('ngDoCheck');
  }
// tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('ngOnInit');
  }

}
