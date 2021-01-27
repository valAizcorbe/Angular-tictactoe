import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    
      <button > {{ value }} </button>
    
  `,
  styles: [
    'button {border: none; height: 200px; width: 200px; padding:0; font-size: 100px;}'
    
  ]
})
export class SquareComponent {

 @Input() value: 'X' | 'O';
}
