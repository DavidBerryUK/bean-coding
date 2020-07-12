import cakesAndPiesA from './../data/Bakery/Cakes and Pies/a.json';
import cakesAndPiesB from './../data/Bakery/Cakes and Pies/b.json';
import cakesAndPiesC from './../data/Bakery/Cakes and Pies/c.json';
import cakesAndPiesD from './../data/Bakery/Cakes and Pies/d.json';
import cakesAndPiesE from './../data/Bakery/Cakes and Pies/e.json';

export default class JsonLoaderCakesAndPies {

    public static load() : Array<any> {
        return [
            cakesAndPiesA,
            cakesAndPiesB,
            cakesAndPiesC,
            cakesAndPiesD,
            cakesAndPiesE
        ];
    }
}