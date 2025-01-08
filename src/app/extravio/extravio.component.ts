import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-extravio',
  standalone: true,
  imports: [],
  templateUrl: './extravio.component.html',
  styleUrls: ['./extravio.component.css']
})

export class ExtravioComponent {
  extravio = {
    usuario: '',
    libro: '',
    fechaExtravio: '',
    estado: 'pendiente'
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
      estado: 'pendiente'
    };

    alert('¡Extravío registrado con éxito!');
  }

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
