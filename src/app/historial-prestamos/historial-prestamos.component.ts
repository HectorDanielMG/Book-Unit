import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './historial-prestamos.component.html',
  styleUrl: './historial-prestamos.component.css'
})
export class HistorialPrestamosComponent { 
  onSignOut(): void {
    Swal.fire({
      title: "¿Estás seguro de cerrar sesión?",
      text: "Se le regresará a la página de inicio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cerrando sesión...", "", "success").then(() => {
          window.location.href = "#";
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "Tu sesión sigue activa.", "info");
      }
    });
  }
}