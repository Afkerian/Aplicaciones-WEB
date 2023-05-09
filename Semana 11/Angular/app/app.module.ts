import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component'
import { ZapatillaComponent } from './zapatilla/zapatilla.component';
import { ContactoComponent } from './contacto/contacto.component';
@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    ZapatillaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
