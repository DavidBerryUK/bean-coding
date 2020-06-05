import * as macchiatoA from '../data/Drinks/Macchiato/a.json';
import * as macchiatoB from '../data/Drinks/Macchiato/b.json';
import * as macchiatoC from '../data/Drinks/Macchiato/c.json';

export default class JsonLoaderMacchiato {

    public static load() : Array<any> {
        return [
            macchiatoA.products,
            macchiatoB.products,
            macchiatoC.products
        ];
    }
}