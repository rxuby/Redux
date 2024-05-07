export type PokemonResponse = {
    count: number;
    next?: string;
    previous?: string;
    results?: {
        name: string;
        url: string;
    }[];
};

export type Abilities = {
    ability: {
        name: string;
        url: string;
    }
    is_hidden:boolean;
    slot: number;
}

export type types = {
    slot: number;
    type: {
        name:string;
        url:string;
    }
}


export type PokemonType = {
    id:number;
    types:types[]
    name:string;
    abilities: Abilities[];
    base_experience: number;
    sprites:{
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        other: {
            "official-artwork":{
                front_default: string;
                front_shiny: string;
            }
        }
    }
    stats: stats[];
}

export type stats = {
    base_stat: number;
    effort: number;
    stat:{
        name:string;
        url:string;
    }
}

export type PokemonDetail = {
    id:number;
    types:{
        name:string;
        url:string;
    }[]
    name: string;
    abilities: string[];
    base_experience: number;
    image: {
        mainimg: string
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    };
    stats:{
        name: string;
        base_stat: number;
    }[];
  
    
}