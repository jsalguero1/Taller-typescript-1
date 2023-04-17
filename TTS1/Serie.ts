export class Serie{
    num: number;
    name:string;
    seasons:number;
    channel : string;
    
    constructor(_num:number, _name:string, _seasons:number, _channel:string){
        this.name = _name;
        this.seasons = _seasons;
        this.channel = _channel;
        this.num = _num;
    }

}