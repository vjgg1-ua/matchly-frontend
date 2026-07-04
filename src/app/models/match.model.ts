export type MatchFormat = 'ONE_VS_ONE' | 'TWO_VS_TWO' | 'TEAMS' | 'FREE_FOR_ALL' | 'COOPERATIVE';
export type MatchStatus = 'OPEN' | 'FULL' | 'IN_PROGRESS' | 'FINISHED' | 'CANCELLED';

export interface CreateMatchRequest {
    title: string;
    description?: string | null;
    disciplineId: number;
    subdisciplineId: number;
    //userToken: number; //En lugar de userId pasar mejor JWT y back verifique
    format: MatchFormat;
    location: string;
    scheduledAt: string;
    maxPlayers: number;
    maxTeams?: number | undefined;
    maxPlayersTeam?: number | undefined;
}

export interface MatchResponse {
    id: number;
    title: string;
    description?: string;
    disciplineId: number;
    subdisciplineId: number;
    organizer: number;
    format: MatchFormat;
    status: MatchStatus;
    location: string;
    scheduledAt: string;
    maxPlayer: number;
    maxTeams?: number | undefined;
    maxPlayersTeam?: number | undefined;
}