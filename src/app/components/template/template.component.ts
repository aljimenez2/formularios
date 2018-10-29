import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre : null,
    apellido : null,
    correo : null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises: Object = [{
    codigo: 'VZLA',
    nombre: 'Venezuela'
  }, {
    codigo: 'CRI',
    nombre: 'Costa Rica'
  }, {
    codigo: 'ESP',
    nombre: 'España'
  }];

  sexos: String = [ "Hombre", "Mujer" , "Sin definir" ];

  constructor() { }

  guardar( forma:any ){
    console.log('Formulario Posteado');
    console.log( "ngForm:", forma );
    console.log("Value", forma.value);

    console.log("Usuario", this.usuario);
  }
}
