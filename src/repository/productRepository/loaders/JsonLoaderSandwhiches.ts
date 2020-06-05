import * as sandwhichesA from '../data/Lunch/Sandwhiches/a.json';
import * as sandwhichesB from '../data/Lunch/Sandwhiches/b.json';
import * as sandwhichesC from '../data/Lunch/Sandwhiches/c.json';
import * as sandwhichesD from '../data/Lunch/Sandwhiches/d.json';
import * as sandwhichesE from '../data/Lunch/Sandwhiches/e.json';
import * as sandwhichesF from '../data/Lunch/Sandwhiches/f.json';
import * as sandwhichesG from '../data/Lunch/Sandwhiches/g.json';
import * as sandwhichesH from '../data/Lunch/Sandwhiches/h.json';

export default class JsonLoaderSandwhiches {

    public static load() : Array<any> {
        return [ 
            sandwhichesA.products,
            sandwhichesB.products,
            sandwhichesC.products,
            sandwhichesD.products,
            sandwhichesE.products,
            sandwhichesF.products,
            sandwhichesG.products,
            sandwhichesH.products
        ];
    }
}