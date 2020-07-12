import creamFrappuccinoA from '../data/Drinks/Frappuccino/Cream Frappuccino/a.json';
import creamFrappuccinoB from '../data/Drinks/Frappuccino/Cream Frappuccino/b.json';
import creamFrappuccinoC from '../data/Drinks/Frappuccino/Cream Frappuccino/c.json';
import creamFrappuccinoD from '../data/Drinks/Frappuccino/Cream Frappuccino/d.json';
import creamFrappuccinoE from '../data/Drinks/Frappuccino/Cream Frappuccino/e.json';
import creamFrappuccinoF from '../data/Drinks/Frappuccino/Cream Frappuccino/f.json';
import creamFrappuccinoG from '../data/Drinks/Frappuccino/Cream Frappuccino/g.json';
import creamFrappuccinoH from '../data/Drinks/Frappuccino/Cream Frappuccino/h.json';
import creamFrappuccinoI from '../data/Drinks/Frappuccino/Cream Frappuccino/i.json';

export default class JsonLoaderCreamFrappuccino {

    public static load() : Array<any> {
        return [
            creamFrappuccinoA,
            creamFrappuccinoB,
            creamFrappuccinoC,
            creamFrappuccinoD,
            creamFrappuccinoE,
            creamFrappuccinoF,
            creamFrappuccinoG,
            creamFrappuccinoH,
            creamFrappuccinoI
        ];
    }
}