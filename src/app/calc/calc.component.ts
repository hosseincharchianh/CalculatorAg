import { Component } from '@angular/core';

@Component({
  selector: 'calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  firstNumber: string = '0'
  secondNumber: string = '0'
  operator: string = ''
   button(d: string) {
      // if (this.firstNumber = 'Enter first Number :') {
      //   this.firstNumber = ''
      // }
       this.firstNumber =Number(this.firstNumber + d).toString()
   }
   operatorF(d:string)
   {
    this.operator=d
   }

   
}
