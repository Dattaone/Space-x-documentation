---
layout: ../layouts/LayoutMd.astro
---
# Proyecto SpaceX Launches

Este proyecto es una práctica desarrollada con Astro, TypeScript y Tailwind CSS para aprender las funcionalidades de Astro. Basado en un curso del YouTuber [midudev](https://www.youtube.com/watch?v=RB5tR_nqUEw), el proyecto utiliza la API de SpaceX para mostrar información sobre lanzamientos espaciales. Se han añadido varias funcionalidades adicionales, como paginación, un menú, el uso de archivos Markdown (MD) y personalización de estilos.

## Tecnologías Utilizadas

- 🚀**Astro**           : Framework de construcción de sitios estáticos.
- 📘**TypeScript**      : Superset de JavaScript que añade tipos estáticos.
- 💦**Tailwind CSS**    : Framework de utilidades CSS para diseñar directamente en el HTML.

## Funcionalidades Principales

### Obtención de Lanzamientos

Se utiliza la API de SpaceX para obtener datos sobre los lanzamientos. A continuación, se muestran dos funciones principales para interactuar con la API:



#### Obtener Todos los Lanzamientos

```typescript
import { type Doc, type APISpaceXResponse } from "../../src/types/api.ts";

export const getLaunches = async () => {
    try {
        const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: {},
                options: {
                    sort: {
                        date_unix: "asc",
                    },
                    limit: 120,
                },
            }),
        });
        const { docs: launches } = (await res.json()) as APISpaceXResponse;
        return launches;
    } catch (error) {
        console.log("Error al obtener los lanzamientos", error);
        return [];
    }
}
```



#### Obtener un Lanzamiento por ID

```typescript
export const getLaunchById = async ({ id }: { id: string }) => {
    try {
        const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
        const launch = (await res.json()) as Doc;
        return launch;
    } catch (error) {
        console.log("Error al obtener el lanzamiento con el id: ", id, error);
        throw error;
    }
}

```

### API de Traducción de Google

Se ha integrado la API de Google Translate para traducir los datos recibidos de la API de SpaceX.

```typescript
export const getTextTranslateSpanish = async (text: string) => {
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${text}`);
    const data = await res.json();
    return data[0][0][0];
}
```

## 🚀 Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas y archivos:

```text
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── types/
│   └── utils/
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```
## 🧞 Commands

Todos los comandos se ejecutan desde la raíz, del proyecto:

| Comando                   | Accion                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Intala las dependencias.                         |
| `npm run dev`             | Inicia el servidor de desarrollo local.          |
| `npm run build`           | Compila el sitio para producción.                |

## Contacta Conmigo

* [Mi Perfil de GitHub](https://github.com/explore)
* [Mi Cuenta de Linkedin](https://www.linkedin.com/in/giuseppe-macchiavello-arredondo-a152a52a6)

## Conclusión 

Este proyecto fue una excelente manera de aprender y practicar las funcionalidades de Astro, TypeScript y Tailwind CSS. Al interactuar con la API de SpaceX, implementando paginación y estilos personalizados, se adquiere una compresión sólida de cómo construir aplicaciones web modernas y eficientes.
