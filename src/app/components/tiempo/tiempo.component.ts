import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilService } from '../../services/validations/util.service';
import { TemperaturaService } from '../../services/temperatura.service';


@Component({
  selector: 'app-tiempo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tiempo.component.html',
  styleUrl: './tiempo.component.css'
})
export class TiempoComponent implements OnInit{

//declaramos un objeto formulario del tipo FormGroup
  formulario!: FormGroup;

  //le pasamos al contructor un obejto del tipo formbuilder inyectamos en el construtor el servicio
  constructor(private fb: FormBuilder, private _util: UtilService, private _tiempo: TemperaturaService){
    //llamamos al metodo inicia formulario
    this.iniciaFormulario();
  }
  ngOnInit(): void { 
  }
  //metodo que crea e inicia un formulario y se debe importar  reactiveFormModule en este componene para poder usarlo en html
  iniciaFormulario(){
    this.formulario = this.fb.group({
      //se agregan validaciones a los campos
      Ciudad: ['', [Validators.required, this._util.noSantiago,Validators.pattern('^[a-zA-Z ]*$')]],
      Codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }

  consultar(){
    console.log("Formulario Prueba ", this.formulario);

    //mandamos a llamar a l metodo getestadotiempo y le pasamos por parametro la ciudad
    this._tiempo.getEstadoTiempo(this.formulario.get('Ciudad')?.value).subscribe((respuesta: any) => {
      console.log("respuesta: " , respuesta);
    })
  }
}
