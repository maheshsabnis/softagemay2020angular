import {Directive, Input, ElementRef, Renderer2, HostListener} from '@angular/core';

// since the atrribute directive that why the
// selector uses PROPERTY-BINDING-SYNTAX
@Directive({
  selector: '[setcolor]'
})
export class ColorDirective {
  constructor(
    private ele: ElementRef,
    private renderer: Renderer2
  ) {
  }

  // property that map with the selector of the directive
   @Input('setcolor') setcolor: string;

   // private method with the logic
   private applyColor(color: string): void {
     this.renderer.setStyle(
       this.ele.nativeElement,
       'backgroundColor',
       color
     );
   }

   // method will be executed when mouse in entered
   // on element
   @HostListener('mouseenter')
   mouseenter(): void {
     this.applyColor(this.setcolor);
   }

   // method will be executed when mouse left
   // from element
   @HostListener('mouseleave')
   mouseleave(): void {
     this.applyColor(null);
   }

}
