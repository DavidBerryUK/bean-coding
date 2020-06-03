import * as saladA from '../data/Lunch/Salad/a.json';

export default class JsonLoader {

    public static load() : Array<any> {
        return [ 
            saladA
        ];
    }
}