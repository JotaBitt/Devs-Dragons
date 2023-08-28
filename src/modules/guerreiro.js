import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {

    forca;
    static tipo = 'Guerreiro';
    static descricao = 'Você será esmagado pela fúria do guerreiro!';

    constructor(nome, forca) {
        super(nome);
        this.forca = forca;
    }
    
    obterInsignia() {
        if (this.level >= 7 && this.forca >= 5) {
            return 'Guerreiro furioso';
        }
        return super.obterInsignia();
    }
}