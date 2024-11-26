import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { LoginComponent } from './login/login.component'; // Importar LoginComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // Importar DashboardComponent
import { LandingComponent } from './landing/landing.component'; // Importar LandingComponent
import { AdministracionComponent } from './administracion/administracion.component';
import { PerfilComponent } from './perfil/perfil.component'; // Import PerfilComponent
import { ProComponent } from './pro/pro.component'; // Import ProComponent
import { AyudaComponent } from './ayuda/ayuda.component'; // Import AyudaComponent

@NgModule({
  declarations: [
    // No declares AppComponent aquí
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DashboardComponent, // Importar DashboardComponent aquí
    LoginComponent, // Importar LoginComponent aquí
    LandingComponent, // Importar LandingComponent aquí
    AdministracionComponent, // Importar AdministracionComponent aquí
    PerfilComponent, // Importar PerfilComponent aquí
    ProComponent, // Importar ProComponent aquí
    AyudaComponent, // Importar AyudaComponent aquí
  ],
  providers: [],
})
export class AppModule {}
