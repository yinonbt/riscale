import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OsDataComponent } from './components/os-data/os-data.component';
import { HostPickerService } from './services/host-picker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'riscale-exercise';
  constructor(public dialog: MatDialog, private hostPickerService: HostPickerService){}

  onFacelClick() {
    this.hostPickerService.getDevices();
    const dialogRef = this.dialog.open(OsDataComponent, {
      width: '600px',
      data:{}
    });

  }
}
