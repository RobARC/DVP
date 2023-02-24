import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personas } from '../../models/personas.model';
import { PersonasService } from 'src/services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonasService],
})
export class PersonasComponent implements OnInit {
  

 personas: Personas = new Personas();
 checkoutForm: any;
 router: Router = new Router;
 today = Date.now();
 date: Date = new Date(this.today);

 tiposId  = ["Cédula", "Pasaporte", "Nit", "Permiso de Trabajo"]
  
constructor(
  private fb: FormBuilder,
  private personasService: PersonasService,
  public activatedRoute: ActivatedRoute
  ) { 
      this.checkoutForm = this.fb.group({
      id: 0,
      nombres: "",
      apellidos: "",
      numeroIdentificacion: "",
      email: "",
      tipoIdentificacion: "",
      fechaCreacion: this.date,
      password: "",
      
    });
  }

  ngOnInit(): void { 

   }

  onSubmit() {
    //Llenar la data del formulario
   this.personas.Nombres = this.checkoutForm.value.nombres;
   this.personas.Apellidos = this.checkoutForm.value.apellidos;
   this.personas.NumeroIdentificacion = this.checkoutForm.value.numeroIdentificacion;
   this.personas.Email = this.checkoutForm.value.email;
   this.personas.TipoIdentificacion = this.checkoutForm.value.tipoIdentificacion;
   this.personas.FechaCreacion = this.checkoutForm.value.fechaCreacion;
   this.personas.Password = this.checkoutForm.value.password;

   const data = this.checkoutForm.value;

   //prueba enviando data
   
   try{
      this.personasService.PostPersonas(data);
      alert("Registro Successful");
    } catch (error) {
    console.log(error);
      alert("Registration Failed");
    }
    this.checkoutForm.reset();
    
  }
}


