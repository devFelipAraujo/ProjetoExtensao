export class Cliente {
    cnpj: number;
    RazaoSocial: string;
    NomeFantasia: string;
    NomePosto: string;

    constructor (cnpj: number, RazaoSocial: string, NomeFantasia: string, NomePosto: string){
        this.NomeFantasia = NomeFantasia;
        this.RazaoSocial = RazaoSocial;
        this.cnpj = cnpj;
        this.NomePosto = NomePosto;
    }
}