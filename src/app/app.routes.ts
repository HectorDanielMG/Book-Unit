import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProComponent } from './pro/pro.component';
import { AyudaComponent } from './ayuda/ayuda.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'administracion', component: AdministracionComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'pro', component: ProComponent},
  { path: 'ayuda', component: AyudaComponent},

];
