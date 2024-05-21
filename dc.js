import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dates: string[] = [
    '21--05--2024',
    '15--08--2023',
    '01--01--2022'
  ];

  transformDate(dateString: string): string | null {
    if (!dateString) return null;

    const [day, month, year] = dateString.split('--').map(part => parseInt(part, 10));

    if (!day || !month || !year) return null;

    const date = new Date(year, month - 1, day); // month is 0-based in JavaScript Date

    // Format the date to MM/dd/yyyy
    const formattedDate = `${this.padZero(date.getMonth() + 1)}/${this.padZero(date.getDate())}/${date.getFullYear()}`;
    return formattedDate;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
