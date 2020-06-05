import * as creamFrappuccinoA from '../data/Drinks/Frappuccino/Cream Frappuccino/a.json';
import * as creamFrappuccinoB from '../data/Drinks/Frappuccino/Cream Frappuccino/b.json';
import * as creamFrappuccinoC from '../data/Drinks/Frappuccino/Cream Frappuccino/c.json';
import * as creamFrappuccinoD from '../data/Drinks/Frappuccino/Cream Frappuccino/d.json';
import * as creamFrappuccinoE from '../data/Drinks/Frappuccino/Cream Frappuccino/e.json';
import * as creamFrappuccinoF from '../data/Drinks/Frappuccino/Cream Frappuccino/f.json';
import * as creamFrappuccinoG from '../data/Drinks/Frappuccino/Cream Frappuccino/g.json';
import * as creamFrappuccinoH from '../data/Drinks/Frappuccino/Cream Frappuccino/h.json';
import * as creamFrappuccinoI from '../data/Drinks/Frappuccino/Cream Frappuccino/i.json';

export default class JsonLoaderCreamFrappuccino {

    public static load() : Array<any> {
        return [
            creamFrappuccinoA.products,
            creamFrappuccinoB.products,
            creamFrappuccinoC.products,
            creamFrappuccinoD.products,
            creamFrappuccinoE.products,
            creamFrappuccinoF.products,
            creamFrappuccinoG.products,
            creamFrappuccinoH.products,
            creamFrappuccinoI.products
        ];
    }
}