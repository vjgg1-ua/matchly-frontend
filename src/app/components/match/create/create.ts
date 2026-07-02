import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CreateMatchRequest, MatchFormat } from '../../../models/match.model';
import { MatchService } from '../../../services/match.service';
import { DisciplineResponse, SubdisciplineResponse } from '../../../models/discipline.model';
import { DisciplineService } from '../../../services/discipline.service';

@Component({
  selector: 'app-create',
  imports: [FormsModule, RouterLink, CommonModule, ],
  templateUrl: './create.html',
  styleUrl: './create.css',
})

export class Create implements OnInit{
  match: CreateMatchRequest = {
    title: '',
    description: '',
    disciplineId: 0,
    subdisciplineId: 0,
    userId: 0,
    format: "ONE_VS_ONE",
    location: '',
    scheduledAt: '',
    maxPlayer: 0,
    maxTeams: 0,
    maxPlayersTeam: 0
  }

  loading = false;
  success = false;
  error = '';
  form: any;
  disciplines: DisciplineResponse[] = [];
  subdisciplines: SubdisciplineResponse[] = [];
  
  constructor(private matchService: MatchService, private router: Router, private cdr: ChangeDetectorRef, private disciplineService: DisciplineService){}

  ngOnInit(): void {
    this.disciplineService.getDisciplines().subscribe({
      next: data => this.disciplines = data,
      error: err => console.error(err)
    });   
  }

  createMatch(){

  }

  onDisciplineChange(){
    console.log(this.match)
    this.disciplineService.getSubdisciplineByParent(this.match.disciplineId).subscribe({
      next: data => this.subdisciplines = data,
      error: err => console.error(err)
    });
  }
}