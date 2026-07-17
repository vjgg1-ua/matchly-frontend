import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast } from '../../models/toast.model';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class ToastComponent implements OnInit {

  toasts = signal<Toast[]>([]);

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toastState.subscribe((toast) => {
      this.showToast(toast.type, toast.message);
    });
  }

  showToast(type: string, message: string) {

    const toast: Toast = {
      show: true,
      type,
      message
    };

    this.toasts.update(list => [...list, toast]);

    setTimeout(() => {
      this.closeToast(toast);
    }, 5000);
  }

  closeToast(toast: Toast) {

    toast.show = false;

    setTimeout(() => {
      this.toasts.update(list => list.filter(t => t !== toast));
    }, 300);
  }

}