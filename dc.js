import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rawValue: string = '';
  formattedValue: string = '0.00';

  onInput(value: string): void {
    // Only add digit characters
    if (/\d/.test(value)) {
      this.rawValue += value; // Append the new digit
      this.updateFormattedValue();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    // Handle backspace specifically to remove the last character
    if (event.key === 'Backspace' && this.rawValue.length > 0) {
      this.rawValue = this.rawValue.slice(0, -1);
      this.updateFormattedValue();
    }
  }

  private updateFormattedValue(): void {
    if (this.rawValue) {
      const num = parseInt(this.rawValue, 10);
      this.formattedValue = (num / 100).toFixed(2); // Ensures only two decimal places are shown
    } else {
      this.formattedValue = '0.00'; // Default to zero if rawValue is empty
    }
  }
}
