import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})

export class PrestamosComponent {
  constructor(private router: Router) {}
  prestamo = {
    usuario: '',
    libro: '',
    diaPrestamo: '',
    diaDevolucion: '',
    estado: 'activo'
  };

  historial: any[] = [];

  guardarPrestamo() {
    // Agregar el préstamo actual al historial
    this.historial.push({ ...this.prestamo });

    // Limpiar el formulario
    this.prestamo = {
      usuario: '',
      libro: '',
      diaPrestamo: '',
      diaDevolucion: '',
      estado: 'activo'
    };

    alert('¡Préstamo guardado con éxito!');
  }

  // Método onSignOut
  onSignOut() {
    console.log('Sesión cerrada.');
    // Aquí puedes agregar lógica adicional, como redirigir a otra página
    // Por ejemplo, si usas Router: this.router.navigate(['/signin']);
  }
  
}