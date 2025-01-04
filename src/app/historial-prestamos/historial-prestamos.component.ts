import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './historial-prestamos.component.html',
  styleUrl: './historial-prestamos.component.css'
})
export class HistorialPrestamosComponent {
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
