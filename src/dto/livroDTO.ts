export type LivroDTO = {
    id?: number;
    descricao: string;
    valor: number; 
    autorId: number; 
    generos?: number[];
};