import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
    {id:1, playingDate:new Date(2021,8,10), HomeTeam: 'Persija',
    AwayTeam:'Bali United' ,HomeScore:3, AwayScore:2, RefName:'Joko',
    notes:'Pertandingan Overtime'},
    {id:2, playingDate:new Date(2021,8,11), HomeTeam: 'Russia',
    AwayTeam:'Korea Utara' ,HomeScore:10, AwayScore:1, RefName:'Putin',
    notes:'Kim Jong Unch unch menyerah'},
    {id:3, playingDate:new Date(2021,8,12), HomeTeam: 'Taliban',
    AwayTeam:'USA' ,HomeScore:8, AwayScore:3, RefName:'Muhammad Sales',
    notes:'USA Balek Kampong'},
    {id:4, playingDate:new Date(2021,8,13), HomeTeam: 'Palestina',
    AwayTeam:'Israel' ,HomeScore:2, AwayScore:3, RefName:'Yahudi',
    notes:'Pertandingan Tidak Seimbang'},
    {id:5, playingDate:new Date(2021,8,14), HomeTeam: 'Indonesia',
    AwayTeam:'China' ,HomeScore:3, AwayScore:2, RefName:'Jokowi',
    notes:'Indonesia Mempertahankan kedaulatan'}
]

export const TEAMS:Team[]= [
    {id:1, name:'Persija', type:'Over 30'},
    {id:2, name:'Russia', type:'Over 30'},
    {id:3, name:'Taliban', type:'Over 30'},
    {id:4, name:'Palestina', type:'Over 30'},
    {id:5, name:'Indonesia', type:'Over 30'},
]

