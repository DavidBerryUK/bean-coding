import coffeeFrappuccinoA from '../data/Drinks/Frappuccino/Coffee Frappuccino/a.json';
import coffeeFrappuccinoB from '../data/Drinks/Frappuccino/Coffee Frappuccino/b.json';
import coffeeFrappuccinoC from '../data/Drinks/Frappuccino/Coffee Frappuccino/c.json';
import coffeeFrappuccinoD from '../data/Drinks/Frappuccino/Coffee Frappuccino/d.json';
import coffeeFrappuccinoE from '../data/Drinks/Frappuccino/Coffee Frappuccino/e.json';
import coffeeFrappuccinoF from '../data/Drinks/Frappuccino/Coffee Frappuccino/f.json';

export default class JsonLoaderCoffeeFrappuccino {

    public static load() : Array<any> {
        return [ 
            coffeeFrappuccinoA,
            coffeeFrappuccinoB,
            coffeeFrappuccinoC,
            coffeeFrappuccinoD,
            coffeeFrappuccinoE,
            coffeeFrappuccinoF
        ];
    }
}