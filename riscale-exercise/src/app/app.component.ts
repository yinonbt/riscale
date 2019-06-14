import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OsDataComponent } from './components/os-data/os-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'riscale-exercise';
  constructor(public dialog: MatDialog){}

  onFacelClick() {
    const dialogRef = this.dialog.open(OsDataComponent, {
      width: '600px',
      data:{}
    });
  }
}
