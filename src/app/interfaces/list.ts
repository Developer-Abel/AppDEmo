export interface Iusuarios {
    error: boolean;
    resultados: Iusuario[];
  }


export interface Iusuario {
    id: string;
    nombre: string;
    apellidos: string;
    usuario: string;
    password: string;
    email: string;
    telefono: string;
    institucion: string;
    avatar: string;
    email_c: string;
    institucion_c: string;
    telefono_c: string;
    anualidad2017: string;
    anualidad2018: string;
    anualidad2019: string;
}