import macchiatoA from '../data/Drinks/Macchiato/a.json';
import macchiatoB from '../data/Drinks/Macchiato/b.json';
import macchiatoC from '../data/Drinks/Macchiato/c.json';

export default class JsonLoaderMacchiato {

    public static load() : Array<any> {
        return [
            macchiatoA,
            macchiatoB,
            macchiatoC
        ];
    }
}