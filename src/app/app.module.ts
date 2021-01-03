import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { InputsComponent } from './components/inputs/inputs.component';
import { MenuComponent } from './components/menu/menu.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { ObjectComponent } from './components/object/object.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    MenuComponent,
    ObjectsComponent,
    ObjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
