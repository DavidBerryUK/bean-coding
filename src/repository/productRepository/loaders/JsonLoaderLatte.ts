import latteA from '../data/Drinks/Latte/a.json';
import latteB from '../data/Drinks/Latte/b.json';
import latteC from '../data/Drinks/Latte/c.json';

export default class JsonLoaderLatte {

    public static load() : Array<any> {
        return [
            latteA,
            latteB,
            latteC
        ];
    }
}