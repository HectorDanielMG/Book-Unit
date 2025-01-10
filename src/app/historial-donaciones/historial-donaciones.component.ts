import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-donaciones',
  standalone: true,
  imports: [],
  templateUrl: './historial-donaciones.component.html',
  styleUrl: './historial-donaciones.component.css'
})

export class HistorialDonacionesComponent {

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

  constructor(private router: Router) {}
  donacion = {
    donante: '',
    tipoDonacion: '',
    descripcion: '',
    fechaDonacion: '',
  };

  historial: any[] = [];

  guardarDonacion() {
    // Agregar el préstamo actual al historial
    this.historial.push({ ...this.donacion });

    // Limpiar el formulario
    this.donacion = {
      donante: '',
      tipoDonacion: '',
      descripcion: '',
      fechaDonacion: '',
    };

    alert('Donación guardada con éxito!');
  }
}
