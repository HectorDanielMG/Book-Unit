import { Component } from '@angular/core';

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

  // Método onSignOut
  onSignOut() {
    console.log('Sesión cerrada.');
    // Aquí puedes agregar lógica adicional, como redirigir a otra página
    // Por ejemplo, si usas Router: this.router.navigate(['/signin']);
  }

}
