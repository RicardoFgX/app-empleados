import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ServicioGeneralService } from '../servicio-general.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';

  empleados: Empleado[] = [];

  constructor(
    private miServicio: ServicioEmpleadosService,
    private servicioGeneral: ServicioGeneralService
  ) {
    //this.empleados = this.miServicio.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.miServicio.empleados;
  }

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );

    //this.servicioGeneral.muestraMensaje('Nombre del empleado: ' + miEmpleado.nombre);

    this.miServicio.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
