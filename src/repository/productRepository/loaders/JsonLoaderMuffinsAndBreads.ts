import muffinsAndBreadsA from '../data/Bakery/Muffins and Breads/a.json'
import muffinsAndBreadsB from '../data/Bakery/Muffins and Breads/b.json'
import muffinsAndBreadsC from '../data/Bakery/Muffins and Breads/c.json'
import muffinsAndBreadsD from '../data/Bakery/Muffins and Breads/d.json'
import muffinsAndBreadsE from '../data/Bakery/Muffins and Breads/e.json'
import muffinsAndBreadsF from '../data/Bakery/Muffins and Breads/f.json'
import muffinsAndBreadsG from '../data/Bakery/Muffins and Breads/g.json'
import muffinsAndBreadsH from '../data/Bakery/Muffins and Breads/h.json'
import muffinsAndBreadsI from '../data/Bakery/Muffins and Breads/i.json'

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