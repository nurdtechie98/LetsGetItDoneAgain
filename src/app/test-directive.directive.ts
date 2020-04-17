import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestDirective]' // note this is the selector to be used in component
})
export class TestDirectiveDirective {

  constructor( private element : ElementRef) {
    element.nativeElement.style.backgroundColor = "silver"
    element.nativeElement.style.border = "1px solid black"
    element.nativeElement.style.borderRadius = "3px"
    element.nativeElement.style.fontWeight = "bold"
    element.nativeElement.style.width = "100%"
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = "lightgrey"
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = "silver"
  }

  // good reference
  // https://malcoded.com/posts/angular-custom-directives/

}
