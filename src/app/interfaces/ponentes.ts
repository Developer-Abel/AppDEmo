export interface Iponentes {
    error: boolean;
    profesores: Iponente[];
  }

export interface Iponente {
    id: string;
    nombre: string;
    curriculum: string;
    email: string;
    emailpublico: string;
    institucion: string;
    puesto: string;
    pais: string;
    pais_id: string;
    estrellas: number;
    votantes: number;
    calificacion: Icalificacion;
    foto: string;
    bandera: string;
  }

export interface Icalificacion {
    total?: any;
    votantes: string;
  }