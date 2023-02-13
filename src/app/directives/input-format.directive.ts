import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor() { }

  @HostListener('focus') onFocus(){
    console.log("focus");
  }
  @HostListener('blur') onBlur(){
    console.log("blur");
  }
}
