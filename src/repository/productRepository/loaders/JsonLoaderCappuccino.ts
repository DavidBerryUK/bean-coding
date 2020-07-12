import cappuccinoA from '../data/Drinks/Cappuccino/a.json';
import cappuccinoB from '../data/Drinks/Cappuccino/b.json';
import cappuccinoC from '../data/Drinks/Cappuccino/c.json';

export default class JsonLoaderCappuccino {

    public static load() : Array<any> {
        return [ 
            cappuccinoA,
            cappuccinoB,
            cappuccinoC
        ];
    }
}