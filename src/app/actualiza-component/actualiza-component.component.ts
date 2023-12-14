import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ServicioGeneralService } from '../servicio-general.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css'],
})
export class ActualizaComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private servicioGeneral: ServicioGeneralService,
    private route: ActivatedRoute
  ) {}

  empleados: Empleado[] = [];

  accion: number;

  ngOnInit(): void {
    this.empleados = this.miServicio.empleados;
    this.indice = this.route.snapshot.params['id'];
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    let empleado: Empleado = this.miServicio.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome() {
    this.router.navigate(['']);
  }

  /*actualizaEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );

    //this.servicioGeneral.muestraMensaje('Nombre del empleado: ' + miEmpleado.nombre);

    this.miServicio.actualizarEmpleado(this.indice, miEmpleado);

    this.router.navigate(['']);
  }

  eliminaEmpleado() {
    this.miServicio.eliminarEmpleado(this.indice);

    this.router.navigate(['']);
  }
  */

  actualizaEmpleado() {
    if (this.accion === 1) {
      let miEmpleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );

      this.miServicio.actualizarEmpleado(this.indice, miEmpleado);
      this.router.navigate(['']);
    } else {
      this.miServicio.eliminarEmpleado(this.indice);
      this.router.navigate(['']);
    }
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  indice: number;
}
