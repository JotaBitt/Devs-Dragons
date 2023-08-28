import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiroMago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoJulio = new Mago('Julio', 3, 'Fogo', 6, 4);
const magaMaria = new Mago('Maria', 9, 'Gelo', 11, 8); 
const arqueiroJota = new Arqueiro('Jota', 6, 7);
const arqueiroMagoChico = new ArqueiroMago('Chico', 8, 4, 'Ar', 8, 6);
const guerreiroGui = new Guerreiro('Guilherme', 6);

const personagens = [magoJulio, magaMaria, arqueiroJota, arqueiroMagoChico, guerreiroGui];

new PersonagemView(personagens).render();
