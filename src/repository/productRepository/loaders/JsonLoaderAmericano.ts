import americanoA from '../data/Drinks/Americano/a.json';
import americanoB from '../data/Drinks/Americano/b.json';

export default class JsonLoaderAmericano {

    public static load() : Array<any> {
        return [ 
            americanoA,
            americanoB
        ];        
    }
}