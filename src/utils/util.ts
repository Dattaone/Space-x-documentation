import { type APISpaceXResponse, type Doc } from "../types/api.ts";

export const chunckArray = (arr: Doc[],size:number)=>{
    return Array.from(
        {
        length: Math.ceil(arr.length / size)
        },
        (_, i) => arr.slice(i * size, i * size + size)
    );
}