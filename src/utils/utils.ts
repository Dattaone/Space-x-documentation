import { type Doc } from "../types/api.ts";
import { getLaunches} from "../services/spacex.ts"

let launchesCache : Doc[] | null;

const chunkArray = (arr: Doc[],size:number)=>{
    return Array.from(
        {
        length: Math.ceil(arr.length / size)
        },
        (_, i) => arr.slice(i * size, i * size + size)
    );
}

//1. Obtener la cantidad de paginas

export const getTotalPages = async (pageSize:number) : Promise<number>  => {
    if(!launchesCache){
        launchesCache = await getLaunches();
    }
    return Math.ceil(launchesCache.length / pageSize);
}

//2. Obtener los launches por pagina

export const getLaunchesByPage = async(page: number, pageSize:number) => {
    if(!launchesCache){
        launchesCache = await getLaunches();
    }
    return chunkArray(launchesCache, pageSize)[page-1];
}