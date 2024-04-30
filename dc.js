// ^\+?(\d[\s\-()]?){10,15}\d$

//^[A-Za-z]+([\-'\s\.][A-Za-z]+)*$

const regex = /^[A-Za-z]+([\-'\s\.][A-Za-z]+)*$/;

const regex1 = /^\+?(\d[\s\-()]?){10,15}\d$/;

import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
rawValue: string = '';
formattedValue: string = '';

onInput(value: string): void {
// Append the new character
this.rawValue += value;
// Remove all non-digit characters for safety
this.rawValue = this.rawValue.replace(/\D/g, '');

    // Convert the raw value to a number and format it
    if (this.rawValue) {
      const num = parseInt(this.rawValue, 10);
      this.formattedValue = (num / 100).toFixed(2);
    } else {
      this.formattedValue = '';
    }

}

onKeyDown(event: KeyboardEvent): void {
if (event.key === 'Backspace' && this.rawValue.length > 0) {
// Remove the last character on backspace
this.rawValue = this.rawValue.slice(0, -1);
if (this.rawValue) {
const num = parseInt(this.rawValue, 10);
this.formattedValue = (num / 100).toFixed(2);
} else {
this.formattedValue = '';
}
}
}
}

<input type="text"
[value]="formattedValue"
(keydown)="onKeyDown($event)" 
       (keypress)="onInput($event.key)">

<p>Formatted Value: {{ formattedValue }}</p>
