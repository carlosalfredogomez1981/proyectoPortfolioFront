import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { BarraComponent } from './barra/barra.component';
import { QuinceComponent } from './quince/quince.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { PekesComponent } from './pekes/pekes.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { VacioComponent } from './vacio/vacio.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    TarjetasComponent,
    BarraComponent,
    QuinceComponent,
    EnlacesComponent,
    PekesComponent,
    ContactosComponent,
    PresupuestosComponent,
    VacioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
