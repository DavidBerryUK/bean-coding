import mochaA from '../data/Drinks/Mocha/a.json';
import mochaB from '../data/Drinks/Mocha/b.json';
import mochaC from '../data/Drinks/Mocha/c.json';
import mochaD from '../data/Drinks/Mocha/d.json';

export default class JsonLoaderMocha {

    public static load() : Array<any> {
        return [ 
            mochaA,
            mochaB,
            mochaC,
            mochaD
        ];
    }
}