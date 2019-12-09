export interface Nota {
        id?: number;
        UsuarioId: number;
        categoriaId: number;
        categoria: string;
        periodista: string;
        periodistaTwitter: string;
        periodistaFacebook: string;
        titulo: string;
        entrada: string;
        nota: string;
        fecha?: string;
}
