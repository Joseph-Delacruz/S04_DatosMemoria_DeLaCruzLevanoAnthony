import { Component } from '@angular/core';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent {

  nombre = '';
  especie = '';
  edad = '';
  imagen = '';
  busqueda = '';
  mensaje = '';

  mascotas: any[] = [];

  get mascotasFiltradas() {
    return this.mascotas.filter(m =>
      m.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  guardar() {
    if (!this.nombre || !this.especie || !this.edad) {
      this.mensaje = "Completa todos los campos";
      return;
    }

    this.mascotas.push({
      nombre: this.nombre,
      especie: this.especie,
      edad: this.edad,
      imagen: this.imagen || 'https://via.placeholder.com/150'
    });

    this.mensaje = "Registro exitoso";
    this.limpiar();
  }

  eliminar(index: number) {
    if (confirm("¿Eliminar mascota?")) {
      this.mascotas.splice(index, 1);
    }
  }

  limpiar() {
    this.nombre = '';
    this.especie = '';
    this.edad = '';
    this.imagen = '';
  }
}