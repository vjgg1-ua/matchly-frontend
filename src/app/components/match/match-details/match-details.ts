import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../../../services/match.service';
import { MatchResponse } from '../../../models/match.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-match-details',
  imports: [DatePipe, CommonModule],
  templateUrl: './match-details.html',
  styleUrl: './match-details.css',
})

export class MatchDetails implements OnInit{
  match: MatchResponse | undefined;
  loading = signal(true);

  constructor(private route: ActivatedRoute, private matchService: MatchService){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.matchService.getMatchDetails(id).subscribe({
      next: (response) => {
        
        this.match = response.data;
        console.log(this.match);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      }
    })

  }

  statusClass(status: string | undefined): string {
    switch (status) {
        case 'OPEN': return 'status-open';
        case 'FULL': return 'status-full';
        case 'IN_PROGRESS': return 'status-in-progress';
        case 'FINISHED': return 'status-finished';
        case 'CANCELLED': return 'status-cancelled';
        default: return '';
    }
  }

  statusLabel(status: string | undefined): string {
    switch (status) {
        case 'OPEN': return 'ABIERTO';
        case 'FULL': return 'COMPLETO';
        case 'IN_PROGRESS': return 'EN CURSO';
        case 'FINISHED': return 'FINALIZADO';
        case 'CANCELLED': return 'CANCELADO';
        default: return status ?? '';
    }
  }
}
