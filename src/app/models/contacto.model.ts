import { Sector } from './sector.model';
import { Grupo } from './grupo.model';
export class Contacto {

  name: String;
  lastname: String;
  email: String;
  phoneNumber: String;
  grupo: Grupo;
  sector: Sector;
  aficiones: Array <any>;

  constructor() {
    this.aficiones = [];
  }
}
