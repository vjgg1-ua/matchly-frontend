export interface DisciplineResponse {
    id: number;
    name: string;
}

export interface SubdisciplineResponse {
    id: number;
    name: string;
    disciplineId: number;
}