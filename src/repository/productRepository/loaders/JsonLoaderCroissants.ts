import croissantsA from './../data/Bakery/Croissants/a.json';
import croissantsB from './../data/Bakery/Croissants/b.json';
import croissantsC from './../data/Bakery/Croissants/c.json';
import croissantsD from './../data/Bakery/Croissants/d.json';
import croissantsE from './../data/Bakery/Croissants/e.json';

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