import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OsType } from 'src/app/models/os-type.enum';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-os-data',
  templateUrl: './os-data.component.html',
  styleUrls: ['./os-data.component.scss']
})
export class OsDataComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Input() osType: string;
  
  constructor() { }

  ngOnInit() {
  }

  onCloseRequested() {
    this.trigger.closeMenu();
  }
}
