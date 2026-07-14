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
  imports: [FormsModule, CommonModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})

export class Create implements OnInit{
  match: CreateMatchRequest = {
    title: '',
    description: null,
    disciplineId: 0,
    subdisciplineId: 0,
    //userId: 0,
    format: "ONE_VS_ONE",
    location: '',
    scheduledAt: '',
    maxPlayers: 0,
    maxTeams: undefined,
    maxPlayersTeam: undefined
  }

  matchFormats: { label: string, value: MatchFormat }[] = [
    { label: '1 vs 1', value: 'ONE_VS_ONE' },
    { label: '2 vs 2', value: 'TWO_VS_TWO' },
    { label: 'Equipos', value: 'TEAMS' },
    { label: 'Todos contra todos', value: 'FREE_FOR_ALL' },
    { label: 'Cooperativo', value: 'COOPERATIVE' }
  ];
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
    this.loading = true;
    this.error = '';

    const token = localStorage.getItem('token');
    //console.log(token);
    if(!token){
      this.error = 'No se detecta sesión... Vuelva a iniciar sesión';
      this.loading = false;
      return;
    }

    if (this.match.scheduledAt && !this.match.scheduledAt.includes(':00', this.match.scheduledAt.length - 3)) {
      this.match.scheduledAt = this.match.scheduledAt + ':00';
    }

    this.matchService.createMatch(this.match).subscribe({
      next: (response) => {
        this.success = true;
        this.loading = false;
        //console.log('Se ha creado correctamente: ', response);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error ?? 'Error al crear la partida';
        this.cdr.detectChanges();
      }
    })
  }

  onDisciplineChange(){
    //console.log(this.match)
    this.disciplineService.getSubdisciplineByParent(this.match.disciplineId).subscribe({
      next: data => this.subdisciplines = data,
      error: err => console.error(err)
    });
  }
}