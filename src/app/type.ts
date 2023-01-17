export interface Curso {
    banner: string,
    id: number,
    url: string,
    nombre: string,
    tipo: string,
    costo: number,
    descripcion: string,
    requisitos: string,
    aprendizaje: { tema: string, subtemas: string[] }[],
    inicio: string,
    dias: string[],
    hora: string,
    pdf?: string,
    video?: string,
    nombre_doc: string
}

export let cursos: Curso[] = [
    {
        banner: "https://learn.microsoft.com/es-es/training/achievements/track-azure-databricks-experiments-in-azure-machine-learning-social.png",
        nombre: "DATABRICKS",
        id: 1,
        url: "curso-databricks",
        tipo: "Curso",
        costo: 330,
        descripcion: "Databricks se ha convertido en una de las plataformas más importantes compatible con Azure, AWS y Google Cloud. Esto hace que Databricks sea una de las habilidades más demandadas para los ingenieros de datos y unas de las habilidades más valiosas hoy en día.",
        requisitos: "En esta asignatura se requiere tener ganas de aprender y tener claro el alcance del curso.",
        aprendizaje: [
            {
                tema: "DATABRICKS CON AZURE",
                subtemas: [
                    "Introducción a Databricks with Azure ",
                    "Azure Databricks cluster ",
                    "Azure Databricks notebooks ",
                    "Azure CLI"
                ]
            },
            {
                tema: "INGESTA DE DATOS",
                subtemas: [
                    "Ingesta de datos vs ETL",
                    "Ingesta de datos- JSON",
                    "Ingesta de datos - CSV",
                    "Ingesta de datos de múltiples archivos"
                ]
            }
        ],
        inicio: "20/08/2000",
        dias: [
            "Lunes",
            "Miercoles",
            "Sábados"
        ],
        hora: "19:00-22:00",
        nombre_doc: "Miguel Huayhua"
    }
]