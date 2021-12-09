import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Ranking {
    TeamName: string,
    GamesPlayed: number,
    wins : number,
    Ties : number,
    GoalsFor : number,
    GoalAgaints : number
}