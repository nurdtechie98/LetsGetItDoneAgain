import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTestStructuralDirective]'
})
export class TestStructuralDirectiveDirective {
  constructor( private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

  }
  
  @Input()
  set appTestStructuralDirective(time:number){  // for structual directive it has to like this only input is a function with same name with just one argument
    setTimeout(() => {this.viewContainerRef.createEmbeddedView(this.templateRef);},time);
  }
}
