import { Component, OnInit, Input } from '@angular/core';
import { OsType } from 'src/app/models/os-type.enum';

@Component({
  selector: 'app-os-data',
  templateUrl: './os-data.component.html',
  styleUrls: ['./os-data.component.scss']
})
export class OsDataComponent implements OnInit {
  @Input() osType: string;
  
  constructor() { }

  ngOnInit() {
  }

}
