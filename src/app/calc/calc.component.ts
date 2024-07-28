import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
delAll() {
  this.firstNumber='0'  
}
  firstNumber: string = '0'
  secondNumber: string = '0'
  operator: string = ''
  button(d: string) {
    // if (this.firstNumber = 'Enter first Number :') {
    //   this.firstNumber = ''
    // }
    this.firstNumber = Number(this.firstNumber + d).toString()
  }
  operatorF(d: string) {
    this.operator = d
    this.secondNumber = this.firstNumber
    this.firstNumber = '0'
  }
  ac() {
    this.firstNumber = '0'
    this.secondNumber = '0'
    this.operator = ''
  }

  //inja ye bug hast ...... vaghti hameye mohtavaye #FN ro pak mikonim mipare balaye #SN 😂
  del() {
    let fn: string = this.firstNumber
    let main: string = fn.slice(0, fn.length - 1)
    this.firstNumber = main
    if(this.firstNumber=='')
    {
      this.firstNumber='0'
    }
  }
  equal() {
    if(this.operator=='+')
    {
      this.firstNumber=(Number(this.firstNumber)+Number(this.secondNumber)).toString()
    }
    else if(this.operator='*')
    {
      this.firstNumber=(Number(this.firstNumber)*Number(this.secondNumber)).toString()
    }
    else if(this.operator='/')
    {
      this.firstNumber=(Number(this.firstNumber)/Number(this.secondNumber)).toString()
    }
    else if(this.operator='-')
    {
      this.firstNumber=(Number(this.firstNumber)-Number(this.secondNumber)).toString()
    }
    this.secondNumber='0';
    this.operator=''
  }

}
