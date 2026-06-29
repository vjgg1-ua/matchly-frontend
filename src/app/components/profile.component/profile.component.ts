import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
 
  user: UserResponse | null = null;
  token: string | null = null;
 
  constructor(private authService: AuthService) { }
 
  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.token = this.authService.getToken();
  }
}
