import brewedTeaA from '../data/Drinks/Brewed Tea/a.json';
import brewedTeaB from '../data/Drinks/Brewed Tea/b.json';
import brewedTeaC from '../data/Drinks/Brewed Tea/c.json';
import brewedTeaD from '../data/Drinks/Brewed Tea/d.json';
import brewedTeaE from '../data/Drinks/Brewed Tea/e.json';
import brewedTeaF from '../data/Drinks/Brewed Tea/f.json';
import brewedTeaG from '../data/Drinks/Brewed Tea/g.json';
import brewedTeaH from '../data/Drinks/Brewed Tea/h.json';
import brewedTeaI from '../data/Drinks/Brewed Tea/i.json';
import brewedTeaJ from '../data/Drinks/Brewed Tea/j.json';

export default class JsonLoaderBrewedTea {

    public static load() : Array<any> {
        return [ 
            brewedTeaA,
            brewedTeaB,
            brewedTeaC,
            brewedTeaD,
            brewedTeaE,
            brewedTeaF,
            brewedTeaG,
            brewedTeaH,
            brewedTeaI,
            brewedTeaJ
        ];
    }
}