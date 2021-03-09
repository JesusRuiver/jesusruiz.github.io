import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Prueba01Component } from './prueba01/prueba01.component';
import { RandomComponent } from './random/random.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';
import { LibrosComponent } from './libros/libros.component';

import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';

import { HttpClientModule } from '@angular/common/http';

import { LibroclickedService } from './libroclicked.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

const rutas:Routes = [
  
  {path:'informacion/:libroId', component: InformacionComponent},
  {path:'listado-libros', component: LibrosComponent},
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'**',  redirectTo: '/listado-libros'}
 ]
 

@NgModule({
  declarations: [
    AppComponent,
    Prueba01Component,
    RandomComponent,
    ColoresComponent,
    FirmaComponent,
    LibrosComponent,
    SobreNosotrosComponent,
    CabeceraComponent,
    InicioComponent,
    InformacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }