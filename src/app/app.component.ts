import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display: string = '';

  appendToDisplay(value: string) {
    this.display += value;
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      console.error(error);
      this.display = 'Hatalı ifade';
    }
  }

  clear() {
    this.display = '';
  }
}
