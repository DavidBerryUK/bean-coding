import * as espressoA from '../data/Drinks/Espresso/a.json';
import * as espressoB from '../data/Drinks/Espresso/b.json';
import * as espressoC from '../data/Drinks/Espresso/c.json';
import * as espressoD from '../data/Drinks/Espresso/d.json';

export default class JsonLoaderEspresso {

    public static load() : Array<any> {
        return [ 
            espressoA,
            espressoB,
            espressoC,
            espressoD
        ];
    }
}