import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

import { OsDataComponent } from './components/os-data/os-data.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader-interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { HostPickerRootComponent } from './components/host-picker-root/host-picker-root.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { DeviceSelectorComponent } from './components/device-selector/device-selector.component';
import { DeviceComponent } from './components/device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    OsDataComponent,
    LoaderComponent,
    HostPickerRootComponent,
    EnumToArrayPipe,
    DeviceSelectorComponent,
    DeviceComponent
  ],
  entryComponents: [OsDataComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
