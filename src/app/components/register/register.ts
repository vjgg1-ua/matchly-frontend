import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { RegisterRequest } from '../../models/auth.model';
import { UsuarioService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register {
  user: RegisterRequest = {
    username: '',
    email: '',
    password: ''
  }

  cargando = false;
	error = '';
	success = false;
	form: any;
	contrasenaConfirmada = '';
	mostrarContrasena = false;
	mostrarContrasenaRepetida = false;

  constructor(private usuarioService: UsuarioService, private router: Router, private cdr: ChangeDetectorRef){}

  register(){
    this.cargando = true;
		this.error = '';

    if(this.user.password != this.contrasenaConfirmada){
			this.cargando = false;
			this.error = 'Las contraseñas no coinciden';
			this.cdr.detectChanges();
		}
		else{
			this.usuarioService.registrar(this.user).subscribe({
				// Caso de que se pase bien el objeto desde el service y se haya creado
				next: (response) => {
					console.log("Usuario creado: ", response);
					this.success = true;
					this.cargando = false;
					this.cdr.detectChanges();
				},
				// Caso que ha habido algun problema
				error: (err) => {
					this.cargando = false;
					if(err.status === 409){
						this.error = 'El email ya está registrado';
					}
					else{
						this.error = 'Error durante el registro. Vuelva a intentarlo';
					}
					this.cdr.detectChanges();
				}
			});
		}
  }

  cambiarVisibilidadContrasena(){
		this.mostrarContrasena = !this.mostrarContrasena;
	}

	cambiarVisibilidadContrasenaRepetida(){
		this.mostrarContrasenaRepetida = !this.mostrarContrasenaRepetida;
	}
}
