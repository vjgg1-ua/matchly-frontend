import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../../../services/match.service';
import { MatchResponse } from '../../../models/match.model';

@Component({
  selector: 'app-match-details',
  imports: [],
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
        console.log(response);
        this.match = response.data;
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      }
    })

  }
}
