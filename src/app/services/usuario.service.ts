import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UsuarioService {
    constructor( private http: HttpClient){}
    private usuario: any = 
        {
            nombre: 'abel',
            apellidos: 'garcia'
        }

     getUsuario() {
       return this.usuario;
    }

    // getSeeschweiler(): Observable<any> {
    //     // return this.http.get('https://wsbrb-services.com/appsmo/servicios/usuarios.php');//https://api.github.com/users/seeschweiler' --- https://api.github.com/users
    //     return this.http.get('https://wsbrb-services.com/appsmo/servicios/usuarios.php');
    //   }
}