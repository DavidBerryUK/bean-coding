import * as cakesAndPiesA from './../data/Bakery/Cakes and Pies/a.json';
import * as cakesAndPiesB from './../data/Bakery/Cakes and Pies/b.json';
import * as cakesAndPiesC from './../data/Bakery/Cakes and Pies/c.json';
import * as cakesAndPiesD from './../data/Bakery/Cakes and Pies/d.json';
import * as cakesAndPiesE from './../data/Bakery/Cakes and Pies/e.json';

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