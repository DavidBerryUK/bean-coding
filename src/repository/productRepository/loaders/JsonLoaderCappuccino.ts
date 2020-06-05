import * as cappuccinoA from '../data/Drinks/Cappuccino/a.json';
import * as cappuccinoB from '../data/Drinks/Cappuccino/b.json';
import * as cappuccinoC from '../data/Drinks/Cappuccino/c.json';

export default class JsonLoaderCappuccino {

    public static load() : Array<any> {
        return [ 
            cappuccinoA.products,
            cappuccinoB.products,
            cappuccinoC.products
        ];
    }
}