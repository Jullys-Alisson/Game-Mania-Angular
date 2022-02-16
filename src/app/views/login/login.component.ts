import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginModel = new User ();

  mensagem = ""

  onSubmit () {
    console.log(this.loginModel)
    this.loginService.login(this.loginModel).subscribe((response) => {
      console.log("sucesso")
      this.mensagem = "Sucesso!"
    }, (erro) => {
     this.mensagem = erro.error
     console.log("Sem sucesso")
    })
  }
}
