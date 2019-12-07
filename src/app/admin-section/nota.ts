export interface Nota {
        id?: number;
        UsuarioId: number;
        categoriaId: number;
        titulo: string;
        entrada: string;
        nota: string;
        fecha?: string;
}

export interface Categoria {
        id?:number;
        nombre:string;
}