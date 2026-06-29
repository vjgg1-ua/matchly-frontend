import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  user: LoginRequest = {
    email: '',
    password: ''
  };

  //Estado del componente
  cargando = false;
  error = '';
  success = false;
  form: any;
   
  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) { }
 
  login(): void {
    this.cargando =  true;
		this.error = '';
 
    this.authService.login(this.user).subscribe({
      next: (response) => {
        console.log("Usuario correcto: ", response);
				this.success = true;
				this.cargando = false;
        this.router.navigate(['/profile']);

        this.cdr.detectChanges();
      },
      error: (err) => {
        this.cargando = false;
        if(err.error?.status === "403"){
          this.error = 'El usuario o contraseña no son válidos';
        }
        else{
          this.error = 'Se ha producido un problema durante el inicio de sesión';
        }
        this.cdr.detectChanges();
      }
    });
  }
}
