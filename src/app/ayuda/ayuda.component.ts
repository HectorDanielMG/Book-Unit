import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './ayuda.component.html',
})
export class AyudaComponent {

  public correo = "hector@gmail.com";
  public correoDCG = "diegoCG@gmail.com";
  public imagenHect: string = 'assets/zoo.jpg';
  public imagenDCG: string = 'assets/fotaco.jpeg';

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