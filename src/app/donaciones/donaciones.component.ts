import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donaciones',
  standalone: true,
  imports: [],
  templateUrl: './donaciones.component.html',
  styleUrl: './donaciones.component.css'
})

export class DonacionesComponent {
  
  guardarDonacion() {
    // // Agregar la donación actual al historial
    // this.historial.push({ ...this.donacion });

    // // Limpiar el formulario
    // this.donacion = {
    //   donante: '',
    //   tipoDonacion: 'libro',
    //   descripcion: '',
    //   fechaDonacion: ''
    // };

    // alert('¡Donación registrada con éxito!');
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
