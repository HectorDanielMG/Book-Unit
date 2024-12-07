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

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DashboardComponent, // Importar DashboardComponent aquí
    LoginComponent, // Importar LoginComponent aquí
    LandingComponent, // Importar LandingComponent aquí
    AdministracionComponent,
  ],
  providers: [],
})
export class AppModule {}
