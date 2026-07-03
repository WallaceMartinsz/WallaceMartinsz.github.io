export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    status: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Sistema de Ordens de Serviço",
        description: "Sistema para gerenciamento de clientes, equipamentos, orçamentos e ordens de serviço, com controle de status, histórico de atendimentos e geração de relatórios.",
        technologies: ["Next.js", "Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "Swagger", "JUnit" ,"Mockito"],
        status: "Em construção",
    },
    {
        id: 2,
        title: "Processador Assíncrono de Documentos",
        description:"API para processamento assíncrono de documentos com filas, retry, Dead Letter Queue, rastreabilidade e consulta de status por lote.",
        technologies: ["Java", "Spring Boot", "RabbitMQ", "PostgreSQL", "Docker"],
        status: "Em construção",
    }
];
