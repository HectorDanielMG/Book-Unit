import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  iniciarSesion() {
    // Aquí puedes agregar lógica de autenticación si es necesario.

    // Redirige al dashboard después de iniciar sesión.
    this.router.navigate(['/dashboard']);
  }
}
