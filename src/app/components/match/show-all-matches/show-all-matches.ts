import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { Card } from "../../card/card";
import { MatchService } from '../../../services/match.service';
import { Router } from '@angular/router';
import { MatchResponse } from '../../../models/match.model';
import { CommonModule, NgIf } from '@angular/common';
import { DisciplineService } from '../../../services/discipline.service';
import { DisciplineResponse } from '../../../models/discipline.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-all-matches',
  imports: [Card, CommonModule, FormsModule],
  templateUrl: './show-all-matches.html',
  styleUrl: './show-all-matches.css',
})
export class ShowAllMatches implements OnInit{
  matches: MatchResponse[] = [];
  loading = signal(true);

  disciplinesImg: string[] = []
  disciplines: DisciplineResponse[] = [];
  disciplineSelected = "";
  filteredMatches: MatchResponse[] = [];
  selectedDate = ""
  counterMaxStackTraceCalls = 1;

  constructor(private matchService: MatchService, private router: Router, private cdr: ChangeDetectorRef, private disciplineService: DisciplineService) {}

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe({
      next: (response) => {        
        this.matches = response.data ?? [];
        this.filteredMatches = [...this.matches];
        //console.log("Matches: ", this.matches)
        this.loading.set(false);
        
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
        this.cdr.detectChanges();
      }
    })

    this.disciplineService.getDisciplines().subscribe({
      next: data => this.disciplines = data,
      error: err => console.error(err)
    }); 
  }

  showDisciplineImg(match: MatchResponse): string{
    switch(match.discipline){
      case "Pádel":
        return "/assets/disciplinas/padel.jpg"
      case "Tenis":
        return "/assets/disciplinas/tenis.jpg"
      case "Futbol":
        return "/assets/disciplinas/futbol.jpg"
      case "Baloncesto":
        return "/assets/disciplinas/baloncesto.jpg"
      case "Balonmano":
        return "/assets/disciplinas/balonmano.jpg"
      case "Volleyball":
        return "/assets/disciplinas/volley.jpg"
      case "Tenis de mesa":
        return "/assets/disciplinas/tenis_mesa.jpg"
      case "Badminton":
        return "/assets/disciplinas/badminton.jpg"
      case "Ajedrez":
        return "/assets/disciplinas/ajedrez.jpg"
      case "Rol":
        return "/assets/disciplinas/rol.jpg"
      case "Warhammer":
        return "/assets/disciplinas/w40k.jpg"
      case "Magic":
        return "/assets/disciplinas/cartas.jpg"
      case "One Piece":
        return "/assets/disciplinas/op_tcg.jpeg"
      case "Yu-Gi-Oh!":
        return "/assets/disciplinas/yugioh.jpg"
      default:
        return "";
    }
  }

  filter() {
    this.filteredMatches = this.matches.filter(match => {

      const cumpleDisciplina =
        !this.disciplineSelected ||
        match.discipline === this.disciplineSelected;

      const cumpleFecha =
        !this.selectedDate ||
        match.scheduledAt.substring(0, 10) === this.selectedDate;

      return cumpleDisciplina && cumpleFecha;
    });
  }
}
