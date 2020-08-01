import SandwichesA from '../data/Lunch/Sandwiches/a.json';
import SandwichesB from '../data/Lunch/Sandwiches/b.json';
import SandwichesC from '../data/Lunch/Sandwiches/c.json';
import SandwichesD from '../data/Lunch/Sandwiches/d.json';
import SandwichesE from '../data/Lunch/Sandwiches/e.json';
import SandwichesF from '../data/Lunch/Sandwiches/f.json';
import SandwichesG from '../data/Lunch/Sandwiches/g.json';

export default class JsonLoaderSandwiches {

    public static load() : Array<any> {
        return [ 
            SandwichesA,
            SandwichesB,
            SandwichesC,
            SandwichesD,
            SandwichesE,
            SandwichesF,
            SandwichesG,
        ];
    }
}