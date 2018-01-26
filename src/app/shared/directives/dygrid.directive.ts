import { Directive } from '@angular/core';
import { Renderer2 } from '@angular/core/src/render/api';

@Directive({
  selector: '[appDygrid]'
})
export class DygridDirective {

  constructor(private renderer : Renderer2) { }

}
