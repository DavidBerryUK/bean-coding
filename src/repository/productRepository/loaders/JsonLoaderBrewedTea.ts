import * as brewedTeaA from '../data/Drinks/Brewed Tea/a.json';
import * as brewedTeaB from '../data/Drinks/Brewed Tea/b.json';
import * as brewedTeaC from '../data/Drinks/Brewed Tea/c.json';
import * as brewedTeaD from '../data/Drinks/Brewed Tea/d.json';
import * as brewedTeaE from '../data/Drinks/Brewed Tea/e.json';
import * as brewedTeaF from '../data/Drinks/Brewed Tea/f.json';
import * as brewedTeaG from '../data/Drinks/Brewed Tea/g.json';
import * as brewedTeaH from '../data/Drinks/Brewed Tea/h.json';
import * as brewedTeaI from '../data/Drinks/Brewed Tea/i.json';
import * as brewedTeaJ from '../data/Drinks/Brewed Tea/j.json';

export default class JsonLoaderBrewedTea {

    public static load() : Array<any> {
        return [ 
            brewedTeaA.products,
            brewedTeaB.products,
            brewedTeaC.products,
            brewedTeaD.products,
            brewedTeaE.products,
            brewedTeaF.products,
            brewedTeaG.products,
            brewedTeaH.products,
            brewedTeaI.products,
            brewedTeaJ.products
        ];
    }
}