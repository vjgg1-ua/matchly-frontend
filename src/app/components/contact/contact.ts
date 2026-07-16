import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactRequest } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact implements OnInit{
  contactForm: any;
  loading = false;
  success = false;
  error = '';

  contact: ContactRequest = {
    email: '',
    subject: '',
    body: ''
  }

  constructor(private contactService: ContactService, private cdr: ChangeDetectorRef){}

  //cargar correo del usuario para cuando envíe el mensaje
  ngOnInit(): void {
    const local = localStorage.getItem("current_user");

    if(local){
      const user = JSON.parse(local);

      this.contact.email = user.email;
      console.log(this.contact);
    }
  }

  sendMessage(){
    this.loading = true;
    this.error = '';
    const token = localStorage.getItem('token');

    if(!token){
      this.error = 'No se detecta sesión... Vuelva a iniciar sesión';
      this.loading = false;
      return;
    }

    if(this.contact.subject.length <= 0 || this.contact.body.length <= 0){
      this.loading = false;
      this.error = 'No alcanza la longitud mínima para enviar el correo';
      this.success = false;
    }

    this.contactService.sendMessageContact(this.contact).subscribe({
      next: (response) => {
        this.success = true;
        this.error = '';
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error ?? 'Error al enviar mensaje. Vuelva a iniciar sesión';
        this.cdr.detectChanges();
      }
    })
  }
}
