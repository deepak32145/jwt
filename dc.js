import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rawValue: string = '';
  formattedValue: string = '0.00'; // Initialize correctly for display

  onInput(value: string): void {
    // Accept only numeric input
    if (value.match(/^\d$/)) {
      this.rawValue += value; // Append the new digit
      this.updateFormattedValue();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    // Allow backspace handling within the input
    if (event.key === 'Backspace' && this.rawValue.length > 0) {
      this.rawValue = this.rawValue.slice(0, -1); // Remove the last character
      this.updateFormattedValue();
    }
  }

  private updateFormattedValue(): void {
    if (this.rawValue) {
      const num = parseInt(this.rawValue, 10);
      this.formattedValue = (num / 100).toFixed(2); // Convert raw value to a decimal
    } else {
      this.formattedValue = '0.00'; // Reset to zero if empty
    }
  }
}
