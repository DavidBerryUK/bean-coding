import * as coffeeFrappuccinoA from '../data/Drinks/Frappuccino/Coffee Frappuccino/a.json';
import * as coffeeFrappuccinoB from '../data/Drinks/Frappuccino/Coffee Frappuccino/b.json';
import * as coffeeFrappuccinoC from '../data/Drinks/Frappuccino/Coffee Frappuccino/c.json';
import * as coffeeFrappuccinoD from '../data/Drinks/Frappuccino/Coffee Frappuccino/d.json';
import * as coffeeFrappuccinoE from '../data/Drinks/Frappuccino/Coffee Frappuccino/e.json';
import * as coffeeFrappuccinoF from '../data/Drinks/Frappuccino/Coffee Frappuccino/f.json';

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