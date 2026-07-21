import { Component, Input, OnInit } from '@angular/core';
import { MatchResponse } from '../../models/match.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone: true
})
export class Card implements OnInit{
  @Input() match: MatchResponse | undefined;
  @Input() disciplineImg!: string;

constructor(){}

  ngOnInit(): void { 
    //console.log(this.disciplineImg)
  }
}
