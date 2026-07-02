export type MatchFormat = 'ONE_VS_ONE' | 'TWO_VS_TWO' | 'TEAMS' | 'FREE_FOR_ALL' | 'COOPERATIVE';
export type MatchStatus = 'OPEN' | 'FULL' | 'IN_PROGRESS' | 'FINISHED' | 'CANCELLED';

export interface CreateMatchRequest {
    title: string;
    description: string;
    disciplineId: number;
    subdisciplineId: number;
    userId: number;
    format: MatchFormat;
    location: string;
    scheduledAt: string;
    maxPlayer: number;
    maxTeams: number;
    maxPlayersTeam: number;
}

export interface MatchResponse {
    id: number;
    title: string;
    description: string;
    disciplineId: number;
    subdisciplineId: number;
    userId: number;
    format: MatchFormat;
    location: string;
    scheduledAt: string;
    maxPlayer: number;
    maxTeams: number;
    maxPlayersTeam: number;
}