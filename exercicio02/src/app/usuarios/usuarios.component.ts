import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  img_1: string = 'assets/yoga-logo.jpg';

  usuarios: any;


  constructor(userServ: UsuariosService) { 
    userServ.getTodos().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  ngOnInit(): void {
  }

}
