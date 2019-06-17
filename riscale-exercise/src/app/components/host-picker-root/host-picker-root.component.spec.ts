import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPickerRootComponent } from './host-picker-root.component';

describe('HostPickerRootComponent', () => {
  let component: HostPickerRootComponent;
  let fixture: ComponentFixture<HostPickerRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPickerRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPickerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
