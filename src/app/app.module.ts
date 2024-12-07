import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
import { LoginComponent } from './login/login.component'; // Importar LoginComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // Importar DashboardComponent
import { LandingComponent } from './landing/landing.component'; // Importar LandingComponent
import { AdministracionComponent } from './administracion/administracion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LibrosComponent } from './libros/libros.component';
import { FormularioLibrosComponent } from './formulario-libros/formulario-libros.component';
import { LibrosDigitalesComponent } from './libros-digitales/libros-digitales.component';
import { FormularioLibrosDigitalesComponent } from './formulario-libros-digitales/formulario-libros-digitales.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppComponent, // Declaramos solo los componentes no autónomos
    AdministracionComponent,
    UsuariosComponent,
    FormularioComponent,
    LandingComponent, // Importamos los componentes autónomos
    DashboardComponent,
    LoginComponent,
    LibrosComponent,
    FormularioLibrosComponent,
    LibrosDigitalesComponent,
    FormularioLibrosDigitalesComponent,
  ],
  providers: [],
})
export class AppModule {}
