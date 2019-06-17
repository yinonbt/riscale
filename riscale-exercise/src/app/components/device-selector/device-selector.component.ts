import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-device-selector",
  templateUrl: "./device-selector.component.html",
  styleUrls: ["./device-selector.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DeviceSelectorComponent implements OnInit {
  @Output() closeRequested = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(event: Event) {
    event.stopPropagation();
  }

  onCloseClick() {
    this.closeRequested.emit();
  }
}
