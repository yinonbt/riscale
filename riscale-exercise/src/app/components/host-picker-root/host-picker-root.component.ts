import { Component, OnInit } from '@angular/core';
import { OsType } from 'src/app/models/os-type.enum';

@Component({
  selector: 'app-host-picker-root',
  templateUrl: './host-picker-root.component.html',
  styleUrls: ['./host-picker-root.component.scss']
})
export class HostPickerRootComponent implements OnInit {
  osTypes = OsType;
  constructor() { }

  ngOnInit() {
  }

}
