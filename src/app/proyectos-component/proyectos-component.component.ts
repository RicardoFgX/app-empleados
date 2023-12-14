import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ServicioGeneralService } from '../servicio-general.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css'],
})
export class ProyectosComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private servicioGeneral: ServicioGeneralService
  ) {}

  empleados: Empleado[] = [];

  ngOnInit(): void {
    this.empleados = this.miServicio.empleados;
  }

  volverHome() {
    this.router.navigate(['']);
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

    this.router.navigate(['']);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
