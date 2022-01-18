import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOldSeance]'
})
export class OldSeanceDirective {

  @Input() set appOldSeance(overdue: boolean){
    if(overdue)
     this.element.nativeElement.style.color = "gray";

  }

  constructor( private element: ElementRef) {

  }


}
