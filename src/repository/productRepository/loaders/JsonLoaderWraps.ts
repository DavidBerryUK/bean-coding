import wrapsA from '../data/Lunch/Wraps/a.json';
import wrapsB from '../data/Lunch/Wraps/b.json';

export default class JsonLoaderWraps {

    public static load() : Array<any> {
        return [ 
            wrapsA,
            wrapsB
        ];
    }
}