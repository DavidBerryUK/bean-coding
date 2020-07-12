import sandwhichesA from '../data/Lunch/Sandwhiches/a.json';
import sandwhichesB from '../data/Lunch/Sandwhiches/b.json';
import sandwhichesC from '../data/Lunch/Sandwhiches/c.json';
import sandwhichesD from '../data/Lunch/Sandwhiches/d.json';
import sandwhichesE from '../data/Lunch/Sandwhiches/e.json';
import sandwhichesF from '../data/Lunch/Sandwhiches/f.json';
import sandwhichesG from '../data/Lunch/Sandwhiches/g.json';

export default class JsonLoaderSandwhiches {

    public static load() : Array<any> {
        return [ 
            sandwhichesA,
            sandwhichesB,
            sandwhichesC,
            sandwhichesD,
            sandwhichesE,
            sandwhichesF,
            sandwhichesG,
        ];
    }
}