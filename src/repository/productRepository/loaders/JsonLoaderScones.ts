import sconesA from '../data/Bakery/Scones/a.json';
import sconesB from '../data/Bakery/Scones/b.json';

export default class JsonLoaderScones {

    public static load() : Array<any> {
        return [
            sconesA,
            sconesB
        ];
    }
}