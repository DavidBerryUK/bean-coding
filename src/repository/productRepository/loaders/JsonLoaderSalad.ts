import * as saladA from '../data/Lunch/Salad/a.json';

export default class JsonLoaderSalads {

    public static load() : Array<any> {
        return [ 
            saladA.products
        ];
    }
}