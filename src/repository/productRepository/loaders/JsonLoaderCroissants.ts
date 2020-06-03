import * as croissantsA from './../data/Bakery/Croissants/a.json';
import * as croissantsB from './../data/Bakery/Croissants/b.json';
import * as croissantsC from './../data/Bakery/Croissants/c.json';
import * as croissantsD from './../data/Bakery/Croissants/d.json';
import * as croissantsE from './../data/Bakery/Croissants/e.json';

export default class JsonLoaderCroissants {

    public static load() : Array<any> {
        return [
            croissantsA,
            croissantsB,
            croissantsC,
            croissantsD,
            croissantsE
        ];
    }

}