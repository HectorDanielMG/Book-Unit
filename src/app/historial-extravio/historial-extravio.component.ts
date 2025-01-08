import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-extravio',
  standalone: true,
  templateUrl: './historial-extravio.component.html',
  styleUrl: './historial-extravio.component.css'
})

export class HistorialExtravioComponent {
  
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
  extravio = {
    usuario: '',
    libro: '',
    fechaExtravio: '',
    estadoExtravio: '',
  };

  historial: any[] = [];

  guardarExtravio() {
    // Agregar el extravío actual al historial
    this.historial.push({ ...this.extravio });

    // Limpiar el formulario
    this.extravio = {
      usuario: '',
      libro: '',
      fechaExtravio: '',
      estadoExtravio: '',
    };

    alert('Extravío guardado con éxito!');
  }
}