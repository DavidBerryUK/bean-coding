import * as bagelsA from '../data/Bakery/Bagels/a.json'
import * as bagelsB from '../data/Bakery/Bagels/b.json';
import * as bagelsC from '../data/Bakery/Bagels/c.json';
import * as bagelsD from '../data/Bakery/Bagels/d.json';
import * as bagelsE from '../data/Bakery/Bagels/e.json';
import * as bagelsF from '../data/Bakery/Bagels/f.json';
import * as bagelsG from '../data/Bakery/Bagels/g.json';
import * as bagelsH from '../data/Bakery/Bagels/h.json';
import * as bagelsI from '../data/Bakery/Bagels/i.json';

export default class JsonLoaderBagels {

    public static load() : Array<any> {
        return [
            bagelsA,
            bagelsB,
            bagelsC,
            bagelsD,
            bagelsE,
            bagelsF,
            bagelsG,
            bagelsH,
            bagelsI
        ];
    }
}