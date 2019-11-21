import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numberOnly]'
})
export class NumberOnlyDirective {

  constructor(private element: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp(event : KeyboardEvent){
    const initialVal = this.element.nativeElement.value;
    this.element.nativeElement.value = initialVal.replace(/[^0-9]/g,'');
    if(initialVal !== this.element.nativeElement.value){
      event.stopPropagation();
    }
  }

}
