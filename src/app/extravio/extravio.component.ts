import { Component } from '@angular/core';

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

  // Método onSignOut
  onSignOut() {
    console.log('Sesión cerrada.');
    // Aquí puedes agregar lógica adicional, como redirigir a otra página
    // Por ejemplo, si usas Router: this.router.navigate(['/signin']);
  }

}
