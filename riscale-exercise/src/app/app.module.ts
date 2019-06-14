import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { OsDataComponent } from './components/os-data/os-data.component';

@NgModule({
  declarations: [
    AppComponent,
    OsDataComponent
  ],
  entryComponents:[OsDataComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
