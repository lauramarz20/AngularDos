import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('Directiva llamada...');
    // el.nativeElement.style.backgroundColor = 'yellow';
   }
   @Input('appResaltado') nuevoColor: string;
   // tslint:disable-next-line:typedef
   @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || 'yellow');
  }
  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }
   // tslint:disable-next-line:typedef
   private resaltar(color: string){
    this.el.nativeElement.style.backgroundColor = color;

   }

}
