import * as latteA from '../data/Drinks/Latte/a.json';
import * as latteB from '../data/Drinks/Latte/b.json';
import * as latteC from '../data/Drinks/Latte/c.json';

export default class JsonLoaderLatte {

    public static load() : Array<any> {
        return [
            latteA.products,
            latteB.products,
            latteC.products
        ];
    }
}