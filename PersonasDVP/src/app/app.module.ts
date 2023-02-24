import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from '../components/personas/personas.component';
import { UsuariosComponent } from '../components/usuarios/usuarios.component';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { PersonasService } from 'src/services/personas.service';
import { UsuariosService } from 'src/services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from '../services/home.service';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    UsuariosComponent,
    HeaderComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'personas', component: PersonasComponent},
      {path: 'home', component: HomeComponent},
      {path: '**',   redirectTo: 'home', pathMatch: 'full'},
    ]),
  ],
  providers: [PersonasService, UsuariosService, HomeService ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
