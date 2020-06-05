import * as wrapsA from '../data/Lunch/Wraps/a.json';
import * as wrapsB from '../data/Lunch/Wraps/b.json';

export default class JsonLoaderWraps {

    public static load() : Array<any> {
        return [ 
            wrapsA.products,
            wrapsB.products
        ];
    }
}