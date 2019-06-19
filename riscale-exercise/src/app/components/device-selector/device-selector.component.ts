import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
  Input
} from "@angular/core";
import { Device } from 'src/app/models/device';

@Component({
  selector: "app-device-selector",
  templateUrl: "./device-selector.component.html",
  styleUrls: ["./device-selector.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DeviceSelectorComponent implements OnInit {
  @Input() devices: Device[];
  @Output() closeRequested = new EventEmitter();
  @Output() deviceSelected = new EventEmitter<Device>();

  constructor() {}

  ngOnInit() {}

  onClick(event: Event) {
    event.stopPropagation();
  }

  onCloseClick() {
    this.closeRequested.emit();
  }

  onDeviceSelected(selectedDevice: Device) {
    this.deviceSelected.emit(selectedDevice);
  }
}
