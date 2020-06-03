import * as muffinsAndBreadsA from '../data/Bakery/Muffins and Breads/a.json'
import * as muffinsAndBreadsB from '../data/Bakery/Muffins and Breads/b.json'
import * as muffinsAndBreadsC from '../data/Bakery/Muffins and Breads/c.json'
import * as muffinsAndBreadsD from '../data/Bakery/Muffins and Breads/d.json'
import * as muffinsAndBreadsE from '../data/Bakery/Muffins and Breads/e.json'
import * as muffinsAndBreadsF from '../data/Bakery/Muffins and Breads/f.json'
import * as muffinsAndBreadsG from '../data/Bakery/Muffins and Breads/g.json'
import * as muffinsAndBreadsH from '../data/Bakery/Muffins and Breads/h.json'
import * as muffinsAndBreadsI from '../data/Bakery/Muffins and Breads/i.json'

export default class JsonLoaderMuffinsAndBreads {

    public static load() : Array<any> {
        return [
            muffinsAndBreadsA,
            muffinsAndBreadsB,
            muffinsAndBreadsC,
            muffinsAndBreadsD,
            muffinsAndBreadsE,
            muffinsAndBreadsF,
            muffinsAndBreadsG,
            muffinsAndBreadsH,
            muffinsAndBreadsI
        ];
    }
}