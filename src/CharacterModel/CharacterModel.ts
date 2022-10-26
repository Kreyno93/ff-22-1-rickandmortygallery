export type CharacterModel = {
    id : number;
    name : string;
    status : string;
    species : string;
    gender : string;
    image : string;
    episode : string[]
    location : {name:string, url:string}
    created: string;
}
