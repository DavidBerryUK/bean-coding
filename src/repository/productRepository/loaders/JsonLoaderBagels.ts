import bagelsA from '../data/Bakery/Bagels/a.json'
import bagelsB from '../data/Bakery/Bagels/b.json';
import bagelsC from '../data/Bakery/Bagels/c.json';
import bagelsD from '../data/Bakery/Bagels/d.json';
import bagelsE from '../data/Bakery/Bagels/e.json';
import bagelsF from '../data/Bakery/Bagels/f.json';
import bagelsG from '../data/Bakery/Bagels/g.json';
import bagelsH from '../data/Bakery/Bagels/h.json';
import bagelsI from '../data/Bakery/Bagels/i.json';

export default class JsonLoaderBagels {

    public static load() : Array<any> {
        const products = [
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

        return products;
    }
}