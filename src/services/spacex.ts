import { type Doc, type APISpaceXResponse } from "../../src/types/api.ts";
export const getLaunches = async () => {
    
    try{
        const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: {},
            options: {
              sort: {
                date_unix: "desc",
              },
              limit: 500,
            },
          }),
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const { docs: launches } = (await res.json()) as APISpaceXResponse;
        const launchesWithImages = launches.filter(launch => launch.links?.patch?.small)
        return launchesWithImages;
    }catch(error){
        console.log("Error al obtener los lanzamientos",error);
        return [];
    }

}    

export const getLaunchById = async ({id} : { id: string }) => {
    try{
        const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
        const launch = (await res.json()) as Doc;
        return launch
    }catch(error){
        console.log("Error al obtener el lanzamiento con el id: ",id,error);
        throw error;
    }
}