import espressoA from '../data/Drinks/Espresso/a.json';
import espressoB from '../data/Drinks/Espresso/b.json';
import espressoC from '../data/Drinks/Espresso/c.json';
import espressoD from '../data/Drinks/Espresso/d.json';

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