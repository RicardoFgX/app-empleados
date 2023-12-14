import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioGeneralService } from './servicio-general.service';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadosService {
  constructor(private servicioGeneral: ServicioGeneralService) {}

  empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Director', 7500),
    new Empleado('Ana', 'Gomez', 'Jefa Sección', 1500),
    new Empleado('María', 'Ruiz', 'Administrativo', 500),
    new Empleado('Ricardo', 'Fernandez', 'Presidente', 12200),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioGeneral.muestraMensaje(
      'Persona que se va a agregar: ' +
        '\n' +
        empleado.nombre +
        '\n' +
        'Salario: ' +
        empleado.salario
    );
    this.empleados.push(empleado);
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    this.empleados[indice] = empleado;
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }
}
