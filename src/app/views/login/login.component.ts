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

    let erroEncontrado = 0

    const blackLista: string[] = ["select ", "from ","drop ","or ","having ","group ","insert ","exec ","\"","\'","--","#","*",";"]

    blackLista.forEach(palavra => {
      if(this.loginModel.email?.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos" + palavra;
        erroEncontrado = 1
      }
    })

    if (erroEncontrado == 0) {
    this.loginService.login(this.loginModel).subscribe((response) => {
      console.log("sucesso")
      this.mensagem = "Sucesso!"
    }, (erro) => {
     this.mensagem = erro.error
     console.log("Sem sucesso")
    })
  }
  }
}
