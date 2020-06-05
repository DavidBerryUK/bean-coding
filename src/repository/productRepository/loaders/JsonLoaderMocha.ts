import * as mochaA from '../data/Drinks/Mocha/a.json';
import * as mochaB from '../data/Drinks/Mocha/b.json';
import * as mochaC from '../data/Drinks/Mocha/c.json';
import * as mochaD from '../data/Drinks/Mocha/d.json';

export default class JsonLoaderMocha {

    public static load() : Array<any> {
        return [ 
            mochaA.products,
            mochaB.products,
            mochaC.products,
            mochaD.products
        ];
    }
}