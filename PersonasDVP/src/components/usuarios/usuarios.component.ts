import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService} from '../../services/usuarios.service';
import { UserInfo } from 'src/models/userinfo.model';
import { UserInfoInterface } from 'src/models/userinfo.class';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService],
})
export class UsuariosComponent implements OnInit  {
  checkLoginForm: any;
  userInfo: UserInfo= new UserInfo;
  tokenExpiration: string = '';
  router: Router = new Router();


  constructor (
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    public activatedRoute: ActivatedRoute
  ) {
    this.checkLoginForm = this.fb.group({
      email: "",
      password: "",

   });
  }
  ngOnInit(): void {
   
  }

  async onSubmit(){
    this.userInfo.Email = this.checkLoginForm.value.usuario;
    this.userInfo.Password = this.checkLoginForm.value.password;

    const data = this.checkLoginForm.value;

    let userInfoInterface: UserInfoInterface = Object.assign({}, this.checkLoginForm.value);

    (await this.usuariosService.LoginUsers(userInfoInterface)).subscribe(token => this.getToken(token)),
    (error: any) => this.errorMessage(error)
    alert("Login Successful");
    this.checkLoginForm.reset()
  
  }

  getToken(token: { token: string; }) {
    console.log(token);
    localStorage.setItem('token', token.token);
    localStorage.setItem('tokenExpiration', this.tokenExpiration);
    //this.router.navigate(['home']);
  }

  errorMessage(error: any) {
      if (error && error.error) {
      alert(error.error[""]);
    }
  }
    
}


