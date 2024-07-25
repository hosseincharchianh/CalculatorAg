import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcComponent } from "./calc/calc.component";

@Component({
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet, CalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calc';
}
